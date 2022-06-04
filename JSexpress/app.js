
const express = require('express');

const app = express();
app.use(express.urlencoded()); // ommits body parser

//--add midleware volano pri kazdem req.
// app.use((req, res, next) => {
//   console.log('In the midleware.');
//   next(); // jinak se nevola dalsi midleware
// })

app.use('/add-product',(req, res, next) => {
  res.send('<body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form></body>');
})

app.post('/product',(req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

app.use('/',(req, res, next) => {
  console.log('In the hello midleware.');
  res.send('<h1> Hello express</h1>');
})

//const server = http.createServer(app);

app.listen(3000);