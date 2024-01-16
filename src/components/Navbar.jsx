import React from 'react'
import Logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <div className='flex items-center justify-between w-4/5 mx-auto'>
        <img src={Logo} alt="" className='cursor-pointer' onClick={()=>window.open("https://hyggexworld.com/")}/>
        <div className='items-center mr-5'>
            <ul className='flex items-center'>
                <li className='px-3 cursor-pointer'>Home</li>
                <li className='px-3 cursor-pointer'>Flashcard</li>
                <li className='px-3 cursor-pointer'>Contact</li>
                <li className='px-3 cursor-pointer'>FAQ</li>
                <li className='px-3 cursor-pointer'><button className=' px-6 py-[7px] text-white bg-gradient-to-t from-blue-600 to-blue-900 rounded-full'>Login</button></li>
            </ul>
        </div>
    </div>
  )
}
