<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>{{config('app.name')}} </title>
  <!-- Styles -->
  <link rel="stylesheet" href="/css/app.css">

  <!-- Favicon -->
    <link rel="shortcut icon" href="/frontend/assets/front/images/favicon.png" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>
</head>
<body>
    <style>
        a.nav-link {
            color: #ffffff !important;
        }
    </style>
  <noscript>
    <strong>We're sorry but {{config('app.name')}}  doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="admin">
      <Admin></Admin>
  </div>

  <script src="/js/admin/app.js"></script>
  <script type="text/javascript">
      window.apex = {
          user: {
              name : "{{auth()->user()->name}}",
              id: "{{auth()->user()->id}}",
              auth_guard : "{{auth()->user()->getGuarded()}}",
              photo: "{{auth()->user()->photo}}",
              auth_class: "{{get_class(auth()->user())}}",
              permissions :  @json(auth()->user()->getAllPermissions())
          }
      };
  </script>
</body>
</html>
