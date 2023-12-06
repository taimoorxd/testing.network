(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [926], {
        9894: function(e, t, n) {
            "use strict";
            var a = n(3227),
                r = n(8361),
                i = n(5971),
                s = n(2715),
                o = n(1193);

            function l(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = o(e);
                    if (t) {
                        var r = o(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return s(this, n)
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var u = d(n(7294)),
                c = d(n(6505));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var p = {
                400: "Bad Request",
                404: "This page could not be found",
                405: "Method Not Allowed",
                500: "Internal Server Error"
            };

            function g(e) {
                var t = e.res,
                    n = e.err;
                return {
                    statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404
                }
            }
            var f = function(e) {
                i(n, e);
                var t = l(n);

                function n() {
                    return a(this, n), t.apply(this, arguments)
                }
                return r(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props.statusCode,
                            t = this.props.title || p[e] || "An unexpected error has occurred";
                        return u.default.createElement("div", {
                            style: m.error
                        }, u.default.createElement(c.default, null, u.default.createElement("title", null, e ? "".concat(e, ": ").concat(t) : "Application error: a client-side exception has occurred")), u.default.createElement("div", null, u.default.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: "\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                @media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }"
                            }
                        }), e ? u.default.createElement("h1", {
                            className: "next-error-h1",
                            style: m.h1
                        }, e) : null, u.default.createElement("div", {
                            style: m.desc
                        }, u.default.createElement("h2", {
                            style: m.h2
                        }, this.props.title || e ? t : u.default.createElement(u.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))))
                    }
                }]), n
            }(u.default.Component);
            t.default = f, f.displayName = "ErrorPage", f.getInitialProps = g, f.origGetInitialProps = g;
            var m = {
                error: {
                    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
                    height: "100vh",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                desc: {
                    display: "inline-block",
                    textAlign: "left",
                    lineHeight: "49px",
                    height: "49px",
                    verticalAlign: "middle"
                },
                h1: {
                    display: "inline-block",
                    margin: 0,
                    marginRight: "20px",
                    padding: "10px 23px 10px 0",
                    fontSize: "24px",
                    fontWeight: 500,
                    verticalAlign: "top"
                },
                h2: {
                    fontSize: "14px",
                    fontWeight: "normal",
                    lineHeight: "inherit",
                    margin: 0,
                    padding: 0
                }
            }
        },
        6177: function() {},
        2911: function() {},
        110: function() {},
        2918: function(e, t, n) {
            e.exports = n(9894)
        },
        4279: function() {
            Prism.languages.c = Prism.languages.extend("clike", {
                comment: {
                    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                    greedy: !0
                },
                string: {
                    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                    lookbehind: !0
                },
                keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
                function: /\b[a-z_]\w*(?=\s*\()/i,
                number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
                operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
            }), Prism.languages.insertBefore("c", "string", {
                char: {
                    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
                    greedy: !0
                }
            }), Prism.languages.insertBefore("c", "string", {
                macro: {
                    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "property",
                    inside: {
                        string: [{
                            pattern: /^(#\s*include\s*)<[^>]+>/,
                            lookbehind: !0
                        }, Prism.languages.c.string],
                        char: Prism.languages.c.char,
                        comment: Prism.languages.c.comment,
                        "macro-name": [{
                            pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                            lookbehind: !0
                        }, {
                            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                            lookbehind: !0,
                            alias: "function"
                        }],
                        directive: {
                            pattern: /^(#\s*)[a-z]+/,
                            lookbehind: !0,
                            alias: "keyword"
                        },
                        "directive-hash": /^#/,
                        punctuation: /##|\\(?=[\r\n])/,
                        expression: {
                            pattern: /\S[\s\S]*/,
                            inside: Prism.languages.c
                        }
                    }
                }
            }), Prism.languages.insertBefore("c", "function", {
                constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
            }), delete Prism.languages.c.boolean
        },
        5433: function() {
            Prism.languages.clike = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: !0,
                    inside: {
                        punctuation: /[.\\]/
                    }
                },
                keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                boolean: /\b(?:false|true)\b/,
                function: /\b\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/
            }
        },
        8325: function(e, t, n) {
            var a = function(e) {
                var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                    n = 0,
                    a = {},
                    r = {
                        manual: e.Prism && e.Prism.manual,
                        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                        util: {
                            encode: function e(t) {
                                return t instanceof i ? new i(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                            },
                            type: function(e) {
                                return Object.prototype.toString.call(e).slice(8, -1)
                            },
                            objId: function(e) {
                                return e.__id || Object.defineProperty(e, "__id", {
                                    value: ++n
                                }), e.__id
                            },
                            clone: function e(t, n) {
                                var a, i;
                                switch (n = n || {}, r.util.type(t)) {
                                    case "Object":
                                        if (i = r.util.objId(t), n[i]) return n[i];
                                        for (var s in a = {}, n[i] = a, t) t.hasOwnProperty(s) && (a[s] = e(t[s], n));
                                        return a;
                                    case "Array":
                                        return i = r.util.objId(t), n[i] ? n[i] : (a = [], n[i] = a, t.forEach((function(t, r) {
                                            a[r] = e(t, n)
                                        })), a);
                                    default:
                                        return t
                                }
                            },
                            getLanguage: function(e) {
                                for (; e;) {
                                    var n = t.exec(e.className);
                                    if (n) return n[1].toLowerCase();
                                    e = e.parentElement
                                }
                                return "none"
                            },
                            setLanguage: function(e, n) {
                                e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n)
                            },
                            currentScript: function() {
                                if ("undefined" === typeof document) return null;
                                if ("currentScript" in document) return document.currentScript;
                                try {
                                    throw new Error
                                } catch (a) {
                                    var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack) || [])[1];
                                    if (e) {
                                        var t = document.getElementsByTagName("script");
                                        for (var n in t)
                                            if (t[n].src == e) return t[n]
                                    }
                                    return null
                                }
                            },
                            isActive: function(e, t, n) {
                                for (var a = "no-" + t; e;) {
                                    var r = e.classList;
                                    if (r.contains(t)) return !0;
                                    if (r.contains(a)) return !1;
                                    e = e.parentElement
                                }
                                return !!n
                            }
                        },
                        languages: {
                            plain: a,
                            plaintext: a,
                            text: a,
                            txt: a,
                            extend: function(e, t) {
                                var n = r.util.clone(r.languages[e]);
                                for (var a in t) n[a] = t[a];
                                return n
                            },
                            insertBefore: function(e, t, n, a) {
                                var i = (a = a || r.languages)[e],
                                    s = {};
                                for (var o in i)
                                    if (i.hasOwnProperty(o)) {
                                        if (o == t)
                                            for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
                                        n.hasOwnProperty(o) || (s[o] = i[o])
                                    }
                                var u = a[e];
                                return a[e] = s, r.languages.DFS(r.languages, (function(t, n) {
                                    n === u && t != e && (this[t] = s)
                                })), s
                            },
                            DFS: function e(t, n, a, i) {
                                i = i || {};
                                var s = r.util.objId;
                                for (var o in t)
                                    if (t.hasOwnProperty(o)) {
                                        n.call(t, o, t[o], a || o);
                                        var l = t[o],
                                            u = r.util.type(l);
                                        "Object" !== u || i[s(l)] ? "Array" !== u || i[s(l)] || (i[s(l)] = !0, e(l, n, o, i)) : (i[s(l)] = !0, e(l, n, null, i))
                                    }
                            }
                        },
                        plugins: {},
                        highlightAll: function(e, t) {
                            r.highlightAllUnder(document, e, t)
                        },
                        highlightAllUnder: function(e, t, n) {
                            var a = {
                                callback: n,
                                container: e,
                                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                            };
                            r.hooks.run("before-highlightall", a), a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)), r.hooks.run("before-all-elements-highlight", a);
                            for (var i, s = 0; i = a.elements[s++];) r.highlightElement(i, !0 === t, a.callback)
                        },
                        highlightElement: function(t, n, a) {
                            var i = r.util.getLanguage(t),
                                s = r.languages[i];
                            r.util.setLanguage(t, i);
                            var o = t.parentElement;
                            o && "pre" === o.nodeName.toLowerCase() && r.util.setLanguage(o, i);
                            var l = {
                                element: t,
                                language: i,
                                grammar: s,
                                code: t.textContent
                            };

                            function u(e) {
                                l.highlightedCode = e, r.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, r.hooks.run("after-highlight", l), r.hooks.run("complete", l), a && a.call(l.element)
                            }
                            if (r.hooks.run("before-sanity-check", l), (o = l.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), !l.code) return r.hooks.run("complete", l), void(a && a.call(l.element));
                            if (r.hooks.run("before-highlight", l), l.grammar)
                                if (n && e.Worker) {
                                    var c = new Worker(r.filename);
                                    c.onmessage = function(e) {
                                        u(e.data)
                                    }, c.postMessage(JSON.stringify({
                                        language: l.language,
                                        code: l.code,
                                        immediateClose: !0
                                    }))
                                } else u(r.highlight(l.code, l.grammar, l.language));
                            else u(r.util.encode(l.code))
                        },
                        highlight: function(e, t, n) {
                            var a = {
                                code: e,
                                grammar: t,
                                language: n
                            };
                            if (r.hooks.run("before-tokenize", a), !a.grammar) throw new Error('The language "' + a.language + '" has no grammar.');
                            return a.tokens = r.tokenize(a.code, a.grammar), r.hooks.run("after-tokenize", a), i.stringify(r.util.encode(a.tokens), a.language)
                        },
                        tokenize: function(e, t) {
                            var n = t.rest;
                            if (n) {
                                for (var a in n) t[a] = n[a];
                                delete t.rest
                            }
                            var r = new l;
                            return u(r, r.head, e), o(e, r, t, r.head, 0),
                                function(e) {
                                    var t = [],
                                        n = e.head.next;
                                    for (; n !== e.tail;) t.push(n.value), n = n.next;
                                    return t
                                }(r)
                        },
                        hooks: {
                            all: {},
                            add: function(e, t) {
                                var n = r.hooks.all;
                                n[e] = n[e] || [], n[e].push(t)
                            },
                            run: function(e, t) {
                                var n = r.hooks.all[e];
                                if (n && n.length)
                                    for (var a, i = 0; a = n[i++];) a(t)
                            }
                        },
                        Token: i
                    };

                function i(e, t, n, a) {
                    this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length
                }

                function s(e, t, n, a) {
                    e.lastIndex = t;
                    var r = e.exec(n);
                    if (r && a && r[1]) {
                        var i = r[1].length;
                        r.index += i, r[0] = r[0].slice(i)
                    }
                    return r
                }

                function o(e, t, n, a, l, d) {
                    for (var p in n)
                        if (n.hasOwnProperty(p) && n[p]) {
                            var g = n[p];
                            g = Array.isArray(g) ? g : [g];
                            for (var f = 0; f < g.length; ++f) {
                                if (d && d.cause == p + "," + f) return;
                                var m = g[f],
                                    b = m.inside,
                                    h = !!m.lookbehind,
                                    y = !!m.greedy,
                                    v = m.alias;
                                if (y && !m.pattern.global) {
                                    var w = m.pattern.toString().match(/[imsuy]*$/)[0];
                                    m.pattern = RegExp(m.pattern.source, w + "g")
                                }
                                for (var k = m.pattern || m, _ = a.next, x = l; _ !== t.tail && !(d && x >= d.reach); x += _.value.length, _ = _.next) {
                                    var A = _.value;
                                    if (t.length > e.length) return;
                                    if (!(A instanceof i)) {
                                        var F, P = 1;
                                        if (y) {
                                            if (!(F = s(k, x, e, h)) || F.index >= e.length) break;
                                            var E = F.index,
                                                S = F.index + F[0].length,
                                                z = x;
                                            for (z += _.value.length; E >= z;) z += (_ = _.next).value.length;
                                            if (x = z -= _.value.length, _.value instanceof i) continue;
                                            for (var $ = _; $ !== t.tail && (z < S || "string" === typeof $.value); $ = $.next) P++, z += $.value.length;
                                            P--, A = e.slice(x, z), F.index -= x
                                        } else if (!(F = s(k, 0, A, h))) continue;
                                        E = F.index;
                                        var C = F[0],
                                            j = A.slice(0, E),
                                            L = A.slice(E + C.length),
                                            q = x + A.length;
                                        d && q > d.reach && (d.reach = q);
                                        var N = _.prev;
                                        if (j && (N = u(t, N, j), x += j.length), c(t, N, P), _ = u(t, N, new i(p, b ? r.tokenize(C, b) : C, v, C)), L && u(t, _, L), P > 1) {
                                            var T = {
                                                cause: p + "," + f,
                                                reach: q
                                            };
                                            o(e, t, n, _.prev, x, T), d && T.reach > d.reach && (d.reach = T.reach)
                                        }
                                    }
                                }
                            }
                        }
                }

                function l() {
                    var e = {
                            value: null,
                            prev: null,
                            next: null
                        },
                        t = {
                            value: null,
                            prev: e,
                            next: null
                        };
                    e.next = t, this.head = e, this.tail = t, this.length = 0
                }

                function u(e, t, n) {
                    var a = t.next,
                        r = {
                            value: n,
                            prev: t,
                            next: a
                        };
                    return t.next = r, a.prev = r, e.length++, r
                }

                function c(e, t, n) {
                    for (var a = t.next, r = 0; r < n && a !== e.tail; r++) a = a.next;
                    t.next = a, a.prev = t, e.length -= r
                }
                if (e.Prism = r, i.stringify = function e(t, n) {
                        if ("string" == typeof t) return t;
                        if (Array.isArray(t)) {
                            var a = "";
                            return t.forEach((function(t) {
                                a += e(t, n)
                            })), a
                        }
                        var i = {
                                type: t.type,
                                content: e(t.content, n),
                                tag: "span",
                                classes: ["token", t.type],
                                attributes: {},
                                language: n
                            },
                            s = t.alias;
                        s && (Array.isArray(s) ? Array.prototype.push.apply(i.classes, s) : i.classes.push(s)), r.hooks.run("wrap", i);
                        var o = "";
                        for (var l in i.attributes) o += " " + l + '="' + (i.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                        return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">"
                    }, !e.document) return e.addEventListener ? (r.disableWorkerMessageHandler || e.addEventListener("message", (function(t) {
                    var n = JSON.parse(t.data),
                        a = n.language,
                        i = n.code,
                        s = n.immediateClose;
                    e.postMessage(r.highlight(i, r.languages[a], a)), s && e.close()
                }), !1), r) : r;
                var d = r.util.currentScript();

                function p() {
                    r.manual || r.highlightAll()
                }
                if (d && (r.filename = d.src, d.hasAttribute("data-manual") && (r.manual = !0)), !r.manual) {
                    var g = document.readyState;
                    "loading" === g || "interactive" === g && d && d.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16)
                }
                return r
            }("undefined" !== typeof window ? window : "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
            e.exports && (e.exports = a), "undefined" !== typeof n.g && (n.g.Prism = a)
        },
        2731: function() {
            ! function(e) {
                var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
                    n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, (function() {
                        return t.source
                    }));
                e.languages.cpp = e.languages.extend("c", {
                    "class-name": [{
                        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, (function() {
                            return t.source
                        }))),
                        lookbehind: !0
                    }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
                    keyword: t,
                    number: {
                        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                        greedy: !0
                    },
                    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                    boolean: /\b(?:false|true)\b/
                }), e.languages.insertBefore("cpp", "string", {
                    module: {
                        pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, (function() {
                            return n
                        })) + ")"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            string: /^[<"][\s\S]+/,
                            operator: /:/,
                            punctuation: /\./
                        }
                    },
                    "raw-string": {
                        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                        alias: "string",
                        greedy: !0
                    }
                }), e.languages.insertBefore("cpp", "keyword", {
                    "generic-function": {
                        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                        inside: {
                            function: /^\w+/,
                            generic: {
                                pattern: /<[\s\S]+/,
                                alias: "class-name",
                                inside: e.languages.cpp
                            }
                        }
                    }
                }), e.languages.insertBefore("cpp", "operator", {
                    "double-colon": {
                        pattern: /::/,
                        alias: "punctuation"
                    }
                }), e.languages.insertBefore("cpp", "class-name", {
                    "base-clause": {
                        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: e.languages.extend("cpp", {})
                    }
                }), e.languages.insertBefore("inside", "double-colon", {
                    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
                }, e.languages.cpp["base-clause"])
            }(Prism)
        },
        6102: function() {
            ! function(e) {
                var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                e.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                        inside: {
                            rule: /^@[\w-]+/,
                            "selector-function-argument": {
                                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                lookbehind: !0,
                                alias: "selector"
                            },
                            keyword: {
                                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                lookbehind: !0
                            }
                        }
                    },
                    url: {
                        pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                        greedy: !0,
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/,
                            string: {
                                pattern: RegExp("^" + t.source + "$"),
                                alias: "url"
                            }
                        }
                    },
                    selector: {
                        pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                        lookbehind: !0
                    },
                    string: {
                        pattern: t,
                        greedy: !0
                    },
                    property: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                        lookbehind: !0
                    },
                    important: /!important\b/i,
                    function: {
                        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                        lookbehind: !0
                    },
                    punctuation: /[(){};:,]/
                }, e.languages.css.atrule.inside.rest = e.languages.css;
                var n = e.languages.markup;
                n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
            }(Prism)
        },
        2503: function() {
            ! function(e) {
                var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
                    n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,
                    a = {
                        pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
                        lookbehind: !0,
                        inside: {
                            namespace: {
                                pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                                inside: {
                                    punctuation: /\./
                                }
                            },
                            punctuation: /\./
                        }
                    };
                e.languages.java = e.languages.extend("clike", {
                    string: {
                        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
                        lookbehind: !0,
                        greedy: !0
                    },
                    "class-name": [a, {
                        pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
                        lookbehind: !0,
                        inside: a.inside
                    }, {
                        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source),
                        lookbehind: !0,
                        inside: a.inside
                    }],
                    keyword: t,
                    function: [e.languages.clike.function, {
                        pattern: /(::\s*)[a-z_]\w*/,
                        lookbehind: !0
                    }],
                    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
                    operator: {
                        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
                        lookbehind: !0
                    }
                }), e.languages.insertBefore("java", "string", {
                    "triple-quoted-string": {
                        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
                        greedy: !0,
                        alias: "string"
                    },
                    char: {
                        pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
                        greedy: !0
                    }
                }), e.languages.insertBefore("java", "class-name", {
                    annotation: {
                        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    generics: {
                        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
                        inside: {
                            "class-name": a,
                            keyword: t,
                            punctuation: /[<>(),.:]/,
                            operator: /[?&|]/
                        }
                    },
                    import: [{
                        pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
                        lookbehind: !0,
                        inside: {
                            namespace: a.inside.namespace,
                            punctuation: /\./,
                            operator: /\*/,
                            "class-name": /\w+/
                        }
                    }, {
                        pattern: RegExp(/(\bimport\s+static\s+)/.source + n + /(?:\w+|\*)(?=\s*;)/.source),
                        lookbehind: !0,
                        alias: "static",
                        inside: {
                            namespace: a.inside.namespace,
                            static: /\b\w+$/,
                            punctuation: /\./,
                            operator: /\*/,
                            "class-name": /\w+/
                        }
                    }],
                    namespace: {
                        pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, (function() {
                            return t.source
                        }))),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    }
                })
            }(Prism)
        },
        9980: function() {
            Prism.languages.javascript = Prism.languages.extend("clike", {
                "class-name": [Prism.languages.clike["class-name"], {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                    lookbehind: !0
                }],
                keyword: [{
                    pattern: /((?:^|\})\s*)catch\b/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                    lookbehind: !0
                }],
                function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                number: {
                    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
                    lookbehind: !0
                },
                operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
            }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        "regex-source": {
                            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                            lookbehind: !0,
                            alias: "language-regex",
                            inside: Prism.languages.regex
                        },
                        "regex-delimiter": /^\/|\/$/,
                        "regex-flags": /^[a-z]+$/
                    }
                },
                "function-variable": {
                    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                    alias: "function"
                },
                parameter: [{
                    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                    lookbehind: !0,
                    inside: Prism.languages.javascript
                }, {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: !0,
                    inside: Prism.languages.javascript
                }, {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: Prism.languages.javascript
                }, {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: Prism.languages.javascript
                }],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
            }), Prism.languages.insertBefore("javascript", "string", {
                hashbang: {
                    pattern: /^#!.*/,
                    greedy: !0,
                    alias: "comment"
                },
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        "template-punctuation": {
                            pattern: /^`|`$/,
                            alias: "string"
                        },
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                            lookbehind: !0,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^\$\{|\}$/,
                                    alias: "punctuation"
                                },
                                rest: Prism.languages.javascript
                            }
                        },
                        string: /[\s\S]+/
                    }
                },
                "string-property": {
                    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                    lookbehind: !0,
                    greedy: !0,
                    alias: "property"
                }
            }), Prism.languages.insertBefore("javascript", "operator", {
                "literal-property": {
                    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                    lookbehind: !0,
                    alias: "property"
                }
            }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript
        },
        6854: function() {
            ! function(e) {
                function t(e, t) {
                    return "___" + e.toUpperCase() + t + "___"
                }
                Object.defineProperties(e.languages["markup-templating"] = {}, {
                    buildPlaceholders: {
                        value: function(n, a, r, i) {
                            if (n.language === a) {
                                var s = n.tokenStack = [];
                                n.code = n.code.replace(r, (function(e) {
                                    if ("function" === typeof i && !i(e)) return e;
                                    for (var r, o = s.length; - 1 !== n.code.indexOf(r = t(a, o));) ++o;
                                    return s[o] = e, r
                                })), n.grammar = e.languages.markup
                            }
                        }
                    },
                    tokenizePlaceholders: {
                        value: function(n, a) {
                            if (n.language === a && n.tokenStack) {
                                n.grammar = e.languages[a];
                                var r = 0,
                                    i = Object.keys(n.tokenStack);
                                ! function s(o) {
                                    for (var l = 0; l < o.length && !(r >= i.length); l++) {
                                        var u = o[l];
                                        if ("string" === typeof u || u.content && "string" === typeof u.content) {
                                            var c = i[r],
                                                d = n.tokenStack[c],
                                                p = "string" === typeof u ? u : u.content,
                                                g = t(a, c),
                                                f = p.indexOf(g);
                                            if (f > -1) {
                                                ++r;
                                                var m = p.substring(0, f),
                                                    b = new e.Token(a, e.tokenize(d, n.grammar), "language-" + a, d),
                                                    h = p.substring(f + g.length),
                                                    y = [];
                                                m && y.push.apply(y, s([m])), y.push(b), h && y.push.apply(y, s([h])), "string" === typeof u ? o.splice.apply(o, [l, 1].concat(y)) : u.content = y
                                            }
                                        } else u.content && s(u.content)
                                    }
                                    return o
                                }(n.tokens)
                            }
                        }
                    }
                })
            }(Prism)
        },
        4335: function() {
            Prism.languages.markup = {
                comment: {
                    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
                    greedy: !0
                },
                prolog: {
                    pattern: /<\?[\s\S]+?\?>/,
                    greedy: !0
                },
                doctype: {
                    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                    greedy: !0,
                    inside: {
                        "internal-subset": {
                            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                            lookbehind: !0,
                            greedy: !0,
                            inside: null
                        },
                        string: {
                            pattern: /"[^"]*"|'[^']*'/,
                            greedy: !0
                        },
                        punctuation: /^<!|>$|[[\]]/,
                        "doctype-tag": /^DOCTYPE/i,
                        name: /[^\s<>'"]+/
                    }
                },
                cdata: {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    greedy: !0
                },
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                    greedy: !0,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/,
                            inside: {
                                punctuation: /^<\/?/,
                                namespace: /^[^\s>\/:]+:/
                            }
                        },
                        "special-attr": [],
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                            inside: {
                                punctuation: [{
                                    pattern: /^=/,
                                    alias: "attr-equals"
                                }, /"|'/]
                            }
                        },
                        punctuation: /\/?>/,
                        "attr-name": {
                            pattern: /[^\s>\/]+/,
                            inside: {
                                namespace: /^[^\s>\/:]+:/
                            }
                        }
                    }
                },
                entity: [{
                    pattern: /&[\da-z]{1,8};/i,
                    alias: "named-entity"
                }, /&#x?[\da-f]{1,8};/i]
            }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", (function(e) {
                "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
            })), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
                value: function(e, t) {
                    var n = {};
                    n["language-" + t] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: Prism.languages[t]
                    }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                    var a = {
                        "included-cdata": {
                            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                            inside: n
                        }
                    };
                    a["language-" + t] = {
                        pattern: /[\s\S]+/,
                        inside: Prism.languages[t]
                    };
                    var r = {};
                    r[e] = {
                        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
                            return e
                        })), "i"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: a
                    }, Prism.languages.insertBefore("markup", "cdata", r)
                }
            }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
                value: function(e, t) {
                    Prism.languages.markup.tag.inside["special-attr"].push({
                        pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                        lookbehind: !0,
                        inside: {
                            "attr-name": /^[^\s=]+/,
                            "attr-value": {
                                pattern: /=[\s\S]+/,
                                inside: {
                                    value: {
                                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                        lookbehind: !0,
                                        alias: [t, "language-" + t],
                                        inside: Prism.languages[t]
                                    },
                                    punctuation: [{
                                        pattern: /^=/,
                                        alias: "attr-equals"
                                    }, /"|'/]
                                }
                            }
                        }
                    })
                }
            }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml
        },
        9945: function() {
            ! function(e) {
                var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
                    n = [{
                        pattern: /\b(?:false|true)\b/i,
                        alias: "boolean"
                    }, {
                        pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
                        greedy: !0,
                        lookbehind: !0
                    }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
                    a = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    r = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
                    i = /[{}\[\](),:;]/;
                e.languages.php = {
                    delimiter: {
                        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                        alias: "important"
                    },
                    comment: t,
                    variable: /\$+(?:\w+\b|(?=\{))/,
                    package: {
                        pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    },
                    "class-name-definition": {
                        pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
                        lookbehind: !0,
                        alias: "class-name"
                    },
                    "function-definition": {
                        pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
                        lookbehind: !0,
                        alias: "function"
                    },
                    keyword: [{
                        pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
                        alias: "type-casting",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
                        alias: "type-hint",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
                        alias: "return-type",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
                        alias: "type-declaration",
                        greedy: !0
                    }, {
                        pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
                        alias: "type-declaration",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                        alias: "static-context",
                        greedy: !0
                    }, {
                        pattern: /(\byield\s+)from\b/i,
                        lookbehind: !0
                    }, /\bclass\b/i, {
                        pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
                        lookbehind: !0
                    }],
                    "argument-name": {
                        pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
                        lookbehind: !0
                    },
                    "class-name": [{
                        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
                        greedy: !0
                    }, {
                        pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                        alias: "class-name-fully-qualified",
                        greedy: !0,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                        alias: "class-name-fully-qualified",
                        greedy: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                        alias: "class-name-fully-qualified",
                        greedy: !0,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                        alias: "type-declaration",
                        greedy: !0
                    }, {
                        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                        alias: ["class-name-fully-qualified", "type-declaration"],
                        greedy: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /\b[a-z_]\w*(?=\s*::)/i,
                        alias: "static-context",
                        greedy: !0
                    }, {
                        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                        alias: ["class-name-fully-qualified", "static-context"],
                        greedy: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                        alias: "type-hint",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                        alias: ["class-name-fully-qualified", "type-hint"],
                        greedy: !0,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }, {
                        pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                        alias: "return-type",
                        greedy: !0,
                        lookbehind: !0
                    }, {
                        pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                        alias: ["class-name-fully-qualified", "return-type"],
                        greedy: !0,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }],
                    constant: n,
                    function: {
                        pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    },
                    property: {
                        pattern: /(->\s*)\w+/,
                        lookbehind: !0
                    },
                    number: a,
                    operator: r,
                    punctuation: i
                };
                var s = {
                        pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
                        lookbehind: !0,
                        inside: e.languages.php
                    },
                    o = [{
                        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                        alias: "nowdoc-string",
                        greedy: !0,
                        inside: {
                            delimiter: {
                                pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                                alias: "symbol",
                                inside: {
                                    punctuation: /^<<<'?|[';]$/
                                }
                            }
                        }
                    }, {
                        pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                        alias: "heredoc-string",
                        greedy: !0,
                        inside: {
                            delimiter: {
                                pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                                alias: "symbol",
                                inside: {
                                    punctuation: /^<<<"?|[";]$/
                                }
                            },
                            interpolation: s
                        }
                    }, {
                        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                        alias: "backtick-quoted-string",
                        greedy: !0
                    }, {
                        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                        alias: "single-quoted-string",
                        greedy: !0
                    }, {
                        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                        alias: "double-quoted-string",
                        greedy: !0,
                        inside: {
                            interpolation: s
                        }
                    }];
                e.languages.insertBefore("php", "variable", {
                    string: o,
                    attribute: {
                        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                        greedy: !0,
                        inside: {
                            "attribute-content": {
                                pattern: /^(#\[)[\s\S]+(?=\]$)/,
                                lookbehind: !0,
                                inside: {
                                    comment: t,
                                    string: o,
                                    "attribute-class-name": [{
                                        pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                                        alias: "class-name",
                                        greedy: !0,
                                        lookbehind: !0
                                    }, {
                                        pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                                        alias: ["class-name", "class-name-fully-qualified"],
                                        greedy: !0,
                                        lookbehind: !0,
                                        inside: {
                                            punctuation: /\\/
                                        }
                                    }],
                                    constant: n,
                                    number: a,
                                    operator: r,
                                    punctuation: i
                                }
                            },
                            delimiter: {
                                pattern: /^#\[|\]$/,
                                alias: "punctuation"
                            }
                        }
                    }
                }), e.hooks.add("before-tokenize", (function(t) {
                    if (/<\?/.test(t.code)) {
                        e.languages["markup-templating"].buildPlaceholders(t, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)
                    }
                })), e.hooks.add("after-tokenize", (function(t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "php")
                }))
            }(Prism)
        },
        366: function() {
            Prism.languages.python = {
                comment: {
                    pattern: /(^|[^\\])#.*/,
                    lookbehind: !0,
                    greedy: !0
                },
                "string-interpolation": {
                    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                            lookbehind: !0,
                            inside: {
                                "format-spec": {
                                    pattern: /(:)[^:(){}]+(?=\}$)/,
                                    lookbehind: !0
                                },
                                "conversion-option": {
                                    pattern: /![sra](?=[:}]$)/,
                                    alias: "punctuation"
                                },
                                rest: null
                            }
                        },
                        string: /[\s\S]+/
                    }
                },
                "triple-quoted-string": {
                    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
                    greedy: !0,
                    alias: "string"
                },
                string: {
                    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
                    greedy: !0
                },
                function: {
                    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
                    lookbehind: !0
                },
                "class-name": {
                    pattern: /(\bclass\s+)\w+/i,
                    lookbehind: !0
                },
                decorator: {
                    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
                    lookbehind: !0,
                    alias: ["annotation", "punctuation"],
                    inside: {
                        punctuation: /\./
                    }
                },
                keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
                builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
                boolean: /\b(?:False|None|True)\b/,
                number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
                operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                punctuation: /[{}[\];(),.:]/
            }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python
        },
        6263: function() {
            ! function() {
                function e(e, n) {
                    e.addEventListener("click", (function() {
                        ! function(e) {
                            navigator.clipboard ? navigator.clipboard.writeText(e.getText()).then(e.success, (function() {
                                t(e)
                            })) : t(e)
                        }(n)
                    }))
                }

                function t(e) {
                    var t = document.createElement("textarea");
                    t.value = e.getText(), t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
                    try {
                        var n = document.execCommand("copy");
                        setTimeout((function() {
                            n ? e.success() : e.error()
                        }), 1)
                    } catch (a) {
                        setTimeout((function() {
                            e.error(a)
                        }), 1)
                    }
                    document.body.removeChild(t)
                }
                "undefined" !== typeof Prism && "undefined" !== typeof document && (Prism.plugins.toolbar ? Prism.plugins.toolbar.registerButton("copy-to-clipboard", (function(t) {
                    var n = t.element,
                        a = function(e) {
                            var t = {
                                copy: "Copy",
                                "copy-error": "Press Ctrl+C to copy",
                                "copy-success": "Copied!",
                                "copy-timeout": 5e3
                            };
                            for (var n in t) {
                                for (var a = "data-prismjs-" + n, r = e; r && !r.hasAttribute(a);) r = r.parentElement;
                                r && (t[n] = r.getAttribute(a))
                            }
                            return t
                        }(n),
                        r = document.createElement("button");
                    r.className = "copy-to-clipboard-button", r.setAttribute("type", "button");
                    var i = document.createElement("span");
                    return r.appendChild(i), o("copy"), e(r, {
                        getText: function() {
                            return n.textContent
                        },
                        success: function() {
                            o("copy-success"), s()
                        },
                        error: function() {
                            o("copy-error"), setTimeout((function() {
                                ! function(e) {
                                    window.getSelection().selectAllChildren(e)
                                }(n)
                            }), 1), s()
                        }
                    }), r;

                    function s() {
                        setTimeout((function() {
                            o("copy")
                        }), a["copy-timeout"])
                    }

                    function o(e) {
                        i.textContent = a[e], r.setAttribute("data-copy-state", e)
                    }
                })) : console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))
            }()
        },
        8759: function() {
            ! function() {
                if ("undefined" !== typeof Prism && "undefined" !== typeof document) {
                    var e = "line-numbers",
                        t = /\n(?!$)/g,
                        n = Prism.plugins.lineNumbers = {
                            getLine: function(t, n) {
                                if ("PRE" === t.tagName && t.classList.contains(e)) {
                                    var a = t.querySelector(".line-numbers-rows");
                                    if (a) {
                                        var r = parseInt(t.getAttribute("data-start"), 10) || 1,
                                            i = r + (a.children.length - 1);
                                        n < r && (n = r), n > i && (n = i);
                                        var s = n - r;
                                        return a.children[s]
                                    }
                                }
                            },
                            resize: function(e) {
                                r([e])
                            },
                            assumeViewportIndependence: !0
                        },
                        a = void 0;
                    window.addEventListener("resize", (function() {
                        n.assumeViewportIndependence && a === window.innerWidth || (a = window.innerWidth, r(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))
                    })), Prism.hooks.add("complete", (function(n) {
                        if (n.code) {
                            var a = n.element,
                                i = a.parentNode;
                            if (i && /pre/i.test(i.nodeName) && !a.querySelector(".line-numbers-rows") && Prism.util.isActive(a, e)) {
                                a.classList.remove(e), i.classList.add(e);
                                var s, o = n.code.match(t),
                                    l = o ? o.length + 1 : 1,
                                    u = new Array(l + 1).join("<span></span>");
                                (s = document.createElement("span")).setAttribute("aria-hidden", "true"), s.className = "line-numbers-rows", s.innerHTML = u, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), n.element.appendChild(s), r([i]), Prism.hooks.run("line-numbers", n)
                            }
                        }
                    })), Prism.hooks.add("line-numbers", (function(e) {
                        e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
                    }))
                }

                function r(e) {
                    if (0 != (e = e.filter((function(e) {
                            var t = function(e) {
                                if (!e) return null;
                                return window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null
                            }(e)["white-space"];
                            return "pre-wrap" === t || "pre-line" === t
                        }))).length) {
                        var n = e.map((function(e) {
                            var n = e.querySelector("code"),
                                a = e.querySelector(".line-numbers-rows");
                            if (n && a) {
                                var r = e.querySelector(".line-numbers-sizer"),
                                    i = n.textContent.split(t);
                                r || ((r = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(r)), r.innerHTML = "0", r.style.display = "block";
                                var s = r.getBoundingClientRect().height;
                                return r.innerHTML = "", {
                                    element: e,
                                    lines: i,
                                    lineHeights: [],
                                    oneLinerHeight: s,
                                    sizer: r
                                }
                            }
                        })).filter(Boolean);
                        n.forEach((function(e) {
                            var t = e.sizer,
                                n = e.lines,
                                a = e.lineHeights,
                                r = e.oneLinerHeight;
                            a[n.length - 1] = void 0, n.forEach((function(e, n) {
                                if (e && e.length > 1) {
                                    var i = t.appendChild(document.createElement("span"));
                                    i.style.display = "block", i.textContent = e
                                } else a[n] = r
                            }))
                        })), n.forEach((function(e) {
                            for (var t = e.sizer, n = e.lineHeights, a = 0, r = 0; r < n.length; r++) void 0 === n[r] && (n[r] = t.children[a++].getBoundingClientRect().height)
                        })), n.forEach((function(e) {
                            var t = e.sizer,
                                n = e.element.querySelector(".line-numbers-rows");
                            t.style.display = "none", t.innerHTML = "", e.lineHeights.forEach((function(e, t) {
                                n.children[t].style.height = e + "px"
                            }))
                        }))
                    }
                }
            }()
        },
        5206: function() {
            ! function() {
                if ("undefined" !== typeof Prism && "undefined" !== typeof document) {
                    var e = [],
                        t = {},
                        n = function() {};
                    Prism.plugins.toolbar = {};
                    var a = Prism.plugins.toolbar.registerButton = function(n, a) {
                            var r;
                            r = "function" === typeof a ? a : function(e) {
                                var t;
                                return "function" === typeof a.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", (function() {
                                    a.onClick.call(this, e)
                                }))) : "string" === typeof a.url ? (t = document.createElement("a")).href = a.url : t = document.createElement("span"), a.className && t.classList.add(a.className), t.textContent = a.text, t
                            }, n in t ? console.warn('There is a button with the key "' + n + '" registered already.') : e.push(t[n] = r)
                        },
                        r = Prism.plugins.toolbar.hook = function(a) {
                            var r = a.element.parentNode;
                            if (r && /pre/i.test(r.nodeName) && !r.parentNode.classList.contains("code-toolbar")) {
                                var i = document.createElement("div");
                                i.classList.add("code-toolbar"), r.parentNode.insertBefore(i, r), i.appendChild(r);
                                var s = document.createElement("div");
                                s.classList.add("toolbar");
                                var o = e,
                                    l = function(e) {
                                        for (; e;) {
                                            var t = e.getAttribute("data-toolbar-order");
                                            if (null != t) return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                                            e = e.parentElement
                                        }
                                    }(a.element);
                                l && (o = l.map((function(e) {
                                    return t[e] || n
                                }))), o.forEach((function(e) {
                                    var t = e(a);
                                    if (t) {
                                        var n = document.createElement("div");
                                        n.classList.add("toolbar-item"), n.appendChild(t), s.appendChild(n)
                                    }
                                })), i.appendChild(s)
                            }
                        };
                    a("label", (function(e) {
                        var t = e.element.parentNode;
                        if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                            var n, a, r = t.getAttribute("data-label");
                            try {
                                a = document.querySelector("template#" + r)
                            } catch (i) {}
                            return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n
                        }
                    })), Prism.hooks.add("complete", r)
                }
            }()
        }
    }
]);