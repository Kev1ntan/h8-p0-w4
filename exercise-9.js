//Logic Challenge - Check AB
function checkAB(str) {
	var a = [];
	var b = [];
	for(let i = 0; i < str.length; i++) {
		if (str[i] === 'a') {
			a.push(i);
		}
		else if (str[i] === 'b') {
			b.push(i);
		}
	}
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			if (a[i] - b[j] === -4 || a[i] - b[j] ===4) {
				return true
			}
		}
	}
	return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false