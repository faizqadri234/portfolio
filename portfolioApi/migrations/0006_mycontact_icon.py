# Generated by Django 4.0.2 on 2022-10-05 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApi', '0005_alter_languagesicons_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='mycontact',
            name='icon',
            field=models.CharField(blank=True, max_length=90, null=True),
        ),
    ]
