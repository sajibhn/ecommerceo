import React from 'react'
import { BiGridHorizontal, BiGridSmall } from 'react-icons/bi'
import { useStateContext } from '../context/EcommerceContext'

const Grid = () => {
    const { setGridNumber } = useStateContext()
    return (
        <section className="grid__filter">
            <div className="grid__filter__item" onClick={() => setGridNumber(2)}>
                <BiGridSmall />
            </div>
            <div className="grid__filter__item" onClick={() => setGridNumber(3)}>
                <BiGridHorizontal />
            </div>

        </section>
    )
}

export default Grid