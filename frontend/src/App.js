import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Login,Signup} from './pages/login';
import {VirtualLibrary} from './pages/pubbook';
import {Home} from './pages/Homepage';
import './App.css';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to ="/freelibrary">book</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> {/* homepage route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/freelibrary" element={<VirtualLibrary />} />
      </Routes>
    </Router>
  
  );
}

export default App;
