import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const data = useSelector((state) => state.data);
  console.log(data.resultFname);

  return (
    <div>
      <ul>
        {data.resultFname.map((item) => (
          <li>
            {item.FirstName} {item.LastName}
          </li>
          // <li></li>
        ))}
      </ul>
    </div>
  );
}