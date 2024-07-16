const express = require ("express");
const bodyParser = require ("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var num1 = Number (req.body.n1);
    var num2 = Number (req.body.n2);
    var result1 = num1 + num2;

    res.send("This calculation result is "+ result1);
});

app.get("/bmiCalculator", function ( req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
    var h = Number (req.body.height);
    var w = Number (req.body.weight);
    var result2 = (w/Math.pow(h, 2));
    
    res.send("Your BMI is " + result2);

});