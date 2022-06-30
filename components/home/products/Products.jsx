import React from 'react'
import Filter from '../../search/filter/Filter'
import ProductCard from './ProductCard'
import Grid from '../../grid/Grid'
import { useStateContext } from '../../context/EcommerceContext'


const Products = ({ products }) => {
    const { gridNumber, setGridNumber } = useStateContext()
    return (
        <>
            <section className="products container">
                <div className="products__filter">
                    <Filter />
                </div>
                <div className="products__grid">
                    <Grid />
                </div>
                <div className="products__container" style={{ gridTemplateColumns: `repeat(${gridNumber}, 1fr)` }}>

                    {products.map((product) => <ProductCard key={product._id} product={product} />)}
                </div>
            </section>
        </>
    )
}

export default Products