const express = require('express');
const app = express();
const cors = require ('cors')
const bodyParser = require('body-parser');
const token = require('../config.js')
const request = require('request-promise')
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

app.get('/api/plant')

app.listen(port, () => {
  console.log(`listening on ${port}`);
})