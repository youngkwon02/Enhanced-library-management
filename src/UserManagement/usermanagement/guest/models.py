from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.contrib.auth.hashers import make_password, is_password_usable

class Guest(AbstractUser):
    userid = models.IntegerField(null=True, default="1000000000")
    name = models.CharField(max_length=50, null=False)
    phone_number = models.IntegerField(default=0)
    profile_image = models.ImageField(upload_to='images', blank=True, null=True)
    restricted_status = models.BooleanField(default=False)
    restricted_period = models.IntegerField(default=0)

    def __str__(self):
        return self.username

# DANGEROUS
@receiver(pre_save, sender=Guest)
def password_hashing(instance, **kwargs):
    instance.password = make_password(instance.password)