(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3743], {
        1338: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return f
                }
            });
            var s = r(7294),
                i = r(8325),
                l = r.n(i),
                a = (r(5433), r(4335), r(9980), r(6102), r(366), r(6854), r(9945), r(2503), r(4279), r(2731), r(6177), r(8759), r(2911), r(5206), r(6263), r(110), r(2585)),
                n = r(1664),
                d = r.n(n),
                c = r(1163),
                o = r(3854),
                u = (r(5675), r(9008)),
                x = r.n(u),
                g = r(2918),
                m = r(5434),
                h = r(8193),
                p = r(5893),
                f = !0;
            t.default = function(e) {
                var t = e.tutorials,
                    r = e.tutorial,
                    i = e.prevnext,
                    n = (0, c.useRouter)().query.slug,
                    u = (0, s.useState)(),
                    f = u[0],
                    b = u[1],
                    y = (0, s.useState)(),
                    v = y[0],
                    j = y[1],
                    w = (0, s.useState)("hidden"),
                    k = w[0],
                    N = w[1],
                    _ = (0, s.useState)(),
                    C = _[0],
                    E = _[1],
                    S = (0, s.useState)({
                        width: 0,
                        height: 0
                    }),
                    T = S[0],
                    I = S[1];
                return (0, s.useEffect)((function() {
                    Array.from(document.getElementsByClassName("copy-to-clipboard-button")).forEach((function(e) {
                        e.addEventListener("click", (function(e) {
                            e.target.innerText = "Copied!";
                            var t = function(e, t) {
                                for (; null !== e && !e.classList.contains(t);) e = e.parentElement;
                                return e.getElementsByTagName("pre")[0].innerText
                            }(e.target, "code-toolbar");
                            setTimeout((function() {
                                e.target.innerText = "Copy"
                            }), 1e3), navigator.clipboard.writeText(t)
                        }))
                    })), r && b(function(e) {
                        var t = document.createElement("div");
                        return t.innerHTML = e, l().manual = !0, l().highlightAllUnder(t), t.innerHTML
                    }(r.content.replace(/&lt;\|AD\|&gt;/g, '<div class=\'cwhads my-4\'><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9655830461045889" data-ad-slot="8999979664" data-ad-format="auto" data-full-width-responsive="true"></ins></div>'))), setTimeout((function() {
                        console.log(r.sideParent.replace(/ /g, "-")), document.querySelector("#".concat(r.sideParent.replace(/ /g, "-"))).scrollIntoView()
                    }), 500)
                })), (0, s.useEffect)((function() {
                    try {
                        JSON.parse(localStorage.getItem("admin")).username || j(!0)
                    } catch (e) {
                        j(!1)
                    }
                }), []), (0, p.jsxs)(p.Fragment, {
                    children: [r ? (0, p.jsxs)(x(), {
                        children: [(0, p.jsxs)("title", {
                            children: [r.title, " | CodeWithHarry"]
                        }), (0, p.jsx)("meta", {
                            name: "description",
                            content: r.metadesc
                        }), (0, p.jsx)("link", {
                            rel: "icon",
                            href: "/img/favicon.ico"
                        })]
                    }) : (0, p.jsxs)(x(), {
                        children: [(0, p.jsx)("title", {
                            children: "Coming Soon | CodeWithHarry"
                        }), (0, p.jsx)("meta", {
                            name: "description",
                            content: "Coming Soon"
                        }), (0, p.jsx)("link", {
                            rel: "icon",
                            href: "/img/favicon.ico"
                        })]
                    }), C && (0, p.jsxs)("div", {
                        className: "flex justify-center items-center fixed z-10 inset-0 bg-white dark:bg-slate-800 overflow-hidden",
                        children: [(0, p.jsx)("div", {
                            className: "box absolute right-6 top-3",
                            children: (0, p.jsx)(m.FU5, {
                                className: "text-right text-gray-700 right-0 text-2xl md:text-5xl cursor-pointer",
                                onClick: function() {
                                    E(), I({
                                        width: 0,
                                        height: 0
                                    }), document.getElementById("imgpreview").style.opacity = "1", document.getElementById("imgpreview2").style.display = "block", document.body.style.overflow = "scroll"
                                }
                            })
                        }), (0, p.jsx)("div", {
                            className: "flex justify-center items-center w-full h-full",
                            children: (0, p.jsx)("img", {
                                className: "transition-all duration-300 ease-in-out max-h-full md:max-h-screen object-contain",
                                src: C,
                                alt: "Image preview",
                                style: T
                            })
                        })]
                    }), r && (1 == r.is_published || void 0 == r.is_published || v) ? (0, p.jsxs)("div", {
                        className: "w-[100%] flex min-h-screen dark:bg-gray-900 dark:text-gray-200",
                        id: "imgpreview",
                        onClick: function(e) {
                            var t = e.target.currentSrc,
                                r = e.target.width / e.target.height;
                            "IMG" != e.target.tagName || C && !t ? E(null) : (t && E(t), setTimeout((function() {
                                var t = e.target.width > e.target.height ? {
                                    width: "70vw",
                                    height: 70 / r + "vw"
                                } : {
                                    height: "70vh",
                                    width: 70 * r + "vh"
                                };
                                I(t)
                            }), 10))
                        },
                        children: [(0, p.jsxs)("div", {
                            className: "w-[1%] sm:w-[1%] md:w-[25%] lg:w-[18%]",
                            children: [(0, p.jsx)(a.vHB, {
                                className: "text-purple-700 text-2xl absolute mt-5 right-0 mr-4 md:hidden",
                                onClick: function() {
                                    N("hidden" === k ? "block" : "hidden")
                                }
                            }), (0, p.jsxs)("div", {
                                id: "sideNav",
                                className: "bg-purple-50  scroll-smooth w-[50%] z-[9]  md:w-[25%] lg:w-[18%] md:top-[136px] fixed text-left shadow-xl h-[87vh] overflow-y-scroll top-[120px] dark:bg-slate-800 ".concat(k, " md:block md:pl-3"),
                                children: [(0, p.jsx)("span", {
                                    className: "md:hidden close absolute top-3 right-2",
                                    children: (0, p.jsx)(h.SV5, {
                                        onClick: function() {
                                            N("hidden" === k ? "block" : "hidden")
                                        }
                                    })
                                }), (0, p.jsx)("ul", {
                                    className: "pb-16",
                                    children: Object.keys(t).map((function(e) {
                                        var s = t[e];
                                        return (0, p.jsxs)("div", {
                                            children: [(0, p.jsx)("li", {
                                                id: "".concat(e.replace(/ /g, "-")),
                                                className: "pl-2 pt-3 text-purple-900 dark:text-gray-200 text-lg font-bold",
                                                children: e
                                            }), s.map((function(e) {
                                                return (1 == e.is_published || void 0 == e.is_published || v) && (0, p.jsxs)("div", {
                                                    className: "flex",
                                                    children: [(0, p.jsxs)("span", {
                                                        className: "text-sm dark:text-gray-400 text-gray-500 flex items-center justify-center pl-6 ",
                                                        children: [" ", (0, p.jsx)("svg", {
                                                            className: "mr-2 h-3 w-3 fill-current opacity-75",
                                                            viewBox: "0 0 576 512",
                                                            children: (0, p.jsx)("path", {
                                                                d: "M540.9 56.77c-45.95-16.66-90.23-24.09-129.1-24.75-60.7.94-102.7 17.45-123.8 27.72-21.1-10.27-64.1-26.8-123.2-27.74-40-.05-84.4 8.35-129.7 24.77C14.18 64.33 0 84.41 0 106.7v302.9c0 14.66 6.875 28.06 18.89 36.8 11.81 8.531 26.64 10.98 40.73 6.781 118.9-36.34 209.3 19.05 214.3 22.19C277.8 477.6 281.2 480 287.1 480c6.52 0 10.12-2.373 14.07-4.578 10.78-6.688 98.3-57.66 214.3-22.27 14.11 4.25 28.86 1.75 40.75-6.812C569.1 437.6 576 424.2 576 409.6V106.7c0-22.28-14.2-42.35-35.1-49.93zM272 438.1c-24.95-12.03-71.01-29.37-130.5-29.37-27.83 0-58.5 3.812-91.19 13.77-4.406 1.344-9 .594-12.69-2.047C34.02 417.8 32 413.1 32 409.6V106.7c0-8.859 5.562-16.83 13.86-19.83C87.66 71.7 127.9 63.95 164.5 64c51.8.81 89.7 15.26 107.5 23.66V438.1zm272-28.5c0 4.375-2.016 8.234-5.594 10.84-3.766 2.703-8.297 3.422-12.69 2.125C424.1 391.6 341.3 420.4 304 438.3V87.66c17.8-8.4 55.7-22.85 107.4-23.66 35.31-.063 76.34 7.484 118.8 22.88 8.2 3 13.8 10.96 13.8 19.82v302.9z"
                                                            })
                                                        })]
                                                    }), (0, p.jsx)(d(), {
                                                        href: e.slug,
                                                        children: (0, p.jsx)("li", {
                                                            className: "".concat(e.title == r.title ? "text-gray-800 underline dark:text-white" : "text-purple-900 dark:text-gray-400", " pt-1  font-semibold cursor-pointer"),
                                                            children: e.title
                                                        })
                                                    })]
                                                }, e.slug)
                                            }))]
                                        }, e)
                                    }))
                                })]
                            })]
                        }), (0, p.jsx)("div", {
                            className: "md:px-8 w-[100%] px-2 md:w-[85%] mx-auto",
                            children: r && (0, p.jsxs)(p.Fragment, {
                                children: [(0, p.jsxs)("div", {
                                    className: "mt-8 mb-6 justify-between hidden md:flex",
                                    children: [(0, p.jsx)(d(), {
                                        href: i[0] ? i[0].slug : "",
                                        children: (0, p.jsx)("button", {
                                            className: "text-white cursor-pointer justify-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-default dark:disabled:text-gray-300 dark:bg-purple-600 dark:hover:bg-purple-900 dark:disabled:bg-gray-500",
                                            disabled: !i[0],
                                            children: "<< Previous "
                                        })
                                    }), (0, p.jsx)(d(), {
                                        href: i[1] ? i[1].slug : "",
                                        children: (0, p.jsx)("button", {
                                            className: "text-white cursor-pointer justify-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-default dark:disabled:text-gray-300 dark:bg-purple-600 dark:hover:bg-purple-900 dark:disabled:bg-gray-500",
                                            disabled: !i[1],
                                            children: " Next >> "
                                        })
                                    })]
                                }), (0, p.jsx)("div", {
                                    className: "flex mt-5 justify-between",
                                    children: (0, p.jsxs)("h1", {
                                        className: "flex text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white mb-1",
                                        children: [r.title, v && (0, p.jsx)("a", {
                                            className: "mx-2",
                                            href: "/dashboard/tutorial/" + n,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: (0, p.jsx)(o.z2D, {})
                                        })]
                                    })
                                }), (0, p.jsx)("div", {
                                    className: "pt-2 cont font-karla min-h-screen dark:text-gray-200",
                                    dangerouslySetInnerHTML: {
                                        __html: f
                                    }
                                }), (0, p.jsxs)("div", {
                                    className: "flex my-5 justify-between",
                                    children: [(0, p.jsx)(d(), {
                                        href: i[0] ? i[0].slug : "",
                                        children: (0, p.jsx)("button", {
                                            className: "text-white cursor-pointer justify-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-default dark:disabled:text-gray-300 dark:bg-purple-600 dark:hover:bg-purple-900 dark:disabled:bg-gray-500",
                                            disabled: !i[0],
                                            children: " < < Previous "
                                        })
                                    }), (0, p.jsx)(d(), {
                                        href: i[1] ? i[1].slug : "",
                                        children: (0, p.jsx)("button", {
                                            className: "text-white cursor-pointer justify-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-default dark:disabled:text-gray-300 dark:bg-purple-600 dark:hover:bg-purple-900 dark:disabled:bg-gray-500",
                                            disabled: !i[1],
                                            children: " Next > >"
                                        })
                                    })]
                                })]
                            })
                        })]
                    }) : (0, p.jsx)(g.default, {
                        statusCode: 404
                    })]
                })
            }
        },
        4520: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/tutorial/[slug]", function() {
                return r(1338)
            }])
        }
    },
    function(e) {
        e.O(0, [6556, 1228, 4980, 926, 9774, 2888, 179], (function() {
            return t = 4520, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);