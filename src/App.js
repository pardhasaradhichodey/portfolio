import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactUs from './components/ContactUs';

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
            {init && <Particles options={particlesOptions}/>}
            <Router>
    <NavigationBar />
      <div className='body'>
      <Routes>
        <Route exact path="portfolio/" element={<Dashboard />} />
        <Route exact path="portfolio/about" element={<About />} />
        <Route exact path="portfolio/projects" element={<Projects />} />
        <Route exact path="portfolio/experience" element={<Experience />} />
        <Route exact path="portfolio/contact" element={<ContactUs />} />
      </Routes>
      </div>
    </Router>
        </div>
    );
}

export default App;
