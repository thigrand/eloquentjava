function reverseArray(arr) {
	var reversed = [];
	for (var i = arr.length-1; i >= 0 ; i--) {
		reversed.push(arr[i]);
	}
	return reversed;
};
function reverseArrayInPlace(array) {
	// pamietaj, ze to co jest po lewej stronie nawiasu fora wykonuje sie tylko raz, to co w srodku tyle razy ile petla.
	var len = array.length;
	var endCondition = len / 2;
	var lastIndex = len - 1;

	for (var i = 0; i < endCondition; i++) {
		var old = array[i];
		array[i] = array[lastIndex - i];
		array[lastIndex - i] = old;
	}

	return array;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array - przeczytaj o wszystkich metodach arraya
// i uzyj jednej zeby zaimplementowac reverse in place w jednej linijce
