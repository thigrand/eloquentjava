function deepEqual(value1, value2) {
	var propNumb1 = 0, propNumb2 = 0;
	if(value1 === value2 ) {
		return true;
	}
    if( value1 == null || value2 == null || typeof(value1) !== typeof(value2))
    	return false;

    for (var prop in value1) {
        propNumb1++;
    }
    for (var prop in value2) {
        propNumb2++;
        
        if (!(prop in value1) || !deepEqual(value1[prop], value2[prop]) ) {
            return false;
    	}         
    }
    return propNumb1 === propNumb2 ? true : false;
};
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true