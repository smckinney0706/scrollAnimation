// $(document).scroll(function(){
// 	console.log( $(document).scrollTop() );

// 	$("#frontclouds").css("left", String($(document).scrollTop() - 250) + "px" );
// 	$("#middleclouds").css("left", String($(document).scrollTop() * .5) + "px" );
// 	$("#backclouds").css("left", String($(document).scrollTop() * .2) + "px" );
// });

// $(document).scroll(function(){
// 	// console.log( $(document).scrollTop() );

// 	$("#frontclouds").css("left", String($(document).scrollTop() - 250) + "px" );
// 	$("#middleclouds").css("left", String($(document).scrollTop() * .5) + "px" );
// 	$("#backclouds").css("left", String($(document).scrollTop() * .2) + "px" );
// });

// $(document).mousemove(function(p){
// 	// console.log(p.pageX + "," + p.pageY);
// 	if(p.pageX > 500 && p.pageX < 700){
// 		$("#frontclouds").css("left", String(p.pageX - 700) + "px" );
// 		$("#middleclouds").css("left", String(p.pageX * .5 - 300) + "px" );
// 		$("#backclouds").css("left", String(p.pageX * .2 - 100) + "px" );
// 	}
	
// });



// $(document).scroll(function(){
// 	 console.log( $(document).scrollTop() );
	 
// 	 $("#row1").css("right", String($(document).scrollTop() - 1000) + "px");

// 	 if ( $(document).scrollTop() > 0 ) {
// 	 	$("#row2").css("left", String($(document).scrollTop() - 1000) + "px");
// 	 }
	 
// });


var animationCount = 0;
var guyMoving = false;
var moveGuyTimer


function showNum(){
	animationCount++;
	if(animationCount > 3){
		animationCount = 2;
		clearInterval(moveGuyTimer);
		guyMoving = false;
	}
	if(animationCount == 1){
		document.getElementById("character").style.backgroundPosition = "0px 0px";
		// $("#character").css("background-position", "0px 0px");
	} else if (animationCount == 2){
		document.getElementById("character").style.backgroundPosition = "293.2px 0px";
		// $("#character").css("background-position", "293.2px 0px");
	} else if (animationCount == 3){
		document.getElementById("character").style.backgroundPosition = "586.4px 0px";
		// $("#character").css("background-position", "586.4px 0px");
	}
}

$(document).scroll(function(){
	if(guyMoving == false){
		moveGuyTimer = setInterval(showNum, 250);
		guyMoving = true;
	}
	
});














