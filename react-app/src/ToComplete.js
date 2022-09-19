import React from "react";

function ToComplete(props) {

  return (
    <div>
      <div className="todo" key={props.topic.id}>
        <h3>{props.topic.title}</h3>
        <h6>{props.topic.body}</h6>
        <hr></hr>
      </div>
      {""}
     
    </div>
  );
}

export default ToComplete;
