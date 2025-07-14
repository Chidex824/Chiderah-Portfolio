from django.shortcuts import render


from .models import Portfolio

def index(request):
    portfolios = Portfolio.objects.all()
    return render(request, 'main/index.html', {'portfolios': portfolios})
