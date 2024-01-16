import React from 'react'
import { MdOutlineLightbulb } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { MdFullscreen } from "react-icons/md";
import Badge from '../assets/badge.png'
export default function Slider() {
  return (
    <div className='w-4/5 mx-auto'>
        <div className='h-[300px] w-[500px] py-[130px] bg-slate-500 mx-auto rounded-3xl relative slider'>
                <MdOutlineLightbulb size={24} className='text-white absolute top-4 left-4'/>
                <IoMdVolumeHigh size={25} className='text-white absolute top-4 right-4'/>
                <p className=' text-[23px] text-white font-semibold '>9 + 6 + 7x - 2x - 3</p>
        </div>
        <div className='w-[450px] mx-auto flex justify-between mt-4 items-center'>
            <IoReload size={24} className='svg'/>
            <div className='w-8 h-8 bg-gradient-to-t from-blue-600 to-blue-900 flex items-center text-white rounded-full'><IoIosArrowBack className='ml-[2px]' size={24}/></div>
            <span className='text-[18px] font-semibold'>01/10</span>
            <div className='w-8 h-8 bg-gradient-to-t from-blue-600 to-blue-900 flex items-center text-white rounded-full'><IoIosArrowForward className='ml-[4px]' size={24}/></div>
            <MdFullscreen size={30} className='svg'/>
        </div>
        <div className='flex justify-between my-6 items-center'>
            <img src={Badge} alt="" className='w-[180px] ml-5 cursor-pointer'/>
            <h2 className='flex items-center cursor-pointer text-[20px] font-semibold w-[200px] text'>
                <span className='w-8 h-8 rounded-full bg-gradient-to-t from-blue-600 flex items-center justify-center text-white to-blue-900 mr-2'><FiPlus size={24}/></span>    
            Create Flashcard
            </h2>
        </div>
    </div>
  )
}
