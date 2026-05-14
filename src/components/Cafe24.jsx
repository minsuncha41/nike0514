import { useState } from "react";
import "./Cafe24.css";

export default function Cafe24({id, name, text, img, imghv, dc, dcmoney ,money , cl1,cl2,cl3 ,slt, setslt}){
    const isslt = slt === id;
    const [hover , hoveron] = useState(false)


    return(
        <div className={`cafe &{isslt ? "slt" : ""}`}
            onClick={() => slt()}
            onMouseLeave={() => hoveron(false)}
            onMouseEnter={() => hoveron(true)}
        >
            <img src={hover ? imghv : img} alt="" />

            <div className="textbox">
                <div className="clbox">
                    <span className="cl1"   style={{ display: cl1 ? "block" : "none" }}></span>
                    <span className="cl2" style={{ display: cl2 ? "block" : "none" }}></span>
                    <span className="cl3" style={{ display: cl3 ? "block" : "none" }}></span>
                </div>
                <div className="name">{name}</div>
                <div className="text">{text}</div>
                <div className="money">{money}</div>
                <div className="dcbox"><p><span>{dc}</span>{dcmoney}</p></div>
                <div className="lb">리뷰 0</div>
            </div>
        </div>

    )

}