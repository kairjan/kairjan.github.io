let secretNumber = 0,
	numberOfGuesses = 0;

function writeMessage(elementId, message, appendMessage) {
	let elemToUpdate = document.getElementById(elementId);
	if (appendMessage) {
		elemToUpdate.innerHTML = elemToUpdate.innerHTML + message;
	} else {
		elemToUpdate.innerHTML = message;
	}
};

function newGame() {
	secretNumber = Math.floor(Math.random() * 100) + 1;
	numberOfGuesses = 0;
	writeMessage('historyList', '');
}

function guessInRange(guess) {
	return (guess > 0 && guess < 101);
}

function userGuessed() {
	let userGuessed = document.getElementById('userGuess').value;
	let statusArea = document.getElementById('statusArea');
	let historyList = document.getElementById('historyList');
	if (userGuessed.length == 0 || ! guessInRange(userGuessed)) {
		// Nothing entered or our of range.
		writeMessage('statusArea', '<p>1-ден 100-ге дейінгі санды енгізіп, "Табу" түймесін басыңыз".</p>');
	} else if (userGuessed.indexOf('.') != -1) {
		writeMessage('statusArea', '<p>1-ден 100-ге дейінгі бүтін санды енгізіп, "Табу" түймесін басыңыз".</p>');
	} else {
		numberOfGuesses++;

		if (userGuessed == secretNumber) {
			// Got it
			let audio = new Audio('Sail.mp3');
            audio.play();
			
			setTimeout(function(){
				window.location.href = 'ht1.html';
			  }, 10 * 1000);
			writeMessage('statusArea', '<p>Сіз мен ойлаған санды ' + numberOfGuesses +' болжамда таптыңыз, менің ойлаған саным ' + secretNumber + '. Тағы да көріңіз...</p>');
			$("#myLink");
			newGame();
		} else if (userGuessed < secretNumber) {
			// User needs to guess higher
			let audio = new Audio('аз.mp3');
            audio.play();
			
			writeMessage('statusArea', '<p>Сіз   ' + userGuessed + ' санына қарағанда көбірек болжау керексіз, тағы да көріңіз...</p>');
			writeMessage('historyList', '<li>' + userGuessed +' (бұл жеткіліксіз, тағы көріңіз)</li>', true);
		} else {
			// User needs to guess lower
			let audio = new Audio('коп.mp3');
            audio.play();
			writeMessage('statusArea', '<p>Сіз  ' + userGuessed + ' санына қарағанда аз болжау керексіз, тағы да көріңіз...</p>');
			writeMessage('historyList', '<li>' + userGuessed + ' (бұл көп, тағы көріңіз)</li>', true);
		}
	}

	document.getElementById('userGuess').value = '';	
}

window.onload = function() {
	newGame();
	document.getElementById('buttonArea').addEventListener('click', userGuessed);
};

function reboot () {
	alert("Сізге ұнайтынын білдім.");
  }

/////////////////это кнопка бегун не путать!!!!!! ////////////////////

let opRunBt = {
	field: document.getElementById(`module-running-button`),
	events: {
	  mouseover: (e) => {
		if (e.target.id === `For`) {
		  let i, newI;
		  newI = i = [...opRunBt.field.children].indexOf(e.target.parentElement);
		  while (i === newI)
			newI = Math.floor(Math.random() * opRunBt.field.children.length);
		  opRunBt.field.children[newI].appendChild(e.target);
		  newI = i = null;
		}
	  }
	}
  };
  
  opRunBt.field.addEventListener(`mouseover`, opRunBt.events.mouseover);