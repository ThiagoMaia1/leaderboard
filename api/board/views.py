from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ScoreSerializer, UserSerializer
from .models import Score
from .models import User
from rest_framework.response import Response
from rest_framework import status


class ScoreView(viewsets.ModelViewSet):
    serializer_class = ScoreSerializer
    queryset = Score.objects.all()


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
