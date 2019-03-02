import requests
from django.shortcuts import render

from django.http import HttpResponse, Http404, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse, reverse_lazy
from .models import currency

# Create your views here.
def index(request):
    data = currency.objects.all()
    args = {'data': data}
    return render(request, "home/index.html", args)
