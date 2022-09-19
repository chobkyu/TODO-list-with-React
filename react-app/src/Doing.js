import React from "react";
import ToDoing from "./ToDoing";

function Doing(props) {
  const getTextValue = (id, title, body) => {
    console.log(id + " " + title + " " + body);
    props.getComplete(id, title, body);
  };

  return (
    <div>
      {props.doings.map((doing) => (
        <ToDoing
          topic={doing}
          key={props.doings.title}
          getTextValue={getTextValue}
        />
      ))}
    </div>
  );
}

export default Doing;