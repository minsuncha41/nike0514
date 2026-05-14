import "./PorductCard.css";
import { useState } from "react";


export default function PorductCard({prodcut, islogged, onrequirelogin, onopenpopup}){
    const memberprice = prodcut.price * 0.9;

    return(
        <div className="productcard">
            <div className="imgbox" onClick={() => onopenpopup(prodcut)}>
                <img src={prodcut.imgurl} alt={prodcut.name}  className="pdimg"/>
                <div className="hover">자세히보기</div>
            </div>

            <div className="infobox">
                <p className="pdname">
                    {prodcut.name}
                </p>
                <div className="pricearea">
                    {islogged ? (
                        <>
                            <span className="orprice" strike>{prodcut.price.toLocaleString()}원</span>
                            <span  className="memberprice">
                                <span className="saletag">10%</span>
                                -{memberprice.toLocaleString()}
                            </span>
                        </>
                    ) : (
                       <>
                            <span className="ooorprice" >{prodcut.price.toLocaleString()}원</span>
                            <button className="salebtn" onClick={onrequirelogin}>특가확인기</button>
                        </>                    
                    )}
                </div>
            </div>
        </div>
    )


}