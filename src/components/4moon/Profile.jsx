import { useState } from "react";
import "./Profile.css";


export default function Profile({id, name, title, text, img, slt, setslt}){
    const isslt = slt === id;

    return(
        <div className={`profile ${isslt ? 'slt' : ""}`}
            onClick={() => setslt(id)}
        >   
        <div className="name">이름: {name}</div>
            <img src={img} alt={name} />
            <div className="box">
                <div className="title">나온곳: {title}</div>
                <div className="text">추가 설명: {text}</div>
                <button>자세히보기</button>
            </div>

        </div>
    )
}