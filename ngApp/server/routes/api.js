const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  // See this by going to http://localhost:3000/api
  res.send('api works');
});

module.exports = router;
