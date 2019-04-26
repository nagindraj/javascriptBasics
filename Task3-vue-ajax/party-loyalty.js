fetch('https://api.propublica.org/congress/v1/113/' + congress + '/members.json', {
    method: 'GET', // or 'PUT' // data can be `string` or {object}!
    headers: {
        'X-API-Key': 'pmO3I5rettM9agbbSru7AVPLpl7QLFuXY6hsFMPW'
    }
}).then(function (response) {
    return response.json();
}).then(function (data) {
    var membersData = data.results[0].members;
    //    
    //    sortMembersByPartyVotes(membersData)
    //    createAttendanceData(membersData);
    createData(membersData);
    createVueAttend(membersData);
    createLeastLoyalData(membersData);
    createMostLoyalData(membersData);

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

var leastLoyalMembers = [];
var mostLoyalMembers = [];

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


function sortMembersByPartyVotes(membersData) {
    return membersData.sort(function (a, b) {
        return (a.total_votes - a.missed_votes) - (b.total_votes - b.missed_votes);
    });
}


function createMostLoyalData(membersData) {

    sortMembersByPartyVotes(membersData)
    var len = membersData.length;
    for (var i = len - 1; i > 0; i--) {
        if (i !== 0) {
            var prevmemberTotalVotes = membersData[i - 1].total_votes - membersData[i - 1].missed_votes;
            var currmemberTotalVotes = membersData[i].total_votes - membersData[i].missed_votes;
            var totalVotes =  membersData[i].total_votes-membersData[i].missed_votes;
        }

        if (i > len - 1 - Math.round(0.1 * (len)) || (prevmemberTotalVotes === currmemberTotalVotes)) {
            mostLoyalMembers.push(membersData[i]);

        } else if (prevmemberTotalVotes !== currmemberTotalVotes) {
            break;
        }
        //console.log(trElem);
    }


}

function createLeastLoyalData(membersData) {
    var len = membersData.length;
    for (var i = 0; i < len; i++) {
        if (i !== 0) {
            var prevmemberTotalVotes = membersData[i - 1].total_votes - membersData[i - 1].missed_votes;
            var currmemberTotalVotes = membersData[i].total_votes - membersData[i].missed_votes;
            var totalVotes = membersData[i].total_votes - membersData[i].missed_votes;
        }
        if (i < Math.ceil(0.1 * (len)) || (prevmemberTotalVotes === currmemberTotalVotes)) {

            leastLoyalMembers.push(membersData[i]);


        } else if (prevmemberTotalVotes !== currmemberTotalVotes) {
            break;
        }
    }

}

function createVueAttend(membersData) {

    var app = new Vue({
        el: '#loyal',
        data: {
            statistics: statistics,
            members: leastLoyalMembers,
            members1: mostLoyalMembers
        }

    })
}
