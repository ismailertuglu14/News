import RSS from 'rss';
import {getFirstPostsByNumb} from "@/lib/api";

const MAX_POSTS = 50;
const URL = "https://phihaber.com"
export async function GET() {
    const posts = await getFirstPostsByNumb(MAX_POSTS)
    const feed = new RSS({
        title: 'PhiHaber',
        description: 'En güncel haberler, en güncel yazılarla.',
        site_url: URL,
        feed_url: `${URL}/feed.xml`,
        copyright: `${new Date().getFullYear()} PhiHaber`,
        language: 'tr-TR',
        pubDate: new Date(),
        image_url: `${URL}/logo_dark.jpg`,
    });

    posts.map(post => {
        post = post.attributes
        feed.item({
            title: post.Title,
            url: `${URL}/haber/${post.Slug}`,
            date: post.createdAt,
            categories: [post.categories.data[0].attributes.Slug],
            description: post.Description,
            author: post.author.data.attributes.Name,
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'text/xml; charset=utf-8',
        },
    });
}