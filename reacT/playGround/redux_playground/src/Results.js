// this is the file where we going to render and display the data from redux

// this file need to be connect with store.js file or with whatever name you have provided

// we will use UseSelector of redux to import state from store file, this file consists of reducers data from ReducerSlice files

//finally to display them we will illerate them using map or depending with your requirements.
import React from "react";
import { useSelector } from "react-redux";

export const Results = () => {
  const dataForm = useSelector((state) => state.dataForm);

  return (
    <div>
      <ul>
        {dataForm.form.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
