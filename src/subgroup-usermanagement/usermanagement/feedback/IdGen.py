from .models import Feedback

class IdGen:
  def generateID():
    feedback_qset = Feedback.objects.order_by('feedbackid').last()
    if feedback_qset == None:
      return 1
    else:
      last_id = int(feedback_qset.feedbackid)
      return last_id + 1