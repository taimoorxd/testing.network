(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4052], {
        1082: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: function() {
                    return o
                }
            });
            var r = s(7294),
                i = s(1664),
                l = s.n(i),
                n = (s(5675), s(3854)),
                a = s(9008),
                d = s.n(a),
                c = s(5893),
                o = !0;
            t.default = function(e) {
                var t = e.allVideos,
                    s = (0, r.useState)(),
                    i = s[0],
                    a = s[1];
                return (0, r.useEffect)((function() {
                    try {
                        JSON.parse(localStorage.getItem("admin")).username || a(!0)
                    } catch (e) {
                        a(!1)
                    }
                }), []), (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsxs)(d(), {
                        children: [(0, c.jsx)("title", {
                            children: "Courses | CodeWithHarry"
                        }), (0, c.jsx)("meta", {
                            name: "description",
                            content: "Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free!"
                        }), (0, c.jsx)("link", {
                            rel: "icon",
                            href: "/img/favicon.ico"
                        })]
                    }), (0, c.jsxs)("div", {
                        className: "dark:bg-gray-900",
                        children: [(0, c.jsx)("h1", {
                            className: "text-center text-3xl pt-8 font-semibold text-purple-700 dark:text-purple-400 ",
                            children: "Premium Courses"
                        }), (0, c.jsx)("section", {
                            className: "text-gray-600 body-font dark:text-gray-400",
                            children: (0, c.jsx)("div", {
                                className: "container lg:py-5 mx-auto",
                                children: (0, c.jsx)("div", {
                                    className: "flex justify-center align-middle flex-wrap mx-auto",
                                    children: t && t.filter((function(e) {
                                        return "premium" == e.type
                                    })).map((function(e) {
                                        return (0, c.jsx)("div", {
                                            className: "p-4 md:w-1/3 flex justify-center",
                                            children: (0, c.jsxs)("div", {
                                                className: "max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-slate-800",
                                                children: [(0, c.jsx)("img", {
                                                    className: "object-contain w-full object-center",
                                                    src: e.image,
                                                    width: 384,
                                                    height: 216,
                                                    alt: "blog"
                                                }), (0, c.jsxs)("div", {
                                                    className: "px-6 md:my-11 lg:my-0 md:h-72 lg:h-64 lg:py-4 xl:h-52",
                                                    children: [(0, c.jsx)("span", {
                                                        className: "tracking-widest text-xs title-font font-medium mb-1",
                                                        children: "FREE COURSE"
                                                    }), (0, c.jsx)(l(), {
                                                        href: "/videos/" + e.firstSlug,
                                                        children: (0, c.jsxs)("div", {
                                                            className: "title-font flex text-lg font-medium cursor-pointer text-gray-900 mb-3 dark:text-white",
                                                            children: [e.title, i && (0, c.jsx)("a", {
                                                                href: "/dashboard/videoseries/" + e._id,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: (0, c.jsx)(n.z2D, {})
                                                            })]
                                                        })
                                                    }), (0, c.jsx)("p", {
                                                        className: "text-gray-700 text-base dark:text-gray-400",
                                                        children: e.description
                                                    })]
                                                }), (0, c.jsx)(l(), {
                                                    href: "/videos/" + e.firstSlug,
                                                    children: (0, c.jsx)("div", {
                                                        className: "px-6 pt-4 pb-2",
                                                        children: (0, c.jsx)("span", {
                                                            className: "inline-block text-white bg-purple-700 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-2 cursor-pointer",
                                                            children: "  Start Watching "
                                                        })
                                                    })
                                                })]
                                            })
                                        }, e.firstSlug)
                                    }))
                                })
                            })
                        }), (0, c.jsx)("h1", {
                            className: "text-center text-3xl mt-8 font-semibold text-purple-700 dark:text-purple-400",
                            children: "More Courses"
                        }), (0, c.jsx)("section", {
                            className: "text-gray-600 body-font dark:text-gray-400",
                            children: (0, c.jsx)("div", {
                                className: "container lg:py-5 mx-auto",
                                children: (0, c.jsx)("div", {
                                    className: "flex justify-center align-middle flex-wrap mx-auto",
                                    children: t && t.filter((function(e) {
                                        return "course" == e.type
                                    })).map((function(e) {
                                        return (0, c.jsx)("div", {
                                            className: "p-4 md:w-1/3 flex justify-center",
                                            children: (0, c.jsxs)("div", {
                                                className: "max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-slate-800",
                                                children: [(0, c.jsx)("img", {
                                                    className: "object-contain w-full object-center",
                                                    src: e.image,
                                                    width: 384,
                                                    height: 216,
                                                    alt: "blog"
                                                }), (0, c.jsxs)("div", {
                                                    className: "px-6 md:my-11 lg:my-0 md:h-72 lg:h-64 lg:py-4 xl:h-52",
                                                    children: [(0, c.jsx)("span", {
                                                        className: "tracking-widest text-xs title-font font-medium mb-1",
                                                        children: "FREE COURSE"
                                                    }), (0, c.jsxs)("div", {
                                                        className: "title-font flex text-lg font-medium text-gray-900 mb-3 dark:text-white",
                                                        children: [e.title, i && (0, c.jsx)("a", {
                                                            href: "/dashboard/videoseries/" + e._id,
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: (0, c.jsx)(n.z2D, {})
                                                        })]
                                                    }), (0, c.jsx)("p", {
                                                        className: "text-gray-700 text-base dark:text-gray-400",
                                                        children: e.description
                                                    })]
                                                }), (0, c.jsx)(l(), {
                                                    href: "/videos/" + e.firstSlug,
                                                    children: (0, c.jsx)("div", {
                                                        className: "px-6 pt-4 pb-2",
                                                        children: (0, c.jsx)("span", {
                                                            className: "inline-block text-white bg-purple-700 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-2 cursor-pointer",
                                                            children: "  Start Watching "
                                                        })
                                                    })
                                                })]
                                            })
                                        }, e.firstSlug)
                                    }))
                                })
                            })
                        })]
                    })]
                })
            }
        },
        8011: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/videos", function() {
                return s(1082)
            }])
        }
    },
    function(e) {
        e.O(0, [6556, 9774, 2888, 179], (function() {
            return t = 8011, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);