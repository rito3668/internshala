import React from 'react'

export default function Menu() {
  return (
    <div className='mx-auto w-[380px] mt-6'>
        <ul className='text-gray-700 flex p-4 mx-auto font-normal'>
            <li className='px-4 font-semibold text-blue-900 underline underline-offset-2'>Study</li>
            <li className='px-4'>Quiz</li>
            <li className='px-4'>Test</li>
            <li className='px-4'>Game</li>
            <li className='px-4'>Others</li>
        </ul>
    </div>
  )
}
