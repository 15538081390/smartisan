from smartisan_manage import views
from django.conf.urls import url

urlpatterns =[
    url(r"^login/$", views.login, name="login"),

    ]