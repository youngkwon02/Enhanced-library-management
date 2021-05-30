from django.db import models


class Feedback(models.Model):
    feedbackid = models.IntegerField(null=False, primary_key=True)
    anonimity = models.TextField(default='')
    userid = models.TextField(null=False)
    title = models.CharField(max_length=50)
    content = models.TextField()
    create_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
