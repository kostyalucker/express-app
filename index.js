// express.js api

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 5000; 

const corsOptions = { 
  origin: ['http://localhost:8080'],
  credentials: true,
  methods: ['PUT, GET, POST, OPTIONS, DELETE'],
  allowHeaders: ["DNT,X-CustomHeader,X-LANG,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,X-Api-Key,X-Device-Id,Access-Control-Allow-Origin,Authorization,Accept-Language,Api-Key"],
  maxAge: 1728001
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.post('/cookie', (req, res) => {
  res.cookie('refreshFromExpress', 'myRefreshToken', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    domain: 'http://localhost:8080/',
    path: '/',
  });

  res.json({  status: 200, message : 'Hello, man!' });
})

app.listen(port, () => {  
  console.log('listening on port ' + port);
});