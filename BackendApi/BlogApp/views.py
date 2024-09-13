
from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status

#Create your views herre

@api_view(['GET'])
def home(request):
    posts = Post.objects.all()
    serialize = PostSerializer(posts, many=True)
    return Response(serialize.data)

@api_view(['GET'])
def category(request):
    cat = Category.objects.all()
    serialize = CategorySerializer(cat, many=True)
    return Response(serialize.data)

@api_view(['GET'])
def post_detail(request, pk):
    post = Post.objects.get(pk = pk)
    serialize = PostSerializer(post)
    return Response(serialize.data)

@api_view(['GET'])
def users(request):
    user = User.objects.all()
    serialize = UserSerializer(user, many=True)
    return Response(serialize.data)

@api_view(['POST'])
def user_registration(request):
    serialize = UserRegSerializer(data=request.data)
    if serialize.is_valid():
        user = serialize.save()
        return Response(serialize.data, status=status.HTTP_201_CREATED)
    print('there is an error', serialize.errors)
    return Response(serialize.errors, status=status.HTTP_400_BAD_REQUEST)
