import React from 'react'
import LoaderLogo from '../assets/LoaderLogo.png'
import "./Loader.css"
const Loader = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <img src={LoaderLogo} alt="loader" className='w-28 h-28 loader'/>
    </div>
  )
}

export default Loader
