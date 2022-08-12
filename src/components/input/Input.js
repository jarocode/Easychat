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
        radius={props.radius}
      />
    </Container>
  );
};

export default Input;

const Container = styled.div``;

const StyledInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
`;
