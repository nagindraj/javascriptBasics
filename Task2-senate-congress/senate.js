function constructTable() {
    var trElement_data = document.querySelector("#senate-data tbody").innerHTML;

    var mainTr = '';
    var membersData = data.results[0].members;
    for (var i = 0; i < membersData.length; i++) {
        var firstName = membersData[i].first_name;
        var middleName = membersData[i].middle_name;
        var lastName = membersData[i].last_name;
        if (middleName == null) {
            var fullName = firstName + ' ' + lastName;
        } else {
            var fullName = firstName + ' ' + middleName + ' ' + lastName;
        }

        var linkName = fullName.link(membersData[i].url);
        document.getElementById("demo").innerHTML = linkName;


        var party = membersData[i].party;
        var state = membersData[i].state;
        var seniority = membersData[i].seniority;
        var percentageOfVotesWithParty = membersData[i].votes_with_party_pct + '%';
        var votes_with_party_pct_Tr = '<td>' + percentageOfVotesWithParty + '</td>';
        var stateTr = '<td>' + state + '</td>';
        var partyTr = '<td class=party>' + party + '</td>';
        var seniorityTr = '<td>' + seniority + '</td>';
        var trElement = '<tr class="senate"><td>' + linkName + '</td> ' + partyTr + stateTr + seniorityTr + votes_with_party_pct_Tr + '</tr>';
        mainTr = mainTr + trElement;
    }

    trElement_data = trElement_data + mainTr;

    document.querySelector("#senate-data tbody").innerHTML = trElement_data;
}
constructTable();


var trElems = document.querySelectorAll('table tr.senate');
var checkboxes = document.querySelectorAll('input[type=checkbox]');
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function (event) {
        if (event.target.checked === true) 
        {
            var trElement_data = document.querySelector("#senate-data tbody").innerHTML;

    var mainTr = '';
    var membersData = data.results[0].members;
    for (var i = 0; i < membersData.length; i++) {
        var firstName = membersData[i].first_name;
        var middleName = membersData[i].middle_name;
        var lastName = membersData[i].last_name;
        if (middleName == null) {
            var fullName = firstName + ' ' + lastName;
        } else {
            var fullName = firstName + ' ' + middleName + ' ' + lastName;
        }

        var linkName = fullName.link(membersData[i].url);
        document.getElementById("demo").innerHTML = linkName;


        var party = membersData[i].party;
        var state = membersData[i].state;
        var seniority = membersData[i].seniority;
        var percentageOfVotesWithParty = membersData[i].votes_with_party_pct + '%';
        var votes_with_party_pct_Tr = '<td>' + percentageOfVotesWithParty + '</td>';
        var stateTr = '<td>' + state + '</td>';
        var partyTr = '<td class=party>' + party + '</td>';
        var seniorityTr = '<td>' + seniority + '</td>';
        var trElement = '<tr class="senate"><td>' + linkName + '</td> ' + partyTr + stateTr + seniorityTr + votes_with_party_pct_Tr + '</tr>';
        mainTr = mainTr + trElement;
    }

    trElement_data = trElement_data + mainTr;

    document.querySelector("#senate-data tbody").innerHTML = trElement_data;
             
        } else {
            for (var j = 0; j < trElems.length; j++) {
                constructTable();
            }
        }
    });
}