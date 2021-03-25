from django.views.generic import ListView,DetailView,TemplateView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.shortcuts import get_object_or_404, render, redirect

def home(request):
    return render(request, 'portfolio/home.html')

def project(request, project_id):
    templatename = 'project-'+str(project_id)
    return render(request,'portfolio/'+templatename+'.html')

def musicplayer(request):
    return render(request,'musicplayer/musicplayer.html')