import Link from 'next/link'
import React from 'react'

const BannerRight = () => {
    return (
        <div className="banner__right">
            <img src="https://cdn.shopify.com/s/files/1/0563/9661/1673/files/banner1.jpg?v=1650851612" alt="" />
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

export default BannerRight