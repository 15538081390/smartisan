from urllib import request

from django.http import HttpResponse
from django.shortcuts import render
from App.models import *

# Create your views here.
#首页
def index(request):
    home=Indexhome.objects.all()
    tab=IndexTab.objects.all()
    products=Productcategorie.objects.all()
    return render(request,"App/bash/bash.html",context={"home":home,
                                                        "tab":tab,
                                                        "products":products,
                                                        })


    # return HttpResponse("111111")

# 商品展示

def second(request,cid):
    home = Indexhome.objects.all()
    tab = IndexTab.objects.all()
    copy=Indexcopy.objects.all()
    indepro=Indexproduct.objects.all()
    products=Productcategorie.objects.all()
    return render(request,"App/bash/second.html",context={"home":home,
                                                        "tab":tab,
                                                        "products":products,
                                                          "to_id":int(cid),
                                                          "copy":copy,
                                                          "indepro":indepro,})

#服务条款
def server(request):
    tab=IndexTab.objects.all()
    return render(request,"App/bash/server.html",context={"tab":tab,
                                                          })
#售后政策
def server2(request):
    tab=IndexTab.objects.all()
    return render(request,"App/bash/server2.html",context={"tab":tab,
                                                          })
#保修服务
def server3(request):
    tab=IndexTab.objects.all()
    home=Indexhome.objects.all()
    return render(request,"App/bash/server3.html",context={"tab":tab,
                                                           "home":home,
                                                          })


def application(request):
    tab=IndexTab.objects.all()
    return render(request,"App/topbash/app.html",context={"tab":tab,
                                                          })

def osx(request):
    tab=IndexTab.objects.all()
    return  render(request,"App/topbash/osx.html",context={"tab":tab,
                                                           })

def pron2s(request):
    tab=IndexTab.objects.all()
    return render(request,"App/topbash/pron2s.html",context={"tab":tab,
                                                        })
def r1(request):
    tab=IndexTab.objects.all()
    return render(request,"App/topbash/r1.html",context={"tab":tab,
                                                         })

def dingduan(request):
    tab=IndexTab.objects.all()
    return render(request,"App/topbash/dingduan.html",context={"tab":tab,
                                                          })
def tnt(request):
    tab=IndexTab.objects.all()
    return render(request,"App/topbash/tnt.html",context={"tab":tab,
                                                          })



