import React from "react";

const Slider = ({ min, max, step, label, onChangeValue, value }) => {
  return (
    <div>
      <div>
        <label>{label || ""}</label>
      </div>
      <input
        type="range"
        min={min || 0}
        max={max || 100}
        value={value}
        step={step || 1}
        onChange={onChangeValue}
        className="slider"
        id="myRange"
      />
      <div>
        <p>{value}</p>
      </div>
    </div>
  );
};

export { Slider };
