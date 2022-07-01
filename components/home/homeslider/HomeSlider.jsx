import Link from 'next/link'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
const HomeSlider = () => {
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
                    <SwiperSlide>
                        <div className="product__slider" style={{ backgroundImage: 'url(https://demo.ishithemes.com/opencart/OPC140/OPC140L01/image/cache/catalog/slider/Slider-1-1920x800.png)' }} >
                            <div className="product__slider__container container">
                                <h1>feel pretty feel classy</h1>
                                <p>
                                    “Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening
                                </p>
                                <Link href="/product">
                                    <a className="button">show now</a>
                                </Link>
                            </div>
                        </div >
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product__slider" style={{ backgroundImage: 'url(https://demo.ishithemes.com/opencart/OPC140/OPC140L01/image/cache/catalog/slider/Slider-1-1920x800.png)' }} >
                            <div className="product__slider__container container">
                                <h1>feel pretty feel classy</h1>
                                <p>
                                    “Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening
                                </p>
                                <Link href="/product">
                                    <a className="button">show now</a>
                                </Link>
                            </div>
                        </div >
                    </SwiperSlide>
                </Swiper>

            </div>
        </>
    )
}

export default HomeSlider