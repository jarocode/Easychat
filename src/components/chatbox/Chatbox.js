import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import { color } from "theme";

const Chatbox = () => {
  return (
    <Container>
      <Div>
        {" "}
        <Typography fontFamily="Raleway">hello this is a new chat </Typography>
      </Div>
      <Typography fontFamily="Raleway" fontSize={"14px"}>
        {" "}
        9:00pm
      </Typography>
    </Container>
  );
};

export default Chatbox;

const Container = styled.div``;

const Div = styled.div`
  min-height: 2rem;
  min-width: 10rem;
  max-width: 30rem;
  background: ${color.brand1};
  padding: 1rem;
  color: ${color.white};
  border-radius: 0px 10px 10px 10px;
`;
