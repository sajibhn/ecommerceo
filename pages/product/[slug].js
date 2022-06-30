import React from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar } from 'react-icons/ai';
import StarRatingComponent from 'react-star-rating-component';

const SingleProduct = () => {
    return (
        <div className='container'>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src='https://cdn.shopify.com/s/files/1/0563/9661/1673/products/1_3b68063b-5ff8-4522-b856-0a253964464c.jpg?v=1650967080' className="product-detail-image" />
                    </div>
                    <div className="small-images-container">

                        <img
                            src='https://cdn.shopify.com/s/files/1/0563/9661/1673/products/1_3b68063b-5ff8-4522-b856-0a253964464c.jpg?v=1650967080'
                            className='small-image'
                        />
                        <img
                            src='https://cdn.shopify.com/s/files/1/0563/9661/1673/products/1_3b68063b-5ff8-4522-b856-0a253964464c.jpg?v=1650967080'
                            className='small-image'
                        />
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1></h1>
                    <div className="reviews">
                        <div>
                            <StarRatingComponent
                                name="rating"
                                editing={false}
                                renderStarIcon={() => <span><AiFillStar /></span>}
                                starCount={5}
                                value={4}
                                starColor="#e12c43"
                            />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details: </h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p className="price">$5</p>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus"><AiOutlineMinus /></span>
                            <span className="num">5</span>
                            <span className="plus"><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" >Add to Cart</button>
                        <button type="button" className="buy-now">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct

