import React from "react";
import Body from "./components/Display";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
