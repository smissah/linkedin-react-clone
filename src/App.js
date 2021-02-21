import React from "react";
import "./App.css";

import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";

//components

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      <div className="app__body container">
        {/* sidebar */}
        <Sidebar />
        <Feed />
        {/* //widgets */}
        <Widget />
      </div>
    </div>
  );
}

export default App;
