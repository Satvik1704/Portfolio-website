import React from "react";
import "../components/projects.css";

const Projects = () => {
  return (
    <section className="projects-section">

      <h2 className="heading">Projects</h2>

      <div className="projects-container">

        {/* Serverless Weather API */}
        <div className="project-card">
          <h3>Serverless Weather API</h3>

          <p>
            Serverless weather forecasting system built using AWS services.
            Provides fast real-time weather data through scalable cloud APIs.
          </p>

          <div className="tags">
            <span>AWS</span>
            <span>Lambda</span>
            <span>API Gateway</span>
            <span>React</span>
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Satvik1704/Serverless_weather-application" className="btn code">📄 Code</a>
            <a href="http://weather-react-serverless.s3-website-us-east-1.amazonaws.com/" className="btn live">🔗 Live</a>
          </div>
        </div>


        {/* Multi Tenant SaaS */}
        <div className="project-card">
          <h3>Multi-Tenant SaaS Workspace</h3>

          <p>
            Scalable SaaS platform supporting multiple organizations with isolated
            tenant data, analytics dashboard and document management.
          </p>

          <div className="tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Redis</span>
            <span>Flask</span>
          </div>

          <div className="project-buttons">
            <a href="#" className="btn code">📄 Code</a>
            <a href="#" className="btn live">🔗 Live</a>
          </div>
        </div>


        {/* Solana Project */}
        <div className="project-card">
          <h3>Solana BountyChain</h3>

          <p>
            Decentralized bounty platform where users post tasks and reward
            contributors using Solana smart contracts.
          </p>

          <div className="tags">
            <span>Solana</span>
            <span>Rust</span>
            <span>Anchor</span>
            <span>Web3.js</span>
          </div>

          <div className="project-buttons">
            <a href="#" className="btn code">📄 Code</a>
            <a href="#" className="btn live">🔗 Live</a>
          </div>
        </div>


        {/* Gesture Project */}
        <div className="project-card">
          <h3>Ninja Gesture Control</h3>

          <p>
            AI powered hand-gesture recognition system inspired by Naruto
            hand signs allowing users to interact with applications in real time.
          </p>

          <div className="tags">
            <span>React</span>
            <span>TensorFlow.js</span>
            <span>MediaPipe</span>
            <span>Three.js</span>
            <span>OpenCV</span>
          </div>

          <div className="project-buttons">
            <a href="#" className="btn code">📄 Code</a>
            <a href="#" className="btn live">🔗 Live</a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Projects;