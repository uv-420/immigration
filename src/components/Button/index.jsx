import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[30px]",
};
const variants = {
  fill: {
    white_A700_19: "bg-white-A700_19",
    white_A700: "bg-white-A700",
    light_green_A700_19: "bg-light_green-A700_19",
    light_green_50_01: "bg-light_green-50_01 text-gray-600",
    light_green_A700: "bg-light_green-A700 text-white-A700",
  },
  outline: {
    white_A700: "border-white-A700 border border-solid text-white-A700",
    light_green_A700: "border-light_green-A700 border border-solid text-teal-900",
    gray_300: "border-gray-300 border border-solid text-gray-600",
  },
};
const sizes = {
  "2xl": "h-[51px] px-3.5",
  "8xl": "h-[96px] px-[35px] text-3xl",
  "7xl": "h-[70px] px-5 text-[22px]",
  lg: "h-[44px] px-[23px] text-base",
  xl: "h-[50px] px-[35px] text-sm",
  "3xl": "h-[54px] px-[7px]",
  "4xl": "h-[60px] px-[25px] text-[22px]",
  xs: "h-[30px] px-[7px]",
  md: "h-[40px] px-[11px]",
  sm: "h-[40px] px-[9px] text-base",
  "6xl": "h-[60px] px-[29px] text-sm",
  "5xl": "h-[60px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "5xl",
  color = "light_green_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["2xl", "8xl", "7xl", "lg", "xl", "3xl", "4xl", "xs", "md", "sm", "6xl", "5xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700_19",
    "white_A700",
    "light_green_A700_19",
    "light_green_50_01",
    "light_green_A700",
    "gray_300",
  ]),
};

export { Button };
