import React from 'react'
import Logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <div className='flex items-center justify-between w-4/5 mx-auto'>
        <img src={Logo} alt=""/>
        <div className='items-center mr-5'>
            <ul className='flex items-center'>
                <li className='px-3'>Home</li>
                <li className='px-3'>Flashcard</li>
                <li className='px-3'>Contact</li>
                <li className='px-3'>FAQ</li>
                <li className='px-3'><button className=' px-6 py-[7px] text-white bg-gradient-to-t from-blue-600 to-blue-900 rounded-full'>Login</button></li>
            </ul>
        </div>
    </div>
  )
}
