console.log("hello world! from external file. thankyou! ");

// single line comment

/*
multi
line
bomment */

// Declaring Variables name

// var, let , const

// var PERSONNAME, NIRAJ_ , _niraj, asdf

// ======Operators

//addition

// let a;
// let b;
// const ans = a + b;
// console.log(ans);

// Comparisons

// ==
// === this one also check data types !
// >,>=
// <,<=

// const v1 = 5;
// const v2 = 5;
// const result = v1 == v2;
// console.log(result);

// Understanding OBJ AND array

// let person1 = "niraj";

// console.log(person1);
// let person2 = person1;
// person1 = "Nippo";
// person2 = person1;
// console.log(person1, person2);

// Object

// let obj = { name: "niraj" };

// console.log(obj.name);

// let obj2 = obj;

// console.log(obj2.name);

// obj2.name = "check";

// console.log(obj.name, obj2.name);

// Math Object

//  Conditional Operation
// if
// if else
// else if
// switch

// const age = 17;
// if (age < 17) {
//   console.log("Go home mate!!!!");
// } else {
//   console.log("Come when you are 18! !!!");
// }

// const pet = "cow";

// if (pet === "cat") {
//   console.log("moow");
// } else if (pet === "dog") {
//   console.log("woof");
// } else if (pet == "cow") {
//   console.log("baaaaaabbbb");
// } else {
//   console.log("hahahahhahahah");
// }

//truthy value: "p", 4, true, {} , [] , ()=> {}
//falsey value: "", 0 , undefined, null, false => false

const pet = "cat";

switch (pet) {
  case "cat":
    console.log("meow");
    break;
  case "dog":
    console.log("buffff");
    break;

  case "cow":
    console.log("babaaa");
    break;
  default:
    console.log("hahahhaha");
    break;
}

// ternary condition

// let age = 15;
// age >= 18
//   ? console.log(" i'm greater then 18")
//   : age >= 15
//   ? console.log('I"m above 15 years old')
//   : console.log("default value");

// try {
//   throw new Error(" custom error ");
//   console.log("with in try,s");
// } catch (error) {
//   if (error.message === " custom error ") {
//     console.log(" custome error thrown");
//   }
//   console.log("with in error ", error.message);
// } finally {
//   console.log(" with in finally ");
// }

//setTimeout
//clearTimeout
//setInterval
//clearInterval
console.log(" this is before ");
setTimeout(() => {
  console.log(" this is from setTimeOut");
}, 1000);

console.log(" this is from interval before %%%%%%%%%%%%%%");

// let i = 0;
// setInterval(() => {
//   console.log(" inside set setInterval", i++);
// }, 1000);

// creating clear setInterval

// let i = 0;
// const interval = setInterval(() => {
//   console.log(" inside set setInterval", i++);
//   if (i == 10) {
//     clearInterval(interval);
//   }
// }, 1000);

// function===========

// console.log("before function");

// function add() {
//   console.log(5 + 5);
// }
// console.log("this is outside of function");
// console.log(add);
// console.log(add());

// function added(a, b) {
//   return a + b;
// }

// const ans = added(6, 6);
// console.log(ans);

const multiplayer = (a) => a * 5;
console.log(multiplayer(6));

const bio = (name, address) => {
  //   const str = "hello, I am" + name + ". And i leave in " + address;
  //   return str;
  //   return "hello, I am" + name + ". And i leave in " + address;
  return `
    hello I am ${name}. ANd i live in ${address}. `;
};
const nip = bio("Niraj chemjong", "Canberra");
console.log(nip);
const milan = bio("milan", "ACT");
console.log(milan);
