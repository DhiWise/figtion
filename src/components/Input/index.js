import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcFillGray800: "bg-gray_800",
  OutlineGray401: "border border-gray_401 border-solid",
  OutlineGray4011_2: "bg-gray_100 border border-gray_401 border-solid",
};
const shapes = {
  srcRoundedBorder5: "rounded-radius5",
  RoundedBorder5: "rounded-radius5",
};
const sizes = {
  smSrc: "2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  sm: "lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px]",
  md: "xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] lg:pt-[14px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[21px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder5", "RoundedBorder5"]),
  variant: PropTypes.oneOf([
    "srcFillGray800",
    "OutlineGray401",
    "OutlineGray4011_2",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder5",
  variant: "srcFillGray800",
  size: "sm",
};

export { Input };
