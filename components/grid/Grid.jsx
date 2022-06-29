import React from 'react'
import { BiGridHorizontal, BiGridSmall } from 'react-icons/bi'

const Grid = () => {
    return (
        <section className="grid__filter">
            <div className="grid__filter__item">
                <BiGridSmall />
            </div>
            <div className="grid__filter__item">
                <BiGridHorizontal />
            </div>

        </section>
    )
}

export default Grid