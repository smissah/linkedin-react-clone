import React from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";
import Login from "./components/Login/Login";

//components

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      <div className="app__body container">
        {!user ? (
          <Login />
        ) : (
          <>
            <Sidebar />
            <Feed />
            <Widget />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
