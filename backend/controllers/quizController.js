const Quiz = require('../models/quizModel');

const quizController = {
  getAllQuizzes: async (req, res) => {
    try {
      const quizzes = await Quiz.find().sort({ createdAt: -1 });
      res.status(200).json({ success: true, quizzes });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getQuizById: async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id);
      if (!quiz) return res.status(404).json({ success: false, message: 'Quiz not found' });

      res.status(200).json({ success: true, quiz });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  createQuiz: async (req, res) => {
    try {
      const newQuiz = new Quiz(req.body);
      await newQuiz.save();
      res.status(201).json({ success: true, message: 'Quiz created', newQuiz });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Quiz creation failed', error: error.message });
    }
  },

  updateQuiz: async (req, res) => {
    try {
      const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedQuiz) return res.status(404).json({ success: false, message: 'Quiz not found' });

      res.status(200).json({ success: true, message: 'Quiz updated', updatedQuiz });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Update failed', error: error.message });
    }
  },

  deleteQuiz: async (req, res) => {
    try {
      const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
      if (!deletedQuiz) return res.status(404).json({ success: false, message: 'Quiz not found' });

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ success: false, message: 'Delete failed', error: error.message });
    }
  },
};

module.exports = quizController;
