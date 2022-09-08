// express.js api

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 5000; 

const corsOptions = { 
  origin: "*",
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
    path: '/',
  });

  res.json({  status: 200, message : 'Hello, man!' });
})

app.get('/cookie-check', (req, res) => {
  console.log(req.cookie)

  res.json({  status: 200, message : 'checking!' });
})

app.listen(port, () => {  
  console.log('listening on port ' + port);
});