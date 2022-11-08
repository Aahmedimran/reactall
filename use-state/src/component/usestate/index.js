import React from "react";

import { useState } from "react";

const Counter = () => {

  // use states created
  const [count, setCount] = useState(0);
  const [update, setupdate] = useState("update");
  const [noupdate, setnoupdate] = useState(false);


  const clickHandler = () => {
    setCount(count + 1);
  };

  //  one time only
  const clickHandlers = () => {
    setupdate(`${update} aaaaaaaa`);

    setnoupdate(true);
  };

  return (
    <div>
      <p>Counter : {count} </p>
      <p>word : {update}</p>
      <button onClick={clickHandler}>sum</button>
      <button onClick={clickHandlers} disabled={noupdate}>
        update
      </button>
    </div>
  );
};

export default Counter;
