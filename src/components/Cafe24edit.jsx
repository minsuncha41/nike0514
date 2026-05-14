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
            <div className="imgsbox">
                <h5>기본이미지</h5>
                <input type="text" value={img} placeholder="하양"/>
                <h5>호버 이미지</h5>
                <input type="text" value={imghv} placeholder="하양"/>
            </div>


            <br />

            <div className="textbox">
                <div className="clbox">
                    <h5>색</h5>
                    <span className="cl1"   style={{ display: cl1 ? "block" : "none" }}></span>
                    <input type="text" value={cl1} placeholder="하양"/>

                    <span className="cl2" style={{ display: cl2 ? "block" : "none" }}></span>
                    <input type="text" value={cl2} placeholder="검정"/> 

                    <span className="cl3" style={{ display: cl3 ? "block" : "none" }}></span>
                    <input type="text" value={cl3} placeholder="노랑"/>

                </div>
                <br />
                <div className="textboxbox">
                    <div className="name">{name}</div>
                    <input type="text" value={name} />

                    <div className="text">{text}</div>
                    <input type="text" value={text} />
                    
                    <div className="money"><br />{money}</div>
                    <input type="text" value={money} />
                    
                    <div className="dcbox"><br /><p><span>{dc}</span>{dcmoney}</p></div>
                    <input type="text" value={dc} />
                    <input type="text" value={dcmoney} />


                    <div className="lb">리뷰 0</div>
                </div>
            </div>
        </div>

    )

}