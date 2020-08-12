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

router.get('/video/:id', function(req, res){
  console.log("Get request for a single video.")
  // See this by going to http://localhost:3000/api
  Video.findById(req.params.id)
    .exec(function(err, video){
      if (err) {
        console.log("Error retrieving video: " + err)
      } else {
        res.json(video);
      }
    });
});

router.post('/video', function(req, res){
  console.log("Post a video");
  var newVideo = new Video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description =req.body.description;

  // Inserts video into database
  newVideo.save(function(err, insertedVideo) {
    if(err) {
      console.log("Error saving video:" + err);
    } else {
      res.json(insertedVideo);
    }
  })
})

router.put('/video/:id', function(req, res){
  console.log("Update a video.");
  Video.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      url: req.body.url,
      description: req.body.description
    }
  },
  {
      new: true
  },
  function(err, updatedVideo){
    if(err) {
      res.send("Error updating video");
    } else {
      res.json(updatedVideo);
    }
  }
  )
});

router.delete('/video/:id', function(req, res) {
  console.log("Deleting a video.");
  Video.findByIdAndRemove(req.params.id, function(err, deletedVideo) {
    if(err) {
      res.send("Error deleting video: " + err);
    } else {
      res.json(deletedVideo);
    }
  });
});

module.exports = router;
