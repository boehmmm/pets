import random
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .forms import RegistrationForm, PetForm, UserProfileForm, HealthRecordForm, PetProfileForm
from .models import Pet, CareRecommendation, UserProfile, Health, EmailConfirmation, PetNote, Category, Subcategory
from django.contrib.auth.models import User
from datetime import date, datetime, timedelta
from django.contrib import messages
from django.core.files import File
from django.conf import settings
from collections import defaultdict
from django.utils import timezone
from django.core.mail import send_mail

from django.utils.timezone import now
import os
from django.contrib.auth import update_session_auth_hash

def home(request):
    return render(request, 'home.html')

def register_view(request):
    show_modal = request.session.get('show_modal', False) 

    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        code_entered = request.POST.get('code')
        user_id = request.session.get('pending_user_id')

        if code_entered and user_id:
            try:
                user = User.objects.get(id=user_id)
                confirmation = EmailConfirmation.objects.get(user=user)
            except (User.DoesNotExist, EmailConfirmation.DoesNotExist):
                messages.error(request, "Произошла ошибка. Попробуйте зарегистрироваться заново.")
                return redirect('register')

            if confirmation.code == code_entered and not confirmation.is_expired():
                user.is_active = True
                user.save()
                confirmation.delete()
                request.session.pop('pending_user_id', None)
                request.session.pop('show_modal', None)
                messages.success(request, "Вы успешно зарегистрировались!")
                login(request, user)
                return redirect('home')
            else:
                form.add_error('code', 'Неверный или истёкший код.')
                messages.error(request, 'Неверный или истёкший код подтверждения.')
                request.session['show_modal'] = True

        else:
            if form.is_valid():
                if User.objects.filter(email=form.cleaned_data['email']).exists():
                    form.add_error('email', 'Этот email уже используется.')
                    messages.error(request, 'Пользователь с таким email уже существует.')
                else:
                    user = form.save(commit=False)
                    user.is_active = False
                    user.save()

                    code = str(random.randint(100000, 999999))
                    EmailConfirmation.objects.create(user=user, code=code)

                    send_mail(
                        'Код подтверждения регистрации',
                        f'Ваш код: {code}',
                        settings.DEFAULT_FROM_EMAIL,
                        [form.cleaned_data['email']],
                        fail_silently=False,
                    )

                    request.session['pending_user_id'] = user.id
                    request.session['show_modal'] = True
                    messages.info(request, 'Код подтверждения отправлен на вашу почту.')
                    return redirect('register') 
            else:
                form.add_error(None, "Форма заполнена с ошибками.")
                messages.error(request, "Проверьте правильность заполнения формы.")
                request.session['show_modal'] = False

    else:
        form = RegistrationForm()

    return render(request, 'register.html', {'form': form, 'show_modal': show_modal})

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            messages.success(request, "Вы успешно вошли в аккаунт!")
            login(request, user)
            return redirect('profile')
    return render(request, 'login.html')

def logout_view(request):
    logout(request)
    return redirect('home')

@login_required
def profile_view(request):
    profile, created = UserProfile.objects.get_or_create(
        user=request.user,
        defaults={'birth_date': date(2000, 1, 1)}
    )

    if request.method == 'POST':
        first_name = request.POST.get('first_name', '').strip()
        last_name = request.POST.get('last_name', '').strip()
        patronymic = request.POST.get('patronymic', '').strip()
        birth_date_str = request.POST.get('birth_date', '').strip()

        try:
            birth_date = datetime.strptime(birth_date_str, '%Y-%m-%d').date()
        except ValueError:
            birth_date = profile.birth_date

        profile_updated = (
            profile.first_name != first_name or
            profile.last_name != last_name or
            profile.patronymic != patronymic or
            profile.birth_date != birth_date
        )

        if profile_updated:
            profile.first_name = first_name
            profile.last_name = last_name
            profile.patronymic = patronymic
            profile.birth_date = birth_date
            profile.save()
            messages.success(request, 'Профиль обновлён.')

        new_password = request.POST.get('new_password', '')
        confirm_password = request.POST.get('confirm_password', '')

        if new_password:
            if new_password != confirm_password:
                messages.error(request, 'Пароли не совпадают.')
            elif len(new_password) < 8:
                messages.error(request, 'Пароль должен содержать минимум 8 символов.')
            else:
                request.user.set_password(new_password)
                request.user.save()
                update_session_auth_hash(request, request.user) 
                messages.success(request, 'Пароль успешно изменён.')

        return redirect('profile')

    return render(request, 'profile.html', {'profile': profile})


@login_required
def pet_list(request):
    pets = Pet.objects.filter(owner=request.user)
    return render(request, 'pet_list.html', {'pets': pets})

@login_required
def add_pet(request):
    if request.method == 'POST':
        form = PetForm(request.POST, request.FILES)
        if form.is_valid():
            pet = form.save(commit=False)
            pet.owner = request.user

            if not request.FILES.get('photo'):
                image_name = f"{pet.breed}.jpg"
                relative_path = f"pet_photos/auto/{image_name}"
                full_path = os.path.join(settings.MEDIA_ROOT, relative_path)

                if os.path.exists(full_path):
                    pet.photo.name = relative_path

            pet.save()
            return redirect('pet_list')
    else:
        form = PetForm()

    return render(request, 'add_pet.html', {'form': form})


@login_required
def edit_pet(request, pet_id):
    pet = get_object_or_404(Pet, id=pet_id, owner=request.user)
    original_breed = pet.breed
    original_photo_name = pet.photo.name if pet.photo else ""

    if request.method == 'POST':
        form = PetProfileForm(request.POST, request.FILES, instance=pet)
        if form.is_valid():
            pet = form.save(commit=False)

            if not request.FILES.get('photo'):
                is_auto_photo = original_photo_name.startswith('pet_photos/auto/') and original_breed != pet.breed

                if is_auto_photo:
                    image_name = f"{pet.breed}.jpg"
                    relative_path = f"pet_photos/auto/{image_name}"
                    full_path = os.path.join(settings.MEDIA_ROOT, relative_path)

                    if os.path.exists(full_path):
                        pet.photo.name = relative_path

            pet.save()
            return redirect('pet_list')
    else:
        form = PetProfileForm(instance=pet)

    return render(request, 'edit_pet.html', {'form': form, 'pet': pet})


@login_required
def delete_pet(request, pet_id):
    pet = get_object_or_404(Pet, id=pet_id, owner=request.user)
    if pet.photo and 'pet_photos/auto/' not in pet.photo.name:
        is_used_elsewhere = Pet.objects.filter(photo=pet.photo.name).exclude(id=pet.id).exists()
        
        if not is_used_elsewhere:
            photo_path = pet.photo.path
            if os.path.exists(photo_path):
                os.remove(photo_path)
    pet.delete()

    return redirect('pet_list')

@login_required
def health_records(request, pet_id):
    pet = get_object_or_404(Pet, id=pet_id, owner=request.user)
    records = Health.objects.filter(pet=pet)
    return render(request, 'health_records.html', {'pet': pet, 'records': records})

def add_health_record(request, pet_id):
    pet = get_object_or_404(Pet, id=pet_id, owner=request.user)
    if request.method == 'POST':
        form = HealthRecordForm(request.POST)
        if form.is_valid():
            record = form.save(commit=False)
            record.pet = pet
            if not record.visit_date:
                record.visit_date = now().date()
            record.save()
            return redirect('health_records', pet_id=pet.id)
    else:
        form = HealthRecordForm()
    return render(request, 'add_health_record.html', {'form': form})

def map(request):
    return render(request, 'cart.html')

def recommendations_view(request):
    return render(request, 'recommendations.html')

@login_required
def calendar_view(request):
    pets = Pet.objects.filter(owner=request.user)
    
    notes = PetNote.objects.filter(pet__owner=request.user)
    
    now = timezone.now()
    sent_notifications = [] 
    
    for note in notes:
        note_datetime = timezone.make_aware(datetime.combine(note.date, note.time))
        
        if note_datetime == now and note.id not in sent_notifications:
            messages.success(request, f"Напоминание: время для заметки '{note.note}' для питомца {note.pet.name}.")
            sent_notifications.append(note.id)
    
    return render(request, 'calendar.html', {'pets': pets})

@login_required
def get_notes(request):
    notes = PetNote.objects.filter(pet__owner=request.user)
    
    notes_by_date = defaultdict(int)
    
    for note in notes:
        notes_by_date[note.date] += 1

    events = []
    for date, count in notes_by_date.items():
        events.append({
            'title': f"Кол-во заметок: {count}",
            'start': date.isoformat(),
            'allDay': True,
        })
    
    return JsonResponse(events, safe=False)

def get_notes_by_date(request):
    date_str = request.GET.get('date')
    notes = PetNote.objects.filter(date=date_str).select_related('pet')

    note_list = [{
        'id': note.id,
        'title': note.note,
        'time': note.time.strftime('%H:%M'),
        'pet_name': note.pet.name
    } for note in notes]

    return JsonResponse({'notes': note_list})

@login_required
def add_note(request):
    if request.method == "POST":
        pet_id = request.POST.get('pet')
        note_text = request.POST.get('title') 
        date = request.POST.get('date')
        time = request.POST.get('time')
        if not note_text:
            return JsonResponse({'error': 'Заметка не может быть пустой.'}, status=400)

        try:
            pet = Pet.objects.get(id=pet_id, owner=request.user)
            note_date = datetime.strptime(date, '%Y-%m-%d').date()
            note_time = datetime.strptime(time, '%H:%M').time()


            PetNote.objects.create(
                pet=pet,
                note=note_text,
                date=note_date,
                time=note_time
            )
            return JsonResponse({'message': 'Заметка добавлена!'})
        except Pet.DoesNotExist:
            return JsonResponse({'error': 'Ошибка: питомец не найден.'}, status=400)

    return redirect('calendar')

@login_required
def delete_note(request, note_id):
    try:
        note = PetNote.objects.get(id=note_id, pet__owner=request.user)
        note.delete()
        return JsonResponse({'message': 'Заметка удалена!'})
    except PetNote.DoesNotExist:
        return JsonResponse({'error': 'Заметка не найдена.'}, status=404)
    
@login_required
def delete_health_record(request, record_id):
    try:
        health_record = Health.objects.get(id=record_id)
        health_record.delete()
        return JsonResponse({'message': 'Запись удалена!'})
    except Health.DoesNotExist:
        return JsonResponse({'message': 'Запись не найдена'})