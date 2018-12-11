//separate the cookie string into an array
//loop through the array to find the hubspotutk
//parse the hubspotutk value after the = sign
//assign the value to a variable called hutk


var utk;
var hsContact;
var block;
// var hsContext = new Object();
var hsContext = [];
var meetingRequest1 = [];
var firstName;
var lastName;
var email;

$(document).ready( function getCookie () {
    var cookieArray = document.cookie.split(';');
    for (i = 0; i < cookieArray.length; i++) {
        var cookieArray2 = cookieArray[i].split("=");
        if (cookieArray2[0] == ("hubspotutk")) {
            utk = cookieArray2[1];
            hsContext.push("hutk=" + utk);
            hsContext.push("&pageUrl=" + window.location.href);
            hsContext.push("&pageName=" + document.title);
            hsContact = "&hs_context=" + encodeURIComponent(JSON.stringify(hsContext));
            console.log(hsContact);
          break;
        }
        else if (cookieArray2[0] == (" " + "hubspotutk")) {
            utk = cookieArray2[1];
            hsContext.push("hutk=" + utk);
            hsContext.push("&pageUrl=" + window.location.href);
            hsContext.push("&pageName=" + document.title);
            hsContact = "&hs_context=" + encodeURIComponent(JSON.stringify(hsContext));
            console.log(hsContact);
          break;
        };
  }});

// on form submit convert data to required format for HubSpot
// send data through HubSpot Form

$("#salesEngineer").submit(function(event) {
    event.preventDefault();
    meetingRequest = ($("#salesEngineer").serializeArray());
    firstName = meetingRequest[0].value;
    lastName = "&" + meetingRequest[1].value;
    email = "&" + meetingRequest[2].value;
    block = "firstname=" + firstName + lastName + email;
    console.log(block + hsContact);
    //   $.ajax({
    //     type: "POST",
    //     url: "salesEngineer.php",
    //     contentType: "application/json",
    //     data: hsContact,
    //     success: function(){
    //       var card = document.createElement("P");
    //       var confirmation = document.createTextNode("Success! Your Request Has Been Submitted!");
    //       $("#salesEngineer").empty();
    //       card.appendChild(confirmation);
    //       document.getElementById("salesEngineer").appendChild(card);
    //     },
    // });
});



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
