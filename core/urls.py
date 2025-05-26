from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('profile/', views.profile_view, name='profile'),
    path('pets/', views.pet_list, name='pet_list'),
    path('pets/add/', views.add_pet, name='add_pet'),
    path('pets/<int:pet_id>/edit/', views.edit_pet, name='edit_pet'),
    path('pets/<int:pet_id>/delete/', views.delete_pet, name='delete_pet'),
    path('pets/<int:pet_id>/records/', views.health_records, name='health_records'),
    path('pets/<int:pet_id>/records/add/', views.add_health_record, name='add_health_record'),
    path('recommendations/', views.recommendations_view, name='recommendations'),
    path('calendar/', views.calendar_view, name='calendar'),
    path('add_note/', views.add_note, name='add_note'),
    path('get_notes/', views.get_notes, name='get_notes'),
    path('delete_note/<int:note_id>/', views.delete_note, name='delete_note'),
    path('get_notes_by_date/', views.get_notes_by_date, name='get_notes_by_date'),
    path('delete-health-record/<int:record_id>/', views.delete_health_record, name='delete_health_record'),
    path('map/', views.map, name='map')
]

