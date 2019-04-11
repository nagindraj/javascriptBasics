var trElement_data =document.querySelector("#house-data").innerHTML;
//console.log(trElement_data);
//a normal blank tr so iwe can use it to capture the data after looping 
var mainTr='';
var membersData = data.results[0].members;
console.log(membersData);
for( var i=0; i<membersData.length;i++){
    var firstName =membersData[i].first_name;
    var middleName =membersData[i].middle_name;
    var lastName = membersData[i].last_name;
     if (middleName == null){
         var fullName=firstName+' '+lastName;
     }else
         {
             var fullName =firstName+' '+middleName+' '+lastName;
         }
    //here we are linking the name to a url using link
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
document.querySelector("#house-data").innerHTML =trElement_data

//console.log(trElement_data);


var checkboxes = document.querySelectorAll('input[type=checkbox]');

function checkStateForCheckboxes(checkboxes) {
    for(var i=0;i<checkboxes.length;i++) {
        if(checkboxes[i].checked === true) {
            return false;
        }
    }

    return true;
}

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function () {
        //check if all checkboxes are unchecked. If true show all trs;
        var checkedStateForAll = checkStateForCheckboxes(checkboxes);
        if(checkedStateForAll) {
            showAllTrs();
        }else{
            hideAllTrs();
            for(var k=0;k<checkboxes.length;k++) {
                if(checkboxes[k].checked === true) {
                    showTrsWith(checkboxes[k].value);
                }
            }
        }
    });
}

function showAllTrs() {
    var trElems = document.querySelectorAll('table tr.senate');
    for(var i=0;i<trElems.length;i++) {
        trElems[i].classList.remove('hide');
        trElems[i].classList.add('showCheckbox');
    }
}

function hideAllTrs() {
    var trElems = document.querySelectorAll('table tr.senate');
    for(var i=0;i<trElems.length;i++) {
        trElems[i].classList.add('hide');
    }
}

function showTrsWith(party) {
    var trElems = document.querySelectorAll('table tr.senate');
    for(var i=0;i<trElems.length;i++) {
        var tdParty = trElems[i].children[1].innerHTML;
        if(tdParty === party) {
            trElems[i].classList.remove('hide');
            trElems[i].classList.add('showCheckbox');
        }

    }
}
