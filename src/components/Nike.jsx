import "./Nike.css";
import { useState } from "react";


export default function Nike({prodcut, logged, onrequirelogin, onopenpopup}){
    const memberprice = prodcut.price * 0.9;

    return(
        <div className="likecard">
            <div className="imgbox" onClick={() => onopenpopup(prodcut)}>
                <img src={prodcut.imgurl} alt={prodcut.name}  className="pdimg"/>
            </div>

            <div className="infobox">
                <p className="pdname">
                    {prodcut.name}
                </p>
                <p  className="pdnamett pdname">
                    {prodcut.tt}
                </p>
                <div className="pricearea">
                    {logged ? (
                        <>
                            <span className="orprice" strike>정가: {(prodcut.price).toLocaleString()}원</span>
                            <span  className="memberprice">
                                할인가: 
                                <span className="saletag"> 10% </span>
                                 {memberprice.toLocaleString()}원
                            </span>                        
                        </>
                    ) : (
                        <>
                            <span className="ooorprice" >{prodcut.price.toLocaleString()}원</span>
                            <button className="salebtn" onClick={onrequirelogin}>특가 확인기</button>
                        </>

                    )

                    }
                
                </div>
            </div>
        </div>
    )

}