!function (e, t) {
    function n(e) {
        var t = e.length, n = le.type(e);
        return !le.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function r(e) {
        var t = ke[e] = {};
        return le.each(e.match(pe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (le.acceptData(e)) {
            var o, a, s = le.expando, u = e.nodeType, c = u ? le.cache : e, l = u ? e[s] : e[s] && s;
            if (l && c[l] && (i || c[l].data) || r !== t || "string" != typeof n) return l || (l = u ? e[s] = te.pop() || le.guid++ : s), c[l] || (c[l] = u ? {} : {toJSON: le.noop}), "object" != typeof n && "function" != typeof n || (i ? c[l] = le.extend(c[l], n) : c[l].data = le.extend(c[l].data, n)), a = c[l], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[le.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[le.camelCase(n)])) : o = a, o
        }
    }

    function o(e, t, n) {
        if (le.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? le.cache : e, u = o ? e[le.expando] : le.expando;
            if (a[u]) {
                if (t && (r = n ? a[u] : a[u].data)) {
                    le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in r ? t = [t] : (t = le.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !s(r) : !le.isEmptyObject(r)) return
                }
                (n || (delete a[u].data, s(a[u]))) && (o ? le.cleanData([e], !0) : le.support.deleteExpando || a != a.window ? delete a[u] : a[u] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Ee, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : Te.test(r) ? le.parseJSON(r) : r)
                } catch (o) {
                }
                le.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u() {
        return !0
    }

    function c() {
        return !1
    }

    function l() {
        try {
            return Y.activeElement
        } catch (e) {
        }
    }

    function f(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function p(e, t, n) {
        if (le.isFunction(t)) return le.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return le.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Be.test(t)) return le.filter(t, e, n);
            t = le.filter(t, e)
        }
        return le.grep(e, function (e) {
            return le.inArray(e, t) >= 0 !== n
        })
    }

    function d(e) {
        var t = Ve.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        return le.nodeName(e, "table") && le.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function v(e) {
        return e.type = (null !== le.find.attr(e, "type")) + "/" + e.type, e
    }

    function g(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) le._data(n, "globalEval", !t || le._data(t[r], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && le.hasData(e)) {
            var n, r, i, o = le._data(e), a = le._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; r < i; r++) le.event.add(t, n, s[n][r])
            }
            a.data && (a.data = le.extend({}, a.data))
        }
    }

    function $(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
                i = le._data(t);
                for (r in i.events) le.removeEvent(t, r, i.handle);
                t.removeAttribute(le.expando)
            }
            "script" === n && t.text !== e.text ? (v(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, o = 0,
            a = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== X ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || le.nodeName(i, n) ? a.push(i) : le.merge(a, b(i, n));
        return n === t || n && le.nodeName(e, n) ? le.merge([e], a) : a
    }

    function x(e) {
        tt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = St.length; i--;) if (t = St[i] + n, t in e) return t;
        return r
    }

    function C(e, t) {
        return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
    }

    function S(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = le._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && C(r) && (o[a] = le._data(r, "olddisplay", A(r.nodeName)))) : o[a] || (i = C(r), (n && "none" !== n || !i) && le._data(r, "olddisplay", i ? n : le.css(r, "display"))));
        for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function k(e, t, n) {
        var r = mt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function T(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += le.css(e, n + Ct[o], !0, i)), r ? ("content" === n && (a -= le.css(e, "padding" + Ct[o], !0, i)), "margin" !== n && (a -= le.css(e, "border" + Ct[o] + "Width", !0, i))) : (a += le.css(e, "padding" + Ct[o], !0, i), "padding" !== n && (a += le.css(e, "border" + Ct[o] + "Width", !0, i)));
        return a
    }

    function E(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = lt(e),
            a = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = ft(e, t, o), (i < 0 || null == i) && (i = e.style[t]), yt.test(i)) return i;
            r = a && (le.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + T(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function A(e) {
        var t = Y, n = bt[e];
        return n || (n = N(e, t), "none" !== n && n || (ct = (ct || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = N(e, t), ct.detach()), bt[e] = n), n
    }

    function N(e, t) {
        var n = le(t.createElement(e)).appendTo(t.body), r = le.css(n[0], "display");
        return n.remove(), r
    }

    function j(e, t, n, r) {
        var i;
        if (le.isArray(t)) le.each(t, function (t, i) {
            n || Tt.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== le.type(t)) r(e, t); else for (i in t) j(e + "[" + i + "]", t[i], n, r)
    }

    function D(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(pe) || [];
            if (le.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function O(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, le.each(e[s] || [], function (e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), u
        }

        var o = {}, a = e === zt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function M(e, n) {
        var r, i, o = le.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && le.extend(!0, e, r), e
    }

    function L(e, n, r) {
        for (var i, o, a, s, u = e.contents, c = e.dataTypes; "*" === c[0];) c.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in u) if (u[s] && u[s].test(o)) {
            c.unshift(s);
            break
        }
        if (c[0] in r) a = c[0]; else {
            for (s in r) {
                if (!c[0] || e.converters[s + " " + c[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        if (a) return a !== c[0] && c.unshift(a), r[a]
    }

    function P(e, t, n, r) {
        var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
        if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (a = c[u + " " + o] || c["* " + o], !a) for (i in c) if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (f) {
                return {state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function H() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function R() {
        return setTimeout(function () {
            Kt = t
        }), Kt = le.now()
    }

    function q(e, t, n) {
        for (var r, i = (on[t] || []).concat(on["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function _(e, t, n) {
        var r, i, o = 0, a = rn.length, s = le.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = Kt || R(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; a < u; a++) c.tweens[a].run(o);
            return s.notifyWith(e, [c, o, n]), o < 1 && u ? n : (s.resolveWith(e, [c]), !1)
        }, c = s.promise({
            elem: e,
            props: le.extend({}, t),
            opts: le.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Kt || R(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = le.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) c.tweens[n].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
            }
        }), l = c.props;
        for (I(l, c.opts.specialEasing); o < a; o++) if (r = rn[o].call(c, e, l, c.opts)) return r;
        return le.map(l, q, c), le.isFunction(c.opts.start) && c.opts.start.call(e, c), le.fx.timer(le.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function I(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = le.camelCase(n), i = t[r], o = e[n], le.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = le.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function B(e, t, n) {
        var r, i, o, a, s, u, c = this, l = {}, f = e.style, p = e.nodeType && C(e), d = le._data(e, "fxshow");
        n.queue || (s = le._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
            s.unqueued || u()
        }), s.unqueued++, c.always(function () {
            c.always(function () {
                s.unqueued--, le.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", le.support.shrinkWrapBlocks || c.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], en.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) continue;
            l[r] = d && d[r] || le.style(e, r)
        }
        if (!le.isEmptyObject(l)) {
            d ? "hidden" in d && (p = d.hidden) : d = le._data(e, "fxshow", {}), o && (d.hidden = !p), p ? le(e).show() : c.done(function () {
                le(e).hide()
            }), c.done(function () {
                var t;
                le._removeData(e, "fxshow");
                for (t in l) le.style(e, t, l[t])
            });
            for (r in l) a = q(p ? d[r] : 0, r, c), r in d || (d[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function z(e, t, n, r, i) {
        return new z.prototype.init(e, t, n, r, i)
    }

    function U(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Ct[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function W(e) {
        return le.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    var V, Q, X = typeof t, J = e.location, Y = e.document, G = Y.documentElement, K = e.jQuery, Z = e.$, ee = {},
        te = [], ne = "1.10.2", re = te.concat, ie = te.push, oe = te.slice, ae = te.indexOf, se = ee.toString,
        ue = ee.hasOwnProperty, ce = ne.trim, le = function (e, t) {
            return new le.fn.init(e, t, Q)
        }, fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, pe = /\S+/g, de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ve = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ge = /^[\],:{}\s]*$/,
        me = /(?:^|:|,)(?:\s*\[)+/g, ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        $e = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, be = /^-ms-/, xe = /-([\da-z])/gi,
        we = function (e, t) {
            return t.toUpperCase()
        }, Ce = function (e) {
            (Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (Se(), le.ready())
        }, Se = function () {
            Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", Ce, !1), e.removeEventListener("load", Ce, !1)) : (Y.detachEvent("onreadystatechange", Ce), e.detachEvent("onload", Ce))
        };
    le.fn = le.prototype = {
        jquery: ne, constructor: le, init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : he.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), ve.test(i[1]) && le.isPlainObject(n)) for (i in n) le.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = Y.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = Y, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return oe.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = le.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return le.each(this, e, t)
        }, ready: function (e) {
            return le.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(oe.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(le.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: ie, sort: [].sort, splice: [].splice
    }, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, c = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, u = 2), "object" == typeof s || le.isFunction(s) || (s = {}), c === u && (s = this, --u); u < c; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], r = o[i], s !== r && (l && r && (le.isPlainObject(r) || (n = le.isArray(r))) ? (n ? (n = !1, a = e && le.isArray(e) ? e : []) : a = e && le.isPlainObject(e) ? e : {}, s[i] = le.extend(l, a, r)) : r !== t && (s[i] = r));
        return s
    }, le.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === le && (e.$ = Z), t && e.jQuery === le && (e.jQuery = K), le
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? le.readyWait++ : le.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--le.readyWait : !le.isReady) {
                if (!Y.body) return setTimeout(le.ready);
                le.isReady = !0, e !== !0 && --le.readyWait > 0 || (V.resolveWith(Y, [le]), le.fn.trigger && le(Y).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === le.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === le.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? ee[se.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            var n;
            if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
            try {
                if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (le.support.ownLast) for (n in e) return ue.call(e, n);
            for (n in e) ;
            return n === t || ue.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, error: function (e) {
            throw new Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || Y;
            var r = ve.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = le.buildFragment([e], t, i), i && le(i).remove(), le.merge([], r.childNodes))
        }, parseJSON: function (t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = le.trim(t), t && ge.test(t.replace(ye, "@").replace($e, "]").replace(me, ""))) ? new Function("return " + t)() : void le.error("Invalid JSON: " + t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && le.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(be, "ms-").replace(xe, we)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s) for (; o < a && (i = t.apply(e[o], r), i !== !1); o++) ; else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (s) for (; o < a && (i = t.call(e[o], o, e[o]), i !== !1); o++) ; else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        }, trim: ce && !ce.call("\ufeff ") ? function (e) {
            return null == e ? "" : ce.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(de, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? le.merge(r, "string" == typeof e ? [e] : e) : ie.call(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (ae) return ae.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (; o < r; o++) e[i++] = n[o]; else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; o < a; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s) for (; o < a; o++) i = t(e[o], o, r), null != i && (u[u.length] = i); else for (o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
            return re.apply([], u)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), le.isFunction(e) ? (r = oe.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(oe.call(arguments)))
            }, i.guid = e.guid = e.guid || le.guid++, i) : t
        }, access: function (e, n, r, i, o, a, s) {
            var u = 0, c = e.length, l = null == r;
            if ("object" === le.type(r)) {
                o = !0;
                for (u in r) le.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, le.isFunction(i) || (s = !0), l && (s ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                return l.call(le(e), n)
            })), n)) for (; u < c; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : l ? n.call(e) : c ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }, swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), le.ready.promise = function (t) {
        if (!V) if (V = le.Deferred(), "complete" === Y.readyState) setTimeout(le.ready); else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", Ce, !1), e.addEventListener("load", Ce, !1); else {
            Y.attachEvent("onreadystatechange", Ce), e.attachEvent("onload", Ce);
            var n = !1;
            try {
                n = null == e.frameElement && Y.documentElement
            } catch (r) {
            }
            n && n.doScroll && !function i() {
                if (!le.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    Se(), le.ready()
                }
            }()
        }
        return V.promise(t)
    }, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    }), Q = le(Y), function (e, t) {
        function n(e, t, n, r) {
            var i, o, a, s, u, c, l, f, h, v;
            if ((t ? t.ownerDocument || t : _) !== O && D(t), t = t || O, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (L && !r) {
                if (i = $e.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), n
                } else {
                    if (i[2]) return ee.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && C.getElementsByClassName && t.getElementsByClassName) return ee.apply(n, t.getElementsByClassName(a)), n
                }
                if (C.qsa && (!P || !P.test(e))) {
                    if (f = l = q, h = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = p(e), (l = t.getAttribute("id")) ? f = l.replace(we, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = c.length; u--;) c[u] = f + d(c[u]);
                        h = de.test(e) && t.parentNode || t, v = c.join(",")
                    }
                    if (v) try {
                        return ee.apply(n, h.querySelectorAll(v)), n
                    } catch (g) {
                    } finally {
                        l || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(ce, "$1"), t, n, r)
        }

        function r() {
            function e(n, r) {
                return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = r
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[q] = !0, e
        }

        function o(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function c(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return i(function (t) {
                return t = +t, i(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function f() {
        }

        function p(e, t) {
            var r, i, o, a, s, u, c, l = U[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, u = [], c = k.preFilter; s;) {
                r && !(i = fe.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = pe.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ce, " ")
                }), s = s.slice(r.length));
                for (a in k.filter) !(i = me[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return t ? s.length : s ? n.error(e) : U(e, u).slice(0)
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = B++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, a) {
                var s, u, c, l = I + " " + o;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (c = t[q] || (t[q] = {}), (u = c[r]) && u[0] === l) {
                    if ((s = u[1]) === !0 || s === S) return s === !0
                } else if (u = c[r] = [l], u[1] = e(t, n, a) || S, u[1] === !0) return !0
            }
        }

        function v(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
            return a
        }

        function m(e, t, n, r, o, a) {
            return r && !r[q] && (r = m(r)), o && !o[q] && (o = m(o, a)), i(function (i, a, s, u) {
                var c, l, f, p = [], d = [], h = a.length, v = i || b(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !i && t ? v : g(v, p, e, s, u), y = n ? o || (i ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, u), r) for (c = g(y, d), r(c, [], s, u), l = c.length; l--;) (f = c[l]) && (y[d[l]] = !(m[d[l]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], l = y.length; l--;) (f = y[l]) && c.push(m[l] = f);
                            o(null, y = [], c, u)
                        }
                        for (l = y.length; l--;) (f = y[l]) && (c = o ? ne.call(i, f) : p[l]) > -1 && (i[c] = !(a[c] = f))
                    }
                } else y = g(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : ee.apply(a, y)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, u = h(function (e) {
                return e === t
            }, a, !0), c = h(function (e) {
                return ne.call(t, e) > -1
            }, a, !0), l = [function (e, n, r) {
                return !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r))
            }]; s < i; s++) if (n = k.relative[e[s].type]) l = [h(v(l), n)]; else {
                if (n = k.filter[e[s].type].apply(null, e[s].matches), n[q]) {
                    for (r = ++s; r < i && !k.relative[e[r].type]; r++) ;
                    return m(s > 1 && v(l), s > 1 && d(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ce, "$1"), n, s < r && y(e.slice(s, r)), r < i && y(e = e.slice(r)), r < i && d(e))
                }
                l.push(n)
            }
            return v(l)
        }

        function $(e, t) {
            var r = 0, o = t.length > 0, a = e.length > 0, s = function (i, s, u, c, l) {
                var f, p, d, h = [], v = 0, m = "0", y = i && [], $ = null != l, b = N,
                    x = i || a && k.find.TAG("*", l && s.parentNode || s), w = I += null == b ? 1 : Math.random() || .1;
                for ($ && (N = s !== O && s, S = r); null != (f = x[m]); m++) {
                    if (a && f) {
                        for (p = 0; d = e[p++];) if (d(f, s, u)) {
                            c.push(f);
                            break
                        }
                        $ && (I = w, S = ++r)
                    }
                    o && ((f = !d && f) && v--, i && y.push(f))
                }
                if (v += m, o && m !== v) {
                    for (p = 0; d = t[p++];) d(y, h, s, u);
                    if (i) {
                        if (v > 0) for (; m--;) y[m] || h[m] || (h[m] = K.call(c));
                        h = g(h)
                    }
                    ee.apply(c, h), $ && !i && h.length > 0 && v + t.length > 1 && n.uniqueSort(c)
                }
                return $ && (I = w, N = b), y
            };
            return o ? i(s) : s
        }

        function b(e, t, r) {
            for (var i = 0, o = t.length; i < o; i++) n(e, t[i], r);
            return r
        }

        function x(e, t, n, r) {
            var i, o, a, s, u, c = p(e);
            if (!r && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && C.getById && 9 === t.nodeType && L && k.relative[o[1].type]) {
                    if (t = (k.find.ID(a.matches[0].replace(Ce, Se), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = me.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);) if ((u = k.find[s]) && (r = u(a.matches[0].replace(Ce, Se), de.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && d(o), !e) return ee.apply(n, r), n;
                    break
                }
            }
            return A(e, c)(r, t, !L, n, de.test(e)), n
        }

        var w, C, S, k, T, E, A, N, j, D, O, M, L, P, H, F, R, q = "sizzle" + -new Date, _ = e.document, I = 0, B = 0,
            z = r(), U = r(), W = r(), V = !1, Q = function (e, t) {
                return e === t ? (V = !0, 0) : 0
            }, X = typeof t, J = 1 << 31, Y = {}.hasOwnProperty, G = [], K = G.pop, Z = G.push, ee = G.push, te = G.slice,
            ne = G.indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
                return -1
            },
            re = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]", oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ae = oe.replace("w", "w#"),
            se = "\\[" + ie + "*(" + oe + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ae + ")|)|)" + ie + "*\\]",
            ue = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
            ce = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            fe = new RegExp("^" + ie + "*," + ie + "*"), pe = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            de = new RegExp(ie + "*[+~]"), he = new RegExp("=" + ie + "*([^\\]'\"]*)" + ie + "*\\]", "g"),
            ve = new RegExp(ue), ge = new RegExp("^" + ae + "$"), me = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ue),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + re + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            }, ye = /^[^{]+\{\s*\[native \w/, $e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /^(?:input|select|textarea|button)$/i, xe = /^h\d$/i, we = /'|\\/g,
            Ce = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), Se = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            ee.apply(G = te.call(_.childNodes), _.childNodes), G[_.childNodes.length].nodeType
        } catch (ke) {
            ee = {
                apply: G.length ? function (e, t) {
                    Z.apply(e, te.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }
        E = n.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, C = n.support = {}, D = n.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : _, n = t.defaultView;
            return t !== O && 9 === t.nodeType && t.documentElement ? (O = t, M = t.documentElement, L = !E(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                D()
            }), C.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = o(function (e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = o(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), C.getById = o(function (e) {
                return M.appendChild(e).id = q, !t.getElementsByName || !t.getElementsByName(q).length
            }), C.getById ? (k.find.ID = function (e, t) {
                if (typeof t.getElementById !== X && L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(Ce, Se);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function (e) {
                var t = e.replace(Ce, Se);
                return function (e) {
                    var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = C.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== X) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, k.find.CLASS = C.getElementsByClassName && function (e, t) {
                if (typeof t.getElementsByClassName !== X && L) return t.getElementsByClassName(e)
            }, H = [], P = [], (C.qsa = ye.test(t.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || P.push("\\[" + ie + "*(?:value|" + re + ")"), e.querySelectorAll(":checked").length || P.push(":checked")
            }), o(function (e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && P.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
            })), (C.matchesSelector = ye.test(F = M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function (e) {
                C.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), H.push("!=", ue)
            }), P = P.length && new RegExp(P.join("|")), H = H.length && new RegExp(H.join("|")), R = ye.test(M.contains) || M.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, Q = M.compareDocumentPosition ? function (e, n) {
                if (e === n) return V = !0, 0;
                var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                return r ? 1 & r || !C.sortDetached && n.compareDocumentPosition(e) === r ? e === t || R(_, e) ? -1 : n === t || R(_, n) ? 1 : j ? ne.call(j, e) - ne.call(j, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, n) {
                var r, i = 0, o = e.parentNode, a = n.parentNode, u = [e], c = [n];
                if (e === n) return V = !0, 0;
                if (!o || !a) return e === t ? -1 : n === t ? 1 : o ? -1 : a ? 1 : j ? ne.call(j, e) - ne.call(j, n) : 0;
                if (o === a) return s(e, n);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = n; r = r.parentNode;) c.unshift(r);
                for (; u[i] === c[i];) i++;
                return i ? s(u[i], c[i]) : u[i] === _ ? -1 : c[i] === _ ? 1 : 0
            }, t) : O
        }, n.matches = function (e, t) {
            return n(e, null, null, t)
        }, n.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== O && D(e), t = t.replace(he, "='$1']"), C.matchesSelector && L && (!H || !H.test(t)) && (!P || !P.test(t))) try {
                var r = F.call(e, t);
                if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {
            }
            return n(t, O, null, [e]).length > 0
        }, n.contains = function (e, t) {
            return (e.ownerDocument || e) !== O && D(e), R(e, t)
        }, n.attr = function (e, n) {
            (e.ownerDocument || e) !== O && D(e);
            var r = k.attrHandle[n.toLowerCase()], i = r && Y.call(k.attrHandle, n.toLowerCase()) ? r(e, n, !L) : t;
            return i === t ? C.attributes || !L ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
        }, n.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, n.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (V = !C.detectDuplicates, j = !C.sortStable && e.slice(0), e.sort(Q), V) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return e
        }, T = n.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += T(t);
            return n
        }, k = n.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: me,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Ce, Se), e[3] = (e[4] || e[5] || "").replace(Ce, Se), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                }, PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return me.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && ve.test(r) && (n = p(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Ce, Se).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && z(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, r) {
                    return function (i) {
                        var o = n.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var c, l, f, p, d, h, v = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode,
                            m = s && t.nodeName.toLowerCase(), y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; v;) {
                                    for (f = t; f = f[v];) if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                    h = v = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (l = g[q] || (g[q] = {}), c = l[e] || [], d = c[0] === I && c[1], p = c[0] === I && c[2], f = d && g.childNodes[d]; f = ++d && f && f[v] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    l[e] = [I, d, p];
                                    break
                                }
                            } else if (y && (c = (t[q] || (t[q] = {}))[e]) && c[0] === I) p = c[1]; else for (; (f = ++d && f && f[v] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++p || (y && ((f[q] || (f[q] = {}))[e] = [I, p]), f !== t));) ;
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return o[q] ? o(t) : o.length > 1 ? (r = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                        for (var r, i = o(e, t), a = i.length; a--;) r = ne.call(e, i[a]), e[r] = !(n[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = A(e.replace(ce, "$1"));
                    return r[q] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: i(function (e) {
                    return function (t) {
                        return n(e, t).length > 0
                    }
                }), contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return ge.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Ce, Se).toLowerCase(), function (t) {
                        var n;
                        do if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === M
                }, focus: function (e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                }, parent: function (e) {
                    return !k.pseudos.empty(e)
                }, header: function (e) {
                    return xe.test(e.nodeName)
                }, input: function (e) {
                    return be.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: l(function () {
                    return [0]
                }), last: l(function (e, t) {
                    return [t - 1]
                }), eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (w in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) k.pseudos[w] = u(w);
        for (w in {submit: !0, reset: !0}) k.pseudos[w] = c(w);
        f.prototype = k.filters = k.pseudos, k.setFilters = new f, A = n.compile = function (e, t) {
            var n, r = [], i = [], o = W[e + " "];
            if (!o) {
                for (t || (t = p(e)), n = t.length; n--;) o = y(t[n]), o[q] ? r.push(o) : i.push(o);
                o = W(e, $(i, r))
            }
            return o
        }, C.sortStable = q.split("").sort(Q).join("") === q, C.detectDuplicates = V, D(), C.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(O.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), C.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || a(re, function (e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        }), le.find = n, le.expr = n.selectors, le.expr[":"] = le.expr.pseudos, le.unique = n.uniqueSort, le.text = n.getText, le.isXMLDoc = n.isXML, le.contains = n.contains
    }(e);
    var ke = {};
    le.Callbacks = function (e) {
        e = "string" == typeof e ? ke[e] || r(e) : le.extend({}, e);
        var n, i, o, a, s, u, c = [], l = !e.once && [], f = function (t) {
            for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = c.length, n = !0; c && s < a; s++) if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            n = !1, c && (l ? l.length && f(l.shift()) : i ? c = [] : p.disable())
        }, p = {
            add: function () {
                if (c) {
                    var t = c.length;
                    !function r(t) {
                        le.each(t, function (t, n) {
                            var i = le.type(n);
                            "function" === i ? e.unique && p.has(n) || c.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    }(arguments), n ? a = c.length : i && (u = t, f(i))
                }
                return this
            }, remove: function () {
                return c && le.each(arguments, function (e, t) {
                    for (var r; (r = le.inArray(t, c, r)) > -1;) c.splice(r, 1), n && (r <= a && a--, r <= s && s--)
                }), this
            }, has: function (e) {
                return e ? le.inArray(e, c) > -1 : !(!c || !c.length)
            }, empty: function () {
                return c = [], a = 0, this
            }, disable: function () {
                return c = l = i = t, this
            }, disabled: function () {
                return !c
            }, lock: function () {
                return l = t, i || p.disable(), this
            }, locked: function () {
                return !l
            }, fireWith: function (e, t) {
                return !c || o && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? l.push(t) : f(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return p
    }, le.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", le.Callbacks("once memory"), "resolved"], ["reject", "fail", le.Callbacks("once memory"), "rejected"], ["notify", "progress", le.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return le.Deferred(function (n) {
                            le.each(t, function (t, o) {
                                var a = o[0], s = le.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? le.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, le.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = oe.call(arguments), a = o.length,
                s = 1 !== a || e && le.isFunction(e.promise) ? a : 0, u = 1 === s ? e : le.Deferred(),
                c = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? oe.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && le.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    }), le.support = function (t) {
        var n, r, i, o, a, s, u, c, l, f = Y.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], r = f.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        o = Y.createElement("select"), s = o.appendChild(Y.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== f.className, t.leadingWhitespace = 3 === f.firstChild.nodeType, t.tbody = !f.getElementsByTagName("tbody").length, t.htmlSerialize = !!f.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, t.enctype = !!Y.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch (p) {
            t.deleteExpando = !1
        }
        i = Y.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = Y.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (l in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(u = "on" + l, "t"), t[l + "Bubbles"] = u in e || f.attributes[u].expando === !1;
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (l in le(t)) break;
        return t.ownLast = "0" !== l, le(function () {
            var n, r, i,
                o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = Y.getElementsByTagName("body")[0];
            a && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", le.swap(a, null != a.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === f.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {width: "4px"}).width, r = f.appendChild(Y.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== X && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
        }), n = o = a = s = r = i = null, t
    }({});
    var Te = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Ee = /([A-Z])/g;
    le.extend({
        cache: {},
        noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando], !!e && !s(e)
        },
        data: function (e, t, n) {
            return i(e, t, n)
        },
        removeData: function (e, t) {
            return o(e, t)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && le.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), le.fn.extend({
        data: function (e, n) {
            var r, i, o = null, s = 0, u = this[0];
            if (e === t) {
                if (this.length && (o = le.data(u), 1 === u.nodeType && !le._data(u, "parsedAttrs"))) {
                    for (r = u.attributes; s < r.length; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = le.camelCase(i.slice(5)), a(u, i, o[i]));
                    le._data(u, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                le.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                le.data(this, e, n)
            }) : u ? a(u, e, le.data(u, e)) : null
        }, removeData: function (e) {
            return this.each(function () {
                le.removeData(this, e)
            })
        }
    }), le.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = le._data(e, t), n && (!r || le.isArray(n) ? r = le._data(e, t, le.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = le.queue(e, t), r = n.length, i = n.shift(), o = le._queueHooks(e, t), a = function () {
                le.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return le._data(e, n) || le._data(e, n, {
                empty: le.Callbacks("once memory").add(function () {
                    le._removeData(e, t + "queue"), le._removeData(e, n)
                })
            })
        }
    }), le.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? le.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = le.queue(this, e, n);
                le._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                le.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = le.Deferred(), a = this, s = this.length, u = function () {
                --i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = le._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var Ae, Ne, je = /[\t\r\n\f]/g, De = /\r/g, Oe = /^(?:input|select|textarea|button|object)$/i, Me = /^(?:a|area)$/i,
        Le = /^(?:checked|selected)$/i, Pe = le.support.getSetAttribute, He = le.support.input;
    le.fn.extend({
        attr: function (e, t) {
            return le.access(this, le.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                le.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return le.access(this, le.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = le.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function (t) {
                le(this).addClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(pe) || []; a < s; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(je, " ") : " ")) {
                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                n.className = le.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function (t) {
                le(this).removeClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(pe) || []; a < s; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(je, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                n.className = e ? le.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function (n) {
                le(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) for (var t, r = 0, i = le(this), o = e.match(pe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else n !== X && "boolean" !== n || (this.className && le._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : le._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(je, " ").indexOf(t) >= 0) return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length) return i = le.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, le(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : le.isArray(o) && (o = le.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = le.valHooks[o.type] || le.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(De, "") : null == n ? "" : n)
            }
        }
    }), le.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = le.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) if (n = r[u], (n.selected || u === i) && (le.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                        if (t = le(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = le.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = le.inArray(le(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }, attr: function (e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === X ? le.prop(e, n, r) : (1 === a && le.isXMLDoc(e) || (n = n.toLowerCase(), i = le.attrHooks[n] || (le.expr.match.bool.test(n) ? Ne : Ae)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = le.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : void le.removeAttr(e, n))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(pe);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = le.propFix[n] || n, le.expr.match.bool.test(n) ? He && Pe || !Le.test(n) ? e[r] = !1 : e[le.camelCase("default-" + n)] = e[r] = !1 : le.attr(e, n, ""), e.removeAttribute(Pe ? n : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !le.isXMLDoc(e), a && (n = le.propFix[n] || n, o = le.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = le.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Oe.test(e.nodeName) || Me.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), Ne = {
        set: function (e, t, n) {
            return t === !1 ? le.removeAttr(e, n) : He && Pe || !Le.test(n) ? e.setAttribute(!Pe && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, le.each(le.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = le.expr.attrHandle[n] || le.find.attr;
        le.expr.attrHandle[n] = He && Pe || !Le.test(n) ? function (e, n, i) {
            var o = le.expr.attrHandle[n],
                a = i ? t : (le.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return le.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[le.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), He && Pe || (le.attrHooks.value = {
        set: function (e, t, n) {
            return le.nodeName(e, "input") ? void (e.defaultValue = t) : Ae && Ae.set(e, t, n)
        }
    }), Pe || (Ae = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, le.expr.attrHandle.id = le.expr.attrHandle.name = le.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, le.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        }, set: Ae.set
    }, le.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Ae.set(e, "" !== t && t, n)
        }
    }, le.each(["width", "height"], function (e, t) {
        le.attrHooks[t] = {
            set: function (e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        }
    })), le.support.hrefNormalized || le.each(["href", "src"], function (e, t) {
        le.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), le.support.style || (le.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), le.support.optSelected || (le.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), le.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        le.propFix[this.toLowerCase()] = this
    }), le.support.enctype || (le.propFix.enctype = "encoding"), le.each(["radio", "checkbox"], function () {
        le.valHooks[this] = {
            set: function (e, t) {
                if (le.isArray(t)) return e.checked = le.inArray(le(e).val(), t) >= 0
            }
        }, le.support.checkOn || (le.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Fe = /^(?:input|select|textarea)$/i, Re = /^key/, qe = /^(?:mouse|contextmenu)|click/,
        _e = /^(?:focusinfocus|focusoutblur)$/, Ie = /^([^.]*)(?:\.(.+)|)$/;
    le.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var a, s, u, c, l, f, p, d, h, v, g, m = le._data(e);
            if (m) {
                for (r.handler && (c = r, r = c.handler, o = c.selector), r.guid || (r.guid = le.guid++), (s = m.events) || (s = m.events = {}), (f = m.handle) || (f = m.handle = function (e) {
                    return typeof le === X || e && le.event.triggered === e.type ? t : le.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(pe) || [""], u = n.length; u--;) a = Ie.exec(n[u]) || [], h = g = a[1], v = (a[2] || "").split(".").sort(), h && (l = le.event.special[h] || {}, h = (o ? l.delegateType : l.bindType) || h, l = le.event.special[h] || {}, p = le.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && le.expr.match.needsContext.test(o),
                    namespace: v.join(".")
                }, c), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, l.setup && l.setup.call(e, i, v, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), l.add && (l.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), le.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, c, l, f, p, d, h, v, g = le.hasData(e) && le._data(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(pe) || [""], c = t.length; c--;) if (s = Ie.exec(t[c]) || [], d = v = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = le.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = l[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !i && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !p.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || le.removeEvent(e, d, g.handle), delete l[d])
                } else for (d in l) le.event.remove(e, d + t[c], n, r, !0);
                le.isEmptyObject(l) && (delete g.handle, le._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, u, c, l, f, p, d = [i || Y], h = ue.call(n, "type") ? n.type : n,
                v = ue.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(h + le.event.triggered) && (h.indexOf(".") >= 0 && (v = h.split("."), h = v.shift(), v.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[le.expando] ? n : new le.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : le.makeArray(r, [n]), l = le.event.special[h] || {}, o || !l.trigger || l.trigger.apply(i, r) !== !1)) {
                if (!o && !l.noBubble && !le.isWindow(i)) {
                    for (c = l.delegateType || h, _e.test(c + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u), f = u;
                    f === (i.ownerDocument || Y) && d.push(f.defaultView || f.parentWindow || e)
                }
                for (p = 0; (u = d[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? c : l.bindType || h, a = (le._data(u, "events") || {})[n.type] && le._data(u, "handle"), a && a.apply(u, r), a = s && u[s], a && le.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), r) === !1) && le.acceptData(i) && s && i[h] && !le.isWindow(i)) {
                    f = i[s], f && (i[s] = null), le.event.triggered = h;
                    try {
                        i[h]()
                    } catch (g) {
                    }
                    le.event.triggered = t, f && (i[s] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = le.event.fix(e);
            var n, r, i, o, a, s = [], u = oe.call(arguments), c = (le._data(this, "events") || {})[e.type] || [],
                l = le.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = le.event.handlers.call(this, e, c), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, r = ((le.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, c = e.target;
            if (u && c.nodeType && (!e.button || "click" !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; a < u; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? le(r, this).index(c) >= 0 : le.find(r, this, null, [c]).length), o[r] && o.push(i);
                o.length && s.push({elem: c, handlers: o})
            }
            return u < n.length && s.push({elem: this, handlers: n.slice(u)}), s
        },
        fix: function (e) {
            if (e[le.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qe.test(i) ? this.mouseHooks : Re.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new le.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Y, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== l() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === l() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (le.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                }, _default: function (e) {
                    return le.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = le.extend(new le.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? le.event.trigger(i, null, t) : le.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, le.removeEvent = Y.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === X && (e[r] = null), e.detachEvent(r, n))
    }, le.Event = function (e, t) {
        return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : c) : this.type = e, t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), void (this[le.expando] = !0)) : new le.Event(e, t)
    }, le.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, le.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        le.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || le.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), le.support.submitBubbles || (le.event.special.submit = {
        setup: function () {
            return !le.nodeName(this, "form") && void le.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form : t;
                r && !le._data(r, "submitBubbles") && (le.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), le._data(r, "submitBubbles", !0))
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return !le.nodeName(this, "form") && void le.event.remove(this, "._submit")
        }
    }), le.support.changeBubbles || (le.event.special.change = {
        setup: function () {
            return Fe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (le.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), le.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, e, !0)
            })), !1) : void le.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Fe.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
                }), le._data(t, "changeBubbles", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return le.event.remove(this, "._change"), !Fe.test(this.nodeName)
        }
    }), le.support.focusinBubbles || le.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            le.event.simulate(t, e.target, le.event.fix(e), !0)
        };
        le.event.special[t] = {
            setup: function () {
                0 === n++ && Y.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && Y.removeEventListener(e, r, !0)
            }
        }
    }), le.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = c; else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return le().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = le.guid++)), this.each(function () {
                le.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, le(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return n !== !1 && "function" != typeof n || (r = n, n = t), r === !1 && (r = c), this.each(function () {
                le.event.remove(this, e, r, n)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                le.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return le.event.trigger(e, t, n, !0)
        }
    });
    var Be = /^.[^:#\[\.,]*$/, ze = /^(?:parents|prev(?:Until|All))/, Ue = le.expr.match.needsContext,
        We = {children: !0, contents: !0, next: !0, prev: !0};
    le.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(le(e).filter(function () {
                for (t = 0; t < i; t++) if (le.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) le.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? le.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, has: function (e) {
            var t, n = le(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++) if (le.contains(this, n[t])) return !0
            })
        }, not: function (e) {
            return this.pushStack(p(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(p(this, e || [], !1))
        }, is: function (e) {
            return !!p(this, "string" == typeof e && Ue.test(e) ? le(e) : e || [], !1).length
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Ue.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? le.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [e] : e),
                r = le.merge(this.get(), n);
            return this.pushStack(le.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), le.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return le.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return le.dir(e, "parentNode", n)
        }, next: function (e) {
            return f(e, "nextSibling")
        }, prev: function (e) {
            return f(e, "previousSibling")
        }, nextAll: function (e) {
            return le.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return le.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return le.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return le.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return le.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return le.sibling(e.firstChild)
        }, contents: function (e) {
            return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes)
        }
    }, function (e, t) {
        le.fn[e] = function (n, r) {
            var i = le.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = le.filter(r, i)), this.length > 1 && (We[e] || (i = le.unique(i)), ze.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), le.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? le.find.matchesSelector(r, e) ? [r] : [] : le.find.matches(e, le.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !le(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ve = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Qe = / jQuery\d+="(?:null|\d+)"/g, Xe = new RegExp("<(?:" + Ve + ")[\\s/>]", "i"), Je = /^\s+/,
        Ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ge = /<([\w:]+)/,
        Ke = /<tbody/i, Ze = /<|&#?\w+;/, et = /<(?:script|style|link)/i, tt = /^(?:checkbox|radio)$/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i, rt = /^$|\/(?:java|ecma)script/i, it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, at = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, st = d(Y), ut = st.appendChild(Y.createElement("div"));
    at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, le.fn.extend({
        text: function (e) {
            return le.access(this, function (e) {
                return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = e ? le.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || le.cleanData(b(n)), n.parentNode && (t && le.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && le.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && le.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return le.clone(this, e, t)
            })
        }, html: function (e) {
            return le.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Qe, "") : t;
                if ("string" == typeof e && !et.test(e) && (le.support.htmlSerialize || !Xe.test(e)) && (le.support.leadingWhitespace || !Je.test(e)) && !at[(Ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ye, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, 1 === n.nodeType && (le.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = le.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), le(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, n) {
            e = re.apply([], e);
            var r, i, o, a, s, u, c = 0, l = this.length, f = this, p = l - 1, d = e[0], h = le.isFunction(d);
            if (h || !(l <= 1 || "string" != typeof d || le.support.checkClone) && nt.test(d)) return this.each(function (r) {
                var i = f.eq(r);
                h && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (l && (u = le.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = u.firstChild, 1 === u.childNodes.length && (u = r), r)) {
                for (a = le.map(b(u, "script"), v), o = a.length; c < l; c++) i = u, c !== p && (i = le.clone(i, !0, !0), o && le.merge(a, b(i, "script"))), t.call(this[c], i, c);
                if (o) for (s = a[a.length - 1].ownerDocument, le.map(a, g), c = 0; c < o; c++) i = a[c], rt.test(i.type || "") && !le._data(i, "globalEval") && le.contains(s, i) && (i.src ? le._evalUrl(i.src) : le.globalEval((i.text || i.textContent || i.innerHTML || "").replace(ot, "")));
                u = r = null
            }
            return this
        }
    }), le.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        le.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = le(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), le(o[r])[t](n), ie.apply(i, n.get());
            return this.pushStack(i)
        }
    }), le.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = le.contains(e.ownerDocument, e);
            if (le.support.html5Clone || le.isXMLDoc(e) || !Xe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(o = ut.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e))) for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && $(i, r[a]);
            if (t) if (n) for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) y(i, r[a]); else y(e, o);
            return r = b(o, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = s = i = null, o
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, u, c, l, f = e.length, p = d(t), h = [], v = 0; v < f; v++) if (o = e[v], o || 0 === o) if ("object" === le.type(o)) le.merge(h, o.nodeType ? [o] : o); else if (Ze.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), u = (Ge.exec(o) || ["", ""])[1].toLowerCase(), l = at[u] || at._default, s.innerHTML = l[1] + o.replace(Ye, "<$1></$2>") + l[2], i = l[0]; i--;) s = s.lastChild;
                if (!le.support.leadingWhitespace && Je.test(o) && h.push(t.createTextNode(Je.exec(o)[0])), !le.support.tbody) for (o = "table" !== u || Ke.test(o) ? "<table>" !== l[1] || Ke.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) le.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (le.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else h.push(t.createTextNode(o));
            for (s && p.removeChild(s), le.support.appendChecked || le.grep(b(h, "input"), x), v = 0; o = h[v++];) if ((!r || le.inArray(o, r) === -1) && (a = le.contains(o.ownerDocument, o), s = b(p.appendChild(o), "script"), a && m(s), n)) for (i = 0; o = s[i++];) rt.test(o.type || "") && n.push(o);
            return s = null, p
        }, cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = le.expando, u = le.cache, c = le.support.deleteExpando, l = le.event.special; null != (n = e[a]); a++) if ((t || le.acceptData(n)) && (i = n[s], o = i && u[i])) {
                if (o.events) for (r in o.events) l[r] ? le.event.remove(n, r) : le.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], c ? delete n[s] : typeof n.removeAttribute !== X ? n.removeAttribute(s) : n[s] = null, te.push(i))
            }
        }, _evalUrl: function (e) {
            return le.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), le.fn.extend({
        wrapAll: function (e) {
            if (le.isFunction(e)) return this.each(function (t) {
                le(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return le.isFunction(e) ? this.each(function (t) {
                le(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = le(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = le.isFunction(e);
            return this.each(function (n) {
                le(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ct, lt, ft, pt = /alpha\([^)]*\)/i, dt = /opacity\s*=\s*([^)]*)/, ht = /^(top|right|bottom|left)$/,
        vt = /^(none|table(?!-c[ea]).+)/, gt = /^margin/, mt = new RegExp("^(" + fe + ")(.*)$", "i"),
        yt = new RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"), $t = new RegExp("^([+-])=(" + fe + ")", "i"),
        bt = {BODY: "block"}, xt = {position: "absolute", visibility: "hidden", display: "block"},
        wt = {letterSpacing: 0, fontWeight: 400}, Ct = ["Top", "Right", "Bottom", "Left"],
        St = ["Webkit", "O", "Moz", "ms"];
    le.fn.extend({
        css: function (e, n) {
            return le.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (le.isArray(n)) {
                    for (o = lt(e), i = n.length; s < i; s++) a[n[s]] = le.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? le.style(e, n, r) : le.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return S(this, !0)
        }, hide: function () {
            return S(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                C(this) ? le(this).show() : le(this).hide()
            })
        }
    }), le.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = ft(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": le.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = le.camelCase(n), c = e.style;
                if (n = le.cssProps[u] || (le.cssProps[u] = w(c, u)), s = le.cssHooks[n] || le.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : c[n];
                if (a = typeof r, "string" === a && (o = $t.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(le.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || le.cssNumber[u] || (r += "px"), le.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    c[n] = r
                } catch (l) {
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = le.camelCase(n);
            return n = le.cssProps[u] || (le.cssProps[u] = w(e.style, u)), s = le.cssHooks[n] || le.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = ft(e, n, i)), "normal" === a && n in wt && (a = wt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || le.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (lt = function (t) {
        return e.getComputedStyle(t, null)
    }, ft = function (e, n, r) {
        var i, o, a, s = r || lt(e), u = s ? s.getPropertyValue(n) || s[n] : t, c = e.style;
        return s && ("" !== u || le.contains(e.ownerDocument, e) || (u = le.style(e, n)), yt.test(u) && gt.test(n) && (i = c.width, o = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = u, u = s.width, c.width = i, c.minWidth = o, c.maxWidth = a)), u
    }) : Y.documentElement.currentStyle && (lt = function (e) {
        return e.currentStyle
    }, ft = function (e, n, r) {
        var i, o, a, s = r || lt(e), u = s ? s[n] : t, c = e.style;
        return null == u && c && c[n] && (u = c[n]), yt.test(u) && !ht.test(n) && (i = c.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : u, u = c.pixelLeft + "px", c.left = i, a && (o.left = a)), "" === u ? "auto" : u
    }), le.each(["height", "width"], function (e, t) {
        le.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return 0 === e.offsetWidth && vt.test(le.css(e, "display")) ? le.swap(e, xt, function () {
                    return E(e, t, r)
                }) : E(e, t, r)
            }, set: function (e, n, r) {
                var i = r && lt(e);
                return k(e, n, r ? T(e, t, r, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), le.support.opacity || (le.cssHooks.opacity = {
        get: function (e, t) {
            return dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === le.trim(o.replace(pt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = pt.test(o) ? o.replace(pt, i) : o + " " + i)
        }
    }), le(function () {
        le.support.reliableMarginRight || (le.cssHooks.marginRight = {
            get: function (e, t) {
                if (t) return le.swap(e, {display: "inline-block"}, ft, [e, "marginRight"])
            }
        }), !le.support.pixelPosition && le.fn.position && le.each(["top", "left"], function (e, t) {
            le.cssHooks[t] = {
                get: function (e, n) {
                    if (n) return n = ft(e, t), yt.test(n) ? le(e).position()[t] + "px" : n
                }
            }
        })
    }), le.expr && le.expr.filters && (le.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display"))
    }, le.expr.filters.visible = function (e) {
        return !le.expr.filters.hidden(e)
    }), le.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        le.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Ct[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, gt.test(e) || (le.cssHooks[e + t].set = k)
    });
    var kt = /%20/g, Tt = /\[\]$/, Et = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    le.fn.extend({
        serialize: function () {
            return le.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = le.prop(this, "elements");
                return e ? le.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !le(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !tt.test(e))
            }).map(function (e, t) {
                var n = le(this).val();
                return null == n ? null : le.isArray(n) ? le.map(n, function (e) {
                    return {name: t.name, value: e.replace(Et, "\r\n")}
                }) : {name: t.name, value: n.replace(Et, "\r\n")}
            }).get()
        }
    }), le.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = le.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e) j(r, e[r], n, o);
        return i.join("&").replace(kt, "+")
    }, le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        le.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), le.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var jt, Dt, Ot = le.now(), Mt = /\?/, Lt = /#.*$/, Pt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Rt = /^(?:GET|HEAD)$/, qt = /^\/\//,
        _t = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, It = le.fn.load, Bt = {}, zt = {}, Ut = "*/".concat("*");
    try {
        Dt = J.href
    } catch (Wt) {
        Dt = Y.createElement("a"), Dt.href = "", Dt = Dt.href
    }
    jt = _t.exec(Dt.toLowerCase()) || [], le.fn.load = function (e, n, r) {
        if ("string" != typeof e && It) return It.apply(this, arguments);
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), le.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && le.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? le("<div>").append(le.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        le.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), le.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt,
            type: "GET",
            isLocal: Ft.test(jt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ut,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": le.parseJSON, "text xml": le.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? M(M(e, le.ajaxSettings), t) : M(le.ajaxSettings, e)
        },
        ajaxPrefilter: D(Bt),
        ajaxTransport: D(zt),
        ajax: function (e, n) {
            function r(e, n, r, i) {
                var o, f, y, $, x, C = n;
                2 !== b && (b = 2, u && clearTimeout(u), l = t, s = i || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, r && ($ = L(p, w, r)), $ = P(p, $, w, o), o ? (p.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (le.lastModified[a] = x), x = w.getResponseHeader("etag"), x && (le.etag[a] = x)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = $.state, f = $.data, y = $.error, o = !y)) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (n || C) + "", o ? v.resolveWith(d, [f, C, w]) : v.rejectWith(d, [w, C, y]), w.statusCode(m), m = t, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, p, o ? f : y]), g.fireWith(d, [w, C]), c && (h.trigger("ajaxComplete", [w, p]), --le.active || le.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, c, l, f, p = le.ajaxSetup({}, n), d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? le(d) : le.event, v = le.Deferred(),
                g = le.Callbacks("once memory"), m = p.statusCode || {}, y = {}, $ = {}, b = 0, x = "canceled", w = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!f) for (f = {}; t = Ht.exec(s);) f[t[1].toLowerCase()] = t[2];
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = $[n] = $[n] || e, y[e] = t), this
                    }, overrideMimeType: function (e) {
                        return b || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (b < 2) for (t in e) m[t] = [m[t], e[t]]; else w.always(e[w.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || x;
                        return l && l.abort(t), r(0, t), this
                    }
                };
            if (v.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Dt) + "").replace(Lt, "").replace(qt, jt[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = le.trim(p.dataType || "*").toLowerCase().match(pe) || [""], null == p.crossDomain && (i = _t.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === jt[1] && i[2] === jt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (jt[3] || ("http:" === jt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = le.param(p.data, p.traditional)), O(Bt, p, n, w), 2 === b) return w;
            c = p.global, c && 0 === le.active++ && le.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Rt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Mt.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Pt.test(a) ? a.replace(Pt, "$1_=" + Ot++) : a + (Mt.test(a) ? "&" : "?") + "_=" + Ot++)), p.ifModified && (le.lastModified[a] && w.setRequestHeader("If-Modified-Since", le.lastModified[a]), le.etag[a] && w.setRequestHeader("If-None-Match", le.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) w.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (o in {success: 1, error: 1, complete: 1}) w[o](p[o]);
            if (l = O(zt, p, n, w)) {
                w.readyState = 1, c && h.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (u = setTimeout(function () {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, l.send(y, r)
                } catch (C) {
                    if (!(b < 2)) throw C;
                    r(-1, C)
                }
            } else r(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return le.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return le.get(e, t, n, "script")
        }
    }), le.each(["get", "post"], function (e, n) {
        le[n] = function (e, r, i, o) {
            return le.isFunction(r) && (o = o || i, i = r, r = t), le.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), le.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return le.globalEval(e), e
            }
        }
    }), le.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), le.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = Y.head || le("head")[0] || Y.documentElement;
            return {
                send: function (t, i) {
                    n = Y.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Vt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Vt.pop() || le.expando + "_" + Ot++;
            return this[e] = !0, e
        }
    }), le.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s,
            u = n.jsonp !== !1 && (Qt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(n.data) && "data");
        if (u || "jsonp" === n.dataTypes[0]) return o = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Qt, "$1" + o) : n.jsonp !== !1 && (n.url += (Mt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || le.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Vt.push(o)), s && le.isFunction(a) && a(s[0]), s = a = t
        }), "script"
    });
    var Xt, Jt, Yt = 0, Gt = e.ActiveXObject && function () {
        var e;
        for (e in Xt) Xt[e](t, !0)
    };
    le.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && H() || F()
    } : H, Jt = le.ajaxSettings.xhr(), le.support.cors = !!Jt && "withCredentials" in Jt, Jt = le.support.ajax = !!Jt, Jt && le.ajaxTransport(function (n) {
        if (!n.crossDomain || le.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (c) {
                    }
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, c, l, f;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = le.noop, Gt && delete Xt[a]), i) 4 !== u.readyState && u.abort(); else {
                                f = {}, s = u.status, c = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    l = u.statusText
                                } catch (p) {
                                    l = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        f && o(s, l, f, c)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Yt, Gt && (Xt || (Xt = {}, le(e).unload(Gt)), Xt[a] = r), u.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Kt, Zt, en = /^(?:toggle|show|hide)$/, tn = new RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"),
        nn = /queueHooks$/, rn = [B], on = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = tn.exec(t), o = i && i[3] || (le.cssNumber[e] ? "" : "px"),
                    a = (le.cssNumber[e] || "px" !== o && +r) && tn.exec(le.css(n.elem, e)), s = 1, u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, le.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    le.Animation = le.extend(_, {
        tweener: function (e, t) {
            le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? rn.unshift(e) : rn.push(e)
        }
    }), le.Tween = z, z.prototype = {
        constructor: z, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (le.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = z.propHooks[this.prop];
            return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, le.each(["toggle", "show", "hide"], function (e, t) {
        var n = le.fn[t];
        le.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, r, i)
        }
    }), le.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(C).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = le.isEmptyObject(e), o = le.speed(t, n, r), a = function () {
                var t = _(this, le.extend({}, e), o);
                (i || le._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = le.timers, a = le._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && nn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                !t && r || le.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = le._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = le.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, le.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), le.each({
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        le.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), le.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? le.extend({}, e) : {
            complete: n || !n && t || le.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !le.isFunction(t) && t
        };
        return r.duration = le.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in le.fx.speeds ? le.fx.speeds[r.duration] : le.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            le.isFunction(r.old) && r.old.call(this), r.queue && le.dequeue(this, r.queue)
        }, r
    }, le.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, le.timers = [], le.fx = z.prototype.init, le.fx.tick = function () {
        var e, n = le.timers, r = 0;
        for (Kt = le.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || le.fx.stop(), Kt = t
    }, le.fx.timer = function (e) {
        e() && le.timers.push(e) && le.fx.start()
    }, le.fx.interval = 13, le.fx.start = function () {
        Zt || (Zt = setInterval(le.fx.tick, le.fx.interval))
    }, le.fx.stop = function () {
        clearInterval(Zt), Zt = null
    }, le.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function (e) {
        return le.grep(le.timers, function (t) {
            return e === t.elem
        }).length
    }), le.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            le.offset.setOffset(this, e, t)
        });
        var n, r, i = {top: 0, left: 0}, o = this[0], a = o && o.ownerDocument;
        if (a) return n = a.documentElement, le.contains(n, o) ? (typeof o.getBoundingClientRect !== X && (i = o.getBoundingClientRect()), r = W(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, le.offset = {
        setOffset: function (e, t, n) {
            var r = le.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = le(e), s = a.offset(), u = le.css(e, "top"), c = le.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && le.inArray("auto", [u, c]) > -1, f = {}, p = {};
            l ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(c) || 0), le.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
        }
    }, le.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === le.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - le.css(r, "marginTop", !0),
                    left: t.left - n.left - le.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || G; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent;
                return e || G
            })
        }
    }), le.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        le.fn[e] = function (i) {
            return le.access(this, function (e, i, o) {
                var a = W(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : void (a ? a.scrollTo(r ? le(a).scrollLeft() : o, r ? o : le(a).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), le.each({Height: "height", Width: "width"}, function (e, n) {
        le.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            le.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return le.access(this, function (n, r, i) {
                    var o;
                    return le.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? le.css(n, r, s) : le.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), le.fn.size = function () {
        return this.length
    }, le.fn.andSelf = le.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = le : (e.jQuery = e.$ = le, "function" == typeof define && define.amd && define("jquery", [], function () {
        return le
    }))
}(window), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    }
});
var jaaulde = window.jaaulde || {};
jaaulde.utils = jaaulde.utils || {}, jaaulde.utils.cookies = function () {
    var e, t, n, r, i = {expiresAt: null, path: "/", domain: null, secure: !1};
    return e = function (e) {
        var t, n;
        return "object" != typeof e || null === e ? t = i : (t = {
            expiresAt: i.expiresAt,
            path: i.path,
            domain: i.domain,
            secure: i.secure
        }, "object" == typeof e.expiresAt && e.expiresAt instanceof Date ? t.expiresAt = e.expiresAt : "number" == typeof e.hoursToLive && 0 !== e.hoursToLive && (n = new Date, n.setTime(n.getTime() + 60 * e.hoursToLive * 60 * 1e3), t.expiresAt = n), "string" == typeof e.path && "" !== e.path && (t.path = e.path), "string" == typeof e.domain && "" !== e.domain && (t.domain = e.domain), e.secure === !0 && (t.secure = e.secure)), t
    }, t = function (t) {
        return t = e(t), ("object" == typeof t.expiresAt && t.expiresAt instanceof Date ? "; expires=" + t.expiresAt.toGMTString() : "") + "; path=" + t.path + ("string" == typeof t.domain ? "; domain=" + t.domain : "") + (t.secure === !0 ? "; secure" : "")
    }, n = function () {
        var e, t, n, r, i, o = {}, a = document.cookie.split(";");
        for (e = 0; e < a.length; e += 1) {
            t = a[e].split("="), n = t[0].replace(/^\s*/, "").replace(/\s*$/, "");
            try {
                r = decodeURIComponent(t[1])
            } catch (s) {
                r = t[1]
            }
            if ("object" == typeof JSON && null !== JSON && "function" == typeof JSON.parse) try {
                i = r, r = JSON.parse(r)
            } catch (u) {
                r = i
            }
            o[n] = r
        }
        return o
    }, r = function () {
    }, r.prototype.get = function (e) {
        var t, r, i = n();
        if ("string" == typeof e) t = "undefined" != typeof i[e] ? i[e] : null; else if ("object" == typeof e && null !== e) {
            t = {};
            for (r in e) "undefined" != typeof i[e[r]] ? t[e[r]] = i[e[r]] : t[e[r]] = null
        } else t = i;
        return t
    }, r.prototype.filter = function (e) {
        var t, r = {}, i = n();
        "string" == typeof e && (e = new RegExp(e));
        for (t in i) t.match(e) && (r[t] = i[t]);
        return r
    }, r.prototype.set = function (e, n, r) {
        if ("object" == typeof r && null !== r || (r = {}), "undefined" == typeof n || null === n) n = "", r.hoursToLive = -8760; else if ("string" != typeof n) {
            if ("object" != typeof JSON || null === JSON || "function" != typeof JSON.stringify) throw new Error("cookies.set() received non-string value and could not serialize.");
            n = JSON.stringify(n)
        }
        var i = t(r);
        document.cookie = e + "=" + encodeURIComponent(n) + i
    }, r.prototype.del = function (e, t) {
        var n, r = {};
        "object" == typeof t && null !== t || (t = {}), "boolean" == typeof e && e === !0 ? r = this.get() : "string" == typeof e && (r[e] = !0);
        for (n in r) "string" == typeof n && "" !== n && this.set(n, null, t);
    }, r.prototype.test = function () {
        var e = !1, t = "cT", n = "data";
        return this.set(t, n), this.get(t) === n && (this.del(t), e = !0), e
    }, r.prototype.setOptions = function (t) {
        "object" != typeof t && (t = null), i = e(t)
    }, new r
}(), function () {
    (window.jQuery || window.Zepto) && !function (e) {
        e.cookies = jaaulde.utils.cookies;
        var t = {
            cookify: function (t) {
                return this.each(function () {
                    var n, r, i, o = ["name", "id"], a = e(this);
                    for (n in o) if (!isNaN(n) && (r = a.attr(o[n]), "string" == typeof r && "" !== r)) {
                        a.is(":checkbox, :radio") ? a.attr("checked") && (i = a.val()) : i = a.is(":input") ? a.val() : a.html(), "string" == typeof i && "" !== i || (i = null), e.cookies.set(r, i, t);
                        break
                    }
                })
            }, cookieFill: function () {
                return this.each(function () {
                    var t, n, r, i, o = ["name", "id"], a = e(this);
                    for (n = function () {
                        return t = o.pop(), !!t
                    }; n();) if (r = a.attr(t), "string" == typeof r && "" !== r) {
                        i = e.cookies.get(r), null !== i && (a.is(":checkbox, :radio") ? a.val() === i ? a.attr("checked", "checked") : a.removeAttr("checked") : a.is(":input") ? a.val(i) : a.html(i));
                        break
                    }
                })
            }, cookieBind: function (t) {
                return this.each(function () {
                    var n = e(this);
                    n.cookieFill().change(function () {
                        n.cookify(t)
                    })
                })
            }
        };
        e.each(t, function (t) {
            e.fn[t] = this
        })
    }(window.jQuery || window.Zepto)
}(), function (e, t, n) {
    "use strict";

    function r(e) {
        return function () {
            var t, n, r = arguments[0], i = "[" + (e ? e + ":" : "") + r + "] ", o = arguments[1], a = arguments,
                s = function (e) {
                    return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e
                };
            for (t = i + o.replace(/\{\d+\}/g, function (e) {
                var t, n = +e.slice(1, -1);
                return n + 2 < a.length ? (t = a[n + 2], "function" == typeof t ? t.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? B(t) : t) : e
            }), t = t + "\nhttp://errors.angularjs.org/1.2.20/" + (e ? e + "/" : "") + r, n = 2; n < arguments.length; n++) t = t + (2 == n ? "?" : "&") + "p" + (n - 2) + "=" + encodeURIComponent(s(arguments[n]));
            return new Error(t)
        }
    }

    function i(e) {
        if (null == e || k(e)) return !1;
        var t = e.length;
        return !(1 !== e.nodeType || !t) || (b(e) || Nn(e) || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t, n) {
        var r;
        if (e) if (C(e)) for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r); else if (e.forEach && e.forEach !== o) e.forEach(t, n); else if (i(e)) for (r = 0; r < e.length; r++) t.call(n, e[r], r); else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
        return e
    }

    function a(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(n);
        return t.sort()
    }

    function s(e, t, n) {
        for (var r = a(e), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
        return r
    }

    function u(e) {
        return function (t, n) {
            e(n, t)
        }
    }

    function c() {
        for (var e, t = An.length; t;) {
            if (t--, e = An[t].charCodeAt(0), 57 == e) return An[t] = "A", An.join("");
            if (90 != e) return An[t] = String.fromCharCode(e + 1), An.join("");
            An[t] = "0"
        }
        return An.unshift("0"), An.join("")
    }

    function l(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function f(e) {
        var t = e.$$hashKey;
        return o(arguments, function (t) {
            t !== e && o(t, function (t, n) {
                e[n] = t
            })
        }), l(e, t), e
    }

    function p(e) {
        return parseInt(e, 10)
    }

    function d(e, t) {
        return f(new (f(function () {
        }, {prototype: e})), t)
    }

    function h() {
    }

    function v(e) {
        return e
    }

    function g(e) {
        return function () {
            return e
        }
    }

    function m(e) {
        return "undefined" == typeof e
    }

    function y(e) {
        return "undefined" != typeof e
    }

    function $(e) {
        return null != e && "object" == typeof e
    }

    function b(e) {
        return "string" == typeof e
    }

    function x(e) {
        return "number" == typeof e
    }

    function w(e) {
        return "[object Date]" === kn.call(e)
    }

    function C(e) {
        return "function" == typeof e
    }

    function S(e) {
        return "[object RegExp]" === kn.call(e)
    }

    function k(e) {
        return e && e.document && e.location && e.alert && e.setInterval
    }

    function T(e) {
        return e && e.$evalAsync && e.$watch
    }

    function E(e) {
        return "[object File]" === kn.call(e)
    }

    function A(e) {
        return "[object Blob]" === kn.call(e)
    }

    function N(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function j(e, t, n) {
        var r = [];
        return o(e, function (e, i, o) {
            r.push(t.call(n, e, i, o))
        }), r
    }

    function D(e, t) {
        return O(e, t) != -1
    }

    function O(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0; n < e.length; n++) if (t === e[n]) return n;
        return -1
    }

    function M(e, t) {
        var n = O(e, t);
        return n >= 0 && e.splice(n, 1), t
    }

    function L(e, t, n, r) {
        if (k(e) || T(e)) throw Tn("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (t) {
            if (e === t) throw Tn("cpi", "Can't copy! Source and destination are identical.");
            if (n = n || [], r = r || [], $(e)) {
                var i = O(n, e);
                if (i !== -1) return r[i];
                n.push(e), r.push(t)
            }
            var a;
            if (Nn(e)) {
                t.length = 0;
                for (var s = 0; s < e.length; s++) a = L(e[s], null, n, r), $(e[s]) && (n.push(e[s]), r.push(a)), t.push(a)
            } else {
                var u = t.$$hashKey;
                o(t, function (e, n) {
                    delete t[n]
                });
                for (var c in e) a = L(e[c], null, n, r), $(e[c]) && (n.push(e[c]), r.push(a)), t[c] = a;
                l(t, u)
            }
        } else t = e, e && (Nn(e) ? t = L(e, [], n, r) : w(e) ? t = new Date(e.getTime()) : S(e) ? t = new RegExp(e.source) : $(e) && (t = L(e, {}, n, r)));
        return t
    }

    function P(e, t) {
        if (Nn(e)) {
            t = t || [];
            for (var n = 0; n < e.length; n++) t[n] = e[n]
        } else if ($(e)) {
            t = t || {};
            for (var r in e) !hn.call(e, r) || "$" === r.charAt(0) && "$" === r.charAt(1) || (t[r] = e[r])
        }
        return t || e
    }

    function H(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e !== e && t !== t) return !0;
        var r, i, o, a = typeof e, s = typeof t;
        if (a == s && "object" == a) {
            if (!Nn(e)) {
                if (w(e)) return w(t) && e.getTime() == t.getTime();
                if (S(e) && S(t)) return e.toString() == t.toString();
                if (T(e) || T(t) || k(e) || k(t) || Nn(t)) return !1;
                o = {};
                for (i in e) if ("$" !== i.charAt(0) && !C(e[i])) {
                    if (!H(e[i], t[i])) return !1;
                    o[i] = !0
                }
                for (i in t) if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && t[i] !== n && !C(t[i])) return !1;
                return !0
            }
            if (!Nn(t)) return !1;
            if ((r = e.length) == t.length) {
                for (i = 0; i < r; i++) if (!H(e[i], t[i])) return !1;
                return !0
            }
        }
        return !1
    }

    function F() {
        return t.securityPolicy && t.securityPolicy.isActive || t.querySelector && !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"))
    }

    function R(e, t, n) {
        return e.concat(Cn.call(t, n))
    }

    function q(e, t) {
        return Cn.call(e, t || 0)
    }

    function _(e, t) {
        var n = arguments.length > 2 ? q(arguments, 2) : [];
        return !C(t) || t instanceof RegExp ? t : n.length ? function () {
            return arguments.length ? t.apply(e, n.concat(Cn.call(arguments, 0))) : t.apply(e, n)
        } : function () {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function I(e, r) {
        var i = r;
        return "string" == typeof e && "$" === e.charAt(0) ? i = n : k(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : T(r) && (i = "$SCOPE"), i
    }

    function B(e, t) {
        return "undefined" == typeof e ? n : JSON.stringify(e, I, t ? "  " : null)
    }

    function z(e) {
        return b(e) ? JSON.parse(e) : e
    }

    function U(e) {
        if ("function" == typeof e) e = !0; else if (e && 0 !== e.length) {
            var t = dn("" + e);
            e = !("f" == t || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
        } else e = !1;
        return e
    }

    function W(e) {
        e = $n(e).clone();
        try {
            e.empty()
        } catch (t) {
        }
        var n = 3, r = $n("<div>").append(e).html();
        try {
            return e[0].nodeType === n ? dn(r) : r.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (e, t) {
                return "<" + dn(t)
            })
        } catch (t) {
            return dn(r)
        }
    }

    function V(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {
        }
    }

    function Q(e) {
        var t, n, r = {};
        return o((e || "").split("&"), function (e) {
            if (e && (t = e.split("="), n = V(t[0]), y(n))) {
                var i = !y(t[1]) || V(t[1]);
                hn.call(r, n) ? Nn(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
            }
        }), r
    }

    function X(e) {
        var t = [];
        return o(e, function (e, n) {
            Nn(e) ? o(e, function (e) {
                t.push(Y(n, !0) + (e === !0 ? "" : "=" + Y(e, !0)))
            }) : t.push(Y(n, !0) + (e === !0 ? "" : "=" + Y(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function J(e) {
        return Y(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Y(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
    }

    function G(e, n) {
        function r(e) {
            e && s.push(e)
        }

        var i, a, s = [e], u = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        o(u, function (n) {
            u[n] = !0, r(t.getElementById(n)), n = n.replace(":", "\\:"), e.querySelectorAll && (o(e.querySelectorAll("." + n), r), o(e.querySelectorAll("." + n + "\\:"), r), o(e.querySelectorAll("[" + n + "]"), r))
        }), o(s, function (e) {
            if (!i) {
                var t = " " + e.className + " ", n = c.exec(t);
                n ? (i = e, a = (n[2] || "").replace(/\s+/g, ",")) : o(e.attributes, function (t) {
                    !i && u[t.name] && (i = e, a = t.value)
                })
            }
        }), i && n(i, a ? [a] : [])
    }

    function K(n, r) {
        var i = function () {
            if (n = $n(n), n.injector()) {
                var e = n[0] === t ? "document" : W(n);
                throw Tn("btstrpd", "App Already Bootstrapped with this Element '{0}'", e)
            }
            r = r || [], r.unshift(["$provide", function (e) {
                e.value("$rootElement", n)
            }]), r.unshift("ng");
            var i = Me(r);
            return i.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (e, t, n, r, i) {
                e.$apply(function () {
                    t.data("$injector", r), n(t)(e)
                })
            }]), i
        }, a = /^NG_DEFER_BOOTSTRAP!/;
        return e && !a.test(e.name) ? i() : (e.name = e.name.replace(a, ""), void (En.resumeBootstrap = function (e) {
            o(e, function (e) {
                r.push(e)
            }), i()
        }))
    }

    function Z(e, t) {
        return t = t || "_", e.replace(Dn, function (e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function ee() {
        bn = e.jQuery, bn && bn.fn.on ? ($n = bn, f(bn.fn, {
            scope: Wn.scope,
            isolateScope: Wn.isolateScope,
            controller: Wn.controller,
            injector: Wn.injector,
            inheritedData: Wn.inheritedData
        }), le("remove", !0, !0, !1), le("empty", !1, !1, !1), le("html", !1, !1, !0)) : $n = he, En.element = $n
    }

    function te(e, t, n) {
        if (!e) throw Tn("areq", "Argument '{0}' is {1}", t || "?", n || "required");
        return e
    }

    function ne(e, t, n) {
        return n && Nn(e) && (e = e[e.length - 1]), te(C(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function re(e, t) {
        if ("hasOwnProperty" === e) throw Tn("badname", "hasOwnProperty is not a valid {0} name", t)
    }

    function ie(e, t, n) {
        if (!t) return e;
        for (var r, i = t.split("."), o = e, a = i.length, s = 0; s < a; s++) r = i[s], e && (e = (o = e)[r]);
        return !n && C(e) ? _(o, e) : e
    }

    function oe(e) {
        var t = e[0], n = e[e.length - 1];
        if (t === n) return $n(t);
        var r = t, i = [r];
        do {
            if (r = r.nextSibling, !r) break;
            i.push(r)
        } while (r !== n);
        return $n(i)
    }

    function ae(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n())
        }

        var n = r("$injector"), i = r("ng"), o = t(e, "angular", Object);
        return o.$$minErr = o.$$minErr || r, t(o, "module", function () {
            var e = {};
            return function (r, o, a) {
                var s = function (e, t) {
                    if ("hasOwnProperty" === e) throw i("badname", "hasOwnProperty is not a valid {0} name", t)
                };
                return s(r, "module"), o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function () {
                    function e(e, n, r) {
                        return function () {
                            return t[r || "push"]([e, n, arguments]), u
                        }
                    }

                    if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                    var t = [], i = [], s = e("$injector", "invoke"), u = {
                        _invokeQueue: t,
                        _runBlocks: i,
                        requires: o,
                        name: r,
                        provider: e("$provide", "provider"),
                        factory: e("$provide", "factory"),
                        service: e("$provide", "service"),
                        value: e("$provide", "value"),
                        constant: e("$provide", "constant", "unshift"),
                        animation: e("$animateProvider", "register"),
                        filter: e("$filterProvider", "register"),
                        controller: e("$controllerProvider", "register"),
                        directive: e("$compileProvider", "directive"),
                        config: s,
                        run: function (e) {
                            return i.push(e), this
                        }
                    };
                    return a && s(a), u
                })
            }
        })
    }

    function se(t) {
        f(t, {
            bootstrap: K,
            copy: L,
            extend: f,
            equals: H,
            element: $n,
            forEach: o,
            injector: Me,
            noop: h,
            bind: _,
            toJson: B,
            fromJson: z,
            identity: v,
            isUndefined: m,
            isDefined: y,
            isString: b,
            isFunction: C,
            isObject: $,
            isNumber: x,
            isElement: N,
            isArray: Nn,
            version: On,
            isDate: w,
            lowercase: dn,
            uppercase: vn,
            callbacks: {counter: 0},
            $$minErr: r,
            $$csp: F
        }), xn = ae(e);
        try {
            xn("ngLocale")
        } catch (n) {
            xn("ngLocale", []).provider("$locale", nt)
        }
        xn("ng", ["ngLocale"], ["$provide", function (e) {
            e.provider({$$sanitizeUri: At}), e.provider("$compile", _e).directive({
                a: Ar,
                input: qr,
                textarea: qr,
                form: Or,
                script: bi,
                select: Ci,
                style: ki,
                option: Si,
                ngBind: Gr,
                ngBindHtml: Zr,
                ngBindTemplate: Kr,
                ngClass: ei,
                ngClassEven: ni,
                ngClassOdd: ti,
                ngCloak: ri,
                ngController: ii,
                ngForm: Mr,
                ngHide: hi,
                ngIf: ai,
                ngInclude: si,
                ngInit: ci,
                ngNonBindable: li,
                ngPluralize: fi,
                ngRepeat: pi,
                ngShow: di,
                ngStyle: vi,
                ngSwitch: gi,
                ngSwitchWhen: mi,
                ngSwitchDefault: yi,
                ngOptions: wi,
                ngTransclude: $i,
                ngModel: Wr,
                ngList: Xr,
                ngChange: Vr,
                required: Qr,
                ngRequired: Qr,
                ngValue: Yr
            }).directive({ngInclude: ui}).directive(Nr).directive(oi), e.provider({
                $anchorScroll: Le,
                $animate: er,
                $browser: Fe,
                $cacheFactory: Re,
                $controller: ze,
                $document: Ue,
                $exceptionHandler: We,
                $filter: qt,
                $interpolate: et,
                $interval: tt,
                $http: Ye,
                $httpBackend: Ke,
                $location: vt,
                $log: gt,
                $parse: Ct,
                $rootScope: Et,
                $q: St,
                $sce: Mt,
                $sceDelegate: Ot,
                $sniffer: Lt,
                $templateCache: qe,
                $timeout: Pt,
                $window: Rt,
                $$rAF: Tt,
                $$asyncCallback: Pe
            })
        }])
    }

    function ue() {
        return ++Ln
    }

    function ce(e) {
        return e.replace(Fn, function (e, t, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(Rn, "Moz$1")
    }

    function le(e, t, n, r) {
        function i(e) {
            var i, a, s, u, c, l, f, p = n && e ? [this.filter(e)] : [this], d = t;
            if (!r || null != e) for (; p.length;) for (i = p.shift(), a = 0, s = i.length; a < s; a++) for (u = $n(i[a]), d ? u.triggerHandler("$destroy") : d = !d, c = 0, l = (f = u.children()).length; c < l; c++) p.push(bn(f[c]));
            return o.apply(this, arguments)
        }

        var o = bn.fn[e];
        o = o.$original || o, i.$original = o, bn.fn[e] = i
    }

    function fe(e) {
        return !In.test(e)
    }

    function pe(e, t) {
        var n, r, i, o, a, s, u = t.createDocumentFragment(), c = [];
        if (fe(e)) c.push(t.createTextNode(e)); else {
            for (n = u.appendChild(t.createElement("div")), r = (Bn.exec(e) || ["", ""])[1].toLowerCase(), i = Un[r] || Un._default, n.innerHTML = "<div>&#160;</div>" + i[1] + e.replace(zn, "<$1></$2>") + i[2], n.removeChild(n.firstChild), o = i[0]; o--;) n = n.lastChild;
            for (a = 0, s = n.childNodes.length; a < s; ++a) c.push(n.childNodes[a]);
            n = u.firstChild, n.textContent = ""
        }
        return u.textContent = "", u.innerHTML = "", c
    }

    function de(e, n) {
        n = n || t;
        var r;
        return (r = _n.exec(e)) ? [n.createElement(r[1])] : pe(e, n)
    }

    function he(e) {
        if (e instanceof he) return e;
        if (b(e) && (e = jn(e)), !(this instanceof he)) {
            if (b(e) && "<" != e.charAt(0)) throw qn("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new he(e)
        }
        if (b(e)) {
            Se(this, de(e));
            var n = $n(t.createDocumentFragment());
            n.append(this)
        } else Se(this, e)
    }

    function ve(e) {
        return e.cloneNode(!0)
    }

    function ge(e) {
        ye(e);
        for (var t = 0, n = e.childNodes || []; t < n.length; t++) ge(n[t])
    }

    function me(e, t, n, r) {
        if (y(r)) throw qn("offargs", "jqLite#off() does not support the `selector` argument");
        var i = $e(e, "events"), a = $e(e, "handle");
        a && (m(t) ? o(i, function (t, n) {
            Hn(e, n, t), delete i[n]
        }) : o(t.split(" "), function (t) {
            m(n) ? (Hn(e, t, i[t]), delete i[t]) : M(i[t] || [], n)
        }))
    }

    function ye(e, t) {
        var r = e.ng339, i = Mn[r];
        if (i) {
            if (t) return void delete Mn[r].data[t];
            i.handle && (i.events.$destroy && i.handle({}, "$destroy"), me(e)), delete Mn[r], e.ng339 = n
        }
    }

    function $e(e, t, n) {
        var r = e.ng339, i = Mn[r || -1];
        return y(n) ? (i || (e.ng339 = r = ue(), i = Mn[r] = {}), void (i[t] = n)) : i && i[t]
    }

    function be(e, t, n) {
        var r = $e(e, "data"), i = y(n), o = !i && y(t), a = o && !$(t);
        if (r || a || $e(e, "data", r = {}), i) r[t] = n; else {
            if (!o) return r;
            if (a) return r && r[t];
            f(r, t)
        }
    }

    function xe(e, t) {
        return !!e.getAttribute && (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
    }

    function we(e, t) {
        t && e.setAttribute && o(t.split(" "), function (t) {
            e.setAttribute("class", jn((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + jn(t) + " ", " ")))
        })
    }

    function Ce(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(t.split(" "), function (e) {
                e = jn(e), n.indexOf(" " + e + " ") === -1 && (n += e + " ")
            }), e.setAttribute("class", jn(n))
        }
    }

    function Se(e, t) {
        if (t) {
            t = t.nodeName || !y(t.length) || k(t) ? [t] : t;
            for (var n = 0; n < t.length; n++) e.push(t[n])
        }
    }

    function ke(e, t) {
        return Te(e, "$" + (t || "ngController") + "Controller")
    }

    function Te(e, t, r) {
        e = $n(e), 9 == e[0].nodeType && (e = e.find("html"));
        for (var i = Nn(t) ? t : [t]; e.length;) {
            for (var o = e[0], a = 0, s = i.length; a < s; a++) if ((r = e.data(i[a])) !== n) return r;
            e = $n(o.parentNode || 11 === o.nodeType && o.host)
        }
    }

    function Ee(e) {
        for (var t = 0, n = e.childNodes; t < n.length; t++) ge(n[t]);
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function Ae(e, t) {
        var n = Vn[t.toLowerCase()];
        return n && Qn[e.nodeName] && n
    }

    function Ne(e, n) {
        var r = function (r, i) {
            if (r.preventDefault || (r.preventDefault = function () {
                r.returnValue = !1
            }), r.stopPropagation || (r.stopPropagation = function () {
                r.cancelBubble = !0
            }), r.target || (r.target = r.srcElement || t), m(r.defaultPrevented)) {
                var a = r.preventDefault;
                r.preventDefault = function () {
                    r.defaultPrevented = !0, a.call(r)
                }, r.defaultPrevented = !1
            }
            r.isDefaultPrevented = function () {
                return r.defaultPrevented || r.returnValue === !1
            };
            var s = P(n[i || r.type] || []);
            o(s, function (t) {
                t.call(e, r)
            }), yn <= 8 ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
        };
        return r.elem = e, r
    }

    function je(e, t) {
        var r, i = typeof e;
        return "function" == i || "object" == i && null !== e ? "function" == typeof (r = e.$$hashKey) ? r = e.$$hashKey() : r === n && (r = e.$$hashKey = (t || c)()) : r = e, i + ":" + r
    }

    function De(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function () {
                return ++n
            }
        }
        o(e, this.put, this)
    }

    function Oe(e) {
        var t, n, r, i;
        return "function" == typeof e ? (t = e.$inject) || (t = [], e.length && (n = e.toString().replace(Gn, ""), r = n.match(Xn), o(r[1].split(Jn), function (e) {
            e.replace(Yn, function (e, n, r) {
                t.push(r)
            })
        })), e.$inject = t) : Nn(e) ? (i = e.length - 1, ne(e[i], "fn"), t = e.slice(0, i)) : ne(e, "fn", !0), t
    }

    function Me(e) {
        function t(e) {
            return function (t, n) {
                return $(t) ? void o(t, u(e)) : e(t, n)
            }
        }

        function n(e, t) {
            if (re(e, "service"), (C(t) || Nn(t)) && (t = x.instantiate(t)), !t.$get) throw Kn("pget", "Provider '{0}' must define $get factory method.", e);
            return y[e + d] = t
        }

        function r(e, t) {
            return n(e, {$get: t})
        }

        function i(e, t) {
            return r(e, ["$injector", function (e) {
                return e.instantiate(t)
            }])
        }

        function a(e, t) {
            return r(e, g(t))
        }

        function s(e, t) {
            re(e, "constant"), y[e] = t, w[e] = t
        }

        function c(e, t) {
            var n = x.get(e + d), r = n.$get;
            n.$get = function () {
                var e = S.invoke(r, n);
                return S.invoke(t, null, {$delegate: e})
            }
        }

        function l(e) {
            var t, n, r, i, a = [];
            return o(e, function (e) {
                if (!m.get(e)) {
                    m.put(e, !0);
                    try {
                        if (b(e)) for (t = xn(e), a = a.concat(l(t.requires)).concat(t._runBlocks), n = t._invokeQueue, r = 0, i = n.length; r < i; r++) {
                            var o = n[r], s = x.get(o[0]);
                            s[o[1]].apply(s, o[2])
                        } else C(e) ? a.push(x.invoke(e)) : Nn(e) ? a.push(x.invoke(e)) : ne(e, "module")
                    } catch (u) {
                        throw Nn(e) && (e = e[e.length - 1]), u.message && u.stack && u.stack.indexOf(u.message) == -1 && (u = u.message + "\n" + u.stack), Kn("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, u.stack || u.message || u)
                    }
                }
            }), a
        }

        function f(e, t) {
            function n(n) {
                if (e.hasOwnProperty(n)) {
                    if (e[n] === p) throw Kn("cdep", "Circular dependency found: {0}", n + " <- " + v.join(" <- "));
                    return e[n]
                }
                try {
                    return v.unshift(n), e[n] = p, e[n] = t(n)
                } catch (r) {
                    throw e[n] === p && delete e[n], r
                } finally {
                    v.shift()
                }
            }

            function r(e, t, r) {
                var i, o, a, s = [], u = Oe(e);
                for (o = 0, i = u.length; o < i; o++) {
                    if (a = u[o], "string" != typeof a) throw Kn("itkn", "Incorrect injection token! Expected service name as string, got {0}", a);
                    s.push(r && r.hasOwnProperty(a) ? r[a] : n(a))
                }
                return Nn(e) && (e = e[i]), e.apply(t, s)
            }

            function i(e, t) {
                var n, i, o = function () {
                };
                return o.prototype = (Nn(e) ? e[e.length - 1] : e).prototype, n = new o, i = r(e, n, t), $(i) || C(i) ? i : n
            }

            return {
                invoke: r, instantiate: i, get: n, annotate: Oe, has: function (t) {
                    return y.hasOwnProperty(t + d) || e.hasOwnProperty(t)
                }
            }
        }

        var p = {}, d = "Provider", v = [], m = new De([], (!0)),
            y = {$provide: {provider: t(n), factory: t(r), service: t(i), value: t(a), constant: t(s), decorator: c}},
            x = y.$injector = f(y, function () {
                throw Kn("unpr", "Unknown provider: {0}", v.join(" <- "))
            }), w = {}, S = w.$injector = f(w, function (e) {
                var t = x.get(e + d);
                return S.invoke(t.$get, t)
            });
        return o(l(e), function (e) {
            S.invoke(e || h)
        }), S
    }

    function Le() {
        var e = !0;
        this.disableAutoScrolling = function () {
            e = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (t, n, r) {
            function i(e) {
                var t = null;
                return o(e, function (e) {
                    t || "a" !== dn(e.nodeName) || (t = e)
                }), t
            }

            function a() {
                var e, r = n.hash();
                r ? (e = s.getElementById(r)) ? e.scrollIntoView() : (e = i(s.getElementsByName(r))) ? e.scrollIntoView() : "top" === r && t.scrollTo(0, 0) : t.scrollTo(0, 0)
            }

            var s = t.document;
            return e && r.$watch(function () {
                return n.hash()
            }, function () {
                r.$evalAsync(a)
            }), a
        }]
    }

    function Pe() {
        this.$get = ["$$rAF", "$timeout", function (e, t) {
            return e.supported ? function (t) {
                return e(t)
            } : function (e) {
                return t(e, 0, !1)
            }
        }]
    }

    function He(e, t, r, i) {
        function a(e) {
            try {
                e.apply(null, q(arguments, 1))
            } finally {
                if (y--, 0 === y) for (; $.length;) try {
                    $.pop()()
                } catch (t) {
                    r.error(t)
                }
            }
        }

        function s(e, t) {
            !function n() {
                o(w, function (e) {
                    e()
                }), x = t(n, e)
            }()
        }

        function u() {
            k = null, C != c.url() && (C = c.url(), o(T, function (e) {
                e(c.url())
            }))
        }

        var c = this, l = t[0], f = e.location, p = e.history, d = e.setTimeout, v = e.clearTimeout, g = {};
        c.isMock = !1;
        var y = 0, $ = [];
        c.$$completeOutstandingRequest = a, c.$$incOutstandingRequestCount = function () {
            y++
        }, c.notifyWhenNoOutstandingRequests = function (e) {
            o(w, function (e) {
                e()
            }), 0 === y ? e() : $.push(e)
        };
        var x, w = [];
        c.addPollFn = function (e) {
            return m(x) && s(100, d), w.push(e), e
        };
        var C = f.href, S = t.find("base"), k = null;
        c.url = function (t, n) {
            if (f !== e.location && (f = e.location), p !== e.history && (p = e.history), t) {
                if (C == t) return;
                return C = t, i.history ? n ? p.replaceState(null, "", t) : (p.pushState(null, "", t), S.attr("href", S.attr("href"))) : (k = t, n ? f.replace(t) : f.href = t), c
            }
            return k || f.href.replace(/%27/g, "'")
        };
        var T = [], E = !1;
        c.onUrlChange = function (t) {
            return E || (i.history && $n(e).on("popstate", u), i.hashchange ? $n(e).on("hashchange", u) : c.addPollFn(u), E = !0), T.push(t), t
        }, c.baseHref = function () {
            var e = S.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var A = {}, N = "", j = c.baseHref();
        c.cookies = function (e, t) {
            var i, o, a, s, u;
            if (!e) {
                if (l.cookie !== N) for (N = l.cookie, o = N.split("; "), A = {}, s = 0; s < o.length; s++) a = o[s], u = a.indexOf("="), u > 0 && (e = unescape(a.substring(0, u)), A[e] === n && (A[e] = unescape(a.substring(u + 1))));
                return A
            }
            t === n ? l.cookie = escape(e) + "=;path=" + j + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : b(t) && (i = (l.cookie = escape(e) + "=" + escape(t) + ";path=" + j).length + 1, i > 4096 && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
        }, c.defer = function (e, t) {
            var n;
            return y++, n = d(function () {
                delete g[n], a(e)
            }, t || 0), g[n] = !0, n
        }, c.defer.cancel = function (e) {
            return !!g[e] && (delete g[e], v(e), a(h), !0)
        }
    }

    function Fe() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (e, t, n, r) {
            return new He(e, r, t, n)
        }]
    }

    function Re() {
        this.$get = function () {
            function e(e, n) {
                function i(e) {
                    e != p && (d ? d == e && (d = e.n) : d = e, o(e.n, e.p), o(e, p), p = e, p.n = null)
                }

                function o(e, t) {
                    e != t && (e && (e.p = t), t && (t.n = e))
                }

                if (e in t) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                var a = 0, s = f({}, n, {id: e}), u = {}, c = n && n.capacity || Number.MAX_VALUE, l = {}, p = null,
                    d = null;
                return t[e] = {
                    put: function (e, t) {
                        if (c < Number.MAX_VALUE) {
                            var n = l[e] || (l[e] = {key: e});
                            i(n)
                        }
                        if (!m(t)) return e in u || a++, u[e] = t, a > c && this.remove(d.key), t
                    }, get: function (e) {
                        if (c < Number.MAX_VALUE) {
                            var t = l[e];
                            if (!t) return;
                            i(t)
                        }
                        return u[e]
                    }, remove: function (e) {
                        if (c < Number.MAX_VALUE) {
                            var t = l[e];
                            if (!t) return;
                            t == p && (p = t.p), t == d && (d = t.n), o(t.n, t.p), delete l[e]
                        }
                        delete u[e], a--
                    }, removeAll: function () {
                        u = {}, a = 0, l = {}, p = d = null
                    }, destroy: function () {
                        u = null, s = null, l = null, delete t[e]
                    }, info: function () {
                        return f({}, s, {size: a})
                    }
                }
            }

            var t = {};
            return e.info = function () {
                var e = {};
                return o(t, function (t, n) {
                    e[n] = t.info()
                }), e
            }, e.get = function (e) {
                return t[e]
            }, e
        }
    }

    function qe() {
        this.$get = ["$cacheFactory", function (e) {
            return e("templates")
        }]
    }

    function _e(e, r) {
        var i = {}, a = "Directive", s = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, c = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
            l = /^(on[a-z]+|formaction)$/;
        this.directive = function p(t, n) {
            return re(t, "directive"), b(t) ? (te(n, "directiveFactory"), i.hasOwnProperty(t) || (i[t] = [], e.factory(t + a, ["$injector", "$exceptionHandler", function (e, n) {
                var r = [];
                return o(i[t], function (i, o) {
                    try {
                        var a = e.invoke(i);
                        C(a) ? a = {compile: g(a)} : !a.compile && a.link && (a.compile = g(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || t, a.require = a.require || a.controller && a.name, a.restrict = a.restrict || "A", r.push(a)
                    } catch (s) {
                        n(s)
                    }
                }), r
            }])), i[t].push(n)) : o(t, u(p)), this
        }, this.aHrefSanitizationWhitelist = function (e) {
            return y(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (e) {
            return y(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (e, r, u, p, h, g, m, y, x, w, S, k) {
            function T(e, t, n, r, i) {
                e instanceof $n || (e = $n(e)), o(e, function (t, n) {
                    3 == t.nodeType && t.nodeValue.match(/\S+/) && (e[n] = t = $n(t).wrap("<span></span>").parent()[0])
                });
                var a = A(e, t, e, n, r, i);
                return E(e, "ng-scope"), function (t, n, r, i) {
                    te(t, "scope");
                    var s = n ? Wn.clone.call(e) : e;
                    o(r, function (e, t) {
                        s.data("$" + t + "Controller", e)
                    });
                    for (var u = 0, c = s.length; u < c; u++) {
                        var l = s[u], f = l.nodeType;
                        1 !== f && 9 !== f || s.eq(u).data("$scope", t)
                    }
                    return n && n(s, t), a && a(t, s, s, i), s
                }
            }

            function E(e, t) {
                try {
                    e.addClass(t)
                } catch (n) {
                }
            }

            function A(e, t, r, i, o, a) {
                function s(e, r, i, o) {
                    var a, s, u, c, l, f, p, d, v, g = r.length, m = new Array(g);
                    for (f = 0; f < g; f++) m[f] = r[f];
                    for (f = 0, d = 0, p = h.length; f < p; d++) u = m[d], a = h[f++], s = h[f++], c = $n(u), a ? (a.scope ? (l = e.$new(), c.data("$scope", l)) : l = e, v = a.transcludeOnThisElement ? N(e, a.transclude, o) : !a.templateOnThisElement && o ? o : !o && t ? N(e, t) : null, a(s, l, u, i, v)) : s && s(e, u.childNodes, n, o)
                }

                for (var u, c, l, f, p, d, h = [], v = 0; v < e.length; v++) u = new J, c = j(e[v], [], u, 0 === v ? i : n, o), l = c.length ? M(c, e[v], u, t, r, null, [], [], a) : null, l && l.scope && E($n(e[v]), "ng-scope"), p = l && l.terminal || !(f = e[v].childNodes) || !f.length ? null : A(f, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : t), h.push(l, p), d = d || l || p, a = null;
                return d ? s : null
            }

            function N(e, t, n) {
                var r = function (r, i, o) {
                    var a = !1;
                    r || (r = e.$new(), r.$$transcluded = !0, a = !0);
                    var s = t(r, i, o, n);
                    return a && s.on("$destroy", function () {
                        r.$destroy()
                    }), s
                };
                return r
            }

            function j(e, t, n, r, i) {
                var o, a, u = e.nodeType, l = n.$attr;
                switch (u) {
                    case 1:
                        F(t, Ie(wn(e).toLowerCase()), "E", r, i);
                        for (var f, p, d, h, v, g, m = e.attributes, y = 0, $ = m && m.length; y < $; y++) {
                            var x = !1, w = !1;
                            if (f = m[y], !yn || yn >= 8 || f.specified) {
                                p = f.name, v = jn(f.value), h = Ie(p), (g = ee.test(h)) && (p = Z(h.substr(6), "-"));
                                var C = h.replace(/(Start|End)$/, "");
                                h === C + "Start" && (x = p, w = p.substr(0, p.length - 5) + "end", p = p.substr(0, p.length - 6)), d = Ie(p.toLowerCase()), l[d] = p, !g && n.hasOwnProperty(d) || (n[d] = v, Ae(e, d) && (n[d] = !0)), V(e, t, v, d), F(t, d, "A", r, i, x, w)
                            }
                        }
                        if (a = e.className, b(a) && "" !== a) for (; o = c.exec(a);) d = Ie(o[2]), F(t, d, "C", r, i) && (n[d] = jn(o[3])), a = a.substr(o.index + o[0].length);
                        break;
                    case 3:
                        z(t, e.nodeValue);
                        break;
                    case 8:
                        try {
                            o = s.exec(e.nodeValue), o && (d = Ie(o[1]), F(t, d, "M", r, i) && (n[d] = jn(o[2])))
                        } catch (S) {
                        }
                }
                return t.sort(I), t
            }

            function D(e, t, n) {
                var r = [], i = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e) throw tr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                        1 == e.nodeType && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                    } while (i > 0)
                } else r.push(e);
                return $n(r)
            }

            function O(e, t, n) {
                return function (r, i, o, a, s) {
                    return i = D(i[0], t, n), e(r, i, o, a, s)
                }
            }

            function M(e, i, a, s, c, l, f, p, d) {
                function h(e, t, n, r) {
                    e && (n && (e = O(e, n, r)), e.require = w.require, e.directiveName = S, (I === w || w.$$isolateScope) && (e = X(e, {isolateScope: !0})), f.push(e)), t && (n && (t = O(t, n, r)), t.require = w.require, t.directiveName = S, (I === w || w.$$isolateScope) && (t = X(t, {isolateScope: !0})), p.push(t))
                }

                function v(e, t, n, r) {
                    var i, a = "data", s = !1;
                    if (b(t)) {
                        for (; "^" == (i = t.charAt(0)) || "?" == i;) t = t.substr(1), "^" == i && (a = "inheritedData"), s = s || "?" == i;
                        if (i = null, r && "data" === a && (i = r[t]), i = i || n[a]("$" + t + "Controller"), !i && !s) throw tr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", t, e);
                        return i
                    }
                    return Nn(t) && (i = [], o(t, function (t) {
                        i.push(v(e, t, n, r))
                    })), i
                }

                function y(e, t, s, c, l) {
                    function d(e, t) {
                        var r;
                        return arguments.length < 2 && (t = e, e = n), G && (r = k), l(e, t, r)
                    }

                    var h, y, $, b, x, w, C, S, k = {};
                    if (h = i === s ? a : P(a, new J($n(s), a.$attr)), y = h.$$element, I) {
                        var T = /^\s*([@=&])(\??)\s*(\w*)\s*$/, A = $n(s);
                        C = t.$new(!0), !z || z !== I && z !== I.$$originalDirective ? A.data("$isolateScopeNoTemplate", C) : A.data("$isolateScope", C), E(A, "ng-isolate-scope"), o(I.scope, function (e, n) {
                            var i, o, a, s, u = e.match(T) || [], c = u[3] || n, l = "?" == u[2], f = u[1];
                            switch (C.$$isolateBindings[n] = f + c, f) {
                                case"@":
                                    h.$observe(c, function (e) {
                                        C[n] = e
                                    }), h.$$observers[c].$$scope = t, h[c] && (C[n] = r(h[c])(t));
                                    break;
                                case"=":
                                    if (l && !h[c]) return;
                                    o = g(h[c]), s = o.literal ? H : function (e, t) {
                                        return e === t
                                    }, a = o.assign || function () {
                                        throw i = C[n] = o(t), tr("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", h[c], I.name)
                                    }, i = C[n] = o(t), C.$watch(function () {
                                        var e = o(t);
                                        return s(e, C[n]) || (s(e, i) ? a(t, e = C[n]) : C[n] = e), i = e
                                    }, null, o.literal);
                                    break;
                                case"&":
                                    o = g(h[c]), C[n] = function (e) {
                                        return o(t, e)
                                    };
                                    break;
                                default:
                                    throw tr("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", I.name, n, e)
                            }
                        })
                    }
                    for (S = l && d, F && o(F, function (e) {
                        var n,
                            r = {$scope: e === I || e.$$isolateScope ? C : t, $element: y, $attrs: h, $transclude: S};
                        w = e.controller, "@" == w && (w = h[e.name]), n = m(w, r), k[e.name] = n, G || y.data("$" + e.name + "Controller", n), e.controllerAs && (r.$scope[e.controllerAs] = n)
                    }), $ = 0, b = f.length; $ < b; $++) try {
                        x = f[$], x(x.isolateScope ? C : t, y, h, x.require && v(x.directiveName, x.require, y, k), S)
                    } catch (N) {
                        u(N, W(y))
                    }
                    var j = t;
                    for (I && (I.template || null === I.templateUrl) && (j = C), e && e(j, s.childNodes, n, l), $ = p.length - 1; $ >= 0; $--) try {
                        x = p[$], x(x.isolateScope ? C : t, y, h, x.require && v(x.directiveName, x.require, y, k), S)
                    } catch (N) {
                        u(N, W(y))
                    }
                }

                d = d || {};
                for (var x, w, S, k, A, N, M = -Number.MAX_VALUE, F = d.controllerDirectives, I = d.newIsolateScopeDirective, z = d.templateDirective, U = d.nonTlbTranscludeDirective, V = !1, Y = !1, G = d.hasElementTranscludeDirective, Z = a.$$element = $n(i), ee = l, te = s, ne = 0, re = e.length; ne < re; ne++) {
                    w = e[ne];
                    var ie = w.$$start, oe = w.$$end;
                    if (ie && (Z = D(i, ie, oe)), k = n, M > w.priority) break;
                    if ((N = w.scope) && (x = x || w, w.templateUrl || (B("new/isolated scope", I, w, Z), $(N) && (I = w))), S = w.name, !w.templateUrl && w.controller && (N = w.controller, F = F || {}, B("'" + S + "' controller", F[S], w, Z), F[S] = w), (N = w.transclude) && (V = !0, w.$$tlb || (B("transclusion", U, w, Z), U = w), "element" == N ? (G = !0, M = w.priority, k = D(i, ie, oe), Z = a.$$element = $n(t.createComment(" " + S + ": " + a[S] + " ")), i = Z[0], Q(c, $n(q(k)), i), te = T(k, s, M, ee && ee.name, {nonTlbTranscludeDirective: U})) : (k = $n(ve(i)).contents(), Z.empty(), te = T(k, s))), w.template) if (Y = !0, B("template", z, w, Z), z = w, N = C(w.template) ? w.template(Z, a) : w.template, N = K(N), w.replace) {
                        if (ee = w, k = fe(N) ? [] : $n(jn(N)), i = k[0], 1 != k.length || 1 !== i.nodeType) throw tr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", S, "");
                        Q(c, Z, i);
                        var ae = {$attr: {}}, se = j(i, [], ae), ue = e.splice(ne + 1, e.length - (ne + 1));
                        I && L(se), e = e.concat(se).concat(ue), R(a, ae), re = e.length
                    } else Z.html(N);
                    if (w.templateUrl) Y = !0, B("template", z, w, Z), z = w, w.replace && (ee = w), y = _(e.splice(ne, e.length - ne), Z, a, c, V && te, f, p, {
                        controllerDirectives: F,
                        newIsolateScopeDirective: I,
                        templateDirective: z,
                        nonTlbTranscludeDirective: U
                    }), re = e.length; else if (w.compile) try {
                        A = w.compile(Z, a, te), C(A) ? h(null, A, ie, oe) : A && h(A.pre, A.post, ie, oe)
                    } catch (ce) {
                        u(ce, W(Z))
                    }
                    w.terminal && (y.terminal = !0, M = Math.max(M, w.priority))
                }
                return y.scope = x && x.scope === !0, y.transcludeOnThisElement = V, y.templateOnThisElement = Y, y.transclude = te, d.hasElementTranscludeDirective = G, y
            }

            function L(e) {
                for (var t = 0, n = e.length; t < n; t++) e[t] = d(e[t], {$$isolateScope: !0})
            }

            function F(t, r, o, s, c, l, f) {
                if (r === c) return null;
                var p = null;
                if (i.hasOwnProperty(r)) for (var h, v = e.get(r + a), g = 0, m = v.length; g < m; g++) try {
                    h = v[g], (s === n || s > h.priority) && h.restrict.indexOf(o) != -1 && (l && (h = d(h, {
                        $$start: l,
                        $$end: f
                    })), t.push(h), p = h)
                } catch (y) {
                    u(y)
                }
                return p
            }

            function R(e, t) {
                var n = t.$attr, r = e.$attr, i = e.$$element;
                o(e, function (r, i) {
                    "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
                }), o(t, function (t, o) {
                    "class" == o ? (E(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, r[o] = n[o])
                })
            }

            function _(e, t, n, r, i, a, s, u) {
                var c, l, d = [], v = t[0], g = e.shift(),
                    m = f({}, g, {templateUrl: null, transclude: null, replace: null, $$originalDirective: g}),
                    y = C(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl;
                return t.empty(), p.get(w.getTrustedResourceUrl(y), {cache: h}).success(function (f) {
                    var p, h, b, x;
                    if (f = K(f), g.replace) {
                        if (b = fe(f) ? [] : $n(jn(f)), p = b[0], 1 != b.length || 1 !== p.nodeType) throw tr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, y);
                        h = {$attr: {}}, Q(r, t, p);
                        var w = j(p, [], h);
                        $(g.scope) && L(w), e = w.concat(e), R(n, h)
                    } else p = v, t.html(f);
                    for (e.unshift(m), c = M(e, p, n, i, t, g, a, s, u), o(r, function (e, n) {
                        e == p && (r[n] = t[0])
                    }), l = A(t[0].childNodes, i); d.length;) {
                        var C = d.shift(), S = d.shift(), k = d.shift(), T = d.shift(), D = t[0];
                        if (S !== v) {
                            var O = S.className;
                            u.hasElementTranscludeDirective && g.replace || (D = ve(p)), Q(k, $n(S), D), E($n(D), O)
                        }
                        x = c.transcludeOnThisElement ? N(C, c.transclude, T) : T, c(l, C, D, r, x)
                    }
                    d = null
                }).error(function (e, t, n, r) {
                    throw tr("tpload", "Failed to load template: {0}", r.url)
                }), function (e, t, n, r, i) {
                    var o = i;
                    d ? (d.push(t), d.push(n), d.push(r), d.push(o)) : (c.transcludeOnThisElement && (o = N(t, c.transclude, i)), c(l, t, n, r, o))
                }
            }

            function I(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function B(e, t, n, r) {
                if (t) throw tr("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", t.name, n.name, e, W(r))
            }

            function z(e, t) {
                var n = r(t, !0);
                n && e.push({
                    priority: 0, compile: function (e) {
                        var t = e.parent(), r = t.length;
                        return r && E(e.parent(), "ng-binding"), function (e, t) {
                            var i = t.parent(), o = i.data("$binding") || [];
                            o.push(n), i.data("$binding", o), r || E(i, "ng-binding"), e.$watch(n, function (e) {
                                t[0].nodeValue = e
                            })
                        }
                    }
                })
            }

            function U(e, t) {
                if ("srcdoc" == t) return w.HTML;
                var n = wn(e);
                return "xlinkHref" == t || "FORM" == n && "action" == t || "IMG" != n && ("src" == t || "ngSrc" == t) ? w.RESOURCE_URL : void 0
            }

            function V(e, t, n, i) {
                var o = r(n, !0);
                if (o) {
                    if ("multiple" === i && "SELECT" === wn(e)) throw tr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", W(e));
                    t.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (t, n, a) {
                                    var s = a.$$observers || (a.$$observers = {});
                                    if (l.test(i)) throw tr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    o = r(a[i], !0, U(e, i)), o && (a[i] = o(t), (s[i] || (s[i] = [])).$$inter = !0, (a.$$observers && a.$$observers[i].$$scope || t).$watch(o, function (e, t) {
                                        "class" === i && e != t ? a.$updateClass(e, t) : a.$set(i, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function Q(e, n, r) {
                var i, o, a = n[0], s = n.length, u = a.parentNode;
                if (e) for (i = 0, o = e.length; i < o; i++) if (e[i] == a) {
                    e[i++] = r;
                    for (var c = i, l = c + s - 1, f = e.length; c < f; c++, l++) l < f ? e[c] = e[l] : delete e[c];
                    e.length -= s - 1;
                    break
                }
                u && u.replaceChild(r, a);
                var p = t.createDocumentFragment();
                p.appendChild(a), r[$n.expando] = a[$n.expando];
                for (var d = 1, h = n.length; d < h; d++) {
                    var v = n[d];
                    $n(v).remove(), p.appendChild(v), delete n[d]
                }
                n[0] = r, n.length = 1
            }

            function X(e, t) {
                return f(function () {
                    return e.apply(null, arguments)
                }, e, t)
            }

            var J = function (e, t) {
                this.$$element = e, this.$attr = t || {}
            };
            J.prototype = {
                $normalize: Ie, $addClass: function (e) {
                    e && e.length > 0 && S.addClass(this.$$element, e)
                }, $removeClass: function (e) {
                    e && e.length > 0 && S.removeClass(this.$$element, e)
                }, $updateClass: function (e, t) {
                    var n = Be(e, t), r = Be(t, e);
                    0 === n.length ? S.removeClass(this.$$element, r) : 0 === r.length ? S.addClass(this.$$element, n) : S.setClass(this.$$element, n, r)
                }, $set: function (e, t, r, i) {
                    var a, s = Ae(this.$$element[0], e);
                    s && (this.$$element.prop(e, t), i = s), this[e] = t, i ? this.$attr[e] = i : (i = this.$attr[e], i || (this.$attr[e] = i = Z(e, "-"))), a = wn(this.$$element), ("A" === a && "href" === e || "IMG" === a && "src" === e) && (this[e] = t = k(t, "src" === e)), r !== !1 && (null === t || t === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, t));
                    var c = this.$$observers;
                    c && o(c[e], function (e) {
                        try {
                            e(t)
                        } catch (n) {
                            u(n)
                        }
                    })
                }, $observe: function (e, t) {
                    var n = this, r = n.$$observers || (n.$$observers = {}), i = r[e] || (r[e] = []);
                    return i.push(t), y.$evalAsync(function () {
                        i.$$inter || t(n[e])
                    }), t
                }
            };
            var Y = r.startSymbol(), G = r.endSymbol(), K = "{{" == Y || "}}" == G ? v : function (e) {
                return e.replace(/\{\{/g, Y).replace(/}}/g, G)
            }, ee = /^ngAttr[A-Z]/;
            return T
        }]
    }

    function Ie(e) {
        return ce(e.replace(nr, ""))
    }

    function Be(e, t) {
        var n = "", r = e.split(/\s+/), i = t.split(/\s+/);
        e:for (var o = 0; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++) if (a == i[s]) continue e;
            n += (n.length > 0 ? " " : "") + a
        }
        return n
    }

    function ze() {
        var e = {}, t = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (t, n) {
            re(t, "controller"), $(t) ? f(e, t) : e[t] = n
        }, this.$get = ["$injector", "$window", function (n, i) {
            return function (o, a) {
                var s, u, c, l;
                if (b(o) && (u = o.match(t), c = u[1], l = u[3], o = e.hasOwnProperty(c) ? e[c] : ie(a.$scope, c, !0) || ie(i, c, !0), ne(o, c, !0)), s = n.instantiate(o, a), l) {
                    if (!a || "object" != typeof a.$scope) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", c || o.name, l);
                    a.$scope[l] = s
                }
                return s
            }
        }]
    }

    function Ue() {
        this.$get = ["$window", function (e) {
            return $n(e.document)
        }]
    }

    function We() {
        this.$get = ["$log", function (e) {
            return function (t, n) {
                e.error.apply(e, arguments)
            }
        }]
    }

    function Ve(e) {
        var t, n, r, i = {};
        return e ? (o(e.split("\n"), function (e) {
            r = e.indexOf(":"), t = dn(jn(e.substr(0, r))), n = jn(e.substr(r + 1)), t && (i[t] ? i[t] += ", " + n : i[t] = n)
        }), i) : i
    }

    function Qe(e) {
        var t = $(e) ? e : n;
        return function (n) {
            return t || (t = Ve(e)), n ? t[dn(n)] || null : t
        }
    }

    function Xe(e, t, n) {
        return C(n) ? n(e, t) : (o(n, function (n) {
            e = n(e, t)
        }), e)
    }

    function Je(e) {
        return 200 <= e && e < 300
    }

    function Ye() {
        var e = /^\s*(\[|\{[^\{])/, t = /[\}\]]\s*$/, r = /^\)\]\}',?\n/,
            i = {"Content-Type": "application/json;charset=utf-8"}, a = this.defaults = {
                transformResponse: [function (n) {
                    return b(n) && (n = n.replace(r, ""), e.test(n) && t.test(n) && (n = z(n))), n
                }],
                transformRequest: [function (e) {
                    return !$(e) || E(e) || A(e) ? e : B(e)
                }],
                headers: {common: {Accept: "application/json, text/plain, */*"}, post: P(i), put: P(i), patch: P(i)},
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            }, u = this.interceptors = [], c = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, t, r, i, l, p) {
            function d(e) {
                function t(e) {
                    var t = f({}, e, {data: Xe(e.data, e.headers, i.transformResponse)});
                    return Je(e.status) ? t : l.reject(t)
                }

                function r(e) {
                    function t(e) {
                        var t;
                        o(e, function (n, r) {
                            C(n) && (t = n(), null != t ? e[r] = t : delete e[r])
                        })
                    }

                    var n, r, i, s = a.headers, u = f({}, e.headers);
                    s = f({}, s.common, s[dn(e.method)]);
                    e:for (n in s) {
                        r = dn(n);
                        for (i in u) if (dn(i) === r) continue e;
                        u[n] = s[n]
                    }
                    return t(u), u
                }

                var i = {method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse},
                    s = r(e);
                f(i, e), i.headers = s, i.method = vn(i.method);
                var u = function (e) {
                    s = e.headers;
                    var n = Xe(e.data, Qe(s), e.transformRequest);
                    return m(n) && o(s, function (e, t) {
                        "content-type" === dn(t) && delete s[t]
                    }), m(e.withCredentials) && !m(a.withCredentials) && (e.withCredentials = a.withCredentials), g(e, n, s).then(t, t)
                }, c = [u, n], p = l.when(i);
                for (o(S, function (e) {
                    (e.request || e.requestError) && c.unshift(e.request, e.requestError), (e.response || e.responseError) && c.push(e.response, e.responseError)
                }); c.length;) {
                    var d = c.shift(), h = c.shift();
                    p = p.then(d, h)
                }
                return p.success = function (e) {
                    return p.then(function (t) {
                        e(t.data, t.status, t.headers, i)
                    }), p
                }, p.error = function (e) {
                    return p.then(null, function (t) {
                        e(t.data, t.status, t.headers, i)
                    }), p
                }, p
            }

            function h(e) {
                o(arguments, function (e) {
                    d[e] = function (t, n) {
                        return d(f(n || {}, {method: e, url: t}))
                    }
                })
            }

            function v(e) {
                o(arguments, function (e) {
                    d[e] = function (t, n, r) {
                        return d(f(r || {}, {method: e, url: t, data: n}))
                    }
                })
            }

            function g(r, o, s) {
                function u(e, t, n, r) {
                    p && (Je(e) ? p.put(b, [e, t, Ve(n), r]) : p.remove(b)), c(t, e, n, r), i.$$phase || i.$apply()
                }

                function c(e, t, n, i) {
                    t = Math.max(t, 0), (Je(t) ? v.resolve : v.reject)({
                        data: e,
                        status: t,
                        headers: Qe(n),
                        config: r,
                        statusText: i
                    })
                }

                function f() {
                    var e = O(d.pendingRequests, r);
                    e !== -1 && d.pendingRequests.splice(e, 1)
                }

                var p, h, v = l.defer(), g = v.promise, b = x(r.url, r.params);
                if (d.pendingRequests.push(r), g.then(f, f), (r.cache || a.cache) && r.cache !== !1 && "GET" == r.method && (p = $(r.cache) ? r.cache : $(a.cache) ? a.cache : w), p) if (h = p.get(b), y(h)) {
                    if (h.then) return h.then(f, f), h;
                    Nn(h) ? c(h[1], h[0], P(h[2]), h[3]) : c(h, 200, {}, "OK")
                } else p.put(b, g);
                if (m(h)) {
                    var C = Ft(r.url) ? t.cookies()[r.xsrfCookieName || a.xsrfCookieName] : n;
                    C && (s[r.xsrfHeaderName || a.xsrfHeaderName] = C), e(r.method, b, o, u, s, r.timeout, r.withCredentials, r.responseType)
                }
                return g
            }

            function x(e, t) {
                if (!t) return e;
                var n = [];
                return s(t, function (e, t) {
                    null === e || m(e) || (Nn(e) || (e = [e]), o(e, function (e) {
                        $(e) && (e = B(e)), n.push(Y(t) + "=" + Y(e))
                    }))
                }), n.length > 0 && (e += (e.indexOf("?") == -1 ? "?" : "&") + n.join("&")), e
            }

            var w = r("$http"), S = [];
            return o(u, function (e) {
                S.unshift(b(e) ? p.get(e) : p.invoke(e))
            }), o(c, function (e, t) {
                var n = b(e) ? p.get(e) : p.invoke(e);
                S.splice(t, 0, {
                    response: function (e) {
                        return n(l.when(e))
                    }, responseError: function (e) {
                        return n(l.reject(e))
                    }
                })
            }), d.pendingRequests = [], h("get", "delete", "head", "jsonp"), v("post", "put"), d.defaults = a, d
        }]
    }

    function Ge(t) {
        if (yn <= 8 && (!t.match(/^(get|post|head|put|delete|options)$/i) || !e.XMLHttpRequest)) return new e.ActiveXObject("Microsoft.XMLHTTP");
        if (e.XMLHttpRequest) return new e.XMLHttpRequest;
        throw r("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
    }

    function Ke() {
        this.$get = ["$browser", "$window", "$document", function (e, t, n) {
            return Ze(e, Ge, e.defer, t.angular.callbacks, n[0])
        }]
    }

    function Ze(e, t, n, r, i) {
        function a(e, t, n) {
            var o = i.createElement("script"), a = null;
            return o.type = "text/javascript", o.src = e, o.async = !0, a = function (e) {
                Hn(o, "load", a), Hn(o, "error", a), i.body.removeChild(o), o = null;
                var s = -1, u = "unknown";
                e && ("load" !== e.type || r[t].called || (e = {type: "error"}), u = e.type, s = "error" === e.type ? 404 : 200), n && n(s, u)
            }, Pn(o, "load", a), Pn(o, "error", a), yn <= 8 && (o.onreadystatechange = function () {
                b(o.readyState) && /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null, a({type: "load"}))
            }), i.body.appendChild(o), a
        }

        var s = -1;
        return function (i, u, c, l, f, p, d, v) {
            function g() {
                $ = s, x && x(), w && w.abort()
            }

            function m(t, r, i, o, a) {
                S && n.cancel(S), x = w = null, 0 === r && (r = i ? 200 : "file" == Ht(u).protocol ? 404 : 0), r = 1223 === r ? 204 : r, a = a || "", t(r, i, o, a), e.$$completeOutstandingRequest(h)
            }

            var $;
            if (e.$$incOutstandingRequestCount(), u = u || e.url(), "jsonp" == dn(i)) {
                var b = "_" + (r.counter++).toString(36);
                r[b] = function (e) {
                    r[b].data = e, r[b].called = !0
                };
                var x = a(u.replace("JSON_CALLBACK", "angular.callbacks." + b), b, function (e, t) {
                    m(l, e, r[b].data, "", t), r[b] = h
                })
            } else {
                var w = t(i);
                if (w.open(i, u, !0), o(f, function (e, t) {
                    y(e) && w.setRequestHeader(t, e)
                }), w.onreadystatechange = function () {
                    if (w && 4 == w.readyState) {
                        var e = null, t = null, n = "";
                        $ !== s && (e = w.getAllResponseHeaders(), t = "response" in w ? w.response : w.responseText), $ === s && yn < 10 || (n = w.statusText), m(l, $ || w.status, t, e, n)
                    }
                }, d && (w.withCredentials = !0), v) try {
                    w.responseType = v
                } catch (C) {
                    if ("json" !== v) throw C
                }
                w.send(c || null)
            }
            if (p > 0) var S = n(g, p); else p && p.then && p.then(g)
        }
    }

    function et() {
        var e = "{{", t = "}}";
        this.startSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.endSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
            function o(o, u, c) {
                for (var l, f, p, d, h = 0, v = [], g = o.length, m = !1, y = []; h < g;) (l = o.indexOf(e, h)) != -1 && (f = o.indexOf(t, l + a)) != -1 ? (h != l && v.push(o.substring(h, l)), v.push(p = n(d = o.substring(l + a, f))), p.exp = d, h = f + s, m = !0) : (h != g && v.push(o.substring(h)), h = g);
                if ((g = v.length) || (v.push(""), g = 1), c && v.length > 1) throw rr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                if (!u || m) return y.length = g, p = function (e) {
                    try {
                        for (var t, n = 0, a = g; n < a; n++) {
                            if ("function" == typeof (t = v[n])) if (t = t(e), t = c ? i.getTrusted(c, t) : i.valueOf(t), null == t) t = ""; else switch (typeof t) {
                                case"string":
                                    break;
                                case"number":
                                    t = "" + t;
                                    break;
                                default:
                                    t = B(t)
                            }
                            y[n] = t
                        }
                        return y.join("")
                    } catch (s) {
                        var u = rr("interr", "Can't interpolate: {0}\n{1}", o, s.toString());
                        r(u)
                    }
                }, p.exp = o, p.parts = v, p
            }

            var a = e.length, s = t.length;
            return o.startSymbol = function () {
                return e
            }, o.endSymbol = function () {
                return t
            }, o
        }]
    }

    function tt() {
        this.$get = ["$rootScope", "$window", "$q", function (e, t, n) {
            function r(r, o, a, s) {
                var u = t.setInterval, c = t.clearInterval, l = n.defer(), f = l.promise, p = 0, d = y(s) && !s;
                return a = y(a) ? a : 0, f.then(null, null, r), f.$$intervalId = u(function () {
                    l.notify(p++), a > 0 && p >= a && (l.resolve(p), c(f.$$intervalId), delete i[f.$$intervalId]), d || e.$apply()
                }, o), i[f.$$intervalId] = l, f
            }

            var i = {};
            return r.cancel = function (e) {
                return !!(e && e.$$intervalId in i) && (i[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete i[e.$$intervalId], !0)
            }, r
        }]
    }

    function nt() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function (e) {
                    return 1 === e ? "one" : "other"
                }
            }
        }
    }

    function rt(e) {
        for (var t = e.split("/"), n = t.length; n--;) t[n] = J(t[n]);
        return t.join("/")
    }

    function it(e, t, n) {
        var r = Ht(e, n);
        t.$$protocol = r.protocol, t.$$host = r.hostname, t.$$port = p(r.port) || or[r.protocol] || null
    }

    function ot(e, t, n) {
        var r = "/" !== e.charAt(0);
        r && (e = "/" + e);
        var i = Ht(e, n);
        t.$$path = decodeURIComponent(r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname), t.$$search = Q(i.search), t.$$hash = decodeURIComponent(i.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function at(e, t) {
        if (0 === t.indexOf(e)) return t.substr(e.length)
    }

    function st(e) {
        var t = e.indexOf("#");
        return t == -1 ? e : e.substr(0, t)
    }

    function ut(e) {
        return e.substr(0, st(e).lastIndexOf("/") + 1)
    }

    function ct(e) {
        return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
    }

    function lt(e, t) {
        this.$$html5 = !0, t = t || "";
        var r = ut(e);
        it(e, this, e), this.$$parse = function (t) {
            var n = at(r, t);
            if (!b(n)) throw ar("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, r);
            ot(n, this, e), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var e = X(this.$$search), t = this.$$hash ? "#" + J(this.$$hash) : "";
            this.$$url = rt(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
        }, this.$$rewrite = function (i) {
            var o, a;
            return (o = at(e, i)) !== n ? (a = o, (o = at(t, o)) !== n ? r + (at("/", o) || o) : e + a) : (o = at(r, i)) !== n ? r + o : r == i + "/" ? r : void 0
        }
    }

    function ft(e, t) {
        var n = ut(e);
        it(e, this, e), this.$$parse = function (r) {
            function i(e, t, n) {
                var r, i = /^\/[A-Z]:(\/.*)/;
                return 0 === t.indexOf(n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
            }

            var o = at(e, r) || at(n, r), a = "#" == o.charAt(0) ? at(t, o) : this.$$html5 ? o : "";
            if (!b(a)) throw ar("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', r, t);
            ot(a, this, e), this.$$path = i(this.$$path, a, e), this.$$compose()
        }, this.$$compose = function () {
            var n = X(this.$$search), r = this.$$hash ? "#" + J(this.$$hash) : "";
            this.$$url = rt(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
        }, this.$$rewrite = function (t) {
            if (st(e) == st(t)) return t
        }
    }

    function pt(e, t) {
        this.$$html5 = !0, ft.apply(this, arguments);
        var n = ut(e);
        this.$$rewrite = function (r) {
            var i;
            return e == st(r) ? r : (i = at(n, r)) ? e + t + i : n === r + "/" ? n : void 0
        }, this.$$compose = function () {
            var n = X(this.$$search), r = this.$$hash ? "#" + J(this.$$hash) : "";
            this.$$url = rt(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url
        }
    }

    function dt(e) {
        return function () {
            return this[e]
        }
    }

    function ht(e, t) {
        return function (n) {
            return m(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function vt() {
        var t = "", n = !1;
        this.hashPrefix = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.html5Mode = function (e) {
            return y(e) ? (n = e, this) : n
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (r, i, o, a) {
            function s(e) {
                r.$broadcast("$locationChangeSuccess", u.absUrl(), e)
            }

            var u, c, l, f = i.baseHref(), p = i.url();
            n ? (l = ct(p) + (f || "/"), c = o.history ? lt : pt) : (l = st(p), c = ft), u = new c(l, "#" + t), u.$$parse(u.$$rewrite(p)), a.on("click", function (n) {
                if (!n.ctrlKey && !n.metaKey && 2 != n.which) {
                    for (var o = $n(n.target); "a" !== dn(o[0].nodeName);) if (o[0] === a[0] || !(o = o.parent())[0]) return;
                    var s = o.prop("href");
                    if ($(s) && "[object SVGAnimatedString]" === s.toString() && (s = Ht(s.animVal).href), c === pt) {
                        var f = o.attr("href") || o.attr("xlink:href");
                        if (f.indexOf("://") < 0) {
                            var p = "#" + t;
                            if ("/" == f[0]) s = l + p + f; else if ("#" == f[0]) s = l + p + (u.path() || "/") + f; else {
                                for (var d = u.path().split("/"), h = f.split("/"), v = 0; v < h.length; v++) "." != h[v] && (".." == h[v] ? d.pop() : h[v].length && d.push(h[v]));
                                s = l + p + d.join("/")
                            }
                        }
                    }
                    var g = u.$$rewrite(s);
                    s && !o.attr("target") && g && !n.isDefaultPrevented() && (n.preventDefault(), g != i.url() && (u.$$parse(g), r.$apply(), e.angular["ff-684208-preventDefault"] = !0))
                }
            }), u.absUrl() != p && i.url(u.absUrl(), !0), i.onUrlChange(function (e) {
                u.absUrl() != e && (r.$evalAsync(function () {
                    var t = u.absUrl();
                    u.$$parse(e), r.$broadcast("$locationChangeStart", e, t).defaultPrevented ? (u.$$parse(t), i.url(t)) : s(t)
                }), r.$$phase || r.$digest())
            });
            var d = 0;
            return r.$watch(function () {
                var e = i.url(), t = u.$$replace;
                return d && e == u.absUrl() || (d++, r.$evalAsync(function () {
                    r.$broadcast("$locationChangeStart", u.absUrl(), e).defaultPrevented ? u.$$parse(e) : (i.url(u.absUrl(), t), s(e))
                })), u.$$replace = !1, d
            }), u
        }]
    }

    function gt() {
        var e = !0, t = this;
        this.debugEnabled = function (t) {
            return y(t) ? (e = t, this) : e
        }, this.$get = ["$window", function (n) {
            function r(e) {
                return e instanceof Error && (e.stack ? e = e.message && e.stack.indexOf(e.message) === -1 ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
            }

            function i(e) {
                var t = n.console || {}, i = t[e] || t.log || h, a = !1;
                try {
                    a = !!i.apply
                } catch (s) {
                }
                return a ? function () {
                    var e = [];
                    return o(arguments, function (t) {
                        e.push(r(t))
                    }), i.apply(t, e)
                } : function (e, t) {
                    i(e, null == t ? "" : t)
                }
            }

            return {
                log: i("log"), info: i("info"), warn: i("warn"), error: i("error"), debug: function () {
                    var n = i("debug");
                    return function () {
                        e && n.apply(t, arguments)
                    }
                }()
            }
        }]
    }

    function mt(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw ur("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
        return e
    }

    function yt(e, t) {
        if (e) {
            if (e.constructor === e) throw ur("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e.document && e.location && e.alert && e.setInterval) throw ur("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw ur("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
            if (e === Object) throw ur("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
        }
        return e
    }

    function $t(e, t) {
        if (e) {
            if (e.constructor === e) throw ur("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e === lr || e === fr || pr && e === pr) throw ur("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
        }
    }

    function bt(e, t, r, i, o) {
        o = o || {};
        for (var a, s = t.split("."), u = 0; s.length > 1; u++) {
            a = mt(s.shift(), i);
            var c = e[a];
            c || (c = {}, e[a] = c), e = c, e.then && o.unwrapPromises && (sr(i), "$$v" in e || !function (e) {
                e.then(function (t) {
                    e.$$v = t
                })
            }(e), e.$$v === n && (e.$$v = {}), e = e.$$v)
        }
        return a = mt(s.shift(), i), yt(e, i), yt(e[a], i), e[a] = r, r
    }

    function xt(e, t, r, i, o, a, s) {
        return mt(e, a), mt(t, a), mt(r, a), mt(i, a), mt(o, a), s.unwrapPromises ? function (s, u) {
            var c, l = u && u.hasOwnProperty(e) ? u : s;
            return null == l ? l : (l = l[e], l && l.then && (sr(a), "$$v" in l || (c = l, c.$$v = n, c.then(function (e) {
                c.$$v = e
            })), l = l.$$v), t ? null == l ? n : (l = l[t], l && l.then && (sr(a), "$$v" in l || (c = l, c.$$v = n, c.then(function (e) {
                c.$$v = e
            })), l = l.$$v), r ? null == l ? n : (l = l[r], l && l.then && (sr(a), "$$v" in l || (c = l, c.$$v = n, c.then(function (e) {
                c.$$v = e
            })), l = l.$$v), i ? null == l ? n : (l = l[i], l && l.then && (sr(a), "$$v" in l || (c = l, c.$$v = n, c.then(function (e) {
                c.$$v = e
            })), l = l.$$v), o ? null == l ? n : (l = l[o], l && l.then && (sr(a), "$$v" in l || (c = l, c.$$v = n, c.then(function (e) {
                c.$$v = e
            })), l = l.$$v), l) : l) : l) : l) : l)
        } : function (a, s) {
            var u = s && s.hasOwnProperty(e) ? s : a;
            return null == u ? u : (u = u[e], t ? null == u ? n : (u = u[t], r ? null == u ? n : (u = u[r], i ? null == u ? n : (u = u[i], o ? null == u ? n : u = u[o] : u) : u) : u) : u)
        }
    }

    function wt(e, t, r) {
        if (mr.hasOwnProperty(e)) return mr[e];
        var i, a = e.split("."), s = a.length;
        if (t.csp) i = s < 6 ? xt(a[0], a[1], a[2], a[3], a[4], r, t) : function (e, i) {
            var o, u = 0;
            do o = xt(a[u++], a[u++], a[u++], a[u++], a[u++], r, t)(e, i), i = n, e = o; while (u < s);
            return o
        }; else {
            var u = "var p;\n";
            o(a, function (e, n) {
                mt(e, r), u += "if(s == null) return undefined;\ns=" + (n ? "s" : '((k&&k.hasOwnProperty("' + e + '"))?k:s)') + '["' + e + '"];\n' + (t.unwrapPromises ? 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
            }), u += "return s;";
            var c = new Function("s", "k", "pw", u);
            c.toString = g(u), i = t.unwrapPromises ? function (e, t) {
                return c(e, t, sr)
            } : c
        }
        return "hasOwnProperty" !== e && (mr[e] = i), i
    }

    function Ct() {
        var e = {}, t = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0};
        this.unwrapPromises = function (e) {
            return y(e) ? (t.unwrapPromises = !!e, this) : t.unwrapPromises
        }, this.logPromiseWarnings = function (e) {
            return y(e) ? (t.logPromiseWarnings = e, this) : t.logPromiseWarnings
        }, this.$get = ["$filter", "$sniffer", "$log", function (n, r, i) {
            return t.csp = r.csp, sr = function (e) {
                t.logPromiseWarnings && !cr.hasOwnProperty(e) && (cr[e] = !0, i.warn("[$parse] Promise found in the expression `" + e + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
            }, function (r) {
                var i;
                switch (typeof r) {
                    case"string":
                        if (e.hasOwnProperty(r)) return e[r];
                        var o = new vr(t), a = new gr(o, n, t);
                        return i = a.parse(r), "hasOwnProperty" !== r && (e[r] = i), i;
                    case"function":
                        return r;
                    default:
                        return h
                }
            }
        }]
    }

    function St() {
        this.$get = ["$rootScope", "$exceptionHandler", function (e, t) {
            return kt(function (t) {
                e.$evalAsync(t)
            }, t)
        }]
    }

    function kt(e, t) {
        function r(e) {
            return e
        }

        function i(e) {
            return c(e)
        }

        function a(e) {
            var t = s(), n = 0, r = Nn(e) ? [] : {};
            return o(e, function (e, i) {
                n++, u(e).then(function (e) {
                    r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
                }, function (e) {
                    r.hasOwnProperty(i) || t.reject(e)
                })
            }), 0 === n && t.resolve(r), t.promise
        }

        var s = function () {
            var o, a, c = [];
            return a = {
                resolve: function (t) {
                    if (c) {
                        var r = c;
                        c = n, o = u(t), r.length && e(function () {
                            for (var e, t = 0, n = r.length; t < n; t++) e = r[t], o.then(e[0], e[1], e[2])
                        })
                    }
                }, reject: function (e) {
                    a.resolve(l(e))
                }, notify: function (t) {
                    if (c) {
                        var n = c;
                        c.length && e(function () {
                            for (var e, r = 0, i = n.length; r < i; r++) e = n[r], e[2](t)
                        })
                    }
                }, promise: {
                    then: function (e, n, a) {
                        var u = s(), l = function (n) {
                            try {
                                u.resolve((C(e) ? e : r)(n))
                            } catch (i) {
                                u.reject(i), t(i)
                            }
                        }, f = function (e) {
                            try {
                                u.resolve((C(n) ? n : i)(e))
                            } catch (r) {
                                u.reject(r), t(r)
                            }
                        }, p = function (e) {
                            try {
                                u.notify((C(a) ? a : r)(e))
                            } catch (n) {
                                t(n)
                            }
                        };
                        return c ? c.push([l, f, p]) : o.then(l, f, p), u.promise
                    }, "catch": function (e) {
                        return this.then(null, e)
                    }, "finally": function (e) {
                        function t(e, t) {
                            var n = s();
                            return t ? n.resolve(e) : n.reject(e), n.promise
                        }

                        function n(n, i) {
                            var o = null;
                            try {
                                o = (e || r)()
                            } catch (a) {
                                return t(a, !1)
                            }
                            return o && C(o.then) ? o.then(function () {
                                return t(n, i)
                            }, function (e) {
                                return t(e, !1)
                            }) : t(n, i)
                        }

                        return this.then(function (e) {
                            return n(e, !0)
                        }, function (e) {
                            return n(e, !1)
                        })
                    }
                }
            }
        }, u = function (t) {
            return t && C(t.then) ? t : {
                then: function (n) {
                    var r = s();
                    return e(function () {
                        r.resolve(n(t))
                    }), r.promise
                }
            }
        }, c = function (e) {
            var t = s();
            return t.reject(e), t.promise
        }, l = function (n) {
            return {
                then: function (r, o) {
                    var a = s();
                    return e(function () {
                        try {
                            a.resolve((C(o) ? o : i)(n))
                        } catch (e) {
                            a.reject(e), t(e)
                        }
                    }), a.promise
                }
            }
        }, f = function (n, o, a, l) {
            var f, p = s(), d = function (e) {
                try {
                    return (C(o) ? o : r)(e)
                } catch (n) {
                    return t(n), c(n)
                }
            }, h = function (e) {
                try {
                    return (C(a) ? a : i)(e)
                } catch (n) {
                    return t(n), c(n)
                }
            }, v = function (e) {
                try {
                    return (C(l) ? l : r)(e)
                } catch (n) {
                    t(n)
                }
            };
            return e(function () {
                u(n).then(function (e) {
                    f || (f = !0, p.resolve(u(e).then(d, h, v)))
                }, function (e) {
                    f || (f = !0, p.resolve(h(e)))
                }, function (e) {
                    f || p.notify(v(e))
                })
            }), p.promise
        };
        return {defer: s, reject: c, when: f, all: a}
    }

    function Tt() {
        this.$get = ["$window", "$timeout", function (e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame,
                r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                i = !!n, o = i ? function (e) {
                    var t = n(e);
                    return function () {
                        r(t)
                    }
                } : function (e) {
                    var n = t(e, 16.66, !1);
                    return function () {
                        t.cancel(n)
                    }
                };
            return o.supported = i, o
        }]
    }

    function Et() {
        var e = 10, t = r("$rootScope"), n = null;
        this.digestTtl = function (t) {
            return arguments.length && (e = t), e
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (r, a, s, u) {
            function l() {
                this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
            }

            function f(e) {
                if (m.$$phase) throw t("inprog", "{0} already in progress", m.$$phase);
                m.$$phase = e
            }

            function p() {
                m.$$phase = null
            }

            function d(e, t) {
                var n = s(e);
                return ne(n, t), n
            }

            function v(e, t, n) {
                do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
            }

            function g() {
            }

            l.prototype = {
                constructor: l, $new: function (e) {
                    var t;
                    return e ? (t = new l, t.$root = this.$root, t.$$asyncQueue = this.$$asyncQueue, t.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = c(), this.$$childScopeClass = null
                    }, this.$$childScopeClass.prototype = this), t = new this.$$childScopeClass), t["this"] = t, t.$parent = this, t.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = t, this.$$childTail = t) : this.$$childHead = this.$$childTail = t, t
                }, $watch: function (e, t, r) {
                    var i = this, o = d(e, "watch"), a = i.$$watchers, s = {fn: t, last: g, get: o, exp: e, eq: !!r};
                    if (n = null, !C(t)) {
                        var u = d(t || h, "listener");
                        s.fn = function (e, t, n) {
                            u(n)
                        }
                    }
                    if ("string" == typeof e && o.constant) {
                        var c = s.fn;
                        s.fn = function (e, t, n) {
                            c.call(this, e, t, n), M(a, s)
                        }
                    }
                    return a || (a = i.$$watchers = []), a.unshift(s), function () {
                        M(a, s), n = null
                    }
                }, $watchCollection: function (e, t) {
                    function n() {
                        o = p(c);
                        var e, t;
                        if ($(o)) if (i(o)) {
                            a !== d && (a = d, g = a.length = 0, f++), e = o.length, g !== e && (f++, a.length = g = e);
                            for (var n = 0; n < e; n++) {
                                var r = a[n] !== a[n] && o[n] !== o[n];
                                r || a[n] === o[n] || (f++, a[n] = o[n])
                            }
                        } else {
                            a !== h && (a = h = {}, g = 0, f++), e = 0;
                            for (t in o) o.hasOwnProperty(t) && (e++, a.hasOwnProperty(t) ? a[t] !== o[t] && (f++, a[t] = o[t]) : (g++, a[t] = o[t], f++));
                            if (g > e) {
                                f++;
                                for (t in a) a.hasOwnProperty(t) && !o.hasOwnProperty(t) && (g--, delete a[t])
                            }
                        } else a !== o && (a = o, f++);
                        return f
                    }

                    function r() {
                        if (v ? (v = !1, t(o, o, c)) : t(o, u, c), l) if ($(o)) if (i(o)) {
                            u = new Array(o.length);
                            for (var e = 0; e < o.length; e++) u[e] = o[e]
                        } else {
                            u = {};
                            for (var n in o) hn.call(o, n) && (u[n] = o[n])
                        } else u = o
                    }

                    var o, a, u, c = this, l = t.length > 1, f = 0, p = s(e), d = [], h = {}, v = !0, g = 0;
                    return this.$watch(n, r)
                }, $digest: function () {
                    var r, i, o, s, u, c, l, d, h, v, m, y = this.$$asyncQueue, $ = this.$$postDigestQueue, b = e,
                        x = this, w = [];
                    f("$digest"), n = null;
                    do {
                        for (c = !1, d = x; y.length;) {
                            try {
                                m = y.shift(), m.scope.$eval(m.expression)
                            } catch (S) {
                                p(), a(S)
                            }
                            n = null
                        }
                        e:do {
                            if (s = d.$$watchers) for (u = s.length; u--;) try {
                                if (r = s[u]) if ((i = r.get(d)) === (o = r.last) || (r.eq ? H(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
                                    if (r === n) {
                                        c = !1;
                                        break e
                                    }
                                } else c = !0, n = r, r.last = r.eq ? L(i, null) : i, r.fn(i, o === g ? i : o, d), b < 5 && (h = 4 - b, w[h] || (w[h] = []), v = C(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, v += "; newVal: " + B(i) + "; oldVal: " + B(o), w[h].push(v))
                            } catch (S) {
                                p(), a(S)
                            }
                            if (!(l = d.$$childHead || d !== x && d.$$nextSibling)) for (; d !== x && !(l = d.$$nextSibling);) d = d.$parent
                        } while (d = l);
                        if ((c || y.length) && !b--) throw p(), t("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, B(w))
                    } while (c || y.length);
                    for (p(); $.length;) try {
                        $.shift()()
                    } catch (S) {
                        a(S)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this !== m && (o(this.$$listenerCount, _(null, v, this)), e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = h, this.$on = this.$watch = function () {
                            return h
                        })
                    }
                }, $eval: function (e, t) {
                    return s(e)(this, t)
                }, $evalAsync: function (e) {
                    m.$$phase || m.$$asyncQueue.length || u.defer(function () {
                        m.$$asyncQueue.length && m.$digest()
                    }), this.$$asyncQueue.push({scope: this, expression: e})
                }, $$postDigest: function (e) {
                    this.$$postDigestQueue.push(e)
                }, $apply: function (e) {
                    try {
                        return f("$apply"), this.$eval(e)
                    } catch (t) {
                        a(t)
                    } finally {
                        p();
                        try {
                            m.$digest()
                        } catch (t) {
                            throw a(t), t
                        }
                    }
                }, $on: function (e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var r = this;
                    do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                    var i = this;
                    return function () {
                        n[O(n, t)] = null, v(i, 1, e)
                    }
                }, $emit: function (e, t) {
                    var n, r, i, o = [], s = this, u = !1, c = {
                        name: e, targetScope: s, stopPropagation: function () {
                            u = !0
                        }, preventDefault: function () {
                            c.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, l = R([c], arguments, 1);
                    do {
                        for (n = s.$$listeners[e] || o, c.currentScope = s, r = 0, i = n.length; r < i; r++) if (n[r]) try {
                            n[r].apply(null, l)
                        } catch (f) {
                            a(f)
                        } else n.splice(r, 1), r--, i--;
                        if (u) return c;
                        s = s.$parent
                    } while (s);
                    return c
                }, $broadcast: function (e, t) {
                    for (var n, r, i, o = this, s = o, u = o, c = {
                        name: e,
                        targetScope: o,
                        preventDefault: function () {
                            c.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    }, l = R([c], arguments, 1); s = u;) {
                        for (c.currentScope = s, n = s.$$listeners[e] || [], r = 0, i = n.length; r < i; r++) if (n[r]) try {
                            n[r].apply(null, l)
                        } catch (f) {
                            a(f)
                        } else n.splice(r, 1), r--, i--;
                        if (!(u = s.$$listenerCount[e] && s.$$childHead || s !== o && s.$$nextSibling)) for (; s !== o && !(u = s.$$nextSibling);) s = s.$parent
                    }
                    return c
                }
            };
            var m = new l;
            return m
        }]
    }

    function At() {
        var e = /^\s*(https?|ftp|mailto|tel|file):/, t = /^\s*(https?|ftp|file):|data:image\//;
        this.aHrefSanitizationWhitelist = function (t) {
            return y(t) ? (e = t, this) : e
        }, this.imgSrcSanitizationWhitelist = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.$get = function () {
            return function (n, r) {
                var i, o = r ? t : e;
                return yn && !(yn >= 8) || (i = Ht(n).href, "" === i || i.match(o)) ? n : "unsafe:" + i
            }
        }
    }

    function Nt(e) {
        return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }

    function jt(e) {
        if ("self" === e) return e;
        if (b(e)) {
            if (e.indexOf("***") > -1) throw yr("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
            return e = Nt(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
        }
        if (S(e)) return new RegExp("^" + e.source + "$");
        throw yr("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Dt(e) {
        var t = [];
        return y(e) && o(e, function (e) {
            t.push(jt(e))
        }), t
    }

    function Ot() {
        this.SCE_CONTEXTS = $r;
        var e = ["self"], t = [];
        this.resourceUrlWhitelist = function (t) {
            return arguments.length && (e = Dt(t)), e
        }, this.resourceUrlBlacklist = function (e) {
            return arguments.length && (t = Dt(e)), t
        }, this.$get = ["$injector", function (r) {
            function i(e, t) {
                return "self" === e ? Ft(t) : !!e.exec(t.href)
            }

            function o(n) {
                var r, o, a = Ht(n.toString()), s = !1;
                for (r = 0, o = e.length; r < o; r++) if (i(e[r], a)) {
                    s = !0;
                    break
                }
                if (s) for (r = 0, o = t.length; r < o; r++) if (i(t[r], a)) {
                    s = !1;
                    break
                }
                return s
            }

            function a(e) {
                var t = function (e) {
                    this.$$unwrapTrustedValue = function () {
                        return e
                    }
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }

            function s(e, t) {
                var r = p.hasOwnProperty(e) ? p[e] : null;
                if (!r) throw yr("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                if (null === t || t === n || "" === t) return t;
                if ("string" != typeof t) throw yr("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                return new r(t)
            }

            function u(e) {
                return e instanceof f ? e.$$unwrapTrustedValue() : e
            }

            function c(e, t) {
                if (null === t || t === n || "" === t) return t;
                var r = p.hasOwnProperty(e) ? p[e] : null;
                if (r && t instanceof r) return t.$$unwrapTrustedValue();
                if (e === $r.RESOURCE_URL) {
                    if (o(t)) return t;
                    throw yr("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                }
                if (e === $r.HTML) return l(t);
                throw yr("unsafe", "Attempting to use an unsafe value in a safe context.")
            }

            var l = function (e) {
                throw yr("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            r.has("$sanitize") && (l = r.get("$sanitize"));
            var f = a(), p = {};
            return p[$r.HTML] = a(f), p[$r.CSS] = a(f), p[$r.URL] = a(f), p[$r.JS] = a(f), p[$r.RESOURCE_URL] = a(p[$r.URL]), {
                trustAs: s,
                getTrusted: c,
                valueOf: u
            }
        }]
    }

    function Mt() {
        var e = !0;
        this.enabled = function (t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function (t, n, r) {
            if (e && n.msie && n.msieDocumentMode < 8) throw yr("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var i = P($r);
            i.isEnabled = function () {
                return e
            }, i.trustAs = r.trustAs, i.getTrusted = r.getTrusted, i.valueOf = r.valueOf, e || (i.trustAs = i.getTrusted = function (e, t) {
                return t
            }, i.valueOf = v), i.parseAs = function (e, n) {
                var r = t(n);
                return r.literal && r.constant ? r : function (t, n) {
                    return i.getTrusted(e, r(t, n))
                }
            };
            var a = i.parseAs, s = i.getTrusted, u = i.trustAs;
            return o($r, function (e, t) {
                var n = dn(t);
                i[ce("parse_as_" + n)] = function (t) {
                    return a(e, t)
                }, i[ce("get_trusted_" + n)] = function (t) {
                    return s(e, t)
                }, i[ce("trust_as_" + n)] = function (t) {
                    return u(e, t)
                }
            }), i
        }]
    }

    function Lt() {
        this.$get = ["$window", "$document", function (e, t) {
            var n, r, i = {}, o = p((/android (\d+)/.exec(dn((e.navigator || {}).userAgent)) || [])[1]),
                a = /Boxee/i.test((e.navigator || {}).userAgent), s = t[0] || {}, u = s.documentMode,
                c = /^(Moz|webkit|O|ms)(?=[A-Z])/, l = s.body && s.body.style, f = !1, d = !1;
            if (l) {
                for (var h in l) if (r = c.exec(h)) {
                    n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                    break
                }
                n || (n = "WebkitOpacity" in l && "webkit"), f = !!("transition" in l || n + "Transition" in l), d = !!("animation" in l || n + "Animation" in l), !o || f && d || (f = b(s.body.style.webkitTransition), d = b(s.body.style.webkitAnimation))
            }
            return {
                history: !(!e.history || !e.history.pushState || o < 4 || a),
                hashchange: "onhashchange" in e && (!u || u > 7),
                hasEvent: function (e) {
                    if ("input" == e && 9 == yn) return !1;
                    if (m(i[e])) {
                        var t = s.createElement("div");
                        i[e] = "on" + e in t
                    }
                    return i[e]
                },
                csp: F(),
                vendorPrefix: n,
                transitions: f,
                animations: d,
                android: o,
                msie: yn,
                msieDocumentMode: u
            }
        }]
    }

    function Pt() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (e, t, n, r) {
            function i(i, a, s) {
                var u, c = n.defer(), l = c.promise, f = y(s) && !s;
                return u = t.defer(function () {
                    try {
                        c.resolve(i())
                    } catch (t) {
                        c.reject(t), r(t)
                    } finally {
                        delete o[l.$$timeoutId]
                    }
                    f || e.$apply()
                }, a), l.$$timeoutId = u, o[u] = c, l
            }

            var o = {};
            return i.cancel = function (e) {
                return !!(e && e.$$timeoutId in o) && (o[e.$$timeoutId].reject("canceled"), delete o[e.$$timeoutId], t.defer.cancel(e.$$timeoutId))
            }, i
        }]
    }

    function Ht(e, t) {
        var n = e;
        return yn && (br.setAttribute("href", n), n = br.href), br.setAttribute("href", n), {
            href: br.href,
            protocol: br.protocol ? br.protocol.replace(/:$/, "") : "",
            host: br.host,
            search: br.search ? br.search.replace(/^\?/, "") : "",
            hash: br.hash ? br.hash.replace(/^#/, "") : "",
            hostname: br.hostname,
            port: br.port,
            pathname: "/" === br.pathname.charAt(0) ? br.pathname : "/" + br.pathname
        }
    }

    function Ft(e) {
        var t = b(e) ? Ht(e) : e;
        return t.protocol === xr.protocol && t.host === xr.host
    }

    function Rt() {
        this.$get = g(e)
    }

    function qt(e) {
        function t(r, i) {
            if ($(r)) {
                var a = {};
                return o(r, function (e, n) {
                    a[n] = t(n, e)
                }), a
            }
            return e.factory(r + n, i)
        }

        var n = "Filter";
        this.register = t, this.$get = ["$injector", function (e) {
            return function (t) {
                return e.get(t + n)
            }
        }], t("currency", It), t("date", Jt), t("filter", _t), t("json", Yt), t("limitTo", Gt), t("lowercase", Tr), t("number", Bt), t("orderBy", Kt), t("uppercase", Er)
    }

    function _t() {
        return function (e, t, n) {
            if (!Nn(e)) return e;
            var r = typeof n, i = [];
            i.check = function (e) {
                for (var t = 0; t < i.length; t++) if (!i[t](e)) return !1;
                return !0
            }, "function" !== r && (n = "boolean" === r && n ? function (e, t) {
                return En.equals(e, t)
            } : function (e, t) {
                if (e && t && "object" == typeof e && "object" == typeof t) {
                    for (var r in e) if ("$" !== r.charAt(0) && hn.call(e, r) && n(e[r], t[r])) return !0;
                    return !1
                }
                return t = ("" + t).toLowerCase(), ("" + e).toLowerCase().indexOf(t) > -1
            });
            var o = function (e, t) {
                if ("string" == typeof t && "!" === t.charAt(0)) return !o(e, t.substr(1));
                switch (typeof e) {
                    case"boolean":
                    case"number":
                    case"string":
                        return n(e, t);
                    case"object":
                        switch (typeof t) {
                            case"object":
                                return n(e, t);
                            default:
                                for (var r in e) if ("$" !== r.charAt(0) && o(e[r], t)) return !0
                        }
                        return !1;
                    case"array":
                        for (var i = 0; i < e.length; i++) if (o(e[i], t)) return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch (typeof t) {
                case"boolean":
                case"number":
                case"string":
                    t = {$: t};
                case"object":
                    for (var a in t) !function (e) {
                        "undefined" != typeof t[e] && i.push(function (n) {
                            return o("$" == e ? n : n && n[e], t[e])
                        })
                    }(a);
                    break;
                case"function":
                    i.push(t);
                    break;
                default:
                    return e
            }
            for (var s = [], u = 0; u < e.length; u++) {
                var c = e[u];
                i.check(c) && s.push(c)
            }
            return s
        }
    }

    function It(e) {
        var t = e.NUMBER_FORMATS;
        return function (e, n) {
            return m(n) && (n = t.CURRENCY_SYM), zt(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
        }
    }

    function Bt(e) {
        var t = e.NUMBER_FORMATS;
        return function (e, n) {
            return zt(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function zt(e, t, n, r, i) {
        if (null == e || !isFinite(e) || $(e)) return "";
        var o = e < 0;
        e = Math.abs(e);
        var a = e + "", s = "", u = [], c = !1;
        if (a.indexOf("e") !== -1) {
            var l = a.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > i + 1 ? (a = "0", e = 0) : (s = a, c = !0)
        }
        if (c) i > 0 && e > -1 && e < 1 && (s = e.toFixed(i)); else {
            var f = (a.split(wr)[1] || "").length;
            m(i) && (i = Math.min(Math.max(t.minFrac, f), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i);
            var p = ("" + e).split(wr), d = p[0];
            p = p[1] || "";
            var h, v = 0, g = t.lgSize, y = t.gSize;
            if (d.length >= g + y) for (v = d.length - g, h = 0; h < v; h++) (v - h) % y === 0 && 0 !== h && (s += n), s += d.charAt(h);
            for (h = v; h < d.length; h++) (d.length - h) % g === 0 && 0 !== h && (s += n), s += d.charAt(h);
            for (; p.length < i;) p += "0";
            i && "0" !== i && (s += r + p.substr(0, i))
        }
        return u.push(o ? t.negPre : t.posPre), u.push(s), u.push(o ? t.negSuf : t.posSuf), u.join("")
    }

    function Ut(e, t, n) {
        var r = "";
        for (e < 0 && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
        return n && (e = e.substr(e.length - t)), r + e
    }

    function Wt(e, t, n, r) {
        return n = n || 0, function (i) {
            var o = i["get" + e]();
            return (n > 0 || o > -n) && (o += n), 0 === o && n == -12 && (o = 12), Ut(o, t, r)
        }
    }

    function Vt(e, t) {
        return function (n, r) {
            var i = n["get" + e](), o = vn(t ? "SHORT" + e : e);
            return r[o][i]
        }
    }

    function Qt(e) {
        var t = -1 * e.getTimezoneOffset(), n = t >= 0 ? "+" : "";
        return n += Ut(Math[t > 0 ? "floor" : "ceil"](t / 60), 2) + Ut(Math.abs(t % 60), 2)
    }

    function Xt(e, t) {
        return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
    }

    function Jt(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                var r = new Date(0), i = 0, o = 0, a = t[8] ? r.setUTCFullYear : r.setFullYear,
                    s = t[8] ? r.setUTCHours : r.setHours;
                t[9] && (i = p(t[9] + t[10]), o = p(t[9] + t[11])), a.call(r, p(t[1]), p(t[2]) - 1, p(t[3]));
                var u = p(t[4] || 0) - i, c = p(t[5] || 0) - o, l = p(t[6] || 0),
                    f = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                return s.call(r, u, c, l, f), r
            }
            return e
        }

        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, r) {
            var i, a, s = "", u = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, b(n) && (n = kr.test(n) ? p(n) : t(n)), x(n) && (n = new Date(n)), !w(n)) return n;
            for (; r;) a = Sr.exec(r), a ? (u = R(u, a, 1), r = u.pop()) : (u.push(r), r = null);
            return o(u, function (t) {
                i = Cr[t], s += i ? i(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), s
        }
    }

    function Yt() {
        return function (e) {
            return B(e, !0)
        }
    }

    function Gt() {
        return function (e, t) {
            if (!Nn(e) && !b(e)) return e;
            if (t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : p(t), b(e)) return t ? t >= 0 ? e.slice(0, t) : e.slice(t, e.length) : "";
            var n, r, i = [];
            for (t > e.length ? t = e.length : t < -e.length && (t = -e.length), t > 0 ? (n = 0, r = t) : (n = e.length + t, r = e.length); n < r; n++) i.push(e[n]);
            return i
        }
    }

    function Kt(e) {
        return function (t, n, r) {
            function i(e, t) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](e, t);
                    if (0 !== i) return i
                }
                return 0
            }

            function o(e, t) {
                return U(t) ? function (t, n) {
                    return e(n, t)
                } : e
            }

            function a(e, t) {
                var n = typeof e, r = typeof t;
                return n == r ? ("string" == n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : e < t ? -1 : 1) : n < r ? -1 : 1
            }

            if (!Nn(t)) return t;
            if (!n) return t;
            n = Nn(n) ? n : [n], n = j(n, function (t) {
                var n = !1, r = t || v;
                if (b(t) && ("+" != t.charAt(0) && "-" != t.charAt(0) || (n = "-" == t.charAt(0), t = t.substring(1)), r = e(t), r.constant)) {
                    var i = r();
                    return o(function (e, t) {
                        return a(e[i], t[i])
                    }, n)
                }
                return o(function (e, t) {
                    return a(r(e), r(t))
                }, n)
            });
            for (var s = [], u = 0; u < t.length; u++) s.push(t[u]);
            return s.sort(o(i, r))
        }
    }

    function Zt(e) {
        return C(e) && (e = {link: e}), e.restrict = e.restrict || "AC", g(e)
    }

    function en(e, t, n, r) {
        function i(t, n) {
            n = n ? "-" + Z(n, "-") : "", r.removeClass(e, (t ? Ir : _r) + n), r.addClass(e, (t ? _r : Ir) + n)
        }

        var a = this, s = e.parent().controller("form") || jr, u = 0, c = a.$error = {}, l = [];
        a.$name = t.name || t.ngForm, a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, s.$addControl(a), e.addClass(Br), i(!0), a.$addControl = function (e) {
            re(e.$name, "input"), l.push(e), e.$name && (a[e.$name] = e)
        }, a.$removeControl = function (e) {
            e.$name && a[e.$name] === e && delete a[e.$name], o(c, function (t, n) {
                a.$setValidity(n, !0, e)
            }), M(l, e)
        }, a.$setValidity = function (e, t, n) {
            var r = c[e];
            if (t) r && (M(r, n), r.length || (u--, u || (i(t), a.$valid = !0, a.$invalid = !1), c[e] = !1, i(!0, e), s.$setValidity(e, !0, a))); else {
                if (u || i(t), r) {
                    if (D(r, n)) return
                } else c[e] = r = [], u++, i(!1, e), s.$setValidity(e, !1, a);
                r.push(n), a.$valid = !1, a.$invalid = !0
            }
        }, a.$setDirty = function () {
            r.removeClass(e, Br), r.addClass(e, zr), a.$dirty = !0, a.$pristine = !1, s.$setDirty()
        }, a.$setPristine = function () {
            r.removeClass(e, zr), r.addClass(e, Br), a.$dirty = !1, a.$pristine = !0, o(l, function (e) {
                e.$setPristine()
            })
        }
    }

    function tn(e, t, r, i) {
        return e.$setValidity(t, r), r ? i : n
    }

    function nn(e, t) {
        var n, r;
        if (t) for (n = 0; n < t.length; ++n) if (r = t[n], e[r]) return !0;
        return !1
    }

    function rn(e, t, n, r, i) {
        if ($(i)) {
            e.$$hasNativeValidators = !0;
            var o = function (o) {
                return e.$error[t] || nn(i, r) || !nn(i, n) ? o : void e.$setValidity(t, !1)
            };
            e.$parsers.push(o)
        }
    }

    function on(e, t, n, i, o, a) {
        var s = t.prop(pn), u = t[0].placeholder, c = {};
        if (i.$$validityState = s, !o.android) {
            var l = !1;
            t.on("compositionstart", function (e) {
                l = !0
            }), t.on("compositionend", function () {
                l = !1, f()
            })
        }
        var f = function (r) {
            if (!l) {
                var o = t.val();
                if (yn && "input" === (r || c).type && t[0].placeholder !== u) return void (u = t[0].placeholder);
                U(n.ngTrim || "T") && (o = jn(o));
                var a = s && i.$$hasNativeValidators;
                (i.$viewValue !== o || "" === o && a) && (e.$$phase ? i.$setViewValue(o) : e.$apply(function () {
                    i.$setViewValue(o)
                }))
            }
        };
        if (o.hasEvent("input")) t.on("input", f); else {
            var d, h = function () {
                d || (d = a.defer(function () {
                    f(), d = null
                }))
            };
            t.on("keydown", function (e) {
                var t = e.keyCode;
                91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || h()
            }), o.hasEvent("paste") && t.on("paste cut", h)
        }
        t.on("change", f), i.$render = function () {
            t.val(i.$isEmpty(i.$viewValue) ? "" : i.$viewValue)
        };
        var v, g, m = n.ngPattern;
        if (m) {
            var y = function (e, t) {
                return tn(i, "pattern", i.$isEmpty(t) || e.test(t), t)
            };
            g = m.match(/^\/(.*)\/([gim]*)$/), g ? (m = new RegExp(g[1], g[2]), v = function (e) {
                return y(m, e)
            }) : v = function (n) {
                var i = e.$eval(m);
                if (!i || !i.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", m, i, W(t));
                return y(i, n)
            }, i.$formatters.push(v), i.$parsers.push(v)
        }
        if (n.ngMinlength) {
            var $ = p(n.ngMinlength), b = function (e) {
                return tn(i, "minlength", i.$isEmpty(e) || e.length >= $, e)
            };
            i.$parsers.push(b), i.$formatters.push(b)
        }
        if (n.ngMaxlength) {
            var x = p(n.ngMaxlength), w = function (e) {
                return tn(i, "maxlength", i.$isEmpty(e) || e.length <= x, e)
            };
            i.$parsers.push(w), i.$formatters.push(w)
        }
    }

    function an(e, t, r, i, o, a) {
        if (on(e, t, r, i, o, a), i.$parsers.push(function (e) {
            var t = i.$isEmpty(e);
            return t || Hr.test(e) ? (i.$setValidity("number", !0), "" === e ? null : t ? e : parseFloat(e)) : (i.$setValidity("number", !1), n)
        }), rn(i, "number", Rr, null, i.$$validityState), i.$formatters.push(function (e) {
            return i.$isEmpty(e) ? "" : "" + e
        }), r.min) {
            var s = function (e) {
                var t = parseFloat(r.min);
                return tn(i, "min", i.$isEmpty(e) || e >= t, e)
            };
            i.$parsers.push(s), i.$formatters.push(s)
        }
        if (r.max) {
            var u = function (e) {
                var t = parseFloat(r.max);
                return tn(i, "max", i.$isEmpty(e) || e <= t, e)
            };
            i.$parsers.push(u), i.$formatters.push(u)
        }
        i.$formatters.push(function (e) {
            return tn(i, "number", i.$isEmpty(e) || x(e), e)
        })
    }

    function sn(e, t, n, r, i, o) {
        on(e, t, n, r, i, o);
        var a = function (e) {
            return tn(r, "url", r.$isEmpty(e) || Lr.test(e), e)
        };
        r.$formatters.push(a), r.$parsers.push(a)
    }

    function un(e, t, n, r, i, o) {
        on(e, t, n, r, i, o);
        var a = function (e) {
            return tn(r, "email", r.$isEmpty(e) || Pr.test(e), e)
        };
        r.$formatters.push(a), r.$parsers.push(a)
    }

    function cn(e, t, n, r) {
        m(n.name) && t.attr("name", c()), t.on("click", function () {
            t[0].checked && e.$apply(function () {
                r.$setViewValue(n.value)
            })
        }), r.$render = function () {
            var e = n.value;
            t[0].checked = e == r.$viewValue
        }, n.$observe("value", r.$render)
    }

    function ln(e, t, n, r) {
        var i = n.ngTrueValue, o = n.ngFalseValue;
        b(i) || (i = !0), b(o) || (o = !1), t.on("click", function () {
            e.$apply(function () {
                r.$setViewValue(t[0].checked)
            })
        }), r.$render = function () {
            t[0].checked = r.$viewValue
        }, r.$isEmpty = function (e) {
            return e !== i
        }, r.$formatters.push(function (e) {
            return e === i
        }), r.$parsers.push(function (e) {
            return e ? i : o
        })
    }

    function fn(e, t) {
        return e = "ngClass" + e, ["$animate", function (n) {
            function r(e, t) {
                var n = [];
                e:for (var r = 0; r < e.length; r++) {
                    for (var i = e[r], o = 0; o < t.length; o++) if (i == t[o]) continue e;
                    n.push(i)
                }
                return n
            }

            function i(e) {
                if (Nn(e)) return e;
                if (b(e)) return e.split(" ");
                if ($(e)) {
                    var t = [];
                    return o(e, function (e, n) {
                        e && (t = t.concat(n.split(" ")))
                    }), t
                }
                return e
            }

            return {
                restrict: "AC", link: function (a, s, u) {
                    function c(e) {
                        var t = f(e, 1);
                        u.$addClass(t)
                    }

                    function l(e) {
                        var t = f(e, -1);
                        u.$removeClass(t)
                    }

                    function f(e, t) {
                        var n = s.data("$classCounts") || {}, r = [];
                        return o(e, function (e) {
                            (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
                        }), s.data("$classCounts", n), r.join(" ")
                    }

                    function p(e, t) {
                        var i = r(t, e), o = r(e, t);
                        o = f(o, -1), i = f(i, 1), 0 === i.length ? n.removeClass(s, o) : 0 === o.length ? n.addClass(s, i) : n.setClass(s, i, o)
                    }

                    function d(e) {
                        if (t === !0 || a.$index % 2 === t) {
                            var n = i(e || []);
                            if (h) {
                                if (!H(e, h)) {
                                    var r = i(h);
                                    p(r, n)
                                }
                            } else c(n)
                        }
                        h = P(e)
                    }

                    var h;
                    a.$watch(u[e], d, !0), u.$observe("class", function (t) {
                        d(a.$eval(u[e]))
                    }), "ngClass" !== e && a.$watch("$index", function (n, r) {
                        var o = 1 & n;
                        if (o !== (1 & r)) {
                            var s = i(a.$eval(u[e]));
                            o === t ? c(s) : l(s)
                        }
                    })
                }
            }
        }]
    }

    var pn = "validity", dn = function (e) {
        return b(e) ? e.toLowerCase() : e
    }, hn = Object.prototype.hasOwnProperty, vn = function (e) {
        return b(e) ? e.toUpperCase() : e
    }, gn = function (e) {
        return b(e) ? e.replace(/[A-Z]/g, function (e) {
            return String.fromCharCode(32 | e.charCodeAt(0))
        }) : e
    }, mn = function (e) {
        return b(e) ? e.replace(/[a-z]/g, function (e) {
            return String.fromCharCode(e.charCodeAt(0) & -33)
        }) : e
    };
    "i" !== "I".toLowerCase() && (dn = gn, vn = mn);
    var yn, $n, bn, xn, wn, Cn = [].slice, Sn = [].push, kn = Object.prototype.toString, Tn = r("ng"),
        En = e.angular || (e.angular = {}), An = ["0", "0", "0"];
    yn = p((/msie (\d+)/.exec(dn(navigator.userAgent)) || [])[1]), isNaN(yn) && (yn = p((/trident\/.*; rv:(\d+)/.exec(dn(navigator.userAgent)) || [])[1])), h.$inject = [], v.$inject = [];
    var Nn = function () {
        return C(Array.isArray) ? Array.isArray : function (e) {
            return "[object Array]" === kn.call(e)
        }
    }(), jn = function () {
        return String.prototype.trim ? function (e) {
            return b(e) ? e.trim() : e
        } : function (e) {
            return b(e) ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
        }
    }();
    wn = yn < 9 ? function (e) {
        return e = e.nodeName ? e : e[0], e.scopeName && "HTML" != e.scopeName ? vn(e.scopeName + ":" + e.nodeName) : e.nodeName
    } : function (e) {
        return e.nodeName ? e.nodeName : e[0].nodeName
    };
    var Dn = /[A-Z]/g, On = {full: "1.2.20", major: 1, minor: 2, dot: 20, codeName: "accidental-beautification"};
    he.expando = "ng339";
    var Mn = he.cache = {}, Ln = 1, Pn = e.document.addEventListener ? function (e, t, n) {
            e.addEventListener(t, n, !1)
        } : function (e, t, n) {
            e.attachEvent("on" + t, n)
        }, Hn = e.document.removeEventListener ? function (e, t, n) {
            e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            e.detachEvent("on" + t, n)
        }, Fn = (he._data = function (e) {
            return this.cache[e[this.expando]] || {}
        }, /([\:\-\_]+(.))/g), Rn = /^moz([A-Z])/, qn = r("jqLite"), _n = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, In = /<|&#?\w+;/,
        Bn = /<([\w:]+)/, zn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Un = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Un.optgroup = Un.option, Un.tbody = Un.tfoot = Un.colgroup = Un.caption = Un.thead, Un.th = Un.td;
    var Wn = he.prototype = {
        ready: function (n) {
            function r() {
                i || (i = !0, n())
            }

            var i = !1;
            "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), he(e).on("load", r))
        }, toString: function () {
            var e = [];
            return o(this, function (t) {
                e.push("" + t)
            }), "[" + e.join(", ") + "]"
        }, eq: function (e) {
            return $n(e >= 0 ? this[e] : this[this.length + e])
        }, length: 0, push: Sn, sort: [].sort, splice: [].splice
    }, Vn = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (e) {
        Vn[dn(e)] = e
    });
    var Qn = {};
    o("input,select,option,textarea,button,form,details".split(","), function (e) {
        Qn[vn(e)] = !0
    }), o({
        data: be, inheritedData: Te, scope: function (e) {
            return $n(e).data("$scope") || Te(e.parentNode || e, ["$isolateScope", "$scope"])
        }, isolateScope: function (e) {
            return $n(e).data("$isolateScope") || $n(e).data("$isolateScopeNoTemplate")
        }, controller: ke, injector: function (e) {
            return Te(e, "$injector")
        }, removeAttr: function (e, t) {
            e.removeAttribute(t)
        }, hasClass: xe, css: function (e, t, r) {
            if (t = ce(t), !y(r)) {
                var i;
                return yn <= 8 && (i = e.currentStyle && e.currentStyle[t], "" === i && (i = "auto")), i = i || e.style[t], yn <= 8 && (i = "" === i ? n : i), i
            }
            e.style[t] = r
        }, attr: function (e, t, r) {
            var i = dn(t);
            if (Vn[i]) {
                if (!y(r)) return e[t] || (e.attributes.getNamedItem(t) || h).specified ? i : n;
                r ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(i))
            } else if (y(r)) e.setAttribute(t, r); else if (e.getAttribute) {
                var o = e.getAttribute(t, 2);
                return null === o ? n : o
            }
        }, prop: function (e, t, n) {
            return y(n) ? void (e[t] = n) : e[t]
        }, text: function () {
            function e(e, n) {
                var r = t[e.nodeType];
                return m(n) ? r ? e[r] : "" : void (e[r] = n)
            }

            var t = [];
            return yn < 9 ? (t[1] = "innerText", t[3] = "nodeValue") : t[1] = t[3] = "textContent", e.$dv = "", e
        }(), val: function (e, t) {
            if (m(t)) {
                if ("SELECT" === wn(e) && e.multiple) {
                    var n = [];
                    return o(e.options, function (e) {
                        e.selected && n.push(e.value || e.text)
                    }), 0 === n.length ? null : n
                }
                return e.value
            }
            e.value = t
        }, html: function (e, t) {
            if (m(t)) return e.innerHTML;
            for (var n = 0, r = e.childNodes; n < r.length; n++) ge(r[n]);
            e.innerHTML = t
        }, empty: Ee
    }, function (e, t) {
        he.prototype[t] = function (t, r) {
            var i, o, a = this.length;
            if (e !== Ee && (2 == e.length && e !== xe && e !== ke ? t : r) === n) {
                if ($(t)) {
                    for (i = 0; i < a; i++) if (e === be) e(this[i], t); else for (o in t) e(this[i], o, t[o]);
                    return this
                }
                for (var s = e.$dv, u = s === n ? Math.min(a, 1) : a, c = 0; c < u; c++) {
                    var l = e(this[c], t, r);
                    s = s ? s + l : l
                }
                return s
            }
            for (i = 0; i < a; i++) e(this[i], t, r);
            return this
        }
    }), o({
        removeData: ye, dealoc: ge, on: function Ti(e, n, r, i) {
            if (y(i)) throw qn("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            var a = $e(e, "events"), s = $e(e, "handle");
            a || $e(e, "events", a = {}), s || $e(e, "handle", s = Ne(e, a)), o(n.split(" "), function (n) {
                var i = a[n];
                if (!i) {
                    if ("mouseenter" == n || "mouseleave" == n) {
                        var o = t.body.contains || t.body.compareDocumentPosition ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function (e, t) {
                            if (t) for (; t = t.parentNode;) if (t === e) return !0;
                            return !1
                        };
                        a[n] = [];
                        var u = {mouseleave: "mouseout", mouseenter: "mouseover"};
                        Ti(e, u[n], function (e) {
                            var t = this, r = e.relatedTarget;
                            r && (r === t || o(t, r)) || s(e, n)
                        })
                    } else Pn(e, n, s), a[n] = [];
                    i = a[n]
                }
                i.push(r)
            })
        }, off: me, one: function (e, t, n) {
            e = $n(e), e.on(t, function r() {
                e.off(t, n), e.off(t, r)
            }), e.on(t, n)
        }, replaceWith: function (e, t) {
            var n, r = e.parentNode;
            ge(e), o(new he(t), function (t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        }, children: function (e) {
            var t = [];
            return o(e.childNodes, function (e) {
                1 === e.nodeType && t.push(e)
            }), t
        }, contents: function (e) {
            return e.contentDocument || e.childNodes || []
        }, append: function (e, t) {
            o(new he(t), function (t) {
                1 !== e.nodeType && 11 !== e.nodeType || e.appendChild(t)
            })
        }, prepend: function (e, t) {
            if (1 === e.nodeType) {
                var n = e.firstChild;
                o(new he(t), function (t) {
                    e.insertBefore(t, n)
                })
            }
        }, wrap: function (e, t) {
            t = $n(t)[0];
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e)
        }, remove: function (e) {
            ge(e);
            var t = e.parentNode;
            t && t.removeChild(e)
        }, after: function (e, t) {
            var n = e, r = e.parentNode;
            o(new he(t), function (e) {
                r.insertBefore(e, n.nextSibling), n = e
            })
        }, addClass: Ce, removeClass: we, toggleClass: function (e, t, n) {
            t && o(t.split(" "), function (t) {
                var r = n;
                m(r) && (r = !xe(e, t)), (r ? Ce : we)(e, t)
            })
        }, parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, next: function (e) {
            if (e.nextElementSibling) return e.nextElementSibling;
            for (var t = e.nextSibling; null != t && 1 !== t.nodeType;) t = t.nextSibling;
            return t
        }, find: function (e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        }, clone: ve, triggerHandler: function (e, t, n) {
            var r = ($e(e, "events") || {})[t];
            n = n || [];
            var i = [{preventDefault: h, stopPropagation: h}];
            o(r, function (t) {
                t.apply(e, i.concat(n))
            })
        }
    }, function (e, t) {
        he.prototype[t] = function (t, n, r) {
            for (var i, o = 0; o < this.length; o++) m(i) ? (i = e(this[o], t, n, r), y(i) && (i = $n(i))) : Se(i, e(this[o], t, n, r));
            return y(i) ? i : this
        }, he.prototype.bind = he.prototype.on, he.prototype.unbind = he.prototype.off
    }), De.prototype = {
        put: function (e, t) {
            this[je(e, this.nextUid)] = t
        }, get: function (e) {
            return this[je(e, this.nextUid)]
        }, remove: function (e) {
            var t = this[e = je(e, this.nextUid)];
            return delete this[e], t
        }
    };
    var Xn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Jn = /,/, Yn = /^\s*(_?)(\S+?)\1\s*$/,
        Gn = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Kn = r("$injector"), Zn = r("$animate"),
        er = ["$provide", function (e) {
            this.$$selectors = {}, this.register = function (t, n) {
                var r = t + "-animation";
                if (t && "." != t.charAt(0)) throw Zn("notcsel", "Expecting class selector starting with '.' got '{0}'.", t);
                this.$$selectors[t.substr(1)] = r, e.factory(r, n)
            }, this.classNameFilter = function (e) {
                return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
            }, this.$get = ["$timeout", "$$asyncCallback", function (e, t) {
                function n(e) {
                    e && t(e)
                }

                return {
                    enter: function (e, t, r, i) {
                        r ? r.after(e) : (t && t[0] || (t = r.parent()), t.append(e)), n(i)
                    }, leave: function (e, t) {
                        e.remove(), n(t)
                    }, move: function (e, t, n, r) {
                        this.enter(e, t, n, r)
                    }, addClass: function (e, t, r) {
                        t = b(t) ? t : Nn(t) ? t.join(" ") : "", o(e, function (e) {
                            Ce(e, t)
                        }), n(r)
                    }, removeClass: function (e, t, r) {
                        t = b(t) ? t : Nn(t) ? t.join(" ") : "", o(e, function (e) {
                            we(e, t)
                        }), n(r)
                    }, setClass: function (e, t, r, i) {
                        o(e, function (e) {
                            Ce(e, t), we(e, r)
                        }), n(i)
                    }, enabled: h
                }
            }]
        }], tr = r("$compile");
    _e.$inject = ["$provide", "$$sanitizeUriProvider"];
    var nr = /^(x[\:\-_]|data[\:\-_])/i, rr = r("$interpolate"), ir = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        or = {http: 80, https: 443, ftp: 21}, ar = r("$location");
    pt.prototype = ft.prototype = lt.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: dt("$$absUrl"),
        url: function (e, t) {
            if (m(e)) return this.$$url;
            var n = ir.exec(e);
            return n[1] && this.path(decodeURIComponent(n[1])), (n[2] || n[1]) && this.search(n[3] || ""), this.hash(n[5] || "", t), this
        },
        protocol: dt("$$protocol"),
        host: dt("$$host"),
        port: dt("$$port"),
        path: ht("$$path", function (e) {
            return "/" == e.charAt(0) ? e : "/" + e
        }),
        search: function (e, t) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (b(e)) this.$$search = Q(e); else {
                        if (!$(e)) throw ar("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        o(e, function (t, n) {
                            null == t && delete e[n]
                        }), this.$$search = e
                    }
                    break;
                default:
                    m(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
            }
            return this.$$compose(), this
        },
        hash: ht("$$hash", v),
        replace: function () {
            return this.$$replace = !0, this
        }
    };
    var sr, ur = r("$parse"), cr = {}, lr = Function.prototype.call, fr = Function.prototype.apply,
        pr = Function.prototype.bind, dr = {
            "null": function () {
                return null
            }, "true": function () {
                return !0
            }, "false": function () {
                return !1
            }, undefined: h, "+": function (e, t, r, i) {
                return r = r(e, t), i = i(e, t), y(r) ? y(i) ? r + i : r : y(i) ? i : n
            }, "-": function (e, t, n, r) {
                return n = n(e, t), r = r(e, t), (y(n) ? n : 0) - (y(r) ? r : 0)
            }, "*": function (e, t, n, r) {
                return n(e, t) * r(e, t)
            }, "/": function (e, t, n, r) {
                return n(e, t) / r(e, t)
            }, "%": function (e, t, n, r) {
                return n(e, t) % r(e, t)
            }, "^": function (e, t, n, r) {
                return n(e, t) ^ r(e, t)
            }, "=": h, "===": function (e, t, n, r) {
                return n(e, t) === r(e, t)
            }, "!==": function (e, t, n, r) {
                return n(e, t) !== r(e, t)
            }, "==": function (e, t, n, r) {
                return n(e, t) == r(e, t)
            }, "!=": function (e, t, n, r) {
                return n(e, t) != r(e, t)
            }, "<": function (e, t, n, r) {
                return n(e, t) < r(e, t)
            }, ">": function (e, t, n, r) {
                return n(e, t) > r(e, t)
            }, "<=": function (e, t, n, r) {
                return n(e, t) <= r(e, t)
            }, ">=": function (e, t, n, r) {
                return n(e, t) >= r(e, t)
            }, "&&": function (e, t, n, r) {
                return n(e, t) && r(e, t)
            }, "||": function (e, t, n, r) {
                return n(e, t) || r(e, t)
            }, "&": function (e, t, n, r) {
                return n(e, t) & r(e, t)
            }, "|": function (e, t, n, r) {
                return r(e, t)(e, t, n(e, t))
            }, "!": function (e, t, n) {
                return !n(e, t)
            }
        }, hr = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\x0B", "'": "'", '"': '"'}, vr = function (e) {
            this.options = e
        };
    vr.prototype = {
        constructor: vr, lex: function (e) {
            for (this.text = e, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(); else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++; else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    }
                    var t = this.ch + this.peek(), r = t + this.peek(2), i = dr[this.ch], o = dr[t], a = dr[r];
                    a ? (this.tokens.push({
                        index: this.index,
                        text: r,
                        fn: a
                    }), this.index += 3) : o ? (this.tokens.push({
                        index: this.index,
                        text: t,
                        fn: o
                    }), this.index += 2) : i ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: i
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        }, is: function (e) {
            return e.indexOf(this.ch) !== -1
        }, was: function (e) {
            return e.indexOf(this.lastCh) !== -1
        }, peek: function (e) {
            var t = e || 1;
            return this.index + t < this.text.length && this.text.charAt(this.index + t)
        }, isNumber: function (e) {
            return "0" <= e && e <= "9"
        }, isWhitespace: function (e) {
            return " " === e || "\r" === e || "\t" === e || "\n" === e || "\x0B" === e || " " === e
        }, isIdent: function (e) {
            return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
        }, isExpOperator: function (e) {
            return "-" === e || "+" === e || this.isNumber(e)
        }, throwError: function (e, t, n) {
            n = n || this.index;
            var r = y(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
            throw ur("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
        }, readNumber: function () {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = dn(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) e += n; else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r)) e += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n; else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            e = 1 * e, this.tokens.push({
                index: t, text: e, literal: !0, constant: !0, fn: function () {
                    return e
                }
            })
        }, readIdent: function () {
            for (var e, t, n, r, i = this, o = "", a = this.index; this.index < this.text.length && (r = this.text.charAt(this.index), "." === r || this.isIdent(r) || this.isNumber(r));) "." === r && (e = this.index), o += r, this.index++;
            if (e) for (t = this.index; t < this.text.length;) {
                if (r = this.text.charAt(t), "(" === r) {
                    n = o.substr(e - a + 1), o = o.substr(0, e - a), this.index = t;
                    break
                }
                if (!this.isWhitespace(r)) break;
                t++
            }
            var s = {index: a, text: o};
            if (dr.hasOwnProperty(o)) s.fn = dr[o], s.literal = !0, s.constant = !0; else {
                var u = wt(o, this.options, this.text);
                s.fn = f(function (e, t) {
                    return u(e, t)
                }, {
                    assign: function (e, t) {
                        return bt(e, o, t, i.text, i.options)
                    }
                })
            }
            this.tokens.push(s), n && (this.tokens.push({index: e, text: "."}), this.tokens.push({
                index: e + 1,
                text: n
            }))
        }, readString: function (e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                if (r += o, i) {
                    if ("u" === o) {
                        var a = this.text.substring(this.index + 1, this.index + 5);
                        a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                    } else {
                        var s = hr[o];
                        n += s ? s : o
                    }
                    i = !1
                } else if ("\\" === o) i = !0; else {
                    if (o === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: r,
                        string: n,
                        literal: !0,
                        constant: !0,
                        fn: function () {
                            return n
                        }
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var gr = function (e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n
    };
    gr.ZERO = f(function () {
        return 0
    }, {constant: !0}), gr.prototype = {
        constructor: gr, parse: function (e) {
            this.text = e, this.tokens = this.lexer.lex(e);
            var t = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t.literal = !!t.literal, t.constant = !!t.constant, t
        }, primary: function () {
            var e;
            if (this.expect("(")) e = this.filterChain(), this.consume(")"); else if (this.expect("[")) e = this.arrayDeclaration(); else if (this.expect("{")) e = this.object(); else {
                var t = this.expect();
                e = t.fn, e || this.throwError("not a primary expression", t), e.literal = !!t.literal, e.constant = !!t.constant
            }
            for (var n, r; n = this.expect("(", "[", ".");) "(" === n.text ? (e = this.functionCall(e, r), r = null) : "[" === n.text ? (r = e, e = this.objectIndex(e)) : "." === n.text ? (r = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
            return e
        }, throwError: function (e, t) {
            throw ur("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        }, peekToken: function () {
            if (0 === this.tokens.length) throw ur("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        }, peek: function (e, t, n, r) {
            if (this.tokens.length > 0) {
                var i = this.tokens[0], o = i.text;
                if (o === e || o === t || o === n || o === r || !e && !t && !n && !r) return i
            }
            return !1
        }, expect: function (e, t, n, r) {
            var i = this.peek(e, t, n, r);
            return !!i && (this.tokens.shift(), i)
        }, consume: function (e) {
            this.expect(e) || this.throwError("is unexpected, expecting [" + e + "]", this.peek())
        }, unaryFn: function (e, t) {
            return f(function (n, r) {
                return e(n, r, t)
            }, {constant: t.constant})
        }, ternaryFn: function (e, t, n) {
            return f(function (r, i) {
                return e(r, i) ? t(r, i) : n(r, i)
            }, {constant: e.constant && t.constant && n.constant})
        }, binaryFn: function (e, t, n) {
            return f(function (r, i) {
                return t(r, i, e, n)
            }, {constant: e.constant && n.constant})
        }, statements: function () {
            for (var e = []; ;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";")) return 1 === e.length ? e[0] : function (t, n) {
                for (var r, i = 0; i < e.length; i++) {
                    var o = e[i];
                    o && (r = o(t, n))
                }
                return r
            }
        }, filterChain: function () {
            for (var e, t = this.expression(); ;) {
                if (!(e = this.expect("|"))) return t;
                t = this.binaryFn(t, e.fn, this.filter())
            }
        }, filter: function () {
            for (var e = this.expect(), t = this.$filter(e.text), n = []; ;) {
                if (!(e = this.expect(":"))) {
                    var r = function (e, r, i) {
                        for (var o = [i], a = 0; a < n.length; a++) o.push(n[a](e, r));
                        return t.apply(e, o)
                    };
                    return function () {
                        return r
                    }
                }
                n.push(this.expression())
            }
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var e, t, n = this.ternary();
            return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), e = this.ternary(), function (t, r) {
                return n.assign(t, e(t, r), r)
            }) : n
        }, ternary: function () {
            var e, t, n = this.logicalOR();
            return (t = this.expect("?")) ? (e = this.ternary(), (t = this.expect(":")) ? this.ternaryFn(n, e, this.ternary()) : void this.throwError("expected :", t)) : n
        }, logicalOR: function () {
            for (var e, t = this.logicalAND(); ;) {
                if (!(e = this.expect("||"))) return t;
                t = this.binaryFn(t, e.fn, this.logicalAND())
            }
        }, logicalAND: function () {
            var e, t = this.equality();
            return (e = this.expect("&&")) && (t = this.binaryFn(t, e.fn, this.logicalAND())), t
        }, equality: function () {
            var e, t = this.relational();
            return (e = this.expect("==", "!=", "===", "!==")) && (t = this.binaryFn(t, e.fn, this.equality())), t
        }, relational: function () {
            var e, t = this.additive();
            return (e = this.expect("<", ">", "<=", ">=")) && (t = this.binaryFn(t, e.fn, this.relational())), t
        }, additive: function () {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.fn, this.multiplicative());
            return t
        }, multiplicative: function () {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.fn, this.unary());
            return t
        }, unary: function () {
            var e;
            return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(gr.ZERO, e.fn, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.fn, this.unary()) : this.primary()
        }, fieldAccess: function (e) {
            var t = this, n = this.expect().text, r = wt(n, this.options, this.text);
            return f(function (t, n, i) {
                return r(i || e(t, n))
            }, {
                assign: function (r, i, o) {
                    return bt(e(r, o), n, i, t.text, t.options)
                }
            })
        }, objectIndex: function (e) {
            var t = this, r = this.expression();
            return this.consume("]"), f(function (i, o) {
                var a, s, u = e(i, o), c = r(i, o);
                return mt(c, t.text), u ? (a = yt(u[c], t.text), a && a.then && t.options.unwrapPromises && (s = a, "$$v" in a || (s.$$v = n, s.then(function (e) {
                    s.$$v = e
                })), a = a.$$v), a) : n
            }, {
                assign: function (n, i, o) {
                    var a = r(n, o), s = yt(e(n, o), t.text);
                    return s[a] = i
                }
            })
        }, functionCall: function (e, t) {
            var n = [];
            if (")" !== this.peekToken().text) do n.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var r = this;
            return function (i, o) {
                for (var a = [], s = t ? t(i, o) : i, u = 0; u < n.length; u++) a.push(n[u](i, o));
                var c = e(i, o, s) || h;
                yt(s, r.text), $t(c, r.text);
                var l = c.apply ? c.apply(s, a) : c(a[0], a[1], a[2], a[3], a[4]);
                return yt(l, r.text)
            }
        }, arrayDeclaration: function () {
            var e = [], t = !0;
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                var n = this.expression();
                e.push(n), n.constant || (t = !1)
            } while (this.expect(","));
            return this.consume("]"), f(function (t, n) {
                for (var r = [], i = 0; i < e.length; i++) r.push(e[i](t, n));
                return r
            }, {literal: !0, constant: t})
        }, object: function () {
            var e = [], t = !0;
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                var n = this.expect(), r = n.string || n.text;
                this.consume(":");
                var i = this.expression();
                e.push({key: r, value: i}), i.constant || (t = !1)
            } while (this.expect(","));
            return this.consume("}"), f(function (t, n) {
                for (var r = {}, i = 0; i < e.length; i++) {
                    var o = e[i];
                    r[o.key] = o.value(t, n)
                }
                return r
            }, {literal: !0, constant: t})
        }
    };
    var mr = {}, yr = r("$sce"), $r = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"},
        br = t.createElement("a"), xr = Ht(e.location.href, !0);
    qt.$inject = ["$provide"], It.$inject = ["$locale"], Bt.$inject = ["$locale"];
    var wr = ".", Cr = {
        yyyy: Wt("FullYear", 4),
        yy: Wt("FullYear", 2, 0, !0),
        y: Wt("FullYear", 1),
        MMMM: Vt("Month"),
        MMM: Vt("Month", !0),
        MM: Wt("Month", 2, 1),
        M: Wt("Month", 1, 1),
        dd: Wt("Date", 2),
        d: Wt("Date", 1),
        HH: Wt("Hours", 2),
        H: Wt("Hours", 1),
        hh: Wt("Hours", 2, -12),
        h: Wt("Hours", 1, -12),
        mm: Wt("Minutes", 2),
        m: Wt("Minutes", 1),
        ss: Wt("Seconds", 2),
        s: Wt("Seconds", 1),
        sss: Wt("Milliseconds", 3),
        EEEE: Vt("Day"),
        EEE: Vt("Day", !0),
        a: Xt,
        Z: Qt
    }, Sr = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, kr = /^\-?\d+$/;
    Jt.$inject = ["$locale"];
    var Tr = g(dn), Er = g(vn);
    Kt.$inject = ["$parse"];
    var Ar = g({
        restrict: "E", compile: function (e, n) {
            if (yn <= 8 && (n.href || n.name || n.$set("href", ""), e.append(t.createComment("IE fix"))), !n.href && !n.xlinkHref && !n.name) return function (e, t) {
                var n = "[object SVGAnimatedString]" === kn.call(t.prop("href")) ? "xlink:href" : "href";
                t.on("click", function (e) {
                    t.attr(n) || e.preventDefault()
                })
            }
        }
    }), Nr = {};
    o(Vn, function (e, t) {
        if ("multiple" != e) {
            var n = Ie("ng-" + t);
            Nr[n] = function () {
                return {
                    priority: 100, link: function (e, r, i) {
                        e.$watch(i[n], function (e) {
                            i.$set(t, !!e)
                        })
                    }
                }
            }
        }
    }), o(["src", "srcset", "href"], function (e) {
        var t = Ie("ng-" + e);
        Nr[t] = function () {
            return {
                priority: 99, link: function (n, r, i) {
                    var o = e, a = e;
                    "href" === e && "[object SVGAnimatedString]" === kn.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function (e) {
                        e && (i.$set(a, e), yn && o && r.prop(o, i[a]))
                    })
                }
            }
        }
    });
    var jr = {$addControl: h, $removeControl: h, $setValidity: h, $setDirty: h, $setPristine: h};
    en.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var Dr = function (e) {
            return ["$timeout", function (t) {
                var r = {
                    name: "form", restrict: e ? "EAC" : "E", controller: en, compile: function () {
                        return {
                            pre: function (e, r, i, o) {
                                if (!i.action) {
                                    var a = function (e) {
                                        e.preventDefault ? e.preventDefault() : e.returnValue = !1
                                    };
                                    Pn(r[0], "submit", a), r.on("$destroy", function () {
                                        t(function () {
                                            Hn(r[0], "submit", a)
                                        }, 0, !1)
                                    })
                                }
                                var s = r.parent().controller("form"), u = i.name || i.ngForm;
                                u && bt(e, u, o, u), s && r.on("$destroy", function () {
                                    s.$removeControl(o), u && bt(e, u, n, u), f(o, jr)
                                })
                            }
                        }
                    }
                };
                return r
            }]
        }, Or = Dr(), Mr = Dr(!0),
        Lr = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        Pr = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Hr = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Fr = {
            text: on,
            number: an,
            url: sn,
            email: un,
            radio: cn,
            checkbox: ln,
            hidden: h,
            button: h,
            submit: h,
            reset: h,
            file: h
        }, Rr = ["badInput"], qr = ["$browser", "$sniffer", function (e, t) {
            return {
                restrict: "E", require: "?ngModel", link: function (n, r, i, o) {
                    o && (Fr[dn(i.type)] || Fr.text)(n, r, i, o, t, e)
                }
            }
        }], _r = "ng-valid", Ir = "ng-invalid", Br = "ng-pristine", zr = "ng-dirty",
        Ur = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (e, t, n, i, a, s) {
            function u(e, t) {
                t = t ? "-" + Z(t, "-") : "", s.removeClass(i, (e ? Ir : _r) + t), s.addClass(i, (e ? _r : Ir) + t)
            }

            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
            var c = a(n.ngModel), l = c.assign;
            if (!l) throw r("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", n.ngModel, W(i));
            this.$render = h, this.$isEmpty = function (e) {
                return m(e) || "" === e || null === e || e !== e
            };
            var f = i.inheritedData("$formController") || jr, p = 0, d = this.$error = {};
            i.addClass(Br), u(!0), this.$setValidity = function (e, t) {
                d[e] !== !t && (t ? (d[e] && p--, p || (u(!0), this.$valid = !0, this.$invalid = !1)) : (u(!1), this.$invalid = !0, this.$valid = !1, p++), d[e] = !t, u(t, e), f.$setValidity(e, t, this))
            }, this.$setPristine = function () {
                this.$dirty = !1, this.$pristine = !0, s.removeClass(i, zr), s.addClass(i, Br)
            }, this.$setViewValue = function (n) {
                this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, s.removeClass(i, Br), s.addClass(i, zr), f.$setDirty()), o(this.$parsers, function (e) {
                    n = e(n)
                }), this.$modelValue !== n && (this.$modelValue = n, l(e, n), o(this.$viewChangeListeners, function (e) {
                    try {
                        e()
                    } catch (n) {
                        t(n)
                    }
                }))
            };
            var v = this;
            e.$watch(function () {
                var t = c(e);
                if (v.$modelValue !== t) {
                    var n = v.$formatters, r = n.length;
                    for (v.$modelValue = t; r--;) t = n[r](t);
                    v.$viewValue !== t && (v.$viewValue = t, v.$render())
                }
                return t
            })
        }], Wr = function () {
            return {
                require: ["ngModel", "^?form"], controller: Ur, link: function (e, t, n, r) {
                    var i = r[0], o = r[1] || jr;
                    o.$addControl(i), e.$on("$destroy", function () {
                        o.$removeControl(i)
                    })
                }
            }
        }, Vr = g({
            require: "ngModel", link: function (e, t, n, r) {
                r.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                })
            }
        }), Qr = function () {
            return {
                require: "?ngModel", link: function (e, t, n, r) {
                    if (r) {
                        n.required = !0;
                        var i = function (e) {
                            return n.required && r.$isEmpty(e) ? void r.$setValidity("required", !1) : (r.$setValidity("required", !0), e)
                        };
                        r.$formatters.push(i), r.$parsers.unshift(i), n.$observe("required", function () {
                            i(r.$viewValue)
                        })
                    }
                }
            }
        }, Xr = function () {
            return {
                require: "ngModel", link: function (e, t, r, i) {
                    var a = /\/(.*)\//.exec(r.ngList), s = a && new RegExp(a[1]) || r.ngList || ",", u = function (e) {
                        if (!m(e)) {
                            var t = [];
                            return e && o(e.split(s), function (e) {
                                e && t.push(jn(e))
                            }), t
                        }
                    };
                    i.$parsers.push(u), i.$formatters.push(function (e) {
                        return Nn(e) ? e.join(", ") : n
                    }), i.$isEmpty = function (e) {
                        return !e || !e.length
                    }
                }
            }
        }, Jr = /^(true|false|\d+)$/, Yr = function () {
            return {
                priority: 100, compile: function (e, t) {
                    return Jr.test(t.ngValue) ? function (e, t, n) {
                        n.$set("value", e.$eval(n.ngValue))
                    } : function (e, t, n) {
                        e.$watch(n.ngValue, function (e) {
                            n.$set("value", e)
                        })
                    }
                }
            }
        }, Gr = Zt({
            compile: function (e) {
                return e.addClass("ng-binding"), function (e, t, r) {
                    t.data("$binding", r.ngBind), e.$watch(r.ngBind, function (e) {
                        t.text(e == n ? "" : e)
                    })
                }
            }
        }), Kr = ["$interpolate", function (e) {
            return function (t, n, r) {
                var i = e(n.attr(r.$attr.ngBindTemplate));
                n.addClass("ng-binding").data("$binding", i), r.$observe("ngBindTemplate", function (e) {
                    n.text(e)
                })
            }
        }], Zr = ["$sce", "$parse", function (e, t) {
            return function (n, r, i) {
                function o() {
                    return (a(n) || "").toString()
                }

                r.addClass("ng-binding").data("$binding", i.ngBindHtml);
                var a = t(i.ngBindHtml);
                n.$watch(o, function (t) {
                    r.html(e.getTrustedHtml(a(n)) || "")
                })
            }
        }], ei = fn("", !0), ti = fn("Odd", 0), ni = fn("Even", 1), ri = Zt({
            compile: function (e, t) {
                t.$set("ngCloak", n), e.removeClass("ng-cloak")
            }
        }), ii = [function () {
            return {scope: !0, controller: "@", priority: 500}
        }], oi = {};
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (e) {
        var t = Ie("ng-" + e);
        oi[t] = ["$parse", function (n) {
            return {
                compile: function (r, i) {
                    var o = n(i[t]);
                    return function (t, n) {
                        n.on(dn(e), function (e) {
                            t.$apply(function () {
                                o(t, {$event: e})
                            })
                        })
                    }
                }
            }
        }]
    });
    var ai = ["$animate", function (e) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (n, r, i, o, a) {
                var s, u, c;
                n.$watch(i.ngIf, function (o) {
                    U(o) ? u || (u = n.$new(), a(u, function (n) {
                        n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), s = {clone: n}, e.enter(n, r.parent(), r)
                    })) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = oe(s.clone), e.leave(c, function () {
                        c = null
                    }), s = null))
                })
            }
        }
    }], si = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (e, t, n, r, i) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: En.noop,
            compile: function (o, a) {
                var s = a.ngInclude || a.src, u = a.onload || "", c = a.autoscroll;
                return function (o, a, l, f, p) {
                    var d, h, v, g = 0, m = function () {
                        h && (h.remove(), h = null), d && (d.$destroy(), d = null), v && (r.leave(v, function () {
                            h = null
                        }), h = v, v = null)
                    };
                    o.$watch(i.parseAsResourceUrl(s), function (i) {
                        var s = function () {
                            !y(c) || c && !o.$eval(c) || n()
                        }, l = ++g;
                        i ? (e.get(i, {cache: t}).success(function (e) {
                            if (l === g) {
                                var t = o.$new();
                                f.template = e;
                                var n = p(t, function (e) {
                                    m(), r.enter(e, null, a, s)
                                });
                                d = t, v = n, d.$emit("$includeContentLoaded"), o.$eval(u)
                            }
                        }).error(function () {
                            l === g && m()
                        }), o.$emit("$includeContentRequested")) : (m(), f.template = null)
                    })
                }
            }
        }
    }], ui = ["$compile", function (e) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function (t, n, r, i) {
                n.html(i.template), e(n.contents())(t)
            }
        }
    }], ci = Zt({
        priority: 450, compile: function () {
            return {
                pre: function (e, t, n) {
                    e.$eval(n.ngInit)
                }
            }
        }
    }), li = Zt({terminal: !0, priority: 1e3}), fi = ["$locale", "$interpolate", function (e, t) {
        var n = /{}/g;
        return {
            restrict: "EA", link: function (r, i, a) {
                var s = a.count, u = a.$attr.when && i.attr(a.$attr.when), c = a.offset || 0, l = r.$eval(u) || {},
                    f = {}, p = t.startSymbol(), d = t.endSymbol(), h = /^when(Minus)?(.+)$/;
                o(a, function (e, t) {
                    h.test(t) && (l[dn(t.replace("when", "").replace("Minus", "-"))] = i.attr(a.$attr[t]))
                }), o(l, function (e, r) {
                    f[r] = t(e.replace(n, p + s + "-" + c + d))
                }), r.$watch(function () {
                    var t = parseFloat(r.$eval(s));
                    return isNaN(t) ? "" : (t in l || (t = e.pluralCat(t - c)), f[t](r, i, !0))
                }, function (e) {
                    i.text(e)
                })
            }
        }
    }], pi = ["$parse", "$animate", function (e, n) {
        function a(e) {
            return e.clone[0]
        }

        function s(e) {
            return e.clone[e.clone.length - 1]
        }

        var u = "$$NG_REMOVED", c = r("ngRepeat");
        return {
            transclude: "element", priority: 1e3, terminal: !0, $$tlb: !0, link: function (r, l, f, p, d) {
                var h, v, g, m, y, $, b, x, w, C = f.ngRepeat,
                    S = C.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), k = {$id: je};
                if (!S) throw c("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", C);
                if ($ = S[1], b = S[2], h = S[3], h ? (v = e(h), g = function (e, t, n) {
                    return w && (k[w] = e), k[x] = t, k.$index = n, v(r, k)
                }) : (m = function (e, t) {
                    return je(t)
                }, y = function (e) {
                    return e
                }), S = $.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !S) throw c("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", $);
                x = S[3] || S[1], w = S[2];
                var T = {};
                r.$watchCollection(b, function (e) {
                    var f, p, h, v, $, b, S, k, E, A, N, j, D = l[0], O = {}, M = [];
                    if (i(e)) A = e, E = g || m; else {
                        E = g || y, A = [];
                        for (b in e) e.hasOwnProperty(b) && "$" != b.charAt(0) && A.push(b);
                        A.sort()
                    }
                    for (v = A.length, p = M.length = A.length, f = 0; f < p; f++) if (b = e === A ? f : A[f], S = e[b], k = E(b, S, f), re(k, "`track by` id"), T.hasOwnProperty(k)) N = T[k], delete T[k], O[k] = N, M[f] = N; else {
                        if (O.hasOwnProperty(k)) throw o(M, function (e) {
                            e && e.scope && (T[e.id] = e)
                        }), c("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", C, k);
                        M[f] = {id: k}, O[k] = !1
                    }
                    for (b in T) T.hasOwnProperty(b) && (N = T[b], j = oe(N.clone), n.leave(j), o(j, function (e) {
                        e[u] = !0
                    }), N.scope.$destroy());
                    for (f = 0, p = A.length; f < p; f++) {
                        if (b = e === A ? f : A[f], S = e[b], N = M[f], M[f - 1] && (D = s(M[f - 1])), N.scope) {
                            $ = N.scope, h = D;
                            do h = h.nextSibling; while (h && h[u]);
                            a(N) != h && n.move(oe(N.clone), null, $n(D)), D = s(N)
                        } else $ = r.$new();
                        $[x] = S, w && ($[w] = b), $.$index = f, $.$first = 0 === f, $.$last = f === v - 1, $.$middle = !($.$first || $.$last), $.$odd = !($.$even = 0 === (1 & f)), N.scope || d($, function (e) {
                            e[e.length++] = t.createComment(" end ngRepeat: " + C + " "), n.enter(e, null, $n(D)), D = e, N.scope = $, N.clone = e, O[N.id] = N
                        })
                    }
                    T = O
                })
            }
        }
    }], di = ["$animate", function (e) {
        return function (t, n, r) {
            t.$watch(r.ngShow, function (t) {
                e[U(t) ? "removeClass" : "addClass"](n, "ng-hide")
            })
        }
    }], hi = ["$animate", function (e) {
        return function (t, n, r) {
            t.$watch(r.ngHide, function (t) {
                e[U(t) ? "addClass" : "removeClass"](n, "ng-hide")
            })
        }
    }], vi = Zt(function (e, t, n) {
        e.$watch(n.ngStyle, function (e, n) {
            n && e !== n && o(n, function (e, n) {
                t.css(n, "")
            }), e && t.css(e)
        }, !0)
    }), gi = ["$animate", function (e) {
        return {
            restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                this.cases = {}
            }], link: function (t, n, r, i) {
                var a = r.ngSwitch || r.on, s = [], u = [], c = [], l = [];
                t.$watch(a, function (n) {
                    var a, f;
                    for (a = 0, f = c.length; a < f; ++a) c[a].remove();
                    for (c.length = 0, a = 0, f = l.length; a < f; ++a) {
                        var p = u[a];
                        l[a].$destroy(), c[a] = p, e.leave(p, function () {
                            c.splice(a, 1)
                        })
                    }
                    u.length = 0, l.length = 0, (s = i.cases["!" + n] || i.cases["?"]) && (t.$eval(r.change), o(s, function (n) {
                        var r = t.$new();
                        l.push(r), n.transclude(r, function (t) {
                            var r = n.element;
                            u.push(t), e.enter(t, r.parent(), r)
                        })
                    }))
                })
            }
        }
    }], mi = Zt({
        transclude: "element", priority: 800, require: "^ngSwitch", link: function (e, t, n, r, i) {
            r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                transclude: i,
                element: t
            })
        }
    }), yi = Zt({
        transclude: "element", priority: 800, require: "^ngSwitch", link: function (e, t, n, r, i) {
            r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: t})
        }
    }), $i = Zt({
        link: function (e, t, n, i, o) {
            if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", W(t));
            o(function (e) {
                t.empty(), t.append(e)
            })
        }
    }), bi = ["$templateCache", function (e) {
        return {
            restrict: "E", terminal: !0, compile: function (t, n) {
                if ("text/ng-template" == n.type) {
                    var r = n.id, i = t[0].text;
                    e.put(r, i)
                }
            }
        }
    }], xi = r("ngOptions"), wi = g({terminal: !0}), Ci = ["$compile", "$parse", function (e, r) {
        var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            s = {$setViewValue: h};
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function (e, t, n) {
                var r, i, o = this, a = {}, u = s;
                o.databound = n.ngModel, o.init = function (e, t, n) {
                    u = e, r = t, i = n
                }, o.addOption = function (t) {
                    re(t, '"option value"'), a[t] = !0, u.$viewValue == t && (e.val(t), i.parent() && i.remove())
                }, o.removeOption = function (e) {
                    this.hasOption(e) && (delete a[e], u.$viewValue == e && this.renderUnknownOption(e))
                }, o.renderUnknownOption = function (t) {
                    var n = "? " + je(t) + " ?";
                    i.val(n), e.prepend(i), e.val(n), i.prop("selected", !0)
                }, o.hasOption = function (e) {
                    return a.hasOwnProperty(e)
                }, t.$on("$destroy", function () {
                    o.renderUnknownOption = h
                })
            }],
            link: function (s, u, c, l) {
                function f(e, t, n, r) {
                    n.$render = function () {
                        var e = n.$viewValue;
                        r.hasOption(e) ? (S.parent() && S.remove(), t.val(e), "" === e && h.prop("selected", !0)) : m(e) && h ? t.val("") : r.renderUnknownOption(e)
                    }, t.on("change", function () {
                        e.$apply(function () {
                            S.parent() && S.remove(), n.$setViewValue(t.val())
                        })
                    })
                }

                function p(e, t, n) {
                    var r;
                    n.$render = function () {
                        var e = new De(n.$viewValue);
                        o(t.find("option"), function (t) {
                            t.selected = y(e.get(t.value))
                        })
                    }, e.$watch(function () {
                        H(r, n.$viewValue) || (r = P(n.$viewValue), n.$render())
                    }), t.on("change", function () {
                        e.$apply(function () {
                            var e = [];
                            o(t.find("option"), function (t) {
                                t.selected && e.push(t.value)
                            }), n.$setViewValue(e)
                        })
                    })
                }

                function d(t, o, s) {
                    function u() {
                        var e, n, r, i, u, c, g, b, k, T, E, A, N, j, D, O = {"": []}, M = [""], L = s.$modelValue,
                            P = v(t) || [], H = p ? a(P) : P, F = {}, R = !1;
                        if ($) if (m && Nn(L)) {
                            R = new De([]);
                            for (var q = 0; q < L.length; q++) F[f] = L[q], R.put(m(t, F), L[q])
                        } else R = new De(L);
                        for (E = 0; k = H.length, E < k; E++) {
                            if (g = E, p) {
                                if (g = H[E], "$" === g.charAt(0)) continue;
                                F[p] = g
                            }
                            if (F[f] = P[g], e = d(t, F) || "", (n = O[e]) || (n = O[e] = [], M.push(e)), $) A = y(R.remove(m ? m(t, F) : h(t, F))); else {
                                if (m) {
                                    var _ = {};
                                    _[f] = L, A = m(t, _) === m(t, F)
                                } else A = L === h(t, F);
                                R = R || A
                            }
                            D = l(t, F), D = y(D) ? D : "", n.push({
                                id: m ? m(t, F) : p ? H[E] : E,
                                label: D,
                                selected: A
                            })
                        }
                        for ($ || (x || null === L ? O[""].unshift({
                            id: "",
                            label: "",
                            selected: !R
                        }) : R || O[""].unshift({id: "?", label: "", selected: !0})), T = 0, b = M.length; T < b; T++) {
                            for (e = M[T], n = O[e], S.length <= T ? (i = {
                                element: C.clone().attr("label", e),
                                label: n.label
                            }, u = [i], S.push(u), o.append(i.element)) : (u = S[T], i = u[0], i.label != e && i.element.attr("label", i.label = e)), N = null, E = 0, k = n.length; E < k; E++) r = n[E], (c = u[E + 1]) ? (N = c.element, c.label !== r.label && N.text(c.label = r.label), c.id !== r.id && N.val(c.id = r.id), c.selected !== r.selected && N.prop("selected", c.selected = r.selected)) : ("" === r.id && x ? j = x : (j = w.clone()).val(r.id).prop("selected", r.selected).text(r.label), u.push(c = {
                                element: j,
                                label: r.label,
                                id: r.id,
                                selected: r.selected
                            }), N ? N.after(j) : i.element.append(j), N = j);
                            for (E++; u.length > E;) u.pop().element.remove()
                        }
                        for (; S.length > T;) S.pop()[0].element.remove()
                    }

                    var c;
                    if (!(c = b.match(i))) throw xi("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", b, W(o));
                    var l = r(c[2] || c[1]), f = c[4] || c[6], p = c[5], d = r(c[3] || ""), h = r(c[2] ? c[1] : f),
                        v = r(c[7]), g = c[8], m = g ? r(c[8]) : null, S = [[{element: o, label: ""}]];
                    x && (e(x)(t), x.removeClass("ng-scope"), x.remove()), o.empty(), o.on("change", function () {
                        t.$apply(function () {
                            var e, r, i, a, u, c, l, d, g, y = v(t) || [], b = {};
                            if ($) {
                                for (i = [], c = 0, d = S.length; c < d; c++) for (e = S[c], u = 1, l = e.length; u < l; u++) if ((a = e[u].element)[0].selected) {
                                    if (r = a.val(), p && (b[p] = r), m) for (g = 0; g < y.length && (b[f] = y[g], m(t, b) != r); g++) ; else b[f] = y[r];
                                    i.push(h(t, b))
                                }
                            } else {
                                if (r = o.val(), "?" == r) i = n; else if ("" === r) i = null; else if (m) {
                                    for (g = 0; g < y.length; g++) if (b[f] = y[g], m(t, b) == r) {
                                        i = h(t, b);
                                        break
                                    }
                                } else b[f] = y[r], p && (b[p] = r), i = h(t, b);
                                S[0].length > 1 && S[0][1].id !== r && (S[0][1].selected = !1)
                            }
                            s.$setViewValue(i)
                        })
                    }), s.$render = u, t.$watch(u)
                }

                if (l[1]) {
                    for (var h, v = l[0], g = l[1], $ = c.multiple, b = c.ngOptions, x = !1, w = $n(t.createElement("option")), C = $n(t.createElement("optgroup")), S = w.clone(), k = 0, T = u.children(), E = T.length; k < E; k++) if ("" === T[k].value) {
                        h = x = T.eq(k);
                        break
                    }
                    v.init(g, x, S), $ && (g.$isEmpty = function (e) {
                        return !e || 0 === e.length
                    }), b ? d(s, u, g) : $ ? p(s, u, g) : f(s, u, g, v)
                }
            }
        }
    }], Si = ["$interpolate", function (e) {
        var t = {addOption: h, removeOption: h};
        return {
            restrict: "E", priority: 100, compile: function (n, r) {
                if (m(r.value)) {
                    var i = e(n.text(), !0);
                    i || r.$set("value", n.text())
                }
                return function (e, n, r) {
                    var o = "$selectController", a = n.parent(), s = a.data(o) || a.parent().data(o);
                    s && s.databound ? n.prop("selected", !1) : s = t, i ? e.$watch(i, function (e, t) {
                        r.$set("value", e), e !== t && s.removeOption(t), s.addOption(e)
                    }) : s.addOption(r.value), n.on("$destroy", function () {
                        s.removeOption(r.value)
                    })
                }
            }
        }
    }], ki = g({restrict: "E", terminal: !0});
    return e.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ee(), se(En), void $n(t).ready(function () {
        G(t, K)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), function (e, t, n) {
    "use strict";

    function r() {
        function e(e, n) {
            return t.extend(new (t.extend(function () {
            }, {prototype: e})), n)
        }

        function n(e, t) {
            var n = t.caseInsensitiveMatch, r = {originalPath: e, regexp: e}, i = r.keys = [];
            return e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (e, t, n, r) {
                var o = "?" === r ? r : null, a = "*" === r ? r : null;
                return i.push({
                    name: n,
                    optional: !!o
                }), t = t || "", "" + (o ? "" : t) + "(?:" + (o ? t : "") + (a && "(.+?)" || "([^/]+)") + (o || "") + ")" + (o || "")
            }).replace(/([\/$\*])/g, "\\$1"), r.regexp = new RegExp("^" + e + "$", n ? "i" : ""), r
        }

        var r = {};
        this.when = function (e, i) {
            if (r[e] = t.extend({reloadOnSearch: !0}, i, e && n(e, i)), e) {
                var o = "/" == e[e.length - 1] ? e.substr(0, e.length - 1) : e + "/";
                r[o] = t.extend({redirectTo: e}, n(o, i))
            }
            return this
        }, this.otherwise = function (e) {
            return this.when(null, e), this
        }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function (n, i, o, a, s, u, c, l) {
            function f(e, t) {
                var n = t.keys, r = {};
                if (!t.regexp) return null;
                var i = t.regexp.exec(e);
                if (!i) return null;
                for (var o = 1, a = i.length; o < a; ++o) {
                    var s = n[o - 1], u = "string" == typeof i[o] ? decodeURIComponent(i[o]) : i[o];
                    s && u && (r[s.name] = u)
                }
                return r
            }

            function p() {
                var e = d(), r = g.current;
                e && r && e.$$route === r.$$route && t.equals(e.pathParams, r.pathParams) && !e.reloadOnSearch && !v ? (r.params = e.params, t.copy(r.params, o), n.$broadcast("$routeUpdate", r)) : (e || r) && (v = !1, n.$broadcast("$routeChangeStart", e, r), g.current = e, e && e.redirectTo && (t.isString(e.redirectTo) ? i.path(h(e.redirectTo, e.params)).search(e.params).replace() : i.url(e.redirectTo(e.pathParams, i.path(), i.search())).replace()), a.when(e).then(function () {
                    if (e) {
                        var n, r, i = t.extend({}, e.resolve);
                        return t.forEach(i, function (e, n) {
                            i[n] = t.isString(e) ? s.get(e) : s.invoke(e)
                        }), t.isDefined(n = e.template) ? t.isFunction(n) && (n = n(e.params)) : t.isDefined(r = e.templateUrl) && (t.isFunction(r) && (r = r(e.params)), r = l.getTrustedResourceUrl(r), t.isDefined(r) && (e.loadedTemplateUrl = r, n = u.get(r, {cache: c}).then(function (e) {
                            return e.data
                        }))), t.isDefined(n) && (i.$template = n), a.all(i)
                    }
                }).then(function (i) {
                    e == g.current && (e && (e.locals = i, t.copy(e.params, o)), n.$broadcast("$routeChangeSuccess", e, r))
                }, function (t) {
                    e == g.current && n.$broadcast("$routeChangeError", e, r, t)
                }))
            }

            function d() {
                var n, o;
                return t.forEach(r, function (r, a) {
                    !o && (n = f(i.path(), r)) && (o = e(r, {
                        params: t.extend({}, i.search(), n),
                        pathParams: n
                    }), o.$$route = r)
                }), o || r[null] && e(r[null], {params: {}, pathParams: {}})
            }

            function h(e, n) {
                var r = [];
                return t.forEach((e || "").split(":"), function (e, t) {
                    if (0 === t) r.push(e); else {
                        var i = e.match(/(\w+)(.*)/), o = i[1];
                        r.push(n[o]), r.push(i[2] || ""), delete n[o]
                    }
                }), r.join("")
            }

            var v = !1, g = {
                routes: r, reload: function () {
                    v = !0, n.$evalAsync(p)
                }
            };
            return n.$on("$locationChangeSuccess", p), g
        }]
    }

    function i() {
        this.$get = function () {
            return {}
        }
    }

    function o(e, n, r) {
        return {
            restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (i, o, a, s, u) {
                function c() {
                    d && (d.remove(), d = null), f && (f.$destroy(), f = null), p && (r.leave(p, function () {
                        d = null
                    }), d = p, p = null)
                }

                function l() {
                    var a = e.current && e.current.locals, s = a && a.$template;
                    if (t.isDefined(s)) {
                        var l = i.$new(), d = e.current, g = u(l, function (e) {
                            r.enter(e, null, p || o, function () {
                                !t.isDefined(h) || h && !i.$eval(h) || n()
                            }), c()
                        });
                        p = g, f = d.scope = l, f.$emit("$viewContentLoaded"), f.$eval(v)
                    } else c()
                }

                var f, p, d, h = a.autoscroll, v = a.onload || "";
                i.$on("$routeChangeSuccess", l), l()
            }
        }
    }

    function a(e, t, n) {
        return {
            restrict: "ECA", priority: -400, link: function (r, i) {
                var o = n.current, a = o.locals;
                i.html(a.$template);
                var s = e(i.contents());
                if (o.controller) {
                    a.$scope = r;
                    var u = t(o.controller, a);
                    o.controllerAs && (r[o.controllerAs] = u), i.data("$ngControllerController", u), i.children().data("$ngControllerController", u)
                }
                s(r)
            }
        }
    }

    var s = t.module("ngRoute", ["ng"]).provider("$route", r);
    s.provider("$routeParams", i), s.directive("ngView", o), s.directive("ngView", a), o.$inject = ["$route", "$anchorScroll", "$animate"], a.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular), function (e, t, n) {
    "use strict";
    t.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
        var e = "$$ngAnimateChildren";
        return function (n, r, i) {
            var o = i.ngAnimateChildren;
            t.isString(o) && 0 === o.length ? r.data(e, !0) : n.$watch(o, function (t) {
                r.data(e, !!t)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document", function (e, t) {
        var n = t[0].body;
        return function (t) {
            return e(function () {
                n.offsetWidth + 1;
                t()
            })
        }
    }]).config(["$provide", "$animateProvider", function (r, i) {
        function o(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.nodeType == p) return n
            }
        }

        function a(e) {
            return e && t.element(e)
        }

        function s(e) {
            return t.element(o(e))
        }

        function u(e, t) {
            return o(e) == o(t)
        }

        var c = t.noop, l = t.forEach, f = i.$$selectors, p = 1, d = "$$ngAnimateState", h = "$$ngAnimateChildren",
            v = "ng-animate", g = {running: !0};
        r.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function (e, n, r, p, m, y, $) {
            function b(e) {
                var t = e.data(d) || {};
                t.running = !0, e.data(d, t)
            }

            function x(e) {
                if (e) {
                    var t = [], i = {}, o = e.substr(1).split(".");
                    (r.transitions || r.animations) && t.push(n.get(f[""]));
                    for (var a = 0; a < o.length; a++) {
                        var s = o[a], u = f[s];
                        u && !i[s] && (t.push(n.get(u)), i[s] = !0)
                    }
                    return t
                }
            }

            function w(e, n, r) {
                function i(e, t) {
                    var n = e[t], r = e["before" + t.charAt(0).toUpperCase() + t.substr(1)];
                    if (n || r) return "leave" == t && (r = n, n = null), b.push({event: t, fn: n}), m.push({
                        event: t,
                        fn: r
                    }), !0
                }

                function o(t, n, i) {
                    function o(e) {
                        if (n) {
                            if ((n[e] || c)(), ++f < a.length) return;
                            n = null
                        }
                        i()
                    }

                    var a = [];
                    l(t, function (e) {
                        e.fn && a.push(e)
                    });
                    var f = 0;
                    l(a, function (t, i) {
                        var a = function () {
                            o(i)
                        };
                        switch (t.event) {
                            case"setClass":
                                n.push(t.fn(e, s, u, a));
                                break;
                            case"addClass":
                                n.push(t.fn(e, s || r, a));
                                break;
                            case"removeClass":
                                n.push(t.fn(e, u || r, a));
                                break;
                            default:
                                n.push(t.fn(e, a))
                        }
                    }), n && 0 === n.length && i()
                }

                var a = e[0];
                if (a) {
                    var s, u, f = "setClass" == n, p = f || "addClass" == n || "removeClass" == n;
                    t.isArray(r) && (s = r[0], u = r[1], r = s + " " + u);
                    var d = e.attr("class"), h = d + " " + r;
                    if (N(h)) {
                        var v = c, g = [], m = [], y = c, $ = [], b = [], w = (" " + h).replace(/\s+/g, ".");
                        return l(x(w), function (e) {
                            var t = i(e, n);
                            !t && f && (i(e, "addClass"), i(e, "removeClass"))
                        }), {
                            node: a,
                            event: n,
                            className: r,
                            isClassBased: p,
                            isSetClassOperation: f,
                            before: function (e) {
                                v = e, o(m, g, function () {
                                    v = c, e()
                                })
                            },
                            after: function (e) {
                                y = e, o(b, $, function () {
                                    y = c, e()
                                })
                            },
                            cancel: function () {
                                g && (l(g, function (e) {
                                    (e || c)(!0)
                                }), v(!0)), $ && (l($, function (e) {
                                    (e || c)(!0)
                                }), y(!0))
                            }
                        }
                    }
                }
            }

            function C(e, n, r, i, o, a, s) {
                function u(t) {
                    var i = "$animate:" + t;
                    $ && $[i] && $[i].length > 0 && m(function () {
                        r.triggerHandler(i, {event: e, className: n})
                    })
                }

                function c() {
                    u("before")
                }

                function f() {
                    u("after")
                }

                function p() {
                    u("close"), s && m(function () {
                        s()
                    })
                }

                function h() {
                    h.hasBeenRun || (h.hasBeenRun = !0, a())
                }

                function g() {
                    if (!g.hasBeenRun) {
                        g.hasBeenRun = !0;
                        var t = r.data(d);
                        t && (y && y.isClassBased ? k(r, n) : (m(function () {
                            var t = r.data(d) || {};
                            M == t.index && k(r, n, e)
                        }), r.data(d, t))), p()
                    }
                }

                var y = w(r, e, n);
                if (!y) return h(), c(), f(), void g();
                n = y.className;
                var $ = t.element._data(y.node);
                $ = $ && $.events, i || (i = o ? o.parent() : r.parent());
                var b, x = r.data(d) || {}, C = x.active || {}, S = x.totalActive || 0, A = x.last;
                if (y.isClassBased && (b = x.running || x.disabled || A && !A.isClassBased), b || T(r, i)) return h(), c(), f(), void g();
                var N = !1;
                if (S > 0) {
                    var j = [];
                    if (y.isClassBased) {
                        if ("setClass" == A.event) j.push(A), k(r, n); else if (C[n]) {
                            var D = C[n];
                            D.event == e ? N = !0 : (j.push(D), k(r, n))
                        }
                    } else if ("leave" == e && C["ng-leave"]) N = !0; else {
                        for (var O in C) j.push(C[O]), k(r, O);
                        C = {}, S = 0
                    }
                    j.length > 0 && l(j, function (e) {
                        e.cancel()
                    })
                }
                if (!y.isClassBased || y.isSetClassOperation || N || (N = "addClass" == e == r.hasClass(n)), N) return h(), c(), f(), void p();
                "leave" == e && r.one("$destroy", function (e) {
                    var n = t.element(this), r = n.data(d);
                    if (r) {
                        var i = r.active["ng-leave"];
                        i && (i.cancel(), k(n, "ng-leave"))
                    }
                }), r.addClass(v);
                var M = E++;
                S++, C[n] = y, r.data(d, {last: y, active: C, index: M, totalActive: S}), c(), y.before(function (t) {
                    var i = r.data(d);
                    t = t || !i || !i.active[n] || y.isClassBased && i.active[n].event != e, h(), t === !0 ? g() : (f(), y.after(g))
                })
            }

            function S(e) {
                var n = o(e);
                if (n) {
                    var r = t.isFunction(n.getElementsByClassName) ? n.getElementsByClassName(v) : n.querySelectorAll("." + v);
                    l(r, function (e) {
                        e = t.element(e);
                        var n = e.data(d);
                        n && n.active && l(n.active, function (e) {
                            e.cancel()
                        })
                    })
                }
            }

            function k(e, t) {
                if (u(e, p)) g.disabled || (g.running = !1, g.structural = !1); else if (t) {
                    var n = e.data(d) || {}, r = t === !0;
                    !r && n.active && n.active[t] && (n.totalActive--, delete n.active[t]), !r && n.totalActive || (e.removeClass(v), e.removeData(d))
                }
            }

            function T(e, n) {
                if (g.disabled) return !0;
                if (u(e, p)) return g.running;
                var r, i, o;
                do {
                    if (0 === n.length) break;
                    var a = u(n, p), s = a ? g : n.data(d) || {};
                    if (s.disabled) return !0;
                    if (a && (o = !0), r !== !1) {
                        var c = n.data(h);
                        t.isDefined(c) && (r = c)
                    }
                    i = i || s.running || s.last && !s.last.isClassBased
                } while (n = n.parent());
                return !o || !r && i
            }

            var E = 0;
            p.data(d, g), y.$$postDigest(function () {
                y.$$postDigest(function () {
                    g.running = !1
                })
            });
            var A = i.classNameFilter(), N = A ? function (e) {
                return A.test(e)
            } : function () {
                return !0
            };
            return {
                enter: function (n, r, i, o) {
                    n = t.element(n), r = a(r), i = a(i), b(n), e.enter(n, r, i), y.$$postDigest(function () {
                        n = s(n), C("enter", "ng-enter", n, r, i, c, o)
                    })
                }, leave: function (n, r) {
                    n = t.element(n), S(n), b(n), y.$$postDigest(function () {
                        C("leave", "ng-leave", s(n), null, null, function () {
                            e.leave(n)
                        }, r)
                    })
                }, move: function (n, r, i, o) {
                    n = t.element(n), r = a(r), i = a(i), S(n), b(n), e.move(n, r, i), y.$$postDigest(function () {
                        n = s(n), C("move", "ng-move", n, r, i, c, o)
                    })
                }, addClass: function (n, r, i) {
                    n = t.element(n), n = s(n), C("addClass", r, n, null, null, function () {
                        e.addClass(n, r)
                    }, i)
                }, removeClass: function (n, r, i) {
                    n = t.element(n), n = s(n), C("removeClass", r, n, null, null, function () {
                        e.removeClass(n, r)
                    }, i)
                }, setClass: function (n, r, i, o) {
                    n = t.element(n), n = s(n), C("setClass", [r, i], n, null, null, function () {
                        e.setClass(n, r, i)
                    }, o)
                }, enabled: function (e, t) {
                    switch (arguments.length) {
                        case 2:
                            if (e) k(t); else {
                                var n = t.data(d) || {};
                                n.disabled = !0, t.data(d, n)
                            }
                            break;
                        case 1:
                            g.disabled = !e;
                            break;
                        default:
                            e = !g.disabled
                    }
                    return !!e
                }
            }
        }]), i.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function (r, i, a, s) {
            function u(e, t) {
                P && P(), X.push(t), P = s(function () {
                    l(X, function (e) {
                        e()
                    }), X = [], P = null, V = {}
                })
            }

            function f(e, n) {
                var r = o(e);
                e = t.element(r), G.push(e);
                var i = Date.now() + n;
                i <= Y || (a.cancel(J), Y = i, J = a(function () {
                    d(G), G = []
                }, n, !1))
            }

            function d(e) {
                l(e, function (e) {
                    var t = e.data(I);
                    t && (t.closeAnimationFn || c)()
                })
            }

            function h(e, t) {
                var n = t ? V[t] : null;
                if (!n) {
                    var i, o, a, s, u = 0, c = 0, f = 0, d = 0;
                    l(e, function (e) {
                        if (e.nodeType == p) {
                            var t = r.getComputedStyle(e) || {};
                            a = t[j + H], u = Math.max(v(a), u), s = t[j + F], i = t[j + R], c = Math.max(v(i), c), o = t[O + R], d = Math.max(v(o), d);
                            var n = v(t[O + H]);
                            n > 0 && (n *= parseInt(t[O + q], 10) || 1), f = Math.max(n, f)
                        }
                    }), n = {
                        total: 0,
                        transitionPropertyStyle: s,
                        transitionDurationStyle: a,
                        transitionDelayStyle: i,
                        transitionDelay: c,
                        transitionDuration: u,
                        animationDelayStyle: o,
                        animationDelay: d,
                        animationDuration: f
                    }, t && (V[t] = n)
                }
                return n
            }

            function v(e) {
                var n = 0, r = t.isString(e) ? e.split(/\s*,\s*/) : [];
                return l(r, function (e) {
                    n = Math.max(parseFloat(e) || 0, n)
                }), n
            }

            function g(e) {
                var t = e.parent(), n = t.data(_);
                return n || (t.data(_, ++Q), n = Q), n + "-" + o(e).getAttribute("class")
            }

            function m(e, t, n, r) {
                var i = g(t), o = i + " " + n, a = V[o] ? ++V[o].total : 0, s = {};
                if (a > 0) {
                    var u = n + "-stagger", l = i + " " + u, f = !V[l];
                    f && t.addClass(u), s = h(t, l), f && t.removeClass(u)
                }
                r = r || function (e) {
                    return e()
                }, t.addClass(n);
                var p = t.data(I) || {}, d = r(function () {
                    return h(t, o)
                }), v = d.transitionDuration, m = d.animationDuration;
                if (0 === v && 0 === m) return t.removeClass(n), !1;
                t.data(I, {running: p.running || 0, itemIndex: a, stagger: s, timings: d, closeAnimationFn: c});
                var y = p.running > 0 || "setClass" == e;
                return v > 0 && $(t, n, y), m > 0 && s.animationDelay > 0 && 0 === s.animationDuration && b(t), !0
            }

            function y(e) {
                return "ng-enter" == e || "ng-move" == e || "ng-leave" == e
            }

            function $(e, t, n) {
                y(t) || !n ? o(e).style[j + F] = "none" : e.addClass(B)
            }

            function b(e) {
                o(e).style[O] = "none 0s"
            }

            function x(e, t) {
                var n = j + F, r = o(e);
                r.style[n] && r.style[n].length > 0 && (r.style[n] = ""), e.removeClass(B)
            }

            function w(e) {
                var t = O, n = o(e);
                n.style[t] && n.style[t].length > 0 && (n.style[t] = "")
            }

            function C(e, t, n, r) {
                function i(e) {
                    t.off($, a), t.removeClass(c), A(t, n);
                    var r = o(t);
                    for (var i in x) r.style.removeProperty(x[i])
                }

                function a(e) {
                    e.stopPropagation();
                    var t = e.originalEvent || e, n = t.$manualTimeStamp || t.timeStamp || Date.now(),
                        i = parseFloat(t.elapsedTime.toFixed(z));
                    Math.max(n - y, 0) >= m && i >= v && r()
                }

                var s = o(t), u = t.data(I);
                if (s.getAttribute("class").indexOf(n) == -1 || !u) return void r();
                var c = "";
                l(n.split(" "), function (e, t) {
                    c += (t > 0 ? " " : "") + e + "-active"
                });
                var p = u.stagger, d = u.timings, h = u.itemIndex,
                    v = Math.max(d.transitionDuration, d.animationDuration),
                    g = Math.max(d.transitionDelay, d.animationDelay), m = g * W, y = Date.now(), $ = M + " " + D,
                    b = "", x = [];
                if (d.transitionDuration > 0) {
                    var w = d.transitionPropertyStyle;
                    w.indexOf("all") == -1 && (b += L + "transition-property: " + w + ";", b += L + "transition-duration: " + d.transitionDurationStyle + ";", x.push(L + "transition-property"), x.push(L + "transition-duration"))
                }
                if (h > 0) {
                    if (p.transitionDelay > 0 && 0 === p.transitionDuration) {
                        var C = d.transitionDelayStyle;
                        b += L + "transition-delay: " + S(C, p.transitionDelay, h) + "; ", x.push(L + "transition-delay")
                    }
                    p.animationDelay > 0 && 0 === p.animationDuration && (b += L + "animation-delay: " + S(d.animationDelayStyle, p.animationDelay, h) + "; ", x.push(L + "animation-delay"))
                }
                if (x.length > 0) {
                    var k = s.getAttribute("style") || "";
                    s.setAttribute("style", k + "; " + b)
                }
                t.on($, a), t.addClass(c), u.closeAnimationFn = function () {
                    i(), r()
                };
                var T = h * (Math.max(p.animationDelay, p.transitionDelay) || 0), E = (g + v) * U, N = (T + E) * W;
                return u.running++, f(t, N), i
            }

            function S(e, t, n) {
                var r = "";
                return l(e.split(","), function (e, i) {
                    r += (i > 0 ? "," : "") + (n * t + parseInt(e, 10)) + "s"
                }), r
            }

            function k(e, t, n, r) {
                if (m(e, t, n, r)) return function (e) {
                    e && A(t, n)
                }
            }

            function T(e, t, n, r) {
                return t.data(I) ? C(e, t, n, r) : (A(t, n), void r())
            }

            function E(e, t, n, r) {
                var i = k(e, t, n);
                if (!i) return void r();
                var o = i;
                return u(t, function () {
                    x(t, n), w(t), o = T(e, t, n, r)
                }), function (e) {
                    (o || c)(e)
                }
            }

            function A(e, t) {
                e.removeClass(t);
                var n = e.data(I);
                n && (n.running && n.running--, n.running && 0 !== n.running || e.removeData(I))
            }

            function N(e, n) {
                var r = "";
                return e = t.isArray(e) ? e : e.split(/\s+/), l(e, function (e, t) {
                    e && e.length > 0 && (r += (t > 0 ? " " : "") + e + n)
                }), r
            }

            var j, D, O, M, L = "";
            e.ontransitionend === n && e.onwebkittransitionend !== n ? (L = "-webkit-", j = "WebkitTransition", D = "webkitTransitionEnd transitionend") : (j = "transition", D = "transitionend"), e.onanimationend === n && e.onwebkitanimationend !== n ? (L = "-webkit-", O = "WebkitAnimation", M = "webkitAnimationEnd animationend") : (O = "animation", M = "animationend");
            var P, H = "Duration", F = "Property", R = "Delay", q = "IterationCount", _ = "$$ngAnimateKey",
                I = "$$ngAnimateCSS3Data", B = "ng-animate-block-transitions", z = 3, U = 1.5, W = 1e3, V = {}, Q = 0,
                X = [], J = null, Y = 0, G = [];
            return {
                enter: function (e, t) {
                    return E("enter", e, "ng-enter", t)
                }, leave: function (e, t) {
                    return E("leave", e, "ng-leave", t)
                }, move: function (e, t) {
                    return E("move", e, "ng-move", t)
                }, beforeSetClass: function (e, t, n, r) {
                    var i = N(n, "-remove") + " " + N(t, "-add"), o = k("setClass", e, i, function (r) {
                        var i = e.attr("class");
                        e.removeClass(n), e.addClass(t);
                        var o = r();
                        return e.attr("class", i), o
                    });
                    return o ? (u(e, function () {
                        x(e, i), w(e), r()
                    }), o) : void r()
                }, beforeAddClass: function (e, t, n) {
                    var r = k("addClass", e, N(t, "-add"), function (n) {
                        e.addClass(t);
                        var r = n();
                        return e.removeClass(t), r
                    });
                    return r ? (u(e, function () {
                        x(e, t), w(e), n()
                    }), r) : void n()
                }, setClass: function (e, t, n, r) {
                    n = N(n, "-remove"), t = N(t, "-add");
                    var i = n + " " + t;
                    return T("setClass", e, i, r)
                }, addClass: function (e, t, n) {
                    return T("addClass", e, N(t, "-add"), n)
                }, beforeRemoveClass: function (e, t, n) {
                    var r = k("removeClass", e, N(t, "-remove"), function (n) {
                        var r = e.attr("class");
                        e.removeClass(t);
                        var i = n();
                        return e.attr("class", r), i
                    });
                    return r ? (u(e, function () {
                        x(e, t), w(e), n()
                    }), r) : void n()
                }, removeClass: function (e, t, n) {
                    return T("removeClass", e, N(t, "-remove"), n)
                }
            }
        }])
    }])
}(window, window.angular), function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        i.directive(e, ["$parse", "$swipe", function (r, i) {
            var o = 75, a = .3, s = 30;
            return function (u, c, l) {
                function f(e) {
                    if (!p) return !1;
                    var n = Math.abs(e.y - p.y), r = (e.x - p.x) * t;
                    return d && n < o && r > 0 && r > s && n / r < a
                }

                var p, d, h = r(l[e]);
                i.bind(c, {
                    start: function (e, t) {
                        p = e, d = !0
                    }, cancel: function (e) {
                        d = !1
                    }, end: function (e, t) {
                        f(e) && u.$apply(function () {
                            c.triggerHandler(n), h(u, {$event: t})
                        })
                    }
                })
            }
        }])
    }

    var i = t.module("ngTouch", []);
    i.factory("$swipe", [function () {
        function e(e) {
            var t = e.touches && e.touches.length ? e.touches : [e],
                n = e.changedTouches && e.changedTouches[0] || e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] || t[0].originalEvent || t[0];
            return {x: n.clientX, y: n.clientY}
        }

        var t = 10;
        return {
            bind: function (n, r) {
                var i, o, a, s, u = !1;
                n.on("touchstart mousedown", function (t) {
                    a = e(t), u = !0, i = 0, o = 0, s = a, r.start && r.start(a, t)
                }), n.on("touchcancel", function (e) {
                    u = !1, r.cancel && r.cancel(e)
                }), n.on("touchmove mousemove", function (n) {
                    if (u && a) {
                        var c = e(n);
                        if (i += Math.abs(c.x - s.x), o += Math.abs(c.y - s.y), s = c, !(i < t && o < t)) return o > i ? (u = !1, void (r.cancel && r.cancel(n))) : (n.preventDefault(), void (r.move && r.move(c, n)))
                    }
                }), n.on("touchend mouseup", function (t) {
                    u && (u = !1, r.end && r.end(e(t), t))
                })
            }
        }
    }]), i.config(["$provide", function (e) {
        e.decorator("ngClickDirective", ["$delegate", function (e) {
            return e.shift(), e
        }])
    }]), i.directive("ngClick", ["$parse", "$timeout", "$rootElement", function (e, n, r) {
        function i(e, t, n, r) {
            return Math.abs(e - n) < v && Math.abs(t - r) < v
        }

        function o(e, t, n) {
            for (var r = 0; r < e.length; r += 2) if (i(e[r], e[r + 1], t, n)) return e.splice(r, r + 2), !0;
            return !1
        }

        function a(e) {
            if (!(Date.now() - c > h)) {
                var t = e.touches && e.touches.length ? e.touches : [e], n = t[0].clientX, r = t[0].clientY;
                n < 1 && r < 1 || f && f[0] === n && f[1] === r || (f && (f = null), "label" === e.target.tagName.toLowerCase() && (f = [n, r]), o(l, n, r) || (e.stopPropagation(), e.preventDefault(), e.target && e.target.blur()))
            }
        }

        function s(e) {
            var t = e.touches && e.touches.length ? e.touches : [e], r = t[0].clientX, i = t[0].clientY;
            l.push(r, i), n(function () {
                for (var e = 0; e < l.length; e += 2) if (l[e] == r && l[e + 1] == i) return void l.splice(e, e + 2)
            }, h, !1)
        }

        function u(e, t) {
            l || (r[0].addEventListener("click", a, !0), r[0].addEventListener("touchstart", s, !0), l = []), c = Date.now(), o(l, e, t)
        }

        var c, l, f, p = 750, d = 12, h = 2500, v = 25, g = "ng-click-active";
        return function (n, r, i) {
            function o() {
                h = !1, r.removeClass(g)
            }

            var a, s, c, l, f = e(i.ngClick), h = !1;
            r.on("touchstart", function (e) {
                h = !0, a = e.target ? e.target : e.srcElement, 3 == a.nodeType && (a = a.parentNode), r.addClass(g), s = Date.now();
                var t = e.touches && e.touches.length ? e.touches : [e], n = t[0].originalEvent || t[0];
                c = n.clientX, l = n.clientY
            }), r.on("touchmove", function (e) {
                o()
            }), r.on("touchcancel", function (e) {
                o()
            }), r.on("touchend", function (e) {
                var n = Date.now() - s,
                    f = e.changedTouches && e.changedTouches.length ? e.changedTouches : e.touches && e.touches.length ? e.touches : [e],
                    v = f[0].originalEvent || f[0], g = v.clientX, m = v.clientY,
                    y = Math.sqrt(Math.pow(g - c, 2) + Math.pow(m - l, 2));
                h && n < p && y < d && (u(g, m), a && a.blur(), t.isDefined(i.disabled) && i.disabled !== !1 || r.triggerHandler("click", [e])), o()
            }), r.onclick = function (e) {
            }, r.on("click", function (e, t) {
                n.$apply(function () {
                    f(n, {$event: t || e})
                })
            }), r.on("mousedown", function (e) {
                r.addClass(g)
            }), r.on("mousemove mouseup", function (e) {
                r.removeClass(g)
            })
        }
    }]), r("ngSwipeLeft", -1, "swipeleft"), r("ngSwipeRight", 1, "swiperight")
}(window, window.angular), function (e, t) {
    "use strict";
    var n = "@2x",
        r = /^data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/,
        i = /captcha/, o = e.module("ngRetina", []).config(["$provide", function (e) {
            e.decorator("ngSrcDirective", ["$delegate", function (e) {
                return e[0].compile = function (e, t) {
                }, e
            }])
        }]);
    o.provider("ngRetina", function () {
        this.setInfix = function (e) {
            n = e
        }, this.$get = e.noop
    }), o.directive("ngSrc", ["$window", "$http", function (e, o) {
        function a(e) {
            var t = e.split(".");
            return t.length < 2 ? e : (t[t.length - 2] += n, t.join("."))
        }

        var s = parseInt((/msie (\d+)/.exec(e.navigator.userAgent.toLowerCase()) || [])[1], 10), u = function () {
            var t = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
            return e.devicePixelRatio > 1 || e.matchMedia && e.matchMedia(t).matches
        }();
        return function (n, c, l) {
            function f(e) {
                l.$set("src", e), s && c.prop("src", e)
            }

            function p(t) {
                var n = e.sessionStorage.getItem(t);
                n ? f(n) : (n = a(t), o.head(n).success(function (r, i) {
                    f(n), e.sessionStorage.setItem(t, n)
                }).error(function (n, r, i, o) {
                    f(t), e.sessionStorage.setItem(t, t)
                }))
            }

            l.$observe("ngSrc", function (n) {
                n && (!u || n.indexOf("@2x.") != -1 || l.noretina !== t || "object" != typeof e.sessionStorage || "IMG" !== c[0].tagName || n.match(r) || n.match(i) ? f(n) : p(n))
            })
        }
    }])
}(window.angular), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "angular-md5"), function (e) {
    e.module("angular-md5", ["gdi2290.md5"]), e.module("ngMd5", ["gdi2290.md5"]), e.module("gdi2290.md5", ["gdi2290.gravatar-filter", "gdi2290.md5-service", "gdi2290.md5-filter"]), e.module("gdi2290.gravatar-filter", []).filter("gravatar", ["md5", function (e) {
        var t = {};
        return function (n, r) {
            return t[n] || (r = r ? e.createHash(r.toString().toLowerCase()) : "", t[n] = n ? e.createHash(n.toString().toLowerCase()) : r), t[n]
        }
    }]), e.module("gdi2290.md5-filter", []).filter("md5", ["md5", function (e) {
        return function (t) {
            return t ? e.createHash(t.toString().toLowerCase()) : t
        }
    }]), e.module("gdi2290.md5-service", []).factory("md5", [function () {
        var e = {
            createHash: function (e) {
                if (null === e) return null;
                var t, n, r, i, o, a, s, u, c, l, f = function (e, t) {
                        return e << t | e >>> 32 - t
                    }, p = function (e, t) {
                        var n, r, i, o, a;
                        return i = 2147483648 & e, o = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ a ^ i ^ o : n | r ? 1073741824 & a ? 3221225472 ^ a ^ i ^ o : 1073741824 ^ a ^ i ^ o : a ^ i ^ o
                    }, d = function (e, t, n) {
                        return e & t | ~e & n
                    }, h = function (e, t, n) {
                        return e & n | t & ~n
                    }, v = function (e, t, n) {
                        return e ^ t ^ n
                    }, g = function (e, t, n) {
                        return t ^ (e | ~n)
                    }, m = function (e, t, n, r, i, o, a) {
                        return e = p(e, p(p(d(t, n, r), i), a)), p(f(e, o), t)
                    }, y = function (e, t, n, r, i, o, a) {
                        return e = p(e, p(p(h(t, n, r), i), a)), p(f(e, o), t)
                    }, $ = function (e, t, n, r, i, o, a) {
                        return e = p(e, p(p(v(t, n, r), i), a)), p(f(e, o), t)
                    }, b = function (e, t, n, r, i, o, a) {
                        return e = p(e, p(p(g(t, n, r), i), a)), p(f(e, o), t)
                    }, x = function (e) {
                        for (var t, n = e.length, r = n + 8, i = (r - r % 64) / 64, o = 16 * (i + 1), a = new Array(o - 1), s = 0, u = 0; u < n;) t = (u - u % 4) / 4, s = u % 4 * 8, a[t] = a[t] | e.charCodeAt(u) << s, u++;
                        return t = (u - u % 4) / 4, s = u % 4 * 8, a[t] = a[t] | 128 << s, a[o - 2] = n << 3, a[o - 1] = n >>> 29, a
                    }, w = function (e) {
                        var t, n, r = "", i = "";
                        for (n = 0; n <= 3; n++) t = e >>> 8 * n & 255, i = "0" + t.toString(16), r += i.substr(i.length - 2, 2);
                        return r
                    }, C = [], S = 7, k = 12, T = 17, E = 22, A = 5, N = 9, j = 14, D = 20, O = 4, M = 11, L = 16, P = 23,
                    H = 6, F = 10, R = 15, q = 21;
                for (C = x(e), s = 1732584193, u = 4023233417, c = 2562383102, l = 271733878, t = C.length, n = 0; n < t; n += 16) r = s, i = u, o = c, a = l, s = m(s, u, c, l, C[n + 0], S, 3614090360), l = m(l, s, u, c, C[n + 1], k, 3905402710), c = m(c, l, s, u, C[n + 2], T, 606105819), u = m(u, c, l, s, C[n + 3], E, 3250441966), s = m(s, u, c, l, C[n + 4], S, 4118548399), l = m(l, s, u, c, C[n + 5], k, 1200080426), c = m(c, l, s, u, C[n + 6], T, 2821735955), u = m(u, c, l, s, C[n + 7], E, 4249261313), s = m(s, u, c, l, C[n + 8], S, 1770035416), l = m(l, s, u, c, C[n + 9], k, 2336552879), c = m(c, l, s, u, C[n + 10], T, 4294925233), u = m(u, c, l, s, C[n + 11], E, 2304563134), s = m(s, u, c, l, C[n + 12], S, 1804603682), l = m(l, s, u, c, C[n + 13], k, 4254626195), c = m(c, l, s, u, C[n + 14], T, 2792965006), u = m(u, c, l, s, C[n + 15], E, 1236535329), s = y(s, u, c, l, C[n + 1], A, 4129170786), l = y(l, s, u, c, C[n + 6], N, 3225465664), c = y(c, l, s, u, C[n + 11], j, 643717713), u = y(u, c, l, s, C[n + 0], D, 3921069994), s = y(s, u, c, l, C[n + 5], A, 3593408605), l = y(l, s, u, c, C[n + 10], N, 38016083), c = y(c, l, s, u, C[n + 15], j, 3634488961), u = y(u, c, l, s, C[n + 4], D, 3889429448), s = y(s, u, c, l, C[n + 9], A, 568446438), l = y(l, s, u, c, C[n + 14], N, 3275163606), c = y(c, l, s, u, C[n + 3], j, 4107603335), u = y(u, c, l, s, C[n + 8], D, 1163531501), s = y(s, u, c, l, C[n + 13], A, 2850285829), l = y(l, s, u, c, C[n + 2], N, 4243563512), c = y(c, l, s, u, C[n + 7], j, 1735328473), u = y(u, c, l, s, C[n + 12], D, 2368359562), s = $(s, u, c, l, C[n + 5], O, 4294588738), l = $(l, s, u, c, C[n + 8], M, 2272392833), c = $(c, l, s, u, C[n + 11], L, 1839030562), u = $(u, c, l, s, C[n + 14], P, 4259657740), s = $(s, u, c, l, C[n + 1], O, 2763975236), l = $(l, s, u, c, C[n + 4], M, 1272893353), c = $(c, l, s, u, C[n + 7], L, 4139469664), u = $(u, c, l, s, C[n + 10], P, 3200236656), s = $(s, u, c, l, C[n + 13], O, 681279174), l = $(l, s, u, c, C[n + 0], M, 3936430074), c = $(c, l, s, u, C[n + 3], L, 3572445317), u = $(u, c, l, s, C[n + 6], P, 76029189), s = $(s, u, c, l, C[n + 9], O, 3654602809), l = $(l, s, u, c, C[n + 12], M, 3873151461), c = $(c, l, s, u, C[n + 15], L, 530742520), u = $(u, c, l, s, C[n + 2], P, 3299628645), s = b(s, u, c, l, C[n + 0], H, 4096336452), l = b(l, s, u, c, C[n + 7], F, 1126891415), c = b(c, l, s, u, C[n + 14], R, 2878612391), u = b(u, c, l, s, C[n + 5], q, 4237533241), s = b(s, u, c, l, C[n + 12], H, 1700485571), l = b(l, s, u, c, C[n + 3], F, 2399980690), c = b(c, l, s, u, C[n + 10], R, 4293915773), u = b(u, c, l, s, C[n + 1], q, 2240044497), s = b(s, u, c, l, C[n + 8], H, 1873313359), l = b(l, s, u, c, C[n + 15], F, 4264355552), c = b(c, l, s, u, C[n + 6], R, 2734768916), u = b(u, c, l, s, C[n + 13], q, 1309151649), s = b(s, u, c, l, C[n + 4], H, 4149444226), l = b(l, s, u, c, C[n + 11], F, 3174756917), c = b(c, l, s, u, C[n + 2], R, 718787259), u = b(u, c, l, s, C[n + 9], q, 3951481745), s = p(s, r), u = p(u, i), c = p(c, o), l = p(l, a);
                var _ = w(s) + w(u) + w(c) + w(l);
                return _.toLowerCase()
            }
        };
        return e
    }])
}(angular), function (e) {
    e.Jcrop = function (t, n) {
        function r(e) {
            return Math.round(e) + "px"
        }

        function i(e) {
            return P.baseClass + "-" + e
        }

        function o() {
            return e.fx.step.hasOwnProperty("backgroundColor")
        }

        function a(t) {
            var n = e(t).offset();
            return [n.left, n.top]
        }

        function s(e) {
            return [e.pageX - L[0], e.pageY - L[1]]
        }

        function u(t) {
            "object" != typeof t && (t = {}), P = e.extend(P, t), e.each(["onChange", "onSelect", "onRelease", "onDblClick"], function (e, t) {
                "function" != typeof P[t] && (P[t] = function () {
                })
            })
        }

        function c(e, t, n) {
            if (L = a(z), he.setCursor("move" === e ? e : e + "-resize"), "move" === e) return he.activateHandlers(f(t), g, n);
            var r = fe.getFixed(), i = p(e), o = fe.getCorner(p(i));
            fe.setPressed(fe.getCorner(i)), fe.setCurrent(o), he.activateHandlers(l(e, r), g, n)
        }

        function l(e, t) {
            return function (n) {
                if (P.aspectRatio) switch (e) {
                    case"e":
                        n[1] = t.y + 1;
                        break;
                    case"w":
                        n[1] = t.y + 1;
                        break;
                    case"n":
                        n[0] = t.x + 1;
                        break;
                    case"s":
                        n[0] = t.x + 1
                } else switch (e) {
                    case"e":
                        n[1] = t.y2;
                        break;
                    case"w":
                        n[1] = t.y2;
                        break;
                    case"n":
                        n[0] = t.x2;
                        break;
                    case"s":
                        n[0] = t.x2
                }
                fe.setCurrent(n), de.update()
            }
        }

        function f(e) {
            var t = e;
            return ve.watchKeys(), function (e) {
                fe.moveOffset([e[0] - t[0], e[1] - t[1]]), t = e, de.update()
            }
        }

        function p(e) {
            switch (e) {
                case"n":
                    return "sw";
                case"s":
                    return "nw";
                case"e":
                    return "nw";
                case"w":
                    return "ne";
                case"ne":
                    return "sw";
                case"nw":
                    return "se";
                case"se":
                    return "nw";
                case"sw":
                    return "ne"
            }
        }

        function d(e) {
            return function (t) {
                return !P.disabled && (!("move" === e && !P.allowMove) && (L = a(z), re = !0, c(e, s(t)), t.stopPropagation(), t.preventDefault(), !1))
            }
        }

        function h(e, t, n) {
            var r = e.width(), i = e.height();
            r > t && t > 0 && (r = t, i = t / e.width() * e.height()), i > n && n > 0 && (i = n, r = n / e.height() * e.width()), te = e.width() / r, ne = e.height() / i, e.width(r).height(i)
        }

        function v(e) {
            return {x: e.x * te, y: e.y * ne, x2: e.x2 * te, y2: e.y2 * ne, w: e.w * te, h: e.h * ne}
        }

        function g(e) {
            var t = fe.getFixed();
            t.w > P.minSelect[0] && t.h > P.minSelect[1] ? (de.enableHandles(), de.done()) : de.release(), he.setCursor(P.allowSelect ? "crosshair" : "default")
        }

        function m(e) {
            if (P.disabled) return !1;
            if (!P.allowSelect) return !1;
            re = !0, L = a(z), de.disableHandles(), he.setCursor("crosshair");
            var t = s(e);
            return fe.setPressed(t), de.update(), he.activateHandlers(y, g, "touch" === e.type.substring(0, 5)), ve.watchKeys(), e.stopPropagation(), e.preventDefault(), !1
        }

        function y(e) {
            fe.setCurrent(e), de.update()
        }

        function $() {
            var t = e("<div></div>").addClass(i("tracker"));
            return F && t.css({opacity: 0, backgroundColor: "white"}), t
        }

        function b(e) {
            V.removeClass().addClass(i("holder")).addClass(e)
        }

        function x(e, t) {
            function n() {
                window.setTimeout(y, f)
            }

            var r = e[0] / te, i = e[1] / ne, o = e[2] / te, a = e[3] / ne;
            if (!ie) {
                var s = fe.flipCoords(r, i, o, a), u = fe.getFixed(), c = [u.x, u.y, u.x2, u.y2], l = c,
                    f = P.animationDelay, p = s[0] - c[0], d = s[1] - c[1], h = s[2] - c[2], v = s[3] - c[3], g = 0,
                    m = P.swingSpeed;
                r = l[0], i = l[1], o = l[2], a = l[3], de.animMode(!0);
                var y = function () {
                    return function () {
                        g += (100 - g) / m, l[0] = Math.round(r + g / 100 * p), l[1] = Math.round(i + g / 100 * d), l[2] = Math.round(o + g / 100 * h), l[3] = Math.round(a + g / 100 * v), g >= 99.8 && (g = 100), g < 100 ? (C(l), n()) : (de.done(), de.animMode(!1), "function" == typeof t && t.call(ge))
                    }
                }();
                n()
            }
        }

        function w(e) {
            C([e[0] / te, e[1] / ne, e[2] / te, e[3] / ne]), P.onSelect.call(ge, v(fe.getFixed())), de.enableHandles()
        }

        function C(e) {
            fe.setPressed([e[0], e[1]]), fe.setCurrent([e[2], e[3]]), de.update()
        }

        function S() {
            return v(fe.getFixed())
        }

        function k() {
            return fe.getFixed()
        }

        function T(e) {
            u(e), M()
        }

        function E() {
            P.disabled = !0, de.disableHandles(), de.setCursor("default"), he.setCursor("default")
        }

        function A() {
            P.disabled = !1, M()
        }

        function N() {
            de.done(), he.activateHandlers(null, null)
        }

        function j() {
            V.remove(), _.show(), _.css("visibility", "visible"), e(t).removeData("Jcrop")
        }

        function D(e, t) {
            de.release(), E();
            var n = new Image;
            n.onload = function () {
                var r = n.width, i = n.height, o = P.boxWidth, a = P.boxHeight;
                z.width(r).height(i), z.attr("src", e), Q.attr("src", e), h(z, o, a), U = z.width(), W = z.height(), Q.width(U).height(W), se.width(U + 2 * ae).height(W + 2 * ae), V.width(U).height(W), pe.resize(U, W), A(), "function" == typeof t && t.call(ge)
            }, n.src = e
        }

        function O(e, t, n) {
            var r = t || P.bgColor;
            P.bgFade && o() && P.fadeTime && !n ? e.animate({backgroundColor: r}, {
                queue: !1,
                duration: P.fadeTime
            }) : e.css("backgroundColor", r)
        }

        function M(e) {
            P.allowResize ? e ? de.enableOnly() : de.enableHandles() : de.disableHandles(), he.setCursor(P.allowSelect ? "crosshair" : "default"), de.setCursor(P.allowMove ? "move" : "default"), P.hasOwnProperty("trueSize") && (te = P.trueSize[0] / U, ne = P.trueSize[1] / W), P.hasOwnProperty("setSelect") && (w(P.setSelect), de.done(), delete P.setSelect), pe.refresh(), P.bgColor != ue && (O(P.shade ? pe.getShades() : V, P.shade ? P.shadeColor || P.bgColor : P.bgColor), ue = P.bgColor), ce != P.bgOpacity && (ce = P.bgOpacity, P.shade ? pe.refresh() : de.setBgOpacity(ce)), G = P.maxSize[0] || 0, K = P.maxSize[1] || 0, Z = P.minSize[0] || 0, ee = P.minSize[1] || 0, P.hasOwnProperty("outerImage") && (z.attr("src", P.outerImage), delete P.outerImage), de.refresh()
        }

        var L, P = e.extend({}, e.Jcrop.defaults), H = navigator.userAgent.toLowerCase(), F = /msie/.test(H),
            R = /msie [1-6]\./.test(H);
        "object" != typeof t && (t = e(t)[0]), "object" != typeof n && (n = {}), u(n);
        var q = {border: "none", visibility: "visible", margin: 0, padding: 0, position: "absolute", top: 0, left: 0},
            _ = e(t), I = !0;
        if ("IMG" == t.tagName) {
            if (0 != _[0].width && 0 != _[0].height) _.width(_[0].width), _.height(_[0].height); else {
                var B = new Image;
                B.src = _[0].src, _.width(B.width), _.height(B.height)
            }
            var z = _.clone().removeAttr("id").css(q).show();
            z.width(_.width()), z.height(_.height()), _.after(z).hide()
        } else z = _.css(q).show(), I = !1, null === P.shade && (P.shade = !0);
        h(z, P.boxWidth, P.boxHeight);
        var U = z.width(), W = z.height(), V = e("<div />").width(U).height(W).addClass(i("holder")).css({
            position: "relative",
            backgroundColor: P.bgColor
        }).insertAfter(_).append(z);
        P.addClass && V.addClass(P.addClass);
        var Q = e("<div />"),
            X = e("<div />").width("100%").height("100%").css({zIndex: 310, position: "absolute", overflow: "hidden"}),
            J = e("<div />").width("100%").height("100%").css("zIndex", 320),
            Y = e("<div />").css({position: "absolute", zIndex: 600}).dblclick(function () {
                var e = fe.getFixed();
                P.onDblClick.call(ge, e)
            }).insertBefore(z).append(X, J);
        I && (Q = e("<img />").attr("src", z.attr("src")).css(q).width(U).height(W), X.append(Q)), R && Y.css({overflowY: "hidden"});
        var G, K, Z, ee, te, ne, re, ie, oe, ae = P.boundary, se = $().width(U + 2 * ae).height(W + 2 * ae).css({
            position: "absolute",
            top: r(-ae),
            left: r(-ae),
            zIndex: 290
        }).mousedown(m), ue = P.bgColor, ce = P.bgOpacity;
        L = a(z);
        var le = function () {
            function e() {
                var e, t = {}, n = ["touchstart", "touchmove", "touchend"], r = document.createElement("div");
                try {
                    for (e = 0; e < n.length; e++) {
                        var i = n[e];
                        i = "on" + i;
                        var o = i in r;
                        o || (r.setAttribute(i, "return;"), o = "function" == typeof r[i]), t[n[e]] = o
                    }
                    return t.touchstart && t.touchend && t.touchmove
                } catch (a) {
                    return !1
                }
            }

            function t() {
                return P.touchSupport === !0 || P.touchSupport === !1 ? P.touchSupport : e()
            }

            return {
                createDragger: function (e) {
                    return function (t) {
                        return !P.disabled && (!("move" === e && !P.allowMove) && (L = a(z), re = !0, c(e, s(le.cfilter(t)), !0), t.stopPropagation(), t.preventDefault(), !1))
                    }
                }, newSelection: function (e) {
                    return m(le.cfilter(e))
                }, cfilter: function (e) {
                    return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, e
                }, isSupported: e, support: t()
            }
        }(), fe = function () {
            function e(e) {
                e = a(e), h = p = e[0], v = d = e[1]
            }

            function t(e) {
                e = a(e), l = e[0] - h, f = e[1] - v, h = e[0], v = e[1]
            }

            function n() {
                return [l, f]
            }

            function r(e) {
                var t = e[0], n = e[1];
                0 > p + t && (t -= t + p), 0 > d + n && (n -= n + d), W < v + n && (n += W - (v + n)), U < h + t && (t += U - (h + t)), p += t, h += t, d += n, v += n
            }

            function i(e) {
                var t = o();
                switch (e) {
                    case"ne":
                        return [t.x2, t.y];
                    case"nw":
                        return [t.x, t.y];
                    case"se":
                        return [t.x2, t.y2];
                    case"sw":
                        return [t.x, t.y2]
                }
            }

            function o() {
                if (!P.aspectRatio) return u();
                var e, t, n, r, i = P.aspectRatio, o = P.minSize[0] / te, a = P.maxSize[0] / te, l = P.maxSize[1] / ne,
                    f = h - p, g = v - d, m = Math.abs(f), y = Math.abs(g), $ = m / y;
                return 0 === a && (a = 10 * U), 0 === l && (l = 10 * W), $ < i ? (t = v, n = y * i, e = f < 0 ? p - n : n + p, e < 0 ? (e = 0, r = Math.abs((e - p) / i), t = g < 0 ? d - r : r + d) : e > U && (e = U, r = Math.abs((e - p) / i), t = g < 0 ? d - r : r + d)) : (e = h, r = m / i, t = g < 0 ? d - r : d + r, t < 0 ? (t = 0, n = Math.abs((t - d) * i), e = f < 0 ? p - n : n + p) : t > W && (t = W, n = Math.abs(t - d) * i, e = f < 0 ? p - n : n + p)), e > p ? (e - p < o ? e = p + o : e - p > a && (e = p + a), t = t > d ? d + (e - p) / i : d - (e - p) / i) : e < p && (p - e < o ? e = p - o : p - e > a && (e = p - a), t = t > d ? d + (p - e) / i : d - (p - e) / i), e < 0 ? (p -= e, e = 0) : e > U && (p -= e - U, e = U), t < 0 ? (d -= t, t = 0) : t > W && (d -= t - W, t = W), c(s(p, d, e, t))
            }

            function a(e) {
                return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > U && (e[0] = U), e[1] > W && (e[1] = W), [Math.round(e[0]), Math.round(e[1])]
            }

            function s(e, t, n, r) {
                var i = e, o = n, a = t, s = r;
                return n < e && (i = n, o = e), r < t && (a = r, s = t), [i, a, o, s]
            }

            function u() {
                var e, t = h - p, n = v - d;
                return G && Math.abs(t) > G && (h = t > 0 ? p + G : p - G), K && Math.abs(n) > K && (v = n > 0 ? d + K : d - K), ee / ne && Math.abs(n) < ee / ne && (v = n > 0 ? d + ee / ne : d - ee / ne), Z / te && Math.abs(t) < Z / te && (h = t > 0 ? p + Z / te : p - Z / te), p < 0 && (h -= p, p -= p), d < 0 && (v -= d, d -= d), h < 0 && (p -= h, h -= h), v < 0 && (d -= v, v -= v), h > U && (e = h - U, p -= e, h -= e), v > W && (e = v - W, d -= e, v -= e), p > U && (e = p - W, v -= e, d -= e), d > W && (e = d - W, v -= e, d -= e), c(s(p, d, h, v))
            }

            function c(e) {
                return {x: e[0], y: e[1], x2: e[2], y2: e[3], w: e[2] - e[0], h: e[3] - e[1]}
            }

            var l, f, p = 0, d = 0, h = 0, v = 0;
            return {flipCoords: s, setPressed: e, setCurrent: t, getOffset: n, moveOffset: r, getCorner: i, getFixed: o}
        }(), pe = function () {
            function t(e, t) {
                h.left.css({height: r(t)}), h.right.css({height: r(t)})
            }

            function n() {
                return i(fe.getFixed())
            }

            function i(e) {
                h.top.css({left: r(e.x), width: r(e.w), height: r(e.y)}), h.bottom.css({
                    top: r(e.y2),
                    left: r(e.x),
                    width: r(e.w),
                    height: r(W - e.y2)
                }), h.right.css({left: r(e.x2), width: r(U - e.x2)}), h.left.css({width: r(e.x)})
            }

            function o() {
                return e("<div />").css({position: "absolute", backgroundColor: P.shadeColor || P.bgColor}).appendTo(d)
            }

            function a() {
                p || (p = !0, d.insertBefore(z), n(), de.setBgOpacity(1, 0, 1), Q.hide(), s(P.shadeColor || P.bgColor, 1), de.isAwake() ? c(P.bgOpacity, 1) : c(1, 1))
            }

            function s(e, t) {
                O(f(), e, t)
            }

            function u() {
                p && (d.remove(), Q.show(), p = !1, de.isAwake() ? de.setBgOpacity(P.bgOpacity, 1, 1) : (de.setBgOpacity(1, 1, 1), de.disableHandles()), O(V, 0, 1))
            }

            function c(e, t) {
                p && (P.bgFade && !t ? d.animate({opacity: 1 - e}, {
                    queue: !1,
                    duration: P.fadeTime
                }) : d.css({opacity: 1 - e}))
            }

            function l() {
                P.shade ? a() : u(), de.isAwake() && c(P.bgOpacity)
            }

            function f() {
                return d.children()
            }

            var p = !1, d = e("<div />").css({position: "absolute", zIndex: 240, opacity: 0}),
                h = {top: o(), left: o().height(W), right: o().height(W), bottom: o()};
            return {
                update: n,
                updateRaw: i,
                getShades: f,
                setBgColor: s,
                enable: a,
                disable: u,
                resize: t,
                refresh: l,
                opacity: c
            }
        }(), de = function () {
            function t(t) {
                var n = e("<div />").css({position: "absolute", opacity: P.borderOpacity}).addClass(i(t));
                return X.append(n), n
            }

            function n(t, n) {
                var r = e("<div />").mousedown(d(t)).css({
                    cursor: t + "-resize",
                    position: "absolute",
                    zIndex: n
                }).addClass("ord-" + t);
                return le.support && r.bind("touchstart.jcrop", le.createDragger(t)), J.append(r), r
            }

            function o(e) {
                var t = P.handleSize, r = n(e, E++).css({opacity: P.handleOpacity}).addClass(i("handle"));
                return t && r.width(t).height(t), r
            }

            function a(e) {
                return n(e, E++).addClass("jcrop-dragbar")
            }

            function s(e) {
                var t;
                for (t = 0; t < e.length; t++) j[e[t]] = a(e[t])
            }

            function u(e) {
                var n, r;
                for (r = 0; r < e.length; r++) {
                    switch (e[r]) {
                        case"n":
                            n = "hline";
                            break;
                        case"s":
                            n = "hline bottom";
                            break;
                        case"e":
                            n = "vline right";
                            break;
                        case"w":
                            n = "vline"
                    }
                    A[e[r]] = t(n)
                }
            }

            function c(e) {
                var t;
                for (t = 0; t < e.length; t++) N[e[t]] = o(e[t])
            }

            function l(e, t) {
                P.shade || Q.css({top: r(-t), left: r(-e)}), Y.css({top: r(t), left: r(e)})
            }

            function f(e, t) {
                Y.width(Math.round(e)).height(Math.round(t))
            }

            function p() {
                var e = fe.getFixed();
                fe.setPressed([e.x, e.y]), fe.setCurrent([e.x2, e.y2]), h()
            }

            function h(e) {
                if (T) return g(e)
            }

            function g(e) {
                var t = fe.getFixed();
                f(t.w, t.h), l(t.x, t.y), P.shade && pe.updateRaw(t), T || y(), e ? P.onSelect.call(ge, v(t)) : P.onChange.call(ge, v(t))
            }

            function m(e, t, n) {
                (T || t) && (P.bgFade && !n ? z.animate({opacity: e}, {
                    queue: !1,
                    duration: P.fadeTime
                }) : z.css("opacity", e))
            }

            function y() {
                Y.show(), P.shade ? pe.opacity(ce) : m(ce, !0), T = !0
            }

            function b() {
                C(), Y.hide(), P.shade ? pe.opacity(1) : m(1), T = !1, P.onRelease.call(ge)
            }

            function x() {
                D && J.show()
            }

            function w() {
                if (D = !0, P.allowResize) return J.show(), !0
            }

            function C() {
                D = !1, J.hide()
            }

            function S(e) {
                e ? (ie = !0, C()) : (ie = !1, w())
            }

            function k() {
                S(!1), p()
            }

            var T, E = 370, A = {}, N = {}, j = {}, D = !1;
            P.dragEdges && e.isArray(P.createDragbars) && s(P.createDragbars), e.isArray(P.createHandles) && c(P.createHandles), P.drawBorders && e.isArray(P.createBorders) && u(P.createBorders), e(document).bind("touchstart.jcrop-ios", function (t) {
                e(t.currentTarget).hasClass("jcrop-tracker") && t.stopPropagation()
            });
            var O = $().mousedown(d("move")).css({cursor: "move", position: "absolute", zIndex: 360});
            return le.support && O.bind("touchstart.jcrop", le.createDragger("move")), X.append(O), C(), {
                updateVisible: h,
                update: g,
                release: b,
                refresh: p,
                isAwake: function () {
                    return T
                },
                setCursor: function (e) {
                    O.css("cursor", e)
                },
                enableHandles: w,
                enableOnly: function () {
                    D = !0
                },
                showHandles: x,
                disableHandles: C,
                animMode: S,
                setBgOpacity: m,
                done: k
            }
        }(), he = function () {
            function t(t) {
                se.css({zIndex: 450}), t ? e(document).bind("touchmove.jcrop", a).bind("touchend.jcrop", u) : p && e(document).bind("mousemove.jcrop", r).bind("mouseup.jcrop", i)
            }

            function n() {
                se.css({zIndex: 290}), e(document).unbind(".jcrop")
            }

            function r(e) {
                return l(s(e)), !1
            }

            function i(e) {
                return e.preventDefault(), e.stopPropagation(), re && (re = !1, f(s(e)), de.isAwake() && P.onSelect.call(ge, v(fe.getFixed())), n(), l = function () {
                }, f = function () {
                }), !1
            }

            function o(e, n, r) {
                return re = !0, l = e, f = n, t(r), !1
            }

            function a(e) {
                return l(s(le.cfilter(e))), !1
            }

            function u(e) {
                return i(le.cfilter(e))
            }

            function c(e) {
                se.css("cursor", e)
            }

            var l = function () {
            }, f = function () {
            }, p = P.trackDocument;
            return p || se.mousemove(r).mouseup(i).mouseout(i), z.before(se), {activateHandlers: o, setCursor: c}
        }(), ve = function () {
            function t() {
                P.keySupport && (o.show(), o.focus())
            }

            function n(e) {
                o.hide()
            }

            function r(e, t, n) {
                P.allowMove && (fe.moveOffset([t, n]), de.updateVisible(!0)), e.preventDefault(), e.stopPropagation()
            }

            function i(e) {
                if (e.ctrlKey || e.metaKey) return !0;
                oe = !!e.shiftKey;
                var t = oe ? 10 : 1;
                switch (e.keyCode) {
                    case 37:
                        r(e, -t, 0);
                        break;
                    case 39:
                        r(e, t, 0);
                        break;
                    case 38:
                        r(e, 0, -t);
                        break;
                    case 40:
                        r(e, 0, t);
                        break;
                    case 27:
                        P.allowSelect && de.release();
                        break;
                    case 9:
                        return !0
                }
                return !1
            }

            var o = e('<input type="radio" />').css({
                position: "fixed",
                left: "-120px",
                width: "12px"
            }).addClass("jcrop-keymgr"), a = e("<div />").css({position: "absolute", overflow: "hidden"}).append(o);
            return P.keySupport && (o.keydown(i).blur(n), R || !P.fixedSupport ? (o.css({
                position: "absolute",
                left: "-20px"
            }), a.append(o).insertBefore(z)) : o.insertBefore(z)), {watchKeys: t}
        }();
        le.support && se.bind("touchstart.jcrop", le.newSelection), J.hide(), M(!0);
        var ge = {
            setImage: D,
            animateTo: x,
            setSelect: w,
            setOptions: T,
            tellSelect: S,
            tellScaled: k,
            setClass: b,
            disable: E,
            enable: A,
            cancel: N,
            release: de.release,
            destroy: j,
            focus: ve.watchKeys,
            getBounds: function () {
                return [U * te, W * ne]
            },
            getWidgetSize: function () {
                return [U, W]
            },
            getScaleFactor: function () {
                return [te, ne]
            },
            getOptions: function () {
                return P
            },
            ui: {holder: V, selection: Y}
        };
        return F && V.bind("selectstart", function () {
            return !1
        }), _.data("Jcrop", ge), ge
    }, e.fn.Jcrop = function (t, n) {
        var r;
        return this.each(function () {
            if (e(this).data("Jcrop")) {
                if ("api" === t) return e(this).data("Jcrop");
                e(this).data("Jcrop").setOptions(t)
            } else "IMG" == this.tagName ? e.Jcrop.Loader(this, function () {
                e(this).css({
                    display: "block",
                    visibility: "hidden"
                }), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r)
            }) : (e(this).css({
                display: "block",
                visibility: "hidden"
            }), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r))
        }), this
    }, e.Jcrop.Loader = function (t, n, r) {
        function i() {
            a.complete ? (o.unbind(".jcloader"), e.isFunction(n) && n.call(a)) : window.setTimeout(i, 50)
        }

        var o = e(t), a = o[0];
        o.bind("load.jcloader", i).bind("error.jcloader", function (t) {
            o.unbind(".jcloader"), e.isFunction(r) && r.call(a)
        }), a.complete && e.isFunction(n) && (o.unbind(".jcloader"), n.call(a))
    }, e.Jcrop.defaults = {
        allowSelect: !0,
        allowMove: !0,
        allowResize: !0,
        trackDocument: !0,
        baseClass: "jcrop",
        addClass: null,
        bgColor: "black",
        bgOpacity: .6,
        bgFade: !1,
        borderOpacity: .4,
        handleOpacity: .5,
        handleSize: null,
        aspectRatio: 0,
        keySupport: !0,
        createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
        createDragbars: ["n", "s", "e", "w"],
        createBorders: ["n", "s", "e", "w"],
        drawBorders: !0,
        dragEdges: !0,
        fixedSupport: !0,
        touchSupport: null,
        shade: null,
        boxWidth: 0,
        boxHeight: 0,
        boundary: 2,
        fadeTime: 400,
        animationDelay: 20,
        swingSpeed: 3,
        minSelect: [0, 0],
        maxSize: [0, 0],
        minSize: [0, 0],
        onChange: function () {
        },
        onSelect: function () {
        },
        onDblClick: function () {
        },
        onRelease: function () {
        }
    }
}(jQuery), jQuery.extend({
    createUploadIframe: function (e, t) {
        var n = "jUploadFrame" + e,
            r = '<iframe id="' + n + '" name="' + n + '" style="position:absolute; top:-9999px; left:-9999px"';
        return window.ActiveXObject && ("boolean" == typeof t ? r += ' src="javascript:false"' : "string" == typeof t && (r += ' src="' + t + '"')), r += " />", jQuery(r).appendTo(document.body), jQuery("#" + n).get(0)
    }, createUploadForm: function (e, t, n) {
        var r = "jUploadForm" + e, i = "jUploadFile" + e,
            o = jQuery('<form  action="" method="POST" name="' + r + '" id="' + r + '" enctype="multipart/form-data"></form>');
        if (n) for (var a in n) jQuery('<input type="hidden" name="' + a + '" value="' + n[a] + '" />').appendTo(o);
        var s = jQuery("#" + t), u = jQuery(s).clone(!0);
        return jQuery(s).attr("id", i), jQuery(s).before(u), jQuery(s).appendTo(o), jQuery(o).css("position", "absolute"), jQuery(o).css("top", "-1200px"), jQuery(o).css("left", "-1200px"), jQuery(o).appendTo("body"), o
    }, ajaxFileUpload: function (e) {
        e = jQuery.extend({}, jQuery.ajaxSettings, e);
        var t = (new Date).getTime(),
            n = jQuery.createUploadForm(t, e.fileElementId, "undefined" != typeof e.data && e.data),
            r = (jQuery.createUploadIframe(t, e.secureuri), "jUploadFrame" + t), i = "jUploadForm" + t;
        e.global && !jQuery.active++ && jQuery.event.trigger("ajaxStart");
        var o = !1, a = {};
        e.global && jQuery.event.trigger("ajaxSend", [a, e]);
        var s = function (t) {
            var i = document.getElementById(r);
            try {
                i.contentWindow ? (a.responseText = i.contentWindow.document.body ? i.contentWindow.document.body.innerHTML : null, a.responseXML = i.contentWindow.document.XMLDocument ? i.contentWindow.document.XMLDocument : i.contentWindow.document) : i.contentDocument && (a.responseText = i.contentDocument.document.body ? i.contentDocument.document.body.innerHTML : null, a.responseXML = i.contentDocument.document.XMLDocument ? i.contentDocument.document.XMLDocument : i.contentDocument.document)
            } catch (s) {
                jQuery.event.trigger("ajaxError", [e, a, null, s])
            }
            if (a || "timeout" == t) {
                o = !0;
                var u;
                try {
                    if (u = "timeout" != t ? "success" : "error", "error" != u) {
                        var c = jQuery.uploadHttpData(a, e.dataType);
                        e.success && e.success(c, u), e.global && jQuery.event.trigger("ajaxSuccess", [a, e])
                    } else e.error(e, a, u)
                } catch (s) {
                    u = "error", e.error(e, a, u, s)
                }
                e.global && jQuery.event.trigger("ajaxComplete", [a, e]), e.global && !--jQuery.active && jQuery.event.trigger("ajaxStop"), e.complete && e.complete(a, u), jQuery(i).unbind(), setTimeout(function () {
                    try {
                        jQuery(i).remove(), jQuery(n).remove()
                    } catch (t) {
                        e.error(e, a, null, t)
                    }
                }, 100), a = null
            }
        };
        e.timeout > 0 && setTimeout(function () {
            o || s("timeout")
        }, e.timeout);
        try {
            var n = jQuery("#" + i);
            jQuery(n).attr("action", e.url), jQuery(n).attr("method", "POST"), jQuery(n).attr("target", r), n.encoding ? jQuery(n).attr("encoding", "multipart/form-data") : jQuery(n).attr("enctype", "multipart/form-data"), jQuery(n).submit()
        } catch (u) {
            e.error(e, a, null, u)
        }
        return jQuery("#" + r).load(s), {
            abort: function () {
            }
        }
    }, uploadHttpData: function (r, type) {
        var data = !type;
        return data = "xml" == type || data ? r.responseXML : r.responseText, "script" == type && jQuery.globalEval(data), "json" == type && eval("data = " + data), "html" == type && jQuery("<div>").html(data).evalScripts(), data
    }
});