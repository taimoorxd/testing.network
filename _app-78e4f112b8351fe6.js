(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        4418: function(t, e, n) {
            "use strict";
            n.d(e, {
                J: function() {
                    return r
                }
            });
            var r = "production"
        },
        9718: function(t, e, n) {
            "use strict";
            n.d(e, {
                $e: function() {
                    return u
                },
                Tb: function() {
                    return o
                },
                Yr: function() {
                    return l
                },
                e: function() {
                    return s
                },
                v: function() {
                    return c
                }
            });
            var r = n(9499),
                a = (n(7794), n(6111));

            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(t, e) {
                return (0, a.Gd)().captureException(t, {
                    captureContext: e
                })
            }

            function s(t) {
                (0, a.Gd)().configureScope(t)
            }

            function c(t, e) {
                (0, a.Gd)().setContext(t, e)
            }

            function u(t) {
                (0, a.Gd)().withScope(t)
            }

            function l(t, e) {
                return (0, a.Gd)().startTransaction(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(n), !0).forEach((function(e) {
                            (0, r.Z)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, t), e)
            }
        },
        6111: function(t, e, n) {
            "use strict";
            n.d(e, {
                Gd: function() {
                    return g
                },
                cu: function() {
                    return v
                }
            });
            var r = n(9499),
                a = n(2777),
                i = n(2262),
                o = n(140),
                s = n(7470),
                c = n(3119),
                u = n(8479),
                l = n(4418),
                d = n(655),
                f = n(2488);

            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach((function(e) {
                        (0, r.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var m = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new d.s,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
                    (0, a.Z)(this, t), this._version = r, this._stack = [{
                        scope: n
                    }], e && this.bindClient(e)
                }
                return (0, i.Z)(t, [{
                    key: "isOlderThan",
                    value: function(t) {
                        return this._version < t
                    }
                }, {
                    key: "bindClient",
                    value: function(t) {
                        this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                    }
                }, {
                    key: "pushScope",
                    value: function() {
                        var t = d.s.clone(this.getScope());
                        return this.getStack().push({
                            client: this.getClient(),
                            scope: t
                        }), t
                    }
                }, {
                    key: "popScope",
                    value: function() {
                        return !(this.getStack().length <= 1) && !!this.getStack().pop()
                    }
                }, {
                    key: "withScope",
                    value: function(t) {
                        var e = this.pushScope();
                        try {
                            t(e)
                        } finally {
                            this.popScope()
                        }
                    }
                }, {
                    key: "getClient",
                    value: function() {
                        return this.getStackTop().client
                    }
                }, {
                    key: "getScope",
                    value: function() {
                        return this.getStackTop().scope
                    }
                }, {
                    key: "getStack",
                    value: function() {
                        return this._stack
                    }
                }, {
                    key: "getStackTop",
                    value: function() {
                        return this._stack[this._stack.length - 1]
                    }
                }, {
                    key: "captureException",
                    value: function(t, e) {
                        var n = this._lastEventId = e && e.event_id ? e.event_id : (0, o.DM)(),
                            r = new Error("Sentry syntheticException");
                        return this._withClient((function(a, i) {
                            a.captureException(t, h(h({
                                originalException: t,
                                syntheticException: r
                            }, e), {}, {
                                event_id: n
                            }), i)
                        })), n
                    }
                }, {
                    key: "captureMessage",
                    value: function(t, e, n) {
                        var r = this._lastEventId = n && n.event_id ? n.event_id : (0, o.DM)(),
                            a = new Error(t);
                        return this._withClient((function(i, o) {
                            i.captureMessage(t, e, h(h({
                                originalException: t,
                                syntheticException: a
                            }, n), {}, {
                                event_id: r
                            }), o)
                        })), r
                    }
                }, {
                    key: "captureEvent",
                    value: function(t, e) {
                        var n = e && e.event_id ? e.event_id : (0, o.DM)();
                        return t.type || (this._lastEventId = n), this._withClient((function(r, a) {
                            r.captureEvent(t, h(h({}, e), {}, {
                                event_id: n
                            }), a)
                        })), n
                    }
                }, {
                    key: "lastEventId",
                    value: function() {
                        return this._lastEventId
                    }
                }, {
                    key: "addBreadcrumb",
                    value: function(t, e) {
                        var n = this.getStackTop(),
                            r = n.scope,
                            a = n.client;
                        if (a) {
                            var i = a.getOptions && a.getOptions() || {},
                                o = i.beforeBreadcrumb,
                                u = void 0 === o ? null : o,
                                l = i.maxBreadcrumbs,
                                d = void 0 === l ? 100 : l;
                            if (!(d <= 0)) {
                                var f = h({
                                        timestamp: (0, s.yW)()
                                    }, t),
                                    p = u ? (0, c.Cf)((function() {
                                        return u(f, e)
                                    })) : f;
                                null !== p && (a.emit && a.emit("beforeAddBreadcrumb", p, e), r.addBreadcrumb(p, d))
                            }
                        }
                    }
                }, {
                    key: "setUser",
                    value: function(t) {
                        this.getScope().setUser(t)
                    }
                }, {
                    key: "setTags",
                    value: function(t) {
                        this.getScope().setTags(t)
                    }
                }, {
                    key: "setExtras",
                    value: function(t) {
                        this.getScope().setExtras(t)
                    }
                }, {
                    key: "setTag",
                    value: function(t, e) {
                        this.getScope().setTag(t, e)
                    }
                }, {
                    key: "setExtra",
                    value: function(t, e) {
                        this.getScope().setExtra(t, e)
                    }
                }, {
                    key: "setContext",
                    value: function(t, e) {
                        this.getScope().setContext(t, e)
                    }
                }, {
                    key: "configureScope",
                    value: function(t) {
                        var e = this.getStackTop(),
                            n = e.scope;
                        e.client && t(n)
                    }
                }, {
                    key: "run",
                    value: function(t) {
                        var e = y(this);
                        try {
                            t(this)
                        } finally {
                            y(e)
                        }
                    }
                }, {
                    key: "getIntegration",
                    value: function(t) {
                        var e = this.getClient();
                        if (!e) return null;
                        try {
                            return e.getIntegration(t)
                        } catch (n) {
                            return null
                        }
                    }
                }, {
                    key: "startTransaction",
                    value: function(t, e) {
                        return this._callExtensionMethod("startTransaction", t, e)
                    }
                }, {
                    key: "traceHeaders",
                    value: function() {
                        return this._callExtensionMethod("traceHeaders")
                    }
                }, {
                    key: "captureSession",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (t) return this.endSession();
                        this._sendSessionUpdate()
                    }
                }, {
                    key: "endSession",
                    value: function() {
                        var t = this.getStackTop().scope,
                            e = t.getSession();
                        e && (0, f.RJ)(e), this._sendSessionUpdate(), t.setSession()
                    }
                }, {
                    key: "startSession",
                    value: function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            r = e.client,
                            a = r && r.getOptions() || {},
                            i = a.release,
                            o = a.environment,
                            s = void 0 === o ? l.J : o,
                            c = (u.n2.navigator || {}).userAgent,
                            d = (0, f.Hv)(h(h({
                                release: i,
                                environment: s,
                                user: n.getUser()
                            }, c && {
                                userAgent: c
                            }), t)),
                            p = n.getSession && n.getSession();
                        return p && "ok" === p.status && (0, f.CT)(p, {
                            status: "exited"
                        }), this.endSession(), n.setSession(d), d
                    }
                }, {
                    key: "shouldSendDefaultPii",
                    value: function() {
                        var t = this.getClient(),
                            e = t && t.getOptions();
                        return Boolean(e && e.sendDefaultPii)
                    }
                }, {
                    key: "_sendSessionUpdate",
                    value: function() {
                        var t = this.getStackTop(),
                            e = t.scope,
                            n = t.client,
                            r = e.getSession();
                        r && n && n.captureSession && n.captureSession(r)
                    }
                }, {
                    key: "_withClient",
                    value: function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            r = e.client;
                        r && t(r, n)
                    }
                }, {
                    key: "_callExtensionMethod",
                    value: function(t) {
                        var e = v(),
                            n = e.__SENTRY__;
                        if (n && n.extensions && "function" === typeof n.extensions[t]) {
                            for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) a[i - 1] = arguments[i];
                            return n.extensions[t].apply(this, a)
                        }
                    }
                }]), t
            }();

            function v() {
                return u.n2.__SENTRY__ = u.n2.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, u.n2
            }

            function y(t) {
                var e = v(),
                    n = w(e);
                return k(e, t), n
            }

            function g() {
                var t = v();
                if (t.__SENTRY__ && t.__SENTRY__.acs) {
                    var e = t.__SENTRY__.acs.getCurrentHub();
                    if (e) return e
                }
                return _(t)
            }

            function _() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v();
                return b(t) && !w(t).isOlderThan(4) || k(t, new m), w(t)
            }

            function b(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }

            function w(t) {
                return (0, u.YO)("hub", (function() {
                    return new m
                }), t)
            }

            function k(t, e) {
                return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
            }
        },
        655: function(t, e, n) {
            "use strict";
            n.d(e, {
                c: function() {
                    return y
                },
                s: function() {
                    return m
                }
            });
            var r = n(7812),
                a = n(9499),
                i = n(2777),
                o = n(2262),
                s = n(2196),
                c = n(7470),
                u = n(3569),
                l = n(140),
                d = n(8479),
                f = n(2488);

            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach((function(e) {
                        (0, a.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var m = function() {
                function t() {
                    (0, i.Z)(this, t), this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = g()
                }
                return (0, o.Z)(t, [{
                    key: "addScopeListener",
                    value: function(t) {
                        this._scopeListeners.push(t)
                    }
                }, {
                    key: "addEventProcessor",
                    value: function(t) {
                        return this._eventProcessors.push(t), this
                    }
                }, {
                    key: "setUser",
                    value: function(t) {
                        return this._user = t || {}, this._session && (0, f.CT)(this._session, {
                            user: t
                        }), this._notifyScopeListeners(), this
                    }
                }, {
                    key: "getUser",
                    value: function() {
                        return this._user
                    }
                }, {
                    key: "getRequestSession",
                    value: function() {
                        return this._requestSession
                    }
                }, {
                    key: "setRequestSession",
                    value: function(t) {
                        return this._requestSession = t, this
                    }
                }, {
                    key: "setTags",
                    value: function(t) {
                        return this._tags = h(h({}, this._tags), t), this._notifyScopeListeners(), this
                    }
                }, {
                    key: "setTag",
                    value: function(t, e) {
                        return this._tags = h(h({}, this._tags), {}, (0, a.Z)({}, t, e)), this._notifyScopeListeners(), this
                    }
                }, {
                    key: "setExtras",
                    value: function(t) {
                        return this._extra = h(h({}, this._extra), t), this._notifyScopeListeners(), this
                    }
                }, {
                    key: "setExtra",
                    value: function(t, e) {
                        return this._extra = h(h({}, this._extra), {}, (0, a.Z)({}, t, e)), this._notifyScopeListeners(), this
                    }
                }, {
                    key: "setFingerprint",
                    value: function(t) {
                        return this._fingerprint = t, this._notifyScopeListeners(), this
                    }
                }, {
                    key: "setLevel",
                    value: function(t) {
                        return this._level = t, this._notifyScopeListeners(), this
                    }
                }, {
                    key: "setTransactionName",
                    value: function(t) {
                        return this._transactionName = t, this._notifyScopeListeners(), this
                    }
                }, {
                    key: "setContext",
                    value: function(t, e) {
                        return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
                    }
                }, {
                    key: "setSpan",
                    value: function(t) {
                        return this._span = t, this._notifyScopeListeners(), this
                    }
                }, {
                    key: "getSpan",
                    value: function() {
                        return this._span
                    }
                }, {
                    key: "getTransaction",
                    value: function() {
                        var t = this.getSpan();
                        return t && t.transaction
                    }
                }, {
                    key: "setSession",
                    value: function(t) {
                        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                    }
                }, {
                    key: "getSession",
                    value: function() {
                        return this._session
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        if (!e) return this;
                        if ("function" === typeof e) {
                            var n = e(this);
                            return n instanceof t ? n : this
                        }
                        return e instanceof t ? (this._tags = h(h({}, this._tags), e._tags), this._extra = h(h({}, this._extra), e._extra), this._contexts = h(h({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession), e._propagationContext && (this._propagationContext = e._propagationContext)) : (0, s.PO)(e) && (e = e, this._tags = h(h({}, this._tags), e.tags), this._extra = h(h({}, this._extra), e.extra), this._contexts = h(h({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)), this
                    }
                }, {
                    key: "clear",
                    value: function() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = g(), this
                    }
                }, {
                    key: "addBreadcrumb",
                    value: function(t, e) {
                        var n = "number" === typeof e ? e : 100;
                        if (n <= 0) return this;
                        var a = h({
                            timestamp: (0, c.yW)()
                        }, t);
                        return this._breadcrumbs = [].concat((0, r.Z)(this._breadcrumbs), [a]).slice(-n), this._notifyScopeListeners(), this
                    }
                }, {
                    key: "getLastBreadcrumb",
                    value: function() {
                        return this._breadcrumbs[this._breadcrumbs.length - 1]
                    }
                }, {
                    key: "clearBreadcrumbs",
                    value: function() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }
                }, {
                    key: "addAttachment",
                    value: function(t) {
                        return this._attachments.push(t), this
                    }
                }, {
                    key: "getAttachments",
                    value: function() {
                        return this._attachments
                    }
                }, {
                    key: "clearAttachments",
                    value: function() {
                        return this._attachments = [], this
                    }
                }, {
                    key: "applyToEvent",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (this._extra && Object.keys(this._extra).length && (t.extra = h(h({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = h(h({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = h(h({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = h(h({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                            t.contexts = h({
                                trace: this._span.getTraceContext()
                            }, t.contexts);
                            var n = this._span.transaction;
                            if (n) {
                                t.sdkProcessingMetadata = h({
                                    dynamicSamplingContext: n.getDynamicSamplingContext()
                                }, t.sdkProcessingMetadata);
                                var a = n.name;
                                a && (t.tags = h({
                                    transaction: a
                                }, t.tags))
                            }
                        }
                        return this._applyFingerprint(t), t.breadcrumbs = [].concat((0, r.Z)(t.breadcrumbs || []), (0, r.Z)(this._breadcrumbs)), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = h(h(h({}, t.sdkProcessingMetadata), this._sdkProcessingMetadata), {}, {
                            propagationContext: this._propagationContext
                        }), this._notifyEventProcessors([].concat((0, r.Z)(v()), (0, r.Z)(this._eventProcessors)), t, e)
                    }
                }, {
                    key: "setSDKProcessingMetadata",
                    value: function(t) {
                        return this._sdkProcessingMetadata = h(h({}, this._sdkProcessingMetadata), t), this
                    }
                }, {
                    key: "setPropagationContext",
                    value: function(t) {
                        return this._propagationContext = t, this
                    }
                }, {
                    key: "getPropagationContext",
                    value: function() {
                        return this._propagationContext
                    }
                }, {
                    key: "_notifyEventProcessors",
                    value: function(t, e, n) {
                        var r = this,
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        return new u.cW((function(i, o) {
                            var c = t[a];
                            if (null === e || "function" !== typeof c) i(e);
                            else {
                                var u = c(h({}, e), n);
                                (0, s.J8)(u) ? u.then((function(e) {
                                    return r._notifyEventProcessors(t, e, n, a + 1).then(i)
                                })).then(null, o): r._notifyEventProcessors(t, u, n, a + 1).then(i).then(null, o)
                            }
                        }))
                    }
                }, {
                    key: "_notifyScopeListeners",
                    value: function() {
                        var t = this;
                        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(e) {
                            e(t)
                        })), this._notifyingListeners = !1)
                    }
                }, {
                    key: "_applyFingerprint",
                    value: function(t) {
                        t.fingerprint = t.fingerprint ? (0, l.lE)(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }
                }], [{
                    key: "clone",
                    value: function(e) {
                        var n = new t;
                        return e && (n._breadcrumbs = (0, r.Z)(e._breadcrumbs), n._tags = h({}, e._tags), n._extra = h({}, e._extra), n._contexts = h({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = (0, r.Z)(e._eventProcessors), n._requestSession = e._requestSession, n._attachments = (0, r.Z)(e._attachments), n._sdkProcessingMetadata = h({}, e._sdkProcessingMetadata), n._propagationContext = h({}, e._propagationContext)), n
                    }
                }]), t
            }();

            function v() {
                return (0, d.YO)("globalEventProcessors", (function() {
                    return []
                }))
            }

            function y(t) {
                v().push(t)
            }

            function g() {
                return {
                    traceId: (0, l.DM)(),
                    spanId: (0, l.DM)().substring(16),
                    sampled: !1
                }
            }
        },
        2488: function(t, e, n) {
            "use strict";
            n.d(e, {
                CT: function() {
                    return s
                },
                Hv: function() {
                    return o
                },
                RJ: function() {
                    return c
                }
            });
            var r = n(7470),
                a = n(140),
                i = n(9009);

            function o(t) {
                var e = (0, r.ph)(),
                    n = {
                        sid: (0, a.DM)(),
                        init: !0,
                        timestamp: e,
                        started: e,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: function() {
                            return function(t) {
                                return (0, i.Jr)({
                                    sid: "".concat(t.sid),
                                    init: t.init,
                                    started: new Date(1e3 * t.started).toISOString(),
                                    timestamp: new Date(1e3 * t.timestamp).toISOString(),
                                    status: t.status,
                                    errors: t.errors,
                                    did: "number" === typeof t.did || "string" === typeof t.did ? "".concat(t.did) : void 0,
                                    duration: t.duration,
                                    attrs: {
                                        release: t.release,
                                        environment: t.environment,
                                        ip_address: t.ipAddress,
                                        user_agent: t.userAgent
                                    }
                                })
                            }(n)
                        }
                    };
                return t && s(n, t), n
            }

            function s(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, r.ph)(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, a.DM)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = "".concat(e.did)), "number" === typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
                else if ("number" === typeof e.duration) t.duration = e.duration;
                else {
                    var n = t.timestamp - t.started;
                    t.duration = n >= 0 ? n : 0
                }
                e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" === typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
            }

            function c(t, e) {
                var n = {};
                e ? n = {
                    status: e
                } : "ok" === t.status && (n = {
                    status: "exited"
                }), s(t, n)
            }
        },
        8420: function(t, e, n) {
            "use strict";
            var r = n(7812);
            var a = n(6111);

            function i(t) {
                if ("boolean" === typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                var e = (0, a.Gd)().getClient(),
                    n = t || e && e.getOptions();
                return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
            }
            var o = n(9499),
                s = n(2777),
                c = n(2262);

            function u(t, e) {
                for (var n = 0, r = t.length - 1; r >= 0; r--) {
                    var a = t[r];
                    "." === a ? t.splice(r, 1) : ".." === a ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
                }
                if (e)
                    for (; n--; n) t.unshift("..");
                return t
            }
            var l = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

            function d(t) {
                var e = t.length > 1024 ? "<truncated>".concat(t.slice(-1024)) : t,
                    n = l.exec(e);
                return n ? n.slice(1) : []
            }

            function f() {
                for (var t = "", e = !1, n = arguments.length - 1; n >= -1 && !e; n--) {
                    var r = n >= 0 ? n < 0 || arguments.length <= n ? void 0 : arguments[n] : "/";
                    r && (t = "".concat(r, "/").concat(t), e = "/" === r.charAt(0))
                }
                return (e ? "/" : "") + (t = u(t.split("/").filter((function(t) {
                    return !!t
                })), !e).join("/")) || "."
            }

            function p(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++);
                for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
                return e > n ? [] : t.slice(e, n - e + 1)
            }

            function h(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var v = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0, s.Z)(this, t), t.prototype.__init.call(this), this.name = t.id, e.root && (this._root = e.root), this._prefix = e.prefix || "app:///", e.iteratee && (this._iteratee = e.iteratee)
                }
                return (0, c.Z)(t, [{
                    key: "setupOnce",
                    value: function(e, n) {
                        e((function(e) {
                            var r = n().getIntegration(t);
                            return r ? r.process(e) : e
                        }))
                    }
                }, {
                    key: "process",
                    value: function(t) {
                        var e = t;
                        return t.exception && Array.isArray(t.exception.values) && (e = this._processExceptionsEvent(e)), e
                    }
                }, {
                    key: "__init",
                    value: function() {
                        var t = this;
                        this._iteratee = function(e) {
                            if (!e.filename) return e;
                            var n = /^[a-zA-Z]:\\/.test(e.filename) || e.filename.includes("\\") && !e.filename.includes("/"),
                                r = /^\//.test(e.filename);
                            if (n || r) {
                                var a = n ? e.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : e.filename,
                                    i = t._root ? function(t, e) {
                                        t = f(t).slice(1), e = f(e).slice(1);
                                        for (var n = p(t.split("/")), r = p(e.split("/")), a = Math.min(n.length, r.length), i = a, o = 0; o < a; o++)
                                            if (n[o] !== r[o]) {
                                                i = o;
                                                break
                                            }
                                        for (var s = [], c = i; c < n.length; c++) s.push("..");
                                        return (s = s.concat(r.slice(i))).join("/")
                                    }(t._root, a) : function(t, e) {
                                        var n = d(t)[2];
                                        return e && n.slice(-1 * e.length) === e && (n = n.slice(0, n.length - e.length)), n
                                    }(a);
                                e.filename = "".concat(t._prefix).concat(i)
                            }
                            return e
                        }
                    }
                }, {
                    key: "_processExceptionsEvent",
                    value: function(t) {
                        var e = this;
                        try {
                            return m(m({}, t), {}, {
                                exception: m(m({}, t.exception), {}, {
                                    values: t.exception.values.map((function(t) {
                                        return m(m({}, t), t.stacktrace && {
                                            stacktrace: e._processStacktrace(t.stacktrace)
                                        })
                                    }))
                                })
                            })
                        } catch (n) {
                            return t
                        }
                    }
                }, {
                    key: "_processStacktrace",
                    value: function(t) {
                        var e = this;
                        return m(m({}, t), {}, {
                            frames: t && t.frames && t.frames.map((function(t) {
                                return e._iteratee(t)
                            }))
                        })
                    }
                }], [{
                    key: "__initStatic",
                    value: function() {
                        this.id = "RewriteFrames"
                    }
                }]), t
            }();
            v.__initStatic();
            var y = "7.63.0";
            var g = n(2937);

            function _(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(t); !(o = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                        } catch (c) {
                            s = !0, a = c
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(t, e) || (0, g.Z)(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = n(140),
                w = n(655),
                k = [];

            function S(t) {
                var e = t.defaultIntegrations || [],
                    n = t.integrations;
                e.forEach((function(t) {
                    t.isDefaultInstance = !0
                }));
                var a = function(t) {
                        var e = {};
                        return t.forEach((function(t) {
                            var n = t.name,
                                r = e[n];
                            r && !r.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
                        })), Object.keys(e).map((function(t) {
                            return e[t]
                        }))
                    }(Array.isArray(n) ? [].concat((0, r.Z)(e), (0, r.Z)(n)) : "function" === typeof n ? (0, b.lE)(n(e)) : e),
                    i = function(t, e) {
                        for (var n = 0; n < t.length; n++)
                            if (!0 === e(t[n])) return n;
                        return -1
                    }(a, (function(t) {
                        return "Debug" === t.name
                    }));
                if (-1 !== i) {
                    var o = _(a.splice(i, 1), 1)[0];
                    a.push(o)
                }
                return a
            }

            function x(t, e) {
                e[t.name] = t, -1 === k.indexOf(t.name) && (t.setupOnce(w.c, a.Gd), k.push(t.name))
            }

            function O(t, e) {
                !0 === e.debug && console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
                var n = (0, a.Gd)();
                n.getScope().update(e.initialScope);
                var r = new t(e);
                n.bindClient(r)
            }
            var E = n(408),
                j = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                T = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/],
                C = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, s.Z)(this, t), this.name = t.id, this._options = e
                    }
                    return (0, c.Z)(t, [{
                        key: "setupOnce",
                        value: function(e, n) {
                            var a = function(e) {
                                var a = n();
                                if (a) {
                                    var i = a.getIntegration(t);
                                    if (i) {
                                        var o = a.getClient(),
                                            s = o ? o.getOptions() : {},
                                            c = function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                return {
                                                    allowUrls: [].concat((0, r.Z)(t.allowUrls || []), (0, r.Z)(e.allowUrls || [])),
                                                    denyUrls: [].concat((0, r.Z)(t.denyUrls || []), (0, r.Z)(e.denyUrls || [])),
                                                    ignoreErrors: [].concat((0, r.Z)(t.ignoreErrors || []), (0, r.Z)(e.ignoreErrors || []), (0, r.Z)(t.disableErrorDefaults ? [] : j)),
                                                    ignoreTransactions: [].concat((0, r.Z)(t.ignoreTransactions || []), (0, r.Z)(e.ignoreTransactions || []), (0, r.Z)(t.disableTransactionDefaults ? [] : T)),
                                                    ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                                }
                                            }(i._options, s);
                                        return function(t, e) {
                                            if (e.ignoreInternal && function(t) {
                                                    try {
                                                        return "SentryError" === t.exception.values[0].type
                                                    } catch (e) {}
                                                    return !1
                                                }(t)) return !0;
                                            if (function(t, e) {
                                                    if (t.type || !e || !e.length) return !1;
                                                    return function(t) {
                                                        if (t.message) return [t.message];
                                                        if (t.exception) {
                                                            var e = t.exception.values;
                                                            try {
                                                                var n = e && e[e.length - 1] || {},
                                                                    r = n.type,
                                                                    a = void 0 === r ? "" : r,
                                                                    i = n.value,
                                                                    o = void 0 === i ? "" : i;
                                                                return ["".concat(o), "".concat(a, ": ").concat(o)]
                                                            } catch (s) {
                                                                return []
                                                            }
                                                        }
                                                        return []
                                                    }(t).some((function(t) {
                                                        return (0, E.U0)(t, e)
                                                    }))
                                                }(t, e.ignoreErrors)) return !0;
                                            if (function(t, e) {
                                                    if ("transaction" !== t.type || !e || !e.length) return !1;
                                                    var n = t.transaction;
                                                    return !!n && (0, E.U0)(n, e)
                                                }(t, e.ignoreTransactions)) return !0;
                                            if (function(t, e) {
                                                    if (!e || !e.length) return !1;
                                                    var n = R(t);
                                                    return !!n && (0, E.U0)(n, e)
                                                }(t, e.denyUrls)) return !0;
                                            if (! function(t, e) {
                                                    if (!e || !e.length) return !0;
                                                    var n = R(t);
                                                    return !n || (0, E.U0)(n, e)
                                                }(t, e.allowUrls)) return !0;
                                            return !1
                                        }(e, c) ? null : e
                                    }
                                }
                                return e
                            };
                            a.id = this.name, e(a)
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "InboundFilters"
                        }
                    }]), t
                }();

            function R(t) {
                try {
                    var e;
                    try {
                        e = t.exception.values[0].stacktrace.frames
                    } catch (n) {}
                    return e ? function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = t.length - 1; e >= 0; e--) {
                            var n = t[e];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(e) : null
                } catch (r) {
                    return null
                }
            }
            C.__initStatic();
            var I, A = n(9009),
                P = function() {
                    function t() {
                        (0, s.Z)(this, t), this.name = t.id
                    }
                    return (0, c.Z)(t, [{
                        key: "setupOnce",
                        value: function() {
                            I = Function.prototype.toString;
                            try {
                                Function.prototype.toString = function() {
                                    for (var t = (0, A.HK)(this) || this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    return I.apply(t, n)
                                }
                            } catch (t) {}
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "FunctionToString"
                        }
                    }]), t
                }();

            function D(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function M(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? D(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function N(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return L(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function L(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            P.__initStatic();
            var z = /\(error: (.*)\)/,
                Z = /captureMessage|captureException/;

            function F() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                var r = e.sort((function(t, e) {
                    return t[0] - e[0]
                })).map((function(t) {
                    return t[1]
                }));
                return function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = [], a = t.split("\n"), i = e; i < a.length; i++) {
                        var o = a[i];
                        if (!(o.length > 1024)) {
                            var s = z.test(o) ? o.replace(z, "$1") : o;
                            if (!s.match(/\S*Error: /)) {
                                var c, u = N(r);
                                try {
                                    for (u.s(); !(c = u.n()).done;) {
                                        var l = c.value,
                                            d = l(s);
                                        if (d) {
                                            n.push(d);
                                            break
                                        }
                                    }
                                } catch (f) {
                                    u.e(f)
                                } finally {
                                    u.f()
                                }
                                if (n.length >= 50) break
                            }
                        }
                    }
                    return U(n)
                }
            }

            function B(t) {
                return Array.isArray(t) ? F.apply(void 0, (0, r.Z)(t)) : t
            }

            function U(t) {
                if (!t.length) return [];
                var e = Array.from(t);
                return /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop(), e.reverse(), Z.test(e[e.length - 1].function || "") && (e.pop(), Z.test(e[e.length - 1].function || "") && e.pop()), e.slice(0, 50).map((function(t) {
                    return M(M({}, t), {}, {
                        filename: t.filename || e[e.length - 1].filename,
                        function: t.function || "?"
                    })
                }))
            }
            var H = "<anonymous>";

            function q(t) {
                try {
                    return t && "function" === typeof t && t.name || H
                } catch (e) {
                    return H
                }
            }
            var W = n(8479),
                G = (0, W.Rf)();

            function V() {
                if (!("fetch" in G)) return !1;
                try {
                    return new Headers, new Request("http://www.example.com"), new Response, !0
                } catch (t) {
                    return !1
                }
            }

            function J(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }
            var Y = n(2196),
                $ = n(3119),
                K = (0, W.Rf)();

            function X(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Q(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? X(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function tt(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return et(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return et(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function et(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var nt, rt = (0, W.Rf)(),
                at = {},
                it = {};

            function ot(t) {
                if (!it[t]) switch (it[t] = !0, t) {
                    case "console":
                        ! function() {
                            if (!("console" in rt)) return;
                            $.RU.forEach((function(t) {
                                t in rt.console && (0, A.hl)(rt.console, t, (function(e) {
                                    return function() {
                                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                                        ct("console", {
                                            args: r,
                                            level: t
                                        }), e && e.apply(rt.console, r)
                                    }
                                }))
                            }))
                        }();
                        break;
                    case "dom":
                        ! function() {
                            if (!("document" in rt)) return;
                            var t = ct.bind(null, "dom"),
                                e = vt(t, !0);
                            rt.document.addEventListener("click", e, !1), rt.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((function(e) {
                                var n = rt[e] && rt[e].prototype;
                                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, A.hl)(n, "addEventListener", (function(e) {
                                    return function(n, r, a) {
                                        if ("click" === n || "keypress" == n) try {
                                            var i = this,
                                                o = i.__sentry_instrumentation_handlers__ = i.__sentry_instrumentation_handlers__ || {},
                                                s = o[n] = o[n] || {
                                                    refCount: 0
                                                };
                                            if (!s.handler) {
                                                var c = vt(t);
                                                s.handler = c, e.call(this, n, c, a)
                                            }
                                            s.refCount++
                                        } catch (u) {}
                                        return e.call(this, n, r, a)
                                    }
                                })), (0, A.hl)(n, "removeEventListener", (function(t) {
                                    return function(e, n, r) {
                                        if ("click" === e || "keypress" == e) try {
                                            var a = this,
                                                i = a.__sentry_instrumentation_handlers__ || {},
                                                o = i[e];
                                            o && (o.refCount--, o.refCount <= 0 && (t.call(this, e, o.handler, r), o.handler = void 0, delete i[e]), 0 === Object.keys(i).length && delete a.__sentry_instrumentation_handlers__)
                                        } catch (s) {}
                                        return t.call(this, e, n, r)
                                    }
                                })))
                            }))
                        }();
                        break;
                    case "xhr":
                        ! function() {
                            if (!("XMLHttpRequest" in rt)) return;
                            var t = XMLHttpRequest.prototype;
                            (0, A.hl)(t, "open", (function(t) {
                                return function() {
                                    for (var e = this, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                                    var i = r[1],
                                        o = this.__sentry_xhr_v2__ = {
                                            method: (0, Y.HD)(r[0]) ? r[0].toUpperCase() : r[0],
                                            url: r[1],
                                            request_headers: {}
                                        };
                                    (0, Y.HD)(i) && "POST" === o.method && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                    var s = function() {
                                        var t = e.__sentry_xhr_v2__;
                                        if (t && 4 === e.readyState) {
                                            try {
                                                t.status_code = e.status
                                            } catch (n) {}
                                            ct("xhr", {
                                                args: r,
                                                endTimestamp: Date.now(),
                                                startTimestamp: Date.now(),
                                                xhr: e
                                            })
                                        }
                                    };
                                    return "onreadystatechange" in this && "function" === typeof this.onreadystatechange ? (0, A.hl)(this, "onreadystatechange", (function(t) {
                                        return function() {
                                            s();
                                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                            return t.apply(this, n)
                                        }
                                    })) : this.addEventListener("readystatechange", s), (0, A.hl)(this, "setRequestHeader", (function(t) {
                                        return function() {
                                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                            var a = n[0],
                                                i = n[1],
                                                o = this.__sentry_xhr_v2__;
                                            return o && (o.request_headers[a.toLowerCase()] = i), t.apply(this, n)
                                        }
                                    })), t.apply(this, r)
                                }
                            })), (0, A.hl)(t, "send", (function(t) {
                                return function() {
                                    for (var e = this.__sentry_xhr_v2__, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                                    return e && void 0 !== r[0] && (e.body = r[0]), ct("xhr", {
                                        args: r,
                                        startTimestamp: Date.now(),
                                        xhr: this
                                    }), t.apply(this, r)
                                }
                            }))
                        }();
                        break;
                    case "fetch":
                        ! function() {
                            if (! function() {
                                    if (!V()) return !1;
                                    if (J(G.fetch)) return !0;
                                    var t = !1,
                                        e = G.document;
                                    if (e && "function" === typeof e.createElement) try {
                                        var n = e.createElement("iframe");
                                        n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = J(n.contentWindow.fetch)), e.head.removeChild(n)
                                    } catch (r) {}
                                    return t
                                }()) return;
                            (0, A.hl)(rt, "fetch", (function(t) {
                                return function() {
                                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    var a = dt(n),
                                        i = {
                                            args: n,
                                            fetchData: {
                                                method: a.method,
                                                url: a.url
                                            },
                                            startTimestamp: Date.now()
                                        };
                                    return ct("fetch", Q({}, i)), t.apply(rt, n).then((function(t) {
                                        return ct("fetch", Q(Q({}, i), {}, {
                                            endTimestamp: Date.now(),
                                            response: t
                                        })), t
                                    }), (function(t) {
                                        throw ct("fetch", Q(Q({}, i), {}, {
                                            endTimestamp: Date.now(),
                                            error: t
                                        })), t
                                    }))
                                }
                            }))
                        }();
                        break;
                    case "history":
                        ! function() {
                            if (! function() {
                                    var t = K.chrome,
                                        e = t && t.app && t.app.runtime,
                                        n = "history" in K && !!K.history.pushState && !!K.history.replaceState;
                                    return !e && n
                                }()) return;
                            var t = rt.onpopstate;

                            function e(t) {
                                return function() {
                                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    var a = n.length > 2 ? n[2] : void 0;
                                    if (a) {
                                        var i = nt,
                                            o = String(a);
                                        nt = o, ct("history", {
                                            from: i,
                                            to: o
                                        })
                                    }
                                    return t.apply(this, n)
                                }
                            }
                            rt.onpopstate = function() {
                                var e = rt.location.href,
                                    n = nt;
                                if (nt = e, ct("history", {
                                        from: n,
                                        to: e
                                    }), t) try {
                                    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                                    return t.apply(this, a)
                                } catch (o) {}
                            }, (0, A.hl)(rt.history, "pushState", e), (0, A.hl)(rt.history, "replaceState", e)
                        }();
                        break;
                    case "error":
                        yt = rt.onerror, rt.onerror = function(t, e, n, r, a) {
                            return ct("error", {
                                column: r,
                                error: a,
                                line: n,
                                msg: t,
                                url: e
                            }), !(!yt || yt.__SENTRY_LOADER__) && yt.apply(this, arguments)
                        }, rt.onerror.__SENTRY_INSTRUMENTED__ = !0;
                        break;
                    case "unhandledrejection":
                        gt = rt.onunhandledrejection, rt.onunhandledrejection = function(t) {
                            return ct("unhandledrejection", t), !(gt && !gt.__SENTRY_LOADER__) || gt.apply(this, arguments)
                        }, rt.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
                        break;
                    default:
                        return
                }
            }

            function st(t, e) {
                at[t] = at[t] || [], at[t].push(e), ot(t)
            }

            function ct(t, e) {
                if (t && at[t]) {
                    var n, r = tt(at[t] || []);
                    try {
                        for (r.s(); !(n = r.n()).done;) {
                            var a = n.value;
                            try {
                                a(e)
                            } catch (i) {}
                        }
                    } catch (o) {
                        r.e(o)
                    } finally {
                        r.f()
                    }
                }
            }

            function ut(t, e) {
                return !!t && "object" === typeof t && !!t[e]
            }

            function lt(t) {
                return "string" === typeof t ? t : t ? ut(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
            }

            function dt(t) {
                if (0 === t.length) return {
                    method: "GET",
                    url: ""
                };
                if (2 === t.length) {
                    var e = _(t, 2),
                        n = e[0],
                        r = e[1];
                    return {
                        url: lt(n),
                        method: ut(r, "method") ? String(r.method).toUpperCase() : "GET"
                    }
                }
                var a = t[0];
                return {
                    url: lt(a),
                    method: ut(a, "method") ? String(a.method).toUpperCase() : "GET"
                }
            }
            var ft, pt;

            function ht(t, e) {
                if (!t) return !0;
                if (t.type !== e.type) return !0;
                try {
                    if (t.target !== e.target) return !0
                } catch (n) {}
                return !1
            }

            function mt(t) {
                if ("keypress" !== t.type) return !1;
                try {
                    var e = t.target;
                    if (!e || !e.tagName) return !0;
                    if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
                } catch (n) {}
                return !0
            }

            function vt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return function(n) {
                    if (n && pt !== n && !mt(n)) {
                        var r = "keypress" === n.type ? "input" : n.type;
                        (void 0 === ft || ht(pt, n)) && (t({
                            event: n,
                            name: r,
                            global: e
                        }), pt = n), clearTimeout(ft), ft = rt.setTimeout((function() {
                            ft = void 0
                        }), 1e3)
                    }
                }
            }
            var yt = null;
            var gt = null;
            var _t = n(7247);

            function bt(t, e, n) {
                return bt = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = (0, _t.Z)(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var a = Object.getOwnPropertyDescriptor(r, e);
                        return a.get ? a.get.call(n) : a.value
                    }
                }, bt(t, e, n || t)
            }
            var wt = n(1531),
                kt = n(3553),
                St = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function xt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.host,
                    r = t.path,
                    a = t.pass,
                    i = t.port,
                    o = t.projectId,
                    s = t.protocol,
                    c = t.publicKey;
                return "".concat(s, "://").concat(c).concat(e && a ? ":".concat(a) : "") + "@".concat(n).concat(i ? ":".concat(i) : "", "/").concat(r ? "".concat(r, "/") : r).concat(o)
            }

            function Ot(t) {
                var e = St.exec(t);
                if (e) {
                    var n = _(e.slice(1), 6),
                        r = n[0],
                        a = n[1],
                        i = n[2],
                        o = void 0 === i ? "" : i,
                        s = n[3],
                        c = n[4],
                        u = void 0 === c ? "" : c,
                        l = "",
                        d = n[5],
                        f = d.split("/");
                    if (f.length > 1 && (l = f.slice(0, -1).join("/"), d = f.pop()), d) {
                        var p = d.match(/^\d+/);
                        p && (d = p[0])
                    }
                    return Et({
                        host: s,
                        pass: o,
                        path: l,
                        projectId: d,
                        port: u,
                        protocol: r,
                        publicKey: a
                    })
                }
                console.error("Invalid Sentry Dsn: ".concat(t))
            }

            function Et(t) {
                return {
                    protocol: t.protocol,
                    publicKey: t.publicKey || "",
                    pass: t.pass || "",
                    host: t.host,
                    port: t.port || "",
                    path: t.path || "",
                    projectId: t.projectId
                }
            }
            var jt = n(3569);

            function Tt() {
                var t = "function" === typeof WeakSet,
                    e = t ? new WeakSet : [];
                return [function(n) {
                    if (t) return !!e.has(n) || (e.add(n), !1);
                    for (var r = 0; r < e.length; r++) {
                        if (e[r] === n) return !0
                    }
                    return e.push(n), !1
                }, function(n) {
                    if (t) e.delete(n);
                    else
                        for (var r = 0; r < e.length; r++)
                            if (e[r] === n) {
                                e.splice(r, 1);
                                break
                            }
                }]
            }

            function Ct(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
                try {
                    return It("", t, e, n)
                } catch (r) {
                    return {
                        ERROR: "**non-serializable** (".concat(r, ")")
                    }
                }
            }

            function Rt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 102400,
                    r = Ct(t, e);
                return Pt(r) > n ? Rt(t, e - 1, n) : r
            }

            function It(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Tt(),
                    i = _(a, 2),
                    o = i[0],
                    s = i[1];
                if (null == e || ["number", "boolean", "string"].includes(typeof e) && !(0, Y.i2)(e)) return e;
                var c = At(t, e);
                if (!c.startsWith("[object ")) return c;
                if (e.__sentry_skip_normalization__) return e;
                var u = "number" === typeof e.__sentry_override_normalization_depth__ ? e.__sentry_override_normalization_depth__ : n;
                if (0 === u) return c.replace("object ", "");
                if (o(e)) return "[Circular ~]";
                var l = e;
                if (l && "function" === typeof l.toJSON) try {
                    var d = l.toJSON();
                    return It("", d, u - 1, r, a)
                } catch (y) {}
                var f = Array.isArray(e) ? [] : {},
                    p = 0,
                    h = (0, A.Sh)(e);
                for (var m in h)
                    if (Object.prototype.hasOwnProperty.call(h, m)) {
                        if (p >= r) {
                            f[m] = "[MaxProperties ~]";
                            break
                        }
                        var v = h[m];
                        f[m] = It(m, v, u - 1, r, a), p++
                    }
                return s(e), f
            }

            function At(t, e) {
                try {
                    if ("domain" === t && e && "object" === typeof e && e._events) return "[Domain]";
                    if ("domainEmitter" === t) return "[DomainEmitter]";
                    if ("undefined" !== typeof n.g && e === n.g) return "[Global]";
                    if (e === window) return "[Window]";
                    if ("undefined" !== typeof document && e === document) return "[Document]";
                    if ((0, Y.Cy)(e)) return "[SyntheticEvent]";
                    if ("number" === typeof e && e !== e) return "[NaN]";
                    if ("function" === typeof e) return "[Function: ".concat(q(e), "]");
                    if ("symbol" === typeof e) return "[".concat(String(e), "]");
                    if ("bigint" === typeof e) return "[BigInt: ".concat(String(e), "]");
                    var r = function(t) {
                        var e = Object.getPrototypeOf(t);
                        return e ? e.constructor.name : "null prototype"
                    }(e);
                    return /^HTML(\w*)Element$/.test(r) ? "[HTMLElement: ".concat(r, "]") : "[object ".concat(r, "]")
                } catch (a) {
                    return "**non-serializable** (".concat(a, ")")
                }
            }

            function Pt(t) {
                return function(t) {
                    return ~-encodeURI(t).split(/%..|./).length
                }(JSON.stringify(t))
            }

            function Dt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Mt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Dt(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Dt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Nt(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return Lt(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Lt(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function Lt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function zt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return [t, e]
            }

            function Zt(t, e) {
                var n = _(t, 2),
                    a = n[0],
                    i = n[1];
                return [a, [].concat((0, r.Z)(i), [e])]
            }

            function Ft(t, e) {
                var n, r = Nt(t[1]);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var a = n.value;
                        if (e(a, a[0].type)) return !0
                    }
                } catch (i) {
                    r.e(i)
                } finally {
                    r.f()
                }
                return !1
            }

            function Bt(t, e) {
                return (e || new TextEncoder).encode(t)
            }

            function Ut(t, e) {
                var n = _(t, 2),
                    r = n[0],
                    a = n[1],
                    i = JSON.stringify(r);

                function o(t) {
                    "string" === typeof i ? i = "string" === typeof t ? i + t : [Bt(i, e), t] : i.push("string" === typeof t ? Bt(t, e) : t)
                }
                var s, c = Nt(a);
                try {
                    for (c.s(); !(s = c.n()).done;) {
                        var u = _(s.value, 2),
                            l = u[0],
                            d = u[1];
                        if (o("\n".concat(JSON.stringify(l), "\n")), "string" === typeof d || d instanceof Uint8Array) o(d);
                        else {
                            var f = void 0;
                            try {
                                f = JSON.stringify(d)
                            } catch (p) {
                                f = JSON.stringify(Ct(d))
                            }
                            o(f)
                        }
                    }
                } catch (h) {
                    c.e(h)
                } finally {
                    c.f()
                }
                return "string" === typeof i ? i : function(t) {
                    var e, n = t.reduce((function(t, e) {
                            return t + e.length
                        }), 0),
                        r = new Uint8Array(n),
                        a = 0,
                        i = Nt(t);
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var o = e.value;
                            r.set(o, a), a += o.length
                        }
                    } catch (h) {
                        i.e(h)
                    } finally {
                        i.f()
                    }
                    return r
                }(i)
            }

            function Ht(t, e) {
                var n = "string" === typeof t.data ? Bt(t.data, e) : t.data;
                return [(0, A.Jr)({
                    type: "attachment",
                    length: n.length,
                    filename: t.filename,
                    content_type: t.contentType,
                    attachment_type: t.attachmentType
                }), n]
            }
            var qt = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default",
                profile: "profile",
                replay_event: "replay",
                replay_recording: "replay",
                check_in: "monitor"
            };

            function Wt(t) {
                return qt[t]
            }

            function Gt(t) {
                if (t && t.sdk) {
                    var e = t.sdk;
                    return {
                        name: e.name,
                        version: e.version
                    }
                }
            }

            function Vt(t, e, n, r) {
                var a = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
                return Mt(Mt(Mt({
                    event_id: t.event_id,
                    sent_at: (new Date).toISOString()
                }, e && {
                    sdk: e
                }), !!n && {
                    dsn: xt(r)
                }), a && {
                    trace: (0, A.Jr)(Mt({}, a))
                })
            }
            var Jt = n(748),
                Yt = n(607);

            function $t() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function Kt(t, e, n) {
                return Kt = $t() ? Reflect.construct : function(t, e, n) {
                    var r = [null];
                    r.push.apply(r, e);
                    var a = new(Function.bind.apply(t, r));
                    return n && (0, Yt.Z)(a, n.prototype), a
                }, Kt.apply(null, arguments)
            }

            function Xt(t) {
                var e = "function" === typeof Map ? new Map : void 0;
                return Xt = function(t) {
                    if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                    var n;
                    if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, r)
                    }

                    function r() {
                        return Kt(t, arguments, (0, _t.Z)(this).constructor)
                    }
                    return r.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), (0, Yt.Z)(r, t)
                }, Xt(t)
            }

            function Qt(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, _t.Z)(t);
                    if (e) {
                        var a = (0, _t.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, kt.Z)(this, n)
                }
            }
            var te = function(t) {
                (0, wt.Z)(n, t);
                var e = Qt(n);

                function n(t) {
                    var r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "warn";
                    return (0, s.Z)(this, n), (r = e.call(this, t)).message = t, r.name = (this instanceof n ? this.constructor : void 0).prototype.constructor.name, Object.setPrototypeOf((0, Jt.Z)(r), (this instanceof n ? this.constructor : void 0).prototype), r.logLevel = a, r
                }
                return n
            }(Xt(Error));

            function ee(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ne(t) {
                var e = t.protocol ? "".concat(t.protocol, ":") : "",
                    n = t.port ? ":".concat(t.port) : "";
                return "".concat(e, "//").concat(t.host).concat(n).concat(t.path ? "/".concat(t.path) : "", "/api/")
            }

            function re(t) {
                return "".concat(ne(t)).concat(t.projectId, "/envelope/")
            }

            function ae(t, e) {
                return (0, A._j)(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ee(Object(n), !0).forEach((function(e) {
                            (0, o.Z)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({
                    sentry_key: t.publicKey,
                    sentry_version: "7"
                }, e && {
                    sentry_client: "".concat(e.name, "/").concat(e.version)
                }))
            }

            function ie(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function oe(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ie(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function se(t, e, n, a) {
                var i = Gt(n),
                    o = t.type && "replay_event" !== t.type ? t.type : "event";
                ! function(t, e) {
                    e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [].concat((0, r.Z)(t.sdk.integrations || []), (0, r.Z)(e.integrations || [])), t.sdk.packages = [].concat((0, r.Z)(t.sdk.packages || []), (0, r.Z)(e.packages || [])))
                }(t, n && n.sdk);
                var s = Vt(t, i, a, e);
                return delete t.sdkProcessingMetadata, zt(s, [
                    [{
                        type: o
                    }, t]
                ])
            }
            var ce = n(2488),
                ue = n(4418);

            function le(t, e, n) {
                var r = e.getOptions(),
                    a = (e.getDsn() || {}).publicKey,
                    i = (n && n.getUser() || {}).segment,
                    o = (0, A.Jr)({
                        environment: r.environment || ue.J,
                        release: r.release,
                        user_segment: i,
                        public_key: a,
                        trace_id: t
                    });
                return e.emit && e.emit("createDsc", o), o
            }
            var de = n(7470);

            function fe(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function pe(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? fe(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fe(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function he(t, e, n, a) {
                var i = t.normalizeDepth,
                    o = void 0 === i ? 3 : i,
                    s = t.normalizeMaxBreadth,
                    c = void 0 === s ? 1e3 : s,
                    u = pe(pe({}, e), {}, {
                        event_id: e.event_id || n.event_id || (0, b.DM)(),
                        timestamp: e.timestamp || (0, de.yW)()
                    }),
                    l = n.integrations || t.integrations.map((function(t) {
                        return t.name
                    }));
                ! function(t, e) {
                    var n = e.environment,
                        r = e.release,
                        a = e.dist,
                        i = e.maxValueLength,
                        o = void 0 === i ? 250 : i;
                    "environment" in t || (t.environment = "environment" in e ? n : ue.J);
                    void 0 === t.release && void 0 !== r && (t.release = r);
                    void 0 === t.dist && void 0 !== a && (t.dist = a);
                    t.message && (t.message = (0, E.$G)(t.message, o));
                    var s = t.exception && t.exception.values && t.exception.values[0];
                    s && s.value && (s.value = (0, E.$G)(s.value, o));
                    var c = t.request;
                    c && c.url && (c.url = (0, E.$G)(c.url, o))
                }(u, t),
                function(t, e) {
                    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [].concat((0, r.Z)(t.sdk.integrations || []), (0, r.Z)(e)))
                }(u, l), void 0 === e.type && function(t, e) {
                    var n, r = W.n2._sentryDebugIds;
                    if (!r) return;
                    var a = me.get(e);
                    a ? n = a : (n = new Map, me.set(e, n));
                    var i = Object.keys(r).reduce((function(t, a) {
                        var i, o = n.get(a);
                        o ? i = o : (i = e(a), n.set(a, i));
                        for (var s = i.length - 1; s >= 0; s--) {
                            var c = i[s];
                            if (c.filename) {
                                t[c.filename] = r[a];
                                break
                            }
                        }
                        return t
                    }), {});
                    try {
                        t.exception.values.forEach((function(t) {
                            t.stacktrace.frames.forEach((function(t) {
                                t.filename && (t.debug_id = i[t.filename])
                            }))
                        }))
                    } catch (o) {}
                }(u, t.stackParser);
                var d = a;
                n.captureContext && (d = w.s.clone(d).update(n.captureContext));
                var f = (0, jt.WD)(u);
                if (d) {
                    if (d.getAttachments) {
                        var p = [].concat((0, r.Z)(n.attachments || []), (0, r.Z)(d.getAttachments()));
                        p.length && (n.attachments = p)
                    }
                    f = d.applyToEvent(u, n)
                }
                return f.then((function(t) {
                    return t && function(t) {
                        var e = {};
                        try {
                            t.exception.values.forEach((function(t) {
                                t.stacktrace.frames.forEach((function(t) {
                                    t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
                                }))
                            }))
                        } catch (r) {}
                        if (0 === Object.keys(e).length) return;
                        t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
                        var n = t.debug_meta.images;
                        Object.keys(e).forEach((function(t) {
                            n.push({
                                type: "sourcemap",
                                code_file: t,
                                debug_id: e[t]
                            })
                        }))
                    }(t), "number" === typeof o && o > 0 ? function(t, e, n) {
                        if (!t) return null;
                        var r = pe(pe(pe(pe(pe({}, t), t.breadcrumbs && {
                            breadcrumbs: t.breadcrumbs.map((function(t) {
                                return pe(pe({}, t), t.data && {
                                    data: Ct(t.data, e, n)
                                })
                            }))
                        }), t.user && {
                            user: Ct(t.user, e, n)
                        }), t.contexts && {
                            contexts: Ct(t.contexts, e, n)
                        }), t.extra && {
                            extra: Ct(t.extra, e, n)
                        });
                        t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = Ct(t.contexts.trace.data, e, n)));
                        t.spans && (r.spans = t.spans.map((function(t) {
                            return t.data && (t.data = Ct(t.data, e, n)), t
                        })));
                        return r
                    }(t, o, c) : t
                }))
            }
            var me = new WeakMap;

            function ve(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return ye(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ye(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function ye(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function ge(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _e(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ge(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var be = function() {
                function t(e) {
                    if ((0, s.Z)(this, t), this._options = e, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, e.dsn && (this._dsn = function(t) {
                            var e = "string" === typeof t ? Ot(t) : Et(t);
                            if (e) return e
                        }(e.dsn)), this._dsn) {
                        var n = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = "string" === typeof e ? e : e.tunnel,
                                r = "string" !== typeof e && e._metadata ? e._metadata.sdk : void 0;
                            return n || "".concat(re(t), "?").concat(ae(t, r))
                        }(this._dsn, e);
                        this._transport = e.transport(_e(_e({
                            recordDroppedEvent: this.recordDroppedEvent.bind(this)
                        }, e.transportOptions), {}, {
                            url: n
                        }))
                    }
                }
                return (0, c.Z)(t, [{
                    key: "captureException",
                    value: function(t, e, n) {
                        var r = this;
                        if (!(0, b.YO)(t)) {
                            var a = e && e.event_id;
                            return this._process(this.eventFromException(t, e).then((function(t) {
                                return r._captureEvent(t, e, n)
                            })).then((function(t) {
                                a = t
                            }))), a
                        }
                    }
                }, {
                    key: "captureMessage",
                    value: function(t, e, n, r) {
                        var a = this,
                            i = n && n.event_id,
                            o = (0, Y.pt)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
                        return this._process(o.then((function(t) {
                            return a._captureEvent(t, n, r)
                        })).then((function(t) {
                            i = t
                        }))), i
                    }
                }, {
                    key: "captureEvent",
                    value: function(t, e, n) {
                        if (!(e && e.originalException && (0, b.YO)(e.originalException))) {
                            var r = e && e.event_id;
                            return this._process(this._captureEvent(t, e, n).then((function(t) {
                                r = t
                            }))), r
                        }
                    }
                }, {
                    key: "captureSession",
                    value: function(t) {
                        this._isEnabled() && ("string" !== typeof t.release || (this.sendSession(t), (0, ce.CT)(t, {
                            init: !1
                        })))
                    }
                }, {
                    key: "getDsn",
                    value: function() {
                        return this._dsn
                    }
                }, {
                    key: "getOptions",
                    value: function() {
                        return this._options
                    }
                }, {
                    key: "getSdkMetadata",
                    value: function() {
                        return this._options._metadata
                    }
                }, {
                    key: "getTransport",
                    value: function() {
                        return this._transport
                    }
                }, {
                    key: "flush",
                    value: function(t) {
                        var e = this._transport;
                        return e ? this._isClientDoneProcessing(t).then((function(n) {
                            return e.flush(t).then((function(t) {
                                return n && t
                            }))
                        })) : (0, jt.WD)(!0)
                    }
                }, {
                    key: "close",
                    value: function(t) {
                        var e = this;
                        return this.flush(t).then((function(t) {
                            return e.getOptions().enabled = !1, t
                        }))
                    }
                }, {
                    key: "setupIntegrations",
                    value: function() {
                        this._isEnabled() && !this._integrationsInitialized && (this._integrations = function(t) {
                            var e = {};
                            return t.forEach((function(t) {
                                t && x(t, e)
                            })), e
                        }(this._options.integrations), this._integrationsInitialized = !0)
                    }
                }, {
                    key: "getIntegrationById",
                    value: function(t) {
                        return this._integrations[t]
                    }
                }, {
                    key: "getIntegration",
                    value: function(t) {
                        try {
                            return this._integrations[t.id] || null
                        } catch (e) {
                            return null
                        }
                    }
                }, {
                    key: "addIntegration",
                    value: function(t) {
                        x(t, this._integrations)
                    }
                }, {
                    key: "sendEvent",
                    value: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (this._dsn) {
                            var r, a = se(t, this._dsn, this._options._metadata, this._options.tunnel),
                                i = ve(n.attachments || []);
                            try {
                                for (i.s(); !(r = i.n()).done;) {
                                    var o = r.value;
                                    a = Zt(a, Ht(o, this._options.transportOptions && this._options.transportOptions.textEncoder))
                                }
                            } catch (c) {
                                i.e(c)
                            } finally {
                                i.f()
                            }
                            var s = this._sendEnvelope(a);
                            s && s.then((function(n) {
                                return e.emit("afterSendEvent", t, n)
                            }), null)
                        }
                    }
                }, {
                    key: "sendSession",
                    value: function(t) {
                        if (this._dsn) {
                            var e = function(t, e, n, r) {
                                var a = Gt(n);
                                return zt(oe(oe({
                                    sent_at: (new Date).toISOString()
                                }, a && {
                                    sdk: a
                                }), !!r && {
                                    dsn: xt(e)
                                }), ["aggregates" in t ? [{
                                    type: "sessions"
                                }, t] : [{
                                    type: "session"
                                }, t.toJSON()]])
                            }(t, this._dsn, this._options._metadata, this._options.tunnel);
                            this._sendEnvelope(e)
                        }
                    }
                }, {
                    key: "recordDroppedEvent",
                    value: function(t, e, n) {
                        if (this._options.sendClientReports) {
                            var r = "".concat(t, ":").concat(e);
                            this._outcomes[r] = this._outcomes[r] + 1 || 1
                        }
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(e)
                    }
                }, {
                    key: "emit",
                    value: function(t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        this._hooks[t] && this._hooks[t].forEach((function(t) {
                            return t.apply(void 0, n)
                        }))
                    }
                }, {
                    key: "_updateSessionFromEvent",
                    value: function(t, e) {
                        var n = !1,
                            r = !1,
                            a = e.exception && e.exception.values;
                        if (a) {
                            r = !0;
                            var i, o = ve(a);
                            try {
                                for (o.s(); !(i = o.n()).done;) {
                                    var s = i.value.mechanism;
                                    if (s && !1 === s.handled) {
                                        n = !0;
                                        break
                                    }
                                }
                            } catch (u) {
                                o.e(u)
                            } finally {
                                o.f()
                            }
                        }
                        var c = "ok" === t.status;
                        (c && 0 === t.errors || c && n) && ((0, ce.CT)(t, _e(_e({}, n && {
                            status: "crashed"
                        }), {}, {
                            errors: t.errors || Number(r || n)
                        })), this.captureSession(t))
                    }
                }, {
                    key: "_isClientDoneProcessing",
                    value: function(t) {
                        var e = this;
                        return new jt.cW((function(n) {
                            var r = 0,
                                a = setInterval((function() {
                                    0 == e._numProcessing ? (clearInterval(a), n(!0)) : (r += 1, t && r >= t && (clearInterval(a), n(!1)))
                                }), 1)
                        }))
                    }
                }, {
                    key: "_isEnabled",
                    value: function() {
                        return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                    }
                }, {
                    key: "_prepareEvent",
                    value: function(t, e, n) {
                        var r = this,
                            a = this.getOptions(),
                            i = Object.keys(this._integrations);
                        return !e.integrations && i.length > 0 && (e.integrations = i), he(a, t, e, n).then((function(t) {
                            if (null === t) return t;
                            var e = (t.sdkProcessingMetadata || {}).propagationContext;
                            if (!(t.contexts && t.contexts.trace) && e) {
                                var a = e.traceId,
                                    i = e.spanId,
                                    o = e.parentSpanId,
                                    s = e.dsc;
                                t.contexts = _e({
                                    trace: {
                                        trace_id: a,
                                        span_id: i,
                                        parent_span_id: o
                                    }
                                }, t.contexts);
                                var c = s || le(a, r, n);
                                t.sdkProcessingMetadata = _e({
                                    dynamicSamplingContext: c
                                }, t.sdkProcessingMetadata)
                            }
                            return t
                        }))
                    }
                }, {
                    key: "_captureEvent",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return this._processEvent(t, e, n).then((function(t) {
                            return t.event_id
                        }), (function(t) {}))
                    }
                }, {
                    key: "_processEvent",
                    value: function(t, e, n) {
                        var r = this,
                            a = this.getOptions(),
                            i = a.sampleRate;
                        if (!this._isEnabled()) return (0, jt.$2)(new te("SDK not enabled, will not capture event.", "log"));
                        var o = ke(t),
                            s = we(t),
                            c = t.type || "error",
                            u = "before send for type `".concat(c, "`");
                        if (s && "number" === typeof i && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", t), (0, jt.$2)(new te("Discarding event because it's not included in the random sample (sampling rate = ".concat(i, ")"), "log"));
                        var l = "replay_event" === c ? "replay" : c;
                        return this._prepareEvent(t, e, n).then((function(n) {
                            if (null === n) throw r.recordDroppedEvent("event_processor", l, t), new te("An event processor returned `null`, will not send event.", "log");
                            if (e.data && !0 === e.data.__sentry__) return n;
                            var i = function(t, e, n) {
                                var r = t.beforeSend,
                                    a = t.beforeSendTransaction;
                                if (we(e) && r) return r(e, n);
                                if (ke(e) && a) return a(e, n);
                                return e
                            }(a, n, e);
                            return function(t, e) {
                                var n = "".concat(e, " must return `null` or a valid event.");
                                if ((0, Y.J8)(t)) return t.then((function(t) {
                                    if (!(0, Y.PO)(t) && null !== t) throw new te(n);
                                    return t
                                }), (function(t) {
                                    throw new te("".concat(e, " rejected with ").concat(t))
                                }));
                                if (!(0, Y.PO)(t) && null !== t) throw new te(n);
                                return t
                            }(i, u)
                        })).then((function(a) {
                            if (null === a) throw r.recordDroppedEvent("before_send", l, t), new te("".concat(u, " returned `null`, will not send event."), "log");
                            var i = n && n.getSession();
                            !o && i && r._updateSessionFromEvent(i, a);
                            var s = a.transaction_info;
                            if (o && s && a.transaction !== t.transaction) {
                                a.transaction_info = _e(_e({}, s), {}, {
                                    source: "custom"
                                })
                            }
                            return r.sendEvent(a, e), a
                        })).then(null, (function(t) {
                            if (t instanceof te) throw t;
                            throw r.captureException(t, {
                                data: {
                                    __sentry__: !0
                                },
                                originalException: t
                            }), new te("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(t))
                        }))
                    }
                }, {
                    key: "_process",
                    value: function(t) {
                        var e = this;
                        this._numProcessing++, t.then((function(t) {
                            return e._numProcessing--, t
                        }), (function(t) {
                            return e._numProcessing--, t
                        }))
                    }
                }, {
                    key: "_sendEnvelope",
                    value: function(t) {
                        if (this._transport && this._dsn) return this.emit("beforeEnvelope", t), this._transport.send(t).then(null, (function(t) {}))
                    }
                }, {
                    key: "_clearOutcomes",
                    value: function() {
                        var t = this._outcomes;
                        return this._outcomes = {}, Object.keys(t).map((function(e) {
                            var n = _(e.split(":"), 2);
                            return {
                                reason: n[0],
                                category: n[1],
                                quantity: t[e]
                            }
                        }))
                    }
                }]), t
            }();

            function we(t) {
                return void 0 === t.type
            }

            function ke(t) {
                return "transaction" === t.type
            }
            var Se = n(9818);

            function xe(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Oe(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? xe(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xe(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ee(t, e) {
                var n = Te(t, e),
                    r = {
                        type: e && e.name,
                        value: Re(e)
                    };
                return n.length && (r.stacktrace = {
                    frames: n
                }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
            }

            function je(t, e) {
                return {
                    exception: {
                        values: [Ee(t, e)]
                    }
                }
            }

            function Te(t, e) {
                var n = e.stacktrace || e.stack || "",
                    r = function(t) {
                        if (t) {
                            if ("number" === typeof t.framesToPop) return t.framesToPop;
                            if (Ce.test(t.message)) return 1
                        }
                        return 0
                    }(e);
                try {
                    return t(n, r)
                } catch (a) {}
                return []
            }
            var Ce = /Minified React error #\d+;/i;

            function Re(t) {
                var e = t && t.message;
                return e ? e.error && "string" === typeof e.error.message ? e.error.message : e : "No error message"
            }

            function Ie(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info",
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    i = r && r.syntheticException || void 0,
                    o = Pe(t, e, i, a);
                return o.level = n, r && r.event_id && (o.event_id = r.event_id), (0, jt.WD)(o)
            }

            function Ae(t, e, n, r, i) {
                var o;
                if ((0, Y.VW)(e) && e.error) return je(t, e.error);
                if ((0, Y.TX)(e) || (0, Y.fm)(e)) {
                    var s = e;
                    if ("stack" in e) o = je(t, e);
                    else {
                        var c = s.name || ((0, Y.TX)(s) ? "DOMError" : "DOMException"),
                            u = s.message ? "".concat(c, ": ").concat(s.message) : c;
                        o = Pe(t, u, n, r), (0, b.Db)(o, u)
                    }
                    return "code" in s && (o.tags = Oe(Oe({}, o.tags), {}, {
                        "DOMException.code": "".concat(s.code)
                    })), o
                }
                return (0, Y.VZ)(e) ? je(t, e) : (0, Y.PO)(e) || (0, Y.cO)(e) ? (o = function(t, e, n, r) {
                    var i = (0, a.Gd)().getClient(),
                        o = i && i.getOptions().normalizeDepth,
                        s = {
                            exception: {
                                values: [{
                                    type: (0, Y.cO)(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                                    value: De(e, {
                                        isUnhandledRejection: r
                                    })
                                }]
                            },
                            extra: {
                                __serialized__: Rt(e, o)
                            }
                        };
                    if (n) {
                        var c = Te(t, n);
                        c.length && (s.exception.values[0].stacktrace = {
                            frames: c
                        })
                    }
                    return s
                }(t, e, n, i), (0, b.EG)(o, {
                    synthetic: !0
                }), o) : (o = Pe(t, e, n, r), (0, b.Db)(o, "".concat(e), void 0), (0, b.EG)(o, {
                    synthetic: !0
                }), o)
            }

            function Pe(t, e, n, r) {
                var a = {
                    message: e
                };
                if (r && n) {
                    var i = Te(t, n);
                    i.length && (a.exception = {
                        values: [{
                            value: e,
                            stacktrace: {
                                frames: i
                            }
                        }]
                    })
                }
                return a
            }

            function De(t, e) {
                var n = e.isUnhandledRejection,
                    r = (0, A.zf)(t),
                    a = n ? "promise rejection" : "exception";
                if ((0, Y.VW)(t)) return "Event `ErrorEvent` captured as ".concat(a, " with message `").concat(t.message, "`");
                if ((0, Y.cO)(t)) {
                    var i = function(t) {
                        try {
                            var e = Object.getPrototypeOf(t);
                            return e ? e.constructor.name : void 0
                        } catch (n) {}
                    }(t);
                    return "Event `".concat(i, "` (type=").concat(t.type, ") captured as ").concat(a)
                }
                return "Object captured as ".concat(a, " with keys: ").concat(r)
            }
            var Me = n(9718);

            function Ne(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Le(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ne(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var ze = W.n2,
                Ze = 0;

            function Fe() {
                return Ze > 0
            }

            function Be() {
                Ze++, setTimeout((function() {
                    Ze--
                }))
            }

            function Ue(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0;
                if ("function" !== typeof t) return t;
                try {
                    var r = t.__sentry_wrapped__;
                    if (r) return r;
                    if ((0, A.HK)(t)) return t
                } catch (s) {
                    return t
                }
                var a = function() {
                    var r = Array.prototype.slice.call(arguments);
                    try {
                        n && "function" === typeof n && n.apply(this, arguments);
                        var a = r.map((function(t) {
                            return Ue(t, e)
                        }));
                        return t.apply(this, a)
                    } catch (i) {
                        throw Be(), (0, Me.$e)((function(t) {
                            t.addEventProcessor((function(t) {
                                return e.mechanism && ((0, b.Db)(t, void 0, void 0), (0, b.EG)(t, e.mechanism)), t.extra = Le(Le({}, t.extra), {}, {
                                    arguments: r
                                }), t
                            })), (0, Me.Tb)(i)
                        })), i
                    }
                };
                try {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (a[i] = t[i])
                } catch (c) {}(0, A.$Q)(a, t), (0, A.xp)(t, "__sentry_wrapped__", a);
                try {
                    var o = Object.getOwnPropertyDescriptor(a, "name");
                    o.configurable && Object.defineProperty(a, "name", {
                        get: function() {
                            return t.name
                        }
                    })
                } catch (c) {}
                return a
            }
            var He = n(8270),
                qe = ["fatal", "error", "warning", "log", "info", "debug"];

            function We(t) {
                return "warn" === t ? "warning" : qe.includes(t) ? t : "log"
            }

            function Ge(t) {
                if (!t) return {};
                var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e) return {};
                var n = e[6] || "",
                    r = e[8] || "";
                return {
                    host: e[4],
                    path: e[5],
                    protocol: e[2],
                    search: n,
                    hash: r,
                    relative: e[5] + n + r
                }
            }

            function Ve(t) {
                return t.split(/[\?#]/, 1)[0]
            }

            function Je(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ye(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Je(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var $e = 1024,
                Ke = "Breadcrumbs",
                Xe = function() {
                    function t(e) {
                        (0, s.Z)(this, t), this.name = t.id, this.options = Ye({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        }, e)
                    }
                    return (0, c.Z)(t, [{
                        key: "setupOnce",
                        value: function() {
                            this.options.console && st("console", Qe), this.options.dom && st("dom", function(t) {
                                function e(e) {
                                    var n, r = "object" === typeof t ? t.serializeAttribute : void 0,
                                        i = "object" === typeof t && "number" === typeof t.maxStringLength ? t.maxStringLength : void 0;
                                    i && i > $e && (i = $e), "string" === typeof r && (r = [r]);
                                    try {
                                        var o = e.event;
                                        n = function(t) {
                                            return !!t && !!t.target
                                        }(o) ? (0, He.Rt)(o.target, {
                                            keyAttrs: r,
                                            maxStringLength: i
                                        }) : (0, He.Rt)(o, {
                                            keyAttrs: r,
                                            maxStringLength: i
                                        })
                                    } catch (s) {
                                        n = "<unknown>"
                                    }
                                    0 !== n.length && (0, a.Gd)().addBreadcrumb({
                                        category: "ui.".concat(e.name),
                                        message: n
                                    }, {
                                        event: e.event,
                                        name: e.name,
                                        global: e.global
                                    })
                                }
                                return e
                            }(this.options.dom)), this.options.xhr && st("xhr", tn), this.options.fetch && st("fetch", en), this.options.history && st("history", nn)
                        }
                    }, {
                        key: "addSentryBreadcrumb",
                        value: function(t) {
                            this.options.sentry && (0, a.Gd)().addBreadcrumb({
                                category: "sentry.".concat("transaction" === t.type ? "transaction" : "event"),
                                event_id: t.event_id,
                                level: t.level,
                                message: (0, b.jH)(t)
                            }, {
                                event: t
                            })
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = Ke
                        }
                    }]), t
                }();

            function Qe(t) {
                for (var e = 0; e < t.args.length; e++)
                    if ("ref=Ref<" === t.args[e]) {
                        t.args[e + 1] = "viewRef";
                        break
                    }
                var n = {
                    category: "console",
                    data: {
                        arguments: t.args,
                        logger: "console"
                    },
                    level: We(t.level),
                    message: (0, E.nK)(t.args, " ")
                };
                if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    n.message = "Assertion failed: ".concat((0, E.nK)(t.args.slice(1), " ") || "console.assert"), n.data.arguments = t.args.slice(1)
                }(0, a.Gd)().addBreadcrumb(n, {
                    input: t.args,
                    level: t.level
                })
            }

            function tn(t) {
                var e = t.startTimestamp,
                    n = t.endTimestamp,
                    r = t.xhr.__sentry_xhr_v2__;
                if (e && n && r) {
                    var i = r.method,
                        o = r.url,
                        s = r.status_code,
                        c = r.body,
                        u = {
                            method: i,
                            url: o,
                            status_code: s
                        },
                        l = {
                            xhr: t.xhr,
                            input: c,
                            startTimestamp: e,
                            endTimestamp: n
                        };
                    (0, a.Gd)().addBreadcrumb({
                        category: "xhr",
                        data: u,
                        type: "http"
                    }, l)
                }
            }

            function en(t) {
                var e = t.startTimestamp,
                    n = t.endTimestamp;
                if (n && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                    if (t.error) {
                        var r = t.fetchData,
                            i = {
                                data: t.error,
                                input: t.args,
                                startTimestamp: e,
                                endTimestamp: n
                            };
                        (0, a.Gd)().addBreadcrumb({
                            category: "fetch",
                            data: r,
                            level: "error",
                            type: "http"
                        }, i)
                    } else {
                        var o = Ye(Ye({}, t.fetchData), {}, {
                                status_code: t.response && t.response.status
                            }),
                            s = {
                                input: t.args,
                                response: t.response,
                                startTimestamp: e,
                                endTimestamp: n
                            };
                        (0, a.Gd)().addBreadcrumb({
                            category: "fetch",
                            data: o,
                            type: "http"
                        }, s)
                    }
            }

            function nn(t) {
                var e = t.from,
                    n = t.to,
                    r = Ge(ze.location.href),
                    i = Ge(e),
                    o = Ge(n);
                i.path || (i = r), r.protocol === o.protocol && r.host === o.host && (n = o.relative), r.protocol === i.protocol && r.host === i.host && (e = i.relative), (0, a.Gd)().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: e,
                        to: n
                    }
                })
            }

            function rn(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function an(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? rn(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rn(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function on(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, _t.Z)(t);
                    if (e) {
                        var a = (0, _t.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, kt.Z)(this, n)
                }
            }
            Xe.__initStatic();
            var sn = function(t) {
                (0, wt.Z)(n, t);
                var e = on(n);

                function n(t) {
                    var r;
                    (0, s.Z)(this, n);
                    var a = ze.SENTRY_SDK_SOURCE || (0, Se.S)();
                    return t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: "".concat(a, ":@sentry/browser"),
                            version: y
                        }],
                        version: y
                    }, r = e.call(this, t), t.sendClientReports && ze.document && ze.document.addEventListener("visibilitychange", (function() {
                        "hidden" === ze.document.visibilityState && r._flushOutcomes()
                    })), r
                }
                return (0, c.Z)(n, [{
                    key: "eventFromException",
                    value: function(t, e) {
                        return function(t, e, n, r) {
                            var a = Ae(t, e, n && n.syntheticException || void 0, r);
                            return (0, b.EG)(a), a.level = "error", n && n.event_id && (a.event_id = n.event_id), (0, jt.WD)(a)
                        }(this._options.stackParser, t, e, this._options.attachStacktrace)
                    }
                }, {
                    key: "eventFromMessage",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return Ie(this._options.stackParser, t, e, n, this._options.attachStacktrace)
                    }
                }, {
                    key: "sendEvent",
                    value: function(t, e) {
                        var r = this.getIntegrationById(Ke);
                        r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(t), bt((0, _t.Z)(n.prototype), "sendEvent", this).call(this, t, e)
                    }
                }, {
                    key: "captureUserFeedback",
                    value: function(t) {
                        if (this._isEnabled()) {
                            var e = function(t, e) {
                                var n = e.metadata,
                                    r = e.tunnel,
                                    a = e.dsn,
                                    i = an(an({
                                        event_id: t.event_id,
                                        sent_at: (new Date).toISOString()
                                    }, n && n.sdk && {
                                        sdk: {
                                            name: n.sdk.name,
                                            version: n.sdk.version
                                        }
                                    }), !!r && !!a && {
                                        dsn: xt(a)
                                    }),
                                    o = function(t) {
                                        return [{
                                            type: "user_report"
                                        }, t]
                                    }(t);
                                return zt(i, [o])
                            }(t, {
                                metadata: this.getSdkMetadata(),
                                dsn: this.getDsn(),
                                tunnel: this.getOptions().tunnel
                            });
                            this._sendEnvelope(e)
                        }
                    }
                }, {
                    key: "_prepareEvent",
                    value: function(t, e, r) {
                        return t.platform = t.platform || "javascript", bt((0, _t.Z)(n.prototype), "_prepareEvent", this).call(this, t, e, r)
                    }
                }, {
                    key: "_flushOutcomes",
                    value: function() {
                        var t = this._clearOutcomes();
                        if (0 !== t.length && this._dsn) {
                            var e, n, r, a = (e = t, zt((n = this._options.tunnel && xt(this._dsn)) ? {
                                dsn: n
                            } : {}, [
                                [{
                                    type: "client_report"
                                }, {
                                    timestamp: r || (0, de.yW)(),
                                    discarded_events: e
                                }]
                            ]));
                            this._sendEnvelope(a)
                        }
                    }
                }]), n
            }(be);

            function cn(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var un = function() {
                function t(e) {
                    (0, s.Z)(this, t), this.name = t.id, this._options = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? cn(Object(n), !0).forEach((function(e) {
                                (0, o.Z)(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }({
                        onerror: !0,
                        onunhandledrejection: !0
                    }, e), this._installFunc = {
                        onerror: ln,
                        onunhandledrejection: dn
                    }
                }
                return (0, c.Z)(t, [{
                    key: "setupOnce",
                    value: function() {
                        Error.stackTraceLimit = 50;
                        var t = this._options;
                        for (var e in t) {
                            var n = this._installFunc[e];
                            n && t[e] && (e, n(), this._installFunc[e] = void 0)
                        }
                    }
                }], [{
                    key: "__initStatic",
                    value: function() {
                        this.id = "GlobalHandlers"
                    }
                }]), t
            }();

            function ln() {
                st("error", (function(t) {
                    var e = _(hn(), 3),
                        n = e[0],
                        r = e[1],
                        a = e[2];
                    if (n.getIntegration(un)) {
                        var i = t.msg,
                            o = t.url,
                            s = t.line,
                            c = t.column,
                            u = t.error;
                        if (!(Fe() || u && u.__sentry_own_request__)) {
                            var l = void 0 === u && (0, Y.HD)(i) ? function(t, e, n, r) {
                                var a = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
                                    i = (0, Y.VW)(t) ? t.message : t,
                                    o = "Error",
                                    s = i.match(a);
                                s && (o = s[1], i = s[2]);
                                return fn({
                                    exception: {
                                        values: [{
                                            type: o,
                                            value: i
                                        }]
                                    }
                                }, e, n, r)
                            }(i, o, s, c) : fn(Ae(r, u || i, void 0, a, !1), o, s, c);
                            l.level = "error", pn(n, u, l, "onerror")
                        }
                    }
                }))
            }

            function dn() {
                st("unhandledrejection", (function(t) {
                    var e = _(hn(), 3),
                        n = e[0],
                        r = e[1],
                        a = e[2];
                    if (n.getIntegration(un)) {
                        var i = t;
                        try {
                            "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
                        } catch (s) {}
                        if (Fe() || i && i.__sentry_own_request__) return !0;
                        var o = (0, Y.pt)(i) ? {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: ".concat(String(i))
                                }]
                            }
                        } : Ae(r, i, void 0, a, !0);
                        o.level = "error", pn(n, i, o, "onunhandledrejection")
                    }
                }))
            }

            function fn(t, e, n, r) {
                var a = t.exception = t.exception || {},
                    i = a.values = a.values || [],
                    o = i[0] = i[0] || {},
                    s = o.stacktrace = o.stacktrace || {},
                    c = s.frames = s.frames || [],
                    u = isNaN(parseInt(r, 10)) ? void 0 : r,
                    l = isNaN(parseInt(n, 10)) ? void 0 : n,
                    d = (0, Y.HD)(e) && e.length > 0 ? e : (0, He.l4)();
                return 0 === c.length && c.push({
                    colno: u,
                    filename: d,
                    function: "?",
                    in_app: !0,
                    lineno: l
                }), t
            }

            function pn(t, e, n, r) {
                (0, b.EG)(n, {
                    handled: !1,
                    type: r
                }), t.captureEvent(n, {
                    originalException: e
                })
            }

            function hn() {
                var t = (0, a.Gd)(),
                    e = t.getClient(),
                    n = e && e.getOptions() || {
                        stackParser: function() {
                            return []
                        },
                        attachStacktrace: !1
                    };
                return [t, n.stackParser, n.attachStacktrace]
            }

            function mn(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            un.__initStatic();
            var vn = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                yn = function() {
                    function t(e) {
                        (0, s.Z)(this, t), this.name = t.id, this._options = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? mn(Object(n), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mn(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({
                            XMLHttpRequest: !0,
                            eventTarget: !0,
                            requestAnimationFrame: !0,
                            setInterval: !0,
                            setTimeout: !0
                        }, e)
                    }
                    return (0, c.Z)(t, [{
                        key: "setupOnce",
                        value: function() {
                            this._options.setTimeout && (0, A.hl)(ze, "setTimeout", gn), this._options.setInterval && (0, A.hl)(ze, "setInterval", gn), this._options.requestAnimationFrame && (0, A.hl)(ze, "requestAnimationFrame", _n), this._options.XMLHttpRequest && "XMLHttpRequest" in ze && (0, A.hl)(XMLHttpRequest.prototype, "send", bn);
                            var t = this._options.eventTarget;
                            t && (Array.isArray(t) ? t : vn).forEach(wn)
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "TryCatch"
                        }
                    }]), t
                }();

            function gn(t) {
                return function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    var a = n[0];
                    return n[0] = Ue(a, {
                        mechanism: {
                            data: {
                                function: q(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, n)
                }
            }

            function _n(t) {
                return function(e) {
                    return t.apply(this, [Ue(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: q(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    })])
                }
            }

            function bn(t) {
                return function() {
                    var e = this,
                        n = ["onload", "onerror", "onprogress", "onreadystatechange"];
                    n.forEach((function(t) {
                        t in e && "function" === typeof e[t] && (0, A.hl)(e, t, (function(e) {
                            var n = {
                                    mechanism: {
                                        data: {
                                            function: t,
                                            handler: q(e)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                },
                                r = (0, A.HK)(e);
                            return r && (n.mechanism.data.handler = q(r)), Ue(e, n)
                        }))
                    }));
                    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                    return t.apply(this, a)
                }
            }

            function wn(t) {
                var e = ze,
                    n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, A.hl)(n, "addEventListener", (function(e) {
                    return function(n, r, a) {
                        try {
                            "function" === typeof r.handleEvent && (r.handleEvent = Ue(r.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: q(r),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (i) {}
                        return e.apply(this, [n, Ue(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: q(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), a])
                    }
                })), (0, A.hl)(n, "removeEventListener", (function(t) {
                    return function(e, n, r) {
                        var a = n;
                        try {
                            var i = a && a.__sentry_wrapped__;
                            i && t.call(this, e, i, r)
                        } catch (o) {}
                        return t.call(this, e, a, r)
                    }
                })))
            }

            function kn(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Sn(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? kn(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : kn(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function xn(t, e, n, a, i, o, s, c) {
                if (o.length >= n + 1) return o;
                var u = (0, r.Z)(o);
                if ((0, Y.V9)(a[i], Error)) {
                    On(s, c);
                    var l = t(e, a[i]),
                        d = u.length;
                    En(l, i, d, c), u = xn(t, e, n, a[i], i, [l].concat((0, r.Z)(u)), l, d)
                }
                return Array.isArray(a.errors) && a.errors.forEach((function(a, o) {
                    if ((0, Y.V9)(a, Error)) {
                        On(s, c);
                        var l = t(e, a),
                            d = u.length;
                        En(l, "errors[".concat(o, "]"), d, c), u = xn(t, e, n, a, i, [l].concat((0, r.Z)(u)), l, d)
                    }
                })), u
            }

            function On(t, e) {
                t.mechanism = t.mechanism || {
                    type: "generic",
                    handled: !0
                }, t.mechanism = Sn(Sn({}, t.mechanism), {}, {
                    is_exception_group: !0,
                    exception_id: e
                })
            }

            function En(t, e, n, r) {
                t.mechanism = t.mechanism || {
                    type: "generic",
                    handled: !0
                }, t.mechanism = Sn(Sn({}, t.mechanism), {}, {
                    type: "chained",
                    source: e,
                    exception_id: n,
                    parent_id: r
                })
            }

            function jn(t, e) {
                return t.map((function(t) {
                    return t.value && (t.value = (0, E.$G)(t.value, e)), t
                }))
            }
            yn.__initStatic();
            var Tn = "cause",
                Cn = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, s.Z)(this, t), this.name = t.id, this._key = e.key || Tn, this._limit = e.limit || 5
                    }
                    return (0, c.Z)(t, [{
                        key: "setupOnce",
                        value: function(e, n) {
                            e((function(e, r) {
                                var a = n(),
                                    i = a.getClient(),
                                    o = a.getIntegration(t);
                                if (!i || !o) return e;
                                var s = i.getOptions();
                                return function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250,
                                        r = arguments.length > 3 ? arguments[3] : void 0,
                                        a = arguments.length > 4 ? arguments[4] : void 0,
                                        i = arguments.length > 5 ? arguments[5] : void 0,
                                        o = arguments.length > 6 ? arguments[6] : void 0;
                                    if (i.exception && i.exception.values && o && (0, Y.V9)(o.originalException, Error)) {
                                        var s = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
                                        s && (i.exception.values = jn(xn(t, e, a, o.originalException, r, i.exception.values, s, 0), n))
                                    }
                                }(Ee, s.stackParser, s.maxValueLength, o._key, o._limit, e, r), e
                            }))
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "LinkedErrors"
                        }
                    }]), t
                }();

            function Rn(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function In(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Rn(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Rn(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            Cn.__initStatic();
            var An = function() {
                function t() {
                    (0, s.Z)(this, t), this.name = t.id
                }
                return (0, c.Z)(t, [{
                    key: "setupOnce",
                    value: function() {
                        (0, w.c)((function(e) {
                            if ((0, a.Gd)().getIntegration(t)) {
                                if (!ze.navigator && !ze.location && !ze.document) return e;
                                var n = e.request && e.request.url || ze.location && ze.location.href,
                                    r = (ze.document || {}).referrer,
                                    i = (ze.navigator || {}).userAgent,
                                    o = In(In(In({}, e.request && e.request.headers), r && {
                                        Referer: r
                                    }), i && {
                                        "User-Agent": i
                                    }),
                                    s = In(In(In({}, e.request), n && {
                                        url: n
                                    }), {}, {
                                        headers: o
                                    });
                                return In(In({}, e), {}, {
                                    request: s
                                })
                            }
                            return e
                        }))
                    }
                }], [{
                    key: "__initStatic",
                    value: function() {
                        this.id = "HttpContext"
                    }
                }]), t
            }();
            An.__initStatic();
            var Pn = function() {
                function t() {
                    (0, s.Z)(this, t), this.name = t.id
                }
                return (0, c.Z)(t, [{
                    key: "setupOnce",
                    value: function(e, n) {
                        var r = function(e) {
                            if (e.type) return e;
                            var r = n().getIntegration(t);
                            if (r) {
                                try {
                                    if (function(t, e) {
                                            if (!e) return !1;
                                            if (function(t, e) {
                                                    var n = t.message,
                                                        r = e.message;
                                                    if (!n && !r) return !1;
                                                    if (n && !r || !n && r) return !1;
                                                    if (n !== r) return !1;
                                                    if (!Mn(t, e)) return !1;
                                                    if (!Dn(t, e)) return !1;
                                                    return !0
                                                }(t, e)) return !0;
                                            if (function(t, e) {
                                                    var n = Nn(e),
                                                        r = Nn(t);
                                                    if (!n || !r) return !1;
                                                    if (n.type !== r.type || n.value !== r.value) return !1;
                                                    if (!Mn(t, e)) return !1;
                                                    if (!Dn(t, e)) return !1;
                                                    return !0
                                                }(t, e)) return !0;
                                            return !1
                                        }(e, r._previousEvent)) return null
                                } catch (a) {
                                    return r._previousEvent = e
                                }
                                return r._previousEvent = e
                            }
                            return e
                        };
                        r.id = this.name, e(r)
                    }
                }], [{
                    key: "__initStatic",
                    value: function() {
                        this.id = "Dedupe"
                    }
                }]), t
            }();

            function Dn(t, e) {
                var n = Ln(t),
                    r = Ln(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (n = n, (r = r).length !== n.length) return !1;
                for (var a = 0; a < r.length; a++) {
                    var i = r[a],
                        o = n[a];
                    if (i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i.function !== o.function) return !1
                }
                return !0
            }

            function Mn(t, e) {
                var n = t.fingerprint,
                    r = e.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                n = n, r = r;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (a) {
                    return !1
                }
            }

            function Nn(t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }

            function Ln(t) {
                var e = t.exception;
                if (e) try {
                    return e.values[0].stacktrace.frames
                } catch (n) {
                    return
                }
            }
            Pn.__initStatic();
            var zn = "?";

            function Zn(t, e, n, r) {
                var a = {
                    filename: t,
                    function: e,
                    in_app: !0
                };
                return void 0 !== n && (a.lineno = n), void 0 !== r && (a.colno = r), a
            }
            var Fn = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                Bn = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                Un = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                Hn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                qn = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                Wn = [
                    [30, function(t) {
                        var e = Fn.exec(t);
                        if (e) {
                            if (e[2] && 0 === e[2].indexOf("eval")) {
                                var n = Bn.exec(e[2]);
                                n && (e[2] = n[1], e[3] = n[2], e[4] = n[3])
                            }
                            var r = _(Vn(e[1] || zn, e[2]), 2),
                                a = r[0];
                            return Zn(r[1], a, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                        }
                    }],
                    [50, function(t) {
                        var e = Un.exec(t);
                        if (e) {
                            if (e[3] && e[3].indexOf(" > eval") > -1) {
                                var n = Hn.exec(e[3]);
                                n && (e[1] = e[1] || "eval", e[3] = n[1], e[4] = n[2], e[5] = "")
                            }
                            var r = e[3],
                                a = e[1] || zn,
                                i = _(Vn(a, r), 2);
                            return a = i[0], Zn(r = i[1], a, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                        }
                    }],
                    [40, function(t) {
                        var e = qn.exec(t);
                        return e ? Zn(e[2], e[1] || zn, +e[3], e[4] ? +e[4] : void 0) : void 0
                    }]
                ],
                Gn = F.apply(void 0, Wn),
                Vn = function(t, e) {
                    var n = -1 !== t.indexOf("safari-extension"),
                        r = -1 !== t.indexOf("safari-web-extension");
                    return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : zn, n ? "safari-extension:".concat(e) : "safari-web-extension:".concat(e)] : [t, e]
                };

            function Jn(t) {
                var e = [];

                function n(t) {
                    return e.splice(e.indexOf(t), 1)[0]
                }
                return {
                    $: e,
                    add: function(r) {
                        if (!(void 0 === t || e.length < t)) return (0, jt.$2)(new te("Not adding Promise because buffer limit was reached."));
                        var a = r();
                        return -1 === e.indexOf(a) && e.push(a), a.then((function() {
                            return n(a)
                        })).then(null, (function() {
                            return n(a).then(null, (function() {}))
                        })), a
                    },
                    drain: function(t) {
                        return new jt.cW((function(n, r) {
                            var a = e.length;
                            if (!a) return n(!0);
                            var i = setTimeout((function() {
                                t && t > 0 && n(!1)
                            }), t);
                            e.forEach((function(t) {
                                (0, jt.WD)(t).then((function() {
                                    --a || (clearTimeout(i), n(!0))
                                }), r)
                            }))
                        }))
                    }
                }
            }

            function Yn(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return $n(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $n(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function $n(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Kn(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Xn(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Kn(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Kn(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Qn(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                    n = parseInt("".concat(t), 10);
                if (!isNaN(n)) return 1e3 * n;
                var r = Date.parse("".concat(t));
                return isNaN(r) ? 6e4 : r - e
            }

            function tr(t, e) {
                return t[e] || t.all || 0
            }

            function er(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
                return tr(t, e) > n
            }

            function nr(t, e) {
                var n = e.statusCode,
                    r = e.headers,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                    i = Xn({}, t),
                    o = r && r["x-sentry-rate-limits"],
                    s = r && r["retry-after"];
                if (o) {
                    var c, u = Yn(o.trim().split(","));
                    try {
                        for (u.s(); !(c = u.n()).done;) {
                            var l = c.value,
                                d = l.split(":", 2),
                                f = _(d, 2),
                                p = f[0],
                                h = f[1],
                                m = parseInt(p, 10),
                                v = 1e3 * (isNaN(m) ? 60 : m);
                            if (h) {
                                var y, g = Yn(h.split(";"));
                                try {
                                    for (g.s(); !(y = g.n()).done;) {
                                        var b = y.value;
                                        i[b] = a + v
                                    }
                                } catch (w) {
                                    g.e(w)
                                } finally {
                                    g.f()
                                }
                            } else i.all = a + v
                        }
                    } catch (w) {
                        u.e(w)
                    } finally {
                        u.f()
                    }
                } else s ? i.all = a + Qn(s, a) : 429 === n && (i.all = a + 6e4);
                return i
            }

            function rr(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jn(t.bufferSize || 30),
                    r = {},
                    a = function(t) {
                        return n.drain(t)
                    };

                function i(a) {
                    var i = [];
                    if (Ft(a, (function(e, n) {
                            var a = Wt(n);
                            if (er(r, a)) {
                                var o = ar(e, n);
                                t.recordDroppedEvent("ratelimit_backoff", a, o)
                            } else i.push(e)
                        })), 0 === i.length) return (0, jt.WD)();
                    var o = zt(a[0], i),
                        s = function(e) {
                            Ft(o, (function(n, r) {
                                var a = ar(n, r);
                                t.recordDroppedEvent(e, Wt(r), a)
                            }))
                        };
                    return n.add((function() {
                        return e({
                            body: Ut(o, t.textEncoder)
                        }).then((function(t) {
                            return void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode), r = nr(r, t), t
                        }), (function(t) {
                            throw s("network_error"), t
                        }))
                    })).then((function(t) {
                        return t
                    }), (function(t) {
                        if (t instanceof te) return s("queue_overflow"), (0, jt.WD)();
                        throw t
                    }))
                }
                return i.__sentry__baseTransport__ = !0, {
                    send: i,
                    flush: a
                }
            }

            function ar(t, e) {
                if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
            }
            var ir = void 0;

            function or() {
                if (ir) return ir;
                if (J(ze.fetch)) return ir = ze.fetch.bind(ze);
                var t = ze.document,
                    e = ze.fetch;
                if (t && "function" === typeof t.createElement) try {
                    var n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n);
                    var r = n.contentWindow;
                    r && r.fetch && (e = r.fetch), t.head.removeChild(n)
                } catch (a) {}
                return ir = e.bind(ze)
            }

            function sr() {
                ir = void 0
            }

            function cr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ur(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? cr(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function lr(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : or(),
                    n = 0,
                    r = 0;

                function a(a) {
                    var i = a.body.length;
                    n += i, r++;
                    var o = ur({
                        body: a.body,
                        method: "POST",
                        referrerPolicy: "origin",
                        headers: t.headers,
                        keepalive: n <= 6e4 && r < 15
                    }, t.fetchOptions);
                    try {
                        return e(t.url, o).then((function(t) {
                            return n -= i, r--, {
                                statusCode: t.status,
                                headers: {
                                    "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                                    "retry-after": t.headers.get("Retry-After")
                                }
                            }
                        }))
                    } catch (s) {
                        return sr(), n -= i, r--, (0, jt.$2)(s)
                    }
                }
                return rr(t, a)
            }

            function dr(t) {
                return rr(t, (function(e) {
                    return new jt.cW((function(n, r) {
                        var a = new XMLHttpRequest;
                        for (var i in a.onerror = r, a.onreadystatechange = function() {
                                4 === a.readyState && n({
                                    statusCode: a.status,
                                    headers: {
                                        "x-sentry-rate-limits": a.getResponseHeader("X-Sentry-Rate-Limits"),
                                        "retry-after": a.getResponseHeader("Retry-After")
                                    }
                                })
                            }, a.open("POST", t.url), t.headers) Object.prototype.hasOwnProperty.call(t.headers, i) && a.setRequestHeader(i, t.headers[i]);
                        a.send(e.body)
                    }))
                }))
            }

            function fr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function pr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? fr(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var hr = [new C, new P, new yn, new Xe, new un, new Cn, new Pn, new An];

            function mr(t) {
                t.startSession({
                    ignoreDuration: !0
                }), t.captureSession()
            }

            function vr() {
                if ("undefined" !== typeof ze.document) {
                    var t = (0, a.Gd)();
                    t.captureSession && (mr(t), st("history", (function(t) {
                        var e = t.from,
                            n = t.to;
                        void 0 !== e && e !== n && mr((0, a.Gd)())
                    })))
                }
            }

            function yr(t) {
                t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                        name: "sentry.javascript.react",
                        packages: [{
                            name: "npm:@sentry/react",
                            version: y
                        }],
                        version: y
                    },
                    function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        void 0 === t.defaultIntegrations && (t.defaultIntegrations = hr), void 0 === t.release && ("string" === typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), ze.SENTRY_RELEASE && ze.SENTRY_RELEASE.id && (t.release = ze.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
                        var e = pr(pr({}, t), {}, {
                            stackParser: B(t.stackParser || Gn),
                            integrations: S(t),
                            transport: t.transport || (V() ? lr : dr)
                        });
                        O(sn, e), t.autoSessionTracking && vr()
                    }(t)
            }

            function gr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? gr(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var br = "baggage",
                wr = "sentry-",
                kr = /^sentry-/;

            function Sr(t) {
                if (t) return function(t) {
                    if (0 === Object.keys(t).length) return;
                    return Object.entries(t).reduce((function(t, e, n) {
                        var r = _(e, 2),
                            a = r[0],
                            i = r[1],
                            o = "".concat(encodeURIComponent(a), "=").concat(encodeURIComponent(i)),
                            s = 0 === n ? o : "".concat(t, ",").concat(o);
                        return s.length > 8192 ? t : s
                    }), "")
                }(Object.entries(t).reduce((function(t, e) {
                    var n = _(e, 2),
                        r = n[0],
                        a = n[1];
                    return a && (t["".concat(wr).concat(r)] = a), t
                }), {}))
            }

            function xr(t) {
                return t.split(",").map((function(t) {
                    return t.split("=").map((function(t) {
                        return decodeURIComponent(t.trim())
                    }))
                })).reduce((function(t, e) {
                    var n = _(e, 2),
                        r = n[0],
                        a = n[1];
                    return t[r] = a, t
                }), {})
            }
            var Or = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

            function Er(t, e) {
                var n = function(t) {
                        if (t) {
                            var e, n = t.match(Or);
                            if (n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
                                traceId: n[1],
                                parentSampled: e,
                                parentSpanId: n[2]
                            }
                        }
                    }(t),
                    r = function(t) {
                        if ((0, Y.HD)(t) || Array.isArray(t)) {
                            var e = {};
                            if (Array.isArray(t)) e = t.reduce((function(t, e) {
                                var n = xr(e);
                                return _r(_r({}, t), n)
                            }), {});
                            else {
                                if (!t) return;
                                e = xr(t)
                            }
                            var n = Object.entries(e).reduce((function(t, e) {
                                var n = _(e, 2),
                                    r = n[0],
                                    a = n[1];
                                return r.match(kr) && (t[r.slice(wr.length)] = a), t
                            }), {});
                            return Object.keys(n).length > 0 ? n : void 0
                        }
                    }(e),
                    a = n || {},
                    i = a.traceId,
                    o = a.parentSpanId,
                    s = a.parentSampled,
                    c = {
                        traceId: i || (0, b.DM)(),
                        spanId: (0, b.DM)().substring(16),
                        sampled: void 0 !== s && s
                    };
                return o && (c.parentSpanId = o), r && (c.dsc = r), {
                    traceparentData: n,
                    dynamicSamplingContext: r,
                    propagationContext: c
                }
            }

            function jr() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, b.DM)(),
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, b.DM)().substring(16),
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = "";
                return void 0 !== n && (r = n ? "-1" : "-0"), "".concat(t, "-").concat(e).concat(r)
            }

            function Tr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Cr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Tr(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var Rr = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                    (0, s.Z)(this, t), this._maxlen = e, this.spans = []
                }
                return (0, c.Z)(t, [{
                    key: "add",
                    value: function(t) {
                        this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
                    }
                }]), t
            }();

            function Ir(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ar(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ir(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ir(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Pr(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, _t.Z)(t);
                    if (e) {
                        var a = (0, _t.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, kt.Z)(this, n)
                }
            }
            var Dr = function(t) {
                (0, wt.Z)(n, t);
                var e = Pr(n);

                function n(t, r) {
                    var i;
                    (0, s.Z)(this, n), (i = e.call(this, t))._measurements = {}, i._contexts = {}, i._hub = r || (0, a.Gd)(), i._name = t.name || "", i.metadata = Ar(Ar({
                        source: "custom"
                    }, t.metadata), {}, {
                        spanMetadata: {}
                    }), i._trimEnd = t.trimEnd, i.transaction = (0, Jt.Z)(i);
                    var o = i.metadata.dynamicSamplingContext;
                    return o && (i._frozenDynamicSamplingContext = Ar({}, o)), i
                }
                return (0, c.Z)(n, [{
                    key: "name",
                    get: function() {
                        return this._name
                    },
                    set: function(t) {
                        this.setName(t)
                    }
                }, {
                    key: "setName",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "custom";
                        this._name = t, this.metadata.source = e
                    }
                }, {
                    key: "initSpanRecorder",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                        this.spanRecorder || (this.spanRecorder = new Rr(t)), this.spanRecorder.add(this)
                    }
                }, {
                    key: "setContext",
                    value: function(t, e) {
                        null === e ? delete this._contexts[t] : this._contexts[t] = e
                    }
                }, {
                    key: "setMeasurement",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                        this._measurements[t] = {
                            value: e,
                            unit: n
                        }
                    }
                }, {
                    key: "setMetadata",
                    value: function(t) {
                        this.metadata = Ar(Ar({}, this.metadata), t)
                    }
                }, {
                    key: "finish",
                    value: function(t) {
                        var e = this;
                        if (void 0 === this.endTimestamp) {
                            this.name || (this.name = "<unlabeled transaction>"), bt((0, _t.Z)(n.prototype), "finish", this).call(this, t);
                            var r = this._hub.getClient();
                            if (r && r.emit && r.emit("finishTransaction", this), !0 === this.sampled) {
                                var a = this.spanRecorder ? this.spanRecorder.spans.filter((function(t) {
                                    return t !== e && t.endTimestamp
                                })) : [];
                                this._trimEnd && a.length > 0 && (this.endTimestamp = a.reduce((function(t, e) {
                                    return t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t
                                })).endTimestamp);
                                var i = this.metadata,
                                    o = Ar({
                                        contexts: Ar(Ar({}, this._contexts), {}, {
                                            trace: this.getTraceContext()
                                        }),
                                        spans: a,
                                        start_timestamp: this.startTimestamp,
                                        tags: this.tags,
                                        timestamp: this.endTimestamp,
                                        transaction: this.name,
                                        type: "transaction",
                                        sdkProcessingMetadata: Ar(Ar({}, i), {}, {
                                            dynamicSamplingContext: this.getDynamicSamplingContext()
                                        })
                                    }, i.source && {
                                        transaction_info: {
                                            source: i.source
                                        }
                                    });
                                return Object.keys(this._measurements).length > 0 && (o.measurements = this._measurements), this._hub.captureEvent(o)
                            }
                            r && r.recordDroppedEvent("sample_rate", "transaction")
                        }
                    }
                }, {
                    key: "toContext",
                    value: function() {
                        var t = bt((0, _t.Z)(n.prototype), "toContext", this).call(this);
                        return (0, A.Jr)(Ar(Ar({}, t), {}, {
                            name: this.name,
                            trimEnd: this._trimEnd
                        }))
                    }
                }, {
                    key: "updateWithContext",
                    value: function(t) {
                        return bt((0, _t.Z)(n.prototype), "updateWithContext", this).call(this, t), this.name = t.name || "", this._trimEnd = t.trimEnd, this
                    }
                }, {
                    key: "getDynamicSamplingContext",
                    value: function() {
                        if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
                        var t = this._hub || (0, a.Gd)(),
                            e = t.getClient();
                        if (!e) return {};
                        var n = t.getScope(),
                            r = le(this.traceId, e, n),
                            i = this.metadata.sampleRate;
                        void 0 !== i && (r.sample_rate = "".concat(i));
                        var o = this.metadata.source;
                        return o && "url" !== o && (r.transaction = this.name), void 0 !== this.sampled && (r.sampled = String(this.sampled)), r
                    }
                }, {
                    key: "setHub",
                    value: function(t) {
                        this._hub = t
                    }
                }]), n
            }(function() {
                function t(e) {
                    if ((0, s.Z)(this, t), this.traceId = (0, b.DM)(), this.spanId = (0, b.DM)().substring(16), this.startTimestamp = (0, de.ph)(), this.tags = {}, this.data = {}, this.instrumenter = "sentry", !e) return this;
                    e.traceId && (this.traceId = e.traceId), e.spanId && (this.spanId = e.spanId), e.parentSpanId && (this.parentSpanId = e.parentSpanId), "sampled" in e && (this.sampled = e.sampled), e.op && (this.op = e.op), e.description && (this.description = e.description), e.data && (this.data = e.data), e.tags && (this.tags = e.tags), e.status && (this.status = e.status), e.startTimestamp && (this.startTimestamp = e.startTimestamp), e.endTimestamp && (this.endTimestamp = e.endTimestamp), e.instrumenter && (this.instrumenter = e.instrumenter)
                }
                return (0, c.Z)(t, [{
                    key: "startChild",
                    value: function(e) {
                        var n = new t(Cr(Cr({}, e), {}, {
                            parentSpanId: this.spanId,
                            sampled: this.sampled,
                            traceId: this.traceId
                        }));
                        return n.spanRecorder = this.spanRecorder, n.spanRecorder && n.spanRecorder.add(n), n.transaction = this.transaction, n
                    }
                }, {
                    key: "setTag",
                    value: function(t, e) {
                        return this.tags = Cr(Cr({}, this.tags), {}, (0, o.Z)({}, t, e)), this
                    }
                }, {
                    key: "setData",
                    value: function(t, e) {
                        return this.data = Cr(Cr({}, this.data), {}, (0, o.Z)({}, t, e)), this
                    }
                }, {
                    key: "setStatus",
                    value: function(t) {
                        return this.status = t, this
                    }
                }, {
                    key: "setHttpStatus",
                    value: function(t) {
                        this.setTag("http.status_code", String(t)), this.setData("http.response.status_code", t);
                        var e = function(t) {
                            if (t < 400 && t >= 100) return "ok";
                            if (t >= 400 && t < 500) switch (t) {
                                case 401:
                                    return "unauthenticated";
                                case 403:
                                    return "permission_denied";
                                case 404:
                                    return "not_found";
                                case 409:
                                    return "already_exists";
                                case 413:
                                    return "failed_precondition";
                                case 429:
                                    return "resource_exhausted";
                                default:
                                    return "invalid_argument"
                            }
                            if (t >= 500 && t < 600) switch (t) {
                                case 501:
                                    return "unimplemented";
                                case 503:
                                    return "unavailable";
                                case 504:
                                    return "deadline_exceeded";
                                default:
                                    return "internal_error"
                            }
                            return "unknown_error"
                        }(t);
                        return "unknown_error" !== e && this.setStatus(e), this
                    }
                }, {
                    key: "isSuccess",
                    value: function() {
                        return "ok" === this.status
                    }
                }, {
                    key: "finish",
                    value: function(t) {
                        this.endTimestamp = "number" === typeof t ? t : (0, de.ph)()
                    }
                }, {
                    key: "toTraceparent",
                    value: function() {
                        return jr(this.traceId, this.spanId, this.sampled)
                    }
                }, {
                    key: "toContext",
                    value: function() {
                        return (0, A.Jr)({
                            data: this.data,
                            description: this.description,
                            endTimestamp: this.endTimestamp,
                            op: this.op,
                            parentSpanId: this.parentSpanId,
                            sampled: this.sampled,
                            spanId: this.spanId,
                            startTimestamp: this.startTimestamp,
                            status: this.status,
                            tags: this.tags,
                            traceId: this.traceId
                        })
                    }
                }, {
                    key: "updateWithContext",
                    value: function(t) {
                        return this.data = t.data || {}, this.description = t.description, this.endTimestamp = t.endTimestamp, this.op = t.op, this.parentSpanId = t.parentSpanId, this.sampled = t.sampled, this.spanId = t.spanId || this.spanId, this.startTimestamp = t.startTimestamp || this.startTimestamp, this.status = t.status, this.tags = t.tags || {}, this.traceId = t.traceId || this.traceId, this
                    }
                }, {
                    key: "getTraceContext",
                    value: function() {
                        return (0, A.Jr)({
                            data: Object.keys(this.data).length > 0 ? this.data : void 0,
                            description: this.description,
                            op: this.op,
                            parent_span_id: this.parentSpanId,
                            span_id: this.spanId,
                            status: this.status,
                            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                            trace_id: this.traceId
                        })
                    }
                }, {
                    key: "toJSON",
                    value: function() {
                        return (0, A.Jr)({
                            data: Object.keys(this.data).length > 0 ? this.data : void 0,
                            description: this.description,
                            op: this.op,
                            parent_span_id: this.parentSpanId,
                            span_id: this.spanId,
                            start_timestamp: this.startTimestamp,
                            status: this.status,
                            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                            timestamp: this.endTimestamp,
                            trace_id: this.traceId
                        })
                    }
                }]), t
            }());

            function Mr(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return Nr(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Nr(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function Nr(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Lr(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, _t.Z)(t);
                    if (e) {
                        var a = (0, _t.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, kt.Z)(this, n)
                }
            }
            var zr = {
                    idleTimeout: 1e3,
                    finalTimeout: 3e4,
                    heartbeatInterval: 5e3
                },
                Zr = "finishReason",
                Fr = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"],
                Br = function(t) {
                    (0, wt.Z)(n, t);
                    var e = Lr(n);

                    function n(t, r, a, i) {
                        var o;
                        return (0, s.Z)(this, n), (o = e.call(this, i))._pushActivity = t, o._popActivity = r, o.transactionSpanId = a, o
                    }
                    return (0, c.Z)(n, [{
                        key: "add",
                        value: function(t) {
                            var e = this;
                            t.spanId !== this.transactionSpanId && (t.finish = function(n) {
                                t.endTimestamp = "number" === typeof n ? n : (0, de.ph)(), e._popActivity(t.spanId)
                            }, void 0 === t.endTimestamp && this._pushActivity(t.spanId)), bt((0, _t.Z)(n.prototype), "add", this).call(this, t)
                        }
                    }]), n
                }(Rr),
                Ur = function(t) {
                    (0, wt.Z)(n, t);
                    var e = Lr(n);

                    function n(t, r) {
                        var a, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zr.idleTimeout,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zr.finalTimeout,
                            c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zr.heartbeatInterval,
                            u = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        return (0, s.Z)(this, n), (a = e.call(this, t, r))._idleHub = r, a._idleTimeout = i, a._finalTimeout = o, a._heartbeatInterval = c, a._onScope = u, a.activities = {}, a._heartbeatCounter = 0, a._finished = !1, a._idleTimeoutCanceledPermanently = !1, a._beforeFinishCallbacks = [], a._finishReason = Fr[4], u && r.configureScope((function(t) {
                            return t.setSpan((0, Jt.Z)(a))
                        })), a._restartIdleTimeout(), setTimeout((function() {
                            a._finished || (a.setStatus("deadline_exceeded"), a._finishReason = Fr[3], a.finish())
                        }), a._finalTimeout), a
                    }
                    return (0, c.Z)(n, [{
                        key: "finish",
                        value: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, de.ph)();
                            if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setTag(Zr, this._finishReason), this.spanRecorder) {
                                var r, a = Mr(this._beforeFinishCallbacks);
                                try {
                                    for (a.s(); !(r = a.n()).done;) {
                                        var i = r.value;
                                        i(this, e)
                                    }
                                } catch (s) {
                                    a.e(s)
                                } finally {
                                    a.f()
                                }
                                this.spanRecorder.spans = this.spanRecorder.spans.filter((function(n) {
                                    if (n.spanId === t.spanId) return !0;
                                    n.endTimestamp || (n.endTimestamp = e, n.setStatus("cancelled"));
                                    var r = n.startTimestamp < e,
                                        a = (t._finalTimeout + t._idleTimeout) / 1e3,
                                        i = n.endTimestamp - t.startTimestamp < a;
                                    return r && i
                                }))
                            }
                            if (this._onScope) {
                                var o = this._idleHub.getScope();
                                o.getTransaction() === this && o.setSpan(void 0)
                            }
                            return bt((0, _t.Z)(n.prototype), "finish", this).call(this, e)
                        }
                    }, {
                        key: "registerBeforeFinishCallback",
                        value: function(t) {
                            this._beforeFinishCallbacks.push(t)
                        }
                    }, {
                        key: "initSpanRecorder",
                        value: function(t) {
                            var e = this;
                            if (!this.spanRecorder) {
                                this.spanRecorder = new Br((function(t) {
                                    e._finished || e._pushActivity(t)
                                }), (function(t) {
                                    e._finished || e._popActivity(t)
                                }), this.spanId, t), this._pingHeartbeat()
                            }
                            this.spanRecorder.add(this)
                        }
                    }, {
                        key: "cancelIdleTimeout",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    restartOnChildSpanChange: !0
                                },
                                n = e.restartOnChildSpanChange;
                            this._idleTimeoutCanceledPermanently = !1 === n, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = Fr[5], this.finish(t)))
                        }
                    }, {
                        key: "setFinishReason",
                        value: function(t) {
                            this._finishReason = t
                        }
                    }, {
                        key: "_restartIdleTimeout",
                        value: function(t) {
                            var e = this;
                            this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout((function() {
                                e._finished || 0 !== Object.keys(e.activities).length || (e._finishReason = Fr[1], e.finish(t))
                            }), this._idleTimeout)
                        }
                    }, {
                        key: "_pushActivity",
                        value: function(t) {
                            this.cancelIdleTimeout(void 0, {
                                restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
                            }), this.activities[t] = !0
                        }
                    }, {
                        key: "_popActivity",
                        value: function(t) {
                            if (this.activities[t] && delete this.activities[t], 0 === Object.keys(this.activities).length) {
                                var e = (0, de.ph)();
                                this._idleTimeoutCanceledPermanently ? (this._finishReason = Fr[5], this.finish(e)) : this._restartIdleTimeout(e + this._idleTimeout / 1e3)
                            }
                        }
                    }, {
                        key: "_beat",
                        value: function() {
                            if (!this._finished) {
                                var t = Object.keys(this.activities).join("");
                                t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? (this.setStatus("deadline_exceeded"), this._finishReason = Fr[0], this.finish()) : this._pingHeartbeat()
                            }
                        }
                    }, {
                        key: "_pingHeartbeat",
                        value: function() {
                            var t = this;
                            setTimeout((function() {
                                t._beat()
                            }), this._heartbeatInterval)
                        }
                    }]), n
                }(Dr);

            function Hr(t) {
                return (t || (0, a.Gd)()).getScope().getTransaction()
            }
            var qr = !1;

            function Wr() {
                var t = Hr();
                if (t) {
                    t.setStatus("internal_error")
                }
            }

            function Gr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Vr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Gr(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Jr() {
                var t = this.getScope().getSpan();
                return t ? {
                    "sentry-trace": t.toTraceparent()
                } : {}
            }

            function Yr(t, e, n) {
                return i(e) ? void 0 !== t.sampled ? (t.setMetadata({
                    sampleRate: Number(t.sampled)
                }), t) : ("function" === typeof e.tracesSampler ? (r = e.tracesSampler(n), t.setMetadata({
                    sampleRate: Number(r)
                })) : void 0 !== n.parentSampled ? r = n.parentSampled : "undefined" !== typeof e.tracesSampleRate ? (r = e.tracesSampleRate, t.setMetadata({
                    sampleRate: Number(r)
                })) : (r = 1, t.setMetadata({
                    sampleRate: r
                })), function(t) {
                    if ((0, Y.i2)(t) || "number" !== typeof t && "boolean" !== typeof t) return !1;
                    if (t < 0 || t > 1) return !1;
                    return !0
                }(r) && r ? (t.sampled = Math.random() < r, t.sampled, t) : (t.sampled = !1, t)) : (t.sampled = !1, t);
                var r
            }

            function $r(t, e) {
                var n = this.getClient(),
                    r = n && n.getOptions() || {};
                (r.instrumenter || "sentry") !== (t.instrumenter || "sentry") && (t.sampled = !1);
                var a = new Dr(t, this);
                return (a = Yr(a, r, Vr({
                    parentSampled: t.parentSampled,
                    transactionContext: t
                }, e))).sampled && a.initSpanRecorder(r._experiments && r._experiments.maxSpans), n && n.emit && n.emit("startTransaction", a), a
            }

            function Kr(t, e, n, r, a, i, o) {
                var s = t.getClient(),
                    c = s && s.getOptions() || {},
                    u = new Ur(e, t, n, r, o, a);
                return (u = Yr(u, c, Vr({
                    parentSampled: e.parentSampled,
                    transactionContext: e
                }, i))).sampled && u.initSpanRecorder(c._experiments && c._experiments.maxSpans), s && s.emit && s.emit("startTransaction", u), u
            }

            function Xr() {
                var t = (0, a.cu)();
                t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = $r), t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = Jr), qr || (qr = !0, st("error", Wr), st("unhandledrejection", Wr)))
            }
            Wr.tag = "sentry_tracingErrorCallback";
            var Qr = W.n2;
            var ta = function(t, e, n) {
                    var r, a;
                    return function(i) {
                        e.value >= 0 && (i || n) && ((a = e.value - (r || 0)) || void 0 === r) && (r = e.value, e.delta = a, t(e))
                    }
                },
                ea = function() {
                    return Qr.__WEB_VITALS_POLYFILL__ ? Qr.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || function() {
                        var t = Qr.performance.timing,
                            e = Qr.performance.navigation.type,
                            n = {
                                entryType: "navigation",
                                startTime: 0,
                                type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
                            };
                        for (var r in t) "navigationStart" !== r && "toJSON" !== r && (n[r] = Math.max(t[r] - t.navigationStart, 0));
                        return n
                    }()) : Qr.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                },
                na = function() {
                    var t = ea();
                    return t && t.activationStart || 0
                },
                ra = function(t, e) {
                    var n = ea(),
                        r = "navigate";
                    return n && (r = Qr.document.prerendering || na() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
                        name: t,
                        value: "undefined" === typeof e ? -1 : e,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                        navigationType: r
                    }
                },
                aa = function(t, e, n) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            var r = new PerformanceObserver((function(t) {
                                e(t.getEntries())
                            }));
                            return r.observe(Object.assign({
                                type: t,
                                buffered: !0
                            }, n || {})), r
                        }
                    } catch (a) {}
                },
                ia = function(t, e) {
                    var n = function n(r) {
                        "pagehide" !== r.type && "hidden" !== Qr.document.visibilityState || (t(r), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                    };
                    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
                },
                oa = -1,
                sa = function() {
                    return oa < 0 && (oa = "hidden" !== Qr.document.visibilityState || Qr.document.prerendering ? 1 / 0 : 0, ia((function(t) {
                        var e = t.timeStamp;
                        oa = e
                    }), !0)), {
                        get firstHiddenTime() {
                            return oa
                        }
                    }
                },
                ca = {};

            function ua(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var la = ["startTimestamp"];

            function da(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function fa(t) {
                return "number" === typeof t && isFinite(t)
            }

            function pa(t, e) {
                var n = e.startTimestamp,
                    r = ua(e, la);
                return n && t.startTimestamp > n && (t.startTimestamp = n), t.startChild(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? da(Object(n), !0).forEach((function(e) {
                            (0, o.Z)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : da(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({
                    startTimestamp: n
                }, r))
            }

            function ha(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return ma(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ma(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function ma(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function va(t) {
                return t / 1e3
            }

            function ya() {
                return Qr && Qr.addEventListener && Qr.performance
            }
            var ga, _a, ba = 0,
                wa = {};

            function ka() {
                var t = ya();
                if (t && de.Z1) {
                    t.mark && Qr.performance.mark("sentry-tracing-init"),
                        function(t) {
                            var e, n = sa(),
                                r = ra("FID"),
                                a = function(t) {
                                    t.startTime < n.firstHiddenTime && (r.value = t.processingStart - t.startTime, r.entries.push(t), e(!0))
                                },
                                i = function(t) {
                                    t.forEach(a)
                                },
                                o = aa("first-input", i);
                            e = ta(t, r), o && ia((function() {
                                i(o.takeRecords()), o.disconnect()
                            }), !0)
                        }((function(t) {
                            var e = t.entries.pop();
                            if (e) {
                                var n = va(de.Z1),
                                    r = va(e.startTime);
                                wa.fid = {
                                    value: t.value,
                                    unit: "millisecond"
                                }, wa["mark.fid"] = {
                                    value: n + r,
                                    unit: "second"
                                }
                            }
                        }));
                    var e = function(t) {
                            var e, n = ra("CLS", 0),
                                r = 0,
                                a = [],
                                i = function(t) {
                                    t.forEach((function(t) {
                                        if (!t.hadRecentInput) {
                                            var i = a[0],
                                                o = a[a.length - 1];
                                            r && 0 !== a.length && t.startTime - o.startTime < 1e3 && t.startTime - i.startTime < 5e3 ? (r += t.value, a.push(t)) : (r = t.value, a = [t]), r > n.value && (n.value = r, n.entries = a, e && e())
                                        }
                                    }))
                                },
                                o = aa("layout-shift", i);
                            if (o) {
                                e = ta(t, n);
                                var s = function() {
                                    i(o.takeRecords()), e(!0)
                                };
                                return ia(s), s
                            }
                        }((function(t) {
                            var e = t.entries.pop();
                            e && (wa.cls = {
                                value: t.value,
                                unit: ""
                            }, _a = e)
                        })),
                        n = function(t) {
                            var e, n = sa(),
                                r = ra("LCP"),
                                a = function(t) {
                                    var a = t[t.length - 1];
                                    if (a) {
                                        var i = Math.max(a.startTime - na(), 0);
                                        i < n.firstHiddenTime && (r.value = i, r.entries = [a], e())
                                    }
                                },
                                i = aa("largest-contentful-paint", a);
                            if (i) {
                                e = ta(t, r);
                                var o = function() {
                                    ca[r.id] || (a(i.takeRecords()), i.disconnect(), ca[r.id] = !0, e(!0))
                                };
                                return ["keydown", "click"].forEach((function(t) {
                                    addEventListener(t, o, {
                                        once: !0,
                                        capture: !0
                                    })
                                })), ia(o, !0), o
                            }
                        }((function(t) {
                            var e = t.entries.pop();
                            e && (wa.lcp = {
                                value: t.value,
                                unit: "millisecond"
                            }, ga = e)
                        }));
                    return function() {
                        e && e(), n && n()
                    }
                }
                return function() {}
            }

            function Sa(t) {
                var e = ya();
                if (e && Qr.performance.getEntries && de.Z1) {
                    var n, r, a = va(de.Z1),
                        i = e.getEntries();
                    if (i.slice(ba).forEach((function(e) {
                            var i = va(e.startTime),
                                o = va(e.duration);
                            if (!("navigation" === t.op && a + i < t.startTimestamp)) switch (e.entryType) {
                                case "navigation":
                                    ! function(t, e, n) {
                                        ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((function(r) {
                                                xa(t, e, r, n)
                                            })), xa(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), xa(t, e, "fetch", n, "cache", "domainLookupStart"), xa(t, e, "domainLookup", n, "DNS"),
                                            function(t, e, n) {
                                                pa(t, {
                                                    op: "browser",
                                                    description: "request",
                                                    startTimestamp: n + va(e.requestStart),
                                                    endTimestamp: n + va(e.responseEnd)
                                                }), pa(t, {
                                                    op: "browser",
                                                    description: "response",
                                                    startTimestamp: n + va(e.responseStart),
                                                    endTimestamp: n + va(e.responseEnd)
                                                })
                                            }(t, e, n)
                                    }(t, e, a), n = a + va(e.responseStart), r = a + va(e.requestStart);
                                    break;
                                case "mark":
                                case "paint":
                                case "measure":
                                    ! function(t, e, n, r, a) {
                                        var i = a + n,
                                            o = i + r;
                                        pa(t, {
                                            description: e.name,
                                            endTimestamp: o,
                                            op: e.entryType,
                                            startTimestamp: i
                                        })
                                    }(t, e, i, o, a);
                                    var s = sa(),
                                        c = e.startTime < s.firstHiddenTime;
                                    "first-paint" === e.name && c && (wa.fp = {
                                        value: e.startTime,
                                        unit: "millisecond"
                                    }), "first-contentful-paint" === e.name && c && (wa.fcp = {
                                        value: e.startTime,
                                        unit: "millisecond"
                                    });
                                    break;
                                case "resource":
                                    var u = e.name.replace(Qr.location.origin, "");
                                    ! function(t, e, n, r, a, i) {
                                        if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                                        var o = {};
                                        "transferSize" in e && (o["http.response_transfer_size"] = e.transferSize);
                                        "encodedBodySize" in e && (o["http.response_content_length"] = e.encodedBodySize);
                                        "decodedBodySize" in e && (o["http.decoded_response_content_length"] = e.decodedBodySize);
                                        "renderBlockingStatus" in e && (o["resource.render_blocking_status"] = e.renderBlockingStatus);
                                        var s = i + r;
                                        pa(t, {
                                            description: n,
                                            endTimestamp: s + a,
                                            op: e.initiatorType ? "resource.".concat(e.initiatorType) : "resource.other",
                                            startTimestamp: s,
                                            data: o
                                        })
                                    }(t, e, u, i, o, a)
                            }
                        })), ba = Math.max(i.length - 1, 0), function(t) {
                            var e = Qr.navigator;
                            if (!e) return;
                            var n = e.connection;
                            n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), fa(n.rtt) && (wa["connection.rtt"] = {
                                value: n.rtt,
                                unit: "millisecond"
                            }));
                            fa(e.deviceMemory) && t.setTag("deviceMemory", "".concat(e.deviceMemory, " GB"));
                            fa(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
                        }(t), "pageload" === t.op) {
                        "number" === typeof n && (wa.ttfb = {
                            value: 1e3 * (n - t.startTimestamp),
                            unit: "millisecond"
                        }, "number" === typeof r && r <= n && (wa["ttfb.requestTime"] = {
                            value: 1e3 * (n - r),
                            unit: "millisecond"
                        })), ["fcp", "fp", "lcp"].forEach((function(e) {
                            if (wa[e] && !(a >= t.startTimestamp)) {
                                var n = wa[e].value,
                                    r = a + va(n),
                                    i = Math.abs(1e3 * (r - t.startTimestamp));
                                wa[e].value = i
                            }
                        }));
                        var o = wa["mark.fid"];
                        o && wa.fid && (pa(t, {
                                description: "first input delay",
                                endTimestamp: o.value + va(wa.fid.value),
                                op: "ui.action",
                                startTimestamp: o.value
                            }), delete wa["mark.fid"]), "fcp" in wa || delete wa.cls, Object.keys(wa).forEach((function(e) {
                                t.setMeasurement(e, wa[e].value, wa[e].unit)
                            })),
                            function(t) {
                                ga && (ga.element && t.setTag("lcp.element", (0, He.Rt)(ga.element)), ga.id && t.setTag("lcp.id", ga.id), ga.url && t.setTag("lcp.url", ga.url.trim().slice(0, 200)), t.setTag("lcp.size", ga.size));
                                _a && _a.sources && _a.sources.forEach((function(e, n) {
                                    return t.setTag("cls.source.".concat(n + 1), (0, He.Rt)(e.node))
                                }))
                            }(t)
                    }
                    ga = void 0, _a = void 0, wa = {}
                }
            }

            function xa(t, e, n, r, a, i) {
                var o = i ? e[i] : e["".concat(n, "End")],
                    s = e["".concat(n, "Start")];
                s && o && pa(t, {
                    op: "browser",
                    description: a || n,
                    startTimestamp: r + va(s),
                    endTimestamp: r + va(o)
                })
            }

            function Oa(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return Ea(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ea(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function Ea(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function ja(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ta(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ja(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ja(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var Ca = ["localhost", /^\/(?!\/)/],
                Ra = {
                    traceFetch: !0,
                    traceXHR: !0,
                    enableHTTPTimings: !0,
                    tracingOrigins: Ca,
                    tracePropagationTargets: Ca
                };

            function Ia(t) {
                var e = Ta({
                        traceFetch: Ra.traceFetch,
                        traceXHR: Ra.traceXHR
                    }, t),
                    n = e.traceFetch,
                    o = e.traceXHR,
                    s = e.tracePropagationTargets,
                    c = e.tracingOrigins,
                    u = e.shouldCreateSpanForRequest,
                    l = e.enableHTTPTimings,
                    d = "function" === typeof u ? u : function(t) {
                        return !0
                    },
                    f = function(t) {
                        return function(t, e) {
                            return (0, E.U0)(t, e || Ca)
                        }(t, s || c)
                    },
                    p = {};
                n && st("fetch", (function(t) {
                    var e = function(t, e, n, o) {
                        if (!i() || !t.fetchData) return;
                        var s = e(t.fetchData.url);
                        if (t.endTimestamp && s) {
                            var c = t.fetchData.__span;
                            if (!c) return;
                            var u = o[c];
                            if (u) {
                                if (t.response) {
                                    u.setHttpStatus(t.response.status);
                                    var l = t.response && t.response.headers && t.response.headers.get("content-length"),
                                        d = parseInt(l);
                                    d > 0 && u.setData("http.response_content_length", d)
                                } else t.error && u.setStatus("internal_error");
                                u.finish(), delete o[c]
                            }
                            return
                        }
                        var f = (0, a.Gd)(),
                            p = f.getScope(),
                            h = f.getClient(),
                            m = p.getSpan(),
                            v = t.fetchData,
                            y = v.method,
                            g = v.url,
                            _ = s && m ? m.startChild({
                                data: {
                                    url: g,
                                    type: "fetch",
                                    "http.method": y
                                },
                                description: "".concat(y, " ").concat(g),
                                op: "http.client"
                            }) : void 0;
                        _ && (t.fetchData.__span = _.spanId, o[_.spanId] = _);
                        if (n(t.fetchData.url) && h) {
                            var b = t.args[0];
                            t.args[1] = t.args[1] || {};
                            var w = t.args[1];
                            w.headers = function(t, e, n, a, i) {
                                var o = i || n.getSpan(),
                                    s = o && o.transaction,
                                    c = n.getPropagationContext(),
                                    u = c.traceId,
                                    l = c.sampled,
                                    d = c.dsc,
                                    f = o ? o.toTraceparent() : jr(u, void 0, l),
                                    p = Sr(s ? s.getDynamicSamplingContext() : d || le(u, e, n)),
                                    h = "undefined" !== typeof Request && (0, Y.V9)(t, Request) ? t.headers : a.headers;
                                if (h) {
                                    if ("undefined" !== typeof Headers && (0, Y.V9)(h, Headers)) {
                                        var m = new Headers(h);
                                        return m.append("sentry-trace", f), p && m.append(br, p), m
                                    }
                                    if (Array.isArray(h)) {
                                        var v = [].concat((0, r.Z)(h), [
                                            ["sentry-trace", f]
                                        ]);
                                        return p && v.push([br, p]), v
                                    }
                                    var y = "baggage" in h ? h.baggage : void 0,
                                        g = [];
                                    return Array.isArray(y) ? g.push.apply(g, (0, r.Z)(y)) : y && g.push(y), p && g.push(p), Ta(Ta({}, h), {}, {
                                        "sentry-trace": f,
                                        baggage: g.length > 0 ? g.join(",") : void 0
                                    })
                                }
                                return {
                                    "sentry-trace": f,
                                    baggage: p
                                }
                            }(b, h, p, w, _)
                        }
                        return _
                    }(t, d, f, p);
                    l && e && Aa(e)
                })), o && st("xhr", (function(t) {
                    var e = function(t, e, n, r) {
                        var o = t.xhr,
                            s = o && o.__sentry_xhr_v2__;
                        if (!i() || o && o.__sentry_own_request__ || !o || !s) return;
                        var c = e(s.url);
                        if (t.endTimestamp && c) {
                            var u = o.__sentry_xhr_span_id__;
                            if (!u) return;
                            var l = r[u];
                            return void(l && (l.setHttpStatus(s.status_code), l.finish(), delete r[u]))
                        }
                        var d = (0, a.Gd)(),
                            f = d.getScope(),
                            p = f.getSpan(),
                            h = c && p ? p.startChild({
                                data: Ta(Ta({}, s.data), {}, {
                                    type: "xhr",
                                    "http.method": s.method,
                                    url: s.url
                                }),
                                description: "".concat(s.method, " ").concat(s.url),
                                op: "http.client"
                            }) : void 0;
                        h && (o.__sentry_xhr_span_id__ = h.spanId, r[o.__sentry_xhr_span_id__] = h);
                        if (o.setRequestHeader && n(s.url))
                            if (h) {
                                var m = h && h.transaction,
                                    v = Sr(m && m.getDynamicSamplingContext());
                                Da(o, h.toTraceparent(), v)
                            } else {
                                var y = d.getClient(),
                                    g = f.getPropagationContext(),
                                    _ = g.traceId,
                                    b = g.sampled,
                                    w = g.dsc;
                                Da(o, jr(_, void 0, b), Sr(w || (y ? le(_, y, f) : void 0)))
                            }
                        return h
                    }(t, d, f, p);
                    l && e && Aa(e)
                }))
            }

            function Aa(t) {
                var e = t.data.url,
                    n = new PerformanceObserver((function(a) {
                        a.getEntries().forEach((function(a) {
                            "fetch" !== a.initiatorType && "xmlhttprequest" !== a.initiatorType || !a.name.endsWith(e) || (function(t) {
                                var e = function(t) {
                                        var e, n = "unknown",
                                            r = "unknown",
                                            a = "",
                                            i = Oa(t);
                                        try {
                                            for (i.s(); !(e = i.n()).done;) {
                                                var o = e.value;
                                                if ("/" === o) {
                                                    var s = _(t.split("/"), 2);
                                                    n = s[0], r = s[1];
                                                    break
                                                }
                                                if (!isNaN(Number(o))) {
                                                    n = "h" === a ? "http" : a, r = t.split(a)[1];
                                                    break
                                                }
                                                a += o
                                            }
                                        } catch (c) {
                                            i.e(c)
                                        } finally {
                                            i.f()
                                        }
                                        a === t && (n = a);
                                        return {
                                            name: n,
                                            version: r
                                        }
                                    }(t.nextHopProtocol),
                                    n = e.name,
                                    r = e.version,
                                    a = [];
                                if (a.push(["network.protocol.version", r], ["network.protocol.name", n]), !de.Z1) return a;
                                return [].concat(a, [
                                    ["http.request.redirect_start", Pa(t.redirectStart)],
                                    ["http.request.fetch_start", Pa(t.fetchStart)],
                                    ["http.request.domain_lookup_start", Pa(t.domainLookupStart)],
                                    ["http.request.domain_lookup_end", Pa(t.domainLookupEnd)],
                                    ["http.request.connect_start", Pa(t.connectStart)],
                                    ["http.request.secure_connection_start", Pa(t.secureConnectionStart)],
                                    ["http.request.connection_end", Pa(t.connectEnd)],
                                    ["http.request.request_start", Pa(t.requestStart)],
                                    ["http.request.response_start", Pa(t.responseStart)],
                                    ["http.request.response_end", Pa(t.responseEnd)]
                                ])
                            }(a).forEach((function(e) {
                                return t.setData.apply(t, (0, r.Z)(e))
                            })), n.disconnect())
                        }))
                    }));
                n.observe({
                    entryTypes: ["resource"]
                })
            }

            function Pa(t) {
                return ((de.Z1 || performance.timeOrigin) + t) / 1e3
            }

            function Da(t, e, n) {
                try {
                    t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(br, n)
                } catch (r) {}
            }

            function Ma(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Na(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ma(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ma(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var La = Na(Na({}, zr), {}, {
                    markBackgroundTransactions: !0,
                    routingInstrumentation: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        if (Qr && Qr.location) {
                            var r, a = Qr.location.href;
                            e && (r = t({
                                name: Qr.location.pathname,
                                startTimestamp: de.Z1 ? de.Z1 / 1e3 : void 0,
                                op: "pageload",
                                metadata: {
                                    source: "url"
                                }
                            })), n && st("history", (function(e) {
                                var n = e.to,
                                    i = e.from;
                                void 0 === i && a && -1 !== a.indexOf(n) ? a = void 0 : i !== n && (a = void 0, r && r.finish(), r = t({
                                    name: Qr.location.pathname,
                                    op: "navigation",
                                    metadata: {
                                        source: "url"
                                    }
                                }))
                            }))
                        }
                    },
                    startTransactionOnLocationChange: !0,
                    startTransactionOnPageLoad: !0,
                    enableLongTask: !0,
                    _experiments: {}
                }, Ra),
                za = function() {
                    function t(e) {
                        (0, s.Z)(this, t), this.name = "BrowserTracing", this._hasSetTracePropagationTargets = !1, Xr(), this.options = Na(Na({}, La), e), void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins), this._collectWebVitals = ka(), this.options.enableLongTask && aa("longtask", (function(t) {
                            var e, n = ha(t);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var r = e.value,
                                        a = Hr();
                                    if (!a) return;
                                    var i = va(de.Z1 + r.startTime),
                                        o = va(r.duration);
                                    a.startChild({
                                        description: "Main UI thread blocked",
                                        op: "ui.long-task",
                                        startTimestamp: i,
                                        endTimestamp: i + o
                                    })
                                }
                            } catch (s) {
                                n.e(s)
                            } finally {
                                n.f()
                            }
                        })), this.options._experiments.enableInteractions && aa("event", (function(t) {
                            var e, n = ha(t);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var r = e.value,
                                        a = Hr();
                                    if (!a) return;
                                    if ("click" === r.name) {
                                        var i = va(de.Z1 + r.startTime),
                                            o = va(r.duration);
                                        a.startChild({
                                            description: (0, He.Rt)(r.target),
                                            op: "ui.interaction.".concat(r.name),
                                            startTimestamp: i,
                                            endTimestamp: i + o
                                        })
                                    }
                                }
                            } catch (s) {
                                n.e(s)
                            } finally {
                                n.f()
                            }
                        }), {
                            durationThreshold: 0
                        })
                    }
                    return (0, c.Z)(t, [{
                        key: "setupOnce",
                        value: function(t, e) {
                            var n = this;
                            this._getCurrentHub = e;
                            var r = e().getClient(),
                                a = r && r.getOptions(),
                                i = this.options,
                                o = i.routingInstrumentation,
                                s = i.startTransactionOnLocationChange,
                                c = i.startTransactionOnPageLoad,
                                u = i.markBackgroundTransactions,
                                l = i.traceFetch,
                                d = i.traceXHR,
                                f = i.shouldCreateSpanForRequest,
                                p = i.enableHTTPTimings,
                                h = i._experiments,
                                m = a && a.tracePropagationTargets || this.options.tracePropagationTargets;
                            o((function(t) {
                                var r = n._createRouteTransaction(t);
                                return n.options._experiments.onStartRouteTransaction && n.options._experiments.onStartRouteTransaction(r, t, e), r
                            }), c, s), u && Qr && Qr.document && Qr.document.addEventListener("visibilitychange", (function() {
                                var t = Hr();
                                Qr.document.hidden && t && (t.status || t.setStatus("cancelled"), t.setTag("visibilitychange", "document.hidden"), t.finish())
                            })), h.enableInteractions && this._registerInteractionListener(), Ia({
                                traceFetch: l,
                                traceXHR: d,
                                tracePropagationTargets: m,
                                shouldCreateSpanForRequest: f,
                                enableHTTPTimings: p
                            })
                        }
                    }, {
                        key: "_createRouteTransaction",
                        value: function(t) {
                            var e = this;
                            if (this._getCurrentHub) {
                                var n = this._getCurrentHub(),
                                    r = this.options,
                                    a = r.beforeNavigate,
                                    i = r.idleTimeout,
                                    o = r.finalTimeout,
                                    s = r.heartbeatInterval,
                                    c = "pageload" === t.op,
                                    u = Er(c ? Za("sentry-trace") : "", c ? Za("baggage") : ""),
                                    l = u.traceparentData,
                                    d = u.dynamicSamplingContext,
                                    f = u.propagationContext,
                                    p = Na(Na(Na({}, t), l), {}, {
                                        metadata: Na(Na({}, t.metadata), {}, {
                                            dynamicSamplingContext: l && !d ? {} : d
                                        }),
                                        trimEnd: !0
                                    }),
                                    h = "function" === typeof a ? a(p) : p,
                                    m = void 0 === h ? Na(Na({}, p), {}, {
                                        sampled: !1
                                    }) : h;
                                m.metadata = m.name !== p.name ? Na(Na({}, m.metadata), {}, {
                                    source: "custom"
                                }) : m.metadata, this._latestRouteName = m.name, this._latestRouteSource = m.metadata && m.metadata.source, m.sampled;
                                var v = Kr(n, m, i, o, !0, {
                                        location: Qr.location
                                    }, s),
                                    y = n.getScope();
                                return c && l ? y.setPropagationContext(f) : y.setPropagationContext({
                                    traceId: v.traceId,
                                    spanId: v.spanId,
                                    parentSpanId: v.parentSpanId,
                                    sampled: !!v.sampled
                                }), v.registerBeforeFinishCallback((function(t) {
                                    e._collectWebVitals(), Sa(t)
                                })), v
                            }
                        }
                    }, {
                        key: "_registerInteractionListener",
                        value: function() {
                            var t, e = this,
                                n = function() {
                                    var n = e.options,
                                        r = n.idleTimeout,
                                        a = n.finalTimeout,
                                        i = n.heartbeatInterval,
                                        o = Hr();
                                    if (!(o && o.op && ["navigation", "pageload"].includes(o.op)) && (t && (t.setFinishReason("interactionInterrupted"), t.finish(), t = void 0), e._getCurrentHub && e._latestRouteName)) {
                                        var s = e._getCurrentHub(),
                                            c = Qr.location,
                                            u = {
                                                name: e._latestRouteName,
                                                op: "ui.action.click",
                                                trimEnd: !0,
                                                metadata: {
                                                    source: e._latestRouteSource || "url"
                                                }
                                            };
                                        t = Kr(s, u, r, a, !0, {
                                            location: c
                                        }, i)
                                    }
                                };
                            ["click"].forEach((function(t) {
                                addEventListener(t, n, {
                                    once: !1,
                                    capture: !0
                                })
                            }))
                        }
                    }]), t
                }();

            function Za(t) {
                var e = (0, He.qT)("meta[name=".concat(t, "]"));
                return e ? e.getAttribute("content") : void 0
            }

            function Fa(t, e, n) {
                var r = e.match(/([a-z_]+)\.(.*)/i);
                null === r ? t[e] = n : Fa(t[r[1]], r[2], n)
            }

            function Ba(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return Array.isArray(e) ? Ua(t, e, n) : Ha(t, e, n)
            }

            function Ua(t, e, n) {
                var a = e.find((function(e) {
                    return e.name === t.name
                }));
                if (a) {
                    for (var i = 0, o = Object.entries(n); i < o.length; i++) {
                        var s = _(o[i], 2);
                        Fa(a, s[0], s[1])
                    }
                    return e
                }
                return [].concat((0, r.Z)(e), [t])
            }

            function Ha(t, e, n) {
                return function(r) {
                    var a = e(r);
                    if (t.allowExclusionByUser && !a.find((function(e) {
                            return e.name === t.name
                        }))) return a;
                    return Ua(t, a, n)
                }
            }
            var qa = n(3454);
            var Wa = n(1163),
                Ga = n.n(Wa);

            function Va(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ja(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Va(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Va(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var Ya = ze;

            function $a() {
                var t, e = Ya.document.getElementById("__NEXT_DATA__");
                if (e && e.innerHTML) try {
                    t = JSON.parse(e.innerHTML)
                } catch (s) {}
                if (!t) return {};
                var n = {},
                    r = t,
                    a = r.page,
                    i = r.query,
                    o = r.props;
                return n.route = a, n.params = i, o && o.pageProps && (n.sentryTrace = o.pageProps._sentryTraceData, n.baggage = o.pageProps._sentryBaggage), n
            }
            var Ka = {
                    "routing.instrumentation": "next-router"
                },
                Xa = void 0,
                Qa = void 0,
                ti = (0, a.Gd)().getClient();

            function ei(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = $a(),
                    i = r.route,
                    o = r.params,
                    s = r.sentryTrace,
                    c = r.baggage,
                    u = Er(s, c),
                    l = u.traceparentData,
                    d = u.dynamicSamplingContext,
                    f = u.propagationContext;
                if ((0, a.Gd)().getScope().setPropagationContext(f), Qa = i || Ya.location.pathname, e) {
                    var p = i ? "route" : "url";
                    Xa = t(Ja(Ja(Ja({
                        name: Qa,
                        op: "pageload",
                        tags: Ka
                    }, o && ti && ti.getOptions().sendDefaultPii && {
                        data: o
                    }), l), {}, {
                        metadata: {
                            source: p,
                            dynamicSamplingContext: l && !d ? {} : d
                        }
                    }))
                }
                n && Ga().events.on("routeChangeStart", (function(e) {
                    var n, r, a = Ve(e),
                        i = ni(a);
                    i ? (n = i, r = "route") : (n = a, r = "url");
                    var o = Ja(Ja({}, Ka), {}, {
                        from: Qa
                    });
                    Qa = n, Xa && Xa.finish();
                    var s = t({
                        name: n,
                        op: "navigation",
                        tags: o,
                        metadata: {
                            source: r
                        }
                    });
                    if (s) {
                        var c = s.startChild({
                            op: "ui.nextjs.route-change",
                            description: "Next.js Route Change"
                        });
                        Ga().events.on("routeChangeComplete", (function t() {
                            c.finish(), Ga().events.off("routeChangeComplete", t)
                        }))
                    }
                }))
            }

            function ni(t) {
                var e = (Ya.__BUILD_MANIFEST || {}).sortedPages;
                if (e) return e.find((function(e) {
                    var n = function(t) {
                        var e = t.split("/"),
                            n = "";
                        e[e.length - 1].match(/^\[\[\.\.\..+\]\]$/) && (e.pop(), n = "(?:/(.+?))?");
                        var r = e.map((function(t) {
                            return t.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)")
                        })).join("/");
                        return new RegExp("^".concat(r).concat(n, "(?:/)?$"))
                    }(e);
                    return t.match(n)
                }))
            }
            var ri = n.g;
            var ai = n.g;
            var ii = n(29),
                oi = n(7794),
                si = n.n(oi),
                ci = n(4676),
                ui = n(3454);

            function li(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, _t.Z)(t);
                    if (e) {
                        var a = (0, _t.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, kt.Z)(this, n)
                }
            }

            function di(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function fi(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? di(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : di(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function pi(t, e) {
                var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return hi(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hi(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function hi(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var mi, vi = W.n2,
                yi = "sentryReplaySession",
                gi = "replay_event",
                _i = "Unable to send Replay",
                bi = 5e3,
                wi = 15e4,
                ki = 5e3,
                Si = 2e7;

            function xi(t) {
                var e = null === t || void 0 === t ? void 0 : t.host;
                return Boolean(e && e.shadowRoot && e.shadowRoot === t)
            }

            function Oi(t) {
                var e = t.maskInputOptions,
                    n = t.tagName,
                    r = t.type;
                "option" === n.toLowerCase() && (n = "select");
                var a = "string" === typeof r ? r.toLowerCase() : void 0;
                return e[n.toLowerCase()] || a && e[a] || "password" === a || "input" === n && !r && e.text
            }

            function Ei(t) {
                var e = t.input,
                    n = t.maskInputSelector,
                    r = t.unmaskInputSelector,
                    a = t.maskInputOptions,
                    i = t.tagName,
                    o = t.type,
                    s = t.value,
                    c = t.maskInputFn,
                    u = s || "";
                return r && e.matches(r) || (e.hasAttribute("data-rr-is-password") && (o = "password"), (Oi({
                    maskInputOptions: a,
                    tagName: i,
                    type: o
                }) || n && e.matches(n)) && (u = c ? c(u) : "*".repeat(u.length))), u
            }! function(t) {
                t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment"
            }(mi || (mi = {}));
            var ji = "__rrweb_original__";

            function Ti(t) {
                var e = t.type;
                return t.hasAttribute("data-rr-is-password") ? "password" : e ? e.toLowerCase() : null
            }

            function Ci(t, e, n) {
                return "string" === typeof n && n.toLowerCase(), "INPUT" !== e || "radio" !== n && "checkbox" !== n ? t.value : t.getAttribute("value") || ""
            }
            var Ri, Ii, Ai = 1,
                Pi = new RegExp("[^a-z0-9-_:]");

            function Di(t) {
                return t ? t.replace(/[\S]/g, "*") : ""
            }

            function Mi(t) {
                try {
                    var e = t.rules || t.cssRules;
                    return e ? Array.from(e).map(Ni).join("") : null
                } catch (n) {
                    return null
                }
            }

            function Ni(t) {
                var e = t.cssText;
                if (function(t) {
                        return "styleSheet" in t
                    }(t)) try {
                    e = Mi(t.styleSheet) || e
                } catch (n) {}
                return Li(e)
            }

            function Li(t) {
                if (t.indexOf(":") > -1) {
                    return t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
                }
                return t
            }
            var zi = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                Zi = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
                Fi = /^(data:)([^,]*),(.*)/i;

            function Bi(t, e) {
                return (t || "").replace(zi, (function(t, n, r, a, i, o) {
                    var s, c = r || i || o,
                        u = n || a || "";
                    if (!c) return t;
                    if (!Zi.test(c)) return "url(".concat(u).concat(c).concat(u, ")");
                    if (Fi.test(c)) return "url(".concat(u).concat(c).concat(u, ")");
                    if ("/" === c[0]) return "url(".concat(u).concat((s = e, (s.indexOf("//") > -1 ? s.split("/").slice(0, 3).join("/") : s.split("/")[0]).split("?")[0] + c)).concat(u, ")");
                    var l = e.split("/"),
                        d = c.split("/");
                    l.pop();
                    var f, p = pi(d);
                    try {
                        for (p.s(); !(f = p.n()).done;) {
                            var h = f.value;
                            "." !== h && (".." === h ? l.pop() : l.push(h))
                        }
                    } catch (m) {
                        p.e(m)
                    } finally {
                        p.f()
                    }
                    return "url(".concat(u).concat(l.join("/")).concat(u, ")")
                }))
            }
            var Ui, Hi, qi, Wi, Gi, Vi, Ji = /^[^ \t\n\r\u000c]+/,
                Yi = /^[, \t\n\r\u000c]+/;

            function $i(t, e) {
                if (!e || "" === e.trim()) return e;
                var n = t.createElement("a");
                return n.href = e, n.href
            }

            function Ki(t) {
                return Boolean("svg" === t.tagName || t.ownerSVGElement)
            }

            function Xi() {
                var t = document.createElement("a");
                return t.href = "", t.href
            }

            function Qi(t, e, n, r, a, i, o, s) {
                if (!a) return a;
                var c = r.toLowerCase(),
                    u = n.toLowerCase();
                return "src" === c || "href" === c || "xlink:href" === c && "#" !== a[0] ? $i(t, a) : "background" !== c || "table" !== u && "td" !== u && "th" !== u ? "srcset" === c ? function(t, e) {
                    if ("" === e.trim()) return e;
                    var n = 0;

                    function r(t) {
                        var r, a = t.exec(e.substring(n));
                        return a ? (r = a[0], n += r.length, r) : ""
                    }
                    for (var a = []; r(Yi), !(n >= e.length);) {
                        var i = r(Ji);
                        if ("," === i.slice(-1)) i = $i(t, i.substring(0, i.length - 1)), a.push(i);
                        else {
                            var o = "";
                            i = $i(t, i);
                            for (var s = !1;;) {
                                var c = e.charAt(n);
                                if ("" === c) {
                                    a.push((i + o).trim());
                                    break
                                }
                                if (s) ")" === c && (s = !1);
                                else {
                                    if ("," === c) {
                                        n += 1, a.push((i + o).trim());
                                        break
                                    }
                                    "(" === c && (s = !0)
                                }
                                o += c, n += 1
                            }
                        }
                    }
                    return a.join(", ")
                }(t, a) : "style" === c ? Bi(a, Xi()) : "object" === u && "data" === c ? $i(t, a) : i && function(t, e, n, r) {
                    if (r && t.matches(r)) return !1;
                    return ["placeholder", "title", "aria-label"].indexOf(e) > -1 || "input" === n && "value" === e && t.hasAttribute("type") && ["submit", "button"].indexOf(t.getAttribute("type").toLowerCase()) > -1
                }(e, c, u, o) ? s ? s(a) : Di(a) : a : $i(t, a)
            }

            function to(t, e, n, r, a) {
                if (!t) return !1;
                if (t.nodeType !== t.ELEMENT_NODE) return to(t.parentNode, e, n, r, a);
                if (r && (t.matches(r) || t.closest(r))) return !1;
                if (a) return !0;
                if ("string" === typeof e) {
                    if (t.classList.contains(e)) return !0
                } else
                    for (var i = 0; i < t.classList.length; i++) {
                        var o = t.classList[i];
                        if (e.test(o)) return !0
                    }
                return !(!n || !t.matches(n)) || to(t.parentNode, e, n, r, a)
            }

            function eo(t, e) {
                var n, r, a, i = e.doc,
                    o = e.blockClass,
                    s = e.blockSelector,
                    c = e.unblockSelector,
                    u = e.maskTextClass,
                    l = e.maskTextSelector,
                    d = e.unmaskTextSelector,
                    f = e.inlineStylesheet,
                    p = e.maskInputSelector,
                    h = e.unmaskInputSelector,
                    m = e.maskAllText,
                    v = e.maskInputOptions,
                    y = void 0 === v ? {} : v,
                    g = e.maskTextFn,
                    _ = e.maskInputFn,
                    b = e.dataURLOptions,
                    w = void 0 === b ? {} : b,
                    k = e.inlineImages,
                    S = e.recordCanvas,
                    x = e.keepIframeSrcFn;
                if (i.__sn) {
                    var O = i.__sn.id;
                    r = 1 === O ? void 0 : O
                }
                switch (t.nodeType) {
                    case t.DOCUMENT_NODE:
                        return "CSS1Compat" !== t.compatMode ? {
                            type: mi.Document,
                            childNodes: [],
                            compatMode: t.compatMode,
                            rootId: r
                        } : {
                            type: mi.Document,
                            childNodes: [],
                            rootId: r
                        };
                    case t.DOCUMENT_TYPE_NODE:
                        return {
                            type: mi.DocumentType,
                            name: t.name,
                            publicId: t.publicId,
                            systemId: t.systemId,
                            rootId: r
                        };
                    case t.ELEMENT_NODE:
                        for (var E = function(t, e, n, r) {
                                if (r && t.matches(r)) return !1;
                                if ("string" === typeof e) {
                                    if (t.classList.contains(e)) return !0
                                } else
                                    for (var a = 0; a < t.classList.length; a++) {
                                        var i = t.classList[a];
                                        if (e.test(i)) return !0
                                    }
                                return !!n && t.matches(n)
                            }(t, o, s, c), j = function(t) {
                                if (t instanceof HTMLFormElement) return "form";
                                var e = t.tagName.toLowerCase().trim();
                                return Pi.test(e) ? "div" : e
                            }(t), T = {}, C = 0, R = Array.from(t.attributes); C < R.length; C++) {
                            var I = R[C],
                                A = I.name,
                                P = I.value;
                            io(j, A) || (T[A] = Qi(i, t, j, A, P, m, d, g))
                        }
                        if ("link" === j && f) {
                            var D = Array.from(i.styleSheets).find((function(e) {
                                    return e.href === t.href
                                })),
                                M = null;
                            D && (M = Mi(D)), M && (delete T.rel, delete T.href, T._cssText = Bi(M, D.href))
                        }
                        if ("style" === j && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                            var N = Mi(t.sheet);
                            N && (T._cssText = Bi(N, Xi()))
                        }
                        if ("input" === j || "textarea" === j || "select" === j || "option" === j) {
                            var L = t,
                                z = Ti(L),
                                Z = Ci(L, j.toUpperCase(), z),
                                F = t.checked;
                            "submit" !== z && "button" !== z && Z && (T.value = Ei({
                                input: L,
                                type: z,
                                tagName: j,
                                value: Z,
                                maskInputSelector: p,
                                unmaskInputSelector: h,
                                maskInputOptions: y,
                                maskInputFn: _
                            })), F && (T.checked = F)
                        }
                        if ("option" === j && (t.selected && !y.select ? T.selected = !0 : delete T.selected), "canvas" === j && S)
                            if ("2d" === t.__context)(function(t) {
                                var e = t.getContext("2d");
                                if (!e) return !0;
                                for (var n = 0; n < t.width; n += 50)
                                    for (var r = 0; r < t.height; r += 50) {
                                        var a = e.getImageData,
                                            i = ji in a ? a.__rrweb_original__ : a;
                                        if (new Uint32Array(i.call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer).some((function(t) {
                                                return 0 !== t
                                            }))) return !1
                                    }
                                return !0
                            })(t) || (T.rr_dataURL = t.toDataURL(w.type, w.quality));
                            else if (!("__context" in t)) {
                            var B = t.toDataURL(w.type, w.quality),
                                U = document.createElement("canvas");
                            U.width = t.width, U.height = t.height, B !== U.toDataURL(w.type, w.quality) && (T.rr_dataURL = B)
                        }
                        if ("img" === j && k) {
                            Ri || (Ri = i.createElement("canvas"), Ii = Ri.getContext("2d"));
                            var H = t,
                                q = H.crossOrigin;
                            H.crossOrigin = "anonymous";
                            var W = function() {
                                try {
                                    Ri.width = H.naturalWidth, Ri.height = H.naturalHeight, Ii.drawImage(H, 0, 0), T.rr_dataURL = Ri.toDataURL(w.type, w.quality)
                                } catch (t) {
                                    console.warn("Cannot inline img src=".concat(H.currentSrc, "! Error: ").concat(t))
                                }
                                q ? T.crossOrigin = q : delete T.crossOrigin
                            };
                            H.complete && 0 !== H.naturalWidth ? W() : H.onload = W
                        }
                        if ("audio" !== j && "video" !== j || (T.rr_mediaState = t.paused ? "paused" : "played", T.rr_mediaCurrentTime = t.currentTime), t.scrollLeft && (T.rr_scrollLeft = t.scrollLeft), t.scrollTop && (T.rr_scrollTop = t.scrollTop), E) {
                            var G = t.getBoundingClientRect(),
                                V = G.width,
                                J = G.height;
                            T = {
                                class: T.class,
                                rr_width: "".concat(V, "px"),
                                rr_height: "".concat(J, "px")
                            }
                        }
                        return "iframe" !== j || x(T.src) || (t.contentDocument || (T.rr_src = T.src), delete T.src), {
                            type: mi.Element,
                            tagName: j,
                            attributes: T,
                            childNodes: [],
                            isSVG: Ki(t) || void 0,
                            needBlock: E,
                            rootId: r
                        };
                    case t.TEXT_NODE:
                        var Y = t.parentNode && t.parentNode.tagName,
                            $ = t.textContent,
                            K = "STYLE" === Y || void 0,
                            X = "SCRIPT" === Y || void 0;
                        if (K && $) {
                            try {
                                t.nextSibling || t.previousSibling || (null === (n = t.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) && ($ = (a = t.parentNode.sheet).cssRules ? Array.from(a.cssRules).map((function(t) {
                                    return t.cssText ? Li(t.cssText) : ""
                                })).join("") : "")
                            } catch (Q) {
                                console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(Q), t)
                            }
                            $ = Bi($, Xi())
                        }
                        if (X && ($ = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === Y && $) $ = "";
                        else if ("OPTION" === Y && $) {
                            $ = Ei({
                                input: t.parentNode,
                                type: null,
                                tagName: Y,
                                value: $,
                                maskInputSelector: p,
                                unmaskInputSelector: h,
                                maskInputOptions: y,
                                maskInputFn: _
                            })
                        } else !K && !X && to(t, u, l, d, m) && $ && ($ = g ? g($) : Di($));
                        return {
                            type: mi.Text,
                            textContent: $ || "",
                            isStyle: K,
                            rootId: r
                        };
                    case t.CDATA_SECTION_NODE:
                        return {
                            type: mi.CDATA,
                            textContent: "",
                            rootId: r
                        };
                    case t.COMMENT_NODE:
                        return {
                            type: mi.Comment,
                            textContent: t.textContent || "",
                            rootId: r
                        };
                    default:
                        return !1
                }
            }

            function no(t) {
                return void 0 === t || null === t ? "" : t.toLowerCase()
            }

            function ro(t, e) {
                var n, r = e.doc,
                    a = e.map,
                    i = e.blockClass,
                    o = e.blockSelector,
                    s = e.unblockSelector,
                    c = e.maskTextClass,
                    u = e.maskTextSelector,
                    l = e.unmaskTextSelector,
                    d = e.skipChild,
                    f = void 0 !== d && d,
                    p = e.inlineStylesheet,
                    h = void 0 === p || p,
                    m = e.maskInputSelector,
                    v = e.unmaskInputSelector,
                    y = e.maskAllText,
                    g = e.maskInputOptions,
                    _ = void 0 === g ? {} : g,
                    b = e.maskTextFn,
                    w = e.maskInputFn,
                    k = e.slimDOMOptions,
                    S = e.dataURLOptions,
                    x = void 0 === S ? {} : S,
                    O = e.inlineImages,
                    E = void 0 !== O && O,
                    j = e.recordCanvas,
                    T = void 0 !== j && j,
                    C = e.onSerialize,
                    R = e.onIframeLoad,
                    I = e.iframeLoadTimeout,
                    A = void 0 === I ? 5e3 : I,
                    P = e.keepIframeSrcFn,
                    D = void 0 === P ? function() {
                        return !1
                    } : P,
                    M = e.preserveWhiteSpace,
                    N = void 0 === M || M,
                    L = eo(t, {
                        doc: r,
                        blockClass: i,
                        blockSelector: o,
                        unblockSelector: s,
                        maskTextClass: c,
                        maskTextSelector: u,
                        unmaskTextSelector: l,
                        inlineStylesheet: h,
                        maskInputSelector: m,
                        unmaskInputSelector: v,
                        maskAllText: y,
                        maskInputOptions: _,
                        maskTextFn: b,
                        maskInputFn: w,
                        dataURLOptions: x,
                        inlineImages: E,
                        recordCanvas: T,
                        keepIframeSrcFn: D
                    });
                if (!L) return console.warn(t, "not serialized"), null;
                n = "__sn" in t ? t.__sn.id : ! function(t, e) {
                    if (e.comment && t.type === mi.Comment) return !0;
                    if (t.type === mi.Element) {
                        if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" === typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
                        if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (no(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === no(t.attributes.name) || "icon" === no(t.attributes.rel) || "apple-touch-icon" === no(t.attributes.rel) || "shortcut icon" === no(t.attributes.rel)))) return !0;
                        if ("meta" === t.tagName) {
                            if (e.headMetaDescKeywords && no(t.attributes.name).match(/^description|keywords$/)) return !0;
                            if (e.headMetaSocial && (no(t.attributes.property).match(/^(og|twitter|fb):/) || no(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === no(t.attributes.name))) return !0;
                            if (e.headMetaRobots && ("robots" === no(t.attributes.name) || "googlebot" === no(t.attributes.name) || "bingbot" === no(t.attributes.name))) return !0;
                            if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                            if (e.headMetaAuthorship && ("author" === no(t.attributes.name) || "generator" === no(t.attributes.name) || "framework" === no(t.attributes.name) || "publisher" === no(t.attributes.name) || "progid" === no(t.attributes.name) || no(t.attributes.property).match(/^article:/) || no(t.attributes.property).match(/^product:/))) return !0;
                            if (e.headMetaVerification && ("google-site-verification" === no(t.attributes.name) || "yandex-verification" === no(t.attributes.name) || "csrf-token" === no(t.attributes.name) || "p:domain_verify" === no(t.attributes.name) || "verify-v1" === no(t.attributes.name) || "verification" === no(t.attributes.name) || "shopify-checkout-api-token" === no(t.attributes.name))) return !0
                        }
                    }
                    return !1
                }(L, k) && (N || L.type !== mi.Text || L.isStyle || L.textContent.replace(/^\s+|\s+$/gm, "").length) ? Ai++ : -2;
                var z = Object.assign(L, {
                    id: n
                });
                if (t.__sn = z, -2 === n) return null;
                a[n] = t, C && C(t);
                var Z = !f;
                if (z.type === mi.Element && (Z = Z && !z.needBlock, delete z.needBlock, t.shadowRoot && (z.isShadowHost = !0)), (z.type === mi.Document || z.type === mi.Element) && Z) {
                    k.headWhitespace && L.type === mi.Element && "head" === L.tagName && (N = !1);
                    for (var F = {
                            doc: r,
                            map: a,
                            blockClass: i,
                            blockSelector: o,
                            unblockSelector: s,
                            maskTextClass: c,
                            maskTextSelector: u,
                            unmaskTextSelector: l,
                            skipChild: f,
                            inlineStylesheet: h,
                            maskInputSelector: m,
                            unmaskInputSelector: v,
                            maskAllText: y,
                            maskInputOptions: _,
                            maskTextFn: b,
                            maskInputFn: w,
                            slimDOMOptions: k,
                            dataURLOptions: x,
                            inlineImages: E,
                            recordCanvas: T,
                            preserveWhiteSpace: N,
                            onSerialize: C,
                            onIframeLoad: R,
                            iframeLoadTimeout: A,
                            keepIframeSrcFn: D
                        }, B = 0, U = Array.from(t.childNodes); B < U.length; B++) {
                        var H = ro(U[B], F);
                        H && z.childNodes.push(H)
                    }
                    if (function(t) {
                            return t.nodeType === t.ELEMENT_NODE
                        }(t) && t.shadowRoot)
                        for (var q = 0, W = Array.from(t.shadowRoot.childNodes); q < W.length; q++) {
                            var G = ro(W[q], F);
                            G && (G.isShadow = !0, z.childNodes.push(G))
                        }
                }
                return t.parentNode && xi(t.parentNode) && (z.isShadow = !0), z.type === mi.Element && "iframe" === z.tagName && function(t, e, n) {
                    var r = t.contentWindow;
                    if (r) {
                        var a, i = !1;
                        try {
                            a = r.document.readyState
                        } catch (c) {
                            return
                        }
                        if ("complete" === a) {
                            var o = "about:blank";
                            r.location.href === o && t.src !== o && "" !== t.src ? t.addEventListener("load", e) : setTimeout(e, 0)
                        } else {
                            var s = setTimeout((function() {
                                i || (e(), i = !0)
                            }), n);
                            t.addEventListener("load", (function() {
                                clearTimeout(s), i = !0, e()
                            }))
                        }
                    }
                }(t, (function() {
                    var e = t.contentDocument;
                    if (e && R) {
                        var n = ro(e, {
                            doc: e,
                            map: a,
                            blockClass: i,
                            blockSelector: o,
                            unblockSelector: s,
                            maskTextClass: c,
                            maskTextSelector: u,
                            unmaskTextSelector: l,
                            skipChild: !1,
                            inlineStylesheet: h,
                            maskInputSelector: m,
                            unmaskInputSelector: v,
                            maskAllText: y,
                            maskInputOptions: _,
                            maskTextFn: b,
                            maskInputFn: w,
                            slimDOMOptions: k,
                            dataURLOptions: x,
                            inlineImages: E,
                            recordCanvas: T,
                            preserveWhiteSpace: N,
                            onSerialize: C,
                            onIframeLoad: R,
                            iframeLoadTimeout: A,
                            keepIframeSrcFn: D
                        });
                        n && R(t, n)
                    }
                }), A), z
            }

            function ao(t, e) {
                var n = e || {},
                    r = n.blockClass,
                    a = void 0 === r ? "rr-block" : r,
                    i = n.blockSelector,
                    o = void 0 === i ? null : i,
                    s = n.unblockSelector,
                    c = void 0 === s ? null : s,
                    u = n.maskTextClass,
                    l = void 0 === u ? "rr-mask" : u,
                    d = n.maskTextSelector,
                    f = void 0 === d ? null : d,
                    p = n.unmaskTextSelector,
                    h = void 0 === p ? null : p,
                    m = n.inlineStylesheet,
                    v = void 0 === m || m,
                    y = n.inlineImages,
                    g = void 0 !== y && y,
                    _ = n.recordCanvas,
                    b = void 0 !== _ && _,
                    w = n.maskInputSelector,
                    k = void 0 === w ? null : w,
                    S = n.unmaskInputSelector,
                    x = void 0 === S ? null : S,
                    O = n.maskAllText,
                    E = void 0 !== O && O,
                    j = n.maskAllInputs,
                    T = void 0 !== j && j,
                    C = n.maskTextFn,
                    R = n.maskInputFn,
                    I = n.slimDOM,
                    A = void 0 !== I && I,
                    P = n.dataURLOptions,
                    D = n.preserveWhiteSpace,
                    M = n.onSerialize,
                    N = n.onIframeLoad,
                    L = n.iframeLoadTimeout,
                    z = n.keepIframeSrcFn,
                    Z = {};
                return [ro(t, {
                    doc: t,
                    map: Z,
                    blockClass: a,
                    blockSelector: o,
                    unblockSelector: c,
                    maskTextClass: l,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    skipChild: !1,
                    inlineStylesheet: v,
                    maskInputSelector: k,
                    unmaskInputSelector: x,
                    maskAllText: E,
                    maskInputOptions: !0 === T ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0
                    } : !1 === T ? {} : T,
                    maskTextFn: C,
                    maskInputFn: R,
                    slimDOMOptions: !0 === A || "all" === A ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaDescKeywords: "all" === A,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaAuthorship: !0,
                        headMetaVerification: !0
                    } : !1 === A ? {} : A,
                    dataURLOptions: P,
                    inlineImages: g,
                    recordCanvas: b,
                    preserveWhiteSpace: D,
                    onSerialize: M,
                    onIframeLoad: N,
                    iframeLoadTimeout: L,
                    keepIframeSrcFn: void 0 === z ? function() {
                        return !1
                    } : z
                }), Z]
            }

            function io(t, e, n) {
                return ("video" === t || "audio" === t) && "autoplay" === e
            }

            function oo(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
                    r = {
                        capture: !0,
                        passive: !0
                    };
                return n.addEventListener(t, e, r),
                    function() {
                        return n.removeEventListener(t, e, r)
                    }
            }! function(t) {
                t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin"
            }(Ui || (Ui = {})),
            function(t) {
                t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration"
            }(Hi || (Hi = {})),
            function(t) {
                t[t.MouseUp = 0] = "MouseUp", t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel"
            }(qi || (qi = {})),
            function(t) {
                t[t["2D"] = 0] = "2D", t[t.WebGL = 1] = "WebGL", t[t.WebGL2 = 2] = "WebGL2"
            }(Wi || (Wi = {})),
            function(t) {
                t[t.Play = 0] = "Play", t[t.Pause = 1] = "Pause", t[t.Seeked = 2] = "Seeked", t[t.VolumeChange = 3] = "VolumeChange"
            }(Gi || (Gi = {})),
            function(t) {
                t.Start = "start", t.Pause = "pause", t.Resume = "resume", t.Resize = "resize", t.Finish = "finish", t.FullsnapshotRebuilded = "fullsnapshot-rebuilded", t.LoadStylesheetStart = "load-stylesheet-start", t.LoadStylesheetEnd = "load-stylesheet-end", t.SkipStart = "skip-start", t.SkipEnd = "skip-end", t.MouseInteraction = "mouse-interaction", t.EventCast = "event-cast", t.CustomEvent = "custom-event", t.Flush = "flush", t.StateChange = "state-change", t.PlayBack = "play-back"
            }(Vi || (Vi = {}));
            var so = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
                co = {
                    map: {},
                    getId: function() {
                        return console.error(so), -1
                    },
                    getNode: function() {
                        return console.error(so), null
                    },
                    removeNodeFromMap: function() {
                        console.error(so)
                    },
                    has: function() {
                        return console.error(so), !1
                    },
                    reset: function() {
                        console.error(so)
                    }
                };

            function uo(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = null,
                    a = 0;
                return function(i) {
                    var o = Date.now();
                    a || !1 !== n.leading || (a = o);
                    var s = e - (o - a),
                        c = this,
                        u = arguments;
                    s <= 0 || s > e ? (r && (clearTimeout(r), r = null), a = o, t.apply(c, u)) : r || !1 === n.trailing || (r = setTimeout((function() {
                        a = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(c, u)
                    }), s))
                }
            }

            function lo(t, e, n, r) {
                var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window,
                    i = a.Object.getOwnPropertyDescriptor(t, e);
                return a.Object.defineProperty(t, e, r ? n : {
                        set: function(t) {
                            var e = this;
                            setTimeout((function() {
                                n.set.call(e, t)
                            }), 0), i && i.set && i.set.call(this, t)
                        }
                    }),
                    function() {
                        return lo(t, e, i || {}, !0)
                    }
            }

            function fo(t, e, n) {
                try {
                    if (!(e in t)) return function() {};
                    var r = t[e],
                        a = n(r);
                    return "function" === typeof a && (a.prototype = a.prototype || {}, Object.defineProperties(a, {
                            __rrweb_original__: {
                                enumerable: !1,
                                value: r
                            }
                        })), t[e] = a,
                        function() {
                            t[e] = r
                        }
                } catch (i) {
                    return function() {}
                }
            }

            function po() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function ho() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function mo(t, e, n, r) {
                if (!t) return !1;
                if (t.nodeType === t.ELEMENT_NODE) {
                    var a = !1,
                        i = r && t.matches(r);
                    return "string" === typeof e ? a = void 0 !== t.closest ? !i && null !== t.closest("." + e) : !i && t.classList.contains(e) : !i && t.classList.forEach((function(t) {
                        e.test(t) && (a = !0)
                    })), !a && n && (a = t.matches(n)), !i && a || mo(t.parentNode, e, n, r)
                }
                return t.nodeType, t.TEXT_NODE, mo(t.parentNode, e, n, r)
            }

            function vo(t) {
                return "__sn" in t && -2 === t.__sn.id
            }

            function yo(t, e) {
                if (xi(t)) return !1;
                var n = e.getId(t);
                return !e.has(n) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || yo(t.parentNode, e))
            }

            function go(t) {
                return Boolean(t.changedTouches)
            }

            function _o() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = function(t) {
                    if (!(0 in arguments)) throw new TypeError("1 argument is required");
                    do {
                        if (this === t) return !0
                    } while (t = t && t.parentNode);
                    return !1
                })
            }

            function bo(t) {
                return "__sn" in t && (t.__sn.type === mi.Element && "iframe" === t.__sn.tagName)
            }

            function wo(t) {
                return Boolean(null === t || void 0 === t ? void 0 : t.shadowRoot)
            }

            function ko(t) {
                return "__ln" in t
            }
            window.Proxy && window.Reflect && (co = new Proxy(co, {
                get: function(t, e, n) {
                    return "map" === e && console.error(so), Reflect.get(t, e, n)
                }
            }));
            var So = function() {
                    function t() {
                        (0, s.Z)(this, t), this.length = 0, this.head = null
                    }
                    return (0, c.Z)(t, [{
                        key: "get",
                        value: function(t) {
                            if (t >= this.length) throw new Error("Position outside of list range");
                            for (var e = this.head, n = 0; n < t; n++) e = (null === e || void 0 === e ? void 0 : e.next) || null;
                            return e
                        }
                    }, {
                        key: "addNode",
                        value: function(t) {
                            var e = {
                                value: t,
                                previous: null,
                                next: null
                            };
                            if (t.__ln = e, t.previousSibling && ko(t.previousSibling)) {
                                var n = t.previousSibling.__ln.next;
                                e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, n && (n.previous = e)
                            } else if (t.nextSibling && ko(t.nextSibling) && t.nextSibling.__ln.previous) {
                                var r = t.nextSibling.__ln.previous;
                                e.previous = r, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, r && (r.next = e)
                            } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
                            this.length++
                        }
                    }, {
                        key: "removeNode",
                        value: function(t) {
                            var e = t.__ln;
                            this.head && (e.previous ? (e.previous.next = e.next, e.next && (e.next.previous = e.previous)) : (this.head = e.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--)
                        }
                    }]), t
                }(),
                xo = function(t, e) {
                    return "".concat(t, "@").concat(e)
                };

            function Oo(t) {
                return "__sn" in t
            }
            var Eo = function() {
                function t() {
                    var e = this;
                    (0, s.Z)(this, t), this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = function(t) {
                        t.forEach(e.processMutation), e.emit()
                    }, this.emit = function() {
                        if (!e.frozen && !e.locked) {
                            for (var t = [], n = new So, r = function(t) {
                                    for (var n = t, r = -2; - 2 === r;) r = (n = n && n.nextSibling) && e.mirror.getId(n);
                                    return r
                                }, a = function(a) {
                                    for (var i, o, s, c, u, l = a.getRootNode ? null === (i = a.getRootNode()) || void 0 === i ? void 0 : i.host : null, d = l; null === (s = null === (o = null === d || void 0 === d ? void 0 : d.getRootNode) || void 0 === o ? void 0 : o.call(d)) || void 0 === s ? void 0 : s.host;) d = (null === (u = null === (c = null === d || void 0 === d ? void 0 : d.getRootNode) || void 0 === c ? void 0 : c.call(d)) || void 0 === u ? void 0 : u.host) || null;
                                    var f = !e.doc.contains(a) && (!d || !e.doc.contains(d));
                                    if (a.parentNode && !f) {
                                        var p = xi(a.parentNode) ? e.mirror.getId(l) : e.mirror.getId(a.parentNode),
                                            h = r(a);
                                        if (-1 === p || -1 === h) return n.addNode(a);
                                        var m = ro(a, {
                                            doc: e.doc,
                                            map: e.mirror.map,
                                            blockClass: e.blockClass,
                                            blockSelector: e.blockSelector,
                                            unblockSelector: e.unblockSelector,
                                            maskTextClass: e.maskTextClass,
                                            maskTextSelector: e.maskTextSelector,
                                            unmaskTextSelector: e.unmaskTextSelector,
                                            maskInputSelector: e.maskInputSelector,
                                            unmaskInputSelector: e.unmaskInputSelector,
                                            skipChild: !0,
                                            inlineStylesheet: e.inlineStylesheet,
                                            maskAllText: e.maskAllText,
                                            maskInputOptions: e.maskInputOptions,
                                            maskTextFn: e.maskTextFn,
                                            maskInputFn: e.maskInputFn,
                                            slimDOMOptions: e.slimDOMOptions,
                                            recordCanvas: e.recordCanvas,
                                            inlineImages: e.inlineImages,
                                            onSerialize: function(t) {
                                                bo(t) && e.iframeManager.addIframe(t), wo(a) && e.shadowDomManager.addShadowRoot(a.shadowRoot, document)
                                            },
                                            onIframeLoad: function(t, n) {
                                                e.iframeManager.attachIframe(t, n), e.shadowDomManager.observeAttachShadow(t)
                                            }
                                        });
                                        m && t.push({
                                            parentId: p,
                                            nextId: h,
                                            node: m
                                        })
                                    }
                                }; e.mapRemoves.length;) e.mirror.removeNodeFromMap(e.mapRemoves.shift());
                            var i, o = pi(e.movedSet);
                            try {
                                for (o.s(); !(i = o.n()).done;) {
                                    var s = i.value;
                                    To(e.removes, s, e.mirror) && !e.movedSet.has(s.parentNode) || a(s)
                                }
                            } catch (b) {
                                o.e(b)
                            } finally {
                                o.f()
                            }
                            var c, u = pi(e.addedSet);
                            try {
                                for (u.s(); !(c = u.n()).done;) {
                                    var l = c.value;
                                    Co(e.droppedSet, l) || To(e.removes, l, e.mirror) ? Co(e.movedSet, l) ? a(l) : e.droppedSet.add(l) : a(l)
                                }
                            } catch (b) {
                                u.e(b)
                            } finally {
                                u.f()
                            }
                            for (var d = null; n.length;) {
                                var f = null;
                                if (d) {
                                    var p = e.mirror.getId(d.value.parentNode),
                                        h = r(d.value); - 1 !== p && -1 !== h && (f = d)
                                }
                                if (!f)
                                    for (var m = n.length - 1; m >= 0; m--) {
                                        var v = n.get(m);
                                        if (v) {
                                            var y = e.mirror.getId(v.value.parentNode),
                                                g = r(v.value);
                                            if (-1 !== y && -1 !== g) {
                                                f = v;
                                                break
                                            }
                                        }
                                    }
                                if (!f) {
                                    for (; n.head;) n.removeNode(n.head.value);
                                    break
                                }
                                d = f.previous, n.removeNode(f.value), a(f.value)
                            }
                            var _ = {
                                texts: e.texts.map((function(t) {
                                    return {
                                        id: e.mirror.getId(t.node),
                                        value: t.value
                                    }
                                })).filter((function(t) {
                                    return e.mirror.has(t.id)
                                })),
                                attributes: e.attributes.map((function(t) {
                                    return {
                                        id: e.mirror.getId(t.node),
                                        attributes: t.attributes
                                    }
                                })).filter((function(t) {
                                    return e.mirror.has(t.id)
                                })),
                                removes: e.removes,
                                adds: t
                            };
                            (_.texts.length || _.attributes.length || _.removes.length || _.adds.length) && (e.texts = [], e.attributes = [], e.removes = [], e.addedSet = new Set, e.movedSet = new Set, e.droppedSet = new Set, e.movedMap = {}, e.mutationCb(_))
                        }
                    }, this.processMutation = function(t) {
                        if (!vo(t.target)) switch (t.type) {
                            case "characterData":
                                var n = t.target.textContent;
                                mo(t.target, e.blockClass, e.blockSelector, e.unblockSelector) || n === t.oldValue || e.texts.push({
                                    value: to(t.target, e.maskTextClass, e.maskTextSelector, e.unmaskTextSelector, e.maskAllText) && n ? e.maskTextFn ? e.maskTextFn(n) : n.replace(/[\S]/g, "*") : n,
                                    node: t.target
                                });
                                break;
                            case "attributes":
                                var r = t.target,
                                    a = r.getAttribute(t.attributeName);
                                if ("value" === t.attributeName && (a = Ei({
                                        input: r,
                                        maskInputSelector: e.maskInputSelector,
                                        unmaskInputSelector: e.unmaskInputSelector,
                                        maskInputOptions: e.maskInputOptions,
                                        tagName: r.tagName,
                                        type: r.getAttribute("type"),
                                        value: a,
                                        maskInputFn: e.maskInputFn
                                    })), mo(t.target, e.blockClass, e.blockSelector, e.unblockSelector) || a === t.oldValue) return;
                                var i = e.attributes.find((function(e) {
                                    return e.node === t.target
                                }));
                                if (i || (i = {
                                        node: t.target,
                                        attributes: {}
                                    }, e.attributes.push(i)), "type" === t.attributeName && "INPUT" === r.tagName && "password" === (t.oldValue || "").toLowerCase() && r.setAttribute("data-rr-is-password", "true"), "style" === t.attributeName) {
                                    var o = e.doc.createElement("span");
                                    t.oldValue && o.setAttribute("style", t.oldValue), void 0 !== i.attributes.style && null !== i.attributes.style || (i.attributes.style = {});
                                    try {
                                        for (var s = i.attributes.style, c = 0, u = Array.from(r.style); c < u.length; c++) {
                                            var l = u[c],
                                                d = r.style.getPropertyValue(l),
                                                f = r.style.getPropertyPriority(l);
                                            d === o.style.getPropertyValue(l) && f === o.style.getPropertyPriority(l) || (s[l] = "" === f ? d : [d, f])
                                        }
                                        for (var p = 0, h = Array.from(o.style); p < h.length; p++) {
                                            var m = h[p];
                                            "" === r.style.getPropertyValue(m) && (s[m] = !1)
                                        }
                                    } catch (y) {
                                        console.warn("[rrweb] Error when parsing update to style attribute:", y)
                                    }
                                } else {
                                    var v = t.target;
                                    i.attributes[t.attributeName] = Qi(e.doc, v, v.tagName, t.attributeName, a, e.maskAllText, e.unmaskTextSelector, e.maskTextFn)
                                }
                                break;
                            case "childList":
                                t.addedNodes.forEach((function(n) {
                                    return e.genAdds(n, t.target)
                                })), t.removedNodes.forEach((function(n) {
                                    var r = e.mirror.getId(n),
                                        a = xi(t.target) ? e.mirror.getId(t.target.host) : e.mirror.getId(t.target);
                                    mo(t.target, e.blockClass, e.blockSelector, e.unblockSelector) || vo(n) || (e.addedSet.has(n) ? (jo(e.addedSet, n), e.droppedSet.add(n)) : e.addedSet.has(t.target) && -1 === r || yo(t.target, e.mirror) || (e.movedSet.has(n) && e.movedMap[xo(r, a)] ? jo(e.movedSet, n) : e.removes.push({
                                        parentId: a,
                                        id: r,
                                        isShadow: !!xi(t.target) || void 0
                                    })), e.mapRemoves.push(n))
                                }))
                        }
                    }, this.genAdds = function(t, n) {
                        if (!n || !mo(n, e.blockClass, e.blockSelector, e.unblockSelector)) {
                            if (Oo(t)) {
                                if (vo(t)) return;
                                e.movedSet.add(t);
                                var r = null;
                                n && Oo(n) && (r = n.__sn.id), r && (e.movedMap[xo(t.__sn.id, r)] = !0)
                            } else e.addedSet.add(t), e.droppedSet.delete(t);
                            mo(t, e.blockClass, e.blockSelector, e.unblockSelector) || t.childNodes.forEach((function(t) {
                                return e.genAdds(t)
                            }))
                        }
                    }
                }
                return (0, c.Z)(t, [{
                    key: "init",
                    value: function(t) {
                        var e = this;
                        ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskTextClass", "maskTextSelector", "unmaskTextSelector", "maskInputSelector", "unmaskInputSelector", "inlineStylesheet", "maskAllText", "maskInputOptions", "maskTextFn", "maskInputFn", "recordCanvas", "inlineImages", "slimDOMOptions", "doc", "mirror", "iframeManager", "shadowDomManager", "canvasManager"].forEach((function(n) {
                            e[n] = t[n]
                        }))
                    }
                }, {
                    key: "freeze",
                    value: function() {
                        this.frozen = !0, this.canvasManager.freeze()
                    }
                }, {
                    key: "unfreeze",
                    value: function() {
                        this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                    }
                }, {
                    key: "isFrozen",
                    value: function() {
                        return this.frozen
                    }
                }, {
                    key: "lock",
                    value: function() {
                        this.locked = !0, this.canvasManager.lock()
                    }
                }, {
                    key: "unlock",
                    value: function() {
                        this.locked = !1, this.canvasManager.unlock(), this.emit()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.shadowDomManager.reset(), this.canvasManager.reset()
                    }
                }]), t
            }();

            function jo(t, e) {
                t.delete(e), e.childNodes.forEach((function(e) {
                    return jo(t, e)
                }))
            }

            function To(t, e, n) {
                var r = e.parentNode;
                if (!r) return !1;
                var a = n.getId(r);
                return !!t.some((function(t) {
                    return t.id === a
                })) || To(t, r, n)
            }

            function Co(t, e) {
                var n = e.parentNode;
                return !!n && (!!t.has(n) || Co(t, n))
            }
            var Ro = function(t) {
                    return function() {
                        try {
                            return t.apply(void 0, arguments)
                        } catch (e) {
                            try {
                                e.__rrweb__ = !0
                            } catch (n) {}
                            throw e
                        }
                    }
                },
                Io = [];

            function Ao(t) {
                try {
                    if ("composedPath" in t) {
                        var e = t.composedPath();
                        if (e.length) return e[0]
                    } else if ("path" in t && t.path.length) return t.path[0]
                } catch (n) {}
                return t && t.target
            }

            function Po(t, e) {
                var n, r, a = new Eo;
                Io.push(a), a.init(t);
                var i = window.MutationObserver || window.__rrMutationObserver,
                    o = null === (r = null === (n = null === window || void 0 === window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === r ? void 0 : r.call(n, "MutationObserver");
                o && window[o] && (i = window[o]);
                var s = new i(Ro((function(e) {
                    t.onMutation && !1 === t.onMutation(e) || a.processMutations(e)
                })));
                return s.observe(e, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), s
            }

            function Do(t) {
                var e = t.mousemoveCb,
                    n = t.sampling,
                    r = t.doc,
                    a = t.mirror;
                if (!1 === n.mousemove) return function() {};
                var i, o = "number" === typeof n.mousemove ? n.mousemove : 50,
                    s = "number" === typeof n.mousemoveCallback ? n.mousemoveCallback : 500,
                    c = [],
                    u = uo((function(t) {
                        var n = Date.now() - i;
                        Ro(e)(c.map((function(t) {
                            return t.timeOffset -= n, t
                        })), t), c = [], i = null
                    }), s),
                    l = uo((function(t) {
                        var e = Ao(t),
                            n = go(t) ? t.changedTouches[0] : t,
                            r = n.clientX,
                            o = n.clientY;
                        i || (i = Date.now()), c.push({
                            x: r,
                            y: o,
                            id: a.getId(e),
                            timeOffset: Date.now() - i
                        }), u("undefined" !== typeof DragEvent && t instanceof DragEvent ? Hi.Drag : t instanceof MouseEvent ? Hi.MouseMove : Hi.TouchMove)
                    }), o, {
                        trailing: !1
                    }),
                    d = [oo("mousemove", Ro(l), r), oo("touchmove", Ro(l), r), oo("drag", Ro(l), r)];
                return Ro((function() {
                    d.forEach((function(t) {
                        return t()
                    }))
                }))
            }

            function Mo(t) {
                var e = t.mouseInteractionCb,
                    n = t.doc,
                    r = t.mirror,
                    a = t.blockClass,
                    i = t.blockSelector,
                    o = t.unblockSelector,
                    s = t.sampling;
                if (!1 === s.mouseInteraction) return function() {};
                var c = !0 === s.mouseInteraction || void 0 === s.mouseInteraction ? {} : s.mouseInteraction,
                    u = [];
                return Object.keys(qi).filter((function(t) {
                    return Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== c[t]
                })).forEach((function(t) {
                    var s = t.toLowerCase(),
                        c = Ro(function(t) {
                            return function(n) {
                                var s = Ao(n);
                                if (!mo(s, a, i, o)) {
                                    var c = go(n) ? n.changedTouches[0] : n;
                                    if (c) {
                                        var u = r.getId(s),
                                            l = c.clientX,
                                            d = c.clientY;
                                        Ro(e)({
                                            type: qi[t],
                                            id: u,
                                            x: l,
                                            y: d
                                        })
                                    }
                                }
                            }
                        }(t));
                    u.push(oo(s, c, n))
                })), Ro((function() {
                    u.forEach((function(t) {
                        return t()
                    }))
                }))
            }

            function No(t) {
                var e = t.scrollCb,
                    n = t.doc,
                    r = t.mirror,
                    a = t.blockClass,
                    i = t.blockSelector,
                    o = t.unblockSelector,
                    s = uo((function(t) {
                        var s = Ao(t);
                        if (s && !mo(s, a, i, o)) {
                            var c = r.getId(s);
                            if (s === n) {
                                var u = n.scrollingElement || n.documentElement;
                                Ro(e)({
                                    id: c,
                                    x: u.scrollLeft,
                                    y: u.scrollTop
                                })
                            } else Ro(e)({
                                id: c,
                                x: s.scrollLeft,
                                y: s.scrollTop
                            })
                        }
                    }), t.sampling.scroll || 100);
                return oo("scroll", Ro(s), n)
            }

            function Lo(t) {
                var e = t.viewportResizeCb,
                    n = -1,
                    r = -1,
                    a = uo((function() {
                        var t = po(),
                            a = ho();
                        n === t && r === a || (Ro(e)({
                            width: Number(a),
                            height: Number(t)
                        }), n = t, r = a)
                    }), 200);
                return oo("resize", Ro(a), window)
            }

            function zo(t, e) {
                var n = Object.assign({}, t);
                return e || delete n.userTriggered, n
            }
            var Zo = ["INPUT", "TEXTAREA", "SELECT"],
                Fo = new WeakMap;

            function Bo(t) {
                var e = t.inputCb,
                    n = t.doc,
                    a = t.mirror,
                    i = t.blockClass,
                    o = t.blockSelector,
                    s = t.unblockSelector,
                    c = t.ignoreClass,
                    u = t.ignoreSelector,
                    l = t.maskInputSelector,
                    d = t.unmaskInputSelector,
                    f = t.maskInputOptions,
                    p = t.maskInputFn,
                    h = t.sampling,
                    m = t.userTriggeredOnInput;

                function v(t) {
                    var e = Ao(t),
                        r = e && e.tagName,
                        a = t.isTrusted;
                    if ("OPTION" === r && (e = e.parentElement), e && r && !(Zo.indexOf(r) < 0) && !mo(e, i, o, s)) {
                        var h = e,
                            v = Ti(h);
                        if (!(h.classList.contains(c) || u && h.matches(u))) {
                            var g = Ci(h, r, v),
                                _ = !1;
                            "radio" !== v && "checkbox" !== v || (_ = e.checked),
                                function(t) {
                                    var e = t.tagName,
                                        n = t.type,
                                        r = t.maskInputOptions;
                                    return t.maskInputSelector || Oi({
                                        maskInputOptions: r,
                                        tagName: e,
                                        type: n
                                    })
                                }({
                                    maskInputOptions: f,
                                    maskInputSelector: l,
                                    tagName: r,
                                    type: v
                                }) && (g = Ei({
                                    input: h,
                                    maskInputOptions: f,
                                    maskInputSelector: l,
                                    unmaskInputSelector: d,
                                    tagName: r,
                                    type: v,
                                    value: g,
                                    maskInputFn: p
                                })), y(e, Ro(zo)({
                                    text: g,
                                    isChecked: _,
                                    userTriggered: a
                                }, m));
                            var b = e.name;
                            "radio" === v && b && _ && n.querySelectorAll('input[type="radio"][name="'.concat(b, '"]')).forEach((function(t) {
                                if (t !== e) {
                                    var n = Ei({
                                        input: t,
                                        maskInputOptions: f,
                                        maskInputSelector: l,
                                        unmaskInputSelector: d,
                                        tagName: r,
                                        type: v,
                                        value: Ci(t, r, v),
                                        maskInputFn: p
                                    });
                                    y(t, Ro(zo)({
                                        text: n,
                                        isChecked: !_,
                                        userTriggered: !1
                                    }, m))
                                }
                            }))
                        }
                    }
                }

                function y(t, n) {
                    var r = Fo.get(t);
                    if (!r || r.text !== n.text || r.isChecked !== n.isChecked) {
                        Fo.set(t, n);
                        var i = a.getId(t);
                        e(Object.assign(Object.assign({}, n), {
                            id: i
                        }))
                    }
                }
                var g = ("last" === h.input ? ["change"] : ["input", "change"]).map((function(t) {
                        return oo(t, Ro(v), n)
                    })),
                    _ = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
                    b = [
                        [HTMLInputElement.prototype, "value"],
                        [HTMLInputElement.prototype, "checked"],
                        [HTMLSelectElement.prototype, "value"],
                        [HTMLTextAreaElement.prototype, "value"],
                        [HTMLSelectElement.prototype, "selectedIndex"],
                        [HTMLOptionElement.prototype, "selected"]
                    ];
                return _ && _.set && g.push.apply(g, (0, r.Z)(b.map((function(t) {
                    return lo(t[0], t[1], {
                        set: function() {
                            Ro(v)({
                                target: this
                            })
                        }
                    })
                })))), Ro((function() {
                    g.forEach((function(t) {
                        return t()
                    }))
                }))
            }

            function Uo(t) {
                return function(t, e) {
                    if (Yo("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || Yo("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || Yo("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || Yo("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
                        var n = Array.from(t.parentRule.cssRules).indexOf(t);
                        e.unshift(n)
                    } else {
                        var r = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
                        e.unshift(r)
                    }
                    return e
                }(t, [])
            }

            function Ho(t, e) {
                var n = t.styleSheetRuleCb,
                    a = t.mirror,
                    i = e.win;
                if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype) return function() {};
                var o = i.CSSStyleSheet.prototype.insertRule;
                i.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                    apply: Ro((function(t, e, r) {
                        var i = _(r, 2),
                            o = i[0],
                            s = i[1],
                            c = a.getId(e.ownerNode);
                        return -1 !== c && n({
                            id: c,
                            adds: [{
                                rule: o,
                                index: s
                            }]
                        }), t.apply(e, r)
                    }))
                });
                var s = i.CSSStyleSheet.prototype.deleteRule;
                i.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
                    apply: Ro((function(t, e, r) {
                        var i = _(r, 1)[0],
                            o = a.getId(e.ownerNode);
                        return -1 !== o && n({
                            id: o,
                            removes: [{
                                index: i
                            }]
                        }), t.apply(e, r)
                    }))
                });
                var c = {};
                $o("CSSGroupingRule") ? c.CSSGroupingRule = i.CSSGroupingRule : ($o("CSSMediaRule") && (c.CSSMediaRule = i.CSSMediaRule), $o("CSSConditionRule") && (c.CSSConditionRule = i.CSSConditionRule), $o("CSSSupportsRule") && (c.CSSSupportsRule = i.CSSSupportsRule));
                var u = {};
                return Object.entries(c).forEach((function(t) {
                    var e = _(t, 2),
                        i = e[0],
                        o = e[1];
                    u[i] = {
                        insertRule: o.prototype.insertRule,
                        deleteRule: o.prototype.deleteRule
                    }, o.prototype.insertRule = new Proxy(u[i].insertRule, {
                        apply: Ro((function(t, e, i) {
                            var o = _(i, 2),
                                s = o[0],
                                c = o[1],
                                u = a.getId(e.parentStyleSheet.ownerNode);
                            return -1 !== u && n({
                                id: u,
                                adds: [{
                                    rule: s,
                                    index: [].concat((0, r.Z)(Uo(e)), [c || 0])
                                }]
                            }), t.apply(e, i)
                        }))
                    }), o.prototype.deleteRule = new Proxy(u[i].deleteRule, {
                        apply: Ro((function(t, e, i) {
                            var o = _(i, 1)[0],
                                s = a.getId(e.parentStyleSheet.ownerNode);
                            return -1 !== s && n({
                                id: s,
                                removes: [{
                                    index: [].concat((0, r.Z)(Uo(e)), [o])
                                }]
                            }), t.apply(e, i)
                        }))
                    })
                })), Ro((function() {
                    i.CSSStyleSheet.prototype.insertRule = o, i.CSSStyleSheet.prototype.deleteRule = s, Object.entries(c).forEach((function(t) {
                        var e = _(t, 2),
                            n = e[0],
                            r = e[1];
                        r.prototype.insertRule = u[n].insertRule, r.prototype.deleteRule = u[n].deleteRule
                    }))
                }))
            }

            function qo(t, e) {
                var n = t.styleDeclarationCb,
                    r = t.mirror,
                    a = e.win,
                    i = a.CSSStyleDeclaration.prototype.setProperty;
                a.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
                    apply: Ro((function(t, e, a) {
                        var i, o, s = _(a, 3),
                            c = s[0],
                            u = s[1],
                            l = s[2],
                            d = r.getId(null === (o = null === (i = e.parentRule) || void 0 === i ? void 0 : i.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                        return -1 !== d && n({
                            id: d,
                            set: {
                                property: c,
                                value: u,
                                priority: l
                            },
                            index: Uo(e.parentRule)
                        }), t.apply(e, a)
                    }))
                });
                var o = a.CSSStyleDeclaration.prototype.removeProperty;
                return a.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                    apply: Ro((function(t, e, a) {
                        var i, o, s = _(a, 1)[0],
                            c = r.getId(null === (o = null === (i = e.parentRule) || void 0 === i ? void 0 : i.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                        return -1 !== c && n({
                            id: c,
                            remove: {
                                property: s
                            },
                            index: Uo(e.parentRule)
                        }), t.apply(e, a)
                    }))
                }), Ro((function() {
                    a.CSSStyleDeclaration.prototype.setProperty = i, a.CSSStyleDeclaration.prototype.removeProperty = o
                }))
            }

            function Wo(t) {
                var e = t.mediaInteractionCb,
                    n = t.blockClass,
                    r = t.blockSelector,
                    a = t.unblockSelector,
                    i = t.mirror,
                    o = t.sampling,
                    s = function(t) {
                        return uo(Ro((function(o) {
                            var s = Ao(o);
                            if (s && !mo(s, n, r, a)) {
                                var c = s.currentTime,
                                    u = s.volume,
                                    l = s.muted;
                                e({
                                    type: t,
                                    id: i.getId(s),
                                    currentTime: c,
                                    volume: u,
                                    muted: l
                                })
                            }
                        })), o.media || 500)
                    },
                    c = [oo("play", s(0)), oo("pause", s(1)), oo("seeked", s(2)), oo("volumechange", s(3))];
                return Ro((function() {
                    c.forEach((function(t) {
                        return t()
                    }))
                }))
            }

            function Go(t) {
                var e = t.fontCb,
                    n = t.doc,
                    r = n.defaultView;
                if (!r) return function() {};
                var a = [],
                    i = new WeakMap,
                    o = r.FontFace;
                r.FontFace = function(t, e, n) {
                    var r = new o(t, e, n);
                    return i.set(r, {
                        family: t,
                        buffer: "string" !== typeof e,
                        descriptors: n,
                        fontSource: "string" === typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                    }), r
                };
                var s = fo(n.fonts, "add", (function(t) {
                    return function(n) {
                        return setTimeout((function() {
                            var t = i.get(n);
                            t && (e(t), i.delete(n))
                        }), 0), t.apply(this, [n])
                    }
                }));
                return a.push((function() {
                    r.FontFace = o
                })), a.push(s), Ro((function() {
                    a.forEach((function(t) {
                        return t()
                    }))
                }))
            }

            function Vo(t, e) {
                var n = t.mutationCb,
                    r = t.mousemoveCb,
                    a = t.mouseInteractionCb,
                    i = t.scrollCb,
                    o = t.viewportResizeCb,
                    s = t.inputCb,
                    c = t.mediaInteractionCb,
                    u = t.styleSheetRuleCb,
                    l = t.styleDeclarationCb,
                    d = t.canvasMutationCb,
                    f = t.fontCb;
                t.mutationCb = function() {
                    e.mutation && e.mutation.apply(e, arguments), n.apply(void 0, arguments)
                }, t.mousemoveCb = function() {
                    e.mousemove && e.mousemove.apply(e, arguments), r.apply(void 0, arguments)
                }, t.mouseInteractionCb = function() {
                    e.mouseInteraction && e.mouseInteraction.apply(e, arguments), a.apply(void 0, arguments)
                }, t.scrollCb = function() {
                    e.scroll && e.scroll.apply(e, arguments), i.apply(void 0, arguments)
                }, t.viewportResizeCb = function() {
                    e.viewportResize && e.viewportResize.apply(e, arguments), o.apply(void 0, arguments)
                }, t.inputCb = function() {
                    e.input && e.input.apply(e, arguments), s.apply(void 0, arguments)
                }, t.mediaInteractionCb = function() {
                    e.mediaInteaction && e.mediaInteaction.apply(e, arguments), c.apply(void 0, arguments)
                }, t.styleSheetRuleCb = function() {
                    e.styleSheetRule && e.styleSheetRule.apply(e, arguments), u.apply(void 0, arguments)
                }, t.styleDeclarationCb = function() {
                    e.styleDeclaration && e.styleDeclaration.apply(e, arguments), l.apply(void 0, arguments)
                }, t.canvasMutationCb = function() {
                    e.canvasMutation && e.canvasMutation.apply(e, arguments), d.apply(void 0, arguments)
                }, t.fontCb = function() {
                    e.font && e.font.apply(e, arguments), f.apply(void 0, arguments)
                }
            }

            function Jo(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.doc.defaultView;
                if (!n) return function() {};
                Vo(t, e);
                var r, a = Po(t, t.doc),
                    i = Do(t),
                    o = Mo(t),
                    s = No(t),
                    c = Lo(t),
                    u = Bo(t),
                    l = Wo(t),
                    d = Ho(t, {
                        win: n
                    }),
                    f = qo(t, {
                        win: n
                    }),
                    p = t.collectFonts ? Go(t) : function() {},
                    h = [],
                    m = pi(t.plugins);
                try {
                    for (m.s(); !(r = m.n()).done;) {
                        var v = r.value;
                        h.push(v.observer(v.callback, n, v.options))
                    }
                } catch (y) {
                    m.e(y)
                } finally {
                    m.f()
                }
                return Ro((function() {
                    Io.forEach((function(t) {
                        return t.reset()
                    })), a.disconnect(), i(), o(), s(), c(), u(), l();
                    try {
                        d(), f()
                    } catch (t) {}
                    p(), h.forEach((function(t) {
                        return t()
                    }))
                }))
            }

            function Yo(t) {
                return "undefined" !== typeof window[t]
            }

            function $o(t) {
                return Boolean("undefined" !== typeof window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
            }
            var Ko = function() {
                    function t(e) {
                        (0, s.Z)(this, t), this.iframes = new WeakMap, this.mutationCb = e.mutationCb
                    }
                    return (0, c.Z)(t, [{
                        key: "addIframe",
                        value: function(t) {
                            this.iframes.set(t, !0)
                        }
                    }, {
                        key: "addLoadListener",
                        value: function(t) {
                            this.loadListener = t
                        }
                    }, {
                        key: "attachIframe",
                        value: function(t, e) {
                            var n;
                            this.mutationCb({
                                adds: [{
                                    parentId: t.__sn.id,
                                    nextId: null,
                                    node: e
                                }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }), null === (n = this.loadListener) || void 0 === n || n.call(this, t)
                        }
                    }]), t
                }(),
                Xo = function() {
                    function t(e) {
                        (0, s.Z)(this, t), this.restorePatches = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror;
                        var n = this;
                        this.restorePatches.push(fo(HTMLElement.prototype, "attachShadow", (function(t) {
                            return function() {
                                var e = t.apply(this, arguments);
                                return this.shadowRoot && n.addShadowRoot(this.shadowRoot, this.ownerDocument), e
                            }
                        })))
                    }
                    return (0, c.Z)(t, [{
                        key: "addShadowRoot",
                        value: function(t, e) {
                            Po(Object.assign(Object.assign({}, this.bypassOptions), {
                                doc: e,
                                mutationCb: this.mutationCb,
                                mirror: this.mirror,
                                shadowDomManager: this
                            }), t), No(Object.assign(Object.assign({}, this.bypassOptions), {
                                scrollCb: this.scrollCb,
                                doc: t,
                                mirror: this.mirror
                            }))
                        }
                    }, {
                        key: "observeAttachShadow",
                        value: function(t) {
                            if (t.contentWindow) {
                                var e = this;
                                this.restorePatches.push(fo(t.contentWindow.HTMLElement.prototype, "attachShadow", (function(n) {
                                    return function() {
                                        var r = n.apply(this, arguments);
                                        return this.shadowRoot && e.addShadowRoot(this.shadowRoot, t.contentDocument), r
                                    }
                                })))
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.restorePatches.forEach((function(t) {
                                return t()
                            }))
                        }
                    }]), t
                }();
            for (var Qo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ts = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), es = 0; es < Qo.length; es++) ts[Qo.charCodeAt(es)] = es;
            var ns = new Map;
            var rs = function(t, e, n) {
                if (t && (os(t, e) || "object" === typeof t)) {
                    var r = function(t, e) {
                            var n = ns.get(t);
                            return n || (n = new Map, ns.set(t, n)), n.has(e) || n.set(e, []), n.get(e)
                        }(n, t.constructor.name),
                        a = r.indexOf(t);
                    return -1 === a && (a = r.length, r.push(t)), a
                }
            };

            function as(t, e, n) {
                if (t instanceof Array) return t.map((function(t) {
                    return as(t, e, n)
                }));
                if (null === t) return t;
                if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray) return {
                    rr_type: t.constructor.name,
                    args: [Object.values(t)]
                };
                if (t instanceof ArrayBuffer) {
                    var r = t.constructor.name,
                        a = function(t) {
                            var e, n = new Uint8Array(t),
                                r = n.length,
                                a = "";
                            for (e = 0; e < r; e += 3) a += Qo[n[e] >> 2], a += Qo[(3 & n[e]) << 4 | n[e + 1] >> 4], a += Qo[(15 & n[e + 1]) << 2 | n[e + 2] >> 6], a += Qo[63 & n[e + 2]];
                            return r % 3 === 2 ? a = a.substring(0, a.length - 1) + "=" : r % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="), a
                        }(t);
                    return {
                        rr_type: r,
                        base64: a
                    }
                }
                return t instanceof DataView ? {
                    rr_type: t.constructor.name,
                    args: [as(t.buffer, e, n), t.byteOffset, t.byteLength]
                } : t instanceof HTMLImageElement ? {
                    rr_type: t.constructor.name,
                    src: t.src
                } : t instanceof ImageData ? {
                    rr_type: t.constructor.name,
                    args: [as(t.data, e, n), t.width, t.height]
                } : os(t, e) || "object" === typeof t ? {
                    rr_type: t.constructor.name,
                    index: rs(t, e, n)
                } : t
            }
            var is = function(t, e, n) {
                    return (0, r.Z)(t).map((function(t) {
                        return as(t, e, n)
                    }))
                },
                os = function(t, e) {
                    var n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((function(t) {
                        return "function" === typeof e[t]
                    }));
                    return Boolean(n.find((function(n) {
                        return t instanceof e[n]
                    })))
                };

            function ss(t, e, n, r, a, i, o, s) {
                var c, u = [],
                    l = pi(Object.getOwnPropertyNames(t));
                try {
                    var d = function() {
                        var l = c.value;
                        try {
                            if ("function" !== typeof t[l]) return "continue";
                            var d = fo(t, l, (function(c) {
                                return function() {
                                    for (var u = arguments.length, d = new Array(u), f = 0; f < u; f++) d[f] = arguments[f];
                                    var p = c.apply(this, d);
                                    if (rs(p, s, t), !mo(this.canvas, r, i, a)) {
                                        o.getId(this.canvas);
                                        var h = is([].concat(d), s, t),
                                            m = {
                                                type: e,
                                                property: l,
                                                args: h
                                            };
                                        n(this.canvas, m)
                                    }
                                    return p
                                }
                            }));
                            u.push(d)
                        } catch (p) {
                            var f = lo(t, l, {
                                set: function(t) {
                                    n(this.canvas, {
                                        type: e,
                                        property: l,
                                        args: [t],
                                        setter: !0
                                    })
                                }
                            });
                            u.push(f)
                        }
                    };
                    for (l.s(); !(c = l.n()).done;) d()
                } catch (f) {
                    l.e(f)
                } finally {
                    l.f()
                }
                return u
            }
            var cs, us, ls = function() {
                function t(e) {
                    (0, s.Z)(this, t), this.pendingCanvasMutations = new Map, this.rafStamps = {
                        latestId: 0,
                        invokeId: null
                    }, this.frozen = !1, this.locked = !1, this.processMutation = function(t, e) {
                        !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(t) || this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e)
                    }, this.mutationCb = e.mutationCb, this.mirror = e.mirror, !0 === e.recordCanvas && this.initCanvasMutationObserver(e.win, e.blockClass, e.blockSelector, e.unblockSelector)
                }
                return (0, c.Z)(t, [{
                    key: "reset",
                    value: function() {
                        this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
                    }
                }, {
                    key: "freeze",
                    value: function() {
                        this.frozen = !0
                    }
                }, {
                    key: "unfreeze",
                    value: function() {
                        this.frozen = !1
                    }
                }, {
                    key: "lock",
                    value: function() {
                        this.locked = !0
                    }
                }, {
                    key: "unlock",
                    value: function() {
                        this.locked = !1
                    }
                }, {
                    key: "initCanvasMutationObserver",
                    value: function(t, e, n, a) {
                        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                        var i = function(t, e, n, r) {
                                var a = [];
                                try {
                                    var i = fo(t.HTMLCanvasElement.prototype, "getContext", (function(t) {
                                        return function(a) {
                                            mo(this, e, n, r) || "__context" in this || (this.__context = a);
                                            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
                                            return t.apply(this, [a].concat(o))
                                        }
                                    }));
                                    a.push(i)
                                } catch (o) {
                                    console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                                }
                                return function() {
                                    a.forEach((function(t) {
                                        return t()
                                    }))
                                }
                            }(t, e, a, n),
                            o = function(t, e, n, r, a, i) {
                                var o, s = [],
                                    c = pi(Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype));
                                try {
                                    var u = function() {
                                        var i = o.value;
                                        try {
                                            if ("function" !== typeof e.CanvasRenderingContext2D.prototype[i]) return "continue";
                                            var c = fo(e.CanvasRenderingContext2D.prototype, i, (function(e) {
                                                return function() {
                                                    for (var o = this, s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
                                                    return mo(this.canvas, n, a, r) || setTimeout((function() {
                                                        var e = [].concat(c);
                                                        if ("drawImage" === i && e[0] && e[0] instanceof HTMLCanvasElement) {
                                                            var n = e[0],
                                                                r = n.getContext("2d"),
                                                                a = null === r || void 0 === r ? void 0 : r.getImageData(0, 0, n.width, n.height),
                                                                s = null === a || void 0 === a ? void 0 : a.data;
                                                            e[0] = JSON.stringify(s)
                                                        }
                                                        t(o.canvas, {
                                                            type: Wi["2D"],
                                                            property: i,
                                                            args: e
                                                        })
                                                    }), 0), e.apply(this, c)
                                                }
                                            }));
                                            s.push(c)
                                        } catch (l) {
                                            var u = lo(e.CanvasRenderingContext2D.prototype, i, {
                                                set: function(e) {
                                                    t(this.canvas, {
                                                        type: Wi["2D"],
                                                        property: i,
                                                        args: [e],
                                                        setter: !0
                                                    })
                                                }
                                            });
                                            s.push(u)
                                        }
                                    };
                                    for (c.s(); !(o = c.n()).done;) u()
                                } catch (l) {
                                    c.e(l)
                                } finally {
                                    c.f()
                                }
                                return function() {
                                    s.forEach((function(t) {
                                        return t()
                                    }))
                                }
                            }(this.processMutation.bind(this), t, e, a, n, this.mirror),
                            s = function(t, e, n, a, i, o) {
                                var s = [];
                                return s.push.apply(s, (0, r.Z)(ss(e.WebGLRenderingContext.prototype, Wi.WebGL, t, n, a, i, o, e))), "undefined" !== typeof e.WebGL2RenderingContext && s.push.apply(s, (0, r.Z)(ss(e.WebGL2RenderingContext.prototype, Wi.WebGL2, t, n, a, i, o, e))),
                                    function() {
                                        s.forEach((function(t) {
                                            return t()
                                        }))
                                    }
                            }(this.processMutation.bind(this), t, e, a, n, this.mirror);
                        this.resetObservers = function() {
                            i(), o(), s()
                        }
                    }
                }, {
                    key: "startPendingCanvasMutationFlusher",
                    value: function() {
                        var t = this;
                        requestAnimationFrame((function() {
                            return t.flushPendingCanvasMutations()
                        }))
                    }
                }, {
                    key: "startRAFTimestamping",
                    value: function() {
                        var t = this;
                        requestAnimationFrame((function e(n) {
                            t.rafStamps.latestId = n, requestAnimationFrame(e)
                        }))
                    }
                }, {
                    key: "flushPendingCanvasMutations",
                    value: function() {
                        var t = this;
                        this.pendingCanvasMutations.forEach((function(e, n) {
                            var r = t.mirror.getId(n);
                            t.flushPendingCanvasMutationFor(n, r)
                        })), requestAnimationFrame((function() {
                            return t.flushPendingCanvasMutations()
                        }))
                    }
                }, {
                    key: "flushPendingCanvasMutationFor",
                    value: function(t, e) {
                        if (!this.frozen && !this.locked) {
                            var n = this.pendingCanvasMutations.get(t);
                            if (n && -1 !== e) {
                                var r = n.map((function(t) {
                                        var e = function(t, e) {
                                            var n = {};
                                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                                            if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                                                var a = 0;
                                                for (r = Object.getOwnPropertySymbols(t); a < r.length; a++) e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]])
                                            }
                                            return n
                                        }(t, ["type"]);
                                        return e
                                    })),
                                    a = n[0].type;
                                this.mutationCb({
                                    id: e,
                                    type: a,
                                    commands: r
                                }), this.pendingCanvasMutations.delete(t)
                            }
                        }
                    }
                }]), t
            }();

            function ds(t) {
                return Object.assign(Object.assign({}, t), {
                    timestamp: Date.now()
                })
            }
            var fs = {
                map: {},
                getId: function(t) {
                    return t && t.__sn ? t.__sn.id : -1
                },
                getNode: function(t) {
                    return this.map[t] || null
                },
                removeNodeFromMap: function(t) {
                    var e = this,
                        n = t.__sn && t.__sn.id;
                    delete this.map[n], t.childNodes && t.childNodes.forEach((function(t) {
                        return e.removeNodeFromMap(t)
                    }))
                },
                has: function(t) {
                    return this.map.hasOwnProperty(t)
                },
                reset: function() {
                    this.map = {}
                }
            };

            function ps() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.emit,
                    n = t.checkoutEveryNms,
                    r = t.checkoutEveryNth,
                    a = t.blockClass,
                    i = void 0 === a ? "rr-block" : a,
                    o = t.blockSelector,
                    s = void 0 === o ? null : o,
                    c = t.unblockSelector,
                    u = void 0 === c ? null : c,
                    l = t.ignoreClass,
                    d = void 0 === l ? "rr-ignore" : l,
                    f = t.ignoreSelector,
                    p = void 0 === f ? null : f,
                    h = t.maskTextClass,
                    m = void 0 === h ? "rr-mask" : h,
                    v = t.maskTextSelector,
                    y = void 0 === v ? null : v,
                    g = t.maskInputSelector,
                    b = void 0 === g ? null : g,
                    w = t.unmaskTextSelector,
                    k = void 0 === w ? null : w,
                    S = t.unmaskInputSelector,
                    x = void 0 === S ? null : S,
                    O = t.inlineStylesheet,
                    E = void 0 === O || O,
                    j = t.maskAllText,
                    T = void 0 !== j && j,
                    C = t.maskAllInputs,
                    R = t.maskInputOptions,
                    I = t.slimDOMOptions,
                    A = t.maskInputFn,
                    P = t.maskTextFn,
                    D = t.hooks,
                    M = t.packFn,
                    N = t.sampling,
                    L = void 0 === N ? {} : N,
                    z = t.mousemoveWait,
                    Z = t.recordCanvas,
                    F = void 0 !== Z && Z,
                    B = t.userTriggeredOnInput,
                    U = void 0 !== B && B,
                    H = t.collectFonts,
                    q = void 0 !== H && H,
                    W = t.inlineImages,
                    G = void 0 !== W && W,
                    V = t.plugins,
                    J = t.keepIframeSrcFn,
                    Y = void 0 === J ? function() {
                        return !1
                    } : J,
                    $ = t.onMutation;
                if (!e) throw new Error("emit function is required");
                void 0 !== z && void 0 === L.mousemove && (L.mousemove = z);
                var K, X = !0 === C ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        radio: !0,
                        checkbox: !0
                    } : void 0 !== R ? R : {},
                    Q = !0 === I || "all" === I ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === I,
                        headMetaDescKeywords: "all" === I
                    } : I || {};
                _o();
                var tt = 0,
                    et = function(t) {
                        var e, n = pi(V || []);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var r = e.value;
                                r.eventProcessor && (t = r.eventProcessor(t))
                            }
                        } catch (a) {
                            n.e(a)
                        } finally {
                            n.f()
                        }
                        return M && (t = M(t)), t
                    };
                cs = function(t, a) {
                    var i;
                    if (!(null === (i = Io[0]) || void 0 === i ? void 0 : i.isFrozen()) || t.type === Ui.FullSnapshot || t.type === Ui.IncrementalSnapshot && t.data.source === Hi.Mutation || Io.forEach((function(t) {
                            return t.unfreeze()
                        })), e(et(t), a), t.type === Ui.FullSnapshot) K = t, tt = 0;
                    else if (t.type === Ui.IncrementalSnapshot) {
                        if (t.data.source === Hi.Mutation && t.data.isAttachIframe) return;
                        tt++;
                        var o = r && tt >= r,
                            s = n && t.timestamp - K.timestamp > n;
                        (o || s) && us(!0)
                    }
                };
                var nt = function(t) {
                        cs(ds({
                            type: Ui.IncrementalSnapshot,
                            data: Object.assign({
                                source: Hi.Mutation
                            }, t)
                        }))
                    },
                    rt = function(t) {
                        return cs(ds({
                            type: Ui.IncrementalSnapshot,
                            data: Object.assign({
                                source: Hi.Scroll
                            }, t)
                        }))
                    },
                    at = function(t) {
                        return cs(ds({
                            type: Ui.IncrementalSnapshot,
                            data: Object.assign({
                                source: Hi.CanvasMutation
                            }, t)
                        }))
                    },
                    it = new Ko({
                        mutationCb: nt
                    }),
                    ot = new ls({
                        recordCanvas: F,
                        mutationCb: at,
                        win: window,
                        blockClass: i,
                        blockSelector: s,
                        unblockSelector: u,
                        mirror: fs
                    }),
                    st = new Xo({
                        mutationCb: nt,
                        scrollCb: rt,
                        bypassOptions: {
                            onMutation: $,
                            blockClass: i,
                            blockSelector: s,
                            unblockSelector: u,
                            maskTextClass: m,
                            maskTextSelector: y,
                            unmaskTextSelector: k,
                            maskInputSelector: b,
                            unmaskInputSelector: x,
                            inlineStylesheet: E,
                            maskAllText: T,
                            maskInputOptions: X,
                            maskTextFn: P,
                            maskInputFn: A,
                            recordCanvas: F,
                            inlineImages: G,
                            sampling: L,
                            slimDOMOptions: Q,
                            iframeManager: it,
                            canvasManager: ot
                        },
                        mirror: fs
                    });
                us = function() {
                    var t, e, n, r, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    cs(ds({
                        type: Ui.Meta,
                        data: {
                            href: window.location.href,
                            width: ho(),
                            height: po()
                        }
                    }), a), Io.forEach((function(t) {
                        return t.lock()
                    }));
                    var o = ao(document, {
                            blockClass: i,
                            blockSelector: s,
                            unblockSelector: u,
                            maskTextClass: m,
                            maskTextSelector: y,
                            unmaskTextSelector: k,
                            maskInputSelector: b,
                            unmaskInputSelector: x,
                            inlineStylesheet: E,
                            maskAllText: T,
                            maskAllInputs: X,
                            maskTextFn: P,
                            slimDOM: Q,
                            recordCanvas: F,
                            inlineImages: G,
                            onSerialize: function(t) {
                                bo(t) && it.addIframe(t), wo(t) && st.addShadowRoot(t.shadowRoot, document)
                            },
                            onIframeLoad: function(t, e) {
                                it.attachIframe(t, e), st.observeAttachShadow(t)
                            },
                            keepIframeSrcFn: Y
                        }),
                        c = _(o, 2),
                        l = c[0],
                        d = c[1];
                    if (!l) return console.warn("Failed to snapshot the document");
                    fs.map = d, cs(ds({
                        type: Ui.FullSnapshot,
                        data: {
                            node: l,
                            initialOffset: {
                                left: void 0 !== window.pageXOffset ? window.pageXOffset : (null === document || void 0 === document ? void 0 : document.documentElement.scrollLeft) || (null === (e = null === (t = null === document || void 0 === document ? void 0 : document.body) || void 0 === t ? void 0 : t.parentElement) || void 0 === e ? void 0 : e.scrollLeft) || (null === document || void 0 === document ? void 0 : document.body.scrollLeft) || 0,
                                top: void 0 !== window.pageYOffset ? window.pageYOffset : (null === document || void 0 === document ? void 0 : document.documentElement.scrollTop) || (null === (r = null === (n = null === document || void 0 === document ? void 0 : document.body) || void 0 === n ? void 0 : n.parentElement) || void 0 === r ? void 0 : r.scrollTop) || (null === document || void 0 === document ? void 0 : document.body.scrollTop) || 0
                            }
                        }
                    })), Io.forEach((function(t) {
                        return t.unlock()
                    }))
                };
                try {
                    var ct = [];
                    ct.push(oo("DOMContentLoaded", (function() {
                        cs(ds({
                            type: Ui.DomContentLoaded,
                            data: {}
                        }))
                    })));
                    var ut = function(t) {
                        var e;
                        return Ro(Jo)({
                            onMutation: $,
                            mutationCb: nt,
                            mousemoveCb: function(t, e) {
                                return cs(ds({
                                    type: Ui.IncrementalSnapshot,
                                    data: {
                                        source: e,
                                        positions: t
                                    }
                                }))
                            },
                            mouseInteractionCb: function(t) {
                                return cs(ds({
                                    type: Ui.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: Hi.MouseInteraction
                                    }, t)
                                }))
                            },
                            scrollCb: rt,
                            viewportResizeCb: function(t) {
                                return cs(ds({
                                    type: Ui.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: Hi.ViewportResize
                                    }, t)
                                }))
                            },
                            inputCb: function(t) {
                                return cs(ds({
                                    type: Ui.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: Hi.Input
                                    }, t)
                                }))
                            },
                            mediaInteractionCb: function(t) {
                                return cs(ds({
                                    type: Ui.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: Hi.MediaInteraction
                                    }, t)
                                }))
                            },
                            styleSheetRuleCb: function(t) {
                                return cs(ds({
                                    type: Ui.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: Hi.StyleSheetRule
                                    }, t)
                                }))
                            },
                            styleDeclarationCb: function(t) {
                                return cs(ds({
                                    type: Ui.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: Hi.StyleDeclaration
                                    }, t)
                                }))
                            },
                            canvasMutationCb: at,
                            fontCb: function(t) {
                                return cs(ds({
                                    type: Ui.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: Hi.Font
                                    }, t)
                                }))
                            },
                            blockClass: i,
                            ignoreClass: d,
                            ignoreSelector: p,
                            maskTextClass: m,
                            maskTextSelector: y,
                            unmaskTextSelector: k,
                            maskInputSelector: b,
                            unmaskInputSelector: x,
                            maskInputOptions: X,
                            inlineStylesheet: E,
                            sampling: L,
                            recordCanvas: F,
                            inlineImages: G,
                            userTriggeredOnInput: U,
                            collectFonts: q,
                            doc: t,
                            maskAllText: T,
                            maskInputFn: A,
                            maskTextFn: P,
                            blockSelector: s,
                            unblockSelector: u,
                            slimDOMOptions: Q,
                            mirror: fs,
                            iframeManager: it,
                            shadowDomManager: st,
                            canvasManager: ot,
                            plugins: (null === (e = null === V || void 0 === V ? void 0 : V.filter((function(t) {
                                return t.observer
                            }))) || void 0 === e ? void 0 : e.map((function(t) {
                                return {
                                    observer: t.observer,
                                    options: t.options,
                                    callback: function(e) {
                                        return cs(ds({
                                            type: Ui.Plugin,
                                            data: {
                                                plugin: t.name,
                                                payload: e
                                            }
                                        }))
                                    }
                                }
                            }))) || []
                        }, D)
                    };
                    it.addLoadListener((function(t) {
                        try {
                            ct.push(ut(t.contentDocument))
                        } catch (e) {
                            console.warn(e)
                        }
                    }));
                    var lt = function() {
                        us(), ct.push(ut(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? lt() : ct.push(oo("load", (function() {
                            cs(ds({
                                type: Ui.Load,
                                data: {}
                            })), lt()
                        }), window)),
                        function() {
                            ct.forEach((function(t) {
                                return t()
                            }))
                        }
                } catch (dt) {
                    console.warn(dt)
                }
            }

            function hs(t) {
                return t > 9999999999 ? t : 1e3 * t
            }

            function ms(t, e) {
                "sentry.transaction" !== e.category && (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate((function() {
                    return t.throttledAddEvent({
                        type: Ui.Custom,
                        timestamp: 1e3 * (e.timestamp || 0),
                        data: {
                            tag: "breadcrumb",
                            payload: Ct(e, 10, 1e3)
                        }
                    }), "console" === e.category
                })))
            }
            ps.addCustomEvent = function(t, e) {
                if (!cs) throw new Error("please add custom event after start recording");
                cs(ds({
                    type: Ui.Custom,
                    data: {
                        tag: t,
                        payload: e
                    }
                }))
            }, ps.freezePage = function() {
                Io.forEach((function(t) {
                    return t.freeze()
                }))
            }, ps.takeFullSnapshot = function(t) {
                if (!us) throw new Error("please take full snapshot after start recording");
                us(t)
            }, ps.mirror = fs;
            var vs;

            function ys(t) {
                var e = gs(t);
                return e && e instanceof Element && e.closest("button,a") || e
            }

            function gs(t) {
                return function(t) {
                    return "object" === typeof t && !!t && "target" in t
                }(t) ? t.target : t
            }

            function _s(t) {
                return vs || (vs = [], (0, A.hl)(vi, "open", (function(t) {
                        return function() {
                            if (vs) try {
                                vs.forEach((function(t) {
                                    return t()
                                }))
                            } catch (a) {}
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            return t.apply(vi, n)
                        }
                    }))), vs.push(t),
                    function() {
                        var e = vs ? vs.indexOf(t) : -1;
                        e > -1 && vs.splice(e, 1)
                    }
            }
            var bs, ws = function() {
                    function t(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ms;
                        (0, s.Z)(this, t), this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = n.timeout / 1e3, this._threshold = n.threshold / 1e3, this._scollTimeout = n.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = n.ignoreSelector, this._addBreadcrumbEvent = r
                    }
                    return (0, c.Z)(t, [{
                        key: "addListeners",
                        value: function() {
                            var t = this,
                                e = function() {
                                    t._lastScroll = Ss()
                                },
                                n = _s((function() {
                                    t._lastMutation = Ss()
                                })),
                                r = function(e) {
                                    if (e.target) {
                                        var n = ys(e);
                                        n && t._handleMultiClick(n)
                                    }
                                },
                                a = new MutationObserver((function() {
                                    t._lastMutation = Ss()
                                }));
                            a.observe(vi.document.documentElement, {
                                attributes: !0,
                                characterData: !0,
                                childList: !0,
                                subtree: !0
                            }), vi.addEventListener("scroll", e, {
                                passive: !0
                            }), vi.addEventListener("click", r, {
                                passive: !0
                            }), this._teardown = function() {
                                vi.removeEventListener("scroll", e), vi.removeEventListener("click", r), n(), a.disconnect(), t._clicks = [], t._lastMutation = 0, t._lastScroll = 0
                            }
                        }
                    }, {
                        key: "removeListeners",
                        value: function() {
                            this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
                        }
                    }, {
                        key: "handleClick",
                        value: function(t, e) {
                            if (! function(t, e) {
                                    if (!ks.includes(t.tagName)) return !0;
                                    if ("INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "")) return !0;
                                    if ("A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target"))) return !0;
                                    if (e && t.matches(e)) return !0;
                                    return !1
                                }(e, this._ignoreSelector) && function(t) {
                                    return !(!t.data || "number" !== typeof t.data.nodeId || !t.timestamp)
                                }(t)) {
                                var n, r = {
                                    timestamp: (n = t.timestamp, n > 9999999999 ? n / 1e3 : n),
                                    clickBreadcrumb: t,
                                    clickCount: 0,
                                    node: e
                                };
                                this._clicks.some((function(t) {
                                    return t.node === r.node && Math.abs(t.timestamp - r.timestamp) < 1
                                })) || (this._clicks.push(r), 1 === this._clicks.length && this._scheduleCheckClicks())
                            }
                        }
                    }, {
                        key: "_handleMultiClick",
                        value: function(t) {
                            this._getClicks(t).forEach((function(t) {
                                t.clickCount++
                            }))
                        }
                    }, {
                        key: "_getClicks",
                        value: function(t) {
                            return this._clicks.filter((function(e) {
                                return e.node === t
                            }))
                        }
                    }, {
                        key: "_checkClicks",
                        value: function() {
                            var t = this,
                                e = [],
                                n = Ss();
                            this._clicks.forEach((function(r) {
                                !r.mutationAfter && t._lastMutation && (r.mutationAfter = r.timestamp <= t._lastMutation ? t._lastMutation - r.timestamp : void 0), !r.scrollAfter && t._lastScroll && (r.scrollAfter = r.timestamp <= t._lastScroll ? t._lastScroll - r.timestamp : void 0), r.timestamp + t._timeout <= n && e.push(r)
                            }));
                            for (var r = 0, a = e; r < a.length; r++) {
                                var i = a[r],
                                    o = this._clicks.indexOf(i);
                                o > -1 && (this._generateBreadcrumbs(i), this._clicks.splice(o, 1))
                            }
                            this._clicks.length && this._scheduleCheckClicks()
                        }
                    }, {
                        key: "_generateBreadcrumbs",
                        value: function(t) {
                            var e = this._replay,
                                n = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
                                r = t.mutationAfter && t.mutationAfter <= this._threshold,
                                a = !n && !r,
                                i = t.clickCount,
                                o = t.clickBreadcrumb;
                            if (a) {
                                var s = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
                                    c = s < 1e3 * this._timeout ? "mutation" : "timeout",
                                    u = {
                                        type: "default",
                                        message: o.message,
                                        timestamp: o.timestamp,
                                        category: "ui.slowClickDetected",
                                        data: fi(fi({}, o.data), {}, {
                                            url: vi.location.href,
                                            route: e.getCurrentRoute(),
                                            timeAfterClickMs: s,
                                            endReason: c,
                                            clickCount: i || 1
                                        })
                                    };
                                this._addBreadcrumbEvent(e, u)
                            } else if (i > 1) {
                                var l = {
                                    type: "default",
                                    message: o.message,
                                    timestamp: o.timestamp,
                                    category: "ui.multiClick",
                                    data: fi(fi({}, o.data), {}, {
                                        url: vi.location.href,
                                        route: e.getCurrentRoute(),
                                        clickCount: i,
                                        metric: !0
                                    })
                                };
                                this._addBreadcrumbEvent(e, l)
                            }
                        }
                    }, {
                        key: "_scheduleCheckClicks",
                        value: function() {
                            var t = this;
                            this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout((function() {
                                return t._checkClicks()
                            }), 1e3)
                        }
                    }]), t
                }(),
                ks = ["A", "BUTTON", "INPUT"];

            function Ss() {
                return Date.now() / 1e3
            }

            function xs(t) {
                return fi({
                    timestamp: Date.now() / 1e3,
                    type: "default"
                }, t)
            }! function(t) {
                t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment"
            }(bs || (bs = {}));
            var Os = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled"]);

            function Es(t) {
                var e = {};
                for (var n in t)
                    if (Os.has(n)) {
                        var r = n;
                        "data-testid" !== n && "data-test-id" !== n || (r = "testId"), e[r] = t[n]
                    }
                return e
            }
            var js = function(t) {
                return function(e) {
                    if (t.isEnabled()) {
                        var n = function(t) {
                            var e = function(t) {
                                    var e, n = "click" === t.name,
                                        r = null;
                                    try {
                                        r = n ? ys(t.event) : gs(t.event), e = (0, He.Rt)(r, {
                                            maxStringLength: 200
                                        }) || "<unknown>"
                                    } catch (a) {
                                        e = "<unknown>"
                                    }
                                    return {
                                        target: r,
                                        message: e
                                    }
                                }(t),
                                n = e.target,
                                r = e.message;
                            return xs(fi({
                                category: "ui.".concat(t.name)
                            }, Ts(n, r)))
                        }(e);
                        if (n) {
                            var r = "click" === e.name,
                                a = r && e.event;
                            !(r && t.clickDetector && a) || a.altKey || a.metaKey || a.ctrlKey || a.shiftKey || function(t, e, n) {
                                t.handleClick(e, n)
                            }(t.clickDetector, n, ys(e.event)), ms(t, n)
                        }
                    }
                }
            };

            function Ts(t, e) {
                var n = t && function(t) {
                    return "__sn" in t
                }(t) && t.__sn.type === bs.Element ? t.__sn : null;
                return {
                    message: e,
                    data: n ? {
                        nodeId: n.id,
                        node: {
                            id: n.id,
                            tagName: n.tagName,
                            textContent: t ? Array.from(t.childNodes).map((function(t) {
                                return "__sn" in t && t.__sn.type === bs.Text && t.__sn.textContent
                            })).filter(Boolean).map((function(t) {
                                return t.trim()
                            })).join("") : "",
                            attributes: Es(n.attributes)
                        }
                    } : {}
                }
            }

            function Cs(t, e) {
                if (t.isEnabled()) {
                    t.updateUserActivity();
                    var n = function(t) {
                        var e = t.metaKey,
                            n = t.shiftKey,
                            r = t.ctrlKey,
                            a = t.altKey,
                            i = t.key,
                            o = t.target;
                        if (!o || function(t) {
                                return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
                            }(o) || !i) return null;
                        var s = e || r || a,
                            c = 1 === i.length;
                        if (!s && c) return null;
                        var u = (0, He.Rt)(o, {
                                maxStringLength: 200
                            }) || "<unknown>",
                            l = Ts(o, u);
                        return xs({
                            category: "ui.keyDown",
                            message: u,
                            data: fi(fi({}, l.data), {}, {
                                metaKey: e,
                                shiftKey: n,
                                ctrlKey: r,
                                altKey: a,
                                key: i
                            })
                        })
                    }(e);
                    n && ms(t, n)
                }
            }
            var Rs = ["name", "type", "startTime", "transferSize", "duration"];

            function Is(t) {
                return function(e) {
                    return Rs.every((function(n) {
                        return t[n] === e[n]
                    }))
                }
            }

            function As(t) {
                var e = new PerformanceObserver((function(e) {
                    var n = function(t, e) {
                        var n = _(t.reduce((function(t, e) {
                                return "navigation" === e.entryType ? t[0].push(e) : "largest-contentful-paint" === e.entryType ? t[1].push(e) : t[2].push(e), t
                            }), [
                                [],
                                [],
                                []
                            ]), 3),
                            a = n[0],
                            i = n[1],
                            o = n[2],
                            s = [],
                            c = [],
                            u = i.length ? i[i.length - 1] : void 0;
                        return e.forEach((function(t) {
                            if ("largest-contentful-paint" !== t.entryType)
                                if ("navigation" !== t.entryType) s.push(t);
                                else {
                                    var e = t;
                                    t.duration > 0 && !a.find(Is(e)) && !c.find(Is(e)) && c.push(e)
                                }
                            else(!u || u.startTime < t.startTime) && (u = t)
                        })), [].concat((0, r.Z)(u ? [u] : []), (0, r.Z)(a), (0, r.Z)(o), s, c).sort((function(t, e) {
                            return t.startTime - e.startTime
                        }))
                    }(t.performanceEvents, e.getEntries());
                    t.performanceEvents = n
                }));
                return ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "navigation", "paint", "resource"].forEach((function(t) {
                    try {
                        e.observe({
                            type: t,
                            buffered: !0
                        })
                    } catch (n) {}
                })), e
            }
            var Ps = function(t) {
                    (0, wt.Z)(n, t);
                    var e = li(n);

                    function n() {
                        return (0, s.Z)(this, n), e.call(this, "Event buffer exceeded maximum size of ".concat(Si, "."))
                    }
                    return n
                }(Xt(Error)),
                Ds = function() {
                    function t() {
                        (0, s.Z)(this, t), this.events = [], this._totalSize = 0, this.hasCheckout = !1
                    }
                    return (0, c.Z)(t, [{
                        key: "hasEvents",
                        get: function() {
                            return this.events.length > 0
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return "sync"
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.events = []
                        }
                    }, {
                        key: "addEvent",
                        value: function() {
                            var t = (0, ii.Z)(si().mark((function t(e) {
                                var n;
                                return si().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (n = JSON.stringify(e).length, this._totalSize += n, !(this._totalSize > Si)) {
                                                t.next = 4;
                                                break
                                            }
                                            throw new Ps;
                                        case 4:
                                            this.events.push(e);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "finish",
                        value: function() {
                            var t = this;
                            return new Promise((function(e) {
                                var n = t.events;
                                t.clear(), e(JSON.stringify(n))
                            }))
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.events = [], this._totalSize = 0, this.hasCheckout = !1
                        }
                    }, {
                        key: "getEarliestTimestamp",
                        value: function() {
                            var t = this.events.map((function(t) {
                                return t.timestamp
                            })).sort()[0];
                            return t ? hs(t) : null
                        }
                    }]), t
                }(),
                Ms = function() {
                    function t(e) {
                        (0, s.Z)(this, t), this._worker = e, this._id = 0
                    }
                    return (0, c.Z)(t, [{
                        key: "ensureReady",
                        value: function() {
                            var t = this;
                            return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((function(e, n) {
                                t._worker.addEventListener("message", (function(t) {
                                    t.data.success ? e() : n()
                                }), {
                                    once: !0
                                }), t._worker.addEventListener("error", (function(t) {
                                    n(t)
                                }), {
                                    once: !0
                                })
                            }))), this._ensureReadyPromise
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._worker.terminate()
                        }
                    }, {
                        key: "postMessage",
                        value: function(t, e) {
                            var n = this,
                                r = this._getAndIncrementId();
                            return new Promise((function(a, i) {
                                n._worker.addEventListener("message", (function e(o) {
                                    var s = o.data;
                                    s.method === t && s.id === r && (n._worker.removeEventListener("message", e), s.success ? a(s.response) : i(new Error("Error in compression worker")))
                                })), n._worker.postMessage({
                                    id: r,
                                    method: t,
                                    arg: e
                                })
                            }))
                        }
                    }, {
                        key: "_getAndIncrementId",
                        value: function() {
                            return this._id++
                        }
                    }]), t
                }(),
                Ns = function() {
                    function t(e) {
                        (0, s.Z)(this, t), this._worker = new Ms(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1
                    }
                    return (0, c.Z)(t, [{
                        key: "hasEvents",
                        get: function() {
                            return !!this._earliestTimestamp
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return "worker"
                        }
                    }, {
                        key: "ensureReady",
                        value: function() {
                            return this._worker.ensureReady()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._worker.destroy()
                        }
                    }, {
                        key: "addEvent",
                        value: function(t) {
                            var e = hs(t.timestamp);
                            (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
                            var n = JSON.stringify(t);
                            return this._totalSize += n.length, this._totalSize > Si ? Promise.reject(new Ps) : this._sendEventToWorker(n)
                        }
                    }, {
                        key: "finish",
                        value: function() {
                            return this._finishRequest()
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear")
                        }
                    }, {
                        key: "getEarliestTimestamp",
                        value: function() {
                            return this._earliestTimestamp
                        }
                    }, {
                        key: "_sendEventToWorker",
                        value: function(t) {
                            return this._worker.postMessage("addEvent", t)
                        }
                    }, {
                        key: "_finishRequest",
                        value: function() {
                            var t = (0, ii.Z)(si().mark((function t() {
                                var e;
                                return si().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, this._worker.postMessage("finish");
                                        case 2:
                                            return e = t.sent, this._earliestTimestamp = null, this._totalSize = 0, t.abrupt("return", e);
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    }]), t
                }(),
                Ls = function() {
                    function t(e) {
                        (0, s.Z)(this, t), this._fallback = new Ds, this._compression = new Ns(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
                    }
                    return (0, c.Z)(t, [{
                        key: "type",
                        get: function() {
                            return this._used.type
                        }
                    }, {
                        key: "hasEvents",
                        get: function() {
                            return this._used.hasEvents
                        }
                    }, {
                        key: "hasCheckout",
                        get: function() {
                            return this._used.hasCheckout
                        },
                        set: function(t) {
                            this._used.hasCheckout = t
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._fallback.destroy(), this._compression.destroy()
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            return this._used.clear()
                        }
                    }, {
                        key: "getEarliestTimestamp",
                        value: function() {
                            return this._used.getEarliestTimestamp()
                        }
                    }, {
                        key: "addEvent",
                        value: function(t) {
                            return this._used.addEvent(t)
                        }
                    }, {
                        key: "finish",
                        value: function() {
                            var t = (0, ii.Z)(si().mark((function t() {
                                return si().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, this.ensureWorkerIsLoaded();
                                        case 2:
                                            return t.abrupt("return", this._used.finish());
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "ensureWorkerIsLoaded",
                        value: function() {
                            return this._ensureWorkerIsLoadedPromise
                        }
                    }, {
                        key: "_ensureWorkerIsLoaded",
                        value: function() {
                            var t = (0, ii.Z)(si().mark((function t() {
                                return si().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this._compression.ensureReady();
                                        case 3:
                                            t.next = 9;
                                            break;
                                        case 5:
                                            return t.prev = 5, t.t0 = t.catch(0), t.abrupt("return");
                                        case 9:
                                            return t.next = 11, this._switchToCompressionWorker();
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 5]
                                ])
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_switchToCompressionWorker",
                        value: function() {
                            var t = (0, ii.Z)(si().mark((function t() {
                                var e, n, r, a, i, o, s;
                                return si().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e = this._fallback, n = e.events, r = e.hasCheckout, a = [], i = pi(n);
                                            try {
                                                for (i.s(); !(o = i.n()).done;) s = o.value, a.push(this._compression.addEvent(s))
                                            } catch (c) {
                                                i.e(c)
                                            } finally {
                                                i.f()
                                            }
                                            return this._compression.hasCheckout = r, this._used = this._compression, t.prev = 6, t.next = 9, Promise.all(a);
                                        case 9:
                                            t.next = 14;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t.catch(6);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [6, 11]
                                ])
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    }]), t
                }();

            function zs(t) {
                if (t.useCompression && window.Worker) try {
                    var e = function() {
                            var t = new Blob(['/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */\nfunction t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                            return URL.createObjectURL(t)
                        }(),
                        n = new Worker(e);
                    return new Ls(n)
                } catch (r) {}
                return new Ds
            }

            function Zs() {
                try {
                    return "sessionStorage" in vi && !!vi.sessionStorage
                } catch (t) {
                    return !1
                }
            }

            function Fs(t) {
                ! function() {
                    if (!Zs()) return;
                    try {
                        vi.sessionStorage.removeItem(yi)
                    } catch (t) {}
                }(), t.session = void 0
            }

            function Bs(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
                return null === t || void 0 === e || e < 0 || 0 !== e && t + e <= n
            }

            function Us(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
                return Bs(t.started, e.maxSessionLife, n) || Bs(t.lastActivity, e.sessionIdleExpire, n)
            }

            function Hs(t) {
                return void 0 !== t && Math.random() < t
            }

            function qs(t) {
                if (Zs()) try {
                    vi.sessionStorage.setItem(yi, JSON.stringify(t))
                } catch (e) {}
            }

            function Ws(t) {
                var e = Date.now();
                return {
                    id: t.id || (0, b.DM)(),
                    started: t.started || e,
                    lastActivity: t.lastActivity || e,
                    segmentId: t.segmentId || 0,
                    sampled: t.sampled,
                    shouldRefresh: "boolean" !== typeof t.shouldRefresh || t.shouldRefresh
                }
            }

            function Gs(t) {
                var e = t.sessionSampleRate,
                    n = t.allowBuffering,
                    r = t.stickySession,
                    a = void 0 !== r && r,
                    i = function(t, e) {
                        return Hs(t) ? "session" : !!e && "buffer"
                    }(e, n),
                    o = Ws({
                        sampled: i
                    });
                return a && qs(o), o
            }

            function Vs(t) {
                var e = t.timeouts,
                    n = t.currentSession,
                    r = t.stickySession,
                    a = t.sessionSampleRate,
                    i = t.allowBuffering,
                    o = (t.traceInternals, n || r && function(t) {
                        if (!Zs()) return null;
                        try {
                            var e = vi.sessionStorage.getItem(yi);
                            return e ? Ws(JSON.parse(e)) : null
                        } catch (n) {
                            return null
                        }
                    }());
                if (o) {
                    if (!Us(o, e) || i && o.shouldRefresh) return {
                        type: "saved",
                        session: o
                    };
                    if (!o.shouldRefresh) return {
                        type: "new",
                        session: Ws({
                            sampled: !1
                        })
                    }
                }
                return {
                    type: "new",
                    session: Gs({
                        stickySession: r,
                        sessionSampleRate: a,
                        allowBuffering: i
                    })
                }
            }

            function Js(t, e, n) {
                return Ys.apply(this, arguments)
            }

            function Ys() {
                return Ys = (0, ii.Z)(si().mark((function t(e, n, r) {
                    var i, o, s, c, u;
                    return si().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e.eventBuffer) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", null);
                            case 2:
                                if (!e.isPaused()) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", null);
                            case 4:
                                if (!((i = hs(n.timestamp)) + e.timeouts.sessionIdlePause < Date.now())) {
                                    t.next = 7;
                                    break
                                }
                                return t.abrupt("return", null);
                            case 7:
                                if (!(i > e.getContext().initialTimestamp + e.timeouts.maxSessionLife)) {
                                    t.next = 10;
                                    break
                                }
                                return "[Replay] Skipping event with timestamp ".concat(i, " because it is after maxSessionLife"), e.getOptions()._experiments.traceInternals, t.abrupt("return", null);
                            case 10:
                                if (t.prev = 10, r && "buffer" === e.recordingMode && e.eventBuffer.clear(), r && (e.eventBuffer.hasCheckout = !0), o = e.getOptions(), s = $s(n, o.beforeAddRecordingEvent)) {
                                    t.next = 17;
                                    break
                                }
                                return t.abrupt("return");
                            case 17:
                                return t.next = 19, e.eventBuffer.addEvent(s);
                            case 19:
                                return t.abrupt("return", t.sent);
                            case 22:
                                return t.prev = 22, t.t0 = t.catch(10), c = t.t0 && t.t0 instanceof Ps ? "addEventSizeExceeded" : "addEvent", t.next = 28, e.stop({
                                    reason: c
                                });
                            case 28:
                                (u = (0, a.Gd)().getClient()) && u.recordDroppedEvent("internal_sdk_error", "replay");
                            case 30:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [10, 22]
                    ])
                }))), Ys.apply(this, arguments)
            }

            function $s(t, e) {
                try {
                    if ("function" === typeof e && function(t) {
                            return t.type === Ui.Custom
                        }(t)) return e(t)
                } catch (n) {
                    return null
                }
                return t
            }

            function Ks(t) {
                return !t.type
            }

            function Xs(t) {
                return "transaction" === t.type
            }

            function Qs(t) {
                return "replay_event" === t.type
            }

            function tc(t) {
                var e = function() {
                    var t = (0, a.Gd)().getClient();
                    if (!t) return !1;
                    var e = t.getTransport();
                    if (!e) return !1;
                    return e.send.__sentry__baseTransport__ || !1
                }();
                return function(n, r) {
                    if (t.isEnabled() && (Ks(n) || Xs(n))) {
                        var a = r && r.statusCode;
                        e && (!a || a < 200 || a >= 300) || (Xs(n) ? function(t, e) {
                            var n = t.getContext();
                            e.contexts && e.contexts.trace && e.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(e.contexts.trace.trace_id)
                        }(t, n) : function(t, e) {
                            var n = t.getContext();
                            e.event_id && n.errorIds.size < 100 && n.errorIds.add(e.event_id);
                            "buffer" === t.recordingMode && e.tags && e.tags.replayId && setTimeout((function() {
                                t.sendBufferedReplayOrFlush()
                            }))
                        }(t, n))
                    }
                }
            }

            function ec(t, e) {
                return !(t.type || !t.exception || !t.exception.values || !t.exception.values.length) && (!(!e.originalException || !e.originalException.__rrweb__) || t.exception.values.some((function(t) {
                    return !!(t.stacktrace && t.stacktrace.frames && t.stacktrace.frames.length) && t.stacktrace.frames.some((function(t) {
                        return t.filename && t.filename.includes("/rrweb/src/")
                    }))
                })))
            }

            function nc(t, e) {
                return "buffer" === t.recordingMode && (e.message !== _i && (!(!e.exception || e.type) && Hs(t.getOptions().errorSampleRate)))
            }

            function rc(t, e) {
                return e.map((function(e) {
                    var n = e.type,
                        r = e.start,
                        a = e.end,
                        i = e.name,
                        o = e.data,
                        s = t.throttledAddEvent({
                            type: Ui.Custom,
                            timestamp: r,
                            data: {
                                tag: "performanceSpan",
                                payload: {
                                    op: n,
                                    description: i,
                                    startTimestamp: r,
                                    endTimestamp: a,
                                    data: o
                                }
                            }
                        });
                    return "string" === typeof s ? Promise.resolve(null) : s
                }))
            }

            function ac(t) {
                return function(e) {
                    if (t.isEnabled()) {
                        var n = function(t) {
                            var e = t.from,
                                n = t.to,
                                r = Date.now() / 1e3;
                            return {
                                type: "navigation.push",
                                start: r,
                                end: r,
                                name: n,
                                data: {
                                    previous: e
                                }
                            }
                        }(e);
                        null !== n && (t.getContext().urls.push(n.name), t.triggerUserActivity(), t.addUpdate((function() {
                            return rc(t, [n]), !1
                        })))
                    }
                }
            }

            function ic(t, e) {
                return function(t) {
                    var e = (0, a.Gd)().getClient(),
                        n = e && e.getDsn();
                    return !!n && t.includes(n.host)
                }(e)
            }

            function oc(t, e) {
                t.isEnabled() && null !== e && (ic(0, e.name) || t.addUpdate((function() {
                    return rc(t, [e]), !0
                })))
            }
            var sc = 10,
                cc = 11,
                uc = 12,
                lc = 13,
                dc = 14,
                fc = 15,
                pc = 20,
                hc = 21,
                mc = 22,
                vc = 23,
                yc = ["true", "false", "null"];

            function gc(t, e) {
                if (!e.length) return t;
                var n = t,
                    r = e.length - 1;
                n = function(t, e) {
                    switch (e) {
                        case sc:
                            return "".concat(t, '"~~":"~~"');
                        case 11:
                            return "".concat(t, ':"~~"');
                        case 12:
                            return "".concat(t, '~~":"~~"');
                        case lc:
                            return function(t) {
                                var e = t.lastIndexOf(":"),
                                    n = t.slice(e + 1);
                                if (yc.includes(n.trim())) return "".concat(t, ',"~~":"~~"');
                                return "".concat(t.slice(0, e + 1), '"~~"')
                            }(t);
                        case 14:
                            return "".concat(t, '~~"');
                        case fc:
                            return "".concat(t, ',"~~":"~~"');
                        case pc:
                            return "".concat(t, '"~~"');
                        case hc:
                            return function(t) {
                                var e = function(t) {
                                    for (var e = t.length - 1; e >= 0; e--) {
                                        var n = t[e];
                                        if ("," === n || "[" === n) return e
                                    }
                                    return -1
                                }(t);
                                if (e > -1) {
                                    var n = t.slice(e + 1);
                                    return yc.includes(n.trim()) ? "".concat(t, ',"~~"') : "".concat(t.slice(0, e + 1), '"~~"')
                                }
                                return t
                            }(t);
                        case 22:
                            return "".concat(t, '~~"');
                        case vc:
                            return "".concat(t, ',"~~"')
                    }
                    return t
                }(n, e[r]);
                for (var a = r; a >= 0; a--) {
                    switch (e[a]) {
                        case sc:
                            n = "".concat(n, "}");
                            break;
                        case pc:
                            n = "".concat(n, "]")
                    }
                }
                return n
            }

            function _c(t, e, n) {
                var r = t[t.length - 1],
                    a = e[n];
                if (!/\s/.test(a))
                    if ('"' !== a || bc(e, n)) switch (a) {
                        case "{":
                            ! function(t, e) {
                                if (!e) return void t.push(sc);
                                if (e === lc) return void t.push(sc);
                                e === hc && t.push(sc);
                                if (e === pc) t.push(sc)
                            }(t, r);
                            break;
                        case "[":
                            ! function(t, e) {
                                if (!e) return t.push(pc), void t.push(hc);
                                if (e === lc) return t.push(pc), void t.push(hc);
                                e === hc && (t.push(pc), t.push(hc));
                                if (e === pc) t.push(pc), t.push(hc)
                            }(t, r);
                            break;
                        case ":":
                            ! function(t, e) {
                                e === cc && (t.pop(), t.push(lc))
                            }(t, r);
                            break;
                        case ",":
                            ! function(t, e) {
                                if (e === lc) return void t.pop();
                                if (e === fc) return t.pop(), void t.pop();
                                if (e === hc) return;
                                if (e === vc) t.pop()
                            }(t, r);
                            break;
                        case "}":
                            ! function(t, e) {
                                e === sc && t.pop();
                                e === lc && (t.pop(), t.pop());
                                e === fc && (t.pop(), t.pop(), t.pop());
                                t[t.length - 1] === lc && t.push(fc);
                                t[t.length - 1] === hc && t.push(vc)
                            }(t, r);
                            break;
                        case "]":
                            ! function(t, e) {
                                e === pc && t.pop();
                                e === hc && (t.pop(), t.pop());
                                e === vc && (t.pop(), t.pop(), t.pop());
                                t[t.length - 1] === lc && t.push(fc);
                                t[t.length - 1] === hc && t.push(vc)
                            }(t, r)
                    } else ! function(t, e) {
                        if (e === dc) return t.pop(), void t.push(fc);
                        if (e === mc) return t.pop(), void t.push(vc);
                        if (e === lc) return void t.push(dc);
                        if (e === hc) return void t.push(mc);
                        if (e === sc) return void t.push(uc);
                        if (e === uc) t.pop(), t.push(11)
                    }(t, r)
            }

            function bc(t, e) {
                return "\\" === t[e - 1] && !bc(t, e - 1)
            }

            function wc(t) {
                return gc(t, function(t) {
                    for (var e = [], n = 0; n < t.length; n++) _c(e, t, n);
                    return e
                }(t))
            }

            function kc(t, e) {
                if (t) try {
                    if ("string" === typeof t) return e.encode(t).length;
                    if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
                    if (t instanceof FormData) {
                        var n = Cc(t);
                        return e.encode(n).length
                    }
                    if (t instanceof Blob) return t.size;
                    if (t instanceof ArrayBuffer) return t.byteLength
                } catch (r) {}
            }

            function Sc(t) {
                if (t) {
                    var e = parseInt(t, 10);
                    return isNaN(e) ? void 0 : e
                }
            }

            function xc(t) {
                return "string" === typeof t ? t : t instanceof URLSearchParams ? t.toString() : t instanceof FormData ? Cc(t) : void 0
            }

            function Oc(t, e) {
                if (!e) return null;
                var n = e.startTimestamp,
                    r = e.endTimestamp,
                    a = e.url,
                    i = e.method,
                    o = e.statusCode,
                    s = e.request,
                    c = e.response;
                return {
                    type: t,
                    start: n / 1e3,
                    end: r / 1e3,
                    name: a,
                    data: (0, A.Jr)({
                        method: i,
                        statusCode: o,
                        request: s,
                        response: c
                    })
                }
            }

            function Ec(t) {
                return {
                    headers: {},
                    size: t,
                    _meta: {
                        warnings: ["URL_SKIPPED"]
                    }
                }
            }

            function jc(t, e, n) {
                if (e || 0 !== Object.keys(t).length) {
                    if (!e) return {
                        headers: t
                    };
                    if (!n) return {
                        headers: t,
                        size: e
                    };
                    var r = {
                            headers: t,
                            size: e
                        },
                        a = function(t) {
                            if (!t || "string" !== typeof t) return {
                                body: t,
                                warnings: []
                            };
                            var e = t.length > wi;
                            if (function(t) {
                                    var e = t[0],
                                        n = t[t.length - 1];
                                    return "[" === e && "]" === n || "{" === e && "}" === n
                                }(t)) try {
                                var n = e ? wc(t.slice(0, wi)) : t;
                                return {
                                    body: JSON.parse(n),
                                    warnings: e ? ["JSON_TRUNCATED"] : []
                                }
                            } catch (r) {
                                return {
                                    body: e ? "".concat(t.slice(0, wi), "\u2026") : t,
                                    warnings: e ? ["INVALID_JSON", "TEXT_TRUNCATED"] : ["INVALID_JSON"]
                                }
                            }
                            return {
                                body: e ? "".concat(t.slice(0, wi), "\u2026") : t,
                                warnings: e ? ["TEXT_TRUNCATED"] : []
                            }
                        }(n),
                        i = a.body,
                        o = a.warnings;
                    return r.body = i, o.length > 0 && (r._meta = {
                        warnings: o
                    }), r
                }
            }

            function Tc(t, e) {
                return Object.keys(t).reduce((function(n, r) {
                    var a = r.toLowerCase();
                    return e.includes(a) && t[r] && (n[a] = t[r]), n
                }), {})
            }

            function Cc(t) {
                return new URLSearchParams(t).toString()
            }

            function Rc(t, e) {
                var n = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vi.document.baseURI;
                    if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(vi.location.origin)) return t;
                    var n = new URL(t, e);
                    if (n.origin !== new URL(e).origin) return t;
                    var r = n.href;
                    if (!t.endsWith("/") && r.endsWith("/")) return r.slice(0, -1);
                    return r
                }(t);
                return (0, E.U0)(n, e)
            }

            function Ic() {
                return (Ic = (0, ii.Z)(si().mark((function t(e, n, r) {
                    var a, i;
                    return si().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, Ac(e, n, r);
                            case 3:
                                a = t.sent, i = Oc("resource.fetch", a), oc(r.replay, i), t.next = 11;
                                break;
                            case 8:
                                t.prev = 8, t.t0 = t.catch(0);
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 8]
                    ])
                })))).apply(this, arguments)
            }

            function Ac(t, e, n) {
                return Pc.apply(this, arguments)
            }

            function Pc() {
                return (Pc = (0, ii.Z)(si().mark((function t(e, n, r) {
                    var a, i, o, s, c, u, l, d, f, p, h, m;
                    return si().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return a = n.startTimestamp, i = n.endTimestamp, o = e.data, s = o.url, c = o.method, u = o.status_code, l = void 0 === u ? 0 : u, d = o.request_body_size, f = o.response_body_size, p = Rc(s, r.networkDetailAllowUrls) && !Rc(s, r.networkDetailDenyUrls), h = p ? Dc(r, n.input, d) : Ec(d), t.next = 6, Mc(p, r, n.response, f);
                            case 6:
                                return m = t.sent, t.abrupt("return", {
                                    startTimestamp: a,
                                    endTimestamp: i,
                                    url: s,
                                    method: c,
                                    statusCode: l,
                                    request: h,
                                    response: m
                                });
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function Dc(t, e, n) {
                var r = t.networkCaptureBodies,
                    a = function(t, e) {
                        if (1 === t.length && "string" !== typeof t[0]) return Bc(t[0], e);
                        if (2 === t.length) return Bc(t[1], e);
                        return {}
                    }(e, t.networkRequestHeaders);
                return jc(a, n, r ? xc(Zc(e)) : void 0)
            }

            function Mc(t, e, n, r) {
                return Nc.apply(this, arguments)
            }

            function Nc() {
                return (Nc = (0, ii.Z)(si().mark((function t(e, n, r, a) {
                    var i, o, s, c, u, l, d;
                    return si().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (i = n.networkCaptureBodies, o = n.textEncoder, s = n.networkResponseHeaders, e || void 0 === a) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", Ec(a));
                            case 3:
                                if (c = Fc(r.headers, s), i || void 0 === a) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("return", jc(c, a, void 0));
                            case 6:
                                return t.prev = 6, u = r.clone(), t.next = 10, Lc(u);
                            case 10:
                                if (l = t.sent, d = l && l.length && void 0 === a ? kc(l, o) : a, e) {
                                    t.next = 14;
                                    break
                                }
                                return t.abrupt("return", Ec(d));
                            case 14:
                                if (!i) {
                                    t.next = 16;
                                    break
                                }
                                return t.abrupt("return", jc(c, d, l));
                            case 16:
                                return t.abrupt("return", jc(c, d, void 0));
                            case 19:
                                return t.prev = 19, t.t0 = t.catch(6), t.abrupt("return", jc(c, a, void 0));
                            case 22:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [6, 19]
                    ])
                })))).apply(this, arguments)
            }

            function Lc(t) {
                return zc.apply(this, arguments)
            }

            function zc() {
                return (zc = (0, ii.Z)(si().mark((function t(e) {
                    return si().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, e.text();
                            case 3:
                                return t.abrupt("return", t.sent);
                            case 6:
                                return t.prev = 6, t.t0 = t.catch(0), t.abrupt("return", void 0);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 6]
                    ])
                })))).apply(this, arguments)
            }

            function Zc() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (2 === t.length && "object" === typeof t[1]) return t[1].body
            }

            function Fc(t, e) {
                var n = {};
                return e.forEach((function(e) {
                    t.get(e) && (n[e] = t.get(e))
                })), n
            }

            function Bc(t, e) {
                if (!t) return {};
                var n = t.headers;
                return n ? n instanceof Headers ? Fc(n, e) : Array.isArray(n) ? {} : Tc(n, e) : {}
            }

            function Uc() {
                return (Uc = (0, ii.Z)(si().mark((function t(e, n, r) {
                    var a, i;
                    return si().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                try {
                                    a = Hc(e, n, r), i = Oc("resource.xhr", a), oc(r.replay, i)
                                } catch (o) {}
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function Hc(t, e, n) {
                var r = e.startTimestamp,
                    a = e.endTimestamp,
                    i = e.input,
                    o = e.xhr,
                    s = t.data,
                    c = s.url,
                    u = s.method,
                    l = s.status_code,
                    d = void 0 === l ? 0 : l,
                    f = s.request_body_size,
                    p = s.response_body_size;
                if (!c) return null;
                if (!Rc(c, n.networkDetailAllowUrls) || Rc(c, n.networkDetailDenyUrls)) return {
                    startTimestamp: r,
                    endTimestamp: a,
                    url: c,
                    method: u,
                    statusCode: d,
                    request: Ec(f),
                    response: Ec(p)
                };
                var h = o.__sentry_xhr_v2__,
                    m = h ? Tc(h.request_headers, n.networkRequestHeaders) : {},
                    v = Tc(function(t) {
                        var e = t.getAllResponseHeaders();
                        if (!e) return {};
                        return e.split("\r\n").reduce((function(t, e) {
                            var n = _(e.split(": "), 2),
                                r = n[0],
                                a = n[1];
                            return t[r.toLowerCase()] = a, t
                        }), {})
                    }(o), n.networkResponseHeaders);
                return {
                    startTimestamp: r,
                    endTimestamp: a,
                    url: c,
                    method: u,
                    statusCode: d,
                    request: jc(m, f, n.networkCaptureBodies ? xc(i) : void 0),
                    response: jc(v, p, n.networkCaptureBodies ? e.xhr.responseText : void 0)
                }
            }

            function qc(t) {
                var e = (0, a.Gd)().getClient();
                try {
                    var n = new TextEncoder,
                        r = t.getOptions(),
                        i = {
                            replay: t,
                            textEncoder: n,
                            networkDetailAllowUrls: r.networkDetailAllowUrls,
                            networkDetailDenyUrls: r.networkDetailDenyUrls,
                            networkCaptureBodies: r.networkCaptureBodies,
                            networkRequestHeaders: r.networkRequestHeaders,
                            networkResponseHeaders: r.networkResponseHeaders
                        };
                    e && e.on ? e.on("beforeAddBreadcrumb", (function(t, e) {
                        return function(t, e, n) {
                            if (!e.data) return;
                            try {
                                (function(t) {
                                    return "xhr" === t.category
                                })(e) && function(t) {
                                    return t && t.xhr
                                }(n) && (function(t, e, n) {
                                    var r = e.xhr,
                                        a = kc(e.input, n.textEncoder),
                                        i = r.getResponseHeader("content-length") ? Sc(r.getResponseHeader("content-length")) : kc(r.response, n.textEncoder);
                                    void 0 !== a && (t.data.request_body_size = a), void 0 !== i && (t.data.response_body_size = i)
                                }(e, n, t), function(t, e, n) {
                                    Uc.apply(this, arguments)
                                }(e, n, t)),
                                function(t) {
                                    return "fetch" === t.category
                                }(e) && function(t) {
                                    return t && t.response
                                }(n) && (function(t, e, n) {
                                    var r = e.input,
                                        a = e.response,
                                        i = kc(Zc(r), n.textEncoder),
                                        o = a ? Sc(a.headers.get("content-length")) : void 0;
                                    void 0 !== i && (t.data.request_body_size = i), void 0 !== o && (t.data.response_body_size = o)
                                }(e, n, t), function(t, e, n) {
                                    Ic.apply(this, arguments)
                                }(e, n, t))
                            } catch (r) {}
                        }(i, t, e)
                    })) : (st("fetch", function(t) {
                        return function(e) {
                            if (t.isEnabled()) {
                                var n = function(t) {
                                    var e = t.startTimestamp,
                                        n = t.endTimestamp,
                                        r = t.fetchData,
                                        a = t.response;
                                    if (!n) return null;
                                    var i = r.method;
                                    return {
                                        type: "resource.fetch",
                                        start: e / 1e3,
                                        end: n / 1e3,
                                        name: r.url,
                                        data: {
                                            method: i,
                                            statusCode: a ? a.status : void 0
                                        }
                                    }
                                }(e);
                                oc(t, n)
                            }
                        }
                    }(t)), st("xhr", function(t) {
                        return function(e) {
                            if (t.isEnabled()) {
                                var n = function(t) {
                                    var e = t.startTimestamp,
                                        n = t.endTimestamp,
                                        r = t.xhr.__sentry_xhr_v2__;
                                    if (!e || !n || !r) return null;
                                    var a = r.method,
                                        i = r.url,
                                        o = r.status_code;
                                    return void 0 === i ? null : {
                                        type: "resource.xhr",
                                        name: i,
                                        start: e / 1e3,
                                        end: n / 1e3,
                                        data: {
                                            method: a,
                                            statusCode: o
                                        }
                                    }
                                }(e);
                                oc(t, n)
                            }
                        }
                    }(t)))
                } catch (o) {}
            }
            var Wc = null;
            var Gc = function(t) {
                return function(e) {
                    if (t.isEnabled()) {
                        var n = function(t) {
                            var e = t.getLastBreadcrumb && t.getLastBreadcrumb();
                            if (Wc === e || !e) return null;
                            if (Wc = e, ! function(t) {
                                    return !!t.category
                                }(e) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) return null;
                            if ("console" === e.category) return function(t) {
                                var e = t.data && t.data.arguments;
                                if (!Array.isArray(e) || 0 === e.length) return xs(t);
                                var n = !1,
                                    r = e.map((function(t) {
                                        if (!t) return t;
                                        if ("string" === typeof t) return t.length > ki ? (n = !0, "".concat(t.slice(0, ki), "\u2026")) : t;
                                        if ("object" === typeof t) try {
                                            var e = Ct(t, 7),
                                                r = JSON.stringify(e);
                                            if (r.length > ki) {
                                                var a = wc(r.slice(0, ki)),
                                                    i = JSON.parse(a);
                                                return n = !0, i
                                            }
                                            return e
                                        } catch (o) {}
                                        return t
                                    }));
                                return xs(fi(fi({}, t), {}, {
                                    data: fi(fi({}, t.data), {}, {
                                        arguments: r
                                    }, n ? {
                                        _meta: {
                                            warnings: ["CONSOLE_ARG_TRUNCATED"]
                                        }
                                    } : {})
                                }))
                            }(e);
                            return xs(e)
                        }(e);
                        n && ms(t, n)
                    }
                }
            };

            function Vc(t) {
                var e = (0, a.Gd)().getScope(),
                    n = (0, a.Gd)().getClient();
                e && e.addScopeListener(Gc(t)), st("dom", js(t)), st("history", ac(t)), qc(t), (0, w.c)(function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? tc(t) : void 0;
                    return function(n, r) {
                        return t.isEnabled() ? Qs(n) ? (delete n.breadcrumbs, n) : Ks(n) || Xs(n) ? ec(n, r) && !t.getOptions()._experiments.captureExceptions ? null : ((nc(t, n) || "session" === t.recordingMode) && (n.tags = fi(fi({}, n.tags), {}, {
                            replayId: t.getSessionId()
                        })), e && e(n, {
                            statusCode: 200
                        }), n) : n : n
                    }
                }(t, !Jc(n))), Jc(n) && (n.on("afterSendEvent", tc(t)), n.on("createDsc", (function(e) {
                    var n = t.getSessionId();
                    n && t.isEnabled() && "session" === t.recordingMode && (e.replay_id = n)
                })), n.on("startTransaction", (function(e) {
                    t.lastTransaction = e
                })), n.on("finishTransaction", (function(e) {
                    t.lastTransaction = e
                })))
            }

            function Jc(t) {
                return !(!t || !t.on)
            }

            function Yc(t) {
                return $c.apply(this, arguments)
            }

            function $c() {
                return ($c = (0, ii.Z)(si().mark((function t(e) {
                    return si().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.abrupt("return", Promise.all(rc(e, [Kc(vi.performance.memory)])));
                            case 4:
                                return t.prev = 4, t.t0 = t.catch(0), t.abrupt("return", []);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 4]
                    ])
                })))).apply(this, arguments)
            }

            function Kc(t) {
                var e = t.jsHeapSizeLimit,
                    n = t.totalJSHeapSize,
                    r = t.usedJSHeapSize,
                    a = Date.now() / 1e3;
                return {
                    type: "memory",
                    name: "memory",
                    start: a,
                    end: a,
                    data: {
                        memory: {
                            jsHeapSizeLimit: e,
                            totalJSHeapSize: n,
                            usedJSHeapSize: r
                        }
                    }
                }
            }
            var Xc = (0, o.Z)({
                resource: function(t) {
                    var e = t.entryType,
                        n = t.initiatorType,
                        r = t.name,
                        a = t.responseEnd,
                        i = t.startTime,
                        o = t.decodedBodySize,
                        s = t.encodedBodySize,
                        c = t.responseStatus,
                        u = t.transferSize;
                    if (["fetch", "xmlhttprequest"].includes(n)) return null;
                    return {
                        type: "".concat(e, ".").concat(n),
                        start: tu(i),
                        end: tu(a),
                        name: r,
                        data: {
                            size: u,
                            statusCode: c,
                            decodedBodySize: o,
                            encodedBodySize: s
                        }
                    }
                },
                paint: function(t) {
                    var e = t.duration,
                        n = t.entryType,
                        r = t.name,
                        a = tu(t.startTime);
                    return {
                        type: n,
                        name: r,
                        start: a,
                        end: a + e,
                        data: void 0
                    }
                },
                navigation: function(t) {
                    var e = t.entryType,
                        n = t.name,
                        r = t.decodedBodySize,
                        a = t.duration,
                        i = t.domComplete,
                        o = t.encodedBodySize,
                        s = t.domContentLoadedEventStart,
                        c = t.domContentLoadedEventEnd,
                        u = t.domInteractive,
                        l = t.loadEventStart,
                        d = t.loadEventEnd,
                        f = t.redirectCount,
                        p = t.startTime,
                        h = t.transferSize,
                        m = t.type;
                    if (0 === a) return null;
                    return {
                        type: "".concat(e, ".").concat(m),
                        start: tu(p),
                        end: tu(i),
                        name: n,
                        data: {
                            size: h,
                            decodedBodySize: r,
                            encodedBodySize: o,
                            duration: a,
                            domInteractive: u,
                            domContentLoadedEventStart: s,
                            domContentLoadedEventEnd: c,
                            loadEventStart: l,
                            loadEventEnd: d,
                            domComplete: i,
                            redirectCount: f
                        }
                    }
                }
            }, "largest-contentful-paint", (function(t) {
                var e = t.entryType,
                    n = t.startTime,
                    r = t.size,
                    a = 0;
                if (vi.performance) {
                    var i = vi.performance.getEntriesByType("navigation")[0];
                    a = i && i.activationStart || 0
                }
                var o = Math.max(n - a, 0),
                    s = tu(a) + o / 1e3;
                return {
                    type: e,
                    name: e,
                    start: s,
                    end: s,
                    data: {
                        value: o,
                        size: r,
                        nodeId: ps.mirror.getId(t.element)
                    }
                }
            }));

            function Qc(t) {
                return void 0 === Xc[t.entryType] ? null : Xc[t.entryType](t)
            }

            function tu(t) {
                return ((de.Z1 || vi.performance.timeOrigin) + t) / 1e3
            }

            function eu(t) {
                var e = !1;
                return function(n, r) {
                    if (t.checkAndHandleExpiredSession()) {
                        var a = r || !e;
                        e = !0, t.addUpdate((function() {
                            if ("buffer" === t.recordingMode && a && t.setInitialState(), Js(t, n, a), !a) return !1;
                            if (function(t, e) {
                                    if (!e || !t.session || 0 !== t.session.segmentId) return Promise.resolve(null);
                                    Js(t, function(t) {
                                        var e = t.getOptions();
                                        return {
                                            type: Ui.Custom,
                                            timestamp: Date.now(),
                                            data: {
                                                tag: "options",
                                                payload: {
                                                    sessionSampleRate: e.sessionSampleRate,
                                                    errorSampleRate: e.errorSampleRate,
                                                    useCompressionOption: e.useCompression,
                                                    blockAllMedia: e.blockAllMedia,
                                                    maskAllText: e.maskAllText,
                                                    maskAllInputs: e.maskAllInputs,
                                                    useCompression: !!t.eventBuffer && "worker" === t.eventBuffer.type,
                                                    networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                                                    networkCaptureBodies: e.networkCaptureBodies,
                                                    networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                                                    networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                                                }
                                            }
                                        }
                                    }(t), !1)
                                }(t, a), t.session && t.session.previousSessionId) return !0;
                            if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
                                var e = t.eventBuffer.getEarliestTimestamp();
                                e && ("[Replay] Updating session start time to earliest event in buffer to ".concat(new Date(e)), t.getOptions()._experiments.traceInternals, t.session.started = e, t.getOptions().stickySession && qs(t.session))
                            }
                            return "session" === t.recordingMode && t.flush(), !0
                        }))
                    }
                }
            }

            function nu(t, e, n, r) {
                return zt(Vt(t, Gt(t), r, n), [
                    [{
                        type: "replay_event"
                    }, t],
                    [{
                        type: "replay_recording",
                        length: "string" === typeof e ? (new TextEncoder).encode(e).length : e.length
                    }, e]
                ])
            }

            function ru(t) {
                var e, n = t.recordingData,
                    r = t.headers,
                    a = "".concat(JSON.stringify(r), "\n");
                if ("string" === typeof n) e = "".concat(a).concat(n);
                else {
                    var i = (new TextEncoder).encode(a);
                    (e = new Uint8Array(i.length + n.length)).set(i), e.set(n, i.length)
                }
                return e
            }

            function au(t) {
                return iu.apply(this, arguments)
            }

            function iu() {
                return iu = (0, ii.Z)(si().mark((function t(e) {
                    var n, r, a, i, o, s, c, u, l, d;
                    return si().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = e.client, r = e.scope, a = e.replayId, i = e.event, o = "object" !== typeof n._integrations || null === n._integrations || Array.isArray(n._integrations) ? void 0 : Object.keys(n._integrations), t.next = 4, he(n.getOptions(), i, {
                                    event_id: a,
                                    integrations: o
                                }, r);
                            case 4:
                                if (s = t.sent) {
                                    t.next = 7;
                                    break
                                }
                                return t.abrupt("return", null);
                            case 7:
                                return s.platform = s.platform || "javascript", c = n.getSdkMetadata && n.getSdkMetadata(), u = c && c.sdk || {}, l = u.name, d = u.version, s.sdk = fi(fi({}, s.sdk), {}, {
                                    name: l || "sentry.javascript.unknown",
                                    version: d || "0.0.0"
                                }), t.abrupt("return", s);
                            case 12:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), iu.apply(this, arguments)
            }

            function ou(t) {
                return su.apply(this, arguments)
            }

            function su() {
                return su = (0, ii.Z)(si().mark((function t(e) {
                    var n, r, i, o, s, c, u, l, d, f, p, h, m, v, y, g, _, b, w, k, S;
                    return si().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.recordingData, r = e.replayId, i = e.segmentId, o = e.eventContext, s = e.timestamp, c = e.session, u = ru({
                                        recordingData: n,
                                        headers: {
                                            segment_id: i
                                        }
                                    }), l = o.urls, d = o.errorIds, f = o.traceIds, p = o.initialTimestamp, h = (0, a.Gd)(), m = h.getClient(), v = h.getScope(), y = m && m.getTransport(), g = m && m.getDsn(), m && y && g && c.sampled) {
                                    t.next = 10;
                                    break
                                }
                                return t.abrupt("return");
                            case 10:
                                return _ = {
                                    type: gi,
                                    replay_start_timestamp: p / 1e3,
                                    timestamp: s / 1e3,
                                    error_ids: d,
                                    trace_ids: f,
                                    urls: l,
                                    replay_id: r,
                                    segment_id: i,
                                    replay_type: c.sampled
                                }, t.next = 13, au({
                                    scope: v,
                                    client: m,
                                    replayId: r,
                                    event: _
                                });
                            case 13:
                                if (b = t.sent) {
                                    t.next = 18;
                                    break
                                }
                                return m.recordDroppedEvent("event_processor", "replay", _), t.abrupt("return");
                            case 18:
                                return delete b.sdkProcessingMetadata, w = nu(b, u, g, m.getOptions().tunnel), t.prev = 20, t.next = 23, y.send(w);
                            case 23:
                                k = t.sent, t.next = 31;
                                break;
                            case 26:
                                t.prev = 26, t.t0 = t.catch(20), S = new Error(_i);
                                try {
                                    S.cause = t.t0
                                } catch (x) {}
                                throw S;
                            case 31:
                                if (k) {
                                    t.next = 33;
                                    break
                                }
                                return t.abrupt("return", k);
                            case 33:
                                if ("number" !== typeof k.statusCode || !(k.statusCode < 200 || k.statusCode >= 300)) {
                                    t.next = 35;
                                    break
                                }
                                throw new cu(k.statusCode);
                            case 35:
                                return t.abrupt("return", k);
                            case 36:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [20, 26]
                    ])
                }))), su.apply(this, arguments)
            }
            var cu = function(t) {
                (0, wt.Z)(n, t);
                var e = li(n);

                function n(t) {
                    return (0, s.Z)(this, n), e.call(this, "Transport returned status code ".concat(t))
                }
                return n
            }(Xt(Error));

            function uu(t) {
                return lu.apply(this, arguments)
            }

            function lu() {
                return lu = (0, ii.Z)(si().mark((function t(e) {
                    var n, r, a, i = arguments;
                    return si().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = i.length > 1 && void 0 !== i[1] ? i[1] : {
                                        count: 0,
                                        interval: bi
                                    }, r = e.recordingData, e.options, r.length) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return");
                            case 4:
                                return t.prev = 4, t.next = 7, ou(e);
                            case 7:
                                return t.abrupt("return", !0);
                            case 10:
                                if (t.prev = 10, t.t0 = t.catch(4), !(t.t0 instanceof cu)) {
                                    t.next = 14;
                                    break
                                }
                                throw t.t0;
                            case 14:
                                if ((0, Me.v)("Replays", {
                                        _retryCount: n.count
                                    }), !(n.count >= 3)) {
                                    t.next = 20;
                                    break
                                }
                                a = new Error("".concat(_i, " - max retries exceeded"));
                                try {
                                    a.cause = t.t0
                                } catch (o) {}
                                throw a;
                            case 20:
                                return n.interval *= ++n.count, t.abrupt("return", new Promise((function(t, r) {
                                    setTimeout((0, ii.Z)(si().mark((function a() {
                                        return si().wrap((function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    return a.prev = 0, a.next = 3, uu(e, n);
                                                case 3:
                                                    t(!0), a.next = 9;
                                                    break;
                                                case 6:
                                                    a.prev = 6, a.t0 = a.catch(0), r(a.t0);
                                                case 9:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }), a, null, [
                                            [0, 6]
                                        ])
                                    }))), n.interval)
                                })));
                            case 22:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [4, 10]
                    ])
                }))), lu.apply(this, arguments)
            }
            var du = "__THROTTLED",
                fu = "__SKIPPED";
            var pu = function() {
                function t(e) {
                    var n = this,
                        a = e.options,
                        i = e.recordingOptions;
                    (0, s.Z)(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), t.prototype.__init3.call(this), t.prototype.__init4.call(this), t.prototype.__init5.call(this), t.prototype.__init6.call(this), this.eventBuffer = null, this.performanceEvents = [], this.recordingMode = "session", this.timeouts = {
                        sessionIdlePause: 3e5,
                        sessionIdleExpire: 9e5,
                        maxSessionLife: 36e5
                    }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._hasInitializedCoreListeners = !1, this._context = {
                        errorIds: new Set,
                        traceIds: new Set,
                        urls: [],
                        initialTimestamp: Date.now(),
                        initialUrl: ""
                    }, this._recordingOptions = i, this._options = a, this._debouncedFlush = function(t, e, n) {
                        var r, a, i, o = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

                        function s() {
                            return c(), r = t()
                        }

                        function c() {
                            void 0 !== a && clearTimeout(a), void 0 !== i && clearTimeout(i), a = i = void 0
                        }

                        function u() {
                            return a && clearTimeout(a), a = setTimeout(s, e), o && void 0 === i && (i = setTimeout(s, o)), r
                        }
                        return u.cancel = c, u.flush = function() {
                            return void 0 !== a || void 0 !== i ? s() : r
                        }, u
                    }((function() {
                        return n._flush()
                    }), this._options.flushMinDelay, {
                        maxWait: this._options.flushMaxDelay
                    }), this._throttledAddEvent = function(t, e, n) {
                        var a = new Map,
                            i = function(t) {
                                var e = t - n;
                                a.forEach((function(t, n) {
                                    n < e && a.delete(n)
                                }))
                            },
                            o = function() {
                                return (0, r.Z)(a.values()).reduce((function(t, e) {
                                    return t + e
                                }), 0)
                            },
                            s = !1;
                        return function() {
                            var n = Math.floor(Date.now() / 1e3);
                            if (i(n), o() >= e) {
                                var r = s;
                                return s = !0, r ? fu : du
                            }
                            s = !1;
                            var c = a.get(n) || 0;
                            return a.set(n, c + 1), t.apply(void 0, arguments)
                        }
                    }((function(t, e) {
                        return Js(n, t, e)
                    }), 300, 5);
                    var o = this.getOptions(),
                        c = o.slowClickTimeout,
                        u = o.slowClickIgnoreSelectors,
                        l = c ? {
                            threshold: Math.min(3e3, c),
                            timeout: c,
                            scrollTimeout: 300,
                            ignoreSelector: u ? u.join(",") : ""
                        } : void 0;
                    l && (this.clickDetector = new ws(this, l))
                }
                return (0, c.Z)(t, [{
                    key: "getContext",
                    value: function() {
                        return this._context
                    }
                }, {
                    key: "isEnabled",
                    value: function() {
                        return this._isEnabled
                    }
                }, {
                    key: "isPaused",
                    value: function() {
                        return this._isPaused
                    }
                }, {
                    key: "getOptions",
                    value: function() {
                        return this._options
                    }
                }, {
                    key: "initializeSampling",
                    value: function() {
                        var t = this._options,
                            e = t.errorSampleRate,
                            n = t.sessionSampleRate;
                        e <= 0 && n <= 0 || this._loadAndCheckSession() && (this.session ? (this.session.sampled && "session" !== this.session.sampled && (this.recordingMode = "buffer"), "[Replay] Starting replay in ".concat(this.recordingMode, " mode"), this._options._experiments.traceInternals, this._initializeRecording()) : this._handleException(new Error("Unable to initialize and create session")))
                    }
                }, {
                    key: "start",
                    value: function() {
                        if (this._isEnabled && "session" === this.recordingMode) throw new Error("Replay recording is already in progress");
                        if (this._isEnabled && "buffer" === this.recordingMode) throw new Error("Replay buffering is in progress, call `flush()` to save the replay");
                        this._options._experiments.traceInternals;
                        var t = this.session && this.session.id,
                            e = Vs({
                                timeouts: this.timeouts,
                                stickySession: Boolean(this._options.stickySession),
                                currentSession: this.session,
                                sessionSampleRate: 1,
                                allowBuffering: !1,
                                traceInternals: this._options._experiments.traceInternals
                            }).session;
                        e.previousSessionId = t, this.session = e, this._initializeRecording()
                    }
                }, {
                    key: "startBuffering",
                    value: function() {
                        if (this._isEnabled) throw new Error("Replay recording is already in progress");
                        this._options._experiments.traceInternals;
                        var t = this.session && this.session.id,
                            e = Vs({
                                timeouts: this.timeouts,
                                stickySession: Boolean(this._options.stickySession),
                                currentSession: this.session,
                                sessionSampleRate: 0,
                                allowBuffering: !0,
                                traceInternals: this._options._experiments.traceInternals
                            }).session;
                        e.previousSessionId = t, this.session = e, this.recordingMode = "buffer", this._initializeRecording()
                    }
                }, {
                    key: "startRecording",
                    value: function() {
                        try {
                            this._stopRecording = ps(fi(fi(fi({}, this._recordingOptions), "buffer" === this.recordingMode && {
                                checkoutEveryNms: 6e4
                            }), {}, {
                                emit: eu(this),
                                onMutation: this._onMutationHandler
                            }))
                        } catch (t) {
                            this._handleException(t)
                        }
                    }
                }, {
                    key: "stopRecording",
                    value: function() {
                        try {
                            return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
                        } catch (t) {
                            return this._handleException(t), !1
                        }
                    }
                }, {
                    key: "stop",
                    value: function() {
                        var t = (0, ii.Z)(si().mark((function t() {
                            var e, n, r, a, i = arguments;
                            return si().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e = i.length > 0 && void 0 !== i[0] ? i[0] : {}, n = e.forceFlush, r = void 0 !== n && n, a = e.reason, this._isEnabled) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        if (t.prev = 3, "[Replay] Stopping Replay".concat(a ? " triggered by ".concat(a) : ""), this._options._experiments.traceInternals, this._isEnabled = !1, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), !r) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 12, this._flush({
                                            force: !0
                                        });
                                    case 12:
                                        this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, Fs(this), t.next = 20;
                                        break;
                                    case 17:
                                        t.prev = 17, t.t0 = t.catch(3), this._handleException(t.t0);
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [3, 17]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "pause",
                    value: function() {
                        this._isPaused || (this._isPaused = !0, this.stopRecording(), this._options._experiments.traceInternals)
                    }
                }, {
                    key: "resume",
                    value: function() {
                        this._isPaused && this._loadAndCheckSession() && (this._isPaused = !1, this.startRecording(), this._options._experiments.traceInternals)
                    }
                }, {
                    key: "sendBufferedReplayOrFlush",
                    value: function() {
                        var t = (0, ii.Z)(si().mark((function t() {
                            var e, n, r, a, i, o = arguments;
                            return si().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e = o.length > 0 && void 0 !== o[0] ? o[0] : {}, n = e.continueRecording, r = void 0 === n || n, "session" !== this.recordingMode) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", this.flushImmediate());
                                    case 3:
                                        return a = Date.now(), this._options._experiments.traceInternals, t.next = 7, this.flushImmediate();
                                    case 7:
                                        if (i = this.stopRecording(), r && i) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 10:
                                        if ("session" !== this.recordingMode) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 12:
                                        this.recordingMode = "session", this.session && (this.session.shouldRefresh = !1, this._updateUserActivity(a), this._updateSessionActivity(a), this._maybeSaveSession()), this.startRecording();
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "addUpdate",
                    value: function(t) {
                        var e = t();
                        "buffer" !== this.recordingMode && !0 !== e && this._debouncedFlush()
                    }
                }, {
                    key: "triggerUserActivity",
                    value: function() {
                        if (this._updateUserActivity(), this._stopRecording) this.checkAndHandleExpiredSession(), this._updateSessionActivity();
                        else {
                            if (!this._loadAndCheckSession()) return;
                            this.resume()
                        }
                    }
                }, {
                    key: "updateUserActivity",
                    value: function() {
                        this._updateUserActivity(), this._updateSessionActivity()
                    }
                }, {
                    key: "conditionalFlush",
                    value: function() {
                        return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
                    }
                }, {
                    key: "flush",
                    value: function() {
                        return this._debouncedFlush()
                    }
                }, {
                    key: "flushImmediate",
                    value: function() {
                        return this._debouncedFlush(), this._debouncedFlush.flush()
                    }
                }, {
                    key: "cancelFlush",
                    value: function() {
                        this._debouncedFlush.cancel()
                    }
                }, {
                    key: "getSessionId",
                    value: function() {
                        return this.session && this.session.id
                    }
                }, {
                    key: "checkAndHandleExpiredSession",
                    value: function() {
                        var t = this.getSessionId();
                        if (this._lastActivity && Bs(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) this.pause();
                        else if (this._loadAndCheckSession()) return t === this.getSessionId() || (this._triggerFullSnapshot(), !1)
                    }
                }, {
                    key: "setInitialState",
                    value: function() {
                        var t = "".concat(vi.location.pathname).concat(vi.location.hash).concat(vi.location.search),
                            e = "".concat(vi.location.origin).concat(t);
                        this.performanceEvents = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
                    }
                }, {
                    key: "throttledAddEvent",
                    value: function(t, e) {
                        var n = this,
                            r = this._throttledAddEvent(t, e);
                        if (r === du) {
                            var a = xs({
                                category: "replay.throttled"
                            });
                            this.addUpdate((function() {
                                Js(n, {
                                    type: Ui.Custom,
                                    timestamp: a.timestamp || 0,
                                    data: {
                                        tag: "breadcrumb",
                                        payload: a,
                                        metric: !0
                                    }
                                })
                            }))
                        }
                        return r
                    }
                }, {
                    key: "getCurrentRoute",
                    value: function() {
                        var t = this.lastTransaction || (0, a.Gd)().getScope().getTransaction();
                        if (t && ["route", "custom"].includes(t.metadata.source)) return t.name
                    }
                }, {
                    key: "_initializeRecording",
                    value: function() {
                        this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = zs({
                            useCompression: this._options.useCompression
                        }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this.startRecording()
                    }
                }, {
                    key: "_handleException",
                    value: function(t) {
                        0
                    }
                }, {
                    key: "_loadAndCheckSession",
                    value: function() {
                        var t = Vs({
                                timeouts: this.timeouts,
                                stickySession: Boolean(this._options.stickySession),
                                currentSession: this.session,
                                sessionSampleRate: this._options.sessionSampleRate,
                                allowBuffering: this._options.errorSampleRate > 0 || "buffer" === this.recordingMode,
                                traceInternals: this._options._experiments.traceInternals
                            }),
                            e = t.type,
                            n = t.session;
                        "new" === e && this.setInitialState();
                        var r = this.getSessionId();
                        return n.id !== r && (n.previousSessionId = r), this.session = n, !!this.session.sampled || (this.stop({
                            reason: "session not refreshed"
                        }), !1)
                    }
                }, {
                    key: "_addListeners",
                    value: function() {
                        try {
                            vi.document.addEventListener("visibilitychange", this._handleVisibilityChange), vi.addEventListener("blur", this._handleWindowBlur), vi.addEventListener("focus", this._handleWindowFocus), vi.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (Vc(this), this._hasInitializedCoreListeners = !0)
                        } catch (t) {
                            this._handleException(t)
                        }
                        "PerformanceObserver" in vi && (this._performanceObserver = As(this))
                    }
                }, {
                    key: "_removeListeners",
                    value: function() {
                        try {
                            vi.document.removeEventListener("visibilitychange", this._handleVisibilityChange), vi.removeEventListener("blur", this._handleWindowBlur), vi.removeEventListener("focus", this._handleWindowFocus), vi.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = void 0)
                        } catch (t) {
                            this._handleException(t)
                        }
                    }
                }, {
                    key: "__init",
                    value: function() {
                        var t = this;
                        this._handleVisibilityChange = function() {
                            "visible" === vi.document.visibilityState ? t._doChangeToForegroundTasks() : t._doChangeToBackgroundTasks()
                        }
                    }
                }, {
                    key: "__init2",
                    value: function() {
                        var t = this;
                        this._handleWindowBlur = function() {
                            var e = xs({
                                category: "ui.blur"
                            });
                            t._doChangeToBackgroundTasks(e)
                        }
                    }
                }, {
                    key: "__init3",
                    value: function() {
                        var t = this;
                        this._handleWindowFocus = function() {
                            var e = xs({
                                category: "ui.focus"
                            });
                            t._doChangeToForegroundTasks(e)
                        }
                    }
                }, {
                    key: "__init4",
                    value: function() {
                        var t = this;
                        this._handleKeyboardEvent = function(e) {
                            Cs(t, e)
                        }
                    }
                }, {
                    key: "_doChangeToBackgroundTasks",
                    value: function(t) {
                        if (this.session) {
                            var e = Us(this.session, this.timeouts);
                            t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush()
                        }
                    }
                }, {
                    key: "_doChangeToForegroundTasks",
                    value: function(t) {
                        this.session && (this.checkAndHandleExpiredSession() && t && this._createCustomBreadcrumb(t))
                    }
                }, {
                    key: "_triggerFullSnapshot",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        try {
                            ps.takeFullSnapshot(t)
                        } catch (e) {
                            this._handleException(e)
                        }
                    }
                }, {
                    key: "_updateUserActivity",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                        this._lastActivity = t
                    }
                }, {
                    key: "_updateSessionActivity",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                        this.session && (this.session.lastActivity = t, this._maybeSaveSession())
                    }
                }, {
                    key: "_createCustomBreadcrumb",
                    value: function(t) {
                        var e = this;
                        this.addUpdate((function() {
                            e.throttledAddEvent({
                                type: Ui.Custom,
                                timestamp: t.timestamp || 0,
                                data: {
                                    tag: "breadcrumb",
                                    payload: t
                                }
                            })
                        }))
                    }
                }, {
                    key: "_addPerformanceEntries",
                    value: function() {
                        var t = (0, r.Z)(this.performanceEvents);
                        return this.performanceEvents = [], Promise.all(rc(this, function(t) {
                            return t.map(Qc).filter(Boolean)
                        }(t)))
                    }
                }, {
                    key: "_clearContext",
                    value: function() {
                        this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
                    }
                }, {
                    key: "_updateInitialTimestampFromEventBuffer",
                    value: function() {
                        var t = this.session,
                            e = this.eventBuffer;
                        if (t && e && !t.segmentId) {
                            var n = e.getEarliestTimestamp();
                            n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
                        }
                    }
                }, {
                    key: "_popEventContext",
                    value: function() {
                        var t = {
                            initialTimestamp: this._context.initialTimestamp,
                            initialUrl: this._context.initialUrl,
                            errorIds: Array.from(this._context.errorIds),
                            traceIds: Array.from(this._context.traceIds),
                            urls: this._context.urls
                        };
                        return this._clearContext(), t
                    }
                }, {
                    key: "_runFlush",
                    value: function() {
                        var t = (0, ii.Z)(si().mark((function t() {
                            var e, n, r, i, o, s;
                            return si().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.session && this.eventBuffer) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return t.next = 5, this._addPerformanceEntries();
                                    case 5:
                                        if (this.eventBuffer && this.eventBuffer.hasEvents) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 7:
                                        return t.next = 9, Yc(this);
                                    case 9:
                                        if (this.eventBuffer) {
                                            t.next = 11;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 11:
                                        return t.prev = 11, this._updateInitialTimestampFromEventBuffer(), t.next = 15, this.eventBuffer.finish();
                                    case 15:
                                        if (e = t.sent, !((n = Date.now()) - this._context.initialTimestamp > this.timeouts.maxSessionLife + 3e4)) {
                                            t.next = 19;
                                            break
                                        }
                                        throw new Error("Session is too long, not sending replay");
                                    case 19:
                                        return r = this.session.id, i = this._popEventContext(), o = this.session.segmentId++, this._maybeSaveSession(), t.next = 25, uu({
                                            replayId: r,
                                            recordingData: e,
                                            segmentId: o,
                                            eventContext: i,
                                            session: this.session,
                                            options: this.getOptions(),
                                            timestamp: n
                                        });
                                    case 25:
                                        t.next = 33;
                                        break;
                                    case 27:
                                        t.prev = 27, t.t0 = t.catch(11), this._handleException(t.t0), this.stop({
                                            reason: "sendReplay"
                                        }), (s = (0, a.Gd)().getClient()) && s.recordDroppedEvent("send_error", "replay");
                                    case 33:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [11, 27]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "__init5",
                    value: function() {
                        var t = this;
                        this._flush = (0, ii.Z)(si().mark((function e() {
                            var n, r, a, i, o, s, c, u, l, d = arguments;
                            return si().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = d.length > 0 && void 0 !== d[0] ? d[0] : {}, r = n.force, a = void 0 !== r && r, t._isEnabled || a) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (t.checkAndHandleExpiredSession()) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        if (t.session) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        if (i = t.session.started, o = Date.now(), s = o - i, t._debouncedFlush.cancel(), c = s < t._options.minReplayDuration, u = s > t.timeouts.maxSessionLife + 5e3, !c && !u) {
                                            e.next = 19;
                                            break
                                        }
                                        return "[Replay] Session duration (".concat(Math.floor(s / 1e3), "s) is too ").concat(c ? "short" : "long", ", not sending replay."), t._options._experiments.traceInternals, c && t._debouncedFlush(), e.abrupt("return");
                                    case 19:
                                        if ((l = t.eventBuffer) && 0 === t.session.segmentId && !l.hasCheckout && t._options._experiments.traceInternals, t._flushLock) {
                                            e.next = 27;
                                            break
                                        }
                                        return t._flushLock = t._runFlush(), e.next = 25, t._flushLock;
                                    case 25:
                                        return t._flushLock = void 0, e.abrupt("return");
                                    case 27:
                                        return e.prev = 27, e.next = 30, t._flushLock;
                                    case 30:
                                        e.next = 35;
                                        break;
                                    case 32:
                                        e.prev = 32, e.t0 = e.catch(27);
                                    case 35:
                                        return e.prev = 35, t._debouncedFlush(), e.finish(35);
                                    case 38:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [27, 32, 35, 38]
                            ])
                        })))
                    }
                }, {
                    key: "_maybeSaveSession",
                    value: function() {
                        this.session && this._options.stickySession && qs(this.session)
                    }
                }, {
                    key: "__init6",
                    value: function() {
                        var t = this;
                        this._onMutationHandler = function(e) {
                            var n = e.length,
                                r = t._options.mutationLimit,
                                a = r && n > r;
                            if (n > t._options.mutationBreadcrumbLimit || a) {
                                var i = xs({
                                    category: "replay.mutations",
                                    data: {
                                        count: n,
                                        limit: a
                                    }
                                });
                                t._createCustomBreadcrumb(i)
                            }
                            return !a || (t.stop({
                                reason: "mutationLimit",
                                forceFlush: "session" === t.recordingMode
                            }), !1)
                        }
                    }
                }]), t
            }();

            function hu(t, e, n, a) {
                var i = "string" === typeof a ? a.split(",") : [],
                    o = [].concat((0, r.Z)(t), (0, r.Z)(i), (0, r.Z)(e));
                return "undefined" !== typeof n && ("string" === typeof n && o.push(".".concat(n)), console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")), o.join(",")
            }

            function mu(t) {
                var e = t.mask,
                    n = t.unmask,
                    r = t.block,
                    a = t.unblock,
                    i = t.ignore,
                    o = t.blockClass,
                    s = t.blockSelector,
                    c = t.maskTextClass,
                    u = t.maskTextSelector,
                    l = t.ignoreClass,
                    d = hu(e, [".sentry-mask", "[data-sentry-mask]"], c, u),
                    f = hu(n, [".sentry-unmask", "[data-sentry-unmask]"]),
                    p = {
                        maskTextSelector: d,
                        unmaskTextSelector: f,
                        maskInputSelector: d,
                        unmaskInputSelector: f,
                        blockSelector: hu(r, [".sentry-block", "[data-sentry-block]"].concat(['base[href="/"]']), o, s),
                        unblockSelector: hu(a, [".sentry-unblock", "[data-sentry-unblock]"]),
                        ignoreSelector: hu(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], l)
                    };
                return o instanceof RegExp && (p.blockClass = o), c instanceof RegExp && (p.maskTextClass = c), p
            }

            function vu() {
                return !(0, ci.KV)() || "undefined" !== typeof ui && "renderer" === ui.type
            }
            var yu = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                gu = ["content-length", "content-type", "accept"],
                _u = !1,
                bu = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.flushMinDelay,
                            r = void 0 === n ? 5e3 : n,
                            a = e.flushMaxDelay,
                            i = void 0 === a ? 5500 : a,
                            o = e.minReplayDuration,
                            c = void 0 === o ? 4999 : o,
                            u = e.stickySession,
                            l = void 0 === u || u,
                            d = e.useCompression,
                            f = void 0 === d || d,
                            p = e._experiments,
                            h = void 0 === p ? {} : p,
                            m = e.sessionSampleRate,
                            v = e.errorSampleRate,
                            y = e.maskAllText,
                            g = void 0 === y || y,
                            _ = e.maskAllInputs,
                            b = void 0 === _ || _,
                            w = e.blockAllMedia,
                            k = void 0 === w || w,
                            S = e.mutationBreadcrumbLimit,
                            x = void 0 === S ? 750 : S,
                            O = e.mutationLimit,
                            E = void 0 === O ? 1e4 : O,
                            j = e.slowClickTimeout,
                            T = void 0 === j ? 7e3 : j,
                            C = e.slowClickIgnoreSelectors,
                            R = void 0 === C ? [] : C,
                            I = e.networkDetailAllowUrls,
                            A = void 0 === I ? [] : I,
                            P = e.networkDetailDenyUrls,
                            D = void 0 === P ? [] : P,
                            M = e.networkCaptureBodies,
                            N = void 0 === M || M,
                            L = e.networkRequestHeaders,
                            z = void 0 === L ? [] : L,
                            Z = e.networkResponseHeaders,
                            F = void 0 === Z ? [] : Z,
                            B = e.mask,
                            U = void 0 === B ? [] : B,
                            H = e.unmask,
                            q = void 0 === H ? [] : H,
                            W = e.block,
                            G = void 0 === W ? [] : W,
                            V = e.unblock,
                            J = void 0 === V ? [] : V,
                            Y = e.ignore,
                            $ = void 0 === Y ? [] : Y,
                            K = e.maskFn,
                            X = e.beforeAddRecordingEvent,
                            Q = e.blockClass,
                            tt = e.blockSelector,
                            et = e.maskInputOptions,
                            nt = e.maskTextClass,
                            rt = e.maskTextSelector,
                            at = e.ignoreClass;
                        if ((0, s.Z)(this, t), this.name = t.id, this._recordingOptions = fi(fi({
                                maskAllInputs: b,
                                maskAllText: g,
                                maskInputOptions: fi(fi({}, et || {}), {}, {
                                    password: !0
                                }),
                                maskTextFn: K,
                                maskInputFn: K
                            }, mu({
                                mask: U,
                                unmask: q,
                                block: G,
                                unblock: J,
                                ignore: $,
                                blockClass: Q,
                                blockSelector: tt,
                                maskTextClass: nt,
                                maskTextSelector: rt,
                                ignoreClass: at
                            })), {}, {
                                slimDOMOptions: "all",
                                inlineStylesheet: !0,
                                inlineImages: !1,
                                collectFonts: !0
                            }), this._initialOptions = {
                                flushMinDelay: r,
                                flushMaxDelay: i,
                                minReplayDuration: Math.min(c, 15e3),
                                stickySession: l,
                                sessionSampleRate: m,
                                errorSampleRate: v,
                                useCompression: f,
                                blockAllMedia: k,
                                maskAllInputs: b,
                                maskAllText: g,
                                mutationBreadcrumbLimit: x,
                                mutationLimit: E,
                                slowClickTimeout: T,
                                slowClickIgnoreSelectors: R,
                                networkDetailAllowUrls: A,
                                networkDetailDenyUrls: D,
                                networkCaptureBodies: N,
                                networkRequestHeaders: wu(z),
                                networkResponseHeaders: wu(F),
                                beforeAddRecordingEvent: X,
                                _experiments: h
                            }, "number" === typeof m && (console.warn("[Replay] You are passing `sessionSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysSessionSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ".concat(m, " })")), this._initialOptions.sessionSampleRate = m), "number" === typeof v && (console.warn("[Replay] You are passing `errorSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysOnErrorSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ".concat(v, " })")), this._initialOptions.errorSampleRate = v), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? "".concat(this._recordingOptions.blockSelector, ",").concat(yu) : yu), this._isInitialized && vu()) throw new Error("Multiple Sentry Session Replay instances are not supported");
                        this._isInitialized = !0
                    }
                    return (0, c.Z)(t, [{
                        key: "_isInitialized",
                        get: function() {
                            return _u
                        },
                        set: function(t) {
                            _u = t
                        }
                    }, {
                        key: "setupOnce",
                        value: function() {
                            var t = this;
                            vu() && (this._setup(), setTimeout((function() {
                                return t._initialize()
                            })))
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this._replay && this._replay.start()
                        }
                    }, {
                        key: "startBuffering",
                        value: function() {
                            this._replay && this._replay.startBuffering()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            return this._replay ? this._replay.stop({
                                forceFlush: "session" === this._replay.recordingMode
                            }) : Promise.resolve()
                        }
                    }, {
                        key: "flush",
                        value: function(t) {
                            return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve()
                        }
                    }, {
                        key: "getReplayId",
                        value: function() {
                            if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
                        }
                    }, {
                        key: "_initialize",
                        value: function() {
                            this._replay && this._replay.initializeSampling()
                        }
                    }, {
                        key: "_setup",
                        value: function() {
                            var t = function(t) {
                                var e = (0, a.Gd)().getClient(),
                                    n = e && e.getOptions(),
                                    r = fi({
                                        sessionSampleRate: 0,
                                        errorSampleRate: 0
                                    }, (0, A.Jr)(t));
                                if (!n) return console.warn("SDK client is not available."), r;
                                null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.");
                                "number" === typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate);
                                "number" === typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate);
                                return r
                            }(this._initialOptions);
                            this._replay = new pu({
                                options: t,
                                recordingOptions: this._recordingOptions
                            })
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "Replay"
                        }
                    }]), t
                }();

            function wu(t) {
                return [].concat(gu, (0, r.Z)(t.map((function(t) {
                    return t.toLowerCase()
                }))))
            }
            bu.__initStatic();
            var ku, Su = window;
            Su.__sentryRewritesTunnelPath__ = "/monitoring", Su.SENTRY_RELEASE = {
                    id: "mTRMPr4jUfRMmKDoT9TYy"
                }, Su.__rewriteFramesAssetPrefixPath__ = "",
                function(t) {
                    var e = ri.__sentryRewritesTunnelPath__;
                    if (e && t.dsn) {
                        var n = Ot(t.dsn);
                        if (!n) return;
                        var r = n.host.match(/^o(\d+)\.ingest\.sentry\.io$/);
                        if (r) {
                            var a = r[1],
                                i = "".concat(e, "?o=").concat(a, "&p=").concat(n.projectId);
                            t.tunnel = i
                        }
                    }
                }(ku = {
                    dsn: "https://c319afcdb871104371fda78a10f7427b@o4505702216237056.ingest.sentry.io/4505702216368128",
                    tracesSampleRate: 1,
                    debug: !1,
                    replaysOnErrorSampleRate: 1,
                    replaysSessionSampleRate: .1,
                    integrations: [new bu({
                        maskAllText: !0,
                        blockAllMedia: !0
                    })]
                }),
                function(t, e) {
                    t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                        name: "sentry.javascript.nextjs",
                        packages: e.map((function(t) {
                            return {
                                name: "".concat("npm:@sentry/").concat(t),
                                version: y
                            }
                        })),
                        version: y
                    }
                }(ku, ["nextjs", "react"]), ku.environment = ku.environment || function(t) {
                    var e = t ? qa.env.NEXT_PUBLIC_VERCEL_ENV : qa.env.VERCEL_ENV;
                    return e ? "vercel-".concat(e) : void 0
                }(!0) || "production",
                function(t) {
                    var e = t.integrations || [],
                        n = ai.__rewriteFramesAssetPrefixPath__ || "",
                        a = new v({
                            iteratee: function(t) {
                                try {
                                    var e = new URL(t.filename).origin;
                                    t.filename = function(t) {
                                        for (var e = void 0, n = t[0], r = 1; r < t.length;) {
                                            var a = t[r],
                                                i = t[r + 1];
                                            if (r += 2, ("optionalAccess" === a || "optionalCall" === a) && null == n) return;
                                            "access" === a || "optionalAccess" === a ? (e = n, n = i(n)) : "call" !== a && "optionalCall" !== a || (n = i((function() {
                                                for (var t, r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                                                return (t = n).call.apply(t, [e].concat(a))
                                            })), e = void 0)
                                        }
                                        return n
                                    }([t, "access", function(t) {
                                        return t.filename
                                    }, "optionalAccess", function(t) {
                                        return t.replace
                                    }, "call", function(t) {
                                        return t(e, "app://")
                                    }, "access", function(t) {
                                        return t.replace
                                    }, "call", function(t) {
                                        return t(n, "")
                                    }])
                                } catch (r) {}
                                return t.filename && t.filename.startsWith("app:///_next") && (t.filename = decodeURI(t.filename)), t.filename && t.filename.match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (t.in_app = !1), t
                            }
                        });
                    e = Ba(a, e), ("undefined" === typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && i(t) && (e = Ba(new za({
                        tracingOrigins: [].concat((0, r.Z)(Ra.tracingOrigins), [/^(api\/)/]),
                        routingInstrumentation: ei
                    }), e, {
                        "options.routingInstrumentation": ei
                    })), t.integrations = e
                }(ku), yr(ku), (0, Me.e)((function(t) {
                    t.setTag("runtime", "browser");
                    var e = function(t) {
                        return "transaction" === t.type && "/404" === t.transaction ? null : t
                    };
                    e.id = "NextClient404Filter", t.addEventProcessor(e)
                }))
        },
        8270: function(t, e, n) {
            "use strict";
            n.d(e, {
                Rt: function() {
                    return i
                },
                l4: function() {
                    return s
                },
                qT: function() {
                    return c
                }
            });
            var r = n(2196),
                a = (0, n(8479).Rf)();

            function i(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    for (var n, r = t, a = 5, i = [], s = 0, c = 0, u = " > ", l = u.length, d = Array.isArray(e) ? e : e.keyAttrs, f = !Array.isArray(e) && e.maxStringLength || 80; r && s++ < a && !("html" === (n = o(r, d)) || s > 1 && c + i.length * l + n.length >= f);) i.push(n), c += n.length, r = r.parentNode;
                    return i.reverse().join(u)
                } catch (p) {
                    return "<unknown>"
                }
            }

            function o(t, e) {
                var n, a, i, o, s, c = t,
                    u = [];
                if (!c || !c.tagName) return "";
                u.push(c.tagName.toLowerCase());
                var l = e && e.length ? e.filter((function(t) {
                    return c.getAttribute(t)
                })).map((function(t) {
                    return [t, c.getAttribute(t)]
                })) : null;
                if (l && l.length) l.forEach((function(t) {
                    u.push("[".concat(t[0], '="').concat(t[1], '"]'))
                }));
                else if (c.id && u.push("#".concat(c.id)), (n = c.className) && (0, r.HD)(n))
                    for (a = n.split(/\s+/), s = 0; s < a.length; s++) u.push(".".concat(a[s]));
                var d = ["aria-label", "type", "name", "title", "alt"];
                for (s = 0; s < d.length; s++) i = d[s], (o = c.getAttribute(i)) && u.push("[".concat(i, '="').concat(o, '"]'));
                return u.join("")
            }

            function s() {
                try {
                    return a.document.location.href
                } catch (t) {
                    return ""
                }
            }

            function c(t) {
                return a.document && a.document.querySelector ? a.document.querySelector(t) : null
            }
        },
        9818: function(t, e, n) {
            "use strict";

            function r() {
                return "undefined" !== typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
            }

            function a() {
                return "npm"
            }
            n.d(e, {
                S: function() {
                    return a
                },
                n: function() {
                    return r
                }
            })
        },
        2196: function(t, e, n) {
            "use strict";
            n.d(e, {
                Cy: function() {
                    return v
                },
                HD: function() {
                    return u
                },
                J8: function() {
                    return m
                },
                Kj: function() {
                    return h
                },
                PO: function() {
                    return d
                },
                TX: function() {
                    return s
                },
                V9: function() {
                    return g
                },
                VW: function() {
                    return o
                },
                VZ: function() {
                    return a
                },
                cO: function() {
                    return f
                },
                fm: function() {
                    return c
                },
                i2: function() {
                    return y
                },
                kK: function() {
                    return p
                },
                pt: function() {
                    return l
                }
            });
            var r = Object.prototype.toString;

            function a(t) {
                switch (r.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return g(t, Error)
                }
            }

            function i(t, e) {
                return r.call(t) === "[object ".concat(e, "]")
            }

            function o(t) {
                return i(t, "ErrorEvent")
            }

            function s(t) {
                return i(t, "DOMError")
            }

            function c(t) {
                return i(t, "DOMException")
            }

            function u(t) {
                return i(t, "String")
            }

            function l(t) {
                return null === t || "object" !== typeof t && "function" !== typeof t
            }

            function d(t) {
                return i(t, "Object")
            }

            function f(t) {
                return "undefined" !== typeof Event && g(t, Event)
            }

            function p(t) {
                return "undefined" !== typeof Element && g(t, Element)
            }

            function h(t) {
                return i(t, "RegExp")
            }

            function m(t) {
                return Boolean(t && t.then && "function" === typeof t.then)
            }

            function v(t) {
                return d(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
            }

            function y(t) {
                return "number" === typeof t && t !== t
            }

            function g(t, e) {
                try {
                    return t instanceof e
                } catch (n) {
                    return !1
                }
            }
        },
        3119: function(t, e, n) {
            "use strict";
            n.d(e, {
                Cf: function() {
                    return o
                },
                RU: function() {
                    return i
                },
                kg: function() {
                    return r
                }
            });
            var r, a = n(8479),
                i = ["debug", "info", "warn", "error", "log", "assert", "trace"];

            function o(t) {
                if (!("console" in a.n2)) return t();
                var e = a.n2.console,
                    n = {};
                i.forEach((function(t) {
                    var r = e[t] && e[t].__sentry_original__;
                    t in e && r && (n[t] = e[t], e[t] = r)
                }));
                try {
                    return t()
                } finally {
                    Object.keys(n).forEach((function(t) {
                        e[t] = n[t]
                    }))
                }
            }
            r = function() {
                var t = {
                    enable: function() {},
                    disable: function() {}
                };
                return i.forEach((function(e) {
                    t[e] = function() {}
                })), t
            }()
        },
        140: function(t, e, n) {
            "use strict";
            n.d(e, {
                DM: function() {
                    return c
                },
                Db: function() {
                    return d
                },
                EG: function() {
                    return f
                },
                YO: function() {
                    return p
                },
                jH: function() {
                    return l
                },
                lE: function() {
                    return h
                }
            });
            var r = n(9499),
                a = n(9009),
                i = n(8479);

            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach((function(e) {
                        (0, r.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function c() {
                var t = i.n2,
                    e = t.crypto || t.msCrypto;
                if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
                var n = e && e.getRandomValues ? function() {
                    return e.getRandomValues(new Uint8Array(1))[0]
                } : function() {
                    return 16 * Math.random()
                };
                return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (function(t) {
                    return (t ^ (15 & n()) >> t / 4).toString(16)
                }))
            }

            function u(t) {
                return t.exception && t.exception.values ? t.exception.values[0] : void 0
            }

            function l(t) {
                var e = t.message,
                    n = t.event_id;
                if (e) return e;
                var r = u(t);
                return r ? r.type && r.value ? "".concat(r.type, ": ").concat(r.value) : r.type || r.value || n || "<unknown>" : n || "<unknown>"
            }

            function d(t, e, n) {
                var r = t.exception = t.exception || {},
                    a = r.values = r.values || [],
                    i = a[0] = a[0] || {};
                i.value || (i.value = e || ""), i.type || (i.type = n || "Error")
            }

            function f(t, e) {
                var n = u(t);
                if (n) {
                    var r = n.mechanism;
                    if (n.mechanism = s(s(s({}, {
                            type: "generic",
                            handled: !0
                        }), r), e), e && "data" in e) {
                        var a = s(s({}, r && r.data), e.data);
                        n.mechanism.data = a
                    }
                }
            }

            function p(t) {
                if (t && t.__sentry_captured__) return !0;
                try {
                    (0, a.xp)(t, "__sentry_captured__", !0)
                } catch (e) {}
                return !1
            }

            function h(t) {
                return Array.isArray(t) ? t : [t]
            }
        },
        4676: function(t, e, n) {
            "use strict";
            n.d(e, {
                KV: function() {
                    return i
                },
                l$: function() {
                    return o
                }
            });
            var r = n(9818);
            t = n.hmd(t);
            var a = n(3454);

            function i() {
                return !(0, r.n)() && "[object process]" === Object.prototype.toString.call("undefined" !== typeof a ? a : 0)
            }

            function o(t, e) {
                return t.require(e)
            }
        },
        9009: function(t, e, n) {
            "use strict";
            n.d(e, {
                $Q: function() {
                    return d
                },
                HK: function() {
                    return f
                },
                Jr: function() {
                    return g
                },
                Sh: function() {
                    return h
                },
                _j: function() {
                    return p
                },
                hl: function() {
                    return u
                },
                xp: function() {
                    return l
                },
                zf: function() {
                    return y
                }
            });
            var r = n(9499),
                a = n(8270),
                i = n(2196),
                o = n(408);

            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach((function(e) {
                        (0, r.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function u(t, e, n) {
                if (e in t) {
                    var r = t[e],
                        a = n(r);
                    if ("function" === typeof a) try {
                        d(a, r)
                    } catch (i) {}
                    t[e] = a
                }
            }

            function l(t, e, n) {
                Object.defineProperty(t, e, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            }

            function d(t, e) {
                var n = e.prototype || {};
                t.prototype = e.prototype = n, l(t, "__sentry_original__", e)
            }

            function f(t) {
                return t.__sentry_original__
            }

            function p(t) {
                return Object.keys(t).map((function(e) {
                    return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))
                })).join("&")
            }

            function h(t) {
                if ((0, i.VZ)(t)) return c({
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                }, v(t));
                if ((0, i.cO)(t)) {
                    var e = c({
                        type: t.type,
                        target: m(t.target),
                        currentTarget: m(t.currentTarget)
                    }, v(t));
                    return "undefined" !== typeof CustomEvent && (0, i.V9)(t, CustomEvent) && (e.detail = t.detail), e
                }
                return t
            }

            function m(t) {
                try {
                    return (0, i.kK)(t) ? (0, a.Rt)(t) : Object.prototype.toString.call(t)
                } catch (e) {
                    return "<unknown>"
                }
            }

            function v(t) {
                if ("object" === typeof t && null !== t) {
                    var e = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }
                return {}
            }

            function y(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
                    n = Object.keys(h(t));
                if (n.sort(), !n.length) return "[object has no keys]";
                if (n[0].length >= e) return (0, o.$G)(n[0], e);
                for (var r = n.length; r > 0; r--) {
                    var a = n.slice(0, r).join(", ");
                    if (!(a.length > e)) return r === n.length ? a : (0, o.$G)(a, e)
                }
                return ""
            }

            function g(t) {
                return _(t, new Map)
            }

            function _(t, e) {
                if ((0, i.PO)(t)) {
                    var n = e.get(t);
                    if (void 0 !== n) return n;
                    var r = {};
                    e.set(t, r);
                    for (var a = 0, o = Object.keys(t); a < o.length; a++) {
                        var s = o[a];
                        "undefined" !== typeof t[s] && (r[s] = _(t[s], e))
                    }
                    return r
                }
                if (Array.isArray(t)) {
                    var c = e.get(t);
                    if (void 0 !== c) return c;
                    var u = [];
                    return e.set(t, u), t.forEach((function(t) {
                        u.push(_(t, e))
                    })), u
                }
                return t
            }
        },
        408: function(t, e, n) {
            "use strict";
            n.d(e, {
                $G: function() {
                    return a
                },
                U0: function() {
                    return s
                },
                nK: function() {
                    return i
                }
            });
            var r = n(2196);

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return "string" !== typeof t || 0 === e || t.length <= e ? t : "".concat(t.slice(0, e), "...")
            }

            function i(t, e) {
                if (!Array.isArray(t)) return "";
                for (var n = [], r = 0; r < t.length; r++) {
                    var a = t[r];
                    try {
                        n.push(String(a))
                    } catch (i) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(e)
            }

            function o(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return !!(0, r.HD)(t) && ((0, r.Kj)(e) ? e.test(t) : !!(0, r.HD)(e) && (n ? t === e : t.includes(e)))
            }

            function s(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e.some((function(e) {
                    return o(t, e, n)
                }))
            }
        },
        3569: function(t, e, n) {
            "use strict";
            n.d(e, {
                $2: function() {
                    return c
                },
                WD: function() {
                    return s
                },
                cW: function() {
                    return u
                }
            });
            var r, a = n(2777),
                i = n(2262),
                o = n(2196);

            function s(t) {
                return new u((function(e) {
                    e(t)
                }))
            }

            function c(t) {
                return new u((function(e, n) {
                    n(t)
                }))
            }! function(t) {
                t[t.PENDING = 0] = "PENDING";
                t[t.RESOLVED = 1] = "RESOLVED";
                t[t.REJECTED = 2] = "REJECTED"
            }(r || (r = {}));
            var u = function() {
                function t(e) {
                    (0, a.Z)(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), t.prototype.__init3.call(this), t.prototype.__init4.call(this), this._state = r.PENDING, this._handlers = [];
                    try {
                        e(this._resolve, this._reject)
                    } catch (n) {
                        this._reject(n)
                    }
                }
                return (0, i.Z)(t, [{
                    key: "then",
                    value: function(e, n) {
                        var r = this;
                        return new t((function(t, a) {
                            r._handlers.push([!1, function(n) {
                                if (e) try {
                                    t(e(n))
                                } catch (r) {
                                    a(r)
                                } else t(n)
                            }, function(e) {
                                if (n) try {
                                    t(n(e))
                                } catch (r) {
                                    a(r)
                                } else a(e)
                            }]), r._executeHandlers()
                        }))
                    }
                }, {
                    key: "catch",
                    value: function(t) {
                        return this.then((function(t) {
                            return t
                        }), t)
                    }
                }, {
                    key: "finally",
                    value: function(e) {
                        var n = this;
                        return new t((function(t, r) {
                            var a, i;
                            return n.then((function(t) {
                                i = !1, a = t, e && e()
                            }), (function(t) {
                                i = !0, a = t, e && e()
                            })).then((function() {
                                i ? r(a) : t(a)
                            }))
                        }))
                    }
                }, {
                    key: "__init",
                    value: function() {
                        var t = this;
                        this._resolve = function(e) {
                            t._setResult(r.RESOLVED, e)
                        }
                    }
                }, {
                    key: "__init2",
                    value: function() {
                        var t = this;
                        this._reject = function(e) {
                            t._setResult(r.REJECTED, e)
                        }
                    }
                }, {
                    key: "__init3",
                    value: function() {
                        var t = this;
                        this._setResult = function(e, n) {
                            t._state === r.PENDING && ((0, o.J8)(n) ? n.then(t._resolve, t._reject) : (t._state = e, t._value = n, t._executeHandlers()))
                        }
                    }
                }, {
                    key: "__init4",
                    value: function() {
                        var t = this;
                        this._executeHandlers = function() {
                            if (t._state !== r.PENDING) {
                                var e = t._handlers.slice();
                                t._handlers = [], e.forEach((function(e) {
                                    e[0] || (t._state === r.RESOLVED && e[1](t._value), t._state === r.REJECTED && e[2](t._value), e[0] = !0)
                                }))
                            }
                        }
                    }
                }]), t
            }()
        },
        7470: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z1: function() {
                    return d
                },
                ph: function() {
                    return l
                },
                yW: function() {
                    return u
                }
            });
            var r = n(4676),
                a = n(8479);
            t = n.hmd(t);
            var i = (0, a.Rf)(),
                o = {
                    nowSeconds: function() {
                        return Date.now() / 1e3
                    }
                };
            var s = (0, r.KV)() ? function() {
                    try {
                        return (0, r.l$)(t, "perf_hooks").performance
                    } catch (e) {
                        return
                    }
                }() : function() {
                    var t = i.performance;
                    if (t && t.now) return {
                        now: function() {
                            return t.now()
                        },
                        timeOrigin: Date.now() - t.now()
                    }
                }(),
                c = void 0 === s ? o : {
                    nowSeconds: function() {
                        return (s.timeOrigin + s.now()) / 1e3
                    }
                },
                u = o.nowSeconds.bind(o),
                l = c.nowSeconds.bind(c),
                d = function() {
                    var t = i.performance;
                    if (t && t.now) {
                        var e = 36e5,
                            n = t.now(),
                            r = Date.now(),
                            a = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
                            o = a < e,
                            s = t.timing && t.timing.navigationStart,
                            c = "number" === typeof s ? Math.abs(s + n - r) : e;
                        return o || c < e ? a <= c ? ("timeOrigin", t.timeOrigin) : ("navigationStart", s) : ("dateNow", r)
                    }
                    "none"
                }()
        },
        8479: function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.Math == Math ? t : void 0
            }
            n.d(e, {
                Rf: function() {
                    return i
                },
                YO: function() {
                    return o
                },
                n2: function() {
                    return a
                }
            });
            var a = "object" == typeof globalThis && r(globalThis) || r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                return this
            }() || {};

            function i() {
                return a
            }

            function o(t, e, n) {
                var r = n || a,
                    i = r.__SENTRY__ = r.__SENTRY__ || {};
                return i[t] || (i[t] = e())
            }
        },
        9938: function(t, e, n) {
            "use strict";
            var r = n(930),
                a = n(5696),
                i = n(7980);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, n = t.src,
                    o = t.sizes,
                    s = t.unoptimized,
                    p = void 0 !== s && s,
                    h = t.priority,
                    b = void 0 !== h && h,
                    O = t.loading,
                    j = t.lazyRoot,
                    T = void 0 === j ? null : j,
                    C = t.lazyBoundary,
                    R = void 0 === C ? "200px" : C,
                    I = t.className,
                    A = t.quality,
                    P = t.width,
                    D = t.height,
                    M = t.style,
                    N = t.objectFit,
                    L = t.objectPosition,
                    z = t.onLoadingComplete,
                    Z = t.placeholder,
                    F = void 0 === Z ? "empty" : Z,
                    B = t.blurDataURL,
                    U = v(t, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "placeholder", "blurDataURL"]),
                    H = c.useContext(f.ImageConfigContext),
                    q = c.useMemo((function() {
                        var t = y || H || l.imageConfigDefault,
                            e = [].concat(i(t.deviceSizes), i(t.imageSizes)).sort((function(t, e) {
                                return t - e
                            })),
                            n = t.deviceSizes.sort((function(t, e) {
                                return t - e
                            }));
                        return m({}, t, {
                            allSizes: e,
                            deviceSizes: n
                        })
                    }), [H]),
                    W = U,
                    G = o ? "responsive" : "intrinsic";
                "layout" in W && (W.layout && (G = W.layout), delete W.layout);
                var V = x;
                if ("loader" in W) {
                    if (W.loader) {
                        var J = W.loader;
                        V = function(t) {
                            t.config;
                            var e = v(t, ["config"]);
                            return J(e)
                        }
                    }
                    delete W.loader
                }
                var Y = "";
                if (function(t) {
                        return "object" === typeof t && (w(t) || function(t) {
                            return void 0 !== t.src
                        }(t))
                    }(n)) {
                    var $ = w(n) ? n.default : n;
                    if (!$.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));
                    if (B = B || $.blurDataURL, Y = $.src, (!G || "fill" !== G) && (D = D || $.height, P = P || $.width, !$.height || !$.width)) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)))
                }
                n = "string" === typeof n ? n : Y;
                var K = S(P),
                    X = S(D),
                    Q = S(A),
                    tt = !b && ("lazy" === O || "undefined" === typeof O);
                (n.startsWith("data:") || n.startsWith("blob:")) && (p = !0, tt = !1);
                g.has(n) && (tt = !1);
                var et, nt = c.useState(!1),
                    rt = a(nt, 2),
                    at = rt[0],
                    it = rt[1],
                    ot = d.useIntersection({
                        rootRef: T,
                        rootMargin: R,
                        disabled: !tt
                    }),
                    st = a(ot, 3),
                    ct = st[0],
                    ut = st[1],
                    lt = st[2],
                    dt = !tt || ut,
                    ft = {
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    pt = {
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    ht = !1,
                    mt = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: N,
                        objectPosition: L
                    };
                0;
                0;
                var vt = Object.assign({}, M, "raw" === G ? {} : mt),
                    yt = "blur" !== F || at ? {} : {
                        filter: "blur(20px)",
                        backgroundSize: N || "cover",
                        backgroundImage: 'url("'.concat(B, '")'),
                        backgroundPosition: L || "0% 0%"
                    };
                if ("fill" === G) ft.display = "block", ft.position = "absolute", ft.top = 0, ft.left = 0, ft.bottom = 0, ft.right = 0;
                else if ("undefined" !== typeof K && "undefined" !== typeof X) {
                    var gt = X / K,
                        _t = isNaN(gt) ? "100%" : "".concat(100 * gt, "%");
                    "responsive" === G ? (ft.display = "block", ft.position = "relative", ht = !0, pt.paddingTop = _t) : "intrinsic" === G ? (ft.display = "inline-block", ft.position = "relative", ft.maxWidth = "100%", ht = !0, pt.maxWidth = "100%", et = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K, "%27%20height=%27").concat(X, "%27/%3e")) : "fixed" === G && (ft.display = "inline-block", ft.position = "relative", ft.width = K, ft.height = X)
                } else 0;
                var bt = {
                    src: _,
                    srcSet: void 0,
                    sizes: void 0
                };
                dt && (bt = k({
                    config: q,
                    src: n,
                    unoptimized: p,
                    layout: G,
                    width: K,
                    quality: Q,
                    sizes: o,
                    loader: V
                }));
                var wt = n;
                0;
                var kt = "imagesrcset",
                    St = "imagesizes";
                kt = "imageSrcSet", St = "imageSizes";
                var xt = (r(e = {}, kt, bt.srcSet), r(e, St, bt.sizes), e),
                    Ot = c.default.useLayoutEffect,
                    Et = c.useRef(z),
                    jt = c.useRef(n);
                c.useEffect((function() {
                    Et.current = z
                }), [z]), Ot((function() {
                    jt.current !== n && (lt(), jt.current = n)
                }), [lt, n]);
                var Tt = m({
                    isLazy: tt,
                    imgAttributes: bt,
                    heightInt: X,
                    widthInt: K,
                    qualityInt: Q,
                    layout: G,
                    className: I,
                    imgStyle: vt,
                    blurStyle: yt,
                    loading: O,
                    config: q,
                    unoptimized: p,
                    placeholder: F,
                    loader: V,
                    srcString: wt,
                    onLoadingCompleteRef: Et,
                    setBlurComplete: it,
                    setIntersection: ct,
                    isVisible: dt
                }, W);
                return c.default.createElement(c.default.Fragment, null, "raw" === G ? c.default.createElement(E, Object.assign({}, Tt)) : c.default.createElement("span", {
                    style: ft
                }, ht ? c.default.createElement("span", {
                    style: pt
                }, et ? c.default.createElement("img", {
                    style: {
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    alt: "",
                    "aria-hidden": !0,
                    src: et
                }) : null) : null, c.default.createElement(E, Object.assign({}, Tt))), b ? c.default.createElement(u.default, null, c.default.createElement("link", Object.assign({
                    key: "__nimg-" + bt.src + bt.srcSet + bt.sizes,
                    rel: "preload",
                    as: "image",
                    href: bt.srcSet ? void 0 : bt.src
                }, xt))) : null)
            };
            var o, s, c = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                            }
                    return e.default = t, e
                }(n(7294)),
                u = (o = n(6505)) && o.__esModule ? o : {
                    default: o
                },
                l = n(5980),
                d = n(7215),
                f = n(1059),
                p = (n(7206), n(4979));

            function h(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    })))), r.forEach((function(e) {
                        h(t, e, n[e])
                    }))
                }
                return t
            }

            function v(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            s = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image/",
                loader: "default",
                experimentalLayoutRaw: !1
            };
            var y = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image/",
                    loader: "default",
                    experimentalLayoutRaw: !1
                },
                g = new Set,
                _ = (new Map, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
            var b = new Map([
                ["default", function(t) {
                    var e = t.config,
                        n = t.src,
                        r = t.width,
                        a = t.quality;
                    0;
                    if (n.endsWith(".svg") && !e.dangerouslyAllowSVG) return n;
                    return "".concat(p.normalizePathTrailingSlash(e.path), "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(a || 75)
                }],
                ["imgix", function(t) {
                    var e = t.config,
                        n = t.src,
                        r = t.width,
                        a = t.quality,
                        i = new URL("".concat(e.path).concat(j(n))),
                        o = i.searchParams;
                    o.set("auto", o.get("auto") || "format"), o.set("fit", o.get("fit") || "max"), o.set("w", o.get("w") || r.toString()), a && o.set("q", a.toString());
                    return i.href
                }],
                ["cloudinary", function(t) {
                    var e = t.config,
                        n = t.src,
                        r = t.width,
                        a = t.quality,
                        i = ["f_auto", "c_limit", "w_" + r, "q_" + (a || "auto")].join(",") + "/";
                    return "".concat(e.path).concat(i).concat(j(n))
                }],
                ["akamai", function(t) {
                    var e = t.config,
                        n = t.src,
                        r = t.width;
                    return "".concat(e.path).concat(j(n), "?imwidth=").concat(r)
                }],
                ["custom", function(t) {
                    var e = t.src;
                    throw new Error('Image with src "'.concat(e, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                }]
            ]);

            function w(t) {
                return void 0 !== t.default
            }

            function k(t) {
                var e = t.config,
                    n = t.src,
                    r = t.unoptimized,
                    a = t.layout,
                    o = t.width,
                    s = t.quality,
                    c = t.sizes,
                    u = t.loader;
                if (r) return {
                    src: n,
                    srcSet: void 0,
                    sizes: void 0
                };
                var l = function(t, e, n, r) {
                        var a = t.deviceSizes,
                            o = t.allSizes;
                        if (r && ("fill" === n || "responsive" === n || "raw" === n)) {
                            for (var s, c = /(^|\s)(1?\d?\d)vw/g, u = []; s = c.exec(r); s) u.push(parseInt(s[2]));
                            if (u.length) {
                                var l = .01 * Math.min.apply(Math, u);
                                return {
                                    widths: o.filter((function(t) {
                                        return t >= a[0] * l
                                    })),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: o,
                                kind: "w"
                            }
                        }
                        return "number" !== typeof e || "fill" === n || "responsive" === n ? {
                            widths: a,
                            kind: "w"
                        } : {
                            widths: i(new Set([e, 2 * e].map((function(t) {
                                return o.find((function(e) {
                                    return e >= t
                                })) || o[o.length - 1]
                            })))),
                            kind: "x"
                        }
                    }(e, o, a, c),
                    d = l.widths,
                    f = l.kind,
                    p = d.length - 1;
                return {
                    sizes: c || "w" !== f ? c : "100vw",
                    srcSet: d.map((function(t, r) {
                        return "".concat(u({
                            config: e,
                            src: n,
                            quality: s,
                            width: t
                        }), " ").concat("w" === f ? t : r + 1).concat(f)
                    })).join(", "),
                    src: u({
                        config: e,
                        src: n,
                        quality: s,
                        width: d[p]
                    })
                }
            }

            function S(t) {
                return "number" === typeof t ? t : "string" === typeof t ? parseInt(t, 10) : void 0
            }

            function x(t) {
                var e, n = (null === (e = t.config) || void 0 === e ? void 0 : e.loader) || "default",
                    r = b.get(n);
                if (r) return r(t);
                throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "), ". Received: ").concat(n))
            }

            function O(t, e, n, r, a, i) {
                t && t.src !== _ && t["data-loaded-src"] !== e && (t["data-loaded-src"] = e, ("decode" in t ? t.decode() : Promise.resolve()).catch((function() {})).then((function() {
                    if (t.parentNode && (g.add(e), "blur" === r && i(!0), null === a || void 0 === a ? void 0 : a.current)) {
                        var n = t.naturalWidth,
                            o = t.naturalHeight;
                        a.current({
                            naturalWidth: n,
                            naturalHeight: o
                        })
                    }
                })))
            }
            var E = function(t) {
                var e = t.imgAttributes,
                    n = t.heightInt,
                    r = t.widthInt,
                    a = t.qualityInt,
                    i = t.layout,
                    o = t.className,
                    s = t.imgStyle,
                    u = t.blurStyle,
                    l = t.isLazy,
                    d = t.placeholder,
                    f = t.loading,
                    p = t.srcString,
                    h = t.config,
                    y = t.unoptimized,
                    g = t.loader,
                    _ = t.onLoadingCompleteRef,
                    b = t.setBlurComplete,
                    w = t.setIntersection,
                    S = t.onLoad,
                    x = t.onError,
                    E = (t.isVisible, v(t, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onLoad", "onError", "isVisible"]));
                return c.default.createElement(c.default.Fragment, null, c.default.createElement("img", Object.assign({}, E, e, "raw" === i ? {
                    height: n,
                    width: r
                } : {}, {
                    decoding: "async",
                    "data-nimg": i,
                    className: o,
                    style: m({}, s, u),
                    ref: c.useCallback((function(t) {
                        w(t), (null === t || void 0 === t ? void 0 : t.complete) && O(t, p, 0, d, _, b)
                    }), [w, p, i, d, _, b]),
                    onLoad: function(t) {
                        O(t.currentTarget, p, 0, d, _, b), S && S(t)
                    },
                    onError: function(t) {
                        "blur" === d && b(!0), x && x(t)
                    }
                })), (l || "blur" === d) && c.default.createElement("noscript", null, c.default.createElement("img", Object.assign({}, E, k({
                    config: h,
                    src: p,
                    unoptimized: y,
                    layout: i,
                    width: r,
                    quality: a,
                    sizes: e.sizes,
                    loader: g
                }), "raw" === i ? {
                    height: n,
                    width: r
                } : {}, {
                    decoding: "async",
                    "data-nimg": i,
                    style: s,
                    className: o,
                    loading: f || "lazy"
                }))))
            };

            function j(t) {
                return "/" === t[0] ? t.slice(1) : t
            }("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && (Object.assign(e.default, e), t.exports = e.default)
        },
        7913: function(t, e, n) {
            "use strict";
            var r = n(5696);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a, i = (a = n(7294)) && a.__esModule ? a : {
                    default: a
                },
                o = n(2199),
                s = n(1587),
                c = n(7215);

            function u(t, e) {
                if (null == t) return {};
                var n, r, a = function(t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var l = {};

            function d(t, e, n, r) {
                if (t && o.isLocalURL(e)) {
                    t.prefetch(e, n, r).catch((function(t) {
                        0
                    }));
                    var a = r && "undefined" !== typeof r.locale ? r.locale : t && t.locale;
                    l[e + "%" + n + (a ? "%" + a : "")] = !0
                }
            }
            var f = i.default.forwardRef((function(t, e) {
                var n, a = t.legacyBehavior,
                    f = void 0 === a ? !0 !== Boolean(!1) : a,
                    p = t.href,
                    h = t.as,
                    m = t.children,
                    v = t.prefetch,
                    y = t.passHref,
                    g = t.replace,
                    _ = t.shallow,
                    b = t.scroll,
                    w = t.locale,
                    k = t.onClick,
                    S = t.onMouseEnter,
                    x = u(t, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter"]);
                n = m, f && "string" === typeof n && (n = i.default.createElement("a", null, n));
                var O, E = !1 !== v,
                    j = s.useRouter(),
                    T = i.default.useMemo((function() {
                        var t = o.resolveHref(j, p, !0),
                            e = r(t, 2),
                            n = e[0],
                            a = e[1];
                        return {
                            href: n,
                            as: h ? o.resolveHref(j, h) : a || n
                        }
                    }), [j, p, h]),
                    C = T.href,
                    R = T.as,
                    I = i.default.useRef(C),
                    A = i.default.useRef(R);
                f && (O = i.default.Children.only(n));
                var P = f ? O && "object" === typeof O && O.ref : e,
                    D = c.useIntersection({
                        rootMargin: "200px"
                    }),
                    M = r(D, 3),
                    N = M[0],
                    L = M[1],
                    z = M[2],
                    Z = i.default.useCallback((function(t) {
                        A.current === R && I.current === C || (z(), A.current = R, I.current = C), N(t), P && ("function" === typeof P ? P(t) : "object" === typeof P && (P.current = t))
                    }), [R, P, C, z, N]);
                i.default.useEffect((function() {
                    var t = L && E && o.isLocalURL(C),
                        e = "undefined" !== typeof w ? w : j && j.locale,
                        n = l[C + "%" + R + (e ? "%" + e : "")];
                    t && !n && d(j, C, R, {
                        locale: e
                    })
                }), [R, C, L, w, E, j]);
                var F = {
                    ref: Z,
                    onClick: function(t) {
                        f || "function" !== typeof k || k(t), f && O.props && "function" === typeof O.props.onClick && O.props.onClick(t), t.defaultPrevented || function(t, e, n, r, a, i, s, c) {
                            ("A" !== t.currentTarget.nodeName.toUpperCase() || ! function(t) {
                                var e = t.currentTarget.target;
                                return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                            }(t) && o.isLocalURL(n)) && (t.preventDefault(), e[a ? "replace" : "push"](n, r, {
                                shallow: i,
                                locale: c,
                                scroll: s
                            }))
                        }(t, j, C, R, g, _, b, w)
                    },
                    onMouseEnter: function(t) {
                        f || "function" !== typeof S || S(t), f && O.props && "function" === typeof O.props.onMouseEnter && O.props.onMouseEnter(t), o.isLocalURL(C) && d(j, C, R, {
                            priority: !0
                        })
                    }
                };
                if (!f || y || "a" === O.type && !("href" in O.props)) {
                    var B = "undefined" !== typeof w ? w : j && j.locale,
                        U = j && j.isLocaleDomain && o.getDomainLocale(R, B, j && j.locales, j && j.domainLocales);
                    F.href = U || o.addBasePath(o.addLocale(R, B, j && j.defaultLocale))
                }
                return f ? i.default.cloneElement(O, F) : i.default.createElement("a", Object.assign({}, x, F), n)
            }));
            e.default = f, ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && (Object.assign(e.default, e), t.exports = e.default)
        },
        7215: function(t, e, n) {
            "use strict";
            var r = n(5696);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useIntersection = function(t) {
                var e = t.rootRef,
                    n = t.rootMargin,
                    u = t.disabled || !o,
                    l = a.useRef(),
                    d = a.useState(!1),
                    f = r(d, 2),
                    p = f[0],
                    h = f[1],
                    m = a.useState(e ? e.current : null),
                    v = r(m, 2),
                    y = v[0],
                    g = v[1],
                    _ = a.useCallback((function(t) {
                        l.current && (l.current(), l.current = void 0), u || p || t && t.tagName && (l.current = function(t, e, n) {
                            var r = function(t) {
                                    var e, n = {
                                            root: t.root || null,
                                            margin: t.rootMargin || ""
                                        },
                                        r = c.find((function(t) {
                                            return t.root === n.root && t.margin === n.margin
                                        }));
                                    r ? e = s.get(r) : (e = s.get(n), c.push(n));
                                    if (e) return e;
                                    var a = new Map,
                                        i = new IntersectionObserver((function(t) {
                                            t.forEach((function(t) {
                                                var e = a.get(t.target),
                                                    n = t.isIntersecting || t.intersectionRatio > 0;
                                                e && n && e(n)
                                            }))
                                        }), t);
                                    return s.set(n, e = {
                                        id: n,
                                        observer: i,
                                        elements: a
                                    }), e
                                }(n),
                                a = r.id,
                                i = r.observer,
                                o = r.elements;
                            return o.set(t, e), i.observe(t),
                                function() {
                                    if (o.delete(t), i.unobserve(t), 0 === o.size) {
                                        i.disconnect(), s.delete(a);
                                        var e = c.findIndex((function(t) {
                                            return t.root === a.root && t.margin === a.margin
                                        }));
                                        e > -1 && c.splice(e, 1)
                                    }
                                }
                        }(t, (function(t) {
                            return t && h(t)
                        }), {
                            root: y,
                            rootMargin: n
                        }))
                    }), [u, y, n, p]),
                    b = a.useCallback((function() {
                        h(!1)
                    }), []);
                return a.useEffect((function() {
                    if (!o && !p) {
                        var t = i.requestIdleCallback((function() {
                            return h(!0)
                        }));
                        return function() {
                            return i.cancelIdleCallback(t)
                        }
                    }
                }), [p]), a.useEffect((function() {
                    e && g(e.current)
                }), [e]), [_, p, b]
            };
            var a = n(7294),
                i = n(8065),
                o = "undefined" !== typeof IntersectionObserver;
            var s = new Map,
                c = [];
            ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && (Object.assign(e.default, e), t.exports = e.default)
        },
        7285: function(t, e, n) {
            "use strict";
            var r;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AmpStateContext = void 0;
            var a = ((r = n(7294)) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            e.AmpStateContext = a
        },
        9546: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isInAmpMode = o, e.useAmp = function() {
                return o(a.default.useContext(i.AmpStateContext))
            };
            var r, a = (r = n(7294)) && r.__esModule ? r : {
                    default: r
                },
                i = n(7285);

            function o() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.ampFirst,
                    n = void 0 !== e && e,
                    r = t.hybrid,
                    a = void 0 !== r && r,
                    i = t.hasQuery,
                    o = void 0 !== i && i;
                return n || a && o
            }("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && (Object.assign(e.default, e), t.exports = e.default)
        },
        6505: function(t, e, n) {
            "use strict";
            var r = n(930);

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.defaultHead = d, e.default = void 0;
            var i, o = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                            }
                    return e.default = t, e
                }(n(7294)),
                s = (i = n(148)) && i.__esModule ? i : {
                    default: i
                },
                c = n(7285),
                u = n(523),
                l = n(9546);
            n(7206);

            function d() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = [o.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return t || e.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), e
            }

            function f(t, e) {
                return "string" === typeof e || "number" === typeof e ? t : e.type === o.default.Fragment ? t.concat(o.default.Children.toArray(e.props.children).reduce((function(t, e) {
                    return "string" === typeof e || "number" === typeof e ? t : t.concat(e)
                }), [])) : t.concat(e)
            }
            var p = ["name", "httpEquiv", "charSet", "itemProp"];

            function h(t, e) {
                return t.reduce((function(t, e) {
                    var n = o.default.Children.toArray(e.props.children);
                    return t.concat(n)
                }), []).reduce(f, []).reverse().concat(d(e.inAmpMode)).filter(function() {
                    var t = new Set,
                        e = new Set,
                        n = new Set,
                        r = {};
                    return function(a) {
                        var i = !0,
                            o = !1;
                        if (a.key && "number" !== typeof a.key && a.key.indexOf("$") > 0) {
                            o = !0;
                            var s = a.key.slice(a.key.indexOf("$") + 1);
                            t.has(s) ? i = !1 : t.add(s)
                        }
                        switch (a.type) {
                            case "title":
                            case "base":
                                e.has(a.type) ? i = !1 : e.add(a.type);
                                break;
                            case "meta":
                                for (var c = 0, u = p.length; c < u; c++) {
                                    var l = p[c];
                                    if (a.props.hasOwnProperty(l))
                                        if ("charSet" === l) n.has(l) ? i = !1 : n.add(l);
                                        else {
                                            var d = a.props[l],
                                                f = r[l] || new Set;
                                            "name" === l && o || !f.has(d) ? (f.add(d), r[l] = f) : i = !1
                                        }
                                }
                        }
                        return i
                    }
                }()).reverse().map((function(t, n) {
                    var i = t.key || n;
                    if (!e.inAmpMode && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((function(e) {
                            return t.props.href.startsWith(e)
                        }))) {
                        var s = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? a(Object(n), !0).forEach((function(e) {
                                    r(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({}, t.props || {});
                        return s["data-href"] = s.href, s.href = void 0, s["data-optimized-fonts"] = !0, o.default.cloneElement(t, s)
                    }
                    return o.default.cloneElement(t, {
                        key: i
                    })
                }))
            }
            var m = function(t) {
                var e = t.children,
                    n = o.useContext(c.AmpStateContext),
                    r = o.useContext(u.HeadManagerContext);
                return o.default.createElement(s.default, {
                    reduceComponentsToState: h,
                    headManager: r,
                    inAmpMode: l.isInAmpMode(n)
                }, e)
            };
            e.default = m, ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && (Object.assign(e.default, e), t.exports = e.default)
        },
        148: function(t, e, n) {
            "use strict";
            var r = n(7980),
                a = n(3227),
                i = n(8361),
                o = (n(2191), n(5971)),
                s = n(2715),
                c = n(1193);

            function u(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(t);
                    if (e) {
                        var a = c(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var l = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                            r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                        }
                return e.default = t, e
            }(n(7294));
            var d = function(t) {
                o(n, t);
                var e = u(n);

                function n(t) {
                    var i;
                    return a(this, n), (i = e.call(this, t)).emitChange = function() {
                        i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances), i.props))
                    }, i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances, i
                }
                return i(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.emitChange()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return null
                    }
                }]), n
            }(l.Component);
            e.default = d
        },
        9081: function(t, e, n) {
            "use strict";
            n(5988)
        },
        9885: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return D
                }
            });
            var r = n(9499),
                a = n(29),
                i = n(7794),
                o = n.n(i),
                s = (n(6774), n(7294)),
                c = n(1163),
                u = (n(5675), n(8193)),
                l = n(5893),
                d = function(t) {
                    var e = t.footerMargin;
                    return (0, l.jsx)("footer", {
                        className: "text-gray-600 bg-white body-font dark:bg-gray-800 dark:text-white ".concat(e),
                        children: (0, l.jsxs)("div", {
                            className: "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
                            children: [(0, l.jsxs)("div", {
                                className: "flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-200",
                                children: [(0, l.jsx)("img", {
                                    width: 48,
                                    height: 48,
                                    src: "/img/logo-blue.png",
                                    name: "logo",
                                    alt: "CodeWithHarry Logo",
                                    className: "rounded h-12"
                                }), (0, l.jsx)("div", {
                                    className: "ml-3 text-xl",
                                    children: "CodeWithHarry"
                                })]
                            }), (0, l.jsxs)("p", {
                                className: "text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 mt-4 md:mt-2 mb-2 md:mb-0 text-center dark:text-gray-400",
                                children: ["Copyright \xa9 ", (new Date).getFullYear(), " CodeWithHarry.com"]
                            }), (0, l.jsxs)("div", {
                                className: "inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start",
                                style: {
                                    alignItems: "center"
                                },
                                children: [(0, l.jsx)("a", {
                                    href: "https://www.facebook.com/codewithharry",
                                    "aria-label": "facebook",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-gray-500 dark:text-gray-300",
                                    children: (0, l.jsx)("svg", {
                                        fill: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: (0, l.jsx)("path", {
                                            d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                        })
                                    })
                                }), (0, l.jsx)("a", {
                                    href: "https://www.twitter.com/codewithharry",
                                    "aria-label": "twitter",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "ml-3 text-gray-500 dark:text-gray-300",
                                    children: (0, l.jsx)("svg", {
                                        fill: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: (0, l.jsx)("path", {
                                            d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                        })
                                    })
                                }), (0, l.jsx)("a", {
                                    href: "https://www.instagram.com/codewithharry",
                                    "aria-label": "instagram",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "ml-3 text-gray-500 dark:text-gray-300",
                                    children: (0, l.jsxs)("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [(0, l.jsx)("rect", {
                                            width: "20",
                                            height: "20",
                                            x: "2",
                                            y: "2",
                                            rx: "5",
                                            ry: "5"
                                        }), (0, l.jsx)("path", {
                                            d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                        })]
                                    })
                                }), (0, l.jsx)("a", {
                                    href: "https://www.github.com/codewithharry",
                                    "aria-label": "github",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "ml-3 text-gray-500 dark:text-gray-300",
                                    children: (0, l.jsx)(u.RrF, {
                                        className: "text-xl"
                                    })
                                })]
                            })]
                        })
                    })
                },
                f = n(1664),
                p = n.n(f),
                h = n(3750);
            n(9081);

            function m(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? m(Object(n), !0).forEach((function(e) {
                        (0, r.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var y = function(t) {
                var e = t.user,
                    n = t.logout,
                    r = t.darkMode,
                    a = t.setDarkMode,
                    i = t.toggleDarkMode,
                    o = (0, c.useRouter)(),
                    d = (0, s.useState)({
                        menu: "hidden",
                        tutorials: "hidden"
                    }),
                    f = d[0],
                    m = d[1],
                    y = (0, s.useState)("hidden"),
                    g = y[0],
                    _ = y[1];
                return (0, s.useEffect)((function() {
                    m({
                        menu: "hidden",
                        tutorials: "hidden"
                    }), _("hidden")
                }), [o.query]), (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        id: "imgpreview2",
                        className: "w-full z-10 sticky bg-white top-0 border-b border-grey-light shadow-md dark:bg-gray-800 dark:border-black",
                        children: [(0, l.jsxs)("div", {
                            className: "w-full flex flex-wrap items-center lg:justify-between mt-0 py-4 ",
                            children: [(0, l.jsx)("div", {
                                className: "px-0 lg:pl-4 flex items-center lg:mx-4 cursor-pointer text-purple-700 text-md md:text-xl font-bold mx-3 dark:text-purple-300",
                                children: (0, l.jsx)(p(), {
                                    href: "/",
                                    children: (0, l.jsxs)("span", {
                                        children: [(0, l.jsx)("b", {
                                            className: "font-bold",
                                            children: "</>"
                                        }), " CodeWithHarry"]
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center md:hidden",
                                onClick: function() {
                                    "hidden" === f.menu ? m(v(v({}, f), {}, {
                                        menu: "block"
                                    })) : m(v(v({}, f), {}, {
                                        menu: "hidden"
                                    }))
                                },
                                children: [(0, l.jsx)("div", {
                                    className: "text-purple-700 text-md font-semibold",
                                    children: "Menu"
                                }), (0, l.jsx)(u.i0B, {
                                    className: "text-purple-700 mt-1"
                                })]
                            }), (0, l.jsx)(h.gxG, {
                                className: "md:hidden w-4 text-purple-700 mt-1 ml-2 cursor-pointer dark:text-white",
                                size: 28,
                                onClick: function() {
                                    a(!r), i()
                                }
                            }), e.token ? (0, l.jsx)("button", {
                                className: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 absolute right-3 md:hidden",
                                onClick: n,
                                children: "Logout"
                            }) : (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsx)(p(), {
                                    href: "/login",
                                    children: (0, l.jsx)("button", {
                                        className: "md:hidden text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 absolute right-3 md:right-12",
                                        children: "Login"
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: "w-full flex-grow lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto h-0 lg:h-auto overflow-hidden mt-2 lg:mt-0 z-20 transition-all",
                                id: "nav-content",
                                children: [(0, l.jsxs)("ul", {
                                    className: "flex items-center flex-col lg:flex-row",
                                    children: [(0, l.jsx)("div", {
                                        id: "search-toggle",
                                        className: "search-icon cursor-pointer px-6 hidden",
                                        children: (0, l.jsx)("svg", {
                                            className: "fill-current pointer-events-none text-grey-darkest w-4 h-4 inline",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            children: (0, l.jsx)("path", {
                                                d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                                            })
                                        })
                                    }), (0, l.jsx)("li", {
                                        className: "mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 dark:text-white",
                                        children: (0, l.jsx)(p(), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }), (0, l.jsx)("li", {
                                        className: "mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 dark:text-white",
                                        children: (0, l.jsx)(p(), {
                                            href: "/videos/",
                                            children: "Courses"
                                        })
                                    }), (0, l.jsx)("li", {
                                        className: "mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 dark:text-white",
                                        children: (0, l.jsx)(p(), {
                                            href: "/tutorials/",
                                            children: "Tutorial"
                                        })
                                    }), (0, l.jsx)("li", {
                                        className: "mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 dark:text-white",
                                        children: (0, l.jsx)(p(), {
                                            href: "/blog/",
                                            children: "Blog"
                                        })
                                    }), (0, l.jsx)("li", {
                                        className: "mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 dark:text-white",
                                        children: (0, l.jsx)(p(), {
                                            href: "/notes/",
                                            children: "Notes"
                                        })
                                    }), (0, l.jsx)("li", {
                                        className: "mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 dark:text-white",
                                        children: (0, l.jsx)(p(), {
                                            href: "/contact/",
                                            children: "Contact"
                                        })
                                    }), (0, l.jsx)("li", {
                                        className: "mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 dark:text-white",
                                        children: (0, l.jsx)(p(), {
                                            href: "/my-gear/",
                                            children: "My Gear"
                                        })
                                    }), (0, l.jsx)("li", {
                                        className: "mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 dark:text-white",
                                        children: (0, l.jsx)(p(), {
                                            href: "/work/",
                                            children: "Work With Us"
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(h.gxG, {
                                            className: "hidden md:block text-purple-700 mt-1 ml-2 cursor-pointer dark:text-white",
                                            size: 28,
                                            onClick: function() {
                                                a(!r), i()
                                            }
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "text-center my-2 pr-4 pl-2",
                                    children: e.token ? (0, l.jsx)("button", {
                                        className: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 dark:bg-purple-500 dark:hover:bg-purple-800",
                                        onClick: n,
                                        children: "Logout"
                                    }) : (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(p(), {
                                            href: "/login",
                                            children: (0, l.jsx)("button", {
                                                className: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 dark:bg-purple-500 dark:hover:bg-purple-800",
                                                children: "Login"
                                            })
                                        }), (0, l.jsx)(p(), {
                                            href: "/signup",
                                            children: (0, l.jsx)("button", {
                                                className: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 dark:bg-purple-500 dark:hover:bg-purple-800",
                                                children: "Signup"
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }), (0, l.jsx)("hr", {
                            className: "dark:border-gray-500"
                        }), (0, l.jsxs)("div", {
                            className: "max-h-[6vh] min-h-[40px] flex items-center ml-3 mr-3 md:ml-10 md:mr-10 my-1",
                            children: [(0, l.jsx)(p(), {
                                href: "/",
                                children: (0, l.jsx)("span", {
                                    children: (0, l.jsx)(u.V9Z, {
                                        className: "text-purple-700 text-xl cursor-pointer dark:text-purple-300"
                                    })
                                })
                            }), (0, l.jsxs)("ul", {
                                className: "space-x-7 m-auto text-purple-700 font-semibold hidden md:flex items-center",
                                children: [(0, l.jsx)("li", {
                                    className: "cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300",
                                    children: (0, l.jsx)(p(), {
                                        href: "/tutorial/html-home",
                                        children: "HTML"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300",
                                    children: (0, l.jsx)(p(), {
                                        href: "/tutorial/css-home",
                                        children: "CSS"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300",
                                    children: (0, l.jsx)(p(), {
                                        href: "/tutorial/js",
                                        children: "JS"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300",
                                    children: (0, l.jsx)(p(), {
                                        href: "/tutorial/c",
                                        children: "C"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300",
                                    children: (0, l.jsx)(p(), {
                                        href: "/tutorial/cplusplus",
                                        children: "C++"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300",
                                    children: (0, l.jsx)(p(), {
                                        href: "/tutorial/java",
                                        children: "JAVA"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300",
                                    children: (0, l.jsx)(p(), {
                                        href: "/tutorial/python",
                                        children: "PYTHON"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300",
                                    children: (0, l.jsx)(p(), {
                                        href: "/tutorial/php",
                                        children: "PHP"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300",
                                    children: (0, l.jsx)(p(), {
                                        href: "/tutorial/react-home/",
                                        children: "REACT JS"
                                    })
                                })]
                            }), (0, l.jsx)("input", {
                                onKeyDown: function(t) {
                                    "Enter" === t.key && "" !== t.target.value && (window.location.href = "/search?query=" + t.target.value)
                                },
                                id: "search",
                                className: "".concat(g, " right-10 md:right-10 absolute w-48 md:w-60 h-8 bg-white rounded border-2 border-purple-500 focus:border-purple-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-500 dark:text-gray-200 "),
                                placeholder: "Search..."
                            }), (0, l.jsx)(u.RB5, {
                                className: "text-purple-700 dark:text-purple-300 cursor-pointer text-2xl absolute right-3 md:right-12 }",
                                onClick: function() {
                                    "hidden" === g ? (_("block"), setTimeout((function() {
                                        document.getElementById("search").focus()
                                    }), 0)) : _("hidden")
                                }
                            })]
                        }), (0, l.jsx)("div", {
                            className: "bg-purple-100 text-center shadow-lg absolute w-full dark:bg-gray-600 ".concat(f.menu, " mt-1 md:hidden"),
                            children: (0, l.jsxs)("ul", {
                                children: [(0, l.jsx)("li", {
                                    className: "pt-4 text-purple-500 font-bold",
                                    children: (0, l.jsx)(p(), {
                                        href: "/",
                                        children: "Home"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "pt-4 text-purple-500 font-bold",
                                    children: (0, l.jsx)(p(), {
                                        href: "/videos/",
                                        children: "Courses"
                                    })
                                }), (0, l.jsxs)("li", {
                                    className: "pt-4 text-purple-500 font-bold flex justify-center ml-3",
                                    onClick: function() {
                                        "hidden" === f.tutorials ? m(v(v({}, f), {}, {
                                            tutorials: "block"
                                        })) : m(v(v({}, f), {}, {
                                            tutorials: "hidden"
                                        }))
                                    },
                                    children: ["Tutorial ", (0, l.jsx)(u.i0B, {
                                        className: "mt-1"
                                    })]
                                }), (0, l.jsx)("li", {
                                    className: "my-2 text-purple-500 font-semibold text-sm bg-purple-200 dark:bg-gray-700  ".concat(f.tutorials),
                                    children: (0, l.jsxs)("ul", {
                                        children: [(0, l.jsx)("li", {
                                            className: "cursor-pointer py-1 border-y-2 dark:border-gray-400",
                                            children: (0, l.jsx)(p(), {
                                                href: "/tutorial/html-home",
                                                children: "HTML"
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "cursor-pointer py-1 border-b-2 dark:border-gray-400",
                                            children: (0, l.jsx)(p(), {
                                                href: "/tutorial/css-home",
                                                children: "CSS"
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "cursor-pointer py-1 border-b-2 dark:border-gray-400",
                                            children: (0, l.jsx)(p(), {
                                                href: "/tutorial/js",
                                                children: "JS"
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "cursor-pointer py-1 border-b-2 dark:border-gray-400",
                                            children: (0, l.jsx)(p(), {
                                                href: "/tutorial/c",
                                                children: "C"
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "cursor-pointer py-1 border-b-2 dark:border-gray-400",
                                            children: (0, l.jsx)(p(), {
                                                href: "/tutorial/cplusplus",
                                                children: "C++"
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "cursor-pointer py-1 border-b-2 dark:border-gray-400",
                                            children: (0, l.jsx)(p(), {
                                                href: "/tutorial/java",
                                                children: "JAVA"
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "cursor-pointer py-1 border-b-2 dark:border-gray-400",
                                            children: (0, l.jsx)(p(), {
                                                href: "/tutorial/python",
                                                children: "PYTHON"
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "cursor-pointer py-1 border-b-2 dark:border-gray-400",
                                            children: (0, l.jsx)(p(), {
                                                href: "/tutorial/php",
                                                children: "PHP"
                                            })
                                        }), (0, l.jsx)("li", {
                                            className: "cursor-pointer py-1 border-b-2 dark:border-gray-400",
                                            children: (0, l.jsx)(p(), {
                                                href: "/tutorial/react-home/",
                                                children: "REACT JS"
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "pt-4 text-purple-500 font-bold",
                                    children: (0, l.jsx)(p(), {
                                        href: "/blog/",
                                        children: "Blog"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "pt-4 text-purple-500 font-bold",
                                    children: (0, l.jsx)(p(), {
                                        href: "/notes/",
                                        children: "Notes"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "pt-4 text-purple-500 font-bold",
                                    children: (0, l.jsx)(p(), {
                                        href: "/contact/",
                                        children: "Contact"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "pt-4 text-purple-500 font-bold",
                                    children: (0, l.jsx)(p(), {
                                        href: "/my-gear/",
                                        children: "My Gear"
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "pt-4 pb-4 text-purple-500 font-bold",
                                    children: (0, l.jsx)(p(), {
                                        href: "/work/",
                                        children: "Work With Us"
                                    })
                                })]
                            })
                        })]
                    })
                })
            };
            const g = () => {};

            function _(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            }
            var b = (0, s.forwardRef)((({
                    progress: t,
                    height: e = 2,
                    className: n = "",
                    color: r = "red",
                    background: a = "transparent",
                    onLoaderFinished: i,
                    transitionTime: o = 300,
                    loaderSpeed: c = 500,
                    waitingTime: u = 1e3,
                    shadow: l = !0,
                    containerStyle: d = {},
                    style: f = {},
                    shadowStyle: p = {},
                    containerClassName: h = ""
                }, m) => {
                    const v = (0, s.useRef)(!1),
                        [y, b] = (0, s.useState)(0),
                        [w, k] = (0, s.useState)({
                            active: !1,
                            startingValue: 20,
                            refreshRate: 1e3
                        }),
                        [S, x] = (0, s.useState)(!1),
                        [O, E] = (0, s.useState)({
                            active: !1,
                            value: 20
                        }),
                        j = {
                            height: "100%",
                            background: r,
                            transition: `all ${c}ms ease`,
                            width: "0%"
                        },
                        T = {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            height: e,
                            background: a,
                            zIndex: 99999999999,
                            width: "100%"
                        },
                        C = {
                            boxShadow: `0 0 10px ${r}, 0 0 10px ${r}`,
                            width: "5%",
                            opacity: 1,
                            position: "absolute",
                            height: "100%",
                            transition: `all ${c}ms ease`,
                            transform: "rotate(3deg) translate(0px, -4px)",
                            left: "-10rem"
                        },
                        [R, I] = (0, s.useState)(j),
                        [A, P] = (0, s.useState)(C);
                    (0, s.useEffect)((() => (v.current = !0, () => {
                        v.current = !1
                    })), []), (0, s.useImperativeHandle)(m, (() => ({
                        continuousStart(t, e = 1e3) {
                            if (O.active) return;
                            if (S) return void console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
                            const n = t || _(10, 20);
                            k({
                                active: !0,
                                refreshRate: e,
                                startingValue: t
                            }), b(n), D(n)
                        },
                        staticStart(t) {
                            if (w.active) return;
                            if (S) return void console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
                            const e = t || _(30, 50);
                            E({
                                active: !0,
                                value: e
                            }), b(e), D(e)
                        },
                        complete() {
                            S ? console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!") : (b(100), D(100))
                        }
                    }))), (0, s.useEffect)((() => {
                        I({ ...R,
                            background: r
                        }), P({ ...A,
                            boxShadow: `0 0 10px ${r}, 0 0 5px ${r}`
                        })
                    }), [r]), (0, s.useEffect)((() => {
                        if (m) {
                            if (m && void 0 !== t) return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');
                            D(y), x(!1)
                        } else t && D(t), x(!0)
                    }), [t]);
                    const D = t => {
                        t >= 100 ? (I({ ...R,
                            width: "100%"
                        }), l && P({ ...A,
                            left: t - 10 + "%"
                        }), setTimeout((() => {
                            v.current && (I({ ...R,
                                opacity: 0,
                                width: "100%",
                                transition: `all ${o}ms ease-out`,
                                color: r
                            }), setTimeout((() => {
                                v.current && (w.active && (k({ ...w,
                                    active: !1
                                }), b(0), D(0)), O.active && (E({ ...O,
                                    active: !1
                                }), b(0), D(0)), i && i(), b(0), D(0))
                            }), o))
                        }), u)) : (I((e => ({ ...e,
                            width: t + "%",
                            opacity: 1,
                            transition: t > 0 ? `all ${c}ms ease` : ""
                        }))), l && P({ ...A,
                            left: t - 5.5 + "%",
                            transition: t > 0 ? `all ${c}ms ease` : ""
                        }))
                    };
                    return function(t, e, n) {
                        const r = (0, s.useRef)(g);
                        (0, s.useEffect)((() => {
                            r.current = t
                        })), (0, s.useEffect)((() => {
                            n && null !== e && !1 !== e && r.current()
                        }), [n]), (0, s.useEffect)((() => {
                            if (null === e || !1 === e) return;
                            const t = setInterval((() => r.current()), e);
                            return () => clearInterval(t)
                        }), [e])
                    }((() => {
                        const t = _(10, 20);
                        y + t < 90 && (b(y + t), D(y + t))
                    }), w.active ? w.refreshRate : null), (0, s.createElement)("div", {
                        className: h,
                        style: { ...T,
                            ...d
                        }
                    }, (0, s.createElement)("div", {
                        className: n,
                        style: { ...R,
                            ...f
                        }
                    }, l ? (0, s.createElement)("div", {
                        style: { ...A,
                            ...p
                        }
                    }) : null))
                })),
                w = n(9008),
                k = n.n(w),
                S = n(4298),
                x = n.n(S),
                O = n(2777),
                E = n(2262),
                j = n(1531),
                T = n(3553),
                C = n(7247);

            function R(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, C.Z)(t);
                    if (e) {
                        var a = (0, C.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, T.Z)(this, n)
                }
            }
            var I = function(t) {
                (0, j.Z)(n, t);
                var e = R(n);

                function n(t) {
                    var r;
                    return (0, O.Z)(this, n), (r = e.call(this, t)).state = {
                        hasError: !1
                    }, r
                }
                return (0, E.Z)(n, [{
                    key: "componentDidCatch",
                    value: function(t, e) {
                        console.log({
                            error: t,
                            errorInfo: e
                        }), localStorage.clear(), sessionStorage.clear()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return this.state.hasError ? (0, l.jsxs)("div", {
                            className: "bg-red-100 p-6 rounded-lg shadow-md text-red-500",
                            children: [(0, l.jsx)("h2", {
                                className: "text-2xl font-bold",
                                children: "Oops, there is an error!"
                            }), (0, l.jsx)("p", {
                                className: "mb-4 text-lg",
                                children: "Something went wrong. Please try again."
                            }), (0, l.jsx)("button", {
                                type: "button",
                                onClick: function() {
                                    return t.setState({
                                        hasError: !1
                                    })
                                },
                                className: "bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                                children: "Click here to try reloading this page"
                            }), (0, l.jsx)(p(), {
                                type: "button",
                                href: "/",
                                className: "bg-blue-500 hover:bg-blue-700 m-2 text-white font-bold py-2 px-4 rounded",
                                children: "Click here to go to home"
                            })]
                        }) : this.props.children
                    }
                }], [{
                    key: "getDerivedStateFromError",
                    value: function(t) {
                        return {
                            hasError: !0
                        }
                    }
                }]), n
            }(s.Component);

            function A(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? A(Object(n), !0).forEach((function(e) {
                        (0, r.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var D = function(t) {
                var e = t.Component,
                    n = t.pageProps,
                    r = (0, s.useState)(0),
                    i = r[0],
                    u = r[1],
                    f = (0, s.useState)(""),
                    p = f[0],
                    h = f[1],
                    m = (0, s.useState)({
                        value: null
                    }),
                    v = m[0],
                    g = m[1],
                    _ = (0, s.useState)(0),
                    w = _[0],
                    S = _[1],
                    O = (0, c.useRouter)();
                (0, s.useEffect)((function() {
                    try {
                        var t = JSON.parse(localStorage.getItem("cwhuser"));
                        t ? g(t) : (localStorage.removeItem("cwhuser"), g({
                            token: void 0,
                            username: void 0,
                            email: void 0
                        })), O.events.on("routeChangeStart", (function() {
                            u(40)
                        })), O.events.on("routeChangeComplete", (function() {
                            u(100)
                        })), O.pathname.startsWith("/tutorial") ? h("md:pl-[15%]") : h("")
                    } catch (e) {
                        localStorage.clear()
                    }
                }), [O.query]);
                var E = function() {
                        var t = (0, a.Z)(o().mark((function t() {
                            return o().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, JSON.parse(localStorage.getItem("admin"));
                                    case 3:
                                        t.sent.username && O.push("/"), t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0), O.push("/");
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    j = (0, s.useState)(!1),
                    T = j[0],
                    C = j[1];
                return (0, s.useEffect)((function() {
                    "true" === localStorage.getItem("darkMode") && C(!0)
                }), []), (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(I, {
                        children: (0, l.jsxs)("div", {
                            className: T ? "dark" : "",
                            children: [(0, l.jsxs)(k(), {
                                children: [(0, l.jsx)("link", {
                                    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
                                    rel: "stylesheet"
                                }), (0, l.jsx)("link", {
                                    rel: "shortcut icon",
                                    href: "/img/favicon.ico",
                                    type: "image/x-icon"
                                }), (0, l.jsx)("meta", {
                                    name: "viewport",
                                    content: "width=device-width, initial-scale=1"
                                }), (0, l.jsx)("script", {
                                    async: !0,
                                    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9655830461045889",
                                    crossOrigin: "anonymous"
                                })]
                            }), (0, l.jsx)(x(), {
                                id: "googleanal1",
                                strategy: "lazyOnload",
                                async: !0,
                                src: "https://www.googletagmanager.com/gtag/js?id=G-TLJ82JF418"
                            }), (0, l.jsx)(x(), {
                                id: "googleanal2",
                                strategy: "lazyOnload",
                                children: "window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n\n      gtag('config', 'G-TLJ82JF418');"
                            }), (0, l.jsx)(b, {
                                color: "purple",
                                progress: i,
                                waitingTime: 500,
                                onLoaderFinished: function() {
                                    return u(0)
                                }
                            }), (0, l.jsx)(y, {
                                darkMode: T,
                                setDarkMode: C,
                                user: v,
                                logout: function() {
                                    localStorage.removeItem("cwhuser"), g({
                                        token: null
                                    }), S(Math.random()), O.push("/login")
                                },
                                toggleDarkMode: function() {
                                    T ? (localStorage.setItem("darkMode", "false"), C(!1)) : (localStorage.setItem("darkMode", "true"), C(!0))
                                }
                            }, w), (0, l.jsx)(e, P({
                                darkMode: T,
                                adminCheck: E
                            }, n)), (0, l.jsx)(d, {
                                darkMode: T,
                                footerMargin: p
                            })]
                        })
                    })
                })
            }
        },
        3454: function(t, e, n) {
            "use strict";
            var r, a;
            t.exports = (null === (r = n.g.process) || void 0 === r ? void 0 : r.env) && "object" === typeof(null === (a = n.g.process) || void 0 === a ? void 0 : a.env) ? n.g.process : n(7663)
        },
        1118: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(9885)
            }])
        },
        6774: function() {},
        7663: function(t) {
            ! function() {
                var e = {
                        162: function(t) {
                            var e, n, r = t.exports = {};

                            function a() {
                                throw new Error("setTimeout has not been defined")
                            }

                            function i() {
                                throw new Error("clearTimeout has not been defined")
                            }

                            function o(t) {
                                if (e === setTimeout) return setTimeout(t, 0);
                                if ((e === a || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                                try {
                                    return e(t, 0)
                                } catch (r) {
                                    try {
                                        return e.call(null, t, 0)
                                    } catch (r) {
                                        return e.call(this, t, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    e = "function" === typeof setTimeout ? setTimeout : a
                                } catch (t) {
                                    e = a
                                }
                                try {
                                    n = "function" === typeof clearTimeout ? clearTimeout : i
                                } catch (t) {
                                    n = i
                                }
                            }();
                            var s, c = [],
                                u = !1,
                                l = -1;

                            function d() {
                                u && s && (u = !1, s.length ? c = s.concat(c) : l = -1, c.length && f())
                            }

                            function f() {
                                if (!u) {
                                    var t = o(d);
                                    u = !0;
                                    for (var e = c.length; e;) {
                                        for (s = c, c = []; ++l < e;) s && s[l].run();
                                        l = -1, e = c.length
                                    }
                                    s = null, u = !1,
                                        function(t) {
                                            if (n === clearTimeout) return clearTimeout(t);
                                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                                            try {
                                                n(t)
                                            } catch (e) {
                                                try {
                                                    return n.call(null, t)
                                                } catch (e) {
                                                    return n.call(this, t)
                                                }
                                            }
                                        }(t)
                                }
                            }

                            function p(t, e) {
                                this.fun = t, this.array = e
                            }

                            function h() {}
                            r.nextTick = function(t) {
                                var e = new Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                c.push(new p(t, e)), 1 !== c.length || u || o(f)
                            }, p.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(t) {
                                return []
                            }, r.binding = function(t) {
                                throw new Error("process.binding is not supported")
                            }, r.cwd = function() {
                                return "/"
                            }, r.chdir = function(t) {
                                throw new Error("process.chdir is not supported")
                            }, r.umask = function() {
                                return 0
                            }
                        }
                    },
                    n = {};

                function r(t) {
                    var a = n[t];
                    if (void 0 !== a) return a.exports;
                    var i = n[t] = {
                            exports: {}
                        },
                        o = !0;
                    try {
                        e[t](i, i.exports, r), o = !1
                    } finally {
                        o && delete n[t]
                    }
                    return i.exports
                }
                r.ab = "//";
                var a = r(162);
                t.exports = a
            }()
        },
        9008: function(t, e, n) {
            t.exports = n(6505)
        },
        5675: function(t, e, n) {
            n(9938)
        },
        1664: function(t, e, n) {
            t.exports = n(7913)
        },
        1163: function(t, e, n) {
            t.exports = n(1587)
        },
        4298: function(t, e, n) {
            t.exports = n(7829)
        },
        8193: function(t, e, n) {
            "use strict";
            n.d(e, {
                RB5: function() {
                    return l
                },
                RrF: function() {
                    return i
                },
                SV5: function() {
                    return c
                },
                V9Z: function() {
                    return o
                },
                _nT: function() {
                    return u
                },
                i0B: function() {
                    return a
                },
                wod: function() {
                    return s
                }
            });
            var r = n(8357);

            function a(t) {
                return (0, r.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 1024 1024"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                        }
                    }]
                })(t)
            }

            function i(t) {
                return (0, r.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 1024 1024"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                        }
                    }]
                })(t)
            }

            function o(t) {
                return (0, r.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 1024 1024"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"
                        }
                    }]
                })(t)
            }

            function s(t) {
                return (0, r.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 1024 1024"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"
                        }
                    }]
                })(t)
            }

            function c(t) {
                return (0, r.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 1024 1024"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                        }
                    }]
                })(t)
            }

            function u(t) {
                return (0, r.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 1024 1024"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                        }
                    }]
                })(t)
            }

            function l(t) {
                return (0, r.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 1024 1024"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                        }
                    }]
                })(t)
            }
        },
        3750: function(t, e, n) {
            "use strict";
            n.d(e, {
                Dwu: function() {
                    return i
                },
                gxG: function() {
                    return a
                }
            });
            var r = n(8357);

            function a(t) {
                return (0, r.w_)({
                    tag: "svg",
                    attr: {
                        fill: "currentColor",
                        viewBox: "0 0 16 16"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                        }
                    }]
                })(t)
            }

            function i(t) {
                return (0, r.w_)({
                    tag: "svg",
                    attr: {
                        fill: "currentColor",
                        viewBox: "0 0 16 16"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        }
                    }]
                })(t)
            }
        },
        8357: function(t, e, n) {
            "use strict";
            n.d(e, {
                w_: function() {
                    return u
                }
            });
            var r = n(7294),
                a = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                i = r.createContext && r.createContext(a),
                o = function() {
                    return o = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var a in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                        return t
                    }, o.apply(this, arguments)
                },
                s = function(t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                        var a = 0;
                        for (r = Object.getOwnPropertySymbols(t); a < r.length; a++) e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]])
                    }
                    return n
                };

            function c(t) {
                return t && t.map((function(t, e) {
                    return r.createElement(t.tag, o({
                        key: e
                    }, t.attr), c(t.child))
                }))
            }

            function u(t) {
                return function(e) {
                    return r.createElement(l, o({
                        attr: o({}, t.attr)
                    }, e), c(t.child))
                }
            }

            function l(t) {
                var e = function(e) {
                    var n, a = t.attr,
                        i = t.size,
                        c = t.title,
                        u = s(t, ["attr", "size", "title"]),
                        l = i || e.size || "1em";
                    return e.className && (n = e.className), t.className && (n = (n ? n + " " : "") + t.className), r.createElement("svg", o({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, a, u, {
                        className: n,
                        style: o(o({
                            color: t.color || e.color
                        }, e.style), t.style),
                        height: l,
                        width: l,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), c && r.createElement("title", null, c), t.children)
                };
                return void 0 !== i ? r.createElement(i.Consumer, null, (function(t) {
                    return e(t)
                })) : e(a)
            }
        },
        4207: function(t, e, n) {
            var r = n(3454);
            ! function() {
                "use strict";
                var e = {
                        583: function(t) {
                            t.exports = function(t) {
                                for (var e = 5381, n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
                                return e >>> 0
                            }
                        },
                        590: function(t, e, n) {
                            e.__esModule = !0, e.computeId = function(t, e) {
                                if (!e) return "jsx-" + t;
                                var n = String(e),
                                    r = t + n;
                                i[r] || (i[r] = "jsx-" + (0, a.default)(t + "-" + n));
                                return i[r]
                            }, e.computeSelector = function(t, e) {
                                "undefined" === typeof window && (e = e.replace(/\/style/gi, "\\/style"));
                                var n = t + e;
                                i[n] || (i[n] = e.replace(/__jsx-style-dynamic-selector/g, t));
                                return i[n]
                            };
                            var r, a = (r = n(583)) && r.__esModule ? r : {
                                default: r
                            };
                            var i = {}
                        },
                        503: function(t, e) {
                            function n(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            e.__esModule = !0, e.default = void 0;
                            var a = "undefined" !== typeof r && r.env && !0,
                                i = function(t) {
                                    return "[object String]" === Object.prototype.toString.call(t)
                                },
                                o = function() {
                                    function t(t) {
                                        var e = void 0 === t ? {} : t,
                                            n = e.name,
                                            r = void 0 === n ? "stylesheet" : n,
                                            o = e.optimizeForSpeed,
                                            c = void 0 === o ? a : o,
                                            u = e.isBrowser,
                                            l = void 0 === u ? "undefined" !== typeof window : u;
                                        s(i(r), "`name` must be a string"), this._name = r, this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}", s("boolean" === typeof c, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = c, this._isBrowser = l, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                                        var d = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
                                        this._nonce = d ? d.getAttribute("content") : null
                                    }
                                    var e, r, o, c = t.prototype;
                                    return c.setOptimizeForSpeed = function(t) {
                                        s("boolean" === typeof t, "`setOptimizeForSpeed` accepts a boolean"), s(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = t, this.inject()
                                    }, c.isOptimizeForSpeed = function() {
                                        return this._optimizeForSpeed
                                    }, c.inject = function() {
                                        var t = this;
                                        if (s(!this._injected, "sheet already injected"), this._injected = !0, this._isBrowser && this._optimizeForSpeed) return this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), void(this._optimizeForSpeed || (a || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0));
                                        this._serverSheet = {
                                            cssRules: [],
                                            insertRule: function(e, n) {
                                                return "number" === typeof n ? t._serverSheet.cssRules[n] = {
                                                    cssText: e
                                                } : t._serverSheet.cssRules.push({
                                                    cssText: e
                                                }), n
                                            },
                                            deleteRule: function(e) {
                                                t._serverSheet.cssRules[e] = null
                                            }
                                        }
                                    }, c.getSheetForTag = function(t) {
                                        if (t.sheet) return t.sheet;
                                        for (var e = 0; e < document.styleSheets.length; e++)
                                            if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e]
                                    }, c.getSheet = function() {
                                        return this.getSheetForTag(this._tags[this._tags.length - 1])
                                    }, c.insertRule = function(t, e) {
                                        if (s(i(t), "`insertRule` accepts only strings"), !this._isBrowser) return "number" !== typeof e && (e = this._serverSheet.cssRules.length), this._serverSheet.insertRule(t, e), this._rulesCount++;
                                        if (this._optimizeForSpeed) {
                                            var n = this.getSheet();
                                            "number" !== typeof e && (e = n.cssRules.length);
                                            try {
                                                n.insertRule(t, e)
                                            } catch (o) {
                                                return a || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                                            }
                                        } else {
                                            var r = this._tags[e];
                                            this._tags.push(this.makeStyleTag(this._name, t, r))
                                        }
                                        return this._rulesCount++
                                    }, c.replaceRule = function(t, e) {
                                        if (this._optimizeForSpeed || !this._isBrowser) {
                                            var n = this._isBrowser ? this.getSheet() : this._serverSheet;
                                            if (e.trim() || (e = this._deletedRulePlaceholder), !n.cssRules[t]) return t;
                                            n.deleteRule(t);
                                            try {
                                                n.insertRule(e, t)
                                            } catch (i) {
                                                a || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, t)
                                            }
                                        } else {
                                            var r = this._tags[t];
                                            s(r, "old rule at index `" + t + "` not found"), r.textContent = e
                                        }
                                        return t
                                    }, c.deleteRule = function(t) {
                                        if (this._isBrowser)
                                            if (this._optimizeForSpeed) this.replaceRule(t, "");
                                            else {
                                                var e = this._tags[t];
                                                s(e, "rule at index `" + t + "` not found"), e.parentNode.removeChild(e), this._tags[t] = null
                                            }
                                        else this._serverSheet.deleteRule(t)
                                    }, c.flush = function() {
                                        this._injected = !1, this._rulesCount = 0, this._isBrowser ? (this._tags.forEach((function(t) {
                                            return t && t.parentNode.removeChild(t)
                                        })), this._tags = []) : this._serverSheet.cssRules = []
                                    }, c.cssRules = function() {
                                        var t = this;
                                        return this._isBrowser ? this._tags.reduce((function(e, n) {
                                            return n ? e = e.concat(Array.prototype.map.call(t.getSheetForTag(n).cssRules, (function(e) {
                                                return e.cssText === t._deletedRulePlaceholder ? null : e
                                            }))) : e.push(null), e
                                        }), []) : this._serverSheet.cssRules
                                    }, c.makeStyleTag = function(t, e, n) {
                                        e && s(i(e), "makeStyleTag accepts only strings as second parameter");
                                        var r = document.createElement("style");
                                        this._nonce && r.setAttribute("nonce", this._nonce), r.type = "text/css", r.setAttribute("data-" + t, ""), e && r.appendChild(document.createTextNode(e));
                                        var a = document.head || document.getElementsByTagName("head")[0];
                                        return n ? a.insertBefore(r, n) : a.appendChild(r), r
                                    }, e = t, (r = [{
                                        key: "length",
                                        get: function() {
                                            return this._rulesCount
                                        }
                                    }]) && n(e.prototype, r), o && n(e, o), t
                                }();

                            function s(t, e) {
                                if (!t) throw new Error("StyleSheet: " + e + ".")
                            }
                            e.default = o
                        },
                        449: function(t, e, n) {
                            e.__esModule = !0, e.default = u;
                            var r, a = (r = n(522)) && r.__esModule ? r : {
                                    default: r
                                },
                                i = n(147),
                                o = n(590);
                            var s = a.default.useInsertionEffect || a.default.useLayoutEffect,
                                c = "undefined" !== typeof window ? (0, i.createStyleRegistry)() : void 0;

                            function u(t) {
                                var e = c || (0, i.useStyleRegistry)();
                                return e ? "undefined" === typeof window ? (e.add(t), null) : (s((function() {
                                    return e.add(t),
                                        function() {
                                            e.remove(t)
                                        }
                                }), [t.id, String(t.dynamic)]), null) : null
                            }
                            u.dynamic = function(t) {
                                return t.map((function(t) {
                                    var e = t[0],
                                        n = t[1];
                                    return (0, o.computeId)(e, n)
                                })).join(" ")
                            }
                        },
                        147: function(t, e, n) {
                            e.__esModule = !0, e.createStyleRegistry = l, e.StyleRegistry = function(t) {
                                var e = t.registry,
                                    n = t.children,
                                    r = (0, a.useContext)(u),
                                    i = (0, a.useState)((function() {
                                        return r || e || l()
                                    }))[0];
                                return a.default.createElement(u.Provider, {
                                    value: i
                                }, n)
                            }, e.useStyleRegistry = function() {
                                return (0, a.useContext)(u)
                            }, e.StyleSheetContext = e.StyleSheetRegistry = void 0;
                            var r, a = function(t) {
                                    if (t && t.__esModule) return t;
                                    if (null === t || "object" !== typeof t && "function" !== typeof t) return {
                                        default: t
                                    };
                                    var e = s();
                                    if (e && e.has(t)) return e.get(t);
                                    var n = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var a in t)
                                        if (Object.prototype.hasOwnProperty.call(t, a)) {
                                            var i = r ? Object.getOwnPropertyDescriptor(t, a) : null;
                                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = t[a]
                                        }
                                    n.default = t, e && e.set(t, n);
                                    return n
                                }(n(522)),
                                i = (r = n(503)) && r.__esModule ? r : {
                                    default: r
                                },
                                o = n(590);

                            function s() {
                                if ("function" !== typeof WeakMap) return null;
                                var t = new WeakMap;
                                return s = function() {
                                    return t
                                }, t
                            }
                            var c = function() {
                                function t(t) {
                                    var e = void 0 === t ? {} : t,
                                        n = e.styleSheet,
                                        r = void 0 === n ? null : n,
                                        a = e.optimizeForSpeed,
                                        o = void 0 !== a && a,
                                        s = e.isBrowser,
                                        c = void 0 === s ? "undefined" !== typeof window : s;
                                    this._sheet = r || new i.default({
                                        name: "styled-jsx",
                                        optimizeForSpeed: o
                                    }), this._sheet.inject(), r && "boolean" === typeof o && (this._sheet.setOptimizeForSpeed(o), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser = c, this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                                }
                                var e = t.prototype;
                                return e.add = function(t) {
                                    var e = this;
                                    void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(t.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce((function(t, e) {
                                        return t[e] = 0, t
                                    }), {}));
                                    var n = this.getIdAndRules(t),
                                        r = n.styleId,
                                        a = n.rules;
                                    if (r in this._instancesCounts) this._instancesCounts[r] += 1;
                                    else {
                                        var i = a.map((function(t) {
                                            return e._sheet.insertRule(t)
                                        })).filter((function(t) {
                                            return -1 !== t
                                        }));
                                        this._indices[r] = i, this._instancesCounts[r] = 1
                                    }
                                }, e.remove = function(t) {
                                    var e = this,
                                        n = this.getIdAndRules(t).styleId;
                                    if (function(t, e) {
                                            if (!t) throw new Error("StyleSheetRegistry: " + e + ".")
                                        }(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
                                        var r = this._fromServer && this._fromServer[n];
                                        r ? (r.parentNode.removeChild(r), delete this._fromServer[n]) : (this._indices[n].forEach((function(t) {
                                            return e._sheet.deleteRule(t)
                                        })), delete this._indices[n]), delete this._instancesCounts[n]
                                    }
                                }, e.update = function(t, e) {
                                    this.add(e), this.remove(t)
                                }, e.flush = function() {
                                    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                                }, e.cssRules = function() {
                                    var t = this,
                                        e = this._fromServer ? Object.keys(this._fromServer).map((function(e) {
                                            return [e, t._fromServer[e]]
                                        })) : [],
                                        n = this._sheet.cssRules();
                                    return e.concat(Object.keys(this._indices).map((function(e) {
                                        return [e, t._indices[e].map((function(t) {
                                            return n[t].cssText
                                        })).join(t._optimizeForSpeed ? "" : "\n")]
                                    })).filter((function(t) {
                                        return Boolean(t[1])
                                    })))
                                }, e.styles = function(t) {
                                    return function(t, e) {
                                        return void 0 === e && (e = {}), t.map((function(t) {
                                            var n = t[0],
                                                r = t[1];
                                            return a.default.createElement("style", {
                                                id: "__" + n,
                                                key: "__" + n,
                                                nonce: e.nonce ? e.nonce : void 0,
                                                dangerouslySetInnerHTML: {
                                                    __html: r
                                                }
                                            })
                                        }))
                                    }(this.cssRules(), t)
                                }, e.getIdAndRules = function(t) {
                                    var e = t.children,
                                        n = t.dynamic,
                                        r = t.id;
                                    if (n) {
                                        var a = (0, o.computeId)(r, n);
                                        return {
                                            styleId: a,
                                            rules: Array.isArray(e) ? e.map((function(t) {
                                                return (0, o.computeSelector)(a, t)
                                            })) : [(0, o.computeSelector)(a, e)]
                                        }
                                    }
                                    return {
                                        styleId: (0, o.computeId)(r),
                                        rules: Array.isArray(e) ? e : [e]
                                    }
                                }, e.selectFromServer = function() {
                                    return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(t, e) {
                                        return t[e.id.slice(2)] = e, t
                                    }), {})
                                }, t
                            }();
                            e.StyleSheetRegistry = c;
                            var u = (0, a.createContext)(null);

                            function l() {
                                return new c
                            }
                            e.StyleSheetContext = u
                        },
                        522: function(t) {
                            t.exports = n(7294)
                        }
                    },
                    a = {};

                function i(t) {
                    var n = a[t];
                    if (void 0 !== n) return n.exports;
                    var r = a[t] = {
                            exports: {}
                        },
                        o = !0;
                    try {
                        e[t](r, r.exports, i), o = !1
                    } finally {
                        o && delete a[t]
                    }
                    return r.exports
                }
                i.ab = "//";
                var o = {};
                ! function() {
                    var t = o;
                    t.__esModule = !0, t.style = t.useStyleRegistry = t.createStyleRegistry = t.StyleRegistry = void 0;
                    var e = i(147);
                    t.StyleRegistry = e.StyleRegistry, t.createStyleRegistry = e.createStyleRegistry, t.useStyleRegistry = e.useStyleRegistry;
                    var n, r = (n = i(449)) && n.__esModule ? n : {
                        default: n
                    };
                    t.style = r.default
                }(), t.exports = o
            }()
        },
        5988: function(t, e, n) {
            n(4207).style
        },
        2587: function(t, e, n) {
            "use strict";

            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        748: function(t, e, n) {
            "use strict";

            function r(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        29: function(t, e, n) {
            "use strict";

            function r(t, e, n, r, a, i, o) {
                try {
                    var s = t[i](o),
                        c = s.value
                } catch (u) {
                    return void n(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, a)
            }

            function a(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, i) {
                        var o = t.apply(e, n);

                        function s(t) {
                            r(o, a, i, s, c, "next", t)
                        }

                        function c(t) {
                            r(o, a, i, s, c, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            n.d(e, {
                Z: function() {
                    return a
                }
            })
        },
        2777: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        2262: function(t, e, n) {
            "use strict";

            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function a(t, e, n) {
                return e && r(t.prototype, e), n && r(t, n), t
            }
            n.d(e, {
                Z: function() {
                    return a
                }
            })
        },
        9499: function(t, e, n) {
            "use strict";

            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        7247: function(t, e, n) {
            "use strict";

            function r(t) {
                return r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, r(t)
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        1531: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return a
                }
            });
            var r = n(607);

            function a(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (0, r.Z)(t, e)
            }
        },
        3553: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(4027),
                a = n(748);

            function i(t, e) {
                if (e && ("object" === r(e) || "function" === typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, a.Z)(t)
            }
        },
        607: function(t, e, n) {
            "use strict";

            function r(t, e) {
                return r = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, r(t, e)
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        7812: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(2587);
            var a = n(2937);

            function i(t) {
                return function(t) {
                    if (Array.isArray(t)) return (0, r.Z)(t)
                }(t) || function(t) {
                    if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || (0, a.Z)(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        2937: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return a
                }
            });
            var r = n(2587);

            function a(t, e) {
                if (t) {
                    if ("string" === typeof t) return (0, r.Z)(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, r.Z)(t, e) : void 0
                }
            }
        }
    },
    function(t) {
        var e = function(e) {
            return t(t.s = e)
        };
        t.O(0, [9774, 179], (function() {
            return e(8420), e(1118), e(1587)
        }));
        var n = t.O();
        _N_E = n
    }
]);