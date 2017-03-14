module.exports = {
    words: function(str){
        if(typeof str === "string"){
            
            if(str){
                var reg = /\s+/g;
                var wordArr = str.split(reg);
                var obj = {};
                console.log(wordArr);
                for (var i =0; i<wordArr.length; i++){
                    obj[wordArr[i]] = obj[wordArr[i]] +1 || 1;
                }
                
                console.log(obj);
                //return obj;
            }else{
                console.log("Not inpu")
            }
        }else{
            return "Input should be string!";
        }
    }
}