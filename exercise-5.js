//Logic Challenge - Ubah Huruf
function ubahHuruf(kata) {
	var abjad = 'abcdefghijklmnopqrstuvwxyza';
	var array = [];
	var hasil = '';
	for (let i = 0; i < kata.length; i++) {
		array.push(kata[i]);
	}
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < abjad.length; j++) {
			if (array[i] === abjad[j]) {
				hasil += abjad[j+1];
				break;
			}
		}
	}
	return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu