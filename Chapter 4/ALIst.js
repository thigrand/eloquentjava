function arrayToList(arr) {
  var listObj = null;
	for(var i = arr.length-1; i >= 0 ; i--) {
		listObj = {
			value: arr[i],
			rest: listObj
		};
	}
	return listObj;
};
function listToArray(list) {
	var array = [];
	for (var i = list; i; i = i.rest)
		array.push(i.value);
	return array;
};
function prepend(element, list) {
	return {
		value: element,
		rest: list
	};
};
function nth(list, element) {
	if (!list) return undefined;
	else if (element === 0) {
		return list.value;
	}
	else
		return element(list.rest, n-1);
};