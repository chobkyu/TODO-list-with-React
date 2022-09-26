import React from "react";

function ToDoing(props:any){
    const onclick = () => {
        
    }
    return (
        <div>
            <div  key={props.topic.id}>
                <h3 className="todo">{props.topic.title}</h3>
                <h5 className="todo-body">{props.topic.body}</h5>
                <button className="btn" onClick={onclick}>완료하기</button>
            </div>
            {""}
     
            <hr></hr>
        </div>
    )
}

export default ToDoing;