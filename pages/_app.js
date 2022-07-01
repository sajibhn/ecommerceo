import '../styles/main.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Header from "../components/global/header/Header"
import Footer from '../components/global/Footer/Footer'
import { StateContext } from '../components/context/EcommerceContext'


function MyApp({ Component, pageProps }) {
  return <>
    <StateContext>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  </>
}

export default MyApp
