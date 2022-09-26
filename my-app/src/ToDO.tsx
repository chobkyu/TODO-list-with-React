import React from 'react';
import './App.css';

function ToDO(props:any){
    const onclick = () => {
        console.log(props.topic.title);
        console.log(props.topic.body);
        props.getTextValue(props.topic.title, props.topic.body);
    }
    return (
        <div>
            <h3 className="todo" key={props.key} title={props.topic.body}>
            {" "}
            {props.topic.title}
            </h3>
            <button className="btn" onClick ={onclick}>시작하기</button>
            <hr></hr>
        </div>
        
    )
}
export default ToDO;