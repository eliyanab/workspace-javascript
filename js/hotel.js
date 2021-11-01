// save the registration whenever you click the submit
var guestGroup = [];
function saveReg(){
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#num').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        room: $('#room').val(),
        display: function(){
            return this.name+" reserved " + this.room + " from " + this.checkin + " to " + this.checkout;
        }
    };
    guestGroup.push(guest);
    console.log(guest.display());
}

$('#submit').click(saveReg);
function displayR(){
    for(i in guestGroup){
        var guest = guestGroup[i];
        console.log(guest.display());
    }
}
$('#lists').click(displayR);