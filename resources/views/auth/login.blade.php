@extends('layouts.master')

@section('content')

    <div class="container-fluid inner-pages-banner about-us-banner contact-page-banner">
        <div class="row">
            <div class="col-md-12">
                <div class="inner-banner-txt">
                    <h1>LOGIN</h1>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Header Heading Section End here -->


    <!--Login Section Start here -->
    <div class="container-fluid login-wrapper">
        <div class="container">
            <div class="row form-row">
                <div class="col-md-6 col-sm-12"></div>
                <div class="col-md-6 col-sm-12">
                    <div class="main-form-wrapper">
                        <div class="login-formn-icon-row row">
                            <div class="col-md-6 col-sm-6 col-6">
                                <h2>Sign Up</h2>
                            </div>
                            <div class="col-md-6 col-sm-6 col-6">
                                <a href="/register" class="form-top-icon"><i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="login-form-main row">
                            <form id="loginform" action="{{ route('client.login') }}" method="post"
                                  class="form-horizontal" role="form" autocomplete="off">
                                @csrf
                                <div class="login-title">
                                    <h1>LOGIN</h1>
                                    <p>Welcome! Please fill email and password to sign in into your account</p>
                                </div>
                                <div style="margin-bottom: 25px" class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <!-- <label for="email" class="control-label col-md-12">Username</label> -->
                                    <input id="login-username"  type="email" class="form-control col-md-12 same-input @error('email') is-invalid @enderror"
                                           name="email"  value="{{ old('email') }}" placeholder="Type your email">
                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>

                                <div style="margin-bottom: 25px" class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                    <input id="login-password" type="password"
                                           class="form-control col-md-12 same-input signin-input-psswd @error('password') is-invalid @enderror" name="password"
                                           placeholder="Type Your Password">
                                    <div class="show-hide-txt">
                                        <button type="button" class="button-psswd-signin"><i
                                                class="fas fa-eye-slash"></i></button>
                                    </div>
                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                    @endif
                                </div>
                                <div class="input-group forget-field" style="text-align: right;">
                                    <div class="checkbox" style="display: block; width: 100%;">
                                        <label>
                                            <a href="/password/reset" class="forgot-pass"> Forgot the Password?</a>
                                        </label>
                                    </div>
                                </div>
                                <div style="margin-top:10px" class="form-group">
                                    <!-- Button -->

                                    <div style="padding: 0px !important;" class="col-sm-12 controls">

                                        <button type="submit" class="btn-login">Login</button>
                                    </div>
                                </div>
                            </form>
                            <div class="Not-member-row">
                                <p>Not a Member, <a href="/register">Sign Up</a> Now</p>
                            </div>
                            <div class="login-icons-wrapper">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="login-icons footer-icons">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/"><i
                                                                class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="https://twitter.com/"><i class="fab fa-twitter"
                                                                                          aria-hidden="true"></i></a>
                                                    </li>
                                                    <li><a href="https://www.instagram.com/"><i class="fa fa-instagram"
                                                                                                aria-hidden="true"></i></a>
                                                    </li>
                                                    <li><a href="https://myaccount.google.com/intro/profile"><i
                                                                class="fab fa-google-plus-g"></i></a></li>
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
