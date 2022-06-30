import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import StarRatingComponent from 'react-star-rating-component';
import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link';
import { urlFor } from '../../../sanity';

const ProductCard = ({ product }) => {
    const { slug, image, name, price, rating } = product
    return (

        <>
            <Link href={`/product/${slug.current}`}>
                <div className='product__card'>
                    <div className="product__card__head">
                        <img src={urlFor(image && image[0])} alt="pro" />
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
                                value={rating}
                                starColor="#e12c43"
                            />
                        </div>
                        <div className='product__info'>
                            <h3>{name}</h3>
                            <span>${price}</span>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    )

}

export default ProductCard
