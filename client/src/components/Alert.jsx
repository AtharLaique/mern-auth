import React from "react";

const Alert = ({ type, message }) => {
  switch (type) {
    case "primary":
      return (
        <div className="alert alert-primary" role="alert">
          {message}
        </div>
      );
    case "success":
      return (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      );
    case "danger":
        return (
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          );
    default:
        return (
            <div className="alert alert-dark" role="alert">
              {message}
            </div>
          );
  }
};
export default Alert;
