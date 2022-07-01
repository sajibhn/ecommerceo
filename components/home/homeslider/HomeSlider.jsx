import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { sanityClient, urlFor } from "../../../sanity";
const HomeSlider = () => {
    const [slider, setSlider] = useState([]);

    async function FetchProducts() {
        const query = '*[_type == "homeSlider"]';
        const allSlider = await sanityClient.fetch(query);
        setSlider(allSlider);
    }

    useEffect(() => {
        FetchProducts();
    }, []);

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
                    {slider.map((item) => {
                        const { image, heading, description } = item;
                        return (
                            <>
                                <SwiperSlide>
                                    <div
                                        className="product__slider"
                                        style={{ backgroundImage: `url(${urlFor(image)})` }}
                                    >
                                        <div className="product__slider__container container">
                                            <h1>{heading}</h1>
                                            <p>{description}</p>
                                            <Link href="/product">
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
