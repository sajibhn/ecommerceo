import Banner from '../components/home/banner/Banner'
import Clients from '../components/home/clients/Clients'
import HomeSlider from '../components/home/homeslider/HomeSlider'


export default function Home() {

  return (
    <>
      <HomeSlider />
      <Banner />
      <Clients />
    </>
  )


}


// export const getServerSideProps = async () => {
// }

