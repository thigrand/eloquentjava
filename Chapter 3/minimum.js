function min(number1, number2) {
	var minNumb;
	if (!isNaN(number1) && !isNaN(number2) && number1 < number2) {
		minNumb = number1;
	}
	else {
		minNumb = number2;
	}
	return minNumb;
};