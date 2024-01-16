import React from 'react'
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";


export default function Intro() {
  return (
    <p className='w-[500px] ml-[180px] mt-10 flex items-center'>
        <GoHome size={24} className='text-pink-600'/>
        <IoIosArrowForward size={18} className='text-violet-950'/>
        <span className='text-pink-600 text-[18px]'>Flashcard</span>
        <IoIosArrowForward size={18} className='text-violet-950'/>
        <span className='text-pink-600 text-[18px]'>Mathematics</span>
        <IoIosArrowForward size={18} className='text-violet-950'/>
        <span className='text-violet-900 text-[18px] font-semibold'>Relation and Function</span>
    </p>
  )
}
