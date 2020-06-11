const express = require('express');
const app = express();
const cors = require ('cors')
const bodyParser = require('body-parser');
const token = require('../config.js')
const request = require('request-promise')
const db = require('../db/db.js')
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

////////////////////////////////////////////////////////API SCRAPE/////////////////////////////////////////////////////////////////////////////////////////////////

//query to division
//tables: division
app.get('/api/divisions', (req, res) => {
  request('https://trefle.io/api/divisions').auth(null, null, true, `${token}`)
  .then((res) => JSON.parse(res))
  .then((data) => {
    data.map((each) => {
        db.insertDivision(each)
    })
    res.send('division insert complete');
  })
  .catch((err) => console.log(err)) 
})


//query to families
//tables: family
app.get('/api/families', (req, res) => {
  request('https://trefle.io/api/families').auth(null, null, true, `${token}`)
  .then((res) => JSON.parse(res))
  .then((data) => {
    data.map((each) => {
      db.insertFamily(each)
  })
  res.send('family insert complete');
  })
  .catch((err) => console.log(err)) 
})

//query to genus
//tables: orders, class 
app.get('/api/genuses', (req, res) => {
  request('https://trefle.io/api/genuses').auth(null, null, true, `${token}`)
  .then((res) => JSON.parse(res))
  .then((data) => {
    data.map((each) => {
      db.insertGenus(each)
  })
  res.send('genus insert complete');
  })
  .catch((err) => console.log(err)) 
})

//query to species
//tables: species, specifications[ max_height_base_age, mature_height], soils_adaptation, seed, propagation, products, growth [temp_min, root_depth, preciptiation min&max, planting density min&max], fruit_or_seed, foliage, flower

app.get('/api/species', (req, res) => {
  request('https://trefle.io/api/species').auth(null, null, true, `${token}`)
  .then((res) => JSON.parse(res))
  .then((data) => {
    data.map((each) => {
      db.insertSpecies(each)
  })
  res.send('species insert complete');
  })
  .catch((err) => console.log(err)) 
})



app.listen(port, () => {
  console.log(`listening on ${port}`);
})