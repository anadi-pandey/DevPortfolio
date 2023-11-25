import logo from "./logo.svg";
import "./App.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Auth from "./components/Auth";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="portfolio_container">
        <div>akp</div>
        <Auth />
      </div>
    </div>
  );
}

export default App;
