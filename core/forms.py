from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Pet, UserProfile, Health

class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['first_name', 'last_name', 'patronymic', 'birth_date']
        

class RegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    code = forms.CharField(required=False, max_length=6)

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']



class PetForm(forms.ModelForm):
    breed = forms.ChoiceField(choices=[], required=True)

    class Meta:
        model = Pet
        fields = ['animal_type', 'breed', 'name']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        if 'animal_type' in self.data:
            animal_type = self.data.get('animal_type')
        elif self.instance and self.instance.animal_type:
            animal_type = self.instance.animal_type
        else:
            animal_type = None

        if animal_type == 'cat':
            self.fields['breed'].choices = Pet.CAT_BREEDS
        elif animal_type == 'dog':
            self.fields['breed'].choices = Pet.DOG_BREEDS
        else:
            self.fields['breed'].choices = []

class PetProfileForm(forms.ModelForm):
    breed = forms.ChoiceField(choices=[], required=True)

    class Meta:
        model = Pet
        fields = ['animal_type', 'breed', 'name', 'age', 'weight', 'photo']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        if 'animal_type' in self.data:
            animal_type = self.data.get('animal_type')
        elif self.instance and self.instance.animal_type:
            animal_type = self.instance.animal_type
        else:
            animal_type = None

        if animal_type == 'cat':
            self.fields['breed'].choices = Pet.CAT_BREEDS
        elif animal_type == 'dog':
            self.fields['breed'].choices = Pet.DOG_BREEDS
        else:
            self.fields['breed'].choices = []

class HealthRecordForm(forms.ModelForm):
    class Meta:
        model = Health
        fields = ['mail', 'description']