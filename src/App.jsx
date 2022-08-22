import {SignIn,SignUp} from './components'
import {useState} from 'react'

export default function App (){
  const [goToRegistration, setGoToRegistration] = useState(true);
  return(
  <div className='bg-gray-500 w-full h-[937px] overflow-hidden flex flex-col justify-center items-center'>
    <h1 className='mb-20 font-poppins text-[40px] text-gradient'>Real time chatApp</h1>
    {goToRegistration ? <SignIn setGoToRegistration={()=>setGoToRegistration(!goToRegistration)}  /> : <SignUp/>}
  </div>
  )
}
