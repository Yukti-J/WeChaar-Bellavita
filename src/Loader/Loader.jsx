import React from 'react'
import LoaderLogo from '../assets/LoaderLogo.png'
import "./Loader.css"
const Loader = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-center'>
      <img src={LoaderLogo} alt="loader" className='w-28 h-28 loader rounded-full'/>
      <h4 className='mt-6 font-lexend text-yellow-700 tagline'>Unveil the essence that defines you.</h4>
    </div>
  )
}

export default Loader
