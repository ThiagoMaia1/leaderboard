from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from board import views

router = routers.DefaultRouter()
router.register(r'scores', views.ScoreView, 'scores')
router.register(r'users', views.UserView, 'users')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
