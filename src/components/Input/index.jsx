"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[29px]",
};
const variants = {
  fill: {
    light_green_50_01: "bg-light_green-50_01",
    gray_900_03: "bg-gray-900_03 text-white-A700",
    white_A700: "bg-white-A700 text-teal-900_99",
  },
  outline: {
    gray_300: "border-gray-300 border border-solid",
    teal_900_3f: "border-teal-900_3f border border-solid text-teal-900_99",
  },
};
const sizes = {
  xs: "h-[50px] pl-5 pr-[35px] text-base",
  sm: "h-[60px] px-5 text-base",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <label
          className={`${className} flex items-center justify-center cursor-text text-base  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </label>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["light_green_50_01", "gray_900_03", "white_A700", "gray_300", "teal_900_3f"]),
};

export { Input };
