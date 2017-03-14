module.exports = {
    reverseString : function(st) {
        if(typeof st === "string"){
            if(st){
                if(palindrome(st)){
                    return true;
                }else{
                    return reverseStr(st);
                }
            }else{
                return null;
            }
            
        }
        
        function palindrome(str) {
          var joined = str.replace(/\W+|_/g, "");
          var lowJoin = joined.toLowerCase();
          var revJoin = lowJoin.split("").reverse().join("");
          if (revJoin === lowJoin){
            return true;
          }
          else {
            return false;
          }
        }
        
        function reverseStr(str) {
          var array = str.split("").reverse();
          return array.join('');
        }

    }
}