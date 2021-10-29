from django.contrib import admin
from .models import User, Score


class TodoAdmin(admin.ModelAdmin):
    list_display = ('value', 'user')

# Register your models here.


# admin.site.register(User, TodoAdmin)
admin.site.register(Score, TodoAdmin)
