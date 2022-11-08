import React, { useRef } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
  const [data, setData] = useState("");
  const [eachdata, setEachdata] = useState([]);

  const clickHandle = (e) => {
    if(!data){  alert("plz fill the data") }
    else{ 
    const prevData = [...eachdata, data];
    setEachdata(prevData);
    setData("");
    }
  };

  const removeall = () => {
    setData("");
    setEachdata([]);
  };
const remove_specific = (index) =>{
    const remove_item = eachdata.filter((ele,inde) =>{
return index !== inde
    })
    setEachdata(remove_item)
}


   


  return (
    <>
      <>

        <label>Add Item</label>
        
        <input
          type="text"

         
          value={data}
          placeholder="Enter text"
          onChange={(e) => {
            setData(e.target.value);
            
          }}
        ></input>

        <Button variant="primary" type="submit" onClick={clickHandle} >
          add
        </Button>
        <br />
        <Button variant="primary" type="submit" onClick={removeall}>
          remove all
        </Button>
      </>
      <>
        {eachdata.map((ele,index) => {
          return (
            <>
              <div>
                <Button onClick={ ()=>{remove_specific(index)}}>delete</Button>
                {ele}
              </div>
              <div>

              </div>
            </>
          );
        })}
      </>
    </>
  );
};

export default TodoApp;
