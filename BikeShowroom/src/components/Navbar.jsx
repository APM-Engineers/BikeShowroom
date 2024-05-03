import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css'

let nav = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/aboutus",
        name: "About",
    },
    {
        path: "/contactus",
        name: "Contact",
    },
]

const Navbar = () => {
    const [auth, setAuth] = useState(null)
    const navigate=useNavigate()
    useEffect(() => {
    
            try {
                let data=localStorage.getItem("user")
                setAuth(JSON.parse(data))
            } catch (error) {
                setAuth(null)
            }
        
    }, [])
    return (
        <>
            <nav className='main fixed left-0 top-0 z-50 bg-white'>

                <div className="logo">
                    <h2>Ride Easy</h2>
                </div>

                <div className="menu z-50">
                    <ul>
                        {nav.map((links) => (
                            <li key={links.name}><NavLink to={links.path} className={({ isActive }) =>
                                isActive ? " font-bold text-black active" : ""
                            }>{links.name}</NavLink></li>
                        ))}
                        {
                            (auth) ? (<li key="logout"><button onClick={()=>{
                                try {
                                    localStorage.removeItem("user")
                                    navigate("/login")
                                } catch (error) {
            
                                }
                            }} >log out</button></li>) : (<li key={"login"}><NavLink to={"/login"} className={({ isActive }) =>
                                isActive ? " font-bold text-black active" : ""
                            }>login</NavLink></li>)
                        }
                    </ul>
                </div>
            </nav>


        </>
    )
};
export default Navbar;
