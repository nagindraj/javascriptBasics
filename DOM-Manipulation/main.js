var btn = document.querySelector('#submit');

btn.addEventListener('click', doSomething);


function doSomething() {
    var textEl = document.querySelector('#text');
    var textVal = textEl.value;
    var paraEl = document.querySelector('#para');

    paraEl.innerHTML = textVal;
    paraEl.className = 'red';

    var a = 1;
    var a = a + 1;
}
