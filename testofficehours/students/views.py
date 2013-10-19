from django.shortcuts import render
from students.models import Student

def index(request):
	latest_queue = Student.objects.all()
	context = {'latest_queue': latest_queue}
	return render(request, 'students/index.html', context)