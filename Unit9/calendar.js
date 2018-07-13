//construct FormData object with data from my contact form.

$("#teeTime").submit(function(event) {
	event.preventDefault();
	teeTime = ($("#teeTime").serializeArray());
	var comboTeeTime = '{ "fields": ' + JSON.stringify(teeTime) + '}';
// $.post('https://api.hsforms.com/submissions/v3/integration/submit/416460/e4a90282-b8cc-4e2f-9990-a0fc715657ad', teeTime, function(data){
// 	console.log(data);
	// var playdate = teeTime[3].value;
	// new Date(teeTime[3].value).getTime();

	$.ajax({
	  type: "POST",
	  url: "https://api.hsforms.com/submissions/v3/integration/submit/416460/e4a90282-b8cc-4e2f-9990-a0fc715657ad",
	  contentType: "application/json",
	  data: comboTeeTime,
	  success: function(){
	  	alert("Your Tee Time Is Booked!");
	  },
	});
});

//var unixPlayDate = 

// function appointment() {
// var request = new XMLHttpRequest();
// request.open('POST', 'https://api.hsforms.com/submissions/v3/integration/submit/416460/e4a90282-b8cc-4e2f-9990-a0fc715657ad', false);
// request.setRequestHeader("Content-Type", "application/json");
// request.send(teeTime);
// };


// document.getElementById('teeTime').addEventListener('submit', function(event){
//     event.preventDefault();
//    teeTime();
// });


// function teeTime(data) {
// var xhr = new XMLHttpRequest();
// var urlEncodedData = "";
// var urlEncodedDataPairs = [];
// var name;
// //Turn the data object into an array of URL-encoded key/value pairs.
// for (name in data) {
// 	urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
// }

// //combine the pairs into a single string and replace all %-encoded spaces to 
// //the '+' character; matches the behaviour of browser form submissions.

// urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

// //define what happens on successful data submission

// xhr.addEventListener('load', function(event){
// 	alert('Yeah! Data sent and response loaded.');
// });

// //define what happens in case of error
// xhr.addEventListener('error', function(event){
// 	alert('Oops! Something went wrong.');
// });

// //setup the request

// xhr.open('POST', 'https://api.hubapi.com/calendar/v1/events/task?hapikey=39027ebe-41be-4022-bf0b-3414b8116a62');

// //add the required HTTP header for the form data POST requests
// xhr.setRequestHeader('Content-Type', 'application/json');

// //send the data!

// xhr.send(urlEncodedData);
// };