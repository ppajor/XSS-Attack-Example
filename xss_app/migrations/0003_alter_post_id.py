# Generated by Django 4.2.1 on 2023-05-09 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('xss_app', '0002_auto_20230509_1226'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
