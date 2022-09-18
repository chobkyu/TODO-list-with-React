import React from "react";
import ToDO from "./ToDo";
function Doing(props) {
  console.log(props.doings);
  return (
    <div>
      {props.doings.map((topic) => (
        <ToDO topic={topic} key={props.doings.id} />
      ))}
    </div>
  );
}

export default Doing;
