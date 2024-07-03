import React, {useState} from 'react'
import NavLogo from "../assets/NavLogo.png"

const Footer = () => {
    const [show, setShow] = useState("hidden")
    const [show2, setShow2] = useState("hidden")
    const [show3, setShow3] = useState("hidden")
  return (
    <div className='p-5'>
      <div className='bg-gradient-to-r from-[#04080F] to-[#8F0060] rounded-lg flex min-[1100px]:flex-row flex-col items-center justify-between py-20 px-16'>
        <div className='flex flex-col '>
            <p className='font-lexend text-[2.1rem] text-white mb-4 max-[580px]:text-center'>We send <span className='font-marko'><i>Great</i>   </span> Emails</p>
            <div className='flex min-[580px]:flex-row flex-col items-center justify-center'>
                <input className='border-2 shadow-xl max-[580px]:text-center rounded-full px-2 py-1 text-lg w-full' placeholder='Enter your email'/>
            <button className='min-[580px]:ml-4 max-[580px]:mt-2 bg-white rounded-full px-3 py-1 font-medium font-lexend'>Subscribe</button>
            </div>
            <div className='min-[580px]:mt-8 mt-4 min-[580px]:pr-10 min-[580px]:-ml-5 m-auto flex flex-col w-full justify-center items-center max-[580px]:text-center'>
                <img src={NavLogo} className='w-auto' />
                <img src={NavLogo} className=' -scale-y-100 opacity-15 -mt-4 blur-[1px]' />
            </div>
        </div>
        <div className='flex min-[580px]:flex-row flex-col text-white'>
            <div className="flex flex-col max-[510px]:items-center min-[730px]:mx-8 mx-2 mt-4">
                <p className='font-lexend text-2xl my-5 cursor-pointer' onClick={() => setShow(show === "hidden" ? "block" : "hidden")}>Company</p>
                <ul className={`font-lexend max-[510px]:text-center text-lg pl-2 cursor-pointer max-[510px]:${show}`}>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>T&C</li>
                </ul>
            </div>
            <div className="flex flex-col max-[510px]:items-center min-[730px]:mx-8 mx-2 mt-4">
                <p className='font-lexend text-2xl my-5 cursor-pointer' onClick={() => setShow2(show2 === "hidden" ? "block" : "hidden")}>Social</p>
                <ul className={`font-lexend max-[510px]:text-center text-lg pl-2 cursor-pointer max-[510px]:${show2}`}>
                    <li>TikTok</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>              
                </ul>
            </div>
            <div className="flex flex-col max-[510px]:items-center min-[730px]:mx-8 mx-2 mt-4">
                <p className='font-lexend text-2xl my-5 cursor-pointer  ' onClick={() => setShow3(show3 === "hidden" ? "" : "hidden")}>Theme</p>
                <ul className={`font-lexend max-[510px]:text-center text-lg pl-2 cursor-pointer max-[510px]:${show3}`}>
                    <li>Style Guide</li>
                    <li>Changelog</li>
                    <li>Licenses</li>
                    <li>All Templates</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
