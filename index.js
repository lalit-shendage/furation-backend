const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes= require('./routes/userRoutes');
const itemRoutes=require('./routes/itemRoutes');
const database = require('./config/database');


database();

// parse incoming request bodies
app.use(bodyParser.json());

app.use(`/api`,userRoutes);
app.use(`/api/items`,itemRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
