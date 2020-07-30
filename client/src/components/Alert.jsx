import React from "react";

const Alert = ({ type, message }) => {
  switch (type) {
    case "primary":
      return (
        <div class="alert alert-primary" role="alert">
          {message}
        </div>
      );
    case "success":
      return (
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      );
    case "danger":
        return (
            <div class="alert alert-danger" role="alert">
              {message}
            </div>
          );
    default:
        return (
            <div class="alert alert-dark" role="alert">
              {message}
            </div>
          );
  }
};
export default Alert;
