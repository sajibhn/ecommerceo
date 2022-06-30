import React from 'react'
import Filter from '../../search/filter/Filter'
import ProductCard from './ProductCard'
import Grid from '../../grid/Grid'


const Products = ({ products }) => {
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

                    {products.map((product) => <ProductCard key={product._id} product={product} />)}
                </div>
            </section>
        </>
    )
}

export default Products