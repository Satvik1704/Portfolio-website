import React from "react";
import "./intro.css";
const Intro = () => {
  return (
    <>
      <div className="intro">
        <h2>Welcome to my Portfolio</h2>
        <h4>Full Stack Web Developer |DevOps| CSE Student</h4>
        <p className="description">
          Thank you for showing interest in my profile. I'm passionate about
          creating beautiful, functional web applications and always eager to
          learn new technologies and things. These following are my social
          profiles links.
        </p>
      </div>
      <div className="links">
        <a
          href="https://github.com/Satvik1704"
          target="_blank"
          rel="noopener noreferrer"
          className=" link github"
        >
          <span>👨‍💻</span>
            GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/satvik-rana-577842301"
          target="_blank"
          rel="noopener noreferrer"
          className="link linkedin"
        >
                      <span>💼</span>
            LinkedIn
        </a>
      </div>
      <div className="gmailContainer">
        <a
          href="mailto:rsatvik8800@gmail.com"
          className="link gmail"
        >
          <span>✉️</span>
          Mail
        </a>
      </div>
    </>
  );

};

export default Intro;
