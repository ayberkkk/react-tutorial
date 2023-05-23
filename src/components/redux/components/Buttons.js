import React from "react";
import { useDispatch } from "react-redux";
import { increase, decrease } from "../stores/actions/counter";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn btn-outline-success"
        onClick={() => dispatch(increase())}
      >
        +
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch(decrease())}
      >
        -
      </button>
    </div>
  );
};

export default Buttons;
