import React from 'react'
import "./AppDownload.css"
import Cash from "../assets/Cash.png"
import Discount from "../assets/Discount.png"
import Gift from "../assets/Gift.png"
import PlayStore from "../assets/PlayStore.png"
import AppStore from "../assets/AppStore.png"
import Mobile from "../assets/Mobile.png"


const AppDownload = () => {
  return (
    <div className='AppDownload h-screen'>
      <div className="flex min-[1050px]:flex-row flex-col h-full w-[90%] m-auto">
        <div className="flex flex-col min-[1050px]:w-[30%] max-[1050px]:h-[30%] w-[80%] sm:w-[60%] min-[840px]:w-[50%] max-[1050px]:m-auto">
        <div className='flex px-3 py-2 bg-white rounded-lg font-lexend justify-between items-center mb-4 shadow-xl border-2 border-gray-100'>
            <p className='min-[1140px]:text-lg text-sm'>Redeem your <span className='text-[#8c1f68] min-[1140px]:text-xl text-lg font-medium'>BELLACASH</span> <br/>
            Only on App</p>
            <img src={Cash} alt="Cash" className='min-[1140px]:w-14 w-10 h-10 min-[1140px]:h-14 '/>
        </div>
        <div className='flex px-3 py-2 bg-white rounded-lg font-lexend justify-between items-center mb-4 shadow-xl border-2 border-gray-100'>
            <p className='min-[1140px]:text-lg text-sm'>Get a monthly <span className='text-[#8c1f68] min-[1140px]:text-xl text-lg font-medium'>Free Gift</span></p>
            <img src={Gift} alt="Cash" className='min-[1140px]:w-14 w-10 h-10 min-[1140px]:h-14 '/>
        </div>
        <div className='flex px-3 py-2 bg-white rounded-lg font-lexend justify-between items-center shadow-xl border-2 border-gray-100'>
            <p className='min-[1140px]:text-lg text-sm'>Use code: <span className='text-[#8c1f68] min-[1140px]:text-xl text-lg font-medium'>APP100</span> <br/>
            Get Rs. 100/- OFF </p>
            <img src={Discount} alt="Cash" className='min-[1140px]:w-12 w-10 h-10 min-[1140px]:h-12 '/>
        </div>
        </div>
        <div className="flex justify-center items-center min-[1050px]:w-[40%] max-[1050px]:h-[40%] max-[1050px]:mt-20 hover:scale-[1.03]"
        style={{transition: "all 0.8s ease-in-out"}}>
        <img src={Mobile} className='min-[1050px]:h-[65%] h-full perfume'/>
        </div>
        <div className=" flex flex-col min-[1050px]:items-end min-[1050px]:justify-end min-[1050px]:w-[30%] mb-24 max-[1050px]:h-[40%] max-[1050px]:justify-center max-[1050px]:items-center max-[1050px]:mt-10">  
        <div className='flex flex-col bg-gradient-to-r from-[#021631] to-[#8c1f68] px-5 py-3 rounded-lg shadow-xl'>
            <div className='flex text-xl text-white'>
                <p>Get the App:</p>
                <img src={PlayStore} className='min-[1140px]:w-8 w-6 min-[1140px]:h-8 h-6 mx-2 cursor-pointer'/>
                <img src={AppStore} className='min-[1140px]:w-8 w-6 min-[1140px]:h-8 h-6 mr-2 cursor-pointer'/>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
      






     