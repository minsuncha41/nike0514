import "./Trplist.css";

export default function Trplist({data, ondelete, oncheck}){

    return(
        <div className={`trpitem ${data.check ? "ok" : ""} `}>
            <div className="inwrap" onClick={() => oncheck(data.id)}>
                <span className="checkic">{data.check ? "🚀" : "📦"}</span>
                <div className="intext">
                    <p>🚩{data.nl}-{data.jy}</p>
                    <h4>{data.tt}</h4>
                </div>
            </div>

            <button className="dle" onClick={() => ondelete(data.id)}>취소</button>
        </div>
    )

}
//npm run build