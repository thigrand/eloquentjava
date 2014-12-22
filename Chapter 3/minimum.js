function min(number1, number2) {
	// i only allow to write if in one line if it is guard pattern
	if (isNaN(number1) || !isNaN(number2)) { return false; }
	return (number1 < number2) ? number1 : number2;
};
