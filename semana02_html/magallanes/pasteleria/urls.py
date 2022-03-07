from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pasteles', views.pasteles, name='pasteles'),
    path('comprar', views.comprar, name='comprar'),
    path('informacion', views.admin, name='admin'),
]