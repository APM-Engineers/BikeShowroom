import React from 'react'
import { useState, useEffect } from 'react'



const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="bg-white rounded-lg p-8 z-50">
        <p className="text-lg">{message}</p>
        <button className="bg-black text-white py-2 px-4 mt-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};


function Menubox({ data, selectedType, setSelectedType, selectedBike, setSelectedBike }) {
  return (
    <div>

      <div className=' w-full h-[50px] flex justify-between items-center border-t-2 mt-3'>
        <span>{data.type}</span>
        <span onClick={() => {
          setSelectedType((s) => s === data.type ? "" : data.type)
        }
        } className=' cursor-pointer'><i class="bi bi-caret-down-fill"></i></span>
      </div>
      <div className={(selectedType === data.type) ? ' w-full grid grid-cols-3 gap-3' : "hidden"}>
        {data.bikes.map((bike) => (
          <div className=' w-full flex flex-col justify-center items-center' key={bike.name}>
            <img src={bike.imgurl} className=' w-[80%]'></img>
            <div className=' w-[80%] h-[50px] flex justify-between items-center'>
              <span>{bike.name}</span>
              <span className=' h-full flex justify-center items-center w-[50px] bg-black text-white font-bold cursor-pointer '
                onClick={() => {
                  setSelectedBike({ name: bike.name, img: bike.imgurl, type: data.type })
                }}
              >{selectedBike.name === bike.name && selectedBike.type === data.type ? <i class="bi bi-check font-bold"></i> : "+"}</span>
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
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleRequestContact = () => {
    const obj={bikename:selectedBike.name,type:selectedBike.type,salutation:value.salu,firstname:value.fname,lastname:value.lname,email:value.email,contact:value.contact,contactemail:checked.email,contactcall:checked.call,contacttext:checked.text}
    console.log(obj)
    fetch("http://localhost:3000/testdrive",{
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(obj), // body data type must match "Content-Type" header
    }).then((res)=>{return res.json()}).then((data)=>{
      if(data.status){
        setShowAlert(true); console.log(data)
      }
      else{
        alert("error")
      }
    })    
  };

  const [model, setmodel] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/bikes").then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
      setmodel(data)
    })
  }, [])

  const [value,setvalue]=useState({salu:"",fname:"",lname:"",email:"",contact:""});
  const [checked,setchecked]=useState({email:false,call:false,text:false})
  
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
          {model?.map((vehicleType) => {
            return <Menubox key={vehicleType.type} data={vehicleType} selectedType={selectedType} setSelectedType={setSelectedType} selectedBike={selectedBike} setSelectedBike={setSelectedBike}></Menubox>
          })}
        </div>
        <h1 className=' text-[1.5rem] font-bold mt-8'>2. Enter Contact Details</h1>
        <h1 className=' text-[1.2rem] mt-5'> Personal Data</h1>
        <div className=' mt-4 mb-10 flex w-full flex-col space-y-5'>
          <input value={value.salu} onChange={(e)=>(setvalue({fname:value.fname,lname:value.lname,contact:value.contact,salu:e.target.value,email:value.email}))}  type="text" placeholder='Salutation' className=' border border-black  pt-2 pb-2 pl-3 pr-3    ' />
          <input  value={value.fname} onChange={(e)=>(setvalue({fname:e.target.value,lname:value.lname,contact:value.contact,salu:value.salu,email:value.email}))} type="text" placeholder='First Name' className=' border border-black  pt-2 pb-2 pl-3 pr-3    ' />
          <input  value={value.lname} onChange={(e)=>(setvalue({fname:value.fname,lname:e.target.value,contact:value.contact,salu:value.salu,email:value.email}))} type="text" placeholder='Last Name' className=' border border-black  pt-2 pb-2 pl-3 pr-3    ' />
          <input  value={value.email} onChange={(e)=>(setvalue({fname:value.fname,lname:value.lname,contact:value.contact,salu:value.salu,email:e.target.value}))} type="text" placeholder='Email' className=' border border-black  pt-2 pb-2 pl-3 pr-3    ' />
          <input  value={value.contact} onChange={(e)=>(setvalue({fname:value.fname,lname:value.lname,contact:e.target.value,salu:value.salu,email:value.email}))} type="text" placeholder='Contact Number' className=' border border-black  pt-2 pb-2 pl-3 pr-3    ' />
        </div>
        <h1 className=' text-[1.5rem] font-bold mt-8'>3. Preferred Contact Method</h1>

        <div className=' mt-4 mb-10 flex w-full flex-col space-y-5'>
          <div className=' flex items-center'>
            <input onChange={()=>(setchecked({call:checked.call,email:!checked.email,text:checked.text}))} checked={checked.email} type="checkbox" id='email' className=' w-6 h-6 accent-black ' />
            <label htmlFor="email" className=' text-[1.5rem]  ml-5'>Email</label>
          </div>
          <div className=' flex items-center'>
            <input onChange={()=>(setchecked({call:!checked.call,email:checked.email,text:checked.text}))} checked={checked.call} type="checkbox" id='call' className=' w-6 h-6 accent-black' />
            <label htmlFor="call" className=' text-[1.5rem] ml-5'>Call</label>
          </div>
          <div className=' flex items-center'>
            <input onChange={()=>(setchecked({call:checked.call,email:checked.email,text:!checked.text}))} checked={checked.text} type="checkbox" id='text' className=' w-6 h-6 accent-black ' />
            <label htmlFor="text" className=' text-[1.5rem] ml-5'>Text</label>
          </div>
          <div className=' flex items-center'>
            <input type="checkbox" id='text' className=' w-6 h-6 accent-black ' />
            <label htmlFor="text" className=' text-[1.1rem] ml-5 w-[90%]'>I instruct BMW Motorrad USA to provide my information to an authorized BMW Motorrad dealership. I understand that an authorized BMW Dealership may contact me with offers or information about their products and services.</label>
          </div>
          <p className=' font-semibold '>We respect your privacy. When you submit your contact information, we agree to only contact you in accordance with our Privacy Policy.</p>


        </div>
        <button className='bg-black text-white pt-2 pb-2 text-center mt-10 w-full mb-32' onClick={handleRequestContact}>
          Send Request For Contact
        </button>
        {showAlert && <CustomAlert message="Testdrive booked. Our customer service will contact you." onClose={handleAlertClose} />}

      </div>
    </div>
  )
}
