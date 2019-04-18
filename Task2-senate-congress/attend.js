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

var membersData = data.results[0].members;

createAttendanceData();

function createAttendanceData(){
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
    createLeastEngagedTable();
    createMostEngagedTable();
}

function sortMembersByMissedVotes() {
    membersData.sort(function(a, b) {
        return a.missed_votes - b.missed_votes;
    });
    
    console.log(membersData);
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

function createLeastEngagedTable() {
    sortMembersByMissedVotes();
    var mainTr = ''
    var len = membersData.length;
    for(var i=len-1;i>0;i--) {
        if(i>len-1-Math.round(0.1*(len)) || (membersData[i-1].missed_votes === membersData[i].missed_votes)) {
            var firstName = membersData[i].first_name;
            var middleName = membersData[i].middle_name;
            var lastName = membersData[i].last_name;
            if (middleName == null) {
                var fullName = firstName + ' ' + lastName;
            } else {
                var fullName = firstName + ' ' + middleName + ' ' + lastName;
            }


            var nameTd = '<td>'+ fullName+'</td>';
            var noOfMissedVotesTd = '<td>'+ membersData[i].missed_votes+'</td>';
            var missedVotesPerct = '<td>'+ membersData[i].missed_votes_pct+'</td>';
            var trElem = '<tr>'+nameTd+noOfMissedVotesTd+missedVotesPerct+'</tr>';
            mainTr = mainTr+trElem;
        }else if(membersData[i-1].missed_votes !== membersData[i].missed_votes) {
              break;   
        }
        
    }
    
    document.querySelector('#leastEngagedSenate').innerHTML = mainTr;
}

function createMostEngagedTable() {
    sortMembersByMissedVotes();
    var mainTr = ''
    var len = membersData.length;
    for(var i=0;i<len;i++) {
        if(i<Math.ceil(0.1*(len)) || (membersData[i-1].missed_votes === membersData[i].missed_votes)){
            var firstName = membersData[i].first_name;
            var middleName = membersData[i].middle_name;
            var lastName = membersData[i].last_name;
            if (middleName == null) {
                var fullName = firstName + ' ' + lastName;
            } else {
                var fullName = firstName + ' ' + middleName + ' ' + lastName;
            }


            var nameTd = '<td>'+ fullName+'</td>';
            var noOfMissedVotesTd = '<td>'+ membersData[i].missed_votes+'</td>';
            var missedVotesPerct = '<td>'+ membersData[i].missed_votes_pct+'</td>';
            var trElem = '<tr>'+nameTd+noOfMissedVotesTd+missedVotesPerct+'</tr>';
        }else if(membersData[i-1].missed_votes !== membersData[i].missed_votes){
            break;
        }
        
        mainTr = mainTr+trElem;
    }
    
    document.querySelector('#mostEngagedSenate').innerHTML = mainTr;
}