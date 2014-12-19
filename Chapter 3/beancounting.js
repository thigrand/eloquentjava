function countBs(str) {
	var counter = 0;
	for(var i = 0; i < str.length; i++) {
		if(str.charAt(i) === "B") {
			counter++;
		}
	}
  	return counter;
};

function countChar(str, char) {
	var counter = 0;
	for(var i = 0; i < str.length; i++) {
		if(str.charAt(i) === char) {
			counter++;
		}
	}
  	return counter;
};