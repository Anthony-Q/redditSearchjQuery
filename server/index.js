const express = require('express');
const PORT = 4000;
const bodyParser = require('body-parser');
const path = require('path');
const db = require("../db/index.js");
const routes = require("./routes.js");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../'));

app.use("/api", routes);

app.listen(`${PORT}`, () => {
    console.log("listening on port");
})

