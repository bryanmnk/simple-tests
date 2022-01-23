import React from "react";
import ReactSlider from "react-slider";

function Input({ id, value, min, max, step, changeHandler, style }) {
  return (
    <div className="input__wrapper">
      <ReactSlider
        id={id}
        className={style}
        thumbClassName="slider__thumb"
        trackClassName="slider__track"
        min={min}
        max={max}
        onChange={changeHandler}
        value={value}
        step={step}
      />
    </div>
  );
}

export default Input;
