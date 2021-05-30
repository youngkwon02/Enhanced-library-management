from .models import Feedback

class FeedbackDAO:
  def save_feedback(is_anonymous, user_id, title, content, feedbackid):
    new_feedback = Feedback(feedbackid=feedbackid, anonimity=is_anonymous, title=title, content=content, userid=user_id)
    new_feedback.save()


  def getFeedbacks():
    feedbacks = Feedback.objects.all()
    return feedbacks

  
  def getFeedback(feedbackid):
    feedback = Feedback.objects.get(feedbackid = feedbackid)
    return feedback
    
