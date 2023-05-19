import React, { useState } from "react";
import { Names } from "./Names";
// import Display from "./Display";
export const Form = ({ setDisplayFname, setDisplayLname }) => {
  const [FirstName, Fname] = useState("first Name");
  const [LastName, Lname] = useState("Last Name");

  const showResults = (e) => {
    // const { value } = e.target;
    e.preventDefault();
    setDisplayFname(FirstName); //upLifting data to parent
    setDisplayLname(LastName); //UpLifting data to Parent
  };
  return (
    <div>
      <center>
        <form action="" onSubmit={showResults}>
          <Names Fname={Fname} Lname={Lname} />
          <button>Submit</button>
        </form>

        {/* <Display FirstName={FirstName} LastName={LastName} />
         */}

        {/* <p>Your First name is and your last name is .</p> */}
      </center>
    </div>
  );
};
