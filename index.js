// express.js api

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 5000; 

const corsOptions = { 
  origin: ["https://dev-romb-static.website.yandexcloud.net"],
  credentials: true,
  methods: ['PUT, GET, POST, OPTIONS, DELETE'],
  allowHeaders: ["DNT,X-CustomHeader,X-LANG,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,X-Api-Key,X-Device-Id,Access-Control-Allow-Origin,Authorization,Accept-Language,Api-Key"],
  maxAge: 1728001
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('foo', 'bar', {
    maxAge: 30000,
    sameSite: 'none',
    secure: true
  });

  res.send('cookie setted');
})

app.get('/get-cookie', (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
})

app.get('/del-cookie', (req, res) => {
  res.clearCookie('foo');
  res.send('cookie deleted');
})

app.listen(port, () => {  
  console.log('listening on port ' + port);
});