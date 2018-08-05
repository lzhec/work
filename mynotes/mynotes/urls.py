from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

import loginsys
from loginsys import views
from . import views

admin.autodiscover()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.site, name='home'),
    path('notes/', include('notes.urls')),
    path('login/', loginsys.views.login),
    path('logout/', loginsys.views.logout),
    path('register/', loginsys.views.register),
] \
              + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) \
              + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
