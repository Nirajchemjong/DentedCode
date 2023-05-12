// // var oLog = window.console.log;

// // console.log = (s) => {
// //   var d = document.createElement("div");
// //   d.classList.add("logger");
// //   d.innerText = s;
// //   document.body.appendChild(d);
// //   oLog(s); //if you still want to call old
// // };

// function niraj(fname, lname) {
//   this.fname = fname;
//   this.lname = lname;
// }

// const niraj1 = new niraj(`hello`, `world`);

// niraj.prototype.hello = function () {
//   console.log("hello from hello");
// };
// console.log(niraj1);

// //different way of writing class and making objects
// class opp {
//   constructor(add, age) {
//     this.add = add;
//     this.age = age;
//   }
// }
// opp.prototype.sayName = function () {
//   console.log("hello world");
// };
// opp = new opp("niraj", 23);
// console.log(opp.age, opp.add);

// console.log(opp);

// Object.setPrototypeOf(niraj.prototype, opp.prototype);
// Object.getPrototypeOf(niraj.prototype);

// // console.log(Object.getPrototypeOf(opp));

// // console.log(Object.prototype.hasOwnProperty("valueOf"));

// // opp.prototype.prototype = Object.create(niraj);

// // niraj.prototype.sayName();
// console.log(opp.sayName());
// // console.log(opp.hello());

// ================Self Learning about Prototype and Object ==========================

class Player1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  Level1 = () => {
    console.log("this is level one");
  };
}

//creating prototype function

Player1.prototype.test = function () {
  console.log(`hi this is ${this.name} form Player1`);
};

class Player2 {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  check = () => {
    console.log("hi i am check function ");
  };
}

Player2.prototype.test1 = function () {
  console.log(`hi my name is ${this.name} from player2 thanks`);
};

// passing instanceof to both player;

Player1 = new Player1("niraj", 12);

Player2 = new Player2("Nikesh", 23);

//display results

console.log(Player1.test(), Player2.test1());

// lets try to inhertance prototype
console.log(Object.getPrototypeOf(Player1));
// Object.setPrototypeOf(Player1, Player2);
Object.setPrototypeOf(Player1, Player2);
console.log(Object.getPrototypeOf(Player1));

console.log(Player1.name);
// console.log(Player1.test1());
