import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AllPosts from './components/AllPosts';
import Login from './components/Login';
import CreatePost from './components/CreatePost'; // Assuming this is for post creation
import Home from './components/Home'; // Ensure this component exists

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create-post">+</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        {/* Routes Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
