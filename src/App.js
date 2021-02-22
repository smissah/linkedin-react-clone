import React from "react";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";
import Login from "./components/Login/Login";

//components

function App() {
  const user = userSelector(selectUser);

  <div className="app">
    <Header />

    {!user ? (
      <Login />
    ) : (
      <div className="app__body container">
        {" "}
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    )}
  </div>;
}

export default App;
