'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './slider-style.css'

export default function IkiliSlider({ news }) {
    const sliderItems = news.slice(0, 6)
    const otherItems = news.slice(6,8)

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className="sm:h-[420px] flex flex-wrap sm:flex-nowrap mt-2 sm:mt-4 font-semibold">
            <div className="h-[250px] sm:h-full w-full sm:w-2/3 px-2 flex">
                <Swiper pagination={pagination} modules={[Autoplay, Pagination, EffectFade]} autoplay={{delay: 3000, disableOnInteraction: false}} loop={true} effect={'fade'}>
                    {
                        sliderItems.map((slide,index) => {
                            slide = slide.attributes
                            return (
                                <SwiperSlide key={index}>
                                    <a href={"/haber/"+slide.Slug} className="relative">
                                        <div className="absolute top-0 ml-1 mt-1 bg-yblue">
                                            <span className="text-[#fff] m-1">{slide.categories.data[0].attributes.Name}</span>
                                        </div>
                                        <img src={process.env.IMG_URL + slide.Banner.data.attributes.url} alt={slide.Banner.data.attributes.alternativeText} className="h-full w-full object-cover before:grad" />
                                        <div className="absolute bottom-12 bg-ychar text-center p-1">
                                            <span className="text-[#fff] text-lg sm:text-3xl">{slide.Title}</span>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className="w-full sm:w-1/3">
                {
                    otherItems.map((other, index) => {
                        other = other.attributes
                        return (
                            <div className="h-[250px] sm:h-1/2 px-2 pb-1 mt-2 sm:mt-0" key={index}>
                                <a href={"/haber/"+other.Slug}
                                   className="relative">
                                    <div className="absolute top-0 ml-1 mt-1 bg-yblue">
                                        <span className="text-[#fff] m-1">{other.categories.data[0].attributes.Name}</span>
                                    </div>
                                    <img src={process.env.IMG_URL + other.Banner.data.attributes.url} alt={other.Banner.data.attributes.alternativeText} className="h-full w-full object-cover"/>
                                    <div className="absolute bottom-0 bg-yblue w-full p-2">
                                        <span className="text-[#fff] text-lg">{other.Title}</span>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}