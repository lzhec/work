from django.shortcuts import render
'''from .forms import SubscriberForm
from products.models import Product
from products.models import ProductImage'''

def site(request):
	'''tour_images = TourImage.objects.filter(is_active=True, is_main=True, product__is_active=True) # выводим активные товары на страницу
	best_deals = tours_images.filter(product__is_best=True)
	new_arrivals = tours_images.filter(product__is_new=True)
	form = SubscriberForm(request.POST or None)

	if request.method == 'POST' and form.is_valid():
		new_form = form.save() #сохраняем переданную форму в админке (появляется новый подписчик)'''

	return render(request, 'site/index.html', locals())