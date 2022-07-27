<!DOCTYPE html>
<!--
Template Name: {{config('app.name')}}
Author: PixInvent
Website: http://www.pixinvent.com/
Contact: hello@pixinvent.com
Follow: www.twitter.com/pixinvents
Like: www.facebook.com/pixinvents
Purchase: https://1.envato.market/vuexy_admin
Renew Support: https://1.envato.market/vuexy_admin
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.

-->
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
    <meta name="description"
          content="{{config('app.name')}} admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords"
          content="admin template, {{config('app.name')}} admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="PIXINVENT">
    <title>Login Page - {{config('app.name')}} - Bootstrap HTML admin template</title>
    <link rel="apple-touch-icon" href="/app-assets/images/ico/apple-icon-120.png">
    <link rel="shortcut icon" href="/frontend/assets/front/images/favicon.png" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
          rel="stylesheet">

    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="/app-assets/vendors/css/vendors.min.css">
    <!-- END: Vendor CSS-->

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="/app-assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/bootstrap-extended.min.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/colors.min.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/components.min.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/themes/dark-layout.min.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/themes/bordered-layout.min.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/themes/semi-dark-layout.min.css">

    <!-- BEGIN: Page CSS-->
    <link rel="stylesheet" type="text/css" href="/app-assets/css/core/menu/menu-types/horizontal-menu.min.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/plugins/forms/form-validation.css">
    <link rel="stylesheet" type="text/css" href="/app-assets/css/pages/authentication.css">
    <!-- END: Page CSS-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">
    <!-- END: Custom CSS-->

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->
<body class="horizontal-layout horizontal-menu blank-page navbar-floating footer-static  " data-open="hover"
      data-menu="horizontal-menu" data-col="blank-page">


<style>
    .back-img {
        min-height: 100%;
        background: linear-gradient(0deg, rgba(0, 0, 150, 0.3), rgba(12, 20, 40, 0.6)),url('/frontend/assets/front/images/Login/login-bg.jpg') !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
    }
    .btn-primary {
        background-color: #FFA800!important;
        border-color: #FFA800!important;
        color: #FFF!important;
    }
    .btn-primary:focus {
        color: #FFF;
        background-color: #FFA800 !important;
    }
</style>
<!-- BEGIN: Content-->
<div class="app-content content ">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body">
            <div class="auth-wrapper auth-cover">
                <div class="auth-inner row m-0">
                    <!-- Brand logo-->
                    <a class="brand-logo" href="">
                        <img src="/images/logo/logo.png" height="80">
                    </a>
                    <!-- /Brand logo-->
                    <!-- Left Text-->
                    <div class="d-none d-lg-flex col-lg-8 align-items-center p-5 back-img">
                        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
                        </div>
                    </div>
                    <!-- /Left Text-->
                    <!-- Login-->
                    <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                        <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                            <h2 class="card-title fw-bold mb-1">Welcome to {{config('app.name')}}! 👋</h2>
                            <p class="card-text mb-2">Please sign-in to your account and start the adventure</p>
                            <form class="auth-login-form mt-2" action="{{ route('admin.login') }}" method="post">
                                {{ csrf_field() }}
                                <div class="mb-1">
                                    <label class="form-label" for="login-email">Email</label>
                                    <input class="form-control" id="login-email" type="text" name="email"
                                           placeholder="john@example.com" aria-describedby="login-email" autofocus=""
                                           tabindex="1"/>
                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div class="mb-1">
                                    <div class="d-flex justify-content-between">
                                        <label class="form-label" for="login-password">Password</label><a
                                            href="auth-forgot-password-cover.html"><small>Forgot Password?</small></a>
                                    </div>
                                    <div class="input-group input-group-merge form-password-toggle">
                                        <input class="form-control form-control-merge" id="login-password"
                                               type="password" name="password" placeholder="············"
                                               aria-describedby="login-password" tabindex="2"/><span
                                            class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                                        @if ($errors->has('password'))
                                            <span class="invalid-feedback">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="remember-me" type="checkbox" tabindex="3"/>
                                        <label class="form-check-label" for="remember-me"> Remember Me</label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100" tabindex="4">Sign in</button>
                            </form>
                        </div>
                    </div>
                    <!-- /Login-->
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END: Content-->


<!-- BEGIN: Vendor JS-->
<script src="/app-assets/vendors/js/vendors.min.js"></script>
<!-- BEGIN Vendor JS-->

<!-- BEGIN: Page Vendor JS-->
<script src="/app-assets/vendors/js/ui/jquery.sticky.js"></script>
<script src="/app-assets/vendors/js/forms/validation/jquery.validate.min.js"></script>
<!-- END: Page Vendor JS-->

<!-- BEGIN: Theme JS-->
<script src="/app-assets/js/core/app-menu.min.js"></script>
<script src="/app-assets/js/core/app.min.js"></script>
<!-- END: Theme JS-->

<!-- BEGIN: Page JS-->
<script src="/app-assets/js/scripts/pages/auth-login.js"></script>
<!-- END: Page JS-->

<script>
    $(window).on('load', function () {
        if (feather) {
            feather.replace({width: 14, height: 14});
        }
    })
</script>
</body>
<!-- END: Body-->
</html>
