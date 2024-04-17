import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Bikeslider.css'

let Sliderbikes=[
    {
        imgurl:"/S1000rr.jpeg",
        Name:"BMW S1000-RR"
    },
    {
        imgurl:"/G310RR.jpeg",
        Name:"BMW G310-RR"
    },
    {
        imgurl:"/Duke390.jpeg",
        Name:"Duke390"
    },
    {
        imgurl:"/RC390.jpeg",
        Name:"KTM RC390"
    },
    {
        imgurl:"/Ducati.webp",
        Name:"Ducati"
    },
    {
        imgurl:"/PulsarNS125.png",
        Name:"Plusar"
    }
]


export default function Bikeslider() {
    let navigate=useNavigate();
  return (
    <div className=' w-screen flex flex-col  justify-center items-center mt-[100px] mb-[100px]'>
        <h1 className=' text-[3rem] '>Bikes</h1>
        <div className=' w-[95%]'>
        <div className=' overflow-x-scroll space-x-3 flex [&>div]:flex-shrink-0 Bikeslider h-[350px]' >
        {
            Sliderbikes.map((bike)=>(
                <div className=' w-[500px] ' onClick={()=>{
                    navigate("/bike/"+bike.Name)
                }}>
                    <img src={bike.imgurl} className='w-full object-cover object-center h-[300px]'></img>
                    <p className=' text-center text-[1.5rem]'>{bike.Name}</p>
                </div>
            ))
        }
        </div>
        </div>

    </div>
  )
}
