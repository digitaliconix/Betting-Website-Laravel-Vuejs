<style>
    .header-login .show>.btn-secondary.dropdown-toggle, .header-login .btn-secondary {
        background: #ec3047 !important;
        border-color: #ec3047 !important;
        outline: none !important;
    }
    .header-login-n.dashboardclient a.header-signup-a:hover {
        color: #fff !important;
    }
</style>

<div class="loading"></div>
<div id="custom-loader" class="">
    <header id="masthead" class="site-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3">

                </div>
                <div class="col-lg-9 col-md-12">
                    @guest('client')
                        <div class="header-login">
                            <div class="header-login-n">
                                <form action="{{ route('client.login') }}" method="post" autocomplete="off">
                                    @csrf
                                    <div><input type="email" name="email" value="{{ old('email') }}"
                                              class="@error('email') is-invalid @enderror" placeholder="Login ID"
                                              value="" autocomplete="off">
                                        @if ($errors->has('email'))
                                            <span class="invalid-feedback">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                        @endif</div>
                                    <div><input type="password" name="password"
                                              class=" @error('password') is-invalid @enderror" placeholder="Password"
                                              autocomplete="off">
                                        @if ($errors->has('password'))
                                            <span class="invalid-feedback">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                        @endif</div>
                                    <button type="submit" class="login-btn-slider header-login-a">LOGIN</button>
                                </form>
                                <a href="/register" class="Register-btn header-signup-a">SIGNUP</a>
                            </div>
                        </div>
                    @else
                        <div class="header-login">
                            <div class="header-login-n dashboardclient">

                                <a href="/home" class=" header-signup-a">Wallet {{auth('client')->user()->wallet}} Coins</a>

                                <div class="dropdown show">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {{auth('client')->user()->name}}
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="/home">Dashboard</a>
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                           onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            {{ __('Logout') }}</a>
                                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                              class="d-none">
                                            @csrf
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endguest
                </div>
            </div>
        </div><!--container-->
        <div class="second-menu">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-12 logo-sec">
                        <div class="header-logo">
                            <a href="/" class="custom-logo-link" rel="home" aria-current="page"><img width="183"
                                                                                                     height="187"
                                                                                                     src="/frontend/assets/front/images/header-logo.png"
                                                                                                     class="custom-logo"
                                                                                                     alt="BETRIX365"></a>
                        </div>
                    </div>
                    <div class="col-lg-10 col-md-12">
                        <nav id="site-navigation" class="main-navigation">
                            <div class="menu-menu-1-container">
                                <ul id="primary-menu" class="menu">
                                    <li class="menu-item current_page_item"><a href="/">Home</a></li>


                                    <li class="menu-item "><a href="/game-category/nba">NBA</a></li>


                                    <li class="menu-item "><a href="/game-category/nfl">NFL</a></li>


                                    <li class="menu-item "><a href="/game-category/mlb">MLB</a></li>

                                    <li class="menu-item "><a href="/packages">Packages</a></li>
                                    <li class="menu-item  "><a href="/prizes">Prizes</a></li>
                                    <li class="menu-item "><a href="/about-us">ABOUT US</a></li>
                                    <!--<li class="menu-item"><a href="https://win375.com/testimonials">TESTIMONIALS</a></li>-->
                                    <!--<li class="menu-item ""><a href="https://win375.com/blogs">Blogs</a></li>-->
                                    <li class="menu-item "><a href="/contact-us">CONTACT US</a></li>
                                </ul>
                            </div>
                            <div class="header-social-icons">
                                <ul>
                                    <li><a href="https://www.facebook.com/win375/" target="_blank" rel="nofollow"><i
                                                class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/Win54191959" target="_blank" rel="nofollow"><i
                                                class="fab fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.instagram.com/betrix_365" target="_blank" rel="nofollow"
                                           class="ml-2"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </nav><!-- #site-navigation -->

                    </div>


                </div>
            </div><!--container-->
        </div>

        <div class="mm">
            <div id="mml" class="mm-toggle"><h4>Menu</h4>
                <div id="mmb" cclass="mm-toggle" class="">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div> <!-- /#mml -->
            <div id="mm">
                <ul id="primary-menu" class="menu">
                    <li class="menu-item current_page_item"><a href="home.html">Home</a></li>


                    <li class="menu-item"><a href="game-category/nba.html">NBA</a></li>


                    <li class="menu-item"><a href="game-category/nfl.html">NFL</a></li>


                    <li class="menu-item"><a href="game-category/mlb.html">MLB</a></li>

                    <li class="menu-item"><a href="packages.html">Packages</a></li>
                    <li class="menu-item"><a href="prizes.html">Prizes</a></li>
                    <li class="menu-item"><a href="about-us.html">ABOUT US</a></li>
                    <!--<li class="menu-item"><a href="https://win375.com/testimonials">TESTIMONIALS</a></li>-->
                    <li class="menu-item"><a href="contact-us.html">CONTACT US</a></li>
                </ul>
            </div> <!--/#mm -->
        </div>

    </header><!-- #masthead -->
