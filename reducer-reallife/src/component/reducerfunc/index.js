import React from "react";
import { useReducer } from "react";
import reducer from './../../reducer/reducer'
const Simplereduceruse = () => {

  



let intialstate = {

  name :'',
  count: 0,
  updateOnly:'updateOnly'
}



  const [state, dispatch] = useReducer(reducer, intialstate)

  return (
    <>
      <p>{state.name}</p>
      <button onClick={() => dispatch({ type: "updateText" })}>
        Update Text
      </button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "updateCount" })}>
        Update count
      </button>
      <p>{state.updateOnly}</p>
      <button onClick={() => dispatch({ type: "updateOnly" })}>
        Update only
      </button>
      
    </>
  );
};

export default Simplereduceruse;
