import React from "react";
import { useState } from "react";

const Users = [
  {
    name: "Ahmed",
  },
  {
    name: "hammad",
  },

  {
    name: "mohsin",
  },
  {
    name: "irfan",
  },
];

const Filter = () => {
  const [data, setdata] = useState("");

  // console.log(Users.filter(user=>user.name.toLowerCase().includes("ah")))
  console.log(data);

  return (
    data===null ? <div className="dd">sss</div> :  <div>
    <label>Name</label>
    <input
      type="text"
      className="search"
      placeholder="Username"
      aria-label="Username"
      onChange={(e) => setdata(e.target.value)}
    />
  
    <ul className="ckassname">
      {Users.filter((user) => user.name.toLowerCase().includes(data))
        .map((user) => (
          <li>{user.name}</li>
        ))}
    </ul>
  </div>
  );
};

export default Filter;
