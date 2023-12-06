(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9195], {
        7097: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(29),
                r = o(7794),
                s = o.n(r),
                l = o(7294),
                i = o(1664),
                a = o.n(i),
                c = o(8533),
                h = o(9008),
                p = o.n(h),
                d = o(5893);
            t.default = function() {
                var e = (0, l.useState)(),
                    t = e[0],
                    o = e[1],
                    r = (0, l.useState)(),
                    i = r[0],
                    h = r[1],
                    u = (0, l.useState)(0),
                    m = u[0],
                    f = u[1],
                    g = function() {
                        var e = (0, n.Z)(s().mark((function e() {
                            var n, r, l;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, fetch("https://www.codewithharry.com/api/dataapi/getblogs?start=" + m + "&end=10");
                                    case 2:
                                        return n = e.sent, f(m + 10), e.next = 6, n.json();
                                    case 6:
                                        r = e.sent, t ? (l = (l = JSON.parse(JSON.stringify(t))).concat(r.blogs), o(l)) : o(r.blogs), h(r.pageLen);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, l.useEffect)((function() {
                    g()
                }), []), (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsxs)(p(), {
                        children: [(0, d.jsx)("title", {
                            children: "Blog | CodeWithHarry"
                        }), (0, d.jsx)("meta", {
                            name: "description",
                            content: "Welcome to CodeWithHarry Blogs. Here You will find blogs related to programming as well as modern day technology."
                        }), (0, d.jsx)("link", {
                            rel: "icon",
                            href: "/img/favicon.ico"
                        })]
                    }), t && (0, d.jsx)("div", {
                        className: "px-6 py-8 bg-gray-100 dark:bg-gray-900",
                        children: (0, d.jsx)("div", {
                            className: "container flex justify-between mx-auto dark:bg-gray-900",
                            children: (0, d.jsxs)("div", {
                                className: "w-full lg:w-8/12 ",
                                children: [(0, d.jsx)("h1", {
                                    className: "mx-4 text-3xl font-bold text-gray-800 md:text-4xl md:text-left md:ml-11 dark:text-gray-200",
                                    children: "Coding Articles"
                                }), (0, d.jsx)(c.Z, {
                                    dataLength: t.length,
                                    next: g,
                                    hasMore: t.length !== i,
                                    loader: (0, d.jsx)("div", {
                                        className: "flex items-center justify-center mt-6  ",
                                        children: (0, d.jsx)("div", {
                                            className: "inline-flex max-w-4xl mx-auto items-center px-4 py-2 leading-6 transition ease-in-out duration-150 cursor-not-allowed ",
                                            children: (0, d.jsxs)("svg", {
                                                className: "animate-spin h-8 w-8 text-purple-700",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                children: [(0, d.jsx)("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4"
                                                }), (0, d.jsx)("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                })]
                                            })
                                        })
                                    }),
                                    children: t.map((function(e) {
                                        var t = e.createdAt,
                                            o = new Date(t).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            });
                                        return (0, d.jsx)("div", {
                                            className: "mt-6",
                                            children: (0, d.jsxs)("div", {
                                                className: "px-6 md:px-10 py-6 mx-auto bg-white rounded-lg shadow-md dark:bg-slate-700",
                                                children: [(0, d.jsxs)("div", {
                                                    className: "mt-2",
                                                    children: [(0, d.jsx)("span", {
                                                        className: "text-xl md:text-3xl font-bold text-gray-800 dark:text-white",
                                                        children: (0, d.jsx)(a(), {
                                                            href: "/blogpost/" + e.slug,
                                                            children: e.title
                                                        })
                                                    }), (0, d.jsxs)("div", {
                                                        className: "flex my-2 items-center",
                                                        children: [(0, d.jsx)("div", {
                                                            className: "h-4 w-4 md:h-8 md:w-8 overflow-hidden rounded-full",
                                                            children: (0, d.jsx)("a", {
                                                                href: "https://www.codewithharry.com/",
                                                                className: "block w-full h-full text",
                                                                children: (0, d.jsx)("img", {
                                                                    alt: "Haris Ali Khan's photo",
                                                                    src: "https://www.codewithharry.com/img/logo-blue.png",
                                                                    className: "w-full h-full object-cover"
                                                                })
                                                            })
                                                        }), (0, d.jsx)("a", {
                                                            href: "https://www.codewithharry.com/",
                                                            className: "text-xs md:text-sm text-slate-900 dark:text-white hover:text-purple-700 transition ease-in-out duration-150 mx-1",
                                                            children: "Haris Ali Khan"
                                                        }), (0, d.jsx)("span", {
                                                            className: "mx-1 block font-bold dark:text-gray-400 text-slate-500 md:block",
                                                            children: "\xb7"
                                                        }), (0, d.jsx)("span", {
                                                            className: "text-xs md:text-sm dark:text-gray-400 text-gray-600",
                                                            children: o
                                                        })]
                                                    }), (0, d.jsx)("p", {
                                                        className: "text-sm mt-2 md:text-lg dark:text-gray-400",
                                                        children: e.metadesc
                                                    })]
                                                }), (0, d.jsx)("div", {
                                                    className: "flex items-center justify-between mt-4 text-white bg-purple-600 dark:bg-purple-400 hover:bg-purple-700 dark:hover:bg-purple-500 px-4 py-2 rounded-md text-md font-medium transition w-fit",
                                                    children: (0, d.jsx)(a(), {
                                                        href: "/blogpost/" + e.slug,
                                                        children: "Read more"
                                                    })
                                                })]
                                            })
                                        }, e.slug + Math.random())
                                    }))
                                })]
                            })
                        })
                    }), !t && (0, d.jsx)("div", {
                        className: "flex items-center justify-center mt-6",
                        children: (0, d.jsx)("div", {
                            className: "inline-flex max-w-4xl mx-auto items-center px-4 py-2 leading-6 transition ease-in-out duration-150 cursor-not-allowed",
                            children: (0, d.jsxs)("svg", {
                                className: "animate-spin h-8 w-8 text-purple-700",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, d.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0, d.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            })
                        })
                    })]
                })
            }
        },
        3899: function(e, t, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
                return o(7097)
            }])
        },
        8533: function(e, t, o) {
            "use strict";
            var n = o(7294),
                r = function(e, t) {
                    return r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    }, r(e, t)
                };
            var s = function() {
                return s = Object.assign || function(e) {
                    for (var t, o = 1, n = arguments.length; o < n; o++)
                        for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }, s.apply(this, arguments)
            };
            var l = "Pixel",
                i = "Percent",
                a = {
                    unit: i,
                    value: .8
                };

            function c(e) {
                return "number" === typeof e ? {
                    unit: i,
                    value: 100 * e
                } : "string" === typeof e ? e.match(/^(\d*(\.\d+)?)px$/) ? {
                    unit: l,
                    value: parseFloat(e)
                } : e.match(/^(\d*(\.\d+)?)%$/) ? {
                    unit: i,
                    value: parseFloat(e)
                } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), a) : (console.warn("scrollThreshold should be string or number"), a)
            }
            var h = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    return o.lastScrollTop = 0, o.actionTriggered = !1, o.startY = 0, o.currentY = 0, o.dragging = !1, o.maxPullDownDistance = 0, o.getScrollableTarget = function() {
                        return o.props.scrollableTarget instanceof HTMLElement ? o.props.scrollableTarget : "string" === typeof o.props.scrollableTarget ? document.getElementById(o.props.scrollableTarget) : (null === o.props.scrollableTarget && console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "), null)
                    }, o.onStart = function(e) {
                        o.lastScrollTop || (o.dragging = !0, e instanceof MouseEvent ? o.startY = e.pageY : e instanceof TouchEvent && (o.startY = e.touches[0].pageY), o.currentY = o.startY, o._infScroll && (o._infScroll.style.willChange = "transform", o._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)"))
                    }, o.onMove = function(e) {
                        o.dragging && (e instanceof MouseEvent ? o.currentY = e.pageY : e instanceof TouchEvent && (o.currentY = e.touches[0].pageY), o.currentY < o.startY || (o.currentY - o.startY >= Number(o.props.pullDownToRefreshThreshold) && o.setState({
                            pullToRefreshThresholdBreached: !0
                        }), o.currentY - o.startY > 1.5 * o.maxPullDownDistance || o._infScroll && (o._infScroll.style.overflow = "visible", o._infScroll.style.transform = "translate3d(0px, " + (o.currentY - o.startY) + "px, 0px)")))
                    }, o.onEnd = function() {
                        o.startY = 0, o.currentY = 0, o.dragging = !1, o.state.pullToRefreshThresholdBreached && (o.props.refreshFunction && o.props.refreshFunction(), o.setState({
                            pullToRefreshThresholdBreached: !1
                        })), requestAnimationFrame((function() {
                            o._infScroll && (o._infScroll.style.overflow = "auto", o._infScroll.style.transform = "none", o._infScroll.style.willChange = "unset")
                        }))
                    }, o.onScrollListener = function(e) {
                        "function" === typeof o.props.onScroll && setTimeout((function() {
                            return o.props.onScroll && o.props.onScroll(e)
                        }), 0);
                        var t = o.props.height || o._scrollableNode ? e.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                        o.actionTriggered || ((o.props.inverse ? o.isElementAtTop(t, o.props.scrollThreshold) : o.isElementAtBottom(t, o.props.scrollThreshold)) && o.props.hasMore && (o.actionTriggered = !0, o.setState({
                            showLoader: !0
                        }), o.props.next && o.props.next()), o.lastScrollTop = t.scrollTop)
                    }, o.state = {
                        showLoader: !1,
                        pullToRefreshThresholdBreached: !1,
                        prevDataLength: t.dataLength
                    }, o.throttledOnScrollListener = function(e, t, o, n) {
                        var r, s = !1,
                            l = 0;

                        function i() {
                            r && clearTimeout(r)
                        }

                        function a() {
                            var a = this,
                                c = Date.now() - l,
                                h = arguments;

                            function p() {
                                l = Date.now(), o.apply(a, h)
                            }

                            function d() {
                                r = void 0
                            }
                            s || (n && !r && p(), i(), void 0 === n && c > e ? p() : !0 !== t && (r = setTimeout(n ? d : p, void 0 === n ? e - c : e)))
                        }
                        return "boolean" !== typeof t && (n = o, o = t, t = void 0), a.cancel = function() {
                            i(), s = !0
                        }, a
                    }(150, o.onScrollListener).bind(o), o.onStart = o.onStart.bind(o), o.onMove = o.onMove.bind(o), o.onEnd = o.onEnd.bind(o), o
                }
                return function(e, t) {
                    function o() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                }(t, e), t.prototype.componentDidMount = function() {
                    if ("undefined" === typeof this.props.dataLength) throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                    if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener("scroll", this.throttledOnScrollListener), "number" === typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener("touchstart", this.onStart), this.el.addEventListener("touchmove", this.onMove), this.el.addEventListener("touchend", this.onEnd), this.el.addEventListener("mousedown", this.onStart), this.el.addEventListener("mousemove", this.onMove), this.el.addEventListener("mouseup", this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), "function" !== typeof this.props.refreshFunction)) throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')
                }, t.prototype.componentWillUnmount = function() {
                    this.el && (this.el.removeEventListener("scroll", this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener("touchstart", this.onStart), this.el.removeEventListener("touchmove", this.onMove), this.el.removeEventListener("touchend", this.onEnd), this.el.removeEventListener("mousedown", this.onStart), this.el.removeEventListener("mousemove", this.onMove), this.el.removeEventListener("mouseup", this.onEnd)))
                }, t.prototype.componentDidUpdate = function(e) {
                    this.props.dataLength !== e.dataLength && (this.actionTriggered = !1, this.setState({
                        showLoader: !1
                    }))
                }, t.getDerivedStateFromProps = function(e, t) {
                    return e.dataLength !== t.prevDataLength ? s(s({}, t), {
                        prevDataLength: e.dataLength
                    }) : null
                }, t.prototype.isElementAtTop = function(e, t) {
                    void 0 === t && (t = .8);
                    var o = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                        n = c(t);
                    return n.unit === l ? e.scrollTop <= n.value + o - e.scrollHeight + 1 : e.scrollTop <= n.value / 100 + o - e.scrollHeight + 1
                }, t.prototype.isElementAtBottom = function(e, t) {
                    void 0 === t && (t = .8);
                    var o = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                        n = c(t);
                    return n.unit === l ? e.scrollTop + o >= e.scrollHeight - n.value : e.scrollTop + o >= n.value / 100 * e.scrollHeight
                }, t.prototype.render = function() {
                    var e = this,
                        t = s({
                            height: this.props.height || "auto",
                            overflow: "auto",
                            WebkitOverflowScrolling: "touch"
                        }, this.props.style),
                        o = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                        r = this.props.pullDownToRefresh && this.props.height ? {
                            overflow: "auto"
                        } : {};
                    return n.createElement("div", {
                        style: r,
                        className: "infinite-scroll-component__outerdiv"
                    }, n.createElement("div", {
                        className: "infinite-scroll-component " + (this.props.className || ""),
                        ref: function(t) {
                            return e._infScroll = t
                        },
                        style: t
                    }, this.props.pullDownToRefresh && n.createElement("div", {
                        style: {
                            position: "relative"
                        },
                        ref: function(t) {
                            return e._pullDown = t
                        }
                    }, n.createElement("div", {
                        style: {
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: -1 * this.maxPullDownDistance
                        }
                    }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !o && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage))
                }, t
            }(n.Component);
            t.Z = h
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], (function() {
            return t = 3899, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);