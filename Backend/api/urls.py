from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),  # GET /api/
    path('upload/', views.predict_traffic_sign),  # POST /api/upload/
    path('upload_document/', views.upload_document),  # POST /api/upload_document/
]