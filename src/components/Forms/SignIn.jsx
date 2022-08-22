import React from 'react'
import Button from './Button'
import { useState } from 'react'
import Room from '../Room/Room'

export default function SignIn({setGoToRegistration }) {
  const [GoToRoom, setGoToRoom] = useState(true)

  return (
    <>
    {GoToRoom ? <form className='flex flex-col bg-white min-h-[500px] min-w-[500px] p-7 rounded-[20px] '>
      <h1 className='font-poppins text-[36px] m-auto'>Sign In</h1>
      <div className="relative z-0 mb-12 w-full group">
        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
      </div>
      <div className="relative z-0 mb-12 w-full group">
        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300">Remember me</label>
      </div>
      <Button setFunc={()=>setGoToRoom((GoToRoom)=>!GoToRoom)} name={'Login'} styles={'mt-5'}/>      
      <p className=' mt-5 font-poppins text-[15px]'>Don't have an account ? <a href='#' onClick={()=>setGoToRegistration()} className='underline text-gradient'>Sign Up.</a></p>
    </form> : <Room/>}
    </>
  )
}
