import "./BClist.css";

export default function BC({data, ondelete, oncheckbox}){
    return(
        <div className={`bc-item ${data.check ? "ok" : ""} `}>
            <div className="bc-content" onClick={() => oncheckbox(data.id)}>
                <span className="checkbox">
                    {data.check ? "✅" : "⬜"}
                </span>
                <p className="bc-text">{data.nb} {data.text}</p>
            </div>

            <button className="delete-btn" onClick={() => ondelete(data.id)}> 삭제 </button>
        </div>
    )

}