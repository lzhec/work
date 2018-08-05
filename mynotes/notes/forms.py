from django import forms
from .models import Note

class NoteForm (forms.ModelForm): #создаем форму

	class Meta:
		model = Note #задаем модель формы из models.py
		exclude = ["created", "updated", "user"]
