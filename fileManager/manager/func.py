from django.db import models
import os
class Walking:

	def getCatalog(val):
		tree = os.walk(val)
		
		folder=[]
		for i in tree:
			folder.append(i)
		return folder

	val = 'G:/git_projects/work/fileManager/catalog'
	value = getCatalog(val)
	count = 0

	#print(value)

	for i in value:
		print('step')
		print(i[0])
		print(i[1])
		print(i[2])
		a = i[0]
		print('step')
		for j in i[1]:
			if i[0] == a:
				print(i[0]+'/'+j)
			print(i[0])
			print('++++++++++')
			for k in i[2]:
				print(i[0]+'/'+k)
				print('-------------')