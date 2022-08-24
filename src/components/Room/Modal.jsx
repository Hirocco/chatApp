import InsideModal from './InsideModal';

export default function Modal({Open , HandleWindow , nameOfTheOperation}) {
  if(!Open) return null;
  return (
    <section className='fixed flex flex-col z-10 bg-gray-100 min-h-[300px] min-w-[450px] rounded-[20px] mt-[-150px] p-7 justify-center border-solid'>
        <InsideModal func={HandleWindow} name={`${nameOfTheOperation}`}/>
    </section>
  )
}
