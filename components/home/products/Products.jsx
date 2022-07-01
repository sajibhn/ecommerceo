import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Grid from '../../grid/Grid'
import { useStateContext } from '../../context/EcommerceContext'
import Select from 'react-select'

const options = [
    { value: 'shoes', label: 'Shoes' },
    { value: 'jeans', label: 'Jeans' },
    { value: 'tshirt', label: 'T-shirt' },
    { value: 'dress', label: 'Dress' },
]

const Products = ({ products }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { gridNumber, setGridNumber } = useStateContext();
    const [allProducts, setAllProducts] = useState(products)
    useEffect(() => {
        if (selectedOption) {
            setAllProducts(products)
            const newProducts = products.filter((item) => item.Category === selectedOption.value)
            setAllProducts(newProducts)
        }
    }, [selectedOption, products])
    return (
        <>
            <section className="products container">
                <div className="products__filter">
                    <div className="filter__price">
                        <div>
                            <Select options={options} placeholder="Choose a category" defaultValue={selectedOption}
                                onChange={setSelectedOption} />
                        </div>
                    </div>
                </div>
                <div className="products__grid">
                    <Grid />
                </div>
                <div className="products__container" style={{ gridTemplateColumns: `repeat(${gridNumber}, 1fr)` }}>

                    {allProducts.map((product) => <ProductCard key={product._id} product={product} />)}
                </div>
            </section>
        </>
    )
}

export default Products