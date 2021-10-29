from rest_framework import serializers
from .models import Score, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name')


class ScoreSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True, many=False)
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True)

    class Meta:
        model = Score
        fields = ('id', 'value', 'user', 'user_id')

    def create(self, validated_data):
        print('1111111111111111111111')
        print(validated_data)
        user = validated_data.pop('user_id')
        print(user)
        score = Score.objects.create(user=user, ** validated_data)
        return score
