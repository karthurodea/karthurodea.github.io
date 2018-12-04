//separate the cookie string into an array
//loop through the array to find the hubspotutk
//parse the hubspotutk value after the = sign
//assign the value to a variable called hutk

$(document).ready( function getCookie () {
    var cookieArray = document.cookie.split(';');
    for (i = 0; i < cookieArray.length; i++) {
        var cookieArray2 = cookieArray[i].split("=");
        if (cookieArray2[0] == (" " + "hubspotutk")) {
            hutk = cookieArray2[1];
            console.log(hutk);
            break;
        }
    }});

// on form submit convert data to required format for HubSpot

// $("#salesEngineer").submit(function(event) {
//     event.preventDefault();
//     meetingRequest = ($("#salesEngineer").serializeArray());
//     var hsContact = '{ "fields": ' + JSON.stringify(meetingRequest) + ',' + '"context": {' + '"hutk": ' + '"' + hutk + '"' '},' + '}';
//     console.log(hsContact);
// };
    
// send data through HubSpot Form

//     $.ajax({
//       type: "POST",
//       url: "https://api.hsforms.com/submissions/v3/integration/submit/416460/90d3ce76-0563-4f6a-91f7-e2a0415ad9e9",
//       contentType: "application/json",
//       data: hsContact,
//       success: function(){
//           var card = document.createElement("P");
//           var confirmation = `<div>
//             <h1>Your Request Has Been Submitted!</h1>
//             </div>`;
//           var submission = document.createTextNode(confirmation);
//           card.appendChild(confirmation);
//           document.getElementById("salesEngineer").appendChild(card);
//     $("#salesEngineer").empty();
//     $("#salesEngineer").append(confirmation);
//       },
//     });
// });

// var card = document.createElement("P");
//     var showMemory = document.createTextNode(randomMemory);
//     card.appendChild(showMemory);
//   document.getElementById("container").appendChild(card);
//     var border = document.getElementById("container");
//     border.classList.add("container");