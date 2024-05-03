import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function SignUp() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const navigate = useNavigate();
    let handleSubmit = (event) => {
        event.preventDefault();
        if(password!==cpassword){
            alert("password is not matching")
            return
        }
        fetch("http://localhost:3000/signup", {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
                "Content-Type": "application/json",
                
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer", 
            body: JSON.stringify({ name: name, password: password, email: email }), 
        }).then((res) => { return res.json() }).then((data) => {
            if (data.status) {
                console.log(data)
                navigate('/login');
            }
            else {
                console.log(data)
                alert("error"+data.msg)
            }
        })

    };

    return (
        <div className="LoginWindow">
            <form className='LoginForm' onSubmit={(e) => { handleSubmit(e) }}>
                <span className='LoginTitle'>Create your account</span>
                <span className='LogInWithGoogle'> <img src="./google.png" alt="" className='LoginImg' /> <span>log in with google</span> </span>
                <span className='or'>or</span>
                <div className="inputBox">
                    <label htmlFor="Name">User Name <span><sup>*</sup></span></label>
                    <input type="text" required className='email' id='Name' placeholder='User Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="inputBox">
                    <label htmlFor="Email">Email <span><sup>*</sup></span></label>
                    <input type="email" required className='email' id='Email' placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="inputBox">
                    <label htmlFor="Password">Password <span><sup>*</sup></span></label>
                    <input type="password" required className='password' id="Password" placeholder='Enter your password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="inputBox">
                    <label htmlFor="CPassword">Password <span><sup>*</sup></span></label>
                    <input type="password" required className='password' id="CPassword" placeholder='Confirm password' value={cpassword} onChange={(e) => { setCPassword(e.target.value) }} />
                </div>
                <button className='LoginBtn' type="submit" >Sign up</button>
                <p className='loginfooter'>Alreay have an account <Link to="/Login">log in</Link></p>
            </form>
        </div>
    )
}