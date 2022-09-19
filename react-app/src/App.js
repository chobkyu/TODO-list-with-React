import "./App.css";

import Main from "./Main";
import Header from "./Header";
import Doing from "./Doing";
import Complete from "./Complete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";

function App() {
  const nextId = useRef(4);
  const doingId = useRef(1);
  const [topics, setTopics] = useState([
    { id: 1, title: "공경진 프로젝트", body: "딥러닝 파트 확인" },
    { id: 2, title: "봉사 웹 API", body: "API 만들기" },
    { id: 3, title: "경영학 공부", body: "경영학 듣기" }
  ]); //해야 될 일 객체

  const getValue = (title, body) => {
    console.log(title + " " + body);
    const topic = {
      id: nextId.current,
      title: title,
      body: body
    };
    setTopics([...topics, topic]);
  };

  const [toDoing, setToDoing] = useState([
    {
     
    }
  ]);

  const gettoDoing = (title, body) => {
    console.log(title + "  " + body + "입니다");
    const doing = {
      id: doingId.current,
      title: title,
      body: body
    };

    setToDoing([...toDoing, doing]);
    console.log({ toDoing });
  };

  const [toComplete, setToComplete] = useState([
    {
      id: "0",
      title:"",
      body:""
    }
  ]);

  const getComplete = (id, title, body) => {
    console.log("getComplete");
    const comp = {
      id: id,
      title: title,
      body: body
    };

    setToComplete([...toComplete, comp]);
    console.log({ toComplete });

    setToDoing(toDoing.filter((todoing) => todoing.id !== id));
    setTopics(topics.filter((topic) => topic.title !== title));
  };

  nextId.current += 1;
  doingId.current += 1;

  const complete = (id, title, body) => {};

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                topics={topics}
                getValue={getValue}
                gettoDoing={gettoDoing}
              />
            }
          />
          <Route
            path="/doing"
            element={
              <Doing
                doings={toDoing}
                complete={complete}
                getComplete={getComplete}
              />
            }
          />
          <Route
            path="/complete"
            element={<Complete complete={toComplete} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;