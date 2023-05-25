import React, { useState } from "react";
import { Form } from "./Form";
import Display from "./Display";
const App = () => {
  const [resultFname, setDisplayFname] = useState("First name");
  const [resultLname, setDisplayLname] = useState("Last name");

  return (
    <div>
      <center>
        <h1>Form </h1>
        <Form
          setDisplayFname={setDisplayFname}
          setDisplayLname={setDisplayLname}
        />
        <Display setDisplayFname={resultFname} setDisplayLname={resultLname} />
      </center>
    </div>
  );
};

export default App;
