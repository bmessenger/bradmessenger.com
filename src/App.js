import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {BrowserRouter as Router, Routes, Route, NavLink, Link} from "react-router-dom";
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Work } from './components/work/Work';
import m from './assets/m.jpg';

library.add(faEnvelope,faLinkedinIn,faGithub);

function App() {
  return (
    <div className="page">
        
        <Router>
          <aside class="mb-5 mb-nd-0">
            <div>
              <Link to="/"><img src={m} width="50" height="50" alt="Brad Messenger" className="brand"/></Link>
            </div>
            <nav>
              <ul className="d-flex flex-md-column flex-row">
                <li class="order-2 order-md-0"><NavLink className={({ isActive }) => isActive? "active": ''} to="/work/" >Work</NavLink></li>
                <li class="order-1"><NavLink className={({ isActive }) => isActive? "active": ''} to="/about/" >About</NavLink></li>
                <li class="order-0 order-md-2"><NavLink className={({ isActive }) => isActive? "active": ''} to="/" >Home</NavLink></li>
              </ul>
            </nav>
          </aside>
          
          <main className="d-flex flex-grow">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/work" element={<Work />} />
            </Routes>
          </main>
        </Router>
        
    </div>
  );
}

export default App;