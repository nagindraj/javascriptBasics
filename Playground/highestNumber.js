//task -2 Exercise 4: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.

function biggestNumber(arrnumb){
    var biggest = arrnumb[0];
    for(var i=0; i< arrnumb.length;i++){
        
        if(biggest<arrnumb[i]){
            biggest=arrnumb[i];
        }
    }
    return biggest;
}

var numberArray =[7,6,5,1,3,4];

var result = biggestNumber(numberArray);

console.log("Biggest number is  " +result);