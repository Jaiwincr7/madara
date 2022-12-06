import React from "react";
import {BsArrowRightSquareFill} from "react-icons/bs"

import bleach from "./photos/bleach.jpg";
import Mob from "./photos/mob.jpg";
import Vinland from "./photos/vinland.jpg";
import one from "./photos/one-p.jpg"
import Dragon from "./photos/dragon-ball.jpg"

import {useState, useEffect} from "react";

function Container(){
    return(
        
        <div className="container-flex">
        <div className="conatiner">
            <h2>Top Airing</h2>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row container-row">
            <p>View</p>
            <BsArrowRightSquareFill/>
            </div>
        </div>
        <div className="conatiner">
            <h2>Most Popular</h2>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row container-row">
            <p>View</p>
            <BsArrowRightSquareFill/>
            </div>
        </div>
        <div className="conatiner">
            <h2>Most Favorite</h2>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row container-row">
            <p>View</p>
            <BsArrowRightSquareFill/>
            </div>
        </div>
        <div className="conatiner">
            <h2>Completed</h2>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row">
                <img src={bleach}></img>
                <p>Bleach Thousand Year Blood War</p>
            </div>
            <div className="conatiner-row container-row">
            <p>View</p>
            <BsArrowRightSquareFill/>
            </div>
        </div>
        </div>
    );
}

export default Container;

