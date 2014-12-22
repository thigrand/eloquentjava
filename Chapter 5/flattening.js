// czy potrafiz napisac funkcje splaczajaca ktora poradzi sobie rowniez gdy beda zagniezdzone tabele, czyli np:
// var arrays = [[1, 2, 3], [[[4, 5]]], [6]]; ?

//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single 
//array that has all the elements of the input arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
console.log(arrays.reduce( function(previousValue, currentValue) {
	return previousValue.concat(currentValue);
}));
