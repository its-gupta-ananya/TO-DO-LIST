// Express Require
const express = require('express');
// Calling Router from express
var Router = express.Router();

// Connecting to the HomeController
const Controller = require('../controller/controller');

console.log("Home Controller Loaded");
// Fetching specific functions from controller for specific urls
Router.get("/",Controller.home);
Router.get('/list',Controller.list);
Router.get('/delete-item',Controller.delete);
Router.post('/create-item',Controller.create);

// Mapping the Router
module.exports = Router;