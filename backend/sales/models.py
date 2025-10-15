from django.db import models
from customers.models import Customer
from products.models import Product
from django.core.validators import MinValueValidator


class Sale(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1)])
    unit_price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True
    )
    total_price = models.DecimalField(
        max_digits=12, decimal_places=2, blank=True, null=True
    )
    date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # default unit_price to the product price if not provided
        if self.unit_price is None:
            self.unit_price = self.product.price
        # calculate total
        self.total_price = self.unit_price * self.quantity
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Sale #{self.id} - {self.product.name} x {self.quantity}"
