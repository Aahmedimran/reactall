import React from "react";
import { useState } from "react";
import "./index.css";

import * as math from "mathjs";

const Calculater = () => {
  const [value, setvalue] = useState("");

  return (
    <>
      <div className="main-container">
        <h1>Calculater</h1>

        <div className="input">
          <input
            type="text"
            autoComplete="disabled"
            min="1"
            value={value}
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          />
        </div>

        <div className="btn">
          <button
            value="1"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            1
          </button>
          <button
            value="2"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            2
          </button>
          <button
            value="3"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            3
          </button>
          <button
            value="4"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            4
          </button>
          <button
            value="5"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            5
          </button>
          <button
            value="6"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            6
          </button>
          <button
            value="7"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            7
          </button>
          <button
            value="8"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            8
          </button>
          <button
            value="9"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            9
          </button>
          <button
            value="0"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            0
          </button>

          <button
            value="00"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            00
          </button>

          <button
            value="+"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            +
          </button>
          <button
            value="-"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            -
          </button>
          <button
            value="*"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            x
          </button>
          <button
            value="/"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            ÷
          </button>
          <button
            value="%"
            onClick={(e) => {
              setvalue(value + e.target.value);
            }}
          >
            %
          </button>
          <button
            value="AC"
            onClick={(e) => {
              setvalue("");
            }}
          >
            AC
          </button>
          <button
            value="C"
            onClick={(e) => {
              setvalue(value.slice(0, -1));
            }}
          >
            C
          </button>
          <button
            value="="
            onClick={(e) => {
              try {
                setvalue(math.evaluate(value).toString());
              } catch {
                setvalue("Error");
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculater;
