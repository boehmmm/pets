from django.contrib import admin
from .models import Pet, Category, Subcategory
# Register your models here.
admin.site.register(Pet)
admin.site.register(Category)
admin.site.register(Subcategory)