const request = require('request');
const config = require('../config.js');


getAPIdata = (callback) => {
  let options = {
    url: `https://trefle.io/api/plants`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  callback = (err, res, body) => {
    if (err) {
      res.statusCode === 404
    } else {
      const info = JSON.parse(body)
      console.log(info);
    }
  }
  request(options, callback)
}
  // .then((res) => res.json())
  // .then((data) => {
  //     slug: data.slug,
  //     scientific_name: data.scientific_name,
  //     link: data.link,
  //     id: data.id,
  //     complete_data: data.complete_data,
  //     common_name: data.common_name
  // })
  // .catch ((err) => {
  //   console.log(err);
  // }
exports.module.getAPIdata = getAPIdata;