// In this file we will be using dispatch to carry data to the slice files and dispatch calls function of actions.

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setDisplay } from "./ResultSlice";

export const Form = () => {
  const [inputValue, setinputValue] = useState({});
  // this is form form

  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // const { value } = e.target;
    dispatch(setDisplay(inputValue));
  };

  //this is from btn
  const handleOnClick = (e) => {
    // const { value } = e.target;
    //     console.log(e);
    // console.log(inputValue);
  };

  //   This is from input
  const handleOnChange = (e) => {
    const { value } = e.target;
    setinputValue(value);
  };

  return (
    <div>
      <form
        action=''
        onSubmit={handleOnSubmit}
      >
        <center>
          <input
            type='text'
            placeholder='Enter any thing you like'
            style={{ marginTop: "6rem", padding: "2rem" }}
            onChange={handleOnChange}
          />
        </center>
        <center>
          <button
            type='submit'
            style={{
              marginTop: "2rem",
              padding: "2rem",
              borderRadius: "0.6rem",
              width: "13rem",
              border: "none",
            }}
            onClick={handleOnClick}
          >
            Submit
          </button>
        </center>
      </form>
    </div>
  );
};
