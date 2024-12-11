import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Chatbot from './Components/Chatbot';
import Home from './Components/Home';
import About from './Components/About';
import Help from './Components/Help';
import './App.css';

function App() {
    const location = useLocation(); // Mendapatkan lokasi saat ini

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                </ul>
            </nav>

            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={400}>
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/chatbot" element={<Chatbot />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

// Bungkus App dengan Router
const MainApp = () => (
    <Router>
        <App />
    </Router>
);

export default MainApp;