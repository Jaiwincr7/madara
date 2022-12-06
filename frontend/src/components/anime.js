import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useState, useEffect} from "react";

import bleach from "./photos/bleach.jpg";
import axios from "axios";
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

function Slider1() {
    const [advice, setAdvice] = useState([""]);

    useEffect(() => {
        const url = "http://localhost:8000/data";

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
        <Carousel
            responsive={responsive}
            className="slider1"
            style={{
                backgroundImage: `url(${bleach})`
            }}>
            {
                advice.map((e) => {
                    return (
                        <div>
                            <img src={e.img_url}></img>
                            <p>{e.Name}</p>
                        </div>
                    )
                })
            }
        </Carousel>
    );
}

export default Slider1;