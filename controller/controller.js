// Importing Schema from To-do.js
const Task = require("../models/To-do");


// Function to Render home page
module.exports.home = function(req,res)
{
    console.log("Home Page Rendered");
    // Rendering home page on request
    return res.render('home',
    {
        title : "To-do-List"
    });
};

// Function to display list of current tasks and make changes to items
module.exports.list = function(req,res)
{
    Task.find({},function(err,tasks)
    {
        if(err)
        {
            console.log("Error in Fetching Tasks from Database");
            return;
        }
        // Display list of items from database in tasks
        return res.render('list',
        {
            title: "To-do-list",
            // Sending database info to ejs page
            task_list: tasks
        });
    });
};

module.exports.delete = function(req,res)
{
    let id = req.query.id;

    Task.findByIdAndDelete(id,function(err)
    {
        if(err)
        {
            // Displaying error message in case of fault
            console.log("Error in deleting contact");
            return;
        }
        // Display Task-list after deletion of the requested task
        return res.redirect('back');


    });
}


//function to create new Task
module.exports.create = function(req,res)
{
    //Creating task with the credentials of req.body
    Task.create(req.body,function(err,newItem)
    {
        if(err)
        {
            // Displaying error message in case of fault
            console.log("Error in Adding Task");
            return;
        }
        console.log("******",newItem);
        //Displaying list page after adding new task to database
        return res.redirect('back');

    });

}