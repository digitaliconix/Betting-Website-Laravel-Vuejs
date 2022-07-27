<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientPackageOrder;
use App\Models\Configuration;
use App\Models\Package;
use Illuminate\Http\Request;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PayPalPaymentController extends Controller
{
    public function createTransaction()
    {
        return view('transaction');
    }

    /**
     * process transaction.
     *
     * @return \Illuminate\Http\Response
     */
    public function processTransaction(Request $request)
    {
        session(['transaction_data' => $request->all()]);

        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();

        $package = Package::findOrFail($request->package_id);


        $response = $provider->createOrder([
            "intent" => "CAPTURE",
            "application_context" => [
                "return_url" => route('successTransaction'),
                "cancel_url" => route('cancelTransaction'),
            ],
            "purchase_units" => [
                0 => [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => "".$package->price
                    ]
                ]
            ]
        ]);

        if (isset($response['id']) && $response['id'] != null) {

            // redirect to approve href
            foreach ($response['links'] as $links) {
                if ($links['rel'] == 'approve') {
                    return redirect()->away($links['href']);
                }
            }

            return redirect()
                ->route('createTransaction')
                ->with('error', 'Something went wrong.');

        } else {
            return redirect()
                ->route('createTransaction')
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }

    /**
     * success transaction.
     *
     * @return \Illuminate\Http\Response
     */
    public function successTransaction(Request $request)
    {
        $provider = new PayPalClient;

        $paypal_mode = Configuration::where('key','paypal_mode')->first();
        $paypal_client_id = Configuration::where('key','paypal_client_id')->first();
        $paypal_client_secret = Configuration::where('key','paypal_client_secret')->first();
        $paypal_live_app_id = Configuration::where('key','paypal_live_app_id')->first();

        $config = [
            'mode'    => $paypal_mode->value,
            'sandbox' => [
                'client_id'         => $paypal_client_id->value,
                'client_secret'     => $paypal_client_secret->value,
                'app_id'            => 'APP-80W284485P519543T',
            ],
            'live' => [
                'client_id'         => $paypal_client_id->value,
                'client_secret'     => $paypal_client_secret->value,
                'app_id'            => $paypal_live_app_id->value,
            ],
            'payment_action' => env('PAYPAL_PAYMENT_ACTION', 'Sale'), // Can only be 'Sale', 'Authorization' or 'Order'
            'currency'       => env('PAYPAL_CURRENCY', 'USD'),
            'notify_url'     => env('PAYPAL_NOTIFY_URL', ''), // Change this accordingly for your application.
            'locale'         => env('PAYPAL_LOCALE', 'en_US'), // force gateway language  i.e. it_IT, es_ES, en_US ... (for express checkout only)
            'validate_ssl'   => env('PAYPAL_VALIDATE_SSL', true), // Validate SSL when creating api client.
        ];

        $provider->setApiCredentials($config);
        $provider->getAccessToken();
        $response = $provider->capturePaymentOrder($request['token']);

        if (isset($response['status']) && $response['status'] == 'COMPLETED') {

            $data = request()->session()->get('transaction_data');

            $model = new ClientPackageOrder();
            $model->fill($data);
            $model->client_id = auth('client')->user()->id;
            $model->paypal_response = $response;
            $model->save();

            $package = Package::findOrFail($data['package_id']);

            $client_data = Client::findOrFail(auth('client')->user()->id);
            $client_data->wallet = $client_data->wallet + (int)$package->coins;
            $client_data->save();

            session(['transaction_data' => null]);

            return redirect('/checkout/'.$model->package_id)
                ->with('success', 'Transaction complete.');
        } else {
            return redirect()
                ->back()
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }

    /**
     * cancel transaction.
     *
     * @return \Illuminate\Http\Response
     */
    public function cancelTransaction(Request $request)
    {
        return redirect()
            ->back()
            ->with('error', $response['message'] ?? 'You have canceled the transaction.');
    }
}
