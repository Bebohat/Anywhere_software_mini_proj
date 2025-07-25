const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Express app
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json()); 

// Middleware to log requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes

const quizRoutes = require('./routes/quizRoutes');
const announcementRoutes = require('./routes/announcementRoutes');

app.use('/api/quizzes', quizRoutes);
app.use('/api/announcements', announcementRoutes);


// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listening on port', process.env.PORT);
    });
})
.catch((error) => {
    console.log(error);
});
