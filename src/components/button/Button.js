import React from "react";
import styled from "styled-components";

import { color as themeColor } from "theme";
import ButtonLoader from "components/loader/ButtonLoader";

const Button = ({
  height,
  width,
  btnText,
  disabled,
  borderRadius,
  bgColor,
  shadow,
  loading,
  color,
  border,
  fontWeight,
  onClick,
  margin,
  fontFamily,
  padding,
  ...props
}) => {
  return (
    <Btn
      {...props}
      height={height}
      width={width}
      disabled={disabled}
      bgColor={bgColor}
      color={color}
      border={border}
      borderRadius={borderRadius}
      shadow={shadow}
      padding={padding}
      fontFamily={fontFamily}
      margin={margin}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {loading ? (
        <ButtonLoader isSubmitting={loading} />
      ) : (
        <span>{btnText}</span>
      )}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  ${({
    height,
    width,
    borderRadius,
    shadow,
    bgColor,
    border,
    disabled,
    position,
    color,
    padding,
    fontWeight,
    fontFamily,
    margin,
  }) => {
    return `height : ${height};
    min-width: ${width};
    border-radius: ${borderRadius ? borderRadius : "5px"};
    box-shadow: ${shadow};
    background: ${disabled ? themeColor.fontLight : bgColor};
    border: ${border ? border : "none"};
    color: ${color ? color : themeColor.white};
    font-weight: ${fontWeight};
    font-family: Raleway;
    margin: ${margin};
    padding: ${padding};
    text-transform: uppercase;
    outline: none;
    transition: all 0.2s ease-in;
    &:hover{
      transform: scale(1.05);
    }
    `;
  }}
`;
