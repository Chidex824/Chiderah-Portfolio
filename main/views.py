from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Portfolio
from .serializers import PortfolioSerializer

def index(request):
    portfolios = Portfolio.objects.all()
    return render(request, 'main/index.html', {'portfolios': portfolios})

class PortfolioList(APIView):
    def get(self, request):
        portfolios = Portfolio.objects.all()
        serializer = PortfolioSerializer(portfolios, many=True)
        return Response(serializer.data)
