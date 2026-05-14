import "./TodoItem.css";

export default function TodoItem({data , onDelete , onToggle}){
    return(
        <div className={`todo-item ${data.isDone ? "done" : ""} `}>
            <div className="todo-content" onClick={() => onToggle(data.id)}>
                <span className="checkbox">
                    {data.isDone ? "✅" : "⬜"}
                </span> 
                <p className="todo-text">{data.text}</p>

            </div>

            <button className="delete-btn" onClick={() => onDelete(data.id)}> 삭제 </button>
        </div>
    );
}



/* 1 2
import "./TodoItem.css";

export default function TodoItem({data , onDelete , onToggle}){
    return(
        <div className="todo-item">
            <p className="todo-text">{data.text}</p>

            <button className="delete-btn" onClick={() => onDelete(data.id)}> 삭제 </button>
        </div>
    );
}
*/