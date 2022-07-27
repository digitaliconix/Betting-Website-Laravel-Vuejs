<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="{{asset('frontend/dashboard/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet">
    <link href="{{asset('frontend/dashboard/css/style.css')}}" rel="stylesheet">
    <link href="{{asset('frontend/dashboard/css/responsive.css')}}" rel="stylesheet">
    <link href="{{asset('frontend/dashboard/css/slick-theme.css')}}" rel="stylesheet">
    <link href="{{asset('frontend/dashboard/css/slick.css')}}" rel="stylesheet">
    <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="{{asset('frontend/dashboard/css/AdminLTE.min.css')}}">
    <title>{{isset($title) ? $title : '' }} | {{ config('app.name') }}</title>
    <meta name="description" content="{{isset($description) ? isset($title) ? $title : '' : ''}} | {{ config('app.name') }}">
</head>
<body>
