from django.shortcuts import render

def index(request): 
    return render(request, 'index.html')

def pasteles(request):
    return render(request, 'cakes.html')

def comprar(request):
    return render(request, 'buy.html')

def admin(request):
    return render(request, 'admin.html')


