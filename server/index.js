const express = require('express');
const app = express();
const cors = require ('cors')
const bodyParser = require('body-parser');
const token = require('../config.js')
const request = require('request-promise')
// const db = require('../db/db.js')
const port = 3004;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//api connection:  https://trefle.io
app.get('/api/plants', (req, res) => {
  request('https://trefle.io/api/plants').auth(null, null, true, `${token}`)
  .then((res) => JSON.parse(res))
  .then((data) => {
    res.send(JSON.stringify(data));
  })
  .catch((err) => console.log(err)) 
})


app.get('/api/plants/:id', (req, res) => {
  request(`https://trefle.io/api/plants/${req.params.id}`).auth(null, null, true, `${token}`)
  .then((res) => JSON.parse(res))
  .then((data) => {
    res.send(JSON.stringify(data));
  })
  .catch((err) => console.log(err)) 
})

// app.post('/api/plant/:id' , (req, res) => {

//   //get the data 
//   //insert it
//   const newPlant = {
//     id: req.body.id,
//     scientific_name: req.body.scientific_name,
//     native_status: req.body.native_status,
//     family_common_name: req.body.family_common_name,
//     duration: req.body.duration,
//     common_name: req.body.common_name,

//   };
// })

//create an api get function as a helper, call it to get the data then post the data?
//how to connect the database to the server whilst generating the tables?


app.listen(port, () => {
  console.log(`listening on ${port}`);
})