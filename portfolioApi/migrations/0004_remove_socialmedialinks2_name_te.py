# Generated by Django 4.1.2 on 2022-10-25 16:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApi', '0003_socialmedialinks2_name_te'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='socialmedialinks2',
            name='name_te',
        ),
    ]