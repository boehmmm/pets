# Generated by Django 5.1.1 on 2025-05-13 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_category_alter_pet_age_alter_pet_weight_subcategory_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='subcategory',
            name='text',
            field=models.TextField(blank=True),
        ),
    ]
