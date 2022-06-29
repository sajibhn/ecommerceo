import React from 'react'
import Select from 'react-select'

const CategoryFilter = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className="category__filter">
            <Select options={options} placeholder="Select a category" />
        </div>
    )
}

export default CategoryFilter