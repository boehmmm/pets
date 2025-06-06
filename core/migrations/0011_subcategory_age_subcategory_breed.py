# Generated by Django 5.1.1 on 2025-05-13 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_subcategory_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='subcategory',
            name='age',
            field=models.CharField(blank=True, choices=[('puppy', 'Щенок'), ('adult_dog', 'Взрослый (Собака)'), ('kitten', 'Котенок'), ('adult_cat', 'Взрослый (Кот)')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='subcategory',
            name='breed',
            field=models.CharField(blank=True, choices=[('persian', 'Персидская'), ('siamese', 'Сиамская'), ('scottish_fold', 'Шотландская'), ('sphynx', 'Сфинкс'), ('domestic_cat', 'Домашняя кошка'), ('husky', 'Хаски'), ('german_shepherd', 'Овчарка'), ('poodle', 'Пудель'), ('samoyed', 'Самоед'), ('domestic_dog', 'Домашняя собака')], max_length=50, null=True),
        ),
    ]
