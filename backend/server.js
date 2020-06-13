// Libraries required for the app.
const express = require('express');
const cors = require('cors');
// Library to connect with MongoDB.
const mongoose = require('mongoose');

require('dotenv').config();

// 'Create' the express server.
const app = express();
// We execute in a certain port.
const port = process.env.PORT || 5000;

// Middleware for FrontEnd and BackEnd.
app.use(cors());
// JSON parser
app.use(express.json());

// Get the connection URI from .env file!
const uri = process.env.ATLAS_URI;
// Create a connection using the URI const.
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
// Open the connection, if everything works, shows a message.
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

const exercisesRouter = require('./routes/exercies');
const usersRouter = require('./routes/users');

// Allow users access to /exercises url.
app.use('/exercises', exercisesRouter);
// Allow users access to /users url.
app.use('/users', usersRouter);

// Starts the server!
app.listen(port, () =>{
    console.log(`SERVER IS RUNNING ON PORT: ${port}`);
});

// To start the server: nodemon server!