import './App.css';

import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Services';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <div className="logo"> Logo.png</div>

          <div className="menu" onClick={toggleMenu}>
            <div className="menuItem"></div>
            <div className="menuItem"></div>
            <div className="menuItem"></div>
          </div>

          <ul className={isMenuOpen ? "navbar-links active" : "navbar-links"}>
            <NavLink to="/about" onClick={toggleMenu}>
              <li> About</li>
            </NavLink>

            <NavLink to="/links" onClick={toggleMenu}>
              <li> Links</li>
            </NavLink>

            <NavLink to="/contact" onClick={toggleMenu}>
              <li> Contact Us</li>
            </NavLink>

            <NavLink to="/services" onClick={toggleMenu}>
              <li> Services</li>
            </NavLink>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}
