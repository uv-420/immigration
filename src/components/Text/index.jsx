import React from "react";

const sizes = {
  xs: "text-[11px] font-normal",
  lg: "text-3xl font-normal md:text-[28px] sm:text-[26px]",
  s: "text-base font-normal",
  md: "text-xl font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-teal-900 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
