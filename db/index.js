let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/redditThread', {useNewUrlParser: true});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "mongoose error"));
db.once("open", () => {
    console.log("<===mongoose connected");
})

module.exports = db;
