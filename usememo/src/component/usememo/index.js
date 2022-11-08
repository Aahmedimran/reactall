import React from "react";
import { useState, useMemo } from "react";
const Memo = () => {

const [count, setCount] = useState(0)

  const norerander = useMemo(() => {
    return (
      <>
        <h1>hello world count : {count}</h1>
        
      </>
    );
  },[]);



  return (
    <>
    
<button onClick={()=>{setCount(count + 1)}} >norerander</button>
    {norerander}
      <h1>world {count}</h1>
     
    </>
  );
};

export default Memo;
