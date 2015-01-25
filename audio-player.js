// Web audio player

// Variables ----------

var player = document.getElementById('player');
var btnLoop = document.getElementById('btn-loop');
var btnReplay = document.getElementById('btn-replay');
var btnPlayPause = document.getElementById('btn-play-pause');


// Functions ----------

function endOfAudio() {
	btnPlayPause.innerHTML = 'Play';
	console.log('Music stopped');
	}

function keyControl(e) {
	var keyCode = e.keyCode;
	// console.log('keycode ' + keyCode + ' ' + String.fromCharCode(keyCode));
	if (keyCode == 32) {
		if (player.paused == true) {
			player.play();
			btnPlayPause.innerHTML = 'Pause';
			console.log('Music playing');
			}
		else if (player.paused == false) {
			player.pause();
			btnPlayPause.innerHTML = 'Play';
			console.log('Music paused');
			}
		}
	else if (keyCode == 82) {
		player.currentTime = 0;
		player.play();
		btnPlayPause.innerHTML = 'Pause';
		console.log('Music playing from start');
		}
	else if (keyCode == 70) {
		if (player.loop == true) {
			player.loop = false;
			btnLoop.innerHTML = 'Loop';
			console.log('Looping off');
			}
		else if (player.loop == false) {
			player.loop = true;
			btnLoop.innerHTML = 'Turn off Loop';
			console.log('Looping on');
			}
		}
	}

function loop() {
	if (player.loop == true) {
		player.loop = false;
		btnLoop.innerHTML = 'Loop';
		console.log('Looping off');
		}
	else if (player.loop == false) {
		player.loop = true;
		btnLoop.innerHTML = 'Turn off Loop';
		console.log('Looping on');
		}
	}

function playPause() {
	if (player.paused == true) {
		player.play();
		btnPlayPause.innerHTML = 'Pause';
		console.log('Music playing');
		}
	else if (player.paused == false) {
		player.pause();
		btnPlayPause.innerHTML = 'Play';
		console.log('Music paused');
		}
	}

function replay() {
	player.currentTime = 0;
	player.play();
	btnPlayPause.innerHTML = 'Pause';
	console.log('Music playing from start');
	}


// EventListeners ----------

btnLoop.addEventListener('click', loop);
btnPlayPause.addEventListener('click', playPause);
btnReplay.addEventListener('click', replay);
player.addEventListener('ended', endOfAudio);
document.addEventListener('keydown', keyControl);


// Execute ----------

console.log('\n\n- Keyboard Shortcuts -\n\nPlay/Pause\n| Space |\n\nReplay\n| R |\n\nLooping On/Off\n| F |\n \n ');
