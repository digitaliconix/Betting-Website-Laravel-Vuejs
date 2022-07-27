@extends('layouts.master_dashboard')
    @section('content')
        <div class="form-content">
            <h2 class="sec-heading">Edit Your Profile</h2>

            <form action="/profile-update" method="post" class="mt-3" enctype="multipart/form-data">
                {{ csrf_field() }}
                <div class="profile-section  mb-3">


                    <div class="profile-pic edit-pic">
                        @if($data->photo != null)
                            <img src="{{$data->photo}}" class="img-fluid " alt="">
                        @else
                            <img src="/frontend/assets/front/images/default.png" class="img-fluid " alt="">
                        @endif

                    </div>


                </div>

                <div class="profile-information">
                    <input type="file" class="form-control " name="photo" id="profile-img" value="">
                    <input type="text" class="form-control" name="name" value="{{$data->name}}"
                           placeholder="Enter Your Name">
                    @error('name')
                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                    <input type="email" class="form-control" name="email" value="{{$data->email}}"
                           placeholder="Enter Email Address">
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                    <button type="submit" class="btn btn-business">Save Changes</button>
                </div>
            </form>
        </div>
        <!-- ADs -->
        </div>
</section>
@endsection
