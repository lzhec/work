from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include('manager.urls')),
]\
				+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) \
				+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
