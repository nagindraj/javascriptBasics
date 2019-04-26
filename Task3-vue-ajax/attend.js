fetch('https://api.propublica.org/congress/v1/113/' + congress + '/members.json', {
    method: 'GET', // or 'PUT' // data can be `string` or {object}!
    headers: {
        'X-API-Key': 'pmO3I5rettM9agbbSru7AVPLpl7QLFuXY6hsFMPW'
    }
}).then(function (response) {
    return response.json();
}).then(function (data) {
    var membersData = data.results[0].members;
    //sortMembersByMissedVotes(membersData);
    //createAttendanceData(membersData);
    createData(membersData);
    createLeastEngagedData(membersData);
    createVueAttend(membersData);
    createMostEngagedData(membersData);
});
var statistics = [{
        Party: 'Republican',
        NumberOfReps: 0,
        VotedWithPrty: 0,
        value: 'R'
},
    {
        Party: 'Democratic',
        NumberOfReps: 0,
        VotedWithPrty: 0,
        value: 'D'
},
    {
        Party: 'Independent',
        NumberOfReps: 0,
        VotedWithPrty: 0,
        value: 'I'
},
    {
        Party: 'Total',
        NumberOfReps: 0,
        VotedWithPrty: 0,
        value: 'T'
}]

var leastEngagedMembers = [];

function createData(membersData) {

    var democrats = 0;
    var republicans = 0;
    var independents = 0;
    var democratsTotalVotes = 0;
    var republicansTotalVotes = 0;
    var independentsTotalVotes = 0;
    for (var i = 0; i < membersData.length; i++) {
        if (membersData[i].party === 'D') {
            democrats = democrats + 1;
            democratsTotalVotes = democratsTotalVotes + membersData[i].total_votes;
        } else if (membersData[i].party === 'R') {
            republicans = republicans + 1;
            republicansTotalVotes = republicansTotalVotes + membersData[i].total_votes;
        } else if (membersData[i].party === 'I') {
            independents = independents + 1;
            independentsTotalVotes = independentsTotalVotes + membersData[i].total_votes;
        }
    }

    var totalVotes = republicansTotalVotes + democratsTotalVotes + independentsTotalVotes;
    for (var j = 0; j < statistics.length; j++) {
        if (statistics[j].value === 'R') {
            statistics[j].NumberOfReps = republicans;
            statistics[j].VotedWithPrty = Number((republicansTotalVotes / totalVotes) * 100).toFixed(2);
        } else if (statistics[j].value === 'D') {
            statistics[j].NumberOfReps = democrats;
            statistics[j].VotedWithPrty = Number((democratsTotalVotes / totalVotes) * 100).toFixed(2);
        } else if (statistics[j].value === 'I') {
            statistics[j].NumberOfReps = independents;
            statistics[j].VotedWithPrty = Number((independentsTotalVotes / totalVotes) * 100).toFixed(2);
        } else {
            statistics[j].NumberOfReps = membersData.length;
            statistics[j].VotedWithPrty = 100;
        }
    }


}

function createLeastEngagedData(membersData) {
    sortMembersByMissedVotes(membersData);
    var len = membersData.length;
    for (var i = len - 1; i > 0; i--) {
        if (i > len - 1 - Math.round(0.1 * (len)) || (membersData[i - 1].missed_votes === membersData[i].missed_votes)) {
            leastEngagedMembers.push(membersData[i]);
        } else if (membersData[i - 1].missed_votes !== membersData[i].missed_votes) {
            break;
        }
    }
}

var mostEngagedMembers =[];
function createMostEngagedData(membersData) {
   sortMembersByMissedVotes(membersData);
   var len = membersData.length;
   for(var i=0;i<len;i++) {
       if(i<Math.ceil(0.1*(len)) || (membersData[i-1].missed_votes === membersData[i].missed_votes)){
           mostEngagedMembers.push(membersData[i]);
       }else if(membersData[i-1].missed_votes !== membersData[i].missed_votes){
           break;
       }
       
   }
}

function sortMembersByMissedVotes(membersData) {
    membersData.sort(function (a, b) {
        return a.missed_votes - b.missed_votes;
    });
}

function createVueAttend(membersData) {
   
    var app = new Vue({
        el: '#attendance',
        data: {
            statistics: statistics,
            members: leastEngagedMembers,
            members1:mostEngagedMembers
        }

    })
}
