// Librairies
const express = require('express');
const bodyParser = require("body-parser");

// Initialization
const port = 3000;
const app = express();

// APIs Module
const api = require('./api.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', api);

app.listen(port, () => {
    console.log("Backend server running and listening on port " + port);
});