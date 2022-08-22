import OppositeText from './OppositeText'
import YourText from './YourText'
import InputBar from '../Forms/InputBar'

export default function Room() {
  return (
    <section className='flex flex-col  min-h-[600px] min-w-[600px] p-7 rounded-[20px] bg-blue-700 '>
        <div className='flex flex-row  min-h-[50px] w-full bg-white rounded-[10px]'>
            <h1 className='text-black font-poppins text-[18px] m-auto'>Users name</h1>
            <div className='m-auto h-full border border-gray-400'/>
            <h1 className='text-black text-[18px] font-poppins m-auto'>Room id</h1>
        </div>
        <div className='flex flex-col w-full h-full mt-5 bg-white rounded-[10px] p-7'>
          <OppositeText/>
          <YourText/>
          <InputBar/>
        </div>
    </section>
  )
}

