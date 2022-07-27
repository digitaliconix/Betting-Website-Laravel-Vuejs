<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Client;
use App\Models\ClientBetting;
use App\Models\ClientOrder;
use App\Models\ClientPackageOrder;
use App\Models\Competition;
use App\Models\GameCategory;
use App\Models\Package;
use App\Models\RefinanceBlog;
use App\Models\Service;
use App\Models\ShopProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
//    public function __construct()
//    {
//        $this->middleware('auth');
//    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('pages.home');
    }

    public function about_us()
    {
        return view('pages.about-us');
    }

    public function contact_us()
    {
        return view('pages.contact-us');
    }

    public function privacy_policy()
    {
        return view('pages.privacy-policy');
    }

    public function terms_and_condition()
    {
        return view('pages.terms-and-condition');
    }

    public function packages()
    {
        $data = Package::where('status', 1)->get();
        return view('pages.packages', compact('data'));
    }


//    public function prizes()
//    {
//        return view('pages.prizes');
//    }

    public function prizes(Request $request)
    {


//        <a id="btn-login" href="#" class="btn place-order-btn  getBtn ml-0">20k POINTS</a>
        $results = ShopProduct::orderBy('id')->paginate(5);
        $products = '';
        if ($request->ajax()) {
            foreach ($results as $result) {
                $products .= '<div class="col-md-4"><div class="checkout-form-wrapper bna-league-wrapper"><div class="inner-box-match"><div style="text-align: center;"><div class="bna-league-logo-wrapper"><img src="/frontend/assets/front/images/mlb-blue.png" alt="team-logo"><img src="/attachment/shop_product/' . $result->thumbnail . '" class="price-img" alt="team-logo"><h2>' . $result->title . '</h2></div></div></div><div style="margin-top:10px" class="form-group"><div style="padding: 0px !important; text-align: center;" class="col-sm-12 controls"><p class="btn place-order-btn  getBtn ml-0"><a href="/product-checkout/' . $result->slug . '">' . $result->unit_price . ' COINS</a></p></div></div></div></div>';
            }
            return $products;
        }
        return view('pages.prizes');
    }

    public function checkout($id)
    {
        $package = Package::findOrFail($id);
        return view('pages.checkout', compact('package'));
    }

    public function product_checkout($slug)
    {
        $product = ShopProduct::where('slug', $slug)->first();
        return view('pages.product_checkout', compact('product'));
    }

    public function thankyou($id)
    {

        $order = ClientOrder::with('product')->where('order_number', $id)->first();
        return view('pages.thankyou', compact('order'));
    }

    public function product_checkout_post(Request $request)
    {
        $user = Client::find(auth('client')->user()->id);
        $product = ShopProduct::findOrFail($request->product_id);
        if ((int)$user->wallet < (int)$product->unit_price) {
            return redirect()->back()->with('error', 'You dont have enough coins to purchase ' . $product->title);
        }
        $model = new ClientOrder();
        DB::transaction(function () use ($request, $user, $model) {
            $product = ShopProduct::findOrFail($request->product_id);
            $model->fill($request->all());
            $model->order_number = uniqid("ON");
            $model->client_id = auth('client')->user()->id;
            $model->save();
            $user->wallet = $user->wallet - (int)$product->unit_price;
            $user->save();
        });
        return redirect()->route('thankyou', ['id' => $model->order_number]);
    }

    public function game_category(Request $request, $slug)
    {
        $competition = null;
        $game_category = GameCategory::where('slug', $slug)->first();
        $bit_slip_data = [];
        if (auth('client')->check()) {
            $bit_slip_data = ClientBetting::with('competition')
                ->where('client_id', auth('client')->user()->id)
                ->whereNull('bet_status')
                ->whereHas('competition', function ($q) use ($game_category) {
                    $q->where('game_category_id', $game_category->id);
                })
                ->orderBy('created_at', 'desc')->get();
        }

        $competition = Competition::with('team_1', 'team_2')
            ->orderBy('completed', 'asc')
            ->orderBy('start_time', 'asc')
            ->whereDate('start_time',date('Y-m-d'))
            ->where('game_category_id', $game_category->id)
            ->get();

//        $html = '<div style="margin-top:10px" class="form-group"> <div id="bet-now-0" style="padding: 0px !important; text-align: center;" class="col-sm-12 controls">' . auth('client')->check() ?
//                    '<span class="btn btn-danger btn-block">Login First</span>'
//                    . ' : ' . $game->completed == 1 ?
//                        '<span class="btn btn-danger btn-block disabled">Expired</span>'
//                        : '.<a data-toggle="modal" data-target="#bet-modal" href="#bet-modal" class="btn place-order-btn getBtn ml-0 btn-login bet trigger-bet-now" data-competition-id="' . $game->id . '" data-team="' . $game . '">BET NOW!</a>.' . '
//                </div>';


//        $a = '<div style="margin-top:10px" class="form-group"> <div id="bet-now-0" style="padding: 0px !important; text-align: center;" class="col-sm-12 controls">'.auth('client')->check() ? '<span class="btn btn-danger btn-block">Login First</span>' : ''. $game->completed == 1 ? '<span class="btn btn-danger btn-block disabled">Expired</span>' : '<a data-toggle="modal" data-target="#bet-modal" href="#bet-modal" class="btn place-order-btn getBtn ml-0 btn-login bet trigger-bet-now" data-competition-id="' . $game->id . '" data-team="' . $game . '">BET NOW!</a>'.'';
        $html = '';
        if ($request->ajax()) {
            return response()->json(['competition'=> $competition,'game_category' => $game_category]);
//            foreach ($competition as $game) {
//                $html .= '<div class="checkout-form-wrapper bna-league-wrapper">
//                            <div class="inner-box-match">
//                                <div class="login-title">
//                                    <h1 class="competition-detail" data-id="93">
//                                        <a href="">' . $game_category->title . '</a>
//                                        </h1>
//                                </div>
//                                <div style="text-align: center;" class="row">
//                                    <div class="col-md-4">
//                                            <div class="bna-league-logo-wrapper">
//                                                <img src="/attachment/team/' . $game->team_1->thumbnail . '" alt="team-logo">
//                                                <h2>' . $game->team_1->title . '</h2>
//                                            </div>
//                                            <div class="small-table-left-points">
//                                                <span class="right-points" id="team1-score-0">' . $game->team1_score . '</span>
//                                            </div>
//                                        </div>
//                                    <div class="col-md-4">
//                                        <div class="comming-match-vs">
//                                            <div class="broder-div">
//                                                <h5>VS</h5>
//                                            </div>
//                                            <section>
//                                                <div class="wrapper">
//                                                    <div class="countdown" id="countdown-0"></div>
//                                                </div>
//                                            </section>
//                                        </div>
//                                    </div>
//                                    <div class="col-md-4">
//                                    <div class="bna-league-logo-wrapper">
//                                        <img src="/attachment/team/' . $game->team_2->thumbnail . '" alt="team-logo">
//                                            <h2>' . $game->team_2->title . '</h2>
//                                    </div>
//                                    <div class="small-table-left-points">
//                                        <span class="right-points" id="team2-score-0">' . $game->team2_score . '</span>
//                                    </div>
//                                </div>
//                                </div>
//                                <div style="margin-top:10px" class="form-group">
//                                    <div id="bet-now-0" style="padding: 0px !important; text-align: center;" class="col-sm-12 controls">';
//                if (!auth('client')->check()) {
//                    $html .= '<span class="btn btn-danger btn-block">Login First</span>';
//                } else {
//                    if ($game->completed == 1) {
//                        $html .= '<span class="btn btn-danger btn-block disabled">Expired</span>';
//                    } else {
//                        $html .= '<a data-toggle="modal" data-target="#bet-modal" href="#bet-modal" class="btn place-order-btn getBtn ml-0 btn-login bet trigger-bet-now" data-team="'.str_replace('"',"'",$game).'" data-competition-id="' . $game->id . '">BET NOW!</a>';
//                    }
//                }
//
//                $html .= '</div></div></div></div>';
//            }
//            return $html;
        }

        return view('pages.game_category', compact('competition', 'game_category', 'bit_slip_data'));
    }

    public function dashboard()
    {
        $title = 'Dashboard';
        $pending_count = ClientBetting::where('client_id', auth()->user()->id)->where('status', 0)->count();
        $completed_count = ClientBetting::where('client_id', auth()->user()->id)->where('status', 1)->count();
        $data = Client::findOrFail(auth('client')->user()->id);
        return view('dashboard.index', compact('title', 'data', 'pending_count', 'completed_count'));
    }

    public function profile()
    {
        $title = 'Profile';
        $data = Client::findOrFail(auth()->user()->id);
        return view('dashboard.profile', compact('data', 'title'));
    }

    public function my_bets()
    {
        $title = 'My Bets';
        $status = '';
        $data = ClientBetting::with('competition', 'team.game_category')
            ->when(request('status'), function ($q) use ($status) {
                switch (request('status')) {
                    case('pending'):
                        $status = 0;
                        break;
                    case('completed'):
                        $status = 1;
                        break;
                }

                $q->where('status', $status);

            })
            ->where('client_id', auth()->user()->id)
            ->get();
        return view('dashboard.my-bets', compact('data', 'title'));
    }

    public function my_transactions()
    {
        $title = 'My Transactions';
        $data = ClientPackageOrder::with('package')->where('client_id', auth()->user()->id)->get();
        return view('dashboard.my-transactions', compact('data', 'title'));
    }

    public function my_orders()
    {
        $title = 'My Orders';
        $data = ClientOrder::with('product')->where('client_id', auth()->user()->id)->get();
        return view('dashboard.my-orders', compact('data', 'title'));
    }

    public function profile_update(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:client_users,email,' . auth('client')->user()->id,
            'name' => 'required',
        ]);
        $model = Client::findOrFail($request->user()->id);
        $model->fill($request->all());
        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photo_filename = time() . $photo->getClientOriginalName();
            upload('local', $photo, '/images/profile/', $photo_filename);
            $model->profile = $photo_filename;
        }
        $model->save();
        return redirect()->back()->with("message", "Profile Update Successfully");

    }

    public function showAttachment($folder, $filename)
    {
        $path = storage_path() . "/app/" . $folder . "/" . $filename;
        if (!File::exists($path)) {
            abort(404);
        }

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);
        return $response;
    }

    public function showAttachment2($folder, $filename)
    {
        $path = storage_path() . "/app/public/" . $folder . "/" . $filename;
        if (!File::exists($path)) {
            abort(404);
        }

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);
        return $response;
    }

}
