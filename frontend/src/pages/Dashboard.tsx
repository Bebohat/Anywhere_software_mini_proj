import React from 'react';
import { useAppDispatch } from '../hooks';
import { logout } from '../features/auth/authSlice';
import AnnouncementForm from '../components/AnnouncementForm';
import AnnouncementList from '../components/AnnouncementList';
import QuizForm from '../components/QuizForm';
import QuizList from '../components/QuizList';
import Sidebar from '../components/Sidebar';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
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
          <h1>{t('dashboard')}</h1>
          <button onClick={handleLogout} className="danger">
            {t('logout')}
          </button>
        </header>

        <section>
          <h2>{t('newAnnouncement')}</h2>
          <AnnouncementForm />
        </section>

        <section>
          <h2>{t('announcements')}</h2>
          <AnnouncementList />
        </section>

        <section>
          <h2>{t('newQuiz')}</h2>
          <QuizForm />
        </section>

        <section>
          <h2>{t('allQuizzes')}</h2>
          <QuizList />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
