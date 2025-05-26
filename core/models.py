from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import datetime


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField("Имя", max_length=50)
    last_name = models.CharField("Фамилия", max_length=50)
    patronymic = models.CharField("Отчество", max_length=50, blank=True)
    birth_date = models.DateField("Дата рождения")

    def __str__(self):
        return f"{self.last_name} {self.first_name}"


class Pet(models.Model):
    ANIMAL_CHOICES = [
        ('cat', 'Кот'),
        ('dog', 'Собака'),
    ]

    CAT_BREEDS = [
        ('persian', 'Персидская'),
        ('siamese', 'Сиамская'),
        ('scottish_fold', 'Шотландская'),
        ('sphynx', 'Сфинкс'),
        ('domestic_cat', 'Домашняя'),
    ]


    DOG_BREEDS = [
        ('husky', 'Хаски'),
        ('german_shepherd', 'Овчарка'),
        ('poodle', 'Пудель'),
        ('samoyed', 'Самоед'),
        ('domestic_dog', 'Домашняя'),
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    animal_type = models.CharField(max_length=10, choices=ANIMAL_CHOICES, default='cat')
    breed = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    weight = models.IntegerField(default='0')
    age = models.IntegerField(default='0')
    photo = models.ImageField(upload_to='pet_photos/', null=True, blank=True)

    def __str__(self):
        return self.name
    def get_breed_display(self):
        breed_dict = dict(self.CAT_BREEDS + self.DOG_BREEDS)
        return breed_dict.get(self.breed, self.breed)

class CareRecommendation(models.Model):
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    recommendation = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Health(models.Model):
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    mail = models.EmailField(max_length=50, null=True)
    visit_date = models.DateField(null=True)
    description = models.TextField(default='', max_length=100)

    def __str__(self):
        return f"{self.pet.name} - {self.visit_date}"
    

class EmailConfirmation(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_expired(self):
        return timezone.now() > self.created_at + datetime.timedelta(minutes=5)

class PetNote(models.Model):
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    note = models.CharField(max_length=255)
    date = models.DateField()
    time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Subcategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')
    name = models.CharField(max_length=100)
    text = models.TextField(blank=True)
    age_choices = [
        ('puppy', 'Щенок'),
        ('adult_dog', 'Взрослый (Собака)'),
        ('kitten', 'Котенок'),
        ('adult_cat', 'Взрослый (Кот)'),
    ]
    age = models.CharField(max_length=20, choices=age_choices, blank=True, null=True)
    breed_choices = [
        ('persian', 'Персидская'),
        ('siamese', 'Сиамская'),
        ('scottish_fold', 'Шотландская'),
        ('sphynx', 'Сфинкс'),
        ('domestic_cat', 'Домашняя кошка'),
        ('husky', 'Хаски'),
        ('german_shepherd', 'Овчарка'),
        ('poodle', 'Пудель'),
        ('samoyed', 'Самоед'),
        ('domestic_dog', 'Домашняя собака'),
    ]
    breed = models.CharField(max_length=50, choices=breed_choices, blank=True, null=True)

    def __str__(self):
        return self.name



class Recommendation(models.Model):
    subcategory = models.ForeignKey(Subcategory, on_delete=models.CASCADE, related_name='recommendations')
    title = models.CharField(max_length=200)
    content = models.TextField()
    tags = models.CharField(max_length=200)
    age = models.CharField(max_length=20, choices=[('щенок', 'Щенок'), ('взрослый', 'Взрослый')])
    breeds = models.CharField(max_length=200)  # или ManyToMany к модели породы