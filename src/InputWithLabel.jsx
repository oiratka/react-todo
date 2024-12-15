import React, { useRef, useEffect } from "react";

const InputWithLabel = ({ id, children, value, onChange }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <label htmlFor="{id}">{children}</label>
      <input
        ref={inputRef}
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

export default InputWithLabel;
