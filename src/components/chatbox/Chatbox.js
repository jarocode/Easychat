import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import { color } from "theme";

const Chatbox = ({ message, time, isUser }) => {
  return (
    <Container isUser={isUser}>
      <Div isUser={isUser}>
        <Typography fontFamily="Raleway">{message} </Typography>
      </Div>
      <Typography fontFamily="Raleway" fontSize={"15px"} fontWeight="500">
        {time}
      </Typography>
    </Container>
  );
};

export default Chatbox;

const Container = styled.div`
  order: ${(props) => (props.isUser ? 2 : 1)};
`;

const Div = styled.div`
  min-height: 2rem;
  min-width: 10rem;
  max-width: 30rem;
  background: ${(props) => (props.isUser ? color.brand1 : color.brand2)};
  padding: 1rem;
  color: ${(props) => (props.isUser ? color.white : color.brand1)};
  border-radius: 0px 10px 10px 10px;
`;
