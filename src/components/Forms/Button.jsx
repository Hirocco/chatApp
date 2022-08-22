import React from 'react'

export default function Button({styles , name , setFunc}) {
  return (
    <button onClick={()=>setFunc()}  type="submit" className={`${styles} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 `}>{name}</button>
  )
}
