import "./App.css";
import "./header.js";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";

// Animate On Scroll
AOS.init({
  offset: 50,
  once: true,
  duration: 400,
});

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="control">
          <span class="loadStart">
            <span class="loadingdot">.</span>
            <span class="loadingdot">.</span>
            <span class="loadingdot">.</span>
          </span>
          <div className="scroll"></div>
          <div className="controlText">
            Tap the Laptop 
            <br />
            Scroll down the screen
            <br />
            Move the Laptop in any direction
          </div>
        </div>
      ) : (
        <div className="App">
          {/* Header */}
          <header>
            <p className="header-text">
              d<span className="at"></span>n
              <span className="exclamation"></span>
              <span className="dollar"></span>
              <span className="hash"></span>
            </p>
          </header>

          <div className="void">
            {/* Landing */}
            <div className="landing" data-aos="fade-up">
              <div className="dictionary">/danish/</div>
              <div className="description">
                <p>
                  <span className="hi">👋</span>, I'm a student pursuing
                  mechatronics engineering and I{" "}
                  <span className="heart">❤️</span> developing creative stuff
                </p>
              </div>
            </div>

            <hr data-aos="fade-up" />

            <div className="interest">
              {/* Interests */}
              <div className="heading" data-aos="fade-up">
                INTERESTS
              </div>
              <hr data-aos="fade-up" />
              <div className="interests" data-aos="fade-up">
                <div className="interest-topic">&#62; creative coding</div>
                <div className="interest-topic">&#62; game dev</div>
                <div className="interest-topic">&#62; front-end</div>
                <div className="interest-topic">&#62; problem solving</div>
                <div className="interest-topic">&#62; music</div>
              </div>
            </div>

            <hr data-aos="fade-up" />

            <div className="project">
              {/* Projects */}
              <div className="heading" data-aos="fade-up">
                PROJECTS{" "}
                <span className="github">
                  <a
                    href="https://github.com/dan10ish"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                </span>
              </div>
              <hr data-aos="fade-up" />
              <div className="projects" data-aos="fade-up">
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
            </div>

            <hr data-aos="fade-up" />

            <div className="cont">
              {/* Contact */}
              <div className="heading" data-aos="fade-up">
                CONTACT
              </div>
              <hr data-aos="fade-up" />
              <div className="contact" data-aos="fade-up">
                <div className="contact-instagram">
                  <a
                    href="https://www.instagram.com/dan10ish"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
                <div className="contact-twitter">
                  <a
                    href="https://twitter.com/dan10ish"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
                <div className="contact-snapchat">
                  <a
                    href="https://www.snapchat.com/add/dan10ish"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Snapchat
                  </a>
                </div>
                <div className="contact-linkedin">
                  <a
                    href="https://www.linkedin.com/in/dan10ish/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <hr data-aos="fade-up" />

            {/* Footer */}
            <div className="footer">
              Copyright <span className="copyright">©</span> 2023 Danish Ansari
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
