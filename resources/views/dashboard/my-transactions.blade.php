@extends('layouts.master_dashboard')
@section('content')

    <!-- ADs -->
    <div class="form-content ">
        <h2 class="sec-heading mb-3">My Transactions</h2>

        <table class="table">
            <thead>
            <tr>
                <th>Paypal ID</th>
                <th>Package</th>
                <th>Amount</th>
                <th>Coins</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            @forelse($data as $row)
                <tr>
                    <td>{{$row->paypal_response ? $row->paypal_response->id : ''}}</td>
                    <td>{{$row->package->title}}</td>
                    <td>{{$row->package->price}}</td>
                    <td>{{$row->package->coins}}</td>
                    <td>{{$row->created_at}}</td>
                    <td>{{$row->status == 1 ? 'Success' : 'Failed'}}</td>
                </tr>
            @empty
                <div class="alert alert-danger">
                    No Transactions Found
                </div>
            @endforelse
            </tbody>
        </table>

    </div>
    </div>

    </section>


@endsection
