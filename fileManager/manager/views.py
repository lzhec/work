from django.shortcuts import render
from manager.func import Walking

def manager(request):
	#directories = Walking.directories
	#files = Walking.files
	value = Walking.value
	count = Walking.count
	
	return render(request, 'manager/index.html', locals())