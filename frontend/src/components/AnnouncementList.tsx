// src/components/AnnouncementList.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchAnnouncements, deleteAnnouncement } from '../features/announcements/announcementSlice';

const AnnouncementList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list: announcements, loading, error } = useAppSelector((state) => state.announcements);

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);

  if (loading) return <p>Loading announcements...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="announcement-list coligo-announcement-list">
      {announcements.map((a) => (
        <div key={a._id} className="announcement-card coligo-card-item">
          <div className="announcement-header">
            <span className="announcement-author">{a.userName}</span>
            <button
              onClick={() => dispatch(deleteAnnouncement(a._id))}
              className="text-sm text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
          <div className="coligo-announcement-inner">
            <p className="announcement-content">{a.content}</p>
            <p className="announcement-date">{new Date(a.createdAt).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementList;
