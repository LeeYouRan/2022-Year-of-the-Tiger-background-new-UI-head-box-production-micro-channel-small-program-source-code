var t = require("../@babel/runtime/helpers/typeof"), e = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
    return t(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
}, n = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : e(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], {
    "473e": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.mockAssetsList = e.mockCategoryList = void 0;
        e.mockCategoryList = [ {
            id: "hot",
            name: "虎年头像"
        }, {
            id: "2022",
            name: "喜庆边框"
        }, {
            id: "jianyi",
            name: "简约可爱"
        } ];
        e.mockAssetsList = {
            hot: [ {
                name: "",
                src: "frame/2022/1.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/2.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/3.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/4.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/5.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/6.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/7.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/8.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/9.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/13.png",
                type: "frame"
            } ],
            2022: [ {
                name: "",
                src: "frame/guoqing/11.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/12.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/13.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/14.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/15.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/16.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/17.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/18.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/19.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/20.png",
                type: "frame"
            } ],
            jianyi: [ {
                name: "",
                src: "frame/2022/14.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/15.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/16.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/19.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/18.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/26.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/27.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/28.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/guoqing/29.png",
                type: "frame"
            }, {
                name: "",
                src: "frame/2022/20.png",
                type: "frame"
            } ]
        };
    },
    "543d": function(t, e, r) {
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach(function(e) {
                    s(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function a(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t;
            }(t) || function(t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var n = [], r = !0, o = !1, i = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                        !e || n.length !== e); r = !0) ;
                    } catch (t) {
                        o = !0, i = t;
                    } finally {
                        try {
                            r || null == s.return || s.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return n;
                }
            }(t, e) || p(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function s(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        function u(t, e, n) {
            return e && c(t.prototype, e), n && c(t, n), t;
        }
        function f(t) {
            return function(t) {
                if (Array.isArray(t)) return l(t);
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            }(t) || p(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function p(t, e) {
            if (t) {
                if ("string" == typeof t) return l(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0;
            }
        }
        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function d(t) {
            return "function" == typeof t;
        }
        function h(t) {
            return "string" == typeof t;
        }
        function v(t) {
            return "[object Object]" === vt.call(t);
        }
        function y(t, e) {
            return yt.call(t, e);
        }
        function g() {}
        function _(t) {
            var e = Object.create(null);
            return function(n) {
                return e[n] || (e[n] = t(n));
            };
        }
        function m(t, e) {
            Object.keys(e).forEach(function(n) {
                -1 !== mt.indexOf(n) && d(e[n]) && (t[n] = function(t, e) {
                    var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
                    return n ? function(t) {
                        for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
                        return e;
                    }(n) : n;
                }(t[n], e[n]));
            });
        }
        function b(t, e) {
            t && e && Object.keys(e).forEach(function(n) {
                -1 !== mt.indexOf(n) && d(e[n]) && function(t, e) {
                    var n = t.indexOf(e);
                    -1 !== n && t.splice(n, 1);
                }(t[n], e[n]);
            });
        }
        function O(t) {
            return function(e) {
                return t(e) || e;
            };
        }
        function S(t) {
            return !!t && ("object" === (void 0 === t ? "undefined" : n(t)) || "function" == typeof t) && "function" == typeof t.then;
        }
        function A(t, e) {
            for (var n = !1, r = 0; r < t.length; r++) {
                var o = t[r];
                if (n) n = Promise.resolve(O(o)); else {
                    var i = o(e);
                    if (S(i) && (n = Promise.resolve(i)), !1 === i) return {
                        then: function() {}
                    };
                }
            }
            return n || {
                then: function(t) {
                    return t(e);
                }
            };
        }
        function w(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return [ "success", "fail", "complete" ].forEach(function(n) {
                if (Array.isArray(t[n])) {
                    var r = e[n];
                    e[n] = function(e) {
                        A(t[n], e).then(function(t) {
                            return d(r) && r(t) || t;
                        });
                    };
                }
            }), e;
        }
        function E(t, e) {
            var n = [];
            Array.isArray(bt.returnValue) && n.push.apply(n, f(bt.returnValue));
            var r = Ot[t];
            return r && Array.isArray(r.returnValue) && n.push.apply(n, f(r.returnValue)), n.forEach(function(t) {
                e = t(e) || e;
            }), e;
        }
        function k(t) {
            var e = Object.create(null);
            Object.keys(bt).forEach(function(t) {
                "returnValue" !== t && (e[t] = bt[t].slice());
            });
            var n = Ot[t];
            return n && Object.keys(n).forEach(function(t) {
                "returnValue" !== t && (e[t] = (e[t] || []).concat(n[t]));
            }), e;
        }
        function $(t, e, n) {
            for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
            var a = k(t);
            return a && Object.keys(a).length ? Array.isArray(a.invoke) ? A(a.invoke, n).then(function(t) {
                return e.apply(void 0, [ w(a, t) ].concat(o));
            }) : e.apply(void 0, [ w(a, n) ].concat(o)) : e.apply(void 0, [ n ].concat(o));
        }
        function I(t) {
            return wt.test(t) && -1 === Et.indexOf(t);
        }
        function x(t) {
            return At.test(t) && -1 === kt.indexOf(t);
        }
        function T(t) {
            return t.then(function(t) {
                return [ null, t ];
            }).catch(function(t) {
                return [ t ];
            });
        }
        function P(t) {
            return !(I(t) || x(t) || function(t) {
                return $t.test(t) && "onPush" !== t;
            }(t));
        }
        function j(t, e) {
            return P(t) ? function() {
                for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                return d(n.success) || d(n.fail) || d(n.complete) ? E(t, $.apply(void 0, [ t, e, n ].concat(o))) : E(t, T(new Promise(function(r, i) {
                    $.apply(void 0, [ t, e, Object.assign({}, n, {
                        success: r,
                        fail: i
                    }) ].concat(o));
                })));
            } : e;
        }
        function C(t) {
            if (t) {
                var e = Nt[t];
                return delete Nt[t], e;
            }
            return Rt.shift();
        }
        function N(t) {
            if (t.safeArea) {
                var e = t.safeArea;
                t.safeAreaInsets = {
                    top: e.top,
                    left: e.left,
                    right: t.windowWidth - e.right,
                    bottom: t.windowHeight - e.bottom
                };
            }
        }
        function R(t, e, n) {
            return function(r) {
                return e(U(t, r, n));
            };
        }
        function D(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (v(e)) {
                var i = !0 === o ? e : {};
                for (var a in d(n) && (n = n(e, i) || {}), e) if (y(n, a)) {
                    var s = n[a];
                    d(s) && (s = s(e[a], e, i)), s ? h(s) ? i[s] = e[a] : v(s) && (i[s.name ? s.name : a] = s.value) : console.warn("微信小程序 ".concat(t, "暂不支持").concat(a));
                } else -1 !== Lt.indexOf(a) ? d(e[a]) && (i[a] = R(t, e[a], r)) : o || (i[a] = e[a]);
                return i;
            }
            return d(e) && (e = R(t, e, r)), e;
        }
        function U(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return d(Ut.returnValue) && (e = Ut.returnValue(t, e)), D(t, e, n, {}, r);
        }
        function L(t, e) {
            if (y(Ut, t)) {
                var n = Ut[t];
                return n ? function(e, r) {
                    var o = n;
                    d(n) && (o = n(e));
                    var i = [ e = D(t, e, o.args, o.returnValue) ];
                    void 0 !== r && i.push(r), d(o.name) ? t = o.name(e) : h(o.name) && (t = o.name);
                    var a = wx[t].apply(wx, i);
                    return x(t) ? U(t, a, o.returnValue, I(t)) : a;
                } : function() {
                    console.error("微信小程序 暂不支持".concat(t));
                };
            }
            return e;
        }
        function M(t, e, n) {
            return t[e].apply(t, n);
        }
        function V(t) {
            if (wx.canIUse("nextTick")) {
                var e = t.triggerEvent;
                t.triggerEvent = function(n) {
                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    return e.apply(t, [ Wt(n) ].concat(o));
                };
            }
        }
        function F(t, e) {
            var n = e[t];
            e[t] = n ? function() {
                V(this);
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return n.apply(this, e);
            } : function() {
                V(this);
            };
        }
        function q(t, e, n) {
            e.forEach(function(e) {
                (function t(e, n) {
                    if (!n) return !0;
                    if (ht.default.options && Array.isArray(ht.default.options[e])) return !0;
                    if (d(n = n.default || n)) return !!d(n.extendOptions[e]) || !!(n.super && n.super.options && Array.isArray(n.super.options[e]));
                    if (d(n[e])) return !0;
                    var r = n.mixins;
                    return Array.isArray(r) ? !!r.find(function(n) {
                        return t(e, n);
                    }) : void 0;
                })(e, n) && (t[e] = function(t) {
                    return this.$vm && this.$vm.__call_hook(e, t);
                });
            });
        }
        function B(t, e) {
            var n;
            return [ n = d(e = e.default || e) ? e : t.extend(e), e = n.options ];
        }
        function K(t, e) {
            if (Array.isArray(e) && e.length) {
                var n = Object.create(null);
                e.forEach(function(t) {
                    n[t] = !0;
                }), t.$scopedSlots = t.$slots = n;
            }
        }
        function G(t, e) {
            var n = (t = (t || "").split(",")).length;
            1 === n ? e._$vueId = t[0] : 2 === n && (e._$vueId = t[0], e._$vuePid = t[1]);
        }
        function H(t, e) {
            var n = t.data || {}, r = t.methods || {};
            if ("function" == typeof n) try {
                n = n.call(e);
            } catch (t) {
                Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n);
            } else try {
                n = JSON.parse(JSON.stringify(n));
            } catch (t) {}
            return v(n) || (n = {}), Object.keys(r).forEach(function(t) {
                -1 !== e.__lifecycle_hooks__.indexOf(t) || y(n, t) || (n[t] = r[t]);
            }), n;
        }
        function z(t) {
            return function(e, n) {
                this.$vm && (this.$vm[t] = e);
            };
        }
        function W(t, e) {
            var n = t.behaviors, r = t.extends, o = t.mixins, i = t.props;
            i || (t.props = i = []);
            var a = [];
            return Array.isArray(n) && n.forEach(function(t) {
                a.push(t.replace("uni://", "wx".concat("://"))), "uni://form-field" === t && (Array.isArray(i) ? (i.push("name"), 
                i.push("value")) : (i.name = {
                    type: String,
                    default: ""
                }, i.value = {
                    type: [ String, Number, Boolean, Array, Object, Date ],
                    default: ""
                }));
            }), v(r) && r.props && a.push(e({
                properties: Y(r.props, !0)
            })), Array.isArray(o) && o.forEach(function(t) {
                v(t) && t.props && a.push(e({
                    properties: Y(t.props, !0)
                }));
            }), a;
        }
        function J(t, e, n, r) {
            return Array.isArray(e) && 1 === e.length ? e[0] : e;
        }
        function Y(t) {
            var e = {};
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || (e.vueId = {
                type: String,
                value: ""
            }, e.generic = {
                type: Object,
                value: null
            }, e.vueSlots = {
                type: null,
                value: [],
                observer: function(t, e) {
                    var n = Object.create(null);
                    t.forEach(function(t) {
                        n[t] = !0;
                    }), this.setData({
                        $slots: n
                    });
                }
            }), Array.isArray(t) ? t.forEach(function(t) {
                e[t] = {
                    type: null,
                    observer: z(t)
                };
            }) : v(t) && Object.keys(t).forEach(function(n) {
                var r = t[n];
                if (v(r)) {
                    var o = r.default;
                    d(o) && (o = o()), r.type = J(0, r.type), e[n] = {
                        type: -1 !== Jt.indexOf(r.type) ? r.type : null,
                        value: o,
                        observer: z(n)
                    };
                } else {
                    var i = J(0, r);
                    e[n] = {
                        type: -1 !== Jt.indexOf(i) ? i : null,
                        observer: z(n)
                    };
                }
            }), e;
        }
        function X(t) {
            try {
                t.mp = JSON.parse(JSON.stringify(t));
            } catch (t) {}
            return t.stopPropagation = g, t.preventDefault = g, t.target = t.target || {}, y(t, "detail") || (t.detail = {}), 
            y(t, "markerId") && (t.detail = "object" === n(t.detail) ? t.detail : {}, t.detail.markerId = t.markerId), 
            v(t.detail) && (t.target = Object.assign({}, t.target, t.detail)), t;
        }
        function Q(t, e, n) {
            var r = {};
            return Array.isArray(e) && e.length && e.forEach(function(e, o) {
                "string" == typeof e ? e ? "$event" === e ? r["$" + o] = n : "arguments" === e ? n.detail && n.detail.__args__ ? r["$" + o] = n.detail.__args__ : r["$" + o] = [ n ] : 0 === e.indexOf("$event.") ? r["$" + o] = t.__get_value(e.replace("$event.", ""), n) : r["$" + o] = t.__get_value(e) : r["$" + o] = t : r["$" + o] = function(t, e) {
                    var n = t;
                    return e.forEach(function(e) {
                        var r = e[0], o = e[2];
                        if (r || void 0 !== o) {
                            var i, a = e[1], s = e[3];
                            Number.isInteger(r) ? i = r : r ? "string" == typeof r && r && (i = 0 === r.indexOf("#s#") ? r.substr(3) : t.__get_value(r, n)) : i = n, 
                            Number.isInteger(i) ? n = o : a ? Array.isArray(i) ? n = i.find(function(e) {
                                return t.__get_value(a, e) === o;
                            }) : v(i) ? n = Object.keys(i).find(function(e) {
                                return t.__get_value(a, i[e]) === o;
                            }) : console.error("v-for 暂不支持循环数据：", i) : n = i[o], s && (n = t.__get_value(s, n));
                        }
                    }), n;
                }(t, e);
            }), r;
        }
        function Z(t) {
            for (var e = {}, n = 1; n < t.length; n++) {
                var r = t[n];
                e[r[0]] = r[1];
            }
            return e;
        }
        function tt(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, a = !1;
            if (o && (a = e.currentTarget && e.currentTarget.dataset && "wx" === e.currentTarget.dataset.comType, 
            !n.length)) return a ? [ e ] : e.detail.__args__ || e.detail;
            var s = Q(t, r, e), c = [];
            return n.forEach(function(t) {
                "$event" === t ? "__set_model" !== i || o ? o && !a ? c.push(e.detail.__args__[0]) : c.push(e) : c.push(e.target.value) : Array.isArray(t) && "o" === t[0] ? c.push(Z(t)) : "string" == typeof t && y(s, t) ? c.push(s[t]) : c.push(t);
            }), c;
        }
        function et(t) {
            var e = this, n = ((t = X(t)).currentTarget || t.target).dataset;
            if (!n) return console.warn("事件信息不存在");
            var r = n.eventOpts || n["event-opts"];
            if (!r) return console.warn("事件信息不存在");
            var o = t.type, i = [];
            return r.forEach(function(n) {
                var r = n[0], a = n[1], s = r.charAt(0) === Xt, c = (r = s ? r.slice(1) : r).charAt(0) === Yt;
                r = c ? r.slice(1) : r, a && function(t, e) {
                    return t === e || "regionchange" === e && ("begin" === t || "end" === t);
                }(o, r) && a.forEach(function(n) {
                    var r = n[0];
                    if (r) {
                        var o = e.$vm;
                        if (o.$options.generic && (o = function(t) {
                            for (var e = t.$parent; e && e.$parent && (e.$options.generic || e.$parent.$options.generic || e.$scope._$vuePid); ) e = e.$parent;
                            return e && e.$parent;
                        }(o) || o), "$emit" === r) return void o.$emit.apply(o, tt(e.$vm, t, n[1], n[2], s, r));
                        var a = o[r];
                        if (!d(a)) throw new Error(" _vm.".concat(r, " is not a function"));
                        if (c) {
                            if (a.once) return;
                            a.once = !0;
                        }
                        var u = tt(e.$vm, t, n[1], n[2], s, r);
                        i.push(a.apply(o, (Array.isArray(u) ? u : []).concat([ , , , , , , , , , , t ])));
                    }
                });
            }), "input" === o && 1 === i.length && void 0 !== i[0] ? i[0] : void 0;
        }
        function nt(t, e) {
            var n = e.mocks, r = e.initRefs;
            t.$options.store && (ht.default.prototype.$store = t.$options.store), ht.default.prototype.mpHost = "mp-weixin", 
            ht.default.mixin({
                beforeCreate: function() {
                    this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = s({
                        data: {}
                    }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                    delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (r(this), 
                    function(t, e) {
                        var n = t.$mp[t.mpType];
                        e.forEach(function(e) {
                            y(n, e) && (t[e] = n[e]);
                        });
                    }(this, n)));
                }
            });
            var o = {
                onLaunch: function(e) {
                    this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                    this.$vm = t, this.$vm.$mp = {
                        app: this
                    }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                    this.$vm.__call_hook("mounted", e), this.$vm.__call_hook("onLaunch", e));
                }
            };
            o.globalData = t.$options.globalData || {};
            var i = t.$options.methods;
            return i && Object.keys(i).forEach(function(t) {
                o[t] = i[t];
            }), q(o, Qt), o;
        }
        function rt(t) {
            return Behavior(t);
        }
        function ot() {
            return !!this.route;
        }
        function it(t) {
            this.triggerEvent("__l", t);
        }
        function at(t) {
            var e = t.$scope;
            Object.defineProperty(t, "$refs", {
                get: function() {
                    var t = {};
                    return e.selectAllComponents(".vue-ref").forEach(function(e) {
                        var n = e.dataset.ref;
                        t[n] = e.$vm || e;
                    }), e.selectAllComponents(".vue-ref-in-for").forEach(function(e) {
                        var n = e.dataset.ref;
                        t[n] || (t[n] = []), t[n].push(e.$vm || e);
                    }), t;
                }
            });
        }
        function st(t) {
            var e, n = t.detail || t.value, r = n.vuePid, o = n.vueOptions;
            r && (e = function t(e, n) {
                for (var r, o = e.$children, i = o.length - 1; i >= 0; i--) {
                    var a = o[i];
                    if (a.$scope._$vueId === n) return a;
                }
                for (var s = o.length - 1; s >= 0; s--) if (r = t(o[s], n)) return r;
            }(this.$vm, r)), e || (e = this.$vm), o.parent = e;
        }
        function ct(t) {
            ht.default.prototype.getOpenerEventChannel = function() {
                return this.__eventChannel__ || (this.__eventChannel__ = new Ct()), this.__eventChannel__;
            };
            var e = ht.default.prototype.__call_hook;
            return ht.default.prototype.__call_hook = function(t, n) {
                return "onLoad" === t && n && n.__id__ && (this.__eventChannel__ = C(n.__id__), 
                delete n.__id__), e.call(this, t, n);
            }, App(function(t) {
                return nt(t, {
                    mocks: Zt,
                    initRefs: at
                });
            }(t)), t;
        }
        function ut(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : re, n = t ? Object.keys(t).map(function(n) {
                var r = t[n];
                if (void 0 === r) return "";
                if (null === r) return e(n);
                if (Array.isArray(r)) {
                    var o = [];
                    return r.forEach(function(t) {
                        void 0 !== t && (null === t ? o.push(e(n)) : o.push(e(n) + "=" + e(t)));
                    }), o.join("&");
                }
                return e(n) + "=" + e(r);
            }).filter(function(t) {
                return t.length > 0;
            }).join("&") : null;
            return n ? "?".concat(n) : "";
        }
        function ft(t) {
            return function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.isPage, r = e.initRelation, o = a(B(ht.default, t), 2), s = o[0], c = o[1], u = i({
                    multipleSlots: !0,
                    addGlobalClass: !0
                }, c.options || {});
                c["mp-weixin"] && c["mp-weixin"].options && Object.assign(u, c["mp-weixin"].options);
                var f = {
                    options: u,
                    data: H(c, ht.default.prototype),
                    behaviors: W(c, rt),
                    properties: Y(c.props, !1, c.__file),
                    lifetimes: {
                        attached: function() {
                            var t = this.properties, e = {
                                mpType: n.call(this) ? "page" : "component",
                                mpInstance: this,
                                propsData: t
                            };
                            G(t.vueId, this), r.call(this, {
                                vuePid: this._$vuePid,
                                vueOptions: e
                            }), this.$vm = new s(e), K(this.$vm, t.vueSlots), this.$vm.$mount();
                        },
                        ready: function() {
                            this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                        },
                        detached: function() {
                            this.$vm && this.$vm.$destroy();
                        }
                    },
                    pageLifetimes: {
                        show: function(t) {
                            this.$vm && this.$vm.__call_hook("onPageShow", t);
                        },
                        hide: function() {
                            this.$vm && this.$vm.__call_hook("onPageHide");
                        },
                        resize: function(t) {
                            this.$vm && this.$vm.__call_hook("onPageResize", t);
                        }
                    },
                    methods: {
                        __l: st,
                        __e: et
                    }
                };
                return c.externalClasses && (f.externalClasses = c.externalClasses), Array.isArray(c.wxsCallMethods) && c.wxsCallMethods.forEach(function(t) {
                    f.methods[t] = function(e) {
                        return this.$vm[t](e);
                    };
                }), n ? f : [ f, s ];
            }(t, {
                isPage: ot,
                initRelation: it
            });
        }
        function pt(t) {
            return function(t, e) {
                e.isPage, e.initRelation;
                var n = ft(t);
                return q(n.methods, oe, t), n.methods.onLoad = function(t) {
                    this.options = t;
                    var e = Object.assign({}, t);
                    delete e.__id__, this.$page = {
                        fullPath: "/" + (this.route || this.is) + ut(e)
                    }, this.$vm.$mp.query = t, this.$vm.__call_hook("onLoad", t);
                }, n;
            }(t, {
                isPage: ot,
                initRelation: it
            });
        }
        function lt(t) {
            return Component(pt(t));
        }
        function dt(t) {
            return Component(ft(t));
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.createApp = ct, e.createComponent = dt, e.createPage = lt, e.default = void 0;
        var ht = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(r("66fd")), vt = Object.prototype.toString, yt = Object.prototype.hasOwnProperty, gt = /-(\w)/g, _t = _(function(t) {
            return t.replace(gt, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        }), mt = [ "invoke", "success", "fail", "complete", "returnValue" ], bt = {}, Ot = {}, St = {
            returnValue: function(t) {
                return S(t) ? t.then(function(t) {
                    return t[1];
                }).catch(function(t) {
                    return t[0];
                }) : t;
            }
        }, At = /^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, wt = /^create|Manager$/, Et = [ "createBLEConnection" ], kt = [ "createBLEConnection" ], $t = /^on|^off/;
        Promise.prototype.finally || (Promise.prototype.finally = function(t) {
            var e = this.constructor;
            return this.then(function(n) {
                return e.resolve(t()).then(function() {
                    return n;
                });
            }, function(n) {
                return e.resolve(t()).then(function() {
                    throw n;
                });
            });
        });
        var It = !1, xt = 0, Tt = 0, Pt = {
            promiseInterceptor: St
        }, jt = Object.freeze({
            __proto__: null,
            upx2px: function(t, e) {
                if (0 === xt && function() {
                    var t = wx.getSystemInfoSync(), e = t.platform, n = t.pixelRatio, r = t.windowWidth;
                    xt = r, Tt = n, It = "ios" === e;
                }(), 0 === (t = Number(t))) return 0;
                var n = t / 750 * (e || xt);
                return n < 0 && (n = -n), 0 === (n = Math.floor(n + 1e-4)) && (n = 1 !== Tt && It ? .5 : 1), 
                t < 0 ? -n : n;
            },
            addInterceptor: function(t, e) {
                "string" == typeof t && v(e) ? m(Ot[t] || (Ot[t] = {}), e) : v(t) && m(bt, t);
            },
            removeInterceptor: function(t, e) {
                "string" == typeof t ? v(e) ? b(Ot[t], e) : delete Ot[t] : v(t) && b(bt, t);
            },
            interceptors: Pt
        }), Ct = function() {
            function t(e, n) {
                var r = this;
                (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t), this.id = e, this.listener = {}, this.emitCache = {}, n && Object.keys(n).forEach(function(t) {
                    r.on(t, n[t]);
                });
            }
            return u(t, [ {
                key: "emit",
                value: function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    var o = this.listener[t];
                    if (!o) return (this.emitCache[t] || (this.emitCache[t] = [])).push(n);
                    o.forEach(function(t) {
                        t.fn.apply(t.fn, n);
                    }), this.listener[t] = o.filter(function(t) {
                        return "once" !== t.type;
                    });
                }
            }, {
                key: "on",
                value: function(t, e) {
                    this._addListener(t, "on", e), this._clearCache(t);
                }
            }, {
                key: "once",
                value: function(t, e) {
                    this._addListener(t, "once", e), this._clearCache(t);
                }
            }, {
                key: "off",
                value: function(t, e) {
                    var n = this.listener[t];
                    if (n) if (e) for (var r = 0; r < n.length; ) n[r].fn === e && (n.splice(r, 1), 
                    r--), r++; else delete this.listener[t];
                }
            }, {
                key: "_clearCache",
                value: function(t) {
                    var e = this.emitCache[t];
                    if (e) for (;e.length > 0; ) this.emit.apply(this, [ t ].concat(e.shift()));
                }
            }, {
                key: "_addListener",
                value: function(t, e, n) {
                    (this.listener[t] || (this.listener[t] = [])).push({
                        fn: n,
                        type: e
                    });
                }
            } ]), t;
        }(), Nt = {}, Rt = [], Dt = 0, Ut = {
            redirectTo: {
                name: function(t) {
                    return "back" === t.exists && t.delta ? "navigateBack" : "redirectTo";
                },
                args: function(t) {
                    if ("back" === t.exists && t.url) {
                        var e = function(t) {
                            for (var e = getCurrentPages(), n = e.length; n--; ) {
                                var r = e[n];
                                if (r.$page && r.$page.fullPath === t) return n;
                            }
                            return -1;
                        }(t.url);
                        if (-1 !== e) {
                            var n = getCurrentPages().length - 1 - e;
                            n > 0 && (t.delta = n);
                        }
                    }
                }
            },
            navigateTo: {
                args: function(t, e) {
                    var n = function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = new Ct(++Dt, t);
                        return e && (Nt[Dt] = n, Rt.push(n)), n;
                    }(t.events).id;
                    t.url && (t.url = t.url + (-1 === t.url.indexOf("?") ? "?" : "&") + "__id__=" + n);
                },
                returnValue: function(t, e) {
                    t.eventChannel = C();
                }
            },
            previewImage: {
                args: function(t) {
                    var e = parseInt(t.current);
                    if (!isNaN(e)) {
                        var n = t.urls;
                        if (Array.isArray(n)) {
                            var r = n.length;
                            if (r) return e < 0 ? e = 0 : e >= r && (e = r - 1), e > 0 ? (t.current = n[e], 
                            t.urls = n.filter(function(t, r) {
                                return !(r < e) || t !== n[e];
                            })) : t.current = n[0], {
                                indicator: !1,
                                loop: !1
                            };
                        }
                    }
                }
            },
            getSystemInfo: {
                returnValue: N
            },
            getSystemInfoSync: {
                returnValue: N
            }
        }, Lt = [ "success", "fail", "cancel", "complete" ], Mt = Object.create(null);
        [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(t) {
            Mt[t] = function(t) {
                return function(e) {
                    var n = e.fail, r = e.complete, o = {
                        errMsg: "".concat(t, ":fail:暂不支持 ").concat(t, " 方法")
                    };
                    d(n) && n(o), d(r) && r(o);
                };
            }(t);
        });
        var Vt = {
            oauth: [ "weixin" ],
            share: [ "weixin" ],
            payment: [ "wxpay" ],
            push: [ "weixin" ]
        }, Ft = Object.freeze({
            __proto__: null,
            getProvider: function(t) {
                var e = t.service, n = t.success, r = t.fail, o = t.complete, i = !1;
                Vt[e] ? (i = {
                    errMsg: "getProvider:ok",
                    service: e,
                    provider: Vt[e]
                }, d(n) && n(i)) : (i = {
                    errMsg: "getProvider:fail:服务[" + e + "]不存在"
                }, d(r) && r(i)), d(o) && o(i);
            }
        }), qt = function() {
            var t;
            return function() {
                return t || (t = new ht.default()), t;
            };
        }(), Bt = Object.freeze({
            __proto__: null,
            $on: function() {
                return M(qt(), "$on", Array.prototype.slice.call(arguments));
            },
            $off: function() {
                return M(qt(), "$off", Array.prototype.slice.call(arguments));
            },
            $once: function() {
                return M(qt(), "$once", Array.prototype.slice.call(arguments));
            },
            $emit: function() {
                return M(qt(), "$emit", Array.prototype.slice.call(arguments));
            }
        }), Kt = Object.freeze({
            __proto__: null
        }), Gt = Page, Ht = Component, zt = /:/g, Wt = _(function(t) {
            return _t(t.replace(zt, "-"));
        });
        Page = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return F("onLoad", t), Gt(t);
        }, Component = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return F("created", t), Ht(t);
        };
        var Jt = [ String, Number, Boolean, Object, Array, null ], Yt = "~", Xt = "^", Qt = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ], Zt = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ], te = /[!'()*]/g, ee = function(t) {
            return "%" + t.charCodeAt(0).toString(16);
        }, ne = /%2C/g, re = function(t) {
            return encodeURIComponent(t).replace(te, ee).replace(ne, ",");
        }, oe = [ "onShow", "onHide", "onUnload" ];
        oe.push.apply(oe, [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ]), 
        [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ].forEach(function(t) {
            Ut[t] = !1;
        }), [].forEach(function(t) {
            var e = Ut[t] && Ut[t].name ? Ut[t].name : t;
            wx.canIUse(e) || (Ut[t] = !1);
        });
        var ie = {};
        "undefined" != typeof Proxy ? ie = new Proxy({}, {
            get: function(t, e) {
                return y(t, e) ? t[e] : jt[e] ? jt[e] : Kt[e] ? j(e, Kt[e]) : Ft[e] ? j(e, Ft[e]) : Mt[e] ? j(e, Mt[e]) : Bt[e] ? Bt[e] : y(wx, e) || y(Ut, e) ? j(e, L(e, wx[e])) : void 0;
            },
            set: function(t, e, n) {
                return t[e] = n, !0;
            }
        }) : (Object.keys(jt).forEach(function(t) {
            ie[t] = jt[t];
        }), Object.keys(Mt).forEach(function(t) {
            ie[t] = j(t, Mt[t]);
        }), Object.keys(Ft).forEach(function(t) {
            ie[t] = j(t, Mt[t]);
        }), Object.keys(Bt).forEach(function(t) {
            ie[t] = Bt[t];
        }), Object.keys(Kt).forEach(function(t) {
            ie[t] = j(t, Kt[t]);
        }), Object.keys(wx).forEach(function(t) {
            (y(wx, t) || y(Ut, t)) && (ie[t] = j(t, L(t, wx[t])));
        })), wx.createApp = ct, wx.createPage = lt, wx.createComponent = dt;
        var ae = ie;
        e.default = ae;
    },
    "66fd": function(t, e, r) {
        r.r(e), function(t) {
            function r(t) {
                return null == t;
            }
            function o(t) {
                return null != t;
            }
            function i(t) {
                return !0 === t;
            }
            function a(t) {
                return "string" == typeof t || "number" == typeof t || "symbol" === (void 0 === t ? "undefined" : n(t)) || "boolean" == typeof t;
            }
            function s(t) {
                return null !== t && "object" === (void 0 === t ? "undefined" : n(t));
            }
            function c(t) {
                return "[object Object]" === ye.call(t);
            }
            function u(t) {
                var e = parseFloat(String(t));
                return e >= 0 && Math.floor(e) === e && isFinite(t);
            }
            function f(t) {
                return o(t) && "function" == typeof t.then && "function" == typeof t.catch;
            }
            function p(t) {
                return null == t ? "" : Array.isArray(t) || c(t) && t.toString === ye ? JSON.stringify(t, null, 2) : String(t);
            }
            function l(t) {
                var e = parseFloat(t);
                return isNaN(e) ? t : e;
            }
            function d(t, e) {
                for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                return e ? function(t) {
                    return n[t.toLowerCase()];
                } : function(t) {
                    return n[t];
                };
            }
            function h(t, e) {
                if (t.length) {
                    var n = t.indexOf(e);
                    if (n > -1) return t.splice(n, 1);
                }
            }
            function v(t, e) {
                return me.call(t, e);
            }
            function y(t) {
                var e = Object.create(null);
                return function(n) {
                    return e[n] || (e[n] = t(n));
                };
            }
            function g(t, e) {
                e = e || 0;
                for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
                return r;
            }
            function _(t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            }
            function m(t) {
                for (var e = {}, n = 0; n < t.length; n++) t[n] && _(e, t[n]);
                return e;
            }
            function b(t, e, n) {}
            function O(t, e) {
                if (t === e) return !0;
                var n = s(t), r = s(e);
                if (!n || !r) return !n && !r && String(t) === String(e);
                try {
                    var o = Array.isArray(t), i = Array.isArray(e);
                    if (o && i) return t.length === e.length && t.every(function(t, n) {
                        return O(t, e[n]);
                    });
                    if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                    if (o || i) return !1;
                    var a = Object.keys(t), c = Object.keys(e);
                    return a.length === c.length && a.every(function(n) {
                        return O(t[n], e[n]);
                    });
                } catch (t) {
                    return !1;
                }
            }
            function S(t, e) {
                for (var n = 0; n < t.length; n++) if (O(t[n], e)) return n;
                return -1;
            }
            function A(t) {
                var e = !1;
                return function() {
                    e || (e = !0, t.apply(this, arguments));
                };
            }
            function w(t) {
                var e = (t + "").charCodeAt(0);
                return 36 === e || 95 === e;
            }
            function E(t, e, n, r) {
                Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                });
            }
            function k(t) {
                return "function" == typeof t && /native code/.test(t.toString());
            }
            function $(t) {
                ze.SharedObject.targetStack.push(t), ze.SharedObject.target = t;
            }
            function I() {
                ze.SharedObject.targetStack.pop(), ze.SharedObject.target = ze.SharedObject.targetStack[ze.SharedObject.targetStack.length - 1];
            }
            function x(t) {
                return new We(void 0, void 0, void 0, String(t));
            }
            function T(t) {
                tn = t;
            }
            function P(t, e, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    E(t, i, e[i]);
                }
            }
            function j(t, e) {
                var n;
                if (s(t) && !(t instanceof We)) return v(t, "__ob__") && t.__ob__ instanceof en ? n = t.__ob__ : tn && !qe() && (Array.isArray(t) || c(t)) && Object.isExtensible(t) && !t._isVue && (n = new en(t)), 
                e && n && n.vmCount++, n;
            }
            function C(t, e, n, r, o) {
                var i = new ze(), a = Object.getOwnPropertyDescriptor(t, e);
                if (!a || !1 !== a.configurable) {
                    var s = a && a.get, c = a && a.set;
                    s && !c || 2 !== arguments.length || (n = t[e]);
                    var u = !o && j(n);
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var e = s ? s.call(t) : n;
                            return ze.SharedObject.target && (i.depend(), u && (u.dep.depend(), Array.isArray(e) && D(e))), 
                            e;
                        },
                        set: function(e) {
                            var r = s ? s.call(t) : n;
                            e === r || e != e && r != r || s && !c || (c ? c.call(t, e) : n = e, u = !o && j(e), 
                            i.notify());
                        }
                    });
                }
            }
            function N(t, e, n) {
                if (Array.isArray(t) && u(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), 
                n;
                if (e in t && !(e in Object.prototype)) return t[e] = n, n;
                var r = t.__ob__;
                return t._isVue || r && r.vmCount ? n : r ? (C(r.value, e, n), r.dep.notify(), n) : (t[e] = n, 
                n);
            }
            function R(t, e) {
                if (Array.isArray(t) && u(e)) t.splice(e, 1); else {
                    var n = t.__ob__;
                    t._isVue || n && n.vmCount || v(t, e) && (delete t[e], n && n.dep.notify());
                }
            }
            function D(t) {
                for (var e = void 0, n = 0, r = t.length; n < r; n++) (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), 
                Array.isArray(e) && D(e);
            }
            function U(t, e) {
                if (!e) return t;
                for (var n, r, o, i = Ke ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < i.length; a++) "__ob__" !== (n = i[a]) && (r = t[n], 
                o = e[n], v(t, n) ? r !== o && c(r) && c(o) && U(r, o) : N(t, n, o));
                return t;
            }
            function L(t, e, n) {
                return n ? function() {
                    var r = "function" == typeof e ? e.call(n, n) : e, o = "function" == typeof t ? t.call(n, n) : t;
                    return r ? U(r, o) : o;
                } : e ? t ? function() {
                    return U("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t);
                } : e : t;
            }
            function M(t, e) {
                var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
                return n ? function(t) {
                    for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
                    return e;
                }(n) : n;
            }
            function V(t, e, n, r) {
                var o = Object.create(t || null);
                return e ? _(o, e) : o;
            }
            function F(t, e, n) {
                function r(r) {
                    var o = nn[r] || on;
                    s[r] = o(t[r], e[r], n, r);
                }
                if ("function" == typeof e && (e = e.options), function(t, e) {
                    var n = t.props;
                    if (n) {
                        var r, o, i = {};
                        if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (o = n[r]) && (i[Oe(o)] = {
                            type: null
                        }); else if (c(n)) for (var a in n) o = n[a], i[Oe(a)] = c(o) ? o : {
                            type: o
                        };
                        t.props = i;
                    }
                }(e), function(t, e) {
                    var n = t.inject;
                    if (n) {
                        var r = t.inject = {};
                        if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {
                            from: n[o]
                        }; else if (c(n)) for (var i in n) {
                            var a = n[i];
                            r[i] = c(a) ? _({
                                from: i
                            }, a) : {
                                from: a
                            };
                        }
                    }
                }(e), function(t) {
                    var e = t.directives;
                    if (e) for (var n in e) {
                        var r = e[n];
                        "function" == typeof r && (e[n] = {
                            bind: r,
                            update: r
                        });
                    }
                }(e), !e._base && (e.extends && (t = F(t, e.extends, n)), e.mixins)) for (var o = 0, i = e.mixins.length; o < i; o++) t = F(t, e.mixins[o], n);
                var a, s = {};
                for (a in t) r(a);
                for (a in e) v(t, a) || r(a);
                return s;
            }
            function q(t, e, n, r) {
                if ("string" == typeof n) {
                    var o = t[e];
                    if (v(o, n)) return o[n];
                    var i = Oe(n);
                    if (v(o, i)) return o[i];
                    var a = Se(i);
                    return v(o, a) ? o[a] : o[n] || o[i] || o[a];
                }
            }
            function B(t, e, n, r) {
                var o = e[t], i = !v(n, t), a = n[t], s = H(Boolean, o.type);
                if (s > -1) if (i && !v(o, "default")) a = !1; else if ("" === a || a === we(t)) {
                    var c = H(String, o.type);
                    (c < 0 || s < c) && (a = !0);
                }
                if (void 0 === a) {
                    a = function(t, e, n) {
                        if (v(e, "default")) {
                            var r = e.default;
                            return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== K(e.type) ? r.call(t) : r;
                        }
                    }(r, o, t);
                    var u = tn;
                    T(!0), j(a), T(u);
                }
                return a;
            }
            function K(t) {
                var e = t && t.toString().match(/^\s*function (\w+)/);
                return e ? e[1] : "";
            }
            function G(t, e) {
                return K(t) === K(e);
            }
            function H(t, e) {
                if (!Array.isArray(e)) return G(e, t) ? 0 : -1;
                for (var n = 0, r = e.length; n < r; n++) if (G(e[n], t)) return n;
                return -1;
            }
            function z(t, e, n) {
                $();
                try {
                    if (e) for (var r = e; r = r.$parent; ) {
                        var o = r.$options.errorCaptured;
                        if (o) for (var i = 0; i < o.length; i++) try {
                            if (!1 === o[i].call(r, t, e, n)) return;
                        } catch (t) {
                            J(t, r, "errorCaptured hook");
                        }
                    }
                    J(t, e, n);
                } finally {
                    I();
                }
            }
            function W(t, e, n, r, o) {
                var i;
                try {
                    (i = n ? t.apply(e, n) : t.call(e)) && !i._isVue && f(i) && !i._handled && (i.catch(function(t) {
                        return z(t, r, o + " (Promise/async)");
                    }), i._handled = !0);
                } catch (t) {
                    z(t, r, o);
                }
                return i;
            }
            function J(t, e, n) {
                if (Te.errorHandler) try {
                    return Te.errorHandler.call(null, t, e, n);
                } catch (e) {
                    e !== t && Y(e, null, "config.errorHandler");
                }
                Y(t, e, n);
            }
            function Y(t, e, n) {
                if (!Ce && !Ne || "undefined" == typeof console) throw t;
                console.error(t);
            }
            function X() {
                sn = !1;
                var t = an.slice(0);
                an.length = 0;
                for (var e = 0; e < t.length; e++) t[e]();
            }
            function Q(t, e) {
                var n;
                if (an.push(function() {
                    if (t) try {
                        t.call(e);
                    } catch (t) {
                        z(t, e, "nextTick");
                    } else n && n(e);
                }), sn || (sn = !0, rn()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
                    n = t;
                });
            }
            function Z(t) {
                (function t(e, n) {
                    var r, o, i = Array.isArray(e);
                    if (!(!i && !s(e) || Object.isFrozen(e) || e instanceof We)) {
                        if (e.__ob__) {
                            var a = e.__ob__.dep.id;
                            if (n.has(a)) return;
                            n.add(a);
                        }
                        if (i) for (r = e.length; r--; ) t(e[r], n); else for (r = (o = Object.keys(e)).length; r--; ) t(e[o[r]], n);
                    }
                })(t, ln), ln.clear();
            }
            function tt(t, e) {
                function n() {
                    var t = arguments, r = n.fns;
                    if (!Array.isArray(r)) return W(r, null, arguments, e, "v-on handler");
                    for (var o = r.slice(), i = 0; i < o.length; i++) W(o[i], null, t, e, "v-on handler");
                }
                return n.fns = t, n;
            }
            function et(t, e, n, i) {
                var a = e.options.mpOptions && e.options.mpOptions.properties;
                if (r(a)) return n;
                var s = e.options.mpOptions.externalClasses || [], c = t.attrs, u = t.props;
                if (o(c) || o(u)) for (var f in a) {
                    var p = we(f);
                    (nt(n, u, f, p, !0) || nt(n, c, f, p, !1)) && n[f] && -1 !== s.indexOf(p) && i[Oe(n[f])] && (n[f] = i[Oe(n[f])]);
                }
                return n;
            }
            function nt(t, e, n, r, i) {
                if (o(e)) {
                    if (v(e, n)) return t[n] = e[n], i || delete e[n], !0;
                    if (v(e, r)) return t[n] = e[r], i || delete e[r], !0;
                }
                return !1;
            }
            function rt(t) {
                return a(t) ? [ x(t) ] : Array.isArray(t) ? function t(e, n) {
                    var s, c, u, f, p = [];
                    for (s = 0; s < e.length; s++) r(c = e[s]) || "boolean" == typeof c || (u = p.length - 1, 
                    f = p[u], Array.isArray(c) ? c.length > 0 && (ot((c = t(c, (n || "") + "_" + s))[0]) && ot(f) && (p[u] = x(f.text + c[0].text), 
                    c.shift()), p.push.apply(p, c)) : a(c) ? ot(f) ? p[u] = x(f.text + c) : "" !== c && p.push(x(c)) : ot(c) && ot(f) ? p[u] = x(f.text + c.text) : (i(e._isVList) && o(c.tag) && r(c.key) && o(n) && (c.key = "__vlist" + n + "_" + s + "__"), 
                    p.push(c)));
                    return p;
                }(t) : void 0;
            }
            function ot(t) {
                return o(t) && o(t.text) && function(t) {
                    return !1 === t;
                }(t.isComment);
            }
            function it(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" == typeof e ? e.call(t) : e);
            }
            function at(t) {
                var e = st(t.$options.inject, t);
                e && (T(!1), Object.keys(e).forEach(function(n) {
                    C(t, n, e[n]);
                }), T(!0));
            }
            function st(t, e) {
                if (t) {
                    for (var n = Object.create(null), r = Ke ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) {
                        var i = r[o];
                        if ("__ob__" !== i) {
                            for (var a = t[i].from, s = e; s; ) {
                                if (s._provided && v(s._provided, a)) {
                                    n[i] = s._provided[a];
                                    break;
                                }
                                s = s.$parent;
                            }
                            if (!s && "default" in t[i]) {
                                var c = t[i].default;
                                n[i] = "function" == typeof c ? c.call(e) : c;
                            }
                        }
                    }
                    return n;
                }
            }
            function ct(t, e) {
                if (!t || !t.length) return {};
                for (var n = {}, r = 0, o = t.length; r < o; r++) {
                    var i = t[r], a = i.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== e && i.fnContext !== e || !a || null == a.slot) i.asyncMeta && i.asyncMeta.data && "page" === i.asyncMeta.data.slot ? (n.page || (n.page = [])).push(i) : (n.default || (n.default = [])).push(i); else {
                        var s = a.slot, c = n[s] || (n[s] = []);
                        "template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i);
                    }
                }
                for (var u in n) n[u].every(ut) && delete n[u];
                return n;
            }
            function ut(t) {
                return t.isComment && !t.asyncFactory || " " === t.text;
            }
            function ft(t, e, n) {
                var r, o = Object.keys(e).length > 0, i = t ? !!t.$stable : !o, a = t && t.$key;
                if (t) {
                    if (t._normalized) return t._normalized;
                    if (i && n && n !== ve && a === n.$key && !o && !n.$hasNormal) return n;
                    for (var s in r = {}, t) t[s] && "$" !== s[0] && (r[s] = pt(e, s, t[s]));
                } else r = {};
                for (var c in e) c in r || (r[c] = lt(e, c));
                return t && Object.isExtensible(t) && (t._normalized = r), E(r, "$stable", i), E(r, "$key", a), 
                E(r, "$hasNormal", o), r;
            }
            function pt(t, e, r) {
                var o = function() {
                    var t = arguments.length ? r.apply(null, arguments) : r({});
                    return (t = t && "object" === (void 0 === t ? "undefined" : n(t)) && !Array.isArray(t) ? [ t ] : rt(t)) && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t;
                };
                return r.proxy && Object.defineProperty(t, e, {
                    get: o,
                    enumerable: !0,
                    configurable: !0
                }), o;
            }
            function lt(t, e) {
                return function() {
                    return t[e];
                };
            }
            function dt(t, e) {
                var n, r, i, a, c;
                if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), r = 0, 
                i = t.length; r < i; r++) n[r] = e(t[r], r, r, r); else if ("number" == typeof t) for (n = new Array(t), 
                r = 0; r < t; r++) n[r] = e(r + 1, r, r, r); else if (s(t)) if (Ke && t[Symbol.iterator]) {
                    n = [];
                    for (var u = t[Symbol.iterator](), f = u.next(); !f.done; ) n.push(e(f.value, n.length, r++, r)), 
                    f = u.next();
                } else for (a = Object.keys(t), n = new Array(a.length), r = 0, i = a.length; r < i; r++) c = a[r], 
                n[r] = e(t[c], c, r, r);
                return o(n) || (n = []), n._isVList = !0, n;
            }
            function ht(t, e, n, r) {
                var o, i = this.$scopedSlots[t];
                i ? (n = n || {}, r && (n = _(_({}, r), n)), o = i(n, this, n._i) || e) : o = this.$slots[t] || e;
                var a = n && n.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, o) : o;
            }
            function vt(t) {
                return q(this.$options, "filters", t) || $e;
            }
            function yt(t, e) {
                return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
            }
            function gt(t, e, n, r, o) {
                var i = Te.keyCodes[e] || n;
                return o && r && !Te.keyCodes[e] ? yt(o, r) : i ? yt(i, t) : r ? we(r) !== e : void 0;
            }
            function _t(t, e, n, r, o) {
                var i;
                if (n && s(n)) for (var a in Array.isArray(n) && (n = m(n)), n) !function(a) {
                    if ("class" === a || "style" === a || _e(a)) i = t; else {
                        var s = t.attrs && t.attrs.type;
                        i = r || Te.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                    }
                    var c = Oe(a), u = we(a);
                    c in i || u in i || (i[a] = n[a], !o) || ((t.on || (t.on = {}))["update:" + a] = function(t) {
                        n[a] = t;
                    });
                }(a);
                return t;
            }
            function mt(t, e) {
                var n = this._staticTrees || (this._staticTrees = []), r = n[t];
                return r && !e || Ot(r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), 
                r;
            }
            function bt(t, e, n) {
                return Ot(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
            }
            function Ot(t, e, n) {
                if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && St(t[r], e + "_" + r, n); else St(t, e, n);
            }
            function St(t, e, n) {
                t.isStatic = !0, t.key = e, t.isOnce = n;
            }
            function At(t, e) {
                if (e && c(e)) {
                    var n = t.on = t.on ? _({}, t.on) : {};
                    for (var r in e) {
                        var o = n[r], i = e[r];
                        n[r] = o ? [].concat(o, i) : i;
                    }
                }
                return t;
            }
            function wt(t, e, n, r) {
                e = e || {
                    $stable: !n
                };
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    Array.isArray(i) ? wt(i, e, n) : i && (i.proxy && (i.fn.proxy = !0), e[i.key] = i.fn);
                }
                return r && (e.$key = r), e;
            }
            function Et(t, e) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n];
                    "string" == typeof r && r && (t[e[n]] = e[n + 1]);
                }
                return t;
            }
            function kt(t, e) {
                return "string" == typeof t ? e + t : t;
            }
            function $t(t) {
                t._o = bt, t._n = l, t._s = p, t._l = dt, t._t = ht, t._q = O, t._i = S, t._m = mt, 
                t._f = vt, t._k = gt, t._b = _t, t._v = x, t._e = Ye, t._u = wt, t._g = At, t._d = Et, 
                t._p = kt;
            }
            function It(t, e, n, r, o) {
                var a, s = this, c = o.options;
                v(r, "_uid") ? (a = Object.create(r))._original = r : (a = r, r = r._original);
                var u = i(c._compiled), f = !u;
                this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || ve, 
                this.injections = st(c.inject, r), this.slots = function() {
                    return s.$slots || ft(t.scopedSlots, s.$slots = ct(n, r)), s.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return ft(t.scopedSlots, this.slots());
                    }
                }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = ft(t.scopedSlots, this.$slots)), 
                c._scopeId ? this._c = function(t, e, n, o) {
                    var i = Ct(a, t, e, n, o, f);
                    return i && !Array.isArray(i) && (i.fnScopeId = c._scopeId, i.fnContext = r), i;
                } : this._c = function(t, e, n, r) {
                    return Ct(a, t, e, n, r, f);
                };
            }
            function xt(t, e, n, r, o) {
                var i = function(t) {
                    var e = new We(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
                    return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, 
                    e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, 
                    e.asyncMeta = t.asyncMeta, e.isCloned = !0, e;
                }(t);
                return i.fnContext = n, i.fnOptions = r, e.slot && ((i.data || (i.data = {})).slot = e.slot), 
                i;
            }
            function Tt(t, e) {
                for (var n in e) t[Oe(n)] = e[n];
            }
            function Pt(t, e, n, a, c) {
                if (!r(t)) {
                    var u = n.$options._base;
                    if (s(t) && (t = u.extend(t)), "function" == typeof t) {
                        var f;
                        if (r(t.cid) && void 0 === (t = Lt(f = t, u))) return function(t, e, n, r, o) {
                            var i = Ye();
                            return i.asyncFactory = t, i.asyncMeta = {
                                data: e,
                                context: n,
                                children: r,
                                tag: o
                            }, i;
                        }(f, e, n, a, c);
                        e = e || {}, ee(t), o(e.model) && function(t, e) {
                            var n = t.model && t.model.prop || "value", r = t.model && t.model.event || "input";
                            (e.attrs || (e.attrs = {}))[n] = e.model.value;
                            var i = e.on || (e.on = {}), a = i[r], s = e.model.callback;
                            o(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (i[r] = [ s ].concat(a)) : i[r] = s;
                        }(t.options, e);
                        var p = function(t, e, n, i) {
                            var a = e.options.props;
                            if (r(a)) return et(t, e, {}, i);
                            var s = {}, c = t.attrs, u = t.props;
                            if (o(c) || o(u)) for (var f in a) {
                                var p = we(f);
                                nt(s, u, f, p, !0) || nt(s, c, f, p, !1);
                            }
                            return et(t, e, s, i);
                        }(e, t, 0, n);
                        if (i(t.options.functional)) return function(t, e, n, r, i) {
                            var a = t.options, s = {}, c = a.props;
                            if (o(c)) for (var u in c) s[u] = B(u, c, e || ve); else o(n.attrs) && Tt(s, n.attrs), 
                            o(n.props) && Tt(s, n.props);
                            var f = new It(n, s, i, r, t), p = a.render.call(null, f._c, f);
                            if (p instanceof We) return xt(p, n, f.parent, a, f);
                            if (Array.isArray(p)) {
                                for (var l = rt(p) || [], d = new Array(l.length), h = 0; h < l.length; h++) d[h] = xt(l[h], n, f.parent, a, f);
                                return d;
                            }
                        }(t, p, e, n, a);
                        var l = e.on;
                        if (e.on = e.nativeOn, i(t.options.abstract)) {
                            var d = e.slot;
                            e = {}, d && (e.slot = d);
                        }
                        !function(t) {
                            for (var e = t.hook || (t.hook = {}), n = 0; n < yn.length; n++) {
                                var r = yn[n], o = e[r], i = vn[r];
                                o === i || o && o._merged || (e[r] = o ? jt(i, o) : i);
                            }
                        }(e);
                        var h = t.options.name || c;
                        return new We("vue-component-" + t.cid + (h ? "-" + h : ""), e, void 0, void 0, void 0, n, {
                            Ctor: t,
                            propsData: p,
                            listeners: l,
                            tag: c,
                            children: a
                        }, f);
                    }
                }
            }
            function jt(t, e) {
                var n = function(n, r) {
                    t(n, r), e(n, r);
                };
                return n._merged = !0, n;
            }
            function Ct(t, e, n, r, o, s) {
                return (Array.isArray(n) || a(n)) && (o = r, r = n, n = void 0), i(s) && (o = _n), 
                Nt(t, e, n, r, o);
            }
            function Nt(t, e, n, r, i) {
                return o(n) && o(n.__ob__) ? Ye() : (o(n) && o(n.is) && (e = n.is), e ? (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
                    default: r[0]
                }, r.length = 0), i === _n ? r = rt(r) : i === gn && (r = function(t) {
                    for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                    return t;
                }(r)), "string" == typeof e ? (s = t.$vnode && t.$vnode.ns || Te.getTagNamespace(e), 
                a = Te.isReservedTag(e) ? new We(Te.parsePlatformTagName(e), n, r, void 0, void 0, t) : n && n.pre || !o(c = q(t.$options, "components", e)) ? new We(e, n, r, void 0, void 0, t) : Pt(c, n, t, r, e)) : a = Pt(e, n, t, r), 
                Array.isArray(a) ? a : o(a) ? (o(s) && Rt(a, s), o(n) && Dt(n), a) : Ye()) : Ye());
                var a, s, c;
            }
            function Rt(t, e, n) {
                if (t.ns = e, "foreignObject" === t.tag && (e = void 0, n = !0), o(t.children)) for (var a = 0, s = t.children.length; a < s; a++) {
                    var c = t.children[a];
                    o(c.tag) && (r(c.ns) || i(n) && "svg" !== c.tag) && Rt(c, e, n);
                }
            }
            function Dt(t) {
                s(t.style) && Z(t.style), s(t.class) && Z(t.class);
            }
            function Ut(t, e) {
                return (t.__esModule || Ke && "Module" === t[Symbol.toStringTag]) && (t = t.default), 
                s(t) ? e.extend(t) : t;
            }
            function Lt(t, e) {
                if (i(t.error) && o(t.errorComp)) return t.errorComp;
                if (o(t.resolved)) return t.resolved;
                var n = mn;
                if (n && o(t.owners) && -1 === t.owners.indexOf(n) && t.owners.push(n), i(t.loading) && o(t.loadingComp)) return t.loadingComp;
                if (n && !o(t.owners)) {
                    var a = t.owners = [ n ], c = !0, u = null, p = null;
                    n.$on("hook:destroyed", function() {
                        return h(a, n);
                    });
                    var l = function(t) {
                        for (var e = 0, n = a.length; e < n; e++) a[e].$forceUpdate();
                        t && (a.length = 0, null !== u && (clearTimeout(u), u = null), null !== p && (clearTimeout(p), 
                        p = null));
                    }, d = A(function(n) {
                        t.resolved = Ut(n, e), c ? a.length = 0 : l(!0);
                    }), v = A(function(e) {
                        o(t.errorComp) && (t.error = !0, l(!0));
                    }), y = t(d, v);
                    return s(y) && (f(y) ? r(t.resolved) && y.then(d, v) : f(y.component) && (y.component.then(d, v), 
                    o(y.error) && (t.errorComp = Ut(y.error, e)), o(y.loading) && (t.loadingComp = Ut(y.loading, e), 
                    0 === y.delay ? t.loading = !0 : u = setTimeout(function() {
                        u = null, r(t.resolved) && r(t.error) && (t.loading = !0, l(!1));
                    }, y.delay || 200)), o(y.timeout) && (p = setTimeout(function() {
                        p = null, r(t.resolved) && v(null);
                    }, y.timeout)))), c = !1, t.loading ? t.loadingComp : t.resolved;
                }
            }
            function Mt(t) {
                return t.isComment && t.asyncFactory;
            }
            function Vt(t) {
                if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (o(n) && (o(n.componentOptions) || Mt(n))) return n;
                }
            }
            function Ft(t, e) {
                hn.$on(t, e);
            }
            function qt(t, e) {
                hn.$off(t, e);
            }
            function Bt(t, e) {
                var n = hn;
                return function r() {
                    null !== e.apply(null, arguments) && n.$off(t, r);
                };
            }
            function Kt(t, e, n) {
                hn = t, function(t, e, n, o, a, s) {
                    var c, u, f, p;
                    for (c in t) u = t[c], f = e[c], p = dn(c), r(u) || (r(f) ? (r(u.fns) && (u = t[c] = tt(u, s)), 
                    i(p.once) && (u = t[c] = a(p.name, u, p.capture)), n(p.name, u, p.capture, p.passive, p.params)) : u !== f && (f.fns = u, 
                    t[c] = f));
                    for (c in e) r(t[c]) && o((p = dn(c)).name, e[c], p.capture);
                }(e, n || {}, Ft, qt, Bt, t), hn = void 0;
            }
            function Gt(t) {
                for (;t && (t = t.$parent); ) if (t._inactive) return !0;
                return !1;
            }
            function Ht(t, e) {
                if (e) {
                    if (t._directInactive = !1, Gt(t)) return;
                } else if (t._directInactive) return;
                if (t._inactive || null === t._inactive) {
                    t._inactive = !1;
                    for (var n = 0; n < t.$children.length; n++) Ht(t.$children[n]);
                    zt(t, "activated");
                }
            }
            function zt(t, e) {
                $();
                var n = t.$options[e], r = e + " hook";
                if (n) for (var o = 0, i = n.length; o < i; o++) W(n[o], t, null, t, r);
                t._hasHookEvent && t.$emit("hook:" + e), I();
            }
            function Wt() {
                var t, e;
                for ($n(), En = !0, On.sort(function(t, e) {
                    return t.id - e.id;
                }), kn = 0; kn < On.length; kn++) (t = On[kn]).before && t.before(), e = t.id, An[e] = null, 
                t.run();
                var n = Sn.slice(), r = On.slice();
                kn = On.length = Sn.length = 0, An = {}, wn = En = !1, function(t) {
                    for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Ht(t[e], !0);
                }(n), function(t) {
                    for (var e = t.length; e--; ) {
                        var n = t[e], r = n.vm;
                        r._watcher === n && r._isMounted && !r._isDestroyed && zt(r, "updated");
                    }
                }(r), Be && Te.devtools && Be.emit("flush");
            }
            function Jt(t, e, n) {
                Pn.get = function() {
                    return this[e][n];
                }, Pn.set = function(t) {
                    this[e][n] = t;
                }, Object.defineProperty(t, n, Pn);
            }
            function Yt(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && function(t, e) {
                    var n = t.$options.propsData || {}, r = t._props = {}, o = t.$options._propKeys = [];
                    for (var i in !t.$parent || T(!1), e) !function(i) {
                        o.push(i);
                        var a = B(i, e, n, t);
                        C(r, i, a), i in t || Jt(t, "_props", i);
                    }(i);
                    T(!0);
                }(t, e.props), e.methods && function(t, e) {
                    for (var n in t.$options.props, e) t[n] = "function" != typeof e[n] ? b : Ee(e[n], t);
                }(t, e.methods), e.data ? function(t) {
                    var e = t.$options.data;
                    c(e = t._data = "function" == typeof e ? function(t, e) {
                        $();
                        try {
                            return t.call(e, e);
                        } catch (t) {
                            return z(t, e, "data()"), {};
                        } finally {
                            I();
                        }
                    }(e, t) : e || {}) || (e = {});
                    for (var n = Object.keys(e), r = t.$options.props, o = (t.$options.methods, n.length); o--; ) {
                        var i = n[o];
                        r && v(r, i) || w(i) || Jt(t, "_data", i);
                    }
                    j(e, !0);
                }(t) : j(t._data = {}, !0), e.computed && function(t, e) {
                    var n = t._computedWatchers = Object.create(null), r = qe();
                    for (var o in e) {
                        var i = e[o], a = "function" == typeof i ? i : i.get;
                        r || (n[o] = new Tn(t, a || b, b, jn)), o in t || Xt(t, o, i);
                    }
                }(t, e.computed), e.watch && e.watch !== Me && function(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        if (Array.isArray(r)) for (var o = 0; o < r.length; o++) te(t, n, r[o]); else te(t, n, r);
                    }
                }(t, e.watch);
            }
            function Xt(t, e, n) {
                var r = !qe();
                "function" == typeof n ? (Pn.get = r ? Qt(e) : Zt(n), Pn.set = b) : (Pn.get = n.get ? r && !1 !== n.cache ? Qt(e) : Zt(n.get) : b, 
                Pn.set = n.set || b), Object.defineProperty(t, e, Pn);
            }
            function Qt(t) {
                return function() {
                    var e = this._computedWatchers && this._computedWatchers[t];
                    if (e) return e.dirty && e.evaluate(), ze.SharedObject.target && e.depend(), e.value;
                };
            }
            function Zt(t) {
                return function() {
                    return t.call(this, this);
                };
            }
            function te(t, e, n, r) {
                return c(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
            }
            function ee(t) {
                var e = t.options;
                if (t.super) {
                    var n = ee(t.super);
                    if (n !== t.superOptions) {
                        t.superOptions = n;
                        var r = function(t) {
                            var e, n = t.options, r = t.sealedOptions;
                            for (var o in n) n[o] !== r[o] && (e || (e = {}), e[o] = n[o]);
                            return e;
                        }(t);
                        r && _(t.extendOptions, r), (e = t.options = F(n, t.extendOptions)).name && (e.components[e.name] = t);
                    }
                }
                return e;
            }
            function ne(t) {
                this._init(t);
            }
            function re(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function(t) {
                    t = t || {};
                    var n = this, r = n.cid, o = t._Ctor || (t._Ctor = {});
                    if (o[r]) return o[r];
                    var i = t.name || n.options.name, a = function(t) {
                        this._init(t);
                    };
                    return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = e++, 
                    a.options = F(n.options, t), a.super = n, a.options.props && function(t) {
                        var e = t.options.props;
                        for (var n in e) Jt(t.prototype, "_props", n);
                    }(a), a.options.computed && function(t) {
                        var e = t.options.computed;
                        for (var n in e) Xt(t.prototype, n, e[n]);
                    }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, Ie.forEach(function(t) {
                        a[t] = n[t];
                    }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = t, 
                    a.sealedOptions = _({}, a.options), o[r] = a, a;
                };
            }
            function oe(t) {
                return t && (t.Ctor.options.name || t.tag);
            }
            function ie(t, e) {
                return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!function(t) {
                    return "[object RegExp]" === ye.call(t);
                }(t) && t.test(e);
            }
            function ae(t, e) {
                var n = t.cache, r = t.keys, o = t._vnode;
                for (var i in n) {
                    var a = n[i];
                    if (a) {
                        var s = oe(a.componentOptions);
                        s && !e(s) && se(n, i, r, o);
                    }
                }
            }
            function se(t, e, n, r) {
                var o = t[e];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(), t[e] = null, h(n, e);
            }
            function ce(t, e) {
                var n = {};
                return function t(e, n) {
                    if (e !== n) {
                        var r = fe(e), o = fe(n);
                        if (r == Un && o == Un) {
                            if (Object.keys(e).length >= Object.keys(n).length) for (var i in n) {
                                var a = e[i];
                                void 0 === a ? e[i] = null : t(a, n[i]);
                            }
                        } else r == Dn && o == Dn && e.length >= n.length && n.forEach(function(n, r) {
                            t(e[r], n);
                        });
                    }
                }(t, e), function t(e, n, r, o) {
                    if (e !== n) {
                        var i = fe(e), a = fe(n);
                        if (i == Un) if (a != Un || Object.keys(e).length < Object.keys(n).length) ue(o, r, e); else for (var s in e) !function(i) {
                            var a = e[i], s = n[i], c = fe(a), u = fe(s);
                            if (c != Dn && c != Un) a != n[i] && ue(o, ("" == r ? "" : r + ".") + i, a); else if (c == Dn) u != Dn || a.length < s.length ? ue(o, ("" == r ? "" : r + ".") + i, a) : a.forEach(function(e, n) {
                                t(e, s[n], ("" == r ? "" : r + ".") + i + "[" + n + "]", o);
                            }); else if (c == Un) if (u != Un || Object.keys(a).length < Object.keys(s).length) ue(o, ("" == r ? "" : r + ".") + i, a); else for (var f in a) t(a[f], s[f], ("" == r ? "" : r + ".") + i + "." + f, o);
                        }(s); else i == Dn ? a != Dn || e.length < n.length ? ue(o, r, e) : e.forEach(function(e, i) {
                            t(e, n[i], r + "[" + i + "]", o);
                        }) : ue(o, r, e);
                    }
                }(t, e, "", n), n;
            }
            function ue(t, e, n) {
                t[e] = n;
            }
            function fe(t) {
                return Object.prototype.toString.call(t);
            }
            function pe(t) {
                if (t.__next_tick_callbacks && t.__next_tick_callbacks.length) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var e = t.$scope;
                        console.log("[" + +new Date() + "][" + (e.is || e.route) + "][" + t._uid + "]:flushCallbacks[" + t.__next_tick_callbacks.length + "]");
                    }
                    var n = t.__next_tick_callbacks.slice(0);
                    t.__next_tick_callbacks.length = 0;
                    for (var r = 0; r < n.length; r++) n[r]();
                }
            }
            function le(t, e) {
                if (!t.__next_tick_pending && !function(t) {
                    return On.find(function(e) {
                        return t._watcher === e;
                    });
                }(t)) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var n = t.$scope;
                        console.log("[" + +new Date() + "][" + (n.is || n.route) + "][" + t._uid + "]:nextVueTick");
                    }
                    return Q(e, t);
                }
                if (Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var r = t.$scope;
                    console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + t._uid + "]:nextMPTick");
                }
                var o;
                if (t.__next_tick_callbacks || (t.__next_tick_callbacks = []), t.__next_tick_callbacks.push(function() {
                    if (e) try {
                        e.call(t);
                    } catch (e) {
                        z(e, t, "nextTick");
                    } else o && o(t);
                }), !e && "undefined" != typeof Promise) return new Promise(function(t) {
                    o = t;
                });
            }
            function de() {}
            function he(t) {
                return Array.isArray(t) ? function(t) {
                    for (var e, n = "", r = 0, i = t.length; r < i; r++) o(e = he(t[r])) && "" !== e && (n && (n += " "), 
                    n += e);
                    return n;
                }(t) : s(t) ? function(t) {
                    var e = "";
                    for (var n in t) t[n] && (e && (e += " "), e += n);
                    return e;
                }(t) : "string" == typeof t ? t : "";
            }
            var ve = Object.freeze({}), ye = Object.prototype.toString;
            d("slot,component", !0);
            var ge, _e = d("key,ref,slot,slot-scope,is"), me = Object.prototype.hasOwnProperty, be = /-(\w)/g, Oe = y(function(t) {
                return t.replace(be, function(t, e) {
                    return e ? e.toUpperCase() : "";
                });
            }), Se = y(function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
            }), Ae = /\B([A-Z])/g, we = y(function(t) {
                return t.replace(Ae, "-$1").toLowerCase();
            }), Ee = Function.prototype.bind ? function(t, e) {
                return t.bind(e);
            } : function(t, e) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
                }
                return n._length = t.length, n;
            }, ke = function(t, e, n) {
                return !1;
            }, $e = function(t) {
                return t;
            }, Ie = [ "component", "directive", "filter" ], xe = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], Te = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: ke,
                isReservedAttr: ke,
                isUnknownElement: ke,
                getTagNamespace: b,
                parsePlatformTagName: $e,
                mustUseProp: ke,
                async: !0,
                _lifecycleHooks: xe
            }, Pe = new RegExp("[^" + /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source + ".$_\\d]"), je = "__proto__" in {}, Ce = "undefined" != typeof window, Ne = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, Re = Ne && WXEnvironment.platform.toLowerCase(), De = Ce && window.navigator.userAgent.toLowerCase(), Ue = De && /msie|trident/.test(De), Le = (De && De.indexOf("msie 9.0"), 
            De && De.indexOf("edge/"), De && De.indexOf("android"), De && /iphone|ipad|ipod|ios/.test(De) || "ios" === Re), Me = (De && /chrome\/\d+/.test(De), 
            De && /phantomjs/.test(De), De && De.match(/firefox\/(\d+)/), {}.watch);
            if (Ce) try {
                var Ve = {};
                Object.defineProperty(Ve, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, Ve);
            } catch (t) {}
            var Fe, qe = function() {
                return void 0 === ge && (ge = !Ce && !Ne && void 0 !== t && t.process && "server" === t.process.env.VUE_ENV), 
                ge;
            }, Be = Ce && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, Ke = "undefined" != typeof Symbol && k(Symbol) && "undefined" != typeof Reflect && k(Reflect.ownKeys);
            Fe = "undefined" != typeof Set && k(Set) ? Set : function() {
                function t() {
                    this.set = Object.create(null);
                }
                return t.prototype.has = function(t) {
                    return !0 === this.set[t];
                }, t.prototype.add = function(t) {
                    this.set[t] = !0;
                }, t.prototype.clear = function() {
                    this.set = Object.create(null);
                }, t;
            }();
            var Ge = b, He = 0, ze = function() {
                this.id = He++, this.subs = [];
            };
            ze.prototype.addSub = function(t) {
                this.subs.push(t);
            }, ze.prototype.removeSub = function(t) {
                h(this.subs, t);
            }, ze.prototype.depend = function() {
                ze.SharedObject.target && ze.SharedObject.target.addDep(this);
            }, ze.prototype.notify = function() {
                for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update();
            }, ze.SharedObject = {}, ze.SharedObject.target = null, ze.SharedObject.targetStack = [];
            var We = function(t, e, n, r, o, i, a, s) {
                this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = o, this.ns = void 0, 
                this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, Je = {
                child: {
                    configurable: !0
                }
            };
            Je.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(We.prototype, Je);
            var Ye = function(t) {
                void 0 === t && (t = "");
                var e = new We();
                return e.text = t, e.isComment = !0, e;
            }, Xe = Array.prototype, Qe = Object.create(Xe);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
                var e = Xe[t];
                E(Qe, t, function() {
                    for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                    var o, i = e.apply(this, n), a = this.__ob__;
                    switch (t) {
                      case "push":
                      case "unshift":
                        o = n;
                        break;

                      case "splice":
                        o = n.slice(2);
                    }
                    return o && a.observeArray(o), a.dep.notify(), i;
                });
            });
            var Ze = Object.getOwnPropertyNames(Qe), tn = !0, en = function(t) {
                this.value = t, this.dep = new ze(), this.vmCount = 0, E(t, "__ob__", this), Array.isArray(t) ? (je ? t.push !== t.__proto__.push ? P(t, Qe, Ze) : function(t, e) {
                    t.__proto__ = e;
                }(t, Qe) : P(t, Qe, Ze), this.observeArray(t)) : this.walk(t);
            };
            en.prototype.walk = function(t) {
                for (var e = Object.keys(t), n = 0; n < e.length; n++) C(t, e[n]);
            }, en.prototype.observeArray = function(t) {
                for (var e = 0, n = t.length; e < n; e++) j(t[e]);
            };
            var nn = Te.optionMergeStrategies;
            nn.data = function(t, e, n) {
                return n ? L(t, e, n) : e && "function" != typeof e ? t : L(t, e);
            }, xe.forEach(function(t) {
                nn[t] = M;
            }), Ie.forEach(function(t) {
                nn[t + "s"] = V;
            }), nn.watch = function(t, e, n, r) {
                if (t === Me && (t = void 0), e === Me && (e = void 0), !e) return Object.create(t || null);
                if (!t) return e;
                var o = {};
                for (var i in _(o, t), e) {
                    var a = o[i], s = e[i];
                    a && !Array.isArray(a) && (a = [ a ]), o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [ s ];
                }
                return o;
            }, nn.props = nn.methods = nn.inject = nn.computed = function(t, e, n, r) {
                if (!t) return e;
                var o = Object.create(null);
                return _(o, t), e && _(o, e), o;
            }, nn.provide = L;
            var rn, on = function(t, e) {
                return void 0 === e ? t : e;
            }, an = [], sn = !1;
            if ("undefined" != typeof Promise && k(Promise)) {
                var cn = Promise.resolve();
                rn = function() {
                    cn.then(X), Le && setTimeout(b);
                };
            } else if (Ue || "undefined" == typeof MutationObserver || !k(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) rn = "undefined" != typeof setImmediate && k(setImmediate) ? function() {
                setImmediate(X);
            } : function() {
                setTimeout(X, 0);
            }; else {
                var un = 1, fn = new MutationObserver(X), pn = document.createTextNode(String(un));
                fn.observe(pn, {
                    characterData: !0
                }), rn = function() {
                    un = (un + 1) % 2, pn.data = String(un);
                };
            }
            var ln = new Fe(), dn = y(function(t) {
                var e = "&" === t.charAt(0), n = "~" === (t = e ? t.slice(1) : t).charAt(0), r = "!" === (t = n ? t.slice(1) : t).charAt(0);
                return {
                    name: t = r ? t.slice(1) : t,
                    once: n,
                    capture: r,
                    passive: e
                };
            });
            $t(It.prototype);
            var hn, vn = {
                init: function(t, e) {
                    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                        var n = t;
                        vn.prepatch(n, n);
                    } else (t.componentInstance = function(t, e) {
                        var n = {
                            _isComponent: !0,
                            _parentVnode: t,
                            parent: e
                        }, r = t.data.inlineTemplate;
                        return o(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new t.componentOptions.Ctor(n);
                    }(t, bn)).$mount(e ? t.elm : void 0, e);
                },
                prepatch: function(t, e) {
                    var n = e.componentOptions;
                    !function(t, e, n, r, o) {
                        var i = r.data.scopedSlots, a = t.$scopedSlots, s = !!(i && !i.$stable || a !== ve && !a.$stable || i && t.$scopedSlots.$key !== i.$key), c = !!(o || t.$options._renderChildren || s);
                        if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), 
                        t.$options._renderChildren = o, t.$attrs = r.data.attrs || ve, t.$listeners = n || ve, 
                        e && t.$options.props) {
                            T(!1);
                            for (var u = t._props, f = t.$options._propKeys || [], p = 0; p < f.length; p++) {
                                var l = f[p], d = t.$options.props;
                                u[l] = B(l, d, e, t);
                            }
                            T(!0), t.$options.propsData = e;
                        }
                        t._$updateProperties && t._$updateProperties(t), n = n || ve;
                        var h = t.$options._parentListeners;
                        t.$options._parentListeners = n, Kt(t, n, h), c && (t.$slots = ct(o, r.context), 
                        t.$forceUpdate());
                    }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
                },
                insert: function(t) {
                    var e = t.context, n = t.componentInstance;
                    n._isMounted || (zt(n, "onServiceCreated"), zt(n, "onServiceAttached"), n._isMounted = !0, 
                    zt(n, "mounted")), t.data.keepAlive && (e._isMounted ? function(t) {
                        t._inactive = !1, Sn.push(t);
                    }(n) : Ht(n, !0));
                },
                destroy: function(t) {
                    var e = t.componentInstance;
                    e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                        if (!(n && (e._directInactive = !0, Gt(e)) || e._inactive)) {
                            e._inactive = !0;
                            for (var r = 0; r < e.$children.length; r++) t(e.$children[r]);
                            zt(e, "deactivated");
                        }
                    }(e, !0) : e.$destroy());
                }
            }, yn = Object.keys(vn), gn = 1, _n = 2, mn = null, bn = null, On = [], Sn = [], An = {}, wn = !1, En = !1, kn = 0, $n = Date.now;
            if (Ce && !Ue) {
                var In = window.performance;
                In && "function" == typeof In.now && $n() > document.createEvent("Event").timeStamp && ($n = function() {
                    return In.now();
                });
            }
            var xn = 0, Tn = function(t, e, n, r, o) {
                this.vm = t, o && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, 
                this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = n, this.id = ++xn, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new Fe(), this.newDepIds = new Fe(), this.expression = "", 
                "function" == typeof e ? this.getter = e : (this.getter = function(t) {
                    if (!Pe.test(t)) {
                        var e = t.split(".");
                        return function(t) {
                            for (var n = 0; n < e.length; n++) {
                                if (!t) return;
                                t = t[e[n]];
                            }
                            return t;
                        };
                    }
                }(e), this.getter || (this.getter = b)), this.value = this.lazy ? void 0 : this.get();
            };
            Tn.prototype.get = function() {
                var t;
                $(this);
                var e = this.vm;
                try {
                    t = this.getter.call(e, e);
                } catch (t) {
                    if (!this.user) throw t;
                    z(t, e, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && Z(t), I(), this.cleanupDeps();
                }
                return t;
            }, Tn.prototype.addDep = function(t) {
                var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
            }, Tn.prototype.cleanupDeps = function() {
                for (var t = this.deps.length; t--; ) {
                    var e = this.deps[t];
                    this.newDepIds.has(e.id) || e.removeSub(this);
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
                this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
            }, Tn.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
                    var e = t.id;
                    if (null == An[e]) {
                        if (An[e] = !0, En) {
                            for (var n = On.length - 1; n > kn && On[n].id > t.id; ) n--;
                            On.splice(n + 1, 0, t);
                        } else On.push(t);
                        wn || (wn = !0, Q(Wt));
                    }
                }(this);
            }, Tn.prototype.run = function() {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || s(t) || this.deep) {
                        var e = this.value;
                        if (this.value = t, this.user) try {
                            this.cb.call(this.vm, t, e);
                        } catch (t) {
                            z(t, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, t, e);
                    }
                }
            }, Tn.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, Tn.prototype.depend = function() {
                for (var t = this.deps.length; t--; ) this.deps[t].depend();
            }, Tn.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || h(this.vm._watchers, this);
                    for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
                    this.active = !1;
                }
            };
            var Pn = {
                enumerable: !0,
                configurable: !0,
                get: b,
                set: b
            }, jn = {
                lazy: !0
            }, Cn = 0;
            ne.prototype._init = function(t) {
                var e = this;
                e._uid = Cn++, e._isVue = !0, t && t._isComponent ? function(t, e) {
                    var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
                    n.parent = e.parent, n._parentVnode = r;
                    var o = r.componentOptions;
                    n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, 
                    n._componentTag = o.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
                }(e, t) : e.$options = F(ee(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, 
                function(t) {
                    var e = t.$options, n = e.parent;
                    if (n && !e.abstract) {
                        for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                        n.$children.push(t);
                    }
                    t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, 
                    t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, 
                    t._isBeingDestroyed = !1;
                }(e), function(t) {
                    t._events = Object.create(null), t._hasHookEvent = !1;
                    var e = t.$options._parentListeners;
                    e && Kt(t, e);
                }(e), function(t) {
                    t._vnode = null, t._staticTrees = null;
                    var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
                    t.$slots = ct(e._renderChildren, r), t.$scopedSlots = ve, t._c = function(e, n, r, o) {
                        return Ct(t, e, n, r, o, !1);
                    }, t.$createElement = function(e, n, r, o) {
                        return Ct(t, e, n, r, o, !0);
                    };
                    var o = n && n.data;
                    C(t, "$attrs", o && o.attrs || ve, null, !0), C(t, "$listeners", e._parentListeners || ve, null, !0);
                }(e), zt(e, "beforeCreate"), !e._$fallback && at(e), Yt(e), !e._$fallback && it(e), 
                !e._$fallback && zt(e, "created"), e.$options.el && e.$mount(e.$options.el);
            }, function(t) {
                Object.defineProperty(t.prototype, "$data", {
                    get: function() {
                        return this._data;
                    }
                }), Object.defineProperty(t.prototype, "$props", {
                    get: function() {
                        return this._props;
                    }
                }), t.prototype.$set = N, t.prototype.$delete = R, t.prototype.$watch = function(t, e, n) {
                    var r = this;
                    if (c(e)) return te(r, t, e, n);
                    (n = n || {}).user = !0;
                    var o = new Tn(r, t, e, n);
                    if (n.immediate) try {
                        e.call(r, o.value);
                    } catch (t) {
                        z(t, r, 'callback for immediate watcher "' + o.expression + '"');
                    }
                    return function() {
                        o.teardown();
                    };
                };
            }(ne), function(t) {
                var e = /^hook:/;
                t.prototype.$on = function(t, n) {
                    var r = this;
                    if (Array.isArray(t)) for (var o = 0, i = t.length; o < i; o++) r.$on(t[o], n); else (r._events[t] || (r._events[t] = [])).push(n), 
                    e.test(t) && (r._hasHookEvent = !0);
                    return r;
                }, t.prototype.$once = function(t, e) {
                    function n() {
                        r.$off(t, n), e.apply(r, arguments);
                    }
                    var r = this;
                    return n.fn = e, r.$on(t, n), r;
                }, t.prototype.$off = function(t, e) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(t)) {
                        for (var r = 0, o = t.length; r < o; r++) n.$off(t[r], e);
                        return n;
                    }
                    var i, a = n._events[t];
                    if (!a) return n;
                    if (!e) return n._events[t] = null, n;
                    for (var s = a.length; s--; ) if ((i = a[s]) === e || i.fn === e) {
                        a.splice(s, 1);
                        break;
                    }
                    return n;
                }, t.prototype.$emit = function(t) {
                    var e = this, n = e._events[t];
                    if (n) {
                        n = n.length > 1 ? g(n) : n;
                        for (var r = g(arguments, 1), o = 'event handler for "' + t + '"', i = 0, a = n.length; i < a; i++) W(n[i], e, r, e, o);
                    }
                    return e;
                };
            }(ne), function(t) {
                t.prototype._update = function(t, e) {
                    var n = this, r = n.$el, o = n._vnode, i = function(t) {
                        var e = bn;
                        return bn = t, function() {
                            bn = e;
                        };
                    }(n);
                    n._vnode = t, n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1), i(), 
                    r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
                }, t.prototype.$forceUpdate = function() {
                    this._watcher && this._watcher.update();
                }, t.prototype.$destroy = function() {
                    var t = this;
                    if (!t._isBeingDestroyed) {
                        zt(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                        var e = t.$parent;
                        !e || e._isBeingDestroyed || t.$options.abstract || h(e.$children, t), t._watcher && t._watcher.teardown();
                        for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
                        t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), 
                        zt(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
                    }
                };
            }(ne), function(t) {
                $t(t.prototype), t.prototype.$nextTick = function(t) {
                    return Q(t, this);
                }, t.prototype._render = function() {
                    var t, e = this, n = e.$options, r = n.render, o = n._parentVnode;
                    o && (e.$scopedSlots = ft(o.data.scopedSlots, e.$slots, e.$scopedSlots)), e.$vnode = o;
                    try {
                        mn = e, t = r.call(e._renderProxy, e.$createElement);
                    } catch (n) {
                        z(n, e, "render"), t = e._vnode;
                    } finally {
                        mn = null;
                    }
                    return Array.isArray(t) && 1 === t.length && (t = t[0]), t instanceof We || (t = Ye()), 
                    t.parent = o, t;
                };
            }(ne);
            var Nn = [ String, RegExp, Array ], Rn = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: Nn,
                        exclude: Nn,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var t in this.cache) se(this.cache, t, this.keys);
                    },
                    mounted: function() {
                        var t = this;
                        this.$watch("include", function(e) {
                            ae(t, function(t) {
                                return ie(e, t);
                            });
                        }), this.$watch("exclude", function(e) {
                            ae(t, function(t) {
                                return !ie(e, t);
                            });
                        });
                    },
                    render: function() {
                        var t = this.$slots.default, e = Vt(t), n = e && e.componentOptions;
                        if (n) {
                            var r = oe(n), o = this.include, i = this.exclude;
                            if (o && (!r || !ie(o, r)) || i && r && ie(i, r)) return e;
                            var a = this.cache, s = this.keys, c = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                            a[c] ? (e.componentInstance = a[c].componentInstance, h(s, c), s.push(c)) : (a[c] = e, 
                            s.push(c), this.max && s.length > parseInt(this.max) && se(a, s[0], s, this._vnode)), 
                            e.data.keepAlive = !0;
                        }
                        return e || t && t[0];
                    }
                }
            };
            (function(t) {
                var e = {
                    get: function() {
                        return Te;
                    }
                };
                Object.defineProperty(t, "config", e), t.util = {
                    warn: Ge,
                    extend: _,
                    mergeOptions: F,
                    defineReactive: C
                }, t.set = N, t.delete = R, t.nextTick = Q, t.observable = function(t) {
                    return j(t), t;
                }, t.options = Object.create(null), Ie.forEach(function(e) {
                    t.options[e + "s"] = Object.create(null);
                }), t.options._base = t, _(t.options.components, Rn), function(t) {
                    t.use = function(t) {
                        var e = this._installedPlugins || (this._installedPlugins = []);
                        if (e.indexOf(t) > -1) return this;
                        var n = g(arguments, 1);
                        return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), 
                        e.push(t), this;
                    };
                }(t), function(t) {
                    t.mixin = function(t) {
                        return this.options = F(this.options, t), this;
                    };
                }(t), re(t), function(t) {
                    Ie.forEach(function(e) {
                        t[e] = function(t, n) {
                            return n ? ("component" === e && c(n) && (n.name = n.name || t, n = this.options._base.extend(n)), 
                            "directive" === e && "function" == typeof n && (n = {
                                bind: n,
                                update: n
                            }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
                        };
                    });
                }(t);
            })(ne), Object.defineProperty(ne.prototype, "$isServer", {
                get: qe
            }), Object.defineProperty(ne.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(ne, "FunctionalRenderContext", {
                value: It
            }), ne.version = "2.6.11";
            var Dn = "[object Array]", Un = "[object Object]", Ln = y(function(t) {
                var e = {}, n = /:(.+)/;
                return t.split(/;(?![^(]*\))/g).forEach(function(t) {
                    if (t) {
                        var r = t.split(n);
                        r.length > 1 && (e[r[0].trim()] = r[1].trim());
                    }
                }), e;
            }), Mn = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ], Vn = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize" ];
            ne.prototype.__patch__ = function(t, e) {
                var n = this;
                if (null !== e && ("page" === this.mpType || "component" === this.mpType)) {
                    var r = this.$scope, o = Object.create(null);
                    try {
                        o = function(t) {
                            var e = Object.create(null);
                            [].concat(Object.keys(t._data || {}), Object.keys(t._computedWatchers || {})).reduce(function(e, n) {
                                return e[n] = t[n], e;
                            }, e);
                            var n = t.__secret_vfa_state__ && t.__secret_vfa_state__.rawBindings;
                            return n && Object.keys(n).forEach(function(n) {
                                e[n] = t[n];
                            }), Object.assign(e, t.$mp.data || {}), Array.isArray(t.$options.behaviors) && -1 !== t.$options.behaviors.indexOf("uni://form-field") && (e.name = t.name, 
                            e.value = t.value), JSON.parse(JSON.stringify(e));
                        }(this);
                    } catch (t) {
                        console.error(t);
                    }
                    o.__webviewId__ = r.data.__webviewId__;
                    var i = Object.create(null);
                    Object.keys(o).forEach(function(t) {
                        i[t] = r.data[t];
                    });
                    var a = !1 === this.$shouldDiffData ? o : ce(o, i);
                    Object.keys(a).length ? (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + this._uid + "]差量更新", JSON.stringify(a)), 
                    this.__next_tick_pending = !0, r.setData(a, function() {
                        n.__next_tick_pending = !1, pe(n);
                    })) : pe(this);
                }
            }, ne.prototype.$mount = function(t, e) {
                return function(t, e, n) {
                    return t.mpType ? ("app" === t.mpType && (t.$options.render = de), t.$options.render || (t.$options.render = de), 
                    !t._$fallback && zt(t, "beforeMount"), new Tn(t, function() {
                        t._update(t._render(), n);
                    }, b, {
                        before: function() {
                            t._isMounted && !t._isDestroyed && zt(t, "beforeUpdate");
                        }
                    }, !0), n = !1, t) : t;
                }(this, 0, e);
            }, function(t) {
                var e = t.extend;
                t.extend = function(t) {
                    var n = (t = t || {}).methods;
                    return n && Object.keys(n).forEach(function(e) {
                        -1 !== Vn.indexOf(e) && (t[e] = n[e], delete n[e]);
                    }), e.call(this, t);
                };
                var n = t.config.optionMergeStrategies, r = n.created;
                Vn.forEach(function(t) {
                    n[t] = r;
                }), t.prototype.__lifecycle_hooks__ = Vn;
            }(ne), function(t) {
                t.config.errorHandler = function(e, n, r) {
                    t.util.warn("Error in " + r + ': "' + e.toString() + '"', n), console.error(e);
                    var o = getApp();
                    o && o.onError && o.onError(e);
                };
                var e = t.prototype.$emit;
                t.prototype.$emit = function(t) {
                    return this.$scope && t && this.$scope.triggerEvent(t, {
                        __args__: g(arguments, 1)
                    }), e.apply(this, arguments);
                }, t.prototype.$nextTick = function(t) {
                    return le(this, t);
                }, Mn.forEach(function(e) {
                    t.prototype[e] = function(t) {
                        return this.$scope && this.$scope[e] ? this.$scope[e](t) : "undefined" != typeof my ? "createSelectorQuery" === e ? my.createSelectorQuery(t) : "createIntersectionObserver" === e ? my.createIntersectionObserver(t) : void 0 : void 0;
                    };
                }), t.prototype.__init_provide = it, t.prototype.__init_injections = at, t.prototype.__call_hook = function(t, e) {
                    var n = this;
                    $();
                    var r, o = n.$options[t], i = t + " hook";
                    if (o) for (var a = 0, s = o.length; a < s; a++) r = W(o[a], n, e ? [ e ] : null, n, i);
                    return n._hasHookEvent && n.$emit("hook:" + t, e), I(), r;
                }, t.prototype.__set_model = function(t, e, n, r) {
                    Array.isArray(r) && (-1 !== r.indexOf("trim") && (n = n.trim()), -1 !== r.indexOf("number") && (n = this._n(n))), 
                    t || (t = this), t[e] = n;
                }, t.prototype.__set_sync = function(t, e, n) {
                    t || (t = this), t[e] = n;
                }, t.prototype.__get_orig = function(t) {
                    return c(t) && t.$orig || t;
                }, t.prototype.__get_value = function(t, e) {
                    return function t(e, n) {
                        var r = n.split("."), o = r[0];
                        return 0 === o.indexOf("__$n") && (o = parseInt(o.replace("__$n", ""))), 1 === r.length ? e[o] : t(e[o], r.slice(1).join("."));
                    }(e || this, t);
                }, t.prototype.__get_class = function(t, e) {
                    return function(t, e) {
                        return o(t) || o(e) ? function(t, e) {
                            return t ? e ? t + " " + e : t : e || "";
                        }(t, he(e)) : "";
                    }(e, t);
                }, t.prototype.__get_style = function(t, e) {
                    if (!t && !e) return "";
                    var n = function(t) {
                        return Array.isArray(t) ? m(t) : "string" == typeof t ? Ln(t) : t;
                    }(t), r = e ? _(e, n) : n;
                    return Object.keys(r).map(function(t) {
                        return we(t) + ":" + r[t];
                    }).join(";");
                }, t.prototype.__map = function(t, e) {
                    var n, r, o, i, a;
                    if (Array.isArray(t)) {
                        for (n = new Array(t.length), r = 0, o = t.length; r < o; r++) n[r] = e(t[r], r);
                        return n;
                    }
                    if (s(t)) {
                        for (i = Object.keys(t), n = Object.create(null), r = 0, o = i.length; r < o; r++) n[a = i[r]] = e(t[a], a, r);
                        return n;
                    }
                    if ("number" == typeof t) {
                        for (n = new Array(t), r = 0, o = t; r < o; r++) n[r] = e(r, r);
                        return n;
                    }
                    return [];
                };
            }(ne), e.default = ne;
        }.call(this, r("c8ba"));
    },
    aadd: function(t, e) {},
    c8ba: function(t, e) {
        var r;
        r = function() {
            return this;
        }();
        try {
            r = r || new Function("return this")();
        } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (r = window);
        }
        t.exports = r;
    },
    e9c0: function(t, e, r) {
        function o() {
            this.setDebug = function(t) {
                L = t;
            }, this.d = function() {
                if (L) try {
                    "string" == typeof arguments[0] && (arguments[0] = V + arguments[0]), console.debug.apply(console, arguments);
                } catch (t) {}
            }, this.i = function() {
                try {
                    if (L) try {
                        "string" == typeof arguments[0] && (arguments[0] = V + arguments[0]), console.info.apply(console, arguments);
                    } catch (t) {}
                } catch (t) {}
            }, this.e = function() {
                if (L) try {
                    "string" == typeof arguments[0] && (arguments[0] = V + arguments[0]), console.error.apply(console, arguments);
                } catch (t) {}
            }, this.w = function() {
                if (L) try {
                    "string" == typeof arguments[0] && (arguments[0] = V + arguments[0]), console.warn.apply(console, arguments);
                } catch (t) {}
            }, this.v = function() {
                if (L) try {
                    "string" == typeof arguments[0] && (arguments[0] = V + arguments[0]), console.log.apply(console, arguments);
                } catch (t) {}
            }, this.t = function() {
                if (L) try {
                    console.table.apply(console, arguments);
                } catch (t) {}
            }, this.tip = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = V + arguments[0]), console.log.apply(console, arguments);
                } catch (t) {}
            }, this.tip_w = function(t) {
                try {
                    console.log("%c " + V + t, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
                } catch (t) {}
            }, this.err = function() {
                try {
                    "string" == typeof arguments[0] && (arguments[0] = V + arguments[0]), console.error.apply(console, arguments);
                } catch (t) {}
            };
        }
        function i() {
            var t = {};
            this.useOpenid = function() {
                return !!t.useOpenid;
            }, this.useSwanid = function() {
                return !!t.useSwanid;
            }, this.autoGetOpenid = function() {
                return !!t.autoGetOpenid;
            }, this.appKey = function() {
                return t.appKey;
            }, this.uploadUserInfo = function() {
                return t.uploadUserInfo;
            }, this.enableVerify = function() {
                return t.enableVerify;
            }, this.set = function(e) {
                t = e;
            }, this.get = function() {
                return t;
            }, this.setItem = function(e, n) {
                t[e] = n;
            }, this.getItem = function(e) {
                return t[e];
            };
        }
        function a() {
            this.listeners = {}, this.maxListener = 2;
        }
        function s(t, e) {
            function n() {
                this.constructor = t;
            }
            yt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, 
            new n());
        }
        function c() {
            var t = !1, e = null, n = [];
            this.addPageStart = function(n) {
                n && !t && (e = {
                    ts: Date.now(),
                    path: n,
                    page_name: n
                }, t = !0);
            }, this.addPageEnd = function(r) {
                if (t && r && e && r === e.page_name) {
                    var o = Date.now() - e.ts;
                    e.duration = Math.abs(o), n.push(e), e = null, t = !1;
                }
            }, this.get = function() {
                return n;
            }, this.getCurrentPage = function() {
                return e;
            }, this.clear = function() {
                n.length = 0;
            };
        }
        function u() {
            return {
                add: function(t, e) {
                    F().v("share origin: %o", t);
                    var n = {
                        title: t && t.title,
                        path: t && t.path && t.path.split("?")[0],
                        _um_sts: Date.now()
                    };
                    n.path && 1 < n.path.length && _t.startsWith(n.path, "/") && (n.path = _t.trimStart(n.path, "/"));
                    var r = t.path || "", o = bt().getId();
                    if (o) {
                        var i = z.split(","), a = (i = i.filter(function(t) {
                            return 0 < t.length;
                        })).indexOf(o);
                        0 <= a && (i = i.slice(0, a)), i.length < 3 && i.push(o);
                        var s = i.join(",");
                        -1 !== r.indexOf("?") ? r += "&_um_ssrc=" + s : r += "?_um_ssrc=" + s;
                        var c = Date.now();
                        if (r += "&_um_sts=" + c, e) {
                            var u = function(t) {
                                var e = [];
                                for (var n in t) "_um_ssrc" !== n && "_um_sts" !== n && e.push(n + "=" + t[n]);
                                return e.join("&");
                            }(St), f = u ? u + "&_um_ssrc=" + s + "&_um_sts=" + c : "_um_ssrc=" + s + "&_um_sts=" + c;
                            t.query = t.query ? t.query + "&_um_ssrc=" + s + "&_um_sts=" + c : f;
                        } else t.path = r;
                        n._um_ssrc = s, n._um_sts = c;
                    }
                    return H.push(n), F().v("share: %o", t), t;
                },
                setShareSource: function(t) {
                    z = t;
                },
                clear: function() {
                    H.length = 0;
                },
                get: function() {
                    return H;
                }
            };
        }
        function f() {
            this.load = function(t) {
                Y ? (vt.removeStorage(J), t()) : (J = "um_cache_" + q().appKey(), vt.getStorage(J, function(e) {
                    Y = wt.parse(e) || {}, X = !0, vt.removeStorage(J), t();
                }));
            }, this.save = function() {
                Y && vt.setStorage(J, wt.stringify(Y));
            }, this.set = function(t, e) {
                Y && (Y[t] = e);
            }, this.get = function(t) {
                return (Y || {})[t];
            }, this.remove = function(t) {
                Y && Y[t] && delete Y[t];
            }, this.getAll = function() {
                return Y;
            }, this.clear = function() {
                Y = null;
            }, this.has = function(t) {
                return !!this.get(t);
            }, this.isLoaded = function() {
                return X;
            };
        }
        function p(t, e) {
            var n = (t = t || {})[Z];
            return Array.isArray(n) && n.length ? t[Z] = n.concat(e) : t[Z] = [].concat(e), 
            t;
        }
        function l() {
            var t = !1, e = {};
            return {
                init: function() {
                    !function(t) {
                        var n = Et().get(gt.IMPRINT);
                        n && (e.imprint = n), e.device_type = "Phone", e.sdk_version = gt.IMPL_VERSION, 
                        e.appkey = q().appKey(), vt.getDeviceInfo(function(t) {
                            e.device_info = t || "";
                        });
                        var r = vt.getAppInfoSync();
                        e.appid = r.appId, e.app_env = r.appEnv, e.app_version = r.appVersion, vt.getSystemInfo(function(n) {
                            vt.getNetworkInfo(function(r) {
                                var o = function(t, e) {
                                    var n = {}, r = (e = e || {}).networkType;
                                    "none" === r && (r = "unknown");
                                    var o = t.model || "", i = t.platform || "", a = t.brand || "", s = a.toLowerCase();
                                    switch (n.sdk_type = vt.getSdkType(), n.platform = vt.getPlatform(), n.platform_sdk_version = t.platformSDKVersion, 
                                    n.platform_version = t.platformVersion, n.resolution = t.resolution, n.pixel_ratio = t.pixelRatio, 
                                    n.os = i, n.font_size_setting = t.fontSizeSetting, n.device_model = o, n.device_brand = a, 
                                    n.device_manufacturer = s, n.device_manuid = o, n.device_name = o, n.os_version = t.OSVersion, 
                                    n.language = t.language, r = r ? r.toLowerCase() : "") {
                                      case Pt:
                                        n.access_subtype = "LTE", n.access = "4G";
                                        break;

                                      case Tt:
                                        n.access_subtype = "CDMA", n.access = "3G";
                                        break;

                                      case xt:
                                        n.access_subtype = "GRPS", n.access = "2G";
                                        break;

                                      default:
                                        n.access = r, delete n.access_subtype;
                                    }
                                    return n;
                                }(n, r);
                                _t.assign(e, o), function(t) {
                                    var n = [];
                                    n.push({
                                        name: "设备型号",
                                        value: e.device_model
                                    }), n.push({
                                        name: "设备生产商",
                                        value: e.device_brand
                                    }), n.push({
                                        name: "os版本号",
                                        value: e.os_version
                                    }), n.push({
                                        name: "网络类型",
                                        value: e.access
                                    }), n.push({
                                        name: "运营商",
                                        value: e.access_subtype
                                    }), n.push({
                                        name: "分辨率",
                                        value: e.resolution
                                    }), n.push({
                                        name: "pixelRatio",
                                        value: e.pixel_ratio
                                    });
                                    for (var r = "", o = 0; o < n.length; o++) {
                                        var i = n[o];
                                        r += i.name + ": " + i.value + "; ";
                                    }
                                    F().v("调试辅助信息: ", r);
                                }(), t && t();
                            });
                        });
                    }(function() {
                        t = !0;
                    });
                },
                isLoaded: function() {
                    return t;
                },
                get: function() {
                    return e;
                },
                getRealtimeFields: function() {
                    var t = {};
                    return Ct.forEach(function(n) {
                        t[n] = e[n];
                    }), t;
                },
                setIdTracking: function(t) {
                    this.setItem("id_tracking", t);
                },
                setIdType: function(t) {
                    this.setItem("id_type", t);
                },
                setAppVersion: function(t) {
                    this.setItem("app_version", t);
                },
                setSuperProperty: function(t) {
                    e.sp || (e.sp = {}), e.sp.isv = t;
                },
                getSuperProperty: function() {
                    return e && e.sp ? e.sp.isv : "";
                },
                setItem: function(t, n) {
                    e[t] = n;
                },
                getItem: function(t) {
                    return e[t];
                }
            };
        }
        function d(t, e) {
            var n = {};
            for (var r in t) e[r] ? n[e[r]] = t[r] : n[r] = t[r];
            return n;
        }
        function h() {
            this.init = function(t) {
                vt.getClipboard(function(e) {
                    st = Et().get(Vt);
                    try {
                        if (e && _t.startsWith(e, Mt) && e.split(Mt)[1]) {
                            var n = e.split(Mt)[1], r = JSON.parse(n).token;
                            r && (st = r, Et().set(Vt, r));
                        }
                    } catch (e) {
                        F().v(e);
                    }
                    t(!!st);
                });
            }, this.getToken = function() {
                return st;
            }, this.clear = function() {
                st = "", Et().remove(Vt);
            };
        }
        function v(t) {
            if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? Kt(192 | e >>> 6) + Kt(128 | 63 & e) : Kt(224 | e >>> 12 & 15) + Kt(128 | e >>> 6 & 63) + Kt(128 | 63 & e);
            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
            return Kt(240 | e >>> 18 & 7) + Kt(128 | e >>> 12 & 63) + Kt(128 | e >>> 6 & 63) + Kt(128 | 63 & e);
        }
        function y(t) {
            var e = [ 0, 2, 1 ][t.length % 3], n = t.charCodeAt(0) << 16 | (1 < t.length ? t.charCodeAt(1) : 0) << 8 | (2 < t.length ? t.charCodeAt(2) : 0);
            return [ qt.charAt(n >>> 18), qt.charAt(n >>> 12 & 63), 2 <= e ? "=" : qt.charAt(n >>> 6 & 63), 1 <= e ? "=" : qt.charAt(63 & n) ].join("");
        }
        function g(t) {
            return t.replace(Gt, v).replace(/[\s\S]{1,3}/g, y);
        }
        function _(t) {
            switch (t.length) {
              case 4:
                var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                return Kt(55296 + (e >>> 10)) + Kt(56320 + (1023 & e));

              case 3:
                return Kt((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));

              default:
                return Kt((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
            }
        }
        function m(t) {
            var e = t.length, n = e % 4, r = (0 < e ? Bt[t.charAt(0)] << 18 : 0) | (1 < e ? Bt[t.charAt(1)] << 12 : 0) | (2 < e ? Bt[t.charAt(2)] << 6 : 0) | (3 < e ? Bt[t.charAt(3)] : 0), o = [ Kt(r >>> 16), Kt(r >>> 8 & 255), Kt(255 & r) ];
            return o.length -= [ 0, 0, 2, 1 ][n], o.join("");
        }
        function b(t, e, n, r) {
            Nt.instance().setIdType(bt().getIdType()), Nt.instance().setIdTracking(bt().getIdTracking());
            var o = bt().getUserId();
            o && t.analytics && (t.analytics.active_user = {
                puid: o,
                provider: bt().getProvider()
            });
            var i = _t.clone(Nt.instance().get());
            t.header = _t.assign(i, t.header, {
                ts: Date.now(),
                testToken: Ft().getToken(),
                traceId: _t.getRandomStr(10) + Date.now() + _t.getRandomStr(9)
            });
            var a, s = function(t) {
                return {
                    h: function(t, e) {
                        var n = d(t, e);
                        return t && t.id_tracking && (n[e.id_tracking || "id_tracking"] = d(t.id_tracking, Lt)), 
                        n;
                    }(t.header, Ut),
                    a: function(t, e) {
                        var n = {};
                        if (t) for (var r in t) t[r] && (n[e[r]] = t[r]);
                        return n;
                    }(t.analytics, Dt)
                };
            }(t), c = wt.stringify(s), u = {
                url: gt.LOG_URL,
                method: "POST",
                data: zt.encode(c),
                success: function(r) {
                    var o = r.code || r.status || r.statusCode;
                    200 === o || 413 === o ? (F().i("数据发送成功: ", t, c), function(t) {
                        t && (Nt.instance().setItem(gt.IMPRINT, t), Wt.set(t), Wt.save(), F().v("imprint: ", Wt.get()), 
                        Wt.getItem("ttn_invalid") && Ft().clear());
                    }((r.data || {}).imprint), "function" == typeof e && e(r)) : (F().w("数据发送失败: ", c), 
                    "function" == typeof n && n());
                },
                fail: function(t) {
                    F().w("超时: ", c), "function" == typeof n && n();
                },
                complete: function() {
                    "function" == typeof r && r();
                }
            };
            vt.request(_t.assign(u, {
                header: {
                    "Content-Type": a = vt.getSdkType() + "/json",
                    "Msg-Type": a
                }
            }));
        }
        function O(t) {
            bt().getId() ? ut ? F().i("队列正在发送中") : (ut = !0, function t(e) {
                var n = pt.front();
                n ? b(n, function() {
                    pt.dequeue(), t(e);
                }, function() {
                    var n = pt.dequeue();
                    n && !n.noCache && ft.push(n), t(e);
                }) : (ft.forEach(function(t) {
                    pt.enqueue(t);
                }), ft.length = 0, e());
            }(function() {
                ut = !1, "function" == typeof t && t();
            })) : (F().i("获取id标识失败，暂缓发送"), "function" == typeof t && t());
        }
        function S() {
            this.send = function(t, e, n) {
                t ? this.add(t, e, function() {
                    O(n);
                }) : O(n);
            }, this.add = function(t, e, n) {
                !function t(e, n, r) {
                    if (Nt.instance().isLoaded()) {
                        n = n || {};
                        var o = function(t) {
                            var e = null;
                            switch (t) {
                              case jt.HALF_SESSION:
                                e = function() {
                                    var t = null, e = Rt().cloneCurrentSession();
                                    return e && (t = {
                                        header: {
                                            st: "1"
                                        },
                                        analytics: {
                                            sessions: [ e ]
                                        }
                                    }), t;
                                }();
                                break;

                              case jt.CLOSE_SESSION:
                                e = function() {
                                    var t = null, e = {}, n = Rt().cloneCurrentSession();
                                    if (n) {
                                        var r = Ot().get(), o = At().get();
                                        Array.isArray(r) && r.length && (n.pages = _t.clone(r)), Array.isArray(o) && o.length && (n.shares = _t.clone(o)), 
                                        Ot().clear(), At().clear(), e.sessions = [ n ];
                                    }
                                    var i = It().getEkvs();
                                    return i && (e.ekvs = _t.clone(i), It().clear()), (e.sessions || e.ekvs) && (t = {
                                        analytics: e
                                    }), t;
                                }();
                                break;

                              case jt.EKV:
                                e = function() {
                                    var t = null, e = It().getEkvs();
                                    return e && (t = {
                                        analytics: {
                                            ekvs: _t.clone(e)
                                        }
                                    }, It().clear()), t;
                                }();
                            }
                            return e;
                        }(e);
                        if (o) {
                            var i = Nt.instance().getRealtimeFields();
                            o.header = _t.assign({}, o.header, i), o.noCache = n.noCache, pt.enqueue(o);
                        }
                        "function" == typeof r && r();
                    } else setTimeout(function() {
                        t(e, n, r);
                    }, 100);
                }(t, e, n);
            }, this.load = function() {
                var t = Et().get(gt.REQUESTS);
                t && t.length && t.forEach(function(t) {
                    pt.enqueue(t);
                }), Et().remove(gt.REQUESTS);
            }, this.save = function() {
                Et().set(gt.REQUESTS, _t.clone(pt.items())), pt.clear();
            };
        }
        function A() {
            this.update = function() {
                vt.getUserInfo(function(t) {
                    if (t) {
                        var e = Et().get(gt.USER_INFO);
                        e && _t.deepEqual(t, e) || function(t, e) {
                            var n = q().appKey(), r = vt.getSdkType(), o = bt().getId(), i = bt().getIdType();
                            if (n && r && o && i) {
                                var a = {
                                    ak: q().appKey(),
                                    sdt: vt.getSdkType(),
                                    uin: t.nickName,
                                    uia: t.avatar,
                                    uig: t.gender,
                                    uit: t.country,
                                    uip: t.province,
                                    uic: t.city,
                                    uil: t.language,
                                    id: bt().getId(),
                                    it: bt().getIdType()
                                }, s = JSON.stringify(a);
                                s = zt.encode(s), vt.request({
                                    url: gt.USERINFO_URL,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: "ui=" + s,
                                    success: function(n) {
                                        F().v("用户信息上传成功: ", t), e && e(n && n.data && 200 === n.data.code);
                                    },
                                    fail: function() {
                                        F().e("用户信息上传失败: ", t), e && e(!1);
                                    }
                                });
                            }
                        }(t, function(e) {
                            e && Et().set(gt.USER_INFO, t);
                        });
                    }
                });
            };
        }
        function w(t, e) {
            this.id = t, this.ts = Date.now();
            var r = void 0 === e ? "undefined" : n(e);
            if ("string" == r && e) this[t] = e; else if ("object" == r) for (var o in e) !{}.hasOwnProperty.call(e, o) || (this[o] = e[o]);
        }
        function E() {
            var t = !1, e = !1, r = 0;
            this.init = function(e) {
                F().v("sdk version: " + gt.IMPL_VERSION), t ? F().v("Lib重复实例化") : Et().load(function() {
                    F().v("cache初始化成功: ", Et().getAll()), bt().setUseOpenid && bt().setUseOpenid(q().useOpenid()), 
                    bt().init(function() {
                        Nt.instance().init(), F().v("Header初始化成功");
                    }), t = !0, "function" == typeof e && e(), F().tip("SDK集成成功");
                });
            }, this.resume = function(n) {
                if (t && !e) {
                    F().v("showOptions: ", n);
                    var r = this;
                    e = !0, q().enableVerify() ? Ft().init(function() {
                        r._resume(n);
                    }) : r._resume(n);
                }
            }, this._resume = function(t) {
                Jt().load();
                var e = Rt().resume(t), n = Rt().getCurrentSessionId();
                It().setSessionId(n), e && Jt().add(jt.HALF_SESSION, {}, function() {
                    bt().setUseOpenid && bt().setUseOpenid(q().useOpenid()), q().useOpenid() && q().autoGetOpenid() && !bt().getId() ? (F().v("get id async"), 
                    function t(e, n) {
                        bt().getId() || e <= 0 || bt().getOpenIdAsync(q().appKey(), function(r) {
                            r ? (F().v("获取id成功"), Jt().send()) : (F().v("获取openid失败,启动重试,剩余可用次数", e - 1), setTimeout(function() {
                                t(e - 1, n);
                            }, n));
                        });
                    }(10, 3e3)) : (F().v("session auto send"), Jt().send());
                });
            }, this.pause = function(n) {
                t && (e = !1, r = 0, Rt().pause(), q().uploadUserInfo() && Yt().update(), Jt().send(jt.CLOSE_SESSION, {}, function() {
                    Jt().save(), Et().save(), F().v("cache save success"), "function" == typeof n && n();
                }));
            }, this.setOpenid = function(t) {
                F().v("setOpenId: %s", t), bt().setOpenid(t), Jt().send();
            }, this.setUnionid = function(t) {
                F().v("setUnionid: %s", t), bt().setUnionid(t);
            }, this.setUserid = function(t, e) {
                F().v("setUserid: %s", t, e), bt().setUserid(t, e);
            }, this.setAnonymousid = function(t) {
                F().v("setAnonymousId: %s", t), bt().setAnonymousid(t), Jt().send();
            }, this.setAppVersion = function(t) {
                t && "string" != typeof t ? F().w("setAppVersion方法只接受字符串类型参数") : Nt.instance().setAppVersion(t);
            }, this.setAlipayUserid = function(t) {
                t && "string" != typeof t ? F().w("setAlipayUserid方法只接受字符串类型参数") : (F().v("setAlipayUserid: %s", t), 
                bt().setAlipayUserid(t));
            }, this.setSuperProperty = function(t) {
                if (t && "string" != typeof t) F().w("超级属性只支持字符串类型"); else {
                    var e = this;
                    Nt.instance().getSuperProperty() !== t && (Nt.instance().setSuperProperty(t), e.pause(function() {
                        e.resume();
                    }));
                }
            }, this.trackEvent = function(e, o) {
                var i;
                if (t && (F().v("event: ", e, o), function(t, e) {
                    if (t && "string" == typeof t) {
                        var r = [ "id", "ts", "du" ], o = {};
                        if (r.forEach(function(t) {
                            o[t] = 1;
                        }), o[t]) F().e("eventId不能与以下保留字冲突: " + r.join(",")); else if (t.length > gt.MAX_EVENTID_LENGTH) F().e("The maximum length of event id shall not exceed " + gt.MAX_EVENTID_LENGTH); else {
                            if (!e || "object" == (void 0 === e ? "undefined" : n(e)) && !Array.isArray(e) || "string" == typeof e) {
                                if ("object" == (void 0 === e ? "undefined" : n(e))) {
                                    var i = 0;
                                    for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
                                        if (a.length > gt.MAX_PROPERTY_KEY_LENGTH) return void F().e("The maximum length of property key shall not exceed " + gt.MAX_PROPERTY_KEY_LENGTH);
                                        if (i >= gt.MAX_PROPERTY_KEYS_COUNT) return void F().e("The maximum count of properties shall not exceed " + gt.MAX_PROPERTY_KEYS_COUNT);
                                        if (o[a]) return void F().e("属性中的key不能与以下保留字冲突: " + r.join(","));
                                        i += 1;
                                    }
                                }
                                return 1;
                            }
                            F().e("please check trackEvent properties. properties should be string or object(not include Array)");
                        }
                    } else F().e('please check trackEvent id. id should be "string" and not null');
                }(e, o))) {
                    var a = new w(e, o);
                    It().addEvent(a);
                    var s = !!Ft().getToken(), c = s ? 0 : gt.EVENT_SEND_DEFAULT_INTERVAL, u = Date.now();
                    i = c, ("number" != typeof r || "number" != typeof i || r <= 0 || i < u - r) && (r = u, 
                    Jt().send(jt.EKV, {
                        noCache: s
                    }, function() {}));
                }
            }, this.trackShare = function(e) {
                if (t) {
                    try {
                        -1 < vt.getSdkType().indexOf("game") ? (e = At().add(e, !0), F().v("shareQuery: ", e)) : (e = At().add(e, !1), 
                        F().v("sharePath: ", e.path));
                    } catch (e) {
                        F().v("shareAppMessage: ", e);
                    }
                    return e;
                }
            }, this.trackPageStart = function(e) {
                t && Ot().addPageStart(e);
            }, this.trackPageEnd = function(e) {
                t && Ot().addPageEnd(e);
            }, this.onShareAppMessage = function(t) {
                var e = this;
                vt.onShareAppMessage(function() {
                    return e.trackShare(t());
                });
            }, this.shareAppMessage = function(t) {
                this.trackShare(t), vt.shareAppMessage(t);
            };
        }
        function k() {}
        function $(t) {
            t && re.each(t, function(t) {
                ae[t.k] = t;
            });
        }
        function I() {
            var t = this;
            this.STORAGE_NAME = null, dt.on(ht, function(e) {
                F().v("云配初始化开始..."), t.init(e);
            });
        }
        function x(t) {
            t && (fe = t);
        }
        function T(t, e) {
            if (t.onShareAppMessage) {
                var n = t.onShareAppMessage;
                t.onShareAppMessage = function(t) {
                    var r = n.call(this, t) || {}, o = function(t, e) {
                        if (!t) return "";
                        var n = [];
                        for (var r in e) "_um_ssrc" !== r && "_um_sts" !== r && n.push(r + "=" + e[r]);
                        var o = n.join("&");
                        return o ? t + "?" + o : t;
                    }(fe, pe[fe]);
                    return !r.path && o && (r.path = o), e.trackShare.call(this, r);
                };
            }
        }
        function P(t, e, n) {
            var r = t[e];
            t[e] = function(t) {
                n.call(this, t), r && r.call(this, t);
            };
        }
        function j(t) {
            try {
                ee.resume(t, !0);
            } catch (t) {
                F().v("onAppShow: ", t);
            }
        }
        function C() {
            try {
                ee.pause();
            } catch (t) {
                F().v("onAppHide: ", t);
            }
        }
        function N() {
            try {
                x(this.route), ee.trackPageStart(this.route);
            } catch (t) {
                F().v("onPageShow: ", t);
            }
        }
        function R(t) {
            try {
                x(this.route), t && (e = this.route, n = t, e && (pe[e] = n)), F().v("Page onLoad: ", this.route, t);
            } catch (t) {
                F().v("onPageLoad: ", t);
            }
            var e, n;
        }
        function D() {
            try {
                ee.trackPageEnd(this.route);
            } catch (t) {
                F().v("onPageHide: ", t);
            }
        }
        var U, L, M, V = "[UMENG] -- ", F = (L = !1, function() {
            return null === U && (U = new o()), U;
        }), q = (M = U = null, function() {
            return M = M || new i();
        });
        a.prototype.addListener = a.prototype.on = function(t, e) {
            var n = this.listeners;
            n[t] && n[t].length >= this.maxListener ? console.error("监听器的最大数量是%d,您已超出限制", this.maxListener) : n[t] instanceof Array ? -1 === n[t].indexOf(e) && n[t].push(e) : n[t] = [].concat(e);
        }, a.prototype.emit = function(t) {
            var e = Array.prototype.slice.call(arguments);
            e.shift();
            var n = this.listeners;
            n[t] instanceof Array && n[t].forEach(function(t) {
                t.apply(null, e);
            });
        }, a.prototype.listeners = function(t) {
            return this.listeners[t];
        }, a.prototype.setMaxListeners = function(t) {
            this.maxListener = t;
        }, a.prototype.removeListener = function(t, e) {
            var n = this.listeners, r = (n[t] || []).indexOf(e);
            0 <= r && n[t].splice(r, 1);
        }, a.prototype.removeAllListener = function(t) {
            this.listeners[t] = [];
        }, a.prototype.once = function(t, e) {
            var n = this;
            this.on(t, function r() {
                var o = Array.prototype.slice.call(arguments);
                e.apply(null, o), n.removeListener(t, r);
            });
        };
        var B, K, G, H, z, W, J, Y, X, Q, Z, tt, et, nt, rt, ot, it, at, st, ct, ut, ft, pt, lt, dt = new a(), ht = 0, vt = new (function() {
            function t() {}
            return t.prototype.setStorage = function(t, e, n) {
                wx.setStorage({
                    key: t,
                    data: e,
                    success: function() {
                        "function" == typeof n && n(!0);
                    },
                    fail: function() {
                        "function" == typeof n && n(!1);
                    }
                });
            }, t.prototype.getStorage = function(t, e) {
                wx.getStorage({
                    key: t,
                    success: function(t) {
                        "function" == typeof e && e(t.data);
                    },
                    fail: function(n) {
                        F().w(t + ": " + n.errMsg), "function" == typeof e && e();
                    }
                });
            }, t.prototype.removeStorage = function(t, e) {
                wx.removeStorage({
                    key: t,
                    success: function() {
                        "function" == typeof e && e(!0);
                    },
                    fail: function() {
                        "function" == typeof e && e(!1);
                    }
                });
            }, t.prototype.getSystemInfo = function(t) {
                wx.getSystemInfo({
                    success: function(e) {
                        var n = {
                            model: e.model,
                            brand: e.brand,
                            pixelRatio: e.pixelRatio,
                            screenWidth: e.screenWidth,
                            screenHeight: e.screenHeight,
                            fontSizeSetting: e.fontSizeSetting,
                            platform: e.platform,
                            platformVersion: e.version,
                            platformSDKVersion: e.SDKVersion,
                            language: e.language,
                            deviceName: e.model,
                            OSVersion: e.system,
                            resolution: ""
                        }, r = e.system.split(" ");
                        Array.isArray(r) && (n.OS = r[0]);
                        var o = Math.round(e.screenWidth * e.pixelRatio), i = Math.round(e.screenHeight * e.pixelRatio);
                        n.resolution = i < o ? o + "*" + i : i + "*" + o, "function" == typeof t && t(n);
                    },
                    fail: function() {
                        "function" == typeof t && t();
                    }
                });
            }, t.prototype.getDeviceInfo = function(t) {
                "function" == typeof t && t("");
            }, t.prototype.checkNetworkAvailable = function(t) {
                wx.getNetworkType({
                    success: function(e) {
                        "function" == typeof t && t(e && "none" !== e.networkType);
                    },
                    fail: function() {
                        "function" == typeof t && t(!1);
                    }
                });
            }, t.prototype.getNetworkInfo = function(t) {
                wx.getNetworkType({
                    success: function(e) {
                        "function" == typeof t && t({
                            networkAvailable: "none" !== e.networkType,
                            networkType: e.networkType
                        });
                    },
                    fail: function() {
                        "function" == typeof t && t();
                    }
                });
            }, t.prototype.getDeviceId = function(t) {
                t("");
            }, t.prototype.getAdvertisingId = function(t) {
                "function" == typeof t && t("");
            }, t.prototype.onNetworkStatusChange = function(t) {
                wx.onNetworkStatusChange(function(e) {
                    "function" == typeof t && t(e.isConnected);
                });
            }, t.prototype.request = function(t) {
                var e = t.success, n = t.fail, r = !1, o = null;
                t.success = function(t) {
                    r || (o && clearTimeout(o), "function" == typeof e && e(t));
                }, t.fail = function() {
                    r || (o && clearTimeout(o), "function" == typeof n && n(!1));
                }, wx.request(t), o = setTimeout(function() {
                    o && clearTimeout(o), r = !0, "function" == typeof n && n(r);
                }, t.timeout || 5e3);
            }, t.prototype.getSdkType = function() {
                return "wxmp";
            }, t.prototype.getPlatform = function() {
                return "wx";
            }, t.prototype.connectSocket = function(t) {
                wx.connectSocket(t);
            }, t.prototype.closeSocket = function(t) {
                wx.closeSocket(t);
            }, t.prototype.sendSocketMessage = function(t) {
                wx.sendSocketMessage(t);
            }, t.prototype.onSocketOpen = function(t) {
                wx.onSocketOpen(t);
            }, t.prototype.onSocketClose = function(t) {
                wx.onSocketClose(t);
            }, t.prototype.onSocketMessage = function(t) {
                wx.onSocketMessage(t);
            }, t.prototype.onSocketError = function(t) {
                wx.onSocketError(t);
            }, t.prototype.getClipboard = function(t) {
                try {
                    wx.getClipboardData({
                        success: function(e) {
                            "function" == typeof t && t(e.data);
                        },
                        fail: function() {
                            "function" == typeof t && t("");
                        }
                    });
                } catch (t) {
                    F.e("读取clipboard发生错误", t);
                }
            }, t.prototype.showModal = function(t) {
                try {
                    wx.showModal(t);
                } catch (t) {
                    F.e("展示Modal时发生错误", t);
                }
            }, t.prototype.showToast = function(t) {
                try {
                    wx.showToast(t);
                } catch (t) {
                    F.e("showToast error", t);
                }
            }, t.prototype.getUserProfile = function(t) {
                var e = {
                    fail: function() {
                        t && t();
                    },
                    success: function(e) {
                        if (e && e.userInfo) {
                            var n = e.userInfo;
                            t && t({
                                avatar: n.avatarUrl,
                                nickName: n.nickName,
                                gender: n.gender,
                                country: n.country,
                                province: n.province,
                                city: n.city,
                                language: n.language
                            });
                        }
                    }
                };
                try {
                    wx.getSetting({
                        success: function(t) {
                            t.authSetting["scope.userInfo"] && wx.getUserProfile(e);
                        },
                        fail: function() {
                            t();
                        }
                    });
                } catch (t) {
                    F.e("getUserInfo error", t);
                }
            }, t.prototype.getAppInfoSync = function() {
                if (wx.getAccountInfoSync) {
                    var t = wx.getAccountInfoSync(), e = t && t.miniProgram ? t.miniProgram : {};
                    return {
                        appId: e.appId,
                        appEnv: e.envVersion,
                        appVersion: e.version
                    };
                }
                return {};
            }, t.prototype.onShareAppMessage = function(t) {
                wx.onShareAppMessage(t);
            }, t.prototype.shareAppMessage = function(t) {
                wx.shareAppMessage(t);
            }, t;
        }())(), yt = function(t, e) {
            return (yt = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }, gt = {
            SESSION_INTERVAL: 3e4,
            LOG_URL: "https://umini.shujupie.com/wxm_logs",
            GET_OPENID_URL: "https://umini.shujupie.com/uminiprogram_logs/wx/getuut",
            USERINFO_URL: "https://umini.shujupie.com/uminiprogram_logs/comm/uif",
            DEVICE_INFO_KEY: "device_info",
            ADVERTISING_ID: "mobile_ad_id",
            ANDROID_ID: "android_id",
            CURRENT_SESSION: "current_session",
            SESSION_PAUSE_TIME: "session_pause_time",
            EVENT_SEND_DEFAULT_INTERVAL: 15e3,
            EVENT_LAST_SEND_TIME: "last_send_time",
            MAX_EVENTID_LENGTH: 128,
            MAX_PROPERTY_KEY_LENGTH: 256,
            MAX_PROPERTY_KEYS_COUNT: 100,
            REPORT_POLICY: "report_policy",
            REPORT_INTERVAL_TIME: "report_interval_time",
            REPORT_POLICY_START_SEND: "1",
            REPORT_POLICY_INTERVAL: "6",
            IMPRINT: "imprint",
            SEED_VERSION: "1.0.0",
            IMPL_VERSION: "2.4.6",
            ALIPAY_AVAILABLE_VERSION: "10.1.52",
            SHARE_PATH: "um_share_path",
            SHARES: "shares",
            REQUESTS: "requests",
            UUID: "um_uuid",
            UUID_SUFFIX: "ud",
            OPENID: "um_od",
            UNIONID: "um_unid",
            ALIPAYID: "um_alipayid",
            USERID: "um_userid",
            PROVIDER: "um_provider",
            SWANID: "um_swanid",
            ANONYMOUSID: "um_anonymousid",
            LAUNCH_OPTIONS: "LAUNCH_OPTIONS",
            UM_SSRC: "_um_ssrc",
            USER_INFO: "user_info",
            IS_ALIYUN: !1,
            ALIYUN_URL: "serverless.huoban.youmeng.network.forward"
        }, _t = {
            isNumber: function(t) {
                return !Number.isNaN(parseInt(t, 10));
            },
            compareVersion: function(t, e) {
                for (var n = String(t).split("."), r = String(e).split("."), o = 0; o < Math.max(n.length, r.length); o++) {
                    var i = parseInt(n[o] || 0, 10), a = parseInt(r[o] || 0, 10);
                    if (a < i) return 1;
                    if (i < a) return -1;
                }
                return 0;
            },
            getRandomStr: function(t) {
                for (var e = "", n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], r = 0; r < Number(t); r++) e += n[Math.round(Math.random() * (n.length - 1))];
                return e;
            },
            clone: function(t) {
                return JSON.parse(JSON.stringify(t));
            },
            startsWith: function(t, e) {
                return !(!t || !e || 0 === e.length || e.length > t.length) && t.substr(0, e.length) === e;
            },
            endsWith: function(t, e) {
                return !(!e || 0 === t.length || e.length > t.length) && t.substring(t.length - e.length) === e;
            },
            assign: function(t) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }
                return e;
            },
            deepEqual: function t(e, r) {
                if (e === r) return !0;
                if (e && "object" == (void 0 === e ? "undefined" : n(e)) && r && "object" == (void 0 === r ? "undefined" : n(r))) {
                    if (Object.keys(e).length !== Object.keys(r).length) return !1;
                    for (var o in e) {
                        if (Object.prototype.hasOwnProperty.call(r, o)) return !1;
                        if (!t(e[o], r[o])) return !1;
                    }
                    return !0;
                }
                return !1;
            },
            trimStart: function(t, e) {
                if (!t) return "";
                if ("string" == typeof e && e.length) {
                    var n = new RegExp("^" + e + "*");
                    t = t.replace(n, "");
                } else t = t.replace(/^s*/, "");
                return t;
            },
            trimEnd: function(t, e) {
                if (!t) return "";
                var n, r;
                if ("string" == typeof e && e.length) {
                    for (n = new RegExp(e), r = t.length; n.test(t.charAt(r)); ) --r;
                    return t.slice(0, r + 1);
                }
                for (n = /s/, r = t.length - 1; n.test(t.charAt(r)); ) --r;
                return t.slice(0, r + 1);
            }
        }, mt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this;
            }
            return s(e, t), e.prototype.getOpenIdAsync = function(t, e) {
                var n = this;
                wx.login({
                    success: function(r) {
                        r.code ? vt.request({
                            url: gt.GET_OPENID_URL,
                            method: "GET",
                            data: {
                                key: t,
                                code: r.code
                            },
                            success: function(t) {
                                if (t && 200 === t.statusCode && t.data && t.data.data) {
                                    var r = t.data.data;
                                    return n.setOpenid(r.oid), n.setUnionid(r.uid), e && e(!0);
                                }
                                e && e();
                            },
                            fail: function(t) {
                                F().v("wx request failed...", t), e && e();
                            }
                        }) : e && e();
                    },
                    fail: function() {
                        e && e();
                    }
                });
            }, e;
        }(function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._openid = "", e._unionid = "", e._useOpenid = !1, e;
            }
            return s(e, t), e.prototype.initID = function(t) {
                var e = this;
                e._idType = e._useOpenid ? "openid" : "uuid", F().v("id type: ", e._idType), vt.getStorage(gt.UNIONID, function(t) {
                    e._unionid = t;
                }), this._useOpenid ? vt.getStorage(gt.OPENID, function(n) {
                    e._openid = n, t && t();
                }) : t && t();
            }, e.prototype.setUseOpenid = function(t) {
                this._useOpenid = t;
            }, e.prototype.setOpenid = function(t) {
                !this._openid && t && (this._openid = t, vt.setStorage(gt.OPENID, t));
            }, e.prototype.setUnionid = function(t) {
                !this._unionid && t && (this._unionid = t, vt.setStorage(gt.UNIONID, t));
            }, e.prototype.getIdTracking = function() {
                var e = t.prototype.getIdTracking.call(this);
                return this._openid && (e.openid = this._openid), this._unionid && (e.unionid = this._unionid), 
                this._userid && (e.userid = this._userid), e;
            }, e.prototype.getId = function() {
                return this._useOpenid ? this._openid : this._uuid;
            }, e;
        }(function() {
            function t() {
                this._uuid = "", this._userid = "", this._provider = "", this._idType = "";
            }
            return t.prototype.createUUID = function() {
                return _t.getRandomStr(10) + Date.now() + _t.getRandomStr(7) + gt.UUID_SUFFIX;
            }, t.prototype.initUUID = function(t) {
                var e = this;
                vt.getStorage(gt.UUID, function(n) {
                    n ? e._uuid = n : (e._uuid = e.createUUID(), vt.setStorage(gt.UUID, e._uuid)), t && t(n);
                });
            }, t.prototype.initUserid = function() {
                var t = this;
                vt.getStorage(gt.USERID, function(e) {
                    !t._userid && e && (t._userid = e, F().v("userId is ", e));
                }), vt.getStorage(gt.PROVIDER, function(e) {
                    !t._provider && e && (t._provider = e, F().v("provider is ", e));
                });
            }, t.prototype.init = function(t) {
                var e = this;
                e.initUUID(function() {
                    e.initUserid(), e.initID(t);
                });
            }, t.prototype.setUserid = function(t, e) {
                !this._userid && t && (this._userid = t, this._provider = e, vt.setStorage(gt.USERID, t), 
                vt.setStorage(gt.PROVIDER, e));
            }, t.prototype.getUserId = function() {
                return this._userid;
            }, t.prototype.getProvider = function() {
                return this._provider;
            }, t.prototype.getIdType = function() {
                return this._idType;
            }, t.prototype.getIdTracking = function() {
                var t = {};
                return this._uuid && (t.uuid = this._uuid), this._userid && (t.userid = this._userid), 
                t;
            }, t;
        }())), bt = function() {
            return B = B || new mt();
        }, Ot = function() {
            return K = K || new c();
        }, St = {}, At = function() {
            return G = G || new u();
        }, wt = {
            stringify: function(t) {
                if (t) try {
                    return JSON.stringify(t);
                } catch (t) {}
                return "";
            },
            parse: function(t) {
                if (t) try {
                    return JSON.parse(t);
                } catch (t) {}
                return null;
            },
            parseToArray: function(t) {
                if (t) try {
                    return JSON.parse(t);
                } catch (t) {}
                return [];
            }
        }, Et = (X = !(H = []), function() {
            return W = W || new f();
        }), kt = "ekvs", $t = 1e4, It = (tt = [], et = [], function() {
            return Q = Q || {
                addEvent: function(t) {
                    Z ? (tt.unshift(t), 1 < tt.length && (function() {
                        if (tt.length) {
                            var t = Et().get(kt);
                            (function(t) {
                                var e = 0;
                                for (var n in t) Array.isArray(t[n]) && (e += t[n].length);
                                return e;
                            })(t) + tt.length <= $t && (t = p(t, tt), Et().set(kt, t));
                        }
                    }(), tt.length = 0)) : (F().w("session id is null: ", Z), et.unshift(t));
                },
                setSessionId: function(t) {
                    if (Z = t, F().v("setSessionId: ", Z), Array.isArray(et) && et.length && Z) {
                        for (var e = 0; e < et.length; e++) this.addEvent(et[e]);
                        et.length = 0;
                    }
                },
                getEkvs: function() {
                    var t = Et().get(kt);
                    return tt && tt.length && (t = p(t, tt)), t;
                },
                clear: function() {
                    Et().remove(kt), tt.length = 0;
                }
            };
        }), xt = "2g", Tt = "3g", Pt = "4g", jt = {
            HALF_SESSION: "half_session",
            CLOSE_SESSION: "close_session",
            EKV: "ekv",
            ENTER_PAGE: "enter_page",
            LEAVE_PAGE: "leave_page"
        }, Ct = [ "access", "access_subtype" ], Nt = {
            instance: function() {
                return nt = nt || l();
            }
        }, Rt = function() {
            return rt = rt || {
                resume: function(t) {
                    var e = !1;
                    it = it || Et().get(gt.CURRENT_SESSION);
                    var n = new Date();
                    return ot = n.getTime(), !it || !it.end_time || ot - it.end_time > gt.SESSION_INTERVAL ? (e = !0, 
                    function(t) {
                        try {
                            var e = (it || {}).options || {}, n = _t.assign({}, function(t) {
                                var e = {};
                                for (var n in t) 0 === n.indexOf("_um_") && (e[n] = t[n]);
                                return F().v("query: ", t), F().v("_um_params: ", e), e;
                            }(t.query));
                            n.path = t.path || e.path, n.scene = t.scene ? vt.getPlatform() + "_" + t.scene : e.scene;
                            var r = t.referrerInfo;
                            r && (n.referrerAppId = r.appId), F().v("session options: ", n);
                            var o = n[gt.UM_SSRC];
                            o && At().setShareSource(o);
                            var i = Date.now();
                            it = {
                                id: _t.getRandomStr(10) + i,
                                start_time: i,
                                options: n
                            };
                        } catch (t) {
                            F().e("生成新session失败: ", t);
                        }
                    }(t), F().v("开始新的session(%s): ", it.id, it)) : F().v("延续上一次session(%s): %s ", it.id, n.toLocaleTimeString(), it), 
                    e;
                },
                pause: function() {
                    !function() {
                        if (it) {
                            var t = new Date();
                            it.end_time = t.getTime(), "number" != typeof it.duration && (it.duration = 0), 
                            it.duration = it.end_time - ot, Et().set(gt.CURRENT_SESSION, it), F().v("退出会话(%s): %s ", it.id, t.toLocaleTimeString(), it);
                        }
                    }();
                },
                getCurrentSessionId: function() {
                    return (it || {}).id;
                },
                getCurrentSession: function() {
                    return it;
                },
                cloneCurrentSession: function() {
                    return _t.clone(it);
                }
            };
        }, Dt = {
            sessions: "sn",
            ekvs: "e",
            active_user: "active_user"
        }, Ut = {
            sdk_type: "sdt",
            access: "ac",
            access_subtype: "acs",
            device_model: "dm",
            language: "lang",
            device_type: "dt",
            device_manufacturer: "dmf",
            device_name: "dn",
            platform_version: "pv",
            id_type: "it",
            font_size_setting: "fss",
            os_version: "ov",
            device_manuid: "did",
            platform_sdk_version: "psv",
            device_brand: "db",
            appkey: "ak",
            _id: "id",
            id_tracking: "itr",
            imprint: "imp",
            sdk_version: "sv",
            resolution: "rl",
            testToken: "ttn"
        }, Lt = {
            uuid: "ud",
            unionid: "und",
            openid: "od",
            anonymousid: "nd",
            alipay_id: "ad",
            device_id: "dd",
            userid: "puid"
        }, Mt = "_UMTEST_", Vt = "TEST_TOKEN", Ft = (at = it = ot = rt = nt = Y = W = G = K = B = null, 
        st = J = z = "", function() {
            return at = at || new h();
        }), qt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Bt = function(t) {
            for (var e = {}, n = 0, r = t.length; n < r; n++) e[t.charAt(n)] = n;
            return e;
        }(qt), Kt = String.fromCharCode, Gt = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Ht = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), zt = {
            encode: function(t, e) {
                return e ? g(String(t)).replace(/[+\/]/g, function(t) {
                    return "+" == t ? "-" : "_";
                }).replace(/=/g, "") : g(String(t));
            },
            decode: function(t) {
                return function(t) {
                    return t.replace(/[\s\S]{1,4}/g, m).replace(Ht, _);
                }(String(t).replace(/[-_]/g, function(t) {
                    return "-" == t ? "+" : "/";
                }).replace(/[^A-Za-z0-9\+\/]/g, ""));
            }
        }, Wt = new function() {
            var t = {};
            this.set = function(e) {
                t = wt.parse(zt.decode(e));
            }, this.get = function() {
                return t;
            }, this.getItem = function(e) {
                if (t) return t[e];
            }, this.load = function() {
                t = Et().get(gt.IMPRINT);
            }, this.save = function() {
                t && Et().set(gt.IMPRINT, t);
            };
        }(), Jt = (ct = null, ut = !1, ft = [], pt = new function(t) {
            var e = [];
            this.enqueue = function(t) {
                this.size() >= 50 && this.dequeue(), e.push(t);
            }, this.dequeue = function() {
                return e.shift();
            }, this.front = function() {
                return e[0];
            }, this.isEmpty = function() {
                return 0 === e.length;
            }, this.clear = function() {
                e.length = 0;
            }, this.size = function() {
                return e.length;
            }, this.items = function() {
                return e;
            }, this.print = function() {
                console.log(e.toString());
            };
        }(50), function() {
            return ct = ct || new S();
        }), Yt = (lt = null, function() {
            return lt = lt || new A();
        }), Xt = [];
        k.prototype = {
            createMethod: function(t, e, n) {
                try {
                    t[e] = n && n[e] ? function() {
                        return n[e].apply(n, arguments);
                    } : function() {
                        Xt.push([ e, [].slice.call(arguments) ]);
                    };
                } catch (t) {
                    F().v("create method errror: ", t);
                }
            },
            installApi: function(t, e) {
                try {
                    for (var n = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,setSuperProperty".split(","), r = 0, o = n.length; r < o; r++) this.createMethod(t, n[r], e);
                    if (e) for (r = 0, o = Xt.length; r < o; r++) {
                        var i = Xt[r];
                        try {
                            e[i[0]].apply(e, i[1]);
                        } catch (t) {
                            F().v("impl[v[0]].apply error: ", i[0], t);
                        }
                    }
                } catch (t) {
                    F().v("install api errror: ", t);
                }
            }
        };
        var Qt = [ "https://umini.shujupie.com" ], Zt = 0;
        !function(t) {
            setTimeout(function() {
                !function t(e, n) {
                    e >= Qt.length || n ? (n && function() {
                        var t = "https://umini.shujupie.com";
                        gt.LOG_URL = gt.LOG_URL.replace(t, Qt[Zt]), gt.GET_OPENID_URL = gt.GET_OPENID_URL.replace(t, Qt[Zt]), 
                        gt.USERINFO_URL = gt.USERINFO_URL.replace(t, Qt[Zt]);
                    }(), n && F().v("命中可用服务", Qt[Zt]), n || F().tip_w("未命中可用服务")) : vt.request({
                        url: Qt[e] + "/uminiprogram_logs/ckdh",
                        success: function(n) {
                            200 === (n.code || n.status || n.statusCode) && n.data && 200 === n.data.code ? t((Zt = e) + 1, !0) : t(e + 1, !1);
                        },
                        fail: function() {
                            t(e + 1, !1);
                        }
                    });
                }(0, !1);
            }, t);
        }(3e3);
        var te = new k(), ee = {
            _inited: !1,
            init: function(t) {
                if (this._inited) F().v("已经实例过，请避免重复初始化"); else if (t) if (t.appKey) {
                    "boolean" != typeof t.useOpenid && (t.useOpenid = !0), q().set(t), F().setDebug(t.debug), 
                    this._inited = !0;
                    var e = this;
                    dt.emit(ht, t);
                    try {
                        var n = new E();
                        F().v("成功创建Lib对象"), n.init(function() {
                            F().v("Lib对象初始化成功"), te.installApi(e, n), F().v("安装Lib接口成功"), dt.emit(1, t);
                        });
                    } catch (t) {
                        F().w("创建Lib对象异常: " + t);
                    }
                } else F().err("请确保传入正确的appkey"); else F().err("请正确设置相关信息！");
            }
        };
        try {
            te.installApi(ee, null);
        } catch (U) {
            F().w("uma赋值异常: ", U);
        }
        var ne = {
            FETCH_URL: "https://ucc.umeng.com/v1/mini/fetch",
            ABLOG_URL: "https://pslog.umeng.com/mini_ablog",
            SDK_VERSION: "2.4.6",
            MOBILE_NETWORK_NONE: "none",
            MOBILE_NETWORK_2G: "2g",
            MOBILE_NETWORK_3G: "3g",
            MOBILE_NETWORK_4G: "4g",
            MOBILE_NETWORK_5G: "5g",
            MOBILE_NETWORK_WIFI: "wifi",
            IMPRINT: "imprint"
        }, re = {}, oe = Array.isArray;
        re.isArray = oe || function(t) {
            return "[object Array]" === toString.call(t);
        }, re.isObject = function(t) {
            return t === Object(t) && !re.isArray(t);
        }, re.isEmptyObject = function(t) {
            if (re.isObject(t)) {
                for (var e in t) if (hasOwnProperty.call(t, e)) return !1;
                return !0;
            }
            return !1;
        }, re.isUndefined = function(t) {
            return void 0 === t;
        }, re.isString = function(t) {
            return "[object String]" === toString.call(t);
        }, re.isDate = function(t) {
            return "[object Date]" === toString.call(t);
        }, re.isNumber = function(t) {
            return "[object Number]" === toString.call(t);
        }, re.each = function(t, e, n) {
            if (null != t) {
                var r = {}, o = Array.prototype.forEach;
                if (o && t.forEach === o) t.forEach(e, n); else if (t.length === +t.length) {
                    for (var i = 0, a = t.length; i < a; i++) if (i in t && e.call(n, t[i], i, t) === r) return;
                } else for (var s in t) if (hasOwnProperty.call(t, s) && e.call(n, t[s], s, t) === r) return;
            }
        }, re.buildQuery = function(t, e) {
            var n, r, o = [];
            return void 0 === e && (e = "&"), re.each(t, function(t, e) {
                n = encodeURIComponent(t.toString()), r = encodeURIComponent(e), o[o.length] = r + "=" + n;
            }), o.join(e);
        }, re.JSONDecode = function(t) {
            if (t) {
                try {
                    return JSON.parse(t);
                } catch (t) {
                    console.error("JSONDecode error", t);
                }
                return null;
            }
        }, re.JSONEncode = function(t) {
            try {
                return JSON.stringify(t);
            } catch (t) {
                console.error("JSONEncode error", t);
            }
        };
        var ie = Object.create(null), ae = Object.create(null), se = null, ce = !1, ue = {
            minFetchIntervalSeconds: 43200
        };
        I.prototype = {
            setDefaultValues: function(t) {
                ce && re.isObject(t) && re.each(t, function(t, e) {
                    ae[e] && ae[e].v || (ae[e] = {
                        v: t
                    });
                });
            },
            getValue: function(t) {
                F().v("从配置项中读取 value, 当前配置为: ", ae), F().v("待读取的 key : ", t);
                try {
                    if (!ce) return;
                    var e = ae[t] || {};
                    return F().v("读取相应配置ing..., 结果为: ", e), re.isNumber(e.e) && re.isNumber(e.g) && (F().v("读取到相应配置, 开始数据上报..."), 
                    function(t) {
                        var e = {
                            appkey: q().appKey(),
                            sdkType: vt.getSdkType(),
                            expId: t && t.e,
                            groupId: t && t.g,
                            clientTs: Date.now(),
                            key: t && t.k,
                            value: t && t.v,
                            umid: bt().getId()
                        };
                        try {
                            vt.request({
                                url: ne.ABLOG_URL,
                                method: "POST",
                                data: [ e ],
                                success: function(t) {
                                    t && 200 === t.statusCode ? F().v("上传数据成功", e) : F().w("ablog 请求成功, 返回结果异常 ", t);
                                },
                                fail: function(t) {
                                    F().w("ablog 请求数据错误 ", e, t);
                                }
                            });
                        } catch (t) {
                            F().w("urequest 调用错误", t);
                        }
                    }(e)), e.v;
                } catch (e) {
                    F().w("getValue error, key: ", t);
                }
            },
            active: function(t) {
                try {
                    if (!ce) return;
                    var e, n;
                    t && t.params && (e = t.params), t && t.callback && (n = t.callback), F().v("激活配置项: ", e), 
                    e ? (F().v("本地已缓存的配置项: ", ae), $(e), F().v("合并后的配置项: ", ae), n && n(ae), F().v("active 结束")) : (F().v("配置项为空!! 读取本地配置..."), 
                    vt.getStorage(this.STORAGE_NAME, function(t) {
                        t ? ($((t = re.JSONDecode(t) || {}).params), F().v("当前本地配置项为: ", ae), n && n(ae), 
                        F().v("active 结束")) : F().v("当前本地配置项为空, 退出激活");
                    }));
                } catch (t) {
                    F().w("SDK active 错误", t);
                }
            },
            init: function(t) {
                t.appKey && (se = t.appKey, this.STORAGE_NAME = "um_remote_config_{{" + se + "}}"), 
                se ? ce ? F().w("SDK 已经初始化, 请避免重复初始化") : (ce = !0, this.setOptions(t), this.active()) : F().err("请检查您的小程序 appKey, appKey 不能为空");
            },
            setOptions: function(t) {
                if (re.isObject(t)) {
                    var e = t.minFetchIntervalSeconds;
                    re.isNumber(e) && (ue.minFetchIntervalSeconds = Math.max(e, 5));
                }
            },
            fetch: function(t) {
                if (ce && this.STORAGE_NAME) {
                    var e, n;
                    t && t.active && (e = t.active), t && t.callback && (n = t.callback);
                    var r = this;
                    vt.getStorage(this.STORAGE_NAME, function(t) {
                        F().v("开始读缓存 data is ", t), (t = re.JSONDecode(t) || {}).params && t.ts && Date.now() - t.ts < 1e3 * ue.minFetchIntervalSeconds ? (F().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch"), 
                        n && n(t.params)) : function(t) {
                            F().v("开始构建 fetch body"), vt.getSystemInfo(function(e) {
                                vt.getNetworkInfo(function(n) {
                                    var r = (r = (n = n || {}).networkType) === ne.MOBILE_NETWORK_NONE ? "unknown" : r.toUpperCase();
                                    ie.access = r, function(t, e) {
                                        var n = t.brand || "";
                                        if (ie.deviceType = "Phone", ie.sdkVersion = ne.SDK_VERSION, ie.appkey = q().appKey(), 
                                        ie.sdkType = vt.getSdkType(), ie.umid = bt().getId(), t) {
                                            ie.language = t.language || "", ie.os = t.OS, ie.osVersion = t.OSVersion, ie.deviceName = t.deviceName, 
                                            ie.platformVersion = t.platformVersion, ie.platformSdkVersion = t.platformSDKVersion, 
                                            ie.deviceBrand = n;
                                            var r = t.resolution.split("*");
                                            re.isArray(r) && (ie.resolutionHeight = Number(r[0]), ie.resolutionWidth = Number(r[1]));
                                        }
                                        !function(t) {
                                            t && (ie.installTime = t.install_datetime && Date.parse(t.install_datetime), ie.scene = t.install_scene, 
                                            ie.channel = t.install_channel, ie.campaign = t.install_campaign);
                                        }(Wt.get()), e && e(ie);
                                    }(e, t);
                                });
                            });
                        }(function(t) {
                            F().v("缓存数据不存在, 构建 fetch body :", t);
                            try {
                                vt.request({
                                    url: ne.FETCH_URL,
                                    method: "POST",
                                    data: t,
                                    success: function(t) {
                                        if (t && 200 === t.statusCode && t.data && t.data.cc) {
                                            F().v("fetch 请求成功, 响应数据: ", t.data);
                                            var o = Object.create(null);
                                            re.each(t.data.cc, function(t) {
                                                o[t.k] = t;
                                            });
                                            var i = {
                                                ts: Date.now(),
                                                params: o
                                            };
                                            F().v("开始缓存 fetch 请求的云配置结果..."), vt.setStorage(r.STORAGE_NAME, re.JSONEncode(i), function(t) {
                                                F().v("缓存云配置成功, 缓存数据为: ", i), F().v("缓存云配置成功, 成功消息为: ", t), F().v("云配拉取数据是否自动激活: ", e), 
                                                t && e && (F().v("激活云配置..."), r.active({
                                                    params: o,
                                                    callback: n
                                                }));
                                            });
                                        } else F().w("fetch 请求成功,返回结果异常 ", t.data), n && n();
                                    },
                                    fail: function(e) {
                                        F().w("fetch请求数据错误 ", t, e), n && n();
                                    }
                                });
                            } catch (t) {
                                F().w("urequest调用错误", t);
                            }
                        });
                    });
                }
            }
        };
        var fe = "", pe = {};
        try {
            var le = App;
            App = function(t) {
                P(t, "onLaunch", function() {
                    !function(t) {
                        try {
                            ee.init(t);
                        } catch (t) {
                            F().v("onAppLaunch: ", t);
                        }
                    }(t.umengConfig);
                }), P(t, "onShow", j), P(t, "onHide", C), le(t);
            };
        } catch (U) {
            F().w("App重写异常");
        }
        try {
            var de = Page;
            Page = function(t) {
                P(t, "onShow", N), P(t, "onHide", D), P(t, "onUnload", D), P(t, "onLoad", R), T(t, ee), 
                de(t);
            };
        } catch (U) {
            F().w("Page重写异常");
        }
        try {
            var he = Component;
            Component = function(t) {
                try {
                    t.methods = t.methods || {};
                    var e = t.methods;
                    P(e, "onShow", N), P(e, "onHide", D), P(e, "onUnload", D), P(e, "onLoad", R), T(e, ee), 
                    he(t);
                } catch (e) {
                    he(t);
                }
            };
        } catch (U) {
            F().w("Component重写异常");
        }
        var ve = ee.init;
        ee.init = function(t) {
            t && t.useOpenid && (F().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"), 
            F().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"), 
            F().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")), 
            ve.call(ee, t);
        };
        var ye = new I();
        !function(t, e, r) {
            if ("object" == (void 0 === t ? "undefined" : n(t))) {
                if ("rc".length) t.rc = r; else for (var o in r) if ({}.hasOwnProperty.call(r, o)) {
                    if (t[o]) return void F().v("方法已定义，无法注入此插件方法: ", o);
                    r[o] && (t[o] = function() {
                        r[o](arguments);
                    });
                }
            } else F().v("插件安装失败，宿主对象不能为空");
        }(ee, 0, ye), wx.uma = ee, t.exports = ee;
    },
    f0c5: function(t, e, n) {
        function r(t, e, n, r, o, i, a, s, c, u) {
            var f, p = "function" == typeof t ? t.options : t;
            if (c) {
                p.components || (p.components = {});
                var l = Object.prototype.hasOwnProperty;
                for (var d in c) l.call(c, d) && !l.call(p.components, d) && (p.components[d] = c[d]);
            }
            if (u && ((u.beforeCreate || (u.beforeCreate = [])).unshift(function() {
                this[u.__module] = this;
            }), (p.mixins || (p.mixins = [])).push(u)), e && (p.render = e, p.staticRenderFns = n, 
            p._compiled = !0), r && (p.functional = !0), i && (p._scopeId = "data-v-" + i), 
            a ? (f = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), 
                o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a);
            }, p._ssrRegister = f) : o && (f = s ? function() {
                o.call(this, this.$root.$options.shadowRoot);
            } : o), f) if (p.functional) {
                p._injectStyles = f;
                var h = p.render;
                p.render = function(t, e) {
                    return f.call(e), h(t, e);
                };
            } else {
                var v = p.beforeCreate;
                p.beforeCreate = v ? [].concat(v, f) : [ f ];
            }
            return {
                exports: t,
                options: p
            };
        }
        n.d(e, "a", function() {
            return r;
        });
    }
} ]);