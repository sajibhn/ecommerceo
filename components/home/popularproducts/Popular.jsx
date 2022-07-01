import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../../sanity'
import ProductCard from '../products/ProductCard';

const Popular = () => {
    const [allProducts, setAllProducts] = useState([])

    async function FetchProducts() {

        const query = '*[_type == "product"]';
        const products = await sanityClient.fetch(query);
        setAllProducts(products)
    }

    useEffect(() => {
        FetchProducts()
    }, [])
    return (

        <div className='popular section'>
            <h1>Popular Products</h1>
            <div className="popular__container container">
                {
                    allProducts?.slice(0, 6).map((product) => <ProductCard key={product._id} product={product} />)
                }
            </div>
            <div className='popular__button'>
                <Link href="/products">
                    <a className="button">show more</a>
                </Link>
            </div>
        </div>
    )
}

export default Popular