import { useState } from "react";

type Props = {
  children: string;
  onClick: () => void;
};

const myColorList = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "link",
];

const getRandom = (number: number) => Math.floor(Math.random() * number);

const getColor = () => myColorList[getRandom(myColorList.length)];

const Button = ({ children, onClick }: Props) => {
  const [color, setColor] = useState("secondary");

  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => {
          onClick();
          setColor(getColor());
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
