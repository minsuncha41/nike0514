/* 렌덤 색변환 */
import { useState } from "react";
import "./Box.css"
 
export default function Box(){
    const [ color, setColor] = useState("red");

    const changeColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        const randomColor = `rgb(${r},${g},${b})`;
        setColor(randomColor);
    };

    return(
        <div className="box" 
        onClick={changeColor} 
        style={{backgroundColor:color}}>
            {color}
        </div>
    )
}


/* 1
function Box({color, text, size}){
    return(
        <div className="box" style={{backgroundColor:color, width:size, height:size}}>
            {text}
        </div>
    );
}
*/

/* box1
function Box(){
    const [color, setColor] = useState("red");

    const changeColor = () => {
        if(color === "red") setColor("blue");
        else if (color === "blue") setColor("green");
        else setColor("red");
    };

    return(
        <div className="box" onClick={changeColor} style={{backgroundColor:color}}>
            클릭!
        </div>
    )
}
*/

/* xxx
function Box({color, text}){
    const [color, setColor] = useState;

    const chang = () =>{
        if(color === "red") setColor("orange");
        else if(color === "orange") setColor("yellow");
        else if(color === "yellow") setColor("green");
        else if(color === "green") setColor("blue");
        else if(color === "blue") setColor("navy");
        else setColor("Violet");
    }

    return(
        <div className="box" onClick={chang} style={{backgroundColor:color}}></div>
    )
}
*/

/* box2
function Box({initcolor}){
    const [color, setColor] = useState(initcolor);
    const rainbowcolor = ['red', 'orange' ,'yellow' ,'green' ,'blue' ,'navy' ,'violet']

    const chang = () =>{
        const Index = rainbowcolor.indexOf(color);

        let nextIndex = Index + 1;

        if (nextIndex === rainbowcolor.length){
            nextIndex = 0;
        }
        setColor(rainbowcolor[nextIndex]);
    }

    return(
        <div className="box" onClick={chang} style={{backgroundColor:color}}>
            클릭!!
        </div>
    )
}
export default Box;    
*/


