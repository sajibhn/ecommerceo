import '../styles/main.scss'
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
