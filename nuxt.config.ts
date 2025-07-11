import tailwindcss from "@tailwindcss/vite";

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
            enterActiveClass: "transition-all duration-200",
            enterFromClass: "opacity-0 blur-md translate-y-8",
            leaveActiveClass: "transition-all duration-200",
            leaveToClass: "opacity-0 blur-md translate-y-8",
            mode: "out-in"
        }
    },

    css: [
        "~/assets/css/main.css"
    ],

    typescript: {
        strict: true
    },

    nitro: {
        preset: "netlify"
    },

    vite: {
        plugins: [
            tailwindcss()
        ]
    },

    devtools: {
        enabled: true
    },

    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "nuxt-lodash",
        "nuxt-gtag",
        "@nuxt/icon"
    ],

    eslint: {
        config: {
            stylistic: true
        }
    },

    fonts: {
        defaults: {
            weights: ["100 900"]
        }
    },

    colorMode: {
        fallback: "dark",
        classSuffix: ""
    },

    gtag: {
        id: "G-TSXEY9CR96"
    },

    icon: {
        class: "block",
        provider: "iconify"
    },

    compatibilityDate: "2024-07-29"
});