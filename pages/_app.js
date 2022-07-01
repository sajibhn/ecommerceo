import '../styles/main.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Header from "../components/global/header/Header"
import Footer from '../components/global/Footer/Footer'
import { StateContext } from '../components/context/EcommerceContext'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return <>
    <StateContext>
      <Header />
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>Ecommerceo | Buy Fashinable Clothes</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  </>
}

export default MyApp
