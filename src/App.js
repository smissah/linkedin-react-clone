import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { selectUser, login, logout } from "./features/userSlice";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { selectTheme } from "./features/themeSlice";

//components

const darkTheme = {
  background: "red",
  color: "white",
};
const lightTheme = {
  background: "red",
  color: "white",
};
const themes = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  console.log(themes);

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
            photoUrl: userAuth.photoURL, //! ARE YOU PASSING THE CORRECT THING? UPPERCASE!!!!!
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
    <ThemeProvider theme={themes[theme]}>
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
    </ThemeProvider>
  );
}

export default App;
