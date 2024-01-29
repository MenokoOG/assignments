import React from "react";
import "./style.css";

export const ReactFacts = () => {
  return (
    <div className="react-facts">
      <div className="div">
        <div className="main-body">
          <div className="overlap-group">
            <div className="rectangle" />
            <img className="reactjs-icon" alt="Reactjs icon" src="reactjs-icon-2.png" />
            <div className="body-text">
              <p className="text-wrapper">Was first released in 2013</p>
              <p className="p">Was originally created by Jordan Walke</p>
              <p className="text-wrapper-2">Has well over 100K stars on GitHub</p>
              <div className="text-wrapper-3">Is maintained by Facebook</div>
              <p className="text-wrapper-4">Powers thousands of enterprise apps, including mobile apps</p>
            </div>
            <img className="bullet-points" alt="Bullet points" src="bullet-points.png" />
            <div className="title">Fun facts about React</div>
          </div>
        </div>
        <header className="header">
          <div className="overlap">
            <p className="extra-title">React Course - Project 1</p>
            <div className="logo">
              <div className="text-wrapper-5">ReactFacts</div>
              <img className="img" alt="Reactjs icon" src="reactjs-icon.svg" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
