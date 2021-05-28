from django.shortcuts import render, redirect
from django.http import HttpResponse
from .IdGen import IdGen
from .feedbackDAO import FeedbackDAO
from django.contrib import messages
from django.http.response import HttpResponseRedirect
from .models import Feedback
from guest.models import Guest
import requests
import jwt
from django.conf import settings

def feedback_list(request):
    feedbacks = FeedbackDAO.getFeedbacks()
    context = {
            'feedbacks': feedbacks
        }

    return render(request, 'feedback/feedback_list.html', context)


def feedback_detail(request, feedbackid):
    feedback = FeedbackDAO.getFeedback(feedbackid)
    if feedback.anonimity == 'open':
        anonymous = False
    else:
        anonymous = True
    context = {
        'feedback': feedback,
        'anonymous': anonymous
    }

    return render(request, 'feedback/feedback_detail.html', context)
    

def add_feedback(request):
    return render(request, 'feedback/add_feedback.html')
    

def id_generate(request):
    new_id = IdGen.generateID()
    return HttpResponse(new_id)


def get_user_id(request, token):
    decoded = jwt.decode(jwt=token, key=settings.SECRET_KEY, algorithms=['HS256'])
    user_name = decoded['username']
    user_email = decoded['email']
    obj = Guest.objects.get(username=user_name, email=user_email)
    return obj.userid


def add_feedback_action(request):
    if request.method != "POST":
        return redirect('add_feedback')
    # Token verify
    token = request.POST['token']
    FeedbackDAO.save_feedback(request.POST['anonymity'], get_user_id(request, token), request.POST['title'], request.POST['content'], IdGen.generateID())
    messages.info(request, "The new feedback has been successfully sent.")
    return HttpResponseRedirect('add')