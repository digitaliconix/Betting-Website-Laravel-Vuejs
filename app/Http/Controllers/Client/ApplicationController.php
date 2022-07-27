<?php

namespace App\Http\Controllers\Client;

use App\User;
use App\Http\Controllers\Controller;

class ApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:client');
    }
    public function index()
    {
        return view('backend.client.application');
    }
}
