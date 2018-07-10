@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!

                @auth
                    <table border="1">
                        <caption style="caption-side: top;">Таблица пользователей</caption>
                        <thead>
                            <tr>
                                <th>Username</th>
                                    {{request()->session()->get('field')=='name'?(request()->session()->get('sort')=='asc'?'&#9652;':'&#9662;'):''}}
                                <th>email</th>
                                    {{request()->session()->get('field')=='email'?(request()->session()->get('sort')=='asc'?'&#9652;':'&#9662;'):''}}
                                <th>date of registration</th>
                                    {{request()->session()->get('field')=='created_at'?(request()->session()->get('sort')=='asc'?'&#9652;':'&#9662;'):''}}
                            </tr>    
                        </thead>
                        <tbody>
                            @foreach ($users as $user)
                                <tr>
                                    <td>{{ $user->name }}</td>
                                    <td>{{ $user->email }}</td>
                                    <td>{{ $user->created_at }}</td>
                                </tr>
                            @endforeach
                        </tbody>        
                    </table>
                @endauth

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
