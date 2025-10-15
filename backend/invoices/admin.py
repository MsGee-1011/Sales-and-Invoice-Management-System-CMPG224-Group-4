from django.contrib import admin
from .models import Invoice


@admin.register(Invoice)
class InvoiceAdmin(admin.ModelAdmin):
    list_display = ("id", "customer", "sale", "total_amount", "date_issued")
    search_fields = ("customer__name",)
    readonly_fields = ("total_amount", "date_issued")
