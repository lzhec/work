@extends('layouts.app')

@section('css')
	<style>
		.loading {
			background: lightgrey;
			padding: 15px;
			position: fixed;
			border-radius: 4px;
			left: 50%;
			top: 50%;
			text-align: center;
			margin: -40px 0 0 -50px;
			z-index: 2000;
			display: none;
		}
	</style>
@endsection
@section('content')
	<div id="content">
		@include('home')
	</div>
	<div class="loading">
		<i class="fa fa-refresh fa-spin fa-2x fa-tw"></i>
		<br>
		<span>Loading</span>
	</div>
@endsection
