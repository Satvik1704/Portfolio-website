import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faDocker,
  faAws,
  faGitAlt,
  faGithub,
  faPython,
  faJava,
  faRust
} from "@fortawesome/free-brands-svg-icons";

import {
  faServer,
  faDatabase,
  faCloud,
  faTools,
  faBrain,
  faCode,
  faLink
} from "@fortawesome/free-solid-svg-icons";

import "./tech.css";

const TechStack = () => {
  return (
    <div className="tech-section">

      <h2 className="heading">Technology Stack</h2>

      <div className="techContainer">

        {/* Frontend */}
        <div className="tech-card">
          <h3><FontAwesomeIcon icon={faCode}/> Frontend</h3>
          <p><FontAwesomeIcon icon={faHtml5}/> HTML5</p>
          <p><FontAwesomeIcon icon={faCss3Alt}/> CSS3</p>
          <p><FontAwesomeIcon icon={faJs}/> JavaScript</p>
          <p><FontAwesomeIcon icon={faReact}/> React</p>
          <p>Tailwind CSS</p>
        </div>

        {/* Backend */}
        <div className="tech-card">
          <h3><FontAwesomeIcon icon={faServer}/> Backend</h3>
          <p><FontAwesomeIcon icon={faNodeJs}/> Node.js</p>
          <p>Express.js</p>
          <p>REST APIs</p>
          <p>Redis</p>
        </div>

        {/* Databases */}
        <div className="tech-card">
          <h3><FontAwesomeIcon icon={faDatabase}/> Databases</h3>
          <p>MySQL</p>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
          <p>GraphQL</p>
        </div>

        {/* DevOps */}
        <div className="tech-card">
          <h3><FontAwesomeIcon icon={faCloud}/> DevOps</h3>
          <p><FontAwesomeIcon icon={faDocker}/> Docker</p>
          <p><FontAwesomeIcon icon={faAws}/> AWS</p>
          <p>Kubernetes</p>
          
          <p>Terraform</p>
          <p>Jenkins</p>
          <p>Linux</p>
        </div>

        {/* Tools */}
        <div className="tech-card">
          <h3><FontAwesomeIcon icon={faTools}/> Tools</h3>
          <p><FontAwesomeIcon icon={faGitAlt}/> Git</p>
          <p><FontAwesomeIcon icon={faGithub}/> GitHub</p>
          <p>Postman</p>
        </div>

        {/* Languages */}
        <div className="tech-card">
          <h3><FontAwesomeIcon icon={faCode}/> Languages</h3>
          <p><FontAwesomeIcon icon={faPython}/> Python</p>
          <p><FontAwesomeIcon icon={faJava}/> Java</p>
          <p><FontAwesomeIcon icon={faRust}/> Rust</p>
        </div>

        {/* AI / ML */}
        <div className="tech-card">
          <h3><FontAwesomeIcon icon={faBrain}/> AI / ML</h3>
          <p>TensorFlow</p>
          <p>PyTorch</p>
          <p>Scikit-learn</p>
          <p>Pandas</p>
          <p>NumPy</p>
          <p>FastAPI</p>
        </div>

        {/* Solana Blockchain */}
        <div className="tech-card">
          <h3><FontAwesomeIcon icon={faLink}/> Solana Blockchain</h3>
          <p><FontAwesomeIcon icon={faRust}/> Rust</p>
          <p>Solana CLI</p>
          <p>Anchor Framework</p>
          <p>Web3.js</p>
          <p>Smart Contracts</p>
        </div>

      </div>
    </div>
  );
};

export default TechStack;