import React from "react";

import styled from "styled-components";

const Input = (props) => {
  return (
    <Container>
      <StyledInput
        {...props}
        width={props.width}
        height={props.height}
        background={props.background}
        border={props.border}
        radius={props.radius}
        padding={props.padding}
      />
    </Container>
  );
};

export default Input;

const Container = styled.div``;

const StyledInput = styled.input`
  outline: none !important;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
`;
