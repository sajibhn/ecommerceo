import '../styles/main.scss'
import Header from "../components/global/header/Header"
import Footer from '../components/global/Footer/Footer'


function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
