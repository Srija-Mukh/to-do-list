// jshint:esversion 6 

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");

// Arrays can be const, but cannot be reassigned to another object.
const items = ["Buy Food", "Eat Food", "Cook Food"];
const workItems = [];

app.use(bodyParser.urlencoded({extended:true}));
// To use CSS file.
app.use(express.static("public"));

app.get("/", function(req, res){

    // Call the function bound to the constant.
    let day = date.getDate();

    // Can only render in one line per path.
    res.render("list", {listTitle: day, newListItems : items});
});

app.post("/", function(req, res){

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        // Will redirect to get method.
        res.redirect("/");

    }
});

app.get("/work", function(req, res) {
    res.render("list",{listTitle: "Work List", newListItems: workItems});
});


app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    // Will redirect to get method.
    res.redirect("/work");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});