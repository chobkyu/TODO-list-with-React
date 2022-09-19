import React from "react";
import {  useState } from "react";
import CreateTodo from "./CreateTodo";

function Main(props) {
    const [inputs, setInputs] = useState({
        title: "",
        body: ""
      }); //해야 될 일 추가 객체
    
      
    
      const { title, body } = inputs;
    
      const onChange = (e) => {
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
    
        /*const topic = {
          id: doingId.current,
          title: { title },
          body: { body }
        };
        console.log({ topic });
        setDoing((prevList) => [...prevList, topic]);
        console.log({ doing });*/
      };
    
    return (
        <div>
         
          
        </div>
      );
}

export default Main;