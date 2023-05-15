const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const version = "v1";
const cors = require('cors');
const { logdata } = require('./src/req/logdata');
app.use(bodyParser.json());
app.use(cors())

/*frontend*/






  /*api*/

app.post(`/${version}/logdata`, (req, res) => {
    res.json(logdata(req));
});












app.listen(5000, () => {
  console.log('App is listening on port 5000');
});