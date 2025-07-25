const Announcement = require('../models/announcementModel');

const announcementController = {
  getAllAnnouncements: async (req, res) => {
    try {
      const announcements = await Announcement.find().sort({ createdAt: -1 });
      res.status(200).json({ success: true, announcements });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  createAnnouncement: async (req, res) => {
    try {
      const { userName, content } = req.body;

      if (!userName || !content) {
        return res.status(400).json({ success: false, message: 'userName and content are required' });
      }

      const newAnnouncement = new Announcement({ userName, content });
      await newAnnouncement.save();

      res.status(201).json({ success: true, message: 'Announcement created', newAnnouncement });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  updateAnnouncement: async (req, res) => {
    try {
      const updatedAnnouncement = await Announcement.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedAnnouncement) {
        return res.status(404).json({ success: false, message: 'Announcement not found' });
      }

      res.status(200).json({ success: true, message: 'Announcement updated', updatedAnnouncement });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  deleteAnnouncement: async (req, res) => {
    try {
      const deleted = await Announcement.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ success: false, message: 'Announcement not found' });

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = announcementController;
