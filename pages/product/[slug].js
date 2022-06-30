import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar } from 'react-icons/ai';
import StarRatingComponent from 'react-star-rating-component';
import { useStateContext } from '../../components/context/EcommerceContext';
import { sanityClient, urlFor } from '../../sanity';

const SingleProduct = ({ product }) => {
    const [index, setIndex] = useState(0);
    const { Category, image, name, price, rating, details } = product
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    }
    return (
        <div className='container'>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <div className="image-container">
                            <img src={urlFor(image && image[index])} className="product-detail-image" />
                        </div>
                    </div>
                    <div className="small-images-container">
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div className="reviews">
                        <div>
                            <StarRatingComponent
                                name="rating"
                                editing={false}
                                renderStarIcon={() => <span><AiFillStar /></span>}
                                starCount={5}
                                value={rating}
                                starColor="#e12c43"
                            />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className="price">${price}</p>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                            <span className="num">{qty}</span>
                            <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                        <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                    </div>

                    <div className='category'>
                        <p>Category: {Category}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct


export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

    const product = await sanityClient.fetch(query);

    console.log(product);

    return {
        props: { product }
    }
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

    const products = await sanityClient.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}