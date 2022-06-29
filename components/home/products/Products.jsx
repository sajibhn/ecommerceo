import React from 'react'
import Filter from '../../search/filter/Filter'
import ProductCard from './ProductCard'
import Grid from '../../grid/Grid'


const Products = () => {
    return (
        <>
            <section className="products container">
                <div className="products__filter">
                    <Filter />
                </div>
                <div className="products__grid">
                    <Grid />
                </div>
                <div className="products__container">
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