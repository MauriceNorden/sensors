const port =  443;
const websocketport = 80;
const express = require('express');
const path = require('path');
const app = express();
const fs = require("fs");
const https = require("https");
const bodyParser = require("body-parser");
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: websocketport });
const version = "v1";
const cors = require('cors');
const webpush = require('web-push');
const publicVapidKey = "BDjQuFdtUO98VKzHZ1UAr-BFYr9PlSQtfKPSrurRfTFWZf-ySklqo5rCkVcMv-M0tjE0z7Y9zJ5st0WyyOZ1e6k";
const privateVapidKey = "6WxYR6foiWN9xRDfQfTPnBz5tI8YepO1cCXcNP86444";
webpush.setVapidDetails("mailto:mauricenorden@gmail.com", publicVapidKey, privateVapidKey);
const { logdata } = require('./src/req/logdata');
const { getdata } = require('./src/req/getdata');
const { getdevices } = require('./src/req/getdevices');
const { gettype } = require('./src/req/gettype');
const { getrange } = require('./src/req/getrange');
const { checkeventrigger } = require('./src/module/checkeventrigger');
app.use(bodyParser.json());
app.use(cors())
app.set('view engine', 'ejs');
app.set('views', './src/views')
app.use(express.static(path.join(__dirname, 'src/public')));
//frontend
app.get('/', (req, res) => {
  res.render('index', { 
    script: 'script/index.js',
});
});

app.get('/test', (req, res) => {
  res.render('test', { 
    script: 'script/index.js',
});
});
app.get('/events', (req, res) => {
  res.render('events', { 
    script: 'script/events.js',
});
});

app.get('/devices', (req, res) => {
  res.render('devices', { 
    script: 'script/devices.js',
});
});

//api
app.post(`/${version}/logdata`, (req, res) => {
    res.json(logdata(req));
});

app.get(`/${version}/events/:typeId`, (req, res) => {
  console.log(req.params.typeId)
  res.json(getdata(req.params.typeId));
});

app.get(`/${version}/type`, (req, res) => {
  res.json(gettype(req));
});

app.get(`/${version}/devices`, (req, res) => {
  res.json(getdevices(req));
});

app.get(`/${version}/range/:typeId`, (req, res) => {
  console.log(req.params.typeId)
  res.json(getrange(req.params.typeId));
});


//websockets

wss.on("connection", (ws) => {
  //ws.send("Welcome to the websocket server!!")
  const verrifyoutput = checkeventrigger();
  if(verrifyoutput != null){
    ws.send(checkeventrigger())
  }
});
//starting the server
https.createServer(
    {
      key: fs.readFileSync("keys/privkey.pem"),
      cert: fs.readFileSync("keys/cert.pem"),
    },
    app
  )
  .listen(port, () => {
    console.log(`serever is runing at port ${port}`);
  });
  console.log(`websocket is runing at port ${websocketport}`)


