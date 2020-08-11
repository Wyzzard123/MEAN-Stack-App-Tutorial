// For express server
const express = require('express');
// For handling forms
const bodyParser = require('body-parser');
// For joining paths
const path = require('path');

// This file must be created
const api = require('./server/routes/api');

// Specify a port for the server
const port = 3000;

// Create an instance of Express
const app = express()

// Specify folder where all the angular code is placed (the dist folder)
app.use(express.static(path.join(__dirname, 'dist')));

// Body parser middleware code - parses text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
// Parses text as JSON and allows JSON like experience.
app.use(bodyParser.json());

// For any other route besides /api, page will render index.html file in the dist folder
app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'dist/ngApp/index.html'));
});

app.listen(port, function() {
  console.log("Server running on localhost:" + port);
})
