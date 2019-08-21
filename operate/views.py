from datetime import datetime
import random

from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import HttpResponse
from django.shortcuts import render

from App.models import *
from App.models import Productcategorie
from operate.code import send_sms
from operate.form import UserForm
from operate.models import Orderform, User, Getaddr,Shopping

from App import views
import hashlib

from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse

from django_chuizi.settings import MAXAGE, SMSCONFIG, MAXAGECODE
from operate.models import *
from operate.verifycode import VerifyCode


class Summoney:
    def sum(self):
        sum = 0
        for i in self:
            sum += i.money
        activity = 20
        sum = sum - activity
        return sum


# 购物车
def smartisan(request): # san = 商品id
    tab = IndexTab.objects.all()                    #板块
    user=User.objects.filter(username=request.session.get('username'))
    shopcar = Shopping.objects.filter(uid=user[0].uid)
    return render(request,"operate/smartisan.html",locals())


# 商品购买
def money(request):                             #san = 商品id

    tab = IndexTab.objects.all()  # 板块
    shopcar = Shopping.objects.all()
    buy=request.POST.getlist('shure')

    print (buy)
    whichone=Merchandise.objects.filter(mid__in=buy)
    print (whichone)
    for i in whichone:
        s1=request.POST.get(str('text1'+str(i.mid)))
        print (s1)

    # money=0.0
    # for i in whichone:
    #     m1=request.POST.get(str(i.mid))
    #     money+=float(m1)
    # print (money)
    return render(request, "App/shopping/pay2.html", locals())


# 用户注册+登录
def login(request):
    if request.method == 'POST':
        phone = request.POST['phone']
        password = request.POST['password']
        code = request.POST['code']
        password_hash = hashlib.sha1(password.encode('utf8')).hexdigest()
        if User.objects.filter(phone = phone, password = password_hash).exists() and code == request.session['code']:
            user = User.objects.filter(phone = phone, password = password_hash)
            response = redirect(reverse('app:index'))
            request.session['username'] = user[0].username
            request.session.set_expiry(MAXAGE)
            return response
        else:
            return HttpResponse('用户名或密码错误')
    return render(request, 'operate/login11.html')


def logout(request):
    try:
        del request.session['username']
    except:
        return redirect(reverse('app:index'))
    return redirect(reverse('app:index'))

# 图形验证码函数
def generate_code(request):
    vc = VerifyCode()
    data = vc.output()
    request.session['code'] = vc.code
    response = HttpResponse(data, content_type= 'image/png')
    # response.headers['Content-Type'] = 'image/png'
    return response


def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        phone = request.POST['tel']
        code = request.POST['code']
        codeconfig = request.session['code']
        if codeconfig == code :
            password_hash = hashlib.sha1(password.encode('utf8')).hexdigest()
            user = User(username=username, phone=phone, password=password_hash)
            user.save()
            response = redirect(reverse('app:index'))
            request.session['username'] = user.username
            request.session.set_expiry(MAXAGE)
            return response
    return render(request, 'operate/registerIM.html')
    # if request.method == 'GET':
    #     form = UserForm()
    #     return render(request, 'operate/test.html', {'form': form})
    # else:
    #     form = UserForm(request.POST)
    #     if form.is_valid():
    #         password_hash = hashlib.sha1(form.password.encode('utf8')).hexdigest()
    #         user = User(username=form.username, phone=form.phone, password=password_hash)
    #         user.save()
    #         response = redirect(reverse('app:index'))
    #         response.session['username'] = form.sername
    #         request.session.set_expiry(MAXAGE)
    #         return response
    #     else:
    #         return render(request, 'operate/test.html', {'form': form})


def code(request):
    num=str(random.randint(100000, 999999))
    request.session['phone'] = request.POST['phone']
    request.session['code'] = num
    request.session.set_expiry(MAXAGECODE)
    send_sms(request.POST['phone'], {'code':num}, **SMSCONFIG)
    return HttpResponse('True')

# 支付
def payment(request):
    tab = IndexTab.objects.all()
    return render(request, "operate/smartisan.html", locals())


def userform(request):
    products = Productcategorie.objects.all()
    home = Indexhome.objects.all()
    tab = IndexTab.objects.all()
    return render(request, 'operate/userinform.html', locals())


def aftersale(request):
    products = Productcategorie.objects.all()
    home = Indexhome.objects.all()
    tab = IndexTab.objects.all()
    return render(request, 'operate/shouhou.html', locals())


def coupon(request):
    products = Productcategorie.objects.all()
    home = Indexhome.objects.all()
    tab = IndexTab.objects.all()
    return render(request, 'operate/youhui.html', locals())


def usersetting(request):
    products = Productcategorie.objects.all()
    home = Indexhome.objects.all()
    tab = IndexTab.objects.all()
    return render(request, 'operate/usersetting.html', locals())


def getaddr(request):
    products = Productcategorie.objects.all()
    home = Indexhome.objects.all()
    tab = IndexTab.objects.all()
    return render(request, 'operate/getaddr.html', locals())