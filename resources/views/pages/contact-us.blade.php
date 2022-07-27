@extends('layouts.master')

@section('content')

    <!--Main header Heading Section Start here -->
    <div class="container-fluid inner-pages-banner about-us-banner contact-page-banner">
        <div class="row">
            <div class="col-md-12">
                <div class="inner-banner-txt">
                    <h2>CONTACT US</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Header Heading Section End here -->



    <!--Login Section Start here -->
    <div class="login-wrapper nba-page-wrapper contact-page-wrapper">
        <div class="container">
            <div class="main-packg-heading">
                <h1>GET IN TOUCH</h1>
            </div>

            <div class="get-in-touch-main">
                <div class="row">
                    <div class="col-md-4">
                        <div class="main-contact-box">
                            <div class="inner-contact-box">
                                <div class="contact-icon-box">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div class="contact-info">
                                    <h4>Location</h4>
                                    <p><a href="https://goo.gl/maps/ocGoW3JhwDbZQKdu7" target="_blank">Headquartered in
                                            Baton Rouge, Louisiana.</a></p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="col-md-4">
                        <div class="main-contact-box">
                            <div class="inner-contact-box">
                                <div class="contact-icon-box">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <div class="contact-info">
                                    <h4>Email</h4>
                                    <p><a href="mailto:info@betrix365.com">info@betrix365.com</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="main-contact-box">
                            <div class="inner-contact-box">
                                <div class="contact-icon-box">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div class="contact-info">
                                    <h4>Phone</h4>
                                    <p><a href="tel:+12136525768">(213) 652-5768</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div><!--cintainer-->


        <div class="team-page-row">
            <div class="container">
                <div class="row ">
                    <div class="col-md-5">
                        <div class="form-left-img">
                            <!-- <img src="assets/images/Login/form-left-img.png" alt="team girls"> -->
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="team-form container">
                            <form id="contact-form" class="form-horizontal" role="form"
                                  action="https://win375.com/contact-submit">
                                <div class="login-title">
                                    <h2>FILL OUT THE FORM</h2>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div style="margin-bottom: 25px" class="input-group">
                                            <span class="input-group-addon"><i
                                                    class="glyphicon glyphicon-user"></i></span>
                                            <!-- <label for="email" class="control-label col-md-12">Username</label> -->
                                            <input id="firstname" type="text" class="form-control col-md-12 same-input"
                                                   name="firstname" value="" placeholder="First Name" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div style="margin-bottom: 25px" class="input-group">
                                            <span class="input-group-addon"><i
                                                    class="glyphicon glyphicon-user"></i></span>
                                            <!-- <label for="email" class="control-label col-md-12">Username</label> -->
                                            <input id="lastname" type="text" class="form-control col-md-12 same-input"
                                                   name="lastname" value="" placeholder="Last Name" required>
                                        </div>
                                    </div>

                                </div><!--row-->

                                <div class="row">
                                    <div class="col-md-6">
                                        <div style="margin-bottom: 25px" class="input-group">
                                            <span class="input-group-addon"><i
                                                    class="glyphicon glyphicon-lock"></i></span>
                                            <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                            <input id="email" type="email" class="form-control col-md-12 same-input"
                                                   name="email" pattern="[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,4}$"
                                                   placeholder="Email Address" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div style="margin-bottom: 25px" class="input-group">
                                            <span class="input-group-addon"><i
                                                    class="glyphicon glyphicon-lock"></i></span>
                                            <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                            <input id="phone" type="text" class="form-control col-md-12 same-input"
                                                   name="phone" placeholder="Phone Number" required>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div style="margin-bottom: 25px" class="input-group">
                                            <span class="input-group-addon"><i
                                                    class="glyphicon glyphicon-lock"></i></span>
                                            <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                            <textarea id="message" class="form-control col-md-12 same-input ttext-are"
                                                      name="message" placeholder="Message" required></textarea>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="input-group forget-field" style="text-align: right;">
                                    <div class="checkbox" style="display: block; width: 100%;">
                                        <label>
                                            <a href="#" class="forgot-pass"> Forgot the Password?</a>
                                        </label>
                                    </div>
                                </div> -->
                                <div style="margin-top:10px" class="form-group">
                                    <!-- Button -->

                                    <div style="padding: 0px !important; text-align: left;" class="col-sm-12 controls">
                                        <!-- <a id="btn-login" href="#" class="btn  getBtn ml-0 forms-btns">Submit</a> -->
                                        <button type="submit" id="btn-login" class="btn getBtn ml-0 forms-btns"
                                                value="Submit">Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>

@endsection
