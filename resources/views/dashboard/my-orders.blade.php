@extends('layouts.master_dashboard')
@section('content')

    <!-- ADs -->
    <div class="form-content ">
        <h2 class="sec-heading mb-3">My Orders</h2>

        <table class="table">
            <thead>
            <tr>
                <th>Order Number</th>
                <th>Order Date</th>
                <th>Product Name</th>
                <th>Product Coin</th>
                <th>Shipping Address</th>
            </tr>
            </thead>
            <tbody>
            @forelse($data as $row)
                <tr>
                    <td>{{$row->order_number}}</td>
                    <td>{{$row->created_at}}</td>
                    <td>{{$row->product->title}}</td>
                    <td>{{$row->product->unit_price}}</td>
                    <td>{{$row->address}}</td>
                </tr>
            @empty
                <div class="alert alert-danger">
                    No Orders Found
                </div>
            @endforelse
            </tbody>
        </table>

    </div>
    </div>

    </section>


@endsection
