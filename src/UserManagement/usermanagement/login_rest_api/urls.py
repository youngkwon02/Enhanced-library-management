from django.conf.urls import url
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

from . import views

urlpatterns = [
  path('', views.login, name='login'),
  path('get-token', views.get_token, name='get-token'),
  path('verify-token', views.authorization, name='authorization'),
  url(r'^api-jwt-auth/$', obtain_jwt_token),
  url(r'^api-jwt-auth/refresh/$', refresh_jwt_token),
  url(r'^api-jwt-auth/verify/$', verify_jwt_token),
]