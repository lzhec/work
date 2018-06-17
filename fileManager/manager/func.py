from django.db import models
import os
class Walking:

	def getCatalog(val):
		tree = os.walk(val)
		
		folder=[]
		for i in tree:
			folder.append(i)
		return folder

	val = 'G:/git_projects/fileManager/catalog'
	value = getCatalog(val)

	print(value)

	for i, j, k in value:
		for k, l, m in value:
			if os.path.dirname(k) == os.path.dirname(i):
				print(k + ' ' + 'Равны')
			else: print(k + ' ' + 'Нет')

	#for i in value:
		#for j in i[2]:
			#print(i[0] +'/' + j)
	"""directories=[]
	files=[]
	for i in value:
		for j in i:
			file = os.listdir(i[0])
			direct = i[0]
		files.append(file)
		directories.append(direct)

		#print(direct)
		#print(file)
		for k in direct
			if os.path.isdir(k):
				print('Это директория')"""

	"""for item in directories:			
		for i in files:
			for j in i:
				print(item + '---' + j)
			break"""

	#print(directories)
	#print(files)