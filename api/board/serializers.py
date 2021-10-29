from rest_framework import serializers
from .models import Score, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name',)


class ScoreSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True, many=False)
    username = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True)

    class Meta:
        model = Score
        fields = ('id', 'value', 'user', 'username')

    def create(self, validated_data):
        user = validated_data.pop('username')
        score = Score.objects.create(user=user, ** validated_data)
        return score
