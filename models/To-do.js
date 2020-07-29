const mongoose = require('mongoose');
const { strict } = require('assert');
const { model } = require('../config/mongoose');

const ItemSchema = mongoose.Schema
({
    name:
    {
        type: String,
        required: true
    },
    Due_date:
    {
        type: Date,
        required: true,
        
    }

});

const Task = mongoose.model("Task_details",ItemSchema);

module.exports = Task;