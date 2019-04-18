var membersData = data.results[0].members;
//get all the checkboxes and store it in a variable

var checkboxes = document.querySelectorAll('input[type="checkbox"]');


//append the state values from membersData to select box
createDropdown();

function createDropdown() {
    var select = document.getElementById("state_select");
    var mainOption = '<option value="">Select</option>';
    for (var i = 0; i < membersData.length; i++) {
        var option = '<option value=' + membersData[i].state + '>' + membersData[i].state + '</option>';
        mainOption = mainOption + option;
    }

    select.innerHTML = mainOption;
}

createTable(membersData);

//console.log(checkboxes);

//declare createTable function
function createTable(membersData) {
    var trData = document.getElementById('senate-data').innerHTML;
    trData = ""; //now we are clearing the html for trData.

    //create a table with the given data
    var trElem = '';
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
        trElem = trElem + trElement;
    }
    trData = trElem;
    document.getElementById('senate-data').innerHTML = trData;
}

function createData(membersData) {
    //console.log(membersData); We get all the json data from the server.

    var checkForCheckboxesUncheckedState = checkIfCheckboxesUnchecked();
    var selectedOption = document.getElementById('state_select').value;

    if (checkForCheckboxesUncheckedState === true && selectedOption === "") {
        createTable(membersData);
    } else if (checkForCheckboxesUncheckedState === false && selectedOption === "") {
        var newData = []; // create a new array to store new data
        for (var i = 0; i < membersData.length; i++) {
            for (var j = 0; j < checkboxes.length; j++) {
                if (checkboxes[j].checked === true && checkboxes[j].value === membersData[i].party) {
                    newData.push(membersData[i]);
                    break;
                }
            }
        }
        createTable(newData);
    } else if (checkForCheckboxesUncheckedState === true && selectedOption !== "") {
        var newData = []; // create a new array to store new data
        for (var i = 0; i < membersData.length; i++) {
            if (membersData[i].state === selectedOption) {
                newData.push(membersData[i])
            }
        }
        createTable(newData);
    } else {
        var newData = []; // create a new array to store new data
        for (var i = 0; i < membersData.length; i++) {
            for (var j = 0; j < checkboxes.length; j++) {
                if (checkboxes[j].checked === true && checkboxes[j].value === membersData[i].party &&
                    membersData[i].state === selectedOption) {
                    newData.push(membersData[i]);
                    break;
                }
            }

        }
        createTable(newData);
    }

}

//check whether all checkboxes are unchecked. If all are unchecked return true, else return false

function checkIfCheckboxesUnchecked() {
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            return false;
        }
    }

    return true;
}

//attach change event to all checkboxes

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function () {
        //now we are going to create a new data using the checkbox checked conditions 
         
    });
}

//attach change event for selectbox

document.getElementById('state_select').addEventListener('change', function () {
    createData(membersData);
})