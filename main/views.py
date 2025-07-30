from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Portfolio
from .serializers import PortfolioSerializer
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
import os

def index(request):
    return render(request, 'main/index.html')

def serve_react_app(request):
    """Serve React app for all non-API routes"""
    try:
        with open(os.path.join(settings.REACT_APP_DIR, 'index.html')) as f:
            return HttpResponse(f.read())
    except FileNotFoundError:
        return HttpResponse(
            "Please build the React app first. Run: cd frontend && npm run build",
            status=501,
        )

class PortfolioList(APIView):
    def get(self, request):
        portfolios = Portfolio.objects.all()
        serializer = PortfolioSerializer(portfolios, many=True)
        return Response(serializer.data)
