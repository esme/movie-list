let express = require('express');
let app = express();

// Middleware
let morgan = require('morgan');
let parser = require('body-parser');

app.set('port', 3000);

app.use(morgan('dev'));
app.use(parser.json());