import React from 'react';
import './App.css';

function ToDO(props:any){
    return (
        <div>
            <h3 className="todo" key={props.key} title={props.topic.body}>
            {" "}
            {props.topic.title}
            </h3>
            <button className="btn">시작하기</button>
            <hr></hr>
        </div>
        
    )
}
export default ToDO;