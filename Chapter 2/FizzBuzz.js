function FizzBuzz() {
	for (var i = 1; i < 101; i++) {
        var stringFizz = "";
		if (i%3 === 0) {
			stringFizz+="Fizz";
		};
		if (i%5 === 0) {
			stringFizz+="Buzz";
		};
      console.log(stringFizz || i);
	};
};
FizzBuzz();