$(document).ready(function(){
	
	var refname;
	var coordX, coordY;
	
	$('div').click(function(event){	
		refname = $(event.currentTarget).text();

		$.get(
			'bd_click_table_interact.php',
			{refname: refname}
		);
	});
	
	$('html').click(function(event){	
		coordX = event.clientX;
		coordY = event.clientY;

		$.get(
			'bd_clickcoords_table_interact.php',
			{coordX: coordX, coordY: coordY}
		);
	});
});
