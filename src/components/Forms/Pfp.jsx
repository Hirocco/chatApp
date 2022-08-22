import React , {useState} from 'react'
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import RandomPfp from '../assets/randompfp.jpg'
import {Button} from 'primereact/button'
import Avatar from 'react-avatar-edit'


export default function Pfp() {
const [Image, setImage] = useState("")
const [ImageCrop, setImageCrop] = useState(false)
const [src, setsrc] = useState(false);
const [profile, setprofile] = useState([]);
const [pview, setpview] = useState(false);

const profileFinal = profile.map((item) => item.pview);

const onClose = () => {
  setpview(null);
};

const onCrop = (view) => {
setpview(view);
};

const saveCropImage = () => {
  setprofile([... profile, { pview }]);
  setimagecrop(false);
};


  return (
    <>
      <section className='flex flex-col bg-white p-7 rounded-[20px]'>
        <div className='flex flex-col justify-center items-center align-middle'>
          <img
          style={{
            width:'200px',
            height:'200px',
            borderRadius:'50%',
            objectFit:'cover',
            border:'4px solid green',
          }}
          onClick={()=>setImageCrop(true)}
          src={profileFinal.length ? profileFinal : RandomPfp}
          alt='pfp'/>
          <label className='mt-3 font-poppins text-5xl'>Users Name</label>

          <Dialog
            visible={ImageCrop}
            header={()=>(
              <p className='text-2xl font-poppins'>Updated Profile</p>
            )}
            onHide={()=>setImageCrop(false)}
          >
            <div className='flex flex-col justify-center items-center'>
              <Avatar
              width={500}
              height={400}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
              shadingColor={'#474649'}
              backgroundColor={'#474649'}
              />
              <div className='flex flex-col items-center mt-5 w-12'>
                <div className='flex justify-around w-12 mt-4'>
                  <Button
                    icon='pi pi-check'
                    label='save'
                    onClick={saveCropImage}
                  />
                </div>
              </div>
            </div>

          </Dialog>

          <InputText
          style={{display:'none'}}
          onChange={(event)=>{
            const file = event.target.files[0]
            if(file && file.type.substring(0,5)==="image"){
              setImage(file);
            }else{
              setImage(null);
            }
          }}
          accept='/image/*'
          type='file'/>
        </div>
      </section>
    </>
  )
}
