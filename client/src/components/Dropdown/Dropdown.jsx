import React from "react";

const DropDown = (props) => {
  const autoClose = props.autoClose;
  const custom = props.custom;

  return (
    <div className="Dropdown">
      <div className="container">
        <select>
          <option value={console.log("fruit")}>fruit</option>
          <option value={console.log("VEGETABLES")}>VEGETABLES</option>
          <option value={console.log("albanian")}>albanian</option>
          <option value={console.log("empanadas")}>empanadas</option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;
