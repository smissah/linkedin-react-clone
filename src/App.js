import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

//components

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        {/* //widgets */}
      </div>
    </div>
  );
}

export default App;
