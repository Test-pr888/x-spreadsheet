!
function(e) {
    "use strict";
    function t() {
        for (var e = arguments.length,
        t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (t.length > 1) {
            t[0] = t[0].slice(0, -1);
            for (var i = t.length - 1,
            r = 1; r < i; ++r) t[r] = t[r].slice(1, -1);
            return t[i] = t[i].slice(1),
            t.join("")
        }
        return t[0]
    }
    function n(e) {
        return "(?:" + e + ")"
    }
    function i(e) {
        return void 0 === e ? "undefined": null === e ? "null": Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()
    }
    function r(e) {
        return e.toUpperCase()
    }
    function o(e) {
        var i = t("[0-9]", "[A-Fa-f]"),
        r = n(n("%[EFef]" + i + "%" + i + i + "%" + i + i) + "|" + n("%[89A-Fa-f]" + i + "%" + i + i) + "|" + n("%" + i + i)),
        o = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
        a = t("[\\:\\/\\?\\#\\[\\]\\@]", o),
        s = e ? "[\\uE000-\\uF8FF]": "[]",
        l = t("[A-Za-z]", "[0-9]", "[\\-\\.\\_\\~]", e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]": "[]"),
        c = n("[A-Za-z]" + t("[A-Za-z]", "[0-9]", "[\\+\\-\\.]") + "*"),
        u = n(n(r + "|" + t(l, o, "[\\:]")) + "*"),
        h = (n(n("25[0-5]") + "|" + n("2[0-4][0-9]") + "|" + n("1[0-9][0-9]") + "|" + n("[1-9][0-9]") + "|[0-9]"), n(n("25[0-5]") + "|" + n("2[0-4][0-9]") + "|" + n("1[0-9][0-9]") + "|" + n("0?[1-9][0-9]") + "|0?0?[0-9]")),
        d = n(h + "\\." + h + "\\." + h + "\\." + h),
        f = n(i + "{1,4}"),
        g = n(n(f + "\\:" + f) + "|" + d),
        p = n(n(f + "\\:") + "{6}" + g),
        m = n("\\:\\:" + n(f + "\\:") + "{5}" + g),
        v = n(n(f) + "?\\:\\:" + n(f + "\\:") + "{4}" + g),
        y = n(n(n(f + "\\:") + "{0,1}" + f) + "?\\:\\:" + n(f + "\\:") + "{3}" + g),
        b = n(n(n(f + "\\:") + "{0,2}" + f) + "?\\:\\:" + n(f + "\\:") + "{2}" + g),
        C = n(n(n(f + "\\:") + "{0,3}" + f) + "?\\:\\:" + f + "\\:" + g),
        I = n(n(n(f + "\\:") + "{0,4}" + f) + "?\\:\\:" + g),
        w = n(n(n(f + "\\:") + "{0,5}" + f) + "?\\:\\:" + f),
        x = n(n(n(f + "\\:") + "{0,6}" + f) + "?\\:\\:"),
        A = n([p, m, v, y, b, C, I, w, x].join("|")),
        _ = n(n(l + "|" + r) + "+"),
        S = (n(A + "\\%25" + _), n(A + n("\\%25|\\%(?!" + i + "{2})") + _)),
        k = n("[vV]" + i + "+\\." + t(l, o, "[\\:]") + "+"),
        L = n("\\[" + n(S + "|" + A + "|" + k) + "\\]"),
        T = n(n(r + "|" + t(l, o)) + "*"),
        R = n(L + "|" + d + "(?!" + T + ")|" + T),
        M = n("[0-9]*"),
        P = n(n(u + "@") + "?" + R + n("\\:" + M) + "?"),
        E = n(r + "|" + t(l, o, "[\\:\\@]")),
        O = n(E + "*"),
        N = n(E + "+"),
        D = n(n(r + "|" + t(l, o, "[\\@]")) + "+"),
        B = n(n("\\/" + O) + "*"),
        j = n("\\/" + n(N + B) + "?"),
        F = n(D + B),
        H = n(N + B),
        W = "(?!" + E + ")",
        V = (n(B + "|" + j + "|" + F + "|" + H + "|" + W), n(n(E + "|" + t("[\\/\\?]", s)) + "*")),
        G = n(n(E + "|[\\/\\?]") + "*"),
        z = n(n("\\/\\/" + P + B) + "|" + j + "|" + H + "|" + W),
        Z = n(c + "\\:" + z + n("\\?" + V) + "?" + n("\\#" + G) + "?"),
        $ = n(n("\\/\\/" + P + B) + "|" + j + "|" + F + "|" + W),
        K = n($ + n("\\?" + V) + "?" + n("\\#" + G) + "?");
        return n(Z + "|" + K),
        n(c + "\\:" + z + n("\\?" + V) + "?"),
        n(n("\\/\\/(" + n("(" + u + ")@") + "?(" + R + ")" + n("\\:(" + M + ")") + "?)") + "?(" + B + "|" + j + "|" + H + "|" + W + ")"),
        n("\\?(" + V + ")"),
        n("\\#(" + G + ")"),
        n(n("\\/\\/(" + n("(" + u + ")@") + "?(" + R + ")" + n("\\:(" + M + ")") + "?)") + "?(" + B + "|" + j + "|" + F + "|" + W + ")"),
        n("\\?(" + V + ")"),
        n("\\#(" + G + ")"),
        n(n("\\/\\/(" + n("(" + u + ")@") + "?(" + R + ")" + n("\\:(" + M + ")") + "?)") + "?(" + B + "|" + j + "|" + H + "|" + W + ")"),
        n("\\?(" + V + ")"),
        n("\\#(" + G + ")"),
        n("(" + u + ")@"),
        n("\\:(" + M + ")"),
        {
            NOT_SCHEME: new RegExp(t("[^]", "[A-Za-z]", "[0-9]", "[\\+\\-\\.]"), "g"),
            NOT_USERINFO: new RegExp(t("[^\\%\\:]", l, o), "g"),
            NOT_HOST: new RegExp(t("[^\\%\\[\\]\\:]", l, o), "g"),
            NOT_PATH: new RegExp(t("[^\\%\\/\\:\\@]", l, o), "g"),
            NOT_PATH_NOSCHEME: new RegExp(t("[^\\%\\/\\@]", l, o), "g"),
            NOT_QUERY: new RegExp(t("[^\\%]", l, o, "[\\:\\@\\/\\?]", s), "g"),
            NOT_FRAGMENT: new RegExp(t("[^\\%]", l, o, "[\\:\\@\\/\\?]"), "g"),
            ESCAPE: new RegExp(t("[^]", l, o), "g"),
            UNRESERVED: new RegExp(l, "g"),
            OTHER_CHARS: new RegExp(t("[^\\%]", l, a), "g"),
            PCT_ENCODED: new RegExp(r, "g"),
            IPV4ADDRESS: new RegExp("^(" + d + ")$"),
            IPV6ADDRESS: new RegExp("^\\[?(" + A + ")" + n(n("\\%25|\\%(?!" + i + "{2})") + "(" + _ + ")") + "?\\]?$")
        }
    }
    var a = o(!1),
    s = o(!0),
    l = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try { ! i && s.
                    return && s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    c = 2147483647,
    u = /^xn--/,
    h = /[^\0-\x7E]/,
    d = /[\x2E\u3002\uFF0E\uFF61]/g,
    f = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not controller basic code point)",
        "invalid-input": "Invalid input"
    },
    g = Math.floor,
    p = String.fromCharCode;
    function m(e) {
        throw new RangeError(f[e])
    }
    function v(e, t) {
        var n = e.split("@"),
        i = "";
        n.length > 1 && (i = n[0] + "@", e = n[1]);
        var r = function(e, t) {
            for (var n = [], i = e.length; i--;) n[i] = t(e[i]);
            return n
        } ((e = e.replace(d, ".")).split("."), t).join(".");
        return i + r
    }
    function y(e) {
        for (var t = [], n = 0, i = e.length; n < i;) {
            var r = e.charCodeAt(n++);
            if (r >= 55296 && r <= 56319 && n < i) {
                var o = e.charCodeAt(n++);
                56320 == (64512 & o) ? t.push(((1023 & r) << 10) + (1023 & o) + 65536) : (t.push(r), n--)
            } else t.push(r)
        }
        return t
    }
    var b = function(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
    },
    C = function(e, t, n) {
        var i = 0;
        for (e = n ? g(e / 700) : e >> 1, e += g(e / t); e > 455; i += 36) e = g(e / 35);
        return g(i + 36 * e / (e + 38))
    },
    I = function(e) {
        var t, n = [],
        i = e.length,
        r = 0,
        o = 128,
        a = 72,
        s = e.lastIndexOf("-");
        s < 0 && (s = 0);
        for (var l = 0; l < s; ++l) e.charCodeAt(l) >= 128 && m("not-basic"),
        n.push(e.charCodeAt(l));
        for (var u = s > 0 ? s + 1 : 0; u < i;) {
            for (var h = r,
            d = 1,
            f = 36;; f += 36) {
                u >= i && m("invalid-input");
                var p = (t = e.charCodeAt(u++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36; (p >= 36 || p > g((c - r) / d)) && m("overflow"),
                r += p * d;
                var v = f <= a ? 1 : f >= a + 26 ? 26 : f - a;
                if (p < v) break;
                var y = 36 - v;
                d > g(c / y) && m("overflow"),
                d *= y
            }
            var b = n.length + 1;
            a = C(r - h, b, 0 == h),
            g(r / b) > c - o && m("overflow"),
            o += g(r / b),
            r %= b,
            n.splice(r++, 0, o)
        }
        return String.fromCodePoint.apply(String, n)
    },
    w = function(e) {
        var t = [],
        n = (e = y(e)).length,
        i = 128,
        r = 0,
        o = 72,
        a = !0,
        s = !1,
        l = void 0;
        try {
            for (var u, h = e[Symbol.iterator](); ! (a = (u = h.next()).done); a = !0) {
                var d = u.value;
                d < 128 && t.push(p(d))
            }
        } catch(e) {
            s = !0,
            l = e
        } finally {
            try { ! a && h.
                return && h.
                return ()
            } finally {
                if (s) throw l
            }
        }
        var f = t.length,
        v = f;
        for (f && t.push("-"); v < n;) {
            var I = c,
            w = !0,
            x = !1,
            A = void 0;
            try {
                for (var _, S = e[Symbol.iterator](); ! (w = (_ = S.next()).done); w = !0) {
                    var k = _.value;
                    k >= i && k < I && (I = k)
                }
            } catch(e) {
                x = !0,
                A = e
            } finally {
                try { ! w && S.
                    return && S.
                    return ()
                } finally {
                    if (x) throw A
                }
            }
            var L = v + 1;
            I - i > g((c - r) / L) && m("overflow"),
            r += (I - i) * L,
            i = I;
            var T = !0,
            R = !1,
            M = void 0;
            try {
                for (var P, E = e[Symbol.iterator](); ! (T = (P = E.next()).done); T = !0) {
                    var O = P.value;
                    if (O < i && ++r > c && m("overflow"), O == i) {
                        for (var N = r,
                        D = 36;; D += 36) {
                            var B = D <= o ? 1 : D >= o + 26 ? 26 : D - o;
                            if (N < B) break;
                            var j = N - B,
                            F = 36 - B;
                            t.push(p(b(B + j % F, 0))),
                            N = g(j / F)
                        }
                        t.push(p(b(N, 0))),
                        o = C(r, L, v == f),
                        r = 0,
                        ++v
                    }
                }
            } catch(e) {
                R = !0,
                M = e
            } finally {
                try { ! T && E.
                    return && E.
                    return ()
                } finally {
                    if (R) throw M
                }
            }++r,
            ++i
        }
        return t.join("")
    },
    x = function(e) {
        return v(e, (function(e) {
            return h.test(e) ? "xn--" + w(e) : e
        }))
    },
    A = function(e) {
        return v(e, (function(e) {
            return u.test(e) ? I(e.slice(4).toLowerCase()) : e
        }))
    },
    _ = {};
    function S(e) {
        var t = e.charCodeAt(0);
        return t < 16 ? "%0" + t.toString(16).toUpperCase() : t < 128 ? "%" + t.toString(16).toUpperCase() : t < 2048 ? "%" + (t >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase() : "%" + (t >> 12 | 224).toString(16).toUpperCase() + "%" + (t >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase()
    }
    function k(e) {
        for (var t = "",
        n = 0,
        i = e.length; n < i;) {
            var r = parseInt(e.substr(n + 1, 2), 16);
            if (r < 128) t += String.fromCharCode(r),
            n += 3;
            else if (r >= 194 && r < 224) {
                if (i - n >= 6) {
                    var o = parseInt(e.substr(n + 4, 2), 16);
                    t += String.fromCharCode((31 & r) << 6 | 63 & o)
                } else t += e.substr(n, 6);
                n += 6
            } else if (r >= 224) {
                if (i - n >= 9) {
                    var a = parseInt(e.substr(n + 4, 2), 16),
                    s = parseInt(e.substr(n + 7, 2), 16);
                    t += String.fromCharCode((15 & r) << 12 | (63 & a) << 6 | 63 & s)
                } else t += e.substr(n, 9);
                n += 9
            } else t += e.substr(n, 3),
            n += 3
        }
        return t
    }
    function L(e, t) {
        function n(e) {
            var n = k(e);
            return n.match(t.UNRESERVED) ? n: e
        }
        return e.scheme && (e.scheme = String(e.scheme).replace(t.PCT_ENCODED, n).toLowerCase().replace(t.NOT_SCHEME, "")),
        void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(t.PCT_ENCODED, n).replace(t.NOT_USERINFO, S).replace(t.PCT_ENCODED, r)),
        void 0 !== e.host && (e.host = String(e.host).replace(t.PCT_ENCODED, n).toLowerCase().replace(t.NOT_HOST, S).replace(t.PCT_ENCODED, r)),
        void 0 !== e.path && (e.path = String(e.path).replace(t.PCT_ENCODED, n).replace(e.scheme ? t.NOT_PATH: t.NOT_PATH_NOSCHEME, S).replace(t.PCT_ENCODED, r)),
        void 0 !== e.query && (e.query = String(e.query).replace(t.PCT_ENCODED, n).replace(t.NOT_QUERY, S).replace(t.PCT_ENCODED, r)),
        void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(t.PCT_ENCODED, n).replace(t.NOT_FRAGMENT, S).replace(t.PCT_ENCODED, r)),
        e
    }
    function T(e) {
        return e.replace(/^0*(.*)/, "$1") || "0"
    }
    function R(e, t) {
        var n = e.match(t.IPV4ADDRESS) || [],
        i = l(n, 2)[1];
        return i ? i.split(".").map(T).join(".") : e
    }
    function M(e, t) {
        var n = e.match(t.IPV6ADDRESS) || [],
        i = l(n, 3),
        r = i[1],
        o = i[2];
        if (r) {
            for (var a = r.toLowerCase().split("::").reverse(), s = l(a, 2), c = s[0], u = s[1], h = u ? u.split(":").map(T) : [], d = c.split(":").map(T), f = t.IPV4ADDRESS.test(d[d.length - 1]), g = f ? 7 : 8, p = d.length - g, m = Array(g), v = 0; v < g; ++v) m[v] = h[v] || d[p + v] || "";
            f && (m[g - 1] = R(m[g - 1], t));
            var y = m.reduce((function(e, t, n) {
                if (!t || "0" === t) {
                    var i = e[e.length - 1];
                    i && i.index + i.length === n ? i.length++:e.push({
                        index: n,
                        length: 1
                    })
                }
                return e
            }), []).sort((function(e, t) {
                return t.length - e.length
            }))[0],
            b = void 0;
            if (y && y.length > 1) {
                var C = m.slice(0, y.index),
                I = m.slice(y.index + y.length);
                b = C.join(":") + "::" + I.join(":")
            } else b = m.join(":");
            return o && (b += "%" + o),
            b
        }
        return e
    }
    var P = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
    E = void 0 === "".match(/(){0}/)[1];
    function O(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = {},
        i = !1 !== t.iri ? s: a;
        "suffix" === t.reference && (e = (t.scheme ? t.scheme + ":": "") + "//" + e);
        var r = e.match(P);
        if (r) {
            E ? (n.scheme = r[1], n.userinfo = r[3], n.host = r[4], n.port = parseInt(r[5], 10), n.path = r[6] || "", n.query = r[7], n.fragment = r[8], isNaN(n.port) && (n.port = r[5])) : (n.scheme = r[1] || void 0, n.userinfo = -1 !== e.indexOf("@") ? r[3] : void 0, n.host = -1 !== e.indexOf("//") ? r[4] : void 0, n.port = parseInt(r[5], 10), n.path = r[6] || "", n.query = -1 !== e.indexOf("?") ? r[7] : void 0, n.fragment = -1 !== e.indexOf("#") ? r[8] : void 0, isNaN(n.port) && (n.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? r[4] : void 0)),
            n.host && (n.host = M(R(n.host, i), i)),
            void 0 !== n.scheme || void 0 !== n.userinfo || void 0 !== n.host || void 0 !== n.port || n.path || void 0 !== n.query ? void 0 === n.scheme ? n.reference = "relative": void 0 === n.fragment ? n.reference = "absolute": n.reference = "uri": n.reference = "same-document",
            t.reference && "suffix" !== t.reference && t.reference !== n.reference && (n.error = n.error || "URI is not controller " + t.reference + " reference.");
            var o = _[(t.scheme || n.scheme || "").toLowerCase()];
            if (t.unicodeSupport || o && o.unicodeSupport) L(n, i);
            else {
                if (n.host && (t.domainHost || o && o.domainHost)) try {
                    n.host = x(n.host.replace(i.PCT_ENCODED, k).toLowerCase())
                } catch(e) {
                    n.error = n.error || "Host's domain name can not be converted to ASCII via punycode: " + e
                }
                L(n, a)
            }
            o && o.parse && o.parse(n, t)
        } else n.error = n.error || "URI can not be parsed.";
        return n
    }
    function N(e, t) {
        var n = !1 !== t.iri ? s: a,
        i = [];
        return void 0 !== e.userinfo && (i.push(e.userinfo), i.push("@")),
        void 0 !== e.host && i.push(M(R(String(e.host), n), n).replace(n.IPV6ADDRESS, (function(e, t, n) {
            return "[" + t + (n ? "%25" + n: "") + "]"
        }))),
        "number" == typeof e.port && (i.push(":"), i.push(e.port.toString(10))),
        i.length ? i.join("") : void 0
    }
    var D = /^\.\.?\//,
    B = /^\/\.(\/|$)/,
    j = /^\/\.\.(\/|$)/,
    F = /^\/?(?:.|\n)*?(?=\/|$)/;
    function H(e) {
        for (var t = []; e.length;) if (e.match(D)) e = e.replace(D, "");
        else if (e.match(B)) e = e.replace(B, "/");
        else if (e.match(j)) e = e.replace(j, "/"),
        t.pop();
        else if ("." === e || ".." === e) e = "";
        else {
            var n = e.match(F);
            if (!n) throw new Error("Unexpected dot segment condition");
            var i = n[0];
            e = e.slice(i.length),
            t.push(i)
        }
        return t.join("")
    }
    function W(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.iri ? s: a,
        i = [],
        r = _[(t.scheme || e.scheme || "").toLowerCase()];
        if (r && r.serialize && r.serialize(e, t), e.host) if (n.IPV6ADDRESS.test(e.host));
        else if (t.domainHost || r && r.domainHost) try {
            e.host = t.iri ? A(e.host) : x(e.host.replace(n.PCT_ENCODED, k).toLowerCase())
        } catch(n) {
            e.error = e.error || "Host's domain name can not be converted to " + (t.iri ? "Unicode": "ASCII") + " via punycode: " + n
        }
        L(e, n),
        "suffix" !== t.reference && e.scheme && (i.push(e.scheme), i.push(":"));
        var o = N(e, t);
        if (void 0 !== o && ("suffix" !== t.reference && i.push("//"), i.push(o), e.path && "/" !== e.path.charAt(0) && i.push("/")), void 0 !== e.path) {
            var l = e.path;
            t.absolutePath || r && r.absolutePath || (l = H(l)),
            void 0 === o && (l = l.replace(/^\/\//, "/%2F")),
            i.push(l)
        }
        return void 0 !== e.query && (i.push("?"), i.push(e.query)),
        void 0 !== e.fragment && (i.push("#"), i.push(e.fragment)),
        i.join("")
    }
    function V(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments[3],
        r = {};
        return i || (e = O(W(e, n), n), t = O(W(t, n), n)),
        !(n = n || {}).tolerant && t.scheme ? (r.scheme = t.scheme, r.userinfo = t.userinfo, r.host = t.host, r.port = t.port, r.path = H(t.path || ""), r.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (r.userinfo = t.userinfo, r.host = t.host, r.port = t.port, r.path = H(t.path || ""), r.query = t.query) : (t.path ? ("/" === t.path.charAt(0) ? r.path = H(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? r.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path: r.path = t.path: r.path = "/" + t.path, r.path = H(r.path)), r.query = t.query) : (r.path = e.path, void 0 !== t.query ? r.query = t.query: r.query = e.query), r.userinfo = e.userinfo, r.host = e.host, r.port = e.port), r.scheme = e.scheme),
        r.fragment = t.fragment,
        r
    }
    function G(e, t) {
        return e && e.toString().replace(t && t.iri ? s.PCT_ENCODED: a.PCT_ENCODED, k)
    }
    var z = {
        scheme: "http",
        domainHost: !0,
        parse: function(e, t) {
            return e.host || (e.error = e.error || "HTTP URIs must have controller host."),
            e
        },
        serialize: function(e, t) {
            return e.port !== ("https" !== String(e.scheme).toLowerCase() ? 80 : 443) && "" !== e.port || (e.port = void 0),
            e.path || (e.path = "/"),
            e
        }
    },
    Z = {
        scheme: "https",
        domainHost: z.domainHost,
        parse: z.parse,
        serialize: z.serialize
    },
    $ = {},
    K = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",
    X = "[0-9A-Fa-f]",
    Y = n(n("%[EFef]" + X + "%" + X + X + "%" + X + X) + "|" + n("%[89A-Fa-f]" + X + "%" + X + X) + "|" + n("%" + X + X)),
    U = t("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", '[\\"\\\\]'),
    J = new RegExp(K, "g"),
    q = new RegExp(Y, "g"),
    Q = new RegExp(t("[^]", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "[\\.]", '[\\"]', U), "g"),
    ee = new RegExp(t("[^]", K, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"), "g"),
    te = ee;
    function ne(e) {
        var t = k(e);
        return t.match(J) ? t: e
    }
    var ie = {
        scheme: "mailto",
        parse: function(e, t) {
            var n = e,
            i = n.to = n.path ? n.path.split(",") : [];
            if (n.path = void 0, n.query) {
                for (var r = !1,
                o = {},
                a = n.query.split("&"), s = 0, l = a.length; s < l; ++s) {
                    var c = a[s].split("=");
                    switch (c[0]) {
                    case "to":
                        for (var u = c[1].split(","), h = 0, d = u.length; h < d; ++h) i.push(u[h]);
                        break;
                    case "subject":
                        n.subject = G(c[1], t);
                        break;
                    case "body":
                        n.body = G(c[1], t);
                        break;
                    default:
                        r = !0,
                        o[G(c[0], t)] = G(c[1], t)
                    }
                }
                r && (n.headers = o)
            }
            n.query = void 0;
            for (var f = 0,
            g = i.length; f < g; ++f) {
                var p = i[f].split("@");
                if (p[0] = G(p[0]), t.unicodeSupport) p[1] = G(p[1], t).toLowerCase();
                else try {
                    p[1] = x(G(p[1], t).toLowerCase())
                } catch(e) {
                    n.error = n.error || "Email address's domain name can not be converted to ASCII via punycode: " + e
                }
                i[f] = p.join("@")
            }
            return n
        },
        serialize: function(e, t) {
            var n, i = e,
            o = null != (n = e.to) ? n instanceof Array ? n: "number" != typeof n.length || n.split || n.setInterval || n.call ? [n] : Array.prototype.slice.call(n) : [];
            if (o) {
                for (var a = 0,
                s = o.length; a < s; ++a) {
                    var l = String(o[a]),
                    c = l.lastIndexOf("@"),
                    u = l.slice(0, c).replace(q, ne).replace(q, r).replace(Q, S),
                    h = l.slice(c + 1);
                    try {
                        h = t.iri ? A(h) : x(G(h, t).toLowerCase())
                    } catch(e) {
                        i.error = i.error || "Email address's domain name can not be converted to " + (t.iri ? "Unicode": "ASCII") + " via punycode: " + e
                    }
                    o[a] = u + "@" + h
                }
                i.path = o.join(",")
            }
            var d = e.headers = e.headers || {};
            e.subject && (d.subject = e.subject),
            e.body && (d.body = e.body);
            var f = [];
            for (var g in d) d[g] !== $[g] && f.push(g.replace(q, ne).replace(q, r).replace(ee, S) + "=" + d[g].replace(q, ne).replace(q, r).replace(te, S));
            return f.length && (i.query = f.join("&")),
            i
        }
    },
    re = /^([^\:]+)\:(.*)/,
    oe = {
        scheme: "urn",
        parse: function(e, t) {
            var n = e.path && e.path.match(re),
            i = e;
            if (n) {
                var r = t.scheme || i.scheme || "urn",
                o = n[1].toLowerCase(),
                a = n[2],
                s = r + ":" + (t.nid || o),
                l = _[s];
                i.nid = o,
                i.nss = a,
                i.path = void 0,
                l && (i = l.parse(i, t))
            } else i.error = i.error || "URN can not be parsed.";
            return i
        },
        serialize: function(e, t) {
            var n = t.scheme || e.scheme || "urn",
            i = e.nid,
            r = n + ":" + (t.nid || i),
            o = _[r];
            o && (e = o.serialize(e, t));
            var a = e,
            s = e.nss;
            return a.path = (i || t.nid) + ":" + s,
            a
        }
    },
    ae = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
    se = {
        scheme: "urn:uuid",
        parse: function(e, t) {
            var n = e;
            return n.uuid = n.nss,
            n.nss = void 0,
            t.tolerant || n.uuid && n.uuid.match(ae) || (n.error = n.error || "UUID is not valid."),
            n
        },
        serialize: function(e, t) {
            var n = e;
            return n.nss = (e.uuid || "").toLowerCase(),
            n
        }
    };
    _[z.scheme] = z,
    _[Z.scheme] = Z,
    _[ie.scheme] = ie,
    _[oe.scheme] = oe,
    _[se.scheme] = se,
    e.SCHEMES = _,
    e.pctEncChar = S,
    e.pctDecChars = k,
    e.parse = O,
    e.removeDotSegments = H,
    e.serialize = W,
    e.resolveComponents = V,
    e.resolve = function(e, t, n) {
        var i = function(e, t) {
            var n = e;
            if (t) for (var i in t) n[i] = t[i];
            return n
        } ({
            scheme: "null"
        },
        n);
        return W(V(O(e, i), O(t, i), i, !0), i)
    },
    e.normalize = function(e, t) {
        return "string" == typeof e ? e = W(O(e, t), t) : "object" === i(e) && (e = O(W(e, t), t)),
        e
    },
    e.equal = function(e, t, n) {
        return "string" == typeof e ? e = W(O(e, n), n) : "object" === i(e) && (e = W(e, n)),
        "string" == typeof t ? t = W(O(t, n), n) : "object" === i(t) && (t = W(t, n)),
        e === t
    },
    e.escapeComponent = function(e, t) {
        return e && e.toString().replace(t && t.iri ? s.ESCAPE: a.ESCAPE, S)
    },
    e.unescapeComponent = G,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
} (t)
},
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        for (var t, n = 0,
        i = e.length,
        r = 0; r < i;) n++,
        (t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < i && 56320 == (64512 & (t = e.charCodeAt(r))) && r++;
        return n
    }
},
function(e, t, n) {
    "use strict";
    var i = e.exports = function(e, t, n) {
        "function" == typeof t && (n = t, t = {}),
        function e(t, n, r, o, a, s, l, c, u, h) {
            if (o && "object" == typeof o && !Array.isArray(o)) {
                for (var d in n(o, a, s, l, c, u, h), o) {
                    var f = o[d];
                    if (Array.isArray(f)) {
                        if (d in i.arrayKeywords) for (var g = 0; g < f.length; g++) e(t, n, r, f[g], a + "/" + d + "/" + g, s, a, d, o, g)
                    } else if (d in i.propsKeywords) {
                        if (f && "object" == typeof f) for (var p in f) e(t, n, r, f[p], a + "/" + d + "/" + p.replace(/~/g, "~0").replace(/\//g, "~1"), s, a, d, o, p)
                    } else(d in i.keywords || t.allKeys && !(d in i.skipKeywords)) && e(t, n, r, f, a + "/" + d, s, a, d, o)
                }
                r(o, a, s, l, c, u, h)
            }
        } (t, "function" == typeof(n = t.cb || n) ? n: n.pre ||
        function() {},
        n.post ||
        function() {},
        e, "", e)
    };
    i.keywords = {
        additionalItems: !0,
        items: !0,
        contains: !0,
        additionalProperties: !0,
        propertyNames: !0,
        not: !0
    },
    i.arrayKeywords = {
        items: !0,
        allOf: !0,
        anyOf: !0,
        oneOf: !0
    },
    i.propsKeywords = {
        definitions: !0,
        properties: !0,
        patternProperties: !0,
        dependencies: !0
    },
    i.skipKeywords = {
    default:
        !0,
        enum: !0,
        const: !0,
        required: !0,
        maximum: !0,
        minimum: !0,
        exclusiveMaximum: !0,
        exclusiveMinimum: !0,
        multipleOf: !0,
        maxLength: !0,
        minLength: !0,
        pattern: !0,
        format: !0,
        maxItems: !0,
        minItems: !0,
        uniqueItems: !0,
        maxProperties: !0,
        minProperties: !0
    }
},
function(e, t, n) {
    "use strict";
    var i = e.exports = function() {
        this._cache = {}
    };
    i.prototype.put = function(e, t) {
        this._cache[e] = t
    },
    i.prototype.get = function(e) {
        return this._cache[e]
    },
    i.prototype.del = function(e) {
        delete this._cache[e]
    },
    i.prototype.clear = function() {
        this._cache = {}
    }
},
function(e, t, n) {
    "use strict";
    var i = n(7),
    r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
    o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    a = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i,
    s = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
    l = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/ ? ] | %[0 - 9a - f] {
        2
    }) * ) ? ( ? :# ( ? :[a - z0 - 9\ - ._~ ! $ & '()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,c=/^(?:(?:[^\x00-\x20"' < >%\\ ^ ` { |
    }] | %[0 - 9a - f] {
        2
    }) | \ { [ + #. / ; ? &=, !@ | ] ? ( ? :[a - z0 - 9_] | %[0 - 9a - f] {
            2
        }) + ( ? ::[1 - 9][0 - 9] {
            0,
            3
        } | \ * ) ? ( ? :, ( ? :[a - z0 - 9_] | %[0 - 9a - f] {
            2
        }) + ( ? ::[1 - 9][0 - 9] {
            0,
            3
        } | \ * ) ? ) * \
    }) * $ / i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, h = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, d = /^(?:\/(?:[^~/] | ~0 | ~1) * ) * $ / , f = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, g = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/] | ~0 | ~1) * ) * ) $ / ;
    function p(e) {
        return e = "full" == e ? "full": "fast",
        i.copy(p[e])
    }
    function m(e) {
        var t = e.match(r);
        if (!t) return ! 1;
        var n = +t[1],
        i = +t[2],
        a = +t[3];
        return i >= 1 && i <= 12 && a >= 1 && a <= (2 == i &&
        function(e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
        } (n) ? 29 : o[i])
    }
    function v(e, t) {
        var n = e.match(a);
        if (!n) return ! 1;
        var i = n[1],
        r = n[2],
        o = n[3],
        s = n[5];
        return (i <= 23 && r <= 59 && o <= 59 || 23 == i && 59 == r && 60 == o) && (!t || s)
    }
    e.exports = p, p.fast = {
        date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
        time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
        "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
        uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
        "uri-reference": /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
        "uri-template": c,
        url: u,
        email: /^[a-z0-9.!#$%&'*+/ = ?^_` { |
        }~ - ] + @ [a - z0 - 9]( ? :[a - z0 - 9 - ] {
            0,
            61
        } [a - z0 - 9]) ? ( ? :\. [a - z0 - 9]( ? :[a - z0 - 9 - ] {
            0,
            61
        } [a - z0 - 9]) ? ) * $ / i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: I, uuid: h, "json-pointer": d, "json-pointer-uri-fragment": f, "relative-json-pointer": g
    },
    p.full = {
        date: m,
        time: v,
        "date-time": function(e) {
            var t = e.split(y);
            return 2 == t.length && m(t[0]) && v(t[1], !0)
        },
        uri: function(e) {
            return b.test(e) && l.test(e)
        },
        "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/ ? ] | %[0 - 9a - f] {
            2
        }) * ) ? ( ? :# ( ? :[a - z0 - 9\ - ._~ ! $ & '"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":c,url:u,email:/^[a-z0-9!#$%&' * +/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/ = ?^_` { |
        }~ - ] + ) * @ ( ? :[a - z0 - 9]( ? :[a - z0 - 9 - ] * [a - z0 - 9]) ? \.) + [a - z0 - 9]( ? :[a - z0 - 9 - ] * [a - z0 - 9]) ? $ / i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: I, uuid: h, "json-pointer": d, "json-pointer-uri-fragment": f, "relative-json-pointer": g
    };
    var y = /t|\s/i,
    b = /\/|:/,
    C = /[^\\]\\Z/;
    function I(e) {
        if (C.test(e)) return ! 1;
        try {
            return new RegExp(e),
            !0
        } catch(e) {
            return ! 1
        }
    }
},
function(e, t, n) {
    "use strict";
    var i = n(52),
    r = n(7).toHash;
    e.exports = function() {
        var e = [{
            type: "number",
            rules: [{
                maximum: ["exclusiveMaximum"]
            },
            {
                minimum: ["exclusiveMinimum"]
            },
            "multipleOf", "format"]
        },
        {
            type: "string",
            rules: ["maxLength", "minLength", "pattern", "format"]
        },
        {
            type: "array",
            rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
        },
        {
            type: "object",
            rules: ["maxProperties", "minProperties", "required", "dependencies", "propertyNames", {
                properties: ["additionalProperties", "patternProperties"]
            }]
        },
        {
            rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"]
        }],
        t = ["type", "$comment"];
        return e.all = r(t),
        e.types = r(["number", "integer", "string", "array", "object", "boolean", "null"]),
        e.forEach((function(n) {
            n.rules = n.rules.map((function(n) {
                var r;
                if ("object" == typeof n) {
                    var o = Object.keys(n)[0];
                    r = n[o],
                    n = o,
                    r.forEach((function(n) {
                        t.push(n),
                        e.all[n] = !0
                    }))
                }
                return t.push(n),
                e.all[n] = {
                    keyword: n,
                    code: i[n],
                    implements: r
                }
            })),
            e.all.$comment = {
                keyword: "$comment",
                code: i.$comment
            },
            n.type && (e.types[n.type] = n)
        })),
        e.keywords = r(t.concat(["$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"])),
        e.custom = {},
        e
    }
},
function(e, t, n) {
    "use strict";
    e.exports = {
        $ref: n(53),
        allOf: n(54),
        anyOf: n(55),
        $comment: n(56),
        const: n(57),
        contains: n(58),
        dependencies: n(59),
        enum: n(60),
        format: n(61),
        if: n(62),
        items: n(63),
        maximum: n(28),
        minimum: n(28),
        maxItems: n(29),
        minItems: n(29),
        maxLength: n(30),
        minLength: n(30),
        maxProperties: n(31),
        minProperties: n(31),
        multipleOf: n(64),
        not: n(65),
        oneOf: n(66),
        pattern: n(67),
        properties: n(68),
        propertyNames: n(69),
        required: n(70),
        uniqueItems: n(71),
        validate: n(27)
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i, r, o = " ",
        a = e.level,
        s = e.dataLevel,
        l = e.schema[t],
        c = e.errSchemaPath + "/" + t,
        u = !e.opts.allErrors,
        h = "data" + (s || ""),
        d = "valid" + a;
        if ("#" == l || "#/" == l) e.isRoot ? (i = e.async, r = "validate") : (i = !0 === e.root.schema.$async, r = "root.refVal[0]");
        else {
            var f = e.resolveRef(e.baseId, l, e.isRoot);
            if (void 0 === f) {
                var g = e.MissingRefError.message(e.baseId, l);
                if ("fail" == e.opts.missingRefs) {
                    e.logger.error(g),
                    (y = y || []).push(o),
                    o = "",
                    !1 !== e.createErrors ? (o += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { ref: '" + e.util.escapeQuotes(l) + "' } ", !1 !== e.opts.messages && (o += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(l) + "' "), e.opts.verbose && (o += " , schema: " + e.util.toQuotedString(l) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), o += " } ") : o += " {} ";
                    var p = o;
                    o = y.pop(),
                    !e.compositeRule && u ? e.async ? o += " throw new ValidationError([" + p + "]); ": o += " validate.errors = [" + p + "]; return false; ": o += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
                    u && (o += " if (false) { ")
                } else {
                    if ("ignore" != e.opts.missingRefs) throw new e.MissingRefError(e.baseId, l, g);
                    e.logger.warn(g),
                    u && (o += " if (true) { ")
                }
            } else if (f.inline) {
                var m = e.util.copy(e);
                m.level++;
                var v = "valid" + m.level;
                m.schema = f.schema,
                m.schemaPath = "",
                m.errSchemaPath = l,
                o += " " + e.validate(m).replace(/validate\.schema/g, f.code) + " ",
                u && (o += " if (" + v + ") { ")
            } else i = !0 === f.$async || e.async && !1 !== f.$async,
            r = f.code
        }
        if (r) {
            var y; (y = y || []).push(o),
            o = "",
            e.opts.passContext ? o += " " + r + ".call(this, ": o += " " + r + "( ",
            o += " " + h + ", (dataPath || '')",
            '""' != e.errorPath && (o += " + " + e.errorPath);
            var b = o += " , " + (s ? "data" + (s - 1 || "") : "parentData") + " , " + (s ? e.dataPathArr[s] : "parentDataProperty") + ", rootData)  ";
            if (o = y.pop(), i) {
                if (!e.async) throw new Error("async schema referenced by sync schema");
                u && (o += " var " + d + "; "),
                o += " try { await " + b + "; ",
                u && (o += " " + d + " = true; "),
                o += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ",
                u && (o += " " + d + " = false; "),
                o += " } ",
                u && (o += " if (" + d + ") { ")
            } else o += " if (!" + b + ") { if (vErrors === null) vErrors = " + r + ".errors; else vErrors = vErrors.concat(" + r + ".errors); errors = vErrors.length; } ",
            u && (o += " else { ")
        }
        return o
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.schema[t],
        o = e.schemaPath + e.util.getProperty(t),
        a = e.errSchemaPath + "/" + t,
        s = !e.opts.allErrors,
        l = e.util.copy(e),
        c = "";
        l.level++;
        var u = "valid" + l.level,
        h = l.baseId,
        d = !0,
        f = r;
        if (f) for (var g, p = -1,
        m = f.length - 1; p < m;) g = f[p += 1],
        (e.opts.strictKeywords ? "object" == typeof g && Object.keys(g).length > 0 : e.util.schemaHasRules(g, e.RULES.all)) && (d = !1, l.schema = g, l.schemaPath = o + "[" + p + "]", l.errSchemaPath = a + "/" + p, i += "  " + e.validate(l) + " ", l.baseId = h, s && (i += " if (" + u + ") { ", c += "}"));
        return s && (i += d ? " if (true) { ": " " + c.slice(0, -1) + " "),
        i = e.util.cleanUpCode(i)
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "valid" + r,
        d = "errs__" + r,
        f = e.util.copy(e),
        g = "";
        f.level++;
        var p = "valid" + f.level;
        if (a.every((function(t) {
            return e.opts.strictKeywords ? "object" == typeof t && Object.keys(t).length > 0 : e.util.schemaHasRules(t, e.RULES.all)
        }))) {
            var m = f.baseId;
            i += " var " + d + " = errors; var " + h + " = false;  ";
            var v = e.compositeRule;
            e.compositeRule = f.compositeRule = !0;
            var y = a;
            if (y) for (var b, C = -1,
            I = y.length - 1; C < I;) b = y[C += 1],
            f.schema = b,
            f.schemaPath = s + "[" + C + "]",
            f.errSchemaPath = l + "/" + C,
            i += "  " + e.validate(f) + " ",
            f.baseId = m,
            i += " " + h + " = " + h + " || " + p + "; if (!" + h + ") { ",
            g += "}";
            e.compositeRule = f.compositeRule = v,
            i += " " + g + " if (!" + h + ") {   var err =   ",
            !1 !== e.createErrors ? (i += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (i += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ",
            i += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
            !e.compositeRule && c && (e.async ? i += " throw new ValidationError(vErrors); ": i += " validate.errors = vErrors; return false; "),
            i += " } else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } ",
            e.opts.allErrors && (i += " } "),
            i = e.util.cleanUpCode(i)
        } else c && (i += " if (true) { ");
        return i
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.schema[t],
        o = e.errSchemaPath + "/" + t,
        a = (e.opts.allErrors, e.util.toQuotedString(r));
        return ! 0 === e.opts.$comment ? i += " console.log(" + a + ");": "function" == typeof e.opts.$comment && (i += " self._opts.$comment(" + a + ", " + e.util.toQuotedString(o) + ", validate.root.schema);"),
        i
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "valid" + r,
        d = e.opts.$data && a && a.$data;
        d && (i += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; "),
        d || (i += " var schema" + r + " = validate.schema" + s + ";"),
        i += "var " + h + " = equal(" + u + ", schema" + r + "); if (!" + h + ") {   ";
        var f = f || [];
        f.push(i),
        i = "",
        !1 !== e.createErrors ? (i += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { allowedValue: schema" + r + " } ", !1 !== e.opts.messages && (i += " , message: 'should be equal to constant' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ";
        var g = i;
        return i = f.pop(),
        !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + g + "]); ": i += " validate.errors = [" + g + "]; return false; ": i += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
        i += " }",
        c && (i += " else { "),
        i
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "valid" + r,
        d = "errs__" + r,
        f = e.util.copy(e);
        f.level++;
        var g = "valid" + f.level,
        p = "i" + r,
        m = f.dataLevel = e.dataLevel + 1,
        v = "data" + m,
        y = e.baseId,
        b = e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 : e.util.schemaHasRules(a, e.RULES.all);
        if (i += "var " + d + " = errors;var " + h + ";", b) {
            var C = e.compositeRule;
            e.compositeRule = f.compositeRule = !0,
            f.schema = a,
            f.schemaPath = s,
            f.errSchemaPath = l,
            i += " var " + g + " = false; for (var " + p + " = 0; " + p + " < " + u + ".length; " + p + "++) { ",
            f.errorPath = e.util.getPathExpr(e.errorPath, p, e.opts.jsonPointers, !0);
            var I = u + "[" + p + "]";
            f.dataPathArr[m] = p;
            var w = e.validate(f);
            f.baseId = y,
            e.util.varOccurences(w, v) < 2 ? i += " " + e.util.varReplace(w, v, I) + " ": i += " var " + v + " = " + I + "; " + w + " ",
            i += " if (" + g + ") break; }  ",
            e.compositeRule = f.compositeRule = C,
            i += "  if (!" + g + ") {"
        } else i += " if (" + u + ".length == 0) {";
        var x = x || [];
        x.push(i),
        i = "",
        !1 !== e.createErrors ? (i += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (i += " , message: 'should contain controller valid item' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ";
        var A = i;
        return i = x.pop(),
        !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + A + "]); ": i += " validate.errors = [" + A + "]; return false; ": i += " var err = " + A + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
        i += " } else { ",
        b && (i += "  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } "),
        e.opts.allErrors && (i += " } "),
        i = e.util.cleanUpCode(i)
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "errs__" + r,
        d = e.util.copy(e),
        f = "";
        d.level++;
        var g = "valid" + d.level,
        p = {},
        m = {},
        v = e.opts.ownProperties;
        for (I in a) {
            var y = a[I],
            b = Array.isArray(y) ? m: p;
            b[I] = y
        }
        i += "var " + h + " = errors;";
        var C = e.errorPath;
        for (var I in i += "var missing" + r + ";",
        m) if ((b = m[I]).length) {
            if (i += " if ( " + u + e.util.getProperty(I) + " !== undefined ", v && (i += " && Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(I) + "') "), c) {
                i += " && ( ";
                var w = b;
                if (w) for (var x = -1,
                A = w.length - 1; x < A;) R = w[x += 1],
                x && (i += " || "),
                i += " ( ( " + (O = u + (E = e.util.getProperty(R))) + " === undefined ",
                v && (i += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(R) + "') "),
                i += ") && (missing" + r + " = " + e.util.toQuotedString(e.opts.jsonPointers ? R: E) + ") ) ";
                i += ")) {  ";
                var _ = "missing" + r,
                S = "' + " + _ + " + '";
                e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(C, _, !0) : C + " + " + _);
                var k = k || [];
                k.push(i),
                i = "",
                !1 !== e.createErrors ? (i += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { property: '" + e.util.escapeQuotes(I) + "', missingProperty: '" + S + "', depsCount: " + b.length + ", deps: '" + e.util.escapeQuotes(1 == b.length ? b[0] : b.join(", ")) + "' } ", !1 !== e.opts.messages && (i += " , message: 'should have ", 1 == b.length ? i += "property " + e.util.escapeQuotes(b[0]) : i += "properties " + e.util.escapeQuotes(b.join(", ")), i += " when property " + e.util.escapeQuotes(I) + " is present' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ";
                var L = i;
                i = k.pop(),
                !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + L + "]); ": i += " validate.errors = [" + L + "]; return false; ": i += " var err = " + L + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
            } else {
                i += " ) { ";
                var T = b;
                if (T) for (var R, M = -1,
                P = T.length - 1; M < P;) {
                    R = T[M += 1];
                    var E = e.util.getProperty(R),
                    O = (S = e.util.escapeQuotes(R), u + E);
                    e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(C, R, e.opts.jsonPointers)),
                    i += " if ( " + O + " === undefined ",
                    v && (i += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(R) + "') "),
                    i += ") {  var err =   ",
                    !1 !== e.createErrors ? (i += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { property: '" + e.util.escapeQuotes(I) + "', missingProperty: '" + S + "', depsCount: " + b.length + ", deps: '" + e.util.escapeQuotes(1 == b.length ? b[0] : b.join(", ")) + "' } ", !1 !== e.opts.messages && (i += " , message: 'should have ", 1 == b.length ? i += "property " + e.util.escapeQuotes(b[0]) : i += "properties " + e.util.escapeQuotes(b.join(", ")), i += " when property " + e.util.escapeQuotes(I) + " is present' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ",
                    i += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
                }
            }
            i += " }   ",
            c && (f += "}", i += " else { ")
        }
        e.errorPath = C;
        var N = d.baseId;
        for (var I in p) y = p[I],
        (e.opts.strictKeywords ? "object" == typeof y && Object.keys(y).length > 0 : e.util.schemaHasRules(y, e.RULES.all)) && (i += " " + g + " = true; if ( " + u + e.util.getProperty(I) + " !== undefined ", v && (i += " && Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(I) + "') "), i += ") { ", d.schema = y, d.schemaPath = s + e.util.getProperty(I), d.errSchemaPath = l + "/" + e.util.escapeFragment(I), i += "  " + e.validate(d) + " ", d.baseId = N, i += " }  ", c && (i += " if (" + g + ") { ", f += "}"));
        return c && (i += "   " + f + " if (" + h + " == errors) {"),
        i = e.util.cleanUpCode(i)
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "valid" + r,
        d = e.opts.$data && a && a.$data;
        d && (i += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ");
        var f = "i" + r,
        g = "schema" + r;
        d || (i += " var " + g + " = validate.schema" + s + ";"),
        i += "var " + h + ";",
        d && (i += " if (schema" + r + " === undefined) " + h + " = true; else if (!Array.isArray(schema" + r + ")) " + h + " = false; else {"),
        i += h + " = false;for (var " + f + "=0; " + f + "<" + g + ".length; " + f + "++) if (equal(" + u + ", " + g + "[" + f + "])) { " + h + " = true; break; }",
        d && (i += "  }  "),
        i += " if (!" + h + ") {   ";
        var p = p || [];
        p.push(i),
        i = "",
        !1 !== e.createErrors ? (i += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { allowedValues: schema" + r + " } ", !1 !== e.opts.messages && (i += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ";
        var m = i;
        return i = p.pop(),
        !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + m + "]); ": i += " validate.errors = [" + m + "]; return false; ": i += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
        i += " }",
        c && (i += " else { "),
        i
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || "");
        if (!1 === e.opts.format) return c && (i += " if (true) { "),
        i;
        var h, d = e.opts.$data && a && a.$data;
        d ? (i += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ", h = "schema" + r) : h = a;
        var f = e.opts.unknownFormats,
        g = Array.isArray(f);
        if (d) i += " var " + (p = "format" + r) + " = formats[" + h + "]; var " + (m = "isObject" + r) + " = typeof " + p + " == 'object' && !(" + p + " instanceof RegExp) && " + p + ".validate; var " + (v = "formatType" + r) + " = " + m + " && " + p + ".type || 'string'; if (" + m + ") { ",
        e.async && (i += " var async" + r + " = " + p + ".async; "),
        i += " " + p + " = " + p + ".validate; } if (  ",
        d && (i += " (" + h + " !== undefined && typeof " + h + " != 'string') || "),
        i += " (",
        "ignore" != f && (i += " (" + h + " && !" + p + " ", g && (i += " && self._opts.unknownFormats.indexOf(" + h + ") == -1 "), i += ") || "),
        i += " (" + p + " && " + v + " == '" + n + "' && !(typeof " + p + " == 'function' ? ",
        e.async ? i += " (async" + r + " ? await " + p + "(" + u + ") : " + p + "(" + u + ")) ": i += " " + p + "(" + u + ") ",
        i += " : " + p + ".test(" + u + "))))) {";
        else {
            var p;
            if (! (p = e.formats[a])) {
                if ("ignore" == f) return e.logger.warn('unknown format "' + a + '" ignored in schema at path "' + e.errSchemaPath + '"'),
                c && (i += " if (true) { "),
                i;
                if (g && f.indexOf(a) >= 0) return c && (i += " if (true) { "),
                i;
                throw new Error('unknown format "' + a + '" is used in schema at path "' + e.errSchemaPath + '"')
            }
            var m, v = (m = "object" == typeof p && !(p instanceof RegExp) && p.validate) && p.type || "string";
            if (m) {
                var y = !0 === p.async;
                p = p.validate
            }
            if (v != n) return c && (i += " if (true) { "),
            i;
            if (y) {
                if (!e.async) throw new Error("async format in sync schema");
                i += " if (!(await " + (b = "formats" + e.util.getProperty(a) + ".validate") + "(" + u + "))) { "
            } else {
                i += " if (! ";
                var b = "formats" + e.util.getProperty(a);
                m && (b += ".validate"),
                i += "function" == typeof p ? " " + b + "(" + u + ") ": " " + b + ".test(" + u + ") ",
                i += ") { "
            }
        }
        var C = C || [];
        C.push(i),
        i = "",
        !1 !== e.createErrors ? (i += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { format:  ", i += d ? "" + h: "" + e.util.toQuotedString(a), i += "  } ", !1 !== e.opts.messages && (i += " , message: 'should match format \"", i += d ? "' + " + h + " + '": "" + e.util.escapeQuotes(a), i += "\"' "), e.opts.verbose && (i += " , schema:  ", i += d ? "validate.schema" + s: "" + e.util.toQuotedString(a), i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ";
        var I = i;
        return i = C.pop(),
        !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + I + "]); ": i += " validate.errors = [" + I + "]; return false; ": i += " var err = " + I + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
        i += " } ",
        c && (i += " else { "),
        i
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "valid" + r,
        d = "errs__" + r,
        f = e.util.copy(e);
        f.level++;
        var g = "valid" + f.level,
        p = e.schema.then,
        m = e.schema.
        else,
        v = void 0 !== p && (e.opts.strictKeywords ? "object" == typeof p && Object.keys(p).length > 0 : e.util.schemaHasRules(p, e.RULES.all)),
        y = void 0 !== m && (e.opts.strictKeywords ? "object" == typeof m && Object.keys(m).length > 0 : e.util.schemaHasRules(m, e.RULES.all)),
        b = f.baseId;
        if (v || y) {
            var C;
            f.createErrors = !1,
            f.schema = a,
            f.schemaPath = s,
            f.errSchemaPath = l,
            i += " var " + d + " = errors; var " + h + " = true;  ";
            var I = e.compositeRule;
            e.compositeRule = f.compositeRule = !0,
            i += "  " + e.validate(f) + " ",
            f.baseId = b,
            f.createErrors = !0,
            i += "  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }  ",
            e.compositeRule = f.compositeRule = I,
            v ? (i += " if (" + g + ") {  ", f.schema = e.schema.then, f.schemaPath = e.schemaPath + ".then", f.errSchemaPath = e.errSchemaPath + "/then", i += "  " + e.validate(f) + " ", f.baseId = b, i += " " + h + " = " + g + "; ", v && y ? i += " var " + (C = "ifClause" + r) + " = 'then'; ": C = "'then'", i += " } ", y && (i += " else { ")) : i += " if (!" + g + ") { ",
            y && (f.schema = e.schema.
            else, f.schemaPath = e.schemaPath + ".else", f.errSchemaPath = e.errSchemaPath + "/else", i += "  " + e.validate(f) + " ", f.baseId = b, i += " " + h + " = " + g + "; ", v && y ? i += " var " + (C = "ifClause" + r) + " = 'else'; ": C = "'else'", i += " } "),
            i += " if (!" + h + ") {   var err =   ",
            !1 !== e.createErrors ? (i += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { failingKeyword: " + C + " } ", !1 !== e.opts.messages && (i += " , message: 'should match \"' + " + C + " + '\" schema' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ",
            i += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
            !e.compositeRule && c && (e.async ? i += " throw new ValidationError(vErrors); ": i += " validate.errors = vErrors; return false; "),
            i += " }   ",
            c && (i += " else { "),
            i = e.util.cleanUpCode(i)
        } else c && (i += " if (true) { ");
        return i
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "valid" + r,
        d = "errs__" + r,
        f = e.util.copy(e),
        g = "";
        f.level++;
        var p = "valid" + f.level,
        m = "i" + r,
        v = f.dataLevel = e.dataLevel + 1,
        y = "data" + v,
        b = e.baseId;
        if (i += "var " + d + " = errors;var " + h + ";", Array.isArray(a)) {
            var C = e.schema.additionalItems;
            if (!1 === C) {
                i += " " + h + " = " + u + ".length <= " + a.length + "; ";
                var I = l;
                l = e.errSchemaPath + "/additionalItems",
                i += "  if (!" + h + ") {   ";
                var w = w || [];
                w.push(i),
                i = "",
                !1 !== e.createErrors ? (i += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { limit: " + a.length + " } ", !1 !== e.opts.messages && (i += " , message: 'should NOT have more than " + a.length + " items' "), e.opts.verbose && (i += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ";
                var x = i;
                i = w.pop(),
                !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + x + "]); ": i += " validate.errors = [" + x + "]; return false; ": i += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
                i += " } ",
                l = I,
                c && (g += "}", i += " else { ")
            }
            var A = a;
            if (A) for (var _, S = -1,
            k = A.length - 1; S < k;) if (_ = A[S += 1], e.opts.strictKeywords ? "object" == typeof _ && Object.keys(_).length > 0 : e.util.schemaHasRules(_, e.RULES.all)) {
                i += " " + p + " = true; if (" + u + ".length > " + S + ") { ";
                var L = u + "[" + S + "]";
                f.schema = _,
                f.schemaPath = s + "[" + S + "]",
                f.errSchemaPath = l + "/" + S,
                f.errorPath = e.util.getPathExpr(e.errorPath, S, e.opts.jsonPointers, !0),
                f.dataPathArr[v] = S;
                var T = e.validate(f);
                f.baseId = b,
                e.util.varOccurences(T, y) < 2 ? i += " " + e.util.varReplace(T, y, L) + " ": i += " var " + y + " = " + L + "; " + T + " ",
                i += " }  ",
                c && (i += " if (" + p + ") { ", g += "}")
            }
            "object" == typeof C && (e.opts.strictKeywords ? "object" == typeof C && Object.keys(C).length > 0 : e.util.schemaHasRules(C, e.RULES.all)) && (f.schema = C, f.schemaPath = e.schemaPath + ".additionalItems", f.errSchemaPath = e.errSchemaPath + "/additionalItems", i += " " + p + " = true; if (" + u + ".length > " + a.length + ") {  for (var " + m + " = " + a.length + "; " + m + " < " + u + ".length; " + m + "++) { ", f.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers, !0), L = u + "[" + m + "]", f.dataPathArr[v] = m, T = e.validate(f), f.baseId = b, e.util.varOccurences(T, y) < 2 ? i += " " + e.util.varReplace(T, y, L) + " ": i += " var " + y + " = " + L + "; " + T + " ", c && (i += " if (!" + p + ") break; "), i += " } }  ", c && (i += " if (" + p + ") { ", g += "}"))
        } else(e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 : e.util.schemaHasRules(a, e.RULES.all)) && (f.schema = a, f.schemaPath = s, f.errSchemaPath = l, i += "  for (var " + m + " = 0; " + m + " < " + u + ".length; " + m + "++) { ", f.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers, !0), L = u + "[" + m + "]", f.dataPathArr[v] = m, T = e.validate(f), f.baseId = b, e.util.varOccurences(T, y) < 2 ? i += " " + e.util.varReplace(T, y, L) + " ": i += " var " + y + " = " + L + "; " + T + " ", c && (i += " if (!" + p + ") break; "), i += " }");
        return c && (i += " " + g + " if (" + d + " == errors) {"),
        i = e.util.cleanUpCode(i)
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i, r = " ",
        o = e.level,
        a = e.dataLevel,
        s = e.schema[t],
        l = e.schemaPath + e.util.getProperty(t),
        c = e.errSchemaPath + "/" + t,
        u = !e.opts.allErrors,
        h = "data" + (a || ""),
        d = e.opts.$data && s && s.$data;
        d ? (r += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ", i = "schema" + o) : i = s,
        r += "var division" + o + ";if (",
        d && (r += " " + i + " !== undefined && ( typeof " + i + " != 'number' || "),
        r += " (division" + o + " = " + h + " / " + i + ", ",
        e.opts.multipleOfPrecision ? r += " Math.abs(Math.round(division" + o + ") - division" + o + ") > 1e-" + e.opts.multipleOfPrecision + " ": r += " division" + o + " !== parseInt(division" + o + ") ",
        r += " ) ",
        d && (r += "  )  "),
        r += " ) {   ";
        var f = f || [];
        f.push(r),
        r = "",
        !1 !== e.createErrors ? (r += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { multipleOf: " + i + " } ", !1 !== e.opts.messages && (r += " , message: 'should be multiple of ", r += d ? "' + " + i: i + "'"), e.opts.verbose && (r += " , schema:  ", r += d ? "validate.schema" + l: "" + s, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
        var g = r;
        return r = f.pop(),
        !e.compositeRule && u ? e.async ? r += " throw new ValidationError([" + g + "]); ": r += " validate.errors = [" + g + "]; return false; ": r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
        r += "} ",
        u && (r += " else { "),
        r
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "errs__" + r,
        d = e.util.copy(e);
        d.level++;
        var f = "valid" + d.level;
        if (e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 : e.util.schemaHasRules(a, e.RULES.all)) {
            d.schema = a,
            d.schemaPath = s,
            d.errSchemaPath = l,
            i += " var " + h + " = errors;  ";
            var g, p = e.compositeRule;
            e.compositeRule = d.compositeRule = !0,
            d.createErrors = !1,
            d.opts.allErrors && (g = d.opts.allErrors, d.opts.allErrors = !1),
            i += " " + e.validate(d) + " ",
            d.createErrors = !0,
            g && (d.opts.allErrors = g),
            e.compositeRule = d.compositeRule = p,
            i += " if (" + f + ") {   ";
            var m = m || [];
            m.push(i),
            i = "",
            !1 !== e.createErrors ? (i += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (i += " , message: 'should NOT be valid' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ";
            var v = i;
            i = m.pop(),
            !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + v + "]); ": i += " validate.errors = [" + v + "]; return false; ": i += " var err = " + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
            i += " } else {  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; } ",
            e.opts.allErrors && (i += " } ")
        } else i += "  var err =   ",
        !1 !== e.createErrors ? (i += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (i += " , message: 'should NOT be valid' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ",
        i += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
        c && (i += " if (false) { ");
        return i
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "valid" + r,
        d = "errs__" + r,
        f = e.util.copy(e),
        g = "";
        f.level++;
        var p = "valid" + f.level,
        m = f.baseId,
        v = "prevValid" + r,
        y = "passingSchemas" + r;
        i += "var " + d + " = errors , " + v + " = false , " + h + " = false , " + y + " = null; ";
        var b = e.compositeRule;
        e.compositeRule = f.compositeRule = !0;
        var C = a;
        if (C) for (var I, w = -1,
        x = C.length - 1; w < x;) I = C[w += 1],
        (e.opts.strictKeywords ? "object" == typeof I && Object.keys(I).length > 0 : e.util.schemaHasRules(I, e.RULES.all)) ? (f.schema = I, f.schemaPath = s + "[" + w + "]", f.errSchemaPath = l + "/" + w, i += "  " + e.validate(f) + " ", f.baseId = m) : i += " var " + p + " = true; ",
        w && (i += " if (" + p + " && " + v + ") { " + h + " = false; " + y + " = [" + y + ", " + w + "]; } else { ", g += "}"),
        i += " if (" + p + ") { " + h + " = " + v + " = true; " + y + " = " + w + "; }";
        return e.compositeRule = f.compositeRule = b,
        i += g + "if (!" + h + ") {   var err =   ",
        !1 !== e.createErrors ? (i += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { passingSchemas: " + y + " } ", !1 !== e.opts.messages && (i += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ",
        i += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
        !e.compositeRule && c && (e.async ? i += " throw new ValidationError(vErrors); ": i += " validate.errors = vErrors; return false; "),
        i += "} else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }",
        e.opts.allErrors && (i += " } "),
        i
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i, r = " ",
        o = e.level,
        a = e.dataLevel,
        s = e.schema[t],
        l = e.schemaPath + e.util.getProperty(t),
        c = e.errSchemaPath + "/" + t,
        u = !e.opts.allErrors,
        h = "data" + (a || ""),
        d = e.opts.$data && s && s.$data;
        d ? (r += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ", i = "schema" + o) : i = s,
        r += "if ( ",
        d && (r += " (" + i + " !== undefined && typeof " + i + " != 'string') || "),
        r += " !" + (d ? "(new RegExp(" + i + "))": e.usePattern(s)) + ".test(" + h + ") ) {   ";
        var f = f || [];
        f.push(r),
        r = "",
        !1 !== e.createErrors ? (r += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { pattern:  ", r += d ? "" + i: "" + e.util.toQuotedString(s), r += "  } ", !1 !== e.opts.messages && (r += " , message: 'should match pattern \"", r += d ? "' + " + i + " + '": "" + e.util.escapeQuotes(s), r += "\"' "), e.opts.verbose && (r += " , schema:  ", r += d ? "validate.schema" + l: "" + e.util.toQuotedString(s), r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
        var g = r;
        return r = f.pop(),
        !e.compositeRule && u ? e.async ? r += " throw new ValidationError([" + g + "]); ": r += " validate.errors = [" + g + "]; return false; ": r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
        r += "} ",
        u && (r += " else { "),
        r
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "errs__" + r,
        d = e.util.copy(e),
        f = "";
        d.level++;
        var g = "valid" + d.level,
        p = "key" + r,
        m = "idx" + r,
        v = d.dataLevel = e.dataLevel + 1,
        y = "data" + v,
        b = "dataProperties" + r,
        C = Object.keys(a || {}),
        I = e.schema.patternProperties || {},
        w = Object.keys(I),
        x = e.schema.additionalProperties,
        A = C.length || w.length,
        _ = !1 === x,
        S = "object" == typeof x && Object.keys(x).length,
        k = e.opts.removeAdditional,
        L = _ || S || k,
        T = e.opts.ownProperties,
        R = e.baseId,
        M = e.schema.required;
        if (M && (!e.opts.$data || !M.$data) && M.length < e.opts.loopRequired) var P = e.util.toHash(M);
        if (i += "var " + h + " = errors;var " + g + " = true;", T && (i += " var " + b + " = undefined;"), L) {
            if (i += T ? " " + b + " = " + b + " || Object.keys(" + u + "); for (var " + m + "=0; " + m + "<" + b + ".length; " + m + "++) { var " + p + " = " + b + "[" + m + "]; ": " for (var " + p + " in " + u + ") { ", A) {
                if (i += " var isAdditional" + r + " = !(false ", C.length) if (C.length > 8) i += " || validate.schema" + s + ".hasOwnProperty(" + p + ") ";
                else {
                    var E = C;
                    if (E) for (var O = -1,
                    N = E.length - 1; O < N;) X = E[O += 1],
                    i += " || " + p + " == " + e.util.toQuotedString(X) + " "
                }
                if (w.length) {
                    var D = w;
                    if (D) for (var B = -1,
                    j = D.length - 1; B < j;) re = D[B += 1],
                    i += " || " + e.usePattern(re) + ".test(" + p + ") "
                }
                i += " ); if (isAdditional" + r + ") { "
            }
            if ("all" == k) i += " delete " + u + "[" + p + "]; ";
            else {
                var F = e.errorPath,
                H = "' + " + p + " + '";
                if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, p, e.opts.jsonPointers)), _) if (k) i += " delete " + u + "[" + p + "]; ";
                else {
                    i += " " + g + " = false; ";
                    var W = l;
                    l = e.errSchemaPath + "/additionalProperties",
                    (te = te || []).push(i),
                    i = "",
                    !1 !== e.createErrors ? (i += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { additionalProperty: '" + H + "' } ", !1 !== e.opts.messages && (i += " , message: '", e.opts._errorDataPathProperty ? i += "is an invalid additional property": i += "should NOT have additional properties", i += "' "), e.opts.verbose && (i += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ";
                    var V = i;
                    i = te.pop(),
                    !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + V + "]); ": i += " validate.errors = [" + V + "]; return false; ": i += " var err = " + V + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
                    l = W,
                    c && (i += " break; ")
                } else if (S) if ("failing" == k) {
                    i += " var " + h + " = errors;  ";
                    var G = e.compositeRule;
                    e.compositeRule = d.compositeRule = !0,
                    d.schema = x,
                    d.schemaPath = e.schemaPath + ".additionalProperties",
                    d.errSchemaPath = e.errSchemaPath + "/additionalProperties",
                    d.errorPath = e.opts._errorDataPathProperty ? e.errorPath: e.util.getPathExpr(e.errorPath, p, e.opts.jsonPointers);
                    var z = u + "[" + p + "]";
                    d.dataPathArr[v] = p;
                    var Z = e.validate(d);
                    d.baseId = R,
                    e.util.varOccurences(Z, y) < 2 ? i += " " + e.util.varReplace(Z, y, z) + " ": i += " var " + y + " = " + z + "; " + Z + " ",
                    i += " if (!" + g + ") { errors = " + h + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + u + "[" + p + "]; }  ",
                    e.compositeRule = d.compositeRule = G
                } else d.schema = x,
                d.schemaPath = e.schemaPath + ".additionalProperties",
                d.errSchemaPath = e.errSchemaPath + "/additionalProperties",
                d.errorPath = e.opts._errorDataPathProperty ? e.errorPath: e.util.getPathExpr(e.errorPath, p, e.opts.jsonPointers),
                z = u + "[" + p + "]",
                d.dataPathArr[v] = p,
                Z = e.validate(d),
                d.baseId = R,
                e.util.varOccurences(Z, y) < 2 ? i += " " + e.util.varReplace(Z, y, z) + " ": i += " var " + y + " = " + z + "; " + Z + " ",
                c && (i += " if (!" + g + ") break; ");
                e.errorPath = F
            }
            A && (i += " } "),
            i += " }  ",
            c && (i += " if (" + g + ") { ", f += "}")
        }
        var $ = e.opts.useDefaults && !e.compositeRule;
        if (C.length) {
            var K = C;
            if (K) for (var X, Y = -1,
            U = K.length - 1; Y < U;) {
                var J = a[X = K[Y += 1]];
                if (e.opts.strictKeywords ? "object" == typeof J && Object.keys(J).length > 0 : e.util.schemaHasRules(J, e.RULES.all)) {
                    var q = e.util.getProperty(X),
                    Q = (z = u + q, $ && void 0 !== J.
                default);
                    if (d.schema = J, d.schemaPath = s + q, d.errSchemaPath = l + "/" + e.util.escapeFragment(X), d.errorPath = e.util.getPath(e.errorPath, X, e.opts.jsonPointers), d.dataPathArr[v] = e.util.toQuotedString(X), Z = e.validate(d), d.baseId = R, e.util.varOccurences(Z, y) < 2) {
                        Z = e.util.varReplace(Z, y, z);
                        var ee = z
                    } else ee = y,
                    i += " var " + y + " = " + z + "; ";
                    if (Q) i += " " + Z + " ";
                    else {
                        if (P && P[X]) {
                            i += " if ( " + ee + " === undefined ",
                            T && (i += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(X) + "') "),
                            i += ") { " + g + " = false; ",
                            F = e.errorPath,
                            W = l;
                            var te, ne = e.util.escapeQuotes(X);
                            e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(F, X, e.opts.jsonPointers)),
                            l = e.errSchemaPath + "/required",
                            (te = te || []).push(i),
                            i = "",
                            !1 !== e.createErrors ? (i += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + ne + "' } ", !1 !== e.opts.messages && (i += " , message: '", e.opts._errorDataPathProperty ? i += "is controller required property": i += "should have required property \\'" + ne + "\\'", i += "' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ",
                            V = i,
                            i = te.pop(),
                            !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + V + "]); ": i += " validate.errors = [" + V + "]; return false; ": i += " var err = " + V + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
                            l = W,
                            e.errorPath = F,
                            i += " } else { "
                        } else c ? (i += " if ( " + ee + " === undefined ", T && (i += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(X) + "') "), i += ") { " + g + " = true; } else { ") : (i += " if (" + ee + " !== undefined ", T && (i += " &&   Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(X) + "') "), i += " ) { ");
                        i += " " + Z + " } "
                    }
                }
                c && (i += " if (" + g + ") { ", f += "}")
            }
        }
        if (w.length) {
            var ie = w;
            if (ie) for (var re, oe = -1,
            ae = ie.length - 1; oe < ae;) J = I[re = ie[oe += 1]],
            (e.opts.strictKeywords ? "object" == typeof J && Object.keys(J).length > 0 : e.util.schemaHasRules(J, e.RULES.all)) && (d.schema = J, d.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(re), d.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(re), i += T ? " " + b + " = " + b + " || Object.keys(" + u + "); for (var " + m + "=0; " + m + "<" + b + ".length; " + m + "++) { var " + p + " = " + b + "[" + m + "]; ": " for (var " + p + " in " + u + ") { ", i += " if (" + e.usePattern(re) + ".test(" + p + ")) { ", d.errorPath = e.util.getPathExpr(e.errorPath, p, e.opts.jsonPointers), z = u + "[" + p + "]", d.dataPathArr[v] = p, Z = e.validate(d), d.baseId = R, e.util.varOccurences(Z, y) < 2 ? i += " " + e.util.varReplace(Z, y, z) + " ": i += " var " + y + " = " + z + "; " + Z + " ", c && (i += " if (!" + g + ") break; "), i += " } ", c && (i += " else " + g + " = true; "), i += " }  ", c && (i += " if (" + g + ") { ", f += "}"))
        }
        return c && (i += " " + f + " if (" + h + " == errors) {"),
        i = e.util.cleanUpCode(i)
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "errs__" + r,
        d = e.util.copy(e);
        d.level++;
        var f = "valid" + d.level;
        if (i += "var " + h + " = errors;", e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 : e.util.schemaHasRules(a, e.RULES.all)) {
            d.schema = a,
            d.schemaPath = s,
            d.errSchemaPath = l;
            var g = "key" + r,
            p = "idx" + r,
            m = "i" + r,
            v = "' + " + g + " + '",
            y = "data" + (d.dataLevel = e.dataLevel + 1),
            b = "dataProperties" + r,
            C = e.opts.ownProperties,
            I = e.baseId;
            C && (i += " var " + b + " = undefined; "),
            i += C ? " " + b + " = " + b + " || Object.keys(" + u + "); for (var " + p + "=0; " + p + "<" + b + ".length; " + p + "++) { var " + g + " = " + b + "[" + p + "]; ": " for (var " + g + " in " + u + ") { ",
            i += " var startErrs" + r + " = errors; ";
            var w = g,
            x = e.compositeRule;
            e.compositeRule = d.compositeRule = !0;
            var A = e.validate(d);
            d.baseId = I,
            e.util.varOccurences(A, y) < 2 ? i += " " + e.util.varReplace(A, y, w) + " ": i += " var " + y + " = " + w + "; " + A + " ",
            e.compositeRule = d.compositeRule = x,
            i += " if (!" + f + ") { for (var " + m + "=startErrs" + r + "; " + m + "<errors; " + m + "++) { vErrors[" + m + "].propertyName = " + g + "; }   var err =   ",
            !1 !== e.createErrors ? (i += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { propertyName: '" + v + "' } ", !1 !== e.opts.messages && (i += " , message: 'property name \\'" + v + "\\' is invalid' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ",
            i += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
            !e.compositeRule && c && (e.async ? i += " throw new ValidationError(vErrors); ": i += " validate.errors = vErrors; return false; "),
            c && (i += " break; "),
            i += " } }"
        }
        return c && (i += "  if (" + h + " == errors) {"),
        i = e.util.cleanUpCode(i)
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = " ",
        r = e.level,
        o = e.dataLevel,
        a = e.schema[t],
        s = e.schemaPath + e.util.getProperty(t),
        l = e.errSchemaPath + "/" + t,
        c = !e.opts.allErrors,
        u = "data" + (o || ""),
        h = "valid" + r,
        d = e.opts.$data && a && a.$data;
        d && (i += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ");
        var f = "schema" + r;
        if (!d) if (a.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
            var g = [],
            p = a;
            if (p) for (var m, v = -1,
            y = p.length - 1; v < y;) {
                m = p[v += 1];
                var b = e.schema.properties[m];
                b && (e.opts.strictKeywords ? "object" == typeof b && Object.keys(b).length > 0 : e.util.schemaHasRules(b, e.RULES.all)) || (g[g.length] = m)
            }
        } else g = a;
        if (d || g.length) {
            var C = e.errorPath,
            I = d || g.length >= e.opts.loopRequired,
            w = e.opts.ownProperties;
            if (c) if (i += " var missing" + r + "; ", I) {
                d || (i += " var " + f + " = validate.schema" + s + "; ");
                var x = "' + " + (T = "schema" + r + "[" + (k = "i" + r) + "]") + " + '";
                e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(C, T, e.opts.jsonPointers)),
                i += " var " + h + " = true; ",
                d && (i += " if (schema" + r + " === undefined) " + h + " = true; else if (!Array.isArray(schema" + r + ")) " + h + " = false; else {"),
                i += " for (var " + k + " = 0; " + k + " < " + f + ".length; " + k + "++) { " + h + " = " + u + "[" + f + "[" + k + "]] !== undefined ",
                w && (i += " &&   Object.prototype.hasOwnProperty.call(" + u + ", " + f + "[" + k + "]) "),
                i += "; if (!" + h + ") break; } ",
                d && (i += "  }  "),
                i += "  if (!" + h + ") {   ",
                (_ = _ || []).push(i),
                i = "",
                !1 !== e.createErrors ? (i += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + x + "' } ", !1 !== e.opts.messages && (i += " , message: '", e.opts._errorDataPathProperty ? i += "is controller required property": i += "should have required property \\'" + x + "\\'", i += "' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ";
                var A = i;
                i = _.pop(),
                !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + A + "]); ": i += " validate.errors = [" + A + "]; return false; ": i += " var err = " + A + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
                i += " } else { "
            } else {
                i += " if ( ";
                var _, S = g;
                if (S) for (var k = -1,
                L = S.length - 1; k < L;) M = S[k += 1],
                k && (i += " || "),
                i += " ( ( " + (N = u + (O = e.util.getProperty(M))) + " === undefined ",
                w && (i += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(M) + "') "),
                i += ") && (missing" + r + " = " + e.util.toQuotedString(e.opts.jsonPointers ? M: O) + ") ) ";
                i += ") {  ",
                x = "' + " + (T = "missing" + r) + " + '",
                e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(C, T, !0) : C + " + " + T),
                (_ = _ || []).push(i),
                i = "",
                !1 !== e.createErrors ? (i += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + x + "' } ", !1 !== e.opts.messages && (i += " , message: '", e.opts._errorDataPathProperty ? i += "is controller required property": i += "should have required property \\'" + x + "\\'", i += "' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ",
                A = i,
                i = _.pop(),
                !e.compositeRule && c ? e.async ? i += " throw new ValidationError([" + A + "]); ": i += " validate.errors = [" + A + "]; return false; ": i += " var err = " + A + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
                i += " } else { "
            } else if (I) {
                var T;
                d || (i += " var " + f + " = validate.schema" + s + "; "),
                x = "' + " + (T = "schema" + r + "[" + (k = "i" + r) + "]") + " + '",
                e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(C, T, e.opts.jsonPointers)),
                d && (i += " if (" + f + " && !Array.isArray(" + f + ")) {  var err =   ", !1 !== e.createErrors ? (i += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + x + "' } ", !1 !== e.opts.messages && (i += " , message: '", e.opts._errorDataPathProperty ? i += "is controller required property": i += "should have required property \\'" + x + "\\'", i += "' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ", i += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + f + " !== undefined) { "),
                i += " for (var " + k + " = 0; " + k + " < " + f + ".length; " + k + "++) { if (" + u + "[" + f + "[" + k + "]] === undefined ",
                w && (i += " || ! Object.prototype.hasOwnProperty.call(" + u + ", " + f + "[" + k + "]) "),
                i += ") {  var err =   ",
                !1 !== e.createErrors ? (i += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + x + "' } ", !1 !== e.opts.messages && (i += " , message: '", e.opts._errorDataPathProperty ? i += "is controller required property": i += "should have required property \\'" + x + "\\'", i += "' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ",
                i += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ",
                d && (i += "  }  ")
            } else {
                var R = g;
                if (R) for (var M, P = -1,
                E = R.length - 1; P < E;) {
                    M = R[P += 1];
                    var O = e.util.getProperty(M),
                    N = (x = e.util.escapeQuotes(M), u + O);
                    e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(C, M, e.opts.jsonPointers)),
                    i += " if ( " + N + " === undefined ",
                    w && (i += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(M) + "') "),
                    i += ") {  var err =   ",
                    !1 !== e.createErrors ? (i += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + x + "' } ", !1 !== e.opts.messages && (i += " , message: '", e.opts._errorDataPathProperty ? i += "is controller required property": i += "should have required property \\'" + x + "\\'", i += "' "), e.opts.verbose && (i += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), i += " } ") : i += " {} ",
                    i += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
                }
            }
            e.errorPath = C
        } else c && (i += " if (true) {");
        return i
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i, r = " ",
        o = e.level,
        a = e.dataLevel,
        s = e.schema[t],
        l = e.schemaPath + e.util.getProperty(t),
        c = e.errSchemaPath + "/" + t,
        u = !e.opts.allErrors,
        h = "data" + (a || ""),
        d = "valid" + o,
        f = e.opts.$data && s && s.$data;
        if (f ? (r += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ", i = "schema" + o) : i = s, (s || f) && !1 !== e.opts.uniqueItems) {
            f && (r += " var " + d + "; if (" + i + " === false || " + i + " === undefined) " + d + " = true; else if (typeof " + i + " != 'boolean') " + d + " = false; else { "),
            r += " var i = " + h + ".length , " + d + " = true , j; if (i > 1) { ";
            var g = e.schema.items && e.schema.items.type,
            p = Array.isArray(g);
            if (!g || "object" == g || "array" == g || p && (g.indexOf("object") >= 0 || g.indexOf("array") >= 0)) r += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + h + "[i], " + h + "[j])) { " + d + " = false; break outer; } } } ";
            else {
                r += " var itemIndices = {}, item; for (;i--;) { var item = " + h + "[i]; ";
                var m = "checkDataType" + (p ? "s": "");
                r += " if (" + e.util[m](g, "item", !0) + ") continue; ",
                p && (r += " if (typeof item == 'string') item = '\"' + item; "),
                r += " if (typeof itemIndices[item] == 'number') { " + d + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "
            }
            r += " } ",
            f && (r += "  }  "),
            r += " if (!" + d + ") {   ";
            var v = v || [];
            v.push(r),
            r = "",
            !1 !== e.createErrors ? (r += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { i: i, j: j } ", !1 !== e.opts.messages && (r += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (r += " , schema:  ", r += f ? "validate.schema" + l: "" + s, r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), r += " } ") : r += " {} ";
            var y = r;
            r = v.pop(),
            !e.compositeRule && u ? e.async ? r += " throw new ValidationError([" + y + "]); ": r += " validate.errors = [" + y + "]; return false; ": r += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",
            r += " } ",
            u && (r += " else { ")
        } else u && (r += " if (true) { ");
        return r
    }
},
function(e, t, n) {
    "use strict";
    var i = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"];
    e.exports = function(e, t) {
        for (var n = 0; n < t.length; n++) {
            e = JSON.parse(JSON.stringify(e));
            var r, o = t[n].split("/"),
            a = e;
            for (r = 1; r < o.length; r++) a = a[o[r]];
            for (r = 0; r < i.length; r++) {
                var s = i[r],
                l = a[s];
                l && (a[s] = {
                    anyOf: [l, {
                        $ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"
                    }]
                })
            }
        }
        return e
    }
},
function(e, t, n) {
    "use strict";
    var i = n(19).MissingRef;
    e.exports = function e(t, n, r) {
        var o = this;
        if ("function" != typeof this._opts.loadSchema) throw new Error("options.loadSchema should be controller function");
        "function" == typeof n && (r = n, n = void 0);
        var a = s(t).then((function() {
            var e = o._addSchema(t, void 0, n);
            return e.validate ||
            function e(t) {
                try {
                    return o._compile(t)
                } catch(e) {
                    if (e instanceof i) return r(e);
                    throw e
                }
                function r(i) {
                    var r = i.missingSchema;
                    if (c(r)) throw new Error("Schema " + r + " is loaded but " + i.missingRef + " cannot be resolved");
                    var a = o._loadingSchemas[r];
                    return a || (a = o._loadingSchemas[r] = o._opts.loadSchema(r)).then(l, l),
                    a.then((function(e) {
                        if (!c(r)) return s(e).then((function() {
                            c(r) || o.addSchema(e, r, void 0, n)
                        }))
                    })).then((function() {
                        return e(t)
                    }));
                    function l() {
                        delete o._loadingSchemas[r]
                    }
                    function c(e) {
                        return o._refs[e] || o._schemas[e]
                    }
                }
            } (e)
        }));
        return r && a.then((function(e) {
            r(null, e)
        }), r),
        a;
        function s(t) {
            var n = t.$schema;
            return n && !o.getSchema(n) ? e.call(o, {
                $ref: n
            },
            !0) : Promise.resolve()
        }
    }
},
function(e, t, n) {
    "use strict";
    var i = /^[a-z_$][a-z0-9_$-]*$/i,
    r = n(75),
    o = n(76);
    e.exports = {
        add: function(e, t) {
            var n = this.RULES;
            if (n.keywords[e]) throw new Error("Keyword " + e + " is already defined");
            if (!i.test(e)) throw new Error("Keyword " + e + " is not controller valid identifier");
            if (t) {
                this.validateKeyword(t, !0);
                var o = t.type;
                if (Array.isArray(o)) for (var a = 0; a < o.length; a++) l(e, o[a], t);
                else l(e, o, t);
                var s = t.metaSchema;
                s && (t.$data && this._opts.$data && (s = {
                    anyOf: [s, {
                        $ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"
                    }]
                }), t.validateSchema = this.compile(s, !0))
            }
            function l(e, t, i) {
                for (var o, a = 0; a < n.length; a++) {
                    var s = n[a];
                    if (s.type == t) {
                        o = s;
                        break
                    }
                }
                o || (o = {
                    type: t,
                    rules: []
                },
                n.push(o));
                var l = {
                    keyword: e,
                    definition: i,
                    custom: !0,
                    code: r,
                    implements: i.implements
                };
                o.rules.push(l),
                n.custom[e] = l
            }
            return n.keywords[e] = n.all[e] = !0,
            this
        },
        get: function(e) {
            var t = this.RULES.custom[e];
            return t ? t.definition: this.RULES.keywords[e] || !1
        },
        remove: function(e) {
            var t = this.RULES;
            delete t.keywords[e],
            delete t.all[e],
            delete t.custom[e];
            for (var n = 0; n < t.length; n++) for (var i = t[n].rules, r = 0; r < i.length; r++) if (i[r].keyword == e) {
                i.splice(r, 1);
                break
            }
            return this
        },
        validate: function e(t, n) {
            e.errors = null;
            var i = this._validateKeyword = this._validateKeyword || this.compile(o, !0);
            if (i(t)) return ! 0;
            if (e.errors = i.errors, n) throw new Error("custom keyword definition is invalid: " + this.errorsText(i.errors));
            return ! 1
        }
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i, r, o = " ",
        a = e.level,
        s = e.dataLevel,
        l = e.schema[t],
        c = e.schemaPath + e.util.getProperty(t),
        u = e.errSchemaPath + "/" + t,
        h = !e.opts.allErrors,
        d = "data" + (s || ""),
        f = "valid" + a,
        g = "errs__" + a,
        p = e.opts.$data && l && l.$data;
        p ? (o += " var schema" + a + " = " + e.util.getData(l.$data, s, e.dataPathArr) + "; ", r = "schema" + a) : r = l;
        var m, v, y, b, C, I = "definition" + a,
        w = this.definition,
        x = "";
        if (p && w.$data) {
            C = "keywordValidate" + a;
            var A = w.validateSchema;
            o += " var " + I + " = RULES.custom['" + t + "'].definition; var " + C + " = " + I + ".validate;"
        } else {
            if (! (b = e.useCustomRule(this, l, e.schema, e))) return;
            r = "validate.schema" + c,
            C = b.code,
            m = w.compile,
            v = w.inline,
            y = w.macro
        }
        var _ = C + ".errors",
        S = "i" + a,
        k = "ruleErr" + a,
        L = w.async;
        if (L && !e.async) throw new Error("async keyword in sync schema");
        if (v || y || (o += _ + " = null;"), o += "var " + g + " = errors;var " + f + ";", p && w.$data && (x += "}", o += " if (" + r + " === undefined) { " + f + " = true; } else { ", A && (x += "}", o += " " + f + " = " + I + ".validateSchema(" + r + "); if (" + f + ") { ")), v) w.statements ? o += " " + b.validate + " ": o += " " + f + " = " + b.validate + "; ";
        else if (y) {
            var T = e.util.copy(e);
            x = "",
            T.level++;
            var R = "valid" + T.level;
            T.schema = b.validate,
            T.schemaPath = "";
            var M = e.compositeRule;
            e.compositeRule = T.compositeRule = !0;
            var P = e.validate(T).replace(/validate\.schema/g, C);
            e.compositeRule = T.compositeRule = M,
            o += " " + P
        } else { (D = D || []).push(o),
            o = "",
            o += "  " + C + ".call( ",
            e.opts.passContext ? o += "this": o += "self",
            m || !1 === w.schema ? o += " , " + d + " ": o += " , " + r + " , " + d + " , validate.schema" + e.schemaPath + " ",
            o += " , (dataPath || '')",
            '""' != e.errorPath && (o += " + " + e.errorPath);
            var E = s ? "data" + (s - 1 || "") : "parentData",
            O = s ? e.dataPathArr[s] : "parentDataProperty",
            N = o += " , " + E + " , " + O + " , rootData )  ";
            o = D.pop(),
            !1 === w.errors ? (o += " " + f + " = ", L && (o += "await "), o += N + "; ") : o += L ? " var " + (_ = "customErrors" + a) + " = null; try { " + f + " = await " + N + "; } catch (e) { " + f + " = false; if (e instanceof ValidationError) " + _ + " = e.errors; else throw e; } ": " " + _ + " = null; " + f + " = " + N + "; "
        }
        if (w.modifying && (o += " if (" + E + ") " + d + " = " + E + "[" + O + "];"), o += "" + x, w.valid) h && (o += " if (true) { ");
        else {
            var D;
            o += " if ( ",
            void 0 === w.valid ? (o += " !", o += y ? "" + R: "" + f) : o += " " + !w.valid + " ",
            o += ") { ",
            i = this.keyword,
            (D = D || []).push(o),
            o = "",
            (D = D || []).push(o),
            o = "",
            !1 !== e.createErrors ? (o += " { keyword: '" + (i || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { keyword: '" + this.keyword + "' } ", !1 !== e.opts.messages && (o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), e.opts.verbose && (o += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), o += " } ") : o += " {} ";
            var B = o;
            o = D.pop(),
            !e.compositeRule && h ? e.async ? o += " throw new ValidationError([" + B + "]); ": o += " validate.errors = [" + B + "]; return false; ": o += " var err = " + B + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            var j = o;
            o = D.pop(),
            v ? w.errors ? "full" != w.errors && (o += "  for (var " + S + "=" + g + "; " + S + "<errors; " + S + "++) { var " + k + " = vErrors[" + S + "]; if (" + k + ".dataPath === undefined) " + k + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + k + ".schemaPath === undefined) { " + k + '.schemaPath = "' + u + '"; } ', e.opts.verbose && (o += " " + k + ".schema = " + r + "; " + k + ".data = " + d + "; "), o += " } ") : !1 === w.errors ? o += " " + j + " ": (o += " if (" + g + " == errors) { " + j + " } else {  for (var " + S + "=" + g + "; " + S + "<errors; " + S + "++) { var " + k + " = vErrors[" + S + "]; if (" + k + ".dataPath === undefined) " + k + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + k + ".schemaPath === undefined) { " + k + '.schemaPath = "' + u + '"; } ', e.opts.verbose && (o += " " + k + ".schema = " + r + "; " + k + ".data = " + d + "; "), o += " } } ") : y ? (o += "   var err =   ", !1 !== e.createErrors ? (o += " { keyword: '" + (i || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { keyword: '" + this.keyword + "' } ", !1 !== e.opts.messages && (o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), e.opts.verbose && (o += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), o += " } ") : o += " {} ", o += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? o += " throw new ValidationError(vErrors); ": o += " validate.errors = vErrors; return false; ")) : !1 === w.errors ? o += " " + j + " ": (o += " if (Array.isArray(" + _ + ")) { if (vErrors === null) vErrors = " + _ + "; else vErrors = vErrors.concat(" + _ + "); errors = vErrors.length;  for (var " + S + "=" + g + "; " + S + "<errors; " + S + "++) { var " + k + " = vErrors[" + S + "]; if (" + k + ".dataPath === undefined) " + k + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + k + '.schemaPath = "' + u + '";  ', e.opts.verbose && (o += " " + k + ".schema = " + r + "; " + k + ".data = " + d + "; "), o += " } } else { " + j + " } "),
            o += " } ",
            h && (o += " else { ")
        }
        return o
    }
},
function(e, t, n) {
    "use strict";
    var i = n(32);
    e.exports = {
        $id: "https://github.com/epoberezkin/ajv/blob/master/lib/definition_schema.js",
        definitions: {
            simpleTypes: i.definitions.simpleTypes
        },
        type: "object",
        dependencies: {
            schema: ["validate"],
            $data: ["validate"],
            statements: ["inline"],
            valid: {
                not: {
                    required: ["macro"]
                }
            }
        },
        properties: {
            type: i.properties.type,
            schema: {
                type: "boolean"
            },
            statements: {
                type: "boolean"
            },
            dependencies: {
                type: "array",
                items: {
                    type: "string"
                }
            },
            metaSchema: {
                type: "object"
            },
            modifying: {
                type: "boolean"
            },
            valid: {
                type: "boolean"
            },
            $data: {
                type: "boolean"
            },
            async: {
                type: "boolean"
            },
            errors: {
                anyOf: [{
                    type: "boolean"
                },
                {
                    const: "full"
                }]
            }
        }
    }
},
function(e) {
    e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#","description":"Meta-schema for $data reference (JSON Schema extension proposal)","type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}')
},
function(e) {
    e.exports = JSON.parse('{"id":"http://json-schema.org/draft-04/schema#","$schema":"http://json-schema.org/draft-04/schema#","description":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"positiveInteger":{"type":"integer","minimum":0},"positiveIntegerDefault0":{"allOf":[{"$ref":"#/definitions/positiveInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"minItems":1,"uniqueItems":true}},"type":"object","properties":{"id":{"type":"string"},"$schema":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":{},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"boolean","default":false},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"boolean","default":false},"maxLength":{"$ref":"#/definitions/positiveInteger"},"minLength":{"$ref":"#/definitions/positiveIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":{}},"maxItems":{"$ref":"#/definitions/positiveInteger"},"minItems":{"$ref":"#/definitions/positiveIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"maxProperties":{"$ref":"#/definitions/positiveInteger"},"minProperties":{"$ref":"#/definitions/positiveIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"enum":{"type":"array","minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"dependencies":{"exclusiveMaximum":["maximum"],"exclusiveMinimum":["minimum"]},"default":{}}')
},
function(e) {
    e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-06/schema#","$id":"http://json-schema.org/draft-06/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"title":{"type":"string"},"description":{"type":"string"},"default":{},"examples":{"type":"array","items":{}},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":{}},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":{},"enum":{"type":"array","minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":{}}')
},
function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "treeModeMixins", (function() {
        return D
    }));
    var i = n(13),
    r = n.n(i);
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var a = function() {
        function e() { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.locked = !1
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "highlight",
            value: function(e) {
                this.locked || (this.node !== e && (this.node && this.node.setHighlight(!1), this.node = e, this.node.setHighlight(!0)), this._cancelUnhighlight())
            }
        },
        {
            key: "unhighlight",
            value: function() {
                if (!this.locked) {
                    var e = this;
                    this.node && (this._cancelUnhighlight(), this.unhighlightTimer = setTimeout((function() {
                        e.node.setHighlight(!1),
                        e.node = void 0,
                        e.unhighlightTimer = void 0
                    }), 0))
                }
            }
        },
        {
            key: "_cancelUnhighlight",
            value: function() {
                this.unhighlightTimer && (clearTimeout(this.unhighlightTimer), this.unhighlightTimer = void 0)
            }
        },
        {
            key: "lock",
            value: function() {
                this.locked = !0
            }
        },
        {
            key: "unlock",
            value: function() {
                this.locked = !1
            }
        }]) && o(t.prototype, n),
        i && o(t, i),
        e
    } (),
    s = n(0);
    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var c = function() {
        function e(t) {
            function n(e) {
                return t.node.findNodeByInternalPath(e)
            } !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.editor = t,
            this.history = [],
            this.index = -1,
            this.clear(),
            this.actions = {
                editField: {
                    undo: function(e) {
                        n(e.parentPath).childs[e.index].updateField(e.oldValue)
                    },
                    redo: function(e) {
                        n(e.parentPath).childs[e.index].updateField(e.newValue)
                    }
                },
                editValue: {
                    undo: function(e) {
                        n(e.path).updateValue(e.oldValue)
                    },
                    redo: function(e) {
                        n(e.path).updateValue(e.newValue)
                    }
                },
                changeType: {
                    undo: function(e) {
                        n(e.path).changeType(e.oldType)
                    },
                    redo: function(e) {
                        n(e.path).changeType(e.newType)
                    }
                },
                appendNodes: {
                    undo: function(e) {
                        var t = n(e.parentPath);
                        e.paths.map(n).forEach((function(e) {
                            t.removeChild(e)
                        }))
                    },
                    redo: function(e) {
                        var t = n(e.parentPath);
                        e.nodes.forEach((function(e) {
                            t.appendChild(e)
                        }))
                    }
                },
                insertBeforeNodes: {
                    undo: function(e) {
                        var t = n(e.parentPath);
                        e.paths.map(n).forEach((function(e) {
                            t.removeChild(e)
                        }))
                    },
                    redo: function(e) {
                        var t = n(e.parentPath),
                        i = n(e.beforePath);
                        e.nodes.forEach((function(e) {
                            t.insertBefore(e, i)
                        }))
                    }
                },
                insertAfterNodes: {
                    undo: function(e) {
                        var t = n(e.parentPath);
                        e.paths.map(n).forEach((function(e) {
                            t.removeChild(e)
                        }))
                    },
                    redo: function(e) {
                        var t = n(e.parentPath),
                        i = n(e.afterPath);
                        e.nodes.forEach((function(e) {
                            t.insertAfter(e, i),
                            i = e
                        }))
                    }
                },
                removeNodes: {
                    undo: function(e) {
                        var t = n(e.parentPath),
                        i = t.childs[e.index] || t.append;
                        e.nodes.forEach((function(e) {
                            t.insertBefore(e, i)
                        }))
                    },
                    redo: function(e) {
                        var t = n(e.parentPath);
                        e.paths.map(n).forEach((function(e) {
                            t.removeChild(e)
                        }))
                    }
                },
                duplicateNodes: {
                    undo: function(e) {
                        var t = n(e.parentPath);
                        e.clonePaths.map(n).forEach((function(e) {
                            t.removeChild(e)
                        }))
                    },
                    redo: function(e) {
                        var t = n(e.parentPath),
                        i = n(e.afterPath);
                        e.paths.map(n).forEach((function(e) {
                            var n = e.clone();
                            if ("object" === t.type) {
                                var r = t.getFieldNames();
                                n.field = Object(s.findUniqueName)(e.field, r)
                            }
                            t.insertAfter(n, i),
                            i = n
                        }))
                    }
                },
                moveNodes: {
                    undo: function(e) {
                        var t = n(e.oldParentPath),
                        i = n(e.newParentPath),
                        r = t.childs[e.oldIndex] || t.append;
                        i.childs.slice(e.newIndex, e.newIndex + e.count).forEach((function(n, i) {
                            n.field = e.fieldNames[i],
                            t.moveBefore(n, r)
                        })),
                        null === e.newParentPathRedo && (e.newParentPathRedo = i.getInternalPath())
                    },
                    redo: function(e) {
                        var t = n(e.oldParentPathRedo),
                        i = n(e.newParentPathRedo),
                        r = i.childs[e.newIndexRedo] || i.append;
                        t.childs.slice(e.oldIndexRedo, e.oldIndexRedo + e.count).forEach((function(t, n) {
                            t.field = e.fieldNames[n],
                            i.moveBefore(t, r)
                        }))
                    }
                },
                sort: {
                    undo: function(e) {
                        var t = n(e.path);
                        t.hideChilds(),
                        t.childs = e.oldChilds,
                        t.updateDom({
                            updateIndexes: !0
                        }),
                        t.showChilds()
                    },
                    redo: function(e) {
                        var t = n(e.path);
                        t.hideChilds(),
                        t.childs = e.newChilds,
                        t.updateDom({
                            updateIndexes: !0
                        }),
                        t.showChilds()
                    }
                },
                transform: {
                    undo: function(e) {
                        n(e.path).setInternalValue(e.oldValue)
                    },
                    redo: function(e) {
                        n(e.path).setInternalValue(e.newValue)
                    }
                }
            }
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "onChange",
            value: function() {}
        },
        {
            key: "add",
            value: function(e, t) {
                this.index++,
                this.history[this.index] = {
                    action: e,
                    params: t,
                    timestamp: new Date
                },
                this.index < this.history.length - 1 && this.history.splice(this.index + 1, this.history.length - this.index - 1),
                this.onChange()
            }
        },
        {
            key: "clear",
            value: function() {
                this.history = [],
                this.index = -1,
                this.onChange()
            }
        },
        {
            key: "canUndo",
            value: function() {
                return this.index >= 0
            }
        },
        {
            key: "canRedo",
            value: function() {
                return this.index < this.history.length - 1
            }
        },
        {
            key: "undo",
            value: function() {
                if (this.canUndo()) {
                    var e = this.history[this.index];
                    if (e) {
                        var t = this.actions[e.action];
                        if (t && t.undo) {
                            if (t.undo(e.params), e.params.oldSelection) try {
                                this.editor.setDomSelection(e.params.oldSelection)
                            } catch(e) {
                                console.error(e)
                            }
                        } else console.error(new Error('unknown action "' + e.action + '"'))
                    }
                    this.index--,
                    this.onChange()
                }
            }
        },
        {
            key: "redo",
            value: function() {
                if (this.canRedo()) {
                    this.index++;
                    var e = this.history[this.index];
                    if (e) {
                        var t = this.actions[e.action];
                        if (t && t.redo) {
                            if (t.redo(e.params), e.params.newSelection) try {
                                this.editor.setDomSelection(e.params.newSelection)
                            } catch(e) {
                                console.error(e)
                            }
                        } else console.error(new Error('unknown action "' + e.action + '"'))
                    }
                    this.onChange()
                }
            }
        },
        {
            key: "destroy",
            value: function() {
                this.editor = null,
                this.history = [],
                this.index = -1
            }
        }]) && l(t.prototype, n),
        i && l(t, i),
        e
    } (),
    u = n(1);
    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var d = function() {
        function e(t, n) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e);
            var i = this;
            this.editor = t,
            this.timeout = void 0,
            this.delay = 200,
            this.lastText = void 0,
            this.results = null,
            this.dom = {},
            this.dom.container = n;
            var r = document.createElement("div");
            this.dom.wrapper = r,
            r.className = "jsoneditor-search",
            n.appendChild(r);
            var o = document.createElement("div");
            this.dom.results = o,
            o.className = "jsoneditor-results",
            r.appendChild(o);
            var a = document.createElement("div");
            this.dom.input = a,
            a.className = "jsoneditor-frame",
            a.title = Object(u.c)("searchTitle"),
            r.appendChild(a);
            var s = document.createElement("button");
            s.type = "button",
            s.className = "jsoneditor-refresh",
            a.appendChild(s);
            var l = document.createElement("input");
            l.type = "text",
            this.dom.search = l,
            l.oninput = function(e) {
                i._onDelayedSearch(e)
            },
            l.onchange = function(e) {
                i._onSearch()
            },
            l.onkeydown = function(e) {
                i._onKeyDown(e)
            },
            l.onkeyup = function(e) {
                i._onKeyUp(e)
            },
            s.onclick = function(e) {
                l.select()
            },
            a.appendChild(l);
            var c = document.createElement("button");
            c.type = "button",
            c.title = Object(u.c)("searchNextResultTitle"),
            c.className = "jsoneditor-next",
            c.onclick = function() {
                i.next()
            },
            a.appendChild(c);
            var h = document.createElement("button");
            h.type = "button",
            h.title = Object(u.c)("searchPreviousResultTitle"),
            h.className = "jsoneditor-previous",
            h.onclick = function() {
                i.previous()
            },
            a.appendChild(h)
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "next",
            value: function(e) {
                if (this.results) {
                    var t = null !== this.resultIndex ? this.resultIndex + 1 : 0;
                    t > this.results.length - 1 && (t = 0),
                    this._setActiveResult(t, e)
                }
            }
        },
        {
            key: "previous",
            value: function(e) {
                if (this.results) {
                    var t = this.results.length - 1,
                    n = null !== this.resultIndex ? this.resultIndex - 1 : t;
                    n < 0 && (n = t),
                    this._setActiveResult(n, e)
                }
            }
        },
        {
            key: "_setActiveResult",
            value: function(e, t) {
                if (this.activeResult) {
                    var n = this.activeResult.node;
                    "field" === this.activeResult.elem ? delete n.searchFieldActive: delete n.searchValueActive,
                    n.updateDom()
                }
                if (!this.results || !this.results[e]) return this.resultIndex = void 0,
                void(this.activeResult = void 0);
                this.resultIndex = e;
                var i = this.results[this.resultIndex].node,
                r = this.results[this.resultIndex].elem;
                "field" === r ? i.searchFieldActive = !0 : i.searchValueActive = !0,
                this.activeResult = this.results[this.resultIndex],
                i.updateDom(),
                i.scrollTo((function() {
                    t && i.focus(r)
                }))
            }
        },
        {
            key: "_clearDelay",
            value: function() {
                void 0 !== this.timeout && (clearTimeout(this.timeout), delete this.timeout)
            }
        },
        {
            key: "_onDelayedSearch",
            value: function(e) {
                this._clearDelay();
                var t = this;
                this.timeout = setTimeout((function(e) {
                    t._onSearch()
                }), this.delay)
            }
        },
        {
            key: "_onSearch",
            value: function(e) {
                this._clearDelay();
                var t = this.dom.search.value,
                n = t.length > 0 ? t: void 0;
                if (n !== this.lastText || e) {
                    this.lastText = n,
                    this.results = this.editor.search(n);
                    var i = this.results[0] ? this.results[0].node.MAX_SEARCH_RESULTS: 1 / 0,
                    r = 0;
                    if (this.activeResult) for (var o = 0; o < this.results.length; o++) if (this.results[o].node === this.activeResult.node) {
                        r = o;
                        break
                    }
                    if (this._setActiveResult(r, !1), void 0 !== n) {
                        var a = this.results.length;
                        this.dom.results.innerHTML = 0 === a ? "no&nbsp;results": 1 === a ? "1&nbsp;result": a > i ? i + "+&nbsp;results": a + "&nbsp;results"
                    } else this.dom.results.innerHTML = ""
                }
            }
        },
        {
            key: "_onKeyDown",
            value: function(e) {
                var t = e.which;
                27 === t ? (this.dom.search.value = "", this._onSearch(), e.preventDefault(), e.stopPropagation()) : 13 === t && (e.ctrlKey ? this._onSearch(!0) : e.shiftKey ? this.previous() : this.next(), e.preventDefault(), e.stopPropagation())
            }
        },
        {
            key: "_onKeyUp",
            value: function(e) {
                var t = e.keyCode;
                27 !== t && 13 !== t && this._onDelayedSearch(e)
            }
        },
        {
            key: "clear",
            value: function() {
                this.dom.search.value = "",
                this._onSearch()
            }
        },
        {
            key: "forceSearch",
            value: function() {
                this._onSearch(!0)
            }
        },
        {
            key: "isEmpty",
            value: function() {
                return "" === this.dom.search.value
            }
        },
        {
            key: "destroy",
            value: function() {
                this.editor = null,
                this.dom.container.removeChild(this.dom.wrapper),
                this.dom = null,
                this.results = null,
                this.activeResult = null,
                this._clearDelay()
            }
        }]) && h(t.prototype, n),
        i && h(t, i),
        e
    } (),
    f = n(3);
    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var p = function() {
        function e(t, n) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            t && (this.root = n, this.path = document.createElement("div"), this.path.className = "jsoneditor-treepath", this.path.setAttribute("tabindex", 0), this.contentMenuClicked = !1, t.appendChild(this.path), this.reset())
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "reset",
            value: function() {
                this.path.innerHTML = Object(u.c)("selectNode")
            }
        },
        {
            key: "setPath",
            value: function(e) {
                var t = this;
                function n(e) {
                    t.contentMenuClicked = !1,
                    Object(s.addClassName)(t.path, "show-all"),
                    t.path.style.width = t.path.parentNode.getBoundingClientRect().width - 10 + "px",
                    t.path.onblur = function() {
                        if (t.contentMenuClicked) return t.contentMenuClicked = !1,
                        void t.path.focus();
                        Object(s.removeClassName)(t.path, "show-all"),
                        t.path.onblur = void 0,
                        t.path.style.width = "",
                        t.setPath(e)
                    }
                }
                function i(e) {
                    this.selectionCallback && this.selectionCallback(e)
                }
                function r(e, t) {
                    this.contextMenuCallback && this.contextMenuCallback(e, t)
                }
                this.path.innerHTML = "",
                e && e.length && e.forEach((function(o, a) {
                    var s, l = document.createElement("span");
                    if (l.className = "jsoneditor-treepath-element", l.innerText = o.name, l.onclick = i.bind(t, o), t.path.appendChild(l), o.children.length && ((s = document.createElement("span")).className = "jsoneditor-treepath-seperator", s.innerHTML = "&#9658;", s.onclick = function() {
                        t.contentMenuClicked = !0;
                        var n = [];
                        o.children.forEach((function(i) {
                            n.push({
                                text: i.name,
                                className: "jsoneditor-type-modes" + (e[a + 1] + 1 && e[a + 1].name === i.name ? " jsoneditor-selected": ""),
                                click: r.bind(t, o, i.name)
                            })
                        })),
                        new f.a(n).show(s, t.root, !0)
                    },
                    t.path.appendChild(s)), a === e.length - 1) {
                        var c = (s || l).getBoundingClientRect().right;
                        if (t.path.offsetWidth < c && (t.path.scrollLeft = c), t.path.scrollLeft) {
                            var u = document.createElement("span");
                            u.className = "jsoneditor-treepath-show-all-btn",
                            u.title = "show all path",
                            u.innerHTML = "...",
                            u.onclick = n.bind(t, e),
                            t.path.insertBefore(u, t.path.firstChild)
                        }
                    }
                }))
            }
        },
        {
            key: "onSectionSelected",
            value: function(e) {
                "function" == typeof e && (this.selectionCallback = e)
            }
        },
        {
            key: "onContextMenuItemSelected",
            value: function(e) {
                "function" == typeof e && (this.contextMenuCallback = e)
            }
        }]) && g(t.prototype, n),
        i && g(t, i),
        e
    } (),
    m = n(11),
    v = n.n(m),
    y = n(12),
    b = n(5),
    C = n(6),
    I = n(2);
    function w(e) {
        return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function x(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var A = function() {
        function e(t, n) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.editor = t,
            this.dom = {},
            this.expanded = !1,
            n && n instanceof Object ? (this.setField(n.field, n.fieldEditable), "value" in n && this.setValue(n.value, n.type), "internalValue" in n && this.setInternalValue(n.internalValue)) : (this.setField(""), this.setValue(null)),
            this._debouncedOnChangeValue = Object(s.debounce)(this._onChangeValue.bind(this), e.prototype.DEBOUNCE_INTERVAL),
            this._debouncedOnChangeField = Object(s.debounce)(this._onChangeField.bind(this), e.prototype.DEBOUNCE_INTERVAL),
            this.visibleChilds = this.getMaxVisibleChilds()
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "getMaxVisibleChilds",
            value: function() {
                return this.editor && this.editor.options && this.editor.options.maxVisibleChilds ? this.editor.options.maxVisibleChilds: _
            }
        },
        {
            key: "_updateEditability",
            value: function() {
                if (this.editable = {
                    field: !0,
                    value: !0
                },
                this.editor && (this.editable.field = "tree" === this.editor.options.mode, this.editable.value = "view" !== this.editor.options.mode, ("tree" === this.editor.options.mode || "form" === this.editor.options.mode) && "function" == typeof this.editor.options.onEditable)) {
                    var e = this.editor.options.onEditable({
                        field: this.field,
                        value: this.value,
                        path: this.getPath()
                    });
                    "boolean" == typeof e ? (this.editable.field = e, this.editable.value = e) : ("boolean" == typeof e.field && (this.editable.field = e.field), "boolean" == typeof e.value && (this.editable.value = e.value))
                }
            }
        },
        {
            key: "getPath",
            value: function() {
                for (var e = this,
                t = []; e;) {
                    var n = e.getName();
                    void 0 !== n && t.unshift(n),
                    e = e.parent
                }
                return t
            }
        },
        {
            key: "getInternalPath",
            value: function() {
                for (var e = this,
                t = []; e;) e.parent && t.unshift(e.getIndex()),
                e = e.parent;
                return t
            }
        },
        {
            key: "getName",
            value: function() {
                return this.parent ? "array" !== this.parent.type ? this.field: this.index: void 0
            }
        },
        {
            key: "findNodeByPath",
            value: function(e) {
                if (e) {
                    if (0 === e.length) return this;
                    if (e.length && this.childs && this.childs.length) for (var t = 0; t < this.childs.length; ++t) if ("" + e[0] == "" + this.childs[t].getName()) return this.childs[t].findNodeByPath(e.slice(1))
                }
            }
        },
        {
            key: "findNodeByInternalPath",
            value: function(e) {
                if (e) {
                    for (var t = this,
                    n = 0; n < e.length && t; n++) {
                        var i = e[n];
                        t = t.childs[i]
                    }
                    return t
                }
            }
        },
        {
            key: "serialize",
            value: function() {
                return {
                    value: this.getValue(),
                    path: this.getPath()
                }
            }
        },
        {
            key: "findNode",
            value: function(e) {
                for (var t = Object(s.parsePath)(e), n = this, i = function() {
                    var e = t.shift();
                    if ("number" == typeof e) {
                        if ("array" !== n.type) throw new Error("Cannot get child node at index " + e + ": node is no array");
                        n = n.childs[e]
                    } else {
                        if ("object" !== n.type) throw new Error("Cannot get child node " + e + ": node is no object");
                        n = n.childs.filter((function(t) {
                            return t.field === e
                        }))[0]
                    }
                }; n && t.length > 0;) i();
                return n
            }
        },
        {
            key: "findParents",
            value: function() {
                for (var e = [], t = this.parent; t;) e.unshift(t),
                t = t.parent;
                return e
            }
        },
        {
            key: "setError",
            value: function(e, t) {
                this.error = e,
                this.errorChild = t,
                this.dom && this.dom.tr && this.updateError()
            }
        },
        {
            key: "updateError",
            value: function() {
                var e = this,
                t = this.fieldError || this.valueError || this.error,
                n = this.dom.tdError;
                if (t && this.dom && this.dom.tr) {
                    Object(s.addClassName)(this.dom.tr, "jsoneditor-validation-error"),
                    n || (n = document.createElement("td"), this.dom.tdError = n, this.dom.tdValue.parentNode.appendChild(n));
                    var i = document.createElement("button");
                    i.type = "button",
                    i.className = "jsoneditor-button jsoneditor-schema-error";
                    var r = function() {
                        e.dom.popupAnchor && e.dom.popupAnchor.destroy()
                    },
                    o = function() {
                        delete e.dom.popupAnchor
                    },
                    a = function(n) {
                        var r = e.editor.frame;
                        e.dom.popupAnchor = Object(y.a)(i, e.editor.getPopupAnchor(), o, n);
                        var a = i.getBoundingClientRect(),
                        s = r.getBoundingClientRect().width - a.x > 120 ? "jsoneditor-above": "jsoneditor-left",
                        l = document.createElement("div");
                        l.className = "jsoneditor-popover " + s,
                        l.appendChild(document.createTextNode(t.message)),
                        e.dom.popupAnchor.appendChild(l)
                    };
                    i.onmouseover = function() {
                        e.dom.popupAnchor || a(!0)
                    },
                    i.onfocus = function() {
                        r(),
                        a(!1)
                    },
                    i.onblur = function() {
                        r()
                    };
                    var l = this.errorChild;
                    for (l && (i.onclick = function() {
                        l.findParents().forEach((function(e) {
                            e.expand(!1)
                        })),
                        l.scrollTo((function() {
                            l.focus()
                        }))
                    }); n.firstChild;) n.removeChild(n.firstChild);
                    n.appendChild(i)
                } else this.dom.tr && Object(s.removeClassName)(this.dom.tr, "jsoneditor-validation-error"),
                n && (this.dom.tdError.parentNode.removeChild(this.dom.tdError), delete this.dom.tdError)
            }
        },
        {
            key: "getIndex",
            value: function() {
                if (this.parent) {
                    var e = this.parent.childs.indexOf(this);
                    return - 1 !== e ? e: null
                }
                return - 1
            }
        },
        {
            key: "setParent",
            value: function(e) {
                this.parent = e
            }
        },
        {
            key: "setField",
            value: function(e, t) {
                this.field = e,
                this.previousField = e,
                this.fieldEditable = !0 === t
            }
        },
        {
            key: "getField",
            value: function() {
                return void 0 === this.field && this._getDomField(),
                this.field
            }
        },
        {
            key: "setValue",
            value: function(t, n) {
                var i, r, o, a, s = this.childs;
                if (this.type = this._getType(t), n && n !== this.type) {
                    if ("string" !== n || "auto" !== this.type) throw new Error('Type mismatch: cannot cast value of type "' + this.type + ' to the specified type "' + n + '"');
                    this.type = n
                }
                if ("array" === this.type) {
                    for (this.childs || (this.childs = []), o = 0; o < t.length; o++) if (void 0 !== (i = t[o]) && !(i instanceof Function)) if (o < this.childs.length)(r = this.childs[o]).fieldEditable = !1,
                    r.index = o,
                    r.setValue(i);
                    else {
                        r = new e(this.editor, {
                            value: i
                        });
                        var l = o < this.getMaxVisibleChilds();
                        this.appendChild(r, l, !1)
                    }
                    for (a = this.childs.length; a >= t.length; a--) this.removeChild(this.childs[a], !1)
                } else if ("object" === this.type) {
                    for (this.childs || (this.childs = []), a = this.childs.length - 1; a >= 0; a--) L(t, this.childs[a].field) || this.removeChild(this.childs[a], !1);
                    for (var c in o = 0,
                    t) if (L(t, c)) {
                        if (void 0 !== (i = t[c]) && !(i instanceof Function)) {
                            var u = this.findChildByProperty(c);
                            if (u) u.setField(c, !0),
                            u.setValue(i);
                            else {
                                var h = new e(this.editor, {
                                    field: c,
                                    value: i
                                }),
                                d = o < this.getMaxVisibleChilds();
                                this.appendChild(h, d, !1)
                            }
                        }
                        o++
                    }
                    this.value = "",
                    !0 === this.editor.options.sortObjectKeys && this.sort([], "asc", !1)
                } else this.hideChilds(),
                delete this.append,
                delete this.showMore,
                delete this.expanded,
                delete this.childs,
                this.value = t;
                Array.isArray(s) !== Array.isArray(this.childs) && this.recreateDom(),
                this.updateDom({
                    updateIndexes: !0
                }),
                this.previousValue = this.value
            }
        },
        {
            key: "setInternalValue",
            value: function(t) {
                var n, i, r, o, a, s = this.childs;
                if (this.type = t.type, "array" === t.type) {
                    for (this.childs || (this.childs = []), o = 0; o < t.childs.length; o++) void 0 === (n = t.childs[o]) || n instanceof Function || (o < this.childs.length ? ((i = this.childs[o]).fieldEditable = !1, i.index = o, i.setInternalValue(n)) : (i = new e(this.editor, {
                        internalValue: n
                    }), r = o < this.getMaxVisibleChilds(), this.appendChild(i, r, !1)));
                    for (a = this.childs.length; a >= t.childs.length; a--) this.removeChild(this.childs[a], !1)
                } else if ("object" === t.type) {
                    for (this.childs || (this.childs = []), o = 0; o < t.childs.length; o++) void 0 === (n = t.childs[o]) || n instanceof Function || (o < this.childs.length ? (delete(i = this.childs[o]).index, i.setField(n.field, !0), i.setInternalValue(n.value)) : (i = new e(this.editor, {
                        field: n.field,
                        internalValue: n.value
                    }), r = o < this.getMaxVisibleChilds(), this.appendChild(i, r, !1)));
                    for (a = this.childs.length; a >= t.childs.length; a--) this.removeChild(this.childs[a], !1)
                } else this.hideChilds(),
                delete this.append,
                delete this.showMore,
                delete this.expanded,
                delete this.childs,
                this.value = t.value;
                Array.isArray(s) !== Array.isArray(this.childs) && this.recreateDom(),
                this.updateDom({
                    updateIndexes: !0
                }),
                this.previousValue = this.value
            }
        },
        {
            key: "recreateDom",
            value: function() {
                if (this.dom && this.dom.tr && this.dom.tr.parentNode) {
                    var e = this._detachFromDom();
                    this.clearDom(),
                    this._attachToDom(e)
                } else this.clearDom()
            }
        },
        {
            key: "getValue",
            value: function() {
                if ("array" === this.type) {
                    var e = [];
                    return this.childs.forEach((function(t) {
                        e.push(t.getValue())
                    })),
                    e
                }
                if ("object" === this.type) {
                    var t = {};
                    return this.childs.forEach((function(e) {
                        t[e.getField()] = e.getValue()
                    })),
                    t
                }
                return void 0 === this.value && this._getDomValue(),
                this.value
            }
        },
        {
            key: "getInternalValue",
            value: function() {
                return "array" === this.type ? {
                    type: this.type,
                    childs: this.childs.map((function(e) {
                        return e.getInternalValue()
                    }))
                }: "object" === this.type ? {
                    type: this.type,
                    childs: this.childs.map((function(e) {
                        return {
                            field: e.getField(),
                            value: e.getInternalValue()
                        }
                    }))
                }: (void 0 === this.value && this._getDomValue(), {
                    type: this.type,
                    value: this.value
                })
            }
        },
        {
            key: "getLevel",
            value: function() {
                return this.parent ? this.parent.getLevel() + 1 : 0
            }
        },
        {
            key: "getNodePath",
            value: function() {
                var e = this.parent ? this.parent.getNodePath() : [];
                return e.push(this),
                e
            }
        },
        {
            key: "clone",
            value: function() {
                var t = new e(this.editor);
                if (t.type = this.type, t.field = this.field, t.fieldInnerText = this.fieldInnerText, t.fieldEditable = this.fieldEditable, t.previousField = this.previousField, t.value = this.value, t.valueInnerText = this.valueInnerText, t.previousValue = this.previousValue, t.expanded = this.expanded, t.visibleChilds = this.visibleChilds, this.childs) {
                    var n = [];
                    this.childs.forEach((function(e) {
                        var i = e.clone();
                        i.setParent(t),
                        n.push(i)
                    })),
                    t.childs = n
                } else t.childs = void 0;
                return t
            }
        },
        {
            key: "expand",
            value: function(e) {
                this.childs && (this.expanded = !0, this.dom.expand && (this.dom.expand.className = "jsoneditor-button jsoneditor-expanded"), this.showChilds(), !1 !== e && this.childs.forEach((function(t) {
                    t.expand(e)
                })), this.updateDom({
                    recurse: !1
                }))
            }
        },
        {
            key: "collapse",
            value: function(e) {
                this.childs && (this.hideChilds(), !1 !== e && this.childs.forEach((function(t) {
                    t.collapse(e)
                })), this.dom.expand && (this.dom.expand.className = "jsoneditor-button jsoneditor-collapsed"), this.expanded = !1, this.updateDom({
                    recurse: !1
                }))
            }
        },
        {
            key: "showChilds",
            value: function() {
                if (this.childs && this.expanded) {
                    var e, t = this.dom.tr,
                    n = t ? t.parentNode: void 0;
                    if (n) {
                        var i = this.getAppendDom();
                        i.parentNode || ((e = t.nextSibling) ? n.insertBefore(i, e) : n.appendChild(i));
                        var r = Math.min(this.childs.length, this.visibleChilds);
                        e = this._getNextTr();
                        for (var o = 0; o < r; o++) {
                            var a = this.childs[o];
                            a.getDom().parentNode || n.insertBefore(a.getDom(), e),
                            a.showChilds()
                        }
                        var s = this.getShowMoreDom();
                        e = this._getNextTr(),
                        s.parentNode || n.insertBefore(s, e),
                        this.showMore.updateDom()
                    }
                }
            }
        },
        {
            key: "_getNextTr",
            value: function() {
                return this.showMore && this.showMore.getDom().parentNode ? this.showMore.getDom() : this.append && this.append.getDom().parentNode ? this.append.getDom() : void 0
            }
        },
        {
            key: "hide",
            value: function(e) {
                var t = this.dom.tr,
                n = t ? t.parentNode: void 0;
                n && n.removeChild(t),
                this.dom.popupAnchor && this.dom.popupAnchor.destroy(),
                this.hideChilds(e)
            }
        },
        {
            key: "hideChilds",
            value: function(e) {
                if (this.childs && this.expanded) {
                    var t = this.getAppendDom();
                    t.parentNode && t.parentNode.removeChild(t),
                    this.childs.forEach((function(e) {
                        e.hide()
                    }));
                    var n = this.getShowMoreDom();
                    n.parentNode && n.parentNode.removeChild(n),
                    e && !e.resetVisibleChilds || (this.visibleChilds = this.getMaxVisibleChilds())
                }
            }
        },
        {
            key: "_updateCssClassName",
            value: function() {
                if (this.dom.field && this.editor && this.editor.options && "function" == typeof this.editor.options.onClassName && this.dom.tree) {
                    Object(s.removeAllClassNames)(this.dom.tree);
                    var e = this.editor.options.onClassName({
                        path: this.getPath(),
                        field: this.field,
                        value: this.value
                    }) || "";
                    Object(s.addClassName)(this.dom.tree, "jsoneditor-values " + e)
                }
            }
        },
        {
            key: "recursivelyUpdateCssClassesOnNodes",
            value: function() {
                if (this._updateCssClassName(), Array.isArray(this.childs)) for (var e = 0; e < this.childs.length; e++) this.childs[e].recursivelyUpdateCssClassesOnNodes()
            }
        },
        {
            key: "expandTo",
            value: function() {
                for (var e = this.parent; e;) e.expanded || e.expand(),
                e = e.parent
            }
        },
        {
            key: "appendChild",
            value: function(e, t, n) {
                if (this._hasChilds()) {
                    if (e.setParent(this), e.fieldEditable = "object" === this.type, "array" === this.type && (e.index = this.childs.length), "object" === this.type && void 0 === e.field && e.setField(""), this.childs.push(e), this.expanded && !1 !== t) {
                        var i = e.getDom(),
                        r = this._getNextTr(),
                        o = r ? r.parentNode: void 0;
                        r && o && o.insertBefore(i, r),
                        e.showChilds(),
                        this.visibleChilds++
                    } ! 1 !== n && (this.updateDom({
                        updateIndexes: !0
                    }), e.updateDom({
                        recurse: !0
                    }))
                }
            }
        },
        {
            key: "moveBefore",
            value: function(e, t, n) {
                if (this._hasChilds()) {
                    var i = this.dom.tr ? this.dom.tr.parentNode: void 0;
                    if (i) {
                        var r = document.createElement("tr");
                        r.style.height = i.clientHeight + "px",
                        i.appendChild(r)
                    }
                    if (e.parent && e.parent.removeChild(e), t instanceof T || !t) if (this.childs.length + 1 > this.visibleChilds) {
                        var o = this.childs[this.visibleChilds - 1];
                        this.insertBefore(e, o, n)
                    } else this.appendChild(e, !0, n);
                    else this.insertBefore(e, t, n);
                    i && i.removeChild(r)
                }
            }
        },
        {
            key: "insertBefore",
            value: function(e, t, n) {
                if (this._hasChilds()) {
                    if (this.visibleChilds++, "object" === this.type && void 0 === e.field && e.setField(""), t === this.append) e.setParent(this),
                    e.fieldEditable = "object" === this.type,
                    this.childs.push(e);
                    else {
                        var i = this.childs.indexOf(t);
                        if ( - 1 === i) throw new Error("Node not found");
                        e.setParent(this),
                        e.fieldEditable = "object" === this.type,
                        this.childs.splice(i, 0, e)
                    }
                    if (this.expanded) {
                        var r = e.getDom(),
                        o = t.getDom(),
                        a = o ? o.parentNode: void 0;
                        o && a && a.insertBefore(r, o),
                        e.showChilds(),
                        this.showChilds()
                    } ! 1 !== n && (this.updateDom({
                        updateIndexes: !0
                    }), e.updateDom({
                        recurse: !0
                    }))
                }
            }
        },
        {
            key: "insertAfter",
            value: function(e, t) {
                if (this._hasChilds()) {
                    var n = this.childs.indexOf(t),
                    i = this.childs[n + 1];
                    i ? this.insertBefore(e, i) : this.appendChild(e)
                }
            }
        },
        {
            key: "search",
            value: function(e, t) {
                Array.isArray(t) || (t = []);
                var n = e ? e.toLowerCase() : void 0;
                return delete this.searchField,
                delete this.searchValue,
                void 0 !== this.field && t.length <= this.MAX_SEARCH_RESULTS && ( - 1 !== String(this.field).toLowerCase().indexOf(n) && (this.searchField = !0, t.push({
                    node: this,
                    elem: "field"
                })), this._updateDomField()),
                this._hasChilds() ? this.childs && this.childs.forEach((function(n) {
                    n.search(e, t)
                })) : void 0 !== this.value && t.length <= this.MAX_SEARCH_RESULTS && ( - 1 !== String(this.value).toLowerCase().indexOf(n) && (this.searchValue = !0, t.push({
                    node: this,
                    elem: "value"
                })), this._updateDomValue()),
                t
            }
        },
        {
            key: "scrollTo",
            value: function(e) {
                this.expandPathToNode(),
                this.dom.tr && this.dom.tr.parentNode && this.editor.scrollTo(this.dom.tr.offsetTop, e)
            }
        },
        {
            key: "expandPathToNode",
            value: function() {
                for (var e = this; e && e.parent;) {
                    for (var t = "array" === e.parent.type ? e.index: e.parent.childs.indexOf(e); e.parent.visibleChilds < t + 1;) e.parent.visibleChilds += this.getMaxVisibleChilds();
                    e.parent.expand(!1),
                    e = e.parent
                }
            }
        },
        {
            key: "focus",
            value: function(t) {
                if (e.focusElement = t, this.dom.tr && this.dom.tr.parentNode) {
                    var n = this.dom;
                    switch (t) {
                    case "drag":
                        n.drag ? n.drag.focus() : n.menu.focus();
                        break;
                    case "menu":
                        n.menu.focus();
                        break;
                    case "expand":
                        this._hasChilds() ? n.expand.focus() : n.field && this.fieldEditable ? (n.field.focus(), Object(s.selectContentEditable)(n.field)) : n.value && !this._hasChilds() ? (n.value.focus(), Object(s.selectContentEditable)(n.value)) : n.menu.focus();
                        break;
                    case "field":
                        n.field && this.fieldEditable ? (n.field.focus(), Object(s.selectContentEditable)(n.field)) : n.value && !this._hasChilds() ? (n.value.focus(), Object(s.selectContentEditable)(n.value)) : this._hasChilds() ? n.expand.focus() : n.menu.focus();
                        break;
                    case "value":
                    default:
                        n.select ? n.select.focus() : n.value && !this._hasChilds() ? (n.value.focus(), Object(s.selectContentEditable)(n.value)) : n.field && this.fieldEditable ? (n.field.focus(), Object(s.selectContentEditable)(n.field)) : this._hasChilds() ? n.expand.focus() : n.menu.focus()
                    }
                }
            }
        },
        {
            key: "containsNode",
            value: function(e) {
                if (this === e) return ! 0;
                var t = this.childs;
                if (t) for (var n = 0,
                i = t.length; n < i; n++) if (t[n].containsNode(e)) return ! 0;
                return ! 1
            }
        },
        {
            key: "removeChild",
            value: function(e, t) {
                if (this.childs) {
                    var n = this.childs.indexOf(e);
                    if ( - 1 !== n) {
                        n < this.visibleChilds && this.expanded && this.visibleChilds--,
                        e.hide(),
                        delete e.searchField,
                        delete e.searchValue;
                        var i = this.childs.splice(n, 1)[0];
                        return i.parent = null,
                        !1 !== t && this.updateDom({
                            updateIndexes: !0
                        }),
                        i
                    }
                }
            }
        },
        {
            key: "_remove",
            value: function(e) {
                this.removeChild(e)
            }
        },
        {
            key: "changeType",
            value: function(e) {
                var t = this.type;
                if (t !== e) {
                    if ("string" !== e && "auto" !== e || "string" !== t && "auto" !== t) {
                        var n = this._detachFromDom();
                        this.clearDom(),
                        this.type = e,
                        "object" === e ? (this.childs || (this.childs = []), this.childs.forEach((function(e) {
                            e.clearDom(),
                            delete e.index,
                            e.fieldEditable = !0,
                            void 0 === e.field && (e.field = "")
                        })), "string" !== t && "auto" !== t || (this.expanded = !0)) : "array" === e ? (this.childs || (this.childs = []), this.childs.forEach((function(e, t) {
                            e.clearDom(),
                            e.fieldEditable = !1,
                            e.index = t
                        })), "string" !== t && "auto" !== t || (this.expanded = !0)) : this.expanded = !1,
                        this._attachToDom(n)
                    } else this.type = e;
                    "auto" !== e && "string" !== e || (this.value = "string" === e ? String(this.value) : Object(s.parseString)(String(this.value)), this.focus()),
                    this.updateDom({
                        updateIndexes: !0
                    })
                }
            }
        },
        {
            key: "deepEqual",
            value: function(e) {
                var t;
                if ("array" === this.type) {
                    if (!Array.isArray(e)) return ! 1;
                    if (this.childs.length !== e.length) return ! 1;
                    for (t = 0; t < this.childs.length; t++) if (!this.childs[t].deepEqual(e[t])) return ! 1
                } else if ("object" === this.type) {
                    if ("object" !== w(e) || !e) return ! 1;
                    var n = Object.keys(e);
                    if (this.childs.length !== n.length) return ! 1;
                    for (t = 0; t < n.length; t++) {
                        var i = this.childs[t];
                        if (i.field !== n[t] || !i.deepEqual(e[i.field])) return ! 1
                    }
                } else if (this.value !== e) return ! 1;
                return ! 0
            }
        },
        {
            key: "_getDomValue",
            value: function() {
                if (this._clearValueError(), this.dom.value && "array" !== this.type && "object" !== this.type && (this.valueInnerText = Object(s.getInnerText)(this.dom.value), "" === this.valueInnerText && "" !== this.dom.value.innerHTML && (this.dom.value.innerHTML = "")), void 0 !== this.valueInnerText) try {
                    var e;
                    if ("string" === this.type) e = this._unescapeHTML(this.valueInnerText);
                    else {
                        var t = this._unescapeHTML(this.valueInnerText);
                        e = Object(s.parseString)(t)
                    }
                    e !== this.value && (this.value = e, this._debouncedOnChangeValue())
                } catch(e) {
                    this._setValueError(Object(u.c)("cannotParseValueError"))
                }
            }
        },
        {
            key: "_setValueError",
            value: function(e) {
                this.valueError = {
                    message: e
                },
                this.updateError()
            }
        },
        {
            key: "_clearValueError",
            value: function() {
                this.valueError && (this.valueError = null, this.updateError())
            }
        },
        {
            key: "_setFieldError",
            value: function(e) {
                this.fieldError = {
                    message: e
                },
                this.updateError()
            }
        },
        {
            key: "_clearFieldError",
            value: function() {
                this.fieldError && (this.fieldError = null, this.updateError())
            }
        },
        {
            key: "_onChangeValue",
            value: function() {
                var e = this.editor.getDomSelection();
                if (e.range) {
                    var t = Object(s.textDiff)(String(this.value), String(this.previousValue));
                    e.range.startOffset = t.start,
                    e.range.endOffset = t.end
                }
                var n = this.editor.getDomSelection();
                if (n.range) {
                    var i = Object(s.textDiff)(String(this.previousValue), String(this.value));
                    n.range.startOffset = i.start,
                    n.range.endOffset = i.end
                }
                this.editor._onAction("editValue", {
                    path: this.getInternalPath(),
                    oldValue: this.previousValue,
                    newValue: this.value,
                    oldSelection: e,
                    newSelection: n
                }),
                this.previousValue = this.value
            }
        },
        {
            key: "_onChangeField",
            value: function() {
                var e = this.editor.getDomSelection(),
                t = this.previousField || "";
                if (e.range) {
                    var n = Object(s.textDiff)(this.field, t);
                    e.range.startOffset = n.start,
                    e.range.endOffset = n.end
                }
                var i = this.editor.getDomSelection();
                if (i.range) {
                    var r = Object(s.textDiff)(t, this.field);
                    i.range.startOffset = r.start,
                    i.range.endOffset = r.end
                }
                this.editor._onAction("editField", {
                    parentPath: this.parent.getInternalPath(),
                    index: this.getIndex(),
                    oldValue: this.previousField,
                    newValue: this.field,
                    oldSelection: e,
                    newSelection: i
                }),
                this.previousField = this.field
            }
        },
        {
            key: "_updateDomValue",
            value: function() {
                var e = this.dom.value;
                if (e) {
                    var t = ["jsoneditor-value"],
                    n = this.value,
                    i = "auto" === this.type ? Object(s.getType)(n) : this.type,
                    r = "string" === i && Object(s.isUrl)(n);
                    if (t.push("jsoneditor-" + i), r && t.push("jsoneditor-url"), "" === String(this.value) && "array" !== this.type && "object" !== this.type && t.push("jsoneditor-empty"), this.searchValueActive && t.push("jsoneditor-highlight-active"), this.searchValue && t.push("jsoneditor-highlight"), e.className = t.join(" "), "array" === i || "object" === i) {
                        var o = this.childs ? this.childs.length: 0;
                        e.title = this.type + " containing " + o + " items"
                    } else r && this.editable.value ? e.title = Object(u.c)("openUrl") : e.title = "";
                    if ("boolean" === i && this.editable.value ? (this.dom.checkbox || (this.dom.checkbox = document.createElement("input"), this.dom.checkbox.type = "checkbox", this.dom.tdCheckbox = document.createElement("td"), this.dom.tdCheckbox.className = "jsoneditor-tree", this.dom.tdCheckbox.appendChild(this.dom.checkbox), this.dom.tdValue.parentNode.insertBefore(this.dom.tdCheckbox, this.dom.tdValue)), this.dom.checkbox.checked = this.value) : this.dom.tdCheckbox && (this.dom.tdCheckbox.parentNode.removeChild(this.dom.tdCheckbox), delete this.dom.tdCheckbox, delete this.dom.checkbox), this.enum && this.editable.value) {
                        if (!this.dom.select) {
                            this.dom.select = document.createElement("select"),
                            this.id = this.field + "_" + (new Date).getUTCMilliseconds(),
                            this.dom.select.id = this.id,
                            this.dom.select.name = this.dom.select.id,
                            this.dom.select.option = document.createElement("option"),
                            this.dom.select.option.value = "",
                            this.dom.select.option.innerHTML = "--",
                            this.dom.select.appendChild(this.dom.select.option);
                            for (var a = 0; a < this.enum.length; a++) this.dom.select.option = document.createElement("option"),
                            this.dom.select.option.value = this.enum[a],
                            this.dom.select.option.innerHTML = this.enum[a],
                            this.dom.select.option.value === this.value && (this.dom.select.option.selected = !0),
                            this.dom.select.appendChild(this.dom.select.option);
                            this.dom.tdSelect = document.createElement("td"),
                            this.dom.tdSelect.className = "jsoneditor-tree",
                            this.dom.tdSelect.appendChild(this.dom.select),
                            this.dom.tdValue.parentNode.insertBefore(this.dom.tdSelect, this.dom.tdValue)
                        } ! this.schema || L(this.schema, "oneOf") || L(this.schema, "anyOf") || L(this.schema, "allOf") ? delete this.valueFieldHTML: (this.valueFieldHTML = this.dom.tdValue.innerHTML, this.dom.tdValue.style.visibility = "hidden", this.dom.tdValue.innerHTML = "")
                    } else this.dom.tdSelect && (this.dom.tdSelect.parentNode.removeChild(this.dom.tdSelect), delete this.dom.tdSelect, delete this.dom.select, this.dom.tdValue.innerHTML = this.valueFieldHTML, this.dom.tdValue.style.visibility = "", delete this.valueFieldHTML);
                    if (this.editable.value && this.editor.options.colorPicker && "string" == typeof n && Object(s.isValidColor)(n) ? (this.dom.color || (this.dom.color = document.createElement("div"), this.dom.color.className = "jsoneditor-color", this.dom.tdColor = document.createElement("td"), this.dom.tdColor.className = "jsoneditor-tree", this.dom.tdColor.appendChild(this.dom.color), this.dom.tdValue.parentNode.insertBefore(this.dom.tdColor, this.dom.tdValue), this.dom.value.style.color = "#1A1A1A"), this.dom.color.style.backgroundColor = n) : this._deleteDomColor(), this._showTimestampTag()) {
                        this.dom.date || (this.dom.date = document.createElement("div"), this.dom.date.className = "jsoneditor-date", this.dom.value.parentNode.appendChild(this.dom.date));
                        var l = null;
                        if ("function" == typeof this.editor.options.timestampFormat && (l = this.editor.options.timestampFormat({
                            field: this.field,
                            value: this.value,
                            path: this.getPath()
                        })), l) {
                            for (; this.dom.date.firstChild;) this.dom.date.removeChild(this.dom.date.firstChild);
                            this.dom.date.appendChild(document.createTextNode(l))
                        } else this.dom.date.innerHTML = new Date(n).toISOString();
                        this.dom.date.title = new Date(n).toString()
                    } else this.dom.date && (this.dom.date.parentNode.removeChild(this.dom.date), delete this.dom.date);
                    Object(s.stripFormatting)(e),
                    this._updateDomDefault()
                }
            }
        },
        {
            key: "_deleteDomColor",
            value: function() {
                this.dom.color && (this.dom.tdColor.parentNode.removeChild(this.dom.tdColor), delete this.dom.tdColor, delete this.dom.color, this.dom.value.style.color = "")
            }
        },
        {
            key: "_updateDomField",
            value: function() {
                var e = this.dom.field;
                if (e) {
                    var t = Object(s.makeFieldTooltip)(this.schema, this.editor.options.language);
                    t && (e.title = t),
                    "" === String(this.field) && "array" !== this.parent.type ? Object(s.addClassName)(e, "jsoneditor-empty") : Object(s.removeClassName)(e, "jsoneditor-empty"),
                    this.searchFieldActive ? Object(s.addClassName)(e, "jsoneditor-highlight-active") : Object(s.removeClassName)(e, "jsoneditor-highlight-active"),
                    this.searchField ? Object(s.addClassName)(e, "jsoneditor-highlight") : Object(s.removeClassName)(e, "jsoneditor-highlight"),
                    Object(s.stripFormatting)(e)
                }
            }
        },
        {
            key: "_getDomField",
            value: function(e) {
                if (this._clearFieldError(), this.dom.field && this.fieldEditable && (this.fieldInnerText = Object(s.getInnerText)(this.dom.field), "" === this.fieldInnerText && "" !== this.dom.field.innerHTML && (this.dom.field.innerHTML = "")), void 0 !== this.fieldInnerText) try {
                    var t = this._unescapeHTML(this.fieldInnerText),
                    n = this.parent.getFieldNames(this); - 1 !== n.indexOf(t) ? e ? (t = Object(s.findUniqueName)(t, n)) !== this.field && (this.field = t, this._debouncedOnChangeField()) : this._setFieldError(Object(u.c)("duplicateFieldError")) : t !== this.field && (this.field = t, this._debouncedOnChangeField())
                } catch(e) {
                    this._setFieldError(Object(u.c)("cannotParseFieldError"))
                }
            }
        },
        {
            key: "_updateDomDefault",
            value: function() {
                if (this.schema && void 0 !== this.schema.
            default && !this._hasChilds()) {
                    var e = this.dom.select ? this.dom.select: this.dom.value;
                    e && (this.value === this.schema.
                default ? (e.title = Object(u.c)("default"), Object(s.addClassName)(e, "jsoneditor-is-default"), Object(s.removeClassName)(e, "jsoneditor-is-not-default")) : (e.removeAttribute("title"), Object(s.removeClassName)(e, "jsoneditor-is-default"), Object(s.addClassName)(e, "jsoneditor-is-not-default")))
                }
            }
        },
        {
            key: "_showTimestampTag",
            value: function() {
                if ("number" != typeof this.value) return ! 1;
                var e = this.editor.options.timestampTag;
                if ("function" == typeof e) {
                    var t = e({
                        field: this.field,
                        value: this.value,
                        path: this.getPath()
                    });
                    return "boolean" == typeof t ? t: Object(s.isTimestamp)(this.field, this.value)
                }
                return ! 0 === e && Object(s.isTimestamp)(this.field, this.value)
            }
        },
        {
            key: "clearDom",
            value: function() {
                this.dom = {}
            }
        },
        {
            key: "getDom",
            value: function() {
                var e = this.dom;
                if (e.tr) return e.tr;
                if (this._updateEditability(), e.tr = document.createElement("tr"), e.tr.node = this, "tree" === this.editor.options.mode) {
                    var t = document.createElement("td");
                    if (this.editable.field && this.parent) {
                        var n = document.createElement("button");
                        n.type = "button",
                        e.drag = n,
                        n.className = "jsoneditor-button jsoneditor-dragarea",
                        n.title = Object(u.c)("drag"),
                        t.appendChild(n)
                    }
                    e.tr.appendChild(t);
                    var i = document.createElement("td"),
                    r = document.createElement("button");
                    r.type = "button",
                    e.menu = r,
                    r.className = "jsoneditor-button jsoneditor-contextmenu-button",
                    r.title = Object(u.c)("actionsMenu"),
                    i.appendChild(e.menu),
                    e.tr.appendChild(i)
                }
                var o = document.createElement("td");
                return e.tr.appendChild(o),
                e.tree = this._createDomTree(),
                o.appendChild(e.tree),
                this.updateDom({
                    updateIndexes: !0
                }),
                e.tr
            }
        },
        {
            key: "isVisible",
            value: function() {
                return this.dom && this.dom.tr && this.dom.tr.parentNode || !1
            }
        },
        {
            key: "isDescendantOf",
            value: function(e) {
                for (var t = this.parent; t;) {
                    if (t === e) return ! 0;
                    t = t.parent
                }
                return ! 1
            }
        },
        {
            key: "_createDomField",
            value: function() {
                return document.createElement("div")
            }
        },
        {
            key: "setHighlight",
            value: function(e) {
                this.dom.tr && (e ? Object(s.addClassName)(this.dom.tr, "jsoneditor-highlight") : Object(s.removeClassName)(this.dom.tr, "jsoneditor-highlight"), this.append && this.append.setHighlight(e), this.childs && this.childs.forEach((function(t) {
                    t.setHighlight(e)
                })))
            }
        },
        {
            key: "setSelected",
            value: function(e, t) {
                this.selected = e,
                this.dom.tr && (e ? Object(s.addClassName)(this.dom.tr, "jsoneditor-selected") : Object(s.removeClassName)(this.dom.tr, "jsoneditor-selected"), t ? Object(s.addClassName)(this.dom.tr, "jsoneditor-first") : Object(s.removeClassName)(this.dom.tr, "jsoneditor-first"), this.append && this.append.setSelected(e), this.showMore && this.showMore.setSelected(e), this.childs && this.childs.forEach((function(t) {
                    t.setSelected(e)
                })))
            }
        },
        {
            key: "updateValue",
            value: function(e) {
                this.value = e,
                this.previousValue = e,
                this.valueError = void 0,
                this.updateDom()
            }
        },
        {
            key: "updateField",
            value: function(e) {
                this.field = e,
                this.previousField = e,
                this.fieldError = void 0,
                this.updateDom()
            }
        },
        {
            key: "updateDom",
            value: function(t) {
                var n = this.dom.tree;
                n && (n.style.marginLeft = 24 * this.getLevel() + "px");
                var i = this.dom.field;
                if (i) {
                    var r;
                    if (this.fieldEditable ? (i.contentEditable = this.editable.field, i.spellcheck = !1, i.className = "jsoneditor-field") : (i.contentEditable = !1, i.className = "jsoneditor-readonly"), void 0 !== this.index) r = this.index;
                    else if (void 0 !== this.field) r = this.field;
                    else {
                        var o = this.editor.options.schema ? e._findSchema(this.editor.options.schema, this.editor.options.schemaRefs || {},
                        this.getPath()) : void 0;
                        r = o && o.title ? o.title: this._hasChilds() ? this.type: ""
                    }
                    var a = this._escapeHTML(r);
                    document.activeElement === i && a === this._unescapeHTML(Object(s.getInnerText)(i)) || (i.innerHTML = a),
                    this._updateSchema()
                }
                var l = this.dom.value;
                if (l) if ("array" === this.type || "object" === this.type) this.updateNodeName();
                else {
                    var c = this._escapeHTML(this.value);
                    document.activeElement === l && c === this._unescapeHTML(Object(s.getInnerText)(l)) || (l.innerHTML = c)
                }
                var u = this.dom.tr;
                u && ("array" === this.type || "object" === this.type ? (Object(s.addClassName)(u, "jsoneditor-expandable"), this.expanded ? (Object(s.addClassName)(u, "jsoneditor-expanded"), Object(s.removeClassName)(u, "jsoneditor-collapsed")) : (Object(s.addClassName)(u, "jsoneditor-collapsed"), Object(s.removeClassName)(u, "jsoneditor-expanded"))) : (Object(s.removeClassName)(u, "jsoneditor-expandable"), Object(s.removeClassName)(u, "jsoneditor-expanded"), Object(s.removeClassName)(u, "jsoneditor-collapsed"))),
                this._updateDomField(),
                this._updateDomValue(),
                t && !0 === t.updateIndexes && this._updateDomIndexes(),
                t && !0 === t.recurse && this.childs && this.childs.forEach((function(e) {
                    e.updateDom(t)
                })),
                this.error && this.updateError(),
                this.append && this.append.updateDom(),
                this.showMore && this.showMore.updateDom(),
                this._updateCssClassName()
            }
        },
        {
            key: "_updateSchema",
            value: function() {
                this.editor && this.editor.options && (this.schema = this.editor.options.schema ? e._findSchema(this.editor.options.schema, this.editor.options.schemaRefs || {},
                this.getPath()) : null, this.schema ? this.enum = e._findEnum(this.schema) : delete this.enum)
            }
        },
        {
            key: "_updateDomIndexes",
            value: function() {
                var e = this.dom.value,
                t = this.childs;
                e && t && ("array" === this.type ? t.forEach((function(e, t) {
                    e.index = t;
                    var n = e.dom.field;
                    n && (n.innerHTML = t)
                })) : "object" === this.type && t.forEach((function(e) {
                    void 0 !== e.index && (delete e.index, void 0 === e.field && (e.field = ""))
                })))
            }
        },
        {
            key: "_createDomValue",
            value: function() {
                var e;
                return "array" === this.type ? (e = document.createElement("div")).innerHTML = "[...]": "object" === this.type ? (e = document.createElement("div")).innerHTML = "{...}": !this.editable.value && Object(s.isUrl)(this.value) ? ((e = document.createElement("a")).href = this.value, e.innerHTML = this._escapeHTML(this.value)) : ((e = document.createElement("div")).contentEditable = this.editable.value, e.spellcheck = !1, e.innerHTML = this._escapeHTML(this.value)),
                e
            }
        },
        {
            key: "_createDomExpandButton",
            value: function() {
                var e = document.createElement("button");
                return e.type = "button",
                this._hasChilds() ? (e.className = this.expanded ? "jsoneditor-button jsoneditor-expanded": "jsoneditor-button jsoneditor-collapsed", e.title = Object(u.c)("expandTitle")) : (e.className = "jsoneditor-button jsoneditor-invisible", e.title = ""),
                e
            }
        },
        {
            key: "_createDomTree",
            value: function() {
                var e = this.dom,
                t = document.createElement("table"),
                n = document.createElement("tbody");
                t.style.borderCollapse = "collapse",
                t.className = "jsoneditor-values",
                t.appendChild(n);
                var i = document.createElement("tr");
                n.appendChild(i);
                var r = document.createElement("td");
                r.className = "jsoneditor-tree",
                i.appendChild(r),
                e.expand = this._createDomExpandButton(),
                r.appendChild(e.expand),
                e.tdExpand = r;
                var o = document.createElement("td");
                o.className = "jsoneditor-tree",
                i.appendChild(o),
                e.field = this._createDomField(),
                o.appendChild(e.field),
                e.tdField = o;
                var a = document.createElement("td");
                a.className = "jsoneditor-tree",
                i.appendChild(a),
                "object" !== this.type && "array" !== this.type && (a.appendChild(document.createTextNode(":")), a.className = "jsoneditor-separator"),
                e.tdSeparator = a;
                var s = document.createElement("td");
                return s.className = "jsoneditor-tree",
                i.appendChild(s),
                e.value = this._createDomValue(),
                s.appendChild(e.value),
                e.tdValue = s,
                t
            }
        },
        {
            key: "onEvent",
            value: function(e) {
                var t = e.type,
                n = e.target || e.srcElement,
                i = this.dom,
                r = this,
                o = this._hasChilds();
                if ("function" == typeof this.editor.options.onEvent && this._onEvent(e), n !== i.drag && n !== i.menu || ("mouseover" === t ? this.editor.highlighter.highlight(this) : "mouseout" === t && this.editor.highlighter.unhighlight()), "click" === t && n === i.menu) {
                    var a = r.editor.highlighter;
                    a.highlight(r),
                    a.lock(),
                    Object(s.addClassName)(i.menu, "jsoneditor-selected"),
                    this.showContextMenu(i.menu, (function() {
                        Object(s.removeClassName)(i.menu, "jsoneditor-selected"),
                        a.unlock(),
                        a.unhighlight()
                    }))
                }
                if ("click" === t && n === i.expand && o) {
                    var l = e.ctrlKey;
                    this._onExpand(l)
                }
                "click" !== t || e.target !== r.dom.tdColor && e.target !== r.dom.color || this._showColorPicker(),
                "change" === t && n === i.checkbox && (this.dom.value.innerHTML = !this.value, this._getDomValue(), this._updateDomDefault()),
                "change" === t && n === i.select && (this.dom.value.innerHTML = i.select.value, this._getDomValue(), this._updateDomValue());
                var c = i.value;
                if (n === c) switch (t) {
                case "blur":
                case "change":
                    this._getDomValue(),
                    this._clearValueError(),
                    this._updateDomValue();
                    var u = this._escapeHTML(this.value);
                    u !== this._unescapeHTML(Object(s.getInnerText)(c)) && (c.innerHTML = u);
                    break;
                case "input":
                    this._getDomValue(),
                    this._updateDomValue();
                    break;
                case "keydown":
                case "mousedown":
                    this.editor.selection = this.editor.getDomSelection();
                    break;
                case "click":
                    e.ctrlKey && this.editable.value && Object(s.isUrl)(this.value) && (e.preventDefault(), window.open(this.value, "_blank"));
                    break;
                case "keyup":
                    this._getDomValue(),
                    this._updateDomValue();
                    break;
                case "cut":
                case "paste":
                    setTimeout((function() {
                        r._getDomValue(),
                        r._updateDomValue()
                    }), 1)
                }
                var h = i.field;
                if (n === h) switch (t) {
                case "blur":
                    this._getDomField(!0),
                    this._updateDomField();
                    var d = this._escapeHTML(this.field);
                    d !== this._unescapeHTML(Object(s.getInnerText)(h)) && (h.innerHTML = d);
                    break;
                case "input":
                    this._getDomField(),
                    this._updateSchema(),
                    this._updateDomField(),
                    this._updateDomValue();
                    break;
                case "keydown":
                case "mousedown":
                    this.editor.selection = this.editor.getDomSelection();
                    break;
                case "keyup":
                    this._getDomField(),
                    this._updateDomField();
                    break;
                case "cut":
                case "paste":
                    setTimeout((function() {
                        r._getDomField(),
                        r._updateDomField()
                    }), 1)
                }
                var f = i.tree;
                f && n === f.parentNode && "click" === t && !e.hasMoved && ((void 0 !== e.offsetX ? e.offsetX < 24 * (this.getLevel() + 1) : e.pageX < Object(s.getAbsoluteLeft)(i.tdSeparator)) || o ? h && (Object(s.setEndOfContentEditable)(h), h.focus()) : c && !this.enum && (Object(s.setEndOfContentEditable)(c), c.focus())),
                (n !== i.tdExpand || o) && n !== i.tdField && n !== i.tdSeparator || "click" !== t || e.hasMoved || h && (Object(s.setEndOfContentEditable)(h), h.focus()),
                "keydown" === t && this.onKeyDown(e)
            }
        },
        {
            key: "_onEvent",
            value: function(e) {
                var t = e.target;
                if (t === this.dom.field || t === this.dom.value) {
                    var n = {
                        field: this.getField(),
                        path: this.getPath()
                    };
                    this._hasChilds() || t !== this.dom.value || (n.value = this.getValue()),
                    this.editor.options.onEvent(n, e)
                }
            }
        },
        {
            key: "onKeyDown",
            value: function(t) {
                var n, i, r, o, a, l, c, u, h, d, f, g, p, m = t.which || t.keyCode,
                v = t.target || t.srcElement,
                y = t.ctrlKey,
                b = t.shiftKey,
                C = t.altKey,
                I = !1,
                w = "tree" === this.editor.options.mode,
                x = this.editor.multiselection.nodes.length > 0 ? this.editor.multiselection.nodes: [this],
                A = x[0],
                _ = x[x.length - 1];
                if (13 === m) {
                    if (v === this.dom.value) this.editable.value && !t.ctrlKey || Object(s.isUrl)(this.value) && (window.open(this.value, "_blank"), I = !0);
                    else if (v === this.dom.expand && this._hasChilds()) {
                        var S = t.ctrlKey;
                        this._onExpand(S),
                        v.focus(),
                        I = !0
                    }
                } else if (68 === m) y && w && (e.onDuplicate(x), I = !0);
                else if (69 === m) y && (this._onExpand(b), v.focus(), I = !0);
                else if (77 === m && w) y && (this.showContextMenu(v), I = !0);
                else if (46 === m && w) y && (e.onRemove(x), I = !0);
                else if (45 === m && w) y && !b ? (this._onInsertBefore(), I = !0) : y && b && (this._onInsertAfter(), I = !0);
                else if (35 === m) {
                    if (C) {
                        var L = this._lastNode();
                        L && L.focus(e.focusElement || this._getElementName(v)),
                        I = !0
                    }
                } else if (36 === m) {
                    if (C) {
                        var R = this._firstNode();
                        R && R.focus(e.focusElement || this._getElementName(v)),
                        I = !0
                    }
                } else if (37 === m) {
                    if (C && !b) {
                        var M = this._previousElement(v);
                        M && this.focus(this._getElementName(M)),
                        I = !0
                    } else if (C && b && w) {
                        if (_.expanded) {
                            var P = _.getAppendDom();
                            r = P ? P.nextSibling: void 0
                        } else {
                            var E = _.getDom();
                            r = E.nextSibling
                        }
                        if (r) {
                            i = e.getNodeFromTarget(r),
                            o = r.nextSibling;
                            var O = e.getNodeFromTarget(o);
                            i && i instanceof T && 1 !== _.parent.childs.length && O && O.parent && (a = this.editor.getDomSelection(), l = (c = A.parent).childs[_.getIndex() + 1] || c.append, u = A.getIndex(), h = O.getIndex(), d = c.getInternalPath(), f = O.parent.getInternalPath(), x.forEach((function(e) {
                                O.parent.moveBefore(e, O)
                            })), this.focus(e.focusElement || this._getElementName(v)), this.editor._onAction("moveNodes", {
                                count: x.length,
                                fieldNames: x.map(k),
                                oldParentPath: c.getInternalPath(),
                                newParentPath: A.parent.getInternalPath(),
                                oldIndex: l.getIndex(),
                                newIndex: A.getIndex(),
                                oldIndexRedo: u,
                                newIndexRedo: h,
                                oldParentPathRedo: d,
                                newParentPathRedo: f,
                                oldSelection: a,
                                newSelection: this.editor.getDomSelection()
                            }))
                        }
                    }
                } else if (38 === m) C && !b ? ((n = this._previousNode()) && (this.editor.deselect(!0), n.focus(e.focusElement || this._getElementName(v))), I = !0) : !C && y && b && w ? ((n = this._previousNode()) && ((p = this.editor.multiselection).start = p.start || this, p.end = n, g = this.editor._findTopLevelNodes(p.start, p.end), this.editor.select(g), n.focus("field")), I = !0) : C && b && w && ((n = A._previousNode()) && n.parent && (a = this.editor.getDomSelection(), l = (c = A.parent).childs[_.getIndex() + 1] || c.append, u = A.getIndex(), h = n.getIndex(), d = c.getInternalPath(), f = n.parent.getInternalPath(), x.forEach((function(e) {
                    n.parent.moveBefore(e, n)
                })), this.focus(e.focusElement || this._getElementName(v)), this.editor._onAction("moveNodes", {
                    count: x.length,
                    fieldNames: x.map(k),
                    oldParentPath: c.getInternalPath(),
                    newParentPath: A.parent.getInternalPath(),
                    oldIndex: l.getIndex(),
                    newIndex: A.getIndex(),
                    oldIndexRedo: u,
                    newIndexRedo: h,
                    oldParentPathRedo: d,
                    newParentPathRedo: f,
                    oldSelection: a,
                    newSelection: this.editor.getDomSelection()
                })), I = !0);
                else if (39 === m) {
                    if (C && !b) {
                        var N = this._nextElement(v);
                        N && this.focus(this._getElementName(N)),
                        I = !0
                    } else if (C && b && w) {
                        var D = (E = A.getDom()).previousSibling;
                        D && (n = e.getNodeFromTarget(D)) && n.parent && !n.isVisible() && (a = this.editor.getDomSelection(), l = (c = A.parent).childs[_.getIndex() + 1] || c.append, u = A.getIndex(), h = n.getIndex(), d = c.getInternalPath(), f = n.parent.getInternalPath(), x.forEach((function(e) {
                            n.parent.moveBefore(e, n)
                        })), this.focus(e.focusElement || this._getElementName(v)), this.editor._onAction("moveNodes", {
                            count: x.length,
                            fieldNames: x.map(k),
                            oldParentPath: c.getInternalPath(),
                            newParentPath: A.parent.getInternalPath(),
                            oldIndex: l.getIndex(),
                            newIndex: A.getIndex(),
                            oldIndexRedo: u,
                            newIndexRedo: h,
                            oldParentPathRedo: d,
                            newParentPathRedo: f,
                            oldSelection: a,
                            newSelection: this.editor.getDomSelection()
                        }))
                    }
                } else if (40 === m) if (C && !b)(i = this._nextNode()) && (this.editor.deselect(!0), i.focus(e.focusElement || this._getElementName(v))),
                I = !0;
                else if (!C && y && b && w)(i = this._nextNode()) && ((p = this.editor.multiselection).start = p.start || this, p.end = i, g = this.editor._findTopLevelNodes(p.start, p.end), this.editor.select(g), i.focus("field")),
                I = !0;
                else if (C && b && w) { (i = _.expanded ? _.append ? _.append._nextNode() : void 0 : _._nextNode()) && !i.isVisible() && (i = i.parent.showMore),
                    i && i instanceof T && (i = _);
                    var B = i && (i._nextNode() || i.parent.append);
                    B && B.parent && (a = this.editor.getDomSelection(), l = (c = A.parent).childs[_.getIndex() + 1] || c.append, u = A.getIndex(), h = B.getIndex(), d = c.getInternalPath(), f = B.parent.getInternalPath(), x.forEach((function(e) {
                        B.parent.moveBefore(e, B)
                    })), this.focus(e.focusElement || this._getElementName(v)), this.editor._onAction("moveNodes", {
                        count: x.length,
                        fieldNames: x.map(k),
                        oldParentPath: c.getInternalPath(),
                        newParentPath: A.parent.getInternalPath(),
                        oldParentPathRedo: d,
                        newParentPathRedo: f,
                        oldIndexRedo: u,
                        newIndexRedo: h,
                        oldIndex: l.getIndex(),
                        newIndex: A.getIndex(),
                        oldSelection: a,
                        newSelection: this.editor.getDomSelection()
                    })),
                    I = !0
                }
                I && (t.preventDefault(), t.stopPropagation())
            }
        },
        {
            key: "_onExpand",
            value: function(e) {
                if (e) {
                    var t = this.dom.tr.parentNode,
                    n = t.parentNode,
                    i = n.scrollTop;
                    n.removeChild(t)
                }
                this.expanded ? this.collapse(e) : this.expand(e),
                e && (n.appendChild(t), n.scrollTop = i)
            }
        },
        {
            key: "_showColorPicker",
            value: function() {
                if ("function" == typeof this.editor.options.onColorPicker && this.dom.color) {
                    var e = this;
                    e._deleteDomColor(),
                    e.updateDom();
                    var t = Object(y.a)(this.dom.color, this.editor.getPopupAnchor());
                    this.editor.options.onColorPicker(t, this.value, (function(t) {
                        "string" == typeof t && t !== e.value && (e._deleteDomColor(), e.value = t, e.updateDom(), e._debouncedOnChangeValue())
                    }))
                }
            }
        },
        {
            key: "getFieldNames",
            value: function(e) {
                return "object" === this.type ? this.childs.filter((function(t) {
                    return t !== e
                })).map((function(e) {
                    return e.field
                })) : []
            }
        },
        {
            key: "_onInsertBefore",
            value: function(t, n, i) {
                var r = this.editor.getDomSelection(),
                o = new e(this.editor, {
                    field: void 0 !== t ? t: "",
                    value: void 0 !== n ? n: "",
                    type: i
                });
                o.expand(!0);
                var a = this.getInternalPath();
                this.parent.insertBefore(o, this),
                this.editor.highlighter.unhighlight(),
                o.focus("field");
                var s = this.editor.getDomSelection();
                this.editor._onAction("insertBeforeNodes", {
                    nodes: [o],
                    paths: [o.getInternalPath()],
                    beforePath: a,
                    parentPath: this.parent.getInternalPath(),
                    oldSelection: r,
                    newSelection: s
                })
            }
        },
        {
            key: "_onInsertAfter",
            value: function(t, n, i) {
                var r = this.editor.getDomSelection(),
                o = new e(this.editor, {
                    field: void 0 !== t ? t: "",
                    value: void 0 !== n ? n: "",
                    type: i
                });
                o.expand(!0),
                this.parent.insertAfter(o, this),
                this.editor.highlighter.unhighlight(),
                o.focus("field");
                var a = this.editor.getDomSelection();
                this.editor._onAction("insertAfterNodes", {
                    nodes: [o],
                    paths: [o.getInternalPath()],
                    afterPath: this.getInternalPath(),
                    parentPath: this.parent.getInternalPath(),
                    oldSelection: r,
                    newSelection: a
                })
            }
        },
        {
            key: "_onAppend",
            value: function(t, n, i) {
                var r = this.editor.getDomSelection(),
                o = new e(this.editor, {
                    field: void 0 !== t ? t: "",
                    value: void 0 !== n ? n: "",
                    type: i
                });
                o.expand(!0),
                this.parent.appendChild(o),
                this.editor.highlighter.unhighlight(),
                o.focus("field");
                var a = this.editor.getDomSelection();
                this.editor._onAction("appendNodes", {
                    nodes: [o],
                    paths: [o.getInternalPath()],
                    parentPath: this.parent.getInternalPath(),
                    oldSelection: r,
                    newSelection: a
                })
            }
        },
        {
            key: "_onChangeType",
            value: function(e) {
                var t = this.type;
                if (e !== t) {
                    var n = this.editor.getDomSelection();
                    this.changeType(e);
                    var i = this.editor.getDomSelection();
                    this.editor._onAction("changeType", {
                        path: this.getInternalPath(),
                        oldType: t,
                        newType: e,
                        oldSelection: n,
                        newSelection: i
                    })
                }
            }
        },
        {
            key: "sort",
            value: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if ("string" == typeof e && (e = Object(s.parsePath)(e)), this._hasChilds()) {
                    this.hideChilds();
                    var i = this.childs;
                    this.childs = this.childs.concat();
                    var r = "desc" === t ? -1 : 1;
                    "object" === this.type ? this.childs.sort((function(e, t) {
                        return r * v()(e.field, t.field)
                    })) : this.childs.sort((function(t, n) {
                        var i = t.getNestedChild(e),
                        o = n.getNestedChild(e);
                        if (!i) return r;
                        if (!o) return - r;
                        var a = i.value,
                        s = o.value;
                        return "string" != typeof a && "string" != typeof s ? a > s ? r: a < s ? -r: 0 : r * v()(a, s)
                    })),
                    this._updateDomIndexes(),
                    this.showChilds(),
                    !0 === n && this.editor._onAction("sort", {
                        path: this.getInternalPath(),
                        oldChilds: i,
                        newChilds: this.childs
                    })
                }
            }
        },
        {
            key: "update",
            value: function(e) {
                var t = this.getInternalValue();
                this.setValue(e),
                this.editor._onAction("transform", {
                    path: this.getInternalPath(),
                    oldValue: t,
                    newValue: this.getInternalValue()
                })
            }
        },
        {
            key: "_detachFromDom",
            value: function() {
                var e, t = this.dom.tr ? this.dom.tr.parentNode: void 0,
                n = (e = this.expanded ? this.getAppendDom() : this.getDom()) && e.parentNode ? e.nextSibling: void 0;
                return this.hide({
                    resetVisibleChilds: !1
                }),
                {
                    table: t,
                    nextTr: n
                }
            }
        },
        {
            key: "_attachToDom",
            value: function(e) {
                e.table && (e.nextTr ? e.table.insertBefore(this.getDom(), e.nextTr) : e.table.appendChild(this.getDom())),
                this.expanded && this.showChilds()
            }
        },
        {
            key: "transform",
            value: function(e) {
                if (this._hasChilds()) {
                    this.hideChilds();
                    try {
                        var t = this.getInternalValue(),
                        n = this.getValue(),
                        i = this.editor.options.executeQuery(n, e);
                        this.setValue(i);
                        var r = this.getInternalValue();
                        this.editor._onAction("transform", {
                            path: this.getInternalPath(),
                            oldValue: t,
                            newValue: r
                        }),
                        this.showChilds()
                    } catch(e) {
                        this.showChilds(),
                        this.editor._onError(e)
                    }
                }
            }
        },
        {
            key: "extract",
            value: function() {
                this.editor.node.hideChilds(),
                this.hideChilds();
                try {
                    var e = this.editor.node.getInternalValue();
                    this.editor._setRoot(this);
                    var t = this.editor.node.getInternalValue();
                    this.editor._onAction("transform", {
                        path: this.editor.node.getInternalPath(),
                        oldValue: e,
                        newValue: t
                    })
                } catch(e) {
                    this.editor._onError(e)
                } finally {
                    this.updateDom({
                        recurse: !0
                    }),
                    this.showChilds()
                }
            }
        },
        {
            key: "getNestedChild",
            value: function(e) {
                for (var t = 0,
                n = this; n && t < e.length;) n = n.findChildByProperty(e[t]),
                t++;
                return n
            }
        },
        {
            key: "findChildByProperty",
            value: function(e) {
                if ("object" === this.type) return this.childs.find((function(t) {
                    return t.field === e
                }))
            }
        },
        {
            key: "getAppendDom",
            value: function() {
                return this.append || (this.append = new T(this.editor), this.append.setParent(this)),
                this.append.getDom()
            }
        },
        {
            key: "getShowMoreDom",
            value: function() {
                return this.showMore || (this.showMore = new R(this.editor, this)),
                this.showMore.getDom()
            }
        },
        {
            key: "nextSibling",
            value: function() {
                var e = this.parent.childs.indexOf(this);
                return this.parent.childs[e + 1] || this.parent.append
            }
        },
        {
            key: "_previousNode",
            value: function() {
                var t = null,
                n = this.getDom();
                if (n && n.parentNode) {
                    var i = n;
                    do {
                        i = i.previousSibling, t = e.getNodeFromTarget(i)
                    } while ( i && t && t instanceof T && ! t . isVisible ())
                }
                return t
            }
        },
        {
            key: "_nextNode",
            value: function() {
                var t = null,
                n = this.getDom();
                if (n && n.parentNode) {
                    var i = n;
                    do {
                        i = i.nextSibling, t = e.getNodeFromTarget(i)
                    } while ( i && t && t instanceof T && ! t . isVisible ())
                }
                return t
            }
        },
        {
            key: "_firstNode",
            value: function() {
                var t = null,
                n = this.getDom();
                if (n && n.parentNode) {
                    var i = n.parentNode.firstChild;
                    t = e.getNodeFromTarget(i)
                }
                return t
            }
        },
        {
            key: "_lastNode",
            value: function() {
                var t = null,
                n = this.getDom();
                if (n && n.parentNode) {
                    var i = n.parentNode.lastChild;
                    for (t = e.getNodeFromTarget(i); i && t && !t.isVisible();) i = i.previousSibling,
                    t = e.getNodeFromTarget(i)
                }
                return t
            }
        },
        {
            key: "_previousElement",
            value: function(e) {
                var t = this.dom;
                switch (e) {
                case t.value:
                    if (this.fieldEditable) return t.field;
                case t.field:
                    if (this._hasChilds()) return t.expand;
                case t.expand:
                    return t.menu;
                case t.menu:
                    if (t.drag) return t.drag;
                default:
                    return null
                }
            }
        },
        {
            key: "_nextElement",
            value: function(e) {
                var t = this.dom;
                switch (e) {
                case t.drag:
                    return t.menu;
                case t.menu:
                    if (this._hasChilds()) return t.expand;
                case t.expand:
                    if (this.fieldEditable) return t.field;
                case t.field:
                    if (!this._hasChilds()) return t.value;
                default:
                    return null
                }
            }
        },
        {
            key: "_getElementName",
            value: function(e) {
                var t = this;
                return Object.keys(this.dom).find((function(n) {
                    return t.dom[n] === e
                }))
            }
        },
        {
            key: "_hasChilds",
            value: function() {
                return "array" === this.type || "object" === this.type
            }
        },
        {
            key: "addTemplates",
            value: function(e, t) {
                var n = this,
                i = n.editor.options.templates;
                if (null != i) {
                    i.length && e.push({
                        type: "separator"
                    });
                    var r = function(e, t) {
                        n._onAppend(e, t)
                    },
                    o = function(e, t) {
                        n._onInsertBefore(e, t)
                    };
                    i.forEach((function(n) {
                        e.push({
                            text: n.text,
                            className: n.className || "jsoneditor-type-object",
                            title: n.title,
                            click: t ? r.bind(this, n.field, n.value) : o.bind(this, n.field, n.value)
                        })
                    }))
                }
            }
        },
        {
            key: "showContextMenu",
            value: function(t, n) {
                var i = this,
                r = [];
                if (this.editable.value && r.push({
                    text: Object(u.c)("type"),
                    title: Object(u.c)("typeTitle"),
                    className: "jsoneditor-type-" + this.type,
                    submenu: [{
                        text: Object(u.c)("auto"),
                        className: "jsoneditor-type-auto" + ("auto" === this.type ? " jsoneditor-selected": ""),
                        title: Object(u.c)("autoType"),
                        click: function() {
                            i._onChangeType("auto")
                        }
                    },
                    {
                        text: Object(u.c)("array"),
                        className: "jsoneditor-type-array" + ("array" === this.type ? " jsoneditor-selected": ""),
                        title: Object(u.c)("arrayType"),
                        click: function() {
                            i._onChangeType("array")
                        }
                    },
                    {
                        text: Object(u.c)("object"),
                        className: "jsoneditor-type-object" + ("object" === this.type ? " jsoneditor-selected": ""),
                        title: Object(u.c)("objectType"),
                        click: function() {
                            i._onChangeType("object")
                        }
                    },
                    {
                        text: Object(u.c)("string"),
                        className: "jsoneditor-type-string" + ("string" === this.type ? " jsoneditor-selected": ""),
                        title: Object(u.c)("stringType"),
                        click: function() {
                            i._onChangeType("string")
                        }
                    }]
                }), this._hasChilds() && (this.editor.options.enableSort && r.push({
                    text: Object(u.c)("sort"),
                    title: Object(u.c)("sortTitle", {
                        type: this.type
                    }),
                    className: "jsoneditor-sort-asc",
                    click: function() {
                        i.showSortModal()
                    }
                }), this.editor.options.enableTransform && r.push({
                    text: Object(u.c)("transform"),
                    title: Object(u.c)("transformTitle", {
                        type: this.type
                    }),
                    className: "jsoneditor-transform",
                    click: function() {
                        i.showTransformModal()
                    }
                }), this.parent && r.push({
                    text: Object(u.c)("extract"),
                    title: Object(u.c)("extractTitle", {
                        type: this.type
                    }),
                    className: "jsoneditor-extract",
                    click: function() {
                        i.extract()
                    }
                })), this.parent && this.parent._hasChilds()) {
                    r.length && r.push({
                        type: "separator"
                    });
                    var o = i.parent.childs;
                    if (i === o[o.length - 1]) {
                        var a = [{
                            text: Object(u.c)("auto"),
                            className: "jsoneditor-type-auto",
                            title: Object(u.c)("autoType"),
                            click: function() {
                                i._onAppend("", "", "auto")
                            }
                        },
                        {
                            text: Object(u.c)("array"),
                            className: "jsoneditor-type-array",
                            title: Object(u.c)("arrayType"),
                            click: function() {
                                i._onAppend("", [])
                            }
                        },
                        {
                            text: Object(u.c)("object"),
                            className: "jsoneditor-type-object",
                            title: Object(u.c)("objectType"),
                            click: function() {
                                i._onAppend("", {})
                            }
                        },
                        {
                            text: Object(u.c)("string"),
                            className: "jsoneditor-type-string",
                            title: Object(u.c)("stringType"),
                            click: function() {
                                i._onAppend("", "", "string")
                            }
                        }];
                        i.addTemplates(a, !0),
                        r.push({
                            text: Object(u.c)("appendText"),
                            title: Object(u.c)("appendTitle"),
                            submenuTitle: Object(u.c)("appendSubmenuTitle"),
                            className: "jsoneditor-append",
                            click: function() {
                                i._onAppend("", "", "auto")
                            },
                            submenu: a
                        })
                    }
                    var s = [{
                        text: Object(u.c)("auto"),
                        className: "jsoneditor-type-auto",
                        title: Object(u.c)("autoType"),
                        click: function() {
                            i._onInsertBefore("", "", "auto")
                        }
                    },
                    {
                        text: Object(u.c)("array"),
                        className: "jsoneditor-type-array",
                        title: Object(u.c)("arrayType"),
                        click: function() {
                            i._onInsertBefore("", [])
                        }
                    },
                    {
                        text: Object(u.c)("object"),
                        className: "jsoneditor-type-object",
                        title: Object(u.c)("objectType"),
                        click: function() {
                            i._onInsertBefore("", {})
                        }
                    },
                    {
                        text: Object(u.c)("string"),
                        className: "jsoneditor-type-string",
                        title: Object(u.c)("stringType"),
                        click: function() {
                            i._onInsertBefore("", "", "string")
                        }
                    }];
                    i.addTemplates(s, !1),
                    r.push({
                        text: Object(u.c)("insert"),
                        title: Object(u.c)("insertTitle"),
                        submenuTitle: Object(u.c)("insertSub"),
                        className: "jsoneditor-insert",
                        click: function() {
                            i._onInsertBefore("", "", "auto")
                        },
                        submenu: s
                    }),
                    this.editable.field && (r.push({
                        text: Object(u.c)("duplicateText"),
                        title: Object(u.c)("duplicateField"),
                        className: "jsoneditor-duplicate",
                        click: function() {
                            e.onDuplicate(i)
                        }
                    }), r.push({
                        text: Object(u.c)("removeText"),
                        title: Object(u.c)("removeField"),
                        className: "jsoneditor-remove",
                        click: function() {
                            e.onRemove(i)
                        }
                    }))
                }
                if (this.editor.options.onCreateMenu) {
                    var l = i.getPath();
                    r = this.editor.options.onCreateMenu(r, {
                        type: "single",
                        path: l,
                        paths: [l]
                    })
                }
                new f.a(r, {
                    close: n
                }).show(t, this.editor.getPopupAnchor())
            }
        },
        {
            key: "showSortModal",
            value: function() {
                var e = this,
                t = this.editor.options.modalAnchor || I.a,
                n = this.getValue();
                Object(b.showSortModal)(t, n, (function(t) {
                    var n = t.path,
                    i = Object(s.parsePath)(n);
                    e.sortedBy = t,
                    e.sort(i, t.direction)
                }), e.sortedBy)
            }
        },
        {
            key: "showTransformModal",
            value: function() {
                var e = this,
                t = this.editor.options,
                n = t.modalAnchor,
                i = t.createQuery,
                r = t.executeQuery,
                o = t.queryDescription,
                a = this.getValue();
                Object(C.showTransformModal)({
                    anchor: n || I.a,
                    json: a,
                    queryDescription: o,
                    createQuery: i,
                    executeQuery: r,
                    onTransform: function(t) {
                        e.transform(t)
                    }
                })
            }
        },
        {
            key: "_getType",
            value: function(e) {
                return e instanceof Array ? "array": e instanceof Object ? "object": "string" == typeof e && "string" != typeof Object(s.parseString)(e) ? "string": "auto"
            }
        },
        {
            key: "_escapeHTML",
            value: function(e) {
                if ("string" != typeof e) return String(e);
                var t = String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ {2}/g, " &nbsp;").replace(/^ /, "&nbsp;").replace(/ $/, "&nbsp;"),
                n = JSON.stringify(t),
                i = n.substring(1, n.length - 1);
                return ! 0 === this.editor.options.escapeUnicode && (i = Object(s.escapeUnicodeChars)(i)),
                i
            }
        },
        {
            key: "_unescapeHTML",
            value: function(e) {
                var t = '"' + this._escapeJSON(e) + '"';
                return Object(s.parse)(t).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;|\u00A0/g, " ").replace(/&amp;/g, "&")
            }
        },
        {
            key: "_escapeJSON",
            value: function(e) {
                for (var t = "",
                n = 0; n < e.length;) {
                    var i = e.charAt(n);
                    "\n" === i ? t += "\\n": "\\" === i ? (t += i, n++, "" !== (i = e.charAt(n)) && -1 !== '"\\/bfnrtu'.indexOf(i) || (t += "\\"), t += i) : t += '"' === i ? '\\"': i,
                    n++
                }
                return t
            }
        },
        {
            key: "updateNodeName",
            value: function() {
                var e, t = this.childs ? this.childs.length: 0;
                if ("object" === this.type || "array" === this.type) {
                    if (this.editor.options.onNodeName) try {
                        e = this.editor.options.onNodeName({
                            path: this.getPath(),
                            size: t,
                            type: this.type
                        })
                    } catch(e) {
                        console.error("Error in onNodeName callback: ", e)
                    }
                    this.dom.value.innerHTML = "object" === this.type ? "{" + (e || t) + "}": "[" + (e || t) + "]"
                }
            }
        },
        {
            key: "recursivelyUpdateNodeName",
            value: function() {
                var e;
                if (this.expanded && (this.updateNodeName(), "undefined" !== this.childs)) for (e in this.childs) this.childs[e].recursivelyUpdateNodeName()
            }
        }]) && x(t.prototype, n),
        i && x(t, i),
        e
    } ();
    A.prototype.DEBOUNCE_INTERVAL = 150,
    A.prototype.MAX_SEARCH_RESULTS = 999;
    var _ = 100;
    function S(e) {
        return e.getInternalPath()
    }
    function k(e) {
        return e.getField()
    }
    function L(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    A.focusElement = void 0,
    A.select = function(e) {
        setTimeout((function() {
            Object(s.selectContentEditable)(e)
        }), 0)
    },
    A.onDragStart = function(e, t) {
        if (!Array.isArray(e)) return A.onDragStart([e], t);
        if (0 !== e.length) {
            var n = e[0],
            i = e[e.length - 1],
            r = n.parent,
            o = A.getNodeFromTarget(t.target),
            a = n.editor,
            l = Object(s.getAbsoluteTop)(o.dom.tr) - Object(s.getAbsoluteTop)(n.dom.tr);
            a.mousemove || (a.mousemove = Object(s.addEventListener)(window, "mousemove", (function(t) {
                A.onDrag(e, t)
            }))),
            a.mouseup || (a.mouseup = Object(s.addEventListener)(window, "mouseup", (function(t) {
                A.onDragEnd(e, t)
            }))),
            a.highlighter.lock(),
            a.drag = {
                oldCursor: document.body.style.cursor,
                oldSelection: a.getDomSelection(),
                oldPaths: e.map(S),
                oldParent: r,
                oldNextNode: r.childs[i.getIndex() + 1] || r.append,
                oldParentPathRedo: r.getInternalPath(),
                oldIndexRedo: n.getIndex(),
                mouseX: t.pageX,
                offsetY: l,
                level: n.getLevel()
            },
            document.body.style.cursor = "move",
            t.preventDefault()
        }
    },
    A.onDrag = function(e, t) {
        if (!Array.isArray(e)) return A.onDrag([e], t);
        if (0 !== e.length) {
            var n, i, r, o, a, l, c, u, h, d, f, g = e[0].editor,
            p = t.pageY - g.drag.offsetY,
            m = t.pageX,
            v = !1,
            y = e[0],
            b = y.dom.tr,
            C = Object(s.getAbsoluteTop)(b),
            I = b.offsetHeight;
            if (p < C) {
                n = b;
                do {
                    n = n.previousSibling, l = A.getNodeFromTarget(n), u = n ? Object(s.getAbsoluteTop)(n) : 0
                } while ( n && p < u );
                l && !l.parent && (l = void 0),
                l || (n = (a = b.parentNode.firstChild) ? a.nextSibling: void 0, (l = A.getNodeFromTarget(n)) === y && (l = void 0)),
                l && l.isVisible() && p > (u = (n = l.dom.tr) ? Object(s.getAbsoluteTop)(n) : 0) + I && (l = void 0),
                l && (e.forEach((function(e) {
                    l.parent.moveBefore(e, l)
                })), v = !0)
            } else {
                var w = e[e.length - 1];
                if (r = (o = w.expanded && w.append ? w.append.getDom() : w.dom.tr) ? o.nextSibling: void 0) {
                    h = Object(s.getAbsoluteTop)(r),
                    i = r;
                    do {
                        c = A.getNodeFromTarget(i), i && (d = i.nextSibling ? Object(s.getAbsoluteTop)(i.nextSibling) : 0, f = i ? d - h: 0, c && c.parent.childs.length === e.length && c.parent.childs[e.length - 1] === w && (C += 27), i = i.nextSibling)
                    } while ( i && p > C + f );
                    if (c && c.parent) {
                        var x = m - g.drag.mouseX,
                        _ = Math.round(x / 24 / 2),
                        S = g.drag.level + _,
                        k = c.getLevel();
                        for (n = c.dom.tr && c.dom.tr.previousSibling; k < S && n;) {
                            if (l = A.getNodeFromTarget(n), e.some((function(e) {
                                return e === l || l.isDescendantOf(e)
                            })));
                            else {
                                if (! (l instanceof T)) break;
                                var L = l.parent.childs;
                                if (L.length === e.length && L[e.length - 1] === w) break;
                                k = (c = A.getNodeFromTarget(n)).getLevel()
                            }
                            n = n.previousSibling
                        }
                        c instanceof T && !c.isVisible() && c.parent.showMore.isVisible() && (c = c._nextNode()),
                        c && c.dom.tr && o.nextSibling !== c.dom.tr && (e.forEach((function(e) {
                            c.parent.moveBefore(e, c)
                        })), v = !0)
                    }
                }
            }
            v && (g.drag.mouseX = m, g.drag.level = y.getLevel()),
            g.startAutoScroll(p),
            t.preventDefault()
        }
    },
    A.onDragEnd = function(e, t) {
        if (!Array.isArray(e)) return A.onDrag([e], t);
        if (0 !== e.length) {
            var n = e[0],
            i = n.editor;
            e[0] && e[0].dom.menu.focus();
            var r = i.drag.oldParent.getInternalPath(),
            o = n.parent.getInternalPath(),
            a = i.drag.oldParent === n.parent,
            l = i.drag.oldNextNode.getIndex(),
            c = n.getIndex(),
            u = i.drag.oldParentPathRedo,
            h = i.drag.oldIndexRedo,
            d = a && h < c ? c + e.length: c;
            a && h === c || i._onAction("moveNodes", {
                count: e.length,
                fieldNames: e.map(k),
                oldParentPath: r,
                newParentPath: o,
                oldIndex: l,
                newIndex: c,
                oldIndexRedo: h,
                newIndexRedo: d,
                oldParentPathRedo: u,
                newParentPathRedo: null,
                oldSelection: i.drag.oldSelection,
                newSelection: i.getDomSelection()
            }),
            document.body.style.cursor = i.drag.oldCursor,
            i.highlighter.unlock(),
            e.forEach((function(e) {
                e.updateDom(),
                t.target !== e.dom.drag && t.target !== e.dom.menu && i.highlighter.unhighlight()
            })),
            delete i.drag,
            i.mousemove && (Object(s.removeEventListener)(window, "mousemove", i.mousemove), delete i.mousemove),
            i.mouseup && (Object(s.removeEventListener)(window, "mouseup", i.mouseup), delete i.mouseup),
            i.stopAutoScroll(),
            t.preventDefault()
        }
    },
    A._findEnum = function(e) {
        if (e.enum) return e.enum;
        var t = e.oneOf || e.anyOf || e.allOf;
        if (t) {
            var n = t.filter((function(e) {
                return e.enum
            }));
            if (n.length > 0) return n[0].enum
        }
        return null
    },
    A._findSchema = function(e, t, n) {
        var i = e,
        r = i,
        o = e.oneOf || e.anyOf || e.allOf;
        o || (o = [e]);
        for (var a = 0; a < o.length; a++) {
            "$ref" in (i = o[a]) && "string" == typeof i.$ref && (i = t[i.$ref]) && (r = A._findSchema(i, t, n));
            for (var s = 0; s < n.length && i; s++) {
                var l = n.slice(s + 1, n.length),
                c = n[s];
                if ("string" != typeof c || !i.patternProperties || i.properties && c in i.properties)"string" == typeof c && i.properties ? c in i.properties ? (i = i.properties[c]) && (r = A._findSchema(i, t, l)) : r = null: "number" == typeof c && i.items && (i = i.items) && (r = A._findSchema(i, t, l));
                else for (var u in i.patternProperties) c.match(u) && (r = A._findSchema(i.patternProperties[u], t, l))
            }
        }
        return r === e && n.length > 0 ? null: r
    },
    A.onRemove = function(e) {
        if (!Array.isArray(e)) return A.onRemove([e]);
        if (e && e.length > 0) {
            var t = e[0],
            n = t.parent,
            i = t.editor,
            r = t.getIndex();
            i.highlighter.unhighlight();
            var o = i.getDomSelection();
            A.blurNodes(e);
            var a = i.getDomSelection(),
            s = e.map(S);
            e.forEach((function(e) {
                e.parent._remove(e)
            })),
            i._onAction("removeNodes", {
                nodes: e,
                paths: s,
                parentPath: n.getInternalPath(),
                index: r,
                oldSelection: o,
                newSelection: a
            })
        }
    },
    A.onDuplicate = function(e) {
        if (!Array.isArray(e)) return A.onDuplicate([e]);
        if (e && e.length > 0) {
            var t = e[e.length - 1],
            n = t.parent,
            i = t.editor;
            i.deselect(i.multiselection.nodes);
            var r = i.getDomSelection(),
            o = t,
            a = e.map((function(e) {
                var t = e.clone();
                if ("object" === e.parent.type) {
                    var i = e.parent.getFieldNames();
                    t.field = Object(s.findUniqueName)(e.field, i)
                }
                return n.insertAfter(t, o),
                o = t,
                t
            }));
            1 === e.length ? "object" === a[0].parent.type ? (a[0].dom.field.innerHTML = e[0].field, a[0].focus("field")) : a[0].focus() : i.select(a);
            var l = i.getDomSelection();
            i._onAction("duplicateNodes", {
                paths: e.map(S),
                clonePaths: a.map(S),
                afterPath: t.getInternalPath(),
                parentPath: n.getInternalPath(),
                oldSelection: r,
                newSelection: l
            })
        }
    },
    A.getNodeFromTarget = function(e) {
        for (; e;) {
            if (e.node) return e.node;
            e = e.parentNode
        }
    },
    A.targetIsColorPicker = function(e) {
        var t = A.getNodeFromTarget(e);
        if (t) for (var n = e && e.parentNode; n;) {
            if (n === t.dom.color) return ! 0;
            n = n.parentNode
        }
        return ! 1
    },
    A.blurNodes = function(e) {
        if (Array.isArray(e)) {
            var t = e[0],
            n = t.parent,
            i = t.getIndex();
            n.childs[i + e.length] ? n.childs[i + e.length].focus() : n.childs[i - 1] ? n.childs[i - 1].focus() : n.focus()
        } else A.blurNodes([e])
    };
    var T = function(e) {
        function t(e) {
            this.editor = e,
            this.dom = {}
        }
        return t.prototype = new e,
        t.prototype.getDom = function() {
            var e = this.dom;
            if (e.tr) return e.tr;
            this._updateEditability();
            var t = document.createElement("tr");
            if (t.className = "jsoneditor-append", t.node = this, e.tr = t, "tree" === this.editor.options.mode) {
                e.tdDrag = document.createElement("td");
                var n = document.createElement("td");
                e.tdMenu = n;
                var i = document.createElement("button");
                i.type = "button",
                i.className = "jsoneditor-button jsoneditor-contextmenu-button",
                i.title = "Click to open the actions menu (Ctrl+M)",
                e.menu = i,
                n.appendChild(e.menu)
            }
            var r = document.createElement("td"),
            o = document.createElement("div");
            return o.innerHTML = "(" + Object(u.c)("empty") + ")",
            o.className = "jsoneditor-readonly",
            r.appendChild(o),
            e.td = r,
            e.text = o,
            this.updateDom(),
            t
        },
        t.prototype.getPath = function() {
            return null
        },
        t.prototype.getIndex = function() {
            return null
        },
        t.prototype.updateDom = function(e) {
            var t = this.dom,
            n = t.td;
            n && (n.style.paddingLeft = 24 * this.getLevel() + 26 + "px");
            var i = t.text;
            i && (i.innerHTML = "(" + Object(u.c)("empty") + " " + this.parent.type + ")");
            var r = t.tr;
            this.isVisible() ? t.tr.firstChild || (t.tdDrag && r.appendChild(t.tdDrag), t.tdMenu && r.appendChild(t.tdMenu), r.appendChild(n)) : t.tr.firstChild && (t.tdDrag && r.removeChild(t.tdDrag), t.tdMenu && r.removeChild(t.tdMenu), r.removeChild(n))
        },
        t.prototype.isVisible = function() {
            return 0 === this.parent.childs.length
        },
        t.prototype.showContextMenu = function(e, t) {
            var n = this,
            i = [{
                text: Object(u.c)("auto"),
                className: "jsoneditor-type-auto",
                title: Object(u.c)("autoType"),
                click: function() {
                    n._onAppend("", "", "auto")
                }
            },
            {
                text: Object(u.c)("array"),
                className: "jsoneditor-type-array",
                title: Object(u.c)("arrayType"),
                click: function() {
                    n._onAppend("", [])
                }
            },
            {
                text: Object(u.c)("object"),
                className: "jsoneditor-type-object",
                title: Object(u.c)("objectType"),
                click: function() {
                    n._onAppend("", {})
                }
            },
            {
                text: Object(u.c)("string"),
                className: "jsoneditor-type-string",
                title: Object(u.c)("stringType"),
                click: function() {
                    n._onAppend("", "", "string")
                }
            }];
            n.addTemplates(i, !0);
            var r = [{
                text: Object(u.c)("appendText"),
                title: Object(u.c)("appendTitleAuto"),
                submenuTitle: Object(u.c)("appendSubmenuTitle"),
                className: "jsoneditor-insert",
                click: function() {
                    n._onAppend("", "", "auto")
                },
                submenu: i
            }];
            if (this.editor.options.onCreateMenu) {
                var o = n.parent.getPath();
                r = this.editor.options.onCreateMenu(r, {
                    type: "append",
                    path: o,
                    paths: [o]
                })
            }
            new f.a(r, {
                close: t
            }).show(e, this.editor.getPopupAnchor())
        },
        t.prototype.onEvent = function(e) {
            var t = e.type,
            n = e.target || e.srcElement,
            i = this.dom;
            if (n === i.menu && ("mouseover" === t ? this.editor.highlighter.highlight(this.parent) : "mouseout" === t && this.editor.highlighter.unhighlight()), "click" === t && n === i.menu) {
                var r = this.editor.highlighter;
                r.highlight(this.parent),
                r.lock(),
                Object(s.addClassName)(i.menu, "jsoneditor-selected"),
                this.showContextMenu(i.menu, (function() {
                    Object(s.removeClassName)(i.menu, "jsoneditor-selected"),
                    r.unlock(),
                    r.unhighlight()
                }))
            }
            "keydown" === t && this.onKeyDown(e)
        },
        t
    } (A),
    R = function(e) {
        function t(e, t) {
            this.editor = e,
            this.parent = t,
            this.dom = {}
        }
        return t.prototype = new e,
        t.prototype.getDom = function() {
            if (this.dom.tr) return this.dom.tr;
            if (this._updateEditability(), !this.dom.tr) {
                var e = this,
                t = this.parent,
                n = document.createElement("a");
                n.appendChild(document.createTextNode(Object(u.c)("showMore"))),
                n.href = "#",
                n.onclick = function(n) {
                    return t.visibleChilds = Math.floor(t.visibleChilds / t.getMaxVisibleChilds() + 1) * t.getMaxVisibleChilds(),
                    e.updateDom(),
                    t.showChilds(),
                    n.preventDefault(),
                    !1
                };
                var i = document.createElement("a");
                i.appendChild(document.createTextNode(Object(u.c)("showAll"))),
                i.href = "#",
                i.onclick = function(n) {
                    return t.visibleChilds = 1 / 0,
                    e.updateDom(),
                    t.showChilds(),
                    n.preventDefault(),
                    !1
                };
                var r = document.createElement("div"),
                o = document.createTextNode(this._getShowMoreText());
                r.className = "jsoneditor-show-more",
                r.appendChild(o),
                r.appendChild(n),
                r.appendChild(document.createTextNode(". ")),
                r.appendChild(i),
                r.appendChild(document.createTextNode(". "));
                var a = document.createElement("td");
                a.appendChild(r);
                var s = document.createElement("tr");
                "tree" === this.editor.options.mode && (s.appendChild(document.createElement("td")), s.appendChild(document.createElement("td"))),
                s.appendChild(a),
                s.className = "jsoneditor-show-more",
                this.dom.tr = s,
                this.dom.moreContents = r,
                this.dom.moreText = o
            }
            return this.updateDom(),
            this.dom.tr
        },
        t.prototype.updateDom = function(e) {
            if (this.isVisible()) {
                if (this.dom.tr.node = this.parent.childs[this.parent.visibleChilds], !this.dom.tr.parentNode) {
                    var t = this.parent._getNextTr();
                    t && t.parentNode.insertBefore(this.dom.tr, t)
                }
                this.dom.moreText.nodeValue = this._getShowMoreText(),
                this.dom.moreContents.style.marginLeft = 24 * (this.getLevel() + 1) + "px"
            } else this.dom.tr && this.dom.tr.parentNode && this.dom.tr.parentNode.removeChild(this.dom.tr)
        },
        t.prototype._getShowMoreText = function() {
            return Object(u.c)("showMoreStatus", {
                visibleChilds: this.parent.visibleChilds,
                totalChilds: this.parent.childs.length
            }) + " "
        },
        t.prototype.isVisible = function() {
            return this.parent.expanded && this.parent.childs.length > this.parent.visibleChilds
        },
        t.prototype.onEvent = function(e) {
            "keydown" === e.type && this.onKeyDown(e)
        },
        t
    } (A),
    M = n(8),
    P = n(9),
    E = {
        start: function(e, t, n) {
            return 0 === t.indexOf(e)
        },
        contain: function(e, t, n) {
            return t.indexOf(e) > -1
        }
    },
    O = n(4),
    N = {
        create: function(e, t) {
            if (!e) throw new Error("No container element provided.");
            this.container = e,
            this.dom = {},
            this.highlighter = new a,
            this.selection = void 0,
            this.multiselection = {
                nodes: []
            },
            this.validateSchema = null,
            this.validationSequence = 0,
            this.errorNodes = [],
            this.lastSchemaErrors = void 0,
            this.node = null,
            this.focusTarget = null,
            this._setOptions(t),
            t.autocomplete && (this.autocomplete = function(e) { (e = e || {}).filter = e.filter || "start",
                e.trigger = e.trigger || "keydown",
                e.confirmKeys = e.confirmKeys || [39, 35, 9],
                e.caseSensitive = e.caseSensitive || !1;
                var t = "",
                n = "",
                i = document.createElement("div");
                i.style.position = "relative",
                i.style.outline = "0",
                i.style.border = "0",
                i.style.margin = "0",
                i.style.padding = "0";
                var r, o, a = document.createElement("div");
                function s(e) {
                    var t, n;
                    document.createRange ? ((t = document.createRange()).selectNodeContents(e), t.collapse(!1), (n = window.getSelection()).removeAllRanges(), n.addRange(t)) : document.selection && ((t = document.body.createTextRange()).moveToElementText(e), t.collapse(!1), t.select())
                }
                function l(e) {
                    return void 0 === r && ((r = document.createElement("span")).style.visibility = "hidden", r.style.position = "fixed", r.style.outline = "0", r.style.margin = "0", r.style.padding = "0", r.style.border = "0", r.style.left = "0", r.style.whiteSpace = "pre", r.style.fontSize = t, r.style.fontFamily = n, r.style.fontWeight = "normal", document.body.appendChild(r)),
                    r.innerHTML = String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                    r.getBoundingClientRect().right
                }
                a.className = "autocomplete dropdown",
                a.style.position = "absolute",
                a.style.visibility = "hidden";
                var c = {
                    onArrowDown: function() {},
                    onArrowUp: function() {},
                    onEnter: function() {},
                    onTab: function() {},
                    startFrom: 0,
                    options: [],
                    element: null,
                    elementHint: null,
                    elementStyle: null,
                    wrapper: i,
                    show: function(e, r, o) {
                        var s = this;
                        this.startFrom = r,
                        this.wrapper.remove(),
                        this.elementHint && (this.elementHint.remove(), this.elementHint = null),
                        "" === t && (t = window.getComputedStyle(e).getPropertyValue("font-size")),
                        "" === n && (n = window.getComputedStyle(e).getPropertyValue("font-family")),
                        a.style.marginLeft = "0",
                        a.style.marginTop = e.getBoundingClientRect().height + "px",
                        this.options = o.map(String),
                        this.element !== e && (this.element = e, this.elementStyle = {
                            zIndex: this.element.style.zIndex,
                            position: this.element.style.position,
                            backgroundColor: this.element.style.backgroundColor,
                            borderColor: this.element.style.borderColor
                        }),
                        this.element.style.zIndex = 3,
                        this.element.style.position = "relative",
                        this.element.style.backgroundColor = "transparent",
                        this.element.style.borderColor = "transparent",
                        this.elementHint = e.cloneNode(),
                        this.elementHint.className = "autocomplete hint",
                        this.elementHint.style.zIndex = 2,
                        this.elementHint.style.position = "absolute",
                        this.elementHint.onfocus = function() {
                            s.element.focus()
                        },
                        this.element.addEventListener && (this.element.removeEventListener("keydown", h), this.element.addEventListener("keydown", h, !1), this.element.removeEventListener("blur", d), this.element.addEventListener("blur", d, !1)),
                        i.appendChild(this.elementHint),
                        i.appendChild(a),
                        e.parentElement.appendChild(i),
                        this.repaint(e)
                    },
                    setText: function(e) {
                        this.element.innerText = e
                    },
                    getText: function() {
                        return this.element.innerText
                    },
                    hideDropDown: function() {
                        this.wrapper.remove(),
                        this.elementHint && (this.elementHint.remove(), this.elementHint = null, u.hide(), this.element.style.zIndex = this.elementStyle.zIndex, this.element.style.position = this.elementStyle.position, this.element.style.backgroundColor = this.elementStyle.backgroundColor, this.element.style.borderColor = this.elementStyle.borderColor)
                    },
                    repaint: function(t) {
                        var n = t.innerText;
                        n = n.replace("\n", "");
                        var i = this.options.length,
                        r = n.substring(this.startFrom);
                        o = n.substring(0, this.startFrom);
                        for (var s = 0; s < i; s++) {
                            var c = this.options[s];
                            if (!e.caseSensitive && 0 === c.toLowerCase().indexOf(r.toLowerCase()) || e.caseSensitive && 0 === c.indexOf(r)) {
                                this.elementHint.innerText = o + r + c.substring(r.length),
                                this.elementHint.realInnerText = o + c;
                                break
                            }
                        }
                        a.style.left = l(o) + "px",
                        u.refresh(r, this.options),
                        this.elementHint.style.width = l(this.elementHint.innerText) + 10 + "px",
                        "hidden" === a.style.visibility || (this.elementHint.style.width = l(this.elementHint.innerText) + a.clientWidth + "px")
                    }
                },
                u = function(t, n) {
                    var i = [],
                    r = 0,
                    o = -1,
                    a = function() {
                        this.style.backgroundColor = "#ddd"
                    },
                    s = function() {
                        this.style.backgroundColor = ""
                    },
                    l = function() {
                        c.hide(),
                        c.onmouseselection(this.__hint, c.rs)
                    },
                    c = {
                        rs: n,
                        hide: function() {
                            t.style.visibility = "hidden"
                        },
                        refresh: function(n, o) {
                            t.style.visibility = "hidden",
                            r = 0,
                            t.innerHTML = "";
                            var u = window.innerHeight || document.documentElement.clientHeight,
                            h = t.parentNode.getBoundingClientRect(),
                            d = h.top - 6,
                            f = u - h.bottom - 6;
                            i = [];
                            var g = "function" == typeof e.filter ? e.filter: E[e.filter],
                            p = g ? o.filter((function(t) {
                                return g(e.caseSensitive ? n: n.toLowerCase(), e.caseSensitive ? t: t.toLowerCase(), e)
                            })) : [];
                            0 !== (i = p.map((function(e) {
                                var i = document.createElement("div");
                                return i.className = "item",
                                i.onmouseover = a,
                                i.onmouseout = s,
                                i.onmousedown = l,
                                i.__hint = e,
                                i.innerHTML = e.substring(0, n.length) + "<excel>" + e.substring(n.length) + "</excel>",
                                t.appendChild(i),
                                i
                            }))).length && (1 === i.length && (n.toLowerCase() === i[0].__hint.toLowerCase() && !e.caseSensitive || n === i[0].__hint && e.caseSensitive) || i.length < 2 || (c.highlight(0), d > 3 * f ? (t.style.maxHeight = d + "px", t.style.top = "", t.style.bottom = "100%") : (t.style.top = "100%", t.style.bottom = "", t.style.maxHeight = f + "px"), t.style.visibility = "visible"))
                        },
                        highlight: function(e) { - 1 !== o && i[o] && (i[o].className = "item"),
                            i[e].className = "item hover",
                            o = e
                        },
                        move: function(e) {
                            return "hidden" === t.style.visibility ? "": (r + e === -1 || r + e === i.length || (r += e, c.highlight(r)), i[r].__hint)
                        },
                        onmouseselection: function() {}
                    };
                    return c
                } (a, c),
                h = function(t) {
                    var n = (t = t || window.event).keyCode;
                    if (null != this.elementHint && 33 !== n && 34 !== n) {
                        if (27 === n) return c.hideDropDown(),
                        c.element.focus(),
                        t.preventDefault(),
                        void t.stopPropagation();
                        var i = this.element.innerText;
                        if (i = i.replace("\n", ""), e.confirmKeys.indexOf(n) >= 0) return 9 === n && 0 === this.elementHint.innerText.length && c.onTab(),
                        void(this.elementHint.innerText.length > 0 && this.element.innerText !== this.elementHint.realInnerText && (this.element.innerText = this.elementHint.realInnerText, c.hideDropDown(), s(this.element), 9 === n && (c.element.focus(), t.preventDefault(), t.stopPropagation())));
                        if (13 !== n) {
                            if (40 === n) {
                                var r = i.substring(this.startFrom),
                                l = u.move(1);
                                return "" === l && c.onArrowDown(),
                                this.elementHint.innerText = o + r + l.substring(r.length),
                                this.elementHint.realInnerText = o + l,
                                t.preventDefault(),
                                void t.stopPropagation()
                            }
                            if (38 === n) {
                                var h = i.substring(this.startFrom),
                                d = u.move( - 1);
                                "" === d && c.onArrowUp(),
                                this.elementHint.innerText = o + h + d.substring(h.length),
                                this.elementHint.realInnerText = o + d,
                                t.preventDefault(),
                                t.stopPropagation()
                            }
                        } else if (0 === this.elementHint.innerText.length) c.onEnter();
                        else {
                            var f = "hidden" === a.style.visibility;
                            if (u.hide(), f) return c.hideDropDown(),
                            c.element.focus(),
                            void c.onEnter();
                            this.element.innerText = this.elementHint.realInnerText,
                            c.hideDropDown(),
                            s(this.element),
                            t.preventDefault(),
                            t.stopPropagation()
                        }
                    }
                }.bind(c),
                d = function(e) {
                    c.hideDropDown()
                };
                return u.onmouseselection = function(e, t) {
                    t.element.innerText = t.elementHint.innerText = o + e,
                    t.hideDropDown(),
                    window.setTimeout((function() {
                        t.element.focus(),
                        s(t.element)
                    }), 1)
                },
                c
            } (t.autocomplete)),
            this.options.history && "view" !== this.options.mode && (this.history = new c(this)),
            this._createFrame(),
            this._createTable()
        },
        destroy: function() {
            this.frame && this.container && this.frame.parentNode === this.container && (this.container.removeChild(this.frame), this.frame = null),
            this.container = null,
            this.dom = null,
            this.clear(),
            this.node = null,
            this.focusTarget = null,
            this.selection = null,
            this.multiselection = null,
            this.errorNodes = null,
            this.validateSchema = null,
            this._debouncedValidate = null,
            this.history && (this.history.destroy(), this.history = null),
            this.searchBox && (this.searchBox.destroy(), this.searchBox = null),
            this.modeSwitcher && (this.modeSwitcher.destroy(), this.modeSwitcher = null),
            this.frameFocusTracker.destroy()
        },
        _setOptions: function(e) {
            var t = this;
            this.options = {
                search: !0,
                history: !0,
                mode: "tree",
                name: void 0,
                schema: null,
                schemaRefs: null,
                autocomplete: null,
                navigationBar: !0,
                mainMenuBar: !0,
                onSelectionChange: null,
                colorPicker: !0,
                onColorPicker: function(e, t, n) {
                    if (r.a) {
                        var i = e.getBoundingClientRect().top,
                        o = window.innerHeight - i < 300 && i > 300;
                        new r.a({
                            parent: e,
                            color: t,
                            popup: o ? "top": "bottom",
                            onDone: function(e) {
                                var t = 1 === e.rgba[3] ? e.hex.substr(0, 7) : e.hex;
                                n(t)
                            }
                        }).show()
                    } else console.warn("Cannot open color picker: the `vanilla-picker` library is not included in the bundle. Either use the full bundle or implement your own color picker using `onColorPicker`.")
                },
                timestampTag: !0,
                timestampFormat: null,
                createQuery: O.a,
                executeQuery: O.b,
                onEvent: null,
                enableSort: !0,
                enableTransform: !0
            },
            e && Object.keys(e).forEach((function(n) {
                t.options[n] = e[n]
            })),
            this.setSchema(this.options.schema, this.options.schemaRefs),
            this._debouncedValidate = Object(s.debounce)(this.validate.bind(this), this.DEBOUNCE_INTERVAL),
            e.onSelectionChange && this.onSelectionChange(e.onSelectionChange),
            Object(u.b)(this.options.languages),
            Object(u.a)(this.options.language)
        },
        set: function(e) {
            if (e instanceof Function || void 0 === e) this.clear();
            else {
                this.content.removeChild(this.table);
                var t = {
                    field: this.options.name,
                    value: e
                },
                n = new A(this, t);
                this._setRoot(n),
                this.validate(),
                this.node.expand(!1),
                this.content.appendChild(this.table)
            }
            this.history && this.history.clear(),
            this.searchBox && this.searchBox.clear()
        },
        update: function(e) {
            if (!this.node.deepEqual(e)) {
                var t = this.getSelection();
                if (this.onChangeDisabled = !0, this.node.update(e), this.onChangeDisabled = !1, this.validate(), this.searchBox && !this.searchBox.isEmpty() && this.searchBox.forceSearch(), t && t.start && t.end) {
                    var n = this.node.findNodeByPath(t.start.path),
                    i = this.node.findNodeByPath(t.end.path);
                    n && i ? this.setSelection(t.start, t.end) : this.setSelection({},
                    {})
                } else this.setSelection({},
                {})
            }
        },
        get: function() {
            return this.node ? this.node.getValue() : void 0
        },
        getText: function() {
            return JSON.stringify(this.get())
        },
        setText: function(e) {
            try {
                this.set(Object(s.parse)(e))
            } catch(n) {
                var t = Object(s.repair)(e);
                this.set(Object(s.parse)(t))
            }
        },
        updateText: function(e) {
            try {
                this.update(Object(s.parse)(e))
            } catch(n) {
                var t = Object(s.repair)(e);
                this.update(Object(s.parse)(t))
            }
        },
        setName: function(e) {
            this.options.name = e,
            this.node && this.node.updateField(this.options.name)
        },
        getName: function() {
            return this.options.name
        },
        focus: function() {
            var e = this.scrollableContent.querySelector("[contenteditable=true]");
            e ? e.focus() : this.node.dom.expand ? this.node.dom.expand.focus() : this.node.dom.menu ? this.node.dom.menu.focus() : (e = this.frame.querySelector("button")) && e.focus()
        },
        clear: function() {
            this.node && (this.node.hide(), delete this.node),
            this.treePath && this.treePath.reset()
        },
        _setRoot: function(e) {
            this.clear(),
            this.node = e,
            e.setParent(null),
            e.setField(this.getName(), !1),
            delete e.index,
            this.tbody.appendChild(e.getDom())
        },
        search: function(e) {
            var t;
            return this.node ? (this.content.removeChild(this.table), t = this.node.search(e), this.content.appendChild(this.table)) : t = [],
            t
        },
        expandAll: function() {
            this.node && (this.content.removeChild(this.table), this.node.expand(), this.content.appendChild(this.table))
        },
        collapseAll: function() {
            this.node && (this.content.removeChild(this.table), this.node.collapse(), this.content.appendChild(this.table))
        },
        _onAction: function(e, t) {
            this.history && this.history.add(e, t),
            this._onChange()
        },
        _onChange: function() {
            if (!this.onChangeDisabled) {
                if (this.selection = this.getDomSelection(), this._debouncedValidate(), this.treePath) {
                    var e = this.node && this.selection ? this.node.findNodeByInternalPath(this.selection.path) : this.multiselection ? this.multiselection.nodes[0] : void 0;
                    e ? this._updateTreePath(e.getNodePath()) : this.treePath.reset()
                }
                if (this.options.onChange) try {
                    this.options.onChange()
                } catch(e) {
                    console.error("Error in onChange callback: ", e)
                }
                if (this.options.onChangeJSON) try {
                    this.options.onChangeJSON(this.get())
                } catch(e) {
                    console.error("Error in onChangeJSON callback: ", e)
                }
                if (this.options.onChangeText) try {
                    this.options.onChangeText(this.getText())
                } catch(e) {
                    console.error("Error in onChangeText callback: ", e)
                }
                if (this.options.onClassName && this.node.recursivelyUpdateCssClassesOnNodes(), this.options.onNodeName && this.node.childs) try {
                    this.node.recursivelyUpdateNodeName()
                } catch(e) {
                    console.error("Error in onNodeName callback: ", e)
                }
            }
        },
        validate: function() {
            var e = this,
            t = this.node;
            if (t) {
                var n = t.getValue(),
                i = [];
                this.validateSchema && (this.validateSchema(n) || (i = this.validateSchema.errors.map((function(e) {
                    return Object(s.improveSchemaError)(e)
                })).map((function(e) {
                    return {
                        node: t.findNode(e.dataPath),
                        error: e,
                        type: "validation"
                    }
                })).filter((function(e) {
                    return null != e.node
                }))));
                try {
                    this.validationSequence++;
                    var r = this,
                    o = this.validationSequence;
                    this._validateCustom(n).then((function(t) {
                        if (o === r.validationSequence) {
                            var n = [].concat(i, t || []);
                            r._renderValidationErrors(n),
                            "function" == typeof e.options.onValidationError && (Object(s.isValidationErrorChanged)(n, e.lastSchemaErrors) && e.options.onValidationError.call(e, n), e.lastSchemaErrors = n)
                        }
                    })).
                    catch((function(e) {
                        console.error(e)
                    }))
                } catch(e) {
                    console.error(e)
                }
            }
        },
        _renderValidationErrors: function(e) {
            this.errorNodes && this.errorNodes.forEach((function(e) {
                e.setError(null)
            }));
            var t = e.reduce((function(e, t) {
                return t.node.findParents().filter((function(t) {
                    return ! e.some((function(e) {
                        return e[0] === t
                    }))
                })).map((function(e) {
                    return [e, t.node]
                })).concat(e)
            }), []);
            this.errorNodes = t.map((function(e) {
                return {
                    node: e[0],
                    child: e[1],
                    error: {
                        message: "object" === e[0].type ? "Contains invalid properties": "Contains invalid items"
                    }
                }
            })).concat(e).map((function(e) {
                return e.node.setError(e.error, e.child),
                e.node
            }))
        },
        _validateCustom: function(e) {
            try {
                if (this.options.onValidate) {
                    var t = this.node,
                    n = this.options.onValidate(e);
                    return (Object(s.isPromise)(n) ? n: Promise.resolve(n)).then((function(e) {
                        return Array.isArray(e) ? e.filter((function(e) {
                            var t = Object(s.isValidValidationError)(e);
                            return t || console.warn('Ignoring controller custom validation error with invalid structure. Expected structure: {path: [...], message: "..."}. Actual error:', e),
                            t
                        })).map((function(e) {
                            var n;
                            try {
                                n = e && e.path ? t.findNodeByPath(e.path) : null
                            } catch(e) {}
                            return n || console.warn("Ignoring validation error: node not found. Path:", e.path, "Error:", e),
                            {
                                node: n,
                                error: e,
                                type: "customValidation"
                            }
                        })).filter((function(e) {
                            return e && e.node && e.error && e.error.message
                        })) : null
                    }))
                }
            } catch(e) {
                return Promise.reject(e)
            }
            return Promise.resolve(null)
        },
        refresh: function() {
            this.node && this.node.updateDom({
                recurse: !0
            })
        },
        startAutoScroll: function(e) {
            var t = this,
            n = this.scrollableContent,
            i = Object(s.getAbsoluteTop)(n),
            r = n.clientHeight,
            o = i + r;
            e < i + 24 && n.scrollTop > 0 ? this.autoScrollStep = (i + 24 - e) / 3 : e > o - 24 && r + n.scrollTop < n.scrollHeight ? this.autoScrollStep = (o - 24 - e) / 3 : this.autoScrollStep = void 0,
            this.autoScrollStep ? this.autoScrollTimer || (this.autoScrollTimer = setInterval((function() {
                t.autoScrollStep ? n.scrollTop -= t.autoScrollStep: t.stopAutoScroll()
            }), 50)) : this.stopAutoScroll()
        },
        stopAutoScroll: function() {
            this.autoScrollTimer && (clearTimeout(this.autoScrollTimer), delete this.autoScrollTimer),
            this.autoScrollStep && delete this.autoScrollStep
        },
        setDomSelection: function(e) {
            if (e) if ("scrollTop" in e && this.scrollableContent && (this.scrollableContent.scrollTop = e.scrollTop), e.paths) {
                var t = this,
                n = e.paths.map((function(e) {
                    return t.node.findNodeByInternalPath(e)
                }));
                this.select(n)
            } else {
                var i = e.path ? this.node.findNodeByInternalPath(e.path) : null,
                r = i && e.domName ? i.dom[e.domName] : null;
                if (e.range && r) {
                    var o = Object.assign({},
                    e.range, {
                        container: r
                    });
                    Object(s.setSelectionOffset)(o)
                } else i && i.focus()
            }
        },
        getDomSelection: function() {
            var e = A.getNodeFromTarget(this.focusTarget),
            t = this.focusTarget,
            n = e ? Object.keys(e.dom).find((function(n) {
                return e.dom[n] === t
            })) : null,
            i = Object(s.getSelectionOffset)();
            return i && "DIV" !== i.container.nodeName && (i = null),
            i && i.container !== t && (i = null),
            i && delete i.container,
            {
                path: e ? e.getInternalPath() : null,
                domName: n,
                range: i,
                paths: this.multiselection.length > 0 ? this.multiselection.nodes.map((function(e) {
                    return e.getInternalPath()
                })) : null,
                scrollTop: this.scrollableContent ? this.scrollableContent.scrollTop: 0
            }
        },
        scrollTo: function(e, t) {
            var n = this.scrollableContent;
            if (n) {
                var i = this;
                i.animateTimeout && (clearTimeout(i.animateTimeout), delete i.animateTimeout),
                i.animateCallback && (i.animateCallback(!1), delete i.animateCallback);
                var r = n.clientHeight,
                o = n.scrollHeight - r,
                a = Math.min(Math.max(e - r / 4, 0), o); !
                function e() {
                    var r = n.scrollTop,
                    o = a - r;
                    Math.abs(o) > 3 ? (n.scrollTop += o / 3, i.animateCallback = t, i.animateTimeout = setTimeout(e, 50)) : (t && t(!0), n.scrollTop = a, delete i.animateTimeout, delete i.animateCallback)
                } ()
            } else t && t(!1)
        },
        _createFrame: function() {
            this.frame = document.createElement("div"),
            this.frame.className = "jsoneditor jsoneditor-mode-" + this.options.mode,
            this.container.appendChild(this.frame),
            this.contentOuter = document.createElement("div"),
            this.contentOuter.className = "jsoneditor-outer";
            var e = this;
            function t(t) {
                e._onEvent && e._onEvent(t)
            }
            var n = {
                target: this.frame,
                onFocus: this.options.onFocus || null,
                onBlur: this.options.onBlur || null
            };
            if (this.frameFocusTracker = new P.a(n), this.frame.onclick = function(e) {
                var n = e.target;
                t(e),
                "BUTTON" === n.nodeName && e.preventDefault()
            },
            this.frame.oninput = t, this.frame.onchange = t, this.frame.onkeydown = t, this.frame.onkeyup = t, this.frame.oncut = t, this.frame.onpaste = t, this.frame.onmousedown = t, this.frame.onmouseup = t, this.frame.onmouseover = t, this.frame.onmouseout = t, Object(s.addEventListener)(this.frame, "focus", t, !0), Object(s.addEventListener)(this.frame, "blur", t, !0), this.frame.onfocusin = t, this.frame.onfocusout = t, this.options.mainMenuBar) {
                Object(s.addClassName)(this.contentOuter, "has-main-menu-bar"),
                this.menu = document.createElement("div"),
                this.menu.className = "jsoneditor-menu",
                this.frame.appendChild(this.menu);
                var i = document.createElement("button");
                i.type = "button",
                i.className = "jsoneditor-expand-all",
                i.title = Object(u.c)("expandAll"),
                i.onclick = function() {
                    e.expandAll()
                },
                this.menu.appendChild(i);
                var r = document.createElement("button");
                if (r.type = "button", r.title = Object(u.c)("collapseAll"), r.className = "jsoneditor-collapse-all", r.onclick = function() {
                    e.collapseAll()
                },
                this.menu.appendChild(r), this.options.enableSort) {
                    var o = document.createElement("button");
                    o.type = "button",
                    o.className = "jsoneditor-sort",
                    o.title = Object(u.c)("sortTitleShort"),
                    o.onclick = function() {
                        e.node.showSortModal()
                    },
                    this.menu.appendChild(o)
                }
                if (this.options.enableTransform) {
                    var a = document.createElement("button");
                    a.type = "button",
                    a.title = Object(u.c)("transformTitleShort"),
                    a.className = "jsoneditor-transform",
                    a.onclick = function() {
                        e.node.showTransformModal()
                    },
                    this.menu.appendChild(a)
                }
                if (this.history) {
                    var l = document.createElement("button");
                    l.type = "button",
                    l.className = "jsoneditor-undo jsoneditor-separator",
                    l.title = Object(u.c)("undo"),
                    l.onclick = function() {
                        e._onUndo()
                    },
                    this.menu.appendChild(l),
                    this.dom.undo = l;
                    var c = document.createElement("button");
                    c.type = "button",
                    c.className = "jsoneditor-redo",
                    c.title = Object(u.c)("redo"),
                    c.onclick = function() {
                        e._onRedo()
                    },
                    this.menu.appendChild(c),
                    this.dom.redo = c,
                    this.history.onChange = function() {
                        l.disabled = !e.history.canUndo(),
                        c.disabled = !e.history.canRedo()
                    },
                    this.history.onChange()
                }
                if (this.options && this.options.modes && this.options.modes.length) {
                    var h = this;
                    this.modeSwitcher = new M.a(this.menu, this.options.modes, this.options.mode, (function(e) {
                        h.setMode(e),
                        h.modeSwitcher.focus()
                    }))
                }
                this.options.search && (this.searchBox = new d(this, this.menu))
            }
            this.options.navigationBar && (this.navBar = document.createElement("div"), this.navBar.className = "jsoneditor-navigation-bar nav-bar-empty", this.frame.appendChild(this.navBar), this.treePath = new p(this.navBar, this.getPopupAnchor()), this.treePath.onSectionSelected(this._onTreePathSectionSelected.bind(this)), this.treePath.onContextMenuItemSelected(this._onTreePathMenuItemSelected.bind(this)))
        },
        _onUndo: function() {
            this.history && (this.history.undo(), this._onChange())
        },
        _onRedo: function() {
            this.history && (this.history.redo(), this._onChange())
        },
        _onEvent: function(e) {
            if (!A.targetIsColorPicker(e.target)) {
                var t = A.getNodeFromTarget(e.target);
                if ("keydown" === e.type && this._onKeyDown(e), t && "focus" === e.type && (this.focusTarget = e.target, this.options.autocomplete && "focus" === this.options.autocomplete.trigger && this._showAutoComplete(e.target)), "mousedown" === e.type && this._startDragDistance(e), "mousemove" !== e.type && "mouseup" !== e.type && "click" !== e.type || this._updateDragDistance(e), t && this.options && this.options.navigationBar && t && ("keydown" === e.type || "mousedown" === e.type)) {
                    var n = this;
                    setTimeout((function() {
                        n._updateTreePath(t.getNodePath())
                    }))
                }
                if (t && t.selected) {
                    if ("click" === e.type) {
                        if (e.target === t.dom.menu) return void this.showContextMenu(e.target);
                        e.hasMoved || this.deselect()
                    }
                    "mousedown" === e.type && A.onDragStart(this.multiselection.nodes, e)
                } else "mousedown" === e.type && Object(s.hasParentNode)(e.target, this.content) && (this.deselect(), t && e.target === t.dom.drag ? A.onDragStart(t, e) : (!t || e.target !== t.dom.field && e.target !== t.dom.value && e.target !== t.dom.select) && this._onMultiSelectStart(e));
                t && t.onEvent(e)
            }
        },
        _updateTreePath: function(e) {
            if (e && e.length) {
                Object(s.removeClassName)(this.navBar, "nav-bar-empty");
                var t = [];
                e.forEach((function(e) {
                    var i = {
                        name: n(e),
                        node: e,
                        children: []
                    };
                    e.childs && e.childs.length && e.childs.forEach((function(e) {
                        i.children.push({
                            name: n(e),
                            node: e
                        })
                    })),
                    t.push(i)
                })),
                this.treePath.setPath(t)
            } else Object(s.addClassName)(this.navBar, "nav-bar-empty");
            function n(e) {
                return e.parent ? "array" === e.parent.type ? e.index: e.field: e.field || e.type
            }
        },
        _onTreePathSectionSelected: function(e) {
            e && e.node && (e.node.expandTo(), e.node.focus())
        },
        _onTreePathMenuItemSelected: function(e, t) {
            if (e && e.children.length) {
                var n = e.children.find((function(e) {
                    return e.name === t
                }));
                n && n.node && (this._updateTreePath(n.node.getNodePath()), n.node.expandTo(), n.node.focus())
            }
        },
        _startDragDistance: function(e) {
            this.dragDistanceEvent = {
                initialTarget: e.target,
                initialPageX: e.pageX,
                initialPageY: e.pageY,
                dragDistance: 0,
                hasMoved: !1
            }
        },
        _updateDragDistance: function(e) {
            this.dragDistanceEvent || this._startDragDistance(e);
            var t = e.pageX - this.dragDistanceEvent.initialPageX,
            n = e.pageY - this.dragDistanceEvent.initialPageY;
            return this.dragDistanceEvent.dragDistance = Math.sqrt(t * t + n * n),
            this.dragDistanceEvent.hasMoved = this.dragDistanceEvent.hasMoved || this.dragDistanceEvent.dragDistance > 10,
            e.dragDistance = this.dragDistanceEvent.dragDistance,
            e.hasMoved = this.dragDistanceEvent.hasMoved,
            e.dragDistance
        },
        _onMultiSelectStart: function(e) {
            var t = A.getNodeFromTarget(e.target);
            if ("tree" === this.options.mode && void 0 === this.options.onEditable) {
                this.multiselection = {
                    start: t || null,
                    end: null,
                    nodes: []
                },
                this._startDragDistance(e);
                var n = this;
                this.mousemove || (this.mousemove = Object(s.addEventListener)(window, "mousemove", (function(e) {
                    n._onMultiSelect(e)
                }))),
                this.mouseup || (this.mouseup = Object(s.addEventListener)(window, "mouseup", (function(e) {
                    n._onMultiSelectEnd(e)
                }))),
                e.preventDefault()
            }
        },
        _onMultiSelect: function(e) {
            if (e.preventDefault(), this._updateDragDistance(e), e.hasMoved) {
                var t = A.getNodeFromTarget(e.target);
                t && (null == this.multiselection.start && (this.multiselection.start = t), this.multiselection.end = t),
                this.deselect();
                var n = this.multiselection.start,
                i = this.multiselection.end || this.multiselection.start;
                if (n && i) {
                    if (this.multiselection.nodes = this._findTopLevelNodes(n, i), this.multiselection.nodes && this.multiselection.nodes.length) {
                        var r = this.multiselection.nodes[0];
                        this.multiselection.start === r || this.multiselection.start.isDescendantOf(r) ? this.multiselection.direction = "down": this.multiselection.direction = "up"
                    }
                    this.select(this.multiselection.nodes)
                }
            }
        },
        _onMultiSelectEnd: function() {
            this.multiselection.nodes[0] && this.multiselection.nodes[0].dom.menu.focus(),
            this.multiselection.start = null,
            this.multiselection.end = null,
            this.mousemove && (Object(s.removeEventListener)(window, "mousemove", this.mousemove), delete this.mousemove),
            this.mouseup && (Object(s.removeEventListener)(window, "mouseup", this.mouseup), delete this.mouseup)
        },
        deselect: function(e) {
            var t = !!this.multiselection.nodes.length;
            this.multiselection.nodes.forEach((function(e) {
                e.setSelected(!1)
            })),
            this.multiselection.nodes = [],
            e && (this.multiselection.start = null, this.multiselection.end = null),
            t && this._selectionChangedHandler && this._selectionChangedHandler()
        },
        select: function(e) {
            if (!Array.isArray(e)) return this.select([e]);
            if (e) {
                this.deselect(),
                this.multiselection.nodes = e.slice(0);
                var t = e[0];
                if (e.forEach((function(e) {
                    e.expandPathToNode(),
                    e.setSelected(!0, e === t)
                })), this._selectionChangedHandler) {
                    var n = this.getSelection();
                    this._selectionChangedHandler(n.start, n.end)
                }
            }
        },
        _findTopLevelNodes: function(e, t) {
            for (var n = e.getNodePath(), i = t.getNodePath(), r = 0; r < n.length && n[r] === i[r];) r++;
            var o = n[r - 1],
            a = n[r],
            s = i[r];
            if (a && s || (o.parent ? (a = o, s = o, o = o.parent) : (a = o.childs[0], s = o.childs[o.childs.length - 1])), o && a && s) {
                var l = o.childs.indexOf(a),
                c = o.childs.indexOf(s),
                u = Math.min(l, c),
                h = Math.max(l, c);
                return o.childs.slice(u, h + 1)
            }
            return []
        },
        _showAutoComplete: function(e) {
            var t = A.getNodeFromTarget(e),
            n = "";
            e.className.indexOf("jsoneditor-value") >= 0 && (n = "value"),
            e.className.indexOf("jsoneditor-field") >= 0 && (n = "field");
            var i = this;
            setTimeout((function() {
                if (t && ("focus" === i.options.autocomplete.trigger || e.innerText.length > 0)) {
                    var r = i.options.autocomplete.getOptions(e.innerText, t.getPath(), n, t.editor);
                    null === r ? i.autocomplete.hideDropDown() : "function" == typeof r.then ? r.then((function(t) {
                        null === t ? i.autocomplete.hideDropDown() : t.options ? i.autocomplete.show(e, t.startFrom, t.options) : i.autocomplete.show(e, 0, t)
                    })).
                    catch((function(e) {
                        console.error(e)
                    })) : r.options ? i.autocomplete.show(e, r.startFrom, r.options) : i.autocomplete.show(e, 0, r)
                } else i.autocomplete.hideDropDown()
            }), 50)
        },
        _onKeyDown: function(e) {
            var t = e.which || e.keyCode,
            n = e.altKey,
            i = e.ctrlKey,
            r = e.metaKey,
            o = e.shiftKey,
            a = !1,
            l = this.focusTarget;
            if (9 === t) {
                var c = this;
                setTimeout((function() {
                    c.focusTarget !== l && Object(s.selectContentEditable)(c.focusTarget)
                }), 0)
            }
            this.searchBox && (i && 70 === t ? (this.searchBox.dom.search.focus(), this.searchBox.dom.search.select(), a = !0) : (114 === t || i && 71 === t) && (o ? this.searchBox.previous(!0) : this.searchBox.next(!0), a = !0)),
            this.history && (i && !o && 90 === t ? (this._onUndo(), a = !0) : i && o && 90 === t && (this._onRedo(), a = !0)),
            this.options.autocomplete && !a && (i || n || r || 1 !== e.key.length && 8 !== t && 46 !== t || (a = !1, this._showAutoComplete(e.target))),
            a && (e.preventDefault(), e.stopPropagation())
        },
        _createTable: function() {
            var e;
            this.options.navigationBar && Object(s.addClassName)(this.contentOuter, "has-nav-bar"),
            this.scrollableContent = document.createElement("div"),
            this.scrollableContent.className = "jsoneditor-tree",
            this.contentOuter.appendChild(this.scrollableContent),
            this.content = document.createElement("div"),
            this.content.className = "jsoneditor-tree-inner",
            this.scrollableContent.appendChild(this.content),
            this.table = document.createElement("table"),
            this.table.className = "jsoneditor-tree",
            this.content.appendChild(this.table),
            this.colgroupContent = document.createElement("colgroup"),
            "tree" === this.options.mode && ((e = document.createElement("col")).width = "24px", this.colgroupContent.appendChild(e)),
            (e = document.createElement("col")).width = "24px",
            this.colgroupContent.appendChild(e),
            e = document.createElement("col"),
            this.colgroupContent.appendChild(e),
            this.table.appendChild(this.colgroupContent),
            this.tbody = document.createElement("tbody"),
            this.table.appendChild(this.tbody),
            this.frame.appendChild(this.contentOuter)
        },
        showContextMenu: function(e, t) {
            var n = [],
            i = this.multiselection.nodes.slice();
            if (n.push({
                text: Object(u.c)("duplicateText"),
                title: Object(u.c)("duplicateTitle"),
                className: "jsoneditor-duplicate",
                click: function() {
                    A.onDuplicate(i)
                }
            }), n.push({
                text: Object(u.c)("remove"),
                title: Object(u.c)("removeTitle"),
                className: "jsoneditor-remove",
                click: function() {
                    A.onRemove(i)
                }
            }), this.options.onCreateMenu) {
                var r = i.map((function(e) {
                    return e.getPath()
                }));
                n = this.options.onCreateMenu(n, {
                    type: "multiple",
                    path: r[0],
                    paths: r
                })
            }
            new f.a(n, {
                close: t
            }).show(e, this.getPopupAnchor())
        },
        getPopupAnchor: function() {
            return this.options.popupAnchor || this.frame
        },
        getSelection: function() {
            var e = {
                start: null,
                end: null
            };
            if (this.multiselection.nodes && this.multiselection.nodes.length && this.multiselection.nodes.length) {
                var t = this.multiselection.nodes[0],
                n = this.multiselection.nodes[this.multiselection.nodes.length - 1];
                "down" === this.multiselection.direction ? (e.start = t.serialize(), e.end = n.serialize()) : (e.start = n.serialize(), e.end = t.serialize())
            }
            return e
        },
        onSelectionChange: function(e) {
            "function" == typeof e && (this._selectionChangedHandler = Object(s.debounce)(e, this.DEBOUNCE_INTERVAL))
        },
        setSelection: function(e, t) {
            e && e.dom && e.range && (console.warn("setSelection/getSelection usage for text selection is deprecated and should not be used, see documentation for supported selection options"), this.setDomSelection(e));
            var n = this._getNodeInstancesByRange(e, t);
            n.forEach((function(e) {
                e.expandTo()
            })),
            this.select(n)
        },
        _getNodeInstancesByRange: function(e, t) {
            var n, i;
            e && e.path && (n = this.node.findNodeByPath(e.path), t && t.path && (i = this.node.findNodeByPath(t.path)));
            var r = [];
            if (n instanceof A) if (i instanceof A && i !== n) if (n.parent === i.parent) {
                n.getIndex() < i.getIndex() ? (e = n, t = i) : (e = i, t = n);
                var o = e;
                r.push(o);
                do {
                    o = o.nextSibling(), r.push(o)
                } while ( o && o !== t )
            } else r = this._findTopLevelNodes(n, i);
            else r.push(n);
            return r
        },
        getNodesByRange: function(e, t) {
            var n = this._getNodeInstancesByRange(e, t),
            i = [];
            return n.forEach((function(e) {
                i.push(e.serialize())
            })),
            i
        }
    },
    D = [{
        mode: "tree",
        mixin: N,
        data: "json"
    },
    {
        mode: "view",
        mixin: N,
        data: "json"
    },
    {
        mode: "form",
        mixin: N,
        data: "json"
    }]
},
function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "previewModeMixins", (function() {
        return v
    }));
    var i = n(1),
    r = n(8),
    o = n(15),
    a = n(5),
    s = n(6),
    l = n(21),
    c = n(2),
    u = n(9),
    h = n(0);
    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var f = function() {
        function e(t, n, i) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.onChange = t,
            this.calculateItemSize = n ||
            function() {
                return 1
            },
            this.limit = i,
            this.items = [],
            this.index = -1
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "add",
            value: function(e) {
                for (; this._calculateHistorySize() > this.limit && this.items.length > 1;) this.items.shift(),
                this.index--;
                this.items = this.items.slice(0, this.index + 1),
                this.items.push(e),
                this.index++,
                this.onChange()
            }
        },
        {
            key: "_calculateHistorySize",
            value: function() {
                var e = this.calculateItemSize,
                t = 0;
                return this.items.forEach((function(n) {
                    t += e(n)
                })),
                t
            }
        },
        {
            key: "undo",
            value: function() {
                if (this.canUndo()) return this.index--,
                this.onChange(),
                this.items[this.index]
            }
        },
        {
            key: "redo",
            value: function() {
                if (this.canRedo()) return this.index++,
                this.onChange(),
                this.items[this.index]
            }
        },
        {
            key: "canUndo",
            value: function() {
                return this.index > 0
            }
        },
        {
            key: "canRedo",
            value: function() {
                return this.index < this.items.length - 1
            }
        },
        {
            key: "clear",
            value: function() {
                this.items = [],
                this.index = -1,
                this.onChange()
            }
        }]) && d(t.prototype, n),
        i && d(t, i),
        e
    } (),
    g = n(4),
    p = l.textModeMixins[0].mixin,
    m = {
        create: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            void 0 === t.statusBar && (t.statusBar = !0),
            t.mainMenuBar = !1 !== t.mainMenuBar,
            t.enableSort = !1 !== t.enableSort,
            t.enableTransform = !1 !== t.enableTransform,
            t.createQuery = t.createQuery || g.a,
            t.executeQuery = t.executeQuery || g.b,
            this.options = t,
            "number" == typeof t.indentation ? this.indentation = Number(t.indentation) : this.indentation = 2,
            Object(i.b)(this.options.languages),
            Object(i.a)(this.options.language),
            this.mode = "preview";
            var n = this;
            this.container = e,
            this.dom = {},
            this.json = void 0,
            this.text = "",
            this._debouncedValidate = Object(h.debounce)(this.validate.bind(this), this.DEBOUNCE_INTERVAL),
            this.width = e.clientWidth,
            this.height = e.clientHeight,
            this.frame = document.createElement("div"),
            this.frame.className = "jsoneditor jsoneditor-mode-preview",
            this.frame.onclick = function(e) {
                e.preventDefault()
            };
            var a = {
                target: this.frame,
                onFocus: this.options.onFocus || null,
                onBlur: this.options.onBlur || null
            };
            if (this.frameFocusTracker = new u.a(a), this.content = document.createElement("div"), this.content.className = "jsoneditor-outer", this.dom.busy = document.createElement("div"), this.dom.busy.className = "jsoneditor-busy", this.dom.busyContent = document.createElement("span"), this.dom.busyContent.innerHTML = "busy...", this.dom.busy.appendChild(this.dom.busyContent), this.content.appendChild(this.dom.busy), this.dom.previewContent = document.createElement("pre"), this.dom.previewContent.className = "jsoneditor-preview", this.dom.previewText = document.createTextNode(""), this.dom.previewContent.appendChild(this.dom.previewText), this.content.appendChild(this.dom.previewContent), this.options.mainMenuBar) {
                Object(h.addClassName)(this.content, "has-main-menu-bar"),
                this.menu = document.createElement("div"),
                this.menu.className = "jsoneditor-menu",
                this.frame.appendChild(this.menu);
                var s = document.createElement("button");
                s.type = "button",
                s.className = "jsoneditor-format",
                s.title = Object(i.c)("formatTitle"),
                this.menu.appendChild(s),
                s.onclick = function() {
                    n.executeWithBusyMessage((function() {
                        try {
                            n.format()
                        } catch(e) {
                            n._onError(e)
                        }
                    }), "formatting...")
                };
                var l = document.createElement("button");
                if (l.type = "button", l.className = "jsoneditor-compact", l.title = Object(i.c)("compactTitle"), this.menu.appendChild(l), l.onclick = function() {
                    n.executeWithBusyMessage((function() {
                        try {
                            n.compact()
                        } catch(e) {
                            n._onError(e)
                        }
                    }), "compacting...")
                },
                this.options.enableSort) {
                    var d = document.createElement("button");
                    d.type = "button",
                    d.className = "jsoneditor-sort",
                    d.title = Object(i.c)("sortTitleShort"),
                    d.onclick = function() {
                        n._showSortModal()
                    },
                    this.menu.appendChild(d)
                }
                if (this.options.enableTransform) {
                    var p = document.createElement("button");
                    p.type = "button",
                    p.title = Object(i.c)("transformTitleShort"),
                    p.className = "jsoneditor-transform",
                    p.onclick = function() {
                        n._showTransformModal()
                    },
                    this.dom.transform = p,
                    this.menu.appendChild(p)
                }
                var m = document.createElement("button");
                if (m.type = "button", m.className = "jsoneditor-repair", m.title = Object(i.c)("repairTitle"), this.menu.appendChild(m), m.onclick = function() {
                    void 0 === n.json && n.executeWithBusyMessage((function() {
                        try {
                            n.repair()
                        } catch(e) {
                            n._onError(e)
                        }
                    }), "repairing...")
                },
                !1 !== this.options.history) {
                    var v = function() {
                        n.dom.undo.disabled = !n.history.canUndo(),
                        n.dom.redo.disabled = !n.history.canRedo()
                    },
                    y = function(e) {
                        return 2 * e.text.length
                    };
                    this.history = new f(v, y, c.c);
                    var b = document.createElement("button");
                    b.type = "button",
                    b.className = "jsoneditor-undo jsoneditor-separator",
                    b.title = Object(i.c)("undo"),
                    b.onclick = function() {
                        var e = n.history.undo();
                        e && n._applyHistory(e)
                    },
                    this.menu.appendChild(b),
                    this.dom.undo = b;
                    var C = document.createElement("button");
                    C.type = "button",
                    C.className = "jsoneditor-redo",
                    C.title = Object(i.c)("redo"),
                    C.onclick = function() {
                        var e = n.history.redo();
                        e && n._applyHistory(e)
                    },
                    this.menu.appendChild(C),
                    this.dom.redo = C,
                    this.history.onChange()
                }
                this.options && this.options.modes && this.options.modes.length && (this.modeSwitcher = new r.a(this.menu, this.options.modes, this.options.mode, (function(e) {
                    n.setMode(e),
                    n.modeSwitcher.focus()
                })))
            }
            if (this.errorTable = new o.a({
                errorTableVisible: !0,
                onToggleVisibility: function() {
                    n.validate()
                },
                onFocusLine: null,
                onChangeHeight: function(e) {
                    var t = e + (n.dom.statusBar ? n.dom.statusBar.clientHeight: 0) + 1;
                    n.content.style.marginBottom = -t + "px",
                    n.content.style.paddingBottom = t + "px"
                }
            }), this.frame.appendChild(this.content), this.frame.appendChild(this.errorTable.getErrorTable()), this.container.appendChild(this.frame), t.statusBar) {
                Object(h.addClassName)(this.content, "has-status-bar");
                var I = document.createElement("div");
                this.dom.statusBar = I,
                I.className = "jsoneditor-statusbar",
                this.frame.appendChild(I),
                this.dom.fileSizeInfo = document.createElement("span"),
                this.dom.fileSizeInfo.className = "jsoneditor-size-info",
                this.dom.fileSizeInfo.innerText = "",
                I.appendChild(this.dom.fileSizeInfo),
                this.dom.arrayInfo = document.createElement("span"),
                this.dom.arrayInfo.className = "jsoneditor-size-info",
                this.dom.arrayInfo.innerText = "",
                I.appendChild(this.dom.arrayInfo),
                I.appendChild(this.errorTable.getErrorCounter()),
                I.appendChild(this.errorTable.getWarningIcon()),
                I.appendChild(this.errorTable.getErrorIcon())
            }
            this._renderPreview(),
            this.setSchema(this.options.schema, this.options.schemaRefs)
        },
        _renderPreview: function() {
            var e = this.getText();
            this.dom.previewText.nodeValue = Object(h.limitCharacters)(e, c.b),
            this.dom.fileSizeInfo && (this.dom.fileSizeInfo.innerText = "Size: " + Object(h.formatSize)(e.length)),
            this.dom.arrayInfo && (Array.isArray(this.json) ? this.dom.arrayInfo.innerText = "Array: " + this.json.length + " items": this.dom.arrayInfo.innerText = "")
        },
        _onChange: function() {
            if (this._debouncedValidate(), this.options.onChange) try {
                this.options.onChange()
            } catch(e) {
                console.error("Error in onChange callback: ", e)
            }
            if (this.options.onChangeJSON) try {
                this.options.onChangeJSON(this.get())
            } catch(e) {
                console.error("Error in onChangeJSON callback: ", e)
            }
            if (this.options.onChangeText) try {
                this.options.onChangeText(this.getText())
            } catch(e) {
                console.error("Error in onChangeText callback: ", e)
            }
        },
        _showSortModal: function() {
            var e = this;
            this.executeWithBusyMessage((function() {
                var t = e.options.modalAnchor || c.a,
                n = e.get();
                e._renderPreview(),
                Object(a.showSortModal)(t, n, (function(t) {
                    e.executeWithBusyMessage((function() { !
                        function(t, n) {
                            if (Array.isArray(t)) {
                                var i = Object(h.sort)(t, n.path, n.direction);
                                e.sortedBy = n,
                                e._setAndFireOnChange(i)
                            }
                            if (Object(h.isObject)(t)) {
                                var r = Object(h.sortObjectKeys)(t, n.direction);
                                e.sortedBy = n,
                                e._setAndFireOnChange(r)
                            }
                        } (n, t)
                    }), "sorting...")
                }), e.sortedBy)
            }), "parsing...")
        },
        _showTransformModal: function() {
            var e = this;
            this.executeWithBusyMessage((function() {
                var t = e.options,
                n = t.createQuery,
                i = t.executeQuery,
                r = t.modalAnchor,
                o = t.queryDescription,
                a = e.get();
                e._renderPreview(),
                Object(s.showTransformModal)({
                    anchor: r || c.a,
                    json: a,
                    queryDescription: o,
                    createQuery: n,
                    executeQuery: i,
                    onTransform: function(t) {
                        e.executeWithBusyMessage((function() {
                            var n = i(a, t);
                            e._setAndFireOnChange(n)
                        }), "transforming...")
                    }
                })
            }), "parsing...")
        },
        destroy: function() {
            this.frame && this.container && this.frame.parentNode === this.container && this.container.removeChild(this.frame),
            this.modeSwitcher && (this.modeSwitcher.destroy(), this.modeSwitcher = null),
            this._debouncedValidate = null,
            this.history && (this.history.clear(), this.history = null),
            this.frameFocusTracker.destroy()
        },
        compact: function() {
            var e = this.get(),
            t = JSON.stringify(e);
            this._setTextAndFireOnChange(t, e)
        },
        format: function() {
            var e = this.get(),
            t = JSON.stringify(e, null, this.indentation);
            this._setTextAndFireOnChange(t, e)
        },
        repair: function() {
            var e = this.getText(),
            t = Object(h.repair)(e);
            this._setTextAndFireOnChange(t)
        },
        focus: function() {
            this.dom.transform.focus()
        },
        set: function(e) {
            this.history && this.history.clear(),
            this._set(e)
        },
        update: function(e) {
            this._set(e)
        },
        _set: function(e) {
            this.text = void 0,
            this.json = e,
            this._renderPreview(),
            this._pushHistory(),
            this._debouncedValidate()
        },
        _setAndFireOnChange: function(e) {
            this._set(e),
            this._onChange()
        },
        get: function() {
            if (void 0 === this.json) {
                var e = this.getText();
                this.json = Object(h.parse)(e)
            }
            return this.json
        },
        getText: function() {
            return void 0 === this.text && (this.text = JSON.stringify(this.json, null, this.indentation), !0 === this.options.escapeUnicode && (this.text = Object(h.escapeUnicodeChars)(this.text))),
            this.text
        },
        setText: function(e) {
            this.history && this.history.clear(),
            this._setText(e)
        },
        updateText: function(e) {
            this.getText() !== e && this._setText(e)
        },
        _setText: function(e, t) {
            if (!0 === this.options.escapeUnicode ? this.text = Object(h.escapeUnicodeChars)(e) : this.text = e, this.json = t, this._renderPreview(), void 0 === this.json) {
                var n = this;
                this.executeWithBusyMessage((function() {
                    try {
                        n.json = n.get(),
                        n._renderPreview(),
                        n._pushHistory()
                    } catch(e) {}
                }), "parsing...")
            } else this._pushHistory();
            this._debouncedValidate()
        },
        _setTextAndFireOnChange: function(e, t) {
            this._setText(e, t),
            this._onChange()
        },
        _applyHistory: function(e) {
            this.json = e.json,
            this.text = e.text,
            this._renderPreview(),
            this._debouncedValidate()
        },
        _pushHistory: function() {
            if (this.history) {
                var e = {
                    text: this.text,
                    json: this.json
                };
                this.history.add(e)
            }
        },
        executeWithBusyMessage: function(e, t) {
            if (this.getText().length > c.d) {
                var n = this;
                Object(h.addClassName)(n.frame, "busy"),
                n.dom.busyContent.innerText = t,
                setTimeout((function() {
                    e(),
                    Object(h.removeClassName)(n.frame, "busy"),
                    n.dom.busyContent.innerText = ""
                }), 100)
            } else e()
        }
    };
    m.validate = p.validate,
    m._renderErrors = p._renderErrors;
    var v = [{
        mode: "preview",
        mixin: m,
        data: "json"
    }]
}])
},
e.exports = i()
},
function(e, t, n) {
    var i = n(511);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(514)(i, r);
    i.locals && (e.exports = i.locals)
},
function(e, t, n) {
    var i = n(512); (e.exports = n(513)(!1)).push([e.i, '.jsoneditor input,.jsoneditor input:not([type]),.jsoneditor input[type=search],.jsoneditor input[type=text],.jsoneditor-modal input,.jsoneditor-modal input:not([type]),.jsoneditor-modal input[type=search],.jsoneditor-modal input[type=text]{height:auto;border:inherit;box-shadow:none;font-size:inherit;box-sizing:inherit;padding:inherit;font-family:inherit;transition:none;line-height:inherit}.jsoneditor input:focus,.jsoneditor input:not([type]):focus,.jsoneditor input[type=search]:focus,.jsoneditor input[type=text]:focus,.jsoneditor-modal input:focus,.jsoneditor-modal input:not([type]):focus,.jsoneditor-modal input[type=search]:focus,.jsoneditor-modal input[type=text]:focus{border:inherit;box-shadow:inherit}.jsoneditor textarea,.jsoneditor-modal textarea{height:inherit}.jsoneditor select,.jsoneditor-modal select{display:inherit;height:inherit}.jsoneditor label,.jsoneditor-modal label{font-size:inherit;font-weight:inherit;color:inherit}.jsoneditor table,.jsoneditor-modal table{border-collapse:collapse;width:auto}.jsoneditor td,.jsoneditor th,.jsoneditor-modal td,.jsoneditor-modal th{padding:0;display:table-cell;text-align:left;vertical-align:inherit;border-radius:inherit}.jsoneditor .autocomplete.dropdown{position:absolute;background:#fff;box-shadow:2px 2px 12px rgba(128,128,128,.3);border:1px solid #d3d3d3;overflow-x:hidden;overflow-y:auto;cursor:default;margin:0;padding:5px;text-align:left;outline:0;font-family:"dejavu sans mono","droid sans mono",consolas,monaco,"lucida console","courier new",courier,monospace,sans-serif;font-size:10pt}.jsoneditor .autocomplete.dropdown .item{color:#333}.jsoneditor .autocomplete.dropdown .item.hover{background-color:#ddd}.jsoneditor .autocomplete.hint{color:#aaa;top:4px;left:4px}.jsoneditor-contextmenu-root{position:relative;width:0;height:0}.jsoneditor-contextmenu{position:absolute;box-sizing:content-box;z-index:1}.jsoneditor-contextmenu .jsoneditor-menu{position:relative;left:0;top:0;width:128px;height:auto;background:#fff;border:1px solid #d3d3d3;box-shadow:2px 2px 12px rgba(128,128,128,.3);list-style:none;margin:0;padding:0}.jsoneditor-contextmenu .jsoneditor-menu button{position:relative;padding:0 4px 0 0;margin:0;width:128px;height:auto;border:none;cursor:pointer;color:#4d4d4d;background:0 0;font-size:10pt;font-family:arial,sans-serif;box-sizing:border-box;text-align:left}.jsoneditor-contextmenu .jsoneditor-menu button::-moz-focus-inner{padding:0;border:0}.jsoneditor-contextmenu .jsoneditor-menu button.jsoneditor-default{width:96px}.jsoneditor-contextmenu .jsoneditor-menu button.jsoneditor-expand{float:right;width:32px;height:24px;border-left:1px solid #e5e5e5}.jsoneditor-contextmenu .jsoneditor-menu li{overflow:hidden}.jsoneditor-contextmenu .jsoneditor-menu li ul{display:none;position:relative;left:-10px;top:0;border:none;box-shadow:inset 0 0 10px rgba(128,128,128,.5);padding:0 10px;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-o-transition:all .3s ease-out;transition:all .3s ease-out}.jsoneditor-contextmenu .jsoneditor-menu li ul .jsoneditor-icon{margin-left:24px}.jsoneditor-contextmenu .jsoneditor-menu li ul li button{padding-left:24px;animation:all ease-in-out 1s}.jsoneditor-contextmenu .jsoneditor-menu li button .jsoneditor-expand{position:absolute;top:0;right:0;width:24px;height:24px;padding:0;margin:0 4px 0 0;background:url(' + i(n(22)) + ") 0 -72px}.jsoneditor-contextmenu .jsoneditor-icon{position:absolute;top:0;left:0;width:24px;height:24px;border:none;padding:0;margin:0;background-image:url(" + i(n(22)) + ')}.jsoneditor-contextmenu .jsoneditor-text{padding:4px 0 4px 24px;word-wrap:break-word}.jsoneditor-contextmenu .jsoneditor-text.jsoneditor-right-margin{padding-right:24px}.jsoneditor-contextmenu .jsoneditor-separator{height:0;border-top:1px solid #e5e5e5;padding-top:5px;margin-top:5px}.jsoneditor-contextmenu button.jsoneditor-remove .jsoneditor-icon{background-position:-24px 0}.jsoneditor-contextmenu button.jsoneditor-append .jsoneditor-icon{background-position:0 0}.jsoneditor-contextmenu button.jsoneditor-insert .jsoneditor-icon{background-position:0 0}.jsoneditor-contextmenu button.jsoneditor-duplicate .jsoneditor-icon{background-position:-48px 0}.jsoneditor-contextmenu button.jsoneditor-sort-asc .jsoneditor-icon{background-position:-168px 0}.jsoneditor-contextmenu button.jsoneditor-sort-desc .jsoneditor-icon{background-position:-192px 0}.jsoneditor-contextmenu button.jsoneditor-transform .jsoneditor-icon{background-position:-216px 0}.jsoneditor-contextmenu button.jsoneditor-extract .jsoneditor-icon{background-position:0 -24px}.jsoneditor-contextmenu button.jsoneditor-type-string .jsoneditor-icon{background-position:-144px 0}.jsoneditor-contextmenu button.jsoneditor-type-auto .jsoneditor-icon{background-position:-120px 0}.jsoneditor-contextmenu button.jsoneditor-type-object .jsoneditor-icon{background-position:-72px 0}.jsoneditor-contextmenu button.jsoneditor-type-array .jsoneditor-icon{background-position:-96px 0}.jsoneditor-contextmenu button.jsoneditor-type-modes .jsoneditor-icon{background-image:none;width:6px}.jsoneditor-contextmenu li,.jsoneditor-contextmenu ul{box-sizing:content-box;position:relative}.jsoneditor-contextmenu .jsoneditor-menu button:focus,.jsoneditor-contextmenu .jsoneditor-menu button:hover{color:#1a1a1a;background-color:#f5f5f5;outline:0}.jsoneditor-contextmenu .jsoneditor-menu li button.jsoneditor-selected,.jsoneditor-contextmenu .jsoneditor-menu li button.jsoneditor-selected:focus,.jsoneditor-contextmenu .jsoneditor-menu li button.jsoneditor-selected:hover{color:#fff;background-color:#ee422e}.jsoneditor-contextmenu .jsoneditor-menu li ul li button:focus,.jsoneditor-contextmenu .jsoneditor-menu li ul li button:hover{background-color:#f5f5f5}.jsoneditor-modal{max-width:95%;border-radius:2px!important;padding:45px 15px 15px 15px!important;box-shadow:2px 2px 12px rgba(128,128,128,.3);color:#4d4d4d;line-height:1.3em}.jsoneditor-modal.jsoneditor-modal-transform{width:600px!important}.jsoneditor-modal .pico-modal-header{position:absolute;box-sizing:border-box;top:0;left:0;width:100%;padding:0 10px;height:30px;line-height:30px;font-family:arial,sans-serif;font-size:11pt;background:#3883fa;color:#fff}.jsoneditor-modal table{width:100%}.jsoneditor-modal table td{padding:3px 0}.jsoneditor-modal table td.jsoneditor-modal-input{text-align:right;padding-right:0;white-space:nowrap}.jsoneditor-modal table td.jsoneditor-modal-actions{padding-top:15px}.jsoneditor-modal table th{vertical-align:middle}.jsoneditor-modal p:first-child{margin-top:0}.jsoneditor-modal controller{color:#3883fa}.jsoneditor-modal .jsoneditor-jmespath-block{margin-bottom:10px}.jsoneditor-modal .pico-close{background:0 0!important;font-size:24px!important;top:7px!important;right:7px!important;color:#fff}.jsoneditor-modal input{padding:4px}.jsoneditor-modal input[type=text]{cursor:inherit}.jsoneditor-modal input[disabled]{background:#d3d3d3;color:grey}.jsoneditor-modal .jsoneditor-select-wrapper{position:relative;display:inline-block}.jsoneditor-modal .jsoneditor-select-wrapper:after{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #666;position:absolute;right:8px;top:14px;pointer-events:none}.jsoneditor-modal select{padding:3px 24px 3px 10px;min-width:180px;max-width:350px;-webkit-appearance:none;-moz-appearance:none;appearance:none;text-indent:0;text-overflow:"";font-size:10pt;line-height:1.5em}.jsoneditor-modal select::-ms-expand{display:none}.jsoneditor-modal .jsoneditor-button-group input{padding:4px 10px;margin:0;border-radius:0;border-left-style:none}.jsoneditor-modal .jsoneditor-button-group input.jsoneditor-button-first{border-top-left-radius:3px;border-bottom-left-radius:3px;border-left-style:solid}.jsoneditor-modal .jsoneditor-button-group input.jsoneditor-button-last{border-top-right-radius:3px;border-bottom-right-radius:3px}.jsoneditor-modal .jsoneditor-transform-preview{background:#f5f5f5;height:200px}.jsoneditor-modal .jsoneditor-transform-preview.jsoneditor-error{color:#ee422e}.jsoneditor-modal .jsoneditor-jmespath-wizard{line-height:1.2em;width:100%;padding:0;border-radius:3px}.jsoneditor-modal .jsoneditor-jmespath-label{font-weight:700;color:#1e90ff;margin-top:20px;margin-bottom:5px}.jsoneditor-modal .jsoneditor-jmespath-wizard-table{width:100%;border-collapse:collapse}.jsoneditor-modal .jsoneditor-jmespath-wizard-label{font-style:italic;margin:4px 0 2px 0}.jsoneditor-modal .jsoneditor-inline{position:relative;display:inline-block;width:100%;padding-top:2px;padding-bottom:2px}.jsoneditor-modal .jsoneditor-inline:not(:last-child){padding-right:2px}.jsoneditor-modal .jsoneditor-jmespath-filter{display:flex;flex-wrap:wrap}.jsoneditor-modal .jsoneditor-jmespath-filter-field{width:180px}.jsoneditor-modal .jsoneditor-jmespath-filter-relation{width:100px}.jsoneditor-modal .jsoneditor-jmespath-filter-value{min-width:180px;flex:1}.jsoneditor-modal .jsoneditor-jmespath-sort-field{width:170px}.jsoneditor-modal .jsoneditor-jmespath-sort-order{width:150px}.jsoneditor-modal .jsoneditor-jmespath-select-fields{width:100%}.jsoneditor-modal .selectr-selected{border-color:#d3d3d3;padding:4px 28px 4px 8px}.jsoneditor-modal .selectr-selected .selectr-tag{background-color:#3883fa;border-radius:5px}.jsoneditor-modal table td,.jsoneditor-modal table th{text-align:left;vertical-align:middle;font-weight:400;color:#4d4d4d;border-spacing:0;border-collapse:collapse}.jsoneditor-modal #query,.jsoneditor-modal input,.jsoneditor-modal input[type=text],.jsoneditor-modal input[type=text]:focus,.jsoneditor-modal select,.jsoneditor-modal textarea{background:#fff;border:1px solid #d3d3d3;color:#4d4d4d;border-radius:3px;padding:4px}.jsoneditor-modal,.jsoneditor-modal #query,.jsoneditor-modal input,.jsoneditor-modal input[type=text],.jsoneditor-modal option,.jsoneditor-modal select,.jsoneditor-modal table td,.jsoneditor-modal table th,.jsoneditor-modal textarea{font-size:10.5pt;font-family:arial,sans-serif}.jsoneditor-modal #query,.jsoneditor-modal .jsoneditor-transform-preview{font-family:"dejavu sans mono","droid sans mono",consolas,monaco,"lucida console","courier new",courier,monospace,sans-serif;font-size:10pt;width:100%;box-sizing:border-box}.jsoneditor-modal input[type=button],.jsoneditor-modal input[type=submit]{background:#f5f5f5;padding:4px 20px}.jsoneditor-modal input,.jsoneditor-modal select{cursor:pointer}.jsoneditor-modal .jsoneditor-button-group.jsoneditor-button-group-value-asc input.jsoneditor-button-asc,.jsoneditor-modal .jsoneditor-button-group.jsoneditor-button-group-value-desc input.jsoneditor-button-desc{background:#3883fa;border-color:#3883fa;color:#fff}.jsoneditor{color:#1a1a1a;border:thin solid #3883fa;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;position:relative;padding:0;line-height:100%}div.jsoneditor-default,div.jsoneditor-field,div.jsoneditor-readonly,div.jsoneditor-value{border:1px solid transparent;min-height:16px;min-width:32px;padding:2px;margin:1px;word-wrap:break-word;float:left}div.jsoneditor-field p,div.jsoneditor-value p{margin:0}div.jsoneditor-value{word-break:break-word}div.jsoneditor-value.jsoneditor-empty::after{content:"value"}div.jsoneditor-value.jsoneditor-string{color:#006000}div.jsoneditor-value.jsoneditor-number{color:#ee422e}div.jsoneditor-value.jsoneditor-boolean{color:#ff8c00}div.jsoneditor-value.jsoneditor-null{color:#004ed0}div.jsoneditor-value.jsoneditor-invalid{color:#000}div.jsoneditor-readonly{min-width:16px;color:grey}div.jsoneditor-empty{border-color:#d3d3d3;border-style:dashed;border-radius:2px}div.jsoneditor-field.jsoneditor-empty::after{content:"field"}div.jsoneditor td{vertical-align:top}div.jsoneditor td.jsoneditor-separator{padding:3px 0;vertical-align:top;color:grey}div.jsoneditor td.jsoneditor-tree{vertical-align:top}div.jsoneditor.busy pre.jsoneditor-preview{background:#f5f5f5;color:grey}div.jsoneditor.busy div.jsoneditor-busy{display:inherit}div.jsoneditor code.jsoneditor-preview{background:0 0}div.jsoneditor.jsoneditor-mode-preview pre.jsoneditor-preview{width:100%;height:100%;box-sizing:border-box;overflow:auto;padding:2px;margin:0;white-space:pre-wrap;word-break:break-all}div.jsoneditor-default{color:grey;padding-left:10px}div.jsoneditor-tree{width:100%;height:100%;position:relative;overflow:auto}div.jsoneditor-tree button.jsoneditor-button{width:24px;height:24px;padding:0;margin:0;border:none;cursor:pointer;background:transparent url(' + i(n(22)) + ")}div.jsoneditor-tree button.jsoneditor-button:focus{background-color:#f5f5f5;outline:#e5e5e5 solid 1px}div.jsoneditor-tree button.jsoneditor-collapsed{background-position:0 -48px}div.jsoneditor-tree button.jsoneditor-expanded{background-position:0 -72px}div.jsoneditor-tree button.jsoneditor-contextmenu-button{background-position:-48px -72px}div.jsoneditor-tree button.jsoneditor-invisible{visibility:hidden;background:0 0}div.jsoneditor-tree button.jsoneditor-dragarea{background:url(" + i(n(22)) + ") -72px -72px;cursor:move}div.jsoneditor-tree :focus{outline:0}div.jsoneditor-tree div.jsoneditor-show-more{display:inline-block;padding:3px 4px;margin:2px 0;background-color:#e5e5e5;border-radius:3px;color:grey;font-family:arial,sans-serif;font-size:10pt}div.jsoneditor-tree div.jsoneditor-show-more controller{display:inline-block;color:grey}div.jsoneditor-tree div.jsoneditor-color{display:inline-block;width:12px;height:12px;margin:4px;border:1px solid grey;cursor:pointer}div.jsoneditor-tree div.jsoneditor-date{background:#a1a1a1;color:#fff;font-family:arial,sans-serif;border-radius:3px;display:inline-block;padding:3px;margin:0 3px}div.jsoneditor-tree table.jsoneditor-tree{border-collapse:collapse;border-spacing:0;width:100%}div.jsoneditor-tree .jsoneditor-button.jsoneditor-schema-error{width:24px;height:24px;padding:0;margin:0 4px 0 0;background:url(" + i(n(22)) + ') -168px -48px}div.jsoneditor-outer{position:static;width:100%;height:100%;margin:0;padding:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}div.jsoneditor-outer.has-nav-bar{margin-top:-26px;padding-top:26px}div.jsoneditor-outer.has-nav-bar.has-main-menu-bar{margin-top:-61px;padding-top:61px}div.jsoneditor-outer.has-status-bar{margin-bottom:-26px;padding-bottom:26px}div.jsoneditor-outer.has-main-menu-bar{margin-top:-35px;padding-top:35px}div.jsoneditor-busy{position:absolute;top:15%;left:0;box-sizing:border-box;width:100%;text-align:center;display:none}div.jsoneditor-busy span{background-color:#ffffab;border:1px solid #fe0;border-radius:3px;padding:5px 15px;box-shadow:0 0 5px rgba(0,0,0,.4)}div.jsoneditor-field.jsoneditor-empty::after,div.jsoneditor-value.jsoneditor-empty::after{pointer-events:none;color:#d3d3d3;font-size:8pt}controller.jsoneditor-value.jsoneditor-url,div.jsoneditor-value.jsoneditor-url{color:#006000;text-decoration:underline}controller.jsoneditor-value.jsoneditor-url{display:inline-block;padding:2px;margin:2px}controller.jsoneditor-value.jsoneditor-url:focus,controller.jsoneditor-value.jsoneditor-url:hover{color:#ee422e}div.jsoneditor-field.jsoneditor-highlight,div.jsoneditor-field[contenteditable=true]:focus,div.jsoneditor-field[contenteditable=true]:hover,div.jsoneditor-value.jsoneditor-highlight,div.jsoneditor-value[contenteditable=true]:focus,div.jsoneditor-value[contenteditable=true]:hover{background-color:#ffffab;border:1px solid #fe0;border-radius:2px}div.jsoneditor-field.jsoneditor-highlight-active,div.jsoneditor-field.jsoneditor-highlight-active:focus,div.jsoneditor-field.jsoneditor-highlight-active:hover,div.jsoneditor-value.jsoneditor-highlight-active,div.jsoneditor-value.jsoneditor-highlight-active:focus,div.jsoneditor-value.jsoneditor-highlight-active:hover{background-color:#fe0;border:1px solid #ffc700;border-radius:2px}div.jsoneditor-value.jsoneditor-array,div.jsoneditor-value.jsoneditor-object{min-width:16px}div.jsoneditor-tree button.jsoneditor-contextmenu-button.jsoneditor-selected,div.jsoneditor-tree button.jsoneditor-contextmenu-button:focus,div.jsoneditor-tree button.jsoneditor-contextmenu-button:hover,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu-button{background-position:-48px -48px}div.jsoneditor-tree div.jsoneditor-show-more controller:focus,div.jsoneditor-tree div.jsoneditor-show-more controller:hover{color:#ee422e}.ace-jsoneditor,textarea.jsoneditor-text{min-height:150px}.ace-jsoneditor *,textarea.jsoneditor-text *{font-family:"dejavu sans mono","droid sans mono",consolas,monaco,"lucida console","courier new",courier,monospace,sans-serif}textarea.jsoneditor-text{width:100%;height:100%;margin:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;outline-width:0;border:none;background-color:#fff;resize:none}tr.jsoneditor-highlight,tr.jsoneditor-selected{background-color:#d3d3d3}tr.jsoneditor-selected button.jsoneditor-contextmenu-button,tr.jsoneditor-selected button.jsoneditor-dragarea{visibility:hidden}tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu-button,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea{visibility:visible}div.jsoneditor-tree button.jsoneditor-dragarea:focus,div.jsoneditor-tree button.jsoneditor-dragarea:hover,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea{background-position:-72px -48px}div.jsoneditor td,div.jsoneditor th,div.jsoneditor tr{padding:0;margin:0}.jsoneditor-popover,.jsoneditor-schema-error,div.jsoneditor td,div.jsoneditor textarea,div.jsoneditor th,div.jsoneditor-field,div.jsoneditor-value,pre.jsoneditor-preview{font-family:"dejavu sans mono","droid sans mono",consolas,monaco,"lucida console","courier new",courier,monospace,sans-serif;font-size:10pt;color:#1a1a1a}.jsoneditor-schema-error{cursor:default;display:inline-block;height:24px;line-height:24px;position:relative;text-align:center;width:24px}.jsoneditor-popover{background-color:#4c4c4c;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,.4);color:#fff;padding:7px 10px;position:absolute;cursor:auto;width:200px}.jsoneditor-popover.jsoneditor-above{bottom:32px;left:-98px}.jsoneditor-popover.jsoneditor-above:before{border-top:7px solid #4c4c4c;bottom:-7px}.jsoneditor-popover.jsoneditor-below{top:32px;left:-98px}.jsoneditor-popover.jsoneditor-below:before{border-bottom:7px solid #4c4c4c;top:-7px}.jsoneditor-popover.jsoneditor-left{top:-7px;right:32px}.jsoneditor-popover.jsoneditor-left:before{border-left:7px solid #4c4c4c;border-top:7px solid transparent;border-bottom:7px solid transparent;content:"";top:19px;right:-14px;left:inherit;margin-left:inherit;margin-top:-7px;position:absolute}.jsoneditor-popover.jsoneditor-right{top:-7px;left:32px}.jsoneditor-popover.jsoneditor-right:before{border-right:7px solid #4c4c4c;border-top:7px solid transparent;border-bottom:7px solid transparent;content:"";top:19px;left:-14px;margin-left:inherit;margin-top:-7px;position:absolute}.jsoneditor-popover:before{border-right:7px solid transparent;border-left:7px solid transparent;content:"";display:block;left:50%;margin-left:-7px;position:absolute}.jsoneditor-text-errors tr.jump-to-line:hover{text-decoration:underline;cursor:pointer}.jsoneditor-schema-error:focus .jsoneditor-popover,.jsoneditor-schema-error:hover .jsoneditor-popover{display:block;animation:fade-in .3s linear 1,move-up .3s linear 1}@keyframes fade-in{from{opacity:0}to{opacity:1}}.jsoneditor .jsoneditor-validation-errors-container{max-height:130px;overflow-y:auto}.jsoneditor .jsoneditor-validation-errors{width:100%;overflow:hidden}.jsoneditor .jsoneditor-additional-errors{position:absolute;margin:auto;bottom:31px;left:calc(50% - 92px);color:grey;background-color:#ebebeb;padding:7px 15px;border-radius:8px}.jsoneditor .jsoneditor-additional-errors.visible{visibility:visible;opacity:1;transition:opacity 2s linear}.jsoneditor .jsoneditor-additional-errors.hidden{visibility:hidden;opacity:0;transition:visibility 0s 2s,opacity 2s linear}.jsoneditor .jsoneditor-text-errors{width:100%;border-collapse:collapse;border-top:1px solid #ffc700}.jsoneditor .jsoneditor-text-errors td{padding:3px 6px;vertical-align:middle}.jsoneditor .jsoneditor-text-errors td pre{margin:0;white-space:normal}.jsoneditor .jsoneditor-text-errors tr{background-color:#ffffab}.jsoneditor .jsoneditor-text-errors tr.parse-error{background-color:#ee2e2e70}.jsoneditor-text-errors .jsoneditor-schema-error{border:none;width:24px;height:24px;padding:0;margin:0 4px 0 0;cursor:pointer}.jsoneditor-text-errors tr .jsoneditor-schema-error{background:url(' + i(n(22)) + ") -168px -48px}.jsoneditor-text-errors tr.parse-error .jsoneditor-schema-error{background:url(" + i(n(22)) + ") -25px 0}.jsoneditor-anchor{cursor:pointer}.jsoneditor-anchor .picker_wrapper.popup.popup_bottom{top:28px;left:-10px}.fadein{-webkit-animation:fadein .3s;animation:fadein .3s;-moz-animation:fadein .3s;-o-animation:fadein .3s}@keyframes fadein{0%{opacity:0}100%{opacity:1}}.jsoneditor-modal input[type=search].selectr-input{border:1px solid #d3d3d3;width:calc(100% - 4px);margin:2px;padding:4px;box-sizing:border-box}.jsoneditor-modal button.selectr-input-clear{right:8px}.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa}.jsoneditor-menu>.jsoneditor-modes>button,.jsoneditor-menu>button{width:26px;height:26px;margin:2px;padding:0;border-radius:2px;border:1px solid transparent;background:transparent url(" + i(n(22)) + ");color:#fff;opacity:.8;font-family:arial,sans-serif;font-size:10pt;float:left}.jsoneditor-menu>.jsoneditor-modes>button:hover,.jsoneditor-menu>button:hover{background-color:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.4)}.jsoneditor-menu>.jsoneditor-modes>button:active,.jsoneditor-menu>.jsoneditor-modes>button:focus,.jsoneditor-menu>button:active,.jsoneditor-menu>button:focus{background-color:rgba(255,255,255,.3)}.jsoneditor-menu>.jsoneditor-modes>button:disabled,.jsoneditor-menu>button:disabled{opacity:.5;background-color:transparent;border:none}.jsoneditor-menu>button.jsoneditor-collapse-all{background-position:0 -96px}.jsoneditor-menu>button.jsoneditor-expand-all{background-position:0 -120px}.jsoneditor-menu>button.jsoneditor-sort{background-position:-120px -96px}.jsoneditor-menu>button.jsoneditor-transform{background-position:-144px -96px}.jsoneditor.jsoneditor-mode-form>.jsoneditor-menu>button.jsoneditor-sort,.jsoneditor.jsoneditor-mode-form>.jsoneditor-menu>button.jsoneditor-transform,.jsoneditor.jsoneditor-mode-view>.jsoneditor-menu>button.jsoneditor-sort,.jsoneditor.jsoneditor-mode-view>.jsoneditor-menu>button.jsoneditor-transform{display:none}.jsoneditor-menu>button.jsoneditor-undo{background-position:-24px -96px}.jsoneditor-menu>button.jsoneditor-undo:disabled{background-position:-24px -120px}.jsoneditor-menu>button.jsoneditor-redo{background-position:-48px -96px}.jsoneditor-menu>button.jsoneditor-redo:disabled{background-position:-48px -120px}.jsoneditor-menu>button.jsoneditor-compact{background-position:-72px -96px}.jsoneditor-menu>button.jsoneditor-format{background-position:-72px -120px}.jsoneditor-menu>button.jsoneditor-repair{background-position:-96px -96px}.jsoneditor-menu>.jsoneditor-modes{display:inline-block;float:left}.jsoneditor-menu>.jsoneditor-modes>button{background-image:none;width:auto;padding-left:6px;padding-right:6px}.jsoneditor-menu>.jsoneditor-modes>button.jsoneditor-separator,.jsoneditor-menu>button.jsoneditor-separator{margin-left:10px}.jsoneditor-menu controller{font-family:arial,sans-serif;font-size:10pt;color:#fff;opacity:.8;vertical-align:middle}.jsoneditor-menu controller:hover{opacity:1}.jsoneditor-menu controller.jsoneditor-poweredBy{font-size:8pt;position:absolute;right:0;top:0;padding:10px}.jsoneditor-navigation-bar{width:100%;height:26px;line-height:26px;padding:0;margin:0;border-bottom:1px solid #d3d3d3;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;color:grey;background-color:#ebebeb;overflow:hidden;font-family:arial,sans-serif;font-size:10pt}.jsoneditor-search{font-family:arial,sans-serif;position:absolute;right:4px;top:4px;border-collapse:collapse;border-spacing:0;display:flex}.jsoneditor-search input{color:#1a1a1a;width:120px;border:none;outline:0;margin:1px;line-height:20px;font-family:arial,sans-serif}.jsoneditor-search button{width:16px;height:24px;padding:0;margin:0;border:none;background:url(" + i(n(22)) + ");vertical-align:top}.jsoneditor-search button:hover{background-color:transparent}.jsoneditor-search button.jsoneditor-refresh{width:18px;background-position:-99px -73px}.jsoneditor-search button.jsoneditor-next{cursor:pointer;background-position:-124px -73px}.jsoneditor-search button.jsoneditor-next:hover{background-position:-124px -49px}.jsoneditor-search button.jsoneditor-previous{cursor:pointer;background-position:-148px -73px;margin-right:2px}.jsoneditor-search button.jsoneditor-previous:hover{background-position:-148px -49px}.jsoneditor-results{font-family:arial,sans-serif;color:#fff;padding-right:5px;line-height:26px}.jsoneditor-frame{border:1px solid transparent;background-color:#fff;padding:0 2px;margin:0}.jsoneditor-statusbar{line-height:26px;height:26px;color:grey;background-color:#ebebeb;border-top:1px solid #d3d3d3;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:10pt}.jsoneditor-statusbar>.jsoneditor-curserinfo-val{margin-right:12px}.jsoneditor-statusbar>.jsoneditor-curserinfo-count{margin-left:4px}.jsoneditor-statusbar>.jsoneditor-validation-error-icon{float:right;width:24px;height:24px;padding:0;margin-top:1px;background:url(" + i(n(22)) + ") -168px -48px;cursor:pointer}.jsoneditor-statusbar>.jsoneditor-validation-error-count{float:right;margin:0 4px 0 0;cursor:pointer}.jsoneditor-statusbar>.jsoneditor-parse-error-icon{float:right;width:24px;height:24px;padding:0;margin:1px;background:url(" + i(n(22)) + ") -25px 0}.jsoneditor-statusbar .jsoneditor-array-info controller{color:inherit}div.jsoneditor-statusbar>.jsoneditor-curserinfo-label,div.jsoneditor-statusbar>.jsoneditor-size-info{margin:0 4px}.jsoneditor-treepath{padding:0 5px;overflow:hidden;white-space:nowrap;outline:0}.jsoneditor-treepath.show-all{word-wrap:break-word;white-space:normal;position:absolute;background-color:#ebebeb;z-index:1;box-shadow:2px 2px 12px rgba(128,128,128,.3)}.jsoneditor-treepath.show-all span.jsoneditor-treepath-show-all-btn{display:none}.jsoneditor-treepath div.jsoneditor-contextmenu-root{position:absolute;left:0}.jsoneditor-treepath .jsoneditor-treepath-show-all-btn{position:absolute;background-color:#ebebeb;left:0;height:20px;padding:0 3px;cursor:pointer}.jsoneditor-treepath .jsoneditor-treepath-element{margin:1px;font-family:arial,sans-serif;font-size:10pt}.jsoneditor-treepath .jsoneditor-treepath-seperator{margin:2px;font-size:9pt;font-family:arial,sans-serif}.jsoneditor-treepath span.jsoneditor-treepath-element:hover,.jsoneditor-treepath span.jsoneditor-treepath-seperator:hover{cursor:pointer;text-decoration:underline}/*!\n * Selectr 2.4.0\n * https://github.com/Mobius1/Selectr\n *\n * Released under the MIT license\n */.selectr-container{position:relative}.selectr-container li{list-style:none}.selectr-hidden{position:absolute;overflow:hidden;clip:rect(0,0,0,0);width:1px;height:1px;margin:-1px;padding:0;border:0 none}.selectr-visible{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;z-index:11}.selectr-desktop.multiple .selectr-visible{display:none}.selectr-desktop.multiple.native-open .selectr-visible{top:100%;min-height:200px!important;height:auto;opacity:1;display:block}.selectr-container.multiple.selectr-mobile .selectr-selected{z-index:0}.selectr-selected{position:relative;z-index:1;box-sizing:border-box;width:100%;padding:7px 28px 7px 14px;cursor:pointer;border:1px solid #999;border-radius:3px;background-color:#fff}.selectr-selected::before{position:absolute;top:50%;right:10px;width:0;height:0;content:'';-o-transform:rotate(0) translate3d(0,-50%,0);-ms-transform:rotate(0) translate3d(0,-50%,0);-moz-transform:rotate(0) translate3d(0,-50%,0);-webkit-transform:rotate(0) translate3d(0,-50%,0);transform:rotate(0) translate3d(0,-50%,0);border-width:4px 4px 0 4px;border-style:solid;border-color:#6c7a86 transparent transparent}.selectr-container.native-open .selectr-selected::before,.selectr-container.open .selectr-selected::before{border-width:0 4px 4px 4px;border-style:solid;border-color:transparent transparent #6c7a86}.selectr-label{display:none;overflow:hidden;width:100%;white-space:nowrap;text-overflow:ellipsis}.selectr-placeholder{color:#6c7a86}.selectr-tags{margin:0;padding:0;white-space:normal}.has-selected .selectr-tags{margin:0 0 -2px}.selectr-tag{list-style:none;position:relative;float:left;padding:2px 25px 2px 8px;margin:0 2px 2px 0;cursor:default;color:#fff;border:medium none;border-radius:10px;background:#acb7bf none repeat scroll 0 0}.selectr-container.multiple.has-selected .selectr-selected{padding:5px 28px 5px 5px}.selectr-options-container{position:absolute;z-index:10000;top:calc(100% - 1px);left:0;display:none;box-sizing:border-box;width:100%;border-width:0 1px 1px;border-style:solid;border-color:transparent #999 #999;border-radius:0 0 3px 3px;background-color:#fff}.selectr-container.open .selectr-options-container{display:block}.selectr-input-container{position:relative;display:none}.selectr-clear,.selectr-input-clear,.selectr-tag-remove{position:absolute;top:50%;right:22px;width:20px;height:20px;padding:0;cursor:pointer;-o-transform:translate3d(0,-50%,0);-ms-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);border:medium none;background-color:transparent;z-index:11}.selectr-clear,.selectr-input-clear{display:none}.selectr-container.has-selected .selectr-clear,.selectr-input-container.active .selectr-input-clear{display:block}.selectr-selected .selectr-tag-remove{right:2px}.selectr-clear::after,.selectr-clear::before,.selectr-input-clear::after,.selectr-input-clear::before,.selectr-tag-remove::after,.selectr-tag-remove::before{position:absolute;top:5px;left:9px;width:2px;height:10px;content:' ';background-color:#6c7a86}.selectr-tag-remove::after,.selectr-tag-remove::before{top:4px;width:3px;height:12px;background-color:#fff}.selectr-clear:before,.selectr-input-clear::before,.selectr-tag-remove::before{-o-transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.selectr-clear:after,.selectr-input-clear::after,.selectr-tag-remove::after{-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.selectr-input-container.active,.selectr-input-container.active .selectr-clear{display:block}.selectr-input{top:5px;left:5px;box-sizing:border-box;width:calc(100% - 30px);margin:10px 15px;padding:7px 30px 7px 9px;border:1px solid #999;border-radius:3px}.selectr-notice{display:none;box-sizing:border-box;width:100%;padding:8px 16px;border-top:1px solid #999;border-radius:0 0 3px 3px;background-color:#fff}.selectr-container.notice .selectr-notice{display:block}.selectr-container.notice .selectr-selected{border-radius:3px 3px 0 0}.selectr-options{position:relative;top:calc(100% + 2px);display:none;overflow-x:auto;overflow-y:scroll;max-height:200px;margin:0;padding:0}.selectr-container.notice .selectr-options-container,.selectr-container.open .selectr-input-container,.selectr-container.open .selectr-options{display:block}.selectr-option{position:relative;display:block;padding:5px 20px;list-style:outside none none;cursor:pointer;font-weight:400}.selectr-options.optgroups>.selectr-option{padding-left:25px}.selectr-optgroup{font-weight:700;padding:0}.selectr-optgroup--label{font-weight:700;margin-top:10px;padding:5px 15px}.selectr-match{text-decoration:underline}.selectr-option.selected{background-color:#ddd}.selectr-option.active{color:#fff;background-color:#5897fb}.selectr-option.disabled{opacity:.4}.selectr-option.excluded{display:none}.selectr-container.open .selectr-selected{border-color:#999 #999 transparent #999;border-radius:3px 3px 0 0}.selectr-container.open .selectr-selected::after{-o-transform:rotate(180deg) translate3d(0,50%,0);-ms-transform:rotate(180deg) translate3d(0,50%,0);-moz-transform:rotate(180deg) translate3d(0,50%,0);-webkit-transform:rotate(180deg) translate3d(0,50%,0);transform:rotate(180deg) translate3d(0,50%,0)}.selectr-disabled{opacity:.6}.has-selected .selectr-placeholder,.selectr-empty{display:none}.has-selected .selectr-label{display:block}.taggable .selectr-selected{padding:4px 28px 4px 4px}.taggable .selectr-selected::after{display:table;content:\" \";clear:both}.taggable .selectr-label{width:auto}.taggable .selectr-tags{float:left;display:block}.taggable .selectr-placeholder{display:none}.input-tag{float:left;min-width:90px;width:auto}.selectr-tag-input{border:medium none;padding:3px 10px;width:100%;font-family:inherit;font-weight:inherit;font-size:inherit}.selectr-input-container.loading::after{position:absolute;top:50%;right:20px;width:20px;height:20px;content:'';-o-transform:translate3d(0,-50%,0);-ms-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);-o-transform-origin:50% 0 0;-ms-transform-origin:50% 0 0;-moz-transform-origin:50% 0 0;-webkit-transform-origin:50% 0 0;transform-origin:50% 0 0;-moz-animation:.5s linear 0s normal forwards infinite running spin;-webkit-animation:.5s linear 0s normal forwards infinite running spin;animation:.5s linear 0s normal forwards infinite running spin;border-width:3px;border-style:solid;border-color:#aaa #ddd #ddd;border-radius:50%}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0) translate3d(0,-50%,0);transform:rotate(0) translate3d(0,-50%,0)}100%{-webkit-transform:rotate(360deg) translate3d(0,-50%,0);transform:rotate(360deg) translate3d(0,-50%,0)}}@keyframes spin{0%{-webkit-transform:rotate(0) translate3d(0,-50%,0);transform:rotate(0) translate3d(0,-50%,0)}100%{-webkit-transform:rotate(360deg) translate3d(0,-50%,0);transform:rotate(360deg) translate3d(0,-50%,0)}}.selectr-container.open.inverted .selectr-selected{border-color:transparent #999 #999;border-radius:0 0 3px 3px}.selectr-container.inverted .selectr-options-container{border-width:1px 1px 0;border-color:#999 #999 transparent;border-radius:3px 3px 0 0;background-color:#fff}.selectr-container.inverted .selectr-options-container{top:auto;bottom:calc(100% - 1px)}.selectr-container ::-webkit-input-placeholder{color:#6c7a86;opacity:1}.selectr-container ::-moz-placeholder{color:#6c7a86;opacity:1}.selectr-container :-ms-input-placeholder{color:#6c7a86;opacity:1}.selectr-container ::placeholder{color:#6c7a86;opacity:1}", ""])
},
function(e, t) {
    e.exports = function(e) {
        return "string" != typeof e ? e: (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"': e)
    }
},
function(e, t) {
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map((function(t) {
                var n = function(e, t) {
                    var n = e[1] || "",
                    i = e[3];
                    if (!i) return n;
                    if (t && "function" == typeof btoa) {
                        var r = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                        o = i.sources.map((function(e) {
                            return "/*# sourceURL=" + i.sourceRoot + e + " */"
                        }));
                        return [n].concat(o).concat([r]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                } (t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}": n
            })).join("")
        },
        t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var i = {},
            r = 0; r < this.length; r++) {
                var o = this[r][0];
                "number" == typeof o && (i[o] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var a = e[r];
                "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n: n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        },
        t
    }
},
function(e, t, n) {
    var i, r, o = {},
    a = (i = function() {
        return window && document && document.all && !window.atob
    },
    function() {
        return void 0 === r && (r = i.apply(this, arguments)),
        r
    }),
    s = function(e, t) {
        return t ? t.querySelector(e) : document.querySelector(e)
    },
    l = function(e) {
        var t = {};
        return function(e, n) {
            if ("function" == typeof e) return e();
            if (void 0 === t[e]) {
                var i = s.call(this, e, n);
                if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                    i = i.contentDocument.head
                } catch(e) {
                    i = null
                }
                t[e] = i
            }
            return t[e]
        }
    } (),
    c = null,
    u = 0,
    h = [],
    d = n(515);
    function f(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
            r = o[i.id];
            if (r) {
                r.refs++;
                for (var a = 0; a < r.parts.length; a++) r.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++) r.parts.push(b(i.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < i.parts.length; a++) s.push(b(i.parts[a], t));
                o[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
    function g(e, t) {
        for (var n = [], i = {},
        r = 0; r < e.length; r++) {
            var o = e[r],
            a = t.base ? o[0] + t.base: o[0],
            s = {
                css: o[1],
                media: o[2],
                sourceMap: o[3]
            };
            i[a] ? i[a].parts.push(s) : n.push(i[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }
    function p(e, t) {
        var n = l(e.insertInto);
        if (!n) throw new Error("Couldn't find controller style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = h[h.length - 1];
        if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
        h.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = l(e.insertAt.before, n);
            n.insertBefore(t, r)
        }
    }
    function m(e) {
        if (null === e.parentNode) return ! 1;
        e.parentNode.removeChild(e);
        var t = h.indexOf(e);
        t >= 0 && h.splice(t, 1)
    }
    function v(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var i = function() {
                0;
                return n.nc
            } ();
            i && (e.attrs.nonce = i)
        }
        return y(t, e.attrs),
        p(e, t),
        t
    }
    function y(e, t) {
        Object.keys(t).forEach((function(n) {
            e.setAttribute(n, t[n])
        }))
    }
    function b(e, t) {
        var n, i, r, o;
        if (t.transform && e.css) {
            if (! (o = "function" == typeof t.transform ? t.transform(e.css) : t.transform.
        default(e.css))) return function() {};
            e.css = o
        }
        if (t.singleton) {
            var a = u++;
            n = c || (c = v(t)),
            i = w.bind(null, n, a, !1),
            r = w.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
            e.attrs.rel = "stylesheet",
            y(t, e.attrs),
            p(e, t),
            t
        } (t), i = A.bind(null, n, t), r = function() {
            m(n),
            n.href && URL.revokeObjectURL(n.href)
        }) : (n = v(t), i = x.bind(null, n), r = function() {
            m(n)
        });
        return i(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                i(e = t)
            } else r()
        }
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in controller non-browser environment"); (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs: {},
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
        var n = g(e, t);
        return f(n, t),
        function(e) {
            for (var i = [], r = 0; r < n.length; r++) {
                var a = n[r]; (s = o[a.id]).refs--,
                i.push(s)
            }
            e && f(g(e, t), t);
            for (r = 0; r < i.length; r++) {
                var s;
                if (0 === (s = i[r]).refs) {
                    for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                    delete o[s.id]
                }
            }
        }
    };
    var C, I = (C = [],
    function(e, t) {
        return C[e] = t,
        C.filter(Boolean).join("\n")
    });
    function w(e, t, n, i) {
        var r = n ? "": i.css;
        if (e.styleSheet) e.styleSheet.cssText = I(t, r);
        else {
            var o = document.createTextNode(r),
            a = e.childNodes;
            a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }
    function x(e, t) {
        var n = t.css,
        i = t.media;
        if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    function A(e, t, n) {
        var i = n.css,
        r = n.sourceMap,
        o = void 0 === t.convertToAbsoluteUrls && r; (t.convertToAbsoluteUrls || o) && (i = d(i)),
        r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var a = new Blob([i], {
            type: "text/css"
        }),
        s = e.href;
        e.href = URL.createObjectURL(a),
        s && URL.revokeObjectURL(s)
    }
},
function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
        i = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, t) {
            var r, o = t.trim().replace(/^"(.*)"$/, (function(e, t) {
                return t
            })).replace(/^'(.*)'$/, (function(e, t) {
                return t
            }));
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e: (r = 0 === o.indexOf("//") ? o: 0 === o.indexOf("/") ? n + o: i + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
        }))
    }
},
function(e, t, n) {},
function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "spreadsheet", (function() {
        return _d
    }));
    var i = n(1);
    n(89);
    function r(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
        } (e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function o(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    var a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    function s(e) {
        for (var t = "",
        n = e; n >= a.length;) n /= a.length,
        n -= 1,
        t += a[parseInt(n, 10) % a.length];
        return t += a[e % a.length]
    }
    function l(e) {
        for (var t = 0,
        n = 0; n < e.length - 1; n += 1) {
            var i = e.charCodeAt(n) - 65,
            r = e.length - 1 - n;
            t += Math.pow(a.length, r) + a.length * i
        }
        return t += e.charCodeAt(e.length - 1) - 65
    }
    function c(e) {
        for (var t = "",
        n = "",
        i = 0; i < e.length; i += 1) e.charAt(i) >= "0" && e.charAt(i) <= "9" ? n += e.charAt(i) : t += e.charAt(i);
        return [l(t), parseInt(n, 10) - 1]
    }
    function u(e, t) {
        return "".concat(s(e)).concat(t + 1)
    }
    function h(e, t, n) {
        var i = r(c(e), 2);
        return u(i[0] + t, i[1] + n)
    }
    function d(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
        } (e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function f(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function g(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var m = function() {
        function e(t, n, i, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            g(this, e),
            this.sri = t,
            this.sci = n,
            this.eri = i,
            this.eci = r,
            this.w = o,
            this.h = a
        }
        var t, n, i;
        return t = e,
        i = [{
            key: "valueOf",
            value: function(t) {
                var n = t.split(":"),
                i = d(c(n[0]), 2),
                r = i[0],
                o = i[1],
                a = o,
                s = r;
                if (n.length > 1) {
                    var l = d(c(n[1]), 2);
                    s = l[0],
                    a = l[1]
                }
                return new e(o, r, a, s)
            }
        }],
        (n = [{
            key: "set",
            value: function(e, t, n, i) {
                this.sri = e,
                this.sci = t,
                this.eri = n,
                this.eci = i
            }
        },
        {
            key: "setWidthAndHeight",
            value: function(e, t) {
                this.w = e,
                this.h = t
            }
        },
        {
            key: "multiple",
            value: function() {
                return this.eri - this.sri > 0 || this.eci - this.sci > 0
            }
        },
        {
            key: "includes",
            value: function() {
                for (var e = 0,
                t = 0,
                n = arguments.length,
                i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                if (1 === i.length) {
                    var o = c(i[0]),
                    a = d(o, 2);
                    t = a[0],
                    e = a[1]
                } else 2 === i.length && (e = i[0], t = i[1]);
                var s = this.sri,
                l = this.sci,
                u = this.eri,
                h = this.eci;
                return s <= e && e <= u && l <= t && t <= h
            }
        },
        {
            key: "each",
            value: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                    return ! 0
                },
                n = this.sri, i = this.sci, r = this.eri, o = this.eci, a = n; a <= r; a += 1) if (t(a)) for (var s = i; s <= o; s += 1) e(a, s)
            }
        },
        {
            key: "contains",
            value: function(e) {
                return this.sri <= e.sri && this.sci <= e.sci && this.eri >= e.eri && this.eci >= e.eci
            }
        },
        {
            key: "within",
            value: function(e) {
                return this.sri >= e.sri && this.sci >= e.sci && this.eri <= e.eri && this.eci <= e.eci
            }
        },
        {
            key: "disjoint",
            value: function(e) {
                return this.sri > e.eri || this.sci > e.eci || e.sri > this.eri || e.sci > this.eci
            }
        },
        {
            key: "intersects",
            value: function(e) {
                return this.sri <= e.eri && this.sci <= e.eci && e.sri <= this.eri && e.sci <= this.eci
            }
        },
        {
            key: "union",
            value: function(t) {
                var n = this.sri,
                i = this.sci,
                r = this.eri,
                o = this.eci;
                return new e(t.sri < n ? t.sri: n, t.sci < i ? t.sci: i, t.eri > r ? t.eri: r, t.eci > o ? t.eci: o)
            }
        },
        {
            key: "difference",
            value: function(t) {
                var n = [],
                i = function(t, i, r, o) {
                    n.push(new e(t, i, r, o))
                },
                r = this.sri,
                o = this.sci,
                a = this.eri,
                s = this.eci,
                l = t.sri - r,
                c = t.sci - o,
                u = a - t.eri,
                h = s - t.eci;
                return l > 0 ? (i(r, o, t.sri - 1, s), u > 0 ? (i(t.eri + 1, o, a, s), c > 0 && i(t.sri, o, t.eri, t.sci - 1), h > 0 && i(t.sri, t.eci + 1, t.eri, s)) : (c > 0 && i(t.sri, o, a, t.sci - 1), h > 0 && i(t.sri, t.eci + 1, a, s))) : u > 0 && (i(t.eri + 1, o, a, s), c > 0 && i(r, o, t.eri, t.sci - 1), h > 0 && i(r, t.eci + 1, t.eri, s)),
                c > 0 ? (i(r, o, a, t.sci - 1), h > 0 ? (i(r, t.eri + 1, a, s), l > 0 && i(r, t.sci, t.sri - 1, t.eci), u > 0 && i(t.sri + 1, t.sci, a, t.eci)) : (l > 0 && i(r, t.sci, t.sri - 1, s), u > 0 && i(t.sri + 1, t.sci, a, s))) : h > 0 && (i(a, t.eci + 1, a, s), l > 0 && i(r, o, t.sri - 1, t.eci), u > 0 && i(t.eri + 1, o, a, t.eci)),
                n
            }
        },
        {
            key: "size",
            value: function() {
                return [this.eri - this.sri + 1, this.eci - this.sci + 1]
            }
        },
        {
            key: "toString",
            value: function() {
                var e = this.sri,
                t = this.sci,
                n = this.eri,
                i = this.eci,
                r = u(t, e);
                return this.multiple() && (r = "".concat(r, ":").concat(u(i, n))),
                r
            }
        },
        {
            key: "clone",
            value: function() {
                return new e(this.sri, this.sci, this.eri, this.eci, this.w, this.h)
            }
        },
        {
            key: "equals",
            value: function(e) {
                return this.eri === e.eri && this.eci === e.eci && this.sri === e.sri && this.sci === e.sci
            }
        }]) && p(t.prototype, n),
        i && p(t, i),
        e
    } ();
    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var y = function() {
        function e() { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.range = new m(0, 0, 0, 0),
            this.ri = 0,
            this.ci = 0
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "multiple",
            value: function() {
                return this.range.multiple()
            }
        },
        {
            key: "setIndexes",
            value: function(e, t) {
                this.ri = e,
                this.ci = t
            }
        },
        {
            key: "size",
            value: function() {
                return this.range.size()
            }
        }]) && v(t.prototype, n),
        i && v(t, i),
        e
    } ();
    var b = function e() { !
        function(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
        } (this, e),
        this.x = 0,
        this.y = 0,
        this.ri = 0,
        this.ci = 0
    };
    function C(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var I = function() {
        function e() { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.undoItems = [],
            this.redoItems = []
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "add",
            value: function(e) {
                this.undoItems.push(JSON.stringify(e)),
                this.redoItems = []
            }
        },
        {
            key: "canUndo",
            value: function() {
                return this.undoItems.length > 0
            }
        },
        {
            key: "canRedo",
            value: function() {
                return this.redoItems.length > 0
            }
        },
        {
            key: "undo",
            value: function(e, t) {
                var n = this.undoItems,
                i = this.redoItems;
                this.canUndo() && (i.push(JSON.stringify(e)), t(JSON.parse(n.pop())))
            }
        },
        {
            key: "redo",
            value: function(e, t) {
                var n = this.undoItems,
                i = this.redoItems;
                this.canRedo() && (n.push(JSON.stringify(e)), t(JSON.parse(i.pop())))
            }
        }]) && C(t.prototype, n),
        i && C(t, i),
        e
    } ();
    function w(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var A = function() {
        function e() { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.range = null,
            this.state = "clear"
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "copy",
            value: function(e) {
                return this.range = e,
                this.state = "copy",
                this
            }
        },
        {
            key: "cut",
            value: function(e) {
                return this.range = e,
                this.state = "cut",
                this
            }
        },
        {
            key: "isCopy",
            value: function() {
                return "copy" === this.state
            }
        },
        {
            key: "isCut",
            value: function() {
                return "cut" === this.state
            }
        },
        {
            key: "isClear",
            value: function() {
                return "clear" === this.state
            }
        },
        {
            key: "clear",
            value: function() {
                this.range = null,
                this.state = "clear"
            }
        }]) && w(t.prototype, n),
        i && w(t, i),
        e
    } ();
    function _(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function k(e, t, n) {
        return t && S(e.prototype, t),
        n && S(e, n),
        e
    }
    var L = function() {
        function e(t, n, i) {
            _(this, e),
            this.ci = t,
            this.operator = n,
            this.value = i
        }
        return k(e, [{
            key: "set",
            value: function(e, t) {
                this.operator = e,
                this.value = t
            }
        },
        {
            key: "includes",
            value: function(e) {
                var t = this.operator,
                n = this.value;
                return "all" === t || "in" === t && n.includes(e)
            }
        },
        {
            key: "vlength",
            value: function() {
                var e = this.operator,
                t = this.value;
                return "in" === e ? t.length: 0
            }
        },
        {
            key: "getData",
            value: function() {
                return {
                    ci: this.ci,
                    operator: this.operator,
                    value: this.value
                }
            }
        }]),
        e
    } (),
    T = function() {
        function e(t, n) {
            _(this, e),
            this.ci = t,
            this.order = n
        }
        return k(e, [{
            key: "asc",
            value: function() {
                return "asc" === this.order
            }
        },
        {
            key: "desc",
            value: function() {
                return "desc" === this.order
            }
        }]),
        e
    } (),
    R = function() {
        function e() {
            _(this, e),
            this.ref = null,
            this.filters = [],
            this.sort = null
        }
        return k(e, [{
            key: "setData",
            value: function(e) {
                var t = e.ref,
                n = e.filters,
                i = e.sort;
                null != t && (this.ref = t, this.fitlers = n.map((function(e) {
                    return new L(e.ci, e.operator, e.value)
                })), i && (this.sort = new T(i.ci, i.order)))
            }
        },
        {
            key: "getData",
            value: function() {
                if (this.active()) {
                    var e = this.ref,
                    t = this.filters,
                    n = this.sort;
                    return {
                        ref: e,
                        filters: t.map((function(e) {
                            return e.getData()
                        })),
                        sort: n
                    }
                }
                return {}
            }
        },
        {
            key: "addFilter",
            value: function(e, t, n) {
                var i = this.getFilter(e);
                null == i ? this.filters.push(new L(e, t, n)) : i.set(t, n)
            }
        },
        {
            key: "setSort",
            value: function(e, t) {
                this.sort = t ? new T(e, t) : null
            }
        },
        {
            key: "includes",
            value: function(e, t) {
                return !! this.active() && this.hrange().includes(e, t)
            }
        },
        {
            key: "getSort",
            value: function(e) {
                var t = this.sort;
                return t && t.ci === e ? t: null
            }
        },
        {
            key: "getFilter",
            value: function(e) {
                for (var t = this.filters,
                n = 0; n < t.length; n += 1) if (t[n].ci === e) return t[n];
                return null
            }
        },
        {
            key: "filteredRows",
            value: function(e) {
                var t = new Set,
                n = new Set;
                if (this.active()) for (var i = this.range(), r = i.sri, o = i.eri, a = this.filters, s = r + 1; s <= o; s += 1) for (var l = 0; l < a.length; l += 1) {
                    var c = a[l],
                    u = e(s, c.ci),
                    h = u ? u.text: "";
                    if (!c.includes(h)) {
                        t.add(s);
                        break
                    }
                    n.add(s)
                }
                return {
                    rset: t,
                    fset: n
                }
            }
        },
        {
            key: "items",
            value: function(e, t) {
                var n = {};
                if (this.active()) for (var i = this.range(), r = i.sri, o = i.eri, a = r + 1; a <= o; a += 1) {
                    var s = t(a, e);
                    if (null === s || /^\s*$/.test(s.text)) n[""] = (n[""] || 0) + 1;
                    else {
                        var l = s.text,
                        c = (n[l] || 0) + 1;
                        n[l] = c
                    }
                }
                return n
            }
        },
        {
            key: "range",
            value: function() {
                return m.valueOf(this.ref)
            }
        },
        {
            key: "hrange",
            value: function() {
                var e = this.range();
                return e.eri = e.sri,
                e
            }
        },
        {
            key: "clear",
            value: function() {
                this.ref = null,
                this.filters = [],
                this.sort = null
            }
        },
        {
            key: "active",
            value: function() {
                return null !== this.ref
            }
        }]),
        e
    } ();
    function M(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function P(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var E = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            M(this, e),
            this._ = t
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "forEach",
            value: function(e) {
                this._.forEach(e)
            }
        },
        {
            key: "deleteWithin",
            value: function(e) {
                this._ = this._.filter((function(t) {
                    return ! t.within(e)
                }))
            }
        },
        {
            key: "getFirstIncludes",
            value: function(e, t) {
                for (var n = 0; n < this._.length; n += 1) {
                    var i = this._[n];
                    if (i.includes(e, t)) return i
                }
                return null
            }
        },
        {
            key: "filterIntersects",
            value: function(t) {
                return new e(this._.filter((function(e) {
                    return e.intersects(t)
                })))
            }
        },
        {
            key: "intersects",
            value: function(e) {
                for (var t = 0; t < this._.length; t += 1) if (this._[t].intersects(e)) return ! 0;
                return ! 1
            }
        },
        {
            key: "union",
            value: function(e) {
                var t = e;
                return this._.forEach((function(e) {
                    e.intersects(t) && (t = e.union(t))
                })),
                t
            }
        },
        {
            key: "add",
            value: function(e) {
                this.deleteWithin(e),
                this._.push(e)
            }
        },
        {
            key: "shift",
            value: function(e, t, n, i) {
                this._.forEach((function(r) {
                    var o = r.sri,
                    a = r.sci,
                    s = r.eri,
                    l = r.eci,
                    c = r;
                    "row" === e ? o >= t ? (c.sri += n, c.eri += n) : o < t && t <= s && (c.eri += n, i(o, a, n, 0)) : "column" === e && (a >= t ? (c.sci += n, c.eci += n) : a < t && t <= l && (c.eci += n, i(o, a, 0, n)))
                }))
            }
        },
        {
            key: "move",
            value: function(e, t, n) {
                this._.forEach((function(i) {
                    var r = i;
                    r.within(e) && (r.eri += t, r.sri += t, r.sci += n, r.eci += n)
                }))
            }
        },
        {
            key: "setData",
            value: function(e) {
                return this._ = e.map((function(e) {
                    return m.valueOf(e)
                })),
                this
            }
        },
        {
            key: "getData",
            value: function() {
                return this._.map((function(e) {
                    return e.toString()
                }))
            }
        }]) && P(t.prototype, n),
        i && P(t, i),
        e
    } ();
    var O = function e() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
        return i.forEach((function(n) {
            Object.keys(n).forEach((function(i) {
                var r = n[i];
                "string" == typeof r || "number" == typeof r || "boolean" == typeof r ? t[i] = r: "function" != typeof r && !Array.isArray(r) && r instanceof Object ? (t[i] = t[i] || {},
                e(t[i], r)) : t[i] = r
            }))
        })),
        t
    };
    var N = {
        cloneDeep: function(e) {
            return JSON.parse(JSON.stringify(e))
        },
        merge: function() {
            for (var e = arguments.length,
            t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return O.apply(void 0, [{}].concat(t))
        },
        equals: function e(t, n) {
            var i = Object.keys(t);
            if (i.length !== Object.keys(n).length) return ! 1;
            for (var r = 0; r < i.length; r += 1) {
                var o = i[r],
                a = t[o],
                s = n[o];
                if (void 0 === s) return ! 1;
                if ("string" == typeof a || "number" == typeof a || "boolean" == typeof a) {
                    if (a !== s) return ! 1
                } else if (Array.isArray(a)) {
                    if (a.length !== s.length) return ! 1;
                    for (var l = 0; l < a.length; l += 1) if (!e(a[l], s[l])) return ! 1
                } else if ("function" != typeof a && !Array.isArray(a) && a instanceof Object && !e(a, s)) return ! 1
            }
            return ! 0
        },
        arrayEquals: function(e, t) {
            if (e.length !== t.length) return ! 1;
            for (var n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return ! 1;
            return ! 0
        },
        sum: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                return e
            },
            n = 0,
            i = 0;
            return Object.keys(e).forEach((function(r) {
                n += t(e[r], r),
                i += 1
            })),
            [n, i]
        },
        rangeEach: function(e, t, n) {
            for (var i = e; i < t; i += 1) n(i)
        },
        rangeSum: function(e, t, n) {
            for (var i = 0,
            r = e; r < t; r += 1) i += n(r);
            return i
        },
        rangeReduceIf: function(e, t, n, i, r, o) {
            for (var a = n,
            s = i,
            l = e; l < t && !(a > r); l += 1) a += s = o(l);
            return [l, a - s, s]
        },
        deleteProperty: function(e, t) {
            var n = e["".concat(t)];
            return delete e["".concat(t)],
            n
        }
    };
    function D(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return B(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return B(e, t)
        } (e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function B(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function j(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var F = function() {
        function e(t) {
            var n = t.len,
            i = t.height,
            r = t.minRowResizerHeight; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this._ = {},
            this.len = n,
            this.height = i,
            this.minRowResizerHeight = r
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "getHeight",
            value: function(e) {
                var t = this.get(e);
                return t && t.height ? t.height: this.height
            }
        },
        {
            key: "setHeight",
            value: function(e, t) {
                this.getOrNew(e).height = t
            }
        },
        {
            key: "setStyle",
            value: function(e, t) {
                this.getOrNew(e).style = t
            }
        },
        {
            key: "sumHeight",
            value: function(e, t, n) {
                var i = this;
                return N.rangeSum(e, t, (function(e) {
                    return n && n.has(e) ? 0 : i.getHeight(e)
                }))
            }
        },
        {
            key: "totalHeight",
            value: function() {
                return this.sumHeight(0, this.len)
            }
        },
        {
            key: "get",
            value: function(e) {
                return this._[e]
            }
        },
        {
            key: "getOrNew",
            value: function(e) {
                return this._[e] = this._[e] || {
                    cells: {}
                },
                this._[e]
            }
        },
        {
            key: "getCell",
            value: function(e, t) {
                var n = this.get(e);
                return void 0 !== n && void 0 !== n.cells && void 0 !== n.cells[t] ? n.cells[t] : null
            }
        },
        {
            key: "getCellMerge",
            value: function(e, t) {
                var n = this.getCell(e, t);
                return n && n.merge ? n.merge: [0, 0]
            }
        },
        {
            key: "getCellOrNew",
            value: function(e, t) {
                var n = this.getOrNew(e);
                return n.cells[t] = n.cells[t] || {},
                n.cells[t]
            }
        },
        {
            key: "setCell",
            value: function(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "all",
                r = this.getOrNew(e);
                "all" === i ? r.cells[t] = n: "text" === i ? (r.cells[t] = r.cells[t] || {},
                r.cells[t].text = n.text) : "format" === i && (r.cells[t] = r.cells[t] || {},
                r.cells[t].style = n.style, n.merge && (r.cells[t].merge = n.merge))
            }
        },
        {
            key: "setCellText",
            value: function(e, t, n) {
                this.getCellOrNew(e, t).text = n
            }
        },
        {
            key: "copyPaste",
            value: function(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {},
                o = e.sri,
                a = e.sci,
                s = e.eri,
                l = e.eci,
                c = t.sri,
                u = t.sci,
                d = t.eri,
                f = t.eci,
                g = e.size(),
                p = D(g, 2),
                m = p[0],
                v = p[1],
                y = t.size(),
                b = D(y, 2),
                C = b[0],
                I = b[1],
                w = !0,
                x = 0; (d < o || f < a) && (w = !1, x = d < o ? C: I);
                for (var A = o; A <= s; A += 1) if (this._[A]) for (var _ = a; _ <= l; _ += 1) if (this._[A].cells && this._[A].cells[_]) for (var S = c; S <= d; S += m) for (var k = u; k <= f; k += v) {
                    var L = S + (A - o),
                    T = k + (_ - a),
                    R = N.cloneDeep(this._[A].cells[_]);
                    i && R && R.text && R.text.length > 0 &&
                    function() {
                        var e = R.text,
                        t = k - u + (S - c) + 2;
                        if (w || (t -= x + 1), "=" === e[0]) R.text = e.replace(/\w{1,3}\d/g, (function(e) {
                            var n = 0,
                            i = 0;
                            return o === c ? n = t - 1 : i = t - 1,
                            h(e, n, i)
                        }));
                        else {
                            var n = /[\\.\d]+$/.exec(e);
                            if (null !== n) {
                                var i = Number(n[0]) + t - 1;
                                R.text = e.substring(0, n.index) + i
                            }
                        }
                    } (),
                    this.setCell(L, T, R, n),
                    r(L, T, R)
                }
            }
        },
        {
            key: "cutPaste",
            value: function(e, t) {
                var n = this,
                i = {};
                this.each((function(r) {
                    n.eachCells(r, (function(o) {
                        var a = parseInt(r, 10),
                        s = parseInt(o, 10);
                        e.includes(r, o) && (a = t.sri + (a - e.sri), s = t.sci + (s - e.sci)),
                        i[a] = i[a] || {
                            cells: {}
                        },
                        i[a].cells[s] = n._[r].cells[o]
                    }))
                })),
                this._ = i
            }
        },
        {
            key: "insert",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                n = {};
                this.each((function(i, r) {
                    var o = parseInt(i, 10);
                    o >= e && (o += t),
                    n[o] = r
                })),
                this._ = n,
                this.len += t
            }
        },
        {
            key: "delete",
            value: function(e, t) {
                var n = t - e + 1,
                i = {};
                this.each((function(r, o) {
                    var a = parseInt(r, 10);
                    a < e ? i[a] = o: r > t && (i[a - n] = o)
                })),
                this._ = i,
                this.len -= n
            }
        },
        {
            key: "insertColumn",
            value: function(e) {
                var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this.each((function(i, r) {
                    var o = {};
                    t.eachCells(i, (function(t, i) {
                        var r = parseInt(t, 10);
                        r >= e && (r += n),
                        o[r] = i
                    })),
                    r.cells = o
                }))
            }
        },
        {
            key: "deleteColumn",
            value: function(e, t) {
                var n = this,
                i = t - e + 1;
                this.each((function(r, o) {
                    var a = {};
                    n.eachCells(r, (function(n, r) {
                        var o = parseInt(n, 10);
                        o < e ? a[o] = r: o > t && (a[o - i] = r)
                    })),
                    o.cells = a
                }))
            }
        },
        {
            key: "deleteCells",
            value: function(e) {
                var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
                e.each((function(e, i) {
                    t.deleteCell(e, i, n)
                }))
            }
        },
        {
            key: "deleteCell",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "all",
                i = this.get(e);
                if (null !== i) {
                    var r = this.getCell(e, t);
                    null !== r && ("all" === n ? delete i.cells[t] : "text" === n ? (r.text && delete r.text, r.value && delete r.value) : "format" === n ? (void 0 !== r.style && delete r.style, r.merge && delete r.merge) : "merge" === n && r.merge && delete r.merge)
                }
            }
        },
        {
            key: "each",
            value: function(e) {
                Object.entries(this._).forEach((function(t) {
                    var n = D(t, 2),
                    i = n[0],
                    r = n[1];
                    e(i, r)
                }))
            }
        },
        {
            key: "eachCells",
            value: function(e, t) {
                this._[e] && this._[e].cells && Object.entries(this._[e].cells).forEach((function(e) {
                    var n = D(e, 2),
                    i = n[0],
                    r = n[1];
                    t(i, r)
                }))
            }
        },
        {
            key: "setData",
            value: function(e) {
                e.len && (this.len = e.len, delete e.len),
                this._ = e
            }
        },
        {
            key: "getData",
            value: function() {
                var e = this.len;
                return Object.assign({
                    len: e
                },
                this._)
            }
        },
        {
            key: "getMaxRange",
            value: function() {
                var e = 0,
                t = 0;
                return this.each((function(n, i) {
                    var r = parseInt(n, 10);
                    if (r > e && (e = r), i.cells) for (var o = Object.keys(i.cells), a = 0; a < o.length; a++) {
                        var s = parseInt(o[a], 10);
                        s > t && (t = s)
                    }
                })),
                {
                    maxRow: e,
                    maxCol: t
                }
            }
        }]) && j(t.prototype, n),
        i && j(t, i),
        e
    } ();
    function H(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var W = function() {
        function e(t) {
            var n = t.len,
            i = t.width,
            r = t.indexWidth,
            o = t.minWidth,
            a = t.minColResizerHeight; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this._ = {},
            this.len = n,
            this.width = i,
            this.indexWidth = r,
            this.minWidth = o,
            this.minColResizerHeight = a
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "setData",
            value: function(e) {
                e.len && (this.len = e.len, delete e.len),
                this._ = e
            }
        },
        {
            key: "getData",
            value: function() {
                var e = this.len;
                return Object.assign({
                    len: e
                },
                this._)
            }
        },
        {
            key: "getWidth",
            value: function(e) {
                var t = this._[e];
                return t && t.width ? t.width: this.width
            }
        },
        {
            key: "getOrNew",
            value: function(e) {
                return this._[e] = this._[e] || {},
                this._[e]
            }
        },
        {
            key: "setWidth",
            value: function(e, t) {
                this.getOrNew(e).width = t
            }
        },
        {
            key: "setStyle",
            value: function(e, t) {
                this.getOrNew(e).style = t
            }
        },
        {
            key: "sumWidth",
            value: function(e, t) {
                var n = this;
                return N.rangeSum(e, t, (function(e) {
                    return n.getWidth(e)
                }))
            }
        },
        {
            key: "totalWidth",
            value: function() {
                return this.sumWidth(0, this.len)
            }
        }]) && H(t.prototype, n),
        i && H(t, i),
        e
    } (),
    V = "en",
    G = {
        en: {
            toolbar: {
                undo: "Undo",
                redo: "Redo",
                save: "Save",
                print: "Print",
                chart: "chart",
                img: "insert image",
                paintformat: "Paint format",
                clearformat: "Clear format",
                format: "Format",
                fontName: "Font",
                fontSize: "Font size",
                fontBold: "Font bold",
                fontItalic: "Font italic",
                underline: "Underline",
                strike: "Strike",
                color: "Text color",
                bgcolor: "Fill color",
                border: "Borders",
                merge: "Merge cells",
                align: "Horizontal align",
                valign: "Vertical align",
                textwrap: "Text wrapping",
                freeze: "Freeze cell",
                autofilter: "Filter",
                formula: "Functions",
                more: "More",
                view: "view",
                uploadExcel: "uploadExcel",
                toolPrintSize: "pageSize"
            },
            rpBar: {
                exportExcel: "exportExcel",
                exportExcel_page: "导出当前页",
                exportExcel_all: "导出excel",
                exportExcel_pdf: "导出pdf",
                last: "上一页",
                next: "下一页",
                first: "首页",
                end: "末页",
                print: "打印",
                print_screen: "打印当前页",
                print_all: "打印全部",
                export: "导出",
                pdf: "PDF",
                slider: "清晰度"
            },
            contextmenu: {
                copy: "Copy",
                cut: "Cut",
                paste: "Paste",
                pasteValue: "Paste values only",
                pasteFormat: "Paste format only",
                insertRow: "Insert row",
                insertColumn: "Insert column",
                deleteRow: "Delete row",
                deleteColumn: "Delete column",
                deleteCell: "Delete cell",
                deleteCellText: "Delete cell text",
                validation: "Data validations",
                cellprintable: "Enable export",
                cellnonprintable: "Disable export",
                celleditable: "Enable editing",
                cellnoneditable: "Disable editing",
                cancleBackend: "cancleBackend"
            },
            format: {
                normal: "Normal",
                text: "Plain Text",
                number: "Number",
                percent: "Percent",
                rmb: "RMB",
                usd: "USD",
                eur: "EUR",
                date: "Date",
                date2: "Date",
                time: "Time",
                datetime: "Date time",
                duration: "Duration"
            },
            formula: {
                sum: "Sum",
                average: "Average",
                max: "Max",
                min: "Min",
                _if: "IF",
                and: "AND",
                or: "OR",
                concat: "Concat"
            },
            validation: {
                required: "it must be required",
                notMatch: "it not match its validation rule",
                between: "it is between {} and {}",
                notBetween: "it is not between {} and {}",
                notIn: "it is not in list",
                equal: "it equal to {}",
                notEqual: "it not equal to {}",
                lessThan: "it less than {}",
                lessThanEqual: "it less than or equal to {}",
                greaterThan: "it greater than {}",
                greaterThanEqual: "it greater than or equal to {}"
            },
            error: {
                pasteForMergedCell: "Unable to do this for merged cells"
            },
            calendar: {
                weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            button: {
                cancel: "Cancel",
                remove: "Remove",
                save: "Save",
                ok: "OK"
            },
            sort: {
                desc: "Sort Z -> A",
                asc: "Sort A -> Z"
            },
            filter: {
                empty: "empty"
            },
            dataValidation: {
                mode: "Mode",
                range: "Cell Range",
                criteria: "Criteria",
                modeType: {
                    cell: "Cell",
                    column: "Colun",
                    row: "Row"
                },
                type: {
                    list: "List",
                    number: "Number",
                    date: "Date",
                    phone: "Phone",
                    email: "Email"
                },
                operator: {
                    be: "between",
                    nbe: "not betwwen",
                    lt: "less than",
                    lte: "less than or equal to",
                    gt: "greater than",
                    gte: "greater than or equal to",
                    eq: "equal to",
                    neq: "not equal to"
                }
            }
        }
    };
    function z(e, t) {
        if (t && t[V]) for (var n = t[V], i = e.split("."), r = 0; r < i.length; r += 1) {
            var o = n[i[r]];
            if (r === i.length - 1) return o;
            if (!o) return;
            n = o
        }
    }
    function Z(e) {
        var t = z(e, G);
        return ! t && window && window.x && window.x.spreadsheet && window.x.spreadsheet.$messages && (t = z(e, window.x.spreadsheet.$messages)),
        t || ""
    }
    function $(e) {
        return function() {
            return Z(e)
        }
    }
    function K(e, t) {
        V = e,
        t && (G[e] = t)
    }
    function X(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Y(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Y(e, t)
        } (e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Y(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function U(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var J = {
        phone: /^[1-9]\d{10}$/,
        email: /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/
    };
    function q(e, t) {
        var n = "";
        if (!e) {
            for (var i = arguments.length,
            r = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) r[o - 2] = arguments[o];
            n = Z.apply(void 0, ["validation.".concat(t)].concat(r))
        }
        return [e, n]
    }
    var Q = function() {
        function e(t, n, i, r) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.required = n,
            this.value = i,
            this.type = t,
            this.operator = r,
            this.message = ""
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "parseValue",
            value: function(e) {
                var t = this.type;
                return "date" === t ? new Date(e) : "number" === t ? Number(e) : e
            }
        },
        {
            key: "equals",
            value: function(e) {
                var t = this.type === e.type && this.required === e.required && this.operator === e.operator;
                return t && (t = Array.isArray(this.value) ? N.arrayEquals(this.value, e.value) : this.value === e.value),
                t
            }
        },
        {
            key: "values",
            value: function() {
                return this.value.split(",")
            }
        },
        {
            key: "validate",
            value: function(e) {
                var t = this.required,
                n = this.operator,
                i = this.value,
                r = this.type;
                if (t && /^\s*$/.test(e)) return q(!1, "required");
                if (/^\s*$/.test(e)) return [!0];
                if (J[r] && !J[r].test(e)) return q(!1, "notMatch");
                if ("list" === r) return q(this.values().includes(e), "notIn");
                if (n) {
                    var o = this.parseValue(e);
                    if ("be" === n) {
                        var a = X(i, 2),
                        s = a[0],
                        l = a[1];
                        return q(o >= this.parseValue(s) && o <= this.parseValue(l), "between", s, l)
                    }
                    if ("nbe" === n) {
                        var c = X(i, 2),
                        u = c[0],
                        h = c[1];
                        return q(o < this.parseValue(u) || o > this.parseValue(h), "notBetween", u, h)
                    }
                    if ("eq" === n) return q(o === this.parseValue(i), "equal", i);
                    if ("neq" === n) return q(o !== this.parseValue(i), "notEqual", i);
                    if ("lt" === n) return q(o < this.parseValue(i), "lessThan", i);
                    if ("lte" === n) return q(o <= this.parseValue(i), "lessThanEqual", i);
                    if ("gt" === n) return q(o > this.parseValue(i), "greaterThan", i);
                    if ("gte" === n) return q(o >= this.parseValue(i), "greaterThanEqual", i)
                }
                return [!0]
            }
        }]) && U(t.prototype, n),
        i && U(t, i),
        e
    } ();
    function ee(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return te(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return te(e, t)
        } (e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function te(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function ne(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function ie(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function re(e, t, n) {
        return t && ie(e.prototype, t),
        n && ie(e, n),
        e
    }
    var oe = function() {
        function e(t, n, i) {
            ne(this, e),
            this.refs = n,
            this.mode = t,
            this.validator = i
        }
        return re(e, [{
            key: "includes",
            value: function(e, t) {
                for (var n = this.refs,
                i = 0; i < n.length; i += 1) {
                    if (m.valueOf(n[i]).includes(e, t)) return ! 0
                }
                return ! 1
            }
        },
        {
            key: "addRef",
            value: function(e) {
                this.remove(m.valueOf(e)),
                this.refs.push(e)
            }
        },
        {
            key: "remove",
            value: function(e) {
                var t = [];
                this.refs.forEach((function(n) {
                    var i = m.valueOf(n);
                    i.intersects(e) ? i.difference(e).forEach((function(e) {
                        return t.push(e.toString())
                    })) : t.push(n)
                })),
                this.refs = t
            }
        },
        {
            key: "getData",
            value: function() {
                var e = this.refs,
                t = this.mode,
                n = this.validator;
                return {
                    refs: e,
                    mode: t,
                    type: n.type,
                    required: n.required,
                    operator: n.operator,
                    value: n.value
                }
            }
        }], [{
            key: "valueOf",
            value: function(t) {
                var n = t.refs,
                i = t.mode,
                r = t.type,
                o = t.required,
                a = t.operator,
                s = t.value;
                return new e(i, n, new Q(r, o, s, a))
            }
        }]),
        e
    } (),
    ae = function() {
        function e() {
            ne(this, e),
            this._ = [],
            this.errors = new Map
        }
        return re(e, [{
            key: "getError",
            value: function(e, t) {
                return this.errors.get("".concat(e, "_").concat(t))
            }
        },
        {
            key: "validate",
            value: function(e, t, n) {
                var i = this.get(e, t),
                r = "".concat(e, "_").concat(t),
                o = this.errors;
                if (null !== i) {
                    var a = ee(i.validator.validate(n), 2),
                    s = a[0],
                    l = a[1];
                    s ? o.delete(r) : o.set(r, l)
                } else o.delete(r);
                return ! 0
            }
        },
        {
            key: "add",
            value: function(e, t, n) {
                var i = n.type,
                r = n.required,
                o = n.value,
                a = n.operator,
                s = new Q(i, r, o, a),
                l = this.getByValidator(s);
                null !== l ? l.addRef(t) : this._.push(new oe(e, [t], s))
            }
        },
        {
            key: "getByValidator",
            value: function(e) {
                for (var t = 0; t < this._.length; t += 1) {
                    var n = this._[t];
                    if (n.validator.equals(e)) return n
                }
                return null
            }
        },
        {
            key: "get",
            value: function(e, t) {
                for (var n = 0; n < this._.length; n += 1) {
                    var i = this._[n];
                    if (i.includes(e, t)) return i
                }
                return null
            }
        },
        {
            key: "remove",
            value: function(e) {
                this.each((function(t) {
                    t.remove(e)
                }))
            }
        },
        {
            key: "each",
            value: function(e) {
                this._.forEach((function(t) {
                    return e(t)
                }))
            }
        },
        {
            key: "getData",
            value: function() {
                return this._.filter((function(e) {
                    return e.refs.length > 0
                })).map((function(e) {
                    return e.getData()
                }))
            }
        },
        {
            key: "setData",
            value: function(e) {
                this._ = e.map((function(e) {
                    return oe.valueOf(e)
                }))
            }
        }]),
        e
    } (),
    se = "x-spreadsheet",
    le = (window.devicePixelRatio, n(45)),
    ce = n.n(le),
    ue = [{
        key: "宋体",
        title: "宋体"
    },
    {
        key: "黑体",
        title: "黑体"
    },
    {
        key: "仿宋",
        title: "仿宋"
    },
    {
        key: "楷体",
        title: "楷体"
    },
    {
        key: "隶书",
        title: "隶书"
    },
    {
        key: "华文中宋",
        title: "华文中宋"
    },
    {
        key: "华文行楷",
        title: "华文行楷"
    },
    {
        key: "Microsoft YaHei",
        title: "Microsoft YaHei"
    },
    {
        key: "Arial",
        title: "Arial"
    },
    {
        key: "Helvetica",
        title: "Helvetica"
    },
    {
        key: "Hiragino",
        title: "Hiragino Sans GB"
    },
    {
        key: "Source Sans Pro",
        title: "Source Sans Pro"
    },
    {
        key: "Comic Sans MS",
        title: "Comic Sans MS"
    },
    {
        key: "Courier New",
        title: "Courier New"
    },
    {
        key: "Verdana",
        title: "Verdana"
    },
    {
        key: "Lato",
        title: "Lato"
    }],
    he = [{
        pt: 7.5,
        px: 10
    },
    {
        pt: 8,
        px: 11
    },
    {
        pt: 9,
        px: 12
    },
    {
        pt: 10,
        px: 13
    },
    {
        pt: 10.5,
        px: 14
    },
    {
        pt: 11,
        px: 15
    },
    {
        pt: 12,
        px: 16
    },
    {
        pt: 14,
        px: 18.7
    },
    {
        pt: 15,
        px: 20
    },
    {
        pt: 16,
        px: 21.3
    },
    {
        pt: 18,
        px: 24
    },
    {
        pt: 22,
        px: 29.3
    },
    {
        pt: 24,
        px: 32
    },
    {
        pt: 26,
        px: 34.7
    },
    {
        pt: 36,
        px: 48
    },
    {
        pt: 42,
        px: 56
    }];
    function de(e) {
        for (var t = 0; t < he.length; t += 1) {
            var n = he[t];
            if (n.pt === e) return n.px
        }
        return e
    }
    function fe(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return ge(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ge(e, t)
        } (e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function ge(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    var pe = function(e) {
        for (var t = [], n = [], i = [], r = 0, o = "", a = 1, s = 0; s < e.length; s += 1) {
            var l = e.charAt(s);
            if (" " !== l) if (l >= "a" && l <= "z") i.push(l.toUpperCase());
            else if (l >= "0" && l <= "9" || l >= "A" && l <= "Z" || "." === l) i.push(l);
            else if ('"' === l) {
                for (s += 1;
                '"' !== e.charAt(s);) i.push(e.charAt(s)),
                s += 1;
                n.push('"'.concat(i.join(""))),
                i = []
            } else {
                if ("(" !== l && i.length > 0 && n.push(i.join("")), ")" === l) {
                    var h = t.pop();
                    if (2 === r) try {
                        for (var d = fe(c(n.pop()), 2), f = d[0], g = d[1], p = fe(c(n.pop()), 2), m = p[0], v = p[1], y = 0, b = m; b <= f; b += 1) for (var C = v; C <= g; C += 1) n.push(u(b, C)),
                        y += 1;
                        n.push([h, y])
                    } catch(e) {} else if (1 === r || 3 === r) 3 === r && n.push(o),
                    n.push([h, a]),
                    a = 1;
                    else for (;
                    "(" !== h && (n.push(h), !(t.length <= 0));) h = t.pop();
                    r = 0
                } else if ("=" === l || ">" === l || "<" === l) {
                    var I = e.charAt(s + 1);
                    o = l,
                    "=" !== I && "-" !== I || (o += I, s += 1),
                    r = 3
                } else if (":" === l) r = 2;
                else if ("," === l) 3 === r && n.push(o),
                r = 1,
                a += 1;
                else if ("(" === l && i.length > 0) t.push(i.join(""));
                else {
                    if (t.length > 0 && ("+" === l || "-" === l)) {
                        var w = t[t.length - 1];
                        if ("(" !== w && n.push(t.pop()), "*" === w || "/" === w) for (; t.length > 0 && "(" !== (w = t[t.length - 1]);) n.push(t.pop())
                    }
                    t.push(l)
                }
                i = []
            }
        }
        for (i.length > 0 && n.push(i.join("")); t.length > 0;) n.push(t.pop());
        return n
    },
    me = function(e, t) {
        if (e[0] >= "0" && e[0] <= "9") return Number(e);
        if ('"' === e[0]) return e.substring(1);
        var n = fe(c(e), 2);
        return t(n[0], n[1])
    },
    ve = function(e, t, n, i) {
        for (var r = [], o = 0; o < e.length; o += 1) {
            var a = e[o],
            s = a[0];
            if ("+" === a) {
                var l = r.pop();
                r.push(Number(r.pop()) + Number(l))
            } else if ("-" === a) if (1 === r.length) {
                var c = r.pop();
                r.push( - 1 * Number(c))
            } else {
                var u = r.pop();
                r.push(Number(r.pop()) - Number(u))
            } else if ("*" === a) r.push(Number(r.pop()) * Number(r.pop()));
            else if ("/" === a) {
                var h = r.pop();
                r.push(Number(r.pop()) / Number(h))
            } else if ("=" === s || ">" === s || "<" === s) {
                var d = r.pop(),
                f = Function;
                r.push(new f("return ".concat(r.pop(), " ").concat("=" === a ? "==": a, " ").concat(d))())
            } else if (Array.isArray(a)) {
                for (var g = fe(a, 2), p = g[0], m = g[1], v = [], y = 0; y < m; y += 1) v.push(r.pop());
                r.push(t[p].render(v.reverse()))
            } else {
                if (i.includes(a)) return 0; (s >= "a" && s <= "z" || s >= "A" && s <= "Z") && i.push(a),
                r.push(me(a, n))
            }
        }
        return r[0]
    },
    ye = function e(t, n, i) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        if ("=" === t[0]) {
            var o = pe(t.substring(1));
            return o.length <= 0 ? t: ve(o, n, (function(t, o) {
                return e(i(t, o), n, i, r)
            }), r)
        }
        return t
    };
    function be(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) || Ie(e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Ce(e) {
        return function(e) {
            if (Array.isArray(e)) return we(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) || Ie(e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Ie(e, t) {
        if (e) {
            if ("string" == typeof e) return we(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? we(e, t) : void 0
        }
    }
    function we(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    var xe = [{
        key: "SUM",
        title: $("formula.sum"),
        render: function(e) {
            return e.reduce((function(e, t) {
                return Number(e) + Number(t)
            }), 0)
        }
    },
    {
        key: "AVERAGE",
        title: $("formula.average"),
        render: function(e) {
            return e.reduce((function(e, t) {
                return Number(e) + Number(t)
            }), 0) / e.length
        }
    },
    {
        key: "MAX",
        title: $("formula.max"),
        render: function(e) {
            return Math.max.apply(Math, Ce(e.map((function(e) {
                return Number(e)
            }))))
        }
    },
    {
        key: "MIN",
        title: $("formula.min"),
        render: function(e) {
            return Math.min.apply(Math, Ce(e.map((function(e) {
                return Number(e)
            }))))
        }
    },
    {
        key: "IF",
        title: $("formula._if"),
        render: function(e) {
            var t = be(e, 3),
            n = t[0],
            i = t[1],
            r = t[2];
            return n ? i: r
        }
    },
    {
        key: "AND",
        title: $("formula.and"),
        render: function(e) {
            return e.every((function(e) {
                return e
            }))
        }
    },
    {
        key: "OR",
        title: $("formula.or"),
        render: function(e) {
            return e.some((function(e) {
                return e
            }))
        }
    },
    {
        key: "CONCAT",
        title: $("formula.concat"),
        render: function(e) {
            return e.join("")
        }
    }],
    Ae = xe,
    _e = {};
    function Se(e) {
        return function(e) {
            if (Array.isArray(e)) return Te(e)
        } (e) || Re(e) || Le(e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function ke(e) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) || Re(e) || Le(e) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Le(e, t) {
        if (e) {
            if ("string" == typeof e) return Te(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Te(e, t) : void 0
        }
    }
    function Te(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Re(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }
    xe.forEach((function(e) {
        _e[e.key] = e
    }));
    var Me = function(e) {
        if (/^(-?\d*.?\d*)$/.test(e)) {
            var t = ke(Number(e).toFixed(2).toString().split("\\.")),
            n = t[0],
            i = t.slice(1);
            return [n.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")].concat(Se(i))
        }
        if (e.indexOf("-") >= 0 || e.indexOf("/") >= 0) {
            var r = e.replace(/-/g, "/");
            return new Date(r).getTime()
        }
        for (var o = !1,
        a = 0,
        s = ["年", "月", "日", "时", "分", "秒"]; a < s.length; a++) {
            var l = s[a];
            e.indexOf(l) >= 0 && (e = e.replace(l, "/"), o = !0)
        }
        return ! 0 === o ? new Date(e).getTime() : e
    },
    Pe = [{
        key: "normal",
        title: $("format.normal"),
        type: "string",
        render: function(e) {
            return e
        }
    },
    {
        key: "number",
        title: $("format.number"),
        type: "number",
        label: "1,000.12",
        render: Me
    },
    {
        key: "percent",
        title: $("format.percent"),
        type: "number",
        label: "10.12%",
        render: function(e) {
            return "".concat(e, "%")
        }
    },
    {
        key: "rmb",
        title: $("format.rmb"),
        type: "number",
        label: "￥10.00",
        render: function(e) {
            return "￥".concat(Me(e))
        }
    },
    {
        key: "usd",
        title: $("format.usd"),
        type: "number",
        label: "$10.00",
        render: function(e) {
            return "$".concat(Me(e))
        }
    },
    {
        key: "eur",
        title: $("format.eur"),
        type: "number",
        label: "€10.00",
        render: function(e) {
            return "€".concat(Me(e))
        }
    },
    {
        key: "date",
        title: $("format.date"),
        type: "date",
        label: "2020/10/10",
        render: function(e) {
            return Oe(e, "yyyy/MM/dd")
        }
    },
    {
        key: "date2",
        title: $("format.date2"),
        type: "date",
        label: "2020年10月10日",
        render: function(e) {
            return Oe(e, "yyyy年MM月dd日")
        }
    },
    {
        key: "time",
        title: $("format.time"),
        type: "date",
        label: "10:10:10",
        render: function(e) {
            return Oe(e, "hh:mm:ss")
        }
    },
    {
        key: "datetime",
        title: $("format.datetime"),
        type: "date",
        label: "2020/10/10 10:10:10",
        render: function(e) {
            return Oe(e, "yyyy/MM/dd hh:mm:ss")
        }
    }],
    Ee = {};
    function Oe(e, t) {
        var n = function(e) {
            if (/^\d+(\.\d+)?$/.test(e)) return new Date(e);
            if (e.indexOf("-") >= 0) e = e.replace(/-/g, "/");
            else for (var t = 0,
            n = ["年", "月", "日", "时", "分", "秒"]; t < n.length; t++) {
                var i = n[t];
                e.indexOf(i) >= 0 && (e = e.replace(i, "/"))
            }
            return new Date(e)
        } (e),
        i = {
            "M+": n.getMonth() + 1,
            "d+": n.getDate(),
            "h+": n.getHours(),
            "m+": n.getMinutes(),
            "s+": n.getSeconds(),
            "q+": Math.floor((n.getMonth() + 3) / 3),
            S: n.getMilliseconds()
        };
        for (var r in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length))), i) new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? i[r] : ("00" + i[r]).substr(("" + i[r]).length)));
        return t
    }
    function Ne(e) {
        return function(e) {
            if (Array.isArray(e)) return je(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) || Be(e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function De(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) || Be(e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Be(e, t) {
        if (e) {
            if ("string" == typeof e) return je(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? je(e, t) : void 0
        }
    }
    function je(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Fe(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function He(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function We(e, t, n) {
        return t && He(e.prototype, t),
        n && He(e, n),
        e
    }
    function Ve() {
        return window.devicePixelRatio || 1
    }
    function Ge() {
        return Ve() - .5
    }
    function ze(e) {
        return parseInt(e * Ve(), 10)
    }
    function Ze(e) {
        var t = ze(e);
        return t > 0 ? t - .5 : .5
    }
    Pe.forEach((function(e) {
        Ee[e.key] = e
    }));
    var $e = Ve(),
    Ke = function() {
        function e(t, n, i, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
            Fe(this, e),
            this.x = t,
            this.y = n,
            this.width = i,
            this.height = r,
            this.padding = o,
            this.bgcolor = "#ffffff",
            this.borderTop = null,
            this.borderRight = null,
            this.borderBottom = null,
            this.borderLeft = null,
            this.spaceCell = !1
        }
        return We(e, [{
            key: "setBorders",
            value: function(e) {
                var t = e.top,
                n = e.bottom,
                i = e.left,
                r = e.right;
                t && (this.borderTop = t),
                r && (this.borderRight = r),
                n && (this.borderBottom = n),
                i && (this.borderLeft = i)
            }
        },
        {
            key: "innerWidth",
            value: function() {
                return this.width - 3 * this.padding
            }
        },
        {
            key: "innerHeight",
            value: function() {
                return this.height - 2 * this.padding
            }
        },
        {
            key: "textx",
            value: function(e) {
                var t = this.width,
                n = this.padding,
                i = this.x;
                return "left" === e ? i += n: "center" === e ? i += t / 2 : "right" === e && (i += t - n),
                i
            }
        },
        {
            key: "texty",
            value: function(e, t, n) {
                var i = this.height,
                r = this.padding,
                o = this.y;
                return "top" === e ? o += r: "middle" === e ? o = o + i / 2 - n: "bottom" === e && (o += i - 2 * n - r),
                o
            }
        },
        {
            key: "topxys",
            value: function() {
                var e = this.x,
                t = this.y;
                return [[e, t], [e + this.width, t]]
            }
        },
        {
            key: "rightxys",
            value: function() {
                var e = this.x,
                t = this.y,
                n = this.width;
                return [[e + n, t], [e + n, t + this.height]]
            }
        },
        {
            key: "bottomxys",
            value: function() {
                var e = this.x,
                t = this.y,
                n = this.width,
                i = this.height;
                return [[e, t + i], [e + n, t + i]]
            }
        },
        {
            key: "leftxys",
            value: function() {
                var e = this.x,
                t = this.y;
                return [[e, t], [e, t + this.height]]
            }
        }]),
        e
    } ();
    function Xe(e, t, n, i, r, o, a) {
        var s = {
            x: 0,
            y: 0
        };
        "underline" === e ? s.y = "bottom" === r ? 0 : "top" === r ? -(o + 2) : -o / 2 : "strike" === e && ("bottom" === r ? s.y = o / 2 : "top" === r && (s.y = -(o / 2 + 2))),
        "center" === i ? s.x = a / 2 : "right" === i && (s.x = a),
        this.line([t - s.x, n - s.y], [t - s.x + a, n - s.y])
    }
    var Ye = function() {
        function e(t, n, i) {
            Fe(this, e),
            this.el = t,
            this.ctx = t.getContext("2d"),
            this.resize(n, i),
            this.ctx.scale(Ve(), Ve()),
            this.isPrint = !1,
            this.printDegree = 0
        }
        return We(e, [{
            key: "resize",
            value: function(e, t) {
                this.el.style.width = "".concat(e, "px"),
                this.el.style.height = "".concat(t, "px"),
                this.el.width = ze(e),
                this.el.height = ze(t),
                this.isPrint && this.resizeForPrintty(e, t)
            }
        },
        {
            key: "resizeForPrintty",
            value: function(e, t, n) {
                n || (n = this.printDegree),
                n > 1 && (console.log("清晰度", n), this.el.width = n * e, this.el.height = n * t, this.ctx.scale(n, n))
            }
        },
        {
            key: "changePrintDegree",
            value: function(e) {
                this.isPrint = !0,
                this.printDegree = e
            }
        },
        {
            key: "resizePrint",
            value: function(e, t) {
                this.el.width = ze(e),
                this.el.height = ze(t),
                this.el.removeAttribute("style"),
                this.el.style.height = "".concat(t, "px")
            }
        },
        {
            key: "clear",
            value: function() {
                var e = this.el,
                t = e.width,
                n = e.height;
                return this.ctx.clearRect(0, 0, t, n),
                this
            }
        },
        {
            key: "attr",
            value: function(e) {
                return Object.assign(this.ctx, e),
                this
            }
        },
        {
            key: "save",
            value: function() {
                return this.ctx.save(),
                this.ctx.beginPath(),
                this
            }
        },
        {
            key: "restore",
            value: function() {
                return this.ctx.restore(),
                this
            }
        },
        {
            key: "img",
            value: function(e) {
                var t = this;
                return new Promise((function(n) {
                    var i = e.top,
                    r = e.left,
                    o = e.width,
                    a = e.height,
                    s = e.absrc,
                    l = new Image;
                    l.crossOrigin = "Anonymous",
                    l.src = s,
                    l.addEventListener("load", (function() {
                        t.ctx.scale(Ve(), Ve()),
                        t.ctx.drawImage(l, r, i, o, a),
                        n()
                    }))
                }))
            }
        },
        {
            key: "beginPath",
            value: function() {
                return this.ctx.beginPath(),
                this
            }
        },
        {
            key: "translate",
            value: function(e, t) {
                return this.ctx.translate(ze(e), ze(t)),
                this
            }
        },
        {
            key: "clearRect",
            value: function(e, t, n, i) {
                return this.ctx.clearRect(e, t, n, i),
                this
            }
        },
        {
            key: "fillRect",
            value: function(e, t, n, i) {
                return this.ctx.fillRect(ze(e) - .5, ze(t) - .5, ze(n), ze(i)),
                this
            }
        },
        {
            key: "fillText",
            value: function(e, t, n, i) {
                return i ? this.ctx.fillText(e, ze(t), ze(n), i) : this.ctx.fillText(e, ze(t), ze(n)),
                this
            }
        },
        {
            key: "text",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                r = this.ctx,
                o = n.align,
                a = n.valign,
                s = n.font,
                l = n.color,
                c = n.strike,
                u = n.underline,
                h = t.textx(o);
                r.save(),
                r.beginPath(),
                this.attr({
                    textAlign: o,
                    textBaseline: a,
                    font: "".concat(s.italic ? "italic": "", " ").concat(s.bold ? "bold": "", " ").concat(ze(s.size), "px ").concat(s.name),
                    fillStyle: l,
                    strokeStyle: l
                }),
                e || (e = " ");
                var d = r.measureText(e).width,
                f = 0,
                g = ze(t.innerWidth());
                if (i) {
                    var p = Math.ceil(d / g);
                    f = (p - 1) * s.size / 2
                }
                var m = t.texty(a, s.size, f);
                if (i && d > g) {
                    for (var v = {
                        len: 0,
                        start: 0
                    },
                    y = 0; y < e.length; y += 1) v.len >= g && (this.fillText(e.substring(v.start, y), h, m), c && Xe.call(this, "strike", h, m, o, a, s.size, v.len), u && Xe.call(this, "underline", h, m, o, a, s.size, v.len), m += s.size + 2, v.len = 0, v.start = y),
                    v.len += r.measureText(e[y]).width;
                    v.len > 0 && (this.fillText(e.substring(v.start), h, m), c && Xe.call(this, "strike", h, m, o, a, s.size, v.len), u && Xe.call(this, "underline", h, m, o, a, s.size, v.len))
                } else d < g || (e + "").indexOf("#{") >= 0 ? this.fillText(e, h, m) : this.fillText(this.getRealFillText(r, g, e, e, 0), h, m),
                c && Xe.call(this, "strike", h, m, o, a, s.size, d),
                u && Xe.call(this, "underline", h, m, o, a, s.size, d);
                return r.restore(),
                this
            }
        },
        {
            key: "getRealFillText",
            value: function(e, t, n, i, r) {
                if (r > 10) return i;
                var o = e.measureText(i).width,
                a = parseInt(o / i.length);
                if (t - o > a) {
                    r++;
                    var s = n.substr(0, i.length + 1);
                    return this.getRealFillText(e, t, n, s, r)
                }
                if (o - t > a) {
                    r++;
                    var l = parseInt(t / o * i.length) + 1,
                    c = i.substr(0, l);
                    return this.getRealFillText(e, t, n, c, r)
                }
                return i
            }
        },
        {
            key: "setStroke",
            value: function(e) {
                this.ctx.strokeStyle = e
            }
        },
        {
            key: "border",
            value: function(e, t) {
                var n = this.ctx;
                return n.lineWidth = Ge,
                n.strokeStyle = t,
                "medium" === e ? n.lineWidth = ze(2) - .5 : "thick" === e ? n.lineWidth = ze(3) : "dashed" === e ? n.setLineDash([ze(3), ze(2)]) : "dotted" === e ? n.setLineDash([ze(1), ze(1)]) : "double" === e && n.setLineDash([ze(2), 0]),
                this
            }
        },
        {
            key: "line",
            value: function() {
                var e = this.ctx;
                if (arguments.length > 1) {
                    var t = arguments.length <= 0 ? void 0 : arguments[0],
                    n = De(t, 2),
                    i = n[0],
                    r = n[1];
                    e.moveTo(Ze(i), Ze(r));
                    for (var o = 1; o < arguments.length; o += 1) {
                        var a = o < 0 || arguments.length <= o ? void 0 : arguments[o],
                        s = De(a, 2),
                        l = s[0],
                        c = s[1];
                        e.lineTo(Ze(l), Ze(c))
                    }
                    e.stroke()
                }
                return this
            }
        },
        {
            key: "strokeBorders",
            value: function(e) {
                var t = this.ctx;
                t.save(),
                t.beginPath();
                var n = e.borderTop,
                i = e.borderRight,
                r = e.borderBottom,
                o = e.borderLeft;
                n && (this.border.apply(this, Ne(n)), this.line.apply(this, Ne(e.topxys()))),
                i && (this.border.apply(this, Ne(i)), this.line.apply(this, Ne(e.rightxys()))),
                r && (this.border.apply(this, Ne(r)), this.line.apply(this, Ne(e.bottomxys()))),
                o && (this.border.apply(this, Ne(o)), this.line.apply(this, Ne(e.leftxys()))),
                t.restore()
            }
        },
        {
            key: "dropdown",
            value: function(e) {
                var t = this.ctx,
                n = e.x,
                i = e.y,
                r = n + e.width - 15,
                o = i + e.height - 15;
                t.save(),
                t.beginPath(),
                t.moveTo(ze(r), ze(o)),
                t.lineTo(ze(r + 8), ze(o)),
                t.lineTo(ze(r + 4), ze(o + 6)),
                t.closePath(),
                t.fillStyle = "rgba(0, 0, 0, .45)",
                t.fill(),
                t.restore()
            }
        },
        {
            key: "error",
            value: function(e) {
                var t = this.ctx,
                n = e.x,
                i = e.y,
                r = n + e.width - 1;
                t.save(),
                t.beginPath(),
                t.moveTo(ze(r - 8), ze(i - 1)),
                t.lineTo(ze(r), ze(i - 1)),
                t.lineTo(ze(r), ze(i + 8)),
                t.closePath(),
                t.fillStyle = "rgba(255, 0, 0, .65)",
                t.fill(),
                t.restore()
            }
        },
        {
            key: "frozen",
            value: function(e) {
                var t = this.ctx,
                n = e.x,
                i = e.y,
                r = n + e.width - 1;
                t.save(),
                t.beginPath(),
                t.moveTo(ze(r - 8), ze(i - 1)),
                t.lineTo(ze(r), ze(i - 1)),
                t.lineTo(ze(r), ze(i + 8)),
                t.closePath(),
                t.fillStyle = "rgba(0, 255, 0, .85)",
                t.fill(),
                t.restore()
            }
        },
        {
            key: "rect",
            value: function(e, t) {
                var n = this.ctx,
                i = e.x,
                r = e.y,
                o = e.width,
                a = e.height,
                s = e.bgcolor;
                n.save(),
                n.beginPath(),
                !1 !== e.spaceCell && e.readOnly || (n.fillStyle = s || "#fff", "#fff" === n.fillStyle || "#ffffff" === n.fillStyle ? n.rect(Ze(i + 1), Ze(r + 1), ze(o - 2), ze(a - 2)) : n.rect(Ze(i), Ze(r), ze(o), ze(a)), n.clip(), n.fill()),
                t(),
                n.restore()
            }
        },
        {
            key: "rectPrint",
            value: function(e, t) {
                var n = this.ctx,
                i = e.x,
                r = e.y,
                o = e.width,
                a = e.height,
                s = e.bgcolor;
                n.save(),
                n.beginPath(),
                n.fillStyle = s || "#fff";
                var l = Ze(i),
                c = Ze(r),
                u = ze(o),
                h = ze(a);
                "#fff" != n.fillStyle && "#ffffff" != n.fillStyle && (n.rect(l, c, u, h), n.clip(), n.fill()),
                t(),
                n.restore()
            }
        }]),
        e
    } ();
    function Ue(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) || Qe(e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Je(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function qe(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = Qe(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        }: {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        }
        var o, a = !0,
        s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return a = e.done,
                e
            },
            e: function(e) {
                s = !0,
                o = e
            },
            f: function() {
                try {
                    a || null == n.
                    return || n.
                    return ()
                } finally {
                    if (s) throw o
                }
            }
        }
    }
    function Qe(e, t) {
        if (e) {
            if ("string" == typeof e) return et(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? et(e, t) : void 0
        }
    }
    function et(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    var tt = {
        fillStyle: "#f4f5f8"
    },
    nt = {
        fillStyle: "#fff",
        lineWidth: Ge,
        strokeStyle: "#e6e6e6"
    };
    function it(e, t) {
        var n = this.data.cellRect(e, t),
        i = n.left,
        r = n.top,
        o = n.width,
        a = n.height;
        return new Ke(i, r, o, a, 5)
    }
    function rt(e, t, n, i) {
        var r = this.data,
        o = r.scroll,
        a = (o.x, o.y, r.cellRect(e, t)),
        s = a.left,
        l = a.top,
        c = a.width,
        u = a.height;
        return new Ke(s - i, l - n, c, u, 5)
    }
    function ot(e, t) {
        var n = this.draw,
        i = this.data,
        r = i.sortedRowMap,
        o = e;
        r.has(e) && (o = r.get(e));
        var a = i.getCell(o, t);
        if (null !== a) {
            var s = !1;
            "editable" in a && 0 == a.editable && (s = !0);
            var l = i.getCellStyleOrDefault(o, t),
            c = it.call(this, e, t);
            c.bgcolor = l.bgcolor,
            void 0 !== l.border && (c.setBorders(l.border), n.strokeBorders(c)),
            " " == a.text && (c.spaceCell = !0, !0 === i.settings.readOnly && (c.readOnly = !0)),
            n.rect(c, (function() {
                var r = ye(a.text || "", _e, (function(e, t) {
                    return i.getCellTextOrDefault(t, e)
                }));
                l.format && (r = Ee[l.format].render(r));
                var o = Object.assign({},
                l.font);
                o.size = de(o.size),
                n.text(r, c, {
                    align: l.align,
                    valign: l.valign,
                    font: o,
                    color: l.color,
                    strike: l.strike,
                    underline: l.underline
                },
                l.textwrap),
                i.validations.getError(e, t) && n.error(c),
                s && n.frozen(c)
            }))
        }
    }
    function at(e, t) {
        var n = this.draw,
        i = this.data,
        r = i.sortedRowMap,
        o = e;
        r.has(e) && (o = r.get(e));
        var a = i.getCell(o, t);
        if (null !== a) {
            var s = !1;
            "editable" in a && 0 == a.editable && (s = !0);
            var l = i.getCellStyleOrDefault(o, t),
            c = it.call(this, e, t);
            c.bgcolor = l.bgcolor,
            void 0 !== l.border && (c.setBorders(l.border), n.strokeBorders(c));
            var u = ye(a.text || "", _e, (function(e, t) {
                return i.getCellTextOrDefault(t, e)
            }));
            u && n.rectPrint(c, (function() {
                l.format && (u = Ee[l.format].render(u));
                var r = Object.assign({},
                l.font);
                r.size = de(r.size),
                n.text(u, c, {
                    align: l.align,
                    valign: l.valign,
                    font: r,
                    color: l.color,
                    strike: l.strike,
                    underline: l.underline
                },
                l.textwrap),
                i.validations.getError(e, t) && n.error(c),
                s && n.frozen(c)
            }))
        }
    }
    function st(e) {
        var t = this,
        n = this.data,
        i = this.draw;
        if (e) {
            var r = n.autoFilter;
            if (!r.active()) return;
            var o = r.hrange();
            e.intersects(o) && o.each((function(e, n) {
                var r = it.call(t, e, n);
                i.dropdown(r)
            }))
        }
    }
    function lt(e, t, n, i, r) {
        var o = this,
        a = this.draw,
        s = this.data;
        a.save(),
        s.settings.readOnly ? a.translate(t, n).translate(i - s.settings.col.indexWidth, r - s.settings.row.height) : a.translate(t, n).translate(i, r);
        var l = s.exceptRowSet,
        c = s.exceptRowTotalHeight(e.sri, e.eri);
        a.save(),
        a.translate(0, -c),
        e.each((function(e, t) {
            ot.call(o, e, t)
        }), (function(e) {
            return function(e) {
                var t = l.has(e);
                if (t) {
                    var n = s.rows.getHeight(e);
                    a.translate(0, -n)
                }
                return ! t
            } (e)
        })),
        a.restore();
        var u = new Set;
        a.save(),
        a.translate(0, -c),
        s.eachMergesInView(e, (function(e) {
            var t = e.sri,
            n = e.sci,
            i = e.eri;
            if (l.has(t)) {
                if (!u.has(t)) {
                    u.add(t);
                    var r = s.rows.sumHeight(t, i + 1);
                    a.translate(0, -r)
                }
            } else ot.call(o, t, n)
        })),
        a.restore(),
        st.call(this, e),
        a.restore()
    }
    function ct(e, t, n, i) {
        var r = this.draw;
        r.save(),
        r.attr({
            fillStyle: "rgba(75, 137, 255, 0.08)"
        }).fillRect(e, t, n, i),
        r.restore()
    }
    function ut(e, t, n, i, r, o) {
        var a = this,
        l = this.draw,
        c = this.data,
        u = t.h,
        h = t.w,
        d = o + i,
        f = r + n;
        l.save(),
        l.attr(tt),
        "all" !== e && "left" !== e || l.fillRect(0, d, n, u),
        "all" !== e && "top" !== e || l.fillRect(f, 0, h, i);
        var g = c.selector.range,
        p = g.sri,
        m = g.sci,
        v = g.eri,
        y = g.eci;
        l.attr({
            textAlign: "center",
            textBaseline: "middle",
            font: "500 ".concat(ze(12), "px Source Sans Pro"),
            fillStyle: "#585757",
            lineWidth: Ge(),
            strokeStyle: "#e6e6e6"
        }),
        "all" !== e && "left" !== e || (c.rowEach(t.sri, t.eri, (function(e, t, i) {
            var r = d + t,
            o = e;
            l.line([0, r], [n, r]),
            p <= o && o < v + 1 && ct.call(a, 0, r, n, i),
            l.fillText(o + 1, n / 2, r + i / 2)
        })), l.line([0, u + d], [n, u + d]), l.line([n, d], [n, u + d])),
        "all" !== e && "top" !== e || (c.colEach(t.sci, t.eci, (function(e, t, n) {
            var r = f + t,
            o = e;
            l.line([r, 0], [r, i]),
            m <= o && o < y + 1 && ct.call(a, r, 0, n, i),
            l.fillText(s(o), r + n / 2, i / 2)
        })), l.line([h + f, 0], [h + f, i]), l.line([0, i], [h + f, i])),
        l.restore()
    }
    function ht(e, t) {
        var n = this.draw;
        n.save(),
        n.attr({
            fillStyle: "#f4f5f8"
        }).fillRect(0, 0, e, t),
        n.restore()
    }
    function dt(e, t, n, i, r) {
        var o = e.sri,
        a = e.sci,
        s = e.eri,
        l = e.eci,
        c = e.w,
        u = e.h,
        h = this.draw,
        d = this.data,
        f = d.settings;
        h.save(),
        h.attr(nt).translate(t + i, n + r),
        h.clearRect(0, 0, c, u),
        f.showGrid ? (d.rowEach(o, s, (function(e, t, n) {
            e !== o && h.line([0, t], [c, t]),
            e === s && h.line([0, t + n], [c, t + n])
        })), d.colEach(a, l, (function(e, t, n) {
            e !== a && h.line([t, 0], [t, u]),
            e === l && h.line([t + n, 0], [t + n, u])
        })), h.restore()) : h.restore()
    }
    function ft(e, t, n, i) {
        var r = this.draw,
        o = this.data,
        a = o.viewWidth() - e,
        s = o.viewHeight() - t;
        r.save().translate(e, t).attr({
            strokeStyle: "rgba(75, 137, 255, .6)"
        }),
        r.line([0, i], [a, i]),
        r.line([n, 0], [n, s]),
        r.restore()
    }
    function gt(e) {
        this.draw.img(e)
    }
    function pt(e, t, n, i, r) {
        var o = e.sri,
        a = e.sci,
        s = e.eri,
        l = e.eci,
        c = e.w,
        u = e.h,
        h = this.draw,
        d = this.data,
        f = d.settings;
        h.save(),
        h.attr(nt).translate(t + i, n + r),
        h.clearRect(0, 0, c, u),
        f.showGrid ? (h.line([0, 0], [c, 0]), h.line([x, 0], [x, u]), console.log("划线开始-------------"), d.rowEach(o, s, (function(e, t, n) {
            e !== o && h.line([0, t], [c, t]),
            e === s && h.line([0, t + n], [c, t + n])
        })), d.colEach(a, l, (function(e, t, n) {
            e !== a && h.line([t, 0], [t, u]),
            e === l && h.line([t + n, 0], [t + n, u])
        })), console.log("划线结束-------------"), h.restore()) : h.restore()
    }
    function mt(e, t, n, i) {
        var r = this.draw,
        o = this.data,
        a = o.sortedRowMap,
        s = e;
        a.has(e) && (s = a.get(e));
        var l = o.getCell(s, t);
        if (null !== l) {
            var c = !1;
            "editable" in l && 0 == l.editable && (c = !0);
            var u = o.getCellStyleOrDefault(s, t),
            h = rt.call(this, e, t, n, i);
            h.bgcolor = u.bgcolor,
            void 0 !== u.border && (h.setBorders(u.border), r.strokeBorders(h));
            var d = ye(l.text || "", _e, (function(e, t) {
                return o.getCellTextOrDefault(t, e)
            }));
            d && r.rectPrint(h, (function() {
                u.format && (d = Ee[u.format].render(d));
                var a = Object.assign({},
                u.font);
                a.size = de(a.size),
                r.text(d, h, {
                    align: u.align,
                    valign: u.valign,
                    font: a,
                    color: u.color,
                    strike: u.strike,
                    underline: u.underline
                },
                u.textwrap, {
                    topty: n,
                    leftty: i
                }),
                o.validations.getError(e, t) && r.error(h),
                c && r.frozen(h)
            }))
        }
    }
    function vt(e, t, n, i, r) {
        var o = this,
        a = this.draw,
        s = this.data;
        a.save(),
        a.translate(t, n).translate(0, 0);
        var l = s.exceptRowSet,
        c = s.exceptRowTotalHeight(e.sri, e.eri);
        a.save(),
        a.translate(0, -c),
        console.log("===============begin"),
        e.each((function(e, t) {
            mt.call(o, e, t, i, r)
        }), (function(e) {
            return function(e) {
                var t = l.has(e);
                if (t) {
                    var n = s.rows.getHeight(e);
                    a.translate(0, -n)
                }
                return ! t
            } (e)
        })),
        a.restore(),
        console.log("===============end");
        var u = new Set;
        a.save(),
        a.translate(0, -c),
        s.eachMergesInView(e, (function(e) {
            var t = e.sri,
            n = e.sci,
            i = e.eri;
            if (l.has(t)) {
                if (!u.has(t)) {
                    u.add(t);
                    var r = s.rows.sumHeight(t, i + 1);
                    a.translate(0, -r)
                }
            } else at.call(o, t, n)
        })),
        a.restore(),
        st.call(this, e),
        a.restore()
    }
    function yt(e, t) {
        var n = e.width,
        i = e.height,
        r = e.top,
        o = e.left,
        a = parseInt(r) + parseInt(i),
        s = parseInt(o) + parseInt(n),
        l = parseInt(t.x),
        c = parseInt(t.y);
        return o = parseInt(o, 10),
        r = parseInt(r, 10),
        l <= s && l >= o && c <= a && c >= r
    }
    var bt = function() {
        function e(t, n, i, r) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.bar = t,
            this.el = n,
            this.draw = new Ye(n, i.viewWidth(), i.viewHeight()),
            this.data = i,
            this.layerList = r
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "changePrintStatus",
            value: function(e) { ! 0 === e && this.draw.changePrintDegree(this.data.printDegree)
            }
        },
        {
            key: "drawImage",
            value: function(e) {
                gt.call(this, e)
            }
        },
        {
            key: "drawPrintLine",
            value: function(e, t) {
                var n = this.draw.ctx;
                n.strokeStyle = "green",
                n.lineWidth = 2;
                var i = this.data.settings.col.minWidth,
                r = (e - t) * $e + Ze(i);
                n.moveTo(r, 0),
                n.lineTo(r, n.canvas.height),
                n.setLineDash([2.5, 2.5]),
                n.stroke()
            }
        },
        {
            key: "drawPrintLineX",
            value: function(e, t) {
                var n = this.draw.ctx;
                n.strokeStyle = "green",
                n.lineWidth = 2;
                var i = this.data.settings.row.height,
                r = (e - t) * $e + Ze(i);
                n.moveTo(0, r),
                n.lineTo(n.canvas.width, r),
                n.setLineDash([2.5, 2.5]),
                n.stroke()
            }
        },
        {
            key: "changePrintLine",
            value: function(e, t) {
                this.render(e, t)
            }
        },
        {
            key: "getLineWidth",
            value: function() {
                if (this.bar) {
                    var e = this.bar.toolbar;
                    if (e && 1 != e.isHide) {
                        var t = e.toolPrintInputEl.input.el,
                        n = this.data.settings.printElWidth;
                        if (!n) {
                            var i = this.data.getDataRect();
                            i && (n = i.w)
                        }
                        return t && (n = t.value),
                        n
                    }
                }
            }
        },
        {
            key: "getLineHeight",
            value: function() {
                if (this.bar) {
                    var e = this.bar.toolbar;
                    if (e && 1 != e.isHide) {
                        var t = e.toolPrintHeightInputEl.input.el.value,
                        n = 0;
                        return t ? n = Number(t) : this.data.printElHeight && (n = this.data.printElHeight),
                        n || (n = 1047),
                        n
                    }
                }
            }
        },
        {
            key: "render",
            value: function(e, t, n) {
                var i = this;
                e || (e = this.getLineWidth()),
                t || (t = this.getLineHeight());
                var r = this.bar.toolbar;
                if (n && this.changePrintStatus(), r && !r.isHide && !n) {
                    if (e) {
                        var o = Number(e);
                        r.toolPrintInputEl.input.el.value = o,
                        this.data.printElWidth = o
                    }
                    if (t) {
                        var a = Number(t);
                        r.toolPrintHeightInputEl.input.el.value = a,
                        this.data.printElHeight = a
                    }
                }
                return new Promise((function(r) {
                    var o = i.data,
                    a = o.rows,
                    s = o.cols.indexWidth,
                    l = a.height;
                    i.draw.resize(o.viewWidth(), o.viewHeight()),
                    i.clear();
                    var c = o.viewRange(),
                    u = o.freezeTotalWidth(),
                    h = o.freezeTotalHeight(),
                    d = o.scroll,
                    f = d.x,
                    g = d.y;
                    if (dt.call(i, c, s, l, u, h), lt.call(i, c, s, l, -f, -g), !1 === o.settings.readOnly && (ut.call(i, "all", c, s, l, u, h), ht.call(i, s, l)), i.layerList && i.layerList.length > 0) {
                        i.layerList.sort((function(e, t) {
                            return e.designRow - t.designRow
                        })),
                        console.log("this.layerList>>", i.layerList);
                        var p, m = qe(i.layerList);
                        try {
                            for (m.s(); ! (p = m.n()).done;) {
                                var v = p.value;
                                if (!1 !== v.exist) {
                                    var y = void 0;
                                    if (n || !0 !== o.settings.readOnly) y = o.getRCPosition(v.row, v.col);
                                    else {
                                        var b = v.getViewPagePosition();
                                        y = o.getRCPosition(b.row, b.col)
                                    }
                                    v.changeContainerPadding(o.settings.readOnly),
                                    v.commonBackend || v.changeLittlePosition(y, !0)
                                }
                            }
                        } catch(e) {
                            m.e(e)
                        } finally {
                            m.f()
                        }
                    }
                    var C = Ue(o.freeze, 2),
                    I = C[0],
                    w = C[1];
                    if (I > 0 || w > 0) {
                        if (I > 0) {
                            var x = c.clone();
                            x.sri = 0,
                            x.eri = I - 1,
                            x.h = h,
                            dt.call(i, x, s, l, u, 0),
                            lt.call(i, x, s, l, -f, 0),
                            ut.call(i, "top", x, s, l, u, 0)
                        }
                        if (w > 0) {
                            var A = c.clone();
                            A.sci = 0,
                            A.eci = w - 1,
                            A.w = u,
                            dt.call(i, A, s, l, 0, h),
                            ut.call(i, "left", A, s, l, 0, h),
                            lt.call(i, A, s, l, 0, -g)
                        }
                        var _ = o.freezeViewRange();
                        dt.call(i, _, s, l, 0, 0),
                        ut.call(i, "all", _, s, l, 0, 0),
                        lt.call(i, _, s, l, 0, 0),
                        ft.call(i, s, l, u, h)
                    }
                    var S = i.bar.toolbar;
                    S && !S.isHide && (i.drawPrintLine(e, f), i.drawPrintLineX(t, g)),
                    r()
                }))
            }
        },
        {
            key: "getMoveRow",
            value: function(e) {
                console.log("-------------获取需要移动的距离");
                var t = this.data,
                n = 0,
                i = t.repeatRange;
                if (!i) return n;
                var r, o = qe(i);
                try {
                    for (o.s(); ! (r = o.n()).done;) {
                        var a = r.value,
                        s = new m(a.sri, a.sci, a.eri, a.eci, 0, 0);
                        console.log("data.settings.repeatRange", t.repeatRange);
                        var l = e.designRow;
                        n > 0 && (l += Number(n));
                        var c = e.designCol,
                        u = e.containerWidth,
                        h = e.containerHeight,
                        d = !1;
                        if (console.log("行：" + l + "，列：" + c), s.includes(l, c)) d = !0;
                        else if (c <= s.sci && l <= s.eri && l >= s.sri) {
                            var f = Number(t.cols.sumWidth(c, s.sci));
                            console.log("distance:" + f + ",layerWidth:" + u),
                            f < u && (d = !0)
                        }
                        if (d) {
                            var g = s.eri - s.sri;
                            n += Number(g),
                            e.setMoveRow(n),
                            e.setRendered(!0)
                        } else {
                            var p, v = t.getRCPosition(l, c),
                            y = v.left,
                            b = v.top,
                            C = {
                                x: y,
                                y: b
                            },
                            I = {
                                x: Number(y) + Number(u),
                                y: b
                            },
                            w = {
                                x: Number(y) + Number(u),
                                y: Number(b) + Number(h)
                            },
                            x = {
                                x: y,
                                y: Number(b) + Number(h)
                            },
                            A = qe(this.layerList);
                            try {
                                for (A.s(); ! (p = A.n()).done;) {
                                    var _ = p.value;
                                    if (!0 === _.getRendered()) {
                                        var S = t.getRCPosition(_.row, _.designCol),
                                        k = _.getLayerRect(),
                                        L = k.width,
                                        T = k.height;
                                        if (Object.assign(S, {
                                            width: L,
                                            height: T
                                        }), console.log("itemLayerPosition", S), yt(S, C) || yt(S, I) || yt(S, w) || yt(S, x)) {
                                            var R = s.eri - s.sri;
                                            n += Number(R),
                                            e.setMoveRow(n),
                                            e.setRendered(!0);
                                            break
                                        }
                                    }
                                }
                            } catch(e) {
                                A.e(e)
                            } finally {
                                A.f()
                            }
                        }
                    }
                } catch(e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return console.log("移动行数：", n),
                n
            }
        },
        {
            key: "resizeDraw",
            value: function() {
                if (this.data.chartList) {
                    this.draw.ctx.canvas.width /= 2;
                    var e = this.draw.el,
                    t = e.height,
                    n = e.width;
                    this.draw.resize(t, n)
                }
            }
        },
        {
            key: "renderScreen",
            value: function() {
                var e = this;
                return new Promise((function(t) {
                    var n = e.data,
                    i = n.rows,
                    r = n.cols.indexWidth,
                    o = i.height,
                    a = Number(n.printElWidth || 800) + n.settings.col.minWidth + 3,
                    s = n.printElHeight || n.viewHeight(),
                    l = window.devicePixelRatio;
                    l > 1 ? e.draw.resize(a * l, s * l) : e.draw.resize(a, s),
                    e.clear();
                    var c = n.viewPrintRange();
                    c.setWidthAndHeight(c.w - r, c.h);
                    var u = n.freezeTotalWidth(),
                    h = n.freezeTotalHeight(),
                    d = n.scroll,
                    f = d.x,
                    g = d.y;
                    pt.call(e, c, r, o, u, h),
                    vt.call(e, c, r, o, -f, -g),
                    t(null)
                }))
            }
        },
        {
            key: "renderOneForMulti",
            value: function() {
                var e = this;
                return new Promise((function(t) {
                    var n = e.data,
                    i = n.rows,
                    r = n.cols.indexWidth,
                    o = i.height,
                    a = n.printElWidth,
                    s = n.printElHeight || n.viewHeight(),
                    l = window.devicePixelRatio;
                    l > 1 ? e.draw.resize(a * l, s * l) : e.draw.resize(a, s),
                    console.log("打印高宽设置-----"),
                    console.log("width-----", a),
                    console.log("height-----", s),
                    console.log("打印高宽设置-----"),
                    e.draw.resizeForPrintty(a, s),
                    e.clear();
                    var c = n.viewRange();
                    c.setWidthAndHeight(c.w - r, c.h);
                    var u = n.freezeTotalWidth(),
                    h = n.freezeTotalHeight(),
                    d = n.scroll,
                    f = d.x,
                    g = d.y;
                    console.log("renderOneForMulti:", c, r, o, f, g),
                    pt.call(e, c, r, o, u, h),
                    vt.call(e, c, r, o, -f, -g),
                    t(null)
                }))
            }
        },
        {
            key: "renderAll",
            value: function() {
                var e = this;
                return new Promise((function(t) {
                    var n = e.data,
                    i = n.rows,
                    r = n.cols,
                    o = r.indexWidth,
                    a = i.height,
                    s = i.getMaxRange(),
                    l = s.maxRow,
                    c = s.maxCol,
                    u = r.sumWidth(0, c + 2);
                    u -= 40,
                    console.log("data.viewWidth()", n.viewWidth()),
                    u > n.viewWidth() && (u = n.viewWidth(), c = n.viewRange().eci),
                    console.log("1233", n.getSelectedRect()),
                    console.log("print all----------------");
                    var h = i.sumHeight(0, l + 3.05),
                    d = Number(n.printElWidth || 800) + n.settings.col.minWidth + 3,
                    f = n.printElHeight || n.viewHeight();
                    e.draw.resize(d, f),
                    e.clear();
                    var g = n.getAllCellRange({
                        sci: 0,
                        sri: 0,
                        eci: c,
                        eri: l + 1,
                        height: h,
                        width: u
                    }),
                    p = (n.freezeTotalWidth(), n.freezeTotalHeight(), n.scroll);
                    p.x,
                    p.y,
                    pt.call(e, g, o, a, 0, 0),
                    vt.call(e, g, o, a, 0, 0),
                    t(null)
                }))
            }
        },
        {
            key: "renderSelector",
            value: function() {
                var e = this;
                return new Promise((function(t) {
                    var n = e.data,
                    i = n.rows,
                    r = n.cols.indexWidth,
                    o = i.height,
                    a = n.getSelectRect(),
                    s = a.eci,
                    l = a.eri,
                    c = a.sci,
                    u = a.sri,
                    h = a.h,
                    d = a.w;
                    if (s) {
                        var f = n.getRect({
                            sri: u,
                            sci: c,
                            eri: l,
                            eci: s
                        }),
                        g = f.t,
                        p = f.l;
                        e.draw.resize(d + r, h + o),
                        e.clear();
                        var m = n.getAllCellRange({
                            sci: c,
                            sri: u,
                            eci: s,
                            eri: l + 1,
                            height: h,
                            width: d
                        });
                        console.log(n.getSelectRect()),
                        console.log("viewRange", m),
                        n.freezeTotalWidth(),
                        n.freezeTotalHeight();
                        var v = n.scroll;
                        v.x,
                        v.y,
                        pt.call(e, m, r, o, 0, 0),
                        vt.call(e, m, r, o, g, p),
                        t({
                            t: g,
                            l: p
                        })
                    } else xs.tip("请选择打印区域")
                }))
            }
        },
        {
            key: "clear",
            value: function() {
                this.draw.clear()
            }
        },
        {
            key: "renderBackend",
            value: function(e) {
                var t = this;
                return new Promise((function(e) {
                    var n = t.data,
                    i = n.rows,
                    r = n.cols.indexWidth,
                    o = (i.height, Number(n.printElWidth)),
                    a = Number(n.printElHeight),
                    s = window.devicePixelRatio;
                    s > 1 ? t.draw.resize(o * s, a * s) : t.draw.resize(o, a),
                    t.clear();
                    var l = n.calcBackendRange();
                    l.setWidthAndHeight(l.w - r, l.h),
                    n.freezeTotalWidth(),
                    n.freezeTotalHeight();
                    var c = n.scroll,
                    u = (c.x, c.y, t.draw);
                    u.save(),
                    u.attr(nt),
                    u.clearRect(0, 0, l.w, l.h),
                    u.restore(),
                    vt.call(t, l, 20, 12, 0, 0),
                    e(null)
                }))
            }
        }]) && Je(t.prototype, n),
        i && Je(t, i),
        e
    } ();
    function Ct(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var It = function() {
        function e(t, n, i, r) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.currentPage = t,
            this.pageMaxRowList = n,
            this.pageSizeList = i,
            this.isLastPage = r
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "setHeight",
            value: function(e) {
                this.height = e
            }
        },
        {
            key: "getHeight",
            value: function() {
                return this.height
            }
        }]) && Ct(t.prototype, n),
        i && Ct(t, i),
        e
    } ();
    function wt(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return xt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xt(e, t)
            } (e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        }: {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        }
        var o, a = !0,
        s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return a = e.done,
                e
            },
            e: function(e) {
                s = !0,
                o = e
            },
            f: function() {
                try {
                    a || null == n.
                    return || n.
                    return ()
                } finally {
                    if (s) throw o
                }
            }
        }
    }
    function xt(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function At(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))),
            n.push.apply(n, i)
        }
        return n
    }
    function _t(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? At(Object(n), !0).forEach((function(t) {
                St(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    function St(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function kt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var Lt = function() {
        function e(t, n, i, r) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.rpbar = t,
            this.type = i,
            this.data = n,
            this.highDefinition = !0,
            this.maxDegree = n.printDegree,
            r || this.init(),
            this.layerList = [],
            this.printPage = -1,
            this.pageModel = {}
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "setExistWin",
            value: function(e) {
                return this.win = e.win,
                this.doc = e.doc,
                this.layerList = e.layerList,
                this.printPage = e.printPage,
                this.pageModel = e.pageModel,
                this
            }
        },
        {
            key: "notHD",
            value: function() {
                return this.highDefinition = !1,
                this
            }
        },
        {
            key: "rePaintingPdf",
            value: function(e) {
                var t = e.getContext("2d"),
                n = this.data.printElWidth * window.devicePixelRatio,
                i = this.data.printElHeight * window.devicePixelRatio,
                r = t.getImageData(0, 0, e.width, e.height),
                o = this.win.document.createElement("canvas");
                o.height = i,
                o.width = n;
                var a = o.getContext("2d");
                return o.style.height = this.data.printElHeight + "px",
                o.style.width = this.data.printElWidth + "px",
                a.putImageData(r, 0, 0, 0, 0, n, i),
                o
            }
        },
        {
            key: "rePainting",
            value: function(e) {
                var t = e.getContext("2d"),
                n = this.data.printElWidth * window.devicePixelRatio * this.maxDegree,
                i = this.data.printElHeight * window.devicePixelRatio * this.maxDegree,
                r = t.getImageData(0, 0, e.width, e.height),
                o = this.win,
                a = o.document.createElement("canvas");
                a.height = i,
                a.width = n;
                var s = a.getContext("2d");
                return a.style.height = this.data.printElHeight + "px",
                a.style.width = this.data.printElWidth + "px",
                s.putImageData(r, 0, 0, 0, 0, n, i),
                a
            }
        },
        {
            key: "rePaintingBackend",
            value: function(e) {
                var t = e.getContext("2d"),
                n = this.data.printElWidth * window.devicePixelRatio * this.maxDegree,
                i = this.data.printElHeight * window.devicePixelRatio * this.maxDegree,
                r = t.getImageData(0, 0, e.width, e.height),
                o = this.win.document.createElement("canvas");
                o.height = i * window.devicePixelRatio,
                o.width = n * window.devicePixelRatio;
                var a = o.getContext("2d");
                return o.style.height = this.data.printElHeight + "px",
                o.style.width = this.data.printElWidth + "px",
                a.putImageData(r, 0, 0, 0, 0, o.width, o.height),
                o
            }
        },
        {
            key: "getPageData",
            value: function(e, t) {
                for (var n = "",
                i = {},
                r = [], o = 0; o < t.length; o++) {
                    var a = e[t[o]];
                    if ("1" == a.isPage) {
                        n = t[o],
                        i = a;
                        break
                    }
                }
                return i && (r = i.list),
                {
                    pageKey: n,
                    resultList: r
                }
            }
        },
        {
            key: "getHeaderHeight",
            value: function(e, t) {
                var n = 0,
                i = this.data;
                for (var r in e) if ("len" != r) {
                    var o = Number(r);
                    o >= 0 && o < t && (n += e[r].height || i.settings.row.height)
                }
                for (var a = 0; a < t; a++) e[a] || (n += i.settings.row.height);
                return n
            }
        },
        {
            key: "delTableHeadData",
            value: function(e, t) {
                var n = e.rows,
                i = {};
                for (var r in n)"len" === r || Number(r) < t || (i[Number(r) - t] = n[r]);
                return i
            }
        },
        {
            key: "isVericalReport",
            value: function() {
                var e = !1,
                t = this.data;
                return t.printElWidth && t.printElHeight && Number(t.printElWidth) > 1.4 * Number(t.printElHeight) && (e = !0),
                e
            }
        },
        {
            key: "createPrintPage",
            value: function(e, t, n, i) {
                var r = this,
                o = this.data,
                a = this.doc,
                s = JSON.parse(JSON.stringify(o.settings));
                Object.keys(o.settings).map((function(e) {
                    var t = o.settings[e];
                    "function" == typeof t && (s[e] = t)
                })),
                s.view.height = function() {
                    return t
                },
                this.isVericalReport() && (s.view.height = function() {
                    return t - 70
                });
                var l = window.document.createElement("div");
                l.setAttribute("id", e),
                window.document.body.appendChild(l);
                var c = x.spreadsheet(l, s);
                n.printDegree = this.maxDegree,
                c.loadData(n, !0);
                var u = this.createPringDiv();
                u.setAttribute("id", this.printPage),
                a.body.appendChild(u);
                var h = {
                    win: this.win,
                    doc: this.doc,
                    layerList: this.layerList,
                    printPage: -1 == i.currentPage ? -1 : this.printPage,
                    pageModel: i
                };
                return new Promise((function(e) {
                    c.getPrintCanvas(h).then((function(t) {
                        t && (t = r.rePainting(t, !1), window.document.body.removeChild(l), u.appendChild(t)),
                        e()
                    }))
                }))
            }
        },
        {
            key: "print",
            value: function(e) {
                var t = this;
                console.log("print1234567890");
                var n = this.data,
                i = (this.doc, Number(n.settings.total));
                if (1 == i) this.printFirstPage(e);
                else if (i > 1) {
                    var r = this.win,
                    o = this.type;
                    if ("screen" === o || "area" === o) return void this.printFirstPage(e);
                    var a = this.data.dataSetHeight;
                    if (a || (a = n.settings.row.height), this.data.settings.count > 1e3) return void alert("打印条数不能超过1000条");
                    var s = n.settings.parseDataFn;
                    n.settings.getAllFn().then((function(e) {
                        var n = _t({},
                        e.data.result),
                        i = n.dataList,
                        o = n.jsonStr,
                        l = t.data.dataSetNumber,
                        c = JSON.parse(o).rows,
                        u = t.getHeaderHeight(c, l),
                        h = 1150;
                        t.isVericalReport() && (h = 890);
                        var d = Math.floor(h / a),
                        f = Math.floor((h - u) / a),
                        g = Object.keys(i);
                        if (1 == g.length) for (var p = i[Object.keys(i)[0]].list, m = 1; p.length > 0;) {
                            var v = void 0;
                            v = 1 == m ? p.splice(0, f) : p.splice(0, d);
                            var y = s(o, St({},
                            Object.keys(i)[0], v));
                            m > 1 && (y.rows = t.delTableHeadData(y, l));
                            var b = "report".concat(m);
                            t.createPrintPage(b, h, y),
                            m += 1
                        } else for (var C = t.getPageData(i, g), I = C.resultList, w = C.pageKey, x = JSON.parse(JSON.stringify(i)), A = 1; I.length > 0;) {
                            var _ = void 0;
                            if (1 == A) {
                                _ = I.splice(0, f),
                                x[w].list = _;
                                var S = s(o, x, !0),
                                k = "report".concat(A);
                                t.createPrintPage(k, h, S)
                            } else {
                                _ = I.splice(0, d);
                                var L = s(o, St({},
                                w, _));
                                L.rows = t.delTableHeadData(L, l);
                                var T = "report".concat(A);
                                t.createPrintPage(T, h, L)
                            }
                            A += 1
                        }
                        setTimeout((function() {
                            r.print()
                        }), 0)
                    }))
                }
            }
        },
        {
            key: "renderCanvas",
            value: function(e) {
                var t = this.data,
                n = this.type,
                i = this.rpbar,
                r = window.document.createElement("canvas");
                this.canvas = r;
                var o = new bt({
                    rpbar: i
                },
                r, t);
                return o.changePrintStatus(this.highDefinition),
                "all" === n ? o.renderAll() : "screen" === n ? o.renderScreen() : "area" === n ? o.renderSelector() : "multi" === n ? o.renderScreen() : "backend" === n && o.renderBackend(this.layerList)
            }
        },
        {
            key: "renderLayers",
            value: function(e, t) {
                var n = this,
                i = this.data,
                r = this.type,
                o = this.canvas;
                return new Promise((function(a) {
                    var s = [];
                    if (e && e.length > 0) {
                        var l, c = o.getContext("2d"),
                        u = window.devicePixelRatio || 1,
                        h = i.scroll,
                        d = n.getAreaPosition(),
                        f = wt(e);
                        try {
                            for (f.s(); ! (l = f.n()).done;) {
                                var g = l.value;
                                "area" === r && !1 === n.layerInArea(g, d) || s.push(g.drawImage(c, u, h, t, i.settings.downLoadImage, {
                                    newLeft: -1,
                                    newTop: -1
                                }))
                            }
                        } catch(e) {
                            f.e(e)
                        } finally {
                            f.f()
                        }
                    }
                    0 == s.length ? a() : Promise.all(s).then((function() {
                        a()
                    }))
                }))
            }
        },
        {
            key: "renderLayersForMultiPage",
            value: function(e, t) {
                var n = this,
                i = this.data,
                r = (this.type, this.canvas);
                return new Promise((function(o) {
                    var a = [];
                    if (e && e.length > 0) {
                        var s, l = r.getContext("2d"),
                        c = window.devicePixelRatio || 1,
                        u = i.scroll,
                        h = wt(e);
                        try {
                            for (h.s(); ! (s = h.n()).done;) {
                                var d = s.value;
                                if (d.getPrintPage() === n.printPage) {
                                    var f, g = d.getPrintRow(),
                                    p = i.getRCPosition(g, d.designCol),
                                    m = p.top,
                                    v = p.left; ! 0 === d.fixed && (m -= 25, v -= 60),
                                    f = {
                                        newTop: m,
                                        newLeft: v
                                    },
                                    console.log("layer.printRow" + d.printRow, f),
                                    a.push(d.drawImage(l, c, u, t, i.settings.downLoadImage, f)),
                                    -1 == n.printPage && d.setRendered(!1)
                                }
                            }
                        } catch(e) {
                            h.e(e)
                        } finally {
                            h.f()
                        }
                    }
                    0 == a.length ? o() : Promise.all(a).then((function(e) {
                        o()
                    }))
                }))
            }
        },
        {
            key: "getAreaPosition",
            value: function() {
                var e = this.data,
                t = e.getSelectRect(),
                n = t.eci,
                i = t.eri,
                r = t.sci,
                o = t.sri,
                a = (t.h, t.w, e.getRect({
                    sri: o,
                    sci: r,
                    eri: i,
                    eci: n
                })),
                s = a.t,
                l = a.l,
                c = a.height;
                return {
                    minX: l,
                    minY: s,
                    maxX: l + a.width,
                    maxY: s + c
                }
            }
        },
        {
            key: "layerInArea",
            value: function(e, t) {
                var n = e.getLayerRect(!0),
                i = n.width,
                r = n.height,
                o = n.row,
                a = n.col,
                s = this.data.getRect({
                    sri: o,
                    sci: a,
                    eri: o,
                    eci: a
                }),
                l = s.t,
                c = s.l,
                u = l + r,
                h = c + i;
                return this.pointInArea(c, l, t) && this.pointInArea(h, u, t)
            }
        },
        {
            key: "pointInArea",
            value: function(e, t, n) {
                var i = n.minX,
                r = n.minY,
                o = n.maxX,
                a = n.maxY;
                return t > r && t < a && e > i && e < o
            }
        },
        {
            key: "clearCanvasBlank",
            value: function(e, t) {
                var n = this.data.settings,
                i = n.col.indexWidth || 0,
                r = e.getContext("2d"),
                o = 0;
                t && (o = Ze(n.row.height));
                var a = r.getImageData(Ze(i), o, e.width, e.height);
                return r.clearRect(0, 0, e.width, e.height),
                r.putImageData(a, 0, 0),
                a
            }
        },
        {
            key: "genCanvas1",
            value: function(e, t, n) {
                var i = this;
                return new Promise((function(e) {
                    e(i.canvas)
                }))
            }
        },
        {
            key: "genCanvas",
            value: function(e, t) {
                var n = this;
                return new Promise((function(e) {
                    var i = n.canvas,
                    r = i.style.width.replace("px", ""),
                    o = i.style.height.replace("px", "");
                    console.log("样式大小，width=" + r + ",height=" + o);
                    var a = document.createElement("img");
                    a.src = i.toDataURL(),
                    a.addEventListener("load", (function(i) {
                        console.log("实际大小，width=" + i.target.width + ",height=" + i.target.height);
                        var s = window.document.createElement("canvas");
                        s.width = r,
                        s.height = o,
                        n.doc.body.appendChild(s);
                        var l = s.getContext("2d"); ! 0 === t && (l.fillStyle = "#fff", l.fillRect(0, 0, r, o)),
                        l.drawImage(a, 0, 0, r, o),
                        e(s)
                    }))
                }))
            }
        },
        {
            key: "pdfFirst",
            value: function(e) {
                var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "online.pdf";
                this.renderCanvas(!0).then((function(n) {
                    return t.renderLayers(e, n)
                })).then((function() {
                    return t.genCanvas1(e, !0)
                })).then((function(e) {
                    var i = t.rePainting(e, !0),
                    r = t.doc,
                    o = t.data.toolPrintSizeObj;
                    r.body.appendChild(i);
                    var a = new Image;
                    a.src = i.toDataURL();
                    var s = new ce.a({
                        unit: "cm",
                        orientation: "p"
                    });
                    a.onload = function() { !
                        function() {
                            var e = window.devicePixelRatio,
                            t = a.width / e,
                            i = 750,
                            r = 21.14;
                            o && (i = o.widthPx - 44, "A4" == o.printType && (r = 21.14)),
                            t > i && (a.width = i);
                            var l = a.width / 37.8,
                            c = (r - l) / 2;
                            c < 0 && (c = 0),
                            s.addImage(a, "JPEG", c, 0, l, 0),
                            s.save(n)
                        } ()
                    }
                }))
            }
        },
        {
            key: "pdfManyPage",
            value: function(e, t, n) {
                var i = this,
                r = this.pageModel;
                return r.currentPage,
                r.pageMaxRowList,
                r.pageSizeList,
                r.isLastPage,
                this.preHandleLayer(!0, this.layerList, n),
                this.renderCanvas(!0).then((function(e) {
                    return i.renderLayersForMultiPage(i.layerList, e)
                })).then((function() {
                    return Promise.resolve(i.genCanvas1(e, !0, t))
                }))
            }
        },
        {
            key: "createPdfPage",
            value: function(t, n, i, r, o) {
                var a = window.document.createElement("div");
                a.setAttribute("id", t),
                document.body.appendChild(a);
                var s = x.spreadsheet(a, n);
                console.log("createPdfPage jsonData", i),
                s.loadData(i),
                s.data.printElHeight = r;
                var l = {
                    win: this.win,
                    doc: this.doc,
                    layerList: this.layerList,
                    printPage: -1 == o.currentPage ? -1 : this.printPage,
                    pageModel: o
                },
                c = new e(this.rpbar, s.data, "screen", !0).notHD().setExistWin(l);
                return document.body.removeChild(a),
                c
            }
        },
        {
            key: "pdf1",
            value: function(e) {
                var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "online.pdf",
                i = this.data,
                r = i.toolPrintSizeObj,
                o = Number(i.settings.total);
                if (1 != o) {
                    var a = this.data.dataSetHeight;
                    a || (a = i.settings.row.height);
                    var s = this.data.settings.count;
                    if (s > 1e3) alert("打印条数不能超过1000条");
                    else {
                        var l = function(e) {
                            Promise.all(e).then((function(e) {
                                for (var i = function(i) {
                                    var r = t.rePainting(e[i], !1),
                                    o = t.doc,
                                    a = t.data,
                                    s = a.toolPrintSizeObj;
                                    o.body.appendChild(r);
                                    var l = new Image;
                                    l.src = r.toDataURL(),
                                    l.onload = function() {
                                        c()
                                    };
                                    var c = function() {
                                        var t = window.devicePixelRatio,
                                        r = l.width / t,
                                        o = 750,
                                        c = 21.14;
                                        s && (o = s.widthPx - 44, "A4" == s.printType && (c = 21.14, d && "l" == d.orientation && a.printElWidth && a.printElHeight && (o = Math.min(r, 1e3), c = 29.14))),
                                        r > o && (l.width = o);
                                        var u = l.width / 37.8,
                                        h = (c - u) / 2;
                                        h < 0 && (h = 0),
                                        i >= 1 && f.addPage(),
                                        f.addImage(l, "JPEG", h, 0, u, 0),
                                        i === e.length - 1 && (g && g.$Spin.hide(), f.save(n))
                                    }
                                },
                                r = 0; r < e.length; r++) i(r)
                            }))
                        },
                        c = i.settings.parseDataFn,
                        u = 1100;
                        r && (u = r.heightPx + 53);
                        var h = u,
                        d = {
                            unit: "cm",
                            orientation: "p"
                        };
                        i.printElWidth && i.printElHeight && Number(i.printElWidth) > 1.4 * Number(i.printElHeight) && (d.orientation = "l");
                        var f = new ce.a(d),
                        g = null;
                        "function" == typeof Vue && (g = new Vue).$Spin.show(),
                        i.settings.getAllFn().then((function(n) {
                            var r = _t({},
                            n.data.result),
                            o = r.dataList,
                            s = Object.keys(o);
                            if (s.length > 1) {
                                var d = t.getPageData(o, s),
                                f = d.resultList,
                                g = d.pageKey,
                                p = JSON.parse(JSON.stringify(o)),
                                m = 1,
                                v = r.jsonStr,
                                y = t.data.dataSetNumber,
                                b = JSON.parse(v).rows,
                                C = t.getHeaderHeight(b, y);
                                h -= a;
                                var I = Math.floor(h / a),
                                w = Math.floor((h - C) / a),
                                x = JSON.parse(JSON.stringify(t.data.settings));
                                x.downLoadImage = t.data.settings.downLoadImage,
                                x.view.height = function() {
                                    return u
                                };
                                for (var A = []; f.length > 0;) {
                                    var _ = void 0;
                                    _ = 1 == m ? f.splice(0, w) : f.splice(0, I),
                                    A.push(_),
                                    m++
                                }
                                for (var S = [], k = 0; k < A.length; k++) {
                                    var L, T = {};
                                    0 == k ? (p[g].list = A[k], T = c(r.jsonStr, p, !0)) : T = c(v, (St(L = {},
                                    g, A[k]), St(L, "".concat(g, "_isPage"), "1"), L)),
                                    k >= 1 && (T.rows = t.delTableHeadData(T, y));
                                    var R = "report".concat(k),
                                    M = t.createPdfPage(R, x, T, u);
                                    S.push(M.pdfManyPage(e, k))
                                }
                                l(S)
                            } else {
                                var P = [],
                                E = r.jsonStr,
                                O = t.data.dataSetNumber,
                                N = JSON.parse(E).rows,
                                D = 0;
                                for (var B in N) if ("len" != B) {
                                    var j = Number(B);
                                    j >= 0 && j < O && (D += N[B].height || i.settings.row.height)
                                }
                                for (var F = 0; F < O; F++) N[F] || (D += i.settings.row.height);
                                var H = Math.floor(h / a),
                                W = Math.floor((h - D) / a) - 1,
                                V = o[Object.keys(o)[0]].list,
                                G = 1,
                                z = JSON.parse(JSON.stringify(t.data.settings));
                                z.downLoadImage = t.data.settings.downLoadImage,
                                z.view.height = function() {
                                    return u
                                };
                                for (var Z = []; V.length > 0;) {
                                    var $ = void 0;
                                    $ = 1 == G ? V.splice(0, W) : V.splice(0, H),
                                    Z.push($),
                                    G++
                                }
                                for (var K = 0; K < Z.length; K++) {
                                    var X, Y = Object.keys(o)[0],
                                    U = c(E, (St(X = {},
                                    Y, Z[K]), St(X, "".concat(Y, "_isPage"), "1"), X));
                                    K >= 1 && (U.rows = t.delTableHeadData(U, O));
                                    var J = "report".concat(K),
                                    q = t.createPdfPage(J, z, U, u);
                                    P.push(q.pdfManyPage(e, K))
                                }
                                l(P)
                            }
                        }))
                    }
                } else this.pdfFirst(e, n)
            }
        },
        {
            key: "pdf",
            value: function(e) {
                var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "online.pdf";
                this.renderCanvas(!0).then((function(n) {
                    return t.renderLayers(e, n)
                })).then((function() {
                    return t.genCanvas(e, !0)
                })).then((function(e) {
                    var i = e.width,
                    r = e.height,
                    o = i / 592.28 * 841.89,
                    a = r,
                    s = 0,
                    l = 592.28 / i * r,
                    c = e.toDataURL("image/jpeg");
                    t.win.document.createElement("img").src = c;
                    var u = new ce.a("", "pt", "a4");
                    if (a < o) u.addImage(c, "JPEG", 0, 0, 595.28, l);
                    else for (; a > 0;) u.addImage(c, "JPEG", 0, s, 595.28, l),
                    s -= 841.89,
                    (a -= o) > 0 && u.addPage();
                    u.save(n)
                }))
            }
        },
        {
            key: "printAll",
            value: function(e) {
                var t = this.data,
                n = document.createElement("canvas");
                n.style.marginRight = "60px";
                var i = new bt(n, t);
                return i.changePrintStatus(this.highDefinition),
                i.renderAll(),
                n
            }
        },
        {
            key: "printArea",
            value: function(e) {
                var t = this.data,
                n = document.createElement("canvas"),
                i = new bt(n, t);
                i.changePrintStatus(this.highDefinition),
                i.renderSelector();
                var r = this.win.document.createElement("div");
                return r.style.textAlign = "center",
                r.style.paddingTop = "20px",
                r.style.paddingRight = "60px",
                r.appendChild(n),
                this.doc.body.appendChild(r),
                this.win.print(),
                n
            }
        },
        {
            key: "init",
            value: function() {
                var e = this.createWin();
                e.doc.open(),
                e.doc.write("<html>\n                     <head>\n                       <title></title>\n                     </head>\n                    <body style='margin:0'>\n                    </body>\n                </html>"),
                e.doc.close(),
                this.win = e.contentWindow || e,
                this.doc = e.doc,
                this.addPrintPageStyle()
            }
        },
        {
            key: "addPrintPageStyle",
            value: function() {
                var e = this.data,
                t = this.doc,
                n = e.getPrintPaperInfo(),
                i = n.w,
                r = n.type,
                o = e.printElWidth,
                a = "portrait";
                Number(o) > i && (a = "landscape");
                var s = t.createElement("style");
                s.innerHTML = "\n           @page{\n               size: ".concat(r, " ").concat(a, ";\n           }\n        "),
                t.head.appendChild(s)
            }
        },
        {
            key: "createWin",
            value: function() {
                var e = void 0;
                try {
                    var t = document.getElementById("jeecg_print_ty");
                    t && t.parentNode.removeChild(t),
                    e = window.document.createElement("iframe"),
                    window.document.body.appendChild(e),
                    e.style.border = "0px",
                    e.style.position = "absolute",
                    e.style.overflow = "auto",
                    e.style.width = "0px",
                    e.style.height = "0px",
                    e.style.right = "0px",
                    e.style.top = "0px",
                    e.setAttribute("id", "jeecg_print_ty"),
                    e.setAttribute("src", (new Date).getTime()),
                    e.doc = null,
                    e.onload = function() {
                        console.log("oniframeloadok")
                    },
                    e.doc = e.contentDocument ? e.contentDocument: e.contentWindow ? e.contentWindow.document: e.document
                } catch(e) {
                    console.log("创建iframe错误", e.toString())
                }
                return null == e.doc && console.log("错误。iframe.doc不存在"),
                e
            }
        },
        {
            key: "createNewWindow",
            value: function() {
                var e = window.open();
                return {
                    contentWindow: e,
                    doc: e.document
                }
            }
        },
        {
            key: "getPrintDivWidth",
            value: function() {
                return this.data.printElWidth * window.devicePixelRatio
            }
        },
        {
            key: "print2020",
            value: function(e) {
                this.printLoading(!0),
                this.layerList = e;
                var t = this.data,
                n = this.type,
                i = t.toolPrintSizeObj;
                console.log("toolPrintSizeObj", i),
                e.some((function(e) {
                    return e.isBackend
                })) ? this.printBackend() : (Number(t.settings.total), "screen" === n ? this.printOnePage(e) : this.printMultiPage())
            }
        },
        {
            key: "printBackend",
            value: function() {
                var e = this,
                t = this.doc,
                n = this.win,
                i = t.createElement("style");
                i.innerHTML = "\n                @media print{\n                    @page{\n                    margin: 0cm;\n                    }\n                }\n             ",
                t.head.appendChild(i),
                this.type = "backend",
                console.log("this.data.settings", this.data.settings),
                this.renderCanvas().then((function(i) {
                    var r = e.rePaintingBackend(e.canvas),
                    o = e.createPringDiv();
                    t.body.appendChild(o),
                    o.appendChild(r),
                    e.printLoading(!1),
                    n.print()
                })).
                catch((function() {
                    console.error("printBackend获取需要打印的canvas出现问题")
                }))
            }
        },
        {
            key: "printOnePage",
            value: function(e) {
                var t = this;
                this.getPrintCanvas(!0, e).then((function(e) {
                    t.doPrint(e)
                }))
            }
        },
        {
            key: "getMaxMinRowNum",
            value: function(e) {
                var t, n = 99,
                i = 0,
                r = wt(e);
                try {
                    for (r.s(); ! (t = r.n()).done;) {
                        var o = t.value,
                        a = parseInt(o); ! a && 0 != a || a < 0 || (n > a && (n = a), i < a && (i = a))
                    }
                } catch(e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return {
                    minRowNum: n,
                    maxRowNum: i
                }
            }
        },
        {
            key: "isEmptyRow",
            value: function(e) {
                var t = !0;
                if ("{}" != JSON.stringify(e) && e.cells && "{}" != JSON.stringify(e.cells)) for (var n = Object.keys(e.cells), i = 0; i < n.length; i++) {
                    var r = e.cells[n[i]];
                    if ("" != r && "{}" != JSON.stringify(r) && r.text) {
                        t = !1;
                        break
                    }
                } else t = !0;
                return t
            }
        },
        {
            key: "handleMultiPageData",
            value: function(e, t, n) {
                var i = this.data,
                r = i.getDataBeginLineHeight(),
                o = e.rows;
                this.handleLayerVirtualCell(o);
                for (var a = Object.keys(o), s = this.getMaxMinRowNum(a), l = s.minRowNum, c = s.maxRowNum, u = [], h = l; h <= c; h++) u.push(h);
                console.log("myJson", e);
                for (var d = -1,
                f = i.settings.row.height,
                g = 0,
                p = [], m = [], v = (u[0], !1), y = []; d < u.length;) {
                    var b = {},
                    C = 0,
                    I = 0;
                    1 == ++g && (C += Number(r)),
                    v = !0;
                    for (var w = 0; w < u.length; w++) {
                        d++;
                        var x = 0;
                        if (u.length === d) {
                            v = !0;
                            break
                        }
                        var A = o[u[d]];
                        if (A && !this.isEmptyRow(A)) {
                            if ((x = A.height) || (x = i.settings.row.height), (C += Number(x)) > t - f) {
                                console.log("打印当前页高度:", C + "," + C + ",pageHeight" + t + ",rowH" + f),
                                d--,
                                v = !1;
                                break
                            }
                            if (1 === g) {
                                b[u[d]] = A;
                                var _ = Number(u[d]);
                                _ > I && (I = _)
                            } else b[w] = A,
                            w > I && (I = w)
                        } else x = i.settings.row.height,
                        C += Number(x)
                    }
                    if (console.log("打印数据------begin"), console.log(b), console.log("打印数据------end"), 0 != Object.keys(b).length) {
                        e.rows = b,
                        m.push(I),
                        p.push(Object.keys(b).length),
                        this.printPage = g;
                        var S = new It(g, m, p, v);
                        if (S.setHeight(t), n) n(d, e, S);
                        else {
                            var k = "report".concat(d),
                            L = this.createPrintPage(k, t, e, S);
                            y.push(L)
                        }
                    }
                }
                return y
            }
        },
        {
            key: "preHandleLayer",
            value: function(e, t, n) {
                var i = this.pageModel,
                r = i.currentPage,
                o = i.pageMaxRowList,
                a = i.isLastPage;
                console.log("当前页面数据------------------------------------", this.data.rows.getData());
                var s = 0,
                l = 0,
                c = this.data.getRealDataCellRange();
                if (1 == r) s = c.sri,
                l = o[0];
                else if ( - 1 == r) s = 0,
                l = 0;
                else {
                    for (var u = o[0], h = 0; h < r; h++) h == r - 1 && (s = u + 1),
                    h > 0 && (u += o[h] + 1);
                    l = u
                }
                var d = this.getPageVirtualRowNum(),
                f = this.pageModel.getHeight();
                if (this.layerList && this.layerList.length > 0) {
                    var g, p = wt(this.layerList);
                    try {
                        for (p.s(); ! (g = p.n()).done;) {
                            var m = g.value;
                            if (1 != m.getRendered()) {
                                var v = m.getViewPagePosition(!0);
                                if (console.log("adadadad", m), s <= v.row && l >= v.row) {
                                    m.setRendered(!0);
                                    var y = d[m.getLayerId()],
                                    b = !1;
                                    if (a) {
                                        var C = this.data.calcAllHeight(0, y);
                                        m.containerHeight && f - C < Number(m.containerHeight) && (b = !0)
                                    }
                                    1 == b ? (m.setPrintPage( - 1), m.setPrintRow(0), !0 === e ? this.pdfLastLayerPage(f, m.getLayerId(), t, n) : this.printLastLayerPage(f, m.getLayerId())) : (m.setPrintPage(r), m.setPrintRow(y))
                                }
                            }
                        }
                    } catch(e) {
                        p.e(e)
                    } finally {
                        p.f()
                    }
                }
            }
        },
        {
            key: "printLastLayerPage",
            value: function(e, t) {
                var n = this.pageModel,
                i = (n.currentPage, n.pageMaxRowList),
                r = n.pageSizeList,
                o = n.isLastPage,
                a = new It( - 1, i, r, o),
                s = this.data.getData(),
                l = {
                    0 : {
                        cells: {
                            0 : {
                                text: " ",
                                virtual: t
                            }
                        }
                    }
                };
                s.rows = l,
                this.createPrintPage("report_layer_last", e, s, a)
            }
        },
        {
            key: "pdfLastLayerPage",
            value: function(e, t, n, i) {
                var r = this.data,
                o = this.pageModel,
                a = o.pageMaxRowList,
                s = o.pageSizeList,
                l = o.isLastPage,
                c = new It( - 1, a, s, l),
                u = r.getData(),
                h = {
                    0 : {
                        cells: {
                            0 : {
                                text: " ",
                                virtual: t
                            }
                        }
                    }
                };
                u.rows = h;
                var d = JSON.parse(JSON.stringify(r.settings));
                Object.keys(r.settings).map((function(e) {
                    var t = r.settings[e];
                    "function" == typeof t && (d[e] = t)
                })),
                d.view.height = function() {
                    return e
                },
                this.isVericalReport() && (d.view.height = function() {
                    return height - 70
                });
                var f = this.createPdfPage("report_layer_last", d, u, e, c);
                setTimeout((function() {
                    i.push(f.pdfManyPage(n, -1, i))
                }), 500)
            }
        },
        {
            key: "getPageVirtualRowNum",
            value: function() {
                var e = this.data.rows.getData(),
                t = {};
                return Object.keys(e).map((function(n) {
                    if (e[n]) {
                        var i = e[n].cells;
                        i && Object.keys(i).map((function(e) {
                            var r = i[e];
                            if (r) {
                                var o = r.virtual;
                                if (o) {
                                    var a = Number(n),
                                    s = t[o]; (!s || s < a) && (t[o] = a)
                                }
                            }
                        }))
                    }
                })),
                t
            }
        },
        {
            key: "handleLayerVirtualCell",
            value: function(e) {
                if (this.layerList && this.layerList.length > 0) {
                    var t, n = this.getVirtualAbcMap(e),
                    i = wt(this.layerList);
                    try {
                        for (i.s(); ! (t = i.n()).done;) {
                            var r = t.value,
                            o = r.getLayerId();
                            r.setVirtualCellRange(n[o], !0)
                        }
                    } catch(e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
            }
        },
        {
            key: "getVirtualAbcMap",
            value: function(e) {
                var t = {};
                return Object.keys(e).map((function(n) {
                    if (e[n]) {
                        var i = e[n].cells;
                        i && ("{}" == JSON.stringify(i) ? delete e[n] : Object.keys(i).map((function(e) {
                            var r = i[e];
                            if (r) {
                                var o = r.virtual;
                                o && (t[o] || (t[o] = []), t[o].push([Number(n), Number(e)]))
                            }
                        })))
                    }
                })),
                t
            }
        },
        {
            key: "printMultiPage",
            value: function() {
                var e = this,
                t = this.data;
                if (t.settings.count > 1e3) alert("打印条数不能超过1000条");
                else {
                    console.log("--", this.layerList);
                    var n = t.settings.parseDataFn;
                    t.settings.getAllFn().then((function(i) {
                        var r = _t({},
                        i.data.result),
                        o = r.dataList,
                        a = r.jsonStr,
                        s = t.printElHeight,
                        l = Object.keys(o),
                        c = [];
                        if (1 == l.length) {
                            var u = o[Object.keys(o)[0]].list,
                            h = n(a, St({},
                            Object.keys(o)[0], u));
                            console.log("myjson", JSON.parse(JSON.stringify(h))),
                            c = e.handleMultiPageData(h, s, null)
                        } else {
                            var d = n(a, o, !0);
                            c = e.handleMultiPageData(d, s, null)
                        }
                        setTimeout((function() {
                            Promise.all(c).then((function() {
                                e.win.print(),
                                e.printLoading(!1)
                            }))
                        }), 1e3)
                    }))
                }
            }
        },
        {
            key: "getPrintCanvas",
            value: function(e, t) {
                var n = this;
                return new Promise((function(i) {
                    n.renderCanvas().then((function(e) {
                        return console.log("第1步 renderCanvas"),
                        n.renderLayers(t, e)
                    })).then((function() {
                        var t = n.rePainting(n.canvas, e);
                        console.log("第2步 rePainting"),
                        i(t)
                    })).
                    catch((function() {
                        console.error("获取需要打印的canvas出现问题")
                    }))
                }))
            }
        },
        {
            key: "getSingleCanvasForMultiPage",
            value: function() {
                var e = this;
                return this.preHandleLayer(),
                new Promise((function(t) {
                    e.renderCanvas().then((function(t) {
                        return e.renderLayersForMultiPage(e.layerList, t)
                    })).then((function() {
                        t(e.canvas)
                    })).
                    catch((function() {
                        console.error("获取多页打印的单个Canvas")
                    }))
                }))
            }
        },
        {
            key: "doPrint",
            value: function(e) {
                var t = this,
                n = this.win,
                i = this.doc,
                r = this.createPringDiv();
                r.appendChild(e),
                i.body.appendChild(r),
                setTimeout((function() {
                    console.log("打印完成"),
                    t.printLoading(!1),
                    n.print()
                }), 1e3)
            }
        },
        {
            key: "createPringDiv",
            value: function() {
                var e = this.win,
                t = this.data,
                n = e.document.createElement("div");
                if (t.toolPrintSizeObj) {
                    var i = t.getPrintPaperInfo(),
                    r = i.w,
                    o = i.h,
                    a = (i.type, t.printElWidth),
                    s = Number(a) > r;
                    n.style.height = "".concat(s ? r: o, "px"),
                    n.style.width = "".concat(s ? o: r, "px"),
                    n.style.textAlign = "center"
                }
                return n
            }
        },
        {
            key: "printLoading",
            value: function(e) {
                "function" == typeof Vue && (this.vm || (this.vm = new Vue), !0 === e ? this.vm.$Spin.show() : this.vm.$Spin.hide())
            }
        },
        {
            key: "pdf2020",
            value: function(e, t) {
                var n = this.data;
                this.layerList = e,
                Number(n.settings.total),
                this.pdfMultiPage(e, t)
            }
        },
        {
            key: "pdfMultiPage",
            value: function(e, t) {
                var n = this,
                i = this.data;
                this.layerList = e;
                var r = i.dataSetHeight;
                if (r || (r = i.settings.row.height), this.data.settings.count > 1e3) alert("打印条数不能超过1000条");
                else {
                    var o = i.settings.parseDataFn,
                    a = i.toolPrintSizeObj;
                    a && a.heightPx;
                    var s = i.printElHeight;
                    this.printLoading(!0),
                    i.settings.getAllFn().then((function(i) {
                        var r = _t({},
                        i.data.result),
                        a = r.dataList,
                        l = Object.keys(a),
                        c = JSON.parse(JSON.stringify(n.data.settings));
                        c.downLoadImage = n.data.settings.downLoadImage;
                        var u = {},
                        h = r.jsonStr;
                        if (l.length > 1) u = o(h, a, !0);
                        else if (0 == l.length) u = o(h, {});
                        else {
                            var d = a[l[0]].list;
                            u = o(h, St({},
                            l[0], d))
                        }
                        var f = [];
                        n.handleMultiPageData(u, s, (function(t, i, r) {
                            var o = "report".concat(t),
                            a = n.createPdfPage(o, c, i, s, r);
                            f.push(a.pdfManyPage(e, t, f))
                        })),
                        setTimeout((function() {
                            n.pdfAllPromise(f, t)
                        }), 500)
                    }))
                }
            }
        },
        {
            key: "pdfAllPromise",
            value: function(e, t) {
                var n = this,
                i = this.doc,
                r = this.data,
                o = {
                    unit: "cm",
                    orientation: "p"
                },
                a = r.settings.pdfCompress;
                o.compress = a,
                r.printElWidth && r.printElHeight && Number(r.printElWidth) > 1.4 * Number(r.printElHeight) && (o.orientation = "l");
                var s = new ce.a(o);
                Promise.all(e).then((function(e) {
                    for (var l = function(l) {
                        var c = n.rePaintingPdf(e[l], !0),
                        u = r.toolPrintSizeObj;
                        i.body.appendChild(c);
                        var h = new Image;
                        h.src = c.toDataURL(),
                        h.onload = function() { !
                            function() {
                                var i = window.devicePixelRatio,
                                c = h.width / i,
                                d = 750,
                                f = 21.14;
                                u && (d = u.widthPx - 44, "A4" == u.printType && (f = 21.14, o && "l" == o.orientation && r.printElWidth && r.printElHeight && (d = Math.min(c, 1e3), f = 29.14))),
                                c > d && (h.width = d);
                                var g = c / 37.8,
                                p = (f - g) / 2;
                                p < 0 && (p = 0),
                                l >= 1 && s.addPage(),
                                console.log("pading=" + p + ",width=" + g),
                                !0 === a ? s.addImage(h, "JPEG", p, 0, g, 0, "", "FAST") : s.addImage(h, "JPEG", p, 0, g, 0),
                                l === e.length - 1 && (n.vm && n.vm.$Spin.hide(), s.save(t))
                            } ()
                        }
                    },
                    c = 0; c < e.length; c++) l(c)
                }))
            }
        },
        {
            key: "pdfOnePage",
            value: function(e, t) {
                var n = this;
                this.renderCanvas(!0).then((function(t) {
                    return n.renderLayers(e, t)
                })).then((function() {
                    var e = n.rePainting(n.canvas, !0);
                    n.canvasToPdf(e, t)
                }))
            }
        },
        {
            key: "canvasToPdf",
            value: function(e, t) {
                var n = this.data.toolPrintSizeObj,
                i = new Image;
                i.src = e.toDataURL();
                var r = new ce.a({
                    unit: "cm",
                    orientation: "p"
                });
                i.onload = function() {
                    var e = window.devicePixelRatio,
                    o = i.width / e,
                    a = 750,
                    s = 21.14;
                    n && (a = n.widthPx - 44, "A4" == n.printType && (s = 21.14)),
                    o > a && (i.width = a);
                    var l = i.width / 37.8,
                    c = (s - l) / 2;
                    c < 0 && (c = 0),
                    r.addImage(i, "JPEG", c, 0, l, 0),
                    r.save(t)
                }
            }
        }]) && kt(t.prototype, n),
        i && kt(t, i),
        e
    } ();
    function Tt(e) {
        return function(e) {
            if (Array.isArray(e)) return Dt(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) || Nt(e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Rt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))),
            n.push.apply(n, i)
        }
        return n
    }
    function Mt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Rt(Object(n), !0).forEach((function(t) {
                Pt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    function Pt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Et(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Ot(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) || Nt(e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Nt(e, t) {
        if (e) {
            if ("string" == typeof e) return Dt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Dt(e, t) : void 0
        }
    }
    function Dt(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    var Bt = {
        view: {
            height: function() {
                return document.documentElement.clientHeight
            },
            width: function() {
                return document.documentElement.clientWidth
            }
        },
        domain: "http://127.0.0.1:8080/jeecg-boot",
        showGrid: !0,
        showToolbar: !0,
        showContextmenu: !0,
        readOnly: !1,
        pdfCompress: !0,
        row: {
            len: 100,
            height: 25
        },
        col: {
            len: 26,
            width: 100,
            indexWidth: 60,
            minWidth: 60
        },
        style: {
            bgcolor: "#ffffff",
            align: "left",
            valign: "middle",
            textwrap: !1,
            strike: !1,
            underline: !1,
            color: "#0a0a0a",
            font: {
                name: "Arial",
                size: 10,
                bold: !1,
                italic: !1
            }
        }
    };
    function jt(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
        i = this.merges,
        r = t.clone(),
        o = e.size(),
        a = Ot(o, 2),
        s = a[0],
        l = a[1],
        c = t.size(),
        u = Ot(c, 2),
        h = u[0],
        d = u[1];
        return s > h && (r.eri = t.sri + s - 1),
        l > d && (r.eci = t.sci + l - 1),
        !i.intersects(r) || (n(Z("error.pasteForMergedCell")), !1)
    }
    function Ft(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = this.rows,
        o = this.merges;
        "all" !== n && "format" !== n || (r.deleteCells(t, n), o.deleteWithin(t)),
        r.copyPaste(e, t, n, i, (function(e, t, n) {
            if (n && n.merge) {
                var i = Ot(n.merge, 2),
                r = i[0],
                a = i[1];
                if (r <= 0 && a <= 0) return;
                o.add(new m(e, t, e + r, t + a))
            }
        }))
    }
    function Ht(e, t) {
        var n = this.clipboard,
        i = this.rows,
        r = this.merges;
        i.cutPaste(e, t),
        r.move(e, t.sri - e.sri, t.sci - e.sci),
        n.clear()
    }
    function Wt(e, t, n) {
        var i = this.styles,
        r = this.rows.getCellOrNew(e, t),
        o = {};
        void 0 !== r.style && (o = N.cloneDeep(i[r.style])),
        Object.assign(o, {
            border: n
        }),
        r.style = this.addStyle(o)
    }
    function Vt(e) {
        var t = this,
        n = e.mode,
        i = e.style,
        r = e.color,
        o = this.styles,
        a = this.selector,
        s = this.rows,
        l = a.range,
        c = l.sri,
        u = l.sci,
        h = l.eri,
        d = l.eci,
        f = !this.isSignleSelected();
        if (f || "inside" !== n && "horizontal" !== n && "vertical" !== n) if ("outside" !== n || f) {
            if ("none" === n) a.range.each((function(e, n) {
                var i = s.getCell(e, n);
                if (i && void 0 !== i.style) {
                    var r = N.cloneDeep(o[i.style]);
                    delete r.border,
                    i.style = t.addStyle(r)
                }
            }));
            else if ("all" === n || "inside" === n || "outside" === n || "horizontal" === n || "vertical" === n) !
            function() {
                for (var e = [], o = c; o <= h; o += 1) for (var a = u; a <= d; a += 1) {
                    for (var l = [], g = 0; g < e.length; g += 1) {
                        var p = Ot(e[g], 4),
                        m = p[0],
                        v = p[1],
                        y = p[2],
                        b = p[3];
                        if (o === m + y + 1 && l.push(g), m <= o && o <= m + y && a === v) {
                            a += b + 1;
                            break
                        }
                    }
                    if (l.forEach((function(t) {
                        return e.splice(t, 1)
                    })), a > d) break;
                    var C = s.getCell(o, a),
                    I = 0,
                    w = 0;
                    if (C && C.merge) {
                        var x = Ot(C.merge, 2);
                        I = x[0],
                        w = x[1],
                        e.push([o, a, I, w])
                    }
                    var A = I > 0 && o + I === h,
                    _ = w > 0 && a + w === d,
                    S = {};
                    "all" === n ? S = {
                        bottom: [i, r],
                        top: [i, r],
                        left: [i, r],
                        right: [i, r]
                    }: "inside" === n ? (!_ && a < d && (S.right = [i, r]), !A && o < h && (S.bottom = [i, r])) : "horizontal" === n ? !A && o < h && (S.bottom = [i, r]) : "vertical" === n ? !_ && a < d && (S.right = [i, r]) : "outside" === n && f && (c === o && (S.top = [i, r]), (A || h === o) && (S.bottom = [i, r]), u === a && (S.left = [i, r]), (_ || d === a) && (S.right = [i, r])),
                    Object.keys(S).length > 0 && Wt.call(t, o, a, S),
                    a += w
                }
            } ();
            else if ("top" === n || "bottom" === n) for (var g = u; g <= d; g += 1)"top" === n && (Wt.call(this, c, g, {
                top: [i, r]
            }), g += s.getCellMerge(c, g)[1]),
            "bottom" === n && (Wt.call(this, h, g, {
                bottom: [i, r]
            }), g += s.getCellMerge(h, g)[1]);
            else if ("left" === n || "right" === n) for (var p = c; p <= h; p += 1)"left" === n && (Wt.call(this, p, u, {
                left: [i, r]
            }), p += s.getCellMerge(p, u)[0]),
            "right" === n && (Wt.call(this, p, d, {
                right: [i, r]
            }), p += s.getCellMerge(p, d)[0])
        } else Wt.call(this, c, u, {
            top: [i, r],
            bottom: [i, r],
            left: [i, r],
            right: [i, r]
        })
    }
    function Gt(e, t) {
        var n = this.rows,
        i = this.freezeTotalHeight(),
        r = n.height;
        i + n.height < e && (r -= t);
        for (var o = this.exceptRowSet,
        a = 0,
        s = r,
        l = n.height; a < n.len && !(s > e); a += 1) o.has(a) || (s += l = n.getHeight(a));
        return (s -= l) <= 0 ? {
            ri: -1,
            top: 0,
            height: l
        }: {
            ri: a - 1,
            top: s,
            height: l
        }
    }
    function zt(e, t) {
        var n = this.cols,
        i = this.freezeTotalWidth(),
        r = n.indexWidth;
        i + n.indexWidth < e && (r -= t);
        var o = Ot(N.rangeReduceIf(0, n.len, r, n.indexWidth, e, (function(e) {
            return n.getWidth(e)
        })), 3),
        a = o[0],
        s = o[1],
        l = o[2];
        return s <= 0 ? {
            ci: -1,
            left: 0,
            width: n.indexWidth
        }: {
            ci: a - 1,
            left: s,
            width: l
        }
    }
    var Zt = function() {
        function e(t, n) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.settings = N.merge(Bt, n || {}),
            this.name = t || "sheet",
            this.dicts = [],
            this.freeze = [0, 0],
            this.styles = [],
            this.merges = new E,
            this.rows = new F(this.settings.row),
            this.cols = new W(this.settings.col),
            this.validations = new ae,
            this.hyperlinks = {},
            this.comments = {},
            this.repeatRange = this.settings.repeatRange,
            this.selector = new y,
            this.scroll = new b,
            this.history = new I,
            this.clipboard = new A,
            this.autoFilter = new R,
            this.change = function() {},
            this.saveData = function() {},
            this.exceptRowSet = new Set,
            this.sortedRowMap = new Map,
            this.unsortedRowMap = new Map,
            this.printDegree = 1,
            this.printPaperWidth = 0,
            this.printPaperHeight = 0
        }
        var t, n, i;
        return t = e,
        (n = [{
            key: "addValidation",
            value: function(e, t, n) {
                var i = this;
                this.changeData((function() {
                    i.validations.add(e, t, n)
                }))
            }
        },
        {
            key: "removeValidation",
            value: function() {
                var e = this,
                t = this.selector.range;
                this.changeData((function() {
                    e.validations.remove(t)
                }))
            }
        },
        {
            key: "getSelectedValidator",
            value: function() {
                var e = this.selector,
                t = e.ri,
                n = e.ci,
                i = this.validations.get(t, n);
                return i ? i.validator: null
            }
        },
        {
            key: "getSelectedValidation",
            value: function() {
                var e = this.selector,
                t = e.ri,
                n = e.ci,
                i = e.range,
                r = this.validations.get(t, n),
                o = {
                    ref: i.toString()
                };
                return null !== r && (o.mode = r.mode, o.validator = r.validator),
                o
            }
        },
        {
            key: "canUndo",
            value: function() {
                return this.history.canUndo()
            }
        },
        {
            key: "canRedo",
            value: function() {
                return this.history.canRedo()
            }
        },
        {
            key: "undo",
            value: function() {
                var e = this;
                this.history.undo(this.getData(), (function(t) {
                    e.setData(t)
                }))
            }
        },
        {
            key: "redo",
            value: function() {
                var e = this;
                this.history.redo(this.getData(), (function(t) {
                    e.setData(t)
                }))
            }
        },
        {
            key: "copy",
            value: function() {
                this.clipboard.copy(this.selector.range)
            }
        },
        {
            key: "cut",
            value: function() {
                this.clipboard.cut(this.selector.range)
            }
        },
        {
            key: "paste",
            value: function() {
                var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all",
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                i = this.clipboard,
                r = this.selector;
                return ! i.isClear() && !!jt.call(this, i.range, r.range, n) && (this.changeData((function() {
                    i.isCopy() ? Ft.call(e, i.range, r.range, t) : i.isCut() && Ht.call(e, i.range, r.range)
                })), !0)
            }
        },
        {
            key: "autofill",
            value: function(e, t) {
                var n = this,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                r = this.selector.range;
                return !! jt.call(this, r, e, i) && (this.changeData((function() {
                    Ft.call(n, r, e, t, !0)
                })), !0)
            }
        },
        {
            key: "clearClipboard",
            value: function() {
                this.clipboard.clear()
            }
        },
        {
            key: "calSelectedRangeByEnd",
            value: function(e, t) {
                var n = this.selector,
                i = this.rows,
                r = this.cols,
                o = this.merges,
                a = n.range,
                s = a.sri,
                l = a.sci,
                c = a.eri,
                u = a.eci,
                h = n.ri,
                d = n.ci,
                f = e,
                g = t;
                return e < 0 && (f = i.len - 1),
                t < 0 && (g = r.len - 1),
                f > h ? (s = h, c = f) : (s = f, c = h),
                g > d ? (l = d, u = g) : (l = g, u = d),
                n.range = o.union(new m(s, l, c, u)),
                n.range = o.union(n.range),
                n.range
            }
        },
        {
            key: "calSelectedRangeByStart",
            value: function(e, t) {
                var n = this.selector,
                i = this.rows,
                r = this.cols,
                o = this.merges.getFirstIncludes(e, t);
                return null === o && (o = new m(e, t, e, t), -1 === e && (o.sri = 0, o.eri = i.len - 1), -1 === t && (o.sci = 0, o.eci = r.len - 1)),
                n.range = o,
                o
            }
        },
        {
            key: "saveJsonData",
            value: function(e) {
                var t = this.getData();
                if (e) {
                    var n = e.imgList,
                    i = e.chartList;
                    n && n.length > 0 && (this.handleLayerVirtualCellRange(n, t), t.imgList = n),
                    i && i.length > 0 && (this.handleLayerVirtualCellRange(i, t), t.chartList = i)
                }
                t.area = this.getSelectArea(),
                console.log("saveData", t),
                this.saveData(t)
            }
        },
        {
            key: "handleLayerVirtualCellRange",
            value: function(e, t) {
                var n, i = this.cols,
                r = t.rows,
                o = function(e, t) {
                    var n;
                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (n = Nt(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var i = 0,
                            r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return i >= e.length ? {
                                        done: !0
                                    }: {
                                        done: !1,
                                        value: e[i++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
                    }
                    var o, a = !0,
                    s = !1;
                    return {
                        s: function() {
                            n = e[Symbol.iterator]()
                        },
                        n: function() {
                            var e = n.next();
                            return a = e.done,
                            e
                        },
                        e: function(e) {
                            s = !0,
                            o = e
                        },
                        f: function() {
                            try {
                                a || null == n.
                                return || n.
                                return ()
                            } finally {
                                if (s) throw o
                            }
                        }
                    }
                } (e);
                try {
                    for (o.s(); ! (n = o.n()).done;) {
                        for (var a = n.value,
                        s = a.layer_id,
                        l = a.row,
                        c = a.col,
                        u = Number(a.width), h = 0, d = c, f = []; h <= u;) f.push(d),
                        h = i.sumWidth(c, ++d);
                        var g = [],
                        p = r[l],
                        m = {};
                        p ? m = r[l].cells: r[l] = {
                            cells: {}
                        };
                        for (var v = 0,
                        y = f; v < y.length; v++) {
                            var b = y[v];
                            g.push([l, b]);
                            var C = m[b];
                            C ? C.virtual = s: m[b] = {
                                text: " ",
                                virtual: s
                            }
                        }
                        a.virtualCellRange = g,
                        r[l].cells = m
                    }
                } catch(e) {
                    o.e(e)
                } finally {
                    o.f()
                }
            }
        },
        {
            key: "printPage",
            value: function(e, t) {
                new Lt(e, this, "screen").print2020(t)
            }
        },
        {
            key: "printPageAll",
            value: function(e, t) {
                new Lt(e, this, "all").print2020(t)
            }
        },
        {
            key: "printPageArea",
            value: function(e, t) {
                new Lt(e, this, "area").print(t)
            }
        },
        {
            key: "saveAsPdf",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "online.pdf";
                new Lt(e, this, "all").notHD().pdf2020(t, n)
            }
        },
        {
            key: "setSelectedCellAttr",
            value: function(e, t) {
                var n = this;
                this.changeData((function() {
                    var i = n.selector,
                    r = n.styles,
                    o = n.rows;
                    if ("merge" === e) t ? n.merge() : n.unmerge();
                    else if ("border" === e) Vt.call(n, t),
                    i.range.each((function(e, t) {
                        var i = o.getCellOrNew(e, t);
                        i && !i.text && n.setCellText(e, t, " ", "input")
                    }));
                    else if ("formula" === e) {
                        var a = i.ri,
                        s = i.ci,
                        l = i.range;
                        if (i.multiple()) {
                            var c = Ot(i.size(), 2),
                            h = c[0],
                            d = c[1],
                            f = l.sri,
                            g = l.sci,
                            p = l.eri,
                            m = l.eci;
                            if (h > 1) for (var v = g; v <= m; v += 1) o.getCellOrNew(p + 1, v).text = "=".concat(t, "(").concat(u(v, f), ":").concat(u(v, p), ")");
                            else d > 1 && (o.getCellOrNew(a, m + 1).text = "=".concat(t, "(").concat(u(g, a), ":").concat(u(m, a), ")"))
                        } else o.getCellOrNew(a, s).text = "=".concat(t, "()")
                    } else i.range.each((function(i, a) {
                        var s = o.getCellOrNew(i, a),
                        l = {};
                        if (void 0 !== s.style && (l = N.cloneDeep(r[s.style])), "format" === e) l.format = t,
                        s.style = n.addStyle(l);
                        else if ("font-bold" === e || "font-italic" === e || "font-name" === e || "font-size" === e) {
                            var c = {};
                            c[e.split("-")[1]] = t,
                            l.font = Object.assign(l.font || {},
                            c),
                            s.style = n.addStyle(l)
                        } else "strike" !== e && "textwrap" !== e && "underline" !== e && "align" !== e && "valign" !== e && "color" !== e && "bgcolor" !== e || (l[e] = t, s.style = n.addStyle(l))
                    }))
                }))
            }
        },
        {
            key: "setSelectedCellText",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "input",
                n = this.autoFilter,
                i = this.selector,
                r = this.rows,
                o = i.ri,
                a = i.ci,
                s = o;
                this.unsortedRowMap.has(o) && (s = this.unsortedRowMap.get(o));
                var l = r.getCell(s, a),
                c = l ? l.text: "";
                if (this.setCellText(s, a, e, t), n.active()) {
                    var u = n.getFilter(a);
                    if (u) {
                        var h = u.value.findIndex((function(e) {
                            return e === c
                        }));
                        h >= 0 && u.value.splice(h, 1, e)
                    }
                }
            }
        },
        {
            key: "getSelectedCell",
            value: function() {
                var e = this.selector,
                t = e.ri,
                n = e.ci,
                i = t;
                return this.unsortedRowMap.has(t) && (i = this.unsortedRowMap.get(t)),
                this.rows.getCell(i, n)
            }
        },
        {
            key: "xyInSelectedRect",
            value: function(e, t) {
                var n = this.getSelectedRect(),
                i = n.left,
                r = n.top,
                o = n.width,
                a = n.height,
                s = e - this.cols.indexWidth,
                l = t - this.rows.height;
                return s > i && s < i + o && l > r && l < r + a
            }
        },
        {
            key: "getSelectedRect",
            value: function() {
                return this.getRect(this.selector.range)
            }
        },
        {
            key: "getClipboardRect",
            value: function() {
                var e = this.clipboard;
                return e.isClear() ? {
                    left: -100,
                    top: -100
                }: this.getRect(e.range)
            }
        },
        {
            key: "getRealDataCellRange",
            value: function() {
                var e = 99,
                t = 99,
                n = -1,
                i = -1,
                r = this.rows.getData();
                if (r) {
                    for (var o = Object.keys(r), a = [], s = 0; s < o.length; s++) {
                        var l = parseInt(o[s]); ! Number.isInteger(l) || l < 0 || a.push(l)
                    }
                    n = Math.max.apply(Math, a),
                    e = Math.min.apply(Math, a);
                    for (var c = 0,
                    u = o; c < u.length; c++) {
                        var h = u[c],
                        d = r[h] && r[h].cells;
                        if (d) {
                            for (var f = Object.keys(d), g = [], p = 0; p < f.length; p++) {
                                var v = parseInt(f[p]); ! Number.isInteger(v) || v < 0 || g.push(v)
                            }
                            var y = Math.max.apply(Math, g);
                            i < y && (i = y);
                            var b = Math.min.apply(Math, g);
                            t > b && (t = b)
                        }
                    }
                }
                return console.log({
                    sri: e,
                    sci: t,
                    eri: n,
                    eci: i,
                    width: 0,
                    height: 0
                }),
                new m(e, t, n, i, 0, 0)
            }
        },
        {
            key: "getDataBeginLineHeight",
            value: function() {
                var e = this.exceptRowSet,
                t = this.rows,
                n = t.getData(),
                i = 0;
                if (t) {
                    for (var r = Object.keys(n), o = [], a = 0; a < r.length; a++) {
                        var s = parseInt(r[a]); ! Number.isInteger(s) || s < 0 || o.push(s)
                    }
                    i = Math.min.apply(Math, o)
                }
                var l = t.sumHeight(0, i, e);
                return 0 == i && (l = 0),
                l
            }
        },
        {
            key: "getRCPosition",
            value: function(e, t) {
                var n = this.scroll,
                i = this.rows,
                r = this.cols,
                o = this.exceptRowSet,
                a = r.sumWidth(0, t),
                s = i.sumHeight(0, e, o),
                l = a - n.x,
                c = s - n.y,
                u = this.freezeTotalHeight(),
                h = this.freezeTotalWidth();
                return h > 0 && h > a && (l = a),
                u > 0 && u > s && (c = s),
                {
                    left: l + 60,
                    top: c + 25,
                    row: e,
                    col: t
                }
            }
        },
        {
            key: "getSelectRect",
            value: function() {
                if (!0 === this.settings.readOnly) {
                    var e = this.area,
                    t = e.sri,
                    n = e.sci,
                    i = e.eri,
                    r = e.eci,
                    o = e.width,
                    a = e.height;
                    return new m(t, n, i, r, o, a)
                }
                var s = this.selector,
                l = this.exceptRowSet,
                c = this.rows,
                u = this.cols,
                h = s.range,
                d = h.sri,
                f = h.sci,
                g = h.eri,
                p = h.eci;
                if (0 == d && 0 == f && 0 == g && 0 == p) return ! 1;
                var v = c.sumHeight(d, g + 1, l),
                y = u.sumWidth(f, p + 1);
                return new m(d, f, g, p, y, v)
            }
        },
        {
            key: "getMaxCellIndex",
            value: function(e) {
                var t = [];
                for (var n in e) {
                    var i = e[n].cells;
                    if (i) {
                        var r = [];
                        for (var o in i) {
                            r.push(Number(o));
                            var a = i[o].merge;
                            a && r.push(a[1] - 1)
                        }
                        t.push(Math.max.apply(Math, r))
                    }
                }
                return Math.max.apply(Math, t)
            }
        },
        {
            key: "getDataRect",
            value: function() {
                var e = Mt({},
                this.getData().rows);
                delete e.len;
                var t = Object.keys(e);
                if (! (t = t.filter((function(e) {
                    return "len" != e
                })).map((function(e) {
                    return Number(e)
                }))) || 0 == t.length) return ! 1;
                var n = Math.max.apply(Math, Tt(t)),
                i = this.getMaxCellIndex(e),
                r = this.exceptRowSet,
                o = this.rows;
                this.cols;
                try {
                    var a = e[n].cells[i].merge;
                    a && (n += a[0], i += a[1])
                } catch(e) {}
                var s = o.sumHeight(0, n + 1, r),
                l = 0,
                c = [];
                if (Object.keys(e).forEach((function(t) {
                    var n, i = Mt({},
                    e[t].cells);
                    for (var r in i) i[r].text || delete i[r];
                    i && (c = (n = c).concat.apply(n, Tt(Object.keys(i))))
                })), c) {
                    for (var u = this.settings.col.width,
                    h = Math.max.apply(Math, Tt(c)), d = this.getData().cols, f = 0, g = 0; g <= h; g++) f += d[g] ? d[g].width: u;
                    l = f
                }
                return new m(0, 0, n, i, l, s)
            }
        },
        {
            key: "getSelectArea",
            value: function() {
                var e = this.selector,
                t = this.exceptRowSet,
                n = this.rows,
                i = this.cols,
                r = e.range,
                o = r.sri,
                a = r.sci,
                s = r.eri,
                l = r.eci;
                if (0 == o && 0 == a && 0 == s && 0 == l) return ! 1;
                var c = n.sumHeight(o, s + 1, t);
                return {
                    sri: o,
                    sci: a,
                    eri: s,
                    eci: l,
                    width: i.sumWidth(a, l + 1),
                    height: c
                }
            }
        },
        {
            key: "getAllCellRange",
            value: function(e) {
                var t = e.sri,
                n = e.sci,
                i = e.eri,
                r = e.eci,
                o = e.width,
                a = e.height;
                return new m(t, n, i, r, o, a)
            }
        },
        {
            key: "getRect",
            value: function(e) {
                var t = this.scroll,
                n = this.rows,
                i = this.cols,
                r = this.exceptRowSet,
                o = e.sri,
                a = e.sci,
                s = e.eri,
                l = e.eci;
                if (o < 0 && a < 0) return {
                    left: 0,
                    l: 0,
                    top: 0,
                    t: 0,
                    scroll: t
                };
                var c = i.sumWidth(0, a),
                u = n.sumHeight(0, o, r),
                h = n.sumHeight(o, s + 1, r),
                d = i.sumWidth(a, l + 1),
                f = c - t.x,
                g = u - t.y,
                p = this.freezeTotalHeight(),
                m = this.freezeTotalWidth();
                return m > 0 && m > c && (f = c),
                p > 0 && p > u && (g = u),
                {
                    l: c,
                    t: u,
                    left: f,
                    top: g,
                    height: h,
                    width: d,
                    scroll: t
                }
            }
        },
        {
            key: "getCellRectByXY",
            value: function(e, t) {
                var n = this.scroll,
                i = this.merges,
                r = this.rows,
                o = this.cols,
                a = Gt.call(this, t, n.y),
                s = a.ri,
                l = a.top,
                c = a.height,
                u = zt.call(this, e, n.x),
                h = u.ci,
                d = u.left,
                f = u.width;
                if ( - 1 === h && (f = o.totalWidth()), -1 === s && (c = r.totalHeight()), s >= 0 || h >= 0) {
                    var g = i.getFirstIncludes(s, h);
                    if (g) {
                        s = g.sri,
                        h = g.sci;
                        var p = this.cellRect(s, h);
                        d = p.left,
                        l = p.top,
                        f = p.width,
                        c = p.height
                    }
                }
                return {
                    ri: s,
                    ci: h,
                    left: d,
                    top: l,
                    width: f,
                    height: c
                }
            }
        },
        {
            key: "isSignleSelected",
            value: function() {
                var e = this.selector.range,
                t = e.sri,
                n = e.sci,
                i = e.eri,
                r = e.eci,
                o = this.getCell(t, n);
                if (o && o.merge) {
                    var a = Ot(o.merge, 2),
                    s = a[0],
                    l = a[1];
                    if (t + s === i && n + l === r) return ! 0
                }
                return ! this.selector.multiple()
            }
        },
        {
            key: "canUnmerge",
            value: function() {
                var e = this.selector.range,
                t = e.sri,
                n = e.sci,
                i = e.eri,
                r = e.eci,
                o = this.getCell(t, n);
                if (o && o.merge) {
                    var a = Ot(o.merge, 2),
                    s = a[0],
                    l = a[1];
                    if (t + s === i && n + l === r) return ! 0
                }
                return ! 1
            }
        },
        {
            key: "merge",
            value: function() {
                var e = this,
                t = this.selector,
                n = this.rows;
                if (!this.isSignleSelected()) {
                    var i = Ot(t.size(), 2),
                    r = i[0],
                    o = i[1];
                    if (r > 1 || o > 1) {
                        var a = t.range,
                        s = a.sri,
                        l = a.sci;
                        this.changeData((function() {
                            var i = n.getCellOrNew(s, l);
                            i.merge = [r - 1, o - 1],
                            e.merges.add(t.range),
                            e.rows.deleteCells(t.range),
                            e.rows.setCell(s, l, i)
                        }))
                    }
                }
            }
        },
        {
            key: "unmerge",
            value: function() {
                var e = this,
                t = this.selector;
                if (this.isSignleSelected()) {
                    var n = t.range,
                    i = n.sri,
                    r = n.sci;
                    this.changeData((function() {
                        e.rows.deleteCell(i, r, "merge"),
                        e.merges.deleteWithin(t.range)
                    }))
                }
            }
        },
        {
            key: "canAutofilter",
            value: function() {
                return ! this.autoFilter.active()
            }
        },
        {
            key: "autofilter",
            value: function() {
                var e = this,
                t = this.autoFilter,
                n = this.selector;
                this.changeData((function() {
                    t.active() ? (t.clear(), e.exceptRowSet = new Set, e.sortedRowMap = new Map, e.unsortedRowMap = new Map) : t.ref = n.range.toString()
                }))
            }
        },
        {
            key: "setAutoFilter",
            value: function(e, t, n, i) {
                var r = this.autoFilter;
                r.addFilter(e, n, i),
                r.setSort(e, t),
                this.resetAutoFilter()
            }
        },
        {
            key: "resetAutoFilter",
            value: function() {
                var e = this,
                t = this.autoFilter,
                n = this.rows;
                if (t.active()) {
                    var i = t.sort,
                    r = t.filteredRows((function(e, t) {
                        return n.getCell(e, t)
                    })),
                    o = r.rset,
                    a = r.fset,
                    s = Array.from(a),
                    l = Array.from(a);
                    i && s.sort((function(e, t) {
                        return "asc" === i.order ? e - t: "desc" === i.order ? t - e: 0
                    })),
                    this.exceptRowSet = o,
                    this.sortedRowMap = new Map,
                    this.unsortedRowMap = new Map,
                    s.forEach((function(t, n) {
                        e.sortedRowMap.set(l[n], t),
                        e.unsortedRowMap.set(t, l[n])
                    }))
                }
            }
        },
        {
            key: "deleteCell",
            value: function() {
                var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all",
                n = this.selector;
                this.changeData((function() {
                    e.rows.deleteCells(n.range, t),
                    "all" !== t && "format" !== t || e.merges.deleteWithin(n.range)
                }))
            }
        },
        {
            key: "insert",
            value: function(e) {
                var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this.changeData((function() {
                    var i = t.selector.range,
                    r = i.sri,
                    o = i.sci,
                    a = t.rows,
                    s = t.merges,
                    l = t.cols,
                    c = r;
                    "row" === e ? a.insert(r, n) : "column" === e && (a.insertColumn(o, n), c = o, l.len += 1),
                    s.shift(e, c, n, (function(e, t, n, i) {
                        var r = a.getCell(e, t);
                        r.merge[0] += n,
                        r.merge[1] += i
                    }))
                }))
            }
        },
        {
            key: "delete",
            value: function(e) {
                var t = this;
                this.changeData((function() {
                    var n = t.rows,
                    i = t.merges,
                    r = t.selector,
                    o = t.cols,
                    a = r.range,
                    s = r.range,
                    l = s.sri,
                    c = s.sci,
                    u = s.eri,
                    h = s.eci,
                    d = Ot(r.range.size(), 2),
                    f = d[0],
                    g = d[1],
                    p = l,
                    m = f;
                    "row" === e ? n.delete(l, u) : "column" === e && (n.deleteColumn(c, h), p = a.sci, m = g, o.len -= 1),
                    i.shift(e, p, -m, (function(e, t, i, r) {
                        var o = n.getCell(e, t);
                        o.merge[0] += i,
                        o.merge[1] += r,
                        0 === o.merge[0] && 0 === o.merge[1] && delete o.merge
                    }))
                }))
            }
        },
        {
            key: "scrollx",
            value: function(e, t) {
                var n = this.scroll,
                i = this.freeze,
                r = this.cols,
                o = Ot(i, 2)[1],
                a = Ot(N.rangeReduceIf(o, r.len, 0, 0, e, (function(e) {
                    return r.getWidth(e)
                })), 3),
                s = a[0],
                l = a[1],
                c = a[2],
                u = l;
                e > 0 && (u += c),
                n.x !== u && (n.ci = e > 0 ? s: 0, n.x = u, t())
            }
        },
        {
            key: "scrolly",
            value: function(e, t) {
                var n = this.scroll,
                i = this.freeze,
                r = this.rows,
                o = Ot(i, 1)[0],
                a = Ot(N.rangeReduceIf(o, r.len, 0, 0, e, (function(e) {
                    return r.getHeight(e)
                })), 3),
                s = a[0],
                l = a[1],
                c = a[2],
                u = l;
                e > 0 && (u += c),
                n.y !== u && (n.ri = e > 0 ? s: 0, n.y = u, t())
            }
        },
        {
            key: "cellRect",
            value: function(e, t) {
                var n = this.rows,
                i = this.cols,
                r = i.sumWidth(0, t),
                o = n.sumHeight(0, e),
                a = n.getCell(e, t),
                s = i.getWidth(t),
                l = n.getHeight(e);
                if (null !== a && a.merge) {
                    var c = Ot(a.merge, 2),
                    u = c[0],
                    h = c[1];
                    if (u > 0) for (var d = 1; d <= u; d += 1) l += n.getHeight(e + d);
                    if (h > 0) for (var f = 1; f <= h; f += 1) s += i.getWidth(t + f)
                }
                return {
                    left: r,
                    top: o,
                    width: s,
                    height: l,
                    cell: a,
                    ri: e,
                    ci: t
                }
            }
        },
        {
            key: "getCell",
            value: function(e, t) {
                return this.rows.getCell(e, t)
            }
        },
        {
            key: "getCellTextOrDefault",
            value: function(e, t) {
                var n = this.getCell(e, t);
                return n && n.text ? n.text: ""
            }
        },
        {
            key: "getCellStyle",
            value: function(e, t) {
                var n = this.getCell(e, t);
                return n && void 0 !== n.style ? this.styles[n.style] : null
            }
        },
        {
            key: "getCellStyleOrDefault",
            value: function(e, t) {
                var n = this.styles,
                i = this.rows.getCell(e, t),
                r = i && void 0 !== i.style ? n[i.style] : {};
                return N.merge(this.defaultStyle(), r)
            }
        },
        {
            key: "getSelectedCellStyle",
            value: function() {
                var e = this.selector,
                t = e.ri,
                n = e.ci;
                return this.getCellStyleOrDefault(t, n)
            }
        },
        {
            key: "setCellText",
            value: function(e, t, n, i) {
                var r = this.rows,
                o = this.history,
                a = this.validations;
                "finished" === i ? (r.setCellText(e, t, ""), o.add(this.getData()), r.setCellText(e, t, n)) : (r.setCellText(e, t, n), this.change(this.getData())),
                a.validate(e, t, n)
            }
        },
        {
            key: "freezeIsActive",
            value: function() {
                var e = Ot(this.freeze, 2),
                t = e[0],
                n = e[1];
                return t > 0 || n > 0
            }
        },
        {
            key: "setFreeze",
            value: function(e, t) {
                var n = this;
                this.changeData((function() {
                    n.freeze = [e, t]
                }))
            }
        },
        {
            key: "freezeTotalWidth",
            value: function() {
                return this.cols.sumWidth(0, this.freeze[1])
            }
        },
        {
            key: "freezeTotalHeight",
            value: function() {
                return this.rows.sumHeight(0, this.freeze[0])
            }
        },
        {
            key: "setRowHeight",
            value: function(e, t) {
                var n = this;
                this.changeData((function() {
                    n.rows.setHeight(e, t)
                }))
            }
        },
        {
            key: "setColWidth",
            value: function(e, t) {
                var n = this;
                this.changeData((function() {
                    n.cols.setWidth(e, t)
                }))
            }
        },
        {
            key: "viewHeight",
            value: function() {
                var e = this.settings,
                t = e.view,
                n = e.showToolbar,
                i = t.height();
                return n && (i -= 41),
                i < 400 ? 800 : i
            }
        },
        {
            key: "viewWidth",
            value: function() {
                return this.settings.view.width()
            }
        },
        {
            key: "canvasHeight",
            value: function() {
                return this.settings.canvasHeight || 600
            }
        },
        {
            key: "canvasWidth",
            value: function() {
                return this.settings.canvasWidth || 800
            }
        },
        {
            key: "freezeViewRange",
            value: function() {
                var e = Ot(this.freeze, 2),
                t = e[0],
                n = e[1];
                return new m(0, 0, t - 1, n - 1, this.freezeTotalWidth(), this.freezeTotalHeight())
            }
        },
        {
            key: "exceptRowTotalHeight",
            value: function(e, t) {
                var n = this.exceptRowSet,
                i = this.rows,
                r = Array.from(n),
                o = 0;
                return r.forEach((function(n) {
                    if (n < e || n > t) {
                        var r = i.getHeight(n);
                        o += r
                    }
                })),
                o
            }
        },
        {
            key: "viewRange",
            value: function() {
                var e = this.scroll,
                t = this.rows,
                n = this.cols,
                i = this.freeze,
                r = this.exceptRowSet,
                o = e.ri,
                a = e.ci;
                o <= 0 && (o = Ot(i, 1)[0]),
                a <= 0 && (a = Ot(i, 2)[1]);
                for (var s = 0,
                l = 0,
                c = [t.len, n.len], u = c[0], h = c[1], d = o; d < t.len && (r.has(d) || (l += t.getHeight(d), u = d), !(l > this.viewHeight())); d += 1);
                for (var f = a; f < n.len && (h = f, !((s += n.getWidth(f)) > this.viewWidth())); f += 1);
                return new m(o, a, u, h, s, l)
            }
        },
        {
            key: "viewPrintRange",
            value: function() {
                var e = this.scroll,
                t = this.rows,
                n = this.cols,
                i = this.freeze,
                r = this.exceptRowSet,
                o = e.ri,
                a = e.ci;
                o <= 0 && (o = Ot(i, 1)[0]),
                a <= 0 && (a = Ot(i, 2)[1]);
                for (var s = 0,
                l = 0,
                c = [t.len, n.len], u = c[0], h = c[1], d = this.printElHeight || this.viewHeight(), f = o; f < t.len && (r.has(f) || (l += t.getHeight(f), u = f), !(l > d)); f += 1);
                for (var g = a; g < n.len && (h = g, !((s += n.getWidth(g)) > this.viewWidth())); g += 1);
                return new m(o, a, u, h, s, l)
            }
        },
        {
            key: "eachMergesInView",
            value: function(e, t) {
                this.merges.filterIntersects(e).forEach((function(e) {
                    return t(e)
                }))
            }
        },
        {
            key: "rowEach",
            value: function(e, t, n) {
                for (var i = 0,
                r = this.rows,
                o = this.exceptRowSet,
                a = Tt(o), s = 0, l = 0; l < a.length; l += 1) a[l] < e && (s += 1);
                for (var c = e + s; c <= t + s; c += 1) if (o.has(c)) s += 1;
                else {
                    var u = r.getHeight(c);
                    n(c, i, u),
                    i += u
                }
            }
        },
        {
            key: "colEach",
            value: function(e, t, n) {
                for (var i = 0,
                r = this.cols,
                o = e; o <= t; o += 1) {
                    var a = r.getWidth(o);
                    n(o, i, a),
                    i += a
                }
            }
        },
        {
            key: "defaultStyle",
            value: function() {
                return this.settings.style
            }
        },
        {
            key: "addStyle",
            value: function(e) {
                for (var t = this.styles,
                n = 0; n < t.length; n += 1) {
                    var i = t[n];
                    if (N.equals(i, e)) return n
                }
                return t.push(e),
                t.length - 1
            }
        },
        {
            key: "changeData",
            value: function(e) {
                this.history.add(this.getData()),
                e(),
                this.change(this.getData())
            }
        },
        {
            key: "setData",
            value: function(e) {
                var t = this;
                return Object.keys(e).forEach((function(n) {
                    if ("merges" === n || "rows" === n || "cols" === n || "validations" === n) t[n].setData(e[n]);
                    else if ("freeze" === n) {
                        var i = Ot(c(e[n]), 2),
                        r = i[0],
                        o = i[1];
                        t.freeze = [o, r]
                    } else void 0 !== e[n] && (t[n] = e[n])
                })),
                this
            }
        },
        {
            key: "getData",
            value: function() {
                var e = this.name,
                t = this.freeze,
                n = this.styles,
                i = this.merges,
                r = this.rows,
                o = this.cols,
                a = this.validations,
                s = this.autoFilter,
                l = this.dicts;
                return {
                    name: e,
                    freeze: u(t[1], t[0]),
                    styles: n,
                    merges: i.getData(),
                    rows: r.getData(),
                    cols: o.getData(),
                    validations: a.getData(),
                    autofilter: s.getData(),
                    dicts: l
                }
            }
        },
        {
            key: "changePrintDegree",
            value: function(e) {
                this.printDegree = 0 == e ? 1 : e
            }
        },
        {
            key: "removeCell",
            value: function(e, t) {
                console.log("removeCell:" + e + "," + t),
                this.rows.deleteCell(e, t)
            }
        },
        {
            key: "calcEndRowNum",
            value: function(e, t) {
                for (var n = Number(t), i = this.rows; 0 < e;) i.sumHeight(t, ++n);
                return n
            }
        },
        {
            key: "calcAllHeight",
            value: function(e, t) {
                return this.rows.sumHeight(e, t)
            }
        },
        {
            key: "calcBackendRange",
            value: function() {
                for (var e = this.rows,
                t = this.cols,
                n = this.exceptRowSet,
                i = 0,
                r = 0,
                o = e.len,
                a = t.len,
                s = Number(this.printElHeight), l = Number(this.printElWidth), c = 0; c < e.len && (n.has(c) || (r += e.getHeight(c), o = c), !(r > s)); c += 1);
                for (var u = 0; u < t.len && (a = u, !((i += t.getWidth(u)) > l)); u += 1);
                return new m(0, 0, o, a, i, r)
            }
        },
        {
            key: "changeElHeight",
            value: function(e) {
                this.printElHeight = e
            }
        },
        {
            key: "changeElWidth",
            value: function(e) {
                this.printElWidth = e
            }
        },
        {
            key: "setPrintPaperInfo",
            value: function(e, t) {
                this.printPaperWidth = e,
                this.printPaperHeight = t
            }
        },
        {
            key: "getPrintPaperInfo",
            value: function() {
                var e = this.toolPrintSizeObj.printType;
                return {
                    w: Number(this.printPaperWidth),
                    h: Number(this.printPaperHeight),
                    type: e
                }
            }
        }]) && Et(t.prototype, n),
        i && Et(t, i),
        e
    } ();
    function $t(e, t, n) {
        e.addEventListener(t, n)
    }
    function Kt(e, t, n) {
        e.removeEventListener(t, n)
    }
    function Xt(e) {
        e.xclickoutside && (Kt(window.document.body, "click", e.xclickoutside), delete e.xclickoutside)
    }
    function Yt(e, t) {
        e.xclickoutside = function(n) {
            2 === n.detail || e.contains(n.target) || (t ? t(e) : (e.hide(), Xt(e)))
        },
        $t(window.document.body, "click", e.xclickoutside)
    }
    function Ut(e, t, n) {
        $t(e, "mousemove", t),
        e.xEvtUp = function(i) {
            Kt(e, "mousemove", t),
            Kt(e, "mouseup", e.xEvtUp),
            n(i)
        },
        $t(e, "mouseup", e.xEvtUp)
    }
    function Jt(e, t, n, i) {
        Math.abs(e) > Math.abs(t) ? i(e > 0 ? "right": "left", e, n) : i(t > 0 ? "down": "up", t, n)
    }
    function qt(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function Qt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var en = function() {
        function e() {
            var t = this,
            n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            r = arguments.length > 1 ? arguments[1] : void 0;
            qt(this, e),
            this.moving = !1,
            this.vertical = n,
            this.el = Object(i.b)("div", "".concat(se, "-resizer ").concat(n ? "vertical": "horizontal")).children(this.hoverEl = Object(i.b)("div", "".concat(se, "-resizer-hover")).css("position", "absolute").css("top", "0").css("left", "0").on("mousedown.stop", (function(e) {
                return t.mousedownHandler(e)
            })), this.lineEl = Object(i.b)("div", "".concat(se, "-resizer-line")).hide()).hide(),
            this.cRect = null,
            this.finishedFn = null,
            this.minDistance = r
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "show",
            value: function(e, t) {
                var n = this.moving,
                i = this.vertical,
                r = this.hoverEl,
                o = this.lineEl,
                a = this.el;
                if (!n) {
                    this.cRect = e;
                    var s = e.left,
                    l = e.top,
                    c = e.width,
                    u = e.height;
                    a.offset({
                        left: i ? s + c - 5 : s,
                        top: i ? l: l + u - 5
                    }).show(),
                    r.offset({
                        width: i ? 5 : c,
                        height: i ? u: 5,
                        top: 0,
                        left: 0
                    }),
                    r.removeClass("print-line"),
                    o.offset({
                        width: i ? 0 : t.width,
                        height: i ? t.height: 0
                    })
                }
            }
        },
        {
            key: "printShow",
            value: function(e, t) {
                var n = this.moving,
                i = this.vertical,
                r = this.hoverEl,
                o = this.lineEl,
                a = this.el;
                if (!n) {
                    this.cRect = e;
                    var s = e.left,
                    l = e.top,
                    c = e.width,
                    u = e.height;
                    a.offset({
                        left: i ? s + c - 5 : 0,
                        top: i ? 0 : l
                    }).show(),
                    r.offset({
                        width: i ? 10 : c,
                        height: i ? u: 10,
                        top: i ? l: -6,
                        left: i ? -6 : s
                    }),
                    r.addClass("print-line"),
                    o.offset({
                        width: i ? 0 : t.width,
                        height: i ? t.height: 0
                    })
                }
            }
        },
        {
            key: "hide",
            value: function() {
                this.el.offset({
                    left: 0,
                    top: 0
                }).hide()
            }
        },
        {
            key: "mousedownHandler",
            value: function(e) {
                var t = this,
                n = e,
                i = this.el,
                r = this.lineEl,
                o = this.cRect,
                a = this.vertical,
                s = this.minDistance,
                l = a ? o.width: o.height;
                r.show(),
                Ut(window, (function(e) {
                    t.moving = !0,
                    null !== n && 1 === e.buttons && (a ? (l += e.movementX, !0 === o.print ? i.css("left", "".concat(Number(o.left) + parseInt(l), "px")) : l > s && i.css("left", "".concat(o.left + l, "px"))) : (l += e.movementY, !0 === o.print ? i.css("top", "".concat(Number(o.top) + parseInt(l), "px")) : l > s && i.css("top", "".concat(o.top + l, "px"))), n = e)
                }), (function() {
                    n = null,
                    r.hide(),
                    t.moving = !1,
                    t.hide(),
                    t.finishedFn && (!0 === o.print || l < s && (l = s), t.finishedFn(o, l))
                }))
            }
        }]) && Qt(t.prototype, n),
        r && Qt(t, r),
        e
    } ();
    function tn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var nn = function() {
        function e(t) {
            var n = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.vertical = t,
            this.moveFn = null,
            this.el = Object(i.b)("div", "".concat(se, "-scrollbar ").concat(t ? "vertical": "horizontal")).child(this.contentEl = Object(i.b)("div", "")).on("mousemove.stop", (function() {})).on("scroll.stop", (function(e) {
                var t = e.target,
                i = t.scrollTop,
                r = t.scrollLeft;
                n.moveFn && n.moveFn(n.vertical ? i: r, e)
            }))
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "move",
            value: function(e) {
                return this.el.scroll(e),
                this
            }
        },
        {
            key: "scroll",
            value: function() {
                return this.el.scroll()
            }
        },
        {
            key: "set",
            value: function(e, t) {
                var n = e - 1;
                if (t > n) {
                    var i = this.vertical ? "height": "width";
                    this.el.css(i, "".concat(n - 15, "px")).show(),
                    this.contentEl.css(this.vertical ? "width": "height", "1px").css(i, "".concat(t, "px"))
                } else this.el.hide();
                return this
            }
        },
        {
            key: "bottom",
            value: function(e) {
                this.el.css("bottom", "calc(100% - " + e + "px)")
            }
        }]) && tn(t.prototype, n),
        r && tn(t, r),
        e
    } ();
    function rn(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function on(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function an(e, t, n) {
        return t && on(e.prototype, t),
        n && on(e, n),
        e
    }
    var sn = 10,
    ln = function() {
        function e() {
            rn(this, e),
            this.cornerEl = Object(i.b)("div", "".concat(se, "-selector-corner")),
            this.areaEl = Object(i.b)("div", "".concat(se, "-selector-area")).child(this.cornerEl).hide(),
            this.clipboardEl = Object(i.b)("div", "".concat(se, "-selector-clipboard")).hide(),
            this.autofillEl = Object(i.b)("div", "".concat(se, "-selector-autofill")).hide(),
            this.el = Object(i.b)("div", "".concat(se, "-selector")).css("z-index", "".concat(sn)).children(this.areaEl, this.clipboardEl, this.autofillEl).hide(),
            sn += 1
        }
        return an(e, [{
            key: "setOffset",
            value: function(e) {
                return this.el.offset(e).show(),
                this
            }
        },
        {
            key: "hide",
            value: function() {
                return this.el.hide(),
                this
            }
        },
        {
            key: "setAreaOffset",
            value: function(e) {
                var t = e.left,
                n = e.top,
                i = e.width,
                r = e.height;
                this.areaEl.offset({
                    width: i - 3 + .8,
                    height: r - 3 + .8,
                    left: t - .8,
                    top: n - .8
                }).show()
            }
        },
        {
            key: "setClipboardOffset",
            value: function(e) {
                var t = e.left,
                n = e.top,
                i = e.width,
                r = e.height;
                this.clipboardEl.offset({
                    left: t,
                    top: n,
                    width: i - 5,
                    height: r - 5
                })
            }
        },
        {
            key: "showAutofill",
            value: function(e) {
                var t = e.left,
                n = e.top,
                i = e.width,
                r = e.height;
                this.autofillEl.offset({
                    width: i - 3,
                    height: r - 3,
                    left: t,
                    top: n
                }).show()
            }
        },
        {
            key: "hideAutofill",
            value: function() {
                this.autofillEl.hide()
            }
        },
        {
            key: "showClipboard",
            value: function() {
                this.clipboardEl.show()
            }
        },
        {
            key: "hideClipboard",
            value: function() {
                this.clipboardEl.hide()
            }
        }]),
        e
    } ();
    function cn(e) {
        var t = this.data,
        n = e.left,
        i = e.top,
        r = e.width,
        o = e.height,
        a = e.scroll,
        s = e.l,
        l = e.t,
        c = t.freezeTotalWidth(),
        u = t.freezeTotalHeight(),
        h = n - c;
        c > s && (h -= a.x);
        var d = i - u;
        return u > l && (d -= a.y),
        {
            left: h,
            top: d,
            width: r,
            height: o
        }
    }
    function un(e) {
        var t = this.data,
        n = e.left,
        i = e.width,
        r = e.height,
        o = e.l,
        a = e.t,
        s = e.scroll,
        l = t.freezeTotalWidth(),
        c = n - l;
        return l > o && (c -= s.x),
        {
            left: c,
            top: a,
            width: i,
            height: r
        }
    }
    function hn(e) {
        var t = this.data,
        n = e.top,
        i = e.width,
        r = e.height,
        o = e.l,
        a = e.t,
        s = e.scroll,
        l = t.freezeTotalHeight(),
        c = n - l;
        return l > a && (c -= s.y),
        {
            left: o,
            top: c,
            width: i,
            height: r
        }
    }
    function dn(e) {
        this.br.setAreaOffset(cn.call(this, e))
    }
    function fn(e) {
        this.tl.setAreaOffset(e)
    }
    function gn(e) {
        this.t.setAreaOffset(un.call(this, e))
    }
    function pn(e) {
        this.l.setAreaOffset(hn.call(this, e))
    }
    function mn(e) {
        this.l.setClipboardOffset(hn.call(this, e))
    }
    function vn(e) {
        this.br.setClipboardOffset(cn.call(this, e))
    }
    function yn(e) {
        this.tl.setClipboardOffset(e)
    }
    function bn(e) {
        this.t.setClipboardOffset(un.call(this, e))
    }
    function Cn(e) {
        dn.call(this, e),
        fn.call(this, e),
        gn.call(this, e),
        pn.call(this, e)
    }
    function In(e) {
        vn.call(this, e),
        yn.call(this, e),
        bn.call(this, e),
        mn.call(this, e)
    }
    var wn = function() {
        function e(t) {
            rn(this, e),
            this.data = t,
            this.br = new ln,
            this.t = new ln,
            this.l = new ln,
            this.tl = new ln,
            this.br.el.show(),
            this.offset = null,
            this.areaOffset = null,
            this.indexes = null,
            this.range = null,
            this.arange = null,
            this.el = Object(i.b)("div", "".concat(se, "-selectors")).children(this.tl.el, this.t.el, this.l.el, this.br.el).hide(),
            this.lastri = -1,
            this.lastci = -1,
            sn += 1,
            this.cellRect = {
                top: 25,
                left: 60,
                ci: 0,
                ri: 0
            }
        }
        return an(e, [{
            key: "setCellRect",
            value: function(e) {
                this.cellRect = e
            }
        },
        {
            key: "hide",
            value: function() {
                this.el.hide()
            }
        },
        {
            key: "resetOffset",
            value: function() {
                var e = this.data,
                t = this.tl,
                n = this.t,
                i = this.l,
                r = this.br,
                o = e.freezeTotalHeight(),
                a = e.freezeTotalWidth();
                o > 0 || a > 0 ? (t.setOffset({
                    width: a,
                    height: o
                }), n.setOffset({
                    left: a,
                    height: o
                }), i.setOffset({
                    top: o,
                    width: a
                }), r.setOffset({
                    left: a,
                    top: o
                })) : (t.hide(), n.hide(), i.hide(), r.setOffset({
                    left: 0,
                    top: 0
                }))
            }
        },
        {
            key: "resetAreaOffset",
            value: function() {
                var e = this.data.getSelectedRect(),
                t = this.data.getClipboardRect();
                Cn.call(this, e),
                In.call(this, t),
                this.resetOffset()
            }
        },
        {
            key: "resetBRTAreaOffset",
            value: function() {
                var e = this.data.getSelectedRect(),
                t = this.data.getClipboardRect();
                dn.call(this, e),
                gn.call(this, e),
                vn.call(this, t),
                bn.call(this, t),
                this.resetOffset()
            }
        },
        {
            key: "resetBRLAreaOffset",
            value: function() {
                var e = this.data.getSelectedRect(),
                t = this.data.getClipboardRect();
                dn.call(this, e),
                pn.call(this, e),
                vn.call(this, t),
                mn.call(this, t),
                this.resetOffset()
            }
        },
        {
            key: "set",
            value: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = this.data,
                r = i.calSelectedRangeByStart(e, t),
                o = r.sri,
                a = r.sci;
                if (n) {
                    var s = e,
                    l = t;
                    e < 0 && (s = 0),
                    t < 0 && (l = 0),
                    i.selector.setIndexes(s, l),
                    this.indexes = [s, l]
                }
                this.moveIndexes = [o, a],
                this.range = r,
                this.resetAreaOffset(),
                this.el.show()
            }
        },
        {
            key: "setEnd",
            value: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = this.data,
                r = this.lastri,
                o = this.lastci;
                if (n) {
                    if (e === r && t === o) return;
                    this.lastri = e,
                    this.lastci = t
                }
                this.range = i.calSelectedRangeByEnd(e, t),
                Cn.call(this, this.data.getSelectedRect())
            }
        },
        {
            key: "reset",
            value: function() {
                var e = this.data.selector.range,
                t = e.eri,
                n = e.eci;
                this.setEnd(t, n)
            }
        },
        {
            key: "showAutofill",
            value: function(e, t) {
                if ( - 1 !== e || -1 !== t) {
                    var n = this.range,
                    i = n.sri,
                    r = n.sci,
                    o = n.eri,
                    a = n.eci,
                    s = e,
                    l = t,
                    c = i - e,
                    u = o - e,
                    h = a - t;
                    if (r - t > 0) this.arange = new m(i, l, o, r - 1);
                    else if (c > 0) this.arange = new m(s, r, i - 1, a);
                    else if (h < 0) this.arange = new m(i, a + 1, o, l);
                    else {
                        if (! (u < 0)) return void(this.arange = null);
                        this.arange = new m(o + 1, r, s, a)
                    }
                    if (null !== this.arange) {
                        var d = this.data.getRect(this.arange);
                        d.width += 2,
                        d.height += 2;
                        var f = this.br,
                        g = this.l,
                        p = this.t,
                        v = this.tl;
                        f.showAutofill(cn.call(this, d)),
                        g.showAutofill(hn.call(this, d)),
                        p.showAutofill(un.call(this, d)),
                        v.showAutofill(d)
                    }
                }
            }
        },
        {
            key: "hideAutofill",
            value: function() {
                var e = this; ["br", "l", "t", "tl"].forEach((function(t) {
                    e[t].hideAutofill()
                }))
            }
        },
        {
            key: "showClipboard",
            value: function() {
                var e = this,
                t = this.data.getClipboardRect();
                In.call(this, t),
                ["br", "l", "t", "tl"].forEach((function(t) {
                    e[t].showClipboard()
                }))
            }
        },
        {
            key: "hideClipboard",
            value: function() {
                var e = this; ["br", "l", "t", "tl"].forEach((function(t) {
                    e[t].hideClipboard()
                }))
            }
        }]),
        e
    } ();
    function xn(e) {
        return function(e) {
            if (Array.isArray(e)) return An(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return An(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return An(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function An(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function _n(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function Sn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function kn(e) {
        e.preventDefault(),
        e.stopPropagation();
        var t = this.filterItems;
        t.length <= 0 || (this.itemIndex >= 0 && t[this.itemIndex].toggle(), this.itemIndex -= 1, this.itemIndex < 0 && (this.itemIndex = t.length - 1), t[this.itemIndex].toggle())
    }
    function Ln(e) {
        e.stopPropagation();
        var t = this.filterItems;
        t.length <= 0 || (this.itemIndex >= 0 && t[this.itemIndex].toggle(), this.itemIndex += 1, this.itemIndex > t.length - 1 && (this.itemIndex = 0), t[this.itemIndex].toggle())
    }
    function Tn(e) {
        e.preventDefault();
        var t = this.filterItems;
        t.length <= 0 || (e.stopPropagation(), this.itemIndex < 0 && (this.itemIndex = 0), t[this.itemIndex].el.click(), this.hide())
    }
    function Rn(e) {
        var t = e.keyCode;
        switch (e.ctrlKey && e.stopPropagation(), t) {
        case 37:
            e.stopPropagation();
            break;
        case 38:
            kn.call(this, e);
            break;
        case 39:
            e.stopPropagation();
            break;
        case 40:
            Ln.call(this, e);
            break;
        case 13:
        case 9:
            Tn.call(this, e);
            break;
        default:
            e.stopPropagation()
        }
    }
    var Mn = function() {
        function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "200px";
            _n(this, e),
            this.filterItems = [],
            this.items = t,
            this.el = Object(i.b)("div", "".concat(se, "-suggest")).css("width", r).hide(),
            this.itemClick = n,
            this.itemIndex = -1
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "setOffset",
            value: function(e) {
                this.el.cssRemoveKeys("top", "bottom").offset(e)
            }
        },
        {
            key: "hide",
            value: function() {
                var e = this.el;
                this.filterItems = [],
                this.itemIndex = -1,
                e.hide(),
                Xt(this.el.parent())
            }
        },
        {
            key: "setItems",
            value: function(e) {
                this.items = e
            }
        },
        {
            key: "search",
            value: function(e) {
                var t, n = this,
                r = this.items;
                if (/^\s*$/.test(e) || (r = r.filter((function(t) {
                    return (t.key || t).startsWith(e.toUpperCase())
                }))), r = r.map((function(e) {
                    var t = e.title;
                    t ? "function" == typeof t && (t = t()) : t = e;
                    var r = Object(i.b)("div", "".concat(se, "-item")).child(t).on("click.stop", (function() {
                        n.itemClick(e),
                        n.hide()
                    }));
                    return e.label && r.child(Object(i.b)("div", "label").html(e.label)),
                    r
                })), this.filterItems = r, !(r.length <= 0)) {
                    var o = this.el; (t = o.html("")).children.apply(t, xn(r)).show(),
                    Yt(o.parent(), (function() {
                        n.hide()
                    }))
                }
            }
        },
        {
            key: "bindInputEvents",
            value: function(e) {
                var t = this;
                e.on("keydown", (function(e) {
                    return Rn.call(t, e)
                }))
            }
        }]) && Sn(t.prototype, n),
        r && Sn(t, r),
        e
    } ();
    function Pn(e) {
        return (Pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function En(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function On(e, t) {
        return (On = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Nn(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Bn(e);
            if (t) {
                var r = Bn(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Dn(this, n)
        }
    }
    function Dn(e, t) {
        return ! t || "object" !== Pn(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Bn(e) {
        return (Bn = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var jn = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && On(e, t)
        } (a, e);
        var t, n, r, o = Nn(a);
        function a(e) {
            var t;
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, a),
            (t = o.call(this, "div", "".concat(se, "-icon"))).iconNameEl = Object(i.b)("div", "".concat(se, "-icon-img ").concat(e)),
            t.child(t.iconNameEl),
            t
        }
        return t = a,
        (n = [{
            key: "setName",
            value: function(e) {
                this.iconNameEl.className("".concat(se, "-icon-img ").concat(e))
            }
        }]) && En(t.prototype, n),
        r && En(t, r),
        a
    } (i.a);
    function Fn(e) {
        return function(e) {
            if (Array.isArray(e)) return Hn(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Hn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hn(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Hn(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Wn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Vn(e, t) {
        e.setMonth(e.getMonth() + t)
    }
    function Gn(e, t) {
        var n = new Date(e);
        return n.setDate(t - e.getDay() + 1),
        n
    }
    var zn = function() {
        function e(t) {
            var n, r = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.value = t,
            this.cvalue = new Date(t),
            this.headerLeftEl = Object(i.b)("div", "calendar-header-left"),
            this.bodyEl = Object(i.b)("tbody", ""),
            this.buildAll(),
            this.el = Object(i.b)("div", "x-spreadsheet-calendar").children(Object(i.b)("div", "calendar-header").children(this.headerLeftEl, Object(i.b)("div", "calendar-header-right").children(Object(i.b)("a", "calendar-prev").on("click.stop", (function() {
                return r.prev()
            })).child(new jn("chevron-left")), Object(i.b)("a", "calendar-next").on("click.stop", (function() {
                return r.next()
            })).child(new jn("chevron-right")))), Object(i.b)("table", "calendar-body").children(Object(i.b)("thead", "").child((n = Object(i.b)("tr", "")).children.apply(n, Fn(Z("calendar.weeks").map((function(e) {
                return Object(i.b)("th", "cell").child(e)
            }))))), this.bodyEl)),
            this.selectChange = function() {}
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "setValue",
            value: function(e) {
                this.value = e,
                this.cvalue = new Date(e),
                this.buildAll()
            }
        },
        {
            key: "prev",
            value: function() {
                Vn(this.value, -1),
                this.buildAll()
            }
        },
        {
            key: "next",
            value: function() {
                Vn(this.value, 1),
                this.buildAll()
            }
        },
        {
            key: "buildAll",
            value: function() {
                this.buildHeaderLeft(),
                this.buildBody()
            }
        },
        {
            key: "buildHeaderLeft",
            value: function() {
                var e = this.value;
                this.headerLeftEl.html("".concat(Z("calendar.months")[e.getMonth()], " ").concat(e.getFullYear()))
            }
        },
        {
            key: "buildBody",
            value: function() {
                var e, t = this,
                n = this.value,
                r = this.cvalue,
                o = this.bodyEl,
                a = function(e, t, n) {
                    for (var i = new Date(e, t, 1, 23, 59, 59), r = [[], [], [], [], [], []], o = 0; o < 6; o += 1) for (var a = 0; a < 7; a += 1) {
                        var s = Gn(i, 7 * o + a),
                        l = s.getMonth() !== t,
                        c = s.getMonth() === n.getMonth() && s.getDate() === n.getDate();
                        r[o][a] = {
                            d: s,
                            disabled: l,
                            active: c
                        }
                    }
                    return r
                } (n.getFullYear(), n.getMonth(), r).map((function(e) {
                    var n, r = e.map((function(e) {
                        var n = "cell";
                        return e.disabled && (n += " disabled"),
                        e.active && (n += " active"),
                        Object(i.b)("td", "").child(Object(i.b)("div", n).on("click.stop", (function() {
                            t.selectChange(e.d)
                        })).child(e.d.getDate().toString()))
                    }));
                    return (n = Object(i.b)("tr", "")).children.apply(n, Fn(r))
                })); (e = o.html("")).children.apply(e, Fn(a))
            }
        }]) && Wn(t.prototype, n),
        r && Wn(t, r),
        e
    } ();
    function Zn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var $n = function() {
        function e() { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.calendar = new zn(new Date),
            this.el = Object(i.b)("div", "".concat(se, "-datepicker")).child(this.calendar.el).hide()
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "setValue",
            value: function(e) {
                var t = this.calendar;
                return "string" == typeof e ? /^\d{4}-\d{1,2}-\d{1,2}$/.test(e) && t.setValue(new Date(e.replace(new RegExp("-", "g"), "/"))) : e instanceof Date && t.setValue(e),
                this
            }
        },
        {
            key: "change",
            value: function(e) {
                var t = this;
                this.calendar.selectChange = function(n) {
                    e(n),
                    t.hide()
                }
            }
        },
        {
            key: "show",
            value: function() {
                this.el.show()
            }
        },
        {
            key: "hide",
            value: function() {
                this.el.hide()
            }
        }]) && Zn(t.prototype, n),
        r && Zn(t, r),
        e
    } ();
    function Kn(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function Xn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Yn() {
        if (!/^\s*$/.test(this.inputText)) {
            var e = this.textlineEl,
            t = this.textEl,
            n = this.areaOffset,
            i = e.offset().width + 9,
            r = this.viewFn().width - n.left - 9;
            if (i > n.width) {
                var o = i;
                if (i > r) {
                    o = r;
                    var a = parseInt(i / r, 10);
                    a += i % r > 0 ? 1 : 0,
                    (a *= this.rowHeight) > n.height && t.css("height", "".concat(a, "px"))
                }
                t.css("width", "".concat(o, "px"))
            }
        }
    }
    function Un(e) {
        var t = e.target.value,
        n = this.suggest,
        i = this.textlineEl,
        r = this.validator,
        o = this.cell;
        if (null !== o) if ("editable" in o && 1 == o.editable || void 0 === o.editable) {
            if (this.inputText = t, r)"list" === r.type ? n.search(t) : n.hide();
            else {
                var a = t.lastIndexOf("="); - 1 !== a ? n.search(t.substring(a + 1)) : n.hide()
            }
            i.html(t),
            Yn.call(this),
            this.change("input", t)
        } else e.target.value = "";
        else {
            if (this.inputText = t, r)"list" === r.type ? n.search(t) : n.hide();
            else {
                var s = t.lastIndexOf("="); - 1 !== s ? n.search(t.substring(s + 1)) : n.hide()
            }
            i.html(t),
            Yn.call(this),
            this.change("input", t)
        }
    }
    function Jn(e) {
        var t = this.textEl.el;
        setTimeout((function() {
            t.focus(),
            t.setSelectionRange(e, e)
        }), 0)
    }
    function qn(e, t) {
        var n = this.textEl,
        i = this.textlineEl;
        n.el.blur(),
        n.val(e),
        i.html(e),
        Jn.call(this, t)
    }
    function Qn(e) {
        var t = this.inputText,
        n = this.validator,
        i = 0;
        if (n && "list" === n.type) this.inputText = e,
        i = this.inputText.length;
        else {
            var r = t.lastIndexOf("="),
            o = t.substring(0, r + 1),
            a = t.substring(r + 1);
            a = -1 !== a.indexOf(")") ? a.substring(a.indexOf(")")) : "",
            this.inputText = "".concat(o + e.key, "("),
            i = this.inputText.length,
            this.inputText += ")".concat(a)
        }
        qn.call(this, this.inputText, i)
    }
    function ei() {
        this.suggest.setItems(this.formulas)
    }
    function ti(e) {
        var t = e.getMonth() + 1,
        n = e.getDate();
        return t < 10 && (t = "0".concat(t)),
        n < 10 && (n = "0".concat(n)),
        "".concat(e.getFullYear(), "-").concat(t, "-").concat(n)
    }
    var ni = function() {
        function e(t, n, r) {
            var o = this,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            Kn(this, e),
            this.viewFn = n,
            this.rowHeight = r,
            this.formulas = t,
            this.isReadOnly = a,
            this.suggest = new Mn(t, (function(e) {
                Qn.call(o, e)
            })),
            this.datepicker = new $n,
            this.datepicker.change((function(e) {
                o.setText(ti(e)),
                o.clear()
            })),
            this.areaEl = Object(i.b)("div", "".concat(se, "-editor-area")).children(this.textEl = Object(i.b)("textarea", "").on("input", (function(e) {
                return Un.call(o, e)
            })), this.textlineEl = Object(i.b)("div", "textline"), this.suggest.el, this.datepicker.el).on("mousemove.stop", (function() {})).on("mousedown.stop", (function() {})),
            this.el = Object(i.b)("div", "".concat(se, "-editor")).child(this.areaEl).hide(),
            this.suggest.bindInputEvents(this.textEl),
            this.areaOffset = null,
            this.freeze = {
                w: 0,
                h: 0
            },
            this.cell = null,
            this.inputText = "",
            this.change = function() {}
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "setFreezeLengths",
            value: function(e, t) {
                this.freeze.w = e,
                this.freeze.h = t
            }
        },
        {
            key: "clear",
            value: function() {
                "" !== this.inputText && this.change("finished", this.inputText),
                this.cell = null,
                this.areaOffset = null,
                this.inputText = "",
                this.el.hide(),
                this.textEl.val(""),
                this.textlineEl.html(""),
                ei.call(this),
                this.datepicker.hide()
            }
        },
        {
            key: "setOffset",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                n = this.textEl,
                i = this.areaEl,
                r = this.suggest,
                o = this.freeze,
                a = this.el;
                if (e) {
                    this.areaOffset = e;
                    var s = e.left,
                    l = e.top,
                    c = e.width,
                    u = e.height,
                    h = e.l,
                    d = e.t,
                    f = {
                        left: 0,
                        top: 0
                    };
                    o.w > h && o.h > d || (o.w < h && o.h < d ? (f.left = o.w, f.top = o.h) : o.w > h ? f.top = o.h: o.h > d && (f.left = o.w)),
                    a.offset(f),
                    i.offset({
                        left: s - f.left - .8,
                        top: l - f.top - .8
                    }),
                    n.offset({
                        width: c - 9 + .8,
                        height: u - 3 + .8
                    });
                    var g = {
                        left: 0
                    };
                    g[t] = u,
                    r.setOffset(g),
                    r.hide()
                }
            }
        },
        {
            key: "setCell",
            value: function(e, t) {
                if (! (this.isReadOnly || e && e.readOnly)) {
                    var n = this.el,
                    i = this.datepicker,
                    r = this.suggest;
                    n.show(),
                    this.cell = e;
                    var o = e && e.text;
                    if (o && 0 !== o.trim().length || (o = ""), this.setText(o), this.validator = t, t) {
                        var a = t.type;
                        "date" === a && (i.show(), /^\s*$/.test(text) || i.setValue(text)),
                        "list" === a && (r.setItems(t.values()), r.search(""))
                    }
                }
            }
        },
        {
            key: "setText",
            value: function(e) {
                this.inputText = e,
                qn.call(this, e, e.length),
                Yn.call(this)
            }
        }]) && Xn(t.prototype, n),
        r && Xn(t, r),
        e
    } ();
    function ii(e) {
        return function(e) {
            if (Array.isArray(e)) return ri(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return ri(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ri(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function ri(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function oi(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function ai(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var si = [{
        key: "copy",
        title: $("contextmenu.copy"),
        label: "Ctrl+C"
    },
    {
        key: "cut",
        title: $("contextmenu.cut"),
        label: "Ctrl+X"
    },
    {
        key: "paste",
        title: $("contextmenu.paste"),
        label: "Ctrl+V"
    },
    {
        key: "paste-value",
        title: $("contextmenu.pasteValue"),
        label: "Ctrl+Shift+V"
    },
    {
        key: "paste-format",
        title: $("contextmenu.pasteFormat"),
        label: "Ctrl+Alt+V"
    },
    {
        key: "divider"
    },
    {
        key: "insert-row",
        title: $("contextmenu.insertRow")
    },
    {
        key: "insert-column",
        title: $("contextmenu.insertColumn")
    },
    {
        key: "divider"
    },
    {
        key: "delete-row",
        title: $("contextmenu.deleteRow")
    },
    {
        key: "delete-column",
        title: $("contextmenu.deleteColumn")
    },
    {
        key: "delete-cell-text",
        title: $("contextmenu.deleteCellText")
    },
    {
        key: "divider"
    },
    {
        key: "validation",
        title: $("contextmenu.validation")
    },
    {
        key: "divider"
    },
    {
        key: "cancleBackend",
        title: $("contextmenu.cancleBackend")
    }];
    function li(e) {
        var t = this;
        return "divider" === e.key ? Object(i.b)("div", "".concat(se, "-item divider")) : Object(i.b)("div", "".concat(se, "-item")).on("click", (function() {
            t.itemClick(e.key),
            t.hide()
        })).children(e.title(), Object(i.b)("div", "label").child(e.label || ""))
    }
    function ci() {
        var e = this;
        return si.map((function(t) {
            return li.call(e, t)
        }))
    }
    var ui = function() {
        function e(t) {
            var n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            oi(this, e),
            this.el = (n = Object(i.b)("div", "".concat(se, "-contextmenu"))).children.apply(n, ii(ci.call(this))).hide().addClass("ty-container-scroll"),
            this.viewFn = t,
            this.itemClick = function() {},
            this.isHide = r
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "hide",
            value: function() {
                var e = this.el;
                e.hide(),
                Xt(e)
            }
        },
        {
            key: "setPosition",
            value: function(e, t) {
                if (!this.isHide) {
                    var n = this.el,
                    i = n.show().offset().width,
                    r = this.viewFn(),
                    o = t + 5,
                    a = e;
                    o + 280 > r.height && (o -= 280) < 25 && (this.el.css("height", "".concat(280 + o - 25 - 5, "px")), o = 25),
                    25 !== o && this.el.css("height", "".concat(280, "px")),
                    r.width - e <= i && (a -= i),
                    n.offset({
                        left: a,
                        top: o
                    }),
                    Yt(n)
                }
            }
        }]) && ai(t.prototype, n),
        r && ai(t, r),
        e
    } ();
    function hi(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function di(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var fi = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            hi(this, e),
            this.size = n;
            var o = Object(i.b)("input").attr("type", "number").attr("title", r).attr("placeholder", r).val(n).on("change", this.change);
            t && (o.el.style.width = "50px", o.el.style.height = "22px");
            var a = Object(i.b)("div", "ty-bar-input").children(Object(i.b)("div", "btn-input").child(o));
            this.el = a,
            this.input = o,
            this.change = function() {}
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "initSize",
            value: function(e) {
                this.size = e
            }
        },
        {
            key: "change",
            value: function(e) {
                console.log(e, "----------")
            }
        },
        {
            key: "setState",
            value: function(e) {
                this.el.disabled(e)
            }
        }]) && di(t.prototype, n),
        r && di(t, r),
        e
    } ();
    function gi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var pi = function() {
        function e(t, n, i) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.tip = Z("toolbar.".concat(t.replace(/-[a-z]/g, (function(e) {
                return e[1].toUpperCase()
            })))),
            this.tag = t,
            this.shortcut = n,
            this.value = i,
            this.el = this.element(),
            this.change = function() {},
            this.save = function() {}
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "element",
            value: function() {
                var e = this.tip;
                return Object(i.b)("div", "".concat(se, "-toolbar-btn")).on("mouseenter", (function(t) { !
                    function(e, t) {
                        if (!t.classList.contains("active")) {
                            var n = t.getBoundingClientRect(),
                            r = n.left,
                            o = n.top,
                            a = n.width,
                            s = n.height,
                            l = Object(i.b)("div", "".concat(se, "-tooltip")).html(e).show();
                            document.body.appendChild(l.el);
                            var c = l.box();
                            l.css("left", "".concat(r + a / 2 - c.width / 2, "px")).css("top", "".concat(o + s + 2, "px")),
                            $t(t, "mouseleave", (function() {
                                document.body.contains(l.el) && document.body.removeChild(l.el)
                            })),
                            $t(t, "click", (function() {
                                document.body.contains(l.el) && document.body.removeChild(l.el)
                            }))
                        }
                    } (e, t.target)
                })).attr("data-tooltip", e)
            }
        },
        {
            key: "setState",
            value: function() {}
        }]) && gi(t.prototype, n),
        r && gi(t, r),
        e
    } ();
    function mi(e) {
        return (mi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function vi(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function yi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function bi(e, t, n) {
        return (bi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get: function(e, t, n) {
            var i = function(e, t) {
                for (; ! Object.prototype.hasOwnProperty.call(e, t) && null !== (e = xi(e)););
                return e
            } (e, t);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, t);
                return r.get ? r.get.call(n) : r.value
            }
        })(e, t, n || e)
    }
    function Ci(e, t) {
        return (Ci = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Ii(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = xi(e);
            if (t) {
                var r = xi(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return wi(this, n)
        }
    }
    function wi(e, t) {
        return ! t || "object" !== mi(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function xi(e) {
        return (xi = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Ai = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Ci(e, t)
        } (o, e);
        var t, n, i, r = Ii(o);
        function o() {
            return vi(this, o),
            r.apply(this, arguments)
        }
        return t = o,
        (n = [{
            key: "dropdown",
            value: function() {}
        },
        {
            key: "getValue",
            value: function(e) {
                return e
            }
        },
        {
            key: "element",
            value: function() {
                var e = this,
                t = this.tag;
                return this.dd = this.dropdown(),
                this.dd.change = function(n) {
                    return e.change(t, e.getValue(n))
                },
                bi(xi(o.prototype), "element", this).call(this).child(this.dd)
            }
        },
        {
            key: "setState",
            value: function(e) {
                e && (this.value = e, this.dd.setTitle(e))
            }
        }]) && yi(t.prototype, n),
        i && yi(t, i),
        o
    } (pi);
    function _i(e) {
        return (_i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Si(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function ki(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Li(e, t) {
        return (Li = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Ti(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Mi(e);
            if (t) {
                var r = Mi(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Ri(this, n)
        }
    }
    function Ri(e, t) {
        return ! t || "object" !== _i(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Mi(e) {
        return (Mi = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Pi = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Li(e, t)
        } (a, e);
        var t, n, r, o = Ti(a);
        function a(e, t, n, r) {
            var s, l;
            Si(this, a),
            (l = o.call(this, "div", "".concat(se, "-dropdown ").concat(r))).title = e,
            l.change = function() {},
            "string" == typeof e ? l.title = Object(i.b)("div", "".concat(se, "-dropdown-title")).child(e) : n && l.title.addClass("arrow-left");
            for (var c = arguments.length,
            u = new Array(c > 4 ? c - 4 : 0), h = 4; h < c; h++) u[h - 4] = arguments[h];
            return l.contentEl = (s = Object(i.b)("div", "".concat(se, "-dropdown-content"))).children.apply(s, u).css("width", t).hide(),
            l.headerEl = Object(i.b)("div", "".concat(se, "-dropdown-header")),
            l.headerEl.on("click", (function() {
                "block" !== l.contentEl.css("display") ? l.show() : l.hide()
            })).children(l.title, n ? Object(i.b)("div", "".concat(se, "-icon arrow-right")).child(Object(i.b)("div", "".concat(se, "-icon-img arrow-down"))) : ""),
            l.children(l.headerEl, l.contentEl),
            l
        }
        return t = a,
        (n = [{
            key: "setTitle",
            value: function(e) {
                this.title.html(e),
                this.hide()
            }
        },
        {
            key: "show",
            value: function() {
                var e = this;
                this.contentEl.show(),
                this.parent().active(),
                Yt(this.parent(), (function() {
                    e.hide()
                }))
            }
        },
        {
            key: "hide",
            value: function() {
                this.parent().active(!1),
                this.contentEl.hide(),
                Xt(this.parent())
            }
        }]) && ki(t.prototype, n),
        r && ki(t, r),
        a
    } (i.a);
    function Ei(e) {
        return (Ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Oi(e) {
        return function(e) {
            if (Array.isArray(e)) return Ni(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ni(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ni(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Ni(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Di(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Bi(e, t) {
        return (Bi = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function ji(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Hi(e);
            if (t) {
                var r = Hi(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Fi(this, n)
        }
    }
    function Fi(e, t) {
        return ! t || "object" !== Ei(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Hi(e) {
        return (Hi = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Wi = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Bi(e, t)
        } (a, e);
        var t, n, r, o = ji(a);
        function a(e, t) {
            var n; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, a);
            var r = new jn("align-".concat(t)),
            s = e.map((function(e) {
                return (t = "align-".concat(e), Object(i.b)("div", "".concat(se, "-item")).child(new jn(t))).on("click", (function() {
                    n.setTitle(e),
                    n.change(e)
                }));
                var t
            }));
            return n = o.call.apply(o, [this, r, "auto", !0, "bottom-left"].concat(Oi(s)))
        }
        return t = a,
        (n = [{
            key: "setTitle",
            value: function(e) {
                this.title.setName("align-".concat(e)),
                this.hide()
            }
        }]) && Di(t.prototype, n),
        r && Di(t, r),
        a
    } (Pi);
    function Vi(e) {
        return (Vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Gi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function zi(e, t) {
        return (zi = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Zi(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Ki(e);
            if (t) {
                var r = Ki(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return $i(this, n)
        }
    }
    function $i(e, t) {
        return ! t || "object" !== Vi(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Ki(e) {
        return (Ki = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Xi = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && zi(e, t)
        } (o, e);
        var t, n, i, r = Zi(o);
        function o(e) {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "align", "", e)
        }
        return t = o,
        (n = [{
            key: "dropdown",
            value: function() {
                var e = this.value;
                return new Wi(["left", "center", "right"], e)
            }
        }]) && Gi(t.prototype, n),
        i && Gi(t, i),
        o
    } (Ai);
    function Yi(e) {
        return (Yi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Ui(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Ji(e, t) {
        return (Ji = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function qi(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = er(e);
            if (t) {
                var r = er(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Qi(this, n)
        }
    }
    function Qi(e, t) {
        return ! t || "object" !== Yi(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function er(e) {
        return (er = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var tr = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Ji(e, t)
        } (o, e);
        var t, n, i, r = qi(o);
        function o(e) {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "valign", "", e)
        }
        return t = o,
        (n = [{
            key: "dropdown",
            value: function() {
                var e = this.value;
                return new Wi(["top", "middle", "bottom"], e)
            }
        }]) && Ui(t.prototype, n),
        i && Ui(t, i),
        o
    } (Ai);
    function nr(e) {
        return (nr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function ir(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function rr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function or(e, t, n) {
        return (or = "undefined" != typeof Reflect && Reflect.get ? Reflect.get: function(e, t, n) {
            var i = function(e, t) {
                for (; ! Object.prototype.hasOwnProperty.call(e, t) && null !== (e = cr(e)););
                return e
            } (e, t);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, t);
                return r.get ? r.get.call(n) : r.value
            }
        })(e, t, n || e)
    }
    function ar(e, t) {
        return (ar = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function sr(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = cr(e);
            if (t) {
                var r = cr(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return lr(this, n)
        }
    }
    function lr(e, t) {
        return ! t || "object" !== nr(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function cr(e) {
        return (cr = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var ur = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && ar(e, t)
        } (o, e);
        var t, n, i, r = sr(o);
        function o() {
            return ir(this, o),
            r.apply(this, arguments)
        }
        return t = o,
        (n = [{
            key: "element",
            value: function() {
                var e = this,
                t = this.tag;
                return or(cr(o.prototype), "element", this).call(this).child(new jn(t)).on("click", (function() {
                    return e.click()
                }))
            }
        },
        {
            key: "click",
            value: function() {
                this.change(this.tag, this.toggle())
            }
        },
        {
            key: "setState",
            value: function(e) {
                this.el.active(e)
            }
        },
        {
            key: "toggle",
            value: function() {
                return this.el.toggle()
            }
        },
        {
            key: "active",
            value: function() {
                return this.el.hasClass("active")
            }
        }]) && rr(t.prototype, n),
        i && rr(t, i),
        o
    } (pi);
    function hr(e) {
        return (hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function dr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function fr(e, t) {
        return (fr = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function gr(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = mr(e);
            if (t) {
                var r = mr(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return pr(this, n)
        }
    }
    function pr(e, t) {
        return ! t || "object" !== hr(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function mr(e) {
        return (mr = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var vr = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && fr(e, t)
        } (o, e);
        var t, n, i, r = gr(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "autofilter")
        }
        return t = o,
        (n = [{
            key: "setState",
            value: function() {}
        }]) && dr(t.prototype, n),
        i && dr(t, i),
        o
    } (ur);
    function yr(e) {
        return (yr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function br(e, t) {
        return (br = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Cr(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = wr(e);
            if (t) {
                var r = wr(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Ir(this, n)
        }
    }
    function Ir(e, t) {
        return ! t || "object" !== yr(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function wr(e) {
        return (wr = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var xr = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && br(e, t)
        } (n, e);
        var t = Cr(n);
        function n() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n),
            t.call(this, "font-bold", "Ctrl+B")
        }
        return n
    } (ur);
    function Ar(e) {
        return (Ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function _r(e, t) {
        return (_r = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Sr(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Lr(e);
            if (t) {
                var r = Lr(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return kr(this, n)
        }
    }
    function kr(e, t) {
        return ! t || "object" !== Ar(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Lr(e) {
        return (Lr = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Tr = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && _r(e, t)
        } (n, e);
        var t = Sr(n);
        function n() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n),
            t.call(this, "font-italic", "Ctrl+I")
        }
        return n
    } (ur);
    function Rr(e) {
        return (Rr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Mr(e, t) {
        return (Mr = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Pr(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Or(e);
            if (t) {
                var r = Or(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Er(this, n)
        }
    }
    function Er(e, t) {
        return ! t || "object" !== Rr(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Or(e) {
        return (Or = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Nr = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Mr(e, t)
        } (n, e);
        var t = Pr(n);
        function n() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n),
            t.call(this, "strike", "Ctrl+U")
        }
        return n
    } (ur);
    function Dr(e) {
        return (Dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Br(e, t) {
        return (Br = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function jr(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Hr(e);
            if (t) {
                var r = Hr(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Fr(this, n)
        }
    }
    function Fr(e, t) {
        return ! t || "object" !== Dr(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Hr(e) {
        return (Hr = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Wr = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Br(e, t)
        } (n, e);
        var t = jr(n);
        function n() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n),
            t.call(this, "underline", "Ctrl+U")
        }
        return n
    } (ur);
    function Vr(e) {
        return function(e) {
            if (Array.isArray(e)) return Gr(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Gr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gr(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Gr(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function zr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var Zr = ["#ffffff", "#000100", "#e7e5e6", "#445569", "#5b9cd6", "#ed7d31", "#a5a5a5", "#ffc001", "#4371c6", "#71ae47"],
    $r = [["#f2f2f2", "#7f7f7f", "#d0cecf", "#d5dce4", "#deeaf6", "#fce5d5", "#ededed", "#fff2cd", "#d9e2f3", "#e3efd9"], ["#d8d8d8", "#595959", "#afabac", "#adb8ca", "#bdd7ee", "#f7ccac", "#dbdbdb", "#ffe59a", "#b3c6e7", "#c5e0b3"], ["#bfbfbf", "#3f3f3f", "#756f6f", "#8596b0", "#9cc2e6", "#f4b184", "#c9c9c9", "#fed964", "#8eaada", "#a7d08c"], ["#a5a5a5", "#262626", "#3a3839", "#333f4f", "#2e75b5", "#c45a10", "#7b7b7b", "#bf8e01", "#2f5596", "#538136"], ["#7f7f7f", "#0c0c0c", "#171516", "#222a35", "#1f4e7a", "#843c0a", "#525252", "#7e6000", "#203864", "#365624"]],
    Kr = ["#c00000", "#fe0000", "#fdc101", "#ffff01", "#93d051", "#00b04e", "#01b0f1", "#0170c1", "#012060", "#7030a0"];
    function Xr(e) {
        var t = this;
        return Object(i.b)("td", "").child(Object(i.b)("div", "".concat(se, "-color-palette-cell")).on("click.stop", (function() {
            return t.change(e)
        })).css("background-color", e))
    }
    var Yr = function() {
        function e() {
            var t, n, r, o = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.el = Object(i.b)("div", "".concat(se, "-color-palette")),
            this.change = function() {};
            var a = Object(i.b)("table", "").children((t = Object(i.b)("tbody", "")).children.apply(t, [(n = Object(i.b)("tr", "".concat(se, "-theme-color-placeholders"))).children.apply(n, Vr(Zr.map((function(e) {
                return Xr.call(o, e)
            }))))].concat(Vr($r.map((function(e) {
                var t;
                return (t = Object(i.b)("tr", "".concat(se, "-theme-colors"))).children.apply(t, Vr(e.map((function(e) {
                    return Xr.call(o, e)
                }))))
            }))), [(r = Object(i.b)("tr", "".concat(se, "-standard-colors"))).children.apply(r, Vr(Kr.map((function(e) {
                return Xr.call(o, e)
            }))))])));
            this.el.child(a),
            this.colorInput = Object(i.b)("input").attr("placeholder", "支持自定义颜色代码").attr("style", "background-color:#fff;height:21px;line-height:21px;border:1px solid #ddd;text-align:center;width:100%;font-size:14px").on("keydown", (function(e) {
                13 === e.keyCode && o.change(e.target.value)
            })).on("input", (function(e) {
                o.change({
                    color: e.target.value,
                    input: !0
                })
            })),
            this.el.child(Object(i.b)("div").child(this.colorInput))
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "initColor",
            value: function(e) {
                this.colorInput.val(e)
            }
        }]) && zr(t.prototype, n),
        r && zr(t, r),
        e
    } ();
    function Ur(e) {
        return (Ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Jr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function qr(e, t) {
        return (qr = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Qr(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = to(e);
            if (t) {
                var r = to(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return eo(this, n)
        }
    }
    function eo(e, t) {
        return ! t || "object" !== Ur(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function to(e) {
        return (to = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var no = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && qr(e, t)
        } (o, e);
        var t, n, i, r = Qr(o);
        function o(e, t) {
            var n; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o);
            var i = new jn(e).css("height", "16px").css("border-bottom", "3px solid ".concat(t)),
            a = new Yr;
            return a.change = function(e) {
                var t = "";
                "string" == typeof e ? (t = e, n.hide()) : t = e.color,
                n.change(t),
                n.setTitle(t)
            },
            (n = r.call(this, i, "auto", !1, "bottom-left", a.el)).colorPalette = a,
            n
        }
        return t = o,
        (n = [{
            key: "setTitle",
            value: function(e) {
                this.title.css("border-color", e),
                this.colorPalette.initColor(e)
            }
        }]) && Jr(t.prototype, n),
        i && Jr(t, i),
        o
    } (Pi);
    function io(e) {
        return (io = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function ro(e) {
        return function(e) {
            if (Array.isArray(e)) return oo(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return oo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oo(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function oo(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function ao(e, t) {
        return (ao = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function so(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = co(e);
            if (t) {
                var r = co(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return lo(this, n)
        }
    }
    function lo(e, t) {
        return ! t || "object" !== io(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function co(e) {
        return (co = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var uo = [["thin", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" style="user-select: none;"></line></svg>'], ["medium", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" style="user-select: none;"><line x1="0" y1="1.0" x2="50" y2="1.0" stroke-width="2" stroke="black" style="user-select: none;"></line></svg>'], ["thick", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="3" style="user-select: none;"><line x1="0" y1="1.5" x2="50" y2="1.5" stroke-width="3" stroke="black" style="user-select: none;"></line></svg>'], ["dashed", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" stroke-dasharray="2" style="user-select: none;"></line></svg>'], ["dotted", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" stroke-dasharray="1" style="user-select: none;"></line></svg>']],
    ho = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && ao(e, t)
        } (n, e);
        var t = so(n);
        function n(e) {
            var r; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n);
            var o = new jn("line-type"),
            a = 0,
            s = uo.map((function(t, n) {
                return Object(i.b)("div", "".concat(se, "-item state ").concat(e === t[0] ? "checked": "")).on("click", (function() {
                    s[a].toggle("checked"),
                    s[n].toggle("checked"),
                    a = n,
                    r.hide(),
                    r.change(t)
                })).child(Object(i.b)("div", "".concat(se, "-line-type")).html(t[1]))
            }));
            return r = t.call.apply(t, [this, o, "auto", !1, "bottom-left"].concat(ro(s)))
        }
        return n
    } (Pi);
    function fo(e) {
        return function(e) {
            if (Array.isArray(e)) return mo(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) || po(e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function go(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) || po(e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function po(e, t) {
        if (e) {
            if ("string" == typeof e) return mo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mo(e, t) : void 0
        }
    }
    function mo(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function vo() {
        var e;
        return Object(i.b)("table", "").child((e = Object(i.b)("tbody", "")).children.apply(e, arguments))
    }
    function yo(e) {
        var t = this;
        return Object(i.b)("td", "").child(Object(i.b)("div", "".concat(se, "-border-palette-cell")).child(new jn("border-".concat(e))).on("click", (function() {
            t.mode = e;
            var n = t.mode,
            i = t.style,
            r = t.color;
            t.change({
                mode: n,
                style: i,
                color: r
            })
        })))
    }
    function bo() {
        var e = this.mode,
        t = this.style,
        n = this.color;
        this.change({
            mode: e,
            style: t,
            color: n
        })
    }
    var Co = function e() {
        var t, n, r = this; !
        function(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
        } (this, e),
        this.color = "#000",
        this.style = "thin",
        this.mode = "all",
        this.change = function() {},
        this.ddColor = new no("line-color", this.color),
        this.ddColor.change = function(e) {
            r.color = e,
            bo.call(r)
        },
        this.ddType = new ho(this.style),
        this.ddType.change = function(e) {
            var t = go(e, 1)[0];
            r.style = t,
            bo.call(r)
        },
        this.el = Object(i.b)("div", "".concat(se, "-border-palette"));
        var o = vo(Object(i.b)("tr", "").children(Object(i.b)("td", "".concat(se, "-border-palette-left")).child(vo((t = Object(i.b)("tr", "")).children.apply(t, fo(["all", "inside", "horizontal", "vertical", "outside"].map((function(e) {
            return yo.call(r, e)
        })))), (n = Object(i.b)("tr", "")).children.apply(n, fo(["left", "top", "right", "bottom", "none"].map((function(e) {
            return yo.call(r, e)
        })))))), Object(i.b)("td", "".concat(se, "-border-palette-right")).children(Object(i.b)("div", "".concat(se, "-toolbar-btn")).child(this.ddColor.el), Object(i.b)("div", "".concat(se, "-toolbar-btn")).child(this.ddType.el))));
        this.el.child(o)
    };
    function Io(e) {
        return (Io = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function wo(e, t) {
        return (wo = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function xo(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = _o(e);
            if (t) {
                var r = _o(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Ao(this, n)
        }
    }
    function Ao(e, t) {
        return ! t || "object" !== Io(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function _o(e) {
        return (_o = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var So = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && wo(e, t)
        } (n, e);
        var t = xo(n);
        function n() {
            var e; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n);
            var i = new jn("border-all"),
            r = new Co;
            return r.change = function(t) {
                e.change(t),
                e.hide()
            },
            e = t.call(this, i, "auto", !1, "bottom-left", r.el)
        }
        return n
    } (Pi);
    function ko(e) {
        return (ko = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Lo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function To(e, t) {
        return (To = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Ro(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Po(e);
            if (t) {
                var r = Po(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Mo(this, n)
        }
    }
    function Mo(e, t) {
        return ! t || "object" !== ko(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Po(e) {
        return (Po = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Eo = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && To(e, t)
        } (o, e);
        var t, n, i, r = Ro(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "border")
        }
        return t = o,
        (n = [{
            key: "dropdown",
            value: function() {
                return new So
            }
        }]) && Lo(t.prototype, n),
        i && Lo(t, i),
        o
    } (Ai);
    function Oo(e) {
        return (Oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function No(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function Do(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Bo(e, t, n) {
        return (Bo = "undefined" != typeof Reflect && Reflect.get ? Reflect.get: function(e, t, n) {
            var i = function(e, t) {
                for (; ! Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Wo(e)););
                return e
            } (e, t);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, t);
                return r.get ? r.get.call(n) : r.value
            }
        })(e, t, n || e)
    }
    function jo(e, t) {
        return (jo = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Fo(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Wo(e);
            if (t) {
                var r = Wo(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Ho(this, n)
        }
    }
    function Ho(e, t) {
        return ! t || "object" !== Oo(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Wo(e) {
        return (Wo = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Vo = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && jo(e, t)
        } (o, e);
        var t, n, i, r = Fo(o);
        function o() {
            return No(this, o),
            r.apply(this, arguments)
        }
        return t = o,
        (n = [{
            key: "element",
            value: function() {
                var e = this;
                return Bo(Wo(o.prototype), "element", this).call(this).child(new jn(this.tag)).on("click", (function() {
                    return e.change(e.tag)
                }))
            }
        },
        {
            key: "setState",
            value: function(e) {
                this.el.disabled(e)
            }
        }]) && Do(t.prototype, n),
        i && Do(t, i),
        o
    } (pi);
    function Go(e) {
        return (Go = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function zo(e, t) {
        return (zo = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Zo(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Ko(e);
            if (t) {
                var r = Ko(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return $o(this, n)
        }
    }
    function $o(e, t) {
        return ! t || "object" !== Go(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Ko(e) {
        return (Ko = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Xo = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && zo(e, t)
        } (n, e);
        var t = Zo(n);
        function n() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n),
            t.call(this, "clearformat")
        }
        return n
    } (Vo);
    function Yo(e) {
        return (Yo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Uo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Jo(e, t) {
        return (Jo = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function qo(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = ea(e);
            if (t) {
                var r = ea(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Qo(this, n)
        }
    }
    function Qo(e, t) {
        return ! t || "object" !== Yo(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function ea(e) {
        return (ea = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var ta = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Jo(e, t)
        } (o, e);
        var t, n, i, r = qo(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "paintformat")
        }
        return t = o,
        (n = [{
            key: "setState",
            value: function() {}
        }]) && Uo(t.prototype, n),
        i && Uo(t, i),
        o
    } (ur);
    function na(e) {
        return (na = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function ia(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function ra(e, t) {
        return (ra = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function oa(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = sa(e);
            if (t) {
                var r = sa(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return aa(this, n)
        }
    }
    function aa(e, t) {
        return ! t || "object" !== na(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function sa(e) {
        return (sa = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var la = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && ra(e, t)
        } (o, e);
        var t, n, i, r = oa(o);
        function o(e) {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "color", void 0, e)
        }
        return t = o,
        (n = [{
            key: "dropdown",
            value: function() {
                var e = this.tag,
                t = this.value;
                return new no(e, t)
            }
        }]) && ia(t.prototype, n),
        i && ia(t, i),
        o
    } (Ai);
    function ca(e) {
        return (ca = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function ua(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function ha(e, t) {
        return (ha = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function da(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = ga(e);
            if (t) {
                var r = ga(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return fa(this, n)
        }
    }
    function fa(e, t) {
        return ! t || "object" !== ca(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function ga(e) {
        return (ga = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var pa = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && ha(e, t)
        } (o, e);
        var t, n, i, r = da(o);
        function o(e) {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "bgcolor", void 0, e)
        }
        return t = o,
        (n = [{
            key: "dropdown",
            value: function() {
                var e = this.tag,
                t = this.value;
                return new no(e, t)
            }
        }]) && ua(t.prototype, n),
        i && ua(t, i),
        o
    } (Ai);
    function ma(e) {
        return (ma = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function va(e) {
        return function(e) {
            if (Array.isArray(e)) return ya(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return ya(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ya(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function ya(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function ba(e, t) {
        return (ba = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Ca(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = wa(e);
            if (t) {
                var r = wa(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Ia(this, n)
        }
    }
    function Ia(e, t) {
        return ! t || "object" !== ma(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function wa(e) {
        return (wa = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var xa = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && ba(e, t)
        } (n, e);
        var t = Ca(n);
        function n() {
            var e; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n);
            var r = he.map((function(t) {
                return Object(i.b)("div", "".concat(se, "-item")).on("click", (function() {
                    e.setTitle("".concat(t.pt)),
                    e.change(t)
                })).child("".concat(t.pt))
            }));
            return e = t.call.apply(t, [this, "10", "60px", !0, "bottom-left"].concat(va(r)))
        }
        return n
    } (Pi);
    function Aa(e) {
        return (Aa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function _a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Sa(e, t) {
        return (Sa = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function ka(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Ta(e);
            if (t) {
                var r = Ta(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return La(this, n)
        }
    }
    function La(e, t) {
        return ! t || "object" !== Aa(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Ta(e) {
        return (Ta = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Ra = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Sa(e, t)
        } (o, e);
        var t, n, i, r = ka(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "font-size")
        }
        return t = o,
        (n = [{
            key: "getValue",
            value: function(e) {
                return e.pt
            }
        },
        {
            key: "dropdown",
            value: function() {
                return new xa
            }
        }]) && _a(t.prototype, n),
        i && _a(t, i),
        o
    } (Ai);
    function Ma(e) {
        return (Ma = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Pa(e) {
        return function(e) {
            if (Array.isArray(e)) return Ea(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ea(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ea(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Ea(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Oa(e, t) {
        return (Oa = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Na(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Ba(e);
            if (t) {
                var r = Ba(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Da(this, n)
        }
    }
    function Da(e, t) {
        return ! t || "object" !== Ma(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Ba(e) {
        return (Ba = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var ja = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Oa(e, t)
        } (n, e);
        var t = Na(n);
        function n() {
            var e; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n);
            var r = ue.map((function(t) {
                return Object(i.b)("div", "".concat(se, "-item")).on("click", (function() {
                    e.setTitle(t.title),
                    e.change(t)
                })).child(t.title)
            }));
            return e = t.call.apply(t, [this, ue[0].title, "160px", !0, "bottom-left"].concat(Pa(r)))
        }
        return n
    } (Pi);
    function Fa(e) {
        return (Fa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Ha(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Wa(e, t) {
        return (Wa = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Va(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = za(e);
            if (t) {
                var r = za(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Ga(this, n)
        }
    }
    function Ga(e, t) {
        return ! t || "object" !== Fa(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function za(e) {
        return (za = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Za = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Wa(e, t)
        } (o, e);
        var t, n, i, r = Va(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "font-name")
        }
        return t = o,
        (n = [{
            key: "getValue",
            value: function(e) {
                return e.key
            }
        },
        {
            key: "dropdown",
            value: function() {
                return new ja
            }
        }]) && Ha(t.prototype, n),
        i && Ha(t, i),
        o
    } (Ai);
    function $a(e) {
        return ($a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Ka(e) {
        return function(e) {
            if (Array.isArray(e)) return Xa(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Xa(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xa(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Xa(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Ya(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Ua(e, t) {
        return (Ua = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Ja(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Qa(e);
            if (t) {
                var r = Qa(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return qa(this, n)
        }
    }
    function qa(e, t) {
        return ! t || "object" !== $a(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Qa(e) {
        return (Qa = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var es = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Ua(e, t)
        } (a, e);
        var t, n, r, o = Ja(a);
        function a() {
            var e; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, a);
            var t = [],
            n = Pe.slice(0);
            return n.splice(1, 0, {
                key: "divider"
            }),
            n.splice(4, 0, {
                key: "divider"
            }),
            n.splice(8, 0, {
                key: "divider"
            }),
            n = n.map((function(n) {
                var r = Object(i.b)("div", "".concat(se, "-item"));
                if ("divider" === n.key) r.addClass("divider");
                else if (r.child(n.title()).on("click", (function() {
                    e.setTitle(n.key),
                    e.change(n)
                })), n.label) {
                    var o = Object(i.b)("div", "label").attr("key", n.key).html(n.label);
                    t.push(o),
                    r.child(o)
                }
                return r
            })),
            (e = o.call.apply(o, [this, "Normal", "220px", !0, "bottom-left"].concat(Ka(n)))).labelArray = t,
            e
        }
        return t = a,
        (n = [{
            key: "setTitle",
            value: function(e) {
                for (var t = 0; t < Pe.length; t += 1) Pe[t].key === e.toLowerCase() && this.title.html(Pe[t].title());
                this.hide()
            }
        },
        {
            key: "setLabel",
            value: function(e) {
                this.labelArray.map((function(t) {
                    for (var n = t.attr("key"), i = 0; i < Pe.length; i += 1) if (Pe[i].key === n) {
                        e ? t.html(Pe[i].render(e)) : t.html(Pe[i].label);
                        break
                    }
                }))
            }
        }]) && Ya(t.prototype, n),
        r && Ya(t, r),
        a
    } (Pi);
    function ts(e) {
        return (ts = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function ns(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function is(e, t) {
        return (is = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function rs(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = as(e);
            if (t) {
                var r = as(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return os(this, n)
        }
    }
    function os(e, t) {
        return ! t || "object" !== ts(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function as(e) {
        return (as = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var ss = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && is(e, t)
        } (o, e);
        var t, n, i, r = rs(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "format")
        }
        return t = o,
        (n = [{
            key: "getValue",
            value: function(e) {
                return e.key
            }
        },
        {
            key: "dropdown",
            value: function() {
                return new es
            }
        },
        {
            key: "setStatus",
            value: function(e, t) {
                this.dd.setLabel(t),
                e ? this.setState(e) : this.setState("normal")
            }
        }]) && ns(t.prototype, n),
        i && ns(t, i),
        o
    } (Ai);
    function ls(e) {
        return (ls = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function cs(e) {
        return function(e) {
            if (Array.isArray(e)) return us(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return us(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return us(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function us(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function hs(e, t) {
        return (hs = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function ds(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = gs(e);
            if (t) {
                var r = gs(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return fs(this, n)
        }
    }
    function fs(e, t) {
        return ! t || "object" !== ls(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function gs(e) {
        return (gs = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var ps = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && hs(e, t)
        } (n, e);
        var t = ds(n);
        function n() {
            var e; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n);
            var r = xe.map((function(t) {
                return Object(i.b)("div", "".concat(se, "-item")).on("click", (function() {
                    e.hide(),
                    e.change(t)
                })).child(t.key)
            }));
            return e = t.call.apply(t, [this, new jn("formula"), "180px", !0, "bottom-left"].concat(cs(r)))
        }
        return n
    } (Pi);
    function ms(e) {
        return (ms = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function vs(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function ys(e, t) {
        return (ys = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function bs(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Is(e);
            if (t) {
                var r = Is(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Cs(this, n)
        }
    }
    function Cs(e, t) {
        return ! t || "object" !== ms(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Is(e) {
        return (Is = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var ws = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && ys(e, t)
        } (o, e);
        var t, n, i, r = bs(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "formula")
        }
        return t = o,
        (n = [{
            key: "getValue",
            value: function(e) {
                return e.key
            }
        },
        {
            key: "dropdown",
            value: function() {
                return new ps
            }
        }]) && vs(t.prototype, n),
        i && vs(t, i),
        o
    } (Ai);
    function As(e) {
        return (As = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function _s(e, t) {
        return (_s = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Ss(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Ls(e);
            if (t) {
                var r = Ls(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return ks(this, n)
        }
    }
    function ks(e, t) {
        return ! t || "object" !== As(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Ls(e) {
        return (Ls = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Ts = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && _s(e, t)
        } (n, e);
        var t = Ss(n);
        function n() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n),
            t.call(this, "freeze")
        }
        return n
    } (ur);
    function Rs(e) {
        return (Rs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Ms(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Ps(e, t) {
        return (Ps = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Es(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Ns(e);
            if (t) {
                var r = Ns(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Os(this, n)
        }
    }
    function Os(e, t) {
        return ! t || "object" !== Rs(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Ns(e) {
        return (Ns = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Ds = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Ps(e, t)
        } (o, e);
        var t, n, i, r = Es(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "merge")
        }
        return t = o,
        (n = [{
            key: "setState",
            value: function(e, t) {
                this.el.active(e).disabled(t)
            }
        }]) && Ms(t.prototype, n),
        i && Ms(t, i),
        o
    } (ur);
    function Bs(e) {
        return (Bs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function js(e, t) {
        return (js = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Fs(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Ws(e);
            if (t) {
                var r = Ws(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Hs(this, n)
        }
    }
    function Hs(e, t) {
        return ! t || "object" !== Bs(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Ws(e) {
        return (Ws = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Vs = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && js(e, t)
        } (n, e);
        var t = Fs(n);
        function n() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n),
            t.call(this, "redo", "Ctrl+Y")
        }
        return n
    } (Vo);
    function Gs(e) {
        return (Gs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function zs(e, t) {
        return (zs = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Zs(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Ks(e);
            if (t) {
                var r = Ks(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return $s(this, n)
        }
    }
    function $s(e, t) {
        return ! t || "object" !== Gs(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Ks(e) {
        return (Ks = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Xs = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && zs(e, t)
        } (n, e);
        var t = Zs(n);
        function n() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n),
            t.call(this, "undo", "Ctrl+Z")
        }
        return n
    } (Vo);
    function Ys(e) {
        return (Ys = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Us(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function Js(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function qs(e, t, n) {
        return (qs = "undefined" != typeof Reflect && Reflect.get ? Reflect.get: function(e, t, n) {
            var i = function(e, t) {
                for (; ! Object.prototype.hasOwnProperty.call(e, t) && null !== (e = nl(e)););
                return e
            } (e, t);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, t);
                return r.get ? r.get.call(n) : r.value
            }
        })(e, t, n || e)
    }
    function Qs(e, t) {
        return (Qs = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function el(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = nl(e);
            if (t) {
                var r = nl(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return tl(this, n)
        }
    }
    function tl(e, t) {
        return ! t || "object" !== Ys(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function nl(e) {
        return (nl = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var il = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Qs(e, t)
        } (o, e);
        var t, n, i, r = el(o);
        function o() {
            return Us(this, o),
            r.apply(this, arguments)
        }
        return t = o,
        (n = [{
            key: "element",
            value: function() {
                var e = this,
                t = this.tag;
                return qs(nl(o.prototype), "element", this).call(this).child(new jn(t)).on("click", (function() {
                    return e.click()
                }))
            }
        },
        {
            key: "click",
            value: function() {
                this.change(this.tag, this.toggle())
            }
        },
        {
            key: "setState",
            value: function(e) {
                this.el.active(e)
            }
        },
        {
            key: "toggle",
            value: function() {
                return this.el.toggle()
            }
        },
        {
            key: "active",
            value: function() {
                return this.el.hasClass("active")
            }
        }]) && Js(t.prototype, n),
        i && Js(t, i),
        o
    } (pi);
    function rl(e) {
        return (rl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function ol(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function al(e, t) {
        return (al = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function sl(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = cl(e);
            if (t) {
                var r = cl(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return ll(this, n)
        }
    }
    function ll(e, t) {
        return ! t || "object" !== rl(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function cl(e) {
        return (cl = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var ul = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && al(e, t)
        } (o, e);
        var t, n, i, r = sl(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "save", "Ctrl+S")
        }
        return t = o,
        (n = [{
            key: "click",
            value: function() {
                this.change(this.tag, this.toggle())
            }
        }]) && ol(t.prototype, n),
        i && ol(t, i),
        o
    } (il);
    function hl(e) {
        return (hl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function dl(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function fl(e, t) {
        return (fl = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function gl(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = ml(e);
            if (t) {
                var r = ml(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return pl(this, n)
        }
    }
    function pl(e, t) {
        return ! t || "object" !== hl(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function ml(e) {
        return (ml = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var vl = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && fl(e, t)
        } (a, e);
        var t, n, r, o = gl(a);
        function a() {
            var e;
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, a),
            (e = o.call(this, "img", "Ctrl+I")).img = Object(i.b)("input").attr("type", "file").hide().on("change", (function(t) {
                e.onFileChange(t)
            })),
            e
        }
        return t = a,
        (n = [{
            key: "onFileChange",
            value: function(e) {
                this.change(this.tag, e.target.files[0])
            }
        },
        {
            key: "uploadFile",
            value: function(e) {
                var t = this,
                n = new FormData;
                n.append("file", e),
                n.append("fileName", e.name),
                n.append("biz", "excel_online");
                var i = new XMLHttpRequest;
                i.open("POST", "/design/report/upload"),
                i.send(n),
                i.onreadystatechange = function() {
                    if (4 === i.readyState && 200 == i.status) {
                        var e = JSON.parse(i.responseText);
                        e.success ? t.change(t.tag, e.message) : t.change("error", e.message)
                    }
                }
            }
        },
        {
            key: "click",
            value: function() {
                this.img.el.click()
            }
        }]) && dl(t.prototype, n),
        r && dl(t, r),
        a
    } (il);
    function yl(e) {
        return (yl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function bl(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Cl(e, t) {
        return (Cl = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Il(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = xl(e);
            if (t) {
                var r = xl(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return wl(this, n)
        }
    }
    function wl(e, t) {
        return ! t || "object" !== yl(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function xl(e) {
        return (xl = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Al = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Cl(e, t)
        } (o, e);
        var t, n, i, r = Il(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "chart", "Ctrl+e")
        }
        return t = o,
        (n = [{
            key: "click",
            value: function() {
                this.change(this.tag)
            }
        }]) && bl(t.prototype, n),
        i && bl(t, i),
        o
    } (il);
    function _l(e) {
        return (_l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Sl(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function kl(e, t) {
        return (kl = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Ll(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Rl(e);
            if (t) {
                var r = Rl(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Tl(this, n)
        }
    }
    function Tl(e, t) {
        return ! t || "object" !== _l(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Rl(e) {
        return (Rl = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Ml = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && kl(e, t)
        } (o, e);
        var t, n, i, r = Ll(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "view", "Ctrl+M")
        }
        return t = o,
        (n = [{
            key: "click",
            value: function() {
                this.change(this.tag)
            }
        }]) && Sl(t.prototype, n),
        i && Sl(t, i),
        o
    } (il);
    function Pl(e) {
        return (Pl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function El(e, t) {
        return (El = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Ol(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Dl(e);
            if (t) {
                var r = Dl(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Nl(this, n)
        }
    }
    function Nl(e, t) {
        return ! t || "object" !== Pl(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Dl(e) {
        return (Dl = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Bl = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && El(e, t)
        } (n, e);
        var t = Ol(n);
        function n() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n),
            t.call(this, "textwrap")
        }
        return n
    } (ur);
    function jl(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Fl(e) {
        return (Fl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Hl(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function Wl(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && Vl(e, t)
    }
    function Vl(e, t) {
        return (Vl = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Gl(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Zl(e);
            if (t) {
                var r = Zl(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return zl(this, n)
        }
    }
    function zl(e, t) {
        return ! t || "object" !== Fl(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Zl(e) {
        return (Zl = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var $l = function(e) {
        Wl(n, e);
        var t = Gl(n);
        function n() {
            var e;
            Hl(this, n);
            var r = new jn("ellipsis"),
            o = Object(i.b)("div", "".concat(se, "-toolbar-more"));
            return (e = t.call(this, r, "auto", !1, "bottom-right", o)).moreBtns = o,
            e.contentEl.css("max-width", "420px"),
            e
        }
        return n
    } (Pi),
    Kl = function(e) {
        Wl(o, e);
        var t, n, i, r = Gl(o);
        function o() {
            var e;
            return Hl(this, o),
            (e = r.call(this, "more")).el.hide(),
            e
        }
        return t = o,
        (n = [{
            key: "dropdown",
            value: function() {
                return new $l
            }
        },
        {
            key: "show",
            value: function() {
                this.el.show()
            }
        },
        {
            key: "hide",
            value: function() {
                this.el.hide()
            }
        }]) && jl(t.prototype, n),
        i && jl(t, i),
        o
    } (Ai);
    function Xl(e) {
        return (Xl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Yl(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Ul(e, t) {
        return (Ul = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Jl(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Ql(e);
            if (t) {
                var r = Ql(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return ql(this, n)
        }
    }
    function ql(e, t) {
        return ! t || "object" !== Xl(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Ql(e) {
        return (Ql = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var ec = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Ul(e, t)
        } (a, e);
        var t, n, r, o = Jl(a);
        function a() {
            var e;
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, a),
            (e = o.call(this, "uploadExcel", "Ctrl+E")).uploadExcel = Object(i.b)("input").attr("type", "file").hide().on("change", (function(t) {
                e.onFileChange(t)
            })),
            e
        }
        return t = a,
        (n = [{
            key: "onFileChange",
            value: function(e) {
                this.change(this.tag, e.target.files[0])
            }
        },
        {
            key: "click",
            value: function() {
                this.uploadExcel.el.click()
            }
        }]) && Yl(t.prototype, n),
        r && Yl(t, r),
        a
    } (il),
    tc = [{
        key: "A4",
        title: "A4",
        value: "A4 : 210mmx297mm"
    },
    {
        key: "A3",
        title: "A3",
        value: "A3 : 297mmx420mm"
    },
    {
        key: "Letter",
        title: "Letter",
        value: "Letter : 216mmx279mm"
    },
    {
        key: "Legal",
        title: "Legal",
        value: "Legal : 216mmx355mm"
    },
    {
        key: "Executive",
        title: "Executive",
        value: "Executive : 184mmx266mm"
    }],
    nc = function() {
        var e = new Array;
        if (null != window.screen.deviceXDPI) e[0] = window.screen.deviceXDPI,
        e[1] = window.screen.deviceYDPI;
        else {
            var t = document.createElement("DIV");
            t.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden",
            document.body.appendChild(t),
            e[0] = parseInt(t.offsetWidth),
            e[1] = parseInt(t.offsetHeight),
            t.parentNode.removeChild(t)
        }
        return e
    },
    ic = function(e) {
        var t = {};
        return tc.forEach((function(e) {
            t[e.key] = e
        })),
        t[e].value.replace(e, "")
    },
    rc = function(e) {
        var t = Number(e.match(/(\d)+/g)[0]),
        n = nc();
        return Math.ceil(t / 25.41 * n[0])
    },
    oc = function(e) {
        var t = Number(e.match(/(\d)+/g)[1]),
        n = nc();
        return Math.ceil((t - 20) / 25.41 * n[1])
    };
    function ac(e) {
        return (ac = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function sc(e) {
        return function(e) {
            if (Array.isArray(e)) return lc(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return lc(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lc(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function lc(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function cc(e, t) {
        return (cc = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function uc(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = dc(e);
            if (t) {
                var r = dc(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return hc(this, n)
        }
    }
    function hc(e, t) {
        return ! t || "object" !== ac(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function dc(e) {
        return (dc = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var fc = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && cc(e, t)
        } (n, e);
        var t = uc(n);
        function n() {
            var e; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n);
            var r = tc.map((function(t) {
                return Object(i.b)("div", "".concat(se, "-item")).on("click", (function() {
                    e.setTitle(t.title),
                    e.change(t)
                })).child(t.value)
            }));
            return e = t.call.apply(t, [this, tc[0].title, "190px", !0, "bottom-left"].concat(sc(r)))
        }
        return n
    } (Pi);
    function gc(e) {
        return (gc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function pc(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function mc(e, t) {
        return (mc = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function vc(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = bc(e);
            if (t) {
                var r = bc(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return yc(this, n)
        }
    }
    function yc(e, t) {
        return ! t || "object" !== gc(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function bc(e) {
        return (bc = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Cc = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && mc(e, t)
        } (o, e);
        var t, n, i, r = vc(o);
        function o() {
            return function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o),
            r.call(this, "toolPrintSize")
        }
        return t = o,
        (n = [{
            key: "getValue",
            value: function(e) {
                return e.key
            }
        },
        {
            key: "dropdown",
            value: function() {
                return new fc
            }
        }]) && pc(t.prototype, n),
        i && pc(t, i),
        o
    } (Ai);
    function Ic(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function wc(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function xc(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ac(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ac(e, t)
        } (e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Ac(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function _c() {
        return Object(i.b)("div", "".concat(se, "-toolbar-divider"))
    }
    function Sc() {
        var e = this;
        this.btns2 = [],
        this.items.forEach((function(t) {
            if (Array.isArray(t)) t.forEach((function(t) {
                var n = t.el,
                i = n.box(),
                r = n.computedStyle(),
                o = r.marginLeft,
                a = r.marginRight;
                e.btns2.push([n, i.width + parseInt(o, 10) + parseInt(a, 10)])
            }));
            else {
                var n = t.box(),
                i = t.computedStyle(),
                r = i.marginLeft,
                o = i.marginRight;
                e.btns2.push([t, n.width + parseInt(r, 10) + parseInt(o, 10)])
            }
        }))
    }
    function kc() {
        var e, t, n = this.el,
        i = this.btns,
        r = this.moreEl,
        o = this.btns2,
        a = r.dd,
        s = a.moreBtns,
        l = a.contentEl;
        n.css("width", "".concat(this.widthFn() - 60, "px"));
        var c = n.box(),
        u = 160,
        h = 12,
        d = [],
        f = [];
        o.forEach((function(e, t) {
            var n = xc(e, 2),
            i = n[0],
            r = n[1];
            u += r,
            t === o.length - 1 || u < c.width ? d.push(i) : (h += r, f.push(i))
        })),
        (e = i.html("")).children.apply(e, d),
        (t = s.html("")).children.apply(t, f),
        l.css("width", "".concat(h, "px")),
        f.length > 0 ? r.show() : r.hide()
    }
    var Lc = function() {
        function e(t, n) {
            var r = this,
            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            Ic(this, e);
            var a = t.settings.printElHeight || 1047;
            this.data = t,
            this.change = function() {},
            this.widthFn = n,
            this.isHide = o;
            var s = t.defaultStyle();
            this.items = [[this.saveEl = new ul], [this.undoEl = new Xs, this.redoEl = new Vs, this.paintformatEl = new ta, this.clearformatEl = new Xo], _c(), [this.formatEl = new ss], _c(), [this.fontEl = new Za, this.fontSizeEl = new Ra], _c(), [this.boldEl = new xr, this.italicEl = new Tr, this.underlineEl = new Wr, this.strikeEl = new Nr, this.textColorEl = new la(s.color)], _c(), [this.fillColorEl = new pa(s.bgcolor), this.borderEl = new Eo, this.mergeEl = new Ds], _c(), [this.alignEl = new Xi(s.align), this.valignEl = new tr(s.valign), this.textwrapEl = new Bl], _c(), [this.freezeEl = new Ts, this.autofilterEl = new vr, this.formulaEl = new ws, this.moreEl = new Kl], _c(), [this.InsertImgEl = new vl, this.InsertChartEl = new Al], _c(), [this.InsertViewEl = new Ml], _c(), [this.UploadExcelEl = new ec], _c(), [this.toolPrintSizeEl = new Cc, this.toolPrintInputEl = new fi(!0, this.data.settings.printElWidth || 0, "打印宽度"), this.toolPrintHeightInputEl = new fi(!0, a || 0, "打印高度")]],
            this.el = Object(i.b)("div", "".concat(se, "-toolbar")),
            this.btns = Object(i.b)("div", "".concat(se, "-toolbar-btns")),
            this.items.forEach((function(e) {
                Array.isArray(e) ? e.forEach((function(e) {
                    r.btns.child(e.el),
                    e.change = function() {
                        r.change.apply(r, arguments)
                    }
                })) : r.btns.child(e.el)
            })),
            this.el.child(this.btns),
            o ? this.el.hide() : (this.reset(), setTimeout((function() {
                Sc.call(r),
                kc.call(r)
            }), 0), $t(window, "resize", (function() {
                kc.call(r)
            })))
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "paintformatActive",
            value: function() {
                return this.paintformatEl.active()
            }
        },
        {
            key: "paintformatToggle",
            value: function() {
                this.paintformatEl.toggle()
            }
        },
        {
            key: "trigger",
            value: function(e) {
                this["".concat(e, "El")].click()
            }
        },
        {
            key: "reset",
            value: function() {
                if (!this.isHide) {
                    var e = this.data,
                    t = e.getSelectedCellStyle(),
                    n = e.getSelectedCell();
                    this.undoEl.setState(!e.canUndo()),
                    this.saveEl.setState(!1),
                    this.formatEl.setStatus(t && t.format, n && n.text),
                    this.redoEl.setState(!e.canRedo()),
                    this.mergeEl.setState(e.canUnmerge(), !e.selector.multiple()),
                    this.autofilterEl.setState(!e.canAutofilter());
                    var i = t.font,
                    r = tc[0].title,
                    o = e.toolPrintSizeObj;
                    if (o) r = o.printType;
                    else {
                        o = e.toolPrintSizeObj = {};
                        var a = ic(r),
                        s = rc(a),
                        l = oc(a);
                        o.printType = r,
                        o.widthPx = s,
                        o.heightPx = l
                    }
                    this.toolPrintSizeEl.setState(r),
                    this.fontEl.setState(i.name),
                    this.fontSizeEl.setState(i.size),
                    this.boldEl.setState(i.bold),
                    this.italicEl.setState(i.italic),
                    this.underlineEl.setState(t.underline),
                    this.strikeEl.setState(t.strike),
                    this.textColorEl.setState(t.color),
                    this.fillColorEl.setState(t.bgcolor),
                    this.alignEl.setState(t.align),
                    this.valignEl.setState(t.valign),
                    this.textwrapEl.setState(t.textwrap),
                    this.freezeEl.setState(e.freezeIsActive()),
                    n && n.format && this.formatEl.setState(n.format)
                }
            }
        }]) && wc(t.prototype, n),
        r && wc(t, r),
        e
    } ();
    function Tc(e) {
        return function(e) {
            if (Array.isArray(e)) return Rc(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Rc(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rc(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Rc(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Mc(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var Pc = [{
        key: "del",
        title: "删除"
    },
    {
        key: "divider"
    },
    {
        key: "fixed",
        title: "固定"
    },
    {
        key: "divider"
    },
    {
        key: "backend",
        title: "设为套打图片"
    },
    {
        key: "divider"
    },
    {
        key: "backendImg",
        title: "设为背景图片"
    }],
    Ec = function() {
        function e(t) {
            var n; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            t || (t = Pc),
            this.el = (n = Object(i.b)("div", "ty-layer-menu")).children.apply(n, Tc(Nc.call(this, t))).hide(),
            this.itemClick = function() {}
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "hide",
            value: function() {
                var e = this.el;
                e.hide(),
                Xt(e)
            }
        },
        {
            key: "setPosition",
            value: function(e, t) {
                if (!this.isHide) {
                    var n = this.el,
                    i = (this.el.show().offset().width, t + 10),
                    r = e + 10;
                    n.offset({
                        left: r,
                        top: i
                    }),
                    Yt(n)
                }
            }
        }]) && Mc(t.prototype, n),
        r && Mc(t, r),
        e
    } ();
    function Oc(e) {
        var t = this;
        return "divider" === e.key ? Object(i.b)("div", "menu-item divider") : Object(i.b)("div", "menu-item").html(e.title).on("click.stop", (function() {
            t.itemClick(e.key),
            t.hide()
        }))
    }
    function Nc(e) {
        var t = this;
        return e.map((function(e) {
            return Oc.call(t, e)
        }))
    }
    function Dc(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "excel_online";
        return new Promise((function(i, r) {
            var o = new XMLHttpRequest,
            a = new FormData;
            a.append("file", e),
            e.name && a.append("fileName", e.name),
            a.append("biz", n),
            o.open("POST", t),
            o.send(a),
            o.onreadystatechange = function() {
                if (4 === o.readyState && 200 == o.status) {
                    var e = JSON.parse(o.responseText);
                    e.success ? i(e) : r(e.message)
                } else 404 == o.status && r("请求不存在")
            }
        }))
    }
    function Bc(e) {
        return new Promise((function(t, n) {
            var i = new XMLHttpRequest;
            i.open("GET", e),
            i.send(null),
            i.onreadystatechange = function() {
                if (4 === i.readyState && 200 == i.status) {
                    var e = JSON.parse(i.responseText);
                    e.success ? t(e) : n(e.message)
                }
            }
        }))
    }
    function jc(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return Fc(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fc(e, t)
            } (e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        }: {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        }
        var o, a = !0,
        s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return a = e.done,
                e
            },
            e: function(e) {
                s = !0,
                o = e
            },
            f: function() {
                try {
                    a || null == n.
                    return || n.
                    return ()
                } finally {
                    if (s) throw o
                }
            }
        }
    }
    function Fc(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Hc(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var Wc = function() {
        function e(t) {
            var n = this,
            r = t.type,
            o = t.top,
            a = t.left,
            s = t.width,
            l = t.height; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.type = r,
            console.log("layer位置，top=".concat(o, ",left=").concat(a, ",width=").concat(s, ",height=").concat(l)),
            this.id = function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16, t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], n = "", i = 0; i < e; i++) {
                    var r = parseInt(61 * Math.random());
                    n += t[r]
                }
                return n
            } (),
            this.containerWidth = s || 0,
            this.containerHeight = l || 0,
            this.disabled = !1,
            this.dragabled = !1,
            this.focus = !1,
            this.exist = !0,
            this.fixed = !1,
            this.moveFlag = !1,
            this.mouseDownY = 0,
            this.mouseDownX = 0,
            this.containerTop = o,
            this.containerLeft = a,
            this.mouseDownFlag = -1,
            this.rotateX = 0,
            this.rotateY = 0,
            this.zindex = 999,
            this.circles = {},
            this.content = {},
            this.moveTop = 0,
            this.moveLeft = 0,
            this.selected = !1,
            this.ignorePrint = !1,
            this.printPage = -1,
            this.printRow = -1,
            this.beginLine = -1,
            this.lastLayer = -1,
            this.moveRow = 0,
            this.rendered = !1,
            this.printLastPage = !1,
            this.change = function() {},
            this.moveChange = function() {},
            this.configChart = function() {};
            var c = Object(i.b)("div", "ty-drag-container ".concat(this.type)).css("top", this.formatPx(o)).css("left", this.formatPx(a)).on("click", (function() {
                n.focusLayer()
            })).attr("id", this.id);
            s && c.css("width", s + "px").css("height", l + "px"),
            this.content = Object(i.b)("div", "ty-drag-content");
            var u = [],
            h = Object(i.b)("div", "ty-drag-circle"),
            d = Object(i.b)("div", "cc top-left");
            u.push(d);
            var f = Object(i.b)("div", "cc top-center");
            u.push(f);
            var g = Object(i.b)("div", "cc top-right");
            u.push(g);
            var p = Object(i.b)("div", "cc middle-left");
            u.push(p);
            var m = Object(i.b)("div", "cc middle-right");
            u.push(m);
            var v = Object(i.b)("div", "cc bottom-left");
            u.push(v);
            var y = Object(i.b)("div", "cc bottom-center");
            u.push(y);
            var b = Object(i.b)("div", "cc bottom-right");
            u.push(b);
            for (var C = function(e) {
                u[e].on("mousedown", (function(t) {
                    n.mousedown(t, e)
                })),
                h.child(u[e])
            },
            I = 0; I < u.length; I += 1) C(I);
            this.circles = h;
            var w = Object(i.b)("div", "ty-drag-mover").on("mousedown", (function(e) {
                n.mousedown(e, 10)
            }));
            c.children(this.content, this.circles, w),
            this.mover = w,
            this.el = c,
            window.document.addEventListener("mousemove", (function(e) {
                n.mousemove(e)
            })),
            window.document.addEventListener("mouseup", (function() {
                n.stopMove()
            })),
            c.on("dblclick", (function() { ! 1 === n.disabled && n.change("chart_options", n.getChartOptions())
            })),
            this.virtualCellRange = [],
            this.printCellRange = [],
            this.offsetX = 0,
            this.offsetY = 0
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "updateOffset",
            value: function(e, t) {
                console.log("修改偏移量", [e, t]),
                this.offsetX = e,
                this.offsetY = t
            }
        },
        {
            key: "setVirtualCellRange",
            value: function(e, t) {
                t ? this.printCellRange = e: this.virtualCellRange = e
            }
        },
        {
            key: "getViewPagePosition",
            value: function(e) {
                var t = 0,
                n = 9999,
                i = e ? this.printCellRange: this.virtualCellRange;
                if (i) {
                    var r, o = jc(i);
                    try {
                        for (o.s(); ! (r = o.n()).done;) {
                            var a = r.value;
                            a[0] > t && (t = a[0]),
                            a[1] < n && (n = a[1])
                        }
                    } catch(e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    return {
                        row: t,
                        col: n
                    }
                }
                return {
                    row: this.designRow,
                    col: this.designCol
                }
            }
        },
        {
            key: "addCellRange",
            value: function(e) {
                this.virtualCellRange.push(e)
            }
        },
        {
            key: "changeContainerPadding",
            value: function(e) { ! 0 === e ? this.el.addClass("readonly") : this.el.removeClass("readonly")
            }
        },
        {
            key: "setId",
            value: function(e) {
                this.id = e,
                this.el.attr("id", e)
            }
        },
        {
            key: "disable",
            value: function() {
                this.disabled = !0
            }
        },
        {
            key: "getChartOptions",
            value: function() {
                return []
            }
        },
        {
            key: "fixedLayer",
            value: function() { ! 1 === this.disabled && (this.fixed = !0, this.el.removeClass("active"), this.unselect())
            }
        },
        {
            key: "focusLayer",
            value: function() { ! 1 === this.disabled && (this.fixed = !1, this.el.addClass("active"), this.select(), this.change("selected", this.id), this.el.el.getElementsByTagName("img")[0])
            }
        },
        {
            key: "mousedown",
            value: function(e, t) {
                console.log("鼠标按下事件fixed=" + this.fixed),
                !1 === this.fixed && (this.mouseDownFlag = t, this.dragabled = !0, this.mouseDownY = e.pageY, this.mouseDownX = e.pageX, this.getContainerAbs(), 9 === t && (this.rotateX = parseInt(this.containerLeft, 10) + parseInt(this.containerWidth, 10) / 2, this.rotateY = parseInt(this.containerTop, 10) + parseInt(this.containerHeight, 10) / 2))
            }
        },
        {
            key: "stopMove",
            value: function() {
                if (!0 === this.dragabled && (console.log("鼠标松开事件"), this.mouseDownFlag = -1, this.dragabled = !1, this.getContainerAbs(), !0 === this.moveFlag)) {
                    var e = this.moveChange(this.containerTop, this.containerLeft);
                    this.changeLittlePosition(e),
                    console.log("小小改变位置1", e),
                    this.moveFlag = !1
                }
            }
        },
        {
            key: "changeLittlePosition",
            value: function(e) {
                var t = e.top,
                n = e.left,
                i = e.row,
                r = e.col; ! 0 === this.fixed && (t -= 25, n -= 60),
                this.containerTop = t + Number(this.offsetY),
                this.containerLeft = n + Number(this.offsetX),
                this.el.css("top", "".concat(this.containerTop, "px")).css("left", "".concat(this.containerLeft, "px")),
                this.row = i,
                this.col = r
            }
        },
        {
            key: "moveCallback",
            value: function(e) {}
        },
        {
            key: "mousemove",
            value: function(e) {
                if (!0 === this.dragabled) {
                    console.log("鼠标移动事件"),
                    this.moveFlag = !0;
                    var t = parseInt(e.pageY, 10) - parseInt(this.mouseDownY, 10),
                    n = parseInt(e.pageX, 10) - parseInt(this.mouseDownX, 10),
                    i = t + parseInt(this.containerTop, 10),
                    r = n + parseInt(this.containerLeft, 10),
                    o = this.mouseDownFlag;
                    if (0 === o) {
                        var a = "".concat(parseInt(this.containerHeight, 10) - t, "px"),
                        s = "".concat(parseInt(this.containerWidth, 10) - n, "px");
                        this.chart && (this.chart.el.css("height", a).css("width", s), this.chart.resize()),
                        this.el.css("top", "".concat(i, "px")).css("height", a).css("left", "".concat(r, "px")).css("width", s)
                    } else if (1 === o) {
                        var l = "".concat(parseInt(this.containerHeight, 10) - t, "px");
                        this.el.css("top", "".concat(i, "px")).css("height", l),
                        this.chart && (this.chart.el.css("height", l), this.chart.resize())
                    } else if (2 === o) {
                        var c = "".concat(parseInt(this.containerHeight, 10) - t, "px"),
                        u = "".concat(parseInt(this.containerWidth, 10) + n, "px");
                        this.el.css("top", "".concat(i, "px")).css("height", c).css("width", u),
                        this.chart && (this.chart.el.css("height", c).css("width", u), this.chart.resize())
                    } else if (3 === o) {
                        "".concat(parseInt(this.containerHeight, 10) - t, "px");
                        var h = "".concat(parseInt(this.containerWidth, 10) - n, "px");
                        this.el.css("width", h),
                        this.chart && (this.chart.el.css("width", h), this.chart.resize(), this.el.css("left", "".concat(r, "px")).css("width", h))
                    } else if (4 === o) {
                        "".concat(parseInt(this.containerHeight, 10) - t, "px");
                        var d = "".concat(parseInt(this.containerWidth, 10) + n, "px");
                        this.el.css("width", d),
                        this.chart && (this.chart.el.css("width", d), this.chart.resize())
                    } else if (5 === o) {
                        var f = "".concat(parseInt(this.containerHeight, 10) + t, "px"),
                        g = "".concat(parseInt(this.containerWidth, 10) - n, "px");
                        this.el.css("left", "".concat(r, "px")).css("height", f).css("width", g),
                        this.chart && (this.chart.el.css("height", f).css("width", g), this.chart.resize())
                    } else if (6 === o) {
                        var p = "".concat(parseInt(this.containerHeight, 10) + t, "px");
                        this.el.css("height", p),
                        this.chart && (this.chart.el.css("height", p), this.chart.resize())
                    } else if (7 === o) {
                        var m = "".concat(parseInt(this.containerHeight, 10) + t, "px"),
                        v = "".concat(parseInt(this.containerWidth, 10) + n, "px");
                        this.el.css("width", v).css("height", m),
                        this.chart && (this.chart.el.css("height", m).css("width", v), this.chart.resize())
                    } else 10 === o ? this.el.css("left", "".concat(r, "px")).css("top", "".concat(i, "px")) : 9 === o && this.initRotate(e);
                    this.moveCallback(o)
                }
            }
        },
        {
            key: "initRotate",
            value: function(e) {
                console.log("this.rotateX", this.rotateX),
                console.log("this.rotateY", this.rotateY);
                var t = parseInt(e.pageX, 10) - this.rotateX,
                n = parseInt(e.pageY, 10) - this.rotateY,
                i = Math.abs(t / n),
                r = Math.atan(i) / (2 * Math.PI) * 360;
                t < 0 && n < 0 ? r = -r: t < 0 && n > 0 ? r = -(180 - r) : t > 0 && n < 0 ? r = r: t > 0 && n > 0 && (r = 180 - r),
                this.el.css("transform", "rotate(".concat(r, "deg)"))
            }
        },
        {
            key: "getContainerAbs",
            value: function() {
                var e = this.el.computedStyle();
                this.containerTop = e.top.replace("px", ""),
                this.containerLeft = e.left.replace("px", ""),
                this.containerWidth = e.width.replace("px", ""),
                this.containerHeight = e.height.replace("px", "")
            }
        },
        {
            key: "reset",
            value: function() {
                this.el.removeClass("active")
            }
        },
        {
            key: "formatPx",
            value: function(e) {
                return e ? (e += "").indexOf("px") > 0 ? e: e + "px": ""
            }
        },
        {
            key: "initPosition",
            value: function(e) {
                return e ? (e += "").indexOf("px") > 0 ? parseInt(e.replace("px", ""), 10) : parseInt(e, 10) : 0
            }
        },
        {
            key: "scrollMove",
            value: function(e, t) { ! 0 === t ? (!1 !== e && (this.moveTop = e), parseInt(this.containerTop, 10), this.moveTop) : (!1 !== e && (this.moveLeft = e), parseInt(this.containerLeft, 10), this.moveLeft)
            }
        },
        {
            key: "deleteLayer",
            value: function() { ! 1 === this.fixed && this.exist && (this.el.el.parentNode.removeChild(this.el.el), this.exist = !1, this.change("delete", this.getLayerId()))
            }
        },
        {
            key: "setFixed",
            value: function(e) {
                this.fixed = e
            }
        },
        {
            key: "toggleFocus",
            value: function(e) { ! 1 === e ? (this.containerTop = parseInt(this.containerTop, 10) - 25, this.containerLeft = parseInt(this.containerLeft, 10) - 60, this.el.css("top", "".concat(this.containerTop, "px")).css("left", "".concat(this.containerLeft, "px"))) : (this.containerTop = parseInt(this.containerTop, 10) + 25, this.containerLeft = parseInt(this.containerLeft, 10) + 60, this.el.css("top", "".concat(this.containerTop, "px")).css("left", "".concat(this.containerLeft, "px")))
            }
        },
        {
            key: "getDrawObject",
            value: function() {
                return ! 1
            }
        },
        {
            key: "commonCanCelBackend",
            value: function() {
                this.commonBackend = !1,
                this.el.el.style.zIndex = 999,
                this.el.el.style.opacity = 1
            }
        },
        {
            key: "cancelBackend",
            value: function() {
                this.isBackend = !1,
                this.commonCanCelBackend()
            }
        },
        {
            key: "cancelBackendImg",
            value: function() {
                this.isBackendImg = !1,
                this.commonCanCelBackend()
            }
        },
        {
            key: "commonSetBackend",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "50px",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "17px";
                this.commonBackend = !0,
                this.el.css("zIndex", 1),
                this.el.css("top", t),
                this.el.css("left", e),
                this.el.css("width", this.naturalWidth),
                this.el.css("height", this.naturalHeight),
                this.el.removeClass("active");
                var n = this.el.el.getElementsByTagName("img")[0];
                n && (n.style.height = this.naturalHeight, n.style.width = this.naturalWidth),
                this.el.css("opacity", .7)
            }
        },
        {
            key: "setBackendImg",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "50px",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "17px";
                this.isBackendImg = !0,
                this.commonSetBackend(e, t)
            }
        },
        {
            key: "setBackend",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "50px",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "17px";
                this.isBackend = !0,
                this.commonSetBackend(e, t)
            }
        },
        {
            key: "initMenu",
            value: function(e) {
                var t = this,
                n = new Ec(e);
                n.itemClick = function(e) {
                    "del" === e ? t.deleteLayer() : "fixed" === e ? (t.el.removeClass("active"), t.fixed = !0, t.toggleFocus(!1), t.change("fixed")) : "config" === e ? t.configChart() : "backend" === e ? (t.row = 0, t.col = 0, t.setBackend("52px", "17px")) : "backendImg" === e && t.setBackendImg()
                },
                this.el.child(n.el),
                this.el.on("mousedown", (function(e) { ! 0 === t.dragabled && 2 === e.buttons && n.setPosition(e.offsetX, e.offsetY)
                }))
            }
        },
        {
            key: "getLayerRect",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return ! (!0 !== this.exist || !0 !== this.fixed && !e && !0 !== this.isBackend) && {
                    width: parseInt(this.containerWidth.replace("px", ""), 10),
                    height: parseInt(this.containerHeight.replace("px", ""), 10),
                    row: this.row,
                    col: this.col
                }
            }
        },
        {
            key: "showContainer",
            value: function() {
                console.log("this.el.css('top'", this.el.css("top")),
                console.log(this.moveTop),
                console.log(this.containerTop),
                "chart" == this.type && this.readOnly && this.change("active", this.id),
                !1 === this.disabled && (this.focusLayer(), this.toggleFocus(!0), this.scrollMove(!1, !0), this.scrollMove(!1, !1), this.change("active", this.id))
            }
        },
        {
            key: "drawImage",
            value: function(e, t, n) {
                return new Promise((function(e) {
                    return ! 1
                }))
            }
        },
        {
            key: "initRCPosition",
            value: function(e, t) {
                return this.row = e,
                this.col = t,
                this.designRow = e,
                this.designCol = t,
                this
            }
        },
        {
            key: "getLayerId",
            value: function() {
                return this.id
            }
        },
        {
            key: "setPrintLastPage",
            value: function(e) {
                this.printLastPage = e
            }
        },
        {
            key: "isPrintLastPage",
            value: function() {
                return this.printLastPage
            }
        },
        {
            key: "getMoveRow",
            value: function() {
                return this.moveRow
            }
        },
        {
            key: "setMoveRow",
            value: function(e) {
                this.moveRow = e
            }
        },
        {
            key: "getRendered",
            value: function() {
                return this.rendered
            }
        },
        {
            key: "setRendered",
            value: function(e) {
                this.rendered = e
            }
        },
        {
            key: "getPrintPage",
            value: function() {
                return this.printPage
            }
        },
        {
            key: "setPrintPage",
            value: function(e) {
                this.printPage = e
            }
        },
        {
            key: "getPrintRow",
            value: function() {
                return this.printRow
            }
        },
        {
            key: "setPrintRow",
            value: function(e) {
                this.printRow = e
            }
        },
        {
            key: "setPrintBeginLine",
            value: function(e) {
                this.beginLine = e
            }
        },
        {
            key: "getPrintBeginLine",
            value: function() {
                return this.beginLine
            }
        },
        {
            key: "select",
            value: function() {
                this.selected = !0,
                this.el.addClass("selected")
            }
        },
        {
            key: "unselect",
            value: function() {
                this.selected = !1,
                this.el.removeClass("selected")
            }
        },
        {
            key: "npx",
            value: function(e, t) {
                return parseInt(e * t, 10)
            }
        },
        {
            key: "getBase64",
            value: function(e) {
                return new Promise((function(e) {
                    return ! 1
                }))
            }
        }]) && Hc(t.prototype, n),
        r && Hc(t, r),
        e
    } ();
    function Vc(e) {
        return (Vc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function Gc(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function zc(e, t) {
        return (zc = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Zc(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Kc(e);
            if (t) {
                var r = Kc(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return $c(this, n)
        }
    }
    function $c(e, t) {
        return ! t || "object" !== Vc(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Kc(e) {
        return (Kc = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Xc = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && zc(e, t)
        } (a, e);
        var t, n, r, o = Zc(a);
        function a(e) {
            var t, n = e.domain,
            r = e.viewLocalImage,
            s = e.src,
            l = e.top,
            c = void 0 === l ? 50 : l,
            u = e.left,
            h = void 0 === u ? 50 : u,
            d = e.width,
            f = e.height,
            g = e.isBackend,
            p = e.isBackendImg,
            m = e.commonBackend,
            v = e.toolbar; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, a); (t = o.call(this, {
                type: "img",
                top: c,
                left: h,
                width: d,
                height: f
            })).domain = n;
            var y = r || "/design/report/img";
            t.viewUrl = y,
            t.src = s,
            t.isBackend = g,
            t.isBackendImg = p,
            t.commonBackend = m,
            t.toolbar = v;
            var b = s || "";
            b.startsWith("http") || (b = "".concat(n).concat(y, "/").concat(s));
            var C = Object(i.b)("img").attr("src", b);
            C.on("load", (function(e) { (t.naturalWidth = C.el.naturalWidth + "px", t.naturalHeight = C.el.naturalHeight + "px", f ? (t.el.css("width", t.formatPx(Number(d.replace("px", "")))).css("height", t.formatPx(Number(f.replace("px", "")))), t.containerHeight = f, t.containerWidth = d) : (t.el.css("width", t.naturalWidth).css("height", t.naturalHeight), t.containerHeight = t.naturalHeight, t.containerWidth = t.naturalWidth), t.isBackend || t.isBackendImg) && (window.location.pathname.includes("index") ? t.isBackend ? t.setBackend("-20px", "-10px") : t.setBackendImg("-20px", "-10px") : t.isBackend ? t.setBackend("-20px", "-12.5px") : t.setBackendImg("-20px", "-12.5px"))
            }));
            var I = Object(i.b)("div").css("position", "absolute").css("bottom", 0).css("width", "100%").css("height", "100%").child(C);
            return t.content.child(I),
            t.initMenu(),
            t
        }
        return t = a,
        (n = [{
            key: "getImgOptions",
            value: function() {
                return {
                    id: this.id,
                    offset: [this.offsetX, this.offsetY]
                }
            }
        },
        {
            key: "getJsonData",
            value: function() {
                return ! 0 === this.exist && {
                    row: this.row,
                    col: this.col,
                    width: this.containerWidth,
                    height: this.containerHeight,
                    src: this.src,
                    isBackend: this.isBackend,
                    isBackendImg: this.isBackendImg,
                    commonBackend: this.commonBackend,
                    layer_id: this.id,
                    offsetX: this.offsetX,
                    offsetY: this.offsetY
                }
            }
        },
        {
            key: "getLayerType",
            value: function() {
                return "img"
            }
        },
        {
            key: "getDrawObject",
            value: function() {
                if (!0 === this.exist && !0 === this.fixed) {
                    var e = parseInt(this.containerTop, 10) + 7,
                    t = parseInt(this.containerLeft, 10) + 7;
                    return {
                        width: this.containerWidth,
                        height: this.containerHeight,
                        top: e,
                        left: t,
                        src: this.src,
                        absrc: "".concat(this.domain).concat(this.viewUrl, "/").concat(this.src)
                    }
                }
                return ! 1
            }
        },
        {
            key: "drawImage",
            value: function(e, t, n, i, r, o) {
                var a = this;
                return new Promise((function(s) {
                    if (!1 === a.exist) s();
                    else {
                        var l = new Image;
                        l.crossOrigin = "anonymous";
                        var c = a.src || "";
                        c.startsWith("http") || (c = "".concat(a.domain).concat(a.viewUrl, "/").concat(a.src)),
                        l.src = c;
                        var u = parseInt(a.containerWidth, 10),
                        h = parseInt(a.containerHeight, 10);
                        l.width = u,
                        l.height = h;
                        var d = a.containerLeft,
                        f = a.containerTop;
                        o && -1 != o.newTop && -1 != o.newLeft && (d = o.newLeft, f = o.newTop);
                        var g = parseInt(d) + (n ? n.x: 0) - (i ? i.l: 0),
                        p = parseInt(f) + (n ? n.y: 0) - (i ? i.t: 0);
                        a.isBackend && (p = -25),
                        !0 === a.fixed && (p += 25),
                        l.addEventListener("load", (function(n) {
                            e.drawImage(l, a.npx(g, t), a.npx(p, t), a.npx(u, t), a.npx(h, t)),
                            s()
                        })),
                        l.addEventListener("error", (function() {
                            r(c).then((function(n) {
                                var i = n.data;
                                if (i.success) {
                                    var r = "".concat(a.domain, "/").concat(a.viewUrl, "/").concat(i.result),
                                    o = new Image;
                                    o.src = r,
                                    o.crossOrigin = "anonymous",
                                    o.onload = function() {
                                        e.drawImage(o, a.npx(g, t), a.npx(p, t), a.npx(u, t), a.npx(h, t)),
                                        a.beginLine = -1,
                                        s()
                                    }
                                } else s()
                            })).
                            catch((function() {
                                console.log("未找到图", c),
                                s()
                            }))
                        }))
                    }
                }))
            }
        },
        {
            key: "getBase64",
            value: function(e) {
                var t = this;
                return new Promise((function(n) {
                    if (!1 === t.exist) n();
                    else {
                        var i = new Image;
                        i.crossOrigin = "anonymous";
                        var r = t.src || "";
                        r.startsWith("http") || (r = "".concat(t.domain).concat(t.viewUrl, "/").concat(t.src)),
                        i.src = r;
                        var o = parseInt(t.containerWidth, 10),
                        a = parseInt(t.containerHeight, 10);
                        i.width = o,
                        i.height = a,
                        i.addEventListener("load", (function(e) {
                            var r = t.getImageObject(i, o, a);
                            n(r)
                        })),
                        i.addEventListener("error", (function() {
                            e(r).then((function(e) {
                                var i = e.data;
                                if (i.success) {
                                    var r = "".concat(t.domain).concat(t.viewUrl, "/").concat(i.result),
                                    o = new Image;
                                    o.src = r,
                                    o.crossOrigin = "anonymous",
                                    o.onload = function() {
                                        var e = t.getImageObject(o, o.width, o.height);
                                        n(e)
                                    }
                                } else n()
                            }))
                        }))
                    }
                }))
            }
        },
        {
            key: "getImageObject",
            value: function(e, t, n) {
                var i = document.createElement("canvas");
                i.width = t,
                i.height = n,
                i.style.width = t + "px",
                i.style.height = n + "px",
                i.getContext("2d").drawImage(e, 0, 0, t, n);
                var r = i.toDataURL();
                return {
                    id: this.id,
                    base64: r
                }
            }
        },
        {
            key: "getBackendDrawBox",
            value: function(e) {
                var t = this,
                n = {
                    width: Number(this.containerWidth) * window.devicePixelRatio,
                    height: Number(this.containerHeight) * window.devicePixelRatio,
                    top: 0,
                    left: 0,
                    src: this.src
                };
                return new Promise((function(i) {
                    n.src.startsWith("http") ? e(n.src).then((function(e) {
                        var r = e.data;
                        if (r.success) {
                            var o = "".concat(t.domain).concat(t.viewUrl, "/").concat(r.result);
                            n.absrc = o
                        } else n.absrc = t.src;
                        i(n)
                    })) : (n.absrc = t.src, i(n))
                }))
            }
        }]) && Gc(t.prototype, n),
        r && Gc(t, r),
        a
    } (Wc),
    Yc = n(211),
    Uc = n(124),
    Jc = n.n(Uc);
    function qc(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    Jc.a.registerMap("china", Yc);
    var Qc = {
        title: {
            text: "JEECG系统登陆情况统计",
            subtext: "真实数据",
            left: "center"
        },
        tooltip: {
            trigger: "item",
            formatter: "{excel} : {c} ({d}%)"
        },
        legend: {
            bottom: 10,
            left: "center",
            data: ["IE", "Safari", "Firefox", "Opera", "Chrome"]
        },
        series: [{
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [{
                value: 1021,
                name: "IE"
            },
            {
                value: 87,
                name: "Safari"
            },
            {
                value: 582,
                name: "Firefox"
            },
            {
                value: 123,
                name: "Opera"
            },
            {
                value: 2451,
                name: "Chrome"
            }]
        }]
    },
    eu = function() {
        function e(t, n) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e);
            var r = Object(i.b)("div", "ty-layer-chart pie");
            this.el = r,
            t && this.el.css("width", "".concat(Number(t), "px")),
            n && this.el.css("height", "".concat(Number(n), "px")),
            this.option = null
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "init",
            value: function(e) {
                this.chartInstance && this.chartInstance.dispose(),
                e || (e = Qc),
                this.option = e;
                var t = Jc.a.init(this.el.el);
                return t.setOption(this.option),
                this.chartInstance = t,
                this
            }
        },
        {
            key: "draw",
            value: function(e) {
                this.option = e,
                this.chartInstance.setOption(e)
            }
        },
        {
            key: "setData",
            value: function(e, t) {
                t && (e.series[0].data = t),
                this.option = e,
                console.log("setDataoption", this.option),
                this.chartInstance.setOption(e)
            }
        },
        {
            key: "getOption",
            value: function() {
                return this.option
            }
        },
        {
            key: "resize",
            value: function() {
                this.chartInstance.resize("auto", "auto")
            }
        },
        {
            key: "getImageSrc",
            value: function() {
                return this.chartInstance.getDataURL({
                    pixelRatio: 10
                })
            }
        }]) && qc(t.prototype, n),
        r && qc(t, r),
        e
    } (),
    tu = n(212);
    function nu(e) {
        return (nu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function iu(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return ru(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ru(e, t)
            } (e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        }: {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        }
        var o, a = !0,
        s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return a = e.done,
                e
            },
            e: function(e) {
                s = !0,
                o = e
            },
            f: function() {
                try {
                    a || null == n.
                    return || n.
                    return ()
                } finally {
                    if (s) throw o
                }
            }
        }
    }
    function ru(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function ou(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))),
            n.push.apply(n, i)
        }
        return n
    }
    function au(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function su(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function lu(e, t) {
        return (lu = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function cu(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = hu(e);
            if (t) {
                var r = hu(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return uu(this, n)
        }
    }
    function uu(e, t) {
        return ! t || "object" !== nu(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function hu(e) {
        return (hu = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var du = [{
        key: "del",
        title: "删除"
    },
    {
        key: "divider"
    },
    {
        key: "fixed",
        title: "固定"
    }],
    fu = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && lu(e, t)
        } (o, e);
        var t, n, i, r = cu(o);
        function o(e) {
            var t, n = e.top,
            i = void 0 === n ? 50 : n,
            a = e.left,
            s = void 0 === a ? 50 : a,
            l = e.width,
            c = e.height,
            u = e.readOnly; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, o);
            return (t = r.call(this, {
                type: "chart",
                top: i,
                left: s,
                width: l,
                height: c
            })).readOnly = u,
            t.mover.hide(),
            t.content.on("mousedown", (function(e) {
                t.mousedown(e, 10)
            })),
            t.config = new tu.a,
            t.config.ok = function() {
                t.configCallback()
            },
            t.initMenu(du),
            t.extData = "",
            t
        }
        return t = o,
        (n = [{
            key: "initChart",
            value: function(e, t) {
                var n = this,
                i = new eu(this.containerWidth, this.containerHeight).init(e);
                return this.chart = i,
                this.content.child(i.el),
                this.configChart = function() {
                    n.config.openModal(n.chart.getOption())
                },
                this.configUrl = t || "",
                this.config.setConfigUrl(this.configUrl),
                this
            }
        },
        {
            key: "initOption",
            value: function(e, t) {
                var n = this;
                return new Promise((function(i, r) {
                    t ? Bc(t).then((function(o) {
                        o.success ? (console.log("res.result", o.result), !0 === n.getLastOption(e, o.result) ? (n.initChart(e, t), i()) : r("请求无数据")) : r(o.message)
                    })) : (n.initChart(e, t), i())
                }))
            }
        },
        {
            key: "update",
            value: function(e, t) {
                var n = this;
                return this.configUrl = t || "",
                this.config.setConfigUrl(this.configUrl),
                new Promise((function(i, r) {
                    t ? Bc(t).then((function(t) {
                        t.success ? (console.log("res.result", t.result), !0 === n.getLastOption(e, t.result) ? (n.chart.init(e), i()) : r("请求无数据")) : r(t.message)
                    })) : (n.chart.init(e), i())
                }))
            }
        },
        {
            key: "setChartExtData",
            value: function(e) {
                return this.extData = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ou(Object(n), !0).forEach((function(t) {
                            au(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ou(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                } ({},
                e),
                this
            }
        },
        {
            key: "refresh",
            value: function(e) {
                var t = this;
                return new Promise((function(n, i) {
                    e || i("请求地址不存在!"),
                    t.configUrl = e,
                    t.config.setConfigUrl(e),
                    Bc(e).then((function(e) {
                        if (e.success) {
                            console.log("res.result", e.result);
                            var n = t.chart.getOption(); ! 0 === t.getLastOption(n, e.result) ? t.chart.draw(n) : i("请求无数据")
                        } else i(e.message)
                    }))
                }))
            }
        },
        {
            key: "getLastOption",
            value: function(e, t) {
                if (!t || 0 == t.length) return ! 1;
                if (1 == t.length) e.series[0].data = t[0].data;
                else {
                    var n, i = iu(e.series);
                    try {
                        var r = function() {
                            var e = n.value,
                            i = t.filter((function(t) {
                                return t.name = e.name
                            }));
                            i && i.length > 0 && (e.data = i[0].data)
                        };
                        for (i.s(); ! (n = i.n()).done;) r()
                    } catch(e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
                return ! 0
            }
        },
        {
            key: "resize",
            value: function() {
                this.chart.resize()
            }
        },
        {
            key: "configCallback",
            value: function() {
                var e = this;
                this.chart.chartInstance.clear();
                var t = this.config.getConfigInfo();
                t.url ? (this.configUrl = t.url, Bc(t.url).then((function(n) {
                    n.success ? (console.log("res.result", n.result), e.chart.setData(t.json, n.result), e.config.close()) : window.alert(n.message)
                }))) : (this.configUrl = "", this.chart.setData(t.json, !1), this.config.close())
            }
        },
        {
            key: "moveCallback",
            value: function(e) { [0, 1, 2, 3, 4, 5, 5, 6, 7].indexOf(e) >= 0 && this.resize()
            }
        },
        {
            key: "getDrawObject",
            value: function() {
                if (!0 === this.exist && !0 === this.fixed) {
                    var e = parseInt(this.containerTop, 10) + 7,
                    t = parseInt(this.containerLeft, 10) + 7;
                    return {
                        width: this.containerWidth,
                        height: this.containerHeight,
                        top: e,
                        left: t
                    }
                }
                return ! 1
            }
        },
        {
            key: "getLayerType",
            value: function() {
                return "chart"
            }
        },
        {
            key: "getChartConfig",
            value: function() {
                return {
                    url: this.configUrl,
                    option: this.chart.getOption()
                }
            }
        },
        {
            key: "getChartOptions",
            value: function() {
                return {
                    id: this.id,
                    options: this.chart.getOption(),
                    extData: this.extData,
                    offset: [this.offsetX, this.offsetY]
                }
            }
        },
        {
            key: "getJsonData",
            value: function() {
                return ! 0 === this.exist && {
                    row: this.row,
                    col: this.col,
                    width: this.containerWidth,
                    height: this.containerHeight,
                    config: JSON.stringify(this.chart.getOption()),
                    url: this.configUrl,
                    extData: this.extData,
                    layer_id: this.id,
                    offsetX: this.offsetX,
                    offsetY: this.offsetY
                }
            }
        },
        {
            key: "getChartImgUrl",
            value: function(e) {
                return this.chart.getDataURL({
                    backgroundColor: "#fff"
                })
            }
        },
        {
            key: "drawImage",
            value: function(e, t, n, i, r, o) {
                var a = this;
                return new Promise((function(r) {
                    if (!1 === a.exist) r();
                    else {
                        var s = new Image;
                        s.src = a.chart.getImageSrc();
                        var l = parseInt(a.containerWidth, 10) - 14,
                        c = parseInt(a.containerHeight, 10) - 14;
                        s.style.width = l + "px",
                        s.style.height = c + "px";
                        var u = a.containerLeft,
                        h = a.containerTop;
                        o && -1 != o.newTop && -1 != o.newLeft && (u = o.newLeft, h = o.newTop);
                        var d = parseInt(u) + (n ? n.x: 0) - (i ? i.l: 0),
                        f = parseInt(h) + (n ? n.y: 0) - (i ? i.t: 0); ! 0 === a.fixed && (f += 25),
                        s.addEventListener("load", (function() {
                            e.drawImage(s, a.npx(d, t), a.npx(f, t), a.npx(l, t), a.npx(c, t)),
                            r(s)
                        }))
                    }
                }))
            }
        },
        {
            key: "getBase64",
            value: function(e) {
                var t = this;
                return new Promise((function(e) {
                    if (!1 === t.exist) e();
                    else {
                        var n = new Image;
                        n.src = t.chart.getImageSrc();
                        var i = parseInt(t.containerWidth, 10) - 14,
                        r = parseInt(t.containerHeight, 10) - 14;
                        n.width = i,
                        n.height = r,
                        n.addEventListener("load", (function() {
                            var o = t.getImageObject(n, i, r);
                            console.log(o),
                            e(o)
                        }))
                    }
                }))
            }
        },
        {
            key: "getImageObject",
            value: function(e, t, n) {
                var i = document.createElement("canvas");
                i.width = t,
                i.height = n,
                i.getContext("2d").drawImage(e, 0, 0, t, n);
                var r = i.toDataURL();
                return {
                    id: this.id,
                    base64: r
                }
            }
        }]) && su(t.prototype, n),
        i && su(t, i),
        o
    } (Wc);
    function gu(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var pu = function() {
        function e(t) {
            var n = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.tag = t,
            this.change = function() {};
            var r = Z("rpBar.".concat(t.replace(/-[a-z]/g, (function(e) {
                return e[1].toUpperCase()
            })))),
            o = Object(i.b)("div", "ty-bar-btn"),
            a = Object(i.b)("div"),
            s = Object(i.b)("button", t).html(r).on("click", (function() {
                return n.change(n.tag)
            }));
            a.child(s),
            o.child(a),
            this.el = o,
            this.btn = s
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "click",
            value: function() {
                console.log("click")
            }
        },
        {
            key: "setState",
            value: function(e) {
                this.el.disabled(e)
            }
        }]) && gu(t.prototype, n),
        r && gu(t, r),
        e
    } ();
    function mu(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function vu(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var yu = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1";
            mu(this, e),
            this.page = t,
            this.total = n;
            var r = Object(i.b)("input").attr("type", "text").val(t).on("change", this.change),
            o = Object(i.b)("span"),
            a = Object(i.b)("div", "ty-bar-input").children(Object(i.b)("div", "btn-input").child(r), Object(i.b)("div", "btn-text").children(Object(i.b)("span").css("margin-left", "8px").html("/"), o.html(n)));
            this.el = a,
            this.input = r,
            this.countSpan = o,
            this.change = function() {}
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "initPage",
            value: function(e) {
                this.page = e
            }
        },
        {
            key: "change",
            value: function(e) {
                console.log(e)
            }
        },
        {
            key: "setState",
            value: function(e) {
                this.el.disabled(e)
            }
        }]) && vu(t.prototype, n),
        r && vu(t, r),
        e
    } ();
    function bu(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return Cu(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Cu(e, t)
            } (e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        }: {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        }
        var o, a = !0,
        s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return a = e.done,
                e
            },
            e: function(e) {
                s = !0,
                o = e
            },
            f: function() {
                try {
                    a || null == n.
                    return || n.
                    return ()
                } finally {
                    if (s) throw o
                }
            }
        }
    }
    function Cu(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Iu(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var wu = ["print_screen", "print_all"],
    xu = function() {
        function e(t) {
            var n = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.tag = t,
            this.change = function() {};
            var r = Z("rpBar.".concat(t.replace(/-[a-z]/g, (function(e) {
                return e[1].toUpperCase()
            })))),
            o = Object(i.b)("div", "ty-bar-btn").css("overflow", "visible").css("z-index", 999),
            a = Object(i.b)("div").css("position", "relative"),
            s = Object(i.b)("button", t).html(r);
            a.child(s),
            o.child(a),
            this.itemList = Object(i.b)("div", "dropdown-list").css("display", "none"),
            this.initDropdownItem(wu),
            a.child(this.itemList),
            a.child(Object(i.b)("div").css("clear", "both")),
            o.on("mouseover", (function(e) {
                n.itemList.show()
            })).on("mouseout", (function(e) {
                n.itemList.hide()
            })),
            this.el = o
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "initDropdownItem",
            value: function(e) {
                var t, n = this,
                r = bu(e);
                try {
                    var o = function() {
                        var e = t.value,
                        r = Z("rpBar.".concat(e.replace(/-[a-z]/g, (function(e) {
                            return e[1].toUpperCase()
                        }))));
                        n.itemList.child(Object(i.b)("div", "dropdown-item").html(r).on("click", (function(t) {
                            n.change(e)
                        })))
                    };
                    for (r.s(); ! (t = r.n()).done;) o()
                } catch(e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
        },
        {
            key: "initPage",
            value: function(e) {
                this.page = e
            }
        },
        {
            key: "change",
            value: function(e) {
                console.log(e)
            }
        },
        {
            key: "setState",
            value: function(e) {
                this.el.disabled(e)
            }
        }]) && Iu(t.prototype, n),
        r && Iu(t, r),
        e
    } ();
    function Au(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var _u = function() {
        function e(t) {
            var n = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.tag = t,
            this.change = function() {};
            var r = Object(i.b)("div", "ty-slider-container"),
            o = Object(i.b)("input", "ty-slider").attr("type", "range").on("change", (function(e) {
                n.handleChange(e.target.value)
            })),
            a = Object(i.b)("div", "ty-slider-tip").css("transform", "translateX(-50%)"),
            s = Object(i.b)("div", "ty-slider-tip-arrow"),
            l = Object(i.b)("div", "ty-slider-tip-text");
            a.children(s, l),
            r.children(o, a),
            this.el = r,
            this.tip = a,
            this.text = l,
            this.input = o,
            this.setSliderText(0)
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "setState",
            value: function(e) {
                this.el.disabled(e)
            }
        },
        {
            key: "handleChange",
            value: function(e) {
                this.left = e,
                this.input.val(e),
                this.tip.css("left", e + "%");
                var t = Math.ceil(e / 10);
                this.text.html(t),
                this.change(this.tag, t)
            }
        },
        {
            key: "setSliderText",
            value: function(e) {
                this.input.val(e),
                this.text.html(e);
                var t = 10 * e;
                this.tip.css("left", t + "%"),
                0 == e && this.text.html("打印清晰度")
            }
        }]) && Au(t.prototype, n),
        r && Au(t, r),
        e
    } ();
    function Su(e) {
        return (Su = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function ku(e) {
        return function(e) {
            if (Array.isArray(e)) return Lu(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Lu(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Lu(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Lu(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Tu(e, t) {
        return (Tu = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function Ru(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = Pu(e);
            if (t) {
                var r = Pu(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Mu(this, n)
        }
    }
    function Mu(e, t) {
        return ! t || "object" !== Su(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function Pu(e) {
        return (Pu = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Eu = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Tu(e, t)
        } (n, e);
        var t = Ru(n);
        function n(e) {
            var r; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, n);
            var o = (e || [10, 20, 30]).map((function(e) {
                return {
                    key: e,
                    title: "每页".concat(e, "条")
                }
            })),
            a = o.map((function(e) {
                return Object(i.b)("div", "".concat(se, "-item")).on("click", (function() {
                    r.setTitle("".concat(e.title)),
                    e.type = "pageSize",
                    r.change(e)
                })).child("".concat(e.title))
            }));
            return r = t.call.apply(t, [this, o[0].title, "100px", !0, "page-size"].concat(ku(a)))
        }
        return n
    } (Pi);
    function Ou(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return Nu(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Nu(e, t)
            } (e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        }: {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        }
        var o, a = !0,
        s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return a = e.done,
                e
            },
            e: function(e) {
                s = !0,
                o = e
            },
            f: function() {
                try {
                    a || null == n.
                    return || n.
                    return ()
                } finally {
                    if (s) throw o
                }
            }
        }
    }
    function Nu(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Du(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var Bu = ["exportExcel_all", "exportExcel_pdf"],
    ju = function() {
        function e(t) {
            var n = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.tag = t,
            this.change = function() {};
            var r = Z("rpBar.".concat(t.replace(/-[a-z]/g, (function(e) {
                return e[1].toUpperCase()
            })))),
            o = Object(i.b)("div", "ty-bar-btn").css("overflow", "visible").css("z-index", 999),
            a = Object(i.b)("div").css("position", "relative"),
            s = Object(i.b)("button", t).html(r);
            a.child(s),
            o.child(a),
            this.itemList = Object(i.b)("div", "dropdown-list").css("display", "none"),
            this.initDropdownItem(Bu),
            a.child(this.itemList),
            a.child(Object(i.b)("div").css("clear", "both")),
            o.on("mouseover", (function(e) {
                n.itemList.show()
            })).on("mouseout", (function(e) {
                n.itemList.hide()
            })),
            this.el = o
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "initDropdownItem",
            value: function(e) {
                var t, n = this,
                r = Ou(e);
                try {
                    var o = function() {
                        var e = t.value,
                        r = Z("rpBar.".concat(e.replace(/-[a-z]/g, (function(e) {
                            return e[1].toUpperCase()
                        })))),
                        o = Object(i.b)("div", "dropdown-item");
                        o.attr("id", r),
                        n.itemList.child(o.html(r).on("click", (function(t) {
                            n.change(e)
                        })))
                    };
                    for (r.s(); ! (t = r.n()).done;) o()
                } catch(e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
        },
        {
            key: "initPage",
            value: function(e) {
                this.page = e
            }
        },
        {
            key: "change",
            value: function(e) {
                console.log(e)
            }
        },
        {
            key: "setState",
            value: function(e) {
                this.el.disabled(e)
            }
        }]) && Du(t.prototype, n),
        r && Du(t, r),
        e
    } ();
    function Fu(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function Hu(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Wu() {
        return Object(i.b)("div", "".concat(se, "-toolbar-divider"))
    }
    var Vu = function() {
        function e(t, n) {
            var r = this,
            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            Fu(this, e),
            this.data = t,
            this.change = function() {},
            this.widthFn = n,
            this.isHide = o,
            this.el = Object(i.b)("div", "ty-bar-container"),
            this.btns = Object(i.b)("div").css("display", "inline-flex");
            var a = t.settings.page || 1,
            s = t.settings.total || 1,
            l = t.settings.pageSizeList;
            this.items = [this.btn_first = new pu("first"), Wu(), this.btn_last = new pu("last"), Wu(), this.btn_input = new yu(a, s), Wu(), this.page_size = new Eu(l), Wu(), this.btn_next = new pu("next"), Wu(), this.btn_end = new pu("end"), Wu(), this.btn_print = new xu("print"), Wu(), this.btn_export = new ju("export"), Wu(), this.rp_slider = new _u("slider")];
            var c = function(e) {
                var n = t.settings,
                i = n.getPageResult,
                o = n.total,
                a = n.pageSize,
                s = void 0 === a ? 10 : a;
                Number(e) > o && (e = o),
                r.btn_input.input.el.value = e,
                t.settings.page = Number(e),
                i || "function" == typeof i || (i = function() {}),
                i(e, s)
            };
            this.btn_input.input.on("blur", (function(e) {
                c(e.target.value)
            })),
            this.btn_input.input.on("keydown", (function(e) {
                13 === e.keyCode && c(e.target.value)
            })),
            1 === a && (this.btn_first.btn.el.disabled = !0, this.btn_last.btn.el.disabled = !0),
            a >= s && (this.btn_next.btn.el.disabled = !0, this.btn_end.btn.el.disabled = !0),
            this.items.forEach((function(e) {
                r.btns.child(e.el),
                e.change = function() {
                    r.change.apply(r, arguments)
                }
            })),
            this.el.child(this.btns),
            o && this.el.hide()
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "trigger",
            value: function(e) {
                this["".concat(e, "El")].click()
            }
        },
        {
            key: "addClass",
            value: function(e) {
                this.el.addClass(e)
            }
        },
        {
            key: "addStyle",
            value: function(e, t) {
                this.el.css(e, t)
            }
        },
        {
            key: "reset",
            value: function() {
                if (!this.isHide) {
                    var e = this.data,
                    t = e.getSelectedCellStyle(),
                    n = e.getSelectedCell();
                    console.log("style:", t),
                    console.log("cell:", n)
                }
            }
        }]) && Hu(t.prototype, n),
        r && Hu(t, r),
        e
    } ();
    function Gu(e) {
        return function(e) {
            if (Array.isArray(e)) return zu(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) ||
        function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return zu(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zu(e, t)
        } (e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function zu(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Zu(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function $u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var Ku = function() {
        function e(t, n) {
            var r, o = this,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "600px";
            Zu(this, e),
            this.title = t,
            this.el = Object(i.b)("div", "".concat(se, "-modal")).css("width", a).children(Object(i.b)("div", "".concat(se, "-modal-header")).children(new jn("close").on("click.stop", (function() {
                return o.hide()
            })), this.title), (r = Object(i.b)("div", "".concat(se, "-modal-content"))).children.apply(r, Gu(n))).hide()
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "show",
            value: function() {
                var e = this;
                this.dimmer = Object(i.b)("div", "".concat(se, "-dimmer active")),
                document.body.appendChild(this.dimmer.el);
                var t = this.el.show().box(),
                n = t.width,
                r = t.height,
                o = document.documentElement,
                a = o.clientHeight,
                s = o.clientWidth;
                this.el.offset({
                    left: (s - n) / 2,
                    top: (a - r) / 3
                }),
                window.xkeydownEsc = function(t) {
                    27 === t.keyCode && e.hide()
                },
                $t(window, "keydown", window.xkeydownEsc)
            }
        },
        {
            key: "hide",
            value: function() {
                this.el.hide(),
                document.body.removeChild(this.dimmer.el),
                Kt(window, "keydown", window.xkeydownEsc),
                delete window.xkeydownEsc
            }
        }]) && $u(t.prototype, n),
        r && $u(t, r),
        e
    } ();
    function Xu(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var Yu = function() {
        function e(t, n) {
            var r = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.vchange = function() {},
            this.el = Object(i.b)("div", "".concat(se, "-form-input")),
            this.input = Object(i.b)("input", "").css("width", t).on("input", (function(e) {
                return r.vchange(e)
            })).attr("placeholder", n),
            this.el.child(this.input)
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "hint",
            value: function(e) {
                this.input.attr("placeholder", e)
            }
        },
        {
            key: "val",
            value: function(e) {
                return this.input.val(e)
            }
        }]) && Xu(t.prototype, n),
        r && Xu(t, r),
        e
    } ();
    function Uu(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function Ju(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var qu = function() {
        function e(t, n, r) {
            var o = this,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function(e) {
                return e
            },
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {};
            Uu(this, e),
            this.key = t,
            this.getTitle = a,
            this.vchange = function() {},
            this.el = Object(i.b)("div", "".concat(se, "-form-select")),
            this.suggest = new Mn(n.map((function(e) {
                return {
                    key: e,
                    title: o.getTitle(e)
                }
            })), (function(e) {
                o.itemClick(e.key),
                s(e.key),
                o.vchange(e.key)
            }), r, this.el),
            this.el.children(this.itemEl = Object(i.b)("div", "input-text").html(this.getTitle(t)), this.suggest.el).on("click", (function() {
                return o.show()
            }))
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "show",
            value: function() {
                this.suggest.search("")
            }
        },
        {
            key: "itemClick",
            value: function(e) {
                this.key = e,
                this.itemEl.html(this.getTitle(e))
            }
        },
        {
            key: "val",
            value: function(e) {
                return void 0 !== e ? (this.key = e, this.itemEl.html(this.getTitle(e)), this) : this.key
            }
        }]) && Ju(t.prototype, n),
        r && Ju(t, r),
        e
    } ();
    function Qu(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var eh = {
        number: /(^\d+$)|(^\d+(\.\d{0,4})?$)/,
        date: /^\d{4}-\d{1,2}-\d{1,2}$/
    },
    th = function() {
        function e(t, n, r, o) {
            var a = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.label = "",
            this.rule = n,
            r && (this.label = Object(i.b)("label", "label").css("width", "".concat(o, "px")).html(r)),
            this.tip = Object(i.b)("div", "tip").child("tip").hide(),
            this.input = t,
            this.input.vchange = function() {
                return a.validate()
            },
            this.el = Object(i.b)("div", "".concat(se, "-form-field")).children(this.label, t.el, this.tip)
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "isShow",
            value: function() {
                return "none" !== this.el.css("display")
            }
        },
        {
            key: "show",
            value: function() {
                this.el.show()
            }
        },
        {
            key: "hide",
            value: function() {
                return this.el.hide(),
                this
            }
        },
        {
            key: "val",
            value: function(e) {
                return this.input.val(e)
            }
        },
        {
            key: "hint",
            value: function(e) {
                this.input.hint(e)
            }
        },
        {
            key: "validate",
            value: function() {
                var e = this.input,
                t = this.rule,
                n = this.tip,
                i = this.el,
                r = e.val();
                return t.required && /^\s*$/.test(r) ? (n.html(Z("validation.required")), i.addClass("error"), !1) : !t.type && !t.pattern || (t.pattern || eh[t.type]).test(r) ? (i.removeClass("error"), !0) : (n.html(Z("validation.notMatch")), i.addClass("error"), !1)
            }
        }]) && Qu(t.prototype, n),
        r && Qu(t, r),
        e
    } ();
    function nh(e) {
        return (nh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function ih(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function rh(e, t) {
        return (rh = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function oh(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = sh(e);
            if (t) {
                var r = sh(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return ah(this, n)
        }
    }
    function ah(e, t) {
        return ! t || "object" !== nh(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function sh(e) {
        return (sh = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var lh = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && rh(e, t)
        } (n, e);
        var t = oh(n);
        function n(e) {
            var i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return ih(this, n),
            (i = t.call(this, "div", "".concat(se, "-button ").concat(r))).child(Z("button.".concat(e))),
            i
        }
        return n
    } (i.a);
    function ch(e) {
        return (ch = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function uh(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function hh(e, t) {
        return (hh = Object.setPrototypeOf ||
        function(e, t) {
            return e.__proto__ = t,
            e
        })(e, t)
    }
    function dh(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
            if (Reflect.construct.sham) return ! 1;
            if ("function" == typeof Proxy) return ! 0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        return function() {
            var n, i = gh(e);
            if (t) {
                var r = gh(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return fh(this, n)
        }
    }
    function fh(e, t) {
        return ! t || "object" !== ch(t) && "function" != typeof t ?
        function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        } (e) : t
    }
    function gh(e) {
        return (gh = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var ph = function(e) { !
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or controller function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && hh(e, t)
        } (a, e);
        var t, n, r, o = dh(a);
        function a() {
            var e; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, a);
            var t = new th(new qu("cell", ["cell"], "100%", (function(e) {
                return Z("dataValidation.modeType.".concat(e))
            })), {
                required: !0
            },
            "".concat(Z("dataValidation.range"), ":"), 100),
            n = new th(new Yu("120px", "E3 or E3:F12"), {
                required: !0,
                pattern: /^([A-Z]{1,2}[1-9]\d*)(:[A-Z]{1,2}[1-9]\d*)?$/
            }),
            r = new th(new qu("list", ["list", "number", "date", "phone", "email"], "100%", (function(e) {
                return Z("dataValidation.type.".concat(e))
            }), (function(t) {
                return e.criteriaSelected(t)
            })), {
                required: !0
            },
            "".concat(Z("dataValidation.criteria"), ":"), 100),
            s = new th(new qu("be", ["be", "nbe", "eq", "neq", "lt", "lte", "gt", "gte"], "160px", (function(e) {
                return Z("dataValidation.operator.".concat(e))
            }), (function(t) {
                return e.criteriaOperatorSelected(t)
            })), {
                required: !0
            }).hide(),
            l = new th(new Yu("70px", "10"), {
                required: !0
            }).hide(),
            c = new th(new Yu("70px", "100"), {
                required: !0,
                type: "number"
            }).hide(),
            u = new th(new Yu("120px", "controller,excel,c"), {
                required: !0
            }),
            h = new th(new Yu("70px", "10"), {
                required: !0,
                type: "number"
            }).hide();
            return (e = o.call(this, Z("contextmenu.validation"), [Object(i.b)("div", "".concat(se, "-form-fields")).children(t.el, n.el), Object(i.b)("div", "".concat(se, "-form-fields")).children(r.el, s.el, l.el, c.el, h.el, u.el), Object(i.b)("div", "".concat(se, "-buttons")).children(new lh("cancel").on("click", (function() {
                return e.btnClick("cancel")
            })), new lh("remove").on("click", (function() {
                return e.btnClick("remove")
            })), new lh("save", "primary").on("click", (function() {
                return e.btnClick("save")
            })))])).mf = t,
            e.rf = n,
            e.cf = r,
            e.of = s,
            e.minvf = l,
            e.maxvf = c,
            e.vf = h,
            e.svf = u,
            e.change = function() {},
            e
        }
        return t = a,
        (n = [{
            key: "showVf",
            value: function(e) {
                var t = "date" === e ? "2018-11-12": "10",
                n = this.vf;
                n.input.hint(t),
                n.show()
            }
        },
        {
            key: "criteriaSelected",
            value: function(e) {
                var t = this.of,
                n = this.minvf,
                i = this.maxvf,
                r = this.vf,
                o = this.svf;
                "date" === e || "number" === e ? (t.show(), n.rule.type = e, i.rule.type = e, "date" === e ? (n.hint("2018-11-12"), i.hint("2019-11-12")) : (n.hint("10"), i.hint("100")), n.show(), i.show(), r.hide(), o.hide()) : ("list" === e ? o.show() : o.hide(), r.hide(), t.hide(), n.hide(), i.hide())
            }
        },
        {
            key: "criteriaOperatorSelected",
            value: function(e) {
                if (e) {
                    var t = this.minvf,
                    n = this.maxvf,
                    i = this.vf;
                    if ("be" === e || "nbe" === e) t.show(),
                    n.show(),
                    i.hide();
                    else {
                        var r = this.cf.val();
                        i.rule.type = r,
                        "date" === r ? i.hint("2018-11-12") : i.hint("10"),
                        i.show(),
                        t.hide(),
                        n.hide()
                    }
                }
            }
        },
        {
            key: "btnClick",
            value: function(e) {
                if ("cancel" === e) this.hide();
                else if ("remove" === e) this.change("remove"),
                this.hide();
                else if ("save" === e) {
                    for (var t = ["mf", "rf", "cf", "of", "svf", "vf", "minvf", "maxvf"], n = 0; n < t.length; n += 1) {
                        var i = this[t[n]];
                        if (i.isShow() && !i.validate()) return
                    }
                    var r = this.mf.val(),
                    o = this.rf.val(),
                    a = this.cf.val(),
                    s = this.of.val(),
                    l = this.svf.val();
                    "number" !== a && "date" !== a || (l = "be" === s || "nbe" === s ? [this.minvf.val(), this.maxvf.val()] : this.vf.val()),
                    this.change("save", r, o, {
                        type: a,
                        operator: s,
                        required: !1,
                        value: l
                    }),
                    this.hide()
                }
            }
        },
        {
            key: "setValue",
            value: function(e) {
                if (e) {
                    var t = this.mf,
                    n = this.rf,
                    i = this.cf,
                    r = this.of,
                    o = this.svf,
                    a = this.vf,
                    s = this.minvf,
                    l = this.maxvf,
                    c = e.mode,
                    u = e.ref,
                    h = e.validator || {
                        type: "list"
                    },
                    d = h.type,
                    f = h.operator,
                    g = h.value;
                    t.val(c || "cell"),
                    n.val(u),
                    i.val(d),
                    r.val(f),
                    Array.isArray(g) ? (s.val(g[0]), l.val(g[1])) : (o.val(g || ""), a.val(g || "")),
                    this.criteriaSelected(d),
                    this.criteriaOperatorSelected(f)
                }
                this.show()
            }
        }]) && uh(t.prototype, n),
        r && uh(t, r),
        a
    } (Ku);
    function mh(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function vh(e) {
        return Object(i.b)("div", "".concat(se, "-item ").concat(e))
    }
    function yh(e) {
        var t = this;
        return vh("state").child(Z("sort.".concat(e))).on("click.stop", (function() {
            return t.itemClick(e)
        }))
    }
    function bh(e) {
        var t = this,
        n = this.filterbEl,
        r = this.filterValues;
        n.html(""),
        Object.keys(e).forEach((function(o, a) {
            var s = e[o],
            l = r.includes(o) ? "checked": "";
            n.child(Object(i.b)("div", "".concat(se, "-item state ").concat(l)).on("click.stop", (function() {
                return t.filterClick(a, o)
            })).children("" === o ? Z("filter.empty") : o, Object(i.b)("div", "label").html("(".concat(s, ")"))))
        }))
    }
    function Ch() {
        var e = this.filterhEl,
        t = this.filterValues,
        n = this.values;
        e.html("".concat(t.length, " / ").concat(n.length)),
        e.checked(t.length === n.length)
    }
    var Ih = function() {
        function e() {
            var t = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.filterbEl = Object(i.b)("div", "".concat(se, "-body")),
            this.filterhEl = Object(i.b)("div", "".concat(se, "-header state")).on("click.stop", (function() {
                return t.filterClick(0, "all")
            })),
            this.el = Object(i.b)("div", "".concat(se, "-sort-filter")).children(this.sortAscEl = yh.call(this, "asc"), this.sortDescEl = yh.call(this, "desc"), vh("divider"), Object(i.b)("div", "".concat(se, "-filter")).children(this.filterhEl, this.filterbEl), Object(i.b)("div", "".concat(se, "-buttons")).children(new lh("cancel").on("click", (function() {
                return t.btnClick("cancel")
            })), new lh("ok", "primary").on("click", (function() {
                return t.btnClick("ok")
            })))).hide(),
            this.ci = null,
            this.sortDesc = null,
            this.values = null,
            this.filterValues = []
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "btnClick",
            value: function(e) {
                if ("ok" === e) {
                    var t = this.ci,
                    n = this.sort,
                    i = this.filterValues;
                    this.ok && this.ok(t, n, "in", i)
                }
                this.hide()
            }
        },
        {
            key: "itemClick",
            value: function(e) {
                this.sort = e;
                var t = this.sortAscEl,
                n = this.sortDescEl;
                t.checked("asc" === e),
                n.checked("desc" === e)
            }
        },
        {
            key: "filterClick",
            value: function(e, t) {
                var n = this.filterbEl,
                r = this.filterValues,
                o = this.values,
                a = n.children();
                "all" === t ? a.length === r.length ? (this.filterValues = [], a.forEach((function(e) {
                    return Object(i.b)(e).checked(!1)
                }))) : (this.filterValues = Array.from(o), a.forEach((function(e) {
                    return Object(i.b)(e).checked(!0)
                }))) : Object(i.b)(a[e]).toggle("checked") ? r.push(t) : r.splice(r.findIndex((function(e) {
                    return e === t
                })), 1),
                Ch.call(this)
            }
        },
        {
            key: "set",
            value: function(e, t, n, i) {
                this.ci = e;
                var r = this.sortAscEl,
                o = this.sortDescEl;
                null !== i ? (this.sort = i.order, r.checked(i.asc()), o.checked(i.desc())) : (this.sortDesc = null, r.checked(!1), o.checked(!1)),
                this.values = Object.keys(t),
                this.filterValues = n ? Array.from(n.value) : Object.keys(t),
                bh.call(this, t, n),
                Ch.call(this)
            }
        },
        {
            key: "setOffset",
            value: function(e) {
                var t = this;
                this.el.offset(e).show();
                var n = 1;
                Yt(this.el, (function() {
                    n <= 0 && t.hide(),
                    n -= 1
                }))
            }
        },
        {
            key: "show",
            value: function() {
                this.el.show()
            }
        },
        {
            key: "hide",
            value: function() {
                this.el.hide(),
                Xt(this.el)
            }
        }]) && mh(t.prototype, n),
        r && mh(t, r),
        e
    } ();
    function wh(e, t) {
        var n = Object(i.b)("div", "".concat(se, "-toast")),
        r = Object(i.b)("div", "".concat(se, "-dimmer active"));
        n.children(Object(i.b)("div", "".concat(se, "-toast-header")).children(new jn("close").on("click.stop", (function() {
            return document.body.removeChild(n.el),
            void document.body.removeChild(r.el)
        })), e), Object(i.b)("div", "".concat(se, "-toast-content")).html(t)),
        document.body.appendChild(n.el),
        document.body.appendChild(r.el);
        var o = n.box(),
        a = o.width,
        s = o.height,
        l = document.documentElement,
        c = l.clientHeight,
        u = l.clientWidth;
        n.offset({
            left: (u - a) / 2,
            top: (c - s) / 3
        })
    }
    function xh(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var Ah = function() {
        function e(t) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e),
            this.msg = t,
            this.flag = !1
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "show",
            value: function(e) {
                var t, n, r, o, a, s = this;
                this.tipContainer = (t = this.msg, n = Object(i.b)("div", "ty-msg-container"), r = Object(i.b)("div", "ty-msg-notice"), o = Object(i.b)("div", "ty-msg-content"), (a = Object(i.b)("div")).css("display", "inline-block"), a.children(Object(i.b)("span", "ty-msg-icon").html("!"), Object(i.b)("span").html(t)), o.children(a), r.children(o), n.children(r), document.body.appendChild(n.el), n),
                setTimeout((function() {
                    document.body.removeChild(s.tipContainer.el)
                }), e)
            }
        }]) && xh(t.prototype, n),
        r && xh(t, r),
        e
    } ();
    function _h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Sh(e) {
        return (Sh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
    }
    function kh(e) {
        return function(e) {
            if (Array.isArray(e)) return Mh(e)
        } (e) ||
        function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        } (e) || Rh(e) ||
        function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Lh(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = Rh(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        }: {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        }
        var o, a = !0,
        s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return a = e.done,
                e
            },
            e: function(e) {
                s = !0,
                o = e
            },
            f: function() {
                try {
                    a || null == n.
                    return || n.
                    return ()
                } finally {
                    if (s) throw o
                }
            }
        }
    }
    function Th(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        } (e) ||
        function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
            i = !0,
            r = !1,
            o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); ! (i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try {
                    i || null == s.
                    return || s.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
            return n
        } (e, t) || Rh(e, t) ||
        function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have controller [Symbol.iterator]() method.")
        } ()
    }
    function Rh(e, t) {
        if (e) {
            if ("string" == typeof e) return Mh(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Mh(e, t) : void 0
        }
    }
    function Mh(e, t) { (null == t || t > e.length) && (t = e.length);
        for (var n = 0,
        i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    function Ph() {
        var e = this.data,
        t = this.verticalScrollbar,
        n = this.horizontalScrollbar,
        i = e.getSelectedRect(),
        r = i.l,
        o = i.t,
        a = i.left,
        s = i.top,
        l = i.width,
        c = i.height,
        u = this.getTableOffset();
        if (Math.abs(a) + l > u.width) n.move({
            left: r + l - u.width
        });
        else {
            var h = e.freezeTotalWidth();
            a < h && n.move({
                left: r - 1 - h
            })
        }
        if (Math.abs(s) + c > u.height) t.move({
            top: o + c - u.height - 1
        });
        else {
            var d = e.freezeTotalHeight();
            s < d && t.move({
                top: o - 1 - d
            })
        }
    }
    function Eh(e, t, n) {
        var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ( - 1 !== t || -1 !== n) {
            var o = this.table,
            a = this.selector,
            s = this.toolbar,
            l = (this.layerList, this.data.settings);
            if (l) {
                if (!0 === l.readOnly) return;
                if (l.readOnlyCol && l.readOnlyCol.includes(n)) return
            }
            e ? a.setEnd(t, n, r) : a.set(t, n, i),
            s.reset(),
            o.render()
        }
    }
    function Oh(e, t) {
        var n = this.selector,
        i = this.data,
        r = i.rows,
        o = i.cols,
        a = Th(n.indexes, 2),
        s = a[0],
        l = a[1],
        c = n.range,
        u = c.eri,
        h = c.eci;
        if (e) {
            var d = Th(n.moveIndexes, 2);
            s = d[0],
            l = d[1]
        }
        "left" === t ? l > 0 && (l -= 1) : "right" === t ? (h !== l && (l = h), l < o.len - 1 && (l += 1)) : "up" === t ? s > 0 && (s -= 1) : "down" === t ? (u !== s && (s = u), s < r.len - 1 && (s += 1)) : "row-first" === t ? l = 0 : "row-last" === t ? l = o.len - 1 : "col-first" === t ? s = 0 : "col-last" === t && (s = r.len - 1),
        e && (n.moveIndexes = [s, l]),
        Eh.call(this, e, s, l),
        Ph.call(this)
    }
    function Nh(e) {
        if (0 === e.buttons && e.target.className !== "".concat(se, "-resizer-hover")) {
            var t = e.offsetX,
            n = e.offsetY,
            i = this.rowResizer,
            r = this.colResizer,
            o = this.tableEl,
            a = this.data,
            s = a.rows,
            l = a.cols;
            if (t > l.indexWidth && n > s.height) {
                i.hide(),
                r.hide();
                var c = a.scroll,
                u = c.x,
                h = c.y,
                d = t - (Number(a.printElWidth) - u);
                if (d < 62 && d > 58) {
                    var f = o.box(),
                    g = {
                        left: t,
                        top: n - 12.5,
                        height: 25,
                        width: 8,
                        print: !0
                    };
                    r.printShow(g, {
                        height: f.height
                    })
                }
                var p = n - (Number(a.printElHeight) - h);
                if (p < 26 && p > 24) {
                    var m = o.box(),
                    v = {
                        left: t - 12,
                        top: n,
                        height: 8,
                        width: 24,
                        print: !0
                    };
                    i.printShow(v, {
                        width: m.width
                    })
                }
            } else {
                var y = o.box(),
                b = a.getCellRectByXY(e.offsetX, e.offsetY);
                b.ri >= 0 && -1 === b.ci ? (b.width = l.indexWidth, i.show(b, {
                    width: y.width
                })) : i.hide(),
                -1 === b.ri && b.ci >= 0 ? (b.height = s.height, r.show(b, {
                    height: y.height
                })) : r.hide()
            }
        }
    }
    function Dh(e) {
        var t = this.verticalScrollbar,
        n = this.horizontalScrollbar,
        i = this.data,
        r = t.scroll().top,
        o = n.scroll().left,
        a = i.rows,
        s = i.cols,
        l = e.deltaY;
        if (e.detail && (l = 40 * e.detail), l > 0) {
            var c = i.scroll.ri + 1;
            c < a.len && t.move({
                top: r + a.getHeight(c) - 1
            })
        } else {
            var u = i.scroll.ri - 1;
            u >= 0 && t.move({
                top: 0 === u ? 0 : r - a.getHeight(u)
            })
        }
        if (e.deltaX > 0) {
            var h = i.scroll.ci + 1;
            h < s.len && n.move({
                left: o + s.getWidth(h) - 1
            })
        } else {
            var d = i.scroll.ci - 1;
            d >= 0 && n.move({
                left: 0 === d ? 0 : o - s.getWidth(d)
            })
        }
    }
    function Bh(e, t) {
        var n = this.verticalScrollbar,
        i = this.horizontalScrollbar,
        r = n.scroll().top,
        o = i.scroll().left;
        "left" === e || "right" === e ? i.move({
            left: o - t
        }) : "up" !== e && "down" !== e || n.move({
            top: r - t
        })
    }
    function jh() {
        var e = this.data,
        t = this.verticalScrollbar,
        n = this.getTableOffset().height,
        i = e.exceptRowTotalHeight(0, -1);
        t.set(n, e.rows.totalHeight() - i)
    }
    function Fh() {
        var e = this.data,
        t = this.horizontalScrollbar,
        n = this.getTableOffset().width;
        e && t.set(n, e.cols.totalWidth())
    }
    function Hh() {
        var e = this.selector,
        t = this.data,
        n = this.editor,
        i = Th(t.freeze, 2),
        r = i[0],
        o = i[1];
        if (r > 0 || o > 0) {
            var a = t.freezeTotalWidth(),
            s = t.freezeTotalHeight();
            n.setFreezeLengths(a, s)
        }
        e.resetAreaOffset()
    }
    function Wh() {
        var e = this.data,
        t = function(e) {
            var t = tc.filter((function(t) {
                return t.key == e
            }));
            if (t.length > 0) {
                var n = t[0].value.replace(e, "");
                return {
                    w: rc(n),
                    h: oc(n)
                }
            }
            return ! 1
        } (e.toolPrintSizeObj.printType),
        n = t.w,
        i = t.h;
        e.setPrintPaperInfo(n, i)
    }
    function Vh(e) {
        var t = this.tableEl,
        n = this.overlayerEl,
        i = this.overlayerCEl,
        r = this.table,
        o = this.toolbar,
        a = this.selector,
        s = this.el,
        l = this.data,
        c = this.getTableOffset(),
        u = this.getRect();
        t.attr(u),
        n.offset(u),
        l.settings.readOnly && (c.top = c.top - 25),
        i.offset(c),
        s.css("width", "".concat(u.width, "px")),
        jh.call(this),
        Fh.call(this),
        Hh.call(this),
        r.render(this.data.printElWidth, this.data.printElHeight, e),
        o.reset(),
        a.reset()
    }
    function Gh() {
        var e = this.data,
        t = this.selector;
        e.clearClipboard(),
        t.hideClipboard()
    }
    function zh() {
        var e = this.data,
        t = this.selector;
        e.copy(),
        t.showClipboard()
    }
    function Zh() {
        var e = this.data,
        t = this.selector;
        e.cut(),
        t.showClipboard()
    }
    function $h(e) {
        this.data.paste(e, (function(e) {
            return wh("Tip", e)
        })) && Vh.call(this)
    }
    function Kh() {
        var e = this.toolbar;
        e.paintformatActive() && ($h.call(this, "format"), Gh.call(this), e.paintformatToggle())
    }
    function Xh(e, t) {
        var n = e.width,
        i = e.height,
        r = e.top,
        o = e.left,
        a = parseInt(r) + parseInt(i),
        s = parseInt(o) + parseInt(n),
        l = parseInt(t.x),
        c = parseInt(t.y);
        return o = parseInt(o, 10),
        r = parseInt(r, 10),
        l <= s && l >= o && c <= a && c >= r
    }
    function Yh(e) {
        var t = this,
        n = this.selector,
        i = this.data,
        r = this.table,
        o = this.sortFilter,
        a = e.offsetX,
        s = e.offsetY;
        if (this.layerList && this.layerList.length > 0) {
            var l, c = {
                x: a,
                y: s
            },
            u = Lh(this.layerList);
            try {
                for (u.s(); ! (l = u.n()).done;) {
                    var h = l.value,
                    d = h.getLayerRect(),
                    f = d.width,
                    g = d.height,
                    p = d.row,
                    m = d.col,
                    v = i.getRCPosition(p, m);
                    Object.assign(v, {
                        width: f,
                        height: g
                    }),
                    h.isBackend && (this.insideLayerItem = h),
                    h.isBackendImg && (this.insideLayerImg = h),
                    !0 === Xh(v, c) && (console.log("在内部"), h.commonBackend || h.showContainer())
                }
            } catch(e) {
                u.e(e)
            } finally {
                u.f()
            }
        }
        console.log("鼠标点击事件,offsetX=" + a + ",offsetY=" + s);
        var y = e.target.className === "".concat(se, "-selector-corner"),
        b = i.getCellRectByXY(a, s),
        C = b.left,
        I = b.top,
        w = b.width,
        x = b.height;
        n.setCellRect(b);
        var A = b.ri,
        _ = b.ci,
        S = i.autoFilter;
        if (S.includes(A, _) && C + w - 20 < a && I + x - 20 < s) {
            var k = S.items(_, (function(e, t) {
                return i.rows.getCell(e, t)
            }));
            return o.set(_, k, S.getFilter(_), S.getSort(_)),
            void o.setOffset({
                left: C,
                top: I + x + 2
            })
        }
        e.shiftKey || (y ? n.showAutofill(A, _) : Eh.call(this, !1, A, _), Ut(window, (function(e) {
            var r = i.getCellRectByXY(e.offsetX, e.offsetY);
            A = r.ri,
            _ = r.ci,
            y ? n.showAutofill(A, _) : 1 !== e.buttons || e.shiftKey || Eh.call(t, !0, A, _, !0, !0)
        }), (function() {
            y && i.autofill(n.arange, "all", (function(e) {
                return wh("Tip", e)
            })) && r.render(),
            n.hideAutofill(),
            Kh.call(t)
        }))),
        y || 1 !== e.buttons || e.shiftKey && Eh.call(this, !0, A, _)
    }
    function Uh() {
        var e = this.editor,
        t = this.data.getSelectedRect(),
        n = this.getTableOffset(),
        i = "top";
        t.top > n.height / 2 && (i = "bottom"),
        e.setOffset(t, i)
    }
    function Jh() {
        var e = this.editor,
        t = this.data;
        Uh.call(this),
        e.setCell(t.getSelectedCell(), t.getSelectedValidator()),
        Gh.call(this)
    }
    function qh(e, t) {
        if (this.layerList && this.layerList.length > 0) {
            var n, i = Lh(this.layerList);
            try {
                for (i.s(); ! (n = i.n()).done;) {
                    n.value.scrollMove(e, t)
                }
            } catch(e) {
                i.e(e)
            } finally {
                i.f()
            }
        }
    }
    function Qh(e) {
        var t = this,
        n = this.data,
        i = this.table,
        r = this.selector;
        n.scrolly(e, (function() {
            r.resetBRLAreaOffset();
            n.getSelectedRect();
            Uh.call(t),
            i.render().then((function() {
                setTimeout((function() {
                    qh.call(t, parseInt(n.scroll.y, 10), !0)
                }), 15)
            }))
        }))
    }
    function ed(e) {
        var t = this,
        n = this.data,
        i = this.table,
        r = this.selector;
        n.scrollx(e, (function() {
            r.resetBRTAreaOffset(),
            Uh.call(t),
            i.render().then((function() {
                setTimeout((function() {
                    qh.call(t, parseInt(n.scroll.x, 10), !1)
                }), 15)
            }))
        }))
    }
    function td(e, t) {
        if (!0 === e.print) {
            var n = Number(this.data.printElHeight) + t;
            n <= 25 ? this.custTip("打印区域太小了,操作返回!") : (this.data.changeElHeight(n), this.table.changePrintLine(this.data.printElWidth, this.data.printElHeight))
        } else {
            var i = e.ri,
            r = this.table,
            o = this.selector;
            this.data.rows.setHeight(i, t),
            r.render(),
            o.resetAreaOffset(),
            jh.call(this),
            Uh.call(this)
        }
    }
    function nd(e, t) {
        if (!0 === e.print) {
            var n = Number(this.data.printElWidth) + t;
            n <= 100 ? this.custTip("打印区域太小了,操作返回!") : (this.data.changeElWidth(n), this.table.changePrintLine(this.data.printElWidth, this.data.printElHeight))
        } else {
            var i = e.ci,
            r = this.table,
            o = this.selector;
            this.data.cols.setWidth(i, t),
            r.render(),
            o.resetAreaOffset(),
            Fh.call(this),
            Uh.call(this)
        }
    }
    function id(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "finished",
        n = this.data,
        i = this.table; ! 0 !== n.settings.readOnly && (n.setSelectedCellText(e, t), "finished" === t && i.render())
    }
    function rd(e) {
        var t = this,
        n = this.data;
        if ("insert-row" === e) n.insert("row");
        else if ("delete-row" === e) n.delete("row");
        else if ("insert-column" === e) n.insert("column");
        else if ("delete-column" === e) n.delete("column");
        else if ("delete-cell" === e) n.deleteCell();
        else if ("delete-cell-format" === e) n.deleteCell("format");
        else if ("delete-cell-text" === e) n.deleteCell("text");
        else if ("cell-printable" === e) {
            var i = this.selector.range;
            this.data.changeData((function() {
                i.each((function(e, n) {
                    if (null !== t.data.rows.get(e)) {
                        var i = t.data.rows.getCell(e, n);
                        console.log("CELL", i),
                        null !== i && (i.printable = !0)
                    }
                }))
            }))
        } else if ("cell-non-printable" === e) {
            var r = this.selector.range;
            this.data.changeData((function() {
                r.each((function(e, n) {
                    if (null !== t.data.rows.get(e)) {
                        var i = t.data.rows.getCell(e, n);
                        console.log("CELL", i),
                        null !== i && (i.printable = !1)
                    }
                }))
            }))
        } else if ("cell-editable" === e) {
            var o = this.selector.range;
            this.data.changeData((function() {
                o.each((function(e, n) {
                    if (null !== t.data.rows.get(e)) {
                        var i = t.data.rows.getCell(e, n);
                        console.log("CELL", i),
                        null !== i && (i.editable = !0)
                    }
                }))
            }))
        } else if ("cell-non-editable" === e) {
            var a = this.selector.range;
            this.data.changeData((function() {
                a.each((function(e, n) {
                    if (null !== t.data.rows.get(e)) {
                        var i = t.data.rows.getCell(e, n);
                        console.log("CELL", i),
                        null !== i && (i.editable = !1)
                    }
                }))
            }))
        }
        Gh.call(this),
        Vh.call(this)
    }
    function od(e) {
        var t = this,
        n = this,
        i = this.data.settings,
        r = i.domain,
        o = i.uploadUrl;
        o || (o = "/design/report/upload"),
        Dc(e, r + o).then((function(e) {
            sd.call(n, {
                src: e.message
            }),
            t.toolbar.InsertImgEl.img.el.value = ""
        })).
        catch((function(e) {
            n.custTip(e)
        }))
    }
    function ad(e) {
        var t = this,
        n = this,
        i = this.data.settings,
        r = i.domain,
        o = i.uploadExcelUrl;
        o || (o = "/design/report/importExcel"),
        Dc(e, r + o).then((function(e) {
            t.onUploadExcel(e)
        })).
        catch((function(e) {
            n.custTip(e)
        }))
    }
    function sd(e) {
        var t = this.selector.cellRect,
        n = t.left,
        i = t.top,
        r = t.ri,
        o = t.ci,
        a = this.data.settings,
        s = a.domain,
        l = a.viewLocalImage,
        c = this.toolbar,
        u = new Xc({
            src: e.src,
            domain: s,
            viewLocalImage: l,
            top: i,
            left: n,
            toolbar: c
        }).initRCPosition(r, o);
        u.focusLayer(),
        hd.call(this, u, !1)
    }
    function ld(e) {
        var t = this.data.settings,
        n = t.domain,
        i = t.viewLocalImage;
        console.log("图片参数", e);
        var r = e.src,
        o = e.width,
        a = e.height,
        s = e.row,
        l = e.col,
        c = e.isBackend,
        u = e.isBackendImg,
        h = e.commonBackend;
        console.log("this.datathis.datathis.data", this.data);
        var d = this.data.getRCPosition(s, l),
        f = d.top,
        g = d.left,
        p = this.toolbar,
        m = new Xc({
            domain: n,
            viewLocalImage: i,
            src: r,
            top: f,
            left: g,
            width: o,
            height: a,
            isBackend: c,
            isBackendImg: u,
            commonBackend: h,
            toolbar: p
        }).initRCPosition(s, l);
        m.toggleFocus(!1),
        e.virtualCellRange && m.setVirtualCellRange(e.virtualCellRange),
        e.layer_id && m.setId(e.layer_id),
        e.offsetX && e.offsetY && m.updateOffset(e.offsetX, e.offsetY),
        hd.call(this, m, !0)
    }
    function cd(e, t) {
        var n = this,
        i = this.selector.cellRect,
        r = i.left,
        o = i.top,
        a = i.ri,
        s = i.ci,
        l = new fu({
            top: o,
            left: r
        }).initRCPosition(a, s);
        l.focusLayer(),
        dd.call(this, l.id),
        l.initOption(e, t).then((function() {
            hd.call(n, l, !1),
            l.resize()
        })).
        catch((function(e) {
            n.custTip(e)
        }))
    }
    function ud(e) {
        var t = this.data.settings.readOnly,
        n = e.row,
        i = e.col,
        r = e.width,
        o = e.height,
        a = e.config,
        s = e.url,
        l = e.extData,
        c = this.data.getRCPosition(n, i),
        u = c.top,
        h = c.left,
        d = new fu({
            top: u,
            left: h,
            width: r,
            height: o,
            readOnly: t
        }).initChart(JSON.parse(a), s).initRCPosition(n, i).setChartExtData(l);
        d.toggleFocus(!1),
        hd.call(this, d, !0),
        d.resize(),
        e.virtualCellRange && d.setVirtualCellRange(e.virtualCellRange),
        e.layer_id && d.setId(e.layer_id),
        e.offsetX && e.offsetY && d.updateOffset(e.offsetX, e.offsetY),
        t && d.showContainer()
    }
    function hd(e, t) {
        var n = this; ! 1 === this.data.settings.showToolbar && e.disable(),
        e.change = function(t, i) {
            "fixed" === t ? n.overlayerCEl.child(e.el) : "active" === t ? n.el.child(e.el) : "selected" === t ? dd.call(n, i) : "delete" === t && fd.call(n, i)
        },
        e.moveChange = function(e, t) {
            var i = n.data.getCellRectByXY(t, e);
            return {
                row: i.ri,
                col: i.ci,
                left: i.left,
                top: i.top
            }
        },
        e.setFixed(t),
        !0 === t ? this.overlayerCEl.child(e.el) : this.el.child(e.el),
        this.layerList.push(e)
    }
    function dd(e) {
        var t, n = Lh(this.layerList);
        try {
            for (n.s(); ! (t = n.n()).done;) {
                var i = t.value;
                if (i.id === e) {
                    if ("chart" === i.type) {
                        var r = i.getChartOptions();
                        this.selectedChartId = r.id,
                        this.onSelectChart(r)
                    } else if ("img" === i.type) {
                        var o = i.getImgOptions();
                        this.selectedChartId = o.id,
                        this.onSelectChart(o)
                    }
                } else i.unselect()
            }
        } catch(e) {
            n.e(e)
        } finally {
            n.f()
        }
    }
    function fd(e) {
        var t, n = Lh(this.layerList);
        try {
            for (n.s(); ! (t = n.n()).done;) {
                var i = t.value;
                if (!1 === i.exist && i.id === e) {
                    var r, o = Lh(i.virtualCellRange);
                    try {
                        for (o.s(); ! (r = o.n()).done;) {
                            var a, s = r.value; (a = this.data).removeCell.apply(a, kh(s))
                        }
                    } catch(e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    break
                }
            }
        } catch(e) {
            n.e(e)
        } finally {
            n.f()
        }
        this.onChartDelete(e)
    }
    function gd() {
        var e = this;
        return new Promise((function(t) {
            if (e.layerList && 0 != e.layerList.length) {
                var n, i = [],
                r = [],
                o = Lh(e.layerList);
                try {
                    for (o.s(); ! (n = o.n()).done;) {
                        var a = n.value,
                        s = a.getJsonData();
                        if (!1 !== s) {
                            var l = a.getLayerType();
                            "img" === l ? i.push(s) : "chart" === l && r.push(s)
                        }
                    }
                } catch(e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                t({
                    imgList: i,
                    chartList: r
                })
            } else t(!1)
        }))
    }
    function pd(e, t) {
        var n = this.data;
        if ("undo" === e) this.undo();
        else if ("view" === e) window.open(n.settings.viewUrl);
        else if ("redo" === e) this.redo();
        else if ("img" === e) od.call(this, t);
        else if ("uploadExcel" === e) {
            if ("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" !== t.type) return void this.custTip("请选择Excel文件");
            ad.call(this, t)
        } else if ("chart" === e) {
            var i = this.selector.cellRect,
            r = i.left,
            o = i.top,
            a = i.ri,
            s = i.ci;
            this.onAddChart({
                left: r,
                top: o,
                row: a,
                col: s
            })
        } else if ("save" === e) gd.call(this).then((function(e) {
            n.saveJsonData(e)
        }));
        else if ("print" === e) n.printPage(this.layerList);
        else if ("paintformat" === e) ! 0 === t ? zh.call(this) : Gh.call(this);
        else if ("clearformat" === e) rd.call(this, "delete-cell-format");
        else if ("link" === e);
        else if ("autofilter" === e) this.custTip("此功能正在开发");
        else if ("freeze" === e) if (t) {
            var l = n.selector,
            c = l.ri,
            u = l.ci;
            this.freeze(c, u)
        } else this.freeze(0, 0);
        else "error" === e ? this.custTip(t) : (n.setSelectedCellAttr(e, t), "formula" !== e || n.selector.multiple() || Jh.call(this), Vh.call(this))
    }
    function md(e, t) {
        var n = this.data,
        i = null;
        if ("object" === Sh(e) && (i = e, e = e.type), "exportExcel_page" === e) this.onExportExcelPage(n.settings);
        else if ("exportExcel_pdf" === e) n.saveAsPdf(this.rpbar, this.layerList, this.data.settings.pdfName);
        else if ("exportExcel_all" === e) this.onExportExcelAll(n.settings);
        else if ("print_screen" === e) n.printPage(this.rpbar, this.layerList);
        else if ("pdf" === e) n.saveAsPdf(this.rpbar, this.layerList, this.data.settings.pdfName);
        else if ("print_all" === e) n.printPageAll(this.rpbar, this.layerList);
        else if ("print_selector" === e) n.printPageArea(this.rpbar, this.layerList);
        else if ("slider" === e) n.changePrintDegree(t);
        else if (["last", "next", "first", "end", "pageSize"].includes(e)) {
            var r = this.rpbar.btn_input.input.el,
            o = n.settings,
            a = o.getPageResult,
            s = o.page;
            a || "function" == typeof a || (a = function() {});
            var l = this.rpbar.btn_first.btn.el,
            c = this.rpbar.btn_next.btn.el,
            u = this.rpbar.btn_last.btn.el,
            h = this.rpbar.btn_end.btn.el,
            d = this.data.settings.total,
            f = void 0 === d ? 1 : d;
            l.disabled = !1,
            c.disabled = !1,
            u.disabled = !1,
            h.disabled = !1;
            var g = Number(s || 1);
            "last" === e ? (g -= 1) <= 1 && (l.disabled = !0, u.disabled = !0, g = 1) : "next" === e ? (g += 1) >= f && (c.disabled = !0, h.disabled = !0) : "first" === e ? (g = 1, l.disabled = !0, u.disabled = !0) : "end" === e ? (g = f, c.disabled = !0, h.disabled = !0) : "pageSize" === e && (n.settings.pageSize = i.key),
            r.value = g,
            this.data.settings.page = g,
            a(g, n.settings.pageSize)
        }
    }
    function vd(e, t, n, i) {
        this.data.setAutoFilter(e, t, n, i),
        Vh.call(this)
    }
    function yd() {
        var e, t, n, i, r, o, a = this,
        s = this.overlayerEl,
        l = this.rowResizer,
        c = this.colResizer,
        u = this.verticalScrollbar,
        h = this.horizontalScrollbar,
        d = this.editor,
        f = this.contextMenu,
        g = this.data,
        p = this.toolbar,
        m = this.modalValidation,
        v = this.sortFilter;
        s.on("mousemove", (function(e) {
            Nh.call(a, e)
        })).on("mousedown", (function(e) {
            2 === e.buttons ? g.xyInSelectedRect(e.offsetX, e.offsetY) ? (f.setPosition(e.offsetX, e.offsetY), e.stopPropagation()) : (Yh.call(a, e), f.setPosition(e.offsetX, e.offsetY), e.stopPropagation()) : 2 === e.detail ? Jh.call(a) : (d.clear(), Yh.call(a, e))
        })).on("mousewheel.stop", (function(e) {
            Dh.call(a, e)
        })),
        e = s.el,
        n = (t = {
            move: function(e, t) {
                Bh.call(a, e, t)
            }
        }).move,
        i = t.end,
        r = 0,
        o = 0,
        $t(e, "touchstart", (function(e) {
            var t = e.touches[0],
            n = t.pageX,
            i = t.pageY;
            r = n,
            o = i
        })),
        $t(e, "touchmove", (function(e) {
            if (n) {
                var t = e.changedTouches[0],
                i = t.pageX,
                a = t.pageY,
                s = i - r,
                l = a - o; (Math.abs(s) > 10 || Math.abs(l) > 10) && (Jt(s, l, e, n), r = i, o = a),
                e.preventDefault()
            }
        })),
        $t(e, "touchend", (function(e) {
            if (i) {
                var t = e.changedTouches[0],
                n = t.pageX,
                a = t.pageY;
                Jt(n - r, a - o, e, i)
            }
        })),
        p.change = function(e, t) {
            return pd.call(a, e, t)
        },
        p.toolPrintSizeEl.change = function(e, t) {
            console.log("data,", g),
            p.toolPrintSizeEl.setState(t);
            var n = ic(t),
            i = rc(n),
            r = oc(n),
            o = g.toolPrintSizeObj = {};
            o.printType = t,
            o.widthPx = i,
            o.heightPx = r,
            a.data.setPrintPaperInfo(i, r),
            a.table.render(i, r)
        },
        v.ok = function(e, t, n, i) {
            return vd.call(a, e, t, n, i)
        },
        l.finishedFn = function(e, t) {
            td.call(a, e, t)
        },
        c.finishedFn = function(e, t) {
            nd.call(a, e, t)
        },
        u.moveFn = function(e, t) {
            Qh.call(a, e, t)
        },
        h.moveFn = function(e, t) {
            ed.call(a, e, t)
        },
        d.change = function(e, t) {
            id.call(a, t, e)
        },
        m.change = function(e) {
            if ("save" === e) {
                for (var t = arguments.length,
                n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                g.addValidation.apply(g, n)
            } else g.removeValidation()
        },
        f.itemClick = function(e) {
            "validation" === e ? m.setValue(g.getSelectedValidation()) : "copy" === e ? zh.call(a) : "cut" === e ? Zh.call(a) : "paste" === e ? $h.call(a, "all") : "paste-value" === e ? $h.call(a, "text") : "paste-format" === e ? $h.call(a, "format") : "cancleBackend" === e ? (a.insideLayerItem && a.insideLayerItem.cancelBackend(), a.insideLayerImg && a.insideLayerImg.cancelBackendImg()) : rd.call(a, e)
        },
        $t(window, "resize", (function() {
            bd.call(a),
            a.reload()
        })),
        $t(window, "click", (function(e) {
            a.focusing = s.contains(e.target)
        })),
        $t(window, "keydown", (function(e) {
            if (a.focusing) {
                var t = e.keyCode || e.which,
                n = e.key,
                i = e.ctrlKey,
                r = e.shiftKey,
                o = e.altKey,
                s = e.metaKey;
                if (i || s) {
                    var l = "all";
                    switch (r && (l = "text"), o && (l = "format"), t) {
                    case 90:
                        a.undo(),
                        e.preventDefault();
                        break;
                    case 83:
                        gd.call(a).then((function(e) {
                            g.saveJsonData(e)
                        })),
                        e.preventDefault();
                        break;
                    case 89:
                        a.redo(),
                        e.preventDefault();
                        break;
                    case 67:
                        zh.call(a),
                        e.preventDefault();
                        break;
                    case 88:
                        Zh.call(a),
                        e.preventDefault();
                        break;
                    case 85:
                        p.trigger("underline"),
                        e.preventDefault();
                        break;
                    case 86:
                        $h.call(a, l),
                        e.preventDefault();
                        break;
                    case 37:
                        Oh.call(a, r, "row-first"),
                        e.preventDefault();
                        break;
                    case 38:
                        Oh.call(a, r, "col-first"),
                        e.preventDefault();
                        break;
                    case 39:
                        Oh.call(a, r, "row-last"),
                        e.preventDefault();
                        break;
                    case 40:
                        Oh.call(a, r, "col-last"),
                        e.preventDefault();
                        break;
                    case 32:
                        Eh.call(a, !1, -1, g.selector.ci, !1),
                        e.preventDefault();
                        break;
                    case 66:
                        p.trigger("bold");
                        break;
                    case 73:
                        p.trigger("italic")
                    }
                } else {
                    switch (t) {
                    case 32:
                        r && Eh.call(a, !1, g.selector.ri, -1, !1);
                        break;
                    case 27:
                        f.hide(),
                        Gh.call(a);
                        break;
                    case 37:
                        Oh.call(a, r, "left"),
                        e.preventDefault();
                        break;
                    case 38:
                        Oh.call(a, r, "up"),
                        e.preventDefault();
                        break;
                    case 39:
                        Oh.call(a, r, "right"),
                        e.preventDefault();
                        break;
                    case 40:
                        Oh.call(a, r, "down"),
                        e.preventDefault();
                        break;
                    case 9:
                        d.clear(),
                        Oh.call(a, !1, r ? "left": "right"),
                        e.preventDefault();
                        break;
                    case 13:
                        d.clear(),
                        Oh.call(a, !1, r ? "up": "down"),
                        e.preventDefault();
                        break;
                    case 8:
                        rd.call(a, "delete-cell-text"),
                        e.preventDefault()
                    }
                    "Delete" === n ? (rd.call(a, "delete-cell-text"), e.preventDefault()) : t >= 65 && t <= 90 || t >= 48 && t <= 57 || t >= 96 && t <= 105 || "=" === e.key ? (id.call(a, e.key, "input"), Jh.call(a)) : 113 === t && Jh.call(a)
                }
            }
        }))
    }
    function bd() {
        var e = this.overlayerEl.css("height"),
        t = Number(e.split("px")[0]) - 40;
        this.verticalScrollbar.bottom(t)
    }
    function Cd(e) {
        var t = this;
        "object" == Sh(e) && (e.style && Object.keys(e.style).map((function(n) {
            t.rpbar.addStyle(n, e.style[n])
        })), e.clazz && e.clazz.map((function(e) {
            t.rpbar.addClass(e)
        })))
    }
    var Id = function() {
        function e(t, n) {
            var r = this; !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
            } (this, e);
            var o = n.settings,
            a = o.view,
            s = o.showToolbar,
            l = o.showContextmenu,
            c = o.rpBar,
            u = o.readOnly;
            this.el = Object(i.b)("div", "".concat(se, "-sheet")),
            this.layerList = [],
            this.toolbar = new Lc(n, a.width, !s),
            !
            function(e) {
                return !! e && ("boolean" == typeof e && e || "object" == Sh(e) && 1 == e.show)
            } (c) ? t.children(this.toolbar.el, this.el) : (this.rpbar = new Vu(n, a.width), this.rpbar.change = function(e, t) {
                return md.call(r, e, t)
            },
            t.children(this.toolbar.el, this.rpbar.el, this.el), Cd.call(this, c)),
            this.data = n,
            this.tableEl = Object(i.b)("canvas", "".concat(se, "-table")),
            console.log("data.rows.height", n.rows.height),
            console.log("data.cols.minWidth", n.rows.height),
            this.rowResizer = new en(!1, n.rows.minRowResizerHeight),
            this.colResizer = new en(!0, n.cols.minColResizerHeight),
            this.verticalScrollbar = new nn(!0),
            this.horizontalScrollbar = new nn(!1),
            this.editor = new ni(Ae, (function() {
                return r.getTableOffset()
            }), n.rows.height, u),
            this.modalValidation = new ph,
            this.contextMenu = new ui((function() {
                return r.getTableOffset()
            }), !l),
            this.selector = new wn(n),
            this.overlayerCEl = Object(i.b)("div", "".concat(se, "-overlayer-content")).children(this.editor.el, this.selector.el),
            this.overlayerEl = Object(i.b)("div", "".concat(se, "-overlayer")).child(this.overlayerCEl),
            this.sortFilter = new Ih,
            this.el.children(this.tableEl, this.overlayerEl.el, this.rowResizer.el, this.colResizer.el, this.contextMenu.el, this.modalValidation.el, this.sortFilter.el),
            this.el.children(this.horizontalScrollbar.el, this.verticalScrollbar.el);
            if (this.table = new bt({
                toolbar: this.toolbar,
                rpbar: this.rpbar
            },
            this.tableEl.el, n, this.layerList), this.toolbar && !this.toolbar.isHide) {
                var h = this.toolbar.toolPrintInputEl.input,
                d = this.toolbar.toolPrintHeightInputEl.input; !
                function(e) {
                    var t = function(e) {
                        var t = Number(e);
                        r.data.settings.printElWidth = t,
                        r.data.printElWidth = t,
                        r.table.changePrintLine(t, r.data.printElHeight)
                    };
                    e.on("click", (function(e) {
                        t(e.target.value)
                    })),
                    e.on("blur", (function(e) {
                        t(e.target.value)
                    })),
                    e.on("keydown", (function(e) {
                        13 === e.keyCode && t(e.target.value)
                    }))
                } (h),
                function(e) {
                    var t = function(e) {
                        var t = Number(e);
                        r.data.printElHeight = e,
                        r.table.changePrintLine(r.data.printElWidth, t)
                    };
                    e.on("click", (function(e) {
                        t(e.target.value)
                    })),
                    e.on("blur", (function(e) {
                        t(e.target.value)
                    })),
                    e.on("keydown", (function(e) {
                        13 === e.keyCode && t(e.target.value)
                    }))
                } (d);
                var f = rc(ic(this.toolbar.toolPrintSizeEl.value));
                f && (this.toolbar.toolPrintInputEl.input.el.value = f)
            }
            yd.call(this),
            Vh.call(this),
            Eh.call(this, !1, 0, 0),
            this.onAddChart = function(e) {},
            this.onSelectChart = function(e, t) {},
            this.onChartDelete = function(e) {},
            this.addChart = function(e, t) {
                cd.call(r, e, t)
            },
            this.onUploadExcel = function(e) {},
            this.onExportExcelPage = function() {},
            this.onExportExcelAll = function() {},
            this.dbClickChart = function() {},
            this.selectedChartId = "",
            bd.call(this)
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "loadData",
            value: function(e) {
                var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return this.data.setData(e),
                e.imgList && e.imgList.map((function(e) {
                    ld.call(t, e)
                })),
                e.chartList && e.chartList.map((function(e) {
                    ud.call(t, e)
                })),
                n || this.handleLayerCellRange(e),
                Wh.call(this),
                Vh.call(this, n),
                this
            }
        },
        {
            key: "handleLayerCellRange",
            value: function(e) {
                if (this.data.settings.readOnly) {
                    if (this.layerList && this.layerList.length > 0) {
                        var t, n = e.rows,
                        i = this.getVirtualMap(n),
                        r = Lh(this.layerList);
                        try {
                            for (r.s(); ! (t = r.n()).done;) {
                                var o = t.value,
                                a = o.getLayerId();
                                o.setVirtualCellRange(i[a])
                            }
                        } catch(e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }
                } else this.deleteVirtualCell(e.rows)
            }
        },
        {
            key: "getVirtualMap",
            value: function(e) {
                var t = {};
                return Object.keys(e).map((function(n) {
                    if (e[n]) {
                        var i = e[n].cells;
                        i && Object.keys(i).map((function(e) {
                            var r = i[e];
                            if (r) {
                                var o = r.virtual;
                                o && (t[o] || (t[o] = []), t[o].push([Number(n), Number(e)]))
                            }
                        }))
                    }
                })),
                t
            }
        },
        {
            key: "deleteVirtualCell",
            value: function(e) {
                var t = this.data;
                Object.keys(e).map((function(n) {
                    if (e[n]) {
                        var i = e[n].cells;
                        i && Object.keys(i).map((function(e) {
                            var r = i[e];
                            r && r.virtual && !r.merge && t.removeCell(n, e)
                        }))
                    }
                }))
            }
        },
        {
            key: "removeExistLayer",
            value: function(e) {
                if (this.layerList && this.layerList.length > 0) for (var t = 0; t < this.layerList.length; t++) if (this.layerList[t].id == e) {
                    var n = window.document.getElementById(e);
                    n.parentNode.removeChild(n),
                    this.layerList.splice(t, 1)
                }
            }
        },
        {
            key: "freeze",
            value: function(e, t) {
                return this.data.setFreeze(e, t),
                Vh.call(this),
                this
            }
        },
        {
            key: "custTip",
            value: function(e) {
                this.tip_obj = new Ah(e),
                this.tip_obj.show(2e3)
            }
        },
        {
            key: "undo",
            value: function() {
                this.data.undo(),
                Vh.call(this)
            }
        },
        {
            key: "redo",
            value: function() {
                this.data.redo(),
                Vh.call(this)
            }
        },
        {
            key: "reload",
            value: function() {
                return Vh.call(this),
                this
            }
        },
        {
            key: "getRect",
            value: function() {
                var e = this.data;
                return {
                    width: e.viewWidth(),
                    height: e.viewHeight()
                }
            }
        },
        {
            key: "getTableOffset",
            value: function() {
                var e = this.data,
                t = e.rows,
                n = e.cols,
                i = this.getRect(),
                r = i.width,
                o = i.height;
                return {
                    width: r - n.indexWidth,
                    height: o - t.height,
                    left: n.indexWidth,
                    top: t.height
                }
            }
        },
        {
            key: "refreshSelectedChart",
            value: function(e) {
                var t, n = this,
                i = Lh(this.layerList);
                try {
                    for (i.s(); ! (t = i.n()).done;) {
                        var r = t.value; ! 0 === r.selected && "chart" === r.type && r.refresh(e).
                        catch((function(e) {
                            n.custTip(e)
                        }))
                    }
                } catch(e) {
                    i.e(e)
                } finally {
                    i.f()
                }
            }
        },
        {
            key: "updateSeletedChart",
            value: function(e, t) {
                var n, i = this,
                r = Lh(this.layerList);
                try {
                    for (r.s(); ! (n = r.n()).done;) {
                        var o = n.value; ! 0 === o.selected && "chart" === o.type && o.update(e, t).
                        catch((function(e) {
                            i.custTip(e)
                        }))
                    }
                } catch(e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
        },
        {
            key: "updateChartById",
            value: function(e, t) {
                var n = this;
                e || (e = this.selectedChartId);
                var i, r = Lh(this.layerList);
                try {
                    for (r.s(); ! (i = r.n()).done;) {
                        var o = i.value;
                        o.id === e && o.update(t).
                        catch((function(e) {
                            n.custTip(e)
                        }))
                    }
                } catch(e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
        },
        {
            key: "updateLayerOffset",
            value: function(e, t) {
                e || (e = this.selectedChartId);
                var n, i = Lh(this.layerList);
                try {
                    for (i.s(); ! (n = i.n()).done;) {
                        var r = n.value;
                        r.id === e && r.updateOffset.apply(r, kh(t))
                    }
                } catch(e) {
                    i.e(e)
                } finally {
                    i.f()
                }
            }
        },
        {
            key: "updateChartExtData",
            value: function(e, t) {
                var n, i = Lh(this.layerList);
                try {
                    for (i.s(); ! (n = i.n()).done;) {
                        var r = n.value;
                        r.id === e && r.setChartExtData(t)
                    }
                } catch(e) {
                    i.e(e)
                } finally {
                    i.f()
                }
            }
        },
        {
            key: "getPrintCanvas",
            value: function(e) {
                return new Lt(this.rpbar, this.data, "multi", !0).setExistWin(e).getSingleCanvasForMultiPage()
            }
        },
        {
            key: "getLayerBase64",
            value: function() {
                var e, t = [],
                n = Lh(this.layerList);
                try {
                    for (n.s(); ! (e = n.n()).done;) {
                        var i = e.value;
                        t.push(i.getBase64(this.data.settings.downLoadImage))
                    }
                } catch(e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return Promise.all(t)
            }
        }]) && _h(t.prototype, n),
        r && _h(t, r),
        e
    } ();
    n(516);
    function wd(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call controller class as controller function")
    }
    function xd(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    var Ad = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            wd(this, e);
            var r = t;
            "string" == typeof t && (r = document.querySelector(t)),
            this.data = new Zt("sheet1", n);
            var o = Object(i.b)("div", "".concat(se)).on("contextmenu", (function(e) {
                return e.preventDefault()
            }));
            r.appendChild(o.el),
            this.sheet = new Id(o, this.data)
        }
        var t, n, r;
        return t = e,
        r = [{
            key: "locale",
            value: function(e, t) {
                K(e, t)
            }
        }],
        (n = [{
            key: "loadData",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return console.log("================================================", e),
                this.sheet.loadData(e, t),
                this
            }
        },
        {
            key: "getData",
            value: function() {
                return this.data.getData()
            }
        },
        {
            key: "validate",
            value: function() {
                return this.data.validations.errors.size <= 0
            }
        },
        {
            key: "change",
            value: function(e) {
                return this.data.change = e,
                this
            }
        },
        {
            key: "onSave",
            value: function(e) {
                return this.data.saveData = e,
                this
            }
        },
        {
            key: "tip",
            value: function(e) {
                this.sheet.custTip(e)
            }
        },
        {
            key: "onAddChart",
            value: function(e) {
                return this.sheet.onAddChart = e,
                this
            }
        },
        {
            key: "onUploadExcel",
            value: function(e) {
                return this.sheet.onUploadExcel = e,
                this
            }
        },
        {
            key: "onExportExcelPage",
            value: function(e) {
                return this.sheet.onExportExcelPage = e,
                this
            }
        },
        {
            key: "onExportExcelAll",
            value: function(e) {
                return this.sheet.onExportExcelAll = e,
                this
            }
        },
        {
            key: "onSelectChart",
            value: function(e) {
                return this.sheet.onSelectChart = e,
                this
            }
        },
        {
            key: "onChartDelete",
            value: function(e) {
                return this.sheet.onChartDelete = e,
                this
            }
        },
        {
            key: "addChart",
            value: function(e, t) {
                this.sheet.addChart(e, t)
            }
        },
        {
            key: "refreshChart",
            value: function(e) {
                this.sheet.refreshSelectedChart(e)
            }
        },
        {
            key: "updateChart",
            value: function(e, t) {
                this.sheet.updateChartById(e, t)
            }
        },
        {
            key: "updateLayerOffset",
            value: function(e, t) {
                this.sheet.updateLayerOffset(e, t)
            }
        },
        {
            key: "updateChartExtData",
            value: function(e, t) {
                this.sheet.updateChartExtData(e, t)
            }
        },
        {
            key: "onChartDbClick",
            value: function(e) {
                return this.sheet.dbClickChart = e,
                this
            }
        },
        {
            key: "getPrintCanvas",
            value: function(e) {
                return this.sheet.getPrintCanvas(e)
            }
        },
        {
            key: "getLayerBase64",
            value: function() {
                return this.sheet.getLayerBase64()
            }
        }]) && xd(t.prototype, n),
        r && xd(t, r),
        e
    } (),
    _d = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Ad(e, t)
    };
    window && (window.x = window.x || {},
    window.x.spreadsheet = _d, window.x.spreadsheet.locale = function(e, t) {
        return K(e, t)
    });
    t.
default = Ad
}]);