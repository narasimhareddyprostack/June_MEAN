const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();

app.use(bodyParser.json());
app.use(cors({ origin : 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server Started at Port : 3000'));

app.use('/employee' , employeeController);
//Simple CRUD Operations app from Youtube
