import React from 'react'
import "./AppDownload.css"
import Cash from "../assets/Cash.png"
import Discount from "../assets/Discount.png"
import Gift from "../assets/Gift.png"
import PlayStore from "../assets/PlayStore.png"
import AppStore from "../assets/AppStore.png"


const AppDownload = () => {
  return (
    <div className='AppDownload min-[1480px]:h-[750px] min-[1350px]:h-[700px] min-[1140px]:h-[600px] h-[500px] flex min-[980px]:flex-row flex-col justify-between max-[980px]:h-[90vh]'>
      <div className='flex flex-col min-[1350px]:w-[26%] min-[1350px]:ml-32 min-[1140px]:w-[30%] min-[1140px]:ml-24 min-[980px]:ml-10 min-[980px]:pt-20 max-[980px]:w-1/2 max-[980px]:mx-auto max-[980px]:my-10 max-[640px]:w-10/12'>
        <div className='flex px-3 py-2 bg-white rounded-lg font-lexend justify-between items-center mb-3'>
            <p className='min-[1140px]:text-lg text-sm'>Redeem your <span className='text-[#8c1f68] min-[1140px]:text-xl text-lg font-medium'>BELLACASH</span> <br/>
            Only on App</p>
            <img src={Cash} alt="Cash" className='min-[1140px]:w-14 w-10 h-10 min-[1140px]:h-14 '/>
        </div>
        <div className='flex px-3 py-2 bg-white rounded-lg font-lexend justify-between items-center mb-3'>
            <p className='min-[1140px]:text-lg text-sm'>Get a monthly <span className='text-[#8c1f68] min-[1140px]:text-xl text-lg font-medium'>Free Gift</span></p>
            <img src={Gift} alt="Cash" className='min-[1140px]:w-14 w-10 h-10 min-[1140px]:h-14 '/>
        </div>
        <div className='flex px-3 py-2 bg-white rounded-lg font-lexend justify-between items-center'>
            <p className='min-[1140px]:text-lg text-sm'>Use code: <span className='text-[#8c1f68] min-[1140px]:text-xl text-lg font-medium'>APP100</span> <br/>
            Get Rs. 100/- OFF </p>
            <img src={Discount} alt="Cash" className='min-[1140px]:w-12 w-10 h-10 min-[1140px]:h-12 '/>
        </div>
      </div>
      <div className='max-[640px]:w-10/12 max-[980px]:w-1/2 max-[980px]:mx-auto max-[980px]:my-10 min-[980px]:self-end min-[1140px]:pb-20 min-[980px]:pb-14 min-[1480px]:pr-40 min-[1140px]:pr-24 min-[980px]:pr-10 min-[1350px]:pr-32 min-[1480px]:w-[32%] min-[1140px]:w-[38%] '>
        <div className='flex flex-col bg-bg-blue px-5 py-3 rounded-lg shadow-lg'>
            <div className='min-[1140px]:text-xl text:lg text-white'>
                Download Now:
            </div>
            <div className='flex text-white text-lg mt-2 justify-between'>
                <button className='flex items-center bg-[#021631] px-2 py-1 rounded-md min-[1140px]:text-lg text-sm'><img src={PlayStore} className='min-[1140px]:w-8 w-6 min-[1140px]:h-8 h-6 mr-2'/> Play Store</button>
                <button className='flex items-center bg-[#021631] px-2 py-1 rounded-md min-[1140px]:text-lg text-sm'><img src={AppStore} className='min-[1140px]:w-8 w-6 min-[1140px]:h-8 h-6 mr-2'/> App Store</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
