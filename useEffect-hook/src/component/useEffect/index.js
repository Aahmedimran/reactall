import React from "react";
import { useEffect, useState } from "react";

const Useeffectcomponent = () => {
  // create useState
  const [data, setdata] = useState([]);

  //function
  const getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setdata(await response.json());
    console.log(data);
  };

  //useeffect

 useEffect(() => {
    getData();
  }); 

//   use map for render array element
  return (
    <>
      {data.map((ele) => {
        return (
        <>
          <h1>{ele.id}</h1>
          <h1>{ele.title}</h1>
          <h1>{ele.userId}</h1>
        </>
        )
      })}
    </>
  );
};

export default Useeffectcomponent;
