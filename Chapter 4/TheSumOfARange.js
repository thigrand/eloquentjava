function range(start, end, step) {
	var sumArr = [start];
	if (step === 1 || step === undefined) {step = 1;}
    for (var i = start; (start > end) ? (i > end) : (i < end) ; i+=step) {
      sumArr.push(start += step);
	};
	return sumArr;
};
function sum(arr) {
	var summ = 0;
	for (var i = 0; i <= arr.length; i++) {
		summ += i;
	}
  return summ;
};