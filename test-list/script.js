var title = document.getElementsByTagName('title');

switch (title[0].text) {
	case 'List1': _get('list1.json', 'name', 'surname');
		break;
	case 'List2': _get('list2.json', 'city', 'country');
		break;
}

function find(array, value) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].getAttribute('id') == value) return array[i];
	}
}

function _sort() {
	var collection = document.getElementsByTagName('ul');
	var list = [];
	for (var i = 0; i < collection.length; i++) {
		list.push(collection[i]);
	}
	list.sort(compare.bind(null, 'id'));
	content.innerHTML = '';
	for (var i = 0; i < list.length; i++) {
		var elems = list[i].getElementsByTagName('li');
		var array = [];
		for (var j = 0; j < elems.length; j++) {
			array.push(elems[j]);
		}		
		array.sort(compare.bind(null, 'innerText'));
		list[i].childNodes.innerHTML = '';
		for (var k = 0; k < array.length; k++) {
			list[i].appendChild(array[k]);
		}
		content.appendChild(list[i]);
	}
}

function compare(val, x, y) {
	switch (val) {
		case 'surname':
			if ( x.surname < y.surname ) return -1;
	  	if ( x.surname > y.surname ) return 1;
  	case 'country':
			if ( x.country < y.country ) return -1;
	  	if ( x.country > y.country ) return 1;
  	case 'id':
  		if ( x.id < y.id ) return -1;
	  	if ( x.id > y.id ) return 1;
  	case 'innerText':
  		if ( x.innerText < y.innerText ) return -1;
	  	if ( x.innerText > y.innerText ) return 1;
	}
  return 0;
}

function popUp() {
	Array.prototype.slice.call(document.querySelectorAll('#content div.stick')).forEach(function(a) {
		var b = null, P = 0;
		window.addEventListener('scroll', _scroll, false);
		document.body.addEventListener('scroll', _scroll, false);
		function _scroll() {
		  if (b == null) {
		    var Sa = getComputedStyle(a, ''), s = '';
		    for (var i = 0; i < Sa.length; i++) {
		      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
		        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
		      }
		    }
		    b = document.createElement('div');
		    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
		    a.insertBefore(b, a.firstChild);
		    var l = a.childNodes.length;
		    for (var i = 1; i < l; i++) {
		      b.appendChild(a.childNodes[1]);
		    }
		    a.style.height = b.getBoundingClientRect().height + 19 + 'px';
		    a.style.padding = '0';
		    a.style.border = '0';
		  }
		  var Ra = a.getBoundingClientRect(),
		      R = Math.round(Ra.top + b.getBoundingClientRect().height - a.parentNode.getBoundingClientRect().bottom + parseFloat(getComputedStyle(a.parentNode, '').paddingBottom.slice(0, -2)));
		  if ((Ra.top - P) <= 0) {
		    if ((Ra.top - P) <= R) {
		      b.className = 'stop';
		      b.style.top = - R +'px';
		    } else {
		      b.className = 'sticky';
		      b.style.top = P + 'px';
		    }
		  } else {
		    b.className = '';
		    b.style.top = '';
		  }
		  window.addEventListener('resize', function() {
		    a.children[0].style.width = getComputedStyle(a, '').width
		  }, false);
		}
	})
}

function _get(listName, dataValue1, dataValue2) {
	$.getJSON(listName, function(data) {
		data.sort(compare.bind(null, dataValue2));
		var content = document.getElementById('content');
		for (var i = 0; i < data.length; i++) {
			switch (dataValue2) {
				case 'surname': 
					var ul = data[i].surname.charAt(0);
					var li = data[i].surname + ' ' + data[i].name;
					break;
				case 'country': 
					var ul = data[i].country;
					var li = data[i].city;
					break;
			}
			
			var list = document.getElementsByTagName('ul');

			if (list.length > 0) {
				var _li = document.createElement('li');
				_li.innerHTML = li;
				var elem = find(list, ul);			
				if (elem !== undefined) {
					elem.appendChild(_li);
				} else {
					var _ul = document.createElement('ul');
					_ul.setAttribute('id', ul);
					_ul.innerHTML = '<div class="stick">' + ul + '</div>';
					content.appendChild(_ul);
					_ul.appendChild(_li);
				}
			} else {
				var _ul = document.createElement('ul');
				var _li = document.createElement('li');			
				_ul.setAttribute('id', ul);
				_ul.innerHTML = '<div class="stick">' + ul + '</div>';
				content.appendChild(_ul);
				_li.innerHTML =li;
				_ul.appendChild(_li);
			}
			_sort();
		}
		popUp();
	});
}