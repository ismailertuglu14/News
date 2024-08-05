export default function robots() {
    return {
        rules:
        [
            {
                userAgent: '*',
                disallow: '/strapi',
            },
            {
                userAgent: 'Twitterbot',
                allow: '/',
            }
        ],
        sitemap: 'https://phihaber.com/sitemap.xml',
    }
}