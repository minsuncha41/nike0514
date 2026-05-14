import "./spclogin.css";
import { useState } from "react";

export default function  spclogin({data, ondelete, loggined}){

    const [edit, setedit] = useState(false);
    const [jms, setjms] = useState(data.jm);
    const [finaljm, setfinaljm] = useState(data.jm);
    const [names, setnames] = useState(data.name);
    const [finalnames, setfinalnames] = useState(data.name);

    const saves = () => {
        setfinaljm(jms);
        setfinalnames(names);
        setedit(false);
    };

    return(
        <div className="spcwarp">
            <div className="content">
                {edit ? (
                    <div className="editbox">
                        <div className="inputs">
                        이름:
                        <input type="text" 
                        placeholder="이름입력"
                        value={names}
                        onChange={(e) => setnames(e.target.value)}
                        />
                        </div>
                        <div className="inputs">
                        종목:
                        <input type="text" 
                        placeholder="종목입력"
                        value={jms}
                        onChange={(e) => setjms(e.target.value)}
                        />
                        </div>
                    </div>
                ) : (
                    <>
                        <h3>이름: {names}</h3>
                        <h4>신청 종목: {jms}</h4>
                        <p>가입 일자: {data.date}</p>                    
                    </>

                )}
            </div>
        </div>


    )



}