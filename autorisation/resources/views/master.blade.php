<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>laravel Ajax</title>
	@yield('head')
	<link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
	@yield('css')
</head>
<body>
	
	@yeild('content')

	<script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
	<script src="{{ asset('js/bootstrap.min.js') }}"></script>

	@yeild('js')
</body>
</html>