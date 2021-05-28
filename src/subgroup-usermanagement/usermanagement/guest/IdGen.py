from .models import Guest

class IdGen:
  def generateID():
    guest_qset = Guest.objects.order_by('userid').last()
    if guest_qset == None:
      return 2100000001
    else:
      last_id = int(guest_qset.userid)
      return last_id + 1