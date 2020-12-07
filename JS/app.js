const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
