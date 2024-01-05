import React from "react";

const Rolldown = (props) => {
  const options = props.options;
  console.log(options);
  return (
    <div className="Dropdown">
      <div className="container">
        <select>
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Rolldown;
