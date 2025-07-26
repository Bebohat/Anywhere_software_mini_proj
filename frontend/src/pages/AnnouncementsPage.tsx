import React from 'react';
import AnnouncementList from '../components/AnnouncementList';
import Sidebar from '../components/Sidebar';

const AnnouncementsPage: React.FC = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content coligo-page-main">
        <header className="coligo-page-header">
          <div className="coligo-page-title-section">
            <h1 className="coligo-page-title">Announcements</h1>
            <p className="coligo-page-subtitle">Stay updated with the latest news and updates</p>
          </div>
        </header>
        <div className="coligo-page-content">
          <div className="coligo-content-card">
            <AnnouncementList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnnouncementsPage;
