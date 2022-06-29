import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    return (
        <>
            <section className="products">
                <div className="products__container container">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </section>
        </>
    )
}

export default Products