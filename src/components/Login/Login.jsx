import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import "../componentStyles/loginStyles/loginStyles.css";
import { auth } from "../../firebase";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();
  //functions

  const handleLogin = (e) => {
    console.log("Loginning in");
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const handleRegister = () => {
    console.log("register user");
    if (!name) {
      return alert("Please enter your full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            //left are keys for firebase - dont change this
            //!keybasekey: localname

            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            //push info to store
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  //----------------------------------
  return (
    <div className="login container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
        alt=""
      />

      <form action="" className="login__form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile URL (optional)"
        />

        <div className="pass">
          <div className="visibility" onClick={toggleVisibility}>
            {visibility ? (
              <VisibilityIcon className="icon" />
            ) : (
              <VisibilityOffIcon className="icon" />
            )}
          </div>
          <input
            className="password"
            type={visibility ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="login__formSubmit"
          onClick={handleLogin}
        >
          Sign in
        </button>
      </form>

      <p>
        Not a member? {"  "}
        <span className="login__register" onClick={handleRegister}>
          Register now
        </span>
      </p>
    </div>
  );
};

export default Login;
