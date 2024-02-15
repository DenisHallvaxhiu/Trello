import React, { useState, useEffect } from "react";
import "./Login.css";
import BackgroundImage1 from "../../assets/images/LoginBackground1.png";
import BackgroundImage2 from "../../assets/images/LoginBackground2.png";
import LogoSVG from "../../assets/images/trello-logo-blue.svg";

// Form
import validator from "validator";
import { Link } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [touched, setTouched] = useState({ username: false, password: false });

  useEffect(() => {
    if (validator.isLength(userName, { min: 4, max: 24 })) {
      setErrorUsername(false);
    } else {
      setErrorUsername(true);
    }
  }, [userName]);

  useEffect(() => {
    if (validator.isLength(password, { min: 6, max: 24 })) {
      setErrorPassword(false);
    } else {
      setErrorPassword(true);
    }
  }, [password]);

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      data: {
        username: userName,
        password: password,
      },
    });
  };

  const isFormValid = !errorUsername && !errorPassword && userName !== "" && password !== "";

  return (
    <>
      <div className="background">
        <img src={BackgroundImage1} alt="" />
        <img src={BackgroundImage2} alt="" />
      </div>
      <div className="login">
        <div className="content">
          <div className="header">
            <img src={LogoSVG} alt="" />
          </div>
          <div className="main">
            <div className="card">
              <h6>Login to Trello</h6>
              <form onSubmit={handleSubmit}>
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onBlur={() => handleBlur("username")}
                  placeholder="Enter username"
                />
                {touched.username && errorUsername && (
                  <span>Invalid username (Min 4 char)</span>
                )}
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  placeholder="Enter password"
                  type="password"
                />
                {touched.password && errorPassword && (
                  <span>Invalid password (Min 6 char)</span>
                )}
                <button type="submit" disabled={!isFormValid}>
                  Continue
                </button>
              </form>
              <hr />
              <Link to="/sign-up">Don't have an account?Sign up here!</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
