from django.views.generic import ListView,DetailView,TemplateView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.shortcuts import get_object_or_404, render, redirect

def home(request):
    return render(request, 'portfolio/home.html')