from datetime import datetime
from random import randint

from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from App.models import IndexTab
from App.models import Productcategorie
from operate.models import Orderform, User, Getaddr

from App import views
import hashlib

from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse

from django_chuizi.settings import MAXAGE
from operate.models import User
class Summoney:
    def sum(self):
        sum = 0
        for i in self:
            sum += i.money
        activity = 20
        sum = sum - activity
        return sum

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
    return render(request, 'operate/login.html')

#购物车
def smartisan(request): # san = 商品id
    tab = IndexTab.objects.all()                    #板块
    # user = request.session.get("username")
    use = "小牛"
    uid = User.objects.get(username=use)            #用户id
    form = Orderform.objects.filter(uid = uid.uid)  #购物内商品
    addrs = Getaddr.objects.filter(uid = uid.uid)   #收货地址
    if addrs:                                       #判断收货地址，为空不传值，
        add = addrs
    if form:                                        #获取购物内商品信息
        pro = []
        for i in form:
            sp = Productcategorie.objects.get(pcid = i.pcid)
            pro.append(sp)

    return render(request, "operate/smartisan.html", locals())

#商品购买
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
        order.ordernumber=datetime.now().strftime("%Y%m%d%H%M%S") + str(randint(1,1000))
        order.emil =request.POST.get("email")
        print(order.emil)
        order.time = datetime.now()
        order.save()
        return redirect(reverse('app:index'))
    return render(request, "operate/money.html", locals())

#用户注册
def register(request):
    if request.method == 'POST':
        phone = request.POST.get('mobile')
        password = request.POST.get('passwd')
        password_hash = hashlib.sha1(password.encode('utf8')).hexdigest()
        user = User(username = phone, phone = phone, password=password_hash)
        user.save()
        response = redirect(reverse('app:index'))
        response.session['username'] = phone
        request.session.set_expiry(MAXAGE)
        return response
    return render(request, 'operate/login.html')


#支付
def payment(request):
    tab = IndexTab.objects.all()
    return render(request, "operate/smartisan.html", locals())