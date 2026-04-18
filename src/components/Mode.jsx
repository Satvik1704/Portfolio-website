import React from "react";
import "../components/Mode.css";
import { useState, useEffect } from "react";

const Mode = () => {
  const [darkMode, setDarkMode] = useState(
  localStorage.getItem("darkMode") === "true"
);
  useEffect(() => {
    const saveMode = localStorage.getItem("darkMode");

    if (saveMode !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDarkMode(saveMode === "true");
    }
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [darkMode]);

  const toggleButton = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  return (
    <>
      <button
        onClick={toggleButton}
        className="theme-toggle"
        style={{
          fontSize: "26px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {darkMode ? "🌞" : "🌙"}
      </button>
    </>
  );
};

export default Mode;
