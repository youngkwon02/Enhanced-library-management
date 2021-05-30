from django.http.response import HttpResponseRedirect
from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import Guest
from .IdGen import IdGen
from .NewComerChecker import NewComerChecker
from .guestDAO import GuestDAO
from django.contrib import messages


def search_guest(request):
    searchParam = request.POST.get('searchParam', '')
    if searchParam:
        guestList = GuestDAO.getUser(searchParam)
        context = {
            'guests': guestList,
            'searchParam': searchParam
        }
        return render(request, 'guest/search_guest.html', context)

    return render(request, 'guest/search_guest.html')


def guest_detail(request, userid):
    guest = GuestDAO.getUser(userid)[0]
    context = {
        'guest': guest
    }
    return render(request, 'guest/guest_detail.html', context)


def add_guest(request):
    return render(request, 'guest/add_guest.html')
    

def id_generate(request):
    new_id = IdGen.generateID()
    return HttpResponse(new_id)


def add_guest_action(request):
    if request.method != "POST" or not NewComerChecker.check(request.POST):
        return redirect('add_guest')
    GuestDAO.addUser(IdGen.generateID(), request.POST, request.FILES['profile'])
    messages.info(request, "The new guest has been successfully registered.")
    return HttpResponseRedirect('add')