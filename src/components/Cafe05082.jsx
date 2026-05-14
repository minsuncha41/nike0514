/* 카페 재고관리 */
import { useState } from "react";
import "./Cafe0508.css";

export default function Cafe0508({data, onupupdatetexts ,ondeletecafe}){
    const [editing, setediting] = useState(false);
    const [textss , settextss] = useState(data.tt)

    const percent = Math.floor( 100 - ( data.outnum / data.num)* 100);

    const savetexts = () => {
        onupupdatetexts(data.id, textss);
        setediting(false);
    };

    return(
        <div className="cfwrap">
            <img src={data.imgurl} alt={data.name} />

            <div className="cafeinfo">
                <div className="title">
                    <h3>{data.name}</h3>
                    <button className="deletebtn" onClick={() => ondeletecafe(data.id)}>삭제</button>
                </div>

                <div className="cafebox">
                    <div className="percent">
                        <p>핵심 원두 재료: <span>{data.jl}</span></p>
                        <div className="percentbox">
                            <div className="pctbg">
                                <div className="pctfill" style={{width: `${percent}%`}}></div>
                            </div>
                            <span>현재 재고: {percent}%</span>
                        </div>
                    </div>
                </div>

                <div className="texts">
                    <h4>📑 특이사항 / 전달사항 📑</h4>
                    {
                        editing ? (
                            <div className="editbox">
                                <textarea 
                                    value={textss}
                                    onChange={(e) => settextss(e.target.value)}
                                    placeholder="특이사항 / 전달사항입력해주세요"
                                />
                                <button className="savebtn" onClick={savetexts}>저장</button>
                            </div>
                        ) : (
                            <div className="textsbox">
                                <p className="textsp">
                                    {data.tt || "아직 작성된 특이사항 & 전달사항이 없습니다."}
                                </p>
                                <button className="editbtn" onClick={() => setediting(true)}>수정</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
