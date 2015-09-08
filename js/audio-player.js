// Web audio player

// Variables ----------

var btnLoop = document.getElementById('btn-loop');
var btnPlayPause = document.getElementById('btn-play-pause');
var btnReplay = document.getElementById('btn-replay');
var btnSleep = document.getElementById('sleep');
var player = document.getElementById('player');
var playerVisible = true;
var title = document.getElementById('title');


// Functions ----------

function endOfAudio() {
  btnPlayPause.innerHTML = '<img src="buttons/play.svg" alt="Play" />';
  console.log('Music stopped');
}

function keyControl(e) {
  var keyCode = e.keyCode;
  // console.log('keycode ' + keyCode + ' ' + String.fromCharCode(keyCode));
  if (keyCode === 32) {
    playPause();
  } else if (keyCode === 82) {
    replay();
  } else if (keyCode === 70) {
    loop();
  } else if (keyCode === 72) {
    playerHideShow();
  }
}

function loop() {
  if (player.loop === true) {
    player.loop = false;
    btnLoop.innerHTML = '<img src="buttons/loop-off.svg" alt="Loop" />';
    console.log('Looping off');
  } else if (player.loop === false) {
    player.loop = true;
    btnLoop.innerHTML = '<img src="buttons/loop-on.svg" alt="Turn off Loop" />';
    console.log('Looping on');
  }
}

function playerHideShow() {
  if (playerVisible === true) {
    player.setAttribute('class', 'player-hide');
    playerVisible = false;
    console.log('Player hidden');
  } else if (playerVisible === false) {
    player.setAttribute('class', 'player-show');
    playerVisible = true;
    console.log('Player visible');
  }
}

function playPause() {
  if (player.paused === true) {
    player.play();
    btnPlayPause.innerHTML = '<img src="buttons/pause.svg" alt="Pause" />';
    console.log('Music playing');
  } else if (player.paused === false) {
    player.pause();
    btnPlayPause.innerHTML = '<img src="buttons/play.svg" alt="Play" />';
    console.log('Music paused');
  }
}

function replay() {
  player.currentTime = 0;
  player.play();
  btnPlayPause.innerHTML = '<img src="buttons/pause.svg" alt="Pause" />';
  console.log('Music playing from start');
}

function sleep() { // Improve UX by using a better input and show a countdown timer
  var sleepStr = prompt('Minutes until pause');
  var sleepMin = parseInt(sleepStr, 10);
  if (isNaN(sleepMin)) {
    console.log('"' + sleepStr + '" is not a valid number of minutes. Try again.');
    return;
  } else {
    var sleepTime = (sleepMin * 1000 * 60);
    btnSleep.removeEventListener('click', sleep);
    btnSleep.firstChild.innerHTML = 'Sleep mode On';
    console.log('Sleeping in ' + sleepMin + ' minutes');
    setTimeout(
      function() {
        player.pause();
        btnPlayPause.innerHTML = '<img src="buttons/play.svg" alt="Play" />';
        console.log('Music paused');
      }, sleepTime);
  }
}


// EventListeners ----------

btnLoop.addEventListener('click', loop);
btnPlayPause.addEventListener('click', playPause);
btnReplay.addEventListener('click', replay);
btnSleep.addEventListener('click', sleep);
player.addEventListener('ended', endOfAudio);
title.addEventListener('click', playerHideShow);
document.addEventListener('keydown', keyControl);


// Execute ----------

console.log('\n\n- Keyboard Shortcuts -\n\nPlay/Pause\n| Space |\n\nReplay\n| R |\n\nLooping On/Off\n| F |\n\nPlayer Hide/Show\n| H |\n \n ');
btnLoop.innerHTML = '<img src="buttons/loop-on.svg" alt="Turn off Loop" />';
btnLoop.innerHTML = '<img src="buttons/loop-off.svg" alt="Loop" />';
