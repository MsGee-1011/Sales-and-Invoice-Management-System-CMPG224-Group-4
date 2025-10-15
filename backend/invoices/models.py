from django.db import models
from customers.models import Customer
from sales.models import Sale


class Invoice(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE)
    date_issued = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(
        max_digits=12, decimal_places=2, blank=True, null=True
    )

    def save(self, *args, **kwargs):
        if self.total_amount is None:
            self.total_amount = self.sale.total_price
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Invoice {self.id} - {self.customer.name}"
