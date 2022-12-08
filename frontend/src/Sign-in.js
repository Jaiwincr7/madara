import React from "react";
import {useNavigate ,Link} from "react-router-dom";
import { useState } from 'react';
import axios from "axios";




function Signup() {
   
        const [input, setInput] = useState({
            username: "",
            password: "",
            email: ""
        });
    
        function handlechange(event) {
            // alert(event.target);
            const {name, value}=event.target;
            setInput(prevInput=>{
                return{
                    ...prevInput,
                    [name]:value
                }
            })
        }

        document
        .querySelector("nav")
        .style
        .display = "none";
        function handleClick(event) {
            document
        .querySelector("nav")
        .style
        .display = "flex";
            event.preventDefault();
            console.log(input);
            const newuser={
                username: input.username,
            password: input.password,
            email: input.email
            }
            
            axios.post("http://localhost:8000/createuser",newuser);

        }
    
   
    

    return (
        <div id="Login">
            <h1 className="login-h1">Welcome to Madara-Anime Site</h1>
            <div className="login-block">
                <h2>Sign-Up/Login-In</h2>
                <form>
                    <input onChange={handlechange} name="username" value={input.username} placeholder="Name" className="login-input"/><br/>
                    <input onChange={handlechange} name="password" value={input.password} placeholder="Password" className="login-input"/><br/>
                    <input  placeholder="Confirm Password" className="login-input"/><br/>
                    <input onChange={handlechange} name="email" value={input.email} placeholder="Email_id" className="login-input" type={"email"} /><br/>
                    <input type={"checkbox"}/>
                    <label>Agree to all the Terms and Conditions</label>
                    <br/>
                    <button
                        onClick={handleClick}>
                        <Link to="/" className="link">
                            Login
                        </Link>
                    </button>
                </form>
            </div>
            <p>
                <Link to="/login" className="link">
                    Already have a User?
                </Link>
            </p>
        </div>
    )
}
export default Signup;