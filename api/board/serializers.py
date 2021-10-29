from rest_framework import serializers
from .models import Score, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name',)


class ScoreSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True, many=False)
    username = serializers.CharField(write_only=True)

    class Meta:
        model = Score
        fields = ('id', 'value', 'user', 'username')

    def create(self, validated_data):
        username = validated_data.pop('username')
        print(username)
        user, wasCreated = User.objects.get_or_create(name=username)
        score = Score.objects.create(user=user, ** validated_data)
        return score
