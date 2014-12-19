function chessboard() {
	var size = 8, hash = "#", space = " ";
	for (var i = 0; i < size; i++) {
		var line = "";
		for (var j = 0; j < size; j++) {
          	if (i%2 === 0) j++;
            if (j%2 === 0) {
				line += hash;
			}
            else {
            	line += space;
            }
            if (i%2 === 0) j--;
		};
		console.log(line);
	};
};
chessboard();