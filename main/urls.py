from django.urls import path
from .views import index, PortfolioList

urlpatterns = [
    path('', index, name='index'),
    path('api/portfolio/', PortfolioList.as_view(), name='portfolio-list'),
]
