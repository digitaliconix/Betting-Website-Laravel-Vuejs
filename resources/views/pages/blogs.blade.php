@extends('layouts.master')

@section('additional_styles')
    <style>
        .our-blogs .inner-wrapper {
            border: 1px solid #fff;
            border-radius: 10px;
            margin-bottom: 20px !important;
        }
        .our-blogs .inner-wrapper {
            border: 1px solid rgb(253, 205, 8);
        }
        .our-blog-main .our-blogs .post-thumbnail {
            height: 230px;
        }
        .our-blogs .post-thumbnail {
            width: 100%;
            height: 270px;
            position: relative;
            overflow: hidden;
            border-radius: 10px 10px 0px 0;
        }
        .our-blogs .post-thumbnail:before {
            position: absolute;
            content: '';
            background: linear-gradient(
                0deg
                , rgb(50 81 51 / 0.8) 0%, rgba(37,37,37,0.1) 65%);
            top: 0;
            width: 100%;
            height: 100%;
        }
        .our-blogs .post-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
        }
        .our-blog-main .date-author {
            padding: 12px 40px 2px 20px;
        }
        .date-author li {
            font-size: 16px;
            display: inline-block;
            color: #fff;
            position: relative;
            font-family: 'Museo Sans 500';
        }
        .date-author li:first-child {
            padding-right: 14px;
            margin-right: 7px;
        }
        .date-author li:first-child:before {
            position: absolute;
            content: '';
            background: #fff;
            width: 1px;
            height: 18px;
            right: 0;
            top: 2px;
        }
        .blog-details {
            padding: 0px 20px 0 20px;
            margin-top: -10px;
            position: relative;
            text-align: center;
        }
        .our-blog-main .blog-details h3, .our-blog-main .blog-details p {
            color: #000;
            text-align: left;
        }
        .our-blog-main .blog-details h3, .our-blog-main .blog-details p {
            color: #000;
        }
        .blog-details a {
            background-image: -moz-linear-gradient( -37deg, rgb(252,222,7) 0%, rgb(255,161,12) 100%) !important;
            background-image: -webkit-linear-gradient(
                -37deg
                , rgb(252,222,7) 0%, rgb(255,161,12) 100%) !important;
            background-image: -ms-linear-gradient( -37deg, rgb(252,222,7) 0%, rgb(255,161,12) 100%) !important;
            text-transform: uppercase !important;
            color: black !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            border-radius: 5px !important;
            padding: 10px 20px !important;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border: none !important;
        }
        .blog-wrapper .row.our-blogs .inner-wrapper {
            width: 100%;
            background-color: #fff;
        }
        .date-author {
            background: rgb(0 0 0 / 0.6);
            display: inline-block;
            padding: 12px 50px;
            position: relative;
            top: -49px;
            border-top-right-radius: 30px;
            transition: all .3s ease-in-out;
        }
        .our-blog-main .blog-details h3{
            font-size: 22px;
        }
        .blog-ban{}
        .blog-ban h2{
            font-size: 60px;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-family: 'Roboto Slab', serif;
        }

        /** load More **/
        #blog-load-more {
            background-image: -moz-linear-gradient( -37deg, rgb(252,222,7) 0%, rgb(255,161,12) 100%) !important;
            background-image: -webkit-linear-gradient(
                -37deg
                , rgb(252,222,7) 0%, rgb(255,161,12) 100%) !important;
            background-image: -ms-linear-gradient( -37deg, rgb(252,222,7) 0%, rgb(255,161,12) 100%) !important;
            text-transform: uppercase !important;
            color: black !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            border-radius: 5px !important;
            padding: 10px 20px !important;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border: none !important;
        }
        #blog-load-more:hover {
            color: white !important;
        }

        .blog-list{
            display: none;
        }
        .col-md-4.blog-list {
            margin-bottom: 20px;
        }

        .blog-btn-div{
            text-align: center;
            margin-top: 20px !important;
        }
        .blog-details a:hover {
            color: white !important;
        }
    </style>
@endsection

@section('content')

    <!--Login Section Start here -->
    <div class="container-fluid login-wrapper testi-page-wrapper">

        <!-- Section Four Testimonials -->
        <section id="testi-row" class="tesit-page-row our-blog-main">
            <div class="container">
                <div class="row">

                    <div class="col-md-12">
                        <div class="testi-inner-row">
                            <div class="big-heading">
                                <h2>Blog</h2>
                            </div>

                            <div class="blog-wrapper">
                                <div class="row our-blogs">
                                    <div class="col-md-4 blog-list" >
                                        <div class="inner-wrapper">
                                            <div class="post-thumbnail">
                                                <img src="" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" >
                                            </div>
                                            <div class="date-author">
                                                <ul>
                                                    <li>17-Jun-2021</li>
                                                    <li>Admin</li>
                                                </ul>
                                            </div>
                                            <div class="blog-details">
                                                <h3>Things You Need To Know About Betrix365</h3>
                                                <p>Win-375 is a trusted online sports betting site aiming to provide a fun and innovative virtual environment to its users.</p>
                                                <a href="/blog/about-win375">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 blog-list" >
                                        <div class="inner-wrapper">
                                            <div class="post-thumbnail">
                                                <img src="" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" >
                                            </div>
                                            <div class="date-author">
                                                <ul>
                                                    <li>23-Jun-2021</li>
                                                    <li>Admin</li>
                                                </ul>
                                            </div>
                                            <div class="blog-details">
                                                <h3>Profitable Online Sports To Place Bets</h3>
                                                <p>Finding the right sports to bet online is equally complicated as finding the right platform to do online sports betting..</p>
                                                <a href="/blog/profitable-online-sports-betting">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 blog-list" >
                                        <div class="inner-wrapper">
                                            <div class="post-thumbnail">
                                                <img src="" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" >
                                            </div>
                                            <div class="date-author">
                                                <ul>
                                                    <li>08-Jul-2021</li>
                                                    <li>Admin</li>
                                                </ul>
                                            </div>
                                            <div class="blog-details">
                                                <h3>Online Sports Betting: What Is It Worth?</h3>
                                                <p>The online sports betting world is a great place to earn money. Especially if betting on sports is one of your favorite past times.</p>
                                                <a href="/blog/online-sports-betting-what-is-it-worth">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 blog-list" >
                                        <div class="inner-wrapper">
                                            <div class="post-thumbnail">
                                                <img src="" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" >
                                            </div>
                                            <div class="date-author">
                                                <ul>
                                                    <li>19-Jul-2021</li>
                                                    <li>Admin</li>
                                                </ul>
                                            </div>
                                            <div class="blog-details">
                                                <h3>Best Time To Place A Sports Bet</h3>
                                                <p>Many people asked this question before placing a bet. But the answer to this question is always:.</p>
                                                <a href="/blog/best-time-to-place-a-sports-bet">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 blog-list" >
                                        <div class="inner-wrapper">
                                            <div class="post-thumbnail">
                                                <img src="" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" >
                                            </div>
                                            <div class="date-author">
                                                <ul>
                                                    <li>26-Jul-2021</li>
                                                    <li>Admin</li>
                                                </ul>
                                            </div>
                                            <div class="blog-details">
                                                <h3>Become a Successful Sports Bettor</h3>
                                                <p>Finding the right sports to bet online is equally complicated as finding the right platform to do online sports betting..</p>
                                                <a href="/blog/successful-sports-bettor">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 blog-list" >
                                        <div class="inner-wrapper">
                                            <div class="post-thumbnail">
                                                <img src="" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" >
                                            </div>
                                            <div class="date-author">
                                                <ul>
                                                    <li>30-Jul-2021</li>
                                                    <li>Admin</li>
                                                </ul>
                                            </div>
                                            <div class="blog-details">
                                                <h3>Live Sports Betting &amp; How It Works</h3>
                                                <p>Live sports betting allows you to win real money within the game. You can even follow the action via live stream on your television..</p>
                                                <a href="/blog/live-sports-betting">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 blog-list" >
                                        <div class="inner-wrapper">
                                            <div class="post-thumbnail">
                                                <img src="" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" >
                                            </div>
                                            <div class="date-author">
                                                <ul>
                                                    <li>05-Aug-2021</li>
                                                    <li>Admin</li>
                                                </ul>
                                            </div>
                                            <div class="blog-details">
                                                <h3>Best Bets for Olympics 2021</h3>
                                                <p>Watch Olympic games and place the best bets for and against the team you think would lose or win. Know who to bet for. Read more….</p>
                                                <a href="/blog/bets-for-olympics">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 blog-list" >
                                        <div class="inner-wrapper">
                                            <div class="post-thumbnail">
                                                <img src="" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" >
                                            </div>
                                            <div class="date-author">
                                                <ul>
                                                    <li>12-Aug-2021</li>
                                                    <li>Admin</li>
                                                </ul>
                                            </div>
                                            <div class="blog-details">
                                                <h3>Sports Bets &amp; Online Gambling Mistakes</h3>
                                                <p>Common mistakes that online bettors make now and then. Through this blog, we’ll explain to you how to turn those mistakes in your favor..</p>
                                                <a href="/blog/sports-bets-and-online-gambling-mistakes">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 blog-list" >
                                        <div class="inner-wrapper">
                                            <div class="post-thumbnail">
                                                <img src="" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" >
                                            </div>
                                            <div class="date-author">
                                                <ul>
                                                    <li>23-Aug-2021</li>
                                                    <li>Admin</li>
                                                </ul>
                                            </div>
                                            <div class="blog-details">
                                                <h3>Know About Value Sports Betting</h3>
                                                <p>The beginners may, for some time, find it challenging to comprehend the true worth of value betting. Let Betrix365 guide you through. Read more….</p>
                                                <a href="/blog/value-sports-betting">Read More</a>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="blog-btn-div">
                                <a id="blog-load-more" href="#">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section Four Testimonials End -->

@endsection
