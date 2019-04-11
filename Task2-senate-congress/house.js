//
//
//
var elementTr = document.querySelector("#house-data").innerHTML;
var originalTr ="";

var fuldata = data.results[0].members;

console.log(fuldata);

for( var i =0; i<fuldata.length;i++){
    var firstName = fuldata[i].first_name;
    var lastName = fuldata[i].last_name;
    var middleName = fuldata[i].middle_name; 
    var birthday = fuldata[i].date_of_birth;
    var party = fuldata[i].party;
    var Phonenumber = fuldata[i].phone;
    if(middleName == null){
        var fullName = firstName+' '+lastName;
    } else
        {
            var fullName = firstName+' '+middleName+' '+lastName;
        }
    var linkName =fullName.link(fuldata[i].url);
    
    document.getElementById("demo").innerHTML = linkName;
    //var fullnameTr= HTMLTableHeaderCellElement()
    var party =fuldata[i].party;
    var state =fuldata[i].state;
    var seniority =fuldata[i].seniority;
    var percentageOfVotesWithParty=fuldata[i].votes_with_party_pct +'%';
    var votes_with_party_pct_Tr = '<td>'+percentageOfVotesWithParty+'</td>';
    var stateTr =  '<td>'+state+'</td>';
    var partyTr = '<td>'+party+'</td>';
    var seniorityTr = '<td>'+seniority+'</td>';
    var fullNameTr = '<td>'+fullName+'</td>';
    var fullTr = '<tr><td>'
    +linkName+'</td>' +'<td>'+party+'</td>'+'<td>'+state+'</td>'+'<td>'+seniority+'</td>' +votes_with_party_pct_Tr+'</td></tr>';
    originalTr =originalTr+fullTr;
    
}
elementTr = elementTr+originalTr;
document.querySelector("#house-data").innerHTML = elementTr



