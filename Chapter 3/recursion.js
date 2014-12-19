function isEven(number) {
	return number%2 === 0 ? true : false;
};

//a tu z wykorzystaniem rekursji:

function isEven(number) {
	if (number === 0)
		return true;
	if (number === 1)
		return false;
	else 
		return isEven(number - 2);
};