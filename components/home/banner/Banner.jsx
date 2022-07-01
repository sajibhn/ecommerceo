import React from 'react'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

const Banner = () => {
    return (
        <section className="section banner">
            <div className="banner__container container">
                <BannerLeft />
                <BannerRight />
            </div>
        </section>
    )
}

export default Banner