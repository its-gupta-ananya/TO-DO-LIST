const express = require('express');
var Router = express.Router();
const Controller = require('../controller/controller');

console.log("Home Controller Loaded");

Router.get("/",Controller.home);
Router.get('/list',Controller.list);
Router.get('/delete-item',Controller.delete);
Router.post('/create-item',Controller.create);

module.exports = Router;