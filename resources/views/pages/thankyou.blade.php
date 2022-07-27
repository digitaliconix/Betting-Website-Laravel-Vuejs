@extends('layouts.master')

@section('content')

    <div class="container-fluid inner-pages-banner about-us-banner">
        <div class="row">
            <div class="col-md-12">
                <div class="inner-banner-txt">
                    <h2>THANK YOU</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Header Heading Section End here -->

    <!--Login Section Start here -->
    <div class="container-fluid login-wrapper packages-wrapper">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Thank you for your order</div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th colspan="2" class="text-center"  scope="col">Order Detail </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td scope="row">Order Number</td>
                                    <td>{{$order->order_number}}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Order Date</td>
                                    <td>{{\Carbon\Carbon::parse($order->created_at)->format('M d Y')}}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Product Name</td>
                                    <td>{{$order->product->title}}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Product Coin</td>
                                    <td>{{$order->product->unit_price}}</td>
                                </tr>

                                <tr>
                                    <td scope="row">Shipping Address</td>
                                    <td>{{$order->address}}</td>
                                </tr>


                                <tr>
                                    <td scope="row">Remaining Coins</td>
                                    <td>{{auth('client')->user()->wallet}}</td>
                                </tr>


                                </tbody>


                            </table>
                            <br>
                            <a href="/home" class="btn btn-link p-0 m-0 align-baseline">Go to profile</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
