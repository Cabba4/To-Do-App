const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This project was completed by Anmol Arora and Elina Widdowson'});
});

module.exports = router;
