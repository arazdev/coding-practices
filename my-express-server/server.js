
const express = require ("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h1>My email address: arazmyrat.u@gmail.com</h1>");
});

app.get("/about", function(req, res){
    res.send("<h1>Araz</h1><p>My name is Arazmyrat Uzakbayev</p>");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Games</li><li>Football</li><li>Basketball</li></ul>");
});

app.listen(3000, function(){
    console.log("Server is started on port 3000");
});
