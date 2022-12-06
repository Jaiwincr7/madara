import React from "react";
import Video from "./simple.mp4";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useState, useEffect} from "react";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 5
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }
};

function Comments() {
    const [advice, setAdvice] = useState([""]);

    useEffect(() => {
        const url = "http://localhost:8000/comments";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setAdvice(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="comments">
            <div>
                <p className="comment-h">Comment Section</p>
                <video src={Video} autoPlay="autoPlay" muted="muted" loop></video>
            </div>
            <Carousel responsive={responsive} className="slider1">
                {
                    advice.map((e) => {
                        return (
                            <div className="comment-tag">
                                <h3>
                                    <b>{e.user}</b>
                                </h3>
                                <p>{e.comment}</p>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default Comments
