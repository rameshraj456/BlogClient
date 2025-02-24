import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AllPosts from './components/AllPosts';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <div className="nav-search">
            <input type='text' placeholder='Search...' className="search-input" />
            <button className="add-btn">+</button>
          </div>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>

        {/* Routes Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
        </Routes>
      </div>

      <style jsx>{`
        .navbar {
          background:  #007bff;
          display: flex;
          justify-content: space-around;
          padding: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          align-items: center;
        }
        .nav-link {
          text-decoration: none;
          color: #333;
          font-weight: bold;
          padding: 8px 12px;
          border-radius: 5px;
          transition: background 0.3s ease;
        }
        .nav-link:hover {
          background: #ddd;
        }
        .nav-search {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .search-input {
          padding: 5px;
          width: 120px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .add-btn {
          border-radius: 50%;
          width: 30px;
          height: 30px;
          border: none;
          background: #007bff;
          color: white;
          font-size: 20px;
          cursor: pointer;
       
        }
        
      `}</style>
    </Router>
  );
}

export default App;
