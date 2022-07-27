@extends('layouts.master')

@section('content')

    <div class="container-fluid inner-pages-banner about-us-banner">
        <div class="row">
            <div class="col-md-12">
                <div class="inner-banner-txt">
                    <h2>PACKAGES</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Header Heading Section End here -->

    <!--Login Section Start here -->
    <div class="container-fluid login-wrapper packages-wrapper">
        <div class="container">
            <div class="main-packg-heading">
                <h2>PACKAGES</h2>
            </div>
            <div class="row Packages-row">
                <table style="width: 50%; margin: auto;">
                    <tbody class="packageTable">
                    <tr style="border: none;">

                        <th style="background-color: transparent !important; visibility: hidden; display: none;"></th>
                        @php
                        $colors = ['#ebc900','#af1b13','#13af3a','#2061a9']
                        @endphp
                        @foreach($data as $row)
                        <th style="background: {{$colors[$loop->index]}}; width: 18%; font-size: 20px; color: white; padding: 15px 40px; text-align: center; border-top-left-radius: 10px;     text-transform: uppercase;">
                            {{$row->title}} <span class="pkg-price">${{$row->price}}</span> {{$row->coins}} coins
                        </th>
                        @endforeach
{{--                        <th style="background: #af1b13; width: 18%; font-size: 20px; color: white; padding: 15px 40px; text-align: center; border-top-left-radius: 10px;     text-transform: uppercase;">--}}
{{--                            Business Plan <span class="pkg-price">$9.99</span> 150 coins--}}
{{--                        </th>--}}
{{--                        <th style="background: #13af3a; width: 18%; font-size: 20px; color: white; padding: 15px 40px; text-align: center; border-top-left-radius: 10px;     text-transform: uppercase;">--}}
{{--                            Enterprices Plan <span class="pkg-price">$19.99</span> 500 coins--}}
{{--                        </th>--}}
{{--                        <th style="background: #2061a9; width: 18%; font-size: 20px; color: white; padding: 15px 40px; text-align: center; border-top-left-radius: 10px;     text-transform: uppercase;">--}}
{{--                            Owner <span class="pkg-price">$50</span> 800 coins--}}
{{--                        </th>--}}
                    </tr>
                    <tr class="bgBlank" style="border: none !important;">
                        <td style="visibility: hidden; border: none;     display: none;"></td>
                        @foreach($data as $row)
                        <td style="padding: 0px !important; border-bottom-left-radius: 10px; border: none;"><a
                                href="/checkout/{{$row->id}}"
                                style="border-bottom-left-radius: 10px;;padding: 12px 15px;background-color: {{$colors[$loop->index]}}; display: block; font-weight: 500;text-transform: uppercase;"
                                data-package-id=1 data-url="https://win375.com/user/1/checkout" class="buy-now">BUY
                                NOW</a></td>
                        @endforeach
{{--                        <td style="padding: 0px !important; border-bottom-left-radius: 10px; border: none;"><a--}}
{{--                                href="buy.html" onclick="return false"--}}
{{--                                style="border-bottom-left-radius: 10px;;padding: 12px 15px;background-color: #af1b13; display: block; font-weight: 500;text-transform: uppercase;"--}}
{{--                                data-package-id=2 data-url="https://win375.com/user/2/checkout" class="buy-now">BUY--}}
{{--                                NOW</a></td>--}}
{{--                        <td style="padding: 0px !important; border-bottom-left-radius: 10px; border: none;"><a--}}
{{--                                href="buy.html" onclick="return false"--}}
{{--                                style="border-bottom-left-radius: 10px;;padding: 12px 15px;background-color: #13af3a; display: block; font-weight: 500;text-transform: uppercase;"--}}
{{--                                data-package-id=3 data-url="https://win375.com/user/3/checkout" class="buy-now">BUY--}}
{{--                                NOW</a></td>--}}
{{--                        <td style="padding: 0px !important; border-bottom-left-radius: 10px; border: none;"><a--}}
{{--                                href="buy.html" onclick="return false"--}}
{{--                                style="border-bottom-left-radius: 10px;;padding: 12px 15px;background-color: #2061a9; display: block; font-weight: 500;text-transform: uppercase;"--}}
{{--                                data-package-id=10 data-url="https://win375.com/user/10/checkout" class="buy-now">BUY--}}
{{--                                NOW</a></td>--}}
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

@endsection
