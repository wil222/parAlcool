/*
 * Fonctions utilisees pour le vrai-faux sur les idees recues
 */

function initTF() {
	var container = document.querySelectorAll('.boolbutton');
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

function addTFListener(t,f,id) {
	var h1;
	var h2;
	h1 = function() {truefalse(id, true, h1, h2);};
	h2 = function() {truefalse(id, false, h1, h2);}
	t.addEventListener('click', h1, false);
	f.addEventListener('click', h2, false);
}

function truefalse(id, value, h1, h2) {
	var elements = document.querySelectorAll('.boolbutton');
	var div;
	for (var i=0 ; i<elements.length; i++) {
		if (elements[i].getAttribute('aria-controls') === id) {
			div = elements[i];
		}
	}
	if(value == true) {
		div.firstChild.className += ' answered';
		div.lastChild.className += ' unanswered';
	}
	else {
		div.firstChild.className += ' unanswered';
		div.lastChild.className += ' answered';
	}
	div.firstChild.removeEventListener('click', h1);
	div.lastChild.removeEventListener('click', h2);
}

initTF();


/*
 * Fonctions utilisees pour la gestion du premier test
 */

function score1(id) {
	var display = document.getElementById('test1-score');
	var value = id.options[id.selectedIndex].value;
	display.innerHTML = parseInt(display.innerHTML) + parseInt(value) - parseInt(id.getAttribute('previous_value'));
	id.setAttribute('previous_value', value);
}

function addTest1Listener(id) {
	id.addEventListener('change', function() {score1(id);}, false);
	id.addEventListener('keyup', function() {score1(id);}, false);
	id.setAttribute('previous_value', 0);
	id.value = 0;
}

function initTest1() {
	for(var i=1; i<11; i++) {
		addTest1Listener(document.getElementById('q1-'+i));
	}
}

initTest1();

/*
 * Fonctions utilisees pour la gestion du second test
 */

function initTest2() {
	var max = [7,6,4];
	for(var i=1; i<4; i++) {
		for(var j=1; j< max[i-1];j++) {
			addTest2Listener(document.getElementById('q2-'+i+'-'+j));
		}
	}
}

function addTest2Listener(id) {
	id.addEventListener('input', function() {score2(id);}, false);
	id.setAttribute('previous_value', 0);
	id.value = 0;
}

function score2(id) {
	var display = document.getElementById('test2-score');
	var value = id.value;
	display.innerHTML = parseInt(display.innerHTML) + parseInt(value) - parseInt(id.getAttribute('previous_value'));
	id.setAttribute('previous_value', value);
}

initTest2();
	


/*
 * Fonctions utilisees pour la section des commentaires
 */
 
function initComment() {
	var links = document.querySelectorAll('.comment-btn');
	for (var i=0 ; i<links.length; i++) {
		addCommentButtonListener(links[i].getAttribute('id'));
	}
	
	var form = document.forms['newcomment'];
	var button = document.getElementById('newcomment');
	var fct = function() {showCommentArea(form, button, fct);}
	button.addEventListener('click', fct, false);
}

function addCommentButtonListener(id) {
	var form = document.forms[id];
	var button = document.getElementById(id);
	var fct = function() {showCommentArea(form, button, fct);}
	button.addEventListener('click', fct, false);
}

function showCommentArea(form, button, fct) {
	var legend = document.createElement('legend');
	legend.appendChild(document.createTextNode('Votre commentaire'));
	var divtext = document.createElement('div');
	var textarea = document.createElement('textarea'); // TODO placeholder="Commentaire" required
	textarea.placeholder = 'Commentaire';
	textarea.style.resize = 'none';
	textarea.style.rows = 5;
	textarea.style.width = '100%';
	textarea.className = 'textarea';
	textarea.name = 'comment';
	var pseudo = document.createElement('input');
	pseudo.type = 'text';
	pseudo.placeholder = 'Pseudo';
	pseudo.className = 'textarea';
	pseudo.name = 'pseudo';
	var submit = document.createElement('input');
	submit.type = 'submit';
	submit.value = 'Envoyer';
	submit.className = 'btn btn-primary';
	var label = document.createElement('label');
	var checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	var link = document.createElement('a');
	link.href = '#';
	link.appendChild(document.createTextNode('conditions d\'utilisation'));
	var nb = document.createElement('input');
	nb.style.display = 'none';
	nb.name = 'nb';
	if(form.name === 'newcomment') {
		nb.value = form.name;
		console.log('new comment');
	} else {
		nb.value = form.name.split('-')[1];
		console.log('answer to ' + nb.value);
	}
	
	divtext.appendChild(textarea);
	label.appendChild(checkbox);
	label.appendChild(document.createTextNode('J\'ai lu et j\'accepte les '));
	label.appendChild(link);
	
	form.appendChild(legend);
	form.appendChild(divtext);
	form.appendChild(pseudo);
	form.appendChild(submit);
	form.appendChild(label);
	form.appendChild(nb);
	button.style.display = 'none';
}
		/*<form>
			<div><textarea placeholder="Commentaire" required></textarea></div>
			<input type="text" placeholder="Pseudo" required/>
			<input type="submit" value="Envoyer"/>
			<label><input name="conditions" type="checkbox" /> J'ai lu et j'accepte les <a href="#">conditions d'utilisation</a></label>
		</form>*/

initComment();
