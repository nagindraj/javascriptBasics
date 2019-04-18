var membersData = data.results[0].members;
console.log(membersData);
var statistics = [{
        Party: 'Republican',
        NumberOfReps: 0,
        VotedWithPrty: 0
    },
    {
        Party: 'Republican',
        NumberOfReps: 0,
        VotedWithPrty: 0
    }, 
    {
        Party: 'Independent',
        NumberOfReps: 0,
        VotedWithPrty: 0
    }, 
    {
        Party: 'Total',
        NumberOfReps: 0,
        VotedWithPrty: 0
    }]


var NumberOfRep = statistics[0].NumberOfReps;
var VotedWithPrt = statistics[0].VotedWithPrty;