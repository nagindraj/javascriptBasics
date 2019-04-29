var students = [
    {
        'name' :'Filippo',
        'age': '23'
    },
    {
        'name' :'Nag',
        'age': '24'
    },
    {
        'name' :'Masood',
        'age': '25'
    }
]

var mainTr= '';
for(var i=0;i<students.length;i++) {
    var trElem = '<tr><td>'+students[i].name+'</td><td>'
    +students[i].age+'</td></tr>';

    mainTr = mainTr+trElem;
}

document.querySelector('#students').innerHTML = mainTr;
