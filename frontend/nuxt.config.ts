export default defineNuxtConfig({
    compatibilityDate: '2025-03-25',
    devtools: { enabled: true },

    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@vite-pwa/nuxt',
    ],

    tailwindcss: {
        config: {
            darkMode: 'class',
        },
    },

    pwa: {
        registerType: 'autoUpdate',
        workbox: {
            navigateFallback: null,
            importScripts: ['/sw-push.js'],
        },
        manifest: {
            name: 'JCITA App',
            short_name: 'JCITA App',
            start_url: '/auth/login',
            display: 'standalone',
            theme_color: '#0a0a0a',
            background_color: '#0a0a0a',
            icons: [
                {
                    src: '/icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: '/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },
    },

    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL || 'http://localhost:8000/api',
        },
    },

    css: ['~/assets/css/main.css'],

    typescript: {
        strict: true,
    },
});
