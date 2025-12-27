import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PlayerProfile from './components/PlayerProfile';
import Home from './components/Home';
import ClubsPage from './components/ClubsPage';
import UsersPage from './components/UsersPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{padding: '16px', background: '#f8f9fa', borderBottom: '1px solid #eee', marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '24px'}}>
          <Link to="/" style={{textDecoration: 'none', color: '#1a1a1a', fontWeight: '600'}}>Home</Link>
          <Link to="/users" style={{textDecoration: 'none', color: '#8b5cf6', fontWeight: '600'}}>Joueurs</Link>
          <Link to="/clubs" style={{textDecoration: 'none', color: '#00703d', fontWeight: '600'}}>Clubs</Link>
          <Link to="/athlete" style={{textDecoration: 'none', color: '#ce1126', fontWeight: '600'}}>Athlete Profile</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/athlete" element={<PlayerProfile />} />
          <Route path="/player/:id" element={<PlayerProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
