import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({ id, children, value, onChange }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  },);

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

InputWithLabel.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
children: PropTypes.node.isRequired,
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
}
export default InputWithLabel;
