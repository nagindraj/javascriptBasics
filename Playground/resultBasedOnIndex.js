//Excercise-5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console.
 
function value_position(arr,pos){
    for(var i=0;i<arr.length;i++){
        if(i==pos){
           console.log('index is',arr[i]);
        }
    }
}
var number =([2,4,6,8,9,1]);

var index =2;
 
var result = value_position(number,index);