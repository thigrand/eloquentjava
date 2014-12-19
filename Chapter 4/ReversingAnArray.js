function reverseArray(arr) {
	var reversed = [];
	for (var i = arr.length-1; i >= 0 ; i--) {
		reversed.push(arr[i]);
	}
	return reversed;
};
function reverseArrayInPlace(array) {
  for (var i = 0; i < array.length / 2; i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
	return array;
};