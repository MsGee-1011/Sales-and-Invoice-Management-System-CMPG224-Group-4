from rest_framework import routers
from .views import SaleViewSet

router = routers.DefaultRouter()
router.register(r"", SaleViewSet)

urlpatterns = router.urls
