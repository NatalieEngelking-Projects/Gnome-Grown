const express = require('express');
const app = express();
const cors = require ('cors')
const bodyParser = require('body-parser');
const port = 3004;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//api connection:  https://trefle.io

app.listen(port, () => {
  console.log(`listening on ${port}`);
})