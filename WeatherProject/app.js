const express = require ("express");
const bodyParser = require("body-parser");
const https = require ("https");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    
    const query = req.body.cityName;
    const apiKey = "ee624f7d8448333adede8450f9b9d7c2";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units+"";
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"

            res.write("<h1>The weather in "+query+" and Temperature "+ temp+ " Celcius</h1>");
            res.write("<p>The weather currently "+description+"</p>");
            res.write("<img src = "+imageURL+">");
            res.send();
        });
    });
});

app.listen(3000, function(){
    console.log("Server port connected to 3000");
})