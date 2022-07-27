@extends('layouts.master')

@section('content')

    <!--Main header Heading Section Start here -->
    <div class="container-fluid inner-pages-banner about-us-banner mlb-page-banner">
        <div class="row">
            <div class="col-md-12">
                <div class="inner-banner-txt">
                    <h2>{{$game_category->title}}</h2>
                    <input type="hidden" name="slug" id="game_category_slug" value="{{$game_category->slug}}">
                </div>
            </div>
        </div>
    </div>
    <!-- Main Header Heading Section End here -->

    <!--Login Section Start here -->
    <div class="login-wrapper nba-page-wrapper">
        <div class="container">
            <div class="main-packg-heading">
                <h2>{{$game_category->title}} LEAGUE</h2>
                @if(session()->has('message'))
                    <div class="alert alert-success">
                        {{ session()->get('message') }}
                    </div>
                @endif
                @if(session()->has('error'))
                    <div class="alert alert-danger">
                        {{ session()->get('error') }}
                    </div>
                @endif
            </div>
            <div class="">
                <div class="auto-load text-center" style="display: none;">
                    <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink"
                         x="0px" y="0px" height="60" viewBox="0 0 100 100" enable-background="new 0 0 0 0"
                         xml:space="preserve">
                <path fill="#000"
                      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s"
                                      from="0 50 50" to="360 50 50" repeatCount="indefinite"/>
                </path>
            </svg>
                </div>
                <div class="row checkout-form-row">
                    <div class="col-md-8" id="data-wrapper">
                        @forelse($competition as $match)
                            <div class="checkout-form-wrapper bna-league-wrapper">
                                <div class="inner-box-match">
                                    <div class="login-title">
                                        <h1 class="competition-detail" data-id="93">
                                            <a href="">{{$game_category->title}}</a>
                                        </h1>
                                    </div>
                                    <div style="text-align: center;" class="row">
                                        <div class="col-md-4">
                                            <div class="bna-league-logo-wrapper">
                                                <img src="/attachment/team/{{$match->team_1->thumbnail}}"
                                                     alt="team-logo">
                                                <h2>{{$match->team_1->title}}</h2>
                                            </div>
                                            <div class="small-table-left-points">
                                                <span class="right-points"
                                                      id="team1-score-{{$match->id}}">{{$match->team1_score}}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="comming-match-vs">
                                                <div class="broder-div"><h5>VS</h5></div>

                                                <section>
                                                    <div class="wrapper">

                                                        <div class="countdown" id="countdown-0">

                                                        </div>

                                                    </div>

                                                </section>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="bna-league-logo-wrapper">
                                                <img src="/attachment/team/{{$match->team_2->thumbnail}}"
                                                     alt="team-logo">
                                                <h2>{{$match->team_2->title}}</h2>
                                            </div>
                                            <div class="small-table-left-points">
                                                <span class="right-points"
                                                      id="team2-score-{{$match->id}}">{{$match->team2_score}}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style="margin-top:10px" class="form-group">
                                        <!-- Button -->
                                        <div id="bet-now-0" style="padding: 0px !important; text-align: center;"
                                             class="col-sm-12 controls">
                                            @guest('client')
                                                <span class="btn btn-danger btn-block">Login First</span>
                                            @else
                                                @if($match->completed == 1)
                                                    <span class="btn btn-danger btn-block disabled">Expired</span>
                                                @else
                                                    <a data-toggle="modal" data-target="#bet-modal" href="#bet-modal"
                                                       class="btn place-order-btn getBtn ml-0 btn-login bet trigger-bet-now"
                                                       data-competition-id="{{$match->id}}"
                                                       data-team="{{$match}}"
                                                    >BET NOW!</a>
                                                @endif
                                            @endguest
                                        </div>
                                    </div>
                                </div>
                            </div>

                        @empty
                            <div class="alert alert-danger">
                                No Matches Available
                            </div>
                        @endforelse
                    </div>
                    <div id="slip" class="col-md-4">
                        <form action="https://win375.com/bet/store" id="bet-form" method="post">
                            <input type="hidden" name="_token" value="9haHEANP7urkjP0331RK8xfFLBELCz8kCbQ23XEu">
                            <div class="checkout-form-wrapper point-table-small sidebar-wrapper">
                                <div class="container">
                                    <div class="inner-box-match">
                                        <div class="login-title">
                                            <h2>BET SLIP</h2>

                                            @forelse($bit_slip_data as $key => $slip)
                                                @if($key == 0)
                                                    <form action="{{ route('delete_bet',$slip->id) }}" method="POST">
                                                        @csrf
                                                    </form>
                                                @endif
                                                <div class="sidebar-div-added" id="slip-{{$slip->id}}">
                                                    <div class="container">
                                                        @if($slip->status == 0)
                                                            <form action="{{ route('delete_bet',$slip->id) }}"
                                                                  method="POST">
                                                                @csrf
                                                                <button class="remove-single-wager" type="submit">
                                                                    <i class="fa fa-window-close"
                                                                       aria-hidden="true"></i>
                                                                </button>
                                                            </form>
                                                        @endif

                                                        <div class="extra-added-div row">
                                                            <div class="col-md-10">
                                                                <h5>{{$slip->competition->title}}</h5>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div class="keep-picks-top"></div>
                                                            </div>
                                                        </div>
                                                        <div class="keep-summary-items">
                                                            <form id="update-bet-{{$slip->id}}"
                                                                  action="{{route('update_bet',$slip->id)}}"
                                                                  method="POST">
                                                                @csrf
                                                                <input type="hidden" name="status"
                                                                       id="bet-status-{{$slip->id}}"
                                                                       value="{{$slip->status}}">
                                                                <input type="hidden" name="competition_id"
                                                                       value="{{$slip->competition_id}}">
                                                                <div class="row">
                                                                    <div class="col-md-12 form-group">
                                                                        <select name="team_id"
                                                                                class="form-control"
                                                                                {{$slip->status == 1 ? 'disabled' : ''}} required>
                                                                            @foreach($slip->teams as $slip_team)
                                                                                <option
                                                                                    value="{{$slip_team->team_id}}" {{$slip->team_id == $slip_team->team_id ? 'selected' : ''}}>{{$slip_team->team_name}}</option>
                                                                            @endforeach
                                                                        </select>
                                                                    </div>
                                                                    <div class="col-md-12 form-group">
                                                                        <select name="bet_coins"
                                                                                class="form-control coins"
                                                                                {{$slip->status == 1 ? 'disabled' : ''}}
                                                                                required>
                                                                            <option
                                                                                value="50" {{$slip->bet_coins == '50' ? 'selected' : ''}}>
                                                                                50 Coins
                                                                            </option>
                                                                            <option
                                                                                value="100" {{$slip->bet_coins == '100' ? 'selected' : ''}}>
                                                                                100 Coins
                                                                            </option>
                                                                            <option
                                                                                value="200" {{$slip->bet_coins == '200' ? 'selected' : ''}}>
                                                                                200 Coins
                                                                            </option>
                                                                            <option
                                                                                value="300" {{$slip->bet_coins == '300' ? 'selected' : ''}}>
                                                                                300 Coins
                                                                            </option>
                                                                            <option
                                                                                value="400" {{$slip->bet_coins == '400' ? 'selected' : ''}}>
                                                                                400 Coins
                                                                            </option>
                                                                            <option
                                                                                value="500" {{$slip->bet_coins == '500' ? 'selected' : ''}}>
                                                                                500 Coins
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="col-sm-12">
                                                                        <div class="text-center">
                                                                            @if($slip->status == 0)
                                                                                <span class="badge badge-danger">Non-Submitted</span>
                                                                                <button type="submit"
                                                                                        class="badge badge-primary">
                                                                                    Update
                                                                                </button>
                                                                                <button type="button"
                                                                                        class="badge badge-primary"
                                                                                        onclick="event.preventDefault();
                                                                                            document.getElementById('bet-status-{{$slip->id}}').value = 1;
                                                                                            document.getElementById('update-bet-{{$slip->id}}').submit();">
                                                                                    Lock Bet
                                                                                </button>
                                                                            @else
                                                                                <span class="badge badge-success">Submitted</span>
                                                                            @endif
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            @empty

                                            @endforelse
                                            {{--                                            <div class="match-right-summary">--}}
                                            {{--                                                <div class="match-right-summary-title row">--}}
                                            {{--                                                    <div class="col-md-6 col-sm-6">--}}
                                            {{--                                                        <h3>Summary</h3>--}}
                                            {{--                                                    </div>--}}
                                            {{--                                                    <div class="col-md-6 col-sm-6">--}}


                                            {{--                                                    </div>--}}
                                            {{--                                                </div>--}}
                                            {{--                                                <div class="keep-summary-items" id="summary">--}}
                                            {{--                                                    <div class="row">--}}
                                            {{--                                                        <div class="col-md-6 col-sm-6">--}}
                                            {{--                                                            <p>Total Active Bets:</p>--}}
                                            {{--                                                        </div>--}}
                                            {{--                                                        <div class="col-md-6 col-sm-6">--}}
                                            {{--                                                            <div class="small-table-left-points">--}}
                                            {{--                                                                <span--}}
                                            {{--                                                                    class="keep-summary-items-right right-points">2</span>--}}
                                            {{--                                                            </div>--}}
                                            {{--                                                        </div>--}}
                                            {{--                                                    </div>--}}
                                            {{--                                                </div>--}}

                                            {{--                                                <div class="keep-summary-items">--}}
                                            {{--                                                    <div class="row">--}}
                                            {{--                                                        <div class="col-md-6 col-sm-6">--}}
                                            {{--                                                            <p>Total Bet:</p>--}}
                                            {{--                                                        </div>--}}
                                            {{--                                                        <div class="col-md-6 col-sm-6">--}}
                                            {{--                                                            <div class="small-table-left-points">--}}
                                            {{--                                                                <span--}}
                                            {{--                                                                    class="keep-summary-items-right right-points total-bet-money"> 0 Coins</span>--}}
                                            {{--                                                            </div>--}}
                                            {{--                                                        </div>--}}
                                            {{--                                                    </div>--}}
                                            {{--                                                </div>--}}
                                            {{--                                                <div class="row">--}}
                                            {{--                                                    <div class="col-sm-12">--}}
                                            {{--                                                        <div>--}}
                                            {{--                                                            <button type="submit" class="btn btn-success"--}}
                                            {{--                                                                    id="bet_submit">--}}
                                            {{--                                                                Submit--}}
                                            {{--                                                            </button>--}}
                                            {{--                                                        </div>--}}
                                            {{--                                                    </div>--}}
                                            {{--                                                </div>--}}

                                            {{--                                            </div>--}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <!--<div class="testo-btn">-->
            <!--    <a id="nbaload" href="#">LOAD MORE</a>-->
            <!--</div>-->
        </div>
    </div>

    <!--Login Section end here -->
    <!-- Button trigger modal -->
    {{--    <button type="button" class="btn btn-primary bet-modal-btn d-none" data-toggle="modal" data-target="#bet-modal">--}}
    {{--        Launch Bet Modal--}}
    {{--    </button>--}}



    <!-- Modal -->
    <div class="modal fade" id="bet-modal" tabindex="-1" role="dialog" aria-labelledby="bet-modalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <h3>Bet</h3>
                        </div>
                        <div class="col-sm-6">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>

                    <div id="betting-data">
                        <form id="bet-form" action="/save_bet" method="POST">
                            @csrf
                            <input type="hidden" name="competition_id" id="competition_id" value="">
                            <input type="hidden" name="game_category_id" id="game_category_id"
                                   value="{{$game_category->id}}">
                            <input type="hidden" name="teams[]" id="teams" value="">
                            <div class="form-group">
                                <select name="team_id" class="form-control" id="team_id" required>
                                    <option value="">Select Team</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select name="bet_coins" class="form-control" id="coins" required>
                                    <option value="">Select Bet</option>
                                    <option value="100">100</option>
                                    <option value="200">200</option>
                                    <option value="300">300</option>
                                    <option value="400">400</option>
                                    <option value="500">500</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-success btn-block">Bet</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@section('additional_scripts')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        jQuery('.trigger-bet-now').click(function () {
            setTimeout(() => {
                let competition_id = jQuery(this).attr('data-competition-id');
                jQuery('#competition_id').val(competition_id);
                let teams = jQuery.parseJSON(jQuery(this).attr('data-team'));
                let team_array = [
                    {
                        'team_id': teams.team_1.id,
                        'team_name': teams.team_1.title,
                    },
                    {
                        'team_id': teams.team_2.id,
                        'team_name': teams.team_2.title,
                    },
                ];
                jQuery('#teams').val(team_array);
                var html = '<option value="">Select Team</option>';
                jQuery('#team_id').html(html)
                for (let i = 0; i < team_array.length; i++) {
                    var option = '<option value="' + team_array[i].team_id + '">' + team_array[i].team_name + '</option>';
                    html += option;
                }
                jQuery('#team_id').html(html);
                // console.log(jQuery('#team_id'));
            }, 1000)
        });

    </script>

    <script>
        var ENDPOINT = "{{ url('/') }}";
        var slug = $('#game_category_slug').val()

        setInterval(() => {
            infinteLoadMore()
        }, 10000)

        function infinteLoadMore() {
            $.ajax({
                url: ENDPOINT + "/game-category/"+slug,
                datatype: "html",
                type: "get",
                beforeSend: function () {
                    // $("#data-wrapper").empty();
                    // $('.auto-load').show();
                }
            })
                .done(function (response) {
                    var competition = response.competition;
                    if (competition.length == 0) {
                        // $('.auto-load').html('<span class="text-white">No More Matches</span>');
                        return;
                    }
                    var game_category = response.game_category;
                    var render_html = '';
                    for(let i =0;i<competition.length;i++){
                        var game = competition[i];
                        document.getElementById("team1-score-"+game.id).innerHTML = game.team1_score;
                        document.getElementById("team2-score-"+game.id).innerHTML = game.team2_score;
                        {{--render_html += '<div class="checkout-form-wrapper bna-league-wrapper"><div class="inner-box-match"><div class="login-title"><h1 class="competition-detail" data-id="93"><a href="">' + game_category.title +  '</a></h1></div><div style="text-align: center;" class="row"><div class="col-md-4"><div class="bna-league-logo-wrapper"><img src="/attachment/team/' + game.team_1.thumbnail + '" alt="team-logo"><h2>' + game.team_1.title + '</h2></div><div class="small-table-left-points"><span class="right-points" id="team1-score-0">' + game.team1_score + '</span></div></div><div class="col-md-4"><div class="comming-match-vs"><div class="broder-div"><h5>VS</h5></div><section><div class="wrapper"><div class="countdown" id="countdown-0"></div></div></section></div></div><div class="col-md-4"><div class="bna-league-logo-wrapper"><img src="/attachment/team/' + game.team_2.thumbnail + '" alt="team-logo"><h2>' + game.team_2.title + '</h2></div><div class="small-table-left-points"><span class="right-points" id="team2-score-0">' + game.team2_score + '</span></div></div></div><div style="margin-top:10px" class="form-group"><div id="bet-now-0" style="padding: 0px !important; text-align: center;" class="col-sm-12 controls">';--}}
                        {{--if (!@json(auth('client')->check())) {--}}
                        {{--    render_html += '<span class="btn btn-danger btn-block">Login First</span>';--}}
                        {{--} else {--}}
                        {{--    if (game.completed == 1) {--}}
                        {{--        render_html += '<span class="btn btn-danger btn-block disabled">Expired</span>';--}}
                        {{--    } else {--}}
                        {{--        render_html += '<a data-toggle="modal" data-target="#bet-modal" href="#bet-modal" class="btn place-order-btn getBtn ml-0 btn-login bet trigger-bet-now" data-team="'+JSON.stringify(game)+'" data-competition-id="' + game.id + '">BET NOW!</a>';--}}
                        {{--    }--}}
                        {{--}--}}
                        {{--render_html += '</div></div></div></div>';--}}
                    }
                    // $('.auto-load').hide();
                    // $("#data-wrapper").append(render_html);
                })
                .fail(function (jqXHR, ajaxOptions, thrownError) {
                    console.log('Server error occured');
                });
        }
    </script>
@endsection

@endsection


