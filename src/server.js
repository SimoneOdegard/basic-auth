'use strict';

// 3rd Party Resources
const express = require('express');

const routes = require('./routes/routes.js');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.send("hello world");
});

app.use(routes);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up: ${port}`));
  }
}