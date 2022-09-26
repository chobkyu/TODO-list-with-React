import React from "react";

function ToComplete(props:any){
    return (
        <div>
            <div  key={props.topic.id}>
                <h3 className="todo">{props.topic.title}</h3>
                <h5 className="todo-body">{props.topic.body}</h5>
                <hr></hr>
            </div>
            {""}
        </div>
    )
}

export default ToComplete;