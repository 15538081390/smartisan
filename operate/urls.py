from django.conf.urls import url

from operate import views, tests
from operate import views

urlpatterns =[
    url(r"^login/$", views.login, name="login"),
    url(r"^generateCode/$", views.generate_code, name='generatecode'),
    url(r"^login/register/$", views.register, name = 'register'),
    url(r"^smartisan/$",views.smartisan,name="smartisan"),
    url(r"^code/$", views.code, name="code"),
    url(r"^money/$",views.money,name="money"),
    url(r"^payment/$",views.payment,name="payment"),
    url(r"^user/orderlist$", views.userform, name = 'orderlist'),
    url(r"^user/aftersale$", views.aftersale, name = 'aftersale'),
    url(r"^user/coupon$", views.coupon, name = 'coupon'),
    url(r"^user/usersetting$", views.usersetting, name = 'usersetting'),
    url(r"user/getaddr$", views.getaddr, name='getaddr'),
    url(r"user/logout", views.logout, name = 'logout'),
    url(r"user/changeimg", views.changeimg, name = 'changeimg'),
]

