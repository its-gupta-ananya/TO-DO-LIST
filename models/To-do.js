// Connecting to mongoose
const mongoose = require('mongoose');
const { strict } = require('assert');
const { model } = require('../config/mongoose');
 // Defining Schema
const ItemSchema = mongoose.Schema
({
    name:
    {
        type: String,
        required: true
    },
    Due_date:
    {
        type: String,
        required: true,
        
    }

});

// defining database
const Task = mongoose.model("Task_details",ItemSchema);

// Exporting Database to main file
module.exports = Task;