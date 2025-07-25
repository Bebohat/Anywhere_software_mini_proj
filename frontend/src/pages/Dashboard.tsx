import React from 'react';
import { useAppDispatch } from '../hooks';
import { logout } from '../features/auth/authSlice';
import AnnouncementForm from '../components/AnnouncementForm';
import AnnouncementList from '../components/AnnouncementList';
import QuizForm from '../components/QuizForm';
import QuizList from '../components/QuizList';
import Sidebar from '../components/Sidebar'; 

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
   <div className="layout">
  <aside className="sidebar">
    <Sidebar />
  </aside>
  <main className="main-content">
        <header>
          <h1>Dashboard</h1>
          <button onClick={handleLogout} className="danger">Logout</button>
        </header>

        <section>
          <h2>Post New Announcement</h2>
          <AnnouncementForm />
        </section>

        <section>
          <h2>Announcements</h2>
          <AnnouncementList />
        </section>

        <section>
          <h2>Create New Quiz</h2>
          <QuizForm />
        </section>

        <section>
          <h2>All Quizzes</h2>
          <QuizList />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
