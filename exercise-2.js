//Logic Challenge - Faktor Persekutuan Terbesar
function fpb(angka1, angka2) {
	var storageAngka1 = [];
	var storageAngka2 = [];	
	for (let i = 1; i<=angka1; i++) {
		if (angka1 % i === 0) {
			storageAngka1.push(i);
		}
	}
	for (let i = 1; i<=angka2; i++) {
		if (angka2 % i === 0) {
			storageAngka2.push(i);
		}
	}
	for (let i = storageAngka2.length-1; i >= 0; i--) {
		for (let j = storageAngka1.length-1; j >= 0; j--) {
			if (storageAngka1[j] === storageAngka2[i]) {
				return storageAngka2[i];
			}
		}
	}
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1