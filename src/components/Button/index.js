import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  icbCircleBorder18: "rounded-radius18",
};
const variants = {
  FillBlue500: "bg-blue_500 text-white_A700",
  FillBlack900: "bg-black_900 text-white_A700",
  icbOutlineBlue500: "bg-blue_500 border-blue_500 border-bw15 border-solid",
};
const sizes = {
  sm: "2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  md: "lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf(["RoundedBorder5", "icbCircleBorder18"]),
  variant: PropTypes.oneOf([
    "FillBlue500",
    "FillBlack900",
    "icbOutlineBlue500",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder5",
  variant: "icbOutlineBlue500",
  size: "",
};

export { Button };
