import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../../sanity'

const BannerRight = ({ rightBanner }) => {
    const { image, heading, description } = rightBanner
    return (
        <div className="banner__right">
            <img src={urlFor(image)} alt="" />
            <div className='banner__content'>
                <div >
                    <h3>{heading}</h3>
                    <p>
                        {description}
                    </p>
                    <Link href='/products'>
                        <a className="button">shop now</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BannerRight