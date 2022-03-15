
/*fact variable*/
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

/*random facts*/
$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
});


/*pink text*/
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink");
});

/*orange text*/
$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange");
});

/*green text*/
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green");
});

/*grow box size*/
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
});

/*shrink box size*/
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
});