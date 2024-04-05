import React from 'react'

let logourl=[
  {
    logourl:"/bike.png",
    name:"Models"
  },
  {
    logourl:"/helmet.png",
    name:"Demo Ride"
  },
  {
    logourl:"/bikebuild.png",
    name:"Build Your Own"
  }
]


export default function Shortcuts() {
  return (
    <div className=' w-screen h-[120px] bg-gray-400 z-50 flex justify-center'>
      <div className=' w-[90%] flex space-x-24 '> 
      {logourl.map((logo)=>(
        <div className=' flex justify-center items-center'> 
          <img src={logo.logourl} className=' w-[50px] h-[50px]'></img>
          <span className=' ml-5'>{logo.name}</span>
         
        </div>
      ))}
      </div>
    </div>
  )
}
