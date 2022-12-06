import React from "react";
import video from "./simple.mp4"

function Intro() {
    return (
        <div  className="player">
        <video autoPlay muted width={"300px"} >
        <source src={video}
        />
        Sorry, your browser doesn't support videos.
        </video>
        </div>
    )
}
export default Intro;