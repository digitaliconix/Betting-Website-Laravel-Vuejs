@extends('layouts.master')

@section('content')

    <div class="container-fluid inner-pages-banner about-us-banner contact-page-banner">
        <div class="row">
            <div class="col-md-12">
                <div class="inner-banner-txt">
                    <h1>PRICING TABLE</h1>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Header Heading Section End here -->
    <!-- Main Header Heading Section End here -->

    <!--Login Section Start here -->
    <div class="new-mlb-wrapper login-wrapper nba-page-wrapper mlb-page-wrapper">
        <div class="container">
            <div class="main-packg-heading">
                <h2>PRIZE TABLE</h2>
            </div>
            <div class="row checkout-form-row " id="data-wrapper">
            </div>
            <div class="auto-load text-center">
                <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     x="0px" y="0px" height="60" viewBox="0 0 100 100" enable-background="new 0 0 0 0"
                     xml:space="preserve">
                <path fill="#000"
                      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s"
                                      from="0 50 50" to="360 50 50" repeatCount="indefinite"/>
                </path>
            </svg>
            </div>
        </div>
    </div>

@endsection

@section('additional_scripts')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        var ENDPOINT = "{{ url('/') }}";
        var page = 1;
        infinteLoadMore(page);
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
                page++;
                infinteLoadMore(page);
            }
        });

        function infinteLoadMore(page) {
            $.ajax({
                url: ENDPOINT + "/prizes?page=" + page,
                datatype: "html",
                type: "get",
                beforeSend: function () {
                    $('.auto-load').show();
                }
            })
                .done(function (response) {
                    if (response.length == 0) {
                        $('.auto-load').html('<span class="text-white">No More Products</span>');
                        return;
                    }
                    $('.auto-load').hide();
                    $("#data-wrapper").append(response);
                })
                .fail(function (jqXHR, ajaxOptions, thrownError) {
                    console.log('Server error occured');
                });
        }
    </script>
@endsection
