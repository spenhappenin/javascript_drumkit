window.addEventListener( 'keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[ data-key="${ e.keyCode }" ]`);
  const key = document.querySelector(`.key[ data-key="${ e.keyCode }" ]`);
  var keyValue = e.key

  if(!audio) return; // stop the function from running all together.
  audio.currentTime = 0; // rewind to start 
  audio.play();  

  if( keyValue === 'q' || keyValue === 'w' || keyValue === 'e' || keyValue === 'r' || keyValue === 't' || keyValue === 'y' || keyValue === 'u' || keyValue === 'i' || keyValue === 'o' || keyValue === 'p' ) {
  	key.classList.add('playing-top');
  } else if( keyValue === 'a' || keyValue === 's' || keyValue === 'd' || keyValue === 'f' || keyValue === 'g' || keyValue === 'h' || keyValue === 'j' || keyValue === 'k' || keyValue === 'l' ) {
  	key.classList.add('playing-middle');
  } else if( keyValue === 'z' || keyValue === 'x' || keyValue === 'c' || keyValue === 'v' || keyValue === 'b' || keyValue === 'n' || keyValue === 'm' ) {
  	key.classList.add('playing-bottom');
  }
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return; // skip it if its not a transform
	this.classList.remove('playing-top') || this.classList.remove('playing-middle') || this.classList.remove('playing-bottom');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));






