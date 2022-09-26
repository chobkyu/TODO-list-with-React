import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import Doing from './Doing';
import { useRef, useState } from "react";
import { CompletionInfoFlags } from 'typescript';

export interface Topics {
  id:number,
  title:string,
  body:string,
}
function App() {
  const nextId = useRef(4);
  const doingId = useRef(1);

  const [topics, setTopics] = useState<Topics[]>([
    { id: 1, title: "공경진 프로젝트", body: "딥러닝 파트 확인" },
    { id: 2, title: "봉사 웹 API", body: "API 만들기" },
    { id: 3, title: "경영학 공부", body: "경영학 듣기" }
  ]); //해야 될 일 객체

  
  const getValue = (title:string, body:string) => {
    console.log(title + " " + body);
    const topic = {
      id: nextId.current,
      title: title,
      body: body
    };
    setTopics([...topics, topic]);
  };


  const [toDoing, setToDoing] = useState<Topics[]>([]);

  const gettoDoing = (title:string,body:string) => {
    console.log(title+ " " + body);
    const doing = {
      id : doingId.current,
      title : title,
      body : body,
    };

    setToDoing([...toDoing,doing]);
    console.log({toDoing});
  }

  const [toComplete,setToComplete] = useState<Topics[]>([]);

  const getCompelte = (id:number, title:string, body:string) => {
    const comp = {
      id: id,
      title: title,
      body: body
    };

    setToComplete([...toComplete, comp]);
    console.log({ toComplete });

    setToDoing(toDoing.filter((todoing) => todoing.id !== id));
    setTopics(topics.filter((topic) => topic.title !== title));
  }
  nextId.current += 1;
  doingId.current += 1;

  const complete = (id:number, title:string, body:string) => {};
  return (
    <div>
     <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/"
            element={
              <Main
                topics={topics}
                getValue={getValue}
                gettoDoing={gettoDoing}
              />
            }/>   
          
          <Route path="/doing"
            element={
              <Doing 
                doings={toDoing}
                complete={complete}
                getComplete={getCompelte}
              />
            }
          />
         
          <Route  path="/complete"/>
           
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
