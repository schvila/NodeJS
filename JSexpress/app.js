
const express = require('express');

const app = express();

//add midleware volano pri kazdem req.
app.use((req, res, next) => {
  console.log('In the midleware.');
  next(); // jinak se nevola dalsi midleware
})

app.use((req, res, next) => {
  console.log('In the second midleware.');
  res.send('<h1> Hello express</h1>');
})

//const server = http.createServer(app);

app.listen(3000);