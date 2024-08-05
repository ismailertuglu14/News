import {getAnasayfaUstKisim} from "@/lib/api";
import UcluRow from "@/components/uclu-row";
import IkiliSlider from "@/components/ikili-slider";

export default async function Page() {
    const posts = await getAnasayfaUstKisim(30)
    const ucluRow = posts.slice(0, 3)
    const ikiliSlayt = posts.slice(3, 11)
    const others = posts.slice(11,30)

    const chunkSize = 3;
    const groupedPosts = [];

    for (let i = 0; i < others.length; i += chunkSize) {
        groupedPosts.push(others.slice(i, i + chunkSize));
    }

    const renderedComponents = groupedPosts.map((chunk, index) => (
        <UcluRow key={index} news={chunk} />
    ));

    return (
        <>
            <div className="mx-auto max-w-[1180px] my-4">
                <UcluRow news={ucluRow}/>
                <IkiliSlider news={ikiliSlayt}/>
                {
                    renderedComponents
                }
            </div>
        </>
    )
}
