import React from 'react';
import "./error-button.css";

export const ErrorButton = ({handleClick, label}) => (
  <button className="btn-error" onClick={handleClick}>
    {label}
  </button>
);
