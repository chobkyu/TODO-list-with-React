import React from "react";
import ToComplete from "./ToComplete";
import Topics from "./App";

export interface Topics {
    topics:Topics;
}

function Complete(props:any){
    return (
        <div>
            {props.complete.map((doing:Topics) => (
                <ToComplete topic={doing} key={props.complete.title} />
            ))}
        </div>
    )
}

export default Complete;