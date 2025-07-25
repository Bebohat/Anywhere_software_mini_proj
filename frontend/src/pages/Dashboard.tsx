 import React from 'react';
import { useAppDispatch } from '../hooks';
import { logout } from '../features/auth/authSlice';
import AnnouncementForm from '../components/AnnouncementForm';
import AnnouncementList from '../components/AnnouncementList';
import QuizForm from '../components/QuizForm';
import QuizList from '../components/QuizList';
import Sidebar from '../components/Sidebar'; // <- Sidebar component

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="dashboard-container" style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar Section */}
      <aside style={{ flex: '0 0 200px', backgroundColor: '#1a1a1a', padding: '1rem' }}>
        <Sidebar />
      </aside>

      {/* Main Content Section */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </header>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Post New Announcement</h2>
          <AnnouncementForm />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          <AnnouncementList />
        </section>

        <section className="my-10">
          <h2 className="text-xl font-semibold mb-4">Create New Quiz</h2>
          <QuizForm />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">All Quizzes</h2>
          <QuizList />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;