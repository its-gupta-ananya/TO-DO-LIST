const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Activity-list');

const db = mongoose.connection;
db.on('error',console.error.bind("Error in connecting to Database"));
db.once("open",function()
{
    "Succesfully connected to database";
});

module.exports = db;