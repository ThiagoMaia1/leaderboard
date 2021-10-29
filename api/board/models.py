from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=120)


class Score (models.Model):
    value = models.PositiveIntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
