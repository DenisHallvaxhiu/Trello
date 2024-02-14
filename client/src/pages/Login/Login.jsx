import React from "react";
import "./Login.css";
import BackgroundImage1 from "../../assets/images/LoginBackground1.png";
import BackgroundImage2 from "../../assets/images/LoginBackground2.png";
import LogoSVG from "../../assets/images/trello-logo-blue.svg";

export default function Login() {
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
                <form action="submit">
                    <input type="text" placeholder="Enter Email"/>
                    <button>Continue</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
