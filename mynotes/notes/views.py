from django.shortcuts import render, redirect, render_to_response
from django.contrib import auth
from django.utils.timezone import datetime
from .models import Note
from .forms import NoteForm


def notes(request):
    form = None
    form = NoteForm(request.POST or None)
    user = request.user
    notes = Note.objects.filter(user=user)
    username = auth.get_user(request).username
    #now = datetime.today()
    if request.method == "POST":
        form = form.save(commit=False)
        form.user = user
        form.save()
    #user = User.objects.filter(id=user_id)
    #notes = Note.objects.filter(id=user_id)
     #and ("pause" not in request.session):
        #request.session.set_expiry(3600)
        #request.session['pause'] = True
    return render(request, 'notes/notes.html', locals())

    '''session_key = request.session.session_key
    if not session_key:
        request.session.cycle_key()'''


def note(request, note_id):
    notee = Note.objects.filter(id=note_id)

    return render(request, 'notes/note.html', locals())
