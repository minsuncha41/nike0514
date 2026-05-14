import { useState } from "react";
import "./FlashCard.css";

export default function FlashCard({data, onscr}){
    const [scr, setscr] = useState(false);
    const [flp, setflp] = useState(false);
    const [ans, setans] = useState(false);

    const reflpcard = () => {
        setflp(false);
    };
    const ckflpcard = () => {
            setans(true);
    };


    const ansflpcard = () => {
        if(!flp){
            setflp(true);
        }
        if(ans === data.ans){
            setans(true);
            btnclick();
        }
        else{
            setans(false);
        }
    };
    const noansflpcard = () => {
        if(!flp){
            setflp(true);
        }
        if(!ans === data.ans){
            setans(true);
            btnclick();
        }
        else{
            setans(false);
        }
    };

    

    const btnclick = () => {
        if(!scr){
            onscr();
            setscr(true);
        }
    }

    return(
        <div className={flp ? "flashcard flipped" : "flashcard"}>
            <div className="cardcontent">
                {flp ? (
                    <div className="ans">
                    {!ans ? (
                        <div className="nowrap">
                            <h2>아쉽개도 틀렸습니다</h2>
                            <button className="correctbtn" onClick={reflpcard}>다시풀기</button>
                            <button className="correctbtn oncorrectbtn" onClick={ckflpcard}>정답확인</button>
                        </div>
                        ):(
                        <div className="acwrap">
                            <h2>정답입니다!</h2>
                            <p className="answertext">{data.answer}</p>
                    
                        </div>
                    )}    
                    </div>

                ) : (
                    <div className="btnwrap">
                        <p className="questiontext">{data.question}</p>
                    
                        <button className="correctbtn" onClick={noansflpcard}>O</button>
                        <button className="correctbtn oncorrectbtn" onClick={ansflpcard}>X</button>
                    </div>
                )}
            </div>
        </div>
    )






}





/* 카드 퀴즈 1 2
import { useState } from "react";
import "./FlashCard.css";

export default function FlashCard({data, onCorrent}){
    const [isScorde, setisScorde] = useState(false);

    const [isFlipped, setisFlipped] = useState(false);

    // const flipCard = () => {
    //     if(!isFlipped){
    //         setisFlipped(true);
    //     }
    // };
    const flipCard = () => {
        setisFlipped(!isFlipped);
    };

    const handleCorrectClick = (e) => {
        e.stopPropagation();

        if(!isScorde){
            onCorrent();
            setisScorde(true);
        }
    }

    return(
        <div className={isFlipped ? "flashcard flipped" : "flashcard"} onClick={flipCard}>
            <div className="cardcontent">
                {isFlipped ? (
                    <div className="acwrap">
                        <p className="answertext">{data.answer}</p>
                        {!isScorde ? (
                            <button className="correctbtn" onClick={handleCorrectClick}>맞췄어요 + 1</button>
                            ) : (
                            <span className="donetext">채점완료</span>
                        )} 
                     </div>
                ) : (
                    <p className="questiontext">{data.question}</p>
                )}
            </div>

        </div>
    )

}
*/