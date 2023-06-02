import React, { useState } from "react";
import { Names } from "./Names";
import { useDispatch } from "react-redux";
import { setDiplayFname } from "./DisplaySlice";
// import Display from "./Display";
export const Form = ({ receiveData }) => {
  const [FirstName, Fname] = useState({});
  const [LastName, Lname] = useState({});

  const dispatch = useDispatch();
  const showResults = (e) => {
    // const { value } = e.target;
    e.preventDefault();

    const DisplayObj = {
      FirstName,
      LastName,
    };

    dispatch(setDiplayFname(DisplayObj));
    // dispatch(setDisplayLname(LastName));
    //   setDisplayFname(FirstName); //upLifting data to parent
    //   setDisplayLname(LastName); //UpLifting data to Parent
  };
  return (
    <div>
      <center>
        <form
          action=''
          onSubmit={showResults}
        >
          <Names
            Fname={Fname}
            Lname={Lname}
          />
          <button>Submit</button>
        </form>

        {/* <Display FirstName={FirstName} LastName={LastName} />
         */}

        {/* <p>Your First name is and your last name is .</p> */}
      </center>
    </div>
  );
};
