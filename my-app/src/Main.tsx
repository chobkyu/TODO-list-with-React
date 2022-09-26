import React from "react";
import {  useState } from "react";
import Topics from "./App";
import ToDO from "./ToDO";
import CreateTodo from "./CreateTodo";

export interface Topics {
  topics:Topics;
}
function Main(props:any) {
    const [inputs, setInputs] = useState({
        title: "",
        body: ""
      }); //해야 될 일 추가 객체
    
      
    
      const { title, body } = inputs;
    
      const onChange = (e:any) => {
        const { name, value } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
      };
    
      const onCreate = () => {
        console.log(inputs.title + " " + inputs.body);
        props.getValue(inputs.title, inputs.body);
        setInputs({
          title: "",
          body: ""
        });
      };
    
      const getTextValue = (title:string, body:string) => {
        //하고 있는 일 추가함
    
        props.gettoDoing(title, body);
    
        
      };
    
    return (
        <div>
          {props.topics.map((topic:Topics) => (
            <ToDO
              topic={topic}
              key={props.topics.title}
              getTextValue={getTextValue}
            />
          ))}
          <CreateTodo
            title={title}
            body={body}
            onChange={onChange}
            onCreate={onCreate}/>
        </div>
      );
}

export default Main;