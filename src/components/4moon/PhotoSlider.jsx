
/* 맛집 엡에 배열 불러오기 2*/
import "./PhotoSlider.css"

export default function PhotoSlider({nextindex, tit, img}){
    return(
        <div className="sliderbox" onClick={nextindex}>
            <img 
                src={img} 
                alt={tit}
                className='foodimgs' 
            />
            <h3>{tit}</h3>
            <p>👆 다음 맛집 보기 클릭 👆</p>
        </div>    
    )
}


/* 맛집 포토에 배열 불러오기 1
import { useState } from "react";
import "./PhotoSlider.css"

function PhotoSlider(){
    const images = [
        "https://images.unsplash.com/photo-1628919350249-eb45d8829629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTgzJTg4JUVDJTlBJUIwfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1548587468-971ebe4c8c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTgzJTg4JUVDJTlBJUIwfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCVFQyU4MyU4OCVFQyU5QSVCMHxlbnwwfHwwfHx8MA%3D%3D"
    ]


    const title = ['이쁘게 생긴 새우', '맛있어보이는 새우요리', '따끈한 새우 요리'];
    const [currentIndex, setcurrentIndex] = useState(0);
    const changPhoto = () => {
        let nexrIndex = currentIndex + 1;
        if (nexrIndex === images.length){
            nexrIndex = 0;
        }
        setcurrentIndex(nexrIndex);
    }
    return(
        <div className="sliderbox" onClick={changPhoto}>
            <img src={images[currentIndex]} 
            alt={images[currentIndex]}
            className="foodimgs" />
            <h3>{title[currentIndex]}</h3>
            <p>👆 다음 맛집 보기 클릭 👆</p>
        </div>
    )

}
export default PhotoSlider;

*/