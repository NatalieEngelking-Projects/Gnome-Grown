const { Pool, Client } = require('pg');

const pool = new Pool({
  "user": "gnome",
  "host": "localhost",
  "database" : "gnomegrown",
  "password" : "Gnomeo",
  "port": 5432
})

pool.on('error', (err) => {
  console.error('experienced an error', err.stack);
})

//QUERIES



const insertDivision = async (each) => {
  const insertStrDivison = 'INSERT INTO division (id, slug, division_name) VALUES ($1, $2, $3)'
  try {
    await pool.query(insertStrDivison, [each.id, each.slug, each.name])
    //return;
    console.log('its working')
  } 
  catch (err) {
    console.log(err)
  }
}


module.exports = {
  insertDivision,
};

