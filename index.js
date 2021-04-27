const server = require('./src/server.js');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3333;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
})

server.start(PORT);