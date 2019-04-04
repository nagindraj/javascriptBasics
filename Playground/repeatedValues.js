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