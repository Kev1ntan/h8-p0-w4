//Logic Challenge - Change Me!
function changeMe(arr) {
	var date = new Date();
	var year = date.getFullYear();
	var obj = {};
	for (let i = 0; i < arr.length; i++) {
		obj['firstName'] = arr[i][0];
		obj['lastName'] = arr[i][1];
		obj['gender'] = arr[i][2];
		if (arr[i][3] === undefined) {
			arr[i][3] = 'Invalid Birth Year';
		}
		else {
			arr[i][3] = year - arr[i][3]
		}
		obj['age'] = arr[i][3];	
		console.log(i+1 + '. ' +arr[i][0] + ' ' + arr[i][1] + ':' + '\n', obj)
	}
}
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
//changeMe([]); // ""