import React, { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { createAnnouncement } from '../features/announcements/announcementSlice';

const AnnouncementForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !content) return;

    dispatch(createAnnouncement({ userName, content }));
    setUserName('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your name"
        className="border p-2 w-full"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <textarea
        placeholder="Announcement"
        className="border p-2 w-full"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Post Announcement
      </button>
    </form>
  );
};

export default AnnouncementForm;
