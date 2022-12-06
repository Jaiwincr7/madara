import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {useState, useEffect} from "react";
function Slider(){
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

return(
    <Carousel className="slider">
    {advice.map((e)=>{
    return(
        <div>
        <img src={e.img_url}/>
        <p className="legend" id="legend">{e.Name}</p>
        </div>
    );
})}
</Carousel>
);
}
export default Slider;

