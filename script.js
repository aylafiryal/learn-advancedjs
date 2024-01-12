// 1. Object literal
// let king = {
//   nama: "Kyle",
//   ability: "Elf",
//   energy: 10,
//   power: function (cheesepoof) {
//     this.energy = this.energy + cheesepoof;
//     console.log(`Hi, your majesty, King ${this.nama}.
//     Your energy now at ${this.energy}`);
//   },
// };

// 2. Function declaration
// function King(name, energy) {
//   let king = {};
//   king.name = name;
//   king.energy = energy;

//   king.power = function (cheesepoof) {
//     this.energy = this.energy + cheesepoof;
//     console.log(`Hi, your majesty, King ${this.name}.
//         Your energy now at ${this.energy}`);
//   };

//   return king;
// }

// let KyleB = King("Kyle", 10);
// let EricC = King("Cartman", 20);

// 3. Constructor function (new)
// function King(name, energy) {
//   this.name = name;
//   this.energy = energy;

//   this.power = function (cheesepoof) {
//     this.energy = this.energy + cheesepoof;
//     console.log(`Hi, your majesty, King ${this.name}.
//         Your energy now at ${this.energy}`);
//   };
// }

// let KyleB = new King("Kyle", 10);
// let EricC = new King("Cartman", 20);

// 4. Object.create()
// const kingMethods = {
//   power: function (cheesepoof) {
//     this.energy = this.energy + cheesepoof;
//     console.log(`Hi, your majesty, King ${this.name}.
//             Your energy now at ${this.energy}`);
//   },
//   attack: function (damage) {
//     this.energy = this.energy - damage;
//     console.log(`Goodluck, King ${this.name}.
//             Your energy now at ${this.energy}`);
//   },
// };

// function King(name, energy) {
//   let king = Object.create(kingMethods);
//   king.name = name;
//   king.energy = energy;

//   return king;
// }

// let KyleB = King("Kyle", 10);
// let EricC = King("Cartman", 20);

// 5. Prototype
function King(name, energy) {
  this.name = name;
  this.energy = energy;
}

King.prototype.power = function (cheesepoof) {
  this.energy = this.energy + cheesepoof;
  console.log(`Hi, your majesty, King ${this.name}.
        Your energy now at ${this.energy}`);
};

let KyleB = new King("Kyle", 10);
let EricC = new King("Cartman", 20);
