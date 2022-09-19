import React from "react";

function ToComplete(props) {

  return (
    <div>
      <div key={props.topic.id}>
        <h4>{props.topic.title}</h4>
        <h6>{props.topic.body}</h6>
        <hr></hr>
      </div>
      {""}
     
    </div>
  );
}

export default ToComplete;
