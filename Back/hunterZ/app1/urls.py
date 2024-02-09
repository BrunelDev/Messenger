from django.urls import path, include
from . import views
import debug_toolbar

urlpatterns = [
    path('', views.chating.as_view()),
    path('__debug__/', include(debug_toolbar.urls)),
    
]