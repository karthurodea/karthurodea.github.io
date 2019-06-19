/*My code loops through an array of memories when a button is clicked,
choose a memory at random, and display the memory in a text box.*/

var memory = [
    "Your AMHS yearbook line about the 'many adventures with Pete and Gabe' was so cool. I stole it and used it in my yearbook for my many adventures with Seth and Jake.",
    "Vanessa's VHS tape.",
    "The DVDs you bought on the black market in Peru.  When I was a high school senior I'd watch the final scene of The Matrix before bed a few times a week.  I was also permanently scarred by the copy of El exorcista.",
    "Your wall of academic and athletic achievement in your bedroom.  I spent a lot of time looking at the different mementos wanting the same for myself.",
    "Enormous, gross boogers dangling from your finger in the silver Saab.",
    "The epic games of darts we played at that bar in NYC.",
    "When you demonstrated how to cup farts and hold them to the face/nose for maximum impact (and how I was almost killed showing Dad).",
    "The trip with Dad to the Robert Trent Jones trail.",
    "Playing air instruments in the car while the Boss blared.",
    "A casual game of catch in the front yard that resulted in a spinning head, vomit, and a hot shower.",
    "An off campus college party when I was 15 (maybe 16).",
    "Caramel brownies or canned tuna for breakfast.",
    "Visiting Carol at Elon with you, Conor, and his clumsy p*nis.",
    "Walking down a street in Bermuda/BVIs/somewhere outside the country when a stranger asked us in passing if we wanted some 'herb' or 'rock'.  His question immediately went over my head, until you asked me a few moments later, 'Oh I'm sorry, did you want some crack?",
    "Your best man speech at my wedding.",
    "An improbable tie followed by an under-appeal victory for you at Wintonberry Hills Golf Course.",
    "When you yelled out the Saab window at Richard Mason 'Smoke a bone Mason!'  I used that line A LOT on my friends.",
    "Epic crotch grabs off the driveway plow kicker.",
    "Playing golf with your hand-me-down irons until I die.",
    "The (long) night before Conor's wedding.",
    "Sweating profusely watching the World Cup 2008 at your Somerville apartment.",
    "Playing goalie in the yard while you and Pete O'Dea kicked blistering shots on net and made me retrieve the misses.",
    "When you pooped with the door open with Conor and me at the Mont Tremblant condo.",
    "A couple beers on Boylston Street in Boston followed by new sneakers at the Bodega on Mass Ave after you bachelor party.",
    "The look of disbelief on my friends' faces when you gulped full solo cups while playing drinking games.  They still talk about it.",
    "Weight gain contests at Thanksgiving.",
    "My come-from-behind victory at the Arlington Turkey Trot.",
    "When Briana and I visited you and Bailey in NYC: the Museum of Natural History, bar games, Thai food.",
    "'The Flip' at Carol's wedding.",
    "'The Flip' at your wedding.",
    "When 'Happy Birthday' was written on my butt cheeks to celebrate Carol's birthday.",
    "When you had Sam Claro over and he walked into the playroom while Joe O'Gorman and I were playing video games and ruined Joe's' childhood.",
    "Putting the grill fork on the home phone receiver during Carol's boyfriend phone calls.",
    "A meaningful night of talking at your Wilton house.",
    "A few spot starts on your slow-pitch softball team.",
    "Waiting with Conor for you in the AMHS lobby so we could all ride home from school.",
    "Wearing your hand-me-down clothes:  The Notre Dame jacket; your HS soccer jacket; your soccer shinguards that were molded for your legs, not mine; and so many others ...",
    "My John Deere hat ... my all-time favorite.",
    "An older brother to emulate, admire, brag about, and compete with until we're old and crusty and full of great memories.",
];


function generateMemory() {
	$("#container").empty();
	var delayInMilliseconds = 1500;
    for (i = 0; i < memory.length; i++) {
    	var randomMemory = memory [Math.floor(Math.random() * memory.length)];
    };
    delayInMilliseconds;
    var card = document.createElement("P");
    var showMemory = document.createTextNode(randomMemory);
   	card.appendChild(showMemory);
 	document.getElementById("container").appendChild(card);
    var border = document.getElementById("container");
    border.classList.add("container");
    _hsq.push(["trackEvent", {
        id: "000007052793",
    }]);
};



