self.__BUILD_MANIFEST = function(s, a, e, t, d, c, o, i, r, b) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/monitoring(/?)",
                has: [{
                    type: b,
                    key: "o",
                    value: "(?<orgid>.*)"
                }, {
                    type: b,
                    key: "p",
                    value: "(?<projectid>.*)"
                }]
            }],
            fallback: []
        },
        "/": [e, "static/chunks/8010-30985a3ffa82839f.js", "static/chunks/pages/index-ca2c963e3e043274.js"],
        "/_error": ["static/chunks/pages/_error-ecff48cd2e49a81f.js"],
        "/activate": [e, "static/chunks/pages/activate-1e45b64c22790a3c.js"],
        "/blog": ["static/chunks/pages/blog-3d4a4d1ac6de7f9d.js"],
        "/blogpost/[slug]": [s, a, e, c, o, "static/chunks/pages/blogpost/[slug]-d49d93de10df7952.js"],
        "/contact": ["static/chunks/1bfc9850-3d42d4baea78057f.js", "static/chunks/pages/contact-8842ad463dc553cf.js"],
        "/dashboard": [s, a, t, "static/chunks/6814153d-c93c7c503639df86.js", "static/chunks/5345-b1c2bd174eb98831.js", "static/chunks/pages/dashboard-66662010cd454c28.js"],
        "/dashboard/blogpost/[slug]": [s, a, t, e, d, i, "static/chunks/pages/dashboard/blogpost/[slug]-3e65dea519295cc7.js"],
        "/dashboard/blogs": [s, a, t, "static/chunks/pages/dashboard/blogs-52797f665de10990.js"],
        "/dashboard/downloader": [s, a, t, "static/chunks/pages/dashboard/downloader-4177ee98b05e91fa.js"],
        "/dashboard/filedirectory": [s, a, t, e, "static/chunks/pages/dashboard/filedirectory-020aec6ed1f26356.js"],
        "/dashboard/login": [e, "static/chunks/pages/dashboard/login-046f28724935c96c.js"],
        "/dashboard/tutorial/[slug]": [s, a, t, e, d, i, "static/chunks/pages/dashboard/tutorial/[slug]-5662185af84ce80d.js"],
        "/dashboard/tutorials": [s, a, t, "static/chunks/pages/dashboard/tutorials-64d83e8f50155d12.js"],
        "/dashboard/tutorialseries": [s, a, t, "static/chunks/pages/dashboard/tutorialseries-1a9a6993bacd5d92.js"],
        "/dashboard/tutorialseries/[slug]": [s, a, t, e, "static/chunks/pages/dashboard/tutorialseries/[slug]-13d11109d581aa1c.js"],
        "/dashboard/videos": [s, a, t, "static/chunks/pages/dashboard/videos-1fb856f9b81bb66b.js"],
        "/dashboard/videos/[slug]": [s, a, t, e, d, i, "static/chunks/pages/dashboard/videos/[slug]-7ac59ea24e2673ff.js"],
        "/dashboard/videoseries": [s, a, t, "static/chunks/pages/dashboard/videoseries-f3831725b1f174dd.js"],
        "/dashboard/videoseries/[slug]": [s, a, t, e, "static/chunks/pages/dashboard/videoseries/[slug]-f9ceb2ba8fbeb026.js"],
        "/dashboard/works": [s, a, t, e, "static/chunks/pages/dashboard/works-7a301c3477deb7c8.js"],
        "/login": [e, d, r, "static/chunks/pages/login-74c2097d8682c395.js"],
        "/my-gear": ["static/chunks/pages/my-gear-8bb82632c68f2a6b.js"],
        "/notes": ["static/chunks/pages/notes-edbe135cd0eae796.js"],
        "/privacy": ["static/chunks/pages/privacy-d9246593503f09c0.js"],
        "/search": ["static/chunks/pages/search-5c328e3b83178712.js"],
        "/sentry-example-page": ["static/chunks/pages/sentry-example-page-8ebac73328d257a0.js"],
        "/signup": [e, d, r, "static/chunks/pages/signup-35a6be3444d021bd.js"],
        "/sitemap.xml": ["static/chunks/pages/sitemap.xml-13b1c7a12d0a680b.js"],
        "/tutorial/[slug]": [s, a, "static/chunks/545f34e4-ec767841d4c695c3.js", c, o, "static/chunks/pages/tutorial/[slug]-02d38716094f1f47.js"],
        "/tutorials": ["static/chunks/pages/tutorials-b6f71ac7d895e844.js"],
        "/videos": [s, "static/chunks/pages/videos-03bd799c2daefb95.js"],
        "/videos/[slug]": [s, a, e, c, o, "static/chunks/pages/videos/[slug]-5f6d43389894e230.js"],
        "/work": [e, d, r, "static/chunks/pages/work-ac2721d36cc77cf5.js"],
        sortedPages: ["/", "/_app", "/_error", "/activate", "/blog", "/blogpost/[slug]", "/contact", "/dashboard", "/dashboard/blogpost/[slug]", "/dashboard/blogs", "/dashboard/downloader", "/dashboard/filedirectory", "/dashboard/login", "/dashboard/tutorial/[slug]", "/dashboard/tutorials", "/dashboard/tutorialseries", "/dashboard/tutorialseries/[slug]", "/dashboard/videos", "/dashboard/videos/[slug]", "/dashboard/videoseries", "/dashboard/videoseries/[slug]", "/dashboard/works", "/login", "/my-gear", "/notes", "/privacy", "/search", "/sentry-example-page", "/signup", "/sitemap.xml", "/tutorial/[slug]", "/tutorials", "/videos", "/videos/[slug]", "/work"]
    }
}("static/chunks/d64684d8-36a803646e771552.js", "static/chunks/252f366e-e675deb5435855bd.js", "static/css/470c5e8db7cdc7e9.css", "static/chunks/78e521c3-d418f5ef4f1b3882.js", "static/chunks/3326-b6ec87ba466573a4.js", "static/chunks/926-c51457daa2b0bfaa.js", "static/css/15f7f4f00b653c3e.css", "static/chunks/6235-acc96a7af8854dd4.js", "static/chunks/4853-6efd321bfca4310b.js", "query"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();