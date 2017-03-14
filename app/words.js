module.exports = {
    words: function(str){
        if(typeof str === "string"){
            
            if(str){
                var reg = /\s+/g;
                var wordArr = str.split(reg);
                var obj = {};
                console.log(wordArr);
                for (var i =0; i<wordArr.length; i++){
                    var value = obj[wordArr[i]];
                    if(typeof value === "function"){
                        var value = 1;
                    }
                    console.log (value);
                    obj[wordArr[i]] = value +1 || 1;
                }
                
                console.log(obj);
                return obj;
            }else{
                console.log("Not inpu")
            }
        }else{
            return "Input should be string!";
        }
    }
}