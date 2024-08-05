import {getCategories} from "@/lib/api";
import HamburgerIcon from "./icons/hamburger-icon";

export default async function Navbar() {
    const categories = await getCategories()

    return (
        <header className="flex flex-col w-full text-[#fff] shadow-lg">
            <div className="bg-yrblack flex flex-row items-center">
                <div className="w-full max-w-[1000px] bg-yrblack mx-auto">
                    <div className="flex items-center justify-between h-14 text-[#fff]">
                        <a href="/">
                            <div className="h-[60px] p-1">
                                <img src="/logo.png" alt="PhiHaber" className="h-full w-full object-cover" />
                            </div>
                        </a>
                    </div>
                </div>
                <HamburgerIcon height={26} width={26} color={"white"} className="visible sm:invisible mr-4 cursor-pointer"/>   
            </div>
            <div className="bg-[#fff] hidden sm:block">
                <div className="w-full mx-auto flex flex-wrap py-1 justify-center font-semibold">
                    {
                        categories.map((category,index) => {
                            category = category.attributes
                            return (
                                <a key={index} href={"/kategori/"+category.Slug} className="text-yblue hover:text-ychar mx-3 sm:mx-6">{category.Name}</a>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    )
}