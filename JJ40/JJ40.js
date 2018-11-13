

var memory = [
    "Your AMHS yearbook line about the 'many adventures with Pete and Gabe was so cool, I stole it in my yearbook.",
    "Vanessa's VHS tape.",
    "The DVDs you bought on the black market in Peru.  When I was a HS Senior I'd watch final scene of The Matrix before bed a few times a week.",
    "Your wall of academic and athletic achievement in your bedroom.  I used to stare at that wall wanting the same for myself.",
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
    "Wintonberry Hills Golf Course.",
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
];


function generateMemory() {
	$("#container").empty();
	var delayInMilliseconds = 1500;
    for (i = 0; i < memory.length; i++) {
    		var rand = memory [Math.floor(Math.random() * memory.length)];
        };
        	delayInMilliseconds;
        	var card = document.createElement("P");
        	var showMemory = document.createTextNode(rand);
   			card.appendChild(showMemory);
 			document.getElementById("container").appendChild(card);
    };



