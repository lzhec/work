$(document).ready(function(){
	
	var refname;
	var coordX, coordY;
	var now;
	var hour;
	
	$('div').click(function(event){	
		refname = $(event.currentTarget).text();

		$.get(
			'data/count.php',
			{refname: refname}
		);
	});
	
	$('html').click(function(event){	
		coordX = event.clientX + window.pageXOffset;
		coordY = event.clientY + window.pageYOffset;
		now = new Date();
		hour = (now.getHours() + now.getMinutes()/60).toFixed(2);
		
		$.get(
			'data/map.php',
			{coordX: coordX, coordY: coordY}
		);
		
		$.get(
			'data/graph.php',
			{hour: hour}
		);
	});
});
