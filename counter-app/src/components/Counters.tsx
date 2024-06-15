import React, { useState } from "react";
import Counter from "./Counter";

type CounterList = {
  id: number;
  value: number;
};

const Counters = () => {
  const [list, setList] = useState<CounterList[]>([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const [navbar, setNavbar] = useState(0);

  function onDelete(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  function reset() {
    let newList = list;
    newList.map((item) => (item.value = 0));
    setList(newList);
  }

  function countCart() {
    const newList = list.filter((item) => item.value !== 0);
    setNavbar(newList.length);
  }

  return (
    <>
      <h1>
        Navbar<span className="badge text-bg-secondary m-2">{navbar}</span>
      </h1>
      <button type="button" className="btn btn-primary m-2" onClick={reset}>
        Reset
      </button>
      {list.map((item) => (
        <div key={item.id}>
          <Counter item={item} setValue={setList} onDetections={countCart}>
            {onDelete}
          </Counter>
        </div>
      ))}
    </>
  );
};

export default Counters;
