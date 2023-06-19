const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('./config/database');

database();

app.use(bodyParser.json());

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
