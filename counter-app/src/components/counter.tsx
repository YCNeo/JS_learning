import React, { useState } from "react";

const count = (value: number) => (value === 0 ? "ZERO" : value);

const Counter = () => {
  const [value, setValue] = useState(0);
//   const [arr, setSrr] = useState([0, 0, 0]);

  let className = "btn btn-secondary btn-sm m-2";

  return (
    <>
      <span className={getBadgeClass()}>{count(value)}</span>
      <button
        type="button"
        className={className}
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
      <button
        type="button"
        className={
          value === 0
            ? "btn btn-secondary btn-sm m-2 disabled"
            : "btn btn-secondary btn-sm m-2"
        }
        onClick={() => setValue(value - 1)}
      >
        -
      </button>
    </>
  );

  function getBadgeClass() {
    let classes = "badge m-2 text-bg-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }
};

export default Counter;
