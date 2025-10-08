from rest_framework import serializers
from .models import Customer

# Serializers convert Django models to JSON and back
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer  # Link serializer to the Customer model
        fields = '__all__'  # Include all fields from the model
