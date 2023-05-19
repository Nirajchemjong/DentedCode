// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Niraj, { Title, SubTitle } from "./Title";
import { Form } from "./Form";
import { UpdateRealData } from "./UpdateRealData";

function App() {
  const [counter, SetCounter] = useState(0);

  const [UpdatedData, setDisplay] = useState("hello world from Uplifting");

  // const [counter, test] = useState();
  // here counter is just a variable with value 0 and SetCounter is a function where counter is store with value and the process is return in fucntion increase
  // Note: --- As well write you JS before return and inside function.
  const increase = () => {
    SetCounter(counter + 1);
  };

  const decrease = () => {
    SetCounter(counter - 1);
  };

  return (
    <div className="App">
      <Title />
      <Niraj />
      <SubTitle />
      <UpdateRealData UpdatedData={UpdatedData} />
      <p>{counter}</p>

      <button onClick={increase}>++</button>
      <button onClick={decrease}>--</button>

      {/* <SubTitle />
      <Niraj />
      <p> data in real time</p>
      <form action="">
        <p>
          <input type="text"></input>
        </p>

        <p>
          <button>Submit</button>
        </p>
      </form>

      <p>show submitted data</p> */}

      {/* <Mycomm />
      <Mycom />
      <Pawan /> */}

      <Form setDisplay={setDisplay} />
    </div>
  );
}

export default App;
