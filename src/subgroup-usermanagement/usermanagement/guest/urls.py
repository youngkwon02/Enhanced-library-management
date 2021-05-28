from django.urls import path

from . import views

urlpatterns = [
    path('search', views.search_guest, name='search_guest'),
    path('detail/<userid>', views.guest_detail, name='guest_detail'),
    path('add', views.add_guest, name='add_guest'),
    path('addAction', views.add_guest_action, name='add_guest_action'),
    path('add/id-gen', views.id_generate, name='id_gen'),
]