import React from "react";

function ToDO(props) {
  const onclick = () => {
    console.log(props.topic.title);
    console.log(props.topic.body);
    props.getTextValue(props.topic.title, props.topic.body);
  };
  return (
    <div>
      <h4 key={props.key} title={props.topic.body}>
        {" "}
        {props.topic.title}
      </h4>
      <button onClick={onclick}>시작하기</button>
    </div>
  );
}

export default ToDO;

