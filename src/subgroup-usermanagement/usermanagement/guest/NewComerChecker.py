from .models import Guest

class NewComerChecker:
  def check(data):
    query_set = Guest.objects.filter(username=data['name'], phone_number=data['phone'])
    if len(query_set) > 0 :
      return False
    return True