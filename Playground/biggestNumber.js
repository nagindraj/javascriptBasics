

//task -2 Exercise 4:

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



//task-2 Excercise-5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console.
 
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



// Exercise 6: Write a function which receives an array and only prints the values that repeat.  


function rep(arr_numb){
    for(var i=0; i<arr_numb.length;i++){
        
        for(var j=i+1; j<arr_numb.length; j++){
            if(arr_numb[i] == arr_numb[j]){
             console.log('repeated number: ',arr_numb[j]);
                break;
                
               }
            
        }
    }
    console.log('repeted numbers :' );
}
var inp = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var result1 = rep(inp);

// Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string. 

//function join(list){
//    
//    console.log(myColor.toString());
//}



