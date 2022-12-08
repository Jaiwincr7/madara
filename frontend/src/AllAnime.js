import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
// import bleach from "./photos/bleach.jpg";
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

function cutt(value){
    var count = 200;
    var trim= value.substr(0, count);
    return trim;  
}
function AllAnime() {
    const [advice, setAdvice] = useState([""]);

    useEffect(() => {
        const url = "http://localhost:8000/filter";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAdvice(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    document
        .querySelector("nav")
        .style
        .display = "none";
    return (
        <div className="all-anime">
        <div className="genre-type">
            <h1>Thriller</h1>
            <Carousel
            responsive={responsive}
            className="slider1 anime-display">
            {
                advice.map((e) => {
                    return (
                        <div>
                        <div
                            className="background_img"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(200,245,96,0.4), rgba(120,98,248,0.6)),url(${e.img_url})`
                            }}>
                            <p className="animename">{e.Name}</p>
                            <p className="noe">No of episode-{e.noe}</p>
                            <p className="noe anime-para">{cutt(`${e.description}`)}</p>
                        </div>
                        </div>
                    )
                })
            }
        </Carousel>
        </div>
        </div>
    )
}
export default AllAnime;