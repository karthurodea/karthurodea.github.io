//separate the cookie string into an array
//loop through the array to find the hubspotutk
//parse the hubspotutk value after the = sign
//assign the value to a variable called hutk


var utk;
var hsContact;
var hsContext = new Object();


$(document).ready( function getCookie () {
    var cookieArray = document.cookie.split(';');
    for (i = 0; i < cookieArray.length; i++) {
        var cookieArray2 = cookieArray[i].split("=");
        if (cookieArray2[0] == ("hubspotutk")) {
            utk = cookieArray2[1];
            hsContext.hutk = utk;
            hsContext.pageUri = window.location.href;
            hsContext.pageName = document.title;
          break;
        }
        else if (cookieArray2[0] == (" " + "hubspotutk")) {
            utk = cookieArray2[1];
            hsContext.hutk = utk;
            hsContext.pageUri = window.location.href;
            hsContext.pageName = document.title;
          break;
        };
        console.log(hsContext);
  }});

// on form submit convert data to required format for HubSpot
// send data through HubSpot Form

// $("#salesEngineer").submit(function(event) {
//     event.preventDefault();
//     meetingRequest = ($("#salesEngineer").serializeArray());
//     hsContact = '{ "fields": ' + JSON.stringify(meetingRequest) + ', ' + '"context": ' + JSON.stringify(hsContext) + ',' + '"skipValidation": false' + ' }';
//       $.ajax({
//         type: "POST",
//         url: "salesEngineer.php",
//         contentType: "application/json",
//         data: hsContact,
//         success: function(){
//           var card = document.createElement("P");
//           var confirmation = document.createTextNode("Success! Your Request Has Been Submitted!");
//           $("#salesEngineer").empty();
//           card.appendChild(confirmation);
//           document.getElementById("salesEngineer").appendChild(card);
//         },
//     });
// });

