# Generated by Django 4.1.2 on 2022-11-29 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApi', '0009_delete_myprogress_alter_languagesicons_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='languagesicons',
            name='exp_level',
            field=models.CharField(blank=True, choices=[('Beginner', 'Beginner'), ('Junior', 'Junior'), ('Intermediate', 'Intermediate'), ('Experienced', 'Experienced')], max_length=200, verbose_name='Experience Level'),
        ),
    ]