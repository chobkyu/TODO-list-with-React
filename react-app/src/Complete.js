import React from "react";
import ToComplete from "./ToComplete";

function Complete(props) {
  return (
    <div>
      {props.complete.map((doing) => (
        <ToComplete topic={doing} key={props.complete.title} />
      ))}
    </div>
  );
}

export default Complete;
