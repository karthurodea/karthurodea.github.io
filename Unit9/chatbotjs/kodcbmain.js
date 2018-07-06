
//in response to each form submission, run primary function 'returnDave'.
document.getElementById('chatForm').addEventListener('submit', function(event){
    event.preventDefault();
   returnDave();
});


//primary function that switches between cases looking for a match between the user's input and pre-defined responses from Hal


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
            text = "You're welcome";
            break;
        default:
            text = "Sorry, I can't help with that";
            break;
    }
    document.getElementById("hal").innerHTML += text + "<br/>";
}

//function that tells the user what day it is.

function whatdayisit() {
    var date = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayoftheweek = weekdays[date.getDay()];
    document.getElementById("hal").innerHTML += dayoftheweek + "<br/>";
}

//function that runs a for loop 

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

//function to randomly choose someone from class for elimination

function shrinkjsrRoster() {
    var davesInput = document.getElementById('chatInput').value;
    var classRoster = ["Sonyl", "Courtney", "Kevin", "Alex", "Alexis", "Andrew", "Bernardo", "Brandon", "Colburn", "Courtney P", "David", "Diana", "Ejaz", "Joana", "Josh", "Kaitlyn", "Kalynne", "Katie", "Myriam", "Nikki", "Tenny", "Timothy"];
    var rand = classRoster[Math.floor(Math.random() * classRoster.length)];
    var text = "Ok, I've removed ";
    var textrand = text + rand;
    document.getElementById("hal").innerHTML += textrand + "<br/>";
}
