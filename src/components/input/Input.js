import React from "react";

import styled from "styled-components";

const Input = (props) => {
  return (
    <StyledInput
      {...props}
      width={props.width}
      height={props.height}
      background={props.background}
      border={props.border}
      radius={props.radius}
      padding={props.padding}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  outline: none !important;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
`;
