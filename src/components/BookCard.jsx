/* 독서 기록장 */
import "./BookCard.css";
import { useState } from "react";

export default function BookCard({data, onDlete, onUpdatePages, ondateReview}){
    const [isEditing, setisEditing] = useState(false);
    const [tempReview, settempReview] = useState(data.review);
    
    const [addPageInput, setaddPageInput] = useState("");

    const prpgreesPercent = Math.floor((data.readPages / data.totalPages) * 100);

    const handleSaveReview = () => {
        ondateReview(data.id, tempReview);
        setisEditing(false);
    };

    const handleAddPages = () => {
        if(!addPageInput) return;
        onUpdatePages(data.id, addPageInput);
        setaddPageInput("");
    };

    return(
        <div className="bookcard">
            <img src={data.imgUrl} alt={data.title} className="bookcover" />

            <div className="bookinfo">
                <div className="titlearea">
                    <h3>{data.title}</h3>
                    <button className="deletebtn" onClick={() => onDlete(data.id)}>삭제</button>
                </div>

                <div className="progressarea">
                    <div className="progresstext">
                        <span>진도율: {prpgreesPercent}%</span>
                        <span>{data.readPages} / {data.totalPages} 쪽</span>
                    </div>

                    <div className="progressbg">
                        <div className="progressfill" style={{width: `${prpgreesPercent}%`}}></div>
                    </div>

                    {data.readPages < data.totalPages && (
                        <div className="addpagebox">
                            <input type="number"
                            placeholder="오늘읽은 쪽수"
                            value={addPageInput}
                            onChange={(e) => setaddPageInput(e.target.value)}
                            />
                            <button onClick={handleAddPages}>추가</button>
                        </div>
                    )}
                </div>

                <div className="reviewarea">
                    {isEditing ? (
                        <div className="editbox">
                            <textarea
                                value={tempReview}
                                onChange={(e) => settempReview(e.target.value)}
                                placeholder="어떤 내용이 인상 깊었나요?"
                            />
                            <button className="savebtn" onClick={handleSaveReview}>저장</button>
                        </div>
                    ) : (
                        <div className="readbox">
                            <p className="reviewtext">
                                {data.review || "아직 작성된 독후감이 없습니다."}
                            </p>
                            <button className="editbtn" onClick={() => setisEditing(true)}>독후감</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
 
}