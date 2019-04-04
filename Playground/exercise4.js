//console.log('Hello');
 var x = "";
function reverse(number) {
    for (var i = number.length - 1; i >= 0; i--) {
        x = x+number[i];  
    }
    return x;
}
var numb = ("246891");
var result = reverse(numb);

console.log(result);

// second type for reverse string 

//function reverseString(str) {
//    // Step 1. Use the split() method to return a new array
//    var splitString = str.split(""); // var splitString = "hello".split("");
//    // ["h", "e", "l", "l", "o"]
// 
//    // Step 2. Use the reverse() method to reverse the new created array
//    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//    // ["o", "l", "l", "e", "h"]
// 
//    // Step 3. Use the join() method to join all elements of the array into a string
//    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//    // "olleh"
//    
//    //Step 4. Return the reversed string
//    return joinArray; // "olleh"
//}
 
//var test = "hello"
//opt = reverseString(test);
//
//console.log(opt);

//Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'.  Punctuation and numbers aren't passed in the string.

function sortstr(str){
    var splitString = str.split("");
    var arr = splitString.sort();
     return arr.join("");
    
}

//var text = ("hello");
var sortedStr =sortstr("hello");
console.log(sortedStr);



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




//Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development".
function longestWord(str) {

    var spt = str.split(" ");
    var longest = spt[0]; 
    for (var i = 1; i < spt.length; i++) {
        if (longest.length < spt[i].length) {
            longest = spt[i];
        }
    }

    return longest;
}
var test = ("Web Development Tutorial");

var rest = longestWord(test);

console.log(rest);

//Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string. 





