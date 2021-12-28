const express = require('express');

const info = require('./info');

const random = require('./random');

const router = express.Router();

const task = require('fake-todos');


router.get('/', (req, res) => {
  var work = task(5);
  res.json({
    message: work
  });
});

router.use('/info', info);
router.use('/task/random', random);

module.exports = router;
