export default defineNuxtConfig({
    app: {
        head: {
            title: "Ryan Santos",
            htmlAttrs: {
                lang: "pt-BR"
            },
            meta: [
                { name: "language", content: "pt-BR" },
                { name: "description", content: "Focado em desenvolver um Front-end poderoso e com alta qualidade." },
                { name: "robots", content: "all" },
                { name: "author", content: "Ryan santos" },
                { property: "og:image", content: "/favicon/og.png" }
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
                { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon/android-chrome-192x192.png" },
                { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon/android-chrome-512x512.png" }
            ]
        },
        pageTransition: {
            name: "page",
            mode: "out-in"
        }
    },

    typescript: {
        strict: true
    },

    modules: [
        "nuxt-gtag",
        "@nuxtjs/tailwindcss",
        "nuxt-icon",
        "@nuxtjs/google-fonts",
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "nuxt-lodash"
    ],

    gtag: {
        id: "G-TSXEY9CR96"
    },

    googleFonts: {
        download: false,
        families: {
            Urbanist: [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    },

    colorMode: {
        fallback: "dark",
        classSuffix: ""
    },

    devtools: {
        enabled: false
    },

    nitro: {
        preset: "netlify"
    }
});