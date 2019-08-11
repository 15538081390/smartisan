"use static";
var accountApp = angular.module("accountApp", ["ngRoute", "ngAnimate", "ngTouch", "ngRetina", "angular-md5", "templates", "accountApp.services", "accountApp.directives", "accountApp.controllers", "accountApp.animations"]),
    accountAppControllers = angular.module("accountApp.controllers", []),
    accountAppDirectives = angular.module("accountApp.directives", []),
    accountAppServices = angular.module("accountApp.services", []),
    accountAppAnimations = angular.module("accountApp.animations", []);
accountApp.config(["$compileProvider", function (e) {
}]).config(["$httpProvider", function (e) {
    e.interceptors.push("Interceptor")
}]).config(["$routeProvider", function (e) {
    var t = {
        delay: ["$q", "$timeout", "Loading", function (e, t, o) {
        }],
        wechatResolve: ["Request", "$location", "$rootScope", "$window", "Config", "$q", "Utils", function (e, t, o, n, a, r, i) {
            if (!o.isWechat || "miniprogram" === window.__wxjs_environment) return {};
            var c = r.defer();
            return o.openid ? c.resolve() : e.getWechatOpenId().then(function (e) {
                o.openid = e.cookie, o.isWechatLogin = e.is_login, c.resolve(e)
            }, function () {
                c.resolve(), n.location.replace(a.wechatMixinUrl + i.getUrlUnicode())
            }), c.promise
        }],
        wechatCheckResolve: ["Request", "$location", "$rootScope", "$window", "Config", "$q", function (e, t, o, n, a, r) {
            if (!o.isWechat) return {};
            var i = r.defer();
            return e.checkWechatBind().then(function (e) {
                e.errno == a.errnoMap.OK && e.data && (o.wechatCheckStatus = !!e.data.bind), i.resolve()
            }, function () {
                i.resolve()
            }), i.promise
        }],
        userInfo: ["$location", "Request", "Config", function (e, t, o) {
            return t.getSettings().then(function (e) {
                return e
            })
        }],
        userAccount: ["Content", function (e) {
            return e.takeUserAccount().then(function (e) {
                return e
            })
        }],
        deviceData: ["Content", function (e) {
            return e.takeDeviceData().then(function (e) {
                return e
            })
        }]
    };
    e.when("/register", {
        templateUrl: "partials/register.html",
        controller: "RegisterCtrl",
        title: "用户注册",
        pageClass: "v2 register",
        resolve: {wechatParams: t.wechatResolve}
    }), e.when("/register/embed", {
        templateUrl: "partials/register.html",
        controller: "RegisterCtrl",
        title: "用户注册"
    }), e.when("/register/embed/bbs", {
        templateUrl: "partials/registerBbs.html",
        controller: "RegisterCtrl",
        title: "用户注册"
    }), e.when("/register-guest/embed", {
        templateUrl: "partials/registerGuest.html",
        controller: "RegisterGuestCtrl",
        title: "验证手机"
    }), e.when("/login", {redirectTo: "/v2/login"}), e.when("/login/embed", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl",
        title: "用户登录"
    }), e.when("/login/embed/bbs", {
        templateUrl: "partials/loginBbs.html",
        controller: "LoginCtrl",
        pageClass: "login",
        title: "用户登录"
    }), e.when("/login/embed/cloud", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl",
        pageClass: "login",
        title: "用户登录"
    }), e.when("/login-guest/embed", {
        templateUrl: "partials/loginGuest.html",
        controller: "LoginGuestCtrl",
        title: "登录账户"
    }), e.when("/login/:action", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl",
        title: "用户登录"
    }), e.when("/logout", {
        template: "",
        controller: "LogoutCtrl",
        title: "用户退出",
        resolve: {wechatParams: t.wechatCheckResolve}
    }), e.when("/logout/embed", {
        template: "",
        controller: "LogoutCtrl",
        title: "用户退出"
    }), e.when("/modifyAvatar", {
        templateUrl: "partials/modifyAvatar.html",
        controller: "ModifyAvatarCtrl",
        title: "设置头像",
        pageClass: "v2",
        userRequired: !0
    }), e.when("/modifyAvatar/embed", {
        templateUrl: "partials/modifyAvatar.html",
        controller: "ModifyAvatarCtrl",
        title: "设置头像",
        userRequired: !0
    }), e.when("/modifyName", {
        templateUrl: "partials/modifyName.html",
        controller: "ModifyNameCtrl",
        title: "设置昵称",
        pageClass: "v2 modify-name",
        userRequired: !0
    }), e.when("/modifyPassword", {
        templateUrl: "partials/modifyPassword.html",
        controller: "ModifyPasswordCtrl",
        title: "修改密码",
        pageClass: "v2",
        userRequired: !0
    }), e.when("/modifyMobile", {
        templateUrl: "partials/modifyMobile.html",
        controller: "ModifyMobileCtrl",
        title: "修改手机",
        pageClass: "v2 modify-mobile",
        userRequired: !0
    }), e.when("/modifyMail", {
        templateUrl: "partials/modifyMail.html",
        controller: "ModifyMailCtrl",
        title: "修改邮箱",
        pageClass: "v2",
        userRequired: !0,
        resolve: {
            userInfo: ["Request", function (e) {
                return e.getUserAuths()
            }]
        }
    }), e.when("/modifyQuestion", {
        templateUrl: "partials/modifyQuestion.html",
        controller: "ModifyQuestionCtrl",
        title: "设置安全问题",
        pageClass: "v2 modify-question",
        userRequired: !0,
        resolve: {
            questionData: ["Request", function (e) {
                return e.getQuestions().then(function (e) {
                    return e
                })
            }]
        }
    }), e.when("/forgotPassword", {
        templateUrl: "partials/forgotPassword.html",
        controller: "ForgotPasswordCtrl",
        pageClass: "v2 forgot-password",
        title: "忘记密码"
    }), e.when("/settings/embed", {
        templateUrl: "partials/settings.html",
        controller: "SettingsCtrl",
        title: "账户设置",
        resolve: {
            settings: ["Request", function (e) {
                return e.getSettings()
            }]
        }
    }), e.when("/auth/:channelID", {
        templateUrl: "partials/auth.html",
        controller: "AuthCtrl",
        title: "安全验证",
        pageClass: "v2 auth-page",
        userRequired: !0,
        resolve: {
            userAuths: ["Request", function (e) {
                return e.getUserAuths()
            }]
        }
    }), e.when("/result/:channelID", {
        templateUrl: "partials/result.html",
        title: "修改成功",
        controller: "ResultCtrl",
        pageClass: "v2"
    }), e.when("/v2/login", {
        templateUrl: "partials/loginV2.html",
        controller: "LoginV2Ctrl",
        title: "用户登录",
        pageClass: "v2 login-v2",
        resolve: {wechatParams: t.wechatResolve, userInfo: t.userInfo}
    }), e.when("/v2/login/:action", {
        templateUrl: "partials/loginV2.html",
        controller: "LoginV2Ctrl",
        title: "用户登录",
        pageClass: "v2 login-v2",
        resolve: {wechatParams: t.wechatResolve, userInfo: t.userInfo}
    }), e.when("/bindAccount", {
        templateUrl: "partials/bindAccount.html",
        controller: "BindAccountCtrl",
        title: "绑定手机",
        pageClass: "v2 bind-account",
        userRequired: !0,
        resolve: {
            bindUserInfo: ["Request", function (e) {
                return e.getBindInfo()
            }]
        }
    }), e.when("/bindPassword", {
        templateUrl: "partials/bindPassword.html",
        controller: "BindPasswordCtrl",
        title: "设置密码",
        pageClass: "v2 bind-password",
        resolve: {
            bindUserInfo: ["Request", function (e) {
                return e.getBindInfo()
            }]
        }
    }), e.when("/warning/safety", {
        templateUrl: "partials/safety.html",
        controller: "SafetyCtrl",
        title: "账户安全提醒",
        pageClass: "v2 safety",
        resolve: {userInfo: t.userInfo}
    }), e.when("/personal/account", {
        templateUrl: "partials/personalAccount.html",
        controller: "PersonalAccountCtrl",
        title: "个人中心-账户设置",
        pageClass: "personal",
        resolve: {userInfo: t.userAccount}
    }), e.when("/personal/device", {
        templateUrl: "partials/personalDevice.html",
        controller: "PersonalDeviceCtrl",
        title: "个人中心-设备管理",
        pageClass: "personal",
        resolve: {userInfo: t.userInfo, deviceData: t.deviceData}
    }), e.otherwise({redirectTo: "/result/illegality"})
}]), accountApp.run(["$rootScope", "$route", "$location", "$timeout", "$window", "Loading", "Utils", "Config", function (e, t, o, n, a, r, i, c) {
    e.$on("$routeChangeStart", function (t, n, i) {
        var c = n.$$route ? n.$$route.originalPath : null;
        c && /settings/.test(c) ? e.isSettings = !0 : e.isSettings = !1, c && /cloud/.test(c) ? e.isEmbedCloud = !0 : e.isEmbedCloud = !1;
        var s = o.search().origin;
        e.isEmbedNotes = /notes/i.test(s), e.isEmbedContacts = /contacts/i.test(s), e.isEmbedRadar = /radar/i.test(s), e.isEmbedBbs = /bbs\.smartisan\.com/.test(s), c && /bbs/.test(c) ? (e.isEmbedBbsTmp = !0, e.isEmbedBbs = !1) : e.isEmbedBbsTmp = !1, (e.isEmbedBbsTmp || e.isEmbedBbs) && (e.isRefresh = !0), c && /modifyAvatar/.test(c) ? e.isModifyAvatar = !0 : e.isModifyAvatar = !1, /MicroMessenger/i.test(a.navigator.userAgent) ? e.isWechat = !0 : e.isWechat = !1, r.start()
    }), e.$on("$routeChangeSuccess", function (n, i, s) {
        var l = i.$$route ? i.$$route.originalPath : null;
        e.title = t.current.title, jQuery.support.leadingWhitespace || (a.document.title = t.current.title + " - Smartisan");
        var u = e.isGuestLogin || !1;
        if (l && /login\-guest/.test(l) ? e.isGuestLogin = !0 : e.isGuestLogin = !1, e.dialogChangeFlag = u !== e.isGuestLogin, r.done(), e.pageClass = t.current.pageClass ? t.current.pageClass : "", $(".dialog").show(), a.parent !== a && /personal/.test(l)) {
            var d = o.search().origin || e.targetOrigin;
            c.legalOrigin.test(d) ? e.targetOrigin = d : e.targetOrigin = "https://cloud.smartisan.com", a.parent.postMessage("accountChangeRouter:" + l, e.targetOrigin)
        }
    })
}]), accountAppServices.factory("Interceptor", ["$q", "$rootScope", "$location", "$window", "Config", function (e, t, o, n, a) {
    var r = {
        request: function (t) {
            return t || e.when(t)
        }, requestError: function (t) {
            return e.reject(t)
        }, response: function (r) {
            return r.data && (0 != r.data.errno && r.data.errno <= 900 ? n.parent == n && o.path("/result/system") : r.data.errno == a.errnoMap.UNAUTHORIZED && (t.forgotPasswordMsg || /settings/.test(o.$$path) || /v2\/login/i.test(o.$$path) || (t.currentUid = void 0, t.currentToken = void 0, o.path("/result/unauthorized")))), r || e.when(r)
        }, responseError: function (t) {
            return e.reject(t)
        }
    };
    return r
}]);
var ConfigBaseProtocolHost = location.protocol + "//" + location.host;
accountAppServices.constant("Config", {
    wxChannelID: 1004,
    baseUrl: ConfigBaseProtocolHost + "/v2/",
    baseHost: location.host,
    baseProtocolHost: ConfigBaseProtocolHost,
    apiUrl: "https://api.smartisan.com/",
    openUrl: "https://open.smartisan.com/",
    officialURL: "http://www.smartisan.com/",
    cloudURL: "https://cloud.smartisan.com/",
    bindAccountURL: ConfigBaseProtocolHost + location.pathname + "#/bindAccount",
    hasBoundURL: ConfigBaseProtocolHost + "/#/result/bound",
    legalOrigin: /.+\.smartisan.com/,
    wechatMixinUrl: ConfigBaseProtocolHost + "/v2/wechat/redirect?custom=",
    reloadCaptchaUrl: ConfigBaseProtocolHost + "/v2/session/captcha/",
    headconfig: {headers: {"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"}},
    regExp: {
        isCnMobile: /^1[3|4|5|6|7|8|9]\d{9}$/,
        isMobile: /^\d{5,11}$/,
        isMobileGlobal: /^(\+\d{1,4}\s?)?\d{5,11}$/,
        isMail: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
        isPassword: /^(?![a-zA-Z]+$)(?!\d+$)(?![\\\[\]\:\^\-~!@#$%&*()-+={}|;'",.\/<>?_]+$)[a-zA-Z_0-9\\\[\]\:\^\-~!@#$%&*()-+={}|;'",.\/<>?]{6,16}$/,
        isSafeUrl: /^(http|https)\:\/\/(?:[a-zA-Z0-9\-\.]+\.)?(smartisan.com\b|idaxiang.org\b|h-notes.com\b)((\/|#|\?)(:[a-zA-Z0-9]*)?\/?([a-zA-Z0-9\-\._\?\,\'\:\/\\\+&amp;%\$#\=~|])*)?$/
    },
    errnoMap: {
        OK: 0,
        SYSTEM_MAINTENANCE: 1,
        LOGIC_ERROR: 2,
        FS_READ_ERROR: 3,
        FS_WRITE_ERROR: 4,
        DB_CONNECT_ERROR: 5,
        DB_QUERY_ERROR: 6,
        CACHE_CONNECT_ERROR: 7,
        CACHE_QUERY_ERROR: 8,
        SYSTEM_MAINTENANCE: 901,
        PARAMETER_ERROR: 1002,
        ILLEGAL_TICKET: 1601,
        INVALID_TICKET: 1602,
        ILLEGAL_UID: 1101,
        ILLEGAL_PASSWORD: 1102,
        ILLEGAL_AVATAR: 1103,
        ILLEGAL_SECQUES: 1104,
        ILLEGAL_SECANS: 1105,
        INVALID_UID: 1106,
        INVALID_PASSWORD: 1107,
        INVALID_SECANS: 1108,
        ALIAS_REQUIRED: 1109,
        PASSWORD_REQUIRED: 1110,
        ILLEGAL_ALIAS: 1201,
        INVALID_ALIAS: 1202,
        REGISTERED_ALIAS: 1203,
        ILLEGAL_CELLPHONE: 1204,
        INVALID_CELLPHONE: 1205,
        REGISTERED_CELLPHONE: 1206,
        ILLEGAL_EMAIL: 1207,
        INVALID_EMAIL: 1208,
        REGISTERED_EMAIL: 1209,
        INVALID_NICKNAME: 1210,
        UNREGISTERED_NICKNAME: 1211,
        REGISTERED_NICKNAME: 1212,
        ILLEGAL_NICKNAME: 1213,
        ILLEGAL_VCODE: 1301,
        INVALID_VCODE: 1302,
        VCODE_TOO_OFTEN: 1304,
        CAPTCHA_REQUIRED: 1502,
        ILLEGAL_TOKEN: 1401,
        INVALID_TOKEN: 1402,
        UNAUTHORIZED: 1701,
        REFRECH_VCODE: 1303,
        FAILED_LOGIN_LIMIT: 1501,
        OPENID_REGISTERED: 2009,
        OPENID_OTHER_REGISTERED: 2010,
        CELLPHONE_NO_REGISTER: 2011,
        NO_AUTH: 2012,
        FAILED_BY_DELETE_BANK_CARD: 2501,
        FAILED_BY_DELETE_MOBILE: 2502,
        INVALID_DEVICE_ID: 2503,
        SUCCESS_FOR_DELETE_DEVICE: 2504
    },
    mailUrl: {
        "163.com": "http://mail.163.com/",
        "126.com": "http://mail.126.com/",
        "139.com": "http://mail.10086.cn/",
        "sina.com": "http://mail.sina.com.cn/",
        "sina.cn": "http://mail.sina.com.cn/",
        "qq.com": "https://mail.qq.com/",
        "sohu.com": "http://mail.sohu.com/",
        "gmail.com": "https://www.gmail.com/",
        "yahoo.com": "https://login.yahoo.com/",
        "21cn.com": "http://mail.21cn.com/",
        "aliyun.com": "https://mail.aliyun.com/",
        "outlook.com": "https://login.live.com/",
        "yeah.net": "http://www.yeah.net/",
        "sogou.com": "http://mail.sogou.com/",
        "189.cn": "http://webmail9.189.cn/webmail/",
        "cntv.cn": "http://mail.cntv.cn/",
        "tianya.cn": "http://mail.tianya.cn/",
        "hainan.net": "http://mail.tianya.cn/",
        "hotmail.com": "https://login.live.com/"
    },
    cccList: [{code: "+355", name: "阿尔巴尼亚"}, {code: "+213", name: "阿尔及利亚"}, {code: "+93", name: "阿富汗"}, {
        code: "+54",
        name: "阿根廷"
    }, {code: "+971", name: "阿拉伯联合酋长国"}, {code: "+297", name: "阿鲁巴"}, {code: "+968", name: "阿曼"}, {
        code: "+994",
        name: "阿塞拜疆"
    }, {code: "+20", name: "埃及"}, {code: "+251", name: "埃塞俄比亚"}, {code: "+353", name: "爱尔兰"}, {
        code: "+372",
        name: "爱沙尼亚"
    }, {code: "+376", name: "安道尔共和国"}, {code: "+244", name: "安哥拉"}, {code: "+1264", name: "安圭拉岛"}, {
        code: "+1268",
        name: "安提瓜和巴布达"
    }, {code: "+61", name: "澳大利亚"}, {code: "+43", name: "奥地利"}, {code: "+1246", name: "巴巴多斯"}, {
        code: "+675",
        name: "巴布亚新几内亚"
    }, {code: "+1242", name: "巴哈马"}, {code: "+92", name: "巴基斯坦"}, {code: "+595", name: "巴拉圭"}, {
        code: "+973",
        name: "巴林"
    }, {code: "+507", name: "巴拿马"}, {code: "+55", name: "巴西"}, {code: "+375", name: "白俄罗斯"}, {
        code: "+1441",
        name: "百慕大群岛"
    }, {code: "+359", name: "保加利亚"}, {code: "+229", name: "贝宁"}, {code: "+32", name: "比利时"}, {
        code: "+354",
        name: "冰岛"
    }, {code: "+1787", name: "波多黎各"}, {code: "+387", name: "波黑"}, {code: "+48", name: "波兰"}, {
        code: "+591",
        name: "玻利维亚"
    }, {code: "+501", name: "伯利兹"}, {code: "+267", name: "博茨瓦纳"}, {code: "+975", name: "不丹"}, {
        code: "+226",
        name: "布基纳法索"
    }, {code: "+257", name: "布隆迪"}, {code: "+240", name: "赤道几内亚"}, {code: "+45", name: "丹麦"}, {
        code: "+49",
        name: "德国"
    }, {code: "+670", name: "东帝汶"}, {code: "+228", name: "多哥"}, {code: "+1767", name: "多米尼加"}, {
        code: "+1809",
        name: "多米尼加共和国"
    }, {code: "+7", name: "俄罗斯"}, {code: "+593", name: "厄瓜多尔"}, {code: "+291", name: "厄立特里亚"}, {
        code: "+33",
        name: "法国"
    }, {code: "+298", name: "法罗群岛"}, {code: "+689", name: "法属玻利尼西亚"}, {code: "+594", name: "法属圭亚那"}, {
        code: "+63",
        name: "菲律宾"
    }, {code: "+679", name: "斐济"}, {code: "+358", name: "芬兰"}, {code: "+238", name: "佛得角共和国"}, {
        code: "+220",
        name: "冈比亚"
    }, {code: "+242", name: "刚果共和国"}, {code: "+243", name: "刚果民主共和国"}, {code: "+57", name: "哥伦比亚"}, {
        code: "+506",
        name: "哥斯达黎加"
    }, {code: "+1473", name: "格林纳达"}, {code: "+299", name: "格陵兰岛"}, {code: "+995", name: "格鲁吉亚"}, {
        code: "+590",
        name: "瓜德罗普岛"
    }, {code: "+1671", name: "关岛"}, {code: "+592", name: "圭亚那"}, {code: "+7", name: "哈萨克斯坦"}, {
        code: "+509",
        name: "海地"
    }, {code: "+82", name: "韩国"}, {code: "+31", name: "荷兰"}, {code: "+382", name: "黑山共和国"}, {
        code: "+504",
        name: "洪都拉斯"
    }, {code: "+253", name: "吉布提"}, {code: "+996", name: "吉尔吉斯斯坦"}, {code: "+686", name: "基里巴斯"}, {
        code: "+224",
        name: "几内亚"
    }, {code: "+245", name: "几内亚比绍共和国"}, {code: "+1", name: "加拿大"}, {code: "+233", name: "加纳"}, {
        code: "+241",
        name: "加蓬"
    }, {code: "+855", name: "柬埔寨"}, {code: "+420", name: "捷克"}, {code: "+263", name: "津巴布韦"}, {
        code: "+237",
        name: "喀麦隆"
    }, {code: "+974", name: "卡塔尔"}, {code: "+1345", name: "开曼群岛"}, {code: "+269", name: "科摩罗"}, {
        code: "+225",
        name: "科特迪瓦"
    }, {code: "+965", name: "科威特"}, {code: "+385", name: "克罗地亚"}, {code: "+254", name: "肯尼亚"}, {
        code: "+682",
        name: "库克群岛"
    }, {code: "+599", name: "库拉索"}, {code: "+371", name: "拉脱维亚"}, {code: "+266", name: "莱索托"}, {
        code: "+856",
        name: "老挝"
    }, {code: "+961", name: "黎巴嫩"}, {code: "+370", name: "立陶宛"}, {code: "+231", name: "利比里亚"}, {
        code: "+218",
        name: "利比亚"
    }, {code: "+423", name: "列支敦士登"}, {code: "+262", name: "留尼汪"}, {code: "+352", name: "卢森堡"}, {
        code: "+250",
        name: "卢旺达"
    }, {code: "+40", name: "罗马尼亚"}, {code: "+261", name: "马达加斯加"}, {code: "+960", name: "马尔代夫"}, {
        code: "+356",
        name: "马耳他"
    }, {code: "+265", name: "马拉维"}, {code: "+60", name: "马来西亚"}, {code: "+223", name: "马里"}, {
        code: "+389",
        name: "马其顿"
    }, {code: "+692", name: "马绍尔群岛"}, {code: "+269", name: "马约特"}, {code: "+230", name: "毛里求斯"}, {
        code: "+222",
        name: "毛里塔尼亚"
    }, {code: "+1", name: "美国"}, {code: "+1684", name: "美属萨摩亚群岛"}, {code: "+976", name: "蒙古"}, {
        code: "+1664",
        name: "蒙特塞拉特岛"
    }, {code: "+880", name: "孟加拉国"}, {code: "+51", name: "秘鲁"}, {code: "+95", name: "缅甸"}, {
        code: "+373",
        name: "摩尔多瓦"
    }, {code: "+212", name: "摩洛哥"}, {code: "+377", name: "摩纳哥"}, {code: "+258", name: "莫桑比克"}, {
        code: "+52",
        name: "墨西哥"
    }, {code: "+264", name: "纳米比亚"}, {code: "+27", name: "南非"}, {code: "+505", name: "尼加拉瓜"}, {
        code: "+977",
        name: "尼泊尔"
    }, {code: "+227", name: "尼日尔"}, {code: "+234", name: "尼日利亚"}, {code: "+47", name: "挪威"}, {
        code: "+680",
        name: "帕劳"
    }, {code: "+351", name: "葡萄牙"}, {code: "+81", name: "日本"}, {code: "+46", name: "瑞典"}, {
        code: "+41",
        name: "瑞士"
    }, {code: "+503", name: "萨尔瓦多"}, {code: "+685", name: "萨摩亚"}, {code: "+381", name: "塞尔维亚共和国"}, {
        code: "+232",
        name: "塞拉利昂"
    }, {code: "+221", name: "塞内加尔"}, {code: "+357", name: "塞浦路斯"}, {code: "+248", name: "塞舌尔"}, {
        code: "+966",
        name: "沙特阿拉伯"
    }, {code: "+239", name: "圣多美和普林西比"}, {code: "+1758", name: "圣卢西亚"}, {code: "+378", name: "圣马力诺"}, {
        code: "+1784",
        name: "圣文森特岛"
    }, {code: "+94", name: "斯里兰卡"}, {code: "+421", name: "斯洛伐克"}, {code: "+386", name: "斯洛文尼亚"}, {
        code: "+268",
        name: "斯威士兰"
    }, {code: "+508", name: "圣彼埃尔和密克隆岛"}, {code: "+1869", name: "圣基茨和尼维斯"}, {code: "+249", name: "苏丹"}, {
        code: "+597",
        name: "苏里南"
    }, {code: "+677", name: "所罗门群岛"}, {code: "+252", name: "索马里"}, {code: "+992", name: "塔吉克斯坦"}, {
        code: "+886",
        name: "台湾"
    }, {code: "+66", name: "泰国"}, {code: "+255", name: "坦桑尼亚"}, {code: "+676", name: "汤加"}, {
        code: "+1649",
        name: "特克斯和凯科斯群岛"
    }, {code: "+1868", name: "特立尼达和多巴哥"}, {code: "+216", name: "突尼斯"}, {code: "+90", name: "土耳其"}, {
        code: "+678",
        name: "瓦努阿图"
    }, {code: "+993", name: "土库曼斯坦"}, {code: "+502", name: "危地马拉"}, {code: "+58", name: "委内瑞拉"}, {
        code: "+673",
        name: "文莱"
    }, {code: "+256", name: "乌干达"}, {code: "+380", name: "乌克兰"}, {code: "+598", name: "乌拉圭"}, {
        code: "+998",
        name: "乌兹别克斯坦"
    }, {code: "+30", name: "希腊"}, {code: "+34", name: "西班牙"}, {code: "+65", name: "新加坡"}, {
        code: "+687",
        name: "新喀里多尼亚"
    }, {code: "+64", name: "新西兰"}, {code: "+36", name: "匈牙利"}, {code: "+1876", name: "牙买加"}, {
        code: "+374",
        name: "亚美尼亚"
    }, {code: "+967", name: "也门"}, {code: "+964", name: "伊拉克"}, {code: "+972", name: "以色列"}, {
        code: "+39",
        name: "意大利"
    }, {code: "+91", name: "印度"}, {code: "+62", name: "印度尼西亚"}, {code: "+44", name: "英国"}, {
        code: "+1284",
        name: "英属处女群岛"
    }, {code: "+962", name: "约旦"}, {code: "+84", name: "越南"}, {code: "+260", name: "赞比亚"}, {
        code: "+235",
        name: "乍得"
    }, {code: "+350", name: "直布罗陀"}, {code: "+56", name: "智利"}, {code: "+236", name: "中非共和国"}, {
        code: "+86",
        name: "中国"
    }, {code: "+853", name: "中国澳门特别行政区"}, {code: "+852", name: "中国香港特别行政区"}],
    defaultCountryCode: "86",
    defaultCountryName: "中国"
}).factory("UtilTools", ["$q", "$http", "$timeout", function (e, t, o) {
    var n = {
        noopPromise: function () {
            var t = e.defer();
            return o(function () {
                t.resolve("")
            }, 1e3), t.promise
        }, encodeUriQuery: function (e, t) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
        }, toKeyValue: function (e) {
            var t = this, o = [];
            return angular.forEach(e, function (e, n) {
                angular.isArray(e) ? angular.forEach(e, function (e) {
                    o.push(t.encodeUriQuery(n, !0) + (e === !0 ? "" : "=" + t.encodeUriQuery(e, !0)))
                }) : o.push(t.encodeUriQuery(n, !0) + (e === !0 ? "" : "=" + t.encodeUriQuery(e, !0)))
            }), o.length ? o.join("&") : ""
        }
    };
    return n
}]), accountAppServices.factory("Request", ["$http", "$q", "Config", "UtilTools", "Utils", "User", "Dialog", function (e, t, o, n, a, r, i) {
    var c = o.baseUrl, s = (o.apiUrl, o.openUrl), l = (o.baseHost, o.headconfig), u = o.bindAccountURL;
    o.hasBoundURL;
    return {
        wxBind: function (a) {
            var s = t.defer(), u = n.toKeyValue(a);
            return e.post(c + "wechat/applet/bind", u, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), s.resolve(e), r.setUser(e.data)
            }).error(function () {
                s.reject("网络异常!")
            }), s.promise
        }, wxRegisterBind: function (a) {
            var s = t.defer(), u = n.toKeyValue(a);
            return e.post(c + "wechat/applet/register", u, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), s.resolve(e), r.setUser(e.data)
            }).error(function () {
                s.reject("网络异常!")
            }), s.promise
        }, checkMobile: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "cellphone/?" + s, "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, checkMail: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "email/?" + s, "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, checkNickName: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "nickname/?" + s, "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, sendMobileCaptcha: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "cellphone/?m=post", s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, checkMobileCaptcha: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "cellphone/?m=post", s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, getUserChecks: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "cellphone/?" + s, "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, register: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/", s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, registerWechat: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "wechat/register/", s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, login: function (a) {
            var s = t.defer(), u = n.toKeyValue(a);
            return e.post(c + "session/?m=post", u, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), s.resolve(e), r.setUser(e.data)
            }).error(function () {
                s.reject("网络异常!")
            }), s.promise
        }, loginWechat: function (a) {
            var s = t.defer(), u = n.toKeyValue(a);
            return e.post(c + "wechat/?m=post", u, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), s.resolve(e), r.setUser(e.data)
            }).error(function () {
                s.reject("网络异常!")
            }), s.promise
        }, logout: function (n) {
            var a = t.defer();
            return e.post(c + "session/?m=delete", "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), a.resolve(e)
            }).error(function () {
                a.reject("网络异常!")
            }), a.promise
        }, checkWechatBind: function () {
            var n = t.defer();
            return e.get(c + "wechat/status", "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), n.resolve(e)
            }).error(function () {
                n.reject("网络异常!")
            }), n.promise
        }, logoutWechat: function (o) {
            var n = t.defer();
            return e.post(c + "wechat/?m=delete", "").success(function (e) {
                n.resolve(e)
            }).error(function () {
                n.reject("网络异常!")
            }), n.promise
        }, checkLoginCaptcha: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/captcha/?m=post&uid=" + a.uid, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, updateUserPassword: function (a) {
            var r = t.defer(), s = n.toKeyValue(a), u = c + "w/password/?m=put";
            return a.uid && (u = c + "users/password/?m=put&uid=" + a.uid), a.username && (u = c + "users/password/?m=put&username=" + a.username), e.post(u, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, updateUserNickname: function (a) {
            var r = t.defer(), s = n.toKeyValue(a), u = c + "w/nickname/?m=put";
            return a.uid && (u = c + "users/nickname/?m=put&uid=" + a.uid), a.username && (u = c + "users/nickname/?m=put&username=" + a.username), e.post(u, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, uploadImageForAvatar: function (e) {
            var n = t.defer(), a = c + "w/avatar/upload";
            return $.ajaxFileUpload({
                url: a, fileElementId: e, dataType: "json", success: function (e) {
                    e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), n.resolve(e)
                }, error: function (e) {
                    n.reject(e)
                }
            }), n.promise
        }, updataUserAvatar: function (a) {
            var r = t.defer(), s = c + "w/avatar";
            a.uid && (s = c + "users/avatar/?uid=" + a.uid), a.username && (s = c + "users/avatar/?username=" + a.username);
            var u = {};
            a.cropped ? u.avatar = a.imgData : (u.avatar = "from-upload", u["Crop-X"] = Math.round(a.coordData.x), u["Crop-Y"] = Math.round(a.coordData.y), u["Crop-Width"] = Math.round(a.coordData.w), u["Crop-Height"] = Math.round(a.coordData.h));
            var d = n.toKeyValue(u);
            return e.post(s, d, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, updateUserEmail: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/email/?m=put&uid=" + a.uid, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, updateUserMobile: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/cellphone/?m=put&uid=" + a.uid, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, getUserAuths: function (n) {
            var a = t.defer(), r = c + "w/protection/?m=get";
            return e.post(r, "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), a.resolve(e)
            }).error(function () {
                a.reject("网络异常!")
            }), a.promise
        }, getNoLoginAuths: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/protection/?m=get&" + s, "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, sendUpdateCaptcha: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/token/?m=post&uid=" + a.uid, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, checkUpdateCaptcha: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/token/?m=put&uid=" + a.uid, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, sendNewMobileCaptcha: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/cellphone/?m=post&uid=" + a.uid, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, sendNewEmail: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/email/?m=post&uid=" + a.uid, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, modifyMail: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/email/?m=put&uid=" + a.uid, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, getQuestions: function () {
            var n = t.defer();
            return e.post(c + "config/security-questions/?m=get", "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), n.resolve(e)
            }).error(function (e) {
                n.reject(e)
            }), n.promise
        }, updateUserQuestion: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/secques/?m=put&uid=" + a.uid, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, activeUserEmail: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "users/active/?m=put&uid=" + a.uid, s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function (e) {
                r.reject(e)
            }), r.promise
        }, getSettings: function () {
            var n = t.defer();
            return e.post(c + "w/?m=get", "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), n.resolve(e)
            }).error(function (e) {
                n.reject(e)
            }), n.promise
        }, getWechatOpenId: function () {
            var n = t.defer();
            return e.get(c + "wechat/openid", "").success(function (e) {
                e.errno == o.errnoMap.OK && e.data.cookie ? n.resolve(e.data) : n.reject(e)
            }).error(function (e) {
                n.reject(e)
            }), n.promise
        }, wechatLogin: function (e) {
            e && "" != e || (e = o.officialURL), e = a.unicode(e), u = a.unicode(u), window != top ? top.location.href = c + "oauth/wechat?return_url=" + e + "&bind_url=" + u : location.href = c + "oauth/wechat?return_url=" + e + "&bind_url=" + u
        }, qqLogin: function (e) {
            e && "" != e || (e = o.officialURL), e = a.unicode(e), u = a.unicode(u), window != top ? top.location.href = c + "oauth/qq?return_url=" + e + "&bind_url=" + u : location.href = c + "oauth/qq?return_url=" + e + "&bind_url=" + u
        }, weiboLogin: function (e) {
            e && "" != e || (e = o.officialURL), e = a.unicode(e), u = a.unicode(u), window != top ? top.location.href = c + "oauth/weibo?return_url=" + e + "&bind_url=" + u : location.href = c + "oauth/weibo?return_url=" + e + "&bind_url=" + u
        }, alipayLogin: function (e) {
            e && "" != e || (e = o.officialURL), e = a.unicode(e), u = a.unicode(u), window != top ? top.location.href = c + "oauth/alipay?return_url=" + e + "&bind_url=" + u : location.href = c + "oauth/alipay?return_url=" + e + "&bind_url=" + u
        }, getBindInfo: function () {
            var n = t.defer();
            return e.get(c + "ident/info", "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), n.resolve(e)
            }).error(function (e) {
                n.reject(e)
            }), n.promise
        }, sendBindMobileCaptcha: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "ident/cellphone", s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, bindMobile: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "ident/bindCellphone/", s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, bindPassword: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "ident/create/", s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, getDeviceData: function () {
            var o = t.defer();
            return e.get(c + "devices/", "").success(function (e) {
                o.resolve(e)
            }).error(function () {
                o.reject("网络异常!")
            }), o.promise
        }, getDeviceIsOnlineStatus: function (a) {
            var r = t.defer(), s = "&timestamp=" + (new Date).getTime(), l = n.toKeyValue(a);
            return e.get(c + "devices/online/?" + l + s, "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, getDeviceIsBankbindStatus: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.get(c + "devices/isbankbind/?" + s, "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, checkCloudPassword: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "w/password/check", s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, deleteDevice: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "devices/delete", s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, getSingleDeviceInfo: function (a) {
            var r = t.defer(), s = "&timestamp=" + (new Date).getTime(), l = n.toKeyValue(a);
            return e.get(c + "devices/info/?" + l + s, "").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, sendAccountEmail: function (a) {
            var r = t.defer(), s = n.toKeyValue(a);
            return e.post(c + "w/active", s, l).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), r.resolve(e)
            }).error(function () {
                r.reject("网络异常!")
            }), r.promise
        }, getThirdPartyList: function () {
            var n = t.defer();
            return e.get(c + "oauth/platforms").success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), n.resolve(e)
            }).error(function () {
                n.resolve(null)
            }), n.promise
        }, getAuthAppList: function () {
            var n = t.defer();
            return e.get(s + "oauth/users/clients/third_grant", {withCredentials: !0}).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), n.resolve(e)
            }).error(function () {
                n.resolve(null)
            }), n.promise
        }, revokeAuthorization: function (n) {
            var a = t.defer();
            return e["delete"](s + "oauth/users/clients/grant/" + n, {withCredentials: !0}).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), a.resolve(e)
            }).error(function () {
                a.reject("网络异常!")
            }), a.promise;
        }, unbindThirdPartyApp: function (n) {
            var a = t.defer();
            return e["delete"](c + "oauth/" + n).success(function (e) {
                e.errno == o.errnoMap.SYSTEM_MAINTENANCE && i.toast({msg: "系统正在维护中，在此期间部分功能暂时无法使用，维护完毕后将会恢复正常"}), a.resolve(e)
            }).error(function () {
                a.reject("网络异常!")
            }), a.promise
        }
    }
}]), accountAppServices.factory("User", ["md5", "Config", function (e, t) {
    var o = t.baseProtocolHost;
    return location.host.indexOf("account.smartisan.com") < 0 && (o = "https://account.smartisan.com"), {
        user: {
            uid: "",
            nickname: "",
            cellphone: ""
        }, captchaUrl: o + "/v2/session/captcha/?" + +new Date, refreshCaptcha: function () {
            var e = this, t = e.captchaUrl;
            return t = t.lastIndexOf("?") > 0 ? t + "&" + +new Date : t + "?" + +new Date, e.captchaUrl = t
        }, setUser: function (t) {
            if (t && t.uid) {
                this.user.uid = t.uid, t.nickname ? this.user.nickname = t.nickname : "", t.cellphone ? this.user.cellphone = t.cellphone : "";
                var o = "smartisancid", n = 14, a = e.createHash(this.user.uid + "");
                a = e.createHash(a + "").slice(-n);
                var r = 7;
                $.cookies.set(o, a, {expiresAt: new Date((new Date).getTime() + 864e5 * r), domain: ".smartisan.com"})
            }
        }, isLoggedIn: function () {
            return !!this.user.uid
        }
    }
}]), accountAppServices.factory("Loading", function () {
    return {
        start: function () {
            $(".loading").show()
        }, done: function () {
            $(".loading").hide()
        }
    }
}), accountAppServices.factory("Validate", function () {
    return {
        checkErrNumber: function (e, t) {
            var o, n = 0;
            e.errAnimation = {}, angular.forEach(t.$error, function (e) {
                angular.forEach(e, function (e) {
                    e.$invalid && (o = e.$name, n++)
                })
            }), 1 == n && (e.errAnimation[o] = !0)
        }
    }
}), accountAppServices.factory("Utils", ["$rootScope", "$q", "$http", "$location", function (e, t, o, n) {
    var a = {};
    return a.truncateChars = function (e, t, o, n) {
        if (e) {
            var a = e.replace(/[\u4e00-\u9fa5\s]/g, "**").length, r = [], i = 0;
            if (n) {
                var c = $("<div></div>").html(e);
                e = c.text(), c = null
            }
            if (a <= t) return e;
            for (var s = 0; s < a; s++) {
                var l = e.charAt(s);
                if (i += /[^\x00-\xff]/.test(l) ? 2 : 1, r.push(l), i >= t) break
            }
            return o ? r.join("") + "..." : r.join("")
        }
        return ""
    }, a.encodeUriQuery = function (e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
    }, a.toKeyValue = function (e) {
        var t = this, o = [];
        return angular.forEach(e, function (e, n) {
            angular.isArray(e) ? angular.forEach(e, function (e) {
                o.push(t.encodeUriQuery(n, !0) + (e === !0 ? "" : "=" + t.encodeUriQuery(e, !0)))
            }) : o.push(t.encodeUriQuery(n, !0) + "=" + t.encodeUriQuery(e, !0))
        }), o.length ? o.join("&") : ""
    }, a.isMobile = function () {
        var e = window.devicePixelRatio || 1;
        return $(window).width() <= 736 && (screen.width <= 736 || e >= 2)
    }, a.isWeixin = function () {
        var e = navigator.userAgent.toLowerCase();
        return "micromessenger" == e.match(/MicroMessenger/i)
    }, a.isMobileQQ = function () {
        var e = navigator.userAgent.toLowerCase();
        return "qq/" == e.match(/qq\//i)
    }, a.isIphone = function () {
        var e = navigator.userAgent.toLowerCase();
        return "iphone" == e.match(/iphone/i)
    }, a.isAndroid = function () {
        var e = navigator.userAgent.toLowerCase();
        return "android" == e.match(/android/i)
    }, a.unicode = function (e) {
        return e ? encodeURIComponent(decodeURIComponent(e)) : e
    }, a.getUrlUnicode = function () {
        return encodeURIComponent(n.absUrl())
    }, a.browser = function () {
        var e = navigator.userAgent.toLowerCase(), t = window.opera, o = {
            ie: /(msie\s|trident.*rv:)([\w.]+)/.test(e),
            opera: !!t && t.version,
            webkit: e.indexOf(" applewebkit/") > -1,
            mac: e.indexOf("macintosh") > -1,
            quirks: "BackCompat" == document.compatMode
        };
        return o.gecko = "Gecko" == navigator.product && !o.webkit && !o.opera && !o.ie, o
    }, a
}]), accountAppServices.factory("Dialog", ["$compile", function (e) {
    var t = {
        dialog: ".m-dialog",
        backdrop: ".m-dialog-backdrop",
        modal: ".m-dialog-modal",
        content: ".m-dialog-content",
        header: ".m-dialog-header",
        close: '[data-dismiss="true"]',
        headline: ".m-dialog-headline",
        body: ".m-dialog-body",
        footer: ".m-dialog-footer"
    }, o = {
        fadein: "fadein",
        shadow: "m-dialog-shadow",
        overflow: "m-dialog-open",
        hide: "hide",
        dialog: "m-dialog",
        backdrop: "m-dialog-backdrop",
        content: "m-dialog-content",
        bubble: "m-bubble",
        toast: "m-toast",
        bubbleStatus: ["loading", "success", "error"]
    }, n = {
        init: {},
        defaultSetting: {
            headline: "操作",
            size: !1,
            backdrop: !0,
            shadow: !0,
            html: "...none...",
            id: "",
            compile: !0,
            replace: !1
        },
        defaultBubbleSetting: {status: "", msg: "暂无消息", close: !1, replace: !1, reload: !1, time: 2e3},
        defaultToastSetting: {msg: "暂无消息", close: !0, reload: !1, time: 2e3, backdrop: !1},
        open: function (a, r) {
            var i = $.extend(!0, {}, n.defaultSetting, a);
            i.headline && $(t.headline).html(i.headline), i.size && $(t.content).addClass(i.size), i.backdrop || $(t.backdrop).addClass(o.hide), i.shadow && $(t.content).addClass(o.shadow), i.compile && i.id ? i.html = e($("#" + i.id).html())(r) : i.html = $("#" + i.id).html(), $(t.body).html(i.html), i.replace || setTimeout(function () {
                $(t.dialog).addClass(o.fadein)
            }, 300)
        },
        close: function () {
            $(t.dialog).removeClass(o.fadein), $(t.headline).html(""), $(t.body).html(""), setTimeout(function () {
                $(t.dialog).attr("class", o.dialog), $(t.backdrop).attr("class", o.backdrop), $(t.content).attr("class", o.content)
            }, 300)
        },
        bubble: function (e) {
            var a = $.extend(!0, {}, n.defaultBubbleSetting, e), r = '<i class="m-' + a.status + '"></i>';
            r += a.msg, a.replace || ($(t.dialog).addClass(o.bubble), $(t.headline).html("")), a.reload && setTimeout(function () {
                window.location.reload()
            }, a.time), a.close && setTimeout(function () {
                n.close()
            }, a.time), $(t.body).html(r), $(t.dialog).hasClass(o.fadein) || setTimeout(function () {
                $(t.dialog).addClass(o.fadein)
            }, 300)
        },
        toast: function (e) {
            var a = $.extend(!0, {}, n.defaultToastSetting, e), r = a.msg;
            a.backdrop || $(t.backdrop).addClass(o.hide), a.reload && setTimeout(function () {
                window.location.reload()
            }, a.time), a.close && setTimeout(function () {
                n.close()
            }, a.time), $(t.body).html(r), $(t.dialog).addClass(o.toast), $(t.dialog).hasClass(o.fadein) || setTimeout(function () {
                $(t.dialog).addClass(o.fadein)
            }, 300)
        }
    };
    return $(t.dialog).on("click", t.close, n.close), $(document).on("keydown", function (e) {
        27 === e.which && n.close()
    }), n
}]), accountAppServices.factory("Content", ["$q", "Request", "Filter", function (e, t, o) {
    function n(e) {
        var t = {};
        if ("[object Object]" === Object.prototype.toString.call(e) || "[object Array]" === Object.prototype.toString.call(e)) for (var o in e) if (e.hasOwnProperty(o)) if ("[object Object]" === Object.prototype.toString.call(e[o])) t[o] = n(e[o]); else {
            var r = a(o);
            t[r] = e[o]
        }
        return t
    }

    function a(e) {
        if (e.indexOf("_") > 0) {
            for (var t = e.toLowerCase().split("_"), o = 1, n = t.length; o < n; o++) t[o] = t[o][0].toUpperCase() + t[o].substring(1, t[o].length);
            return t.join("")
        }
        return e
    }

    function r(e) {
        var t = new Date(1e3 * parseInt(e));
        return t.getFullYear() + "." + (t.getMonth() + 1) + "." + t.getDate()
    }

    var i = {};
    return i.init = function () {
    }, i.takeUserAccount = function () {
        return e.all([t.getSettings(), t.getThirdPartyList(), t.getAuthAppList()]).then(function (e) {
            var t;
            return t = e, e[0].errno || (t[0].data = n(e[0].data), t[0].data.cellphoneActive = 0 | e[0].data.cellphoneActive, t[0].data.emailActive = 0 | e[0].data.emailActive, t[0].data.verifiedEmail = e[0].data.email && e[0].data.emailActive, t[0].data.unVerifiedEmail = e[0].data.email && !e[0].data.emailActive, t[0].data.secquesActive = 0 | !!e[0].data.secques), t
        }, function (e) {
        })
    }, i.takeDeviceData = function () {
        return t.getDeviceData().then(function (e) {
            if (!e.errno) for (var t in e.data) {
                e.data[t] = n(e.data[t]), "bind" === t && (e.data[t] = i.parseDeviceIsOnline(e.data[t]));
                for (var a in e.data[t]) {
                    var c = o.getMobileBrand(e.data[t][a].model), s = e.data[t][a].color || "black";
                    "steel" === s && (s = "white"), "golden" !== s && "gold" !== s || (s = "golden"), "M1" !== c || s.match(/^(golden|white)$/) || (s = "white"), "U1" !== c || s.match(/^(black|white|beige)$/) || (s = "black"), "T2" !== c || s.match(/^(black|white)$/) || (s = "black"), "T1" !== c || s.match(/^(black|white)$/) || (s = "black"), "Pro2" !== c || s.match(/(red|gold|black|white)/) || (s = "golden"), "Pro2" === c && s.match(/red$/) && (s = "red"), "Pro2" === c && s.match(/gold/) && (s = "golden"), "U3" === c && s.match(/red$/) && (s = "red"), "U3" === c && s.match(/gold/) && (s = "golden"), "R1" !== c || s.match(/(black|white|blue)/) || (s = "black"), e.data[t][a].color = s, e.data[t][a].brand = c, e.data[t][a].date = r(e.data[t][a].updateTime) || ""
                }
            }
            return e
        }, function (e) {
        })
    }, i.parseDeviceIsOnline = function (e) {
        for (var o in e) !function (o) {
            t.getDeviceIsOnlineStatus({id: e[o].id}).then(function (t) {
                if (!t.errno) switch (t.data) {
                    case 0:
                        e[o].isOnline = 0, e[o].isOnlineCn = "离线", e[o].isOnlineColor = "off";
                        break;
                    case 1:
                        e[o].isOnline = 1, e[o].isOnlineCn = "在线", e[o].isOnlineColor = "on";
                        break;
                    default:
                        e[o].isOnline = 0, e[o].isOnlineCn = "未知", e[o].isOnlineColor = "off"
                }
            }, function (e) {
                console.log("device id " + o + "have no status of online!", e)
            })
        }(o);
        return e
    }, i
}]), accountAppServices.factory("Filter", ["Config", function (e) {
    var t = {};
    return t.init = function () {
    }, t.cellphoneFilter = function (e) {
        var t = e.length, o = e.substring(0, t - 8), n = e.slice(-4);
        return o + "****" + n
    }, t.emailFilter = function (e) {
        var t = e.indexOf("@"), o = e.substring(0, t), n = e.substring(t), a = e, r = o[0], i = 1, c = o.length;
        if (c > 3) {
            for (i; i < c - 1; i++) r += "*";
            r += o[c - 1], a = r + n
        }
        return a
    }, t.emailLocation = function (t) {
        var o = "";
        return t && (t = "" + t, o = t.replace(/^.+\@/g, ""), o = e.mailUrl[o] ? e.mailUrl[o] : "http://mail." + o), o
    }, t.getMobileBrand = function (e) {
        switch (e) {
            case"sm901":
            case"sm919":
                return "M1";
            case"sm801":
                return "T2";
            case"sm701":
            case"sm705":
                return "T1";
            case"yq601":
            case"yq603":
            case"yq605":
            case"yq607":
                return "U1";
            case"od101":
            case"od103":
            case"od105":
            case"yq607":
                return "Pro";
            case"os105":
            case"os103":
                return "Pro2";
            case"oc105":
            case"oc106":
                return "U3";
            case"de106":
                return "R1";
            case"oe106":
            case"oe103":
                return "Pro2s";
            default:
                return "T1"
        }
    }, t.checkIsEmptyObject = function (e) {
        var t;
        for (t in e) return !1;
        return !0
    }, t.changeToArray = function (e) {
        var t = [];
        for (var o in e) t.push(e[o]);
        return t
    }, t
}]), accountAppServices.factory("GTMAnalyticsService", function () {
    var e = function () {
        window.dataLayer && window.dataLayer.push({event: "gtm-register-success"})
    };
    return {registerSuccess: e}
}), accountAppControllers.controller("MainCtrl", ["$scope", "$rootScope", "$http", "$timeout", "$location", "$window", "User", "Request", "Config", "Utils", function (e, t, o, n, a, r, i, c, s, l) {
    if (t.isRefresh = !0, t.isMobile = l.isMobile(), t.browser = l.browser(), e.util = {}, t.isRefresh && !l.isMobile()) {
        var u = $(".dialog"), d = u.css("margin-top");
        e.$on("$viewContentLoaded", function () {
            n(function () {
                var e = $(".dialog"), t = $(".copyright").outerHeight();
                "0px" != e.css("margin-top") && d != e.css("margin-top") || e.css({"margin-top": -(e.outerHeight() + t) / 2})
            })
        })
    }
    if (/embed/.test(a.$$path) && r.parent !== r) {
        var p = a.search().origin;
        s.legalOrigin.test(p) ? t.targetOrigin = p : t.targetOrigin = "http://store.smartisan.com"
    } else $("body").removeClass("bg-none"), $(".wrapper").removeClass("bg-none");
    $(window).on("keydown", function (e) {
        if (!t.isEmbedCloud && !t.isEmbedBbsTmp) {
            var e = e || window.event;
            27 == e.keyCode && t.targetOrigin && r.parent.postMessage("dialogClose", t.targetOrigin)
        }
    }), $(".wrapper").on("click", function (e) {
        if (!t.isEmbedCloud && !t.isEmbedBbsTmp) {
            e.stopPropagation();
            var o = e.target;
            $(o).hasClass("wrapper") && r.parent != r && r.parent.postMessage("dialogClose", t.targetOrigin)
        }
    }), $(".dialog .title .close").on("click", function (e) {
        t.isEmbedCloud || r.parent.postMessage("dialogClose", t.targetOrigin)
    })
}]), accountAppControllers.controller("RegisterCtrl", ["$scope", "$rootScope", "$window", "$http", "$location", "$timeout", "$interval", "Request", "Config", "User", "Validate", "Loading", "Utils", "GTMAnalyticsService", function (e, t, o, n, a, r, i, c, s, l, u, d, p, m) {
    t.dialogTitle = "注册 Smartisan ID";
    var f = {};
    e.isMiniprogram = !1, (a.search().isMiniprogram || "miniprogram" === window.__wxjs_environment) && (f.authToken = a.search().authToken, e.isMiniprogram = !0), e.invalid = {}, e.focus = {}, e.showBtn = !0, e.agreed = !1, e.user = {}, e.util.submitted = !1;
    var h = /embed/.test(a.$$path), g = a.search().return_url;
    if (1 == t.isWechatLogin && g) return void o.location.replace(g);
    t.isEmbedBbsTmp && (e.showRePwd = function () {
        e.needRePassword = !0, o.parent !== o && o.parent.postMessage("showSlideDown", t.targetOrigin)
    }), e.cccList = s.cccList, e.ccc = s.defaultCountryCode, e.country = s.defaultCountryName;
    var v = !1;
    e.showList = function (e) {
        v || ($(".country-list").show(), e.stopPropagation(), v = !0, $(".wrapper").one("click", function () {
            $(".country-list").hide(), v = !1
        }))
    }, e.changeCountry = function (t, o) {
        e.ccc = t.slice(1) || e.ccc, e.country = o || e.country, e.form.mobile.$setValidity("mobile", !0), e.form.mobile.$setValidity("mobileRegistered", !0), e.validateMobile()
    }, e.captchaNeeded = !1, e.register = function () {
        if (e.util.submitted = !0, e.form.$invalid) {
            if (e.errAnimation = {}, e.form.mobile.$invalid) return void (e.errAnimation.mobile = !0);
            if (e.form.captcha.$invalid) return;
            if (e.form.verification.$invalid) return;
            if (e.form.password.$invalid) return void (e.errAnimation.password = !0);
            if (e.form.repassword.$invalid) return void (e.errAnimation.repassword = !0)
        } else {
            if (!e.agreed) return void (e.animationTip = !0);
            var n = t.isWechat ? c.registerWechat : c.register;
            e.isMiniprogram && (n = c.wxRegisterBind), d.start(), e.clicked = !0, n({
                "user[cellphone]": "+" + e.ccc + " " + e.user.mobile,
                "ext[cellphone_code]": e.user.verification,
                "ext[login]": t.isEmbedBbs || t.isEmbedBbsTmp ? "true" : "false",
                "user[password]": e.user.password,
                authToken: f.authToken,
                channel_id: s.wxChannelID
            }).then(function (n) {
                switch (d.done(), e.clicked = !1, +n.errno) {
                    case s.errnoMap.REGISTERED_CELLPHONE:
                        e.invalid.mobileRegistered = !1;
                        break;
                    case s.errnoMap.ILLEGAL_VCODE:
                    case s.errnoMap.INVALID_VCODE:
                        e.invalid.mobileCaptchaValid = !1;
                        break;
                    case s.errnoMap.CAPTCHA_REQUIRED:
                        e.captchaNeeded = !0, r(function () {
                            e.reloadCaptcha(n.data.captcha), e.focus.captcha = !0
                        }, 500);
                        break;
                    case s.errnoMap.REFRECH_VCODE:
                        e.invalid.mobileCaptchaReload = !1;
                        break;
                    case s.errnoMap.OK:
                        window.dataLayer && window.dataLayer.push({event: "gtm-register-success"}), h ? o.parent !== o && o.parent.postMessage("isRegistered", t.targetOrigin) : a.path("/result/register").search({return_url: p.unicode(g)})
                }
            }, function (t) {
                d.done(), e.clicked = !1, e.captchaNeeded = !0
            })
        }
    };
    var b = function () {
        var t = 60;
        e.timer = t, e.showBtn = !1, i(function () {
            e.timer--
        }, 1e3, t).then(function () {
            e.showBtn = !0
        })
    };
    e.resend = function () {
        if (e.captchaSubmitted = !0, e.form.mobile.$invalid) return e.errAnimation = {}, void (e.errAnimation.mobile = !0);
        if (e.captchaNeeded && e.form.captcha.$invalid) return e.errAnimation = {}, void (e.errAnimation.captcha = !0);
        var t = {cellphone: "+" + e.ccc + " " + e.user.mobile};
        e.captchaNeeded && (t.captcha = e.user.captcha), c.sendMobileCaptcha(t).then(function (t) {
            if (e.captchaSubmitted = !1, 0 != t.errno) switch (+t.errno) {
                case s.errnoMap.REGISTERED_CELLPHONE:
                    e.invalid.mobileRegistered = !1;
                    break;
                case s.errnoMap.ILLEGAL_CELLPHONE:
                    e.invalid.mobile = !1;
                    break;
                case s.errnoMap.ILLEGAL_VCODE:
                case s.errnoMap.INVALID_VCODE:
                    e.invalid.captchaValid = !1;
                    break;
                case s.errnoMap.CAPTCHA_REQUIRED:
                    e.captchaNeeded = !0, r(function () {
                        e.reloadCaptcha(t.data.captcha), e.focus.captcha = !0
                    }, 500);
                    break;
                case s.errnoMap.REFRECH_VCODE:
                    e.reloadCaptcha(), e.invalid.captchaValid = !1, e.focus.captcha = !0;
                    break;
                case s.errnoMap.VCODE_TOO_OFTEN:
                    b()
            } else b()
        }, function (e) {
        })
    }, e.reloadCaptcha = function (t) {
        e.loginCaptchaUrl = t ? t : l.refreshCaptcha();
        var o = $(".tips-verifycon");
        o.addClass("active"), setTimeout(function () {
            o.removeClass("active")
        }, 600)
    }, e.validateMobile = function () {
        if (!e.form.mobile.$invalid) {
            if ("86" == e.ccc) {
                if (!s.regExp.isCnMobile.test(e.user.mobile)) return void e.form.mobile.$setValidity("mobile", !1)
            } else if (!s.regExp.isMobile.test(e.user.mobile)) return void e.form.mobile.$setValidity("mobile", !1);
            c.checkMobile({m: "get", cellphone: "+" + e.ccc + " " + e.user.mobile, action: "check"}).then(function (t) {
                if (0 != t.errno) switch (t.errno) {
                    case s.errnoMap.REGISTERED_CELLPHONE:
                        e.invalid.mobileRegistered = !1;
                        break;
                    case s.errnoMap.ILLEGAL_CELLPHONE:
                        e.invalid.mobile = !1
                }
            }, function (e) {
            })
        }
    }, e.validateMobileCaptcha = function () {
        if (!e.form.verification.$invalid) return e.form.mobile.$invalid ? void (e.invalid.mobileCaptchaValid = !1) : void c.checkMobileCaptcha({
            action: "renew",
            cellphone: "+" + e.ccc + " " + e.user.mobile,
            cellphone_code: e.user.verification
        }).then(function (t) {
            if (0 != t.errno) switch (t.errno) {
                case s.errnoMap.ILLEGAL_VCODE:
                case s.errnoMap.INVALID_VCODE:
                    e.invalid.mobileCaptchaValid = !1;
                    break;
                case s.errnoMap.CAPTCHA_REQUIRED:
                    e.captchaNeeded = !0, r(function () {
                        e.reloadCaptcha(t.data.captcha), e.focus.captcha = !0
                    }, 500);
                    break;
                case s.errnoMap.REFRECH_VCODE:
                    e.invalid.mobileCaptchaReload = !1
            }
        }, function (e) {
        })
    }, e.toLogin = function () {
        if (h) a.path("/login/embed"); else {
            var e = a.search().v;
            if (e && "2" == e) a.path("/v2/login").search({return_url: p.unicode(g)}); else {
                if (s.regExp.isSafeUrl.test(decodeURIComponent(g))) {
                    if (g.indexOf(s.baseHost) >= 0) {
                        var t = g.split("#");
                        t[1] && a.path(t[1])
                    } else /bbs.smartisan.com/i.test(g) ? o.location.replace("http://bbs.smartisan.com/member.php?mod=logging&action=login&referer=") : o.location.replace(g);
                    return
                }
                a.path("/login")
            }
        }
    }
}]), accountAppControllers.controller("LoginCtrl", ["$scope", "$rootScope", "$http", "$location", "$window", "$timeout", "User", "Request", "$routeParams", "$route", "Config", "Validate", "Loading", "Utils", function (e, t, o, n, a, r, i, c, s, l, u, d, p, m) {
    t.dialogTitle = "登录", e.invalid = {}, e.focus = {}, e.util.submitted = !1;
    var f = /embed/.test(n.$$url), h = n.search().return_url, g = n.search().username,
        v = new RegExp("^http://www.smartisan.com/special/#/20151111", "i");
    if (v.test(decodeURIComponent(h)) && (t.is1111 = !0, t.backToLast = function () {
        a.history.back(1)
    }), 1 == t.isWechatLogin && h) return void a.location.replace(h);
    t.isEmbedBbs && (t.dialogTitle = "使用欢喜云账户登录锤子论坛"), e.registerText = t.isEmbedNotes || t.isEmbedContacts || t.isEmbedRadar ? "注册欢喜云账户" : "注册新账户", e.user = {}, e.remembered = t.isWechat, f && g && ($(".cloud .title").addClass("locked"), e.user.username = g, $(".username .placeholder").hide()), t.showCcc && (e.cccList = u.cccList, e.ccc = u.defaultCountryCode, e.country = u.defaultCountryName), e.switchModel = function () {
        t.showCcc = !t.showCcc, t.isRefresh = !0, l.reload()
    };
    var b = !1;
    e.showList = function (e) {
        b || ($(".country-list").show(), e.stopPropagation(), b = !0, $(".wrapper").one("click", function () {
            $(".country-list").hide(), b = !1
        }))
    }, e.changeCountry = function (t, o) {
        e.ccc = t.slice(1) || e.ccc, e.country = o || e.country, e.invalid.username = !0, e.invalid.nameValid = !0, e.invalid.passwordValid = !0, e.util.submitted = !1
    }, e.login = function () {
        if (e.util.submitted = !0, e.form.$invalid) {
            if (e.errAnimation = {}, e.form.username.$invalid) return void (e.errAnimation.username = !0);
            if (e.form.password.$invalid) return void (e.errAnimation.password = !0)
        } else {
            var o = {};
            o.username = e.user.username, o.password = e.user.password, e.user.captcha && (o.captcha = e.user.captcha), e.showCcc && u.regExp.isMobile.test(o.username) && (o.username = "+" + e.ccc + " " + o.username), e.remembered && !t.isWechat && (o.extended_login = 1);
            var i = t.isWechat && e.remembered ? c.loginWechat : c.login;
            p.start(), i(o).then(function (o) {
                switch (p.done(), o.errno) {
                    case u.errnoMap.ILLEGAL_PASSWORD:
                    case u.errnoMap.INVALID_PASSWORD:
                        e.invalid.passwordValid = !1, e.focus.password = !0;
                        break;
                    case u.errnoMap.PARAMETER_ERROR:
                    case u.errnoMap.ILLEGAL_CELLPHONE:
                    case u.errnoMap.INVALID_CELLPHONE:
                    case u.errnoMap.INVALID_UID:
                    case u.errnoMap.INVALID_EMAIL:
                    case u.errnoMap.UNREGISTERED_NICKNAME:
                        e.invalid.nameValid = !1;
                        break;
                    case u.errnoMap.ILLEGAL_VCODE:
                    case u.errnoMap.INVALID_VCODE:
                        e.invalid.captchaValid = !1, e.focus.captcha = !0;
                        break;
                    case u.errnoMap.CAPTCHA_REQUIRED:
                        e.captchaNeeded = !0, (t.isEmbedBbs || t.isEmbedBbsTmp) && a.parent !== a && a.parent.postMessage("showSlideDown", t.targetOrigin), e.loginCaptchaUrl = o.data.captcha, r(function () {
                            e.focus.captcha = !0
                        }, 500);
                        break;
                    case u.errnoMap.REFRECH_VCODE:
                        e.captchaNeeded = !0, e.reloadCaptcha(), e.invalid.captchaValid = !1, e.focus.captcha = !0;
                        break;
                    case u.errnoMap.FAILED_LOGIN_LIMIT:
                        e.invalid.passwordValid = !1, e.focus.password = !0, e.captchaNeeded = !0, (t.isEmbedBbs || t.isEmbedBbsTmp) && a.parent !== a && a.parent.postMessage("showSlideDown", t.targetOrigin), e.reloadCaptcha(o.data.captcha);
                        break;
                    case u.errnoMap.OK:
                        if (f) a.parent !== a && a.parent.postMessage("isLoggedIn", t.targetOrigin); else {
                            if (u.regExp.isSafeUrl.test(decodeURIComponent(h))) {
                                if (h.indexOf(u.baseHost) >= 0) {
                                    var i = h.split("#");
                                    i[1] && n.path(i[1])
                                } else a.location.replace(h);
                                return
                            }
                            var c = s.action;
                            switch (c) {
                                case"modifyPassword":
                                    n.path("/" + c);
                                    break;
                                case"modifyMobile":
                                case"modifyMail":
                                case"modifyQuestion":
                                    n.path("/auth/" + c);
                                    break;
                                default:
                                    n.path("/result/login")
                            }
                        }
                }
            }, function (t) {
                p.done(), e.captchaNeeded = !0
            })
        }
    }, e.toRegister = function () {
        f ? t.isEmbedCloud ? e.toRegisterWithReturn() : n.path("/register/embed") : n.path("/register")
    }, e.toRegisterWithReturn = function () {
        a.parent.location.replace(u.baseProtocolHost + "/#/register?return_url=" + m.unicode(t.targetOrigin))
    }, e.forgotPassword = function () {
        f ? a.open(u.baseProtocolHost + "/#/forgotPassword") : n.path("/forgotPassword")
    }, e.reloadCaptcha = function (t) {
        var o = t || e.loginCaptchaUrl;
        o = o.lastIndexOf("?") > 0 ? o + "&" + +new Date : o + "?" + +new Date, e.loginCaptchaUrl = o
    }
}]), accountAppControllers.controller("LoginV2Ctrl", ["$scope", "$rootScope", "$http", "$location", "$window", "$timeout", "User", "Request", "$routeParams", "$route", "Config", "Validate", "Loading", "userInfo", "Utils", function (e, t, o, n, a, r, i, c, s, l, u, d, p, m, f) {
    function h() {
        if (window.PasswordCredential && E === !0 && navigator.credentials && navigator.credentials.store) {
            var t = new PasswordCredential({id: e.user.username, password: e.user.password});
            navigator.credentials.store(t).then(function () {
            })
        }
    }

    function g(o, i) {
        switch (p.done(), o.errno) {
            case u.errnoMap.ILLEGAL_PASSWORD:
            case u.errnoMap.INVALID_PASSWORD:
                e.invalid.passwordValid = !1, e.focus.password = !0;
                break;
            case u.errnoMap.PARAMETER_ERROR:
            case u.errnoMap.ILLEGAL_CELLPHONE:
            case u.errnoMap.INVALID_CELLPHONE:
            case u.errnoMap.INVALID_UID:
            case u.errnoMap.INVALID_EMAIL:
            case u.errnoMap.UNREGISTERED_NICKNAME:
                e.invalid.nameValid = !1;
                break;
            case u.errnoMap.ILLEGAL_VCODE:
            case u.errnoMap.INVALID_VCODE:
                e.invalid.captchaValid = !1, e.focus.captcha = !0;
                break;
            case u.errnoMap.CAPTCHA_REQUIRED:
                e.captchaNeeded = !0, e.loginCaptchaUrl = o.data.captcha, r(function () {
                    e.focus.captcha = !0
                }, 500);
                break;
            case u.errnoMap.REFRECH_VCODE:
                e.captchaNeeded = !0, e.reloadCaptcha(), e.invalid.captchaValid = !1, e.focus.captcha = !0;
                break;
            case u.errnoMap.FAILED_LOGIN_LIMIT:
                e.invalid.passwordValid = !1, e.focus.password = !0, e.captchaNeeded = !0, e.reloadCaptcha(o.data.captcha);
                break;
            case u.errnoMap.OK:
                if (i === !0 && h(), !t.isMobile && o.data.alarm) return void n.path("/warning/safety").search({return_url: decodeURIComponent(w)});
                if (u.regExp.isSafeUrl.test(decodeURIComponent(w))) {
                    if (w.indexOf(u.baseHost) >= 0) {
                        var c = w.split("#");
                        c[1] && n.path(c[1])
                    } else a.location.replace(decodeURIComponent(w));
                    return
                }
                var l = s.action;
                switch (l) {
                    case"modifyPassword":
                        n.path("/" + l);
                        break;
                    case"modifyMobile":
                    case"modifyMail":
                    case"modifyQuestion":
                        n.path("/auth/" + l);
                        break;
                    default:
                        n.path("/result/login")
                }
        }
    }

    function v() {
        var o = "", n = "注册 Smartisan ID", a = "", r = "忘记密码", i = decodeURIComponent(w);
        /cloud.smartisan.com/i.test(i) ? /notes/i.test(i) ? (o = "锤子便签", a = "logo-notes") : /contacts/i.test(i) ? (o = "联系人", a = "logo-contacts") : /radar/i.test(i) ? (o = "查找手机", a = "logo-radar") : C ? (a = "logo-locked", o = "解锁", e.user.username = C, $(".username .placeholder").hide()) : (a = "logo-cloud", o = "欢喜云") : /bbs.smartisan.com/i.test(i) ? (o = "锤子科技官方论坛", a = "logo-bbs") : o = /(smartisan.com\/?\#?\/shop)|(store.smartisan.com)/i.test(i) ? "在线商城" : /dev.smartisan.com/i.test(i) ? "开发者中心" : "官网", t.isMobile ? (n = "注册", o = "登录" + o) : (o = "使用 Smartisan ID 登录" + o, r += "？"), t.dialogTitle = o, e.isMiniprogram && (t.dialogTitle = "绑定 Smartisan ID"), t.loginLogoClass = a, e.registerText = n, e.forgetText = r
    }

    var b = {};
    e.isMiniprogram = !1, (n.search().isMiniprogram || "miniprogram" === window.__wxjs_environment) && (b.authToken = n.search().authToken, e.isMiniprogram = !0);
    var E = !0;
    t.dialogTitle = "使用 Smartisan ID 登录锤子商城", e.registerText = "注册 Smartisan ID", e.invalid = {}, e.focus = {}, e.util.submitted = !1;
    var C = n.search().username, w = n.search().return_url;
    if (w && "" != w && !u.regExp.isSafeUrl.test(decodeURIComponent(w)) && (w = f.unicode(u.officialURL)), 1 == t.isWechatLogin && w && e.isMiniprogram) return void a.location.replace(w);
    e.user = {}, e.remembered = !0, t.showCcc && (e.cccList = u.cccList, e.ccc = u.defaultCountryCode, e.country = u.defaultCountryName), e.switchModel = function () {
        t.showCcc = !t.showCcc, t.isRefresh = !0, l.reload()
    };
    var A = !1;
    e.showList = function (e) {
        A || ($(".country-list").show(), e.stopPropagation(), A = !0, $(".wrapper").one("click", function () {
            $(".country-list").hide(), A = !1
        }))
    }, e.changeCountry = function (t, o) {
        e.ccc = t.slice(1) || e.ccc, e.country = o || e.country, e.invalid.username = !0, e.invalid.nameValid = !0, e.invalid.passwordValid = !0, e.util.submitted = !1
    }, e.login = function () {
        if (e.util.submitted = !0, e.form.$invalid) {
            if (e.errAnimation = {}, e.form.username.$invalid) return void (e.errAnimation.username = !0);
            if (e.form.password.$invalid) return void (e.errAnimation.password = !0)
        } else {
            var o = {};
            o.username = e.user.username, o.password = e.user.password, e.user.captcha && (o.captcha = e.user.captcha), e.showCcc && u.regExp.isMobile.test(o.username) && (o.username = "+" + e.ccc + " " + o.username), e.remembered && !t.isWechat && (o.extended_login = 1);
            var n = t.isWechat && e.remembered ? c.loginWechat : c.login;
            e.isMiniprogram && (n = c.wxBind, o.authToken = b.authToken, o.channel_id = u.wxChannelID), p.start(), n(o).then(function (e) {
                g(e, !0)
            }, function (t) {
                p.done(), e.captchaNeeded = !0
            })
        }
    }, e.toRegister = function () {
        n.path("/register").search({v: "2", return_url: w, authToken: b.authToken, channel_id: u.wxChannelID})
    }, e.toRegisterWithReturn = function () {
        a.parent.location.replace(u.baseProtocolHost + "/#/register?return_url=" + f.unicode(t.targetOrigin))
    }, e.forgotPassword = function () {
        n.path("/forgotPassword")
    }, e.reloadCaptcha = function (t) {
        var o = t || e.loginCaptchaUrl || "https://account.smartisan.com/v2/session/captcha/";
        o = o.lastIndexOf("?") > 0 ? o + "&" + +new Date : o + "?" + +new Date, e.loginCaptchaUrl = o;
        var n = $(".tips-verifycon");
        n.addClass("active"), setTimeout(function () {
            n.removeClass("active")
        }, 600)
    }, e.wechatLogin = function () {
        c.wechatLogin(w)
    }, e.qqLogin = function () {
        c.qqLogin(w)
    }, e.weiboLogin = function () {
        c.weiboLogin(w)
    }, e.alipayLogin = function () {
        c.alipayLogin(w)
    }, v(), E === !0 && navigator.credentials && navigator.credentials.get && !e.isMiniprogram && navigator.credentials.get({password: !0}).then(function (e) {
        if (e && "password" == e.type) {
            p.start();
            var o = u.baseUrl + "session/?m=post";
            t.isMobile || (o += "&alarm=1"), fetch(o, {credentials: e, method: "POST"}).then(function (e) {
                return e.json()
            }).then(function (e) {
                g(e, !1)
            })
        }
    })
}]), accountAppControllers.controller("LogoutCtrl", ["$scope", "$rootScope", "$http", "$location", "$window", "$timeout", "User", "Request", "$routeParams", "Config", "Validate", "Loading", function (e, t, o, n, a, r, i, c, s, l, u, d) {
    var p = {};
    e.isMiniprogram = !1, (n.search().isMiniprogram || "miniprogram" === window.__wxjs_environment) && (p.authToken = n.search().authToken, e.isMiniprogram = !0);
    var m = t.isWechat && t.wechatCheckStatus || e.isMiniprogram ? c.logoutWechat : c.logout, f = /embed/.test(n.$$url),
        h = n.search().return_url;
    d.start(), m({authToken: p.authToken, channel_id: l.wxChannelID}).then(function (e) {
        if (d.done(), 0 == e.errno) if (f) a.parent !== a && a.parent.postMessage("isLoggedOut", t.targetOrigin); else if (l.regExp.isSafeUrl.test(decodeURIComponent(h))) if (h.indexOf(l.baseHost) >= 0) {
            var o = h.split("#");
            o[1] && n.path(o[1])
        } else a.location.replace(h); else n.path("/login")
    }, function (e) {
        d.done()
    })
}]), accountAppControllers.controller("Logout2Ctrl", ["$scope", "$rootScope", "$http", "$location", "$window", "$timeout", "User", "Request", "$routeParams", "Config", "Validate", "Loading", function (e, t, o, n, a, r, i, c, s, l, u, d) {
    t.dialogTitle = "退出登录";
    var p = /embed/.test(n.$$url), m = n.search().return_url;
    e.confirm = function () {
        var e = t.isWechat ? c.logoutWechat : c.logout;
        d.start(), e().then(function (e) {
            if (d.done(), 0 == e.errno) if (p) a.parent !== a && a.parent.postMessage("isLoggedOut", t.targetOrigin); else if (l.regExp.isSafeUrl.test(decodeURIComponent(m))) if (m.indexOf(l.baseHost) >= 0) {
                var o = m.split("#");
                o[1] && n.path(o[1])
            } else a.location.replace(m); else n.path("/login")
        }, function (e) {
            d.done()
        })
    }, e.cancel = function () {
        p ? a.parent !== a && a.parent.postMessage("dialogClose", t.targetOrigin) : a.history.length > 1 && a.history.back(1)
    }
}]), accountAppControllers.controller("AuthCtrl", ["$scope", "$rootScope", "$http", "$routeParams", "$location", "$window", "Request", "UtilTools", "$interval", "Config", "Validate", "Loading", "userAuths", function (e, t, o, n, a, r, i, c, s, l, u, d, p) {
    t.dialogTitle = "安全验证", e.invalid = {}, e.user = {}, e.answer = {};
    var m = {cellphone: "通过手机短信验证身份", email: "通过邮箱验证身份", secques: "通过密码保护验证身份"};
    e.authType = {types: [], checked: 0}, e.errAnimation = {}, e.util.submitted = !1;
    switch (n.channelID) {
        case"forgotPassword":
            e.authType.action = "FIND_PASSWORD";
            var f = n;
            f && f.username && (e.authType.username = f.username), e.gotoPage = "modifyPassword";
            break;
        case"modifyMobile":
            e.authType.action = "UPDATE_CELLPHONE", e.gotoPage = "modifyMobile";
            break;
        case"modifyMail":
            e.authType.action = "UPDATE_EMAIL", e.gotoPage = "modifyMail";
            break;
        case"modifyQuestion":
            e.authType.action = "UPDATE_SECQUES", e.gotoPage = "modifyQuestion";
            break;
        case"modifyAvatar":
            e.authType.action = "UPDATE_AVATAR", e.gotoPage = "modifyAvatar"
    }
    var h = function (t) {
        var o = 60 * (t || 1);
        e.timer = o, e.showBtn = !1, s(function () {
            e.timer--
        }, 1e3, o).then(function () {
            e.showBtn = !0
        })
    };
    e.resend = function () {
        h(), i.sendUpdateCaptcha({
            "for": e.authType.action,
            to: e.authType.checkType,
            uid: t.currentUid,
            secret: e.secret
        }).then(function (e) {
            if (e.errno == l.errnoMap.PARAMETER_ERROR) return void r.location.reload()
        })
    }, e.resendEmail = function () {
        h(5), i.sendUpdateCaptcha({
            "for": e.authType.action,
            to: e.authType.checkType,
            uid: t.currentUid,
            secret: e.secret
        }).then(function (e) {
            if (e.errno == l.errnoMap.PARAMETER_ERROR) return void r.location.reload()
        })
    }, e.gotoEmail = function () {
        var t;
        angular.forEach(e.authType.types, function (e) {
            "email" == e.type && (t = e.value)
        });
        var o = t.split("@")[1], n = l.mailUrl[o] || "http://mail." + o + "/";
        window.open(n)
    }, e.next = function () {
        return "secques" == e.authType.checkType ? (e.current = "secques", void e.changeQuestion()) : (d.start(), void i.sendUpdateCaptcha({
            "for": e.authType.action,
            to: e.authType.checkType,
            uid: t.currentUid,
            secret: e.secret
        }).then(function (t) {
            if (d.done(), e.util.submitted = !1, t.errno == l.errnoMap.PARAMETER_ERROR) return void r.location.reload();
            switch (jQuery.support.opacity && $(".content").css({opacity: "0"}).animate({opacity: "1"}, 500), e.authType.checkType) {
                case"email":
                    e.current = "email", h(5);
                    break;
                case"cellphone":
                    e.current = "cellphone", angular.forEach(e.authType.types, function (t) {
                        "cellphone" == t.type && (e.mobile = t.value)
                    }), e.showBtn = !0, h()
            }
        }, function (e) {
            d.done()
        }))
    }, e.mobileNext = function () {
        if (e.util.submitted = !0, t.currentToken = void 0, !e.form.$valid) return void u.checkErrNumber(e, e.form);
        d.start();
        var o = {"for": e.authType.action, uid: t.currentUid};
        o.cellphone_code = e.user.verification, i.checkUpdateCaptcha(o).then(function (o) {
            switch (d.done(), +o.errno) {
                case l.errnoMap.OK:
                    t.currentToken = o.data, a.path("/" + e.gotoPage);
                    break;
                case l.errnoMap.ILLEGAL_VCODE:
                case l.errnoMap.INVALID_VCODE:
                    e.invalid.mobileCaptchaValid = !1;
                    break;
                case l.errnoMap.REFRECH_VCODE:
                    e.invalid.mobileCaptchaReload = !1
            }
        }, function (e) {
            d.done()
        })
    }, e.changeQuestion = function () {
        var t, o = e.questions && e.questions.length > 0 ? e.questions[Math.floor(2 * Math.random())].v : "";
        e.questions = [], angular.forEach(e.authType.types, function (e) {
            "secques" == e.type && (t = e.value)
        });
        for (var n in t) t.hasOwnProperty(n) && o !== t[n] && e.questions.push({k: n, v: t[n]});
        e.questions.length > 2 && e.questions.splice(Math.floor(3 * Math.random()), 1), e.answer = {}, e.invalid.answerInvalid = !0, e.util.submitted = !1, e.form.answer1 && (e.form.answer1.$submitted = !1), e.form.answer2 && (e.form.answer2.$submitted = !1)
    }, e.questionConfirm = function () {
        if (e.util.submitted = !0, t.currentToken = void 0, e.form.answer1.$invalid) return e.errAnimation = {}, void (e.errAnimation.answer1 = !0);
        if (e.form.answer2.$invalid) return e.errAnimation = {}, void (e.errAnimation.answer2 = !0);
        var o = {"for": e.authType.action, uid: t.currentUid};
        o["secans[" + e.questions[0].k + "]"] = e.answer.answer1, o["secans[" + e.questions[1].k + "]"] = e.answer.answer2, d.start(), i.checkUpdateCaptcha(o).then(function (o) {
            switch (d.done(), +o.errno) {
                case l.errnoMap.OK:
                    t.currentToken = o.data, a.path("/" + e.gotoPage);
                    break;
                case l.errnoMap.INVALID_SECANS:
                    e.invalid.answerInvalid = !1
            }
        }, function (e) {
            d.done()
        })
    };
    var g = function (e) {
        var t = {}, o = [];
        return angular.forEach(e, function (e, o) {
            switch (e.type) {
                case"cellphone":
                    t.cellphone = e;
                    break;
                case"email":
                    t.email = e;
                    break;
                case"secques":
                    t.secques = e
            }
        }), t.cellphone && o.push(t.cellphone), t.email && o.push(t.email), t.secques && o.push(t.secques), o
    }, v = function () {
        e.gotoPage && b()
    }, b = function () {
        t.forgotPasswordMsg ? E(t.forgotPasswordMsg) : "0" == p.errno ? E(p) : C()
    }, E = function (o) {
        if (d.done(), e.authType.types = [], "0" == o.errno) {
            for (var n in o.data) if (o.data[n]) if ("uid" == n) t.currentUid = o.data[n]; else {
                var a = {};
                a.type = n, a.value = o.data[n], a.desc = m[n], e.authType.types.push(a)
            }
            e.authType.types = g(e.authType.types), e.secret = o.data.secret, angular.forEach(e.authType.types, function (t, o) {
                "cellphone" == t.type && e.selectType(o)
            })
        } else C()
    };
    e.selectType = function (t) {
        e.authType.checked = t, e.authType.checkType = e.authType.types[t].type
    };
    var C = function () {
        d.done()
    };
    v(), t.isMobile && (e.isMobile = !0)
}]), accountAppControllers.controller("ModifyPasswordCtrl", ["$scope", "$rootScope", "$http", "$location", "Request", "Config", "Loading", "Validate", function (e, t, o, n, a, r, i, c) {
    t.dialogTitle = "修改密码", e.invalid = {}, e.user = {}, e.oldRequired = !0, e.util.submitted = !1;
    var s = n.search();
    if (t.currentToken) e.oldRequired = !1; else if (s && s.code) {
        e.oldRequired = !1, t.currentUid = s.uid;
        var l = {"for": "FIND_PASSWORD", uid: s.uid, email_code: s.code};
        a.checkUpdateCaptcha(l).then(function (e) {
            "0" == e.errno ? t.currentToken = e.data : n.path("/forgotPassword")
        }, function (e) {
        })
    }
    e.modify = function () {
        if (e.util.submitted = !0, e.oldRequired && e.form.oldpassword.$invalid) return e.errAnimation = {}, void (e.errAnimation.oldpassword = !0);
        if (e.form.password.$invalid) return e.errAnimation = {}, void (e.errAnimation.password = !0);
        if (e.form.repassword.$invalid) return e.errAnimation = {}, void (e.errAnimation.repassword = !0);
        i.start();
        var o = {};
        e.oldRequired ? o = {
            "user[password]": e.user.password,
            "ext[password]": e.user.oldpassword
        } : (o = {
            "user[password]": e.user.password,
            "ext[token]": t.currentToken
        }, t.currentUid && (o.uid = t.currentUid), s.username && (o.username = s.username)), a.updateUserPassword(o).then(function (t) {
            switch (i.done(), +t.errno) {
                case r.errnoMap.OK:
                    n.path("/result/modifyPassword");
                    break;
                case r.errnoMap.ILLEGAL_PASSWORD:
                case r.errnoMap.INVALID_PASSWORD:
                    e.invalid.oldpasswordValid = !1
            }
        }, function (e) {
            i.done()
        })
    }
}]), accountAppControllers.controller("ModifyMobileCtrl", ["$scope", "$rootScope", "$http", "$location", "Request", "$interval", "Config", "Loading", "Validate", function (e, t, o, n, a, r, i, c, s) {
    t.dialogTitle = "修改手机", e.invalid = {}, e.user = {}, e.util.submitted = !1, e.errAnimation = {};
    var l = n.search();
    e.cccList = i.cccList, e.ccc = i.defaultCountryCode, e.country = i.defaultCountryName, e.showCcc = !0;
    var u = !1;
    if (e.showList = function (e) {
        u || ($(".country-list").show(), e.stopPropagation(), u = !0, $(".wrapper").one("click", function () {
            $(".country-list").hide(), u = !1
        }))
    }, e.changeCountry = function (t, o) {
        e.ccc = t.slice(1) || e.ccc, e.country = o || e.country, e.invalid.mobile = !0, e.invalid.mobileRegistered = !0, e.util.submitted = !1
    }, !t.currentToken) if (l && l.code) {
        t.currentUid = l.uid || "";
        var d = {"for": "UPDATE_CELLPHONE", uid: l.uid || "", email_code: l.code};
        a.checkUpdateCaptcha(d).then(function (e) {
            "0" == e.errno ? t.currentToken = e.data : n.path("/auth/modifyMobile")
        }, function (e) {
        })
    } else n.path("/auth/modifyMobile");
    var p = function () {
        var t = 60;
        e.timer = t, e.showBtn = !1, r(function () {
            e.timer--
        }, 1e3, t).then(function () {
            e.showBtn = !0
        })
    };
    e.resend = function () {
        p(), c.start(), a.sendNewMobileCaptcha({cellphone: e.newMobile, uid: t.currentUid}).then(function (e) {
            c.done()
        }, function (e) {
            c.done()
        })
    }, e.step1 = function () {
        return e.util.submitted = !0, e.form.mobile.$invalid ? void (e.errAnimation.mobile = !0) : "86" != e.ccc || i.regExp.isCnMobile.test(e.user.mobile) ? (c.start(), void a.sendNewMobileCaptcha({
            cellphone: "+" + e.ccc + " " + e.user.mobile,
            token: t.currentToken,
            uid: t.currentUid
        }).then(function (t) {
            switch (c.done(), +t.errno) {
                case i.errnoMap.OK:
                case i.errnoMap.VCODE_TOO_OFTEN:
                    e.current = "step2", e.util.submitted = !1, e.newMobile = "+" + e.ccc + " " + e.user.mobile, p();
                    break;
                case i.errnoMap.REGISTERED_CELLPHONE:
                    e.invalid.mobileRegistered = !1;
                    break;
                case i.errnoMap.ILLEGAL_CELLPHONE:
                    e.invalid.mobile = !1;
                    break;
                default:
                    n.path("/auth/modifyMobile")
            }
        }, function () {
            c.done()
        })) : (e.invalid.mobile = !1, void (e.errAnimation.mobile = !0))
    }, e.step2 = function () {
        e.util.submitted = !0, e.form.$valid && (c.start(), a.updateUserMobile({
            uid: t.currentUid,
            "user[cellphone]": e.newMobile,
            "ext[cellphone_code]": e.user.verification
        }).then(function (t) {
            switch (c.done(), +t.errno) {
                case i.errnoMap.OK:
                    n.path("/result/modifyMobile");
                    break;
                case i.errnoMap.INVALID_VCODE:
                case i.errnoMap.ILLEGAL_VCODE:
                    e.invalid.mobileCaptchaValid = !1;
                    break;
                case i.errnoMap.REFRECH_VCODE:
                    e.invalid.mobileCaptchaReload = !1;
                    break;
                default:
                    n.path("/auth/modifyMobile")
            }
        }, function (e) {
            c.done(), n.path("/auth/modifyMobile")
        }))
    }
}]), accountAppControllers.controller("ModifyMailCtrl", ["$scope", "$rootScope", "$http", "$location", "Request", "$interval", "Config", "Loading", "Validate", "userInfo", function (e, t, o, n, a, r, i, c, s, l) {
    var u = "修改";
    e.emailTips = "请输入您需要更换的邮箱地址", l.errno != i.errnoMap.OK || l.data.email && "" != l.data.email || (u = "新增", e.emailTips = "请输入您需要新增的邮箱地址"), t.dialogTitle = u + "邮箱", e.emailTips = "请输入您需要" + u + "的邮箱地址", t.title = u + "邮箱", e.invalid = {}, e.user = {}, e.util.submitted = !1;
    var d = n.search();
    if (!t.currentToken) if (d && d.code) {
        t.currentUid = d.uid || "";
        var p = {"for": "UPDATE_EMAIL", uid: d.uid || "", email_code: d.code};
        a.checkUpdateCaptcha(p).then(function (e) {
            "0" == e.errno ? t.currentToken = e.data : n.path("/auth/modifyMail")
        }, function (e) {
        })
    } else n.path("/auth/modifyMail");
    var m = function (t) {
        var o = 60 * (t || 1);
        e.timer = o, e.showBtn = !1, r(function () {
            e.timer--
        }, 1e3, o).then(function () {
            e.showBtn = !0
        })
    };
    e.resend = function () {
        m(5), c.start(), a.sendNewEmail({email: e.newEmail, uid: t.currentUid}).then(function (e) {
            c.done()
        }, function (e) {
            c.done()
        })
    }, e.next = function () {
        return e.util.submitted = !0, e.form.$valid ? (c.start(), void a.modifyMail({
            uid: t.currentUid,
            "user[email]": e.user.mail,
            "ext[token]": t.currentToken
        }).then(function (o) {
            switch (c.done(), +o.errno) {
                case i.errnoMap.OK:
                    e.submitted = !1, e.newEmail = e.user.mail, e.current = "step2", t.dialogTitle = u + "邮箱成功", m(5);
                    break;
                case i.errnoMap.REGISTERED_EMAIL:
                    e.invalid.emailRegistered = !1;
                    break;
                case i.errnoMap.ILLEGAL_EMAIL:
                    e.invalid.mail = !1;
                    break;
                case i.errnoMap.VCODE_TOO_OFTEN:
                    e.submitted = !1, e.newEmail = e.user.mail, e.current = "step2", t.dialogTitle = u + "邮箱成功", m(5);
                    break;
                default:
                    n.path("/auth/modifyMail")
            }
        }, function (e) {
            c.done()
        })) : void s.checkErrNumber(e, e.form)
    }, e.gotoEmail = function () {
        var t = e.newEmail, o = t.split("@")[1], n = i.mailUrl[o] || "http://mail." + o + "/";
        window.open(n)
    }
}]), accountAppControllers.controller("ModifyQuestionCtrl", ["$scope", "$rootScope", "$http", "$location", "Request", "$timeout", "Config", "Validate", "Loading", "questionData", function (e, t, o, n, a, r, i, c, s, l) {
    t.dialogTitle = "设置安全问题", e.questionsOne = [], e.questionsTwo = [], e.questionsThree = [];
    var u = n.search();
    if (e.invalid = {}, e.question = {}, e.question.question1 = {k: "", v: "请选择"}, e.question.question2 = {
        k: "",
        v: "请选择"
    }, e.question.question3 = {k: "", v: "请选择"}, e.util.submitted = !1, !t.currentToken) if (u && u.code) {
        t.currentUid = u.uid || "";
        var d = {"for": "UPDATE_SECQUES", uid: u.uid, email_code: u.code};
        a.checkUpdateCaptcha(d).then(function (e) {
            "0" == e.errno ? t.currentToken = e.data : n.path("/auth/modifyQuestion")
        }, function (e) {
        })
    } else n.path("/auth/modifyQuestion");
    var p = [], m = function () {
        if ("0" == l.errno) {
            var t = [], o = [];
            angular.forEach(l.data, function (e, n) {
                t.push(n), o.push(e)
            }), p.push({k: "", v: "请选择"});
            for (var n = 0; n < t.length; n++) p.push({k: t[n], v: o[n]});
            e.updateQuestion()
        }
    };
    e.updateQuestion = function () {
        e.questionsOne = [], e.questionsTwo = [], e.questionsThree = [], e.question.question1 || (e.question.question1 = {
            k: "",
            v: "请选择"
        }), e.question.question2 || (e.question.question2 = {
            k: "",
            v: "请选择"
        }), e.question.question3 || (e.question.question3 = {k: "", v: "请选择"}), angular.forEach(p, function (t) {
            switch (t.k) {
                case"":
                    e.questionsOne.push(t), e.questionsTwo.push(t), e.questionsThree.push(t);
                    break;
                case e.question.question1.k:
                    e.questionsOne.push(t);
                    break;
                case e.question.question2.k:
                    e.questionsTwo.push(t);
                    break;
                case e.question.question3.k:
                    e.questionsThree.push(t);
                    break;
                default:
                    e.questionsOne.push(t), e.questionsTwo.push(t), e.questionsThree.push(t)
            }
        }), e.question1Required = "" == e.question.question1.k, e.question2Required = "" == e.question.question2.k, e.question3Required = "" == e.question.question3.k, r(function () {
            e.form.question1.$setValidity("question1", !e.question1Required), e.form.question2.$setValidity("question1", !e.question2Required), e.form.question3.$setValidity("question1", !e.question3Required)
        })
    }, m(), e.next = function () {
        if (e.util.submitted = !0, "" == e.question.question1.k && (e.question1Required = !0), "" == e.question.question2.k && (e.question2Required = !0), "" == e.question.question3.k && (e.question3Required = !0), !(e.question1Required || e.question2Required || e.question3Required)) if (e.form.$valid) {
            var o = {uid: t.currentUid, "ext[token]": t.currentToken};
            o["user[secques][" + e.question.question1.k + "]"] = e.question.answer1, o["user[secques][" + e.question.question2.k + "]"] = e.question.answer2, o["user[secques][" + e.question.question3.k + "]"] = e.question.answer3, s.start(), a.updateUserQuestion(o).then(function (e) {
                s.done(), "0" == e.errno && n.path("/result/modifyQuestion")
            }, function (e) {
                s.done()
            })
        } else {
            if (e.errAnimation = {}, e.form.answer1.$invalid) return void (e.errAnimation.answer1 = !0);
            if (e.form.answer2.$invalid) return void (e.errAnimation.answer2 = !0);
            if (e.form.answer3.$invalid) return void (e.errAnimation.answer3 = !0)
        }
    }
}]), accountAppControllers.controller("ForgotPasswordCtrl", ["$scope", "$rootScope", "$http", "$location", "$route", "Request", "Config", "User", "Validate", "Loading", function (e, t, o, n, a, r, i, c, s, l) {
    function u() {
        t.showCcc && (e.cccList = i.cccList, e.ccc = i.defaultCountryCode, e.country = i.defaultCountryName)
    }

    t.dialogTitle = "忘记密码", e.invalid = {}, e.util.submitted = !1, e.focus = {}, u(), e.switchModel = function () {
        t.showCcc = !t.showCcc, u()
    };
    var d = !1;
    e.showList = function (e) {
        d || ($(".country-list").show(), e.stopPropagation(), d = !0, $(".wrapper").one("click", function () {
            $(".country-list").hide(), d = !1
        }))
    }, e.changeCountry = function (t, o) {
        e.ccc = t.slice(1) || e.ccc, e.country = o || e.country, e.invalid.username = !0, e.invalid.nameValid = !0, e.util.submitted = !1
    }, e.next = function () {
        if (e.util.submitted = !0, e.form.$valid) {
            l.start();
            var o = {};
            o.username = e.user.username, e.user.captcha && (o.captcha = e.user.captcha), e.showCcc && (o.username = "+" + e.ccc + " " + o.username), r.getNoLoginAuths(o).then(function (o) {
                switch (l.done(), +o.errno) {
                    case 0:
                        n.path("/auth/forgotPassword"), t.forgotPasswordMsg = o;
                        break;
                    case i.errnoMap.PARAMETER_ERROR:
                    case i.errnoMap.INVALID_CELLPHONE:
                    case i.errnoMap.ILLEGAL_CELLPHONE:
                    case i.errnoMap.INVALID_UID:
                    case i.errnoMap.ILLEGAL_EMAIL:
                    case i.errnoMap.INVALID_EMAIL:
                    case i.errnoMap.UNREGISTERED_NICKNAME:
                        e.reloadCaptcha(), e.invalid.nameValid = !1, e.focus.username = !0;
                        break;
                    case i.errnoMap.ILLEGAL_VCODE:
                    case i.errnoMap.INVALID_VCODE:
                        e.invalid.captchaValid = !1, e.focus.captcha = !0;
                        break;
                    case i.errnoMap.REFRECH_VCODE:
                        e.reloadCaptcha(), e.invalid.captchaValid = !1, e.focus.captcha = !0
                }
            }, function (e) {
                l.done()
            })
        } else if (e.errAnimation = {}, e.form.username.$invalid) return void (e.errAnimation.username = !0)
    }, e.reloadCaptcha = function () {
        e.captchaUrl = c.refreshCaptcha();
        var t = $(".tips-verifycon");
        t.addClass("active"), setTimeout(function () {
            t.removeClass("active")
        }, 600)
    }, e.reloadCaptcha()
}]), accountAppControllers.controller("SettingsCtrl", ["$scope", "$rootScope", "$http", "$location", "$window", "Request", "Config", "UtilTools", "Loading", "settings", function (e, t, o, n, a, r, i, c, s, l) {
    t.dialogTitle = "账户设置", e.originUrl = t.targetOrigin ? "?return_url=" + t.targetOrigin : "";
    var u = /embed/.test(n.$$path);
    if (u && a.parent == a) return void n.url("/result/illegality");
    var d = n.$$protocol + "://" + n.$$host + "/#" + n.$$path;
    "0" == l.errno ? (e.settings = l.data, e.settings.email || 1 != e.settings.active ? e.settings.email && 1 == e.settings.active ? e.emailStatus = 1 : 3 == e.settings.active && (e.emailStatus = 2) : e.emailStatus = 0, e.cellphoneActive = e.settings.active, e.secquesActive = !!e.settings.secques, e.isEmailSend = !1, e.sendEmail = function () {
        e.isEmailSend = !0, s.start(), r.sendNewEmail({
            email: e.settings.email,
            uid: e.settings.uid
        }).then(function (e) {
            s.done()
        }, function (e) {
            s.done()
        })
    }, e.gotoEmail = function () {
        var t = e.settings.email, o = t.split("@")[1], n = i.mailUrl[o] || "http://mail." + o + "/";
        window.open(n)
    }) : (n.search().return_url = d, u ? n.path("/login/embed") : n.path("/login"))
}]), accountAppControllers.controller("ResultCtrl", ["$scope", "$rootScope", "$http", "$location", "$routeParams", "$sce", "$interval", "$window", "Request", "Config", "GTMAnalyticsService", function (e, t, o, n, a, r, i, c, s, l, u) {
    function d(o) {
        o && o.code ? s.updateUserEmail({
            uid: o.uid,
            "user[email]": o.email,
            "ext[email_code]": o.code
        }).then(function (o) {
            "0" == o.errno ? (f = "修改邮箱成功", h = "您的邮箱已经修改成功", t.title = "修改邮箱成功") : (f = "修改邮箱失败", h = "您的邮箱修改失败", t.title = "修改邮箱失败", e.fail = !0), t.dialogTitle = f, e.resultInfo = r.trustAsHtml(h)
        }, function (e) {
            n.path("/result/error")
        }) : n.path("/")
    }

    function p(o) {
        o && o.code ? s.activeUserEmail({uid: o.uid, active: "email", email_code: o.code}).then(function (o) {
            "0" == o.errno ? (f = "激活邮箱成功", h = "您的邮箱已经激活成功", t.title = "激活邮箱成功") : (f = "激活邮箱失败", h = "您的邮箱激活失败", t.title = "激活邮箱失败", e.fail = !0), t.dialogTitle = f, e.resultInfo = r.trustAsHtml(h)
        }, function (e) {
            n.path("/result/error")
        }) : n.path("/")
    }

    e.timerToUrl = null;
    var m = function () {
        var t = 3, o = !1;
        e.timerToUrl = t;
        for (var n in window.dataLayer) window.dataLayer[n].event && "gtm-register-success" == window.dataLayer[n].event && (o = !0);
        o || u.registerSuccess(), i(function () {
            e.timerToUrl--
        }, 1e3, t).then(function () {
            c.location.href = e.getGotoUrl()
        })
    };
    m();
    var f = "", h = "", g = "返回", v = "";
    switch (a.channelID) {
        case"register":
            f = "注册成功", h = "您已经注册成功<br>请妥善保存您的账号和密码", t.title = "注册成功";
            break;
        case"bindAccount":
            f = "提示", h = "手机号已绑定成功", v = "当您下次访问 Smartisan 官网时，可使用该号码直接登录", t.title = "手机号已绑定成功";
            break;
        case"login":
            f = "登录成功", h = "您已经登录成功", t.title = "登录成功";
            break;
        case"modifyName":
            f = "昵称修改成功", h = "您的昵称已经修改成功", t.title = "昵称修改成功";
            break;
        case"modifyPassword":
            f = "密码重置成功", h = "您的密码已经重置成功", t.title = "密码重置成功";
            break;
        case"modifyMobile":
            f = "修改手机成功", h = "您的手机已经修改成功", t.title = "修改手机成功";
            break;
        case"modifyMail":
            var b = n.search();
            d(b);
            break;
        case"modifyQuestion":
            f = "提示", h = "您的密码保护问题修改成功", t.title = "修改密保成功";
            break;
        case"modifyAvatar":
            f = "修改头像成功", h = "您的头像已经修改成功", t.title = "修改头像成功";
            break;
        case"activateMail":
            var b = n.search();
            p(b);
            break;
        case"illegality":
            f = "提示", h = "没有操作权限", t.title = "没有权限", e.fail = !0;
            break;
        case"bound":
            f = "提示", h = "该第三方账号已绑定其他欢喜云账号", t.title = "该第三方账号已绑定其他欢喜云账号", e.fail = !0;
            break;
        case"error":
            f = "提示", h = "操作失败", t.title = "操作失败", e.fail = !0;
            break;
        case"system":
            f = "系统错误", h = "系统错误，请稍候重试", t.title = "系统错误", e.fail = !0;
            break;
        case"unauthorized":
            f = "提示", h = "您需要登录才能进行刚才的操作", t.title = "没有权限", e.fail = !0;
            break;
        default:
            n.path("/")
    }
    e.getGotoUrl = function () {
        var e = n.search();
        console.log("$location", n), console.log("$location", n.search());
        var t = l.officialURL, o = decodeURIComponent(e.return_url);
        return e.referer && "cloud" == e.referer && (t = l.cloudURL), l.regExp.isSafeUrl.test(o) && (t = o), g = /cloud.smartisan.com/i.test(o) ? "返回欢喜云" : /bbs.smartisan.com/i.test(o) ? "返回锤子科技官方论坛" : /(smartisan.com\/shop)|(store.smartisan.com)/i.test(o) ? "返回在线商城" : /dev.smartisan.com/i.test(o) ? "返回 Smartisan 开发者中心" : "返回", t
    }, e.gotoUrl = e.getGotoUrl(), t.dialogTitle = f, e.resultInfo = r.trustAsHtml(h), e.resultTip = v, e.returnInfo = g
}]), accountAppControllers.controller("LoginGuestCtrl", ["$scope", "$rootScope", "$http", "$location", "$window", "$timeout", "User", "Request", "$routeParams", "Config", "Validate", "Loading", function (e, t, o, n, a, r, i, c, s, l, u, d) {
    t.dialogTitle = "登录账户", e.invalid = {}, e.focus = {}, e.util.submitted = !1;
    var p = /embed/.test(n.$$url);
    // if (p && a.parent == a) return void n.url("/result/illegality");
    var m = n.search().return_url;
    n.search().username;
    e.login = function () {
        if (e.util.submitted = !0, e.form.$invalid) return void u.checkErrNumber(e, e.form);
        var o = e.user;
        d.start(), c.login(o).then(function (o) {
            switch (d.done(), o.errno) {
                case l.errnoMap.ILLEGAL_PASSWORD:
                case l.errnoMap.INVALID_PASSWORD:
                    e.invalid.passwordValid = !1, e.focus.password = !0;
                    break;
                case l.errnoMap.INVALID_CELLPHONE:
                case l.errnoMap.INVALID_UID:
                case l.errnoMap.INVALID_EMAIL:
                    e.invalid.nameValid = !1;
                    break;
                case l.errnoMap.ILLEGAL_VCODE:
                case l.errnoMap.INVALID_VCODE:
                    e.invalid.captchaValid = !1, e.focus.captcha = !0;
                    break;
                case l.errnoMap.CAPTCHA_REQUIRED:
                    e.captchaNeeded = !0, e.loginCaptchaUrl = o.data.captcha, r(function () {
                        e.focus.captcha = !0
                    }, 500);
                    break;
                case l.errnoMap.REFRECH_VCODE:
                    e.captchaNeeded = !0, e.reloadCaptcha(), e.invalid.captchaValid = !1, e.focus.captcha = !0;
                    break;
                case l.errnoMap.FAILED_LOGIN_LIMIT:
                    e.invalid.passwordValid = !1, e.focus.password = !0, e.captchaNeeded = !0, e.loginCaptchaUrl = o.data.captcha;
                    break;
                case l.errnoMap.OK:
                    if (p) a.parent !== a && a.parent.postMessage("isLoggedIn", t.targetOrigin); else {
                        if (l.regExp.isSafeUrl.test(decodeURIComponent(m))) {
                            if (m.indexOf(l.baseHost) >= 0) {
                                var i = m.split("#");
                                i[1] && n.path(i[1])
                            } else a.location.replace(m);
                            return
                        }
                        var c = s.action;
                        switch (c) {
                            case"modifyPassword":
                                n.path("/" + c);
                                break;
                            case"modifyMobile":
                            case"modifyMail":
                            case"modifyQuestion":
                                n.path("/auth/" + c);
                                break;
                            default:
                                n.path("/result/login")
                        }
                    }
            }
        }, function (e) {
            d.done()
        })
    }, e.toRegister = function () {
        p ? n.path("/register/embed") : n.path("/register")
    }, e.toGuestRegister = function () {
        p ? n.path("/register-guest/embed") : n.path("/register-guest")
    }, e.forgotPassword = function () {
        p ? a.open(l.baseProtocolHost + "/#/forgotPassword") : n.path("/forgotPassword")
    }, e.reloadCaptcha = function () {
        var t = e.loginCaptchaUrl;
        t = t.lastIndexOf("?") > 0 ? t + "&" + +new Date : t + "?" + +new Date, e.loginCaptchaUrl = t
    }
}]), accountAppControllers.controller("RegisterGuestCtrl", ["$scope", "$rootScope", "$window", "$http", "$location", "$timeout", "$interval", "Request", "Config", "User", "Validate", "Loading", function (e, t, o, n, a, r, i, c, s, l, u, d) {
    t.dialogTitle = "验证手机", e.invalid = {}, e.focus = {}, e.showBtn = !0, e.user = {}, e.util.submitted = !1;
    var p = /embed/.test(a.$$path);
    if (p && o.parent == o) return void a.url("/result/illegality");
    e.register = function () {
        return e.util.submitted = !0, e.form.$invalid ? void u.checkErrNumber(e, e.form) : (d.start(), e.clicked = !0, void c.register({
            "user[cellphone]": e.user.mobile,
            "ext[cellphone_code]": e.user.verification
        }).then(function (n) {
            switch (d.done(), e.clicked = !1, +n.errno) {
                case s.errnoMap.REGISTERED_CELLPHONE:
                    e.invalid.mobileRegistered = !1;
                    break;
                case s.errnoMap.INVALID_VCODE:
                    e.invalid.captchaValid = !1;
                    break;
                case s.errnoMap.REFRECH_VCODE:
                    e.invalid.captchaReload = !1;
                    break;
                case s.errnoMap.OK:
                    p ? o.parent !== o && o.parent.postMessage("isRegistered", t.targetOrigin) : a.path("/result/register")
            }
        }, function (t) {
            d.done(), e.clicked = !1
        }))
    };
    var m = function () {
        var t = 60;
        e.timer = t, e.showBtn = !1, i(function () {
            e.timer--
        }, 1e3, t).then(function () {
            e.showBtn = !0
        })
    };
    e.resend = function () {
        if (!e.form.mobile.$invalid && !e.form.captcha.$invalid) {
            var t = {cellphone: e.user.mobile, captcha: e.user.captcha};
            e.captchaSubmitted = !0, c.sendMobileCaptcha(t).then(function (t) {
                if (e.captchaSubmitted = !1, 0 != t.errno) switch (+t.errno) {
                    case s.errnoMap.REGISTERED_CELLPHONE:
                        e.invalid.mobileRegistered = !1;
                        break;
                    case s.errnoMap.ILLEGAL_VCODE:
                    case s.errnoMap.INVALID_VCODE:
                        e.invalid.captchaValid = !1;
                        break;
                    case s.errnoMap.CAPTCHA_REQUIRED:
                        e.reloadCaptcha(), e.focus.captcha = !0;
                        break;
                    case s.errnoMap.REFRECH_VCODE:
                        e.invalid.captchaValid = !1, e.reloadCaptcha(), e.focus.captcha = !0;
                        break;
                    case s.errnoMap.VCODE_TOO_OFTEN:
                        m()
                } else m()
            }, function (e) {
            })
        }
    }, e.reloadCaptcha = function () {
        e.loginCaptchaUrl = l.refreshCaptcha();
        var t = $(".tips-verifycon");
        t.addClass("active"), setTimeout(function () {
            t.removeClass("active")
        }, 600)
    }, e.reloadCaptcha(), e.validateMobile = function () {
        e.form.mobile.$invalid || c.checkMobile({
            m: "get",
            cellphone: e.user.mobile,
            action: "check"
        }).then(function (t) {
            if (0 != t.errno) switch (t.errno) {
                case s.errnoMap.REGISTERED_CELLPHONE:
                    e.invalid.mobileRegistered = !1;
                    break;
                case s.errnoMap.ILLEGAL_CELLPHONE:
                    e.invalid.mobile = !1
            }
        }, function (e) {
        })
    }, e.validateMobileCaptcha = function () {
        if (!e.form.verification.$invalid) return e.form.mobile.$invalid ? void (e.invalid.mobileCaptchaValid = !1) : void c.checkMobileCaptcha({
            action: "renew",
            cellphone: e.user.mobile,
            cellphone_code: e.user.verification
        }).then(function (t) {
            if (0 != t.errno) switch (t.errno) {
                case s.errnoMap.INVALID_VCODE:
                case s.errnoMap.ILLEGAL_VCODE:
                    e.invalid.mobileCaptchaValid = !1;
                    break;
                case s.errnoMap.REFRECH_VCODE:
                    e.invalid.mobileCaptchaReload = !1
            }
        }, function (e) {
        })
    }, e.toLogin = function () {
        p ? a.path("/login/embed") : a.path("/login")
    }
}]), accountAppControllers.controller("ModifyAvatarCtrl", ["$scope", "$rootScope", "$http", "$q", "$location", "$window", "$timeout", "User", "Request", "$routeParams", "Config", "Validate", "Loading", function (e, t, o, n, a, r, i, c, s, l, u, d, p) {
    t.dialogTitle = "设置头像";
    var m = /embed/.test(a.$$url), f = (a.search().return_url, a.search().username), h = !1;
    if (m && r.parent == r) return void a.url("/result/illegality");
    var g, v, b, E = /\.(jpg|jpeg|png)$/i, C = 2097152, w = 500, A = 500, M = 340, y = 270, k = [(M - y) / 2, 0, y, y],
        I = {w: 0, h: 0}, L = {x: 0, y: 0, w: 0, h: 0}, R = 50, T = ".jcrop-holder",
        _ = (r.URL || (r.URL = r.webkitURL)) && r.URL.createObjectURL, N = !!_, S = $("#aim"), D = $("#avatar"),
        V = $(".info"), O = function (t) {
            e.remindInfo = t, V.animate({bottom: "61px", opacity: 1}, {
                duration: 500,
                queue: !1,
                easing: "easeOutQuart",
                complete: function () {
                    V.css({zIndex: 100}), e.closeInfo(3e3)
                }
            })
        };
    e.closeInfo = function (e) {
        b && i.cancel(b), b = i(function () {
            V.css({zIndex: -100}), V.animate({bottom: "25px", opacity: 0}, {
                duration: 500,
                queue: !1,
                easing: "easeOutQuart",
                complete: function () {
                }
            })
        }, e)
    };
    var U = function (e, t) {
        var o, n, a, r, i = e.width(), c = e.height();
        t = t || i / c, t > M / y ? (o = M, n = o / t, n < R && (n = R, o = n * t)) : (n = y, o = n * t, o < R && (o = R, n = o / t)), a = (y - n) / 2, r = (M - o) / 2, e.css({
            width: o,
            height: n,
            marginTop: a,
            marginLeft: r
        }), k[2] = k[3] = Math.min(o, n), k[0] = Math.max(0, (o - k[2]) / 2), k[1] = Math.max(0, (n - k[2]) / 2)
    }, q = function () {
        var e = S.attr("src"), t = D.attr("src");
        return function () {
            v && v.destroy(), D.attr("src", t), S.attr("src", e), D.css({backgroundColor: "transparent"}), S.css({backgroundColor: "transparent"})
        }
    }(), P = function () {
        var e, t, o, n, a = S.parent(), r = function (r) {
            if (parseInt(r.w) > 0) {
                o = a.width(), n = a.height();
                var i = o / r.w, c = n / r.h;
                S.css({
                    width: Math.round(i * e) + "px",
                    height: Math.round(c * t) + "px",
                    marginLeft: "-" + Math.round(i * r.x) + "px",
                    marginTop: "-" + Math.round(c * r.y) + "px"
                }), L.x = r.x / e * I.w, L.y = r.y / t * I.h, L.w = r.w / e * I.w, L.h = r.h / t * I.h;
                var s = +$(T).css("margin-left").slice(0, -2);
                s + r.x < 0 ? $(T).css("margin-left", -r.x) : s + r.x > M - r.w && $(T).css("margin-left", M - r.w - r.x);
                var l = +$(T).css("margin-top").slice(0, -2);
                l + r.y < 0 ? $(T).css("margin-top", -r.y) : l + r.y > y - r.h && $(T).css("margin-top", y - r.h - r.y)
            } else L.w = 0
        };
        return function () {
            v && v.destroy(), D.Jcrop({
                onChange: r,
                onSelect: r,
                minSize: [R, R],
                allowSelect: !0,
                aspectRatio: o / n || 1,
                setSelect: k
            }, function () {
                var o = this.getBounds();
                e = o[0], t = o[1], $(T).find("img").css({backgroundColor: "#fff"}), $("#editAreaMask")[0] && $("#editAreaMask").css({
                    position: "absolute",
                    filter: "alpha(opacity=40)",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#000"
                }).appendTo(T), $(T).css({marginTop: D.css("marginTop"), marginLeft: D.css("marginLeft")}), r({
                    x: k[0],
                    y: k[1],
                    w: k[2],
                    h: k[3]
                }), v = this, h = !0
            })
        }
    }();
    $("#upload").on("change", function (e) {
        h = !1;
        var t = this, o = (D[0], S[0], t.files && t.files[0] ? t.files[0].name : t.value),
            a = t.files && t.files[0] ? t.files[0].size : 0;
        if (!o || !E.test(o)) return i(function () {
            O("文件格式错误，请重新选择")
        }, 0), t.value = "", void q();
        if (a > C) return i(function () {
            O("文件过大，请重新选择")
        }, 0), t.value = "", void q();
        D.css({width: "auto", height: "auto", display: "none"});
        var r = n.defer();
        N ? r.resolve(_(t.files[0])) : (p.start(), s.uploadImageForAvatar("upload").then(function (e) {
            switch (p.done(), +e.errno) {
                case u.errnoMap.OK:
                    r.resolve(e.data.avatar_url + "?" + +new Date);
                    break;
                case u.errnoMap.ILLEGAL_AVATAR:
                    O("文件格式错误，请重新选择")
            }
        }, function (e) {
            O("文件过大或格式错误，请重新选择"), q(), p.done()
        })), r.promise.then(function (e) {
            D.attr("src", e), S.attr("src", e), D.load(function () {
                I.w = D.width(), I.h = D.height(), g = I.w / I.h, U(D, g), D.unbind("load"), D.css({
                    display: "block",
                    backgroundColor: "#fff"
                }), S.css({backgroundColor: "#fff"}), P()
            })
        })
    });
    var x = function () {
        var e = n.defer(), t = new Image;
        return t.onload = function () {
            var o = document.createElement("canvas");
            L.w = L.h = Math.min(Math.round(L.w), Math.round(L.h)), o.width = Math.min(L.w, w), o.height = Math.min(L.h, A);
            var n = o.getContext("2d");
            n.drawImage(t, L.x, L.y, L.w, L.h, 0, 0, o.width, o.height);
            var a = o.toDataURL("image/png");
            a = a.replace(/^data\:image\/png\;base64\,/, ""), e.resolve(a)
        }, L.w ? t.src = _($("#upload")[0].files[0]) : (O("未选择图片区域"), e.reject()), e.promise
    }, H = function (o) {
        s.updataUserAvatar(o).then(function (o) {
            switch (p.done(), +o.errno) {
                case u.errnoMap.OK:
                    m ? r.parent !== r && r.parent.postMessage("isModifiedAvatar", t.targetOrigin) : e.isSamePage ? e.$parent[e.okCallback](o.data) : a.path("/result/modifyAvatar");
                    break;
                default:
                    O("上传失败"), q()
            }
        }, function (e) {
            p.done()
        })
    };
    e.confirm = function () {
        if (!h) return O("请点击【重新选择】选择图片文件"), void q();
        p.start();
        var e = {}, o = n.defer();
        t.currentUid && (e.uid = t.currentUid), f && (e.username = f), e.cropped = N, N ? x().then(function (t) {
            e.imgData = t, o.resolve()
        }, function () {
            p.done()
        }) : (e.coordData = L, o.resolve()), o.promise.then(function () {
            H(e)
        })
    }, e.cancel = function () {
        m ? r.parent !== r && r.parent.postMessage("dialogClose", t.targetOrigin) : e.isSamePage ? e.$parent[e.cancelCallback]() : r.history.length > 1 && r.history.back(1)
    }
}]), accountAppControllers.controller("ModifyNameCtrl", ["$scope", "$rootScope", "$http", "$location", "Request", "Config", "Loading", "Validate", function (e, t, o, n, a, r, i, c) {
    t.dialogTitle = "设置昵称", e.invalid = {}, e.user = {}, e.util.submitted = !1;
    var s = n.search();
    e.modify = function () {
        if (e.util.submitted = !0, !e.form.$valid) return void c.checkErrNumber(e, e.form);
        i.start();
        var o = {"user[nickname]": e.user.nickname};
        t.currentUid && (o.uid = t.currentUid), s.username && (o.username = s.username), a.updateUserNickname(o).then(function (t) {
            switch (i.done(), +t.errno) {
                case r.errnoMap.OK:
                    n.path("/result/modifyName");
                    break;
                case r.errnoMap.INVALID_NICKNAME:
                    e.invalid.nickname = !1;
                    break;
                case r.errnoMap.REGISTERED_NICKNAME:
                    e.invalid.nicknameRegistered = !1;
                    break;
                case r.errnoMap.ILLEGAL_NICKNAME:
                    e.invalid.nicknameIllegal = !1
            }
        }, function (e) {
            i.done()
        })
    }
}]), accountAppControllers.controller("BindAccountCtrl", ["$scope", "$rootScope", "$window", "$http", "$location", "$timeout", "$interval", "Request", "Config", "User", "Validate", "Loading", "bindUserInfo", "Utils", function (e, t, o, n, a, r, i, c, s, l, u, d, p, m) {
    t.dialogTitle = "绑定手机", p.errno == s.errnoMap.OK && p.data.nickname && "" != p.data.nickname || a.path("/result/illegality").replace(), e.platformName = "微信", /qq/i.test(p.data.type) ? e.platformName = " QQ " : /weibo/i.test(p.data.type) && (e.platformName = "微博"), e.invalid = {}, e.focus = {}, e.showBtn = !0, e.user = {}, e.util.submitted = !1;
    var f = a.search().return_url;
    f || (f = s.officialURL), e.cccList = s.cccList, e.ccc = s.defaultCountryCode, e.country = s.defaultCountryName;
    var h = !1;
    e.showList = function (e) {
        h || ($(".country-list").show(), e.stopPropagation(), h = !0, $(".wrapper").one("click", function () {
            $(".country-list").hide(), h = !1
        }))
    }, e.changeCountry = function (t, o) {
        e.ccc = t.slice(1) || e.ccc, e.country = o || e.country, e.form.mobile.$setValidity("mobile", !0), e.form.mobile.$setValidity("mobileRegistered", !0), e.validateMobile()
    }, e.submitInfo = function () {
        if (e.util.submitted = !0, e.form.$invalid) {
            if (e.errAnimation = {}, e.form.mobile.$invalid) return void (e.errAnimation.mobile = !0);
            if (e.form.captcha.$invalid) return;
            return void e.form.verification.$invalid
        }
        d.start(), e.clicked = !0, c.bindMobile({
            "user[cellphone]": "+" + e.ccc + " " + e.user.mobile,
            "ext[cellphone_code]": e.user.verification
        }).then(function (t) {
            switch (d.done(), e.clicked = !1, +t.errno) {
                case s.errnoMap.INVALID_VCODE:
                    e.invalid.mobileCaptchaValid = !1;
                    break;
                case s.errnoMap.REFRECH_VCODE:
                    e.invalid.mobileCaptchaReload = !1;
                    break;
                case s.errnoMap.OPENID_OTHER_REGISTERED:
                    e.form.mobile.$setValidity("mobileOtherRegistered", !1);
                    break;
                case s.errnoMap.OPENID_REGISTERED:
                    e.form.mobile.$setValidity("openidOtherRegistered", !1);
                    break;
                case s.errnoMap.OK:
                    a.path("/result/bindAccount").search({return_url: m.unicode(f)}).replace();
                    break;
                case s.errnoMap.CELLPHONE_NO_REGISTER:
                    a.path("/bindPassword").search({return_url: m.unicode(f)}).replace();
                    break;
                case s.errnoMap.NO_AUTH:
                    a.path("/result/illegality").replace()
            }
        }, function (t) {
            d.done(), e.clicked = !1
        })
    };
    var g = function () {
        var t = 60;
        e.timer = t, e.showBtn = !1, i(function () {
            e.timer--
        }, 1e3, t).then(function () {
            e.showBtn = !0
        })
    };
    e.resend = function () {
        if (e.captchaSubmitted = !0, e.form.mobile.$invalid) return e.errAnimation = {}, void (e.errAnimation.mobile = !0);
        if (!e.form.captcha.$invalid) {
            var t = {cellphone: "+" + e.ccc + " " + e.user.mobile, captcha: e.user.captcha};
            e.captchaSubmitted = !0, c.sendBindMobileCaptcha(t).then(function (t) {
                if (e.captchaSubmitted = !1, 0 != t.errno) switch (+t.errno) {
                    case s.errnoMap.REGISTERED_CELLPHONE:
                        break;
                    case s.errnoMap.ILLEGAL_CELLPHONE:
                        e.invalid.mobile = !1;
                        break;
                    case s.errnoMap.ILLEGAL_VCODE:
                        e.invalid.captchaValid = !1;
                        break;
                    case s.errnoMap.INVALID_VCODE:
                        e.invalid.captchaValid = !1;
                        break;
                    case s.errnoMap.CAPTCHA_REQUIRED:
                        e.reloadCaptcha(), e.focus.captcha = !0;
                        break;
                    case s.errnoMap.REFRECH_VCODE:
                        e.invalid.captchaValid = !1, e.reloadCaptcha(), e.focus.captcha = !0;
                        break;
                    case s.errnoMap.VCODE_TOO_OFTEN:
                        g()
                } else g()
            }, function (e) {
            })
        }
    }, e.reloadCaptcha = function () {
        e.loginCaptchaUrl = l.refreshCaptcha();
        var t = $(".tips-verifycon");
        t.addClass("active"), setTimeout(function () {
            t.removeClass("active")
        }, 600)
    }, e.reloadCaptcha(), e.validateMobile = function () {
        if (e.form.mobile.$setValidity("mobileOtherRegistered", !0), e.form.mobile.$setValidity("openidOtherRegistered", !0), "86" == e.ccc) {
            if (!s.regExp.isCnMobile.test(e.user.mobile)) return void e.form.mobile.$setValidity("mobile", !1)
        } else if (!s.regExp.isMobile.test(e.user.mobile)) return void e.form.mobile.$setValidity("mobile", !1)
    }, e.validateMobileCaptcha = function () {
        if (!e.form.verification.$invalid) return e.form.mobile.$invalid ? void (e.invalid.mobileCaptchaValid = !1) : void c.checkMobileCaptcha({
            action: "renew",
            cellphone: "+" + e.ccc + " " + e.user.mobile,
            cellphone_code: e.user.verification
        }).then(function (t) {
            if (0 != t.errno) switch (t.errno) {
                case s.errnoMap.INVALID_VCODE:
                case s.errnoMap.ILLEGAL_VCODE:
                    e.invalid.mobileCaptchaValid = !1;
                    break;
                case s.errnoMap.REFRECH_VCODE:
                    e.invalid.mobileCaptchaReload = !1
            }
        }, function (e) {
        })
    }
}]), accountAppControllers.controller("BindPasswordCtrl", ["$scope", "$rootScope", "$window", "$http", "$location", "$timeout", "$interval", "Request", "Config", "User", "Validate", "Loading", "bindUserInfo", "Utils", "GTMAnalyticsService", function (e, t, o, n, a, r, i, c, s, l, u, d, p, m, f) {
    t.dialogTitle = "设置手机号登录密码", p.errno == s.errnoMap.OK && p.data.nickname && "" != p.data.nickname || a.path("/result/illegality").replace(), e.platformName = "微信", /qq/i.test(p.data.type) ? e.platformName = " QQ " : /weibo/i.test(p.data.type) && (e.platformName = "微博"), e.invalid = {}, e.focus = {}, e.showBtn = !0, e.user = {}, e.passCheck = function () {
        e.form.password.$setValidity("serverError", !0), e.form.password.$setValidity("mobileOtherRegistered", !0), e.form.password.$setValidity("openidOtherRegistered", !0)
    }, e.util.submitted = !1;
    var h = a.search().return_url;
    h || (h = s.officialURL), e.submitInfo = function () {
        if (e.util.submitted = !0, e.form.$invalid) {
            if (e.errAnimation = {}, e.form.password.$invalid) return void (e.errAnimation.password = !0);
            if (e.form.repassword.$invalid) return void (e.errAnimation.repassword = !0)
        } else d.start(), e.clicked = !0, c.bindPassword({"user[password]": e.user.password}).then(function (t) {
            switch (d.done(), e.clicked = !1, +t.errno) {
                case s.errnoMap.OK:
                    f.registerSuccess(), a.path("/result/bindAccount").search({return_url: m.unicode(h)}).replace();
                    break;
                case s.errnoMap.OPENID_OTHER_REGISTERED:
                    e.form.password.$setValidity("mobileOtherRegistered", !1);
                    break;
                case s.errnoMap.OPENID_REGISTERED:
                    e.form.password.$setValidity("openidOtherRegistered", !1);
                    break;
                default:
                    e.form.password.$setValidity("serverError", !1)
            }
        }, function (t) {
            d.done(), e.clicked = !1
        })
    }
}]), accountAppControllers.controller("SafetyCtrl", ["$rootScope", "$scope", "$location", "$window", "Config", function (e, t, o, n, a) {
    e.dialogTitle = "账户安全提醒";
    var r = o.search().return_url;
    t.backToPrevious = function () {
        if (a.regExp.isSafeUrl.test(decodeURIComponent(r))) if (r.indexOf(a.baseHost) >= 0) {
            var e = r.split("#");
            e[1] && o.path(e[1])
        } else n.location.replace(decodeURIComponent(r))
    }, t.goToModifyPassword = function () {
        o.path("/modifyPassword").search({return_url: decodeURIComponent(r)})
    }
}]), accountAppControllers.controller("PersonalAccountCtrl", ["$scope", "$rootScope", "$timeout", "$animate", "Config", "Request", "Dialog", "Filter", "userInfo", "$location", function (e, t, o, n, a, r, i, c, s, l) {
    n.enabled(!1), e.currentSideBar = "account", e.returnURL = encodeURIComponent("https://yun.smartisan.com/#/personal/account"), e.user = s[0].data, e.newAvatarUrl = e.user.avatarUrl, e.sendEmailText = "发送邮件", e.authorizationlist = ["使用您的昵称和头像"], e.thirdPartyAppList = [], e.authAppList = [], s[1] && (e.thirdPartyAppList = s[1].data), s[2] && (e.authAppList = s[2].content);
    var u, d, p = !1;
    e.openModifyAvatar = function () {
        i.open({headline: "设置头像", size: "modify-avatar-size", id: "partModifyAvatar"}, e)
    }, e.callBackCancel = function () {
        i.close()
    }, e.callBackOk = function (t) {
        e.newAvatarUrl = t.avatar_url + "?" + (new Date).getTime(), e.callBackCancel()
    }, e.sendEmail = function () {
        p ? window.open(c.emailLocation(e.user.email)) : (p = !0, e.sendEmailText = "查看邮件", r.sendAccountEmail({active: "email"}).then(function (e) {
            e.errno === a.errnoMap.VCODE_TOO_OFTEN && i.toast({msg: "操作太过频繁, 请稍后重试"})
        }, function (e) {
        }))
    }, e.bindThirdParty = function (t) {
        r[t + "Login"](e.returnURL)
    }, e.unbindThirdParty = function (t) {
        d = t, i.open({headline: "提示", id: "unbindThirdPartyApp", size: "unbind-third-party"}, e)
    }, e.doUnbindTP = function () {
        r.unbindThirdPartyApp(d).then(function (t) {
            if (1 == t.data && 0 == t.errno) {
                i.bubble({status: "success", msg: "账号解绑成功", close: "true", time: 1500});
                for (var o = 0; o < e.thirdPartyAppList.length; o++) e.thirdPartyAppList[o].platform == d && (e.thirdPartyAppList[o].bind = 0)
            }
            t.errno === a.errnoMap.VCODE_TOO_OFTEN && i.toast({msg: "操作太过频繁, 请稍后重试"})
        }, function (e) {
        })
    }, e.revokeAuth = function (t) {
        u = t, i.open({headline: "提示", size: "revoke-auth-size", id: "revokeAuth"}, e)
    }, e.doRevokeAuth = function () {
        r.revokeAuthorization(u).then(function (t) {
            if ($.isEmptyObject(t)) {
                i.bubble({
                    status: "success", msg: "取消授权成功",
                    close: !0, time: 1500
                });
                for (var o = 0; o < e.authAppList.length; o++) e.authAppList[o].grant_id == u && e.authAppList.splice(o, 1)
            }
            t.errno === a.errnoMap.VCODE_TOO_OFTEN && i.toast({msg: "操作太过频繁, 请稍后重试"})
        }, function (e) {
        })
    }
}]), accountAppControllers.controller("PersonalDeviceCtrl", ["$scope", "$rootScope", "$http", "$location", "$timeout", "$animate", "Config", "Loading", "Request", "Content", "Filter", "Dialog", "userInfo", "deviceData", function (e, t, o, n, a, r, i, c, s, l, u, d, p, m) {
    function f(t) {
        var o = {id: E.id, password: e.model.password};
        t && (o = $.extend({force: 1}, o)), s.deleteDevice(o).then(function (e) {
            e.errno || t ? e.data && !e.errno && t ? d.bubble({
                status: "success",
                msg: "您的设备已解绑成功。",
                reload: !0,
                time: 3500
            }) : d.bubble({status: "error", msg: "因连接服务器失败，导致解绑操作无法继续进行，请稍后重试", reload: !0, time: 3500}) : h()
        }, function (e) {
        })
    }

    function h() {
        d.bubble({status: "loading", msg: "正在解绑中..."}), g()
    }

    function g() {
        k = a(function () {
            M += 3e3, console.log("deleting:", M), M >= y ? (a.cancel(k), d.bubble({
                status: "error",
                msg: "因连接服务器失败，导致解绑操作无法继续进行，请稍后重试",
                replace: !0,
                reload: !0,
                time: 3500
            })) : g()
        }, 3e3), s.getSingleDeviceInfo({id: E.id}).then(function (e) {
            e.errno === i.errnoMap.SUCCESS_FOR_DELETE_DEVICE ? (a.cancel(k), d.bubble({
                status: "success",
                msg: "您的设备已解绑成功，该设备将放入已解绑设备列表，且不可进行任何操作",
                replace: !0,
                reload: !0,
                time: 3500
            })) : e.errno === i.errnoMap.INVALID_DEVICE_ID && (a.cancel(k), d.bubble({
                status: "error",
                msg: "因连接服务器失败，导致解绑操作无法继续进行，请稍后重试",
                replace: !0,
                reload: !0,
                time: 3500
            }))
        }, function (e) {
            console.log("err")
        })
    }

    function v() {
        A = a(function () {
            C += 6e4, C >= w ? a.cancel(A) : v()
        }, 6e4), e.curDevices = l.parseDeviceIsOnline(e.curDevices)
    }

    function b(t, o) {
        switch (t.errno) {
            case i.errnoMap.ILLEGAL_PASSWORD:
            case i.errnoMap.INVALID_PASSWORD:
                e.invalid.passwordValid = !1, e.focus.password = !0;
                break;
            case i.errnoMap.ILLEGAL_VCODE:
            case i.errnoMap.INVALID_VCODE:
                e.invalid.captchaValid = !1, e.focus.captcha = !0;
                break;
            case i.errnoMap.CAPTCHA_REQUIRED:
                e.captchaNeeded = !0, e.loginCaptchaUrl = t.data.captcha, a(function () {
                    e.focus.captcha = !0
                }, 500);
                break;
            case i.errnoMap.REFRECH_VCODE:
                e.captchaNeeded = !0, e.reloadCaptcha(), e.invalid.captchaValid = !1, e.focus.captcha = !0;
                break;
            case i.errnoMap.FAILED_LOGIN_LIMIT:
                e.invalid.passwordValid = !1, e.focus.password = !0, e.captchaNeeded = !0, e.reloadCaptcha(t.data.captcha);
                break;
            case i.errnoMap.OK:
                o && o()
        }
    }

    r.enabled(!1), e.currentSideBar = "device", e.devices = m.data, e.deletedDevices = u.changeToArray(m.data.unbind), e.curDevices = u.changeToArray(m.data.bind), e.isEmpty = u.checkIsEmptyObject(m.data.unbind) && u.checkIsEmptyObject(m.data.bind), e.isDeletedEmpty = u.checkIsEmptyObject(m.data.unbind), e.isCurEmpty = u.checkIsEmptyObject(m.data.bind), e.model = {
        password: "",
        captcha: ""
    };
    var E = "", C = 6e4, w = 6e5, A = null, M = 3e3, y = 3e4, k = null;
    e.openCheckCloudByUser = function (t) {
        E = t.device, s.getSingleDeviceInfo({id: E.id}).then(function (t) {
            console.log(E.id), t.errno === i.errnoMap.SUCCESS_FOR_DELETE_DEVICE ? (a.cancel(k), d.bubble({
                status: "success",
                msg: "您的设备已经解绑成功，可到近期解绑设备列表中查看",
                reload: !0,
                time: 3500
            })) : d.open({headline: "提示", id: "partCheckCloudByUser"}, e)
        }, function (e) {
            console.log("err")
        })
    }, e.openCheckCloudIdentity = function () {
        d.open({headline: "密码验证", id: "partCheckCloudIdentity"}, e)
    }, e.confirmCheckCloudIdentity = function () {
        e.util.submitted = !0;
        var t = {password: e.model.password};
        "" !== e.model.captcha && (t.captcha = e.model.captcha), s.checkCloudPassword(t).then(function (t) {
            b(t, function () {
                d.open({headline: "提示", id: "partRecheckCloudByUser"}, e)
            })
        }, function (e) {
        })
    }, e.openRecheckCloudByUser = function () {
        d.open({headline: "提示", id: "partRecheckCloudByUser"}, e)
    }, e.confirmRecheckCloudByUser = function () {
        return 5 == E.status ? void h() : void s.getDeviceIsBankbindStatus({id: E.id}).then(function (t) {
            return t.data ? void s.getDeviceIsOnlineStatus({id: E.id}).then(function (t) {
                t.data && !t.errno ? e.confirmDeleteDevice() : d.open({
                    headline: "提示",
                    id: "partDeleteDeviceWithCard"
                }, e)
            }, function (e) {
            }) : void e.confirmDeleteDevice()
        }, function (e) {
        })
    }, e.confirmDeleteDeviceWithCard = function () {
        var t = setTimeout(function () {
            d.bubble({status: "loading", msg: "正在发送命令..."})
        }, 500);
        s.deleteDevice({id: E.id, password: e.model.password, force: 1}).then(function (o) {
            clearTimeout(t), o.errno ? d.bubble({
                status: "error",
                msg: "因连接服务器失败，导致解绑操作无法继续进行，请稍后重试",
                reload: !0,
                time: 3500
            }) : d.open({headline: "提示", id: "partConfirmDeviceWithCard"}, e)
        }, function (e) {
        })
    }, e.confirmDeleteDevice = function () {
        f(!1)
    }, e.confirmDeleteDeviceBeForced = function () {
        f(!0)
    }, e.isCurEmpty || v(), e.invalid = {}, e.focus = {}, e.util.submitted = !1, e.reloadCaptcha = function (t) {
        var o = t || e.loginCaptchaUrl || "https://account.smartisan.com/v2/session/captcha/";
        o = o.lastIndexOf("?") > 0 ? o + "&" + +new Date : o + "?" + +new Date, e.loginCaptchaUrl = o;
        var n = $(".tips-verifycon");
        n.addClass("active"), setTimeout(function () {
            n.removeClass("active")
        }, 600)
    }
}]), accountAppDirectives.directive("iAutoFocus", ["$timeout", "Utils", function (e, t) {
    return {
        restrict: "A", require: "ngModel", link: function (o, n, a, r) {
            n && (t.isMobile() || (e(function () {
                n.focus()
            }, 10), e(function () {
                location.hash.indexOf("v2/login") >= 0 && n.val() && "" != n.val() && $(".btn-wrapper .btn").removeClass("disabled")
            }, 800)))
        }
    }
}]).directive("focusOn", ["$timeout", function (e) {
    return {
        restrict: "A", require: "ngModel", link: function (t, o, n, a) {
            t.$watch(n.focusOn, function (t) {
                t && e(function () {
                    o.focus()
                }, 10)
            })
        }
    }
}]).directive("selectOn", ["$timeout", function (e) {
    return {
        restrict: "A", require: "ngModel", link: function (t, o, n, a) {
            t.$watch(n.selectOn, function (t) {
                t && e(function () {
                    o.select()
                }, 10)
            })
        }
    }
}]).directive("iFocus", [function () {
    var e = "i-focused";
    return {
        restrict: "A", require: "ngModel", link: function (t, o, n, a) {
            a.$focused = !1, a.$blurred = !1, o.on("focus", function (n) {
                o.addClass(e), t.$apply(function () {
                    a.$focused = !0
                })
            }).on("blur", function (n) {
                o.removeClass(e), t.$apply(function () {
                    a.$focused = !1, a.$blurred = !0
                })
            }).on("keydown", function (e) {
                t.$apply(function () {
                    a.$blurred = !1
                })
            })
        }
    }
}]).directive("iBlur", [function () {
    var e = "i-blurred";
    return {
        restrict: "A", require: "ngModel", link: function (t, o, n, a) {
            a.$blurred = !1, o.on("keydown", function (n) {
                o.removeClass(e), t.$apply(function () {
                    a.$blurred = !1
                })
            }).on("blur", function (n) {
                o.addClass(e), t.$apply(function () {
                    a.$blurred = !0
                })
            })
        }
    }
}]).directive("iInput", function () {
    return {
        restrict: "A", require: "ngModel", link: function (e, t, o, n) {
            t.on("focus", function () {
                $(this).parent(".input").addClass("focus"), jQuery.support.opacity && $(this).parent(".input").animate({opacity: 1}, {
                    queue: !1,
                    duration: 300
                })
            }), t.on("blur", function () {
                if ($(this).parent(".input").removeClass("focus"), !$(this).val()) {
                    if ($(this).prev(".placeholder").show(), !jQuery.support.opacity) return;
                    $(this).parent(".input").animate({opacity: .618}, {queue: !1, duration: 300})
                }
            }), t.on("keydown input", function (t) {
                if ($(this).prev(".placeholder").hide(), 13 != t.which) switch (n.$submitted = !1, e.util.submitted = !1, e.errAnimation = {}, angular.forEach(e.focus, function (t, o) {
                    e.focus[o] = !1
                }), n.$name) {
                    case"username":
                        e.invalid.nameValid = !0, e.invalid.passwordValid = !0;
                        break;
                    case"password":
                        e.invalid.passwordValid = !0;
                        break;
                    case"oldpassword":
                        e.invalid.oldpasswordValid = !0;
                        break;
                    case"captcha":
                        e.invalid.captchaValid = !0, e.invalid.captchaReload = !0;
                        break;
                    case"mobile":
                        e.invalid.mobile = !0, e.invalid.mobileRegistered = !0;
                        break;
                    case"mail":
                        e.invalid.emailRegistered = !0;
                        break;
                    case"nickname":
                        e.invalid.nickname = !0, e.invalid.nicknameRegistered = !0, e.invalid.nicknameIllegal = !0;
                        break;
                    case"verification":
                        e.invalid.mobileCaptchaValid = !0, e.invalid.mobileCaptchaReload = !0;
                        break;
                    case"answer1":
                    case"answer2":
                        e.invalid.answerInvalid = !0
                }
            }), e.$watch("util.submitted", function (e) {
                e && (n.$submitted = !0, n.$blurred = !0)
            })
        }
    }
}).directive("iUsername", ["Config", function (e) {
    return {
        restrict: "A", require: "ngModel", link: function (t, o, n, a) {
            a.$parsers.push(function (o) {
                var n = t.showCcc ? e.regExp.isMobile.test(o) : e.regExp.isMail.test(o) || e.regExp.isCnMobile.test(o);
                return !o || n ? (a.$setValidity(a.$name, !0), o) : void a.$setValidity(a.$name, !1)
            })
        }
    }
}]).directive("iPassword", ["Config", function (e) {
    return {
        restrict: "A", require: "ngModel", link: function (t, o, n, a) {
            a.$parsers.push(function (t) {
                return t = t || "", !t || e.regExp.isPassword.test(t) ? (a.$setValidity("password", !0), t) : void a.$setValidity("password", !1)
            })
        }
    }
}]).directive("iPasswordFormat", ["Config", function (e) {
    return {
        restrict: "A", require: "ngModel", link: function (t, o, n, a) {
            a.$parsers.push(function (t) {
                return t = t || "", !t || e.regExp.isPassword.test(t) ? (a.$setValidity("pwdFormat", !0), t) : void a.$setValidity("pwdFormat", !1)
            })
        }
    }
}]).directive("iRepassword", ["Config", function (e) {
    return {
        restrict: "A", require: "ngModel", link: function (e, t, o, n) {
            e.$watch(function () {
                return e.user && e.user.repassword == e.user.password
            }, function (e, t) {
                e != t && (e ? n.$setValidity("repassword", !0) : n.$setValidity("repassword", !1))
            })
        }
    }
}]).directive("iMobile", ["Config", function (e) {
    return {
        restrict: "A", require: "ngModel", link: function (t, o, n, a) {
            a.$parsers.push(function (t) {
                return !t || e.regExp.isMobile.test(t) ? (a.$setValidity(a.$name, !0), t) : void a.$setValidity(a.$name, !1)
            })
        }
    }
}]).directive("iMail", ["Config", function (e) {
    return {
        restrict: "A", require: "ngModel", link: function (t, o, n, a) {
            a.$parsers.push(function (t) {
                return !t || e.regExp.isMail.test(t) ? (a.$setValidity(a.$name, !0), t) : void a.$setValidity(a.$name, !1)
            })
        }
    }
}]).directive("iResponse", ["Validate", function (e) {
    return {
        restrict: "A", require: "ngModel", link: function (t, o, n, a) {
            switch (a.$name) {
                case"username":
                    t.$watch("invalid.nameValid", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("nameValid", !0) : (a.$setValidity("nameValid", !1), e.checkErrNumber(t, t.form))
                    });
                    break;
                case"nickname":
                    t.$watch("invalid.nickname", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("nickname", !0) : (a.$setValidity("nickname", !1), e.checkErrNumber(t, t.form))
                    }), t.$watch("invalid.nicknameRegistered", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("nicknameRegistered", !0) : (a.$setValidity("nicknameRegistered", !1), e.checkErrNumber(t, t.form))
                    }), t.$watch("invalid.nicknameIllegal", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("nicknameIllegal", !0) : (a.$setValidity("nicknameIllegal", !1), e.checkErrNumber(t, t.form))
                    });
                    break;
                case"password":
                    t.$watch("invalid.passwordValid", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("passwordValid", !0) : (a.$setValidity("passwordValid", !1), e.checkErrNumber(t, t.form))
                    });
                    break;
                case"oldpassword":
                    t.$watch("invalid.oldpasswordValid", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("oldpasswordValid", !0) : (a.$setValidity("oldpasswordValid", !1), e.checkErrNumber(t, t.form))
                    });
                    break;
                case"captcha":
                    t.$watch("invalid.captchaValid", function (e) {
                        e = "undefined" == typeof e || e, e ? a.$setValidity("captchaValid", !0) : a.$setValidity("captchaValid", !1)
                    }), t.$watch("invalid.captchaReload", function (e) {
                        e = "undefined" == typeof e || e, e ? a.$setValidity("captchaReload", !0) : a.$setValidity("captchaReload", !1)
                    });
                    break;
                case"mobile":
                    t.$watch("invalid.mobileRegistered", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("mobileRegistered", !0) : (a.$setValidity("mobileRegistered", !1), e.checkErrNumber(t, t.form))
                    }), t.$watch("invalid.mobile", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("mobile", !0) : (a.$setValidity("mobile", !1), e.checkErrNumber(t, t.form))
                    });
                    break;
                case"mail":
                    t.$watch("invalid.emailRegistered", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("emailRegistered", !0) : (a.$setValidity("emailRegistered", !1), e.checkErrNumber(t, t.form))
                    }), t.$watch("invalid.mail", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("mail", !0) : (a.$setValidity("mail", !1), e.checkErrNumber(t, t.form))
                    });
                    break;
                case"verification":
                    t.$watch("invalid.mobileCaptchaValid", function (e) {
                        e = "undefined" == typeof e || e, e ? a.$setValidity("mobileCaptchaValid", !0) : a.$setValidity("mobileCaptchaValid", !1)
                    }), t.$watch("invalid.mobileCaptchaReload", function (e) {
                        e = "undefined" == typeof e || e, e ? a.$setValidity("mobileCaptchaReload", !0) : a.$setValidity("mobileCaptchaReload", !1)
                    });
                    break;
                case"answer1":
                case"answer2":
                    t.$watch("invalid.answerInvalid", function (o) {
                        o = "undefined" == typeof o || o, o ? a.$setValidity("answerInvalid", !0) : (a.$setValidity("answerInvalid", !1), e.checkErrNumber(t, t.form))
                    })
            }
        }
    }
}]).directive("iShow", ["$timeout", function (e) {
    return {
        restrict: "A", link: function (e, t, o, n) {
            e.$watch(o.iShow, function (e) {
                e ? jQuery.support.opacity ? t.stop().show().animate({opacity: 1}, {
                    queue: !1,
                    duration: 300
                }) : t.stop().show() : jQuery.support.opacity ? t.stop().animate({opacity: 0}, {
                    duration: 300,
                    done: function () {
                        t.hide()
                    }
                }) : t.stop().hide()
            })
        }
    }
}]).directive("iWarning", ["$timeout", "Utils", function (e, t) {
    return {
        restrict: "A", link: function (o, n, a, r) {
            var i = n.parent(".input");
            o.$watch(a.iWarning, function (o, a) {
                if (!!o != !!a && (o ? (i.addClass("invalid"), jQuery.support.opacity ? n.stop().show().animate({opacity: 1}, {
                    queue: !1,
                    duration: 300
                }) : n.stop().show()) : (i.removeClass("invalid"), jQuery.support.opacity ? n.stop().animate({opacity: 0}, {
                    duration: 300,
                    done: function () {
                        n.hide()
                    }
                }) : n.stop().hide()), t.isMobile() && $("body").attr("class").indexOf("v2") >= 0)) {
                    var r = $(".warning");
                    r.addClass("notice-m");
                    for (var c = !1, s = null, l = 0; l <= r.length; l++) {
                        var u = $(r[l]);
                        !c && u.css("display") && u.css("display").indexOf("none") < 0 ? (c = !0, s = u) : c && u.hide()
                    }
                    c && e(function () {
                        s.hide()
                    }, 2500)
                }
            })
        }
    }
}]).directive("slideDown", ["$timeout", "$location", function (e, t) {
    return {
        restrict: "A", link: function (e, t, o, n) {
            e.isMobile || e.$watch(o.slideDown, function (e) {
                if (e) {
                    t.show();
                    var o = t.parents(".content").outerHeight(!0), n = 500, a = $(".title").outerHeight(!0),
                        r = $(".copyright").outerHeight();
                    $(".dialog").animate({"margin-top": -(o + a + r) / 2}, {
                        duration: n,
                        queue: !1,
                        easing: "easeOutQuart"
                    }), t.hide().slideDown({duration: n, easing: "easeOutQuart"})
                }
            })
        }
    }
}]).directive("slideDownRegisterRepeat", ["$timeout", function (e) {
    return {
        restrict: "A", link: function (e, t, o, n) {
            e.$watch(o.slideDownRegisterRepeat, function (e) {
                if (e) {
                    if (t.css("display").indexOf("none") < 0) return;
                    t.show();
                    var o = t.parents(".content").outerHeight(), n = 500, a = $(".title").outerHeight();
                    $(".dialog").animate({"margin-top": -(o + a) / 2}, {
                        duration: n,
                        queue: !1,
                        easing: "easeOutQuart"
                    }), t.hide().slideDown({duration: n, easing: "easeOutQuart"})
                }
            })
        }
    }
}]).directive("iAnimation", ["Utils", function (e) {
    return {
        restrict: "A", link: function (e, t, o, n) {
            e.$watch(o.iAnimation, function (o) {
                o && (t.stop(!0).animate({left: "-15px"}, 50).animate({left: "20px"}, 80).animate({left: "-10px"}, 80).animate({left: "5px"}, 80).animate({left: "0px"}, 80), e.animationTip && (e.animationTip = !1), e.errAnimation = {}, e.$parent.errAnimation = {})
            })
        }
    }
}]).directive("iEnter", [function () {
    return function (e, t, o, n) {
        t.bind("keydown keypress", function (t) {
            13 == t.which && (e.$apply(function () {
                e.$eval(o.iEnter, {event: t})
            }), t.preventDefault())
        })
    }
}]).directive("limitLength", [function () {
    return {
        restrict: "A", require: "ngModel", link: function (e, t, o, n) {
            n.$parsers.push(function (e) {
                return e && e.length != +o.limitLength ? void n.$setValidity("limitlength", !1) : (n.$setValidity("limitlength", !0), e)
            })
        }
    }
}]).directive("inputRadius", [function () {
    return {
        restrict: "A", link: function (e, t, o, n) {
            t.find(":first").before('<div class="radius-left"></div><div class="radius-center"></div><div class="radius-right"></div>')
        }
    }
}]).directive("btnRadius", [function () {
    return {
        restrict: "A", link: function (e, t, o, n) {
            t.find(":first").before('<div class="radius-left"></div><div class="radius-right"></div>')
        }
    }
}]).directive("copyrightYear", [function () {
    return {
        restrict: "A", link: function (e, t, o, n) {
            var a = new Date, r = a.getFullYear(), i = a.getMonth() + 1, c = 2017;
            2016 == r && 12 == i && (c = 2016), $(t).html(c)
        }
    }
}]).directive("iLabel", [function () {
    return {
        restrict: "A", link: function (e, t, o, n) {
            if (!e.isMobile) {
                var a = o.iLabel, r = a + "_mousedown";
                t.on("click", function () {
                    $("#" + a).focus()
                }).on("mousedown", function () {
                    e[r] = !0
                }).on("mouseup", function () {
                    e[r] = !1
                })
            }
        }
    }
}]).directive("iModifyAvatar", function () {
    return {
        restrict: "EA",
        templateUrl: "partials/modifyAvatar.html",
        scope: {cancelCallback: "@", okCallback: "@", isSamePage: "@"},
        controller: "ModifyAvatarCtrl"
    }
}).directive("iSrc", function () {
    return {
        restrict: "A", scope: {iSrc: "@"}, link: function (e, t, o) {
            var n = "img/personal/icons/avatar-default_44b3a12853.png";
            e.iSrc && (n = e.iSrc), o.$set("src", n), e.$watch("iSrc", function (e, t) {
                o.$set("src", e + "?" + (new Date).getTime())
            })
        }
    }
}), accountAppAnimations.animation(".content", ["$rootScope", "$timeout", "$location", function (e, t, o) {
    return {
        enter: function (n, a) {
            n = $(n);
            var r = /personal/.test(o.$$url);
            if (e.isMobile || r) return void a();
            var i = n.height(), c = n.outerHeight(!0), s = $(".title").outerHeight(!0),
                l = $(".copyright").outerHeight(), u = e.isRefresh ? 0 : 500;
            return n.css({height: e.height}), n.animate({height: i}, {
                duration: u,
                queue: !1,
                easing: "easeOutQuart",
                complete: function () {
                    n.css({height: "auto"}), e.height = n.height()
                }
            }), $(".dialog").animate({"margin-top": -(c + s + l) / 2}, {
                duration: u,
                queue: !1,
                easing: "easeOutQuart"
            }), e.isRefresh ? void (e.isRefresh = !1) : void (jQuery.support.opacity ? (n.css({opacity: 0}), t(function () {
                n.animate({opacity: 1}, 300, a)
            }, u)) : (n.show(), a()))
        }, leave: function (t, o) {
            return t = $(t), e.isMobile ? void o() : (e.isFirstSwitch = !0, t.css({
                position: "absolute",
                width: "100%",
                boxSizing: "border-box"
            }), void (jQuery.support.opacity && !e.dialogChangeFlag ? t.animate({opacity: 0}, 100, o) : (t.hide(), o())))
        }
    }
}]).animation(".animate-switch", ["$rootScope", "$timeout", function (e, t) {
    return {
        enter: function (o, n) {
            if (e.isMobile) return void n();
            if (!e.isFirstSwitch) {
                o = o.parents(".content");
                var a = o.height(), r = o.outerHeight(), i = $(".title").outerHeight(), c = 500;
                o.css({height: e.height}), o.animate({height: a}, {
                    duration: c,
                    queue: !1,
                    easing: "easeOutQuart",
                    complete: function () {
                        o.css({height: "auto"}), e.height = o.height()
                    }
                }), $(".dialog").animate({"margin-top": -(r + i) / 2}, {
                    duration: c,
                    queue: !1,
                    easing: "easeOutQuart"
                }), jQuery.support.opacity ? (o.css({opacity: 0}), t(function () {
                    o.animate({opacity: 1}, 300)
                }, c, n)) : (o.show(), n())
            }
        }, leave: function (t, o) {
            return e.isMobile ? void o() : (e.isFirstSwitch = !1, t.css({position: "absolute"}), void (jQuery.support.opacity ? t.animate({opacity: 0}, 100, o) : (t.hide(), o())))
        }
    }
}]);