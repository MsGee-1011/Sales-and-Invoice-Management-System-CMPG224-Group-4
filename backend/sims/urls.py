from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Sims API!")

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/customers/', include('customers.urls')),
    path('api/products/', include('products.urls')),
    path('api/sales/', include('sales.urls')),
    path('api/invoices/', include('invoices.urls')),
]
