import "./MJ.css";
import { useState } from "react";

export default function MJ({data, dleletemj, updatequantity, updatemessage}){
    const [editing, setediting] = useState(false);
    const [upmessage , setupmessage] = useState(data.message);

    const [addquantity , setaddquantity] = useState("");

    const allquantity = Math.floor((data.quantity - data.outquantity));
    const allquantitypst = Math.floor(( data.outquantity / data.quantity ) * 100);

    const savemessage = () => {
        updatemessage(data.id, upmessage);
        setediting(false);
    };

    const addquantityss = () => {
        if(!addquantity) return;
        updatequantity(data.id, addquantity);
        setaddquantity("");
    };

    return(
        <div className="mjwrap">
            <img className="imgsurl" src={data.imgsurl} alt={data.name} />

            <div className="mjinfo">
                <div className="title">
                    <div className="titbox">
                        <h3>이름: {data.name}</h3>
                        <span>가격: {data.money}원</span>
                    </div>
                    <button className="deletebtn" onClick={() => dleletemj(data.id)}>삭제</button>
                </div>

                <div className="message">
                    <h3>전달사항</h3>
                    {
                        editing ? (
                            <div className="editbox">
                                <textarea 
                                    value={upmessage}
                                    onChange={(e) => setupmessage(e.target.value)}
                                    placeholder="추가하실 전달사항을 입력해주세요"
                                />
                                <button className="savebtn" onClick={savemessage}>저장</button>
                            </div>

                        ) : (
                            <div className="messagetextbox">
                                <p className="messagetext">
                                    {data.message || "아직 전달사항이 없습니다 입력해주세요."}
                                </p>
                                <button className="editbtn" onClick={() => setediting(true)}>전달사항 수정</button>
                            </div>
                        )
                    }
                </div>

                <div className="quantitybox">
                    <div className="quantityboxall">
                        <span>재고량: {data.quantity} / 남은수량: {allquantity}</span>
                    </div>

                    <div className="progressbg">
                        <div className="progressfill" style={{width: `${allquantitypst}%`}}></div>
                    </div>

                    <div className="outquantityboxall">
                        <h4>오늘 판매 수량: {data.outquantity}</h4>
                        <input type="number" 
                        placeholder="추가 판매 수량"
                        value={addquantity}
                        onChange={(e) => setaddquantity(e.target.value)}
                        />

                        <button onClick={addquantityss}>추가</button>
                    </div>
                </div>

            </div>
        
        
        </div>
    )

}