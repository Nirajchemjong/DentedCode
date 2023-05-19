import React, { useState } from "react";
import RealData from "./RealData";
import UpdateRealData from "./UpdateRealData";
export const Form = ({ setDisplay }) => {
  const [userValue, setValue] = useState("hello world"); // to display on live

  //   const [display, setDisplay] = useState("Hello Display ");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setValue(value);
  };

  //writing handleOnSubmit fucntion

  const handleOnSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setDisplay(userValue);
  };
  return (
    <div>
      <RealData name="niraj" lname="chemjong" data={userValue} />
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
        <button>Submit</button>
      </form>
      {/* <UpdateRealData UpdatedData={display} /> */}
    </div>
  );
};
