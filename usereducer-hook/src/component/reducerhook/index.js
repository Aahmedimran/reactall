import React from "react";
import { useReducer,  } from "react";


// component
const Reducerhook = () => {
    // reducer function
    const first = (state, action) => {
    if (action.type === "increement") {
    return(state + 1)  ;
    } else if (action.type === "decrement") {
        return(state - 1);
    }else if (action.type === "reset") {
        return(state - state);
    }
};

const [state, dispatch] = useReducer(first, 0);

  return (
    <>
      <p>count : {state}</p>
      <button
        onClick={() => {
          dispatch({ type: "increement" });
        }}
      >
        increement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>


    </>
  );
};

export default Reducerhook;
