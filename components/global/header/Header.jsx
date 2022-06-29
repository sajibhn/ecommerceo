import React from 'react'
import { BsHandbag } from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="container nav">
                    <div className="nav__logo">
                        <h3>Ecommerceo</h3>
                    </div>
                    <div className="nav__cart">
                        <BsHandbag />
                        <span className='nav__cart-item'>0</span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header