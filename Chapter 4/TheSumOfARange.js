function range(start, end, step) {
	var sumArr = [start];
	// po co Ci sprawdzanie czy jest jedynka?
	if (step === 1 || step === undefined) {step = 1;}
    	
    	// srodkowy warunek sprawdzasz przy kazdej petli, nie lepiej sprawdzic to raz przed wejsciem w petle i potem operowac
    	// na pojedynczym warunku?
    	for (var i = start; (start > end) ? (i > end) : (i < end) ; i+=step) {
      		sumArr.push(start += step);
	};
	
	return sumArr;
};

// napisz jeszcze jeden raz funkcje sumujaca wartosci w array przy uzyciu natywnych metod arraya
function sum(arr) {
	var summ = 0;
	for (var i = 0; i <= arr.length; i++) {
		summ += i;
	}
	return summ;
};
