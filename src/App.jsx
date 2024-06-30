import './App.css'
import AppDownload from './AppDownload/AppDownload'
import BestSellers from './BestSellers/BestSellers'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import LuxuryCategory from './LuxuryCategory/LuxuryCategory'
import NewArrivals from './NewArrivals/NewArrivals'
import Testimonials from './Testimonials/Testimonials'
import Why from './Why/Why'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <BestSellers/>
      <NewArrivals/>
      <LuxuryCategory/>
      <Why/>
      <AppDownload/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
