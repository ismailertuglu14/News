import {getPostsSlugs, getSinglePost} from "@/lib/api";
import { dateToTR } from "@/utils/date_helpers";

export async function generateMetadata({ params }) {
    const URL = "https://phihaber.com"
    const id = params.slug
    const product = await getSinglePost(id)

    return {
        title: product.Title + " | PhiHaber",
        openGraph: {
            title: product.Title,
            siteName: 'PhiHaber',
            locale: 'tr_TR',
            url: `${URL}/haber/${id}`,
            images:[`${URL}/strapi${product.Banner.data.attributes.url}`],
            type: 'website',
            description: product.Description,
        }
    }
}

export default async function Page({ params }) {
    const { slug } = params

    const res = await getSinglePost(slug)
    console.log(dateToTR(res.createdAt));
    return(
        <div className="max-w-[1180px] mx-auto article">
            <h1>{res.Title}</h1>
            <div className="mb-6">
                <article dangerouslySetInnerHTML={{__html: res.Content}}></article>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const res = await getPostsSlugs()

    return res.map((post) => ({
        slug: post.attributes.Slug
    }))
}