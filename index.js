const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const version = "v1";
const cors = require('cors');
const { logdata } = require('./src/req/logdata');
const { getdata } = require('./src/req/getdata');
const { getdevices } = require('./src/req/getdevices');
app.use(bodyParser.json());
//frontend
app.use(cors())
app.set('view engine', 'ejs');
app.set('views', './src/views')
app.use(express.static(path.join(__dirname, 'src/public')));
//frontend

app.get('/', (req, res) => {
  res.render('index');
});



//api

app.post(`/${version}/logdata`, (req, res) => {
    res.json(logdata(req));
});

app.get(`/${version}/getdata`, (req, res) => {
  res.json(getdata(req));
});



app.get(`/${version}/devices`, (req, res) => {
  res.json(getdevices(req));
});












app.listen(5000, () => {
  console.log('App is listening on port 5000');
});