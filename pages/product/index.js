import Hero from '../../components/home/hero/Hero'
import Products from '../../components/home/products/Products'
import { sanityClient } from '../../sanity'


export default function Home({ products }) {

    return (
        <>
            <Hero />
            <Products products={products} />
        </>
    )


}


export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await sanityClient.fetch(query);


    return {
        props: { products }
    }
}

