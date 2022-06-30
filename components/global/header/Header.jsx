import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="container nav">
                    <div className="nav__logo">
                        <Link href="/">
                            <h3>Ecommerceo</h3>
                        </Link>
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