const Task = require("../models/To-do");

module.exports.home = function(req,res)
{
    console.log("Home Page Rendered");
    return res.render('home',
    {
        title : "To-do-List"
    });
};

module.exports.list = function(req,res)
{
    Task.find({},function(err,tasks)
    {
        if(err)
        {
            console.log("Error in Fetching Tasks from Database");
            return;
        }
        return res.render('list',
        {
            title: "To-do-list",
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
            console.log("Error in deleting contact");
            return;
        }
        return res.redirect('back');


    });
}

module.exports.create = function(req,res)
{
    Task.create(req.body,function(err,newItem)
    {
        if(err)
        {
            console.log("Error in Adding Task");
            return;
        }
        console.log("******",newItem);
        return res.redirect('back');

    });

}