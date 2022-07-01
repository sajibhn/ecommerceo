import React from 'react'
import { GiCommercialAirplane } from 'react-icons/gi'
import { TbTruckReturn } from 'react-icons/tb'
import { AiOutlineFileDone } from 'react-icons/ai'
import { BsShieldCheck } from 'react-icons/bs'

const Services = () => {
    return (
        <section className="services container section">
            <div className="services__container">
                <div>
                    <GiCommercialAirplane />
                    <span>worldwide <br /> shipping</span>
                </div>
                <div>
                    <TbTruckReturn />
                    <span>free 60-days <br /> returns</span>
                </div>
                <div>
                    <AiOutlineFileDone />
                    <span>24 months <br /> warranty</span>
                </div>
                <div>
                    <BsShieldCheck />
                    <span>100% secure <br /> checkout</span>
                </div>
            </div>
        </section>
    )
}

export default Services