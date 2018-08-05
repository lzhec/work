# -*- coding: utf-8 -*-
from django.shortcuts import render, render_to_response, redirect
from django.contrib import auth
from django.contrib.auth.forms import UserCreationForm
from django.template.context_processors import csrf




def register(request):
    args = {}
    args.update(csrf(request))
    args['form'] = UserCreationForm()
    if request.POST:
        newUser_form = UserCreationForm(request.POST)
        if newUser_form.is_valid():
            newUser_form.save()
            newUser = auth.authenticate(username=newUser_form.cleaned_data['username'], password=newUser_form.cleaned_data['password2'])
            auth.login(request, newUser)
            return redirect('/notes')
        else:
            args['form'] = newUser_form
    return render_to_response('login/register.html', args)


def login(request):
    args = {}
    args.update(csrf(request))
    if request.POST:
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user) #авторизируем пользователя
            return redirect('/notes')
        else:
            args['login_error'] = "Пользователь не найден"
            return render_to_response('login/login.html', args)
    else:
        return render_to_response('login/login.html', args)


def logout(request):
    auth.logout(request) #деавторизируем пользователя
    return render_to_response('site/main.html')

