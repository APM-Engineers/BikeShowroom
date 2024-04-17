import React from 'react'
import { useParams } from 'react-router-dom'

export default function Bike() {
    let param = useParams()
    return (
        <div className=' mt-[70px] w-screen '>
            <div className=' flex justify-start items-center h-[50px] w-full bg-gray-500 text-white font-semibold'>
                <span className=' ml-[100px]'>{param.bikeid}</span>
            </div>
            <div className=' w-screen relative'>
                <img src="/s1000rr.jpg" alt="" className=' w-screen h-[70vh] object-cover object-center' />
                <div className=' absolute space-y-5 flex flex-col justify-center items-center right-0 top-0 w-[30vw] h-[70vh] bg-black opacity-[0.8]'>
                    <span className=' text-white w-[80%]'> 2024</span>
                    <span className=' text-white w-[80%]'>S1000RR</span>
                    <span className=' text-white w-[80%]'>Price: 1800000</span>
                    <button className=' text-white w-[80%] bg-black p-2 border border-white '>Demo Ride</button>
                    <button className=' text-white w-[80%]  bg-black p-2 border border-white' >Contact</button>

                </div>
            </div>
            </div>
    )
}
