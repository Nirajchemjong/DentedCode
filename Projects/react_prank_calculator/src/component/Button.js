import React from "react";

export const Button = ({ cls, label, func }) => {
  return (
    <div className={cls} onClick={() => func(label)}>
      {label}
    </div>
  );
};
