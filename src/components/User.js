// Function base component
import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);

  // using multiple state varibles in function
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count 2 ={count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h3>Email: abhishek.madiwale@gmail.com</h3>
    </div>
  );
};

export default User;
