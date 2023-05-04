const test = setTimeout(() => {
  console.log("hello world");
}, 1000);

const testarray = [];

// testarray[(fname, lastname, 1, 2, 3)];

function hello() {
  console.log("hello world from hello function");
}
testarray.push(1, 2, 3);
testarray.push("name", "lname", "phone", "DOB");
testarray.push((a) => {
  return a;
}, 10);
testarray.push(hello);
console.log(testarray);

///Lets create new array with different names

const arri = ["niraj", "chemjong", "ACT"];

// creating copy of the original array

const newarri = [...arri];

const slicenewarri = newarri.slice(); //creating new array with same items using slice methond

// let's add number in newarri between of chemjong and act

// arri.splice(start__postion, 0, Value);
newarri.splice(2, 0, 9836254);

const fromarri = Array.from(newarri);

console.log(arri, newarri, slicenewarri, fromarri);
