//Logic Challenge - Digit Perkalian Minimum
function digitPerkalianMinimum(angka) {
	var storage = [];
	var hasil = 0;
	for (let i = 1; i <= angka; i++) {
		if (angka % i === 0) {
			storage.push(i +''+ angka/i); 
		}
	}
	for (let i = 0; i < storage.length; i++) {
		if (hasil > storage[i].length || i === 0) {
			hasil = storage[i].length;
		}
	}
	return hasil
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2