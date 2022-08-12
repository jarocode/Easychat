import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import Input from "components/input/Input";
import Button from "components/button/Button";
import { color } from "theme";

const ChatInput = () => {
  return (
    <Container>
      <Input
        height="4rem"
        width="80%"
        radius="2rem"
        border="none"
        placeholder="Type a message"
        padding="0 1rem"
        background={color.brand2}
      />
      <Button
        bgColor={color.brand3}
        btnText={
          <Typography
            fontWeight={"bold"}
            fontFamily="Raleway"
            fontSize={"14px"}
            letterSpacing={0.7}
          >
            Send
          </Typography>
        }
        height="4rem"
        width="4rem"
        borderRadius={"50%"}
      />
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  width: 100%;
  position: sticky;
  display: flex;
  gap: 1rem;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  height: 8rem;
  background: ${color.white};
`;
