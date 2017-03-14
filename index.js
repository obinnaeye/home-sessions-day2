module.exports = function(){
    var request = require("request"),
        optimist = require("optimist"),
        fs = require("fs");
        
    var url = "http://api.openweathermap.org/data/2.5/weather?appid=111af0f77575952e4ca0a67534f4c883&q=";
    
    var ARGV = optimist.argv;
    var input = ARGV["i"];
    var output = ARGV["o"];
    
    if (input){
        //make a request
        request.get(url + input, function(err, res){
            if(err) throw err;
            var obj = JSON.parse(res.body);
            var weda = {
                "Search-for" : input,
                "Reference-City": obj.name,
                "Summary": obj.weather[0].main + "; " + obj.weather[0].description,
                "Temperature" : Math.round(obj.main.temp - 273) + " Celcius",
                "Pressure" : Math.round(obj.main.pressure) + " hPa",
                "Humidity" : Math.round(obj.main.humidity) + " %"
            };
            
            var data = JSON.stringify(weda, null, 2);
            
            
            if (output){
                fs.writeFile(output, data, function(err, d){
                    if (err) throw err;
                    console.log("Weather saved in " + output);
                })
            }else{
                fs.writeFile("output.txt", data, function(err, d){
                    if (err) throw err;
                    console.log("Weather saved in " + "output.txt!");
                })
                //use JSON.stringify(weda, null, 2) to print pretty on console.
                console.log("The weather in " + input + " is","\n", data);
            }
            
        })
    }else{
        console.log("Please specified the city using -i 'city'");
    }
}