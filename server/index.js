const express = require('express');
const PORT = 4000;
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../'));

app.listen(`${PORT}`, () => {
    console.log("listening on port");
})