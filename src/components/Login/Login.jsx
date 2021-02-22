import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import "../componentStyles/loginStyles/loginStyles.css";

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  //functions

  const handleLogin = () => {
    console.log("Loginning in");
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
        <input type="text" text="" placeholder="Full Name" />
        <input type="text" text="" placeholder="Profile URL (optional)" />
        <input type="email" placeholder="Email" />
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
            placeholder
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
        Not a member?
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
};

export default Login;
