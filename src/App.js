import Particles, { initParticlesEngine } from "@tsparticles/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { loadFull } from "tsparticles";
import "./App.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboard";
import Experience from "./components/Experience";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sider";
import particlesOptions from "./particles.json";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  return (
    <div className="App">
      {init && <Particles options={particlesOptions} />}
      <Router>
        <NavigationBar />
        <div className="body">
          <Routes>
            <Route exact path="portfolio/" element={<Dashboard />} />
            <Route exact path="portfolio/about" element={<About />} />
            <Route exact path="portfolio/projects" element={<Projects />} />
            <Route exact path="portfolio/experience" element={<Experience />} />
            <Route exact path="portfolio/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
      <Sidebar />
    </div>
  );
}

export default App;
