///Selecting the Element from DOM

// const check = document.getElementById("display");

// const checkaray = check.textContent;

// const array = checkaray.split("");

// const revarray = array.reverse();

// const concat = [];

// concat.concat(revarray);

// console.log(concat);
// console.log(array.sort());

// check.classList

const eml = document.getElementById("display");

const reverse = () => {
  const str = eml.innerText;

  let strReverse = " ";
  for (i = str.length - 1, str.length >= 0; i--; ) {
    strReverse = strReverse + str[i];
  }
  eml.innerText = strReverse;
  eml.classList.toggle("error");

  eml.style.fontSize = "5rem";
  //   console.log(str);
};
console.log(eml.classList);
