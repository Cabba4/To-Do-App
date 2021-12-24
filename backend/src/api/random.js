const express = require('express');
var task = require('fake-todos')

//var work = task(1);

const router = express.Router();


router.get('/', (req, res) => {
var work = task(1);  
res.json({
    message: work
  });
});

module.exports = router;
