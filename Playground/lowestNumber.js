
//Write a function which receives an array as a parameter and prints the lowest number in the array to the console.
function smallestNumber(arryNumb) {
    // now lets assume that we take the first number 
    var smallest = arryNumb[0];
    for (var i = 0; i < arryNumb.length; i++) {
        if (smallest > arryNumb[i]) {

            smallest = arryNumb[i];
        }
    }
    return smallest;
}

var numberArray = [7, 6, 5, 1, 3, 4];

var result = smallestNumber(numberArray);

console.log("smallest number", result);