import React from 'react'
import PriceFilter from '../../home/products/PriceFilter'
import DefaultFilter from '../DefaultFilter'
import CategoryFilter from './CategoryFilter'


const Filter = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <>
            <section className="filter">
                <div className="filter__container">
                    <PriceFilter />
                    <CategoryFilter />
                    <DefaultFilter />
                </div>
            </section>
        </>
    )
}

export default Filter