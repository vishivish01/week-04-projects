// This line imports the express library
const express = require('express');

// This initializes the web app HTTP server
const app = express();

// Handle any GET request for the '/' (root) path
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Handle any GET request for the '/ctp' path
app.get('/ctp', (req, res) => {
  res.send('Hello CTP STUDENTS!!!');
});


// Start listening for HTTP requests on port 8000
app.listen(8000, () => {
  // This function will run when the server is up and listening
  console.log('App Server started!');
});
