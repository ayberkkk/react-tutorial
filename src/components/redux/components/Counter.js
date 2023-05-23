import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const { counter } = useSelector((state) => state);
  return <div>{counter}</div>;
};

export default Counter;
