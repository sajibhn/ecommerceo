import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import StarRatingComponent from 'react-star-rating-component';
import { AiFillStar } from 'react-icons/ai'

const ProductCard = () => {
    return (
        <div className='product__card'>
            <div className="product__card__head">
                <img src="https://cdn.shopify.com/s/files/1/0563/9661/1673/products/1_03c3d3b2-6870-44e2-8dd0-f0bf371eae06.jpg?v=1650966496" alt="pro" />
                <div className='product__card__cart'>
                    <button>
                        <BsHandbag />
                    </button>
                </div>
            </div>
            <div className="product__card__body">
                <div className='product__ratings'>
                    <StarRatingComponent
                        name="rating"
                        editing={false}
                        renderStarIcon={() => <span><AiFillStar /></span>}
                        starCount={5}
                        value={4}
                        starColor="#e12c43"
                    />
                </div>
                <div className='product__info'>
                    <h3>Silk Short-Sleeve</h3>
                    <span>$24.00</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard