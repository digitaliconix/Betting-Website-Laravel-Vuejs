@extends('layouts.master')

@section('content')

    <div class="container-fluid inner-pages-banner about-us-banner contact-page-banner">
        <div class="row">
            <div class="col-md-12">
                <div class="inner-banner-txt">
                    <h1>SIGNUP</h1>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Header Heading Section End here -->

    <!--Login Section Start here -->
    <div class="container-fluid login-wrapper signup-wrapper">
        <div class="container">
            <div class="row form-row">
                <div class="col-md-6 col-sm-12"></div>
                <div class="col-md-6 col-sm-12">
                    <div class="main-form-wrapper">
                        <div class="login-formn-icon-row row">
                            <div class="col-md-6 col-sm-6 col-6">
                                <a href="/login" class="form-top-icon"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                            </div>
                            <div class="col-md-6 col-sm-6 col-6">
                                <h2>Login</h2>

                            </div>
                        </div>

                        <div class="login-form-main row">
                            <form id="loginform" action="{{ route('client.register') }}" method="post" class="form-horizontal" role="form" autocomplete="off">
                                @csrf
                                <div class="login-title">
                                    <h1>SIGN UP</h1>
                                    <p>Give us some of your information to get free acess and get some free Coins</p>
                                </div>
                                <div style="margin-bottom: 25px" class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <!-- <label for="email" class="control-label col-md-12">Username</label> -->
                                    <input type="text" class="form-control col-md-12 same-input  @error('name') is-invalid @enderror " name="name" placeholder="Type Your Name" autocomplete="off">
                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div style="margin-bottom: 25px" class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                    <input type="email" class="form-control col-md-12 same-input @error('email') is-invalid @enderror " name="email" pattern="[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,4}$" placeholder="Type Your Email" autocomplete="off">
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div style="margin-bottom: 25px" class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                    <input type="password" class="signin-input-psswd form-control col-md-12 same-input  @error('password') is-invalid @enderror" name="password" placeholder="Password" autocomplete="off">
                                    <div class="show-hide-txt">
                                        <button type="button" class="button-psswd-signin"><i class="fas fa-eye-slash"></i></button>
                                    </div>
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div style="margin-bottom: 25px" class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                    <input type="password" class="signin-input-psswd form-control col-md-12 same-input  @error('password_confirmation') is-invalid @enderror" name="password_confirmation" placeholder="Confirm Password" autocomplete="off">
                                    <div class="show-hide-txt">
                                        <button type="button" class="button-psswd-signin"><i class="fas fa-eye-slash"></i></button>
                                    </div>
                                    @error('password_confirmation')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <div class="input-group forget-field" style="text-align: right;">
                                    <div class="checkbox" style="display: block; width: 100%;">
                                        <label>
                                            Already a have an account? <a href="/login" class="forgot-pass"> Log in</a>
                                        </label>
                                    </div>
                                </div>
                                <div style="margin-top:10px" class="form-group">
                                    <!-- Button -->

                                    <div style="padding: 0px !important;" class="col-sm-12 controls">

                                        <button type="submit" class="btn-login">Sign Up</button>
                                    </div>
                                </div>
                            </form>



                            <div class="login-icons-wrapper">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="login-icons footer-icons">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="https://twitter.com/"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://www.instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://myaccount.google.com/intro/profile"><i class="fab fa-google-plus-g"></i></a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!--login-form-main row-->
                    </div><!--main form wrapper-->
                </div>
            </div>
        </div>
    </div>

@endsection
