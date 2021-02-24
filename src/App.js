import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { selectUser, login, logout } from "./features/userSlice";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";
import Login from "./components/Login/Login";
import { auth } from "./firebase";

//components

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
            photoUrl: userAuth.photoUrl, //! ARE YOU PASSING THE CORRECT THING?
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
