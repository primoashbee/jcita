export default defineNuxtConfig({
    compatibilityDate: '2025-03-25',
    devtools: { enabled: true },

    modules: [
        '@nuxtjs/tailwindcss',
        '@vite-pwa/nuxt',
    ],

    pwa: {
        registerType: 'autoUpdate',
        workbox: {
            navigateFallback: null,
            importScripts: ['/sw-push.js'],
        },
        manifest: {
            name: 'JCITA Tabacuhan',
            short_name: 'JCITA',
            theme_color: '#ffffff',
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

    typescript: {
        strict: true,
    },
});
