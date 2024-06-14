"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[20px]",
};
const variants = {
  tarOutlineTeal9003f: "!border-teal-900_3f border border-solid",
  tarWhite: "bg-white-A700",
  tarOutlineGray300: "!border-gray-300 border border-solid bg-white-A700",
};
const sizes = {
  sm: "h-[167px] p-5 text-base",
  xs: "h-[130px] p-5 text-base",
};

const TextArea = React.forwardRef(
  (
    { className = "", name = "", placeholder = "", shape, size = "xs", variant = "tarWhite", onChange, ...restProps },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${(shape && shapes[shape]) || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["tarOutlineTeal9003f", "tarWhite", "tarOutlineGray300"]),
};

export { TextArea };
