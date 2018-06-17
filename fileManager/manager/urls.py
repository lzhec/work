from django.urls import path
from manager import views

urlpatterns = [
     path('filemanager/', views.manager, name='filemanager'),
     path('', views.manager, name='filemanager')
]
