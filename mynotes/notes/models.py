from django.contrib.auth.models import User
from django.db import models
from loginsys.models import *


class Note(models.Model):
    title = models.CharField(max_length=128)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, default=None)
