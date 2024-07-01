import React from 'react'
import "./LuxuryCategory.css"
import Lux1 from "../assets/Lux1.png"
import Lux2 from "../assets/Lux2.png"
import Lux3 from "../assets/Lux3.png"
import Lux4 from "../assets/Lux4.png"
import Lux5 from "../assets/Lux5.png"
import Lux6 from "../assets/Lux6.png"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const LuxuryCategory = () => {

  return (
    <div className='flex flex-col items-center my-10 fadein'>
      <p className='text-3xl font-against pt-4'>LUXURY CATEGORIES</p>
      <Carousel className='min-[1050px]:w-[70%] w-[90%] mt-14' autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        <div>
            <img src={Lux1} alt='Luxury1' className='min-[800px]:h-[500px]'/>
        </div>
        <div>
            <img src={Lux2} alt='Luxury1' className='min-[800px]:h-[500px]'/>
        </div>
        <div>
            <img src={Lux3} alt='Luxury1' className='min-[800px]:h-[500px]'/>
        </div>
        <div>
            <img src={Lux4} alt='Luxury1' className='min-[800px]:h-[500px]'/>
        </div>
        <div>
            <img src={Lux5} alt='Luxury1' className='min-[800px]:h-[500px]'/>
        </div>
        <div>
            <img src={Lux6} alt='Luxury1' className='min-[800px]:h-[500px]'/>
        </div>
      </Carousel>
    </div>
  )
}

export default LuxuryCategory
