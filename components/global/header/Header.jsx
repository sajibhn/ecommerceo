import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import Link from 'next/link'
import Cart from '../../cart/Cart'
import { useStateContext } from '../../context/EcommerceContext'

const Header = () => {
    const { showCart, setShowCart } = useStateContext();
    return (
        <>
            <header className="header">
                <nav className="container nav">
                    <div className="nav__logo">
                        <Link href="/">
                            <h3>Ecommerceo</h3>
                        </Link>
                    </div>
                    <div className="nav__cart" onClick={() => setShowCart(true)}>
                        <BsHandbag />
                        <span className='nav__cart-item'>0</span>
                    </div>

                    {showCart && <Cart />}

                </nav>
            </header>
        </>
    )
}

export default Header