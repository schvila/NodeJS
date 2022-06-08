const express = require('express');
const app = express();
const feedRoutes = require('./routes/feed');


//app.use(express.urlencoded({ extended: true })); // ommits body parser
app.use(express.json());

//avoid CORS problem
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization'); //or *
  next();
});
app.use('/feed', feedRoutes);


app.listen(8088);