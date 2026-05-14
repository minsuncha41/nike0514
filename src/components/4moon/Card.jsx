import { useState } from "react";
import "./Card.css";



/* 언어카드
import { useState } from "react";
import "./Card.css";


export default function Card({id, title,desc, img, selected , setselected}){
    const isSelected = selected === id;

    return(
        <div 
            className={`card ${isSelected ? 'selected' : ''}`}
            onClick={() => setselected(id)}
        >
            <img src={img} alt={title}/>

            <div className="cardbody">
                <div className="cardtitle">{title}</div>
                <div className="carddesc">{desc}</div>
                <button>자세히보기</button>
            </div>
        </div>
    );
}
*/


/* 좌석
import { useState } from "react";
import "./Card.css";


function Crad({user,usertt,userttcl , sitnum}){
    user = "white"
    usertt = "예매 가능"
    userttcl = "black"
    const [color, setcolor] = useState(user);
    const [text, settext] = useState(usertt);
    const [ttcl, settcl] = useState(userttcl);

    const colorlist = ['white', 'green' ,'red']
    const textlist = ['예매 가능', '선택됨' ,'예매 완료']
    const ttcllist = ['black', 'white' ,'white']

    const chang = () =>{
        const Indexcl = colorlist.indexOf(color);
        const Indextt = textlist.indexOf(text);
        const Indexttcl = ttcllist.indexOf(ttcl);

        let nextIndexcl = Indexcl + 1;
        let nextIndextt = Indextt + 1;
        let nextIndexttcl = Indexttcl + 1;

        if(nextIndexcl === colorlist.length){
            nextIndexcl = 0;
            nextIndextt = 0;
            nextIndexttcl = 0;
        }


        setcolor(colorlist[nextIndexcl]);
        settext(textlist[nextIndextt]);
        settcl(ttcllist[nextIndexttcl]);

    }

    return(
        <div className="card" 
        onClick={chang} 
        style={{backgroundColor:color, color:ttcl}}>
            <h1 style={{color:ttcl}}>{sitnum}</h1>
            {text}
        </div>
    )
};

export default Crad;   
*/

