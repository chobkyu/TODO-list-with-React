import React from "react";
import ToDoing from './ToDoing';
import Topics from "./App";

export interface Topics {
    topics:Topics;
  }
function Doing(props:any){
    const getTextValue = (id:number, title:string, body:string) => {
        props.getComplete(id,title,body);
    }

    return (
        <div>
            {props.doings.map((doing:Topics) => (
                <ToDoing
                    topic={doing}
                    key={props.doings.title}
                    getTextValue={getTextValue}
                />
            ))}
        </div>
    )
}

export default Doing;