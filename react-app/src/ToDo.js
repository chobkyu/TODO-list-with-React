import React from "react";
import { Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="icon">TODO List</div>
          <div className="gnb">
            <a href="/">해야될 일</a>
            <a href="/doing">하고 있는 일</a>
            <a href="/complete">완료한 일</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
