from django.urls import path
from .views import PortfolioList

urlpatterns = [
    path('api/portfolio/', PortfolioList.as_view(), name='portfolio-list'),
]
