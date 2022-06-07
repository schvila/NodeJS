//const express = require('express');
import express,{Request, Response,NextFunction} from 'express';
import bodyParser from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();

app.use(express.urlencoded({ extended: true })); // ommits body parser
app.use(express.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());

app.use('/todos', todoRoutes);
//all errors like midleware :
app.use((err: Error, req: Request, res: Response, next: NextFunction)=> {
  res.status(500).json({message: err.message});
})

console.log('listen on port 3000.');
app.listen(3000);

