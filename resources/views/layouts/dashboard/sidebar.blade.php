<section class="trade-form poppins main-post">
    <div class="side-navbar active-nav d-flex justify-content-start flex-column" id="sidebar">
        <a href="/home" class="nav-link h3 text-white my-2" class="logo">
            <img src="/frontend/assets/front/images/header-logo.png" width="100" class="img-fluid" alt="">
        </a>
        <div class="nav flex-column ">
            <a href="/home" class="nav-link {{ request()->is('/home') ? 'active' : '' }}">
                <div class="iconic"><i class="fas fa-home"></i></div> &nbsp; Home</a>
            <a href="/profile-edit" class="nav-link {{ request()->is('/profile-edit') ? 'active' : '' }}">
                <div class="iconic"><i class="fas fa-user"></i></div> &nbsp; My Profile</a>
            <a href="/my-bets" class="nav-link {{ request()->is('/my-bets') ? 'active' : '' }}">
                <div class="iconic"><i class="fas fa-user"></i></div> &nbsp; My Bets</a>
            <a href="/my-transactions" class="nav-link {{ request()->is('/my-transactions') ? 'active' : '' }}">
                <div class="iconic"><i class="fas fa-user"></i></div> &nbsp; My Transactions</a>
            <a href="/my-orders" class="nav-link {{ request()->is('/my-orders') ? 'active' : '' }}">
                <div class="iconic"><i class="fas fa-user"></i></div> &nbsp; My Orders</a>
            <a href="{{ route('client.logout') }}"
               onclick="event.preventDefault();
                document.getElementById('logout-form').submit();" class="nav-link">
                <div class="iconic">
                    <i class="fas fa-sign-out-alt"></i>
                    <form id="logout-form" action="{{ route('client.logout') }}" method="POST"
                          class="d-none">
                        @csrf
                    </form>
                </div>
                &nbsp; Logout
            </a>
            {{--        <h4>Refer Us to Your Friend</h4>--}}
        </div>
        <div class="developed">
            <h6>Developed by <a href="#">Digital Iconix</a></h6>
        </div>
    </div>
    <!-- Main Wrapper -->
    <div class="p-1 my-container active-cont">
        <!-- Top Nav -->
        <nav class="navbar top-navbar navbar-light px-5">
            <a class="btn border-0" id="menu-btn"><i class="fas fa-bars"></i></a>
        </nav>
