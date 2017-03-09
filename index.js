window.addEventListener( 'keydown', playSound);

function keyColorPicker(keyValue, key) {
  switch(keyValue) {
		case "q":
				key.classList.add('playing-top');
				break;
			case "w":
				key.classList.add('playing-top');
				break;
	  	case "e":
				key.classList.add('playing-top');
				break;
	  	case "r":
				key.classList.add('playing-top');
				break;
	  	case "t":
				key.classList.add('playing-top');
				break;
	  	case "y":
				key.classList.add('playing-top');
				break;
	  	case "u":
				key.classList.add('playing-top');
				break;
	  	case "i":
				key.classList.add('playing-top');
				break;
	  	case "o":
				key.classList.add('playing-top');
				break;
			case "p":
				key.classList.add('playing-top');
				break;
			case "a":
				key.classList.add('playing-middle');
				break;
	  	case "s":
				key.classList.add('playing-middle');
				break;
	  	case "d":
				key.classList.add('playing-middle');
				break;
	  	case "f":
				key.classList.add('playing-middle');
				break;
	  	case "g":
				key.classList.add('playing-middle');
				break;
	  	case "h":
				key.classList.add('playing-middle');
				break;
	  	case "j":
				key.classList.add('playing-middle');
				break;
	  	case "k":
				key.classList.add('playing-middle');
				break;
			case "l":
				key.classList.add('playing-middle');
				break;
			case "z":
				key.classList.add('playing-bottom');
				break;
	  	case "x":
				key.classList.add('playing-bottom');
				break;
	  	case "c":
				key.classList.add('playing-bottom');
				break;
	  	case "v":
				key.classList.add('playing-bottom');
				break;
	  	case "b":
				key.classList.add('playing-bottom');
				break;
	  	case "n":
				key.classList.add('playing-bottom');
				break;
	  	case "m":
				key.classList.add('playing-bottom');
				break;
	}
}

function playSound(e) {
  const audio = document.querySelector(`audio[ data-key="${ e.keyCode }" ]`);
  const key = document.querySelector(`.key[ data-key="${ e.keyCode }" ]`);
  var keyValue = e.key;

  if(!audio) return; // stop the function from running all together.
  audio.currentTime = 0; // rewind to start 
  audio.play();  
  
  keyColorPicker(keyValue, key);

}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return; // skip it if its not a transform
	this.classList.remove('playing-top') || this.classList.remove('playing-middle') || this.classList.remove('playing-bottom');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));






