import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { Helmet, HelmetProvider } from "react-helmet-async";
=======
>>>>>>> e19005100e7889bf7891b22dc4e733f2336bc754

import "./App.css";
import { selectUser, login, logout } from "./features/userSlice";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
<<<<<<< HEAD
=======
import { Helmet, HelmetProvider } from "react-helmet-async";
>>>>>>> e19005100e7889bf7891b22dc4e733f2336bc754

//! custom hooks

<<<<<<< HEAD
const useLocalState = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  return ["one", () => {}];
};
//components

function App() {
  //DarkMode
  const [username, setUsername] = useLocalState("username", "");
  const [theme, setTheme] = useLocalState("theme", "dark");
  //------------------------------------------------
=======
//my ucstom hook
const useLocalState = (key, defaultValue) => {};

//yarn.pm/gatsby-plugin-react-helmet-async

//!-------------
https: () => {
>>>>>>> e19005100e7889bf7891b22dc4e733f2336bc754
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //-----------------------
  useEffect(() => {
    //listening for persisted auth change - aka sign in
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user not logging in
        dispatch(logout());
      }
    });
  }, []);

  //----------------------
  return (
    <div className="app">
      {user && <Header />}
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
};

export default App;
