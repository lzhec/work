<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CoordsController extends Controller
{
	public function index() {
  	return view('map');
  }
}
