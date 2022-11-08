import React from "react";
import { useRef, useState } from "react";

const Useraf = () => {
  const [data, setData] = useState('');

  const firstName = useRef(null);
  const secondName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const submitFrom = (e) => {
    e.preventDefault();
    if (
      !firstName.current.value ||
      !secondName.current.value ||
      !email.current.value ||
      !password.current.value
    ) {
      alert("please fill");
    } else {
      setData(`${firstName.current.value} ${secondName.current.value}  ${email.current.value} ${password.current.value} login seccesful`);
      
      // setData(true);
      console.log(firstName.current.value);
      console.log(secondName.current.value);
      console.log(email.current.value);
      console.log(password.current.value);
    }
  };

  return (
    <>
      <div>
        <form action="">
          <label>First Name</label>
          <input type="text" id="firstName" ref={firstName} />
          <label>Second Name</label>
          <input type="text" id="secondName" ref={secondName} />
          <label>enter a Email</label>
          <br />

          <input type="email" id="email" name="email" ref={email}></input>
          <br />
          <label>enter a Password</label>
          <br />
          <input type="password" id="password" ref={password} />
          <br />
          <button onClick={submitFrom}>submit</button>
        </form>
      </div>
      <div>{data}</div>
    </>
  );
};

export default Useraf;
