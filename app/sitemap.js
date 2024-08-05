import {getCategoriesForSitemap, getPostsForSitemap} from "@/lib/api";

export default async function sitemap() {
    const url = "https://phihaber.com"
    const category = await getCategoriesForSitemap();
    const post = await getPostsForSitemap();

    const categories = category.map(category => {
        return {
            url: `${url}/kategori/${category.attributes.Slug}`,
            lastModified: category.attributes.updatedAt,
        };
    });

    const posts = post.map(post => {
        return {
            url: `${url}/haber/${post.attributes.Slug}`,
            lastModified: post.attributes.updatedAt,
        };
    });

    return [
        {
            url: `${url}`,
            lastModified: new Date(),
        },
        {
            url: `${url}/kunye`,
            lastModified: new Date(),
        },
        {
            url: `${url}/hakkimizda`,
            lastModified: new Date(),
        },
        {
            url: `${url}/iletisim`,
            lastModified: new Date(),
        },
        {
            url: `${url}/gizlilik-politikasi`,
            lastModified: new Date(),
        },
        {
            url: `${url}/cerezler`,
            lastModified: new Date(),
        },
        {
            url: `${url}/hukum-ve-kosullar`,
            lastModified: new Date(),
        },
        ...posts,
        ...categories,
    ];
}