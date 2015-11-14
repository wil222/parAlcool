function initTF() {
	var container = document.querySelectorAll('.boolbutton');
	//var truediv;
	//var falsediv;
	for (var i=0; i<container.length; i++) {
		var value = container[i].getAttribute('valllue');
		var truediv = document.createElement('div');
		truediv.appendChild(document.createTextNode('VRAI'));
		var falsediv = document.createElement('div');
		falsediv.appendChild(document.createTextNode('FAUX'));
		if(value === 'true') {
			truediv.className ='correct';
			falsediv.className = 'incorrect';
		}
		else if(value === 'semitrue') {
			truediv.className ='semicorrect';
			falsediv.className ='semicorrect';
		}
		else {
			truediv.className ='incorrect';
			falsediv.className ='correct';
		}
		addTFListener(truediv, falsediv, container[i].getAttribute('aria-controls'));
		container[i].appendChild(truediv);
		container[i].appendChild(falsediv);
	}
}

function truefalse(id, value) {
	console.log('.boolbutton ' + id);
	var elements = document.querySelectorAll('.boolbutton');
	var div;
	for (var i=0 ; i<elements.length; i++) {
		if (elements[i].getAttribute('aria-controls') === id) {
			div = elements[i];
		}
	}
	console.log(div + ' ' + value);
	if(value == true) {
		div.firstChild.className += ' answered';
		div.lastChild.className += ' unanswered';
	}
	else {
		div.firstChild.className += ' unanswered';
		div.lastChild.className += ' answered';
	}
}

function score(id) {
	var optionlist = document.getElementById(id);
	var display = document.getElementById('test1-score');
	var value = optionlist.options[optionlist.selectedIndex].value;
	var previous_value = optionlist.getAttribute('previous_value');
	console.log(display.innerHTML);
	display.innerHTML = parseInt(display.innerHTML) + parseInt(value) - parseInt(previous_value);
	optionlist.setAttribute('previous_value', value);
}

function addTest1Listener(id) {
	document.getElementById(id).addEventListener('click', function() {score(id);}, false);
	document.getElementById(id).setAttribute('previous_value', 0);
	document.getElementById(id).value = 0;
}

function addTFListener(t,f,id) {
	t.addEventListener('click', function() {truefalse(id, true);}, false);
	f.addEventListener('click', function() {truefalse(id, false);}, false);
}

function initTest1() {
	for(var i=1; i<11; i++) {
		addTest1Listener('q1-'+i);
	}
}
	

initTF();
initTest1();
