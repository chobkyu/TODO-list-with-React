import "./App.css";

import Main from "./Main";
import Header from "./Header";
import Doing from "./Doing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
      id: "",
      title: "",
      body: ""
    }
  ]);
  const gettoDoing = (title, body) => {
    console.log(title + "  " + body + "입니다");
    const doing = {
      id: doingId.current,
      title: { title },
      body: { body }
    };

    setToDoing((prevList) => [...prevList, doing]);
    console.log({ toDoing });
  };

  nextId.current += 1;
  doingId.current += 1;

  return (
    <div>
      <Header />
      <BrowserRouter>
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
          <Route path="/doing" element={<Doing doings={toDoing} />} />
          <Route path="/complete" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*
function Header(props){
  return  <header>
    <h1><a href="/" onClick={function(event){
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = [];
  for(let i =0; i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(<li key = {t.id}><a id={t.id} href = {'/read/'+t.id} onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a></li>)
  }

  return <nav>
  <ol>
    {lis}
  </ol>
  
</nav>
}

function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type= "text" name = "title" placeholder='title'/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type = "submit" value="Create"></input></p>
    </form>
  </article>
}

function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type= "text" name = "title" placeholder='title' value={title} onChange={event=>{
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type = "submit" value="Update"></input></p>
    </form>
  </article>
}

function App() {
  const [mode, setMode] = useState('welcome');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html',body:"html is..."},
    {id:2, title:"css", body :"css is..."},
    {id:3, title:"JS", body :"js is ..."}
  ]);
  let content = null;
  let contextControl = null;

  if(mode==='welcome'){
    content = <Article title='welcome!' body='hello, web'></Article>
  }else if(mode==='read'){
    let title, body = null;

    for(let i = 0; i<topics.length; i++){
      if(topics[i].id=== id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Article title={title} body={body}></Article>
    contextControl = <>
      <li> <a href={"/update/"+id} onClick = {event=>{
        event.preventDefault();
        setMode('update');
      }}>Update</a> </li>
      <li>
        <input type="button" value="Delete" onClick={()=>{
          const newTopics = [];
          for(let i = 0; i<topics.length; i++){
            if(topics[i].id !== id){
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
          setMode('welcome');
        }}/>
      </li>
    </>

  } else if(mode == 'create'){
    content=<Create onCreate={(title,body)=>{
        const newTopic = {id:nextId, title: title,
                          body: body,
        }
        const newTopics = [...topics];
        newTopics.push(newTopic);
        setTopics(newTopics);
        setMode('read');
        setId(nextId);
        setNextId(nextId+1);
    }
    }></Create>

  } else if(mode === 'update'){
    let title, body = null;

    for(let i = 0; i<topics.length; i++){
      if(topics[i].id=== id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body = {body} onUpdate={(title,body)=>{
      console.log(title, body);
      const newTopics = [...topics];
      const updatedTopic = {id : id, title : title, body : body};
      for(let i =0 ; i<newTopics.length ; i++){
        if(newTopics[i].id===id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('read');
    }
    
    }></Update>
  }

  
  return (
    <div>
      <Header title="React" onChangeMode={function(){
        setMode('welcome');
      }}></Header>
      <Nav topics = {topics} onChangeMode={(_id)=>{
        setId(_id);
        setMode('read');
      }}></Nav>
      {content}
      <ul>
        <li>
          <a href = "/create" onClick={event=>{
            event.preventDefault();
            setMode('create');
          }}>create</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}*/

export default App;
