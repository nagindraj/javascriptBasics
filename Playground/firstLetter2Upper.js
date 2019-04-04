//Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".


function firstCapital(sent) {
    
    var firstword = sent[0].toUpperCase();
    var next = "";
    
    for (var i = 1; i < sent.length; i++) {
        
        if (sent[i - 1] == " ") {
            
            next = sent[i].toUpperCase();
        }
        else 
        {
            next = sent[i];
        } 
        
        firstword = firstword+next;

    } return firstword;

}

var newText = ("prince of persia");

var resultWord = firstCapital(newText);

console.log(resultWord);
