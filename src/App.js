import React, { useState, useEffect } from "react";
import danLanding from "./icons/danLanding.png";
import github from "./icons/github.svg";
import instagram from "./icons/instagram.svg";
import linkedin from "./icons/linkedin.svg";
import twitter from "./icons/twitter.svg";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="control">
          <span class="loadStart">
            <span class="loadingdot">.</span>
            <span class="loadingdot">.</span>
            <span class="loadingdot">.</span>
          </span>
        </div>
      ) : (
        <main>
          {/* Landing Page */}
          <div className="landing">
            <div className="header-one">
              <div className="image">
                <img src={danLanding} alt="Danish's Image" />
              </div>
              <div className="name">
                d<span className="at"></span>n
                <span className="exclamation"></span>
                <span className="dollar"></span>
                <span className="hash"></span>
              </div>
            </div>
            <div className="header-two">
              <div className="social-icon">
                <a
                  href="https://github.com/dan10ish"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="" />
                </a>
              </div>
              <div className="social-icon">
                <a
                  href="https://www.instagram.com/dan10ish/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="" />
                </a>
              </div>
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/dan10ish/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="" />
                </a>
              </div>
              <div className="social-icon">
                <a
                  href="https://twitter.com/dan10ish"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="" />
                </a>
              </div>
            </div>
            <div className="header-three">
              <span class="mouse">
                <span class="move"></span>
              </span>
              <h2>Scroll down</h2>
            </div>
          </div>

          <hr />

          {/* About */}
          <div className="about">
            <div className="about-title">/danish/</div>
            <div className="about-content">
              <span className="hi">👋</span>, I'm a student pursuing
              mechatronics engineering and I <span className="heart">❤️</span>{" "}
              developing creative stuff
            </div>
          </div>

          <hr />

          {/* Interests */}
          <div className="interests">
            <div className="interests-title">INTERESTS</div>
            <div className="interest-list">
              <div className="interest-topic">&#62; creative coding</div>
              <div className="interest-topic">&#62; machine learning</div>
              <div className="interest-topic">&#62; game dev</div>
              <div className="interest-topic">&#62; front-end</div>
              <div className="interest-topic">&#62; music</div>
            </div>
          </div>

          <hr />

          {/* Projects */}
          <div className="projects">
            <div className="projects-title">PROJECTS</div>
            <div className="projects-topic">
              <a
                href="https://danish.dev/Galaxy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <h2>
                  {" "}
                  <span className="plink">Galaxy Generator</span>
                </h2>
              </a>
            </div>
            <div className="projects-topic">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=danish.mariana-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <h2>
                  <span className="plink">VSCode Theme</span>
                </h2>
              </a>
            </div>
            <div className="projectLoading">
              <div className="more">
                <span class="load">
                  <span class="loading-dot">.</span>
                  <span class="loading-dot">.</span>
                  <span class="loading-dot">.</span>
                </span>
                <span className="loading-text">in progress</span>
              </div>
            </div>
          </div>

          <hr />

          {/* Footer */}
          <div className="footer">
            Copyright <span className="copyright">©</span> 2023 Danish Ansari
          </div>
        </main>
      )}
    </>
  );
}
