from .models import Guest
from django.db.models import Q


class GuestDAO:
  def addUser(new_id, data, image):
    Guest.objects.create(userid=new_id, username=data['name'], password=data['password'], email=data['email'], phone_number=data['phone'], profile_image=image)
    

  def getUser(searchParam):
    guests = Guest.objects.all()
    guests = guests.exclude(userid=2100000000)
    
    guestList = guests.filter(Q(username__icontains=searchParam) | Q(userid__icontains=searchParam))
    
    return guestList
