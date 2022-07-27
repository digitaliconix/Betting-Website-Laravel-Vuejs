@extends('layouts.master_dashboard')

@section('content')
    <!-- ADs -->
    <style>
        span.wallet {
            border-bottom: 1px solid #000;
        }
    </style>
    <div class="form-content">
        <div class="media">
            <div class="profile-pic">
                @if($data->photo != null)
                    <img src="{{$data->photo}}" class="img-fluid " alt="">
                @else
                    <img src="frontend/assets/front/images/default.png" class="img-fluid " alt="">
                @endif
            </div>
            <div class="media-body align-self-center">
                <h5>{{$data->name}}</h5>
                <a href="/profile-edit">Edit Your Profile</a><br>
                <h6><span class="wallet">{{$data->wallet}} </span>Coins In Wallet</h6>
            </div>
        </div>
        <form action="" class="mt-5">
            <ul class="stats_cars">
                <li>
                    <a style="color:#000; text-decoration: none" href="/my-bets?status=pending"><span>{{$pending_count}} Bet Pending</span></a>
                </li>
                <li>
                    <a style="color:#000; text-decoration: none" href="/my-bets?status=completed"><span>{{$completed_count}} Bet Completed</span></a>
                </li>

            </ul>
        </form>
    </div>
    <!-- ADs -->
    </div>
    </section>
@endsection
