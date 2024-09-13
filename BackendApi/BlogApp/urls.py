from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('category/', views.category, name='category'),
    path('blog/<str:pk>', views.post_detail, name='post_detail'),
    path('users/', views.users, name='user'),
    path('register/', views.user_registration, name='user_registration')
]
