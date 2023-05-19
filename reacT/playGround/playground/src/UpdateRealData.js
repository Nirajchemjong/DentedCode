// import React from "react";

// export const UpdateRealData = (UpdatedData) => {
//   return <div>{UpdatedData}</div>;
// };

// ======================starting bottom this as a props =================
// import React from "react";

// export default function UpdateRealData(props) {
//   //don't forget to keep variables on curly brackets. {}  keeping {UpdatedData} is deStructuring of Props.
//   //   console.log(UpdatedData);
//   return <div>{props.UpdatedData}</div>;
// }

// ========================= bottom code is making them as a sibling of Form and child of app.js to uplift data from Form.js =========

import React from "react";

export const UpdateRealData = ({ UpdatedData }) => {
  return <div>{UpdatedData}</div>;
};
