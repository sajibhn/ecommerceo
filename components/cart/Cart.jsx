import React from 'react'
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const Cart = () => {
    return (
        <div className="cart-wrapper">
            <div className="cart-container">
                <button
                    type="button"
                    className="cart-heading">
                    <AiOutlineLeft />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">(5 items)</span>
                </button>


                <div className="empty-cart">
                    <AiOutlineShopping />
                    <h3>Your shopping bag is empty</h3>
                    <Link href="/">
                        <button
                            type="button"
                            className="btn"
                        >
                            Continue Shopping
                        </button>
                    </Link>
                </div>

                <div className="product-container">
                    <div className="product">
                        <img src='https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_c7610d0f-660a-4f3f-b61c-796dcc4f0a5d_360x.jpg?v=1614076295' className="cart-product-image" />
                        <div className="item-desc">
                            <div className="flex top">
                                <h5>pants</h5>
                                <h4>$5</h4>
                            </div>
                            <div className="flex bottom">
                                <div>
                                    <p className="quantity-desc">
                                        <span className="minus" o>
                                            <AiOutlineMinus />
                                        </span>
                                        <span className="num">5 </span>
                                        <span className="plus" ><AiOutlinePlus /></span>
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="remove-item"
                                >
                                    <TiDeleteOutline />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-bottom">
                    <div className="total">
                        <h3>Subtotal:</h3>
                        <h3>$25</h3>
                    </div>
                    <div className="btn-container">
                        <button type="button" className="btn">
                            Pay with Stripe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart