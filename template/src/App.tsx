import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Routes from './router/Routes';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul className="App-links">
            <li>
              <Link to="/" className="App-link-header">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="App-link-header">
                About
              </Link>
            </li>
          </ul>
        </header>
        <Routes />
      </div>
    </Router>
  );
};

export default App;
