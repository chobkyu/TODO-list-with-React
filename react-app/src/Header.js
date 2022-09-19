import React from "react";
import {  Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="icon">TODO List</div>
          <div className="gnb">
            <Link to="/">해야될 일</Link>
            <Link to="/doing">하고 있는 일</Link>
            <Link to="/complete">완료한 일</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
