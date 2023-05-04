// alert("hello");

//Object-oriented Programming (OOP)

// Object => properties , methods

const nirajBio = () => {
  return " this person name is niraj and lives in ACT ";
};
console.log(nirajBio(0));

//LeedCode Practising

/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function (n) {
  let count = n;
  function result() {
    let num = count;
    count++;
    console.log(num);
    console.log(count);
    return num;
  }

  console.log(count);
  //   n = n + num;
  return result;
  //   return function () {
  //     const resut = count;
  //     count++;
  //     return resut;
  //   };
};
const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());

// console.log(typeof counter);
// console.log(counter);
// console.log(counter);
// console.log(counter);

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// var a = (n) => {
//   return n++;
// };

// const b = a(10);

// // const c = b;
// console.log(b);
// console.log(b);
// console.log(b());
// console.log(b());

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// Example 1:

// Input: nums = [1,2,3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

// Constraints:

// 0 <= arr.length <= 1000
// 0 <= arr[i] <= 1000

const arr = [1, 2, 3, 5];

const niraj = () => {
  if (arr.length === 0) {
    return -1;
  } else {
    return arr.slice(-1)[0];
  }
};

niraj(arr);

console.log(niraj(arr));
