import React from "react";
import {useNavigate, Link} from "react-router-dom";

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
                    <button
                        onClick={() => {
                            document
                                .querySelector("nav")
                                .style
                                .display = "flex";
                        }}>
                        <Link to="/" className="link">
                            Login
                        </Link>
                    </button>
                </form>
            </div>
            <p>Already have a User?</p>
        </div>
    )
}
export default Signup;