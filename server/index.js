const express = require ('express');
const cors = require('cors');
const config = require('./config');
const router = require('./routes/gameRoutes')
const mongoose = require('mongoose');

// Create an Express server
const server = express();

server.use(cors());
server.use(express.json());

// Mount /api onto our server
server.use('/api', router);

// Connect to MongoDB database

mongoose.connect(config.databaseURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then (() => console. log('Connected to MongoDB'))
    . catch ((err) => console.error ('Error connecting to MongoDB: ', err));


// start server
server.listen(config.PORT, () => {
    console.log("Server started on PORT " + config.PORT);
});