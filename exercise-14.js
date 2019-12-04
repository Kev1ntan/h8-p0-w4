//Logic Challenge - Naik Angkot
console.log('Logic Challenge - Naik Angkot');
function naikAngkot(arrPenumpang) {
    if (arrPenumpang.length === 0) {
        return [];
    }
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    function hitungHarga(naikDari, tujuan) {
        var harga = 0;
        var masuk = false;
        for (let i = 0; i < rute.length; i++) {
            if (naikDari === rute[i]) {
                masuk = true;
            }
            else if (rute[i] === tujuan) {
                harga += 2000;
                return harga;
            }
            else if (masuk) {
                harga += 2000;
            }
        }
    }
    var hasil = [];
    for (let i = 0; i < arrPenumpang.length; i++) {    
        hasil.push(
            {
                penumpang: arrPenumpang[i][0],
                naikDari: arrPenumpang[i][1],
                tujuan: arrPenumpang[i][2],
                bayar: hitungHarga(arrPenumpang[i][1], arrPenumpang[i][2])
            }
        )
    }
    return hasil;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]