
fetch('https://api.propublica.org/congress/v1/113/house/members.json', {
  method: 'GET', // or 'PUT' // data can be `string` or {object}!
  headers:{
    'X-API-Key': 'pmO3I5rettM9agbbSru7AVPLpl7QLFuXY6hsFMPW'
  }
}).then(function(response){
    return response.json();
}).then(function (data) {
    var membersData = data.results[0].members;
    
    //vue code goes here..
    createVueApp (membersData);
});

function createVueApp(membersData) {
    var app = new Vue({
        el: '#house-data',
        data: {
            members: membersData,
            states: membersData,
            checkedParty: [],
            selectedState: ''
        },
         methods: {
            createData: function () {
                if (this.checkedParty.length === 0 && this.selectedState === '') {
                    this.members = membersData
                    return this.members;
                } else if(this.checkedParty.length !== 0 && this.selectedState === ''){
                    var result = [];
                    for (var i = 0; i < membersData.length; i++) {
                        for (var j = 0; j < this.checkedParty.length; j++) {
                            if (membersData[i].party === this.checkedParty[j]) {
                                result.push(membersData[i]);
                            }
                        }
                    }
                    this.members = result;
                    return this.members;
                } else if(this.checkedParty.length === 0 && this.selectedState !== ''){
                    var result = [];
                    for (var i = 0; i < membersData.length; i++) {
                       if (membersData[i].state === this.selectedState) {
                                result.push(membersData[i]);
                            } 
                    }
                    this.members = result;
                    return this.members;
                } else {
                    var result = [];
                    for (var i = 0; i < membersData.length; i++) {
                        for (var j = 0; j < this.checkedParty.length; j++) {
                            if (membersData[i].party === this.checkedParty[j] 
                                && membersData[i].state === this.selectedState) {
                                result.push(membersData[i]);
                            }
                        }
                    }
                    this.members = result;
                    return this.members;
                }
            },
            changeParty: function () {
                this.createData();
            },
            changeState: function() {
                this.createData();
            }
        }
    })
}
