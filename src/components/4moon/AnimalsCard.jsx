import { useState } from "react";
import "./AnimalsCard.css"

export default function AnimalsCard({data}){
    const [hover, sethover] = useState(false);
    const [mouse, mousecl] = useState(false);

    return(
        <div className="animalscard"
        onClick={() => mousecl(true)}
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        >
            {mouse ? (
                <div className="text">
                    <h3>{data.tit}</h3>
                    <p>{data.text}</p>
                </div>
            ) : (
                <div className="imgs">
                    <img src={hover ? data.hvimg : data.nmimg} alt={data.name} />
                    <h3>{data.name}</h3>
                </div>
            )

            }
        </div>
    )

}