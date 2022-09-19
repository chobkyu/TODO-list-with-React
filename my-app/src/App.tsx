import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"/>   
          
          <Route path="/doing"/>
         
          <Route  path="/complete"/>
           
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
