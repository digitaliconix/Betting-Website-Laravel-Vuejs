@extends('layouts.master')

@section('additional_styles')
    <style>
        .modal {
            background: rgb(0 0 0 / 40%);
        }

    </style>
@endsection

@section('content')
    <div class="container-fluid inner-pages-banner about-us-banner">
        <div class="row">
            <div class="col-md-12">
                <div class="inner-banner-txt">
                    <h1>CHECKOUT</h1>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Header Heading Section End here -->


    <!--Login Section Start here -->
    <div class="container-fluid login-wrapper checkout-wrapper">
        <div class="container">
            <!--<div class="main-packg-heading">-->
            <!--    <h1>CHECKOUT</h1>-->
            <!--</div>-->


            <div class="row checkout-form-row">
                <div class="col-md-8">
                    <div class="checkout-form-wrapper checks container">
                        <form id="payment-form" class="form-horizontal" role="form" method="post"
                              action="{{ route('processTransaction') }}">
                            <div class="login-title">
                                <h1>BILLING DETAILS</h1>
                            </div>
                            @csrf
                            <input type="hidden" name="package_id" value="{{$package->id}}">
{{--                            <input type="hidden" name="nonce" id="nonce" value="">--}}
{{--                            <input type="hidden" id="cnumber" name="cnumber" value="">--}}
{{--                            <input type="hidden" id="card_expiry_year" name="card_expiry_year" value="">--}}
{{--                            <input type="hidden" id="ccode" name="ccode" value="">--}}
{{--                            <input type="hidden" id="card_expiry_month" name="card_expiry_month" value="">--}}
                            <div class="row">
                                <div class="col-md-12">
                                    <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                        <!-- <label for="email" class="control-label col-md-12">Username</label> -->
                                        <input id="name" type="text" class="form-control col-md-12 same-input"
                                               name="name" value="" placeholder="Full Name" required>
                                    </div>
                                </div>

                            </div><!--row-->

                            <div class="row">
                                <div class="col-md-6">
                                    <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                        <input id="email" type="email" class="form-control col-md-12 same-input"
                                               name="email" placeholder="Email Address" value="" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                        <input id="phone" type="text" class="form-control col-md-12 same-input"
                                               name="phone" placeholder="Phone Number" required>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-md-12">
                                    <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                        <input id="team" type="text" class="form-control col-md-12 same-input"
                                               name="team" placeholder="Team Name (Optional)">
                                    </div>
                                </div>
                            </div><!--row-->

                            <div class="row">
                                <div class="col-md-12">
                                    <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                        <input id="address" type="text" class="form-control col-md-12 same-input"
                                               name="address" placeholder="Street Address" required>
                                    </div>
                                </div>
                            </div><!--row-->

                            <div class="row">
                                <div class="col-md-6">
                                    <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                        <input id="city" type="text" class="form-control col-md-12 same-input"
                                               name="city" placeholder="City" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                        <input id="state" type="text" class="form-control col-md-12 same-input"
                                               name="state" placeholder="State" required>
                                    </div>
                                </div>

                            </div><!--row-->

                            <div class="row">
                                <div class="col-md-6">
                                    <div style="margin-bottom: 25px" class="input-group select-after">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                        <!-- <label for="email" class="control-label col-md-12">Username</label> -->
                                        <!-- <input id="login-username" type="text" class="form-control col-md-12 same-input" name="username" value="" placeholder="First Name"> -->
                                        <select id="country" class="drop-drop-dow select2" name="country" required>
                                            <option value="">Country</option>
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="Åland Islands">Åland Islands</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antarctica">Antarctica</option>
                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia, Plurinational State of">Bolivia, Plurinational State
                                                of
                                            </option>
                                            <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and
                                                Saba
                                            </option>
                                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Bouvet Island">Bouvet Island</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="British Indian Ocean Territory">British Indian Ocean
                                                Territory
                                            </option>
                                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Cayman Islands">Cayman Islands</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">Christmas Island</option>
                                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo">Congo</option>
                                            <option value="Congo, the Democratic Republic of the">Congo, the Democratic
                                                Republic of the
                                            </option>
                                            <option value="Cook Islands">Cook Islands</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Côte d&#039;Ivoire">Côte d&#039;Ivoire</option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Curaçao">Curaçao</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)
                                            </option>
                                            <option value="Faroe Islands">Faroe Islands</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="French Guiana">French Guiana</option>
                                            <option value="French Polynesia">French Polynesia</option>
                                            <option value="French Southern Territories">French Southern Territories
                                            </option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">Gibraltar</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Greenland">Greenland</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guadeloupe">Guadeloupe</option>
                                            <option value="Guam">Guam</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guernsey">Guernsey</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Heard Island and McDonald Mcdonald Islands">Heard Island and
                                                McDonald Mcdonald Islands
                                            </option>
                                            <option value="Holy See (Vatican City State)">Holy See (Vatican City
                                                State)
                                            </option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="India">India</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Isle of Man">Isle of Man</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jersey">Jersey</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Korea, Democratic People&#039;s Republic of">Korea,
                                                Democratic People&#039;s Republic of
                                            </option>
                                            <option value="Korea, Republic of">Korea, Republic of</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Lao People&#039;s Democratic Republic">Lao People&#039;s
                                                Democratic Republic
                                            </option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libya">Libya</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Macao">Macao</option>
                                            <option value="Macedonia, the Former Yugoslav Republic of">Macedonia, the
                                                Former Yugoslav Republic of
                                            </option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">Marshall Islands</option>
                                            <option value="Martinique">Martinique</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mayotte">Mayotte</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Micronesia, Federated States of">Micronesia, Federated States
                                                of
                                            </option>
                                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montenegro">Montenegro</option>
                                            <option value="Montserrat">Montserrat</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Namibia">Namibia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherlands">Netherlands</option>
                                            <option value="New Caledonia">New Caledonia</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Niue">Niue</option>
                                            <option value="Norfolk Island">Norfolk Island</option>
                                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau">Palau</option>
                                            <option value="Palestine, State of">Palestine, State of</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Philippines">Philippines</option>
                                            <option value="Pitcairn">Pitcairn</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Réunion">Réunion</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russian Federation">Russian Federation</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="Saint Barthélemy">Saint Barthélemy</option>
                                            <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena,
                                                Ascension and Tristan da Cunha
                                            </option>
                                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                            <option value="Saint Lucia">Saint Lucia</option>
                                            <option value="Saint Martin (French part)">Saint Martin (French part)
                                            </option>
                                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                            <option value="Saint Vincent and the Grenadines">Saint Vincent and the
                                                Grenadines
                                            </option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Serbia">Serbia</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="South Georgia and the South Sandwich Islands">South Georgia
                                                and the South Sandwich Islands
                                            </option>
                                            <option value="South Sudan">South Sudan</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                            <option value="Swaziland">Swaziland</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania, United Republic of">Tanzania, United Republic of
                                            </option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Timor-Leste">Timor-Leste</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tokelau">Tokelau</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Emirates">United Arab Emirates</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="United States">United States</option>
                                            <option value="United States Minor Outlying Islands">United States Minor
                                                Outlying Islands
                                            </option>
                                            <option value="Uruguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian
                                                Republic of
                                            </option>
                                            <option value="Viet Nam">Viet Nam</option>
                                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                                            <option value="Western Sahara">Western Sahara</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                        <input id="zipcode" type="text" class="form-control col-md-12 same-input"
                                               name="zipcode" placeholder="Zip Code" required>
                                    </div>
                                </div>

                            </div><!--row-->


                            <div class="row">
                                <div class="col-md-12">
                                    <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <!-- <label for="email" class="control-label col-md-12">Password</label> -->
                                        <textarea id="info" type="textarea"
                                                  class="form-control col-md-12 same-input ttext-are"
                                                  name="additional_info"
                                                  placeholder="Additional Information"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div style="margin-bottom: 25px" class="input-group select-after">
                                        <select name="payment_method" id="payment_method" class="form-control" required>
                                            <option value="">Select Payment Method</option>

                                            <option value="PayPal">Paypal</option>
                                            <!--<option value="Stripe">Stripe</option>-->
                                            <!--<option value="Authorize">Authorize</option>-->

                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div style="margin-top:10px" class="form-group">
                                <!-- Button -->

                                <div style="padding: 0px !important; text-align: left;" class="col-sm-12 controls">
                                    <button type="submit" class="btn place-order-btn getBtn ml-0"
                                            id="place-order-button">Place Order
                                    </button>

                                    <button type="button" id="square-modal" class="btn-modal d-none" data-toggle="modal"
                                            data-target="#squareConnect">Modal
                                    </button>
                                    <button type="button" id="stripe-modal" class="btn-modal d-none" data-toggle="modal"
                                            data-target="#stripe">Modal
                                    </button>
                                    <button type="button" id="authorize-modal" class="btn-modal d-none"
                                            data-toggle="modal" data-target="#authorize">Modal
                                    </button>
                                    <button type="button" id="paypal-modal" class="btn-modal d-none" data-toggle="modal"
                                            data-target="#paypalmodal">Modal
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="pkg-summery-wrapper">
                        <h2 class="summery-title">PACKAGE SUMMARY</h2>
                        <div class="same-wrapper">
                            <div class="order-one">
                                <h6>{{$package->title}}</h6>

                                <ul class="summary-pkg-list">
                                    <li>{{$package->coins}} coins</li>
                                </ul>
                            </div>
                            <div class="summary-det">
                                <span class="order-price">${{$package->price}}</span>
                            </div>
                        </div><!--same wrapper-->

                        <div class="sub-total-checkout">
                            <h4>SUBTOTAL : <span class="cub-totla-price">${{$package->price}}</span></h4>
                        </div>


                    </div>

                    @if(\Session::has('error'))
                        <div class="alert alert-danger">{{ \Session::get('error') }}</div>
                        {{ \Session::forget('error') }}
                    @endif
                    @if(\Session::has('success'))
                        <div class="alert alert-success">{{ \Session::get('success') }}</div>
                        {{ \Session::forget('success') }}
                    @endif

                </div>
            </div>

        </div>
    </div>
    <!--Login Section end here -->



    <!-- Modal-->
    <div class="modal fade show" id="paypalmodal" data-backdrop="static" tabindex="-1" role="dialog"
         aria-labelledby="staticBackdrop" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <!--begin::Form group-->
                            <div class="form-group col-sm-12">
                                <div id="paypal-button-container"></div>
                            </div>
                            <!--end::Form group-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->

    <!--my sandbox client id-->
    <!--ATwam0QOOwUMHVbrZTf7MGotCIKvPJHC9qGAzIYR5_BDs0_ydog_NkZYLinvLJcqNr5kw4a7HtSG8ZPH-->

    <div class="modal fade" id="squareConnect" tabindex="-1" role="dialog" aria-labelledby="squareConnectLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h3>Pay with Square</h3>
                    <hr>
                    <form action="/checkout" id="hosted-fields-form" method="post">
                        <div class="row">
                            <div class="col-sm-12 form-group">
                                <label for="sq-card-number">Card Number</label>
                                <div id="sq-card-number" class="form-control"></div>
                            </div>
                            <div class="col-sm-6 form-group">
                                <label for="sq-expiration-date">Expiration Date</label>
                                <div class="third form-control" id="sq-expiration-date"></div>
                            </div>
                            <div class="col-sm-6 form-group">
                                <label for="sq-cvv">CVV</label>
                                <div class="third form-control" id="sq-cvv"></div>
                            </div>
                            <div class="col-sm-6 form-group">
                                <label for="sq-postal-code">Postal Code</label>
                                <div class="third form-control" id="sq-postal-code"></div>
                            </div>
                            <div class="col-sm-12">
                                <span id="square-error" style="color: red;font-size:10px;"></span>
                            </div>
                            <div class="col-sm-12">
                                <button id="sq-creditcard" class="button-credit-card btn btn-success">Pay
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--applicationId: 'sq0idp-bxwDDF9XeI2sPkOOy1Sf7Q',-->
    <!--     locationId: "LBKXTF9CPQ3C9",-->
    <!--sandbox-->
    <!--applicationId: 'sandbox-sq0idb-Orc5uMpm0emG0xVhQOEZQA',-->
    <!--   locationId: "LHF0BXJJV3N9E",-->



    <div class="modal fade" id="authorize" tabindex="-1" role="dialog" aria-labelledby="authorizeConnectLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h3>Pay with Authorize</h3>
                    <hr>
                    <form class="container" id="authorize-form">

                        <div class="row">

                            <div class="row" id="showdebit">
                                <div class="form-group owner col-md-12">
                                    <div class="row">


                                        <div class="form-group col-md-8" id="card-number-field">
                                            <label for="cardNumber">Card Number</label>
                                            <input type="text" class="form-control" id="cardNumber" max="16"
                                                   name="cardNumber"
                                                   value="" required>
                                            <span id="card-error"
                                                  class="error text-red">Please enter valid card number</span>
                                        </div>


                                        <div class="form-group CVV col-md-4">
                                            <label for="cvv">CVV</label>
                                            <input type="number" class="form-control" id="cardCode" name="cardCode"
                                                   value="" required>
                                            <span id="cvv-error" class="error text-red">Please enter cvv</span>
                                        </div>
                                    </div>
                                    <div class="row">


                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6" id="expiration-date">
                                            <label>Expiration Date</label><br/>
                                            <select class="form-control" id="expMonth" name="expMonth"
                                                    style="float: left; width: 100px; margin-right: 10px;">
                                                <option value="1">Jan</option>
                                                <option value="2">Feb</option>
                                                <option value="3">Mar</option>
                                                <option value="4">Apr</option>
                                                <option value="5">May</option>
                                                <option value="6">Jun</option>
                                                <option value="7">Jul</option>
                                                <option value="8">Aug</option>
                                                <option value="9">Sep</option>
                                                <option value="10">Oct</option>
                                                <option value="11">Nov</option>
                                                <option value="12">Dec</option>
                                            </select>
                                            <select class="form-control" id="expYear" name="expYear"
                                                    style="float: left; width: 100px;">

                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030">2030</option>
                                                <option value="2031">2031</option>
                                                <option value="2032">2032</option>
                                                <option value="2033">2033</option>
                                                <option value="2034">2034</option>
                                                <option value="2035">2035</option>
                                                <option value="2036">2036</option>
                                                <option value="2037">2037</option>
                                            </select>
                                        </div>


                                        <br/>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <span id="square-error" style="color: red;font-size:10px;"></span>
                                </div>
                                <div class="row" style="margin-left: 40%">
                                    <div class="col-md-12">
                                        <input type="submit" class="button-credit-card btn btn-success" value="Pay">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('additional_scripts')
    <script type="text/javascript">
        const paymentForm = new SqPaymentForm({
            // Initialize the payment form elements

            //TODO: Replace with your sandbox application ID
            applicationId: 'sq0idp-bxwDDF9XeI2sPkOOy1Sf7Q',
            locationId: "LBKXTF9CPQ3C9",
            inputClass: 'sq-input',
            autoBuild: false,
            // Customize the CSS for SqPaymentForm iframe elements
            inputStyles: [{
                fontSize: '16px',
                lineHeight: '24px',
                padding: '16px',
                placeholderColor: '#a0a0a0',
                backgroundColor: 'transparent',
            }],
            // Initialize the credit card placeholders
            cardNumber: {
                elementId: 'sq-card-number',
                placeholder: 'Card Number'
            },
            cvv: {
                elementId: 'sq-cvv',
                placeholder: 'CVV'
            },
            expirationDate: {
                elementId: 'sq-expiration-date',
                placeholder: 'MM/YY'
            },
            postalCode: {
                elementId: 'sq-postal-code',
                placeholder: 'Postal'
            },
            // SqPaymentForm callback functions
            callbacks: {
                /*
                * callback function: cardNonceResponseReceived
                * Triggered when: SqPaymentForm completes a card nonce request
                */
                cardNonceResponseReceived: function (errors, nonce, cardData) {
                    if (errors) {
                        var errorsHtml = '';
                        errorsHtml += '<ul>';
                        // Log errors from nonce generation to the browser developer console.
                        console.error('Encountered errors:');
                        errors.forEach(function (error) {
                            errorsHtml += '<li>' + error.message + '</li>';
                        });
                        errorsHtml += '<ul>';
                        document.getElementById('square-error').innerHTML = errorsHtml;
                        return;
                    }
                    //TODO: Replace alert with code in step 2.1
                    document.getElementById('nonce').value = nonce;
                    document.getElementById('payment-form').submit();
                }
            }
        });
        //TODO: paste code from step 1.1.4

        //TODO: paste code from step 1.1.5
        // onGetCardNonce is triggered when the "Pay $1.00" button is clicked
        function onGetCardNonce(event) {

            // Don't submit the form until SqPaymentForm returns with a nonce
            event.preventDefault();
            // Request a nonce from the SqPaymentForm object
            paymentForm.requestCardNonce();
        }

        paymentForm.build();
    </script>
@endsection
