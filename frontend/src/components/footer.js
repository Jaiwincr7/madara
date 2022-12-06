import React from "react";
import {BsFacebook, BsReddit, BsDiscord} from "react-icons/bs"
import {AiOutlineLinkedin} from 'react-icons/ai'

function Footer() {
    return (
        <footer>
            <BsFacebook className="online-icon footer-t" id="facebook"/>
            <AiOutlineLinkedin className="online-icon footer-t"/>
            <BsReddit className="online-icon footer-t" id="reddit"/>
            <BsDiscord className="online-icon footer-t" id="discord"/>
            <div className="terms">
            <a href="">Terms of Service</a>
            <a href="">Contact</a>
            </div>
            <p>Copyright @Madara-Anime Site</p>
        </footer>
    )
}

export default Footer;