const express = require('express');

const emojis = require('./emojis');

const router = express.Router();

const task = require('fake-todos');
var work = task(5);

router.get('/', (req, res) => {
  res.json({
    message: work
  });
});

router.use('/emojis', emojis);

module.exports = router;
