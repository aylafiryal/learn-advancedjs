// function init() {
//   let nama = "Kyle";
//   let umur = 33;
//   function tampilNama() {
//     // closure, lexical
//     console.log(nama);
//   }
//   function tampilNama2() {
//     // NOT closure
//     let nama = "Craig";
//     console.log(nama);
//   }
//   //   tampilNama();
//   console.dir(tampilNama);
// }

// init();

// function init() {
//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }

// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggilNama = init();
// panggilNama("Kyle");
// panggilNama("Broflovski");

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}!`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
// Baru setengah jalan. Liat di closurenya
//console.dir(selamatPagi);

// Udah sepenuhnya jalan
console.dir(selamatPagi("Kyle"));

let add = (function () {
  // seolah2 dia private. Like wtf kenapa ga ada fitur access modifier aja si
  // And they says im weird for liking Java like dude just look at this shit
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
