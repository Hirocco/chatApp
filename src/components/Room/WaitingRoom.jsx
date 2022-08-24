import Button from "../Forms/Button"
import Modal from "./Modal"
import { useState } from "react";

export default function WaitingRoom() {
    const [IsOpen, setIsOpen] = useState(false)

  return (
    <section className='flex flex-col bg-white min-h-[500px] min-w-[500px] p-7 rounded-[20px] justify-center items-center' >
        <h1 className='font-poppins text-[36px] m-auto'>Waiting Room</h1>
        <div className="flex flex-col w-full h-1/2 ">
            <Button styles={'mb-5'} name={'Join room'} setFunc={()=>setIsOpen(true)}/>
                <Modal Open={IsOpen} HandleWindow={()=>setIsOpen(false)} nameOfTheOperation={'Join room'}/>

            <Button styles={'mb-5'} name={'Delete room'} setFunc={()=>setIsOpen(true)}/>
                <Modal Open={IsOpen} HandleWindow={()=>setIsOpen(false)} nameOfTheOperation={'Delete room'}/>

            <Button styles={'mb-5'} name={'Create room'} setFunc={()=>setIsOpen(true)}/>
                <Modal Open={IsOpen} HandleWindow={()=>setIsOpen(false)} nameOfTheOperation={'Create room'}/>
        </div>  
    </section>
  )
}
