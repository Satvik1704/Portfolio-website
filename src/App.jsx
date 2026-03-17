/* eslint-disable react-hooks/purity */
import React from "react";
import Mode from "./components/Mode";
import Intro from "./components/Intro";
import TechCard from "./components/TechCard";
import Projects from "./components/Projects";
import "./App.css";

const App = () => {
  const shapes = Array.from({ length: 20 });

  return (
    <div className="container">
      <div className="background-container">
        {shapes.map((_, i) => {
          let style = {};

          if (i < 4) {
            // top-left
            style = {
              left: Math.random() * 20 + "%",
              top: Math.random() * 20 + "%",
            };
          } else if (i < 8) {
            // top-right
            style = {
              left: 75 + Math.random() * 20 + "%",
              top: Math.random() * 20 + "%",
            };
          } else if (i < 12) {
            // intro center
            style = {
              left: 35 + Math.random() * 30 + "%",
              top: 20 + Math.random() * 25 + "%",
            };
          } else if (i < 16) {
            // tech stack left
            style = {
              left: Math.random() * 40 + "%",
              top: 50 + Math.random() * 20 + "%",
            };
          } else {
            // tech stack / projects right
            style = {
              left: 60 + Math.random() * 30 + "%",
              top: 50 + Math.random() * 30 + "%",
            };
          }

          const size = 40 + Math.random() * 60;

          return (
            <div
              key={i}
              className="floating-shape"
              style={{
                ...style,
                width: size + "px",
                height: size + "px",
                animationDelay: Math.random() * 5 + "s",
                animationDuration: 8 + Math.random() * 4 + "s",
                transform: i % 2 === 0 ? "rotate(45deg)" : "none",
                borderRadius: i % 3 === 0 ? "50%" : "0%",
              }}
            />
          );
        })}
      </div>

      <div className="main">
        <div className="name">
          <p className="pname">Satvik Rana</p>
        </div>

        <Mode />
      </div>

      <Intro />

      <div className="tech">
        <TechCard />
      </div>

      <div className="Projects">
        <Projects />
      </div>

      {/* Footer */}
      <footer className="footer">
        Thank you for visiting — feel free to reach out.
      </footer>
    </div>
  );
};

export default App;
