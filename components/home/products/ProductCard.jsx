import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import StarRatingComponent from 'react-star-rating-component';
import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link';
import { urlFor } from '../../../sanity';
import { useStateContext } from '../../context/EcommerceContext';

const ProductCard = ({ product }) => {
    const { slug, image, name, price, rating } = product
    const { onAdd } = useStateContext()
    return (

        <>

            <div className='product__card'>
                <div className="product__card__head">
                    <Link href={`/product/${slug.current}`}>
                        <img src={urlFor(image && image[0])} alt="pro" />
                    </Link>

                    <div className='product__card__cart' onClick={() => onAdd(product, 1)}>
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
                        <Link href={`/product/${slug.current}`}>
                            <h3>{name}</h3>
                        </Link>
                        <span>${price}</span>
                    </div>
                </div>
            </div>


        </>
    )

}

export default ProductCard
