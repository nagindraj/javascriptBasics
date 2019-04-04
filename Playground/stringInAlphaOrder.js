//Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'.  Punctuation and numbers aren't passed in the string.

function sortstr(str){
    var splitString = str.split("");
    var arr = splitString.sort();
     return arr.join("");
    
}


var sortedStr =sortstr("webmaster");
console.log(sortedStr);
