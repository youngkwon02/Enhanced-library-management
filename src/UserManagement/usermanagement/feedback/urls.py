from django.urls import path

from . import views

urlpatterns = [
    path('list', views.feedback_list, name='feedback_list'),
    path('detail/<feedbackid>', views.feedback_detail, name='feedback_detail'),
    path('add', views.add_feedback, name='add_feedback'),
    path('addAction', views.add_feedback_action, name='add_feedback_action'),
    path('add/id-gen', views.id_generate, name='id_gen'),
]