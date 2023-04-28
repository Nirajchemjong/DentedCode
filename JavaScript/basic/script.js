// console.log("hello world! from external file. thankyou! ");

// // single line comment

// /*
// multi
// line
// bomment */

// // Declaring Variables name

// // var, let , const

// // var PERSONNAME, NIRAJ_ , _niraj, asdf

// // ======Operators

// //addition

// // let a;
// // let b;
// // const ans = a + b;
// // console.log(ans);

// // Comparisons

// // ==
// // === this one also check data types !
// // >,>=
// // <,<=

// // const v1 = 5;
// // const v2 = 5;
// // const result = v1 == v2;
// // console.log(result);

// // Understanding OBJ AND array

// // let person1 = "niraj";

// // console.log(person1);
// // let person2 = person1;
// // person1 = "Nippo";
// // person2 = person1;
// // console.log(person1, person2);

// // Object

// // let obj = { name: "niraj" };

// // console.log(obj.name);

// // let obj2 = obj;

// // console.log(obj2.name);

// // obj2.name = "check";

// // console.log(obj.name, obj2.name);

// // Math Object

// //  Conditional Operation
// // if
// // if else
// // else if
// // switch

// // const age = 17;
// // if (age < 17) {
// //   console.log("Go home mate!!!!");
// // } else {
// //   console.log("Come when you are 18! !!!");
// // }

// // const pet = "cow";

// // if (pet === "cat") {
// //   console.log("moow");
// // } else if (pet === "dog") {
// //   console.log("woof");
// // } else if (pet == "cow") {
// //   console.log("baaaaaabbbb");
// // } else {
// //   console.log("hahahahhahahah");
// // }

// //truthy value: "p", 4, true, {} , [] , ()=> {}
// //falsey value: "", 0 , undefined, null, false => false

// const pet = "cat";

// switch (pet) {
//   case "cat":
//     console.log("meow");
//     break;
//   case "dog":
//     console.log("buffff");
//     break;

//   case "cow":
//     console.log("babaaa");
//     break;
//   default:
//     console.log("hahahhaha");
//     break;
// }

// // ternary condition

// // let age = 15;
// // age >= 18
// //   ? console.log(" i'm greater then 18")
// //   : age >= 15
// //   ? console.log('I"m above 15 years old')
// //   : console.log("default value");

// // try {
// //   throw new Error(" custom error ");
// //   console.log("with in try,s");
// // } catch (error) {
// //   if (error.message === " custom error ") {
// //     console.log(" custome error thrown");
// //   }
// //   console.log("with in error ", error.message);
// // } finally {
// //   console.log(" with in finally ");
// // }

// //setTimeout
// //clearTimeout
// //setInterval
// //clearInterval
// console.log(" this is before ");
// setTimeout(() => {
//   console.log(" this is from setTimeOut");
// }, 1000);

// console.log(" this is from interval before %%%%%%%%%%%%%%");

// // let i = 0;
// // setInterval(() => {
// //   console.log(" inside set setInterval", i++);
// // }, 1000);

// // creating clear setInterval

// // let i = 0;
// // const interval = setInterval(() => {
// //   console.log(" inside set setInterval", i++);
// //   if (i == 10) {
// //     clearInterval(interval);
// //   }
// // }, 1000);

// // function===========

// // console.log("before function");

// // function add() {
// //   console.log(5 + 5);
// // }
// // console.log("this is outside of function");
// // console.log(add);
// // console.log(add());

// // function added(a, b) {
// //   return a + b;
// // }

// // const ans = added(6, 6);
// // console.log(ans);

// const multiplayer = (a) => a * 5;
// console.log(multiplayer(6));

// const bio = (name, address) => {
//   //   const str = "hello, I am" + name + ". And i leave in " + address;
//   //   return str;
//   //   return "hello, I am" + name + ". And i leave in " + address;
//   return `
//     hello I am ${name}. ANd i live in ${address}. `;
// };
// const nip = bio("Niraj chemjong", "Canberra");
// console.log(nip);
// const milan = bio("milan", "ACT");
// console.log(milan);

// //  ==============loops ==========================

// // for loop

// // for (let i = 0; i <= 10; i++) {
// // your code

// //   console.log("count" + i);
// // }

// // while loop ===========================

// let i = 0;
// while (i <= 10) {
//   i++;
//   console.log("from while count " + i);
// }

// let a = 0;
// do {
//   console.log("from do while " + a);
//   a++;
// } while (a <= 10);

// // skipping the loop using continue

// //break means to stop the loop

// // ==================Data Manipulation =======================

// // Number --parseInt, float;
// //safe number -2^53 -1 to 2^53 -1
// //NaN => not a number isNaN

// // const vale = isNaN(5);
// // console.log(vale);

// // const str = "hi there , my name is niraj chemjong. I live in canberra ";

// // console.log(str);

// // const len = str.length;

// // const len = str.split(","); // making string to array
// // console.log(len);

// // ==================Array =======////////////////

// // const fruits = ["apple", "banana", "orange", "09", "10"];
// // // console.log(fruits[1]);
// // const data = fruits.length;

// // const data = fruits.length;

// // const data = fruits.pop();// to remove last items

// // const data = fruits.shift(); to remove first array items

// // const data = fruits.push("mango"); to add from last

// // const data = fruits.unshift("watermelon"); to add from first

// // const data = fruits.slice(1, 2); // it take item from index 1 and 2 but doesn't include index 2

// // const data = fruits.splice(1, 2); // it takes item from index 1 and takes 2 items starting from index 1

// // fruits.reverse(); to reverse the items

// // fruits.sort(); // sorting the number in ascending order but always number values comes first than string
// // fruits.sort((a, b) => b - a); //this is to sort string and number properly
// // console.log(fruits);

// //////////////Array loops in JS //////////////

// //forEach , map
// // Filter, reduce, every, find, every

// const fruits = ["apple", "banana", "orange", "101", "09"];

// //  fruits.forEach((item, i) => { //loop through the array but doesn't return value
// //    console.log(item, i);
// //     return "from forEach " +item;
// // });

// /////============map array loop ====== does loop plus can return datas creating new array

// const newArg = fruits.map((item, i) => {
//   //   console.log(item, i);
//   return "from map " + item.toUpperCase();
// });
// console.log(fruits, newArg);
// // console.log(newArg.splice(1, 4));

// ///////////filter in Array //////////

// const newArg1 = fruits.filter((item) => {
//   return item.includes("b");
// });

// console.log(newArg1);

// // const newArg2 = fruits.find((item, i )=> {
// //     return item.includes("o");
// // });
// // console.log(newArg2);

// // const newArg2 = fruits.every((item, i) => {
// //   return item.includes("o");
// // });
// // console.log(newArg2);

// const balance = [22, 33, 4565, 4674567, 5234526, 1234, 435, 4678];
// const total = balance.reduce((subTotal, num) => {
//   return subTotal + num;
// }, 0);
// console.log(total);

// // const strr = ["nirahj", "jeewan", "hello"];
// // const strrto = strr.reduce((subTtl, strrr) => {
// //   return subTtl + strrr;
// // }, "");
// // console.log(strrto);

//challange 1

// 1. create an array of 50 random numbers range between 1 and 100 programmatically
//2. sort the array in desending order
//3. get the total value of the array
// 4. divide original array into odd array and even array
// 5 .remove the duplicate value from the original array.
/////////good luck //////

// arr = [];
// let val = Math.random();

// console.log(val);
// function randomNum() {
//   return val * 100;
// }
// function randomNum() {
//   console.log(randomNum());
//   return val * 100;
// }
// for (let i = 0; i <= 100; i++) {
//   arr = Math.random() * 100;
//   i++;
// }
// console.log(arr);

let arra = [];

for (let i = 1; i <= 50; i++) {
  arra.unshift(Math.floor(Math.random() * 100) + 1); //adding random number from first
}
// question no 1
console.log(arra);

const sort = arra.sort((a, b) => b - a);
console.log(sort); // displaying in desending order

//question no 3
const total = arra.reduce((subtotal, num) => {
  return subtotal + num;
});
console.log(`Total sum of the number is ${total} `);

//question no 4
// 4. divide original array into odd array and even array

const enO = arra.filter((item, i) => {
  return item % 2 == 0;
});
console.log("this is even " + enO); // displaying in odd and even

// 5 .remove the duplicate value from the original array.

// const remD = arra.filter((item, i) => {
//   for (i; i.length >= 50; i.length) {
//     i++;

//     console.log(i);
//     // }
//     //   item - num[item] == 0
//     //     ? console.log("this is dublicate" + item)
//     //     : console.log("not dublicate" + item);
//     //   return arra.includes(item);
//   }
// });
// console.log(remD);

// let dupArr = [];
// let notdup = [];
// arra.forEach((item) => {
//   for (arra.length; arra.length <= 50; arra.length++) {
//     arra.length++;
//     let num = arra;
//     arra.push((num));
//     console.
//     for (arra.length; arra.length <= 50; arra.length++) {
//       arra.length++;
//       let numF = arra - num == 0;

//       console.log(numF);
//     }
//   }
// });

const dup = arra.filter((item) => {
  return item - item == 0;
});
console.log(dup);

const rendArg = new Array(50)
  .fill("")
  .map((i) => Math.ceil(Math.random() * 100 + 1));

console.log(rendArg);

// question no 5

const noRep = rendArg.filter((item, i) => {
  console.log(i);
  console.log(rendArg.indexOf(item));
  return rendArg.indexOf(item) !== i; //returning only repeated value only
});
console.log(rendArg, noRep); //displaying array and repeated value.
