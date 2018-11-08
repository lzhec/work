$(document).ready(function(){
	
	var coordX, coordY;
	var now;
	var hour;
		
	$('html').click(function(event){	
		coordX = event.clientX + window.pageXOffset;
		coordY = event.clientY + window.pageYOffset;
		now = new Date();
		hour = (now.getHours() + now.getMinutes()/60).toFixed(2);
		
		$.get(
			'../app/helpers.php',
			{coordX: coordX, coordY: coordY}
		);
		
		$.get(
			'../app/helpers.php',
			{hour: hour}
		);
	});
});
