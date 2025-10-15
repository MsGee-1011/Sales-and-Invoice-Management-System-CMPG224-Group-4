from rest_framework import routers
from .views import InvoiceViewSet

router = routers.DefaultRouter()
router.register(r"", InvoiceViewSet)

urlpatterns = router.urls
