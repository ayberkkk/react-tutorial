import React, { useRef, forwardRef } from "react";
import { Input } from "reactstrap";

const InputFocus = forwardRef((props, ref) => {
  return <Input ref={ref} {...props} />;
});

const UseReForward = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <InputFocus type="text" innerRef={inputRef} />
      <button className="btn btn-primary" onClick={focusInput}>
        Focus
      </button>
    </div>
  );
};

export default UseReForward;
