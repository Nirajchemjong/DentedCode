import React from "react";

export default function Display({ setDisplayFname, setDisplayLname }) {
  return (
    <div>
      <p>
        {setDisplayFname} {setDisplayLname}
      </p>
    </div>
  );
}
