/*My code loops through an array of memories when a button is clicked,
choose a memory at random, and display the memory in a text box.*/

var memory = [
    "1. Your AMHS yearbook line about the 'many adventures with Pete and Gabe' was so cool. I stole it and used it in my yearbook for my many adventures with Seth and Jake.",
    "2. Vanessa's VHS tape.",
    "3. The DVDs you bought on the black market in Peru.  When I was a high school senior I'd watch the final scene of The Matrix before bed a few times a week.  I was also permanently scarred by the copy of The Exorcist.",
    "4. Your wall of academic and athletic achievement in your bedroom.  I spent a lot of time looking at the different mementos wanting the same for myself.",
    "5. Enormous, gross boogers dangling from your finger in the silver Saab.",
    "6. The epic games of darts we played at that bar in NYC.",
    "7. When you demonstrated how to cup farts and hold them to the face/nose for maximum impact (and how I was almost killed showing Dad).",
    "8. The trip with Dad to the Robert Trent Jones trail.",
    "9. Playing air instruments in the car while the Boss blared.",
    "10. A casual game of catch in the front yard that resulted in a spinning head, vomit, and a hot shower.",
    "11. An off campus college party when I was 15 (maybe 16).",
    "12. Caramel brownies or canned tuna for breakfast.",
    "13. Visiting Carol at Elon with you, Conor, and his clumsy p*nis.",
    "14. Walking down a street in Bermuda/BVIs/somewhere outside the country when a stranger asked us in passing if we wanted some 'herb' or 'rock'.  His question immediately went over my head, until you asked me a few moments later, 'Oh I'm sorry, did you want some crack?",
    "15. Your best man speech at my wedding.",
    "16. An improbable tie followed by an under-appearl victory for you at Wintonberry Hills Golf Course.",
    "17. When you yelled out the Saab window at Richard Mason 'Smoke a bone Mason!'  I used that line A LOT on my friends.",
    "18. Epic crotch grabs off the driveway plow kicker.",
    "19. Playing golf with your hand-me-down irons until I die.",
    "20. The (long) night before Conor's wedding.",
    "21. Sweating profusely watching the World Cup 2008 at your Somerville apartment.",
    "22. Playing goalie in the yard while you and Pete O'Dea kicked blistering shots on net and made me retrieve the misses.",
    "23. When you pooped with the door open with Conor and me at the Mont Tremblant condo.",
    "24. A couple beers on Boylston Street in Boston followed by new sneakers at the Bodega on Mass Ave after you bachelor party.",
    "25. The look of disbelief on my friends' faces when you gulped full solo cups while playing drinking games.  They still talk about it.",
    "26. Weight gain contests at Thanksgiving.",
    "27. My come-from-behind victory at the Arlington Turkey Trot.",
    "28. When Briana and I visited you and Bailey in NYC: the Museum of Natural History, bar games, Thai food.",
    "29. 'The Flip' at Carol's wedding.",
    "30. 'The Flip' at your wedding.",
    "31. When 'Happy Birthday' was written on my butt cheeks to celebrate Carol's birthday.",
    "32. When you had Sam Claro over and he walked into the playroom while Joe O'Gorman and I were playing video games and ruined Joe's' childhood.",
    "33. Putting the grill fork on the home phone receiver during Carol's boyfriend phone calls.",
    "34. A meaningful night of talking at your Wilton house.",
    "35. A few spot starts on your slow-pitch softball team.",
    "36. Waiting with Conor for you in the AMHS lobby so we could all ride home from school.",
    "37. Wearing your hand-me-down clothes:  The Notre Dame jacket; your HS soccer jacket; your soccer shinguards that were molded for your legs, not mine; and so many others ...",
    "39. My John Deere hat ... my all-time favorite.",
    "40. An older brother to emulate, admire, brag about, and compete with until we're old and crusty and full of great memories.",
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
};



