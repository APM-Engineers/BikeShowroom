import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Bikeslider.css'




export default function Bikeslider() {
    let navigate=useNavigate();
    const[ Bikeslider,setbikeslider]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/").then((res)=>{
            return res.json()
        }).then((data)=>{
            setbikeslider(data)
        })
    },[])
  return (
    <div className=' w-screen flex flex-col  justify-center items-center mt-[100px] mb-[100px]'>
        <h1 className=' text-[3rem] '>Bikes</h1>
        <div className=' w-[95%]'>
        <div className=' overflow-x-scroll space-x-3 flex [&>div]:flex-shrink-0 Bikeslider h-[350px]' >
        {
            Bikeslider.map((bike)=>(
                <div className=' w-[500px] ' onClick={()=>{
                    navigate("/bike/"+bike._id)
                }}>
                    <img src={bike.imgurl} className='w-full object-cover object-center h-[300px]'></img>
                    <p className=' text-center text-[1.5rem]'>{bike.name}</p>
                </div>
            ))
        }
        </div>
        </div>

    </div>
  )
}
