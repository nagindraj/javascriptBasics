var fruits = ["apple", "mango", "banana"];

var liElems = '';
for(var i=0;i<fruits.length;i++) {
    // var liElem = document.createElement('li');
    // liElem.innerHTML = fruits[i];
    
    // document.querySelector('#fruits').appendChild(liElem);

    var liElem = '<li>'+fruits[i]+'</li>';
    liElems = liElems+liElem;
}
document.querySelector('#fruits').innerHTML = liElems;

