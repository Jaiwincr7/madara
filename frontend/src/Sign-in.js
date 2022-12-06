import React from "react";
import {useNavigate ,Link} from "react-router-dom";

function Signup() {
    document
        .querySelector("nav")
        .style
        .display = "none";
    return (
        <div id="Login">
            <h1 className="login-h1">Welcome to Madara-Anime Site</h1>
            <div className="login-block">
                <h2>Sign-Up/Login-In</h2>
                <form>
                    <input placeholder="Name" className="login-input"/><br/>
                    <input placeholder="Password" className="login-input"/><br/>
                    <input placeholder="Confirm Password" className="login-input"/><br/>
                    <input placeholder="Email_id" className="login-input" type={"email"} /><br/>
                    <input type={"checkbox"}/>
                    <label>Agree to all the Terms and Conditions</label>
                    <br/>
                    <button>Signup</button>
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