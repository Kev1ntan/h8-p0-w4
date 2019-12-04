//Logic Challenge - Mengurutkan Abjad
function urutkanAbjad(str) {
	var array = str.split('');
	var sort = array.sort();
	var hasil = sort.join('');
	return hasil;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'