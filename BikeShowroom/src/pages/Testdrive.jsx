import React from 'react'
import { useState } from 'react'

let testVechical = [
  {
    name: "M",
    listOfBike: [
      {
        name: "S1000-RR",
        img: "/S1000rr.jpeg"
      },
      {
        name: "G310-RR",
        img: "/G310RR.jpeg"
      },
      {
        name: "Ducati",
        img: "/Ducati.webp"
      },
      {
        name: "Duke 390",
        img: "/Duke390.jpeg"
      },
      {
        name: "RC 390",
        img: "/RC390.jpeg"
      }
    ]
  },
  {
    name: "Sports",
    listOfBike: [
      {
        name: "S1000-RR",
        img: "/S1000rr.jpeg"
      },
      {
        name: "G310-RR",
        img: "/G310RR.jpeg"
      },
      {
        name: "Ducati",
        img: "/Ducati.webp"
      },
      {
        name: "Duke 390",
        img: "/Duke390.jpeg"
      },
      {
        name: "RC 390",
        img: "/RC390.jpeg"
      }
    ]
  },
  {
    name: "Cruze",
    listOfBike: [
      {
        name: "S1000-RR",
        img: "/S1000rr.jpeg"
      },
      {
        name: "G310-RR",
        img: "/G310RR.jpeg"
      },
      {
        name: "Ducati",
        img: "/Ducati.webp"
      },
      {
        name: "Duke 390",
        img: "/Duke390.jpeg"
      },
      {
        name: "RC 390",
        img: "/RC390.jpeg"
      }
    ]
  },
  {
    name: "Adventure",
    listOfBike: [
      {
        name: "S1000-RR",
        img: "/S1000rr.jpeg"
      },
      {
        name: "G310-RR",
        img: "/G310RR.jpeg"
      },
      {
        name: "Ducati",
        img: "/Ducati.webp"
      },
      {
        name: "Duke 390",
        img: "/Duke390.jpeg"
      },
      {
        name: "RC 390",
        img: "/RC390.jpeg"
      }
    ]
  },
  {
    name: "Roadster",
    listOfBike: [
      {
        name: "S1000-RR",
        img: "/PulsarNS125.png"
      },
      {
        name: "S1000-RR",
        img: "/PulsarNS125.png"
      },
      {
        name: "S1000-RR",
        img: "/PulsarNS125.png"
      },
      {
        name: "S1000-RR",
        img: "/PulsarNS125.png"
      },
      {
        name: "S1000-RR",
        img: "/PulsarNS125.png"
      }
    ]
  },
  {
    name: "Urban",
    listOfBike: [
      {
        name: "S1000-RR",
        img: "/PulsarNS125.png"
      },
      {
        name: "S1000-RR",
        img: "/PulsarNS125.png"
      },
      {
        name: "S1000-RR",
        img: "/PulsarNS125.png"
      },
      {
        name: "S1000-RR",
        img: "/PulsarNS125.png"
      },
      {
        name: "S1000-RR",
        img: "/PulsarNS125.png"
      }
    ]
  }
]

function Menubox({ data, selectedType, setSelectedType, selectedBike, setSelectedBike }) {
  return (
    <div>

      <div className=' w-full h-[50px] flex justify-between items-center border-t-2 mt-3'>
        <span>{data.name}</span>
        <span onClick={() => {
          setSelectedType((s) => s === data.name ? "" : data.name)
        }
        } className=' cursor-pointer'><i class="bi bi-caret-down-fill"></i></span>
      </div>
      <div className={(selectedType === data.name) ? ' w-full grid grid-cols-3 gap-3' : "hidden"}>
        {data.listOfBike.map((bike) => (
          <div className=' w-full flex flex-col justify-center items-center' key={bike.name}>
            <img src={bike.img} className=' w-[80%]'></img>
            <div className=' w-[80%] h-[50px] flex justify-between items-center'>
              <span>{bike.name}</span>
              <span className=' h-full flex justify-center items-center w-[50px] bg-black text-white font-bold cursor-pointer '
                onClick={() => {
                  setSelectedBike({ name: bike.name, img: bike.img, type: data.name })
                }}
              >{selectedBike.name === bike.name && selectedBike.type === data.name ? <i class="bi bi-check font-bold"></i> : "+"}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default function Testdrive() {
  const [selectedType, setSelectedType] = useState("")

  const [selectedBike, setSelectedBike] = useState({
    name: "",
    img: "",
    type: ""
  })

  return (
    <div style={{ backgroundColor: "white" }} className='w-screen mt-[70px] flex flex-col justify-center items-center bg-white'>
      <div className=' w-[80%] bg-white  '>
        <h1 className=' bg-white text-[2rem] font-bold'>Request for Contact</h1>
        {(selectedBike.name.length && selectedBike.img.length && selectedBike.type.length) ? (

          <div className=' w-full flex justify-start items-center rounded border-2 border-gray-300 relative mt-5'>
            <img src={selectedBike.img} alt="..." className=' w-[300px]' />
            <span className=' absolute top-5 right-5 cursor-pointer'><i class="bi bi-pen-fill"></i></span>
            <div className=' flex flex-col ml-4 mt-10 '>
              <span>{selectedBike.type}</span>
              <span className=' text-[1.2rem] font-bold'>{selectedBike.name}</span>
            </div>
          </div>
        ) : ""}


        <h1 className=' text-[1.5rem] font-bold mt-8'>1.Select Vechicle</h1>
        <div className=' w-full mb-10'>
          {testVechical.map((vehicleType) => (
            <Menubox key={vehicleType.name} data={vehicleType} selectedType={selectedType} setSelectedType={setSelectedType} selectedBike={selectedBike} setSelectedBike={setSelectedBike}></Menubox>
          ))}
        </div>
        <h1 className=' text-[1.5rem] font-bold mt-8'>2. Enter Contact Details</h1>
        <h1 className=' text-[1.2rem] mt-5'> Personal Data</h1>
        <div className=' mt-4 mb-10 flex w-full flex-col space-y-5'>
          <input type="text" placeholder='Salutation' className=' border border-black  pt-2 pb-2 pl-3 pr-3    ' />
          <input type="text" placeholder='First Name' className=' border border-black  pt-2 pb-2 pl-3 pr-3    ' />
          <input type="text" placeholder='Last Name' className=' border border-black  pt-2 pb-2 pl-3 pr-3    ' />
          <input type="text" placeholder='Email' className=' border border-black  pt-2 pb-2 pl-3 pr-3    ' />
          <input type="text" placeholder='Contact Number' className=' border border-black  pt-2 pb-2 pl-3 pr-3    ' />
        </div>
        <h1 className=' text-[1.5rem] font-bold mt-8'>3. Preferred Contact Method</h1>

        <div className=' mt-4 mb-10 flex w-full flex-col space-y-5'>
          <div className=' flex items-center'>
            <input type="checkbox" id='email' className=' w-6 h-6 accent-black ' />
            <label htmlFor="email" className=' text-[1.5rem]  ml-5'>Email</label>
          </div>
          <div className=' flex items-center'>
            <input type="checkbox" id='call' className=' w-6 h-6 accent-black' />
            <label htmlFor="call" className=' text-[1.5rem] ml-5'>Call</label>
          </div>
          <div className=' flex items-center'>
            <input type="checkbox" id='text' className=' w-6 h-6 accent-black ' />
            <label htmlFor="text" className=' text-[1.5rem] ml-5'>Text</label>
          </div>
          <div className=' flex items-center'>
            <input type="checkbox" id='text' className=' w-6 h-6 accent-black ' />
            <label htmlFor="text" className=' text-[1.1rem] ml-5 w-[90%]'>I instruct BMW Motorrad USA to provide my information to an authorized BMW Motorrad dealership. I understand that an authorized BMW Dealership may contact me with offers or information about their products and services.</label>
          </div>
          <p className=' font-semibold '>We respect your privacy. When you submit your contact information, we agree to only contact you in accordance with our Privacy Policy.</p>


        </div>
        <button className=' bg-black text-white pt-2 pb-2 text-center mt-10 w-full mb-32'>Send Request For Contact</button>



      </div>
    </div>
  )
}
