import { useState } from "react";

type Props = {
  value: number;
  id: number;
  setValue(value: number): void;
  onDetections: () => void;
  children: (id: number) => void;
};

const Counter = ({ value, id, setValue, onDetections, children }: Props) => {
//   const [value, setValue] = useState(value);

  function classes(index: string): string {
    if (index === "+") return "btn btn-secondary m-2";
    else if (index === "-")
      return value === 0
        ? "btn btn-secondary m-2 disabled"
        : "btn btn-secondary m-2";
    else if (index === "0")
      return value === 0
        ? "badge rounded-pill text-bg-warning m-2"
        : "badge rounded-pill text-bg-primary m-2";
    else return "btn btn-danger m-2";
  }

  function click(tell: number): void {
    if (tell === 1) setValue(value + 1);
    else if (tell === -1) setValue(value - 1);
    onDetections();
  }

  return (
    <>
      <span className={classes("0")}>{value === 0 ? "ZERO" : value}</span>
      <button type="button" className={classes("+")} onClick={() => click(1)}>
        +
      </button>
      <button type="button" className={classes("-")} onClick={() => click(-1)}>
        -
      </button>
      <button
        type="button"
        className={classes("danger")}
        onClick={() => {
          children(id);
          onDetections();
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
