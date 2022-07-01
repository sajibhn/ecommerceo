import Banner from '../components/home/banner/Banner'
import Clients from '../components/home/clients/Clients'
import HomeSlider from '../components/home/homeslider/HomeSlider'
import Popular from '../components/home/popularproducts/Popular'


export default function Home() {

  return (
    <>
      <HomeSlider />
      <Banner />
      <Popular />
      <Clients />
    </>
  )


}


// export const getServerSideProps = async () => {
// }

