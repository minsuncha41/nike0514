import "./Todoit0511.css";
import { useState } from "react";

export default function  Todoit0511({data, ondelete, isloggedin}){

    const [isedit, setisedit] = useState(false);
    const [temptext, settemptext] = useState(data.text);
    const [finaltext, setfinaltext] = useState(data.text);

    const handlessave = () => {
        setfinaltext(temptext);
        setisedit(false)
    };


    return(
        <div className="todoitem">
            <div className="todocontent">
                {isedit ? (
                    <div className="editmode">
                        <input type="text" 
                            value={temptext}
                            onChange={(e) => settemptext(e.target.value)}
                        />
                        <button className="savebtn" onClick={handlessave}>완료</button>
                    </div>
                ) : (
                    <span className="todotext">{finaltext}</span>
                )}
            </div>
            {isloggedin && !isedit && (
                <div className="adminactions">
                    <button className="editbtn" onClick={() => setisedit(true)}>수정</button>
                    <button className="deletebtn" onClick={() => ondelete(data.id)}>삭제</button>
                </div>
            )}

        </div>
    )

}