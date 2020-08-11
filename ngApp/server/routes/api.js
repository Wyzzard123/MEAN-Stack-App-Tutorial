require('dotenv').config()
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');


require('dotenv').config()
mongo_db_user = process.env.MONGODB_USER;
mongo_db_password = process.env.MONGODB_PASSWORD;
const db = `mongodb://${mongo_db_user}:${mongo_db_password}@localhost:27017/videoplayer`

//To avoid any warnings
mongoose.Promise = global.Promise;

// Connect and log any errors
mongoose.connect(db, function(err) {
  if (err) {
    console.error("Error! " + err);
    console.log(mongo_db_user, mongo_db_password)
  }
});

router.get('/', function(req, res){
  // See this by going to http://localhost:3000/api
  res.send('api works');
});

router.get('/videos', function(req, res){
  console.log("Get request for all videos.")
  // See this by going to http://localhost:3000/api
  Video.find({})
    .exec(function(err, videos){
      if (err) {
        console.log("Error retrieving videos: " + err)
      } else {
        res.json(videos);
      }
    });
});

module.exports = router;
