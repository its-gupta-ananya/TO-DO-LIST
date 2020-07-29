const express = require('express');
const port = 8000;
const app = express();
const Task = require("./config/mongoose");
const { futimesSync } = require('fs');

app.set(express.static('assets'));
app.use(express.urlencoded());

app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error connecting to port");
        return;
    }
    console.log("Server Running on Port",port);
});