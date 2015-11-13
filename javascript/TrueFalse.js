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
			truediv.className += " answered";
			falsediv.className += " unanswered";
		}
		else if(value === 'semitrue') {
			truediv.className ='semicorrect';
			falsediv.className ='semicorrect';
			truediv.className += " answered";
			falsediv.className += " answered";
		}
		else {
			truediv.className ='incorrect';
			falsediv.className ='correct';
			truediv.className += " unanswered";
			falsediv.className += " answered";
		}
		container[i].appendChild(truediv);
		container[i].appendChild(falsediv);
	}
}

function truefalse() {
	
}

initTF();
