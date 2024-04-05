import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'

let nav = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/service",
        name: "Service",
    },
    {
        path: "/aboutus",
        name: "About",
    },
    {
        path: "/contactus",
        name: "Contact",
    },
    {
        path: "/login",
        name: "Login",
    }
]

const Navbar = () => {


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
                    </ul>
                </div>
            </nav>


        </>
    )
};
export default Navbar;
