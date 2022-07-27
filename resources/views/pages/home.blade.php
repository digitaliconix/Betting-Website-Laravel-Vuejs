@extends('layouts.master')

@section('content')

    <div id="slider-wrapper">
        <div id="layerslider" style="width:100%;height:715px;">
            <div class="ls-slide" data-ls="slidedelay:9000; transition2d: all;">
                <img src="/frontend/assets/front/images/slider-bg.jpg" class="ls-bg" alt="Slide background"/>
                <h1 class="ls-l sldr-txt-1" data-ls="offsetxin:0;durationin:3000;delayin:600;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;">Welcome To</h1>
                <img src="/frontend/assets/front/images/slider-txt.png" class="ls-l welcome-img" data-ls="offsetxin:-650;offsetyin:100;durationin:4000;delayin:1500;easingin:easeOutQuart;fadein:false;offsetxout:2400;offsetyout:-400;durationout:1000;easingout:easeInQuart;fadeout:false;scalexout:0.9;scaleyout:0.9;">
                <div class="ls-l sldr-ctnt" data-ls="offsetxin:-150;durationin:2000;delayin:2000;easingin:easeInOutQuart;rotateyin:-40;offsetxout:-150;durationout:1000;rotateyout:-40;">We make sports fun, thrilling, and rewarding. Signup to put your sports knowledge to the test and begin betting on your favorite teams!</div>
                <a href="login.html" class="ls-l-1 sldr-lgn" style="durationin:500;delayin:2500;fadein:false;rotatein:30;durationout:500;fadeout:false;slidedirection:fade;slideoutdirection:fade;scalein:0.1;scaleout:0.1;">LOGIN</a>
                <a href="register.html" class="ls-l-1 sldr-sgnup" style="durationin:500;delayin:3000;fadein:false;rotatein:-30;durationout:500;fadeout:false;slidedirection:fade;slideoutdirection:fade;scalein:0.1;scaleout:0.1;">SIGNUP</a>
                <img class="ls-l slider-right-img" src="/frontend/assets/front/images/main-slider-new-image.png" alt="Image layer" data-ls="offsetxin: right;offsetxout: 0;offsetyin: 200;offsetyout: bottom;rotateout: -20;fadein: false;fadeout: false;easingin: easeoutquart;easingout: easeinquart;durationin: 2500;delayin: 500;">
            </div>

            <div class="ls-slide" data-ls="slidedelay:9000; transition2d: all;">
                <img src="/frontend/assets/front/images/slider-bg.jpg" class="ls-bg" alt="Slide background"/>
                <h1 class="ls-l sldr-txt-1" data-ls="offsetxin:0;durationin:3000;delayin:600;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;">Welcome To</h1>
                <img src="/frontend/assets/front/images/slider-txt.png" class="ls-l welcome-img" data-ls="offsetxin:-650;offsetyin:100;durationin:4000;delayin:1500;easingin:easeOutQuart;fadein:false;offsetxout:2400;offsetyout:-400;durationout:1000;easingout:easeInQuart;fadeout:false;scalexout:0.9;scaleyout:0.9;">
                <div class="ls-l sldr-ctnt" data-ls="offsetxin:-150;durationin:2000;delayin:2000;easingin:easeInOutQuart;rotateyin:-40;offsetxout:-150;durationout:1000;rotateyout:-40;">We make sports fun, thrilling, and rewarding. Signup to put your sports knowledge to the test and begin betting on your favorite teams!</div>
                <a href="login.html" class="ls-l-1 sldr-lgn" style="durationin:500;delayin:2500;fadein:false;rotatein:30;durationout:500;fadeout:false;slidedirection:fade;slideoutdirection:fade;scalein:0.1;scaleout:0.1;">LOGIN</a>
                <a href="register.html" class="ls-l-1 sldr-sgnup" style="durationin:500;delayin:3000;fadein:false;rotatein:-30;durationout:500;fadeout:false;slidedirection:fade;slideoutdirection:fade;scalein:0.1;scaleout:0.1;">SIGNUP</a>
                <img class="ls-l slider-right-img" src="/frontend/assets/front/images/main-slider-new-image.png" alt="Image layer" data-ls="offsetxin: right;offsetxout: 0;offsetyin: 200;offsetyout: bottom;rotateout: -20;fadein: false;fadeout: false;easingin: easeoutquart;easingout: easeinquart;durationin: 2500;delayin: 500;">
            </div>
        </div>
    </div>
    <!-- Slider Row Start -->
    <!-- Section Two Start-->
    <section id="three-games-row">
        <div class="container">
            <div class="row">
                <div class="games">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="games-main-box">
                                <div class="games-box-one">

                                    <div class="games-avatar">
                                        <img src="/frontend/assets/front/images/game-1.png">
                                    </div>
                                    <div class="games-title">
                                        <h5>NBA</h5>
                                    </div>


                                    <div class="games-inner-wrapper">
                                        <div class="testi-content-p">
                    <span class="title"><p><p>It’s time you use your instincts and make your best bet on your favorite NBA team on board.</p> </p>
</span>
                                        </div>
                                    </div>
                                    <div class="games-btn">
                                        <a href="game-category/nba.html">Click Here</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="games-main-box">
                                <div class="games-box-one">

                                    <div class="games-avatar">
                                        <img src="/frontend/assets/front/images/game-new-2.png">
                                    </div>
                                    <div class="games-title">
                                        <h5>NFL</h5>
                                    </div>

                                    <div class="games-inner-wrapper">
                                        <div class="testi-content-p">
                    <span class="title"><p><p>Try your luck and put your bets on your favorite NFL team for a chance to win great prizes.</p></p>
</span>
                                        </div>
                                    </div>
                                    <div class="games-btn">
                                        <a href="game-category/nfl.html">Click Here</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="games-main-box">
                                <div class="games-box-one">

                                    <div class="games-avatar">
                                        <img src="/frontend/assets/front/images/game-new-3.png">
                                    </div>
                                    <div class="games-title">
                                        <h5>MLB</h5>
                                    </div>


                                    <div class="games-inner-wrapper">
                                        <div class="testi-content-p">
                    <span class="title"><p><p>Place your bets on the world-famous MLB teams and keep your sporting spirits pumped up.</p></p>
                                        </div>
                                    </div>
                                    <div class="games-btn">
                                        <a href="game-category/mlb.html">Click Here</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- Section Two End-->
    <!-- Section Three Start -->
    <section id="about-row">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="big-heading">
                        <div class="text-sec">
                            <h2>ABOUT US</h2>
                            <p>Headquartered in Baton Rouge, Louisiana, Betrix365 aims to provide you with a fun and innovative virtual environment along with a trusted online sports betting experience. Betrix365 is a platform that presents all sports fans a chance to put their minds together and test their sporting knowledge. Our platform provides you to exhibit your sports knowledge by placing the right bet on any given team, anytime. We offer our bettors various NBA, MLB, and NFL teams to bet on and have the best betting experience. With our point-only feature, you can easily take control of your winning prizes. </p>
                            <p>At Betrix365, we encourage you to take on the odds by placing a wager and proving all the doubters wrong. With Betrix365 by your side, you can flawlessly showcase your betting skills and flaunt all your winnings and prizes. With free signup and a variety of fantastic prizes up for grabs, now is the time to trust your instincts, select your favorite team, and place a bet!</p>

                        </div>
                    </div>
                    <div class="read-more">
                        <a href="about-us.html" title="">READ MORE</a>
                    </div>
                </div>

                <div class="col-md-6" id="about-imgs-col">
                    <div class="about-imgs about-img-1">
                        <img width="499" height="512" src="/frontend/assets/front/images/about-img-1.png">
                    </div>

                    <div class="about-imgs about-img-3">
                        <img width="347" height="328" src="/frontend/assets/front/images/about-img-3.png">
                    </div>

                    <div class="about-imgs about-img-2">
                        <img width="325" height="302" src="/frontend/assets/front/images/about-img-2.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Section Three End -->
    <!-- Section Four Testimonials -->
    <section id="testi-row">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="big-heading" style="font-size: 100px;
                    color: white;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    font-family: 'Roboto Slab', serif;">

                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <video style="height: 100%;width:100%;" controls controlslist="nodownload" id="video">
                        <source src="/frontend/assets/front/images/Betrix365-demo.mp4" type="video/mp4">


                    </video>
                    <div class="play-button-wrapper">
                        <div title="Play video" class="play-gif" id="circle-play-b">
                            <!-- SVG Play Button -->
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                                <path d="M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 61.56V18.44L64 40z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Section Four Testimonials End -->


@endsection
