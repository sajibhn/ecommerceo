import React, { useEffect, useState } from 'react'
import { sanityClient, urlFor } from '../../../sanity';

const Clients = () => {
    const [images, setImage] = useState([]);
    async function FetchImages() {
        const query = '*[_type == "clientImages"]';
        const allImages = await sanityClient.fetch(query);
        setImage(allImages);
    }
    useEffect(() => {
        FetchImages();
    }, []);
    if (!images.length) return <p>Loading ....</p>
    return (
        <div className="clients section">
            <div className="clients__container container">
                {
                    images[0].image.map((item, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <img src={urlFor(item)} alt="" />
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Clients