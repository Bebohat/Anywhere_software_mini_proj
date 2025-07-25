import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/announcements">Announcements</Link>
      <Link to="/quizzes">Quizzes</Link>
    </nav>
  );
};

export default Sidebar;
