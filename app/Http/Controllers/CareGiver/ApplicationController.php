<?php

namespace App\Http\Controllers\CareGiver;

use App\User;
use App\Http\Controllers\Controller;

class ApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:care_giver');
    }
    public function index()
    {
        return view('backend.care_giver.application');
    }
}
