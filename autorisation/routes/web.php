<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
	//$users = DB::table('users')->get();
	$users = App\Users::all();
	return view('home', compact('users'));
});

Route::group(['prefix' => 'users'], function() {
	Route::get('/home', 'UsersController@index');
});

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
