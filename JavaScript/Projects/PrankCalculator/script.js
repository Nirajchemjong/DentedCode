//first grab all the btns

//add event listener

const btns = document.querySelectorAll(".btn");
console.log(btns);

//display element

const displayElm = document.querySelector(".display");

//global variable

let strToDisplay = "";
const operators = ["%", "/", "*", "+", "-"];
let lastOperator = "";
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const val = btn.innerHTML;
    // console.log(val);

    if (operators.includes(val) && !strToDisplay.length) return;

    if (operators.includes(val)) {
      lastOperator = val;
      const lastChar = strToDisplay.slice(-1);
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }
    // if (strToDisplay.includes(".")) {
    //   let checkarray = check.unshift(strToDisplay);
    //   console.log(checkarray);
    // }

    if (val === "AC") {
      strToDisplay = "";
      lastOperatorIndex = "";
      return display();
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (val === "=") {
      const lastChar = strToDisplay.slice(-1);

      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }

      return total();
    }

    if (val == ".") {
      const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator);

      const lastNumberset = strToDisplay.slice(lastOperatorIndex);
      console.log(lastOperatorIndex, lastNumberset);

      //   if (lastOperatorIndex.includes(".")) return;
      if (lastNumberset.includes(".")) {
        return;
      }
      if (!lastOperator && strToDisplay.includes(".")) return;
    }
    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.00";
};

const total = () => {
  const pk = randomNumber();
  if (pk) {
    displayElm.style.background = "red";
    displayElm.style.color = "white";
    displayElm.classList.toggle("prank");
    // displayElm.style.
  }
  const ttl = eval(strToDisplay) + pk;
  display(ttl);
  strToDisplay = ttl.toString();
};

const randomNumber = () => {
  const num = Math.round(Math.random() * 10);
  return num <= 3 ? num : 0;
};
