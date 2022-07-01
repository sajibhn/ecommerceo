import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import Link from 'next/link'
import Cart from '../../cart/Cart'
import { useStateContext } from '../../context/EcommerceContext'

const Header = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    return (
        <>
            <header className="header">
                <nav className="container nav">
                    <div className="nav__logo">
                        <Link href="/">
                            <h3>Ecommerceo</h3>
                        </Link>
                    </div>
                    <div className='nav__menu'>
                        <div className='nav__list'>
                            <Link href="/">
                                <a >Home</a>
                            </Link>
                            <Link href="/products">
                                <a >Products</a>
                            </Link>
                        </div>
                        <div className="nav__cart" onClick={() => setShowCart(true)}>
                            <BsHandbag />
                            <span className='nav__cart-item'>{totalQuantities}</span>
                        </div>
                    </div>

                    {showCart && <Cart />}

                </nav>
            </header>
        </>
    )
}

export default Header