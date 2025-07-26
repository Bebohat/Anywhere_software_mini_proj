// src/components/AnnouncementList.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchAnnouncements, deleteAnnouncement } from '../features/announcements/announcementSlice';
import { useTranslation } from 'react-i18next';

const AnnouncementList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { list: announcements, loading, error } = useAppSelector((state) => state.announcements);

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);

  if (loading) return <p>{t('loadingText')}</p>;
  if (error) return <p className="text-red-600">{t('errorText')}: {error}</p>;

  return (
    <div className="announcement-list coligo-announcement-list">
      {announcements.map((a, index) => {
        const colors = ['coligo-yellow-item', 'coligo-blue-item', 'coligo-purple-item'];
        const colorClass = colors[index % colors.length];
        const initials = a.userName.split(' ').map(n => n[0]).join('').toUpperCase();
        
        return (
          <div key={a._id} className={`announcement-card coligo-card-item ${colorClass}`}>
            <div className="coligo-announcement-avatar">
              {initials}
            </div>
            <div className="coligo-item-content">
              <div className="coligo-announcement-header">
                <h4 className="coligo-item-title">{a.userName}</h4>
                <span className="coligo-announcement-time">
                  {new Date(a.createdAt).toLocaleDateString()} • {new Date(a.createdAt).toLocaleTimeString()}
                </span>
              </div>
              <p className="coligo-announcement-text">{a.content}</p>
              <div className="coligo-engagement">
                <span className="coligo-engagement-item">👍 12</span>
                <span className="coligo-engagement-item">💬 3</span>
              </div>
            </div>
            <div className="coligo-item-actions">
              <button
                onClick={() => dispatch(deleteAnnouncement(a._id))}
                className="coligo-delete-btn"
              >
                {t('delete')}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnnouncementList;
