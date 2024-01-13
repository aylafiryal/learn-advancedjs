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

function init() {
  return function (nama) {
    console.log(nama);
  };
}

let panggilNama = init();
panggilNama("Kyle");
panggilNama("Broflovski");
