import React from "react";

const Input = ({label,type,placeholder,id,name}) => {
  return (
    <div class="form-group">
      <label for="exampleInputEmail1">{label}</label>
      <input
        type={type || 'text'}
        class="form-control"
        id={id || "textFiled"}
        name={name || 'textFiled'}
        placeholder={placeholder || "Enter Your Text  . . . "}
     
      />
    </div>
  );
};
export default Input;
