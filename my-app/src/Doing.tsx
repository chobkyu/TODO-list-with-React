import React from "react";
import ToDoing from './ToDoing';
import Topics from "./App";

export interface Topics {
    topics:Topics;
  }
function Doing(props:any){
    return (
        <div>
            {props.doings.map((doing:Topics) => (
                <ToDoing
                    topic={doing}
                />
            ))}
        </div>
    )
}

export default Doing;