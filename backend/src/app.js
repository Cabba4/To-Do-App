const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const task = require('fake-todos');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  var work = task(10);
  res.json({
    message: work
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
