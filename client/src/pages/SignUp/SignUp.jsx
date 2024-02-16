import React, { useState, useEffect } from "react";
import BackgroundImage1 from "../../assets/images/LoginBackground1.png";
import BackgroundImage2 from "../../assets/images/LoginBackground2.png";
import LogoSVG from "../../assets/images/trello-logo-blue.svg";
import "./SignUp.css";

// Form
import validator from "validator";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [touched, setTouched] = useState({ email:false,username: false, password: false });

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

  useEffect(() => {
    if (validator.isEmail(email)) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  }, [email]);

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

  const isFormValid =
    !errorUsername &&
    !errorPassword &&
    !errorEmail &&
    userName !== "" &&
    password !== "" &&
    email !== "";

  return (
    <>
      <div className="background">
        <img src={BackgroundImage1} alt="" />
        <img src={BackgroundImage2} alt="" />
      </div>
      <div className="signUp">
        <div className="content">
          <div className="header">
            <img src={LogoSVG} alt="" />
          </div>
          <div className="main">
            <div className="card">
              <h6>Sign Up to Trello</h6>
              <form onSubmit={handleSubmit}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="Enter email"
                />
                {touched.email && errorEmail && (
                  <span>Invalid email</span>
                )}
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
                  Sign Up
                </button>
              </form>
              <hr />
              <Link to="/login">Already have an account?Log in here!</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
