// // alert("hello");

// //Object-oriented Programming (OOP)

// // Object => properties , methods

// const nirajBio = () => {
//   return " this person name is niraj and lives in ACT ";
// };
// console.log(nirajBio(0));

// //LeedCode Practising

// /**
//  * @param {number} n
//  * @return {Function} counter
//  */

// var createCounter = function (n) {
//   let count = n;
//   function result() {
//     let num = count;
//     count++;
//     console.log(num);
//     console.log(count);
//     return num;
//   }

//   console.log(count);
//   //   n = n + num;
//   return result;
//   //   return function () {
//   //     const resut = count;
//   //     count++;
//   //     return resut;
//   //   };
// };
// const counter = createCounter(10);

// console.log(counter());
// console.log(counter());
// console.log(counter());

// // console.log(typeof counter);
// // console.log(counter);
// // console.log(counter);
// // console.log(counter);

// /**
//  * const counter = createCounter(10)
//  * counter() // 10
//  * counter() // 11
//  * counter() // 12
//  */

// // var a = (n) => {
// //   return n++;
// // };

// // const b = a(10);

// // // const c = b;
// // console.log(b);
// // console.log(b);
// // console.log(b());
// // console.log(b());

// // Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// // Example 1:

// // Input: nums = [1,2,3]
// // Output: 3
// // Explanation: Calling nums.last() should return the last element: 3.
// // Example 2:

// // Input: nums = []
// // Output: -1
// // Explanation: Because there are no elements, return -1.

// // Constraints:

// // 0 <= arr.length <= 1000
// // 0 <= arr[i] <= 1000

// const arr = [1, 2, 3, 5];

// const niraj = () => {
//   if (arr.length === 0) {
//     return -1;
//   } else {
//     return arr.slice(-1)[0];
//   }
// };

// niraj(arr);

// console.log(niraj(arr));

//class base OOP

class Person {
  bio() {
    return `hello my name is niraj`;
  }
}

const niraj = Person;

console.log(niraj);

//Inheritance

class Human {
  constructor(name, dob, isMammal, language) {
    this.name = name;
    this.dob = dob;
    this.isMammal = isMammal;
    this.language = language;
  }

  bio() {
    return `The person called ${this.name} was born on ${this.dob} and their mammal status = ${this.isMammal}`;
  }

  speaks() {
    return this.bio() + `. ${this.name} loves to speak in ${this.language}`;
  }
}

class Animal {
  constructor(name, dob, isMammal, ownerName) {
    this.name = name;
    this.dob = dob;
    this.isMammal = isMammal;
    this.ownerName = ownerName;
  }

  owner() {
    return `${this.name} belongs to ${this.ownerName}`;
  }
}

const prem = new Human("niraj", "02-02-2092", true, "English");
console.log(prem.speaks());

///Functional Programming Paradim

// side Effect, that cause some change in the systems

const add = (a, b) => {
  total = a + b;
  return total;
};
// PUre function

// High Order Function, a function that takes function as an argument or returns a function.

// Recursion calls itself in infinite loop

let i = 0;
