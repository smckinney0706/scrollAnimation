// $(document).scroll(function(){
// 	console.log( $(document).scrollTop() );

// 	$("#frontclouds").css("left", String($(document).scrollTop() - 250) + "px" );
// 	$("#middleclouds").css("left", String($(document).scrollTop() * .5) + "px" );
// 	$("#backclouds").css("left", String($(document).scrollTop() * .2) + "px" );
// });

$(document).scroll(function(){
	// console.log( $(document).scrollTop() );

	$("#frontclouds").css("left", String($(document).scrollTop() - 250) + "px" );
	$("#middleclouds").css("left", String($(document).scrollTop() * .5) + "px" );
	$("#backclouds").css("left", String($(document).scrollTop() * .2) + "px" );
});

$(document).mousemove(function(p){
	// console.log(p.pageX + "," + p.pageY);
	if(p.pageX > 500 && p.pageX < 700){
		$("#frontclouds").css("left", String(p.pageX - 700) + "px" );
		$("#middleclouds").css("left", String(p.pageX * .5 - 300) + "px" );
		$("#backclouds").css("left", String(p.pageX * .2 - 100) + "px" );
	}
	
});



$(document).scroll(function(){
	 console.log( $(document).scrollTop() );
	 
	 $("#row1").css("right", String($(document).scrollTop() - 1000) + "px");

	 if ( $(document).scrollTop() > 0 ) {
	 	$("#row2").css("left", String($(document).scrollTop() - 1000) + "px");
	 }
	 
});