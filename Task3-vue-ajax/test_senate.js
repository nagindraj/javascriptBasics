//here we need members data so we need to go to results array and from there you need to go to members array
var membersData = data.results[0].members
createTable(membersData);

function createTable(membersData) {
    var mainTr = "";
    for (var i = 0; i < membersData.length; i++) {
        var fname = membersData[i].first_name;
        var mname = membersData[i].middle_name;
        var lname = membersData[i].last_name;
        var party = membersData[i].party;
        var state = membersData[i].state;
        var seniority = membersData[i].seniority;
        var voteswithpct = membersData[i].votes_with_party_pct;
        if (mname === null) {
            var fullname = fname + ' ' + lname;
        } else {
            var fullname = fname + ' ' + mname + ' ' + lname;
        }
        var url = membersData[i].url;
        var fullnametdElement = '<td><a href="'+url+'">'+ fullname + '</a></td>';
        var partytd = '<td>' + party + '</td>';
        var statetd = '<td>' + state + '</td>'
        var senioritytd = '<td>' + seniority + '</td>'
        var voteswithpcttd = '<td>' + voteswithpct + '</td>'
        var trElement = '<tr>' + fullnametdElement + partytd + statetd + senioritytd + voteswithpcttd + '</td>';
        mainTr = mainTr + trElement;
        document.querySelector('#senate-data').innerHTML = '';
        document.querySelector('#senate-data').innerHTML = mainTr;
    }
}
var chkboxes = document.querySelectorAll('input[type="checkbox"]');
for(var i=0;i<chkboxes.length;i++){
    chkboxes[i].addEventListener('change',onchangechkbox);
    
}
function createData(data){
    var chkBoxesUnchecked = chkuncheckedstate();
    if(chkBoxesUnchecked===true){
        createTable(data);
    }else{
        var newArray =[];
        for(var i=0;i<data.length;i++){
            for(var j=0;j<chkboxes.length;j++){
                if(chkboxes[j].checked === true && chkboxes[j].value===data[i].party){
                    newArray.push(data[i])
                }
            }
        }
        
        createTable(newArray);
    }
}
function onchangechkbox(){
    createData(membersData);
}
 function chkuncheckedstate(){
     for(var i=0;i<chkboxes.length;i++){
         if(chkboxes[i].checked === true){
             return false;
         }
     }
     return true;
 }