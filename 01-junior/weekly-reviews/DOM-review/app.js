console.log('hello');

const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const body = document.getElementsByTagName('body')[0];
const log = document.getElementById('log');
const clearlog = document.getElementById('clearLog');

function setColor(color) {
  body.style.backgroundColor = color;
  const colorP = document.createElement('p');
  colorP.innerHTML = color;
  log.appendChild(colorP);
}

function clearLog() {
  log.innerHTML = '';
}

redButton.addEventListener('click', () => setColor('red'));
yellowButton.addEventListener('click', () => setColor('yellow'));
greenButton.addEventListener('click', () => setColor('green'));
blueButton.addEventListener('click', () => setColor('blue'));
clearlog.addEventListener('click', clearLog)
