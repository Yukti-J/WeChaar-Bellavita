import { useEffect, useState } from 'react'
import './App.css'
import AppDownload from './AppDownload/AppDownload'
import BestSellers from './BestSellers/BestSellers'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Loader from './Loader/Loader'
import LuxuryCategory from './LuxuryCategory/LuxuryCategory'
import NewArrivals from './NewArrivals/NewArrivals'
import Why from './Why/Why'
import "./Fonts/against\ regular.ttf"
import "./Fonts/against\ regular.otf"

function App() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);

  return (
    <div className='overflow-x-hidden'>
      {showLoader && <Loader/>}
      {!showLoader && 
      <div className='fadein'>
      <Home/>
      <BestSellers/>
      <NewArrivals/>
      <LuxuryCategory/>
      <Why/>
      <AppDownload/>
      <Footer/>
      </div>
      }
    </div>
  )
}

export default App
