import {getCategoriesOnlySlug, getPostsByCategoryName} from "@/lib/api";
import toImageUrl from "@/utils/to_image_url";

export default async function Category({params}) {
    const { slug } = params
    const res = await getPostsByCategoryName(slug)

    return (
        <div className="mx-auto max-w-[1180px] my-6 flex flex-wrap">
            {
                res.map((post,index) => {
                    post = post.attributes
                    return (
                        <div className="mb-4 flex flex-wrap" key={index}>
                            <div className="w-1/3">
                                <a href={"/haber/"+post.Slug} className="relative">
                                    <img src={process.env.IMG_URL + post.Banner.data.attributes.url}  alt={post.Banner.data.attributes.alternativeText} />
                                </a>
                            </div>
                            <div className="w-2/3">
                                <a href={"/haber/"+post.Slug} className="relative">
                                    <h1 className="font-bold text-[24px]">{post.Title}</h1>
                                    <p >{post.Description}</p>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export async function generateStaticParams() {
    const posts = await getCategoriesOnlySlug()
    return posts.map((slug) => (
        {
            category: slug.attributes.Slug
        }
    ))
}