const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (ArrListNama, Sortir) => {

  Fsortir = Sortir(ArrListNama)


  let dataNama = []
  for (let x = 0; x < Fsortir.length; x++) {
    let Data = ''
    Data += x + 1 + '. ' + Fsortir[x]
    dataNama.push(Data)
  }

  return dataNama
}

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (ArrListNama) => {
  let Data = ArrListNama.sort()
  return Data
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (ArrListNama) => {
  let Data = ArrListNama.sort().reverse()
  return Data
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
