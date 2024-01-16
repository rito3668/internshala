import React from 'react'
import { BsChevronDown } from "react-icons/bs";
export default function FAQ() {
  return (
    <div className='w-[700px] ml-[180px]'>
        <h1 className='font-bold text-[25px] text-left mb-5 text'>FAQ</h1>
        <div className='h-12 w-full border text-[14px] my-4 font-semibold border-blue-700 rounded-md p-3 flex items-center justify-between cursor-pointer'>
            Can education flashcards be used for all age groups?
            <BsChevronDown size={20}/>
        </div>
        <div className='h-12 w-full border text-[14px] my-4 font-semibold border-blue-700 rounded-md p-3 flex items-center justify-between cursor-pointer'>
            How do education flashcards work?
            <BsChevronDown size={20}/>
        </div>
        <div className='h-12 w-full border text-[14px] my-4 font-semibold border-blue-700 rounded-md p-3 flex items-center justify-between cursor-pointer'>
            Can education flashcards be used for test preparation?
            <BsChevronDown size={20}/>
        </div>
    </div>
  )
}
