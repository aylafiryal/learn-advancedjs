function init() {
  let nama = "Kyle";
  let umur = 33;
  function tampilNama() {
    // closure, lexical
    console.log(nama);
  }
  function tampilNama2() {
    // NOT closure
    let nama = "Craig";
    console.log(nama);
  }
  //   tampilNama();
  //   console.dir(tampilNama);
}

init();
