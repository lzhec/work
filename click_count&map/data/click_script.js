$(document).ready(function(){
	
	var refname;
	var coordX, coordY;
	var now;
	var hour;
	
	$('div').click(function(event){	
		refname = $(event.currentTarget).text();

		$.get(
			'data/bd_click_table_interact.php',
			{refname: refname}
		);
	});
	
	$('html').click(function(event){	
		coordX = event.clientX;
		coordY = event.clientY;
		now = new Date();
		hour = (now.getHours() + now.getMinutes()/60).toFixed(2);
		
		$.get(
			'data/bd_clickcoords_table_interact.php',
			{coordX: coordX, coordY: coordY}
		);
		
		$.get(
			'data/bd_activity_table_interact.php',
			{hour: hour}
		);
	});
});
