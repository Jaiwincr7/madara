import React from "react";
import {FcDatabase} from "react-icons/fc";
import {CiSearch} from "react-icons/ci";
import {BsFacebook, BsReddit, BsDiscord} from "react-icons/bs"
import {AiOutlineLinkedin} from 'react-icons/ai'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {useNavigate ,Link} from "react-router-dom";

function Navbar() {

    return (
        <nav>
            <FcDatabase className="menu-icon"/>
            <h1>Madara-Anime Site</h1>
            <form>
                <CiSearch className="serach-icon"/>
                <input placeholder="Search Anime"></input>
                <button className="filter">Filter</button>
            </form>
            <BsFacebook className="online-icon" id="facebook"/>
            <AiOutlineLinkedin className="online-icon"/>
            <BsReddit className="online-icon" id="reddit"/>
            <BsDiscord className="online-icon" id="discord"/>
            <button className="donate">
                Donate
            </button>
            <button className="login">
            <Link to="/signup" className="link">
                Login
            </Link>
            </button>
        </nav>
    );
}

export default Navbar;
