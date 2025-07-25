import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AnnouncementsPage from './pages/AnnouncementsPage'; 
import requireAuth from './hoc/requireAuth';
import QuizzesPage from './pages/QuizzesPage';

const ProtectedDashboard = requireAuth(Dashboard);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
