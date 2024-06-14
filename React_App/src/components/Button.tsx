import { useState } from "react";
import Alert from "./Alert";

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
  const [isAlert, setIsAlert] = useState(false);

  return (
    <>
      {isAlert && (
        <Alert onClose={() => setIsAlert(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => {
          onClick();
          setColor(getColor());
          setIsAlert(true);
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
