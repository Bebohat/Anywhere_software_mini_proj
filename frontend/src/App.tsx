import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AnnouncementsPage from './pages/AnnouncementsPage'; 
import requireAuth from './hoc/requireAuth';
import QuizzesPage from './pages/QuizzesPage';

const ProtectedDashboard = requireAuth(Dashboard);
const ProtectedAnnouncements = requireAuth(AnnouncementsPage);
const ProtectedQuizzes = requireAuth(QuizzesPage);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
        <Route path="/announcements" element={<ProtectedAnnouncements />} />
        <Route path="/quizzes" element={<ProtectedQuizzes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
