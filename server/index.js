const express = require('express');
const app = express();
const { token, location } = require('../config.js');
const cors = require ('cors')
const bodyParser = require('body-parser');
const request = require('request-promise')
const db = require('../db/db.js');
// const { filter } = require('bluebird');
const port = 3004;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '2MB'}));
app.use(cors());

//api connection:  https://trefle.io
app.get('/api/v1/plants', (req, res) => {
  // console.log('runs genereic')
    request(`${location}plants?page_size=2000&token=${token}`)
    .then((res) => JSON.parse(res))
    .then((data) => {
      res.send(data)
    })
    .catch((err) => console.log(err)) 
})

// search error where it doesn't pick up the id
app.get('/api/plants/:id', (req, res) => {
  // console.log('gets runs id')
  request(`https://trefle.io/api/v1/plants/${req.params.id}`).auth(null, null, true, `${token}`)
  .then((res) => JSON.parse(res))
  .then((data) => {
    res.send(JSON.stringify(data));
  })
  .catch((err) => console.log(err)) 
})

app.get('/api/v1/plants/search/:common_name', (req, res) => {
  request(`https://trefle.io/api/v1/plants/search?token=${token}&q=${req.params.common_name}`)
  .then((res) => JSON.parse(res))
  .then((data) => {
    res.send(JSON.stringify(data)) 
  })
  .catch((err) => console.log(err))
})
//     request(`${location}/plants?toxicity=${req.params.toxicity}&token=${token}`)
//     .then((res) => JSON.parse(res))
//     .then((data) => {
//       res.send(data)
//     })
//     .catch((err) => console.log(err)) 
// })

// app.get('/api/plants/:common_name', (req, res) => {
//   request(`${location}/plants?${req.params.common_name}&token=${token}`)
//   .then((res) => JSON.parse(res))
//   .then((data) => {
//     res.send(JSON.stringify(data));
//   })
//   .catch((err) => console.log(err)) 
// })



//////////////////////////////////////////////////////////////////////////////////////API SCRAPE//////////////////////////////////////////////////////////////////////////////////////////////////

// //query to division
// //tables: division
// app.get('/api/divisions', (req, res) => {
//   request('https://trefle.io/api/divisions').auth(null, null, true, `${token}`)
//   .then((res) => JSON.parse(res))
//   .then((data) => {
//     data.map((each) => {
//         db.insertDivision(each)
//     })
//     res.send('division insert complete');
//   })
//   .catch((err) => console.log(err)) 
// })


// //query to families
// //tables: family
// app.get('/api/families', (req, res) => {
//   request('https://trefle.io/api/families').auth(null, null, true, `${token}`)
//   .then((res) => JSON.parse(res))
//   .then((data) => {
//     data.map((each) => {
//       db.insertFamily(each)
//   })
//   res.send('family insert complete');
//   })
//   .catch((err) => console.log(err)) 
// })

// //query to genus
// //tables: orders, class 
// app.get('/api/genuses', (req, res) => {
//   request('https://trefle.io/api/genuses').auth(null, null, true, `${token}`)
//   .then((res) => JSON.parse(res))
//   .then((data) => {
//     data.map((each) => {
//       db.insertGenus(each)
//   })
//   res.send('genus insert complete');
//   })
//   .catch((err) => console.log(err)) 
// })

//query to species
//tables: species, specifications[ max_height_base_age, mature_height], soils_adaptation, seed, propagation, products, growth [temp_min, root_depth, preciptiation min&max, planting density min&max], fruit_or_seed, foliage, flower

// app.get('/api/species', (req, res) => {
//   request('https://trefle.io/api/species').auth(null, null, true, `${token}`)
//   .then((res) => JSON.parse(res))
//   .then((data) => {
//     data.map((each) => {
//       db.insertPlant(each)
//   })
//   res.send(data)
//   res.send('plant insert complete');
//   })
//   .catch((err) => console.log(err)) 
// })



app.listen(port, () => {
  console.log(`listening on ${port}`);
})