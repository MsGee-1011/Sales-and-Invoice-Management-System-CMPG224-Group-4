from django.contrib import admin
from .models import Sale

@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer', 'product', 'quantity', 'total_price', 'date')
    list_filter = ('date', 'product')
    search_fields = ('customer__name', 'product__name')
    readonly_fields = ('total_price', 'date')
