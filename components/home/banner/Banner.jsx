import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../../sanity';
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

const Banner = () => {
    const [banner, setBanner] = useState([]);

    async function FetchProducts() {
        const query = '*[_type == "banner"]';
        const allBanner = await sanityClient.fetch(query);
        setBanner(allBanner);
    }
    useEffect(() => {
        FetchProducts();
    }, []);
    return (
        <section className="section banner">
            <div className="banner__container container">
                <BannerLeft leftBanner={banner[1]} />
                <BannerRight rightBanner={banner[0]} />
            </div>
        </section>
    )
}

export default Banner