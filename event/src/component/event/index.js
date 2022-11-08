import React from 'react'
import './index.css';


const clickHandler = () =>{
  alert("Thanks for your Click");

}

export const Event = () => {
  return (
    
    <>
    <button className="button" onClick={clickHandler}>Click</button>
    <button className="button" onClick={()=>{
      alert(" your are Clicked");
    }}>Clicked</button>
    
    </>
  )
}
export default Event;