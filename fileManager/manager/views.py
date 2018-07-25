from django.shortcuts import render
from manager.func import Walking

def manager(request):
	#directories = Walking.directories
	#files = Walking.files
	val = Walking.val
	value = Walking.value
	count = Walking.count
	
	return render(request, 'manager/index.html', locals())

"""def traverse(direct):
	    print '<ul>'
	    for item in os.listdir(direct):
	        print '<li>%s</li>' % item
	        fullpath = os.path.join(direct, item)
	        if os.path.isdir(fullpath):
	            traverse(fullpath)
	    print '</ul>'

	projectdir = '.'
	traverse(projectdir)"""