// Requiring Express and port number to run project
const express = require('express');
const port = 8000;
const app = express();

// Connecting with Database 
const Task = require("./config/mongoose");

// Adding Express Layouts to pages 
const expressLayouts = require('express-ejs-layouts');
const { futimesSync } = require('fs');

//Specifying location for static files like CSS, images and javascript
app.use(express.static('assets'));
app.use(expressLayouts);

// Ensuring Page Specific Script and JS files are included while using layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//Middleware set-up
app.use(express.urlencoded());

// Setting Up router
app.use('/',require('./routes'));

// Viewing files using EJS and specifying location for connecting to pages to be rendered
app.set('view engine','ejs');
app.set('views','./views');


// Ensuring that the server works
app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error connecting to port");
        return;
    }
    console.log("Server Running on Port",port);
});