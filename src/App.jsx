/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#000");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const transitionProgress = Math.min(scrollY / 2000, 1);

      let newColor;
      if (transitionProgress < 0.5) {
        const value = Math.round(255 - transitionProgress * 2 * 127);
        newColor = `rgb(${value}, ${value}, ${value})`;
      } else {
        const value = Math.round(128 - (transitionProgress - 0.5) * 2 * 128);
        newColor = `rgb(${value}, ${value}, ${value})`;
      }

      setBackgroundColor(newColor);
      setTextColor(transitionProgress > 0.3 ? "#fff" : "#000");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = encodeURIComponent(searchQuery);
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
  };

  return (
    <div className="app" style={{ backgroundColor, color: textColor }}>
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </div>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>
      </nav>
      <header id="home" className="header">
        <h1>Quantum Physics Portfolio</h1>
        <p>Exploring the Mysteries of the Quantum Realm</p>
      </header>
      <main className="main-content">
        <section id="about" className="section">
          <h2>About Quantum Physics</h2>
          <p>
            Quantum physics is the fundamental theory of nature at small scales
            and energy levels of atoms and subatomic particles. It describes the
            dual wave-particle nature of matter and energy, the uncertainty
            principle, and quantum entanglement.
          </p>
        </section>
        <section id="research" className="section">
          <h2>Research Areas</h2>
          <div className="research-grid">
            <div className="research-card">
              <h3>Quantum Computing</h3>
              <p>
                Exploring quantum algorithms and quantum information processing.
              </p>
            </div>
            <div className="research-card">
              <h3>Quantum Entanglement</h3>
              <p>
                Investigating non-local quantum correlations and their
                applications.
              </p>
            </div>
            <div className="research-card">
              <h3>Quantum Cryptography</h3>
              <p>
                Developing secure communication using quantum mechanical
                principles.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="contact-info">
            <p>Email: quantum@example.com</p>
            <p>Location: Quantum Research Center</p>
            <p>Phone: (+xx) xxx-xxxx</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Quantum Physics Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
