# Generated by Django 3.2.8 on 2021-10-29 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=60, primary_key=True, serialize=False),
        ),
    ]
