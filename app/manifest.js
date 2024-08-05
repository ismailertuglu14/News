export default function manifest() {
    return {
        name: 'PhiHaber',
        short_name: 'PhiHaber',
        description: 'En güncel haberler, en güncel yazılarla.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#1b2a41',
        orientation: 'portrait',
        icons: [
            {
                src: 'favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            {
                src: 'android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            }
        ],
    }
}