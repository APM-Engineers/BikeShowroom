import React from 'react'
import { Link } from 'react-router-dom'

let logourl=[
  {
    logourl:"/bike.png",
    name:"Models",
    link:"/model"
  },
  {
    logourl:"/helmet.png",
    name:"Demo Ride",
    link:"/testdrive"
  },
  {
    logourl:"/bikebuild.png",
    name:"Build Your Own",
    link:"/build"
  }
]


export default function Shortcuts() {
  return (
    <div className=' w-screen h-[120px] bg-gray-400 z-50 flex justify-center'>
      <div className=' w-[90%] flex space-x-24 '> 
      {logourl.map((logo)=>(
        <div className=' flex justify-center items-center'> 
          <img src={logo.logourl} className=' w-[50px] h-[50px]'></img>
          <Link to={logo.link} className=' ml-5'>{logo.name}</Link>
         
        </div>
      ))}
      </div>
    </div>
  )
}
