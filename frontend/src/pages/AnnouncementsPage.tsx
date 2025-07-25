import React from 'react';
import AnnouncementList from '../components/AnnouncementList';

const AnnouncementsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Announcements</h1>
      <AnnouncementList />
    </div>
  );
};

export default AnnouncementsPage;
