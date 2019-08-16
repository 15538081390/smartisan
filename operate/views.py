from datetime import datetime
import random

from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import HttpResponse
from django.shortcuts import render

from App.models import IndexTab
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
    # user = request.session.get("username")
    # use = "小牛"
    # uid = User.objects.get(username=use)            #用户id
    # form = Orderform.objects.filter(uid = uid.uid)  #购物内商品
    # addrs = Getaddr.objects.filter(uid = uid.uid)   #收货地址
    # if addrs:                                       #判断收货地址，为空不传值，
    #     add = addrs
    # if form:                                        #获取购物内商品信息
    #     pro = []
    #     for i in form:
    #         sp = Productcategorie.objects.get(pcid = i.pcid)
    #         pro.append(sp)
    shopcar=Shopping.objects.all()
    buy=request.POST.getlist('shure')
    whichone=Merchandise.objects.filter(mid__in=buy).all()
    money=0.0
    for i in whichone:
        m1=request.POST.get(str(i.mid))
        money+=float(m1)
    print (money)
    return render(request,"operate/smartisan.html",locals())


# 商品购买
def money(request,san):                             #san = 商品id
    tab = IndexTab.objects.all()                    # 板块
    use = "小牛"
    uid = User.objects.get(username=use)            # 用户id
    pro = Productcategorie.objects.filter(pcid=san) # 商品信息
    addrs = Getaddr.objects.filter(uid = uid.uid)   #收货地址
    pid = pro[0].pcid
    if addrs:                                       #判断收货地址，为空不传值，
        add = addrs

    summoney= Summoney.sum(pro)                      #计算商品总价格

    if request.method =="POST":
        order = Orderform()
        order.pid = pro[0].pcid
        order.uid = uid.uid
        order.ordernumber=datetime.now().strftime("%Y%m%d%H%M%S") + str(random.randint(1, 1000))
        order.emil =request.POST.get("email")
        print(order.emil)
        order.time = datetime.now()
        order.save()
        return redirect(reverse('app:index'))
    return render(request, "operate/money.html", locals())


# 用户注册+登录
def login(request):
    if request.method == 'POST':
        phone = request.POST.get('mobile')
        password = request.POST.get('password')
        password_hash = hashlib.sha1(password.encode('utf8')).hexdigest()
        if User.objects.filter(phone = phone, password = password_hash).exists():
            user = User.objects.filter(phone = phone, password = password_hash)
            response = redirect(reverse('app:index'))
            response.session['username'] = user.username
    return render(request, 'operate/login11.html')


def register(request):
    if request.method == 'POST':
        print(request.POST)
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
    return render(request, 'operate/test.html')
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
