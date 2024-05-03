import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export default function Bike() {
    let param = useParams()
    let [bikeData,setBikeData]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        fetch("http://localhost:3000/getBike", {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
                "Content-Type": "application/json",
                
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer", 
            body: JSON.stringify({_id:param.bikeid}), 
        }).then((res) => { return res.json() }).then((data) => {
            if (data.status) {
                console.log(data)
                setBikeData(data.bike)
            }
            else {
                console.log(data)
                alert("error"+data.msg)
            }
        })
    },[])
    return (
        <div className=' mt-[70px] w-screen '>
            
            <div className=' w-screen relative'>
                <img src={bikeData?.imgurl} alt="" className=' w-[70vw] h-[70vh] object-cover object-center' />
                <div className=' absolute space-y-5 flex flex-col justify-center items-center right-0 top-0 w-[30vw] h-[70vh] bg-black opacity-[0.7]'>
                    <span className=' text-white w-[80%]'> {bikeData?.type}</span>
                    <span className=' text-white w-[80%]'>{bikeData?.name}</span>
                    <span className=' text-white w-[80%]'>Price: ₹ {bikeData?.price}</span>
                    <button onClick={()=>{
                        navigate("/testdrive")
                    }} className=' text-white w-[80%] bg-black p-2 border border-white '>Demo Ride</button>
                    <button className=' text-white w-[80%]  bg-black p-2 border border-white' >Contact</button>

                </div>
            </div>
            </div>
    )
}
