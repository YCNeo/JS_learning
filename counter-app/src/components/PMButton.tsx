import React, { ReactNode } from "react";

type Props = {
  value: number;
  onPlusClick: ReactNode;
  onMinusClick: ReactNode;
};

let className = "btn btn-secondary btn-sm m-2";

const isZero = (value: number) => (value === 0 ? "disabled" : "");

const PlusButton = ({ onPlusClick }: Props) => {
  return (
    <button type="button" className={className} onClick={() => onPlusClick}>
      +
    </button>
  );
};

const MinusButton = ({ value, onMinusClick }: Props) => {
  return (
    <button
      type="button"
      className={(className += isZero(value))}
      onClick={() => onMinusClick}
    >
      -
    </button>
  );
};

export type { Props };
export { PlusButton, MinusButton };
