// SIAF
// Functionnya langsung jalan
// (function () {
//   // i pasti bakal beda sama i yang diatas
//   // karena beda scope function
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// })();

// Let di dalam for-loop. Daripada pake SIAF
// 'Let' bikin variabel jadi block scope
for (let k = 0; k < 10; k++) {
  console.log(k);
}

console.log(k);

// Ini hasilnya 'undefined' karena hoisting
// Yang mana harusnya error, kaya di JAVA
console.log(i);
var i = 10;

// Makanya, pake 'let' aja
console.log(j); // Ini jadi referenceError
let j = 10;

// Const otu konstanta. Pake kalo misalnya nilainya ga berubah2
// Tapi selama ga merubah keseluruhan objek, dia masih bisa
// masih bisa dipake untuk array atau objek yang dinamis.
