import React from 'react'
import Select from 'react-select'

const PriceFilter = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <>
            <div className="price__filter">
                <div>
                    <Select options={options} placeholder="Pick a Price" />
                </div>
            </div>
        </>
    )
}

export default PriceFilter