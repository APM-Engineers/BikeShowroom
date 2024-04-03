import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'
const navbar = () => {

    
    return (
        <>
             <nav className='main fixed left-0 top-0 z-50 bg-white'>

             <div className="logo">
                 <h2>Ride Easy</h2>
             </div>

             <div className="menu z-50">
                 <ul>
                     <li> <NavLink to="/" className={({ isActive,isPending})=>{isActive?" text-red":""}}>Home</NavLink></li>
                     <li><NavLink to="/service" className={({ isActive,isPending})=>{isActive?" text-red-600":""}} >Service</NavLink></li>
                     <li><NavLink to="/aboutus" className={({ isActive,isPending})=>{isActive?"Active":""}} >About</NavLink></li>
                     <li><NavLink to="/contactus" className={({ isActive,isPending})=>{isActive?"Active":""}} >Contact</NavLink></li>
                     <li><NavLink to="/login" className={({ isActive,isPending})=>{isActive?"Active":""}} >Login</NavLink></li>
                 </ul>
             </div>
         </nav>
       
           
        </>
    )
};
export default navbar;
