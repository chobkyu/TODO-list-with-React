import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import { useRef, useState } from "react";

function App() {
  const nextId = useRef(4);
  const doingId = useRef(1);

  const [topics, setTopics] = useState([
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

  
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/"
            element={
              <Main
                topics={topics}
                getValue={getValue}
               // gettoDoing={gettoDoing}
              />
            }/>   
          
          <Route path="/doing"/>
         
          <Route  path="/complete"/>
           
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
