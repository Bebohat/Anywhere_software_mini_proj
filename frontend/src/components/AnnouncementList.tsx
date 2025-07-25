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
    <div className="mt-6 space-y-4">
      {announcements.map((a) => (
        <div key={a._id} className="border p-4 rounded shadow-sm">
          <div className="flex justify-between items-center">
            <p className="font-semibold">{a.userName}</p>
            <button
              onClick={() => dispatch(deleteAnnouncement(a._id))}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
          <p className="mt-2">{a.content}</p>
          <p className="text-sm text-gray-500">{new Date(a.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementList;
