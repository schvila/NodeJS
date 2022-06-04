
const express = require('express');

const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

const app = express();
app.use(express.urlencoded()); // ommits body parser

app.use(adminRoutes);
app.use(shopRoutes);


//const server = http.createServer(app);

app.listen(3000);