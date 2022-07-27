@extends('layouts.master_dashboard')
@section('content')

    <!-- ADs -->
    <div class="form-content ">
        <h2 class="sec-heading mb-3">My Bets</h2>

        <table class="table">
            <thead>
            <tr>
                <th>Competition</th>
                <th>Selected Team</th>
                <th>Game</th>
                <th>Bet Coins</th>
                <th>Date</th>
                <th>Status</th>
                <th>Result</th>
            </tr>
            </thead>
            <tbody>
            @forelse($data as $row)
                <tr>
                    <td>{{$row->competition->title}}</td>
                    <td>{{$row->team->title}}</td>
                    <td>{{$row->team->game_category->title}}</td>
                    <td>{{$row->bet_coins}}</td>
                    <td>{{$row->created_at}}</td>
                    <td>{{$row->status == 0 ? 'Pending':'Confirm'}}</td>
                    <td>{{$row->bet_status == null ? 'No Result Yet' :  $row->bet_status == 0 ? 'Lost' : 'Won' }}</td>
                </tr>
            @empty
                <div class="alert alert-danger">
                    No Bets Found
                </div>
            @endforelse
            </tbody>
        </table>

    </div>
    </div>

    </section>


@endsection
