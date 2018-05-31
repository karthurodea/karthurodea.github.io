
document.getElementById('chatForm').addEventListener('submit', function(event){
    event.preventDefault();
   returnDave();
});

//global variables


//switch between cases looking for a match between dave's input and pre-defined responses


function returnDave() {
    var davesInput = document.getElementById('chatInput').value;
    document.getElementById('dave').innerHTML += davesInput + "<br/>";
    switch(davesInput) {
        case "Hal, what day is Today?":
            whatdayisit();
            break;
        case "Hal, who is in the JSR-508 Class?":
            jsrRoster();
            break;
        case "Hal, please eliminate someone from the JSR-508 Class":
            shrinkjsrRoster();
            break;
        case "Thanks":
            text = "You're welcome, Dave";
            break;
        default:
            text = "Sorry Dave, I can't help with that";
            break;
    }
    document.getElementById("hal").innerHTML += text + "<br/>";
}

//run a for loop that displays the class roster in Hal's window


function whatdayisit() {
    var date = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayoftheweek = weekdays[date.getDay()];
    document.getElementById("hal").innerHTML += dayoftheweek + "<br/>";
}


function jsrRoster() {
    var davesInput = document.getElementById('chatInput').value;
    var classRoster = ["Sonyl", "Courtney", "Kevin", "Alex", "Alexis", "Andrew", "Bernardo", "Brandon", "Colburn", "Courtney P", "David", "Diana", "Ejaz", "Joana", "Josh", "Kaitlyn", "Kalynne", "Katie", "Myriam", "Nikki", "Tenny", "Timothy"];
    var text = "The students enrolled in JSR-508 are: ";
    var i;
    for (i = 0; i < classRoster.length; i++) {
        text += classRoster[i] + ", ";
    }
    document.getElementById("hal").innerHTML += text + "<br/>";
}

// use a random function to choose someone from class and eliminate him/her

function shrinkjsrRoster() {
    var davesInput = document.getElementById('chatInput').value;
    var classRoster = ["Sonyl", "Courtney", "Kevin", "Alex", "Alexis", "Andrew", "Bernardo", "Brandon", "Colburn", "Courtney P", "David", "Diana", "Ejaz", "Joana", "Josh", "Kaitlyn", "Kalynne", "Katie", "Myriam", "Nikki", "Tenny", "Timothy"];
    var rand = classRoster[Math.floor(Math.random() * classRoster.length)];
    var text = "Ok, I've removed ";
    var textrand = text + rand;
    document.getElementById("hal").innerHTML += textrand + "<br/>";
}




// use a random function to choose someone from class and eliminate him/her



/* BEGIN COMMENTS
//Global Variables

var date = new Date();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayoftheweek = weekdays[date.getDay()];


var message = document.getElementByID('chatInput').value;


function getChat() {
document.getElementById('chatForm').addEventListener('submit', function(event){
    event.preventDefault();
  var message = document.getElementById('chatInput').value;
  console.log(message);

function evaluateChat() {
    if (chat == "Hal, who is in the JSR-508 Class?") {
        document.getElementById('hal').innerHTML += classRoster();
    }
    if (chat == "Hal, remove someone from class") {
        document.getElementById('hal').innerHTML += shrinkRoster();
    }
}


document.addEventListener("click", function(){
    document.getElementById("hal").innerHTML = "Good Morning, Dave";
});



var formData = JSON.stringify($("chatForm").serializeArray());

var formData = new FormData();

formData.append("chatInput")

src="chatbotjs/kodcbmain.js"
	

var davesInput = document.getElementById("chatInput").value;
document.getElementById("chatInput", function(){
	if (chatInput = "Hal, what day is Today?") {
	document.getElementById("dave").innerHTML = "Hal, what day is Today?";
	document.getElementByID("hal").innerHTML = today
	}
  
};

function myFunction() {
var text;
var davesInput = document.getElementById("chatInput").value;

    switch(questions) {
        case "Hal, what day is Today?":
            text = "Today is Sunday";
        break;
        case "Hal, who is in the JSR-508 Class?":
        text = "Kevin is in JSR-508";
        break;
        case "Hal, please eliminate someone from the JSR-508 Class":
        text = "I've removed Kevin from JSR-508";
        break;
        default:
        text = "Sorry Dave, I can't help with that";
    }
    document.getElementById("hal").innerHTML = text;
}

*/

