import React from "react";
import {BsArrowRightSquareFill} from "react-icons/bs"

import bleach from "./photos/bleach.jpg";
import Mob from "./photos/mob.jpg";
import Vinland from "./photos/vinland.jpg";
import one from "./photos/one-p.jpg"
import Dragon from "./photos/dragon-ball.jpg"
import {Link } from "react-router-dom";
import { sanitizeFilter } from "mongoose";

function Container(){
    return(
        
        <div className="container-flex">
        <div className="conatiner">
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach</p>
            </div>
            <div className="conatiner-row">
                <img src={Mob}></img>
                <p>Mob Pyscho 100</p>
            </div>
            <div className="conatiner-row">
                <img src={Vinland}></img>
                <p>Vinland Saga</p>
            </div>
            <div className="conatiner-row">
                <img src={Dragon}></img>
                <p>Dragon Ball</p>
            </div>
            <Link className="link" to ="/all_anime">
            <div className="conatiner-row arrow">
            <p>View More</p>
            <BsArrowRightSquareFill/>
            </div>
            </Link>
        </div> 
        </div>
    );
}

export default Container;

