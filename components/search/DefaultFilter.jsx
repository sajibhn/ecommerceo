import React, { useState } from 'react'
import Select from 'react-select'

const options = [
    { value: 'price', label: 'Sort by price' },
]
const DefaultFilter = ({ setSortBy }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    setSelectedOption(
        setSortBy(selectedOption)
    )
    return (
        <div className="filter__price">
            <div>
                <Select
                    options={options}
                    placeholder="Sort by"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption} />
            </div>
        </div>
    )
}

export default DefaultFilter