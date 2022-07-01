import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { sanityClient, urlFor } from "../../../sanity";
const HomeSlider = () => {
    const [slider, setSlider] = useState([]);

    async function FetchSlider() {
        const query = '*[_type == "homeSlider"]';
        const allSlider = await sanityClient.fetch(query);
        setSlider(allSlider);
    }

    useEffect(() => {
        FetchSlider();
    }, []);

    if (!slider.length) return <p>Loading ....</p>
    return (
        <>
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                        waitForTransition: true,
                        pauseOnMouseEnter: true,
                    }}
                >
                    {slider.map((item, index) => {
                        const { image, heading, description } = item;
                        return (
                            <>
                                <SwiperSlide key={index}>
                                    <div
                                        className="product__slider"
                                        style={{ backgroundImage: `url(${urlFor(image)})` }}
                                    >
                                        <div className="product__slider__container container">
                                            <h1>{heading}</h1>
                                            <p>{description}</p>
                                            <Link href="/products">
                                                <a className="button">show now</a>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
};

export default HomeSlider;
