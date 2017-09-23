const express = require('express');
const app = express();

// Here we are importing a local file
const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


// Use a route parameter to hold the zipcode value
app.get('/zip/:zipcode', (req, res) => {
  const records = zipdb.byZip[req.params.zipcode];
  if(records===undefined){
    res.sendStatus(404);
  }
  else {
    res.json(records);
  }
});


// Use a route parameter to hold the cityname value
app.get('/city/:cityname', (req, res) => {
  // NOTE: the byCity map only has citynames in all CAPS.
  //  so zipdb.byCity['SPRINGFIELD'] does exists
  //  and zipdb.byCity['springfield'] does NOT exist
  const records = zipdb.byCity[req.params.cityname];
  if(records===undefined){
    res.sendStatus(404);
  }
  else {
    res.json(records);
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
