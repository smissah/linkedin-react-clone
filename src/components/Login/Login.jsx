import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import "../componentStyles/loginStyles/loginStyles.css";
import { auth } from "../../firebase";

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //functions

  const handleLogin = (e) => {
    console.log("Loginning in");
    e.preventDefault();
  };
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const register = () => {
    console.log("register user");
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
          onChange={(e) => setName(e.target.value.trim())}
          placeholder="Full Name"
        />
        <input type="text" text="" placeholder="Profile URL (optional)" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
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
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
};

export default Login;
