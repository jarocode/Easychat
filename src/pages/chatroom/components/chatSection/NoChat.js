import React from "react";
import styled from "styled-components";
import { AiOutlineWechat } from "react-icons/ai";
import { Typography } from "@mui/material";

import { color } from "theme";

const NoChat = () => {
  return (
    <Container>
      <AiOutlineWechat color={color.brand1} size="12rem" />
      <Typography
        fontFamily={"Raleway"}
        fontSize="18px"
        align="center"
        color={color.brand1}
      >
        Oops!...It seems you are the first in the room...type a message to
        kickstart a conversation
      </Typography>
    </Container>
  );
};

export default NoChat;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
