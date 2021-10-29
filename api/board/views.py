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

    def post(self, request):
        print("#############")
        print(request.data)
        serializedScore = ScoreSerializer(request.data)
        if serializedScore.is_valid(raise_exception=True):
            serializedScore.save()
            return Response(serializedScore.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
