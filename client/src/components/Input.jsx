import React from "react";

const Input = ({label,type,placeholder,id,name}) => {
  return (
    <div class="form-group">
      <label for="exampleInputEmail1">{label}</label>
      <input
        type={type}
        class="form-control"
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
