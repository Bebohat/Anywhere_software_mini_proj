import "./Sidebar.css";
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/announcements">Announcements</Link>
       <Link to="/quizzes">Quizzes</Link>
    </nav>
  );
};

export default Sidebar;
