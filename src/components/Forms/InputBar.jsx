import React from 'react'
import Send from '../assets/send.png'

export default function InputBar() {
  return (
    <div className='flex mt-auto w-full h-1/6 white border-2 rounded-[10px] justify-start items-center p-2'>
        <input type='text' className="h-full w-10/12 outline-none pl-5 rounded-none border-r-2" placeholder='Type your message here...' required/>
        <a href='#'><img src={Send} alt='send' className='max-w-[40px] ml-5'/></a>
    </div>
  )
}
