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
            var weda = JSON.parse(res.body);
            
            //use JSON.stringify(weda, null, 2) to print pretty on console.
            console.log("The weather in " + input + " is","\n",JSON.stringify(weda, null, 2));
        })
    }else{
        console.log("Please specified the city using -i 'city'");
    }
}