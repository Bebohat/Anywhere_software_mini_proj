const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: [true, 'QUESTION TEXT IS MISSING'],
  },
  answer1: {
    type: String,
    required: [true, 'ANSWER 1 IS MISSING'],
  },
  answer2: {
    type: String,
    required: [true, 'ANSWER 2 IS MISSING'],
  },
  answer3: {
    type: String,
    required: [true, 'ANSWER 3 IS MISSING'],
  },
  answer4: {
    type: String,
    required: [true, 'ANSWER 4 IS MISSING'],
  },
  correctAnswer: {
    type: String,
    required: [true, 'CORRECT ANSWER IS MISSING'],
    validate: {
      validator: function (v) {
        return [this.answer1, this.answer2, this.answer3, this.answer4].includes(v);
      },
      message: () => `Correct answer must match one of the 4 answers`,
    },
  },
});

const quizSchema = new mongoose.Schema(
  {
    course_name: {
      type: String,
      required: [true, 'COURSE NAME IS MISSING'],
    },
    questions: {
      type: [questionSchema],
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: () => `At least one question is required`,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quiz', quizSchema);

