import React from "react";

function ToDoing(props) {
  const onclick = () => {
    console.log(props.topic.title);
    console.log(props.topic.body);
    console.log(props.topic.id);
    props.getTextValue(props.topic.id, props.topic.title, props.topic.body);
  };
  return (
    <div>
      <div className="todo" key={props.topic.id}>
        <h4>{props.topic.title}</h4>
        <h6>{props.topic.body}</h6>
        <button className="btn" onClick={onclick}>완료하기</button>
      </div>
      {""}
     
      <hr></hr>
    </div>
  );
}

export default ToDoing;
