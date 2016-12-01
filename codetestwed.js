const oldObj = {
	'test1key': 'test1value',
	'test2key': 'test2value',
	'test3key': 'test3value',
	'Custom': [{
		'name': 'na',
		'value': 'va'
	}, {
		'name2': 'na2',
		'value2': 'va2'
	}, {
		'name3': 'na2',
		'value3': 'va3'
	}]
};

var userObj = {};
var customObj = {};



for (key in obj) {
	if (key !== 'Custom') {
	  _.assign({ key: obj[key] }, userObj);
	} else {
	  let arr = obj['Custom'];
		let customArray = arr.forEach((element) => {
			// for (key in element) {
			// 	_.assign({ element[key]:  }, customObj);
			// }
		})
	}
}
console.log(userObj);
console.log(customObj);
