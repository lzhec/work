from django.contrib import admin
from .models import *

class NoteAdmin (admin. ModelAdmin):
	list_display = [field.name for field in Note._meta.fields]  # field.name for field in Subscriber._meta.fields достает имена полей из всех полей, чтобы не перечислять все
														  			  # Subscriber._meta.fields достает все поля
	list_filter = ['title', 'text', 'created', 'updated']
	search_fields = ['title', 'text']
	# inlines = [FieldMappingInline]
	# fields = [] # перечисление полей
	# exclude = ['type'] # исключение полей
	# list_filter = ('report_data',) # в админке появляется фильтр, где можно отфильтровать по полям
	# search_fields = ['category', 'subCategory', 'suggestKeyword'] # появляется поиск по имени поля

	class Meta:
		model = Note

admin.site.register(Note, NoteAdmin) #регистрируем в админке нашу модель
