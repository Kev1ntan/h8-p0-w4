//Logic Challenge - Angka Prima
function angkaPrima(angka) {
	if (angka>2) {
		var zeroed = false;
		for (let i = 2; i <= 9; i++) {
			if (i !== angka && angka % i === 0)
			var zeroed = true;
		}	
	}
	if (!zeroed) {
		return true;
	}
	else {
		return false;
	}
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false