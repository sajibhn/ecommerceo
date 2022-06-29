import React from 'react'
import Select from 'react-select'

const DefaultFilter = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className="filter__price">
            <div>
                <Select options={options} placeholder="Pick a Price" />
            </div>
        </div>
    )
}

export default DefaultFilter