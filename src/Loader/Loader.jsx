import React from 'react'
import LoaderLogo from '../assets/LoaderLogo.png'
import "./Loader.css"
const Loader = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center text'>
      <img src={LoaderLogo} alt="loader" className='w-28 h-28 loader'/>
      <h4>Unveil the essence that defines you.</h4>
    </div>
  )
}

export default Loader
