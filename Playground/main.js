//JavaScript Basics:


//task1- Exercise 1: In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "my name". Then add a line of code to print the variable name to the console after the previous message. 

var name = 'Nag';
console.log(name);

//task1- Exercise 2: Create a variable called age with a number that is your age. Do not use string quotes for numbers.

var age = 32;
console.log(age);

// task1-Exercise 3: Create a variable called ignasiAge with a value 32. Create another variable called ageDiff and set it to an expression that calculates your age minus Ignasi's age.  Print the value of ageDiff. 

var ignasiAge = 32;
var ageDiff = (age - ignasiAge);

console.log('age diffrence with ignasi' + ' ' + ageDiff);


// task1-Exercise 4:Write a conditional that compares the variable with your age with the number 21. It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. 

var bechmark = 21;
if (age <= 21) {
    console.log('you are younger than 21');
} else {
    console.log('You are older than 21');
}

// task -1 Exercise 5: Write a conditional that compares your age with Ignasi's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Ignasi is older than you", Ignasi is younger than you", or "You have the same age as Ignasi". 

if (ignasiAge > age) {
    console.log('Ignasi is older than you ');
} else if (ignasiAge < age) {
    console.log(' Ignasi is younger than you');
} else {
    console.log('You have the same age as Ignasi');
}


-----------------------------------------------------------------------------------------------------------
//Java Script Array Functions:
-----------------------------------------------------------------------------------------------------------

//task -2 Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop. 

var names = ['Nag', 'Jun', 'Filippo', 'Loren', 'Mike', 'Ottavia'];
names.sort();
console.log(names);
console.log('First name',names[0]);


console.log('last name',names[names.length-1] );
for( var i =0; i<names.length; i++){
    
}


//task -2 Exercise 2: Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.

var ages = [20, 23, 25, 27, 28, 30];

var index = 0;
while (index < ages.length) {
    console.log(ages[index]);
    index++;

}

for (var i = 0; i < ages.length; i++) {
    if (ages[i] % 2 == 0) {
        console.log("even", ages[i]);
    }
}




//task -2 Exercise 3:
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