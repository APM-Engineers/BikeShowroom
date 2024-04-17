import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

let modelNavLinks=[
  {
    title:"All",
    link:"/"
  },
  {
    title:"M",
    link:"/"
  },
  {
    title:"Sports",
    link:"/"
  },
  {
    title:"Cruze",
    link:"/"
  },
  {
    title:"Adventure",
    link:"/"
  },
  {
    title:"Roadster",
    link:"/"
  },
  {
    title:"Urban",
    link:"/"
  },
]

let arr=[
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


function Modelbikes({activeLink}){
  return(
    <div className=' w-screen flex flex-col items-center'>
      <div className=' w-[90%]'>
        <h1 className=' text-[1.5rem] font-semibold'>{activeLink}</h1>
        <div className=' grid grid-cols-4 w-full gap-3 mt-5 mb-10 gap-y-7'>
          {arr.map((i,index)=>(
            <div className=' bg-white w-full flex flex-col border border-black rounded h-[250px] justify-center ' key={index}>
            <img src ={i.imgurl} alt="..." className=' w-[100%] h-[200px] object-cover object-center'/>
            <span className=' ml-2'>2024</span>
            <span className=' ml-2'>{i.Name}</span>
          </div>
          ))} 
        </div>

      </div>
    </div>
  )
}

function Modelnavbar({activeLink,setActiveLink}){
  return(
    <div className=' w-screen flex justify-center space-x-8 items-center h-[150px]'>
      {modelNavLinks.map((link)=>(
        <span  className={activeLink===link.title ? ' text-[1.2rem] font-semibold cursor-pointer':" text-[1.2rem] cursor-pointer"} onClick={()=>{
          setActiveLink((prevState)=>link.title)
        }}>{link.title}</span>
      ))}
    </div>
  )
}

export default function Model() {
  const [activeLink,setActiveLink]=useState("All")

  return (
    <div className=' w-screen mt-[70px] flex flex-col items-center'>
      <div className=' mt-7 w-[75%] '>
        <h1 className=' font-bold text-[5rem] '>All Models</h1>
        <h1 className=' font-semibold text-[2rem] text-gray-600'>FIND YOUR RIDEEASY MOTORRAD BIKE</h1>
      </div>
      <div>
        <Modelnavbar activeLink={activeLink} setActiveLink={setActiveLink}></Modelnavbar>
        <Modelbikes activeLink={activeLink}></Modelbikes>

      </div>
    </div>
  )
}
