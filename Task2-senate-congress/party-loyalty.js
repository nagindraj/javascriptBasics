fetch('https://api.propublica.org/congress/v1/113/'+congress+'/members.json', {
  method: 'GET', // or 'PUT' // data can be `string` or {object}!
  headers:{
    'X-API-Key': 'pmO3I5rettM9agbbSru7AVPLpl7QLFuXY6hsFMPW'
  }
}).then(function(response){
    return response.json();
}).then(function(data){
    var membersData = data.results[0].members;
    
    sortMembersByPartyVotes(membersData)
    createAttendanceData(membersData);
});
var statistics = [{
    Party: 'Republican', 
    NumberOfReps: 0, 
    VotedWithPrty:0,
    value: 'R'
},
    {
    Party: 'Democratic', 
    NumberOfReps: 0, 
    VotedWithPrty:0,
    value: 'D'
},
    {
    Party: 'Independent', 
    NumberOfReps: 0, 
    VotedWithPrty:0,
    value: 'I'
},
    {
    Party: 'Total', 
    NumberOfReps: 0, 
    VotedWithPrty:0,
    value: 'T'
}]


function createAttendanceData(membersData){
    var democrats = 0 ;
    var republicans = 0;
    var independents = 0;
    var democratsTotalVotes = 0;
    var republicansTotalVotes = 0;
    var independentsTotalVotes = 0;
    for(var i=0;i<membersData.length;i++) {
        if(membersData[i].party === 'D') {
            democrats = democrats+1;
            democratsTotalVotes = democratsTotalVotes+membersData[i].total_votes;
        }else if(membersData[i].party === 'R') {
            republicans = republicans+1;
            republicansTotalVotes = republicansTotalVotes+membersData[i].total_votes;
        }else if(membersData[i].party === 'I') {
            independents = independents+1;
            independentsTotalVotes = independentsTotalVotes+membersData[i].total_votes;
        }
    }
    
    var totalVotes = republicansTotalVotes+democratsTotalVotes+independentsTotalVotes;
    for(var j=0;j<statistics.length;j++) {
        if(statistics[j].value === 'R') {
            statistics[j].NumberOfReps = republicans;
            statistics[j].VotedWithPrty = Number((republicansTotalVotes/totalVotes) * 100).toFixed(2);
        }else if(statistics[j].value === 'D') {
            statistics[j].NumberOfReps = democrats;
            statistics[j].VotedWithPrty = Number((democratsTotalVotes/totalVotes) * 100).toFixed(2);
        }else if(statistics[j].value === 'I') {
            statistics[j].NumberOfReps = independents;
            statistics[j].VotedWithPrty = Number((independentsTotalVotes/totalVotes) * 100).toFixed(2);
        }else{
            statistics[j].NumberOfReps = membersData.length;
            statistics[j].VotedWithPrty = 100;
        }
    }
    
    createAttendanceTable();
    createLeastLoyalTable(membersData);
    createMostLoyalTable(membersData);
}

function createAttendanceTable() {
    var mainTr = ''
    for(var i=0;i<statistics.length;i++) {
        var partyTd = '<td>'+ statistics[i].Party+'</td>';
        var noOfRepsTd = '<td>'+ statistics[i].NumberOfReps+'</td>';
        var votesPerctTd = '<td>'+ statistics[i].VotedWithPrty+'</td>';
        var trElem = '<tr>'+partyTd+noOfRepsTd+votesPerctTd+'</tr>';
        mainTr = mainTr+trElem;
    }
    
    document.querySelector('#attendance').innerHTML = mainTr;
}

function sortMembersByPartyVotes(membersData) {
     membersData.sort(function(a, b) {
        return (a.total_votes-a.missed_votes) - (b.total_votes-b.missed_votes);
    });
}


function createMostLoyalTable(membersData) {
    
    var mainTr = ''
    var len = membersData.length;
    for(var i=len-1;i>0;i--) {
        if(i !==0 ){
            var prevmemberTotalVotes = membersData[i-1].total_votes-membersData[i-1].missed_votes;
            var currmemberTotalVotes = membersData[i].total_votes-membersData[i].missed_votes;
        }
        
        if(i>len-1-Math.round(0.1*(len)) || (prevmemberTotalVotes === currmemberTotalVotes)) {
            var firstName = membersData[i].first_name;
            var middleName = membersData[i].middle_name;
            var lastName = membersData[i].last_name;
            if (middleName == null) {
                var fullName = firstName + ' ' + lastName;
            } else {
                var fullName = firstName + ' ' + middleName + ' ' + lastName;
            }

            var nameTd = '<td>'+ fullName+'</td>';
            var totalVotes =  membersData[i].total_votes-membersData[i].missed_votes;
            var noOfVotesTd = '<td>'+totalVotes+'</td>';
            var VotesPerct = '<td>'+ membersData[i].votes_with_party_pct+'</td>';
            var trElem = '<tr>'+nameTd+noOfVotesTd+VotesPerct+'</tr>';
            mainTr = mainTr+trElem;
        }else if(prevmemberTotalVotes !== currmemberTotalVotes) {
              break;   
        }
        //console.log(trElem);
    }
    
    document.querySelector('#mostLoyalSenate').innerHTML = mainTr;
}

function createLeastLoyalTable(membersData) {
   
    var mainTr = ''
    var len = membersData.length;
    for(var i=0;i<len;i++) {
        if(i !==0 ){
            var prevmemberTotalVotes = membersData[i-1].total_votes-membersData[i-1].missed_votes;
            var currmemberTotalVotes = membersData[i].total_votes-membersData[i].missed_votes;
        }
            if(i<Math.ceil(0.1*(len)) || (prevmemberTotalVotes === currmemberTotalVotes)){
            var firstName = membersData[i].first_name;
            var middleName = membersData[i].middle_name;
            var lastName = membersData[i].last_name;
            if (middleName == null) {
                var fullName = firstName + ' ' + lastName;
            } else {
                var fullName = firstName + ' ' + middleName + ' ' + lastName;
            }


            var nameTd = '<td>'+ fullName+'</td>';
            var totalVotes =  membersData[i].total_votes-membersData[i].missed_votes;
            var noOfVotesTd = '<td>'+ totalVotes+'</td>';
            var VotesPerct = '<td>'+ membersData[i].votes_with_party_pct+'</td>';
            var trElem = '<tr>'+nameTd+noOfVotesTd+VotesPerct+'</tr>';
            mainTr = mainTr+trElem;
        }else if(prevmemberTotalVotes !== currmemberTotalVotes){
            break;
        }
    }
    
    document.querySelector('#leastLoyalSenate').innerHTML = mainTr;
}