const express = require('express');
const mongoose = require('mongoose');
// import routes
// const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

require('dotenv').config()


// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        // useCreateIndex: true
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));


// routes middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});