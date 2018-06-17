$(document).ready(function() {
	var itemName
    $('.sert').hover(function(event) {
    	itemName = $(event.currentTarget).text();
    	$.getJSON('static/js/title.json', function(data) {
	       	for (var i = 0; i < data.titles.length; i++) {
	       		if (itemName.toUpperCase() === data.titles[i].key.toUpperCase()) {
	       			$(event.currentTarget).attr('data-title', data.titles[i].title);
	       		}
	       	}
	    });
    });
});
