import Link from 'next/link'
import React from 'react'

const BannerLeft = () => {
    return (
        <div className="banner__left">
            <img src="https://cdn.shopify.com/s/files/1/0563/9661/1673/files/banner2.jpg?v=1650851597" alt="" />
            <div className='banner__content'>
                <div >
                    <h3>Women</h3>
                    <p>
                        Inspice t-shirts mulierum cum diversis rationibus et generibus.
                    </p>
                    <Link href='/product'>
                        <a className="button">shop now</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BannerLeft