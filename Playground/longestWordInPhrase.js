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