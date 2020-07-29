import React from "react";

const Input = ({label,type,placeholder,id,name,onChangeValue}) => {
  return (
    <div className="form-group">
      <label >{label}</label>
      <input
        type={type || 'text'}
        className="form-control"
        id={id || "textFiled"}
        name={name || 'textFiled'}
        placeholder={placeholder || "Enter Your Text  . . . "}
        onChange={onChangeValue}
      />
    </div>
  );
};
export default Input;
